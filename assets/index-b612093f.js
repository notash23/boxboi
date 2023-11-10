(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
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
 */const wv=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},Mb=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],a=i[e++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Av={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,c=l?i[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),n.push(e[u],e[h],e[f],e[d])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(wv(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Mb(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],a=r<i.length?e[i.charAt(r)]:0;++r;const c=r<i.length?e[i.charAt(r)]:64;++r;const h=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new Rb;const f=s<<2|a>>4;if(n.push(f),c!==64){const d=a<<4&240|c>>2;if(n.push(d),h!==64){const _=c<<6&192|h;n.push(_)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Rb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cb=function(i){const t=wv(i);return Av.encodeByteArray(t,!0)},fh=function(i){return Cb(i).replace(/\./g,"")},Ib=function(i){try{return Av.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Pb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Db=()=>Pb().__FIREBASE_DEFAULTS__,Lb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i={}.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Nb=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Ib(i[1]);return t&&JSON.parse(t)},Mv=()=>{try{return Db()||Lb()||Nb()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ob=i=>{var t,e;return(e=(t=Mv())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},Rv=i=>{const t=Ob(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Cv=()=>{var i;return(i=Mv())===null||i===void 0?void 0:i.config};/**
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
 */class Ub{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function Iv(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i),a="";return[fh(JSON.stringify(e)),fh(JSON.stringify(o)),a].join(".")}function kb(){try{return typeof indexedDB=="object"}catch{return!1}}function Fb(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const Bb="FirebaseError";class Oo extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Bb,Object.setPrototypeOf(this,Oo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pv.prototype.create)}}class Pv{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?Vb(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Oo(r,a,n)}}function Vb(i,t){return i.replace(zb,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const zb=/\{\$([^}]+)}/g;function Qd(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(Qg(s)&&Qg(o)){if(!Qd(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function Qg(i){return i!==null&&typeof i=="object"}/**
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
 */function gr(i){return i&&i._delegate?i._delegate:i}class Na{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xs="[DEFAULT]";/**
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
 */class Hb{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Ub;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Wb(t))try{this.getOrInitializeService({instanceIdentifier:Xs})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=Xs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xs){return this.instances.has(t)}getOptions(t=Xs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Gb(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Xs){return this.component?this.component.multipleInstances?t:Xs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gb(i){return i===Xs?void 0:i}function Wb(i){return i.instantiationMode==="EAGER"}/**
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
 */class Xb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Hb(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ee||(Ee={}));const jb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},qb=Ee.INFO,Yb={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},$b=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=Yb[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dv{constructor(t){this.name=t,this._logLevel=qb,this._logHandler=$b,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ee))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...t),this._logHandler(this,Ee.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...t),this._logHandler(this,Ee.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...t),this._logHandler(this,Ee.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...t),this._logHandler(this,Ee.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...t),this._logHandler(this,Ee.ERROR,...t)}}const Kb=(i,t)=>t.some(e=>i instanceof e);let Jg,t_;function Zb(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qb(){return t_||(t_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lv=new WeakMap,Jd=new WeakMap,Nv=new WeakMap,Uf=new WeakMap,pm=new WeakMap;function Jb(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(ps(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Lv.set(e,i)}).catch(()=>{}),pm.set(t,i),t}function tw(i){if(Jd.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Jd.set(i,t)}let tp={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return Jd.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Nv.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ps(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function ew(i){tp=i(tp)}function nw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(kf(this),t,...e);return Nv.set(n,t.sort?t.sort():[t]),ps(n)}:Qb().includes(i)?function(...t){return i.apply(kf(this),t),ps(Lv.get(this))}:function(...t){return ps(i.apply(kf(this),t))}}function iw(i){return typeof i=="function"?nw(i):(i instanceof IDBTransaction&&tw(i),Kb(i,Zb())?new Proxy(i,tp):i)}function ps(i){if(i instanceof IDBRequest)return Jb(i);if(Uf.has(i))return Uf.get(i);const t=iw(i);return t!==i&&(Uf.set(i,t),pm.set(t,i)),t}const kf=i=>pm.get(i);function rw(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),a=ps(o);return n&&o.addEventListener("upgradeneeded",l=>{n(ps(o.result),l.oldVersion,l.newVersion,ps(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sw=["get","getKey","getAll","getAllKeys","count"],ow=["put","add","delete","clear"],Ff=new Map;function e_(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Ff.get(t))return Ff.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=ow.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||sw.includes(e)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),r&&l.done]))[0]};return Ff.set(t,s),s}ew(i=>({...i,get:(t,e,n)=>e_(t,e)||i.get(t,e,n),has:(t,e)=>!!e_(t,e)||i.has(t,e)}));/**
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
 */class aw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(lw(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function lw(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ep="@firebase/app",n_="0.9.22";/**
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
 */const To=new Dv("@firebase/app"),cw="@firebase/app-compat",uw="@firebase/analytics-compat",hw="@firebase/analytics",fw="@firebase/app-check-compat",dw="@firebase/app-check",pw="@firebase/auth",mw="@firebase/auth-compat",gw="@firebase/database",_w="@firebase/database-compat",yw="@firebase/functions",vw="@firebase/functions-compat",xw="@firebase/installations",Ew="@firebase/installations-compat",Tw="@firebase/messaging",Sw="@firebase/messaging-compat",bw="@firebase/performance",ww="@firebase/performance-compat",Aw="@firebase/remote-config",Mw="@firebase/remote-config-compat",Rw="@firebase/storage",Cw="@firebase/storage-compat",Iw="@firebase/firestore",Pw="@firebase/firestore-compat",Dw="firebase",Lw="10.5.2";/**
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
 */const np="[DEFAULT]",Nw={[ep]:"fire-core",[cw]:"fire-core-compat",[hw]:"fire-analytics",[uw]:"fire-analytics-compat",[dw]:"fire-app-check",[fw]:"fire-app-check-compat",[pw]:"fire-auth",[mw]:"fire-auth-compat",[gw]:"fire-rtdb",[_w]:"fire-rtdb-compat",[yw]:"fire-fn",[vw]:"fire-fn-compat",[xw]:"fire-iid",[Ew]:"fire-iid-compat",[Tw]:"fire-fcm",[Sw]:"fire-fcm-compat",[bw]:"fire-perf",[ww]:"fire-perf-compat",[Aw]:"fire-rc",[Mw]:"fire-rc-compat",[Rw]:"fire-gcs",[Cw]:"fire-gcs-compat",[Iw]:"fire-fst",[Pw]:"fire-fst-compat","fire-js":"fire-js",[Dw]:"fire-js-all"};/**
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
 */const dh=new Map,ip=new Map;function Ow(i,t){try{i.container.addComponent(t)}catch(e){To.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function rc(i){const t=i.name;if(ip.has(t))return To.debug(`There were multiple attempts to register component ${t}.`),!1;ip.set(t,i);for(const e of dh.values())Ow(e,i);return!0}function Ov(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}/**
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
 */const Uw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ms=new Pv("app","Firebase",Uw);/**
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
 */class kw{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Na("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const Uv=Lw;function kv(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:np,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw ms.create("bad-app-name",{appName:String(r)});if(e||(e=Cv()),!e)throw ms.create("no-options");const s=dh.get(r);if(s){if(Qd(e,s.options)&&Qd(n,s.config))return s;throw ms.create("duplicate-app",{appName:r})}const o=new Xb(r);for(const l of ip.values())o.addComponent(l);const a=new kw(e,n,o);return dh.set(r,a),a}function Fv(i=np){const t=dh.get(i);if(!t&&i===np&&Cv())return kv();if(!t)throw ms.create("no-app",{appName:i});return t}function gs(i,t,e){var n;let r=(n=Nw[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),To.warn(a.join(" "));return}rc(new Na(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Fw="firebase-heartbeat-database",Bw=1,sc="firebase-heartbeat-store";let Bf=null;function Bv(){return Bf||(Bf=rw(Fw,Bw,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore(sc)}}}).catch(i=>{throw ms.create("idb-open",{originalErrorMessage:i.message})})),Bf}async function Vw(i){try{return await(await Bv()).transaction(sc).objectStore(sc).get(Vv(i))}catch(t){if(t instanceof Oo)To.warn(t.message);else{const e=ms.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});To.warn(e.message)}}}async function i_(i,t){try{const n=(await Bv()).transaction(sc,"readwrite");await n.objectStore(sc).put(t,Vv(i)),await n.done}catch(e){if(e instanceof Oo)To.warn(e.message);else{const n=ms.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});To.warn(n.message)}}}function Vv(i){return`${i.name}!${i.options.appId}`}/**
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
 */const zw=1024,Hw=30*24*60*60*1e3;class Gw{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xw(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=r_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Hw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=r_(),{heartbeatsToSend:e,unsentEntries:n}=Ww(this._heartbeatsCache.heartbeats),r=fh(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function r_(){return new Date().toISOString().substring(0,10)}function Ww(i,t=zw){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),s_(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),s_(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Xw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kb()?Fb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return i_(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return i_(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function s_(i){return fh(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function jw(i){rc(new Na("platform-logger",t=>new aw(t),"PRIVATE")),rc(new Na("heartbeat",t=>new Gw(t),"PRIVATE")),gs(ep,n_,i),gs(ep,n_,"esm2017"),gs("fire-js","")}jw("");var qw="firebase",Yw="10.5.2";/**
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
 */gs(qw,Yw,"app");/**
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
 */const zv="firebasestorage.googleapis.com",Hv="storageBucket",$w=2*60*1e3,Kw=10*60*1e3;/**
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
 */class yn extends Oo{constructor(t,e,n=0){super(Vf(t),`Firebase Storage: ${e} (${Vf(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yn.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Vf(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pn;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pn||(pn={}));function Vf(i){return"storage/"+i}function Gv(){const i="An unknown error occurred, please check the error payload for server response.";return new yn(pn.UNKNOWN,i)}function Zw(i){return new yn(pn.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}function Qw(i){return new yn(pn.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Jw(){const i="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new yn(pn.UNAUTHENTICATED,i)}function tA(){return new yn(pn.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eA(i){return new yn(pn.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")}function nA(){return new yn(pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iA(){return new yn(pn.CANCELED,"User canceled the upload/download.")}function rA(i){return new yn(pn.INVALID_URL,"Invalid URL '"+i+"'.")}function sA(i){return new yn(pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function oA(){return new yn(pn.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Hv+"' property when initializing the app?")}function aA(){return new yn(pn.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rp(i){return new yn(pn.INVALID_ARGUMENT,i)}function Wv(){return new yn(pn.APP_DELETED,"The Firebase app was deleted.")}function lA(i){return new yn(pn.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ml(i){throw new yn(pn.INTERNAL_ERROR,"Internal error: "+i)}/**
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
 */class Ai{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Ai.makeFromUrl(t,e)}catch{return new Ai(t,"")}if(n.path==="")return n;throw sA(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),_={bucket:1,path:3},g=e===zv?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",p=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:d,indices:_,postModify:c},{regex:p,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<v.length;E++){const b=v[E],A=b.regex.exec(t);if(A){const w=A[b.indices.bucket];let O=A[b.indices.path];O||(O=""),n=new Ai(w,O),b.postModify(n);break}}if(n==null)throw rA(t);return n}}class cA{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function uA(i,t,e){let n=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,t.apply(null,m))}function h(m){r=setTimeout(()=>{r=null,i(d,l())},m)}function f(){s&&clearTimeout(s)}function d(m,...p){if(c){f();return}if(m){f(),u.call(null,m,...p);return}if(l()||o){f(),u.call(null,m,...p);return}n<64&&(n*=2);let v;a===1?(a=2,v=0):v=(n+Math.random())*1e3,h(v)}let _=!1;function g(m){_||(_=!0,f(),!c&&(r!==null?(m||(a=2),clearTimeout(r),h(0)):m||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},e),g}function hA(i){i(!1)}/**
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
 */function fA(i){return i!==void 0}function dA(i){return typeof i=="object"&&!Array.isArray(i)}function Xv(i){return typeof i=="string"||i instanceof String}function o_(i,t,e,n){if(n<t)throw rp(`Invalid value for '${i}'. Expected ${t} or greater.`);if(n>e)throw rp(`Invalid value for '${i}'. Expected ${e} or less.`)}/**
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
 */function jv(i,t,e){let n=t;return e==null&&(n=`https://${t}`),`${e}://${n}/v0${i}`}function qv(i){const t=encodeURIComponent;let e="?";for(const n in i)if(i.hasOwnProperty(n)){const r=t(n)+"="+t(i[n]);e=e+r+"&"}return e=e.slice(0,-1),e}/**
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
 */var oo;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(oo||(oo={}));/**
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
 */function pA(i,t){const e=i>=500&&i<600,r=[408,429].indexOf(i)!==-1,s=t.indexOf(i)!==-1;return e||r||s}/**
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
 */class mA{constructor(t,e,n,r,s,o,a,l,c,u,h,f=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,_)=>{this.resolve_=d,this.reject_=_,this.start_()})}start_(){const t=(n,r)=>{if(r){n(!1,new Qc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===oo.NO_ERROR,l=s.getStatus();if(!a||pA(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===oo.ABORT;n(!1,new Qc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;n(!0,new Qc(c,s))})},e=(n,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());fA(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Gv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Wv():iA();o(l)}else{const l=nA();o(l)}};this.canceled_?e(!1,new Qc(!1,null,!0)):this.backoffId_=uA(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&hA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qc{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function gA(i,t){t!==null&&t.length>0&&(i.Authorization="Firebase "+t)}function _A(i,t){i["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function yA(i,t){t&&(i["X-Firebase-GMPID"]=t)}function vA(i,t){t!==null&&(i["X-Firebase-AppCheck"]=t)}function xA(i,t,e,n,r,s,o=!0){const a=qv(i.urlParams),l=i.url+a,c=Object.assign({},i.headers);return yA(c,t),gA(c,e),_A(c,s),vA(c,n),new mA(l,i.method,c,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,r,o)}/**
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
 */function Yv(i){let t;try{t=JSON.parse(i)}catch{return null}return dA(t)?t:null}/**
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
 */function EA(i){if(i.length===0)return null;const t=i.lastIndexOf("/");return t===-1?"":i.slice(0,t)}function TA(i,t){const e=t.split("/").filter(n=>n.length>0).join("/");return i.length===0?e:i+"/"+e}function $v(i){const t=i.lastIndexOf("/",i.length-2);return t===-1?i:i.slice(t+1)}/**
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
 */function SA(i,t){return t}class qn{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||SA}}let Jc=null;function bA(i){return!Xv(i)||i.length<2?i:$v(i)}function wA(){if(Jc)return Jc;const i=[];i.push(new qn("bucket")),i.push(new qn("generation")),i.push(new qn("metageneration")),i.push(new qn("name","fullPath",!0));function t(s,o){return bA(o)}const e=new qn("name");e.xform=t,i.push(e);function n(s,o){return o!==void 0?Number(o):o}const r=new qn("size");return r.xform=n,i.push(r),i.push(new qn("timeCreated")),i.push(new qn("updated")),i.push(new qn("md5Hash",null,!0)),i.push(new qn("cacheControl",null,!0)),i.push(new qn("contentDisposition",null,!0)),i.push(new qn("contentEncoding",null,!0)),i.push(new qn("contentLanguage",null,!0)),i.push(new qn("contentType",null,!0)),i.push(new qn("metadata","customMetadata",!0)),Jc=i,Jc}function AA(i,t){function e(){const n=i.bucket,r=i.fullPath,s=new Ai(n,r);return t._makeStorageReference(s)}Object.defineProperty(i,"ref",{get:e})}function MA(i,t,e){const n={};n.type="file";const r=e.length;for(let s=0;s<r;s++){const o=e[s];n[o.local]=o.xform(n,t[o.server])}return AA(n,i),n}function RA(i,t,e){const n=Yv(t);return n===null?null:MA(i,n,e)}function CA(i,t,e,n){const r=Yv(t);if(r===null||!Xv(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=i.bucket,h=i.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=jv(f,e,n),_=qv({alt:"media",token:c});return d+_})[0]}class IA{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function PA(i){if(!i)throw Gv()}function DA(i,t){function e(n,r){const s=RA(i,r,t);return PA(s!==null),CA(s,r,i.host,i._protocol)}return e}function LA(i){function t(e,n){let r;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?r=tA():r=Jw():e.getStatus()===402?r=Qw(i.bucket):e.getStatus()===403?r=eA(i.path):r=n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return t}function NA(i){const t=LA(i);function e(n,r){let s=t(n,r);return n.getStatus()===404&&(s=Zw(i.path)),s.serverResponse=r.serverResponse,s}return e}function OA(i,t,e){const n=t.fullServerUrl(),r=jv(n,i.host,i._protocol),s="GET",o=i.maxOperationRetryTime,a=new IA(r,s,DA(i,e),o);return a.errorHandler=NA(t),a}class UA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oo.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oo.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oo.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw ml("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ml("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ml("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ml("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ml("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class kA extends UA{initXhr(){this.xhr_.responseType="text"}}function FA(){return new kA}/**
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
 */class So{constructor(t,e){this._service=t,e instanceof Ai?this._location=e:this._location=Ai.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new So(t,e)}get root(){const t=new Ai(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $v(this._location.path)}get storage(){return this._service}get parent(){const t=EA(this._location.path);if(t===null)return null;const e=new Ai(this._location.bucket,t);return new So(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw lA(t)}}function BA(i){i._throwIfRoot("getDownloadURL");const t=OA(i.storage,i._location,wA());return i.storage.makeRequestWithTokens(t,FA).then(e=>{if(e===null)throw aA();return e})}function VA(i,t){const e=TA(i._location.path,t),n=new Ai(i._location.bucket,e);return new So(i.storage,n)}/**
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
 */function zA(i){return/^[A-Za-z]+:\/\//.test(i)}function HA(i,t){return new So(i,t)}function Kv(i,t){if(i instanceof mm){const e=i;if(e._bucket==null)throw oA();const n=new So(e,e._bucket);return t!=null?Kv(n,t):n}else return t!==void 0?VA(i,t):i}function GA(i,t){if(t&&zA(t)){if(i instanceof mm)return HA(i,t);throw rp("To use ref(service, url), the first argument must be a Storage instance.")}else return Kv(i,t)}function a_(i,t){const e=t==null?void 0:t[Hv];return e==null?null:Ai.makeFromBucketSpec(e,i)}function WA(i,t,e,n={}){i.host=`${t}:${e}`,i._protocol="http";const{mockUserToken:r}=n;r&&(i._overrideAuthToken=typeof r=="string"?r:Iv(r,i.app.options.projectId))}class mm{constructor(t,e,n,r,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=zv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$w,this._maxUploadRetryTime=Kw,this._requests=new Set,r!=null?this._bucket=Ai.makeFromBucketSpec(r,this._host):this._bucket=a_(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ai.makeFromBucketSpec(this._url,t):this._bucket=a_(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){o_("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){o_("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new So(this,t)}_makeRequest(t,e,n,r,s=!0){if(this._deleted)return new cA(Wv());{const o=xA(t,this._appId,n,r,e,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const l_="@firebase/storage",c_="0.11.2";/**
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
 */const Zv="storage";function sp(i){return i=gr(i),BA(i)}function gm(i,t){return i=gr(i),GA(i,t)}function XA(i=Fv(),t){i=gr(i);const n=Ov(i,Zv).getImmediate({identifier:t}),r=Rv("storage");return r&&jA(n,...r),n}function jA(i,t,e,n={}){WA(i,t,e,n)}function qA(i,{instanceIdentifier:t}){const e=i.getProvider("app").getImmediate(),n=i.getProvider("auth-internal"),r=i.getProvider("app-check-internal");return new mm(e,n,r,t,Uv)}function YA(){rc(new Na(Zv,qA,"PUBLIC").setMultipleInstances(!0)),gs(l_,c_,""),gs(l_,c_,"esm2017")}YA();var $A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dt,_m=_m||{},Qt=$A||self;function Zh(i){var t=typeof i;return t=t!="object"?t:i?Array.isArray(i)?"array":t:"null",t=="array"||t=="object"&&typeof i.length=="number"}function Uc(i){var t=typeof i;return t=="object"&&i!=null||t=="function"}function KA(i){return Object.prototype.hasOwnProperty.call(i,zf)&&i[zf]||(i[zf]=++ZA)}var zf="closure_uid_"+(1e9*Math.random()>>>0),ZA=0;function QA(i,t,e){return i.call.apply(i.bind,arguments)}function JA(i,t,e){if(!i)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),i.apply(t,r)}}return function(){return i.apply(t,arguments)}}function Bn(i,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Bn=QA:Bn=JA,Bn.apply(null,arguments)}function tu(i,t){var e=Array.prototype.slice.call(arguments,1);return function(){var n=e.slice();return n.push.apply(n,arguments),i.apply(this,n)}}function vn(i,t){function e(){}e.prototype=t.prototype,i.$=t.prototype,i.prototype=new e,i.prototype.constructor=i,i.ac=function(n,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(n,o)}}function Ps(){this.s=this.s,this.o=this.o}var tM=0;Ps.prototype.s=!1;Ps.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tM!=0)&&KA(this)};Ps.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qv=Array.prototype.indexOf?function(i,t){return Array.prototype.indexOf.call(i,t,void 0)}:function(i,t){if(typeof i=="string")return typeof t!="string"||t.length!=1?-1:i.indexOf(t,0);for(let e=0;e<i.length;e++)if(e in i&&i[e]===t)return e;return-1};function ym(i){const t=i.length;if(0<t){const e=Array(t);for(let n=0;n<t;n++)e[n]=i[n];return e}return[]}function u_(i,t){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Zh(n)){const r=i.length||0,s=n.length||0;i.length=r+s;for(let o=0;o<s;o++)i[r+o]=n[o]}else i.push(n)}}function Vn(i,t){this.type=i,this.g=this.target=t,this.defaultPrevented=!1}Vn.prototype.h=function(){this.defaultPrevented=!0};var eM=function(){if(!Qt.addEventListener||!Object.defineProperty)return!1;var i=!1,t=Object.defineProperty({},"passive",{get:function(){i=!0}});try{Qt.addEventListener("test",()=>{},t),Qt.removeEventListener("test",()=>{},t)}catch{}return i}();function oc(i){return/^[\s\xa0]*$/.test(i)}function Qh(){var i=Qt.navigator;return i&&(i=i.userAgent)?i:""}function sr(i){return Qh().indexOf(i)!=-1}function vm(i){return vm[" "](i),i}vm[" "]=function(){};function nM(i,t){var e=YM;return Object.prototype.hasOwnProperty.call(e,i)?e[i]:e[i]=t(i)}var iM=sr("Opera"),Oa=sr("Trident")||sr("MSIE"),Jv=sr("Edge"),op=Jv||Oa,tx=sr("Gecko")&&!(Qh().toLowerCase().indexOf("webkit")!=-1&&!sr("Edge"))&&!(sr("Trident")||sr("MSIE"))&&!sr("Edge"),rM=Qh().toLowerCase().indexOf("webkit")!=-1&&!sr("Edge");function ex(){var i=Qt.document;return i?i.documentMode:void 0}var ap;t:{var Hf="",Gf=function(){var i=Qh();if(tx)return/rv:([^\);]+)(\)|;)/.exec(i);if(Jv)return/Edge\/([\d\.]+)/.exec(i);if(Oa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(i);if(rM)return/WebKit\/(\S+)/.exec(i);if(iM)return/(?:Version)[ \/]?(\S+)/.exec(i)}();if(Gf&&(Hf=Gf?Gf[1]:""),Oa){var Wf=ex();if(Wf!=null&&Wf>parseFloat(Hf)){ap=String(Wf);break t}}ap=Hf}var lp;if(Qt.document&&Oa){var h_=ex();lp=h_||parseInt(ap,10)||void 0}else lp=void 0;var sM=lp;function ac(i,t){if(Vn.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var e=this.type=i.type,n=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=t,t=i.relatedTarget){if(tx){t:{try{vm(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else e=="mouseover"?t=i.fromElement:e=="mouseout"&&(t=i.toElement);this.relatedTarget=t,n?(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:oM[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ac.$.h.call(this)}}vn(ac,Vn);var oM={2:"touch",3:"pen",4:"mouse"};ac.prototype.h=function(){ac.$.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var kc="closure_listenable_"+(1e6*Math.random()|0),aM=0;function lM(i,t,e,n,r){this.listener=i,this.proxy=null,this.src=t,this.type=e,this.capture=!!n,this.la=r,this.key=++aM,this.fa=this.ia=!1}function Jh(i){i.fa=!0,i.listener=null,i.proxy=null,i.src=null,i.la=null}function xm(i,t,e){for(const n in i)t.call(e,i[n],n,i)}function cM(i,t){for(const e in i)t.call(void 0,i[e],e,i)}function nx(i){const t={};for(const e in i)t[e]=i[e];return t}const f_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ix(i,t){let e,n;for(let r=1;r<arguments.length;r++){n=arguments[r];for(e in n)i[e]=n[e];for(let s=0;s<f_.length;s++)e=f_[s],Object.prototype.hasOwnProperty.call(n,e)&&(i[e]=n[e])}}function tf(i){this.src=i,this.g={},this.h=0}tf.prototype.add=function(i,t,e,n,r){var s=i.toString();i=this.g[s],i||(i=this.g[s]=[],this.h++);var o=up(i,t,n,r);return-1<o?(t=i[o],e||(t.ia=!1)):(t=new lM(t,this.src,s,!!n,r),t.ia=e,i.push(t)),t};function cp(i,t){var e=t.type;if(e in i.g){var n=i.g[e],r=Qv(n,t),s;(s=0<=r)&&Array.prototype.splice.call(n,r,1),s&&(Jh(t),i.g[e].length==0&&(delete i.g[e],i.h--))}}function up(i,t,e,n){for(var r=0;r<i.length;++r){var s=i[r];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==n)return r}return-1}var Em="closure_lm_"+(1e6*Math.random()|0),Xf={};function rx(i,t,e,n,r){if(n&&n.once)return ox(i,t,e,n,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)rx(i,t[s],e,n,r);return null}return e=bm(e),i&&i[kc]?i.O(t,e,Uc(n)?!!n.capture:!!n,r):sx(i,t,e,!1,n,r)}function sx(i,t,e,n,r,s){if(!t)throw Error("Invalid event type");var o=Uc(r)?!!r.capture:!!r,a=Sm(i);if(a||(i[Em]=a=new tf(i)),e=a.add(t,e,n,o,s),e.proxy)return e;if(n=uM(),e.proxy=n,n.src=i,n.listener=e,i.addEventListener)eM||(r=o),r===void 0&&(r=!1),i.addEventListener(t.toString(),n,r);else if(i.attachEvent)i.attachEvent(lx(t.toString()),n);else if(i.addListener&&i.removeListener)i.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return e}function uM(){function i(e){return t.call(i.src,i.listener,e)}const t=hM;return i}function ox(i,t,e,n,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ox(i,t[s],e,n,r);return null}return e=bm(e),i&&i[kc]?i.P(t,e,Uc(n)?!!n.capture:!!n,r):sx(i,t,e,!0,n,r)}function ax(i,t,e,n,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)ax(i,t[s],e,n,r);else n=Uc(n)?!!n.capture:!!n,e=bm(e),i&&i[kc]?(i=i.i,t=String(t).toString(),t in i.g&&(s=i.g[t],e=up(s,e,n,r),-1<e&&(Jh(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete i.g[t],i.h--)))):i&&(i=Sm(i))&&(t=i.g[t.toString()],i=-1,t&&(i=up(t,e,n,r)),(e=-1<i?t[i]:null)&&Tm(e))}function Tm(i){if(typeof i!="number"&&i&&!i.fa){var t=i.src;if(t&&t[kc])cp(t.i,i);else{var e=i.type,n=i.proxy;t.removeEventListener?t.removeEventListener(e,n,i.capture):t.detachEvent?t.detachEvent(lx(e),n):t.addListener&&t.removeListener&&t.removeListener(n),(e=Sm(t))?(cp(e,i),e.h==0&&(e.src=null,t[Em]=null)):Jh(i)}}}function lx(i){return i in Xf?Xf[i]:Xf[i]="on"+i}function hM(i,t){if(i.fa)i=!0;else{t=new ac(t,this);var e=i.listener,n=i.la||i.src;i.ia&&Tm(i),i=e.call(n,t)}return i}function Sm(i){return i=i[Em],i instanceof tf?i:null}var jf="__closure_events_fn_"+(1e9*Math.random()>>>0);function bm(i){return typeof i=="function"?i:(i[jf]||(i[jf]=function(t){return i.handleEvent(t)}),i[jf])}function mn(){Ps.call(this),this.i=new tf(this),this.S=this,this.J=null}vn(mn,Ps);mn.prototype[kc]=!0;mn.prototype.removeEventListener=function(i,t,e,n){ax(this,i,t,e,n)};function Cn(i,t){var e,n=i.J;if(n)for(e=[];n;n=n.J)e.push(n);if(i=i.S,n=t.type||t,typeof t=="string")t=new Vn(t,i);else if(t instanceof Vn)t.target=t.target||i;else{var r=t;t=new Vn(n,i),ix(t,r)}if(r=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];r=eu(o,n,!0,t)&&r}if(o=t.g=i,r=eu(o,n,!0,t)&&r,r=eu(o,n,!1,t)&&r,e)for(s=0;s<e.length;s++)o=t.g=e[s],r=eu(o,n,!1,t)&&r}mn.prototype.N=function(){if(mn.$.N.call(this),this.i){var i=this.i,t;for(t in i.g){for(var e=i.g[t],n=0;n<e.length;n++)Jh(e[n]);delete i.g[t],i.h--}}this.J=null};mn.prototype.O=function(i,t,e,n){return this.i.add(String(i),t,!1,e,n)};mn.prototype.P=function(i,t,e,n){return this.i.add(String(i),t,!0,e,n)};function eu(i,t,e,n){if(t=i.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&cp(i.i,o),r=a.call(l,n)!==!1&&r}}return r&&!n.defaultPrevented}var wm=Qt.JSON.stringify;class fM{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function dM(){var i=Am;let t=null;return i.g&&(t=i.g,i.g=i.g.next,i.g||(i.h=null),t.next=null),t}class pM{constructor(){this.h=this.g=null}add(t,e){const n=cx.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var cx=new fM(()=>new mM,i=>i.reset());class mM{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function gM(i){var t=1;i=i.split(":");const e=[];for(;0<t&&i.length;)e.push(i.shift()),t--;return i.length&&e.push(i.join(":")),e}function _M(i){Qt.setTimeout(()=>{throw i},0)}let lc,cc=!1,Am=new pM,ux=()=>{const i=Qt.Promise.resolve(void 0);lc=()=>{i.then(yM)}};var yM=()=>{for(var i;i=dM();){try{i.h.call(i.g)}catch(e){_M(e)}var t=cx;t.j(i),100>t.h&&(t.h++,i.next=t.g,t.g=i)}cc=!1};function ef(i,t){mn.call(this),this.h=i||1,this.g=t||Qt,this.j=Bn(this.qb,this),this.l=Date.now()}vn(ef,mn);Dt=ef.prototype;Dt.ga=!1;Dt.T=null;Dt.qb=function(){if(this.ga){var i=Date.now()-this.l;0<i&&i<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-i):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Cn(this,"tick"),this.ga&&(Mm(this),this.start()))}};Dt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mm(i){i.ga=!1,i.T&&(i.g.clearTimeout(i.T),i.T=null)}Dt.N=function(){ef.$.N.call(this),Mm(this),delete this.g};function Rm(i,t,e){if(typeof i=="function")e&&(i=Bn(i,e));else if(i&&typeof i.handleEvent=="function")i=Bn(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:Qt.setTimeout(i,t||0)}function hx(i){i.g=Rm(()=>{i.g=null,i.i&&(i.i=!1,hx(i))},i.j);const t=i.h;i.h=null,i.m.apply(null,t)}class vM extends Ps{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:hx(this)}N(){super.N(),this.g&&(Qt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uc(i){Ps.call(this),this.h=i,this.g={}}vn(uc,Ps);var d_=[];function fx(i,t,e,n){Array.isArray(e)||(e&&(d_[0]=e.toString()),e=d_);for(var r=0;r<e.length;r++){var s=rx(t,e[r],n||i.handleEvent,!1,i.h||i);if(!s)break;i.g[s.key]=s}}function dx(i){xm(i.g,function(t,e){this.g.hasOwnProperty(e)&&Tm(t)},i),i.g={}}uc.prototype.N=function(){uc.$.N.call(this),dx(this)};uc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nf(){this.g=!0}nf.prototype.Ea=function(){this.g=!1};function xM(i,t,e,n,r,s){i.info(function(){if(i.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+`
`+e+`
`+o})}function EM(i,t,e,n,r,s,o){i.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+`
`+e+`
`+s+" "+o})}function pa(i,t,e,n){i.info(function(){return"XMLHTTP TEXT ("+t+"): "+SM(i,e)+(n?" "+n:"")})}function TM(i,t){i.info(function(){return"TIMEOUT: "+t})}nf.prototype.info=function(){};function SM(i,t){if(!i.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(i=0;i<e.length;i++)if(Array.isArray(e[i])){var n=e[i];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return wm(e)}catch{return t}}var Uo={},p_=null;function rf(){return p_=p_||new mn}Uo.Ta="serverreachability";function px(i){Vn.call(this,Uo.Ta,i)}vn(px,Vn);function hc(i){const t=rf();Cn(t,new px(t))}Uo.STAT_EVENT="statevent";function mx(i,t){Vn.call(this,Uo.STAT_EVENT,i),this.stat=t}vn(mx,Vn);function si(i){const t=rf();Cn(t,new mx(t,i))}Uo.Ua="timingevent";function gx(i,t){Vn.call(this,Uo.Ua,i),this.size=t}vn(gx,Vn);function Fc(i,t){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return Qt.setTimeout(function(){i()},t)}var sf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_x={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cm(){}Cm.prototype.h=null;function m_(i){return i.h||(i.h=i.i())}function yx(){}var Bc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Im(){Vn.call(this,"d")}vn(Im,Vn);function Pm(){Vn.call(this,"c")}vn(Pm,Vn);var hp;function of(){}vn(of,Cm);of.prototype.g=function(){return new XMLHttpRequest};of.prototype.i=function(){return{}};hp=new of;function Vc(i,t,e,n){this.l=i,this.j=t,this.m=e,this.W=n||1,this.U=new uc(this),this.P=bM,i=op?125:void 0,this.V=new ef(i),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vx}function vx(){this.i=null,this.g="",this.h=!1}var bM=45e3,fp={},ph={};Dt=Vc.prototype;Dt.setTimeout=function(i){this.P=i};function dp(i,t,e){i.L=1,i.v=lf(Xr(t)),i.s=e,i.S=!0,xx(i,null)}function xx(i,t){i.G=Date.now(),zc(i),i.A=Xr(i.v);var e=i.A,n=i.W;Array.isArray(n)||(n=[String(n)]),Rx(e.i,"t",n),i.C=0,e=i.l.J,i.h=new vx,i.g=$x(i.l,e?t:null,!i.s),0<i.O&&(i.M=new vM(Bn(i.Pa,i,i.g),i.O)),fx(i.U,i.g,"readystatechange",i.nb),t=i.I?nx(i.I):{},i.s?(i.u||(i.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",i.g.ha(i.A,i.u,i.s,t)):(i.u="GET",i.g.ha(i.A,i.u,null,t)),hc(),xM(i.j,i.u,i.A,i.m,i.W,i.s)}Dt.nb=function(i){i=i.target;const t=this.M;t&&cr(i)==3?t.l():this.Pa(i)};Dt.Pa=function(i){try{if(i==this.g)t:{const u=cr(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||op||this.g&&(this.h.h||this.g.ja()||v_(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?hc(3):hc(2)),af(this);var e=this.g.da();this.ca=e;e:if(Ex(this)){var n=v_(this.g);i="";var r=n.length,s=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qs(this),Bl(this);var o="";break e}this.h.i=new Qt.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,i+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.splice(0,r),this.h.g+=i,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,EM(this.j,this.u,this.A,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oc(a)){var c=a;break e}}c=null}if(e=c)pa(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pp(this,e);else{this.i=!1,this.o=3,si(12),Qs(this),Bl(this);break t}}this.S?(Tx(this,u,o),op&&this.i&&u==3&&(fx(this.U,this.V,"tick",this.mb),this.V.start())):(pa(this.j,this.m,o,null),pp(this,o)),u==4&&Qs(this),this.i&&!this.J&&(u==4?Xx(this.l,this):(this.i=!1,zc(this)))}else XM(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,si(12)):(this.o=0,si(13)),Qs(this),Bl(this)}}}catch{}finally{}};function Ex(i){return i.g?i.u=="GET"&&i.L!=2&&i.l.Ha:!1}function Tx(i,t,e){let n=!0,r;for(;!i.J&&i.C<e.length;)if(r=wM(i,e),r==ph){t==4&&(i.o=4,si(14),n=!1),pa(i.j,i.m,null,"[Incomplete Response]");break}else if(r==fp){i.o=4,si(15),pa(i.j,i.m,e,"[Invalid Chunk]"),n=!1;break}else pa(i.j,i.m,r,null),pp(i,r);Ex(i)&&r!=ph&&r!=fp&&(i.h.g="",i.C=0),t!=4||e.length!=0||i.h.h||(i.o=1,si(16),n=!1),i.i=i.i&&n,n?0<e.length&&!i.ba&&(i.ba=!0,t=i.l,t.g==i&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),km(t),t.M=!0,si(11))):(pa(i.j,i.m,e,"[Invalid Chunked Response]"),Qs(i),Bl(i))}Dt.mb=function(){if(this.g){var i=cr(this.g),t=this.g.ja();this.C<t.length&&(af(this),Tx(this,i,t),this.i&&i!=4&&zc(this))}};function wM(i,t){var e=i.C,n=t.indexOf(`
`,e);return n==-1?ph:(e=Number(t.substring(e,n)),isNaN(e)?fp:(n+=1,n+e>t.length?ph:(t=t.slice(n,n+e),i.C=n+e,t)))}Dt.cancel=function(){this.J=!0,Qs(this)};function zc(i){i.Y=Date.now()+i.P,Sx(i,i.P)}function Sx(i,t){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Fc(Bn(i.lb,i),t)}function af(i){i.B&&(Qt.clearTimeout(i.B),i.B=null)}Dt.lb=function(){this.B=null;const i=Date.now();0<=i-this.Y?(TM(this.j,this.A),this.L!=2&&(hc(),si(17)),Qs(this),this.o=2,Bl(this)):Sx(this,this.Y-i)};function Bl(i){i.l.H==0||i.J||Xx(i.l,i)}function Qs(i){af(i);var t=i.M;t&&typeof t.sa=="function"&&t.sa(),i.M=null,Mm(i.V),dx(i.U),i.g&&(t=i.g,i.g=null,t.abort(),t.sa())}function pp(i,t){try{var e=i.l;if(e.H!=0&&(e.g==i||mp(e.i,i))){if(!i.K&&mp(e.i,i)&&e.H==3){try{var n=e.Ja.g.parse(t)}catch{n=null}if(Array.isArray(n)&&n.length==3){var r=n;if(r[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<i.G)_h(e),hf(e);else break t;Um(e),si(18)}}else e.Fa=r[1],0<e.Fa-e.V&&37500>r[2]&&e.G&&e.A==0&&!e.v&&(e.v=Fc(Bn(e.ib,e),6e3));if(1>=Px(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Js(e,11)}else if((i.K||e.g==i)&&_h(e),!oc(t))for(r=e.Ja.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const u=c[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(n=1.5*f,e.L=n,e.l.info("backChannelRequestTimeoutMs_="+n)),n=e;const d=i.g;if(d){const _=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=n.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Dm(s,s.h),s.h=null))}if(n.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(n.Da=g,Ue(n.I,n.F,g))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-i.G,e.l.info("Handshake RTT: "+e.S+"ms")),n=e;var o=i;if(n.wa=Yx(n,n.J?n.pa:null,n.Y),o.K){Dx(n.i,o);var a=o,l=n.L;l&&a.setTimeout(l),a.B&&(af(a),zc(a)),n.g=o}else Gx(n);0<e.j.length&&ff(e)}else c[0]!="stop"&&c[0]!="close"||Js(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Js(e,7):Om(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}hc(4)}catch{}}function AM(i){if(i.Z&&typeof i.Z=="function")return i.Z();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(Zh(i)){for(var t=[],e=i.length,n=0;n<e;n++)t.push(i[n]);return t}t=[],e=0;for(n in i)t[e++]=i[n];return t}function MM(i){if(i.ta&&typeof i.ta=="function")return i.ta();if(!i.Z||typeof i.Z!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(Zh(i)||typeof i=="string"){var t=[];i=i.length;for(var e=0;e<i;e++)t.push(e);return t}t=[],e=0;for(const n in i)t[e++]=n;return t}}}function bx(i,t){if(i.forEach&&typeof i.forEach=="function")i.forEach(t,void 0);else if(Zh(i)||typeof i=="string")Array.prototype.forEach.call(i,t,void 0);else for(var e=MM(i),n=AM(i),r=n.length,s=0;s<r;s++)t.call(void 0,n[s],e&&e[s],i)}var wx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RM(i,t){if(i){i=i.split("&");for(var e=0;e<i.length;e++){var n=i[e].indexOf("="),r=null;if(0<=n){var s=i[e].substring(0,n);r=i[e].substring(n+1)}else s=i[e];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ao(i){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,i instanceof ao){this.h=i.h,mh(this,i.j),this.s=i.s,this.g=i.g,gh(this,i.m),this.l=i.l;var t=i.i,e=new fc;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),g_(this,e),this.o=i.o}else i&&(t=String(i).match(wx))?(this.h=!1,mh(this,t[1]||"",!0),this.s=Pl(t[2]||""),this.g=Pl(t[3]||"",!0),gh(this,t[4]),this.l=Pl(t[5]||"",!0),g_(this,t[6]||"",!0),this.o=Pl(t[7]||"")):(this.h=!1,this.i=new fc(null,this.h))}ao.prototype.toString=function(){var i=[],t=this.j;t&&i.push(Dl(t,__,!0),":");var e=this.g;return(e||t=="file")&&(i.push("//"),(t=this.s)&&i.push(Dl(t,__,!0),"@"),i.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&i.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&i.push("/"),i.push(Dl(e,e.charAt(0)=="/"?PM:IM,!0))),(e=this.i.toString())&&i.push("?",e),(e=this.o)&&i.push("#",Dl(e,LM)),i.join("")};function Xr(i){return new ao(i)}function mh(i,t,e){i.j=e?Pl(t,!0):t,i.j&&(i.j=i.j.replace(/:$/,""))}function gh(i,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);i.m=t}else i.m=null}function g_(i,t,e){t instanceof fc?(i.i=t,NM(i.i,i.h)):(e||(t=Dl(t,DM)),i.i=new fc(t,i.h))}function Ue(i,t,e){i.i.set(t,e)}function lf(i){return Ue(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Pl(i,t){return i?t?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Dl(i,t,e){return typeof i=="string"?(i=encodeURI(i).replace(t,CM),e&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function CM(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var __=/[#\/\?@]/g,IM=/[#\?:]/g,PM=/[#\?]/g,DM=/[#\?@]/g,LM=/#/g;function fc(i,t){this.h=this.g=null,this.i=i||null,this.j=!!t}function Ds(i){i.g||(i.g=new Map,i.h=0,i.i&&RM(i.i,function(t,e){i.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}Dt=fc.prototype;Dt.add=function(i,t){Ds(this),this.i=null,i=rl(this,i);var e=this.g.get(i);return e||this.g.set(i,e=[]),e.push(t),this.h+=1,this};function Ax(i,t){Ds(i),t=rl(i,t),i.g.has(t)&&(i.i=null,i.h-=i.g.get(t).length,i.g.delete(t))}function Mx(i,t){return Ds(i),t=rl(i,t),i.g.has(t)}Dt.forEach=function(i,t){Ds(this),this.g.forEach(function(e,n){e.forEach(function(r){i.call(t,r,n,this)},this)},this)};Dt.ta=function(){Ds(this);const i=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let n=0;n<t.length;n++){const r=i[n];for(let s=0;s<r.length;s++)e.push(t[n])}return e};Dt.Z=function(i){Ds(this);let t=[];if(typeof i=="string")Mx(this,i)&&(t=t.concat(this.g.get(rl(this,i))));else{i=Array.from(this.g.values());for(let e=0;e<i.length;e++)t=t.concat(i[e])}return t};Dt.set=function(i,t){return Ds(this),this.i=null,i=rl(this,i),Mx(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[t]),this.h+=1,this};Dt.get=function(i,t){return i?(i=this.Z(i),0<i.length?String(i[0]):t):t};function Rx(i,t,e){Ax(i,t),0<e.length&&(i.i=null,i.g.set(rl(i,t),ym(e)),i.h+=e.length)}Dt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var n=t[e];const s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var r=s;o[n]!==""&&(r+="="+encodeURIComponent(String(o[n]))),i.push(r)}}return this.i=i.join("&")};function rl(i,t){return t=String(t),i.j&&(t=t.toLowerCase()),t}function NM(i,t){t&&!i.j&&(Ds(i),i.i=null,i.g.forEach(function(e,n){var r=n.toLowerCase();n!=r&&(Ax(this,n),Rx(this,r,e))},i)),i.j=t}var OM=class{constructor(i,t){this.g=i,this.map=t}};function Cx(i){this.l=i||UM,Qt.PerformanceNavigationTiming?(i=Qt.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(Qt.g&&Qt.g.Ka&&Qt.g.Ka()&&Qt.g.Ka().dc),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UM=10;function Ix(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Px(i){return i.h?1:i.g?i.g.size:0}function mp(i,t){return i.h?i.h==t:i.g?i.g.has(t):!1}function Dm(i,t){i.g?i.g.add(t):i.h=t}function Dx(i,t){i.h&&i.h==t?i.h=null:i.g&&i.g.has(t)&&i.g.delete(t)}Cx.prototype.cancel=function(){if(this.i=Lx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Lx(i){if(i.h!=null)return i.i.concat(i.h.F);if(i.g!=null&&i.g.size!==0){let t=i.i;for(const e of i.g.values())t=t.concat(e.F);return t}return ym(i.i)}var kM=class{stringify(i){return Qt.JSON.stringify(i,void 0)}parse(i){return Qt.JSON.parse(i,void 0)}};function FM(){this.g=new kM}function BM(i,t,e){const n=e||"";try{bx(i,function(r,s){let o=r;Uc(r)&&(o=wm(r)),t.push(n+s+"="+encodeURIComponent(o))})}catch(r){throw t.push(n+"type="+encodeURIComponent("_badmap")),r}}function VM(i,t){const e=new nf;if(Qt.Image){const n=new Image;n.onload=tu(nu,e,n,"TestLoadImage: loaded",!0,t),n.onerror=tu(nu,e,n,"TestLoadImage: error",!1,t),n.onabort=tu(nu,e,n,"TestLoadImage: abort",!1,t),n.ontimeout=tu(nu,e,n,"TestLoadImage: timeout",!1,t),Qt.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=i}else t(!1)}function nu(i,t,e,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch{}}function Hc(i){this.l=i.ec||null,this.j=i.ob||!1}vn(Hc,Cm);Hc.prototype.g=function(){return new cf(this.l,this.j)};Hc.prototype.i=function(i){return function(){return i}}({});function cf(i,t){mn.call(this),this.F=i,this.u=t,this.m=void 0,this.readyState=Lm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn(cf,mn);var Lm=0;Dt=cf.prototype;Dt.open=function(i,t){if(this.readyState!=Lm)throw this.abort(),Error("Error reopening a connection");this.C=i,this.B=t,this.readyState=1,dc(this)};Dt.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};i&&(t.body=i),(this.F||Qt).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};Dt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gc(this)),this.readyState=Lm};Dt.$a=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,dc(this)),this.g&&(this.readyState=3,dc(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Qt.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nx(this)}else i.text().then(this.Za.bind(this),this.ka.bind(this))};function Nx(i){i.j.read().then(i.Xa.bind(i)).catch(i.ka.bind(i))}Dt.Xa=function(i){if(this.g){if(this.u&&i.value)this.response.push(i.value);else if(!this.u){var t=i.value?i.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!i.done}))&&(this.response=this.responseText+=t)}i.done?Gc(this):dc(this),this.readyState==3&&Nx(this)}};Dt.Za=function(i){this.g&&(this.response=this.responseText=i,Gc(this))};Dt.Ya=function(i){this.g&&(this.response=i,Gc(this))};Dt.ka=function(){this.g&&Gc(this)};function Gc(i){i.readyState=4,i.l=null,i.j=null,i.A=null,dc(i)}Dt.setRequestHeader=function(i,t){this.v.append(i,t)};Dt.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""};Dt.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,i.push(e[0]+": "+e[1]),e=t.next();return i.join(`\r
`)};function dc(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(cf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});var zM=Qt.JSON.parse;function qe(i){mn.call(this),this.headers=new Map,this.u=i||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ox,this.L=this.M=!1}vn(qe,mn);var Ox="",HM=/^https?$/i,GM=["POST","PUT"];Dt=qe.prototype;Dt.Oa=function(i){this.M=i};Dt.ha=function(i,t,e,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+i);t=t?t.toUpperCase():"GET",this.I=i,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hp.g(),this.C=this.u?m_(this.u):m_(hp),this.g.onreadystatechange=Bn(this.La,this);try{this.G=!0,this.g.open(t,String(i),!0),this.G=!1}catch(s){y_(this,s);return}if(i=e||"",e=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)e.set(r,n[r]);else if(typeof n.keys=="function"&&typeof n.get=="function")for(const s of n.keys())e.set(s,n.get(s));else throw Error("Unknown input type for opt_headers: "+String(n));n=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),r=Qt.FormData&&i instanceof Qt.FormData,!(0<=Qv(GM,t))||n||r||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fx(this),0<this.B&&((this.L=WM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Bn(this.ua,this)):this.A=Rm(this.ua,this.B,this)),this.v=!0,this.g.send(i),this.v=!1}catch(s){y_(this,s)}};function WM(i){return Oa&&typeof i.timeout=="number"&&i.ontimeout!==void 0}Dt.ua=function(){typeof _m<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Cn(this,"timeout"),this.abort(8))};function y_(i,t){i.h=!1,i.g&&(i.l=!0,i.g.abort(),i.l=!1),i.j=t,i.m=5,Ux(i),uf(i)}function Ux(i){i.F||(i.F=!0,Cn(i,"complete"),Cn(i,"error"))}Dt.abort=function(i){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=i||7,Cn(this,"complete"),Cn(this,"abort"),uf(this))};Dt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uf(this,!0)),qe.$.N.call(this)};Dt.La=function(){this.s||(this.G||this.v||this.l?kx(this):this.kb())};Dt.kb=function(){kx(this)};function kx(i){if(i.h&&typeof _m<"u"&&(!i.C[1]||cr(i)!=4||i.da()!=2)){if(i.v&&cr(i)==4)Rm(i.La,0,i);else if(Cn(i,"readystatechange"),cr(i)==4){i.h=!1;try{const o=i.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var n;if(n=o===0){var r=String(i.I).match(wx)[1]||null;!r&&Qt.self&&Qt.self.location&&(r=Qt.self.location.protocol.slice(0,-1)),n=!HM.test(r?r.toLowerCase():"")}e=n}if(e)Cn(i,"complete"),Cn(i,"success");else{i.m=6;try{var s=2<cr(i)?i.g.statusText:""}catch{s=""}i.j=s+" ["+i.da()+"]",Ux(i)}}finally{uf(i)}}}}function uf(i,t){if(i.g){Fx(i);const e=i.g,n=i.C[0]?()=>{}:null;i.g=null,i.C=null,t||Cn(i,"ready");try{e.onreadystatechange=n}catch{}}}function Fx(i){i.g&&i.L&&(i.g.ontimeout=null),i.A&&(Qt.clearTimeout(i.A),i.A=null)}Dt.isActive=function(){return!!this.g};function cr(i){return i.g?i.g.readyState:0}Dt.da=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}};Dt.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};Dt.Wa=function(i){if(this.g){var t=this.g.responseText;return i&&t.indexOf(i)==0&&(t=t.substring(i.length)),zM(t)}};function v_(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.K){case Ox:case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function XM(i){const t={};i=(i.g&&2<=cr(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let n=0;n<i.length;n++){if(oc(i[n]))continue;var e=gM(i[n]);const r=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[r]||[];t[r]=s,s.push(e)}cM(t,function(n){return n.join(", ")})}Dt.Ia=function(){return this.m};Dt.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Bx(i){let t="";return xm(i,function(e,n){t+=n,t+=":",t+=e,t+=`\r
`}),t}function Nm(i,t,e){t:{for(n in e){var n=!1;break t}n=!0}n||(e=Bx(e),typeof i=="string"?e!=null&&encodeURIComponent(String(e)):Ue(i,t,e))}function gl(i,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[i]||t}function Vx(i){this.Ga=0,this.j=[],this.l=new nf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=gl("failFast",!1,i),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=gl("baseRetryDelayMs",5e3,i),this.hb=gl("retryDelaySeedMs",1e4,i),this.eb=gl("forwardChannelMaxRetries",2,i),this.xa=gl("forwardChannelRequestTimeoutMs",2e4,i),this.va=i&&i.xmlHttpFactory||void 0,this.Ha=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.i=new Cx(i&&i.concurrentRequestLimit),this.Ja=new FM,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=i&&i.bc||!1,i&&i.Ea&&this.l.Ea(),i&&i.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&i&&i.detectBufferingProxy||!1,this.qa=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.qa=i.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}Dt=Vx.prototype;Dt.ra=8;Dt.H=1;function Om(i){if(zx(i),i.H==3){var t=i.W++,e=Xr(i.I);if(Ue(e,"SID",i.K),Ue(e,"RID",t),Ue(e,"TYPE","terminate"),Wc(i,e),t=new Vc(i,i.l,t),t.L=2,t.v=lf(Xr(e)),e=!1,Qt.navigator&&Qt.navigator.sendBeacon)try{e=Qt.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&Qt.Image&&(new Image().src=t.v,e=!0),e||(t.g=$x(t.l,null),t.g.ha(t.v)),t.G=Date.now(),zc(t)}qx(i)}function hf(i){i.g&&(km(i),i.g.cancel(),i.g=null)}function zx(i){hf(i),i.u&&(Qt.clearTimeout(i.u),i.u=null),_h(i),i.i.cancel(),i.m&&(typeof i.m=="number"&&Qt.clearTimeout(i.m),i.m=null)}function ff(i){if(!Ix(i.i)&&!i.m){i.m=!0;var t=i.Na;lc||ux(),cc||(lc(),cc=!0),Am.add(t,i),i.C=0}}function jM(i,t){return Px(i.i)>=i.i.j-(i.m?1:0)?!1:i.m?(i.j=t.F.concat(i.j),!0):i.H==1||i.H==2||i.C>=(i.cb?0:i.eb)?!1:(i.m=Fc(Bn(i.Na,i,t),jx(i,i.C)),i.C++,!0)}Dt.Na=function(i){if(this.m)if(this.m=null,this.H==1){if(!i){this.W=Math.floor(1e5*Math.random()),i=this.W++;const r=new Vc(this,this.l,i);let s=this.s;if(this.U&&(s?(s=nx(s),ix(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var n=this.j[e];if("__data__"in n.map&&(n=n.map.__data__,typeof n=="string")){n=n.length;break e}n=void 0}if(n===void 0)break;if(t+=n,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Hx(this,r,t),e=Xr(this.I),Ue(e,"RID",i),Ue(e,"CVER",22),this.F&&Ue(e,"X-HTTP-Session-Id",this.F),Wc(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Bx(s)))+"&"+t:this.o&&Nm(e,this.o,s)),Dm(this.i,r),this.bb&&Ue(e,"TYPE","init"),this.P?(Ue(e,"$req",t),Ue(e,"SID","null"),r.aa=!0,dp(r,e,null)):dp(r,e,t),this.H=2}}else this.H==3&&(i?x_(this,i):this.j.length==0||Ix(this.i)||x_(this))};function x_(i,t){var e;t?e=t.m:e=i.W++;const n=Xr(i.I);Ue(n,"SID",i.K),Ue(n,"RID",e),Ue(n,"AID",i.V),Wc(i,n),i.o&&i.s&&Nm(n,i.o,i.s),e=new Vc(i,i.l,e,i.C+1),i.o===null&&(e.I=i.s),t&&(i.j=t.F.concat(i.j)),t=Hx(i,e,1e3),e.setTimeout(Math.round(.5*i.xa)+Math.round(.5*i.xa*Math.random())),Dm(i.i,e),dp(e,n,t)}function Wc(i,t){i.na&&xm(i.na,function(e,n){Ue(t,n,e)}),i.h&&bx({},function(e,n){Ue(t,n,e)})}function Hx(i,t,e){e=Math.min(i.j.length,e);var n=i.h?Bn(i.h.Va,i.h,i):null;t:{var r=i.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<e;l++){let c=r[l].g;const u=r[l].map;if(c-=s,0>c)s=Math.max(0,r[l].g-100),a=!1;else try{BM(u,o,"req"+c+"_")}catch{n&&n(u)}}if(a){n=o.join("&");break t}}}return i=i.j.splice(0,e),t.F=i,n}function Gx(i){if(!i.g&&!i.u){i.ba=1;var t=i.Ma;lc||ux(),cc||(lc(),cc=!0),Am.add(t,i),i.A=0}}function Um(i){return i.g||i.u||3<=i.A?!1:(i.ba++,i.u=Fc(Bn(i.Ma,i),jx(i,i.A)),i.A++,!0)}Dt.Ma=function(){if(this.u=null,Wx(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var i=2*this.S;this.l.info("BP detection timer enabled: "+i),this.B=Fc(Bn(this.jb,this),i)}};Dt.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,si(10),hf(this),Wx(this))};function km(i){i.B!=null&&(Qt.clearTimeout(i.B),i.B=null)}function Wx(i){i.g=new Vc(i,i.l,"rpc",i.ba),i.o===null&&(i.g.I=i.s),i.g.O=0;var t=Xr(i.wa);Ue(t,"RID","rpc"),Ue(t,"SID",i.K),Ue(t,"AID",i.V),Ue(t,"CI",i.G?"0":"1"),!i.G&&i.qa&&Ue(t,"TO",i.qa),Ue(t,"TYPE","xmlhttp"),Wc(i,t),i.o&&i.s&&Nm(t,i.o,i.s),i.L&&i.g.setTimeout(i.L);var e=i.g;i=i.pa,e.L=1,e.v=lf(Xr(t)),e.s=null,e.S=!0,xx(e,i)}Dt.ib=function(){this.v!=null&&(this.v=null,hf(this),Um(this),si(19))};function _h(i){i.v!=null&&(Qt.clearTimeout(i.v),i.v=null)}function Xx(i,t){var e=null;if(i.g==t){_h(i),km(i),i.g=null;var n=2}else if(mp(i.i,t))e=t.F,Dx(i.i,t),n=1;else return;if(i.H!=0){if(t.i)if(n==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var r=i.C;n=rf(),Cn(n,new gx(n,e)),ff(i)}else Gx(i);else if(r=t.o,r==3||r==0&&0<t.ca||!(n==1&&jM(i,t)||n==2&&Um(i)))switch(e&&0<e.length&&(t=i.i,t.i=t.i.concat(e)),r){case 1:Js(i,5);break;case 4:Js(i,10);break;case 3:Js(i,6);break;default:Js(i,2)}}}function jx(i,t){let e=i.ab+Math.floor(Math.random()*i.hb);return i.isActive()||(e*=2),e*t}function Js(i,t){if(i.l.info("Error code "+t),t==2){var e=null;i.h&&(e=null);var n=Bn(i.pb,i);e||(e=new ao("//www.google.com/images/cleardot.gif"),Qt.location&&Qt.location.protocol=="http"||mh(e,"https"),lf(e)),VM(e.toString(),n)}else si(2);i.H=0,i.h&&i.h.za(t),qx(i),zx(i)}Dt.pb=function(i){i?(this.l.info("Successfully pinged google.com"),si(2)):(this.l.info("Failed to ping google.com"),si(1))};function qx(i){if(i.H=0,i.ma=[],i.h){const t=Lx(i.i);(t.length!=0||i.j.length!=0)&&(u_(i.ma,t),u_(i.ma,i.j),i.i.i.length=0,ym(i.j),i.j.length=0),i.h.ya()}}function Yx(i,t,e){var n=e instanceof ao?Xr(e):new ao(e);if(n.g!="")t&&(n.g=t+"."+n.g),gh(n,n.m);else{var r=Qt.location;n=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new ao(null);n&&mh(s,n),t&&(s.g=t),r&&gh(s,r),e&&(s.l=e),n=s}return e=i.F,t=i.Da,e&&t&&Ue(n,e,t),Ue(n,"VER",i.ra),Wc(i,n),n}function $x(i,t,e){if(t&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&i.Ha&&!i.va?new qe(new Hc({ob:!0})):new qe(i.va),t.Oa(i.J),t}Dt.isActive=function(){return!!this.h&&this.h.isActive(this)};function Kx(){}Dt=Kx.prototype;Dt.Ba=function(){};Dt.Aa=function(){};Dt.za=function(){};Dt.ya=function(){};Dt.isActive=function(){return!0};Dt.Va=function(){};function yh(){if(Oa&&!(10<=Number(sM)))throw Error("Environmental error: no available transport.")}yh.prototype.g=function(i,t){return new Ci(i,t)};function Ci(i,t){mn.call(this),this.g=new Vx(t),this.l=i,this.h=t&&t.messageUrlParams||null,i=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.s=i,i=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(i?i["X-WebChannel-Content-Type"]=t.messageContentType:i={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(i?i["X-WebChannel-Client-Profile"]=t.Ca:i={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=i,(i=t&&t.cc)&&!oc(i)&&(this.g.o=i),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!oc(t)&&(this.g.F=t,i=this.h,i!==null&&t in i&&(i=this.h,t in i&&delete i[t])),this.j=new sl(this)}vn(Ci,mn);Ci.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var i=this.g,t=this.l,e=this.h||void 0;si(0),i.Y=t,i.na=e||{},i.G=i.aa,i.I=Yx(i,null,i.Y),ff(i)};Ci.prototype.close=function(){Om(this.g)};Ci.prototype.u=function(i){var t=this.g;if(typeof i=="string"){var e={};e.__data__=i,i=e}else this.v&&(e={},e.__data__=wm(i),i=e);t.j.push(new OM(t.fb++,i)),t.H==3&&ff(t)};Ci.prototype.N=function(){this.g.h=null,delete this.j,Om(this.g),delete this.g,Ci.$.N.call(this)};function Zx(i){Im.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var t=i.__sm__;if(t){t:{for(const e in t){i=e;break t}i=void 0}(this.i=i)&&(i=this.i,t=t!==null&&i in t?t[i]:void 0),this.data=t}else this.data=i}vn(Zx,Im);function Qx(){Pm.call(this),this.status=1}vn(Qx,Pm);function sl(i){this.g=i}vn(sl,Kx);sl.prototype.Ba=function(){Cn(this.g,"a")};sl.prototype.Aa=function(i){Cn(this.g,new Zx(i))};sl.prototype.za=function(i){Cn(this.g,new Qx)};sl.prototype.ya=function(){Cn(this.g,"b")};function qM(){this.blockSize=-1}function _r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}vn(_r,qM);_r.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qf(i,t,e){e||(e=0);var n=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)n[r]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(r=0;16>r;++r)n[r]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=i.g[0],e=i.g[1],r=i.g[2];var s=i.g[3],o=t+(s^e&(r^s))+n[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(r^t&(e^r))+n[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(e^s&(t^e))+n[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=e+(t^r&(s^t))+n[3]+3250441966&4294967295,e=r+(o<<22&4294967295|o>>>10),o=t+(s^e&(r^s))+n[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(r^t&(e^r))+n[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(e^s&(t^e))+n[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=e+(t^r&(s^t))+n[7]+4249261313&4294967295,e=r+(o<<22&4294967295|o>>>10),o=t+(s^e&(r^s))+n[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(r^t&(e^r))+n[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(e^s&(t^e))+n[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=e+(t^r&(s^t))+n[11]+2304563134&4294967295,e=r+(o<<22&4294967295|o>>>10),o=t+(s^e&(r^s))+n[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(r^t&(e^r))+n[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(e^s&(t^e))+n[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=e+(t^r&(s^t))+n[15]+1236535329&4294967295,e=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(e^r))+n[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^r&(t^e))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^e&(s^t))+n[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(r^s))+n[0]+3921069994&4294967295,e=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(e^r))+n[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^r&(t^e))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^e&(s^t))+n[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(r^s))+n[4]+3889429448&4294967295,e=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(e^r))+n[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^r&(t^e))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^e&(s^t))+n[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(r^s))+n[8]+1163531501&4294967295,e=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(e^r))+n[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^r&(t^e))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^e&(s^t))+n[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(r^s))+n[12]+2368359562&4294967295,e=r+(o<<20&4294967295|o>>>12),o=t+(e^r^s)+n[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^r)+n[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^e)+n[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=e+(r^s^t)+n[14]+4259657740&4294967295,e=r+(o<<23&4294967295|o>>>9),o=t+(e^r^s)+n[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^r)+n[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^e)+n[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=e+(r^s^t)+n[10]+3200236656&4294967295,e=r+(o<<23&4294967295|o>>>9),o=t+(e^r^s)+n[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^r)+n[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^e)+n[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=e+(r^s^t)+n[6]+76029189&4294967295,e=r+(o<<23&4294967295|o>>>9),o=t+(e^r^s)+n[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^r)+n[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^e)+n[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=e+(r^s^t)+n[2]+3299628645&4294967295,e=r+(o<<23&4294967295|o>>>9),o=t+(r^(e|~s))+n[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~r))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~e))+n[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=e+(s^(r|~t))+n[5]+4237533241&4294967295,e=r+(o<<21&4294967295|o>>>11),o=t+(r^(e|~s))+n[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~r))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~e))+n[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=e+(s^(r|~t))+n[1]+2240044497&4294967295,e=r+(o<<21&4294967295|o>>>11),o=t+(r^(e|~s))+n[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~r))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~e))+n[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=e+(s^(r|~t))+n[13]+1309151649&4294967295,e=r+(o<<21&4294967295|o>>>11),o=t+(r^(e|~s))+n[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~r))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~e))+n[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=e+(s^(r|~t))+n[9]+3951481745&4294967295,i.g[0]=i.g[0]+t&4294967295,i.g[1]=i.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,i.g[2]=i.g[2]+r&4294967295,i.g[3]=i.g[3]+s&4294967295}_r.prototype.j=function(i,t){t===void 0&&(t=i.length);for(var e=t-this.blockSize,n=this.m,r=this.h,s=0;s<t;){if(r==0)for(;s<=e;)qf(this,i,s),s+=this.blockSize;if(typeof i=="string"){for(;s<t;)if(n[r++]=i.charCodeAt(s++),r==this.blockSize){qf(this,n),r=0;break}}else for(;s<t;)if(n[r++]=i[s++],r==this.blockSize){qf(this,n),r=0;break}}this.h=r,this.i+=t};_r.prototype.l=function(){var i=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);i[0]=128;for(var t=1;t<i.length-8;++t)i[t]=0;var e=8*this.i;for(t=i.length-8;t<i.length;++t)i[t]=e&255,e/=256;for(this.j(i),i=Array(16),t=e=0;4>t;++t)for(var n=0;32>n;n+=8)i[e++]=this.g[t]>>>n&255;return i};function we(i,t){this.h=t;for(var e=[],n=!0,r=i.length-1;0<=r;r--){var s=i[r]|0;n&&s==t||(e[r]=s,n=!1)}this.g=e}var YM={};function Fm(i){return-128<=i&&128>i?nM(i,function(t){return new we([t|0],0>t?-1:0)}):new we([i|0],0>i?-1:0)}function ur(i){if(isNaN(i)||!isFinite(i))return Ta;if(0>i)return bn(ur(-i));for(var t=[],e=1,n=0;i>=e;n++)t[n]=i/e|0,e*=gp;return new we(t,0)}function Jx(i,t){if(i.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(i.charAt(0)=="-")return bn(Jx(i.substring(1),t));if(0<=i.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=ur(Math.pow(t,8)),n=Ta,r=0;r<i.length;r+=8){var s=Math.min(8,i.length-r),o=parseInt(i.substring(r,r+s),t);8>s?(s=ur(Math.pow(t,s)),n=n.R(s).add(ur(o))):(n=n.R(e),n=n.add(ur(o)))}return n}var gp=4294967296,Ta=Fm(0),_p=Fm(1),E_=Fm(16777216);Dt=we.prototype;Dt.ea=function(){if(ki(this))return-bn(this).ea();for(var i=0,t=1,e=0;e<this.g.length;e++){var n=this.D(e);i+=(0<=n?n:gp+n)*t,t*=gp}return i};Dt.toString=function(i){if(i=i||10,2>i||36<i)throw Error("radix out of range: "+i);if(Or(this))return"0";if(ki(this))return"-"+bn(this).toString(i);for(var t=ur(Math.pow(i,6)),e=this,n="";;){var r=xh(e,t).g;e=vh(e,r.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(i);if(e=r,Or(e))return s+n;for(;6>s.length;)s="0"+s;n=s+n}};Dt.D=function(i){return 0>i?0:i<this.g.length?this.g[i]:this.h};function Or(i){if(i.h!=0)return!1;for(var t=0;t<i.g.length;t++)if(i.g[t]!=0)return!1;return!0}function ki(i){return i.h==-1}Dt.X=function(i){return i=vh(this,i),ki(i)?-1:Or(i)?0:1};function bn(i){for(var t=i.g.length,e=[],n=0;n<t;n++)e[n]=~i.g[n];return new we(e,~i.h).add(_p)}Dt.abs=function(){return ki(this)?bn(this):this};Dt.add=function(i){for(var t=Math.max(this.g.length,i.g.length),e=[],n=0,r=0;r<=t;r++){var s=n+(this.D(r)&65535)+(i.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(i.D(r)>>>16);n=o>>>16,s&=65535,o&=65535,e[r]=o<<16|s}return new we(e,e[e.length-1]&-2147483648?-1:0)};function vh(i,t){return i.add(bn(t))}Dt.R=function(i){if(Or(this)||Or(i))return Ta;if(ki(this))return ki(i)?bn(this).R(bn(i)):bn(bn(this).R(i));if(ki(i))return bn(this.R(bn(i)));if(0>this.X(E_)&&0>i.X(E_))return ur(this.ea()*i.ea());for(var t=this.g.length+i.g.length,e=[],n=0;n<2*t;n++)e[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<i.g.length;r++){var s=this.D(n)>>>16,o=this.D(n)&65535,a=i.D(r)>>>16,l=i.D(r)&65535;e[2*n+2*r]+=o*l,iu(e,2*n+2*r),e[2*n+2*r+1]+=s*l,iu(e,2*n+2*r+1),e[2*n+2*r+1]+=o*a,iu(e,2*n+2*r+1),e[2*n+2*r+2]+=s*a,iu(e,2*n+2*r+2)}for(n=0;n<t;n++)e[n]=e[2*n+1]<<16|e[2*n];for(n=t;n<2*t;n++)e[n]=0;return new we(e,0)};function iu(i,t){for(;(i[t]&65535)!=i[t];)i[t+1]+=i[t]>>>16,i[t]&=65535,t++}function _l(i,t){this.g=i,this.h=t}function xh(i,t){if(Or(t))throw Error("division by zero");if(Or(i))return new _l(Ta,Ta);if(ki(i))return t=xh(bn(i),t),new _l(bn(t.g),bn(t.h));if(ki(t))return t=xh(i,bn(t)),new _l(bn(t.g),t.h);if(30<i.g.length){if(ki(i)||ki(t))throw Error("slowDivide_ only works with positive integers.");for(var e=_p,n=t;0>=n.X(i);)e=T_(e),n=T_(n);var r=Bo(e,1),s=Bo(n,1);for(n=Bo(n,2),e=Bo(e,2);!Or(n);){var o=s.add(n);0>=o.X(i)&&(r=r.add(e),s=o),n=Bo(n,1),e=Bo(e,1)}return t=vh(i,r.R(t)),new _l(r,t)}for(r=Ta;0<=i.X(t);){for(e=Math.max(1,Math.floor(i.ea()/t.ea())),n=Math.ceil(Math.log(e)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),s=ur(e),o=s.R(t);ki(o)||0<o.X(i);)e-=n,s=ur(e),o=s.R(t);Or(s)&&(s=_p),r=r.add(s),i=vh(i,o)}return new _l(r,i)}Dt.gb=function(i){return xh(this,i).h};Dt.and=function(i){for(var t=Math.max(this.g.length,i.g.length),e=[],n=0;n<t;n++)e[n]=this.D(n)&i.D(n);return new we(e,this.h&i.h)};Dt.or=function(i){for(var t=Math.max(this.g.length,i.g.length),e=[],n=0;n<t;n++)e[n]=this.D(n)|i.D(n);return new we(e,this.h|i.h)};Dt.xor=function(i){for(var t=Math.max(this.g.length,i.g.length),e=[],n=0;n<t;n++)e[n]=this.D(n)^i.D(n);return new we(e,this.h^i.h)};function T_(i){for(var t=i.g.length+1,e=[],n=0;n<t;n++)e[n]=i.D(n)<<1|i.D(n-1)>>>31;return new we(e,i.h)}function Bo(i,t){var e=t>>5;t%=32;for(var n=i.g.length-e,r=[],s=0;s<n;s++)r[s]=0<t?i.D(s+e)>>>t|i.D(s+e+1)<<32-t:i.D(s+e);return new we(r,i.h)}yh.prototype.createWebChannel=yh.prototype.g;Ci.prototype.send=Ci.prototype.u;Ci.prototype.open=Ci.prototype.m;Ci.prototype.close=Ci.prototype.close;sf.NO_ERROR=0;sf.TIMEOUT=8;sf.HTTP_ERROR=6;_x.COMPLETE="complete";yx.EventType=Bc;Bc.OPEN="a";Bc.CLOSE="b";Bc.ERROR="c";Bc.MESSAGE="d";mn.prototype.listen=mn.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;_r.prototype.digest=_r.prototype.l;_r.prototype.reset=_r.prototype.reset;_r.prototype.update=_r.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=ur;we.fromString=Jx;var $M=function(){return new yh},KM=function(){return rf()},Yf=sf,ZM=_x,QM=Uo,S_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},JM=Hc,ru=yx,t1=qe,e1=we;const b_="@firebase/firestore";/**
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
 */class Un{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Un.UNAUTHENTICATED=new Un(null),Un.GOOGLE_CREDENTIALS=new Un("google-credentials-uid"),Un.FIRST_PARTY=new Un("first-party-uid"),Un.MOCK_USER=new Un("mock-user");/**
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
 */let ol="10.5.2";/**
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
 */const bo=new Dv("@firebase/firestore");function yl(){return bo.logLevel}function qt(i,...t){if(bo.logLevel<=Ee.DEBUG){const e=t.map(Bm);bo.debug(`Firestore (${ol}): ${i}`,...e)}}function wo(i,...t){if(bo.logLevel<=Ee.ERROR){const e=t.map(Bm);bo.error(`Firestore (${ol}): ${i}`,...e)}}function Eh(i,...t){if(bo.logLevel<=Ee.WARN){const e=t.map(Bm);bo.warn(`Firestore (${ol}): ${i}`,...e)}}function Bm(i){if(typeof i=="string")return i;try{/**
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
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
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
 */function _e(i="Unexpected state"){const t=`FIRESTORE (${ol}) INTERNAL ASSERTION FAILED: `+i;throw wo(t),new Error(t)}function gn(i,t){i||_e()}function ke(i,t){return i}/**
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
 */const St={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Jt extends Oo{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lo{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class tE{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class n1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Un.UNAUTHENTICATED))}shutdown(){}}class i1{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class r1{constructor(t){this.t=t,this.currentUser=Un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let s=new lo;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lo,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{qt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(qt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lo)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(qt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(gn(typeof n.accessToken=="string"),new tE(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return gn(t===null||typeof t=="string"),new Un(t)}}class s1{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Un.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class o1{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new s1(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Un.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a1{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l1{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=s=>{s.error!=null&&qt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,qt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{qt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):qt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(gn(typeof e.token=="string"),this.R=e.token,new a1(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function c1(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class eE{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=c1(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function Pe(i,t){return i<t?-1:i>t?1:0}function Ua(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
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
 */class dn{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Jt(St.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Jt(St.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Jt(St.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Jt(St.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return dn.fromMillis(Date.now())}static fromDate(t){return dn.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new dn(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Pe(this.nanoseconds,t.nanoseconds):Pe(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ve{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ve(t)}static min(){return new Ve(new dn(0,0))}static max(){return new Ve(new dn(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pc{constructor(t,e,n){e===void 0?e=0:e>t.length&&_e(),n===void 0?n=t.length-e:n>t.length-e&&_e(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return pc.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pc?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.get(r),o=e.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class tn extends pc{construct(t,e,n){return new tn(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Jt(St.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new tn(e)}static emptyPath(){return new tn([])}}const u1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mn extends pc{construct(t,e,n){return new Mn(t,e,n)}static isValidIdentifier(t){return u1.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mn(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new Jt(St.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new Jt(St.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Jt(St.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new Jt(St.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Mn(e)}static emptyPath(){return new Mn([])}}/**
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
 */class oe{constructor(t){this.path=t}static fromPath(t){return new oe(tn.fromString(t))}static fromName(t){return new oe(tn.fromString(t).popFirst(5))}static empty(){return new oe(tn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tn.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tn.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new oe(new tn(t.slice()))}}function h1(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Ve.fromTimestamp(n===1e9?new dn(e+1,0):new dn(e,n));return new ws(r,oe.empty(),t)}function f1(i){return new ws(i.readTime,i.key,-1)}class ws{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ws(Ve.min(),oe.empty(),-1)}static max(){return new ws(Ve.max(),oe.empty(),-1)}}function d1(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=oe.comparator(i.documentKey,t.documentKey),e!==0?e:Pe(i.largestBatchId,t.largestBatchId))}/**
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
 */const p1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function nE(i){if(i.code!==St.FAILED_PRECONDITION||i.message!==p1)throw i;qt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class vt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new vt((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof vt?e:vt.resolve(e)}catch(e){return vt.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):vt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):vt.reject(e)}static resolve(t){return new vt((e,n)=>{e(t)})}static reject(t){return new vt((e,n)=>{n(t)})}static waitFor(t){return new vt((e,n)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&e()},l=>n(l))}),o=!0,s===r&&e()})}static or(t){let e=vt.resolve(!1);for(const n of t)e=e.next(r=>r?vt.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new vt((n,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;e(t[c]).next(u=>{o[c]=u,++a,a===s&&n(o)},u=>r(u))}})}static doWhile(t,e){return new vt((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function df(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class iE{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.se(n),this.oe=n=>e.writeSequenceNumber(n))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}iE._e=-1;function Vm(i){return i==null}function Th(i){return i===0&&1/i==-1/0}function g1(i){return typeof i=="number"&&Number.isInteger(i)&&!Th(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function w_(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function al(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function rE(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
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
 */class pi{constructor(t,e){this.comparator=t,this.root=e||Tn.EMPTY}insert(t,e){return new pi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Tn.BLACK,null,null))}remove(t){return new pi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Tn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new su(this.root,t,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new su(this.root,t,this.comparator,!0)}}class su{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Tn{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??Tn.RED,this.left=r??Tn.EMPTY,this.right=s??Tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Tn(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Tn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return Tn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const t=this.left.check();if(t!==this.right.check())throw _e();return t+(this.isRed()?0:1)}}Tn.EMPTY=null,Tn.RED=!0,Tn.BLACK=!1;Tn.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Tn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class zn{constructor(t){this.comparator=t,this.data=new pi(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new A_(this.data.getIterator())}getIteratorFrom(t){return new A_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof zn)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new zn(this.comparator);return e.data=t,e}}class A_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tr{constructor(t){this.fields=t,t.sort(Mn.comparator)}static empty(){return new tr([])}unionWith(t){let e=new zn(Mn.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new tr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ua(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class _1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _1("Invalid base64 string: "+s):s}}(t);return new jr(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new jr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Pe(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jr.EMPTY_BYTE_STRING=new jr("");const y1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ao(i){if(gn(!!i),typeof i=="string"){let t=0;const e=y1.exec(i);if(gn(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Sn(i.seconds),nanos:Sn(i.nanos)}}function Sn(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function mc(i){return typeof i=="string"?jr.fromBase64String(i):jr.fromUint8Array(i)}/**
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
 */function zm(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function sE(i){const t=i.mapValue.fields.__previous_value__;return zm(t)?sE(t):t}function Sh(i){const t=Ao(i.mapValue.fields.__local_write_time__.timestampValue);return new dn(t.seconds,t.nanos)}/**
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
 */class v1{constructor(t,e,n,r,s,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class bh{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new bh("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof bh&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ou={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ka(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?zm(i)?4:x1(i)?9007199254740991:10:_e()}function yr(i,t){if(i===t)return!0;const e=ka(i);if(e!==ka(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Sh(i).isEqual(Sh(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Ao(r.timestampValue),a=Ao(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return mc(r.bytesValue).isEqual(mc(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return Sn(r.geoPointValue.latitude)===Sn(s.geoPointValue.latitude)&&Sn(r.geoPointValue.longitude)===Sn(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Sn(r.integerValue)===Sn(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Sn(r.doubleValue),a=Sn(s.doubleValue);return o===a?Th(o)===Th(a):isNaN(o)&&isNaN(a)}return!1}(i,t);case 9:return Ua(i.arrayValue.values||[],t.arrayValue.values||[],yr);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(w_(o)!==w_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!yr(o[l],a[l])))return!1;return!0}(i,t);default:return _e()}}function gc(i,t){return(i.values||[]).find(e=>yr(e,t))!==void 0}function Fa(i,t){if(i===t)return 0;const e=ka(i),n=ka(t);if(e!==n)return Pe(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Sn(s.integerValue||s.doubleValue),l=Sn(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(i,t);case 3:return M_(i.timestampValue,t.timestampValue);case 4:return M_(Sh(i),Sh(t));case 5:return Pe(i.stringValue,t.stringValue);case 6:return function(s,o){const a=mc(s),l=mc(o);return a.compareTo(l)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Pe(a[c],l[c]);if(u!==0)return u}return Pe(a.length,l.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const a=Pe(Sn(s.latitude),Sn(o.latitude));return a!==0?a:Pe(Sn(s.longitude),Sn(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Fa(a[c],l[c]);if(u)return u}return Pe(a.length,l.length)}(i.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ou.mapValue&&o===ou.mapValue)return 0;if(s===ou.mapValue)return 1;if(o===ou.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=Pe(l[h],u[h]);if(f!==0)return f;const d=Fa(a[l[h]],c[u[h]]);if(d!==0)return d}return Pe(l.length,u.length)}(i.mapValue,t.mapValue);default:throw _e()}}function M_(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return Pe(i,t);const e=Ao(i),n=Ao(t),r=Pe(e.seconds,n.seconds);return r!==0?r:Pe(e.nanos,n.nanos)}function Ba(i){return yp(i)}function yp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=Ao(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return mc(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return oe.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=yp(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${yp(e.fields[o])}`;return r+"}"}(i.mapValue):_e()}function vp(i){return!!i&&"integerValue"in i}function Hm(i){return!!i&&"arrayValue"in i}function Qu(i){return!!i&&"mapValue"in i}function Vl(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return al(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Vl(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Vl(i.arrayValue.values[e]);return t}return Object.assign({},i)}function x1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Fi{constructor(t){this.value=t}static empty(){return new Fi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Qu(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vl(e)}setAll(t){let e=Mn.emptyPath(),n={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,n,r),n={},r=[],e=a.popLast()}o?n[a.lastSegment()]=Vl(o):r.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Qu(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return yr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Qu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){al(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new Fi(Vl(this.value))}}function oE(i){const t=[];return al(i.fields,(e,n)=>{const r=new Mn([e]);if(Qu(n)){const s=oE(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new tr(t)}/**
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
 */class Zi{constructor(t,e,n,r,s,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Zi(t,0,Ve.min(),Ve.min(),Ve.min(),Fi.empty(),0)}static newFoundDocument(t,e,n,r){return new Zi(t,1,e,Ve.min(),n,r,0)}static newNoDocument(t,e){return new Zi(t,2,e,Ve.min(),Ve.min(),Fi.empty(),0)}static newUnknownDocument(t,e){return new Zi(t,3,e,Ve.min(),Ve.min(),Fi.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Fi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Fi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Zi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Zi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wh{constructor(t,e){this.position=t,this.inclusive=e}}function R_(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=oe.comparator(oe.fromName(o.referenceValue),e.key):n=Fa(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function C_(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!yr(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ah{constructor(t,e="asc"){this.field=t,this.dir=e}}function E1(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class aE{}class fn extends aE{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new S1(t,e,n):e==="array-contains"?new A1(t,n):e==="in"?new M1(t,n):e==="not-in"?new R1(t,n):e==="array-contains-any"?new C1(t,n):new fn(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new b1(t,n):new w1(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Fa(e,this.value)):e!==null&&ka(this.value)===ka(e)&&this.matchesComparison(Fa(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class As extends aE{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new As(t,e)}matches(t){return lE(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function lE(i){return i.op==="and"}function cE(i){return T1(i)&&lE(i)}function T1(i){for(const t of i.filters)if(t instanceof As)return!1;return!0}function xp(i){if(i instanceof fn)return i.field.canonicalString()+i.op.toString()+Ba(i.value);if(cE(i))return i.filters.map(t=>xp(t)).join(",");{const t=i.filters.map(e=>xp(e)).join(",");return`${i.op}(${t})`}}function uE(i,t){return i instanceof fn?function(n,r){return r instanceof fn&&n.op===r.op&&n.field.isEqual(r.field)&&yr(n.value,r.value)}(i,t):i instanceof As?function(n,r){return r instanceof As&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,a)=>s&&uE(o,r.filters[a]),!0):!1}(i,t):void _e()}function hE(i){return i instanceof fn?function(e){return`${e.field.canonicalString()} ${e.op} ${Ba(e.value)}`}(i):i instanceof As?function(e){return e.op.toString()+" {"+e.getFilters().map(hE).join(" ,")+"}"}(i):"Filter"}class S1 extends fn{constructor(t,e,n){super(t,e,n),this.key=oe.fromName(n.referenceValue)}matches(t){const e=oe.comparator(t.key,this.key);return this.matchesComparison(e)}}class b1 extends fn{constructor(t,e){super(t,"in",e),this.keys=fE("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class w1 extends fn{constructor(t,e){super(t,"not-in",e),this.keys=fE("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function fE(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>oe.fromName(n.referenceValue))}class A1 extends fn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hm(e)&&gc(e.arrayValue,this.value)}}class M1 extends fn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&gc(this.value.arrayValue,e)}}class R1 extends fn{constructor(t,e){super(t,"not-in",e)}matches(t){if(gc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!gc(this.value.arrayValue,e)}}class C1 extends fn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hm(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>gc(this.value.arrayValue,n))}}/**
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
 */class I1{constructor(t,e=null,n=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function I_(i,t=null,e=[],n=[],r=null,s=null,o=null){return new I1(i,t,e,n,r,s,o)}function Gm(i){const t=ke(i);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>xp(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Vm(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ba(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ba(n)).join(",")),t.ce=e}return t.ce}function Wm(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!E1(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!uE(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!C_(i.startAt,t.startAt)&&C_(i.endAt,t.endAt)}/**
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
 */class pf{constructor(t,e=null,n=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function P1(i,t,e,n,r,s,o,a){return new pf(i,t,e,n,r,s,o,a)}function D1(i){return new pf(i)}function P_(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function L1(i){return i.collectionGroup!==null}function zl(i){const t=ke(i);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new zn(Mn.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Ah(s,n))}),e.has(Mn.keyField().canonicalString())||t.le.push(new Ah(Mn.keyField(),n))}return t.le}function co(i){const t=ke(i);return t.he||(t.he=N1(t,zl(i))),t.he}function N1(i,t){if(i.limitType==="F")return I_(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Ah(r.field,s)});const e=i.endAt?new wh(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new wh(i.startAt.position,i.startAt.inclusive):null;return I_(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function Ep(i,t,e){return new pf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function dE(i,t){return Wm(co(i),co(t))&&i.limitType===t.limitType}function pE(i){return`${Gm(co(i))}|lt:${i.limitType}`}function vl(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>hE(r)).join(", ")}]`),Vm(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ba(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ba(r)).join(",")),`Target(${n})`}(co(i))}; limitType=${i.limitType})`}function Xm(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):oe.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of zl(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,a,l){const c=R_(o,a,l);return o.inclusive?c<=0:c<0}(n.startAt,zl(n),r)||n.endAt&&!function(o,a,l){const c=R_(o,a,l);return o.inclusive?c>=0:c>0}(n.endAt,zl(n),r))}(i,t)}function O1(i){return(t,e)=>{let n=!1;for(const r of zl(i)){const s=U1(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function U1(i,t,e){const n=i.field.isKeyField()?oe.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Fa(l,c):_e()}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return _e()}}/**
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
 */class ll{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){al(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return rE(this.inner)}size(){return this.innerSize}}/**
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
 */const k1=new pi(oe.comparator);function Mh(){return k1}const mE=new pi(oe.comparator);function au(...i){let t=mE;for(const e of i)t=t.insert(e.key,e);return t}function gE(i){let t=mE;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function to(){return Hl()}function _E(){return Hl()}function Hl(){return new ll(i=>i.toString(),(i,t)=>i.isEqual(t))}const F1=new pi(oe.comparator),B1=new zn(oe.comparator);function kn(...i){let t=B1;for(const e of i)t=t.add(e);return t}const V1=new zn(Pe);function z1(){return V1}/**
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
 */function yE(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Th(t)?"-0":t}}function vE(i){return{integerValue:""+i}}function xE(i,t){return g1(t)?vE(t):yE(i,t)}/**
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
 */class mf{constructor(){this._=void 0}}function H1(i,t,e){return i instanceof Rh?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&zm(s)&&(s=sE(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):i instanceof _c?TE(i,t):i instanceof yc?SE(i,t):function(r,s){const o=EE(r,s),a=D_(o)+D_(r.Ie);return vp(o)&&vp(r.Ie)?vE(a):yE(r.serializer,a)}(i,t)}function G1(i,t,e){return i instanceof _c?TE(i,t):i instanceof yc?SE(i,t):e}function EE(i,t){return i instanceof vc?function(n){return vp(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class Rh extends mf{}class _c extends mf{constructor(t){super(),this.elements=t}}function TE(i,t){const e=bE(t);for(const n of i.elements)e.some(r=>yr(r,n))||e.push(n);return{arrayValue:{values:e}}}class yc extends mf{constructor(t){super(),this.elements=t}}function SE(i,t){let e=bE(t);for(const n of i.elements)e=e.filter(r=>!yr(r,n));return{arrayValue:{values:e}}}class vc extends mf{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function D_(i){return Sn(i.integerValue||i.doubleValue)}function bE(i){return Hm(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class W1{constructor(t,e){this.field=t,this.transform=e}}function X1(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof _c&&r instanceof _c||n instanceof yc&&r instanceof yc?Ua(n.elements,r.elements,yr):n instanceof vc&&r instanceof vc?yr(n.Ie,r.Ie):n instanceof Rh&&r instanceof Rh}(i.transform,t.transform)}class j1{constructor(t,e){this.version=t,this.transformResults=e}}class Vr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vr}static exists(t){return new Vr(void 0,t)}static updateTime(t){return new Vr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ju(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class gf{}function wE(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new ME(i.key,Vr.none()):new _f(i.key,i.data,Vr.none());{const e=i.data,n=Fi.empty();let r=new zn(Mn.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new ko(i.key,n,new tr(r.toArray()),Vr.none())}}function q1(i,t,e){i instanceof _f?function(r,s,o){const a=r.value.clone(),l=N_(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(i,t,e):i instanceof ko?function(r,s,o){if(!Ju(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=N_(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(AE(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Gl(i,t,e,n){return i instanceof _f?function(s,o,a,l){if(!Ju(s.precondition,o))return a;const c=s.value.clone(),u=O_(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(i,t,e,n):i instanceof ko?function(s,o,a,l){if(!Ju(s.precondition,o))return a;const c=O_(s.fieldTransforms,l,o),u=o.data;return u.setAll(AE(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(i,t,e,n):function(s,o,a){return Ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(i,t,e)}function Y1(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=EE(n.transform,r||null);s!=null&&(e===null&&(e=Fi.empty()),e.set(n.field,s))}return e||null}function L_(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ua(n,r,(s,o)=>X1(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class _f extends gf{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ko extends gf{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AE(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function N_(i,t,e){const n=new Map;gn(i.length===e.length);for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,a=t.data.field(s.field);n.set(s.field,G1(o,a,e[r]))}return n}function O_(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,H1(s,o,t))}return n}class ME extends gf{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $1 extends gf{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class K1{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&q1(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Gl(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Gl(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=_E();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(r.key)?null:a;const l=wE(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Ve.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),kn())}isEqual(t){return this.batchId===t.batchId&&Ua(this.mutations,t.mutations,(e,n)=>L_(e,n))&&Ua(this.baseMutations,t.baseMutations,(e,n)=>L_(e,n))}}class jm{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){gn(t.mutations.length===n.length);let r=function(){return F1}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new jm(t,e,n,r)}}/**
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
 */class Z1{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var Ze,ve;function Q1(i){switch(i){default:return _e();case St.CANCELLED:case St.UNKNOWN:case St.DEADLINE_EXCEEDED:case St.RESOURCE_EXHAUSTED:case St.INTERNAL:case St.UNAVAILABLE:case St.UNAUTHENTICATED:return!1;case St.INVALID_ARGUMENT:case St.NOT_FOUND:case St.ALREADY_EXISTS:case St.PERMISSION_DENIED:case St.FAILED_PRECONDITION:case St.ABORTED:case St.OUT_OF_RANGE:case St.UNIMPLEMENTED:case St.DATA_LOSS:return!0}}function J1(i){if(i===void 0)return wo("GRPC error has no .code"),St.UNKNOWN;switch(i){case Ze.OK:return St.OK;case Ze.CANCELLED:return St.CANCELLED;case Ze.UNKNOWN:return St.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return St.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return St.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return St.INTERNAL;case Ze.UNAVAILABLE:return St.UNAVAILABLE;case Ze.UNAUTHENTICATED:return St.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return St.INVALID_ARGUMENT;case Ze.NOT_FOUND:return St.NOT_FOUND;case Ze.ALREADY_EXISTS:return St.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return St.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return St.FAILED_PRECONDITION;case Ze.ABORTED:return St.ABORTED;case Ze.OUT_OF_RANGE:return St.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return St.UNIMPLEMENTED;case Ze.DATA_LOSS:return St.DATA_LOSS;default:return _e()}}(ve=Ze||(Ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new e1([4294967295,4294967295],0);class tR{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Tp(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function eR(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function nR(i,t){return Tp(i,t.toTimestamp())}function Sa(i){return gn(!!i),Ve.fromTimestamp(function(e){const n=Ao(e);return new dn(n.seconds,n.nanos)}(i))}function RE(i,t){return function(n){return new tn(["projects",n.projectId,"databases",n.database])}(i).child("documents").child(t).canonicalString()}function iR(i){const t=tn.fromString(i);return gn(hR(t)),t}function Sp(i,t){return RE(i.databaseId,t.path)}function rR(i){const t=iR(i);return t.length===4?tn.emptyPath():oR(t)}function sR(i){return new tn(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function oR(i){return gn(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function U_(i,t,e){return{name:Sp(i,t),fields:e.value.mapValue.fields}}function aR(i,t){let e;if(t instanceof _f)e={update:U_(i,t.key,t.value)};else if(t instanceof ME)e={delete:Sp(i,t.key)};else if(t instanceof ko)e={update:U_(i,t.key,t.data),updateMask:uR(t.fieldMask)};else{if(!(t instanceof $1))return _e();e={verify:Sp(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof Rh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _c)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yc)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw _e()}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:nR(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_e()}(i,t.precondition)),e}function lR(i,t){return i&&i.length>0?(gn(t!==void 0),i.map(e=>function(r,s){let o=r.updateTime?Sa(r.updateTime):Sa(s);return o.isEqual(Ve.min())&&(o=Sa(s)),new j1(o,r.transformResults||[])}(e,t))):[]}function cR(i){let t=rR(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){gn(n===1);const u=e.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let s=[];e.where&&(s=function(h){const f=CE(h);return f instanceof As&&cE(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(_){return new Ah(ua(_.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Vm(f)?null:f}(e.limit));let l=null;e.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new wh(d,f)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new wh(d,f)}(e.endAt)),P1(t,r,o,s,a,"F",l,c)}function CE(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ua(e.unaryFilter.field);return fn.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ua(e.unaryFilter.field);return fn.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ua(e.unaryFilter.field);return fn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ua(e.unaryFilter.field);return fn.create(o,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(i):i.fieldFilter!==void 0?function(e){return fn.create(ua(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return As.create(e.compositeFilter.filters.map(n=>CE(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return _e()}}(e.compositeFilter.op))}(i):_e()}function ua(i){return Mn.fromServerFormat(i.fieldPath)}function uR(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function hR(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class fR{constructor(t){this.ut=t}}function dR(i){const t=cR({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Ep(t,t.limit,"L"):t}/**
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
 */class pR{constructor(){this.on=new mR}addToCollectionParentIndex(t,e){return this.on.add(e),vt.resolve()}getCollectionParents(t,e){return vt.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return vt.resolve()}deleteFieldIndex(t,e){return vt.resolve()}deleteAllFieldIndexes(t){return vt.resolve()}createTargetIndexes(t,e){return vt.resolve()}getDocumentsMatchingTarget(t,e){return vt.resolve(null)}getIndexType(t,e){return vt.resolve(0)}getFieldIndexes(t,e){return vt.resolve([])}getNextCollectionGroupToUpdate(t){return vt.resolve(null)}getMinOffset(t,e){return vt.resolve(ws.min())}getMinOffsetFromCollectionGroup(t,e){return vt.resolve(ws.min())}updateCollectionGroup(t,e,n){return vt.resolve()}updateIndexEntries(t,e){return vt.resolve()}}class mR{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new zn(tn.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new zn(tn.comparator)).toArray()}}/**
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
 */class Va{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Va(0)}static Nn(){return new Va(-1)}}/**
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
 */class gR{constructor(){this.changes=new ll(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Zi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?vt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class _R{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class yR{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Gl(n.mutation,r,tr.empty(),dn.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,kn()).next(()=>n))}getLocalViewOfDocuments(t,e,n=kn()){const r=to();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=au();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=to();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,kn()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,r){let s=Mh();const o=Hl(),a=function(){return Hl()}();return e.forEach((l,c)=>{const u=n.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof ko)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Gl(u.mutation,c,u.mutation.getFieldMask(),dn.now())):o.set(c.key,tr.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),e.forEach((c,u)=>{var h;return a.set(c,new _R(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const n=Hl();let r=new pi((o,a)=>o-a),s=kn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let u=n.get(l)||tr.empty();u=a.applyToLocalView(c,u),n.set(l,u);const h=(r.get(a.batchId)||kn()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=_E();u.forEach(f=>{if(!s.has(f)){const d=wE(e.get(f),n.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return vt.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):L1(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):vt.resolve(to());let a=-1,l=s;return o.next(c=>vt.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?vt.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,kn())).next(u=>({batchId:a,changes:gE(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new oe(e)).next(n=>{let r=au();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=au();return this.indexManager.getCollectionParents(t,s).next(a=>vt.forEach(a,l=>{const c=function(h,f){return new pf(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,n,r).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Zi.newInvalidDocument(u)))});let a=au();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&Gl(u.mutation,c,tr.empty(),dn.now()),Xm(e,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class vR{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return vt.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Sa(r.createTime)}}(e)),vt.resolve()}getNamedQuery(t,e){return vt.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(r){return{name:r.name,query:dR(r.bundledQuery),readTime:Sa(r.readTime)}}(e)),vt.resolve()}}/**
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
 */class xR{constructor(){this.overlays=new pi(oe.comparator),this.lr=new Map}getOverlay(t,e){return vt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=to();return vt.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.lt(t,e,s)}),vt.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.lr.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(n)),vt.resolve()}getOverlaysForCollection(t,e,n){const r=to(),s=e.length+1,o=new oe(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>n&&r.set(l.getKey(),l)}return vt.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new pi((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>n){let u=s.get(c.largestBatchId);u===null&&(u=to(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=to(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return vt.resolve(a)}lt(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Z1(e,n));let s=this.lr.get(e);s===void 0&&(s=kn(),this.lr.set(e,s)),this.lr.set(e,s.add(n.key))}}/**
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
 */class qm{constructor(){this.hr=new zn(un.Pr),this.Ir=new zn(un.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new un(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.dr(new un(t,e))}Ar(t,e){t.forEach(n=>this.removeReference(n,e))}Rr(t){const e=new oe(new tn([])),n=new un(e,t),r=new un(e,t+1),s=[];return this.Ir.forEachInRange([n,r],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new oe(new tn([])),n=new un(e,t),r=new un(e,t+1);let s=kn();return this.Ir.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new un(t,0),n=this.hr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class un{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return oe.comparator(t.key,e.key)||Pe(t.gr,e.gr)}static Tr(t,e){return Pe(t.gr,e.gr)||oe.comparator(t.key,e.key)}}/**
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
 */class ER{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new zn(un.Pr)}checkEmpty(t){return vt.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new K1(s,e,n,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new un(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return vt.resolve(o)}lookupMutationBatch(t,e){return vt.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Sr(n),s=r<0?0:r;return vt.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return vt.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return vt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new un(e,0),r=new un(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([n,r],o=>{const a=this.wr(o.gr);s.push(a)}),vt.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new zn(Pe);return e.forEach(r=>{const s=new un(r,0),o=new un(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{n=n.add(a.gr)})}),vt.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;oe.isDocumentKey(s)||(s=s.child(""));const o=new un(new oe(s),0);let a=new zn(Pe);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!n.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.gr)),!0)},o),vt.resolve(this.br(a))}br(t){const e=[];return t.forEach(n=>{const r=this.wr(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){gn(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.yr;return vt.forEach(e.mutations,r=>{const s=new un(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.yr=n})}Fn(t){}containsKey(t,e){const n=new un(e,0),r=this.yr.firstAfterOrEqual(n);return vt.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,vt.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class TR{constructor(t){this.Cr=t,this.docs=function(){return new pi(oe.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return vt.resolve(n?n.document.mutableCopy():Zi.newInvalidDocument(e))}getEntries(t,e){let n=Mh();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():Zi.newInvalidDocument(r))}),vt.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=Mh();const o=e.path,a=new oe(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||d1(f1(u),n)<=0||(r.has(u.key)||Xm(e,u))&&(s=s.insert(u.key,u.mutableCopy()))}return vt.resolve(s)}getAllFromCollectionGroup(t,e,n,r){_e()}vr(t,e){return vt.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new SR(this)}getSize(t){return vt.resolve(this.size)}}class SR extends gR{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this._r.addEntry(t,r)):this._r.removeEntry(n)}),vt.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
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
 */class bR{constructor(t){this.persistence=t,this.Fr=new ll(e=>Gm(e),Wm),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.Mr=0,this.Or=new qm,this.targetCount=0,this.Nr=Va.On()}forEachTarget(t,e){return this.Fr.forEach((n,r)=>e(r)),vt.resolve()}getLastRemoteSnapshotVersion(t){return vt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return vt.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),vt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),vt.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Va(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,vt.resolve()}updateTargetData(t,e){return this.kn(e),vt.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,vt.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),vt.waitFor(s).next(()=>r)}getTargetCount(t){return vt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return vt.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),vt.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),vt.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),vt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return vt.resolve(n)}containsKey(t,e){return vt.resolve(this.Or.containsKey(e))}}/**
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
 */class wR{constructor(t,e){this.Br={},this.overlays={},this.Lr=new iE(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new bR(this),this.indexManager=new pR,this.remoteDocumentCache=function(r){return new TR(r)}(n=>this.referenceDelegate.Qr(n)),this.serializer=new fR(e),this.Kr=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xR,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new ER(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){qt("MemoryPersistence","Starting transaction:",t);const r=new AR(this.Lr.next());return this.referenceDelegate.$r(),n(r).next(s=>this.referenceDelegate.Ur(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Wr(t,e){return vt.or(Object.values(this.Br).map(n=>()=>n.containsKey(t,e)))}}class AR extends m1{constructor(t){super(),this.currentSequenceNumber=t}}class Ym{constructor(t){this.persistence=t,this.Gr=new qm,this.zr=null}static jr(t){return new Ym(t)}get Hr(){if(this.zr)return this.zr;throw _e()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),vt.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),vt.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),vt.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(r=>this.Hr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Hr.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return vt.forEach(this.Hr,n=>{const r=oe.fromPath(n);return this.Jr(t,r).next(s=>{s||e.removeEntry(r,Ve.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(n=>{n?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return vt.or([()=>vt.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
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
 */class $m{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=r}static Qi(t,e){let n=kn(),r=kn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new $m(t,e.fromCache,n,r)}}/**
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
 */class MR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class RR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MR;return this.Hi(t,e,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>s.result)}Ji(t,e,n,r){return n.documentReadCount<this.Ui?(yl()<=Ee.DEBUG&&qt("QueryEngine","SDK will not create cache indexes for query:",vl(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),vt.resolve()):(yl()<=Ee.DEBUG&&qt("QueryEngine","Query:",vl(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(yl()<=Ee.DEBUG&&qt("QueryEngine","The SDK decides to create cache indexes for query:",vl(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,co(e))):vt.resolve())}zi(t,e){if(P_(e))return vt.resolve(null);let n=co(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Ep(e,null,"F"),n=co(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=kn(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(l=>{const c=this.Yi(e,a);return this.Zi(e,c,o,l.readTime)?this.zi(t,Ep(e,null,"F")):this.Xi(t,c,e,l)}))})))}ji(t,e,n,r){return P_(e)||r.isEqual(Ve.min())?vt.resolve(null):this.Gi.getDocuments(t,n).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,n,r)?vt.resolve(null):(yl()<=Ee.DEBUG&&qt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vl(e)),this.Xi(t,o,e,h1(r,-1)).next(a=>a))})}Yi(t,e){let n=new zn(O1(t));return e.forEach((r,s)=>{Xm(t,s)&&(n=n.add(s))}),n}Zi(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Hi(t,e,n){return yl()<=Ee.DEBUG&&qt("QueryEngine","Using full collection scan to execute query:",vl(e)),this.Gi.getDocumentsMatchingQuery(t,e,ws.min(),n)}Xi(t,e,n,r){return this.Gi.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class CR{constructor(t,e,n,r){this.persistence=t,this.es=e,this.serializer=r,this.ts=new pi(Pe),this.ns=new ll(s=>Gm(s),Wm),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yR(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function IR(i,t,e,n){return new CR(i,t,e,n)}async function IE(i,t){const e=ke(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.os(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let l=kn();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return e.localDocuments.getDocuments(n,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function PR(i,t){const e=ke(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=vt.resolve();return f.forEach(_=>{d=d.next(()=>u.getEntry(l,_)).next(g=>{const m=c.docVersions.get(_);gn(m!==null),g.version.compareTo(m)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let l=kn();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function DR(i){const t=ke(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function LR(i,t){const e=ke(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}class k_{constructor(){this.activeTargetIds=z1()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class NR{constructor(){this.eo=new k_,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new k_,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class OR{ro(t){}shutdown(){}}/**
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
 */class F_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){qt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){qt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lu=null;function $f(){return lu===null?lu=function(){return 268435456+Math.round(2147483648*Math.random())}():lu++,"0x"+lu.toString(16)}/**
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
 */const UR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kR{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const Dn="WebChannelConnection";class FR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=n+"://"+e.host,this.fo=`projects/${r}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get yo(){return!1}wo(e,n,r,s,o){const a=$f(),l=this.So(e,n);qt("RestConnection",`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(e,l,c,r).then(u=>(qt("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw Eh("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,n,r,s,o,a){return this.wo(e,n,r,s,o)}bo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ol}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}So(e,n){const r=UR[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,r){const s=$f();return new Promise((o,a)=>{const l=new t1;l.setWithCredentials(!0),l.listenOnce(ZM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yf.NO_ERROR:const u=l.getResponseJson();qt(Dn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Yf.TIMEOUT:qt(Dn,`RPC '${t}' ${s} timed out`),a(new Jt(St.DEADLINE_EXCEEDED,"Request time out"));break;case Yf.HTTP_ERROR:const h=l.getStatus();if(qt(Dn,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const _=function(m){const p=m.toLowerCase().replace(/_/g,"-");return Object.values(St).indexOf(p)>=0?p:St.UNKNOWN}(d.status);a(new Jt(_,d.message))}else a(new Jt(St.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Jt(St.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{qt(Dn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(r);qt(Dn,`RPC '${t}' ${s} sending request:`,r),l.send(e,"POST",c,n,15)})}vo(t,e,n){const r=$f(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=$M(),a=KM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new JM({})),this.bo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const u=s.join("");qt(Dn,`Creating RPC '${t}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const _=new kR({co:m=>{d?qt(Dn,`Not sending because RPC '${t}' stream ${r} is closed:`,m):(f||(qt(Dn,`Opening RPC '${t}' stream ${r} transport.`),h.open(),f=!0),qt(Dn,`RPC '${t}' stream ${r} sending:`,m),h.send(m))},lo:()=>h.close()}),g=(m,p,y)=>{m.listen(p,v=>{try{y(v)}catch(E){setTimeout(()=>{throw E},0)}})};return g(h,ru.EventType.OPEN,()=>{d||qt(Dn,`RPC '${t}' stream ${r} transport opened.`)}),g(h,ru.EventType.CLOSE,()=>{d||(d=!0,qt(Dn,`RPC '${t}' stream ${r} transport closed`),_.Ro())}),g(h,ru.EventType.ERROR,m=>{d||(d=!0,Eh(Dn,`RPC '${t}' stream ${r} transport errored:`,m),_.Ro(new Jt(St.UNAVAILABLE,"The operation could not be completed")))}),g(h,ru.EventType.MESSAGE,m=>{var p;if(!d){const y=m.data[0];gn(!!y);const v=y,E=v.error||((p=v[0])===null||p===void 0?void 0:p.error);if(E){qt(Dn,`RPC '${t}' stream ${r} received error:`,E);const b=E.status;let A=function(S){const M=Ze[S];if(M!==void 0)return J1(M)}(b),w=E.message;A===void 0&&(A=St.INTERNAL,w="Unknown error status: "+b+" with message "+E.message),d=!0,_.Ro(new Jt(A,w)),h.close()}else qt(Dn,`RPC '${t}' stream ${r} received:`,y),_.Vo(y)}}),g(a,QM.STAT_EVENT,m=>{m.stat===S_.PROXY?qt(Dn,`RPC '${t}' stream ${r} detected buffering proxy`):m.stat===S_.NOPROXY&&qt(Dn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function Kf(){return typeof document<"u"?document:null}/**
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
 */function yf(i){return new tR(i,!0)}/**
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
 */class PE{constructor(t,e,n=1e3,r=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=r,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,e-n);r>0&&qt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class BR{constructor(t,e,n,r,s,o,a,l){this.si=t,this.Ko=n,this.$o=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new PE(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===St.RESOURCE_EXHAUSTED?(wo(e.toString()),wo("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===St.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Uo===e&&this.s_(n,r)},n=>{t(()=>{const r=new Jt(St.UNKNOWN,"Fetching auth token failed: "+n.message);return this.o_(r)})})}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{n(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(r=>{n(()=>this.o_(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return qt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(qt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VR extends BR{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(gn(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=lR(t.writeResults,t.commitTime),n=Sa(t.commitTime);return this.listener.I_(n,e)}return gn(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=sR(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>aR(this.serializer,n))};this.e_(e)}}/**
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
 */class zR extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new Jt(St.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.wo(t,e,n,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===St.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Jt(St.UNKNOWN,r.toString())})}Co(t,e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,e,n,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===St.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Jt(St.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class HR{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(wo(e),this.f_=!1):qt("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class GR{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{n.enqueueAndForget(async()=>{jc(this)&&(qt("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ke(l);c.C_.add(4),await Xc(c),c.M_.set("Unknown"),c.C_.delete(4),await vf(c)}(this))})}),this.M_=new HR(n,r)}}async function vf(i){if(jc(i))for(const t of i.v_)await t(!0)}async function Xc(i){for(const t of i.v_)await t(!1)}function jc(i){return ke(i).C_.size===0}async function DE(i,t,e){if(!df(t))throw t;i.C_.add(1),await Xc(i),i.M_.set("Offline"),e||(e=()=>DR(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{qt("RemoteStore","Retrying IndexedDB access"),await e(),i.C_.delete(1),await vf(i)})}function LE(i,t){return t().catch(e=>DE(i,e,t))}async function xf(i){const t=ke(i),e=Ms(t);let n=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;WR(t);)try{const r=await LR(t.localStore,n);if(r===null){t.b_.length===0&&e.Zo();break}n=r.batchId,XR(t,r)}catch(r){await DE(t,r)}NE(t)&&OE(t)}function WR(i){return jc(i)&&i.b_.length<10}function XR(i,t){i.b_.push(t);const e=Ms(i);e.Ho()&&e.h_&&e.P_(t.mutations)}function NE(i){return jc(i)&&!Ms(i).jo()&&i.b_.length>0}function OE(i){Ms(i).start()}async function jR(i){Ms(i).E_()}async function qR(i){const t=Ms(i);for(const e of i.b_)t.P_(e.mutations)}async function YR(i,t,e){const n=i.b_.shift(),r=jm.from(n,t,e);await LE(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await xf(i)}async function $R(i,t){t&&Ms(i).h_&&await async function(n,r){if(function(o){return Q1(o)&&o!==St.ABORTED}(r.code)){const s=n.b_.shift();Ms(n).Yo(),await LE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await xf(n)}}(i,t),NE(i)&&OE(i)}async function B_(i,t){const e=ke(i);e.asyncQueue.verifyOperationInProgress(),qt("RemoteStore","RemoteStore received new credentials");const n=jc(e);e.C_.add(3),await Xc(e),n&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await vf(e)}async function KR(i,t){const e=ke(i);t?(e.C_.delete(2),await vf(e)):t||(e.C_.add(2),await Xc(e),e.M_.set("Unknown"))}function Ms(i){return i.N_||(i.N_=function(e,n,r){const s=ke(e);return s.A_(),new VR(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{ho:jR.bind(null,i),Io:$R.bind(null,i),T_:qR.bind(null,i),I_:YR.bind(null,i)}),i.v_.push(async t=>{t?(i.N_.Yo(),await xf(i)):(await i.N_.stop(),i.b_.length>0&&(qt("RemoteStore",`Stopping write stream with ${i.b_.length} pending writes`),i.b_=[]))})),i.N_}/**
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
 */class Km{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new lo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,a=new Km(t,e,o,r,s);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Jt(St.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function UE(i,t){if(wo("AsyncQueue",`${t}: ${i}`),df(i))return new Jt(St.UNAVAILABLE,`${t}: ${i}`);throw i}class ZR{constructor(){this.queries=new ll(t=>pE(t),dE),this.onlineState="Unknown",this.q_=new Set}}function QR(i){i.q_.forEach(t=>{t.next()})}class JR{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ll(a=>pE(a),dE),this.fa=new Map,this.ga=new Set,this.pa=new pi(oe.comparator),this.ya=new Map,this.wa=new qm,this.Sa={},this.ba=new Map,this.Da=Va.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function tC(i,t,e){const n=rC(i);try{const r=await function(o,a){const l=ke(o),c=dn.now(),u=a.reduce((d,_)=>d.add(_.key),kn());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let _=Mh(),g=kn();return l.ss.getEntries(d,u).next(m=>{_=m,_.forEach((p,y)=>{y.isValidDocument()||(g=g.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,_)).next(m=>{h=m;const p=[];for(const y of a){const v=Y1(y,h.get(y.key).overlayedDocument);v!=null&&p.push(new ko(y.key,v,oE(v.value.mapValue),Vr.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,p,a)}).next(m=>{f=m;const p=m.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(d,m.batchId,p)})}).then(()=>({batchId:f.batchId,changes:gE(h)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new pi(Pe)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(n,r.batchId,e),await Ef(n,r.changes),await xf(n.remoteStore)}catch(r){const s=UE(r,"Failed to persist write");e.reject(s)}}function V_(i,t,e){const n=ke(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=ke(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(c=!0)}),c&&QR(l)}(n.eventManager,t),r.length&&n.Va.a_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function eC(i,t){const e=ke(i),n=t.batch.batchId;try{const r=await PR(e.localStore,t);FE(e,n,null),kE(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Ef(e,r)}catch(r){await nE(r)}}async function nC(i,t,e){const n=ke(i);try{const r=await function(o,a){const l=ke(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(gn(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(n.localStore,t);FE(n,t,e),kE(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Ef(n,r)}catch(r){await nE(r)}}function kE(i,t){(i.ba.get(t)||[]).forEach(e=>{e.resolve()}),i.ba.delete(t)}function FE(i,t,e){const n=ke(i);let r=n.Sa[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.Sa[n.currentUser.toKey()]=r}}async function Ef(i,t,e){const n=ke(i),r=[],s=[],o=[];n.ma.isEmpty()||(n.ma.forEach((a,l)=>{o.push(n.va(l,t,e).then(c=>{if((c||e)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=$m.Qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),n.Va.a_(r),await async function(l,c){const u=ke(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>vt.forEach(c,f=>vt.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>vt.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!df(h))throw h;qt("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.ts.get(f),_=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(_);u.ts=u.ts.insert(f,g)}}}(n.localStore,s))}async function iC(i,t){const e=ke(i);if(!e.currentUser.isEqual(t)){qt("SyncEngine","User change. New user:",t.toKey());const n=await IE(e.localStore,t);e.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new Jt(St.CANCELLED,o))})}),s.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Ef(e,n._s)}}function rC(i){const t=ke(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=eC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nC.bind(null,t),t}class z_{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=yf(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return IR(this.persistence,new RR,t.initialUser,this.serializer)}createPersistence(t){return new wR(Ym.jr,this.serializer)}createSharedClientState(t){return new NR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sC{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>V_(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=iC.bind(null,this.syncEngine),await KR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ZR}()}createDatastore(t){const e=yf(t.databaseInfo.databaseId),n=function(s){return new FR(s)}(t.databaseInfo);return function(s,o,a,l){return new zR(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,a){return new GR(n,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>V_(this.syncEngine,e,0),function(){return F_.D()?new F_:new OR}())}createSyncEngine(t,e){return function(r,s,o,a,l,c,u){const h=new JR(r,s,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const n=ke(e);qt("RemoteStore","RemoteStore shutting down."),n.C_.add(5),await Xc(n),n.F_.shutdown(),n.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class oC{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Un.UNAUTHENTICATED,this.clientId=eE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{qt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(qt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Jt(St.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new lo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=UE(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Zf(i,t){i.asyncQueue.verifyOperationInProgress(),qt("FirestoreClient","Initializing OfflineComponentProvider");const e=await i.getConfiguration();await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await IE(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function H_(i,t){i.asyncQueue.verifyOperationInProgress();const e=await lC(i);qt("FirestoreClient","Initializing OnlineComponentProvider");const n=await i.getConfiguration();await t.initialize(e,n),i.setCredentialChangeListener(r=>B_(t.remoteStore,r)),i.setAppCheckTokenChangeListener((r,s)=>B_(t.remoteStore,s)),i._onlineComponents=t}function aC(i){return i.name==="FirebaseError"?i.code===St.FAILED_PRECONDITION||i.code===St.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}async function lC(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){qt("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zf(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!aC(e))throw e;Eh("Error using user provided cache. Falling back to memory cache: "+e),await Zf(i,new z_)}}else qt("FirestoreClient","Using default OfflineComponentProvider"),await Zf(i,new z_);return i._offlineComponents}async function cC(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(qt("FirestoreClient","Using user provided OnlineComponentProvider"),await H_(i,i._uninitializedComponentsProvider._online)):(qt("FirestoreClient","Using default OnlineComponentProvider"),await H_(i,new sC))),i._onlineComponents}function uC(i){return cC(i).then(t=>t.syncEngine)}/**
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
 */function BE(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const G_=new Map;/**
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
 */function hC(i,t,e){if(!e)throw new Jt(St.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function fC(i,t,e,n){if(t===!0&&n===!0)throw new Jt(St.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function W_(i){if(!oe.isDocumentKey(i))throw new Jt(St.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Zm(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":_e()}function bp(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new Jt(St.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zm(i);throw new Jt(St.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */class X_{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new Jt(St.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Jt(St.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BE((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Jt(St.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Jt(St.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Jt(St.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qm{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new X_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Jt(St.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Jt(St.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new X_(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new n1;switch(n.type){case"firstParty":return new o1(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Jt(St.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=G_.get(e);n&&(qt("ComponentProvider","Removing Datastore"),G_.delete(e),n.terminate())}(this),Promise.resolve()}}function dC(i,t,e,n={}){var r;const s=(i=bp(i,Qm))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Eh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let a,l;if(typeof n.mockUserToken=="string")a=n.mockUserToken,l=Un.MOCK_USER;else{a=Iv(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new Jt(St.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Un(c)}i._authCredentials=new i1(new tE(a,l))}}/**
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
 */class Jm{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Jm(this.firestore,t,this._query)}}class zr{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zr(this.firestore,t,this._key)}}class xc extends Jm{constructor(t,e,n){super(t,e,D1(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zr(this.firestore,null,new oe(t))}withConverter(t){return new xc(this.firestore,t,this._path)}}function pC(i,t,...e){if(i=gr(i),arguments.length===1&&(t=eE.newId()),hC("doc","path",t),i instanceof Qm){const n=tn.fromString(t,...e);return W_(n),new zr(i,null,new oe(n))}{if(!(i instanceof zr||i instanceof xc))throw new Jt(St.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(tn.fromString(t,...e));return W_(n),new zr(i.firestore,i instanceof xc?i.converter:null,new oe(n))}}/**
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
 */class mC{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new PE(this,"async_queue_retry"),this.iu=()=>{const e=Kf();e&&qt("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=Kf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=Kf();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new lo;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!df(t))throw t;qt("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(n=>{this.eu=n,this.tu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(n);throw wo("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.tu=!1,n))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const r=Km.createAndSchedule(this,t,e,n,s=>this.au(s));return this.Xa.push(r),r}su(){this.eu&&_e()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class VE extends Qm{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new mC}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zE(this),this._firestoreClient.terminate()}}function gC(i,t){const e=typeof i=="object"?i:Fv(),n=typeof i=="string"?i:t||"(default)",r=Ov(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=Rv("firestore");s&&dC(r,...s)}return r}function _C(i){return i._firestoreClient||zE(i),i._firestoreClient.verifyNotTerminated(),i._firestoreClient}function zE(i){var t,e,n;const r=i._freezeSettings(),s=function(a,l,c,u){return new v1(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,BE(u.experimentalLongPollingOptions),u.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._firestoreClient=new oC(i._authCredentials,i._appCheckCredentials,i._queue,s),!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class Ec{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ec(jr.fromBase64String(t))}catch(e){throw new Jt(St.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ec(jr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class tg{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new Jt(St.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Tf{constructor(t){this._methodName=t}}/**
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
 */class HE{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Jt(St.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Jt(St.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Pe(this._lat,t._lat)||Pe(this._long,t._long)}}/**
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
 */const yC=/^__.*__$/;class GE{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ko(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function WE(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class eg{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new eg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Au(t),r}Ru(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Ch(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(WE(this.Iu)&&yC.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class vC{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||yf(t)}pu(t,e,n,r=!1){return new eg({Iu:t,methodName:e,gu:n,path:Mn.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xC(i){const t=i._freezeSettings(),e=yf(i._databaseId);return new vC(i._databaseId,!!t.ignoreUndefinedProperties,e)}class Sf extends Tf{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Sf}}class EC extends Tf{constructor(t,e){super(t),this.wu=e}_toFieldTransform(t){const e=new vc(t.serializer,xE(t.serializer,this.wu));return new W1(t.path,e)}isEqual(t){return this===t}}function TC(i,t,e,n){const r=i.pu(1,t,e);jE("Data must be an object, but it was:",r,n);const s=[],o=Fi.empty();al(n,(l,c)=>{const u=qE(t,l,e);c=gr(c);const h=r.Ru(u);if(c instanceof Sf)s.push(u);else{const f=bf(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new tr(s);return new GE(o,a,r.fieldTransforms)}function SC(i,t,e,n,r,s){const o=i.pu(1,t,e),a=[j_(t,n,e)],l=[r];if(s.length%2!=0)throw new Jt(St.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(j_(t,s[f])),l.push(s[f+1]);const c=[],u=Fi.empty();for(let f=a.length-1;f>=0;--f)if(!AC(c,a[f])){const d=a[f];let _=l[f];_=gr(_);const g=o.Ru(d);if(_ instanceof Sf)c.push(d);else{const m=bf(_,g);m!=null&&(c.push(d),u.set(d,m))}}const h=new tr(c);return new GE(u,h,o.fieldTransforms)}function bf(i,t){if(XE(i=gr(i)))return jE("Unsupported field value:",t,i),bC(i,t);if(i instanceof Tf)return function(n,r){if(!WE(r.Iu))throw r.mu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.mu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const a of n){let l=bf(a,r.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=gr(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=dn.fromDate(n);return{timestampValue:Tp(r.serializer,s)}}if(n instanceof dn){const s=new dn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Tp(r.serializer,s)}}if(n instanceof HE)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ec)return{bytesValue:eR(r.serializer,n._byteString)};if(n instanceof zr){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:RE(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.mu(`Unsupported field value: ${Zm(n)}`)}(i,t)}function bC(i,t){const e={};return rE(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):al(i,(n,r)=>{const s=bf(r,t.Eu(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function XE(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof dn||i instanceof HE||i instanceof Ec||i instanceof zr||i instanceof Tf)}function jE(i,t,e){if(!XE(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=Zm(e);throw n==="an object"?t.mu(i+" a custom object"):t.mu(i+" "+n)}}function j_(i,t,e){if((t=gr(t))instanceof tg)return t._internalPath;if(typeof t=="string")return qE(i,t);throw Ch("Field path arguments must be of type string or ",i,!1,void 0,e)}const wC=new RegExp("[~\\*/\\[\\]]");function qE(i,t,e){if(t.search(wC)>=0)throw Ch(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new tg(...t.split("."))._internalPath}catch{throw Ch(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Ch(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new Jt(St.INVALID_ARGUMENT,a+i+l)}function AC(i,t){return i.some(e=>e.isEqual(t))}function YE(i,t,e,...n){i=bp(i,zr);const r=bp(i.firestore,VE),s=xC(r);let o;return o=typeof(t=gr(t))=="string"||t instanceof tg?SC(s,"updateDoc",i._key,t,e,n):TC(s,"updateDoc",i._key,t),MC(r,[o.toMutation(i._key,Vr.exists(!0))])}function MC(i,t){return function(n,r){const s=new lo;return n.asyncQueue.enqueueAndForget(async()=>tC(await uC(n),r,s)),s.promise}(_C(i),t)}function ba(i){return new EC("increment",i)}(function(t,e=!0){(function(r){ol=r})(Uv),rc(new Na("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new VE(new r1(n.getProvider("auth-internal")),new l1(n.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Jt(St.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bh(c.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),gs(b_,"4.3.2",t),gs(b_,"4.3.2","esm2017")})();let uo=0;const $E={voted:uo},RC={apiKey:"AIzaSyAWGdyzHNHu9eZYlGTktYjxXVeFnYBdG_w",authDomain:"boxboi-efc2a.firebaseapp.com",projectId:"boxboi-efc2a",storageBucket:"boxboi-efc2a.appspot.com",messagingSenderId:"690050479175",appId:"1:690050479175:web:9d40d97b5a36bcee86ad62"},CC=kv(RC),ng=XA(),IC=gC(CC),KE=pC(IC,"Survey","survey"),PC=gm(ng,"animation_desktop.zip"),DC=gm(ng,"animation_mobile.zip"),Vo=new XMLHttpRequest,LC=gm(ng,"models/scene.glb"),NC=(i,t,e)=>{sp(LC).then(n=>{i(n,t,e)}).catch(n=>{ZE(n)})},OC=async(i,t,e)=>{const n=i?await sp(DC):await sp(PC);Vo.responseType="blob",Vo.open("GET",n,!0),Vo.onprogress=r=>{t(r.loaded/r.total)},Vo.onload=()=>{const r=Vo.response;e(r)},Vo.send()},UC=()=>{let i;uo<1&&(uo===-1?i={yes:ba(1),no:ba(-1)}:i={yes:ba(1)},uo=1,YE(KE,i))},kC=()=>{if(uo>-1){let i;uo===1?i={yes:ba(-1),no:ba(1)}:i={no:ba(1)},uo=-1,YE(KE,i)}},ZE=i=>{switch(i.code){case"storage/object-not-found":console.log("I cannot find the object. I have the stupid");break;case"storage/unauthorized":console.log("HEY! You don't have access");break;case"storage/canceled":console.log("Oops! Download Cancelled");break;case"storage/unknown":console.log("Oops! Unknown Error");break}},ig=document.getElementById("heart"),rg=document.getElementById("broken"),QE=document.getElementById("heart-icon"),JE=document.getElementById("broken-icon"),Ti={width:window.innerWidth,height:window.innerHeight,isMobile:window.matchMedia("(max-width: 768px)").matches};ig.addEventListener("mouseover",()=>{QE.classList.add("fa-beat")});ig.addEventListener("mouseout",()=>{$E.voted<1&&QE.classList.remove("fa-beat")});ig.addEventListener("mouseup",()=>{UC()});rg.addEventListener("mouseover",()=>{JE.classList.add("fa-shake")});rg.addEventListener("mouseout",()=>{$E.voted>-1&&JE.classList.remove("fa-shake")});rg.addEventListener("mouseup",()=>{kC()});const FC=(i,t)=>{window.addEventListener("resize",()=>{Ti.width=window.innerWidth,Ti.height=window.innerHeight,Ti.isMobile=window.matchMedia("(max-width: 768px)").matches,i.aspect=Ti.width/Ti.height,i.updateProjectionMatrix(),t.setSize(Ti.width,Ti.height)})};function Pr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function tT(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},za={duration:.5,overwrite:!1,delay:0},sg,Hn,Xe,Hi=1e8,Re=1/Hi,wp=Math.PI*2,BC=wp/4,VC=0,eT=Math.sqrt,zC=Math.cos,HC=Math.sin,_n=function(t){return typeof t=="string"},je=function(t){return typeof t=="function"},qr=function(t){return typeof t=="number"},og=function(t){return typeof t>"u"},vr=function(t){return typeof t=="object"},ui=function(t){return t!==!1},ag=function(){return typeof window<"u"},cu=function(t){return je(t)||_n(t)},nT=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gn=Array.isArray,Ap=/(?:-?\.?\d|\.)+/gi,iT=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rT=/[+-]=-?[.\d]+/,sT=/[^,'"\[\]\s]+/gi,GC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ze,Li,Mp,lg,Ii={},Ih={},oT,aT=function(t){return(Ih=Mo(t,Ii))&&mi},cg=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ph=function(t,e){return!e&&console.warn(t)},lT=function(t,e){return t&&(Ii[t]=e)&&Ih&&(Ih[t]=e)||Ii},Tc=function(){return 0},WC={suppressEvents:!0,isStart:!0,kill:!1},th={suppressEvents:!0,kill:!1},XC={suppressEvents:!0},ug={},_s=[],Rp={},cT,Si={},Jf={},q_=30,eh=[],hg="",fg=function(t){var e=t[0],n,r;if(vr(e)||je(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=eh.length;r--&&!eh[r].targetTest(e););n=eh[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new LT(t[r],n)))||t.splice(r,1);return t},ho=function(t){return t._gsap||fg(Gi(t))[0]._gsap},uT=function(t,e,n){return(n=t[e])&&je(n)?t[e]():og(n)&&t.getAttribute&&t.getAttribute(e)||n},hi=function(t,e){return(t=t.split(",")).forEach(e)||t},$e=function(t){return Math.round(t*1e5)/1e5||0},wn=function(t){return Math.round(t*1e7)/1e7||0},wa=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},jC=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Dh=function(){var t=_s.length,e=_s.slice(0),n,r;for(Rp={},_s.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},hT=function(t,e,n,r){_s.length&&!Hn&&Dh(),t.render(e,n,r||Hn&&e<0&&(t._initted||t._startAt)),_s.length&&!Hn&&Dh()},fT=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(sT).length<2?e:_n(t)?t.trim():t},dT=function(t){return t},qi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},qC=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Mo=function(t,e){for(var n in e)t[n]=e[n];return t},Y_=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=vr(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Lh=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Wl=function(t){var e=t.parent||ze,n=t.keyframes?qC(Gn(t.keyframes)):qi;if(ui(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},YC=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},pT=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},wf=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Rs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},fo=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},$C=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Cp=function(t,e,n,r){return t._startAt&&(Hn?t._startAt.revert(th):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},KC=function i(t){return!t||t._ts&&i(t.parent)},$_=function(t){return t._repeat?Ha(t._tTime,t=t.duration()+t._rDelay)*t:0},Ha=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Nh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Af=function(t){return t._end=wn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Re)||0))},Mf=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=wn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Af(t),n._dirty||fo(n,t)),t},mT=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Nh(t.rawTime(),e),(!e._dur||qc(0,e.totalDuration(),n)-e._tTime>Re)&&e.render(n,!0)),fo(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Re}},or=function(t,e,n,r){return e.parent&&Rs(e),e._start=wn((qr(n)?n:n||t!==ze?Di(t,n,e):t._time)+e._delay),e._end=wn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),pT(t,e,"_first","_last",t._sort?"_start":0),Ip(e)||(t._recent=e),r||mT(t,e),t._ts<0&&Mf(t,t._tTime),t},gT=function(t,e){return(Ii.ScrollTrigger||cg("scrollTrigger",e))&&Ii.ScrollTrigger.create(e,t)},_T=function(t,e,n,r,s){if(pg(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Hn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&cT!==bi.frame)return _s.push(t),t._lazy=[s,r],1},ZC=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Ip=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},QC=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&ZC(t)&&!(!t._initted&&Ip(t))||(t._ts<0||t._dp._ts<0)&&!Ip(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=qc(0,t._tDur,e),u=Ha(l,a),t._yoyo&&u&1&&(o=1-o),u!==Ha(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Hn||r||t._zTime===Re||!e&&t._zTime){if(!t._initted&&_T(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?Re:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Cp(t,e,n,!0),t._onUpdate&&!n&&Wi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Wi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Rs(t,1),!n&&!Hn&&(Wi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},JC=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ga=function(t,e,n,r){var s=t._repeat,o=wn(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:wn(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Mf(t,t._tTime=t._tDur*a),t.parent&&Af(t),n||fo(t.parent,t),t},K_=function(t){return t instanceof ci?fo(t):Ga(t,t._dur)},tI={_start:0,endTime:Tc,totalDuration:Tc},Di=function i(t,e,n){var r=t.labels,s=t._recent||tI,o=t.duration()>=Hi?s.endTime(!1):t._dur,a,l,c;return _n(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Gn(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Xl=function(t,e,n){var r=qr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;o.immediateRender=ui(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Je(e[0],o,e[s+1])},Ls=function(t,e){return t||t===0?e(t):e},qc=function(t,e,n){return n<t?t:n>e?e:n},Fn=function(t,e){return!_n(t)||!(e=GC.exec(t))?"":e[1]},eI=function(t,e,n){return Ls(n,function(r){return qc(t,e,r)})},Pp=[].slice,yT=function(t,e){return t&&vr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&vr(t[0]))&&!t.nodeType&&t!==Li},nI=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return _n(r)&&!e||yT(r,1)?(s=n).push.apply(s,Gi(r)):n.push(r)})||n},Gi=function(t,e,n){return Xe&&!e&&Xe.selector?Xe.selector(t):_n(t)&&!n&&(Mp||!Wa())?Pp.call((e||lg).querySelectorAll(t),0):Gn(t)?nI(t,n):yT(t)?Pp.call(t,0):t?[t]:[]},Dp=function(t){return t=Gi(t)[0]||Ph("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Gi(e,n.querySelectorAll?n:n===t?Ph("Invalid scope")||lg.createElement("div"):t)}},vT=function(t){return t.sort(function(){return .5-Math.random()})},xT=function(t){if(je(t))return t;var e=vr(t)?t:{each:t},n=po(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return _n(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||e).length,m=o[g],p,y,v,E,b,A,w,O,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,Hi])[1],!S){for(w=-Hi;w<(w=_[S++].getBoundingClientRect().left)&&S<g;);S--}for(m=o[g]=[],p=l?Math.min(S,g)*u-.5:r%S,y=S===Hi?0:l?g*h/S-.5:r/S|0,w=0,O=Hi,A=0;A<g;A++)v=A%S-p,E=y-(A/S|0),m[A]=b=c?Math.abs(c==="y"?E:v):eT(v*v+E*E),b>w&&(w=b),b<O&&(O=b);r==="random"&&vT(m),m.max=w-O,m.min=O,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Fn(e.amount||e.each)||0,n=n&&g<0?IT(n):n}return g=(m[f]-m.min)/m.max||0,wn(m.b+(n?n(g):g)*m.v)+m.u}},Lp=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=wn(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(qr(n)?0:Fn(n))}},ET=function(t,e){var n=Gn(t),r,s;return!n&&vr(t)&&(r=n=t.radius||Hi,t.values?(t=Gi(t.values),(s=!qr(t[0]))&&(r*=r)):t=Lp(t.increment)),Ls(e,n?je(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Hi,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||qr(o)?u:u+Fn(o)}:Lp(t))},TT=function(t,e,n,r){return Ls(Gn(t)?!e:n===!0?!!(n=0):!r,function(){return Gn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},iI=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},rI=function(t,e){return function(n){return t(parseFloat(n))+(e||Fn(n))}},sI=function(t,e,n){return bT(t,e,0,1,n)},ST=function(t,e,n){return Ls(n,function(r){return t[~~e(r)]})},oI=function i(t,e,n){var r=e-t;return Gn(t)?ST(t,i(0,t.length),e):Ls(n,function(s){return(r+(s-t)%r)%r+t})},aI=function i(t,e,n){var r=e-t,s=r*2;return Gn(t)?ST(t,i(0,t.length-1),e):Ls(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Sc=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?sT:Ap),n+=t.substr(e,r-e)+TT(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},bT=function(t,e,n,r,s){var o=e-t,a=r-n;return Ls(s,function(l){return n+((l-t)/o*a||0)})},lI=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=_n(t),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Gn(t)&&!Gn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else r||(t=Mo(Gn(t)?[]:{},t));if(!u){for(l in e)dg.call(a,t,l,"get",e[l]);s=function(_){return _g(_,a)||(o?t.p:t)}}}return Ls(n,s)},Z_=function(t,e,n){var r=t.labels,s=Hi,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wi=function(t,e,n){var r=t.vars,s=r[e],o=Xe,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&_s.length&&Dh(),a&&(Xe=a),u=l?s.apply(c,l):s.call(c),Xe=o,u},Ll=function(t){return Rs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Hn),t.progress()<1&&Wi(t,"onInterrupt"),t},ga,wT=[],AT=function(t){if(ag()&&t){t=!t.name&&t.default||t;var e=t.name,n=je(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Tc,render:_g,add:dg,kill:bI,modifier:SI,rawVars:0},o={targetTest:0,get:0,getSetter:gg,aliases:{},register:0};if(Wa(),t!==r){if(Si[e])return;qi(r,qi(Lh(t,s),o)),Mo(r.prototype,Mo(s,Lh(t,o))),Si[r.prop=e]=r,t.targetTest&&(eh.push(r),ug[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}lT(e,r),t.register&&t.register(mi,r,fi)}else t&&wT.push(t)},Me=255,Nl={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},td=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},MT=function(t,e,n){var r=t?qr(t)?[t>>16,t>>8&Me,t&Me]:0:Nl.black,s,o,a,l,c,u,h,f,d,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Nl[t])r=Nl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Me,r&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(Ap),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=td(l+1/3,s,o),r[1]=td(l,s,o),r[2]=td(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(iT),n&&r.length<4&&(r[3]=1),r}else r=t.match(Ap)||Nl.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/Me,o=r[1]/Me,a=r[2]/Me,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},RT=function(t){var e=[],n=[],r=-1;return t.split(ys).forEach(function(s){var o=s.match(ma)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},Q_=function(t,e,n){var r="",s=(t+r).match(ys),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=MT(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=RT(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(ys,"1").split(ma),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ys),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},ys=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Nl)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),cI=/hsl[a]?\(/,CT=function(t){var e=t.join(" "),n;if(ys.lastIndex=0,ys.test(e))return n=cI.test(e),t[1]=Q_(t[1],n),t[0]=Q_(t[0],n,RT(t[1])),!0},bc,bi=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(m){var p=i()-r,y=m===!0,v,E,b,A;if(p>t&&(n+=p-e),r+=p,b=r-n,v=b-o,(v>0||y)&&(A=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=v+(v>=s?4:s-v),E=1),y||(l=c(g)),E)for(d=0;d<a.length;d++)a[d](b,f,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){oT&&(!Mp&&ag()&&(Li=Mp=window,lg=Li.document||{},Ii.gsap=mi,(Li.gsapVersions||(Li.gsapVersions=[])).push(mi.version),aT(Ih||Li.GreenSockGlobals||!Li.gsap&&Li||{}),u=Li.requestAnimationFrame,wT.forEach(AT)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},bc=1,_(2))},sleep:function(){(u?Li.cancelAnimationFrame:clearTimeout)(l),bc=0,c=Tc},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,y){var v=p?function(E,b,A,w){m(E,b,A,w),h.remove(v)}:m;return h.remove(m),a[y?"unshift":"push"](v),Wa(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Wa=function(){return!bc&&bi.wake()},ye={},uI=/^[\d.\-M][\d.\-,\s]/,hI=/["']/g,fI=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(hI,"").trim():+c,r=l.substr(a+1).trim();return e},dI=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},pI=function(t){var e=(t+"").split("("),n=ye[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[fI(e[1])]:dI(t).split(",").map(fT)):ye._CE&&uI.test(t)?ye._CE("",t):n},IT=function(t){return function(e){return 1-t(1-e)}},PT=function i(t,e){for(var n=t._first,r;n;)n instanceof ci?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},po=function(t,e){return t&&(je(t)?t:ye[t]||pI(t))||e},Fo=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return hi(t,function(a){ye[a]=Ii[a]=s,ye[o=a.toLowerCase()]=n;for(var l in s)ye[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ye[a+"."+l]=s[l]}),s},DT=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ed=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/wp*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*HC((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:DT(a);return s=wp/s,l.config=function(c,u){return i(t,c,u)},l},nd=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:DT(n);return r.config=function(s){return i(t,s)},r};hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Fo(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ye.Linear.easeNone=ye.none=ye.Linear.easeIn;Fo("Elastic",ed("in"),ed("out"),ed());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Fo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fo("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Fo("Circ",function(i){return-(eT(1-i*i)-1)});Fo("Sine",function(i){return i===1?1:-zC(i*BC)+1});Fo("Back",nd("in"),nd("out"),nd());ye.SteppedEase=ye.steps=Ii.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Re;return function(a){return((r*qc(0,o,a)|0)+s)*n}}};za.ease=ye["quad.out"];hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return hg+=i+","+i+"Params,"});var LT=function(t,e){this.id=VC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:uT,this.set=e?e.getSetter:gg},wc=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ga(this,+e.duration,1,1),this.data=e.data,Xe&&(this._ctx=Xe,Xe.data.push(this)),bc||bi.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ga(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Wa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Mf(this,n),!s._dp||s.parent||mT(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&or(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Re||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hT(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$_(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ha(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Re?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Nh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Re?0:this._rts,this.totalTime(qc(-Math.abs(this._delay),this._tDur,r),!0),Af(this),$C(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Re&&(this._tTime-=Re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&or(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ui(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nh(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=XC);var r=Hn;return Hn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Hn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,K_(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,K_(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(Di(this,n),ui(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ui(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Re,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Re)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=je(n)?n:dT,a=function(){var c=r.then;r.then=null,je(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){Ll(this)},i}();qi(wc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Re,_prom:0,_ps:!1,_rts:1});var ci=function(i){tT(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ui(n.sortChildren),ze&&or(n.parent||ze,Pr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gT(Pr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Xl(0,arguments,this),this},e.from=function(r,s,o){return Xl(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Xl(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Wl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Je(r,s,Di(this,o),1),this},e.call=function(r,s,o){return or(this,Je.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Je(r,o,Di(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Wl(o).immediateRender=ui(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Wl(a).immediateRender=ui(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:wn(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,m,p,y,v,E,b,A,w;if(this!==ze&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,E=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=wn(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),b=Ha(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),A&&g&1&&(f=c-f,w=1),g!==b&&!this._lock){var O=A&&b&1,S=O===(A&&g&1);if(g<b&&(O=!O),a=O?0:u%c?c:u,this._lock=1,this.render(a||(w?0:wn(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;PT(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=JC(this,wn(a),wn(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!g&&(Wi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-Re);break}}d=_}else{d=this._last;for(var M=r<0?r:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||Hn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=M?-Re:Re);break}}d=_}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Re)._zTime=f>=a?1:-1,this._ts))return this._start=E,Af(this),this.render(r,s,o);this._onUpdate&&!s&&Wi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Rs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Wi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(qr(s)||(s=Di(this,s,r)),!(r instanceof wc)){if(Gn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(_n(r))return this.addLabel(r,s);if(je(r))r=Je.delayedCall(0,r);else return this}return this!==r?or(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Je?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return _n(r)?this.removeLabel(r):je(r)?this.killTweensOf(r):(wf(this,r),r===this._recent&&(this._recent=this._last),fo(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wn(bi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Je.delayedCall(0,s||Tc,o);return a.data="isPause",this._hasPause=1,or(this,a,Di(this,r))},e.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&Rs(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ls!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Gi(r),l=this._first,c=qr(s),u;l;)l instanceof Je?jC(l._targets,a)&&(c?(!ls||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Di(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Je.to(o,qi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Re,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Ga(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,qi({startAt:{time:Di(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Z_(this,Di(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Z_(this,Di(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Re)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return fo(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),fo(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Hi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,or(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ga(o,o===ze&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ze._ts&&(hT(ze,Nh(r,ze)),cT=bi.frame),bi.frame>=q_){q_+=Mi.autoSleep||120;var s=ze._first;if((!s||!s._ts)&&Mi.autoSleep&&bi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bi.sleep()}}},t}(wc);qi(ci.prototype,{_lock:0,_hasPause:0,_forcing:0});var mI=function(t,e,n,r,s,o,a){var l=new fi(this._pt,t,e,0,1,BT,null,s),c=0,u=0,h,f,d,_,g,m,p,y;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Sc(r)),o&&(y=[n,r],o(y,t,e),n=y[0],r=y[1]),f=n.match(Qf)||[];h=Qf.exec(r);)_=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?wa(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Qf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(rT.test(r)||p)&&(l.e=0),this._pt=l,l},dg=function(t,e,n,r,s,o,a,l,c,u){je(r)&&(r=r(s||0,t,o));var h=t[e],f=n!=="get"?n:je(h)?c?t[e.indexOf("set")||!je(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=je(h)?c?xI:kT:mg,_;if(_n(r)&&(~r.indexOf("random(")&&(r=Sc(r)),r.charAt(1)==="="&&(_=wa(f,r)+(Fn(f)||0),(_||_===0)&&(r=_))),!u||f!==r||Np)return!isNaN(f*r)&&r!==""?(_=new fi(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?TI:FT,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&cg(e,r),mI.call(this,t,e,f,r,d,l||Mi.stringFilter,c))},gI=function(t,e,n,r,s){if(je(t)&&(t=jl(t,s,e,n,r)),!vr(t)||t.style&&t.nodeType||Gn(t)||nT(t))return _n(t)?jl(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=jl(t[a],s,e,n,r);return o},NT=function(t,e,n,r,s,o){var a,l,c,u;if(Si[t]&&(a=new Si[t]).init(s,a.rawVars?e[t]:gI(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new fi(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ga))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ls,Np,pg=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,d=r.yoyoEase,_=r.keyframes,g=r.autoRevert,m=t._dur,p=t._startAt,y=t._targets,v=t.parent,E=v&&v.data==="nested"?v.vars.targets:y,b=t._overwrite==="auto"&&!sg,A=t.timeline,w,O,S,M,j,I,H,x,F,$,V,nt,X;if(A&&(!_||!s)&&(s="none"),t._ease=po(s,za.ease),t._yEase=d?IT(po(d===!0?s:d,za.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!A&&!!r.runBackwards,!A||_&&!r.stagger){if(x=y[0]?ho(y[0]).harness:0,nt=x&&r[x.prop],w=Lh(r,ug),p&&(p._zTime<0&&p.progress(1),e<0&&f&&a&&!g?p.render(-1,!0):p.revert(f&&m?th:WC),p._lazy=0),o){if(Rs(t._startAt=Je.set(y,qi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&ui(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Hn||!a&&!g)&&t._startAt.revert(th),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!p){if(e&&(a=!1),S=qi({overwrite:!1,data:"isFromStart",lazy:a&&!p&&ui(l),immediateRender:a,stagger:0,parent:v},w),nt&&(S[x.prop]=nt),Rs(t._startAt=Je.set(y,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Hn?t._startAt.revert(th):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Re,Re);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&ui(l)||l&&!m,O=0;O<y.length;O++){if(j=y[O],H=j._gsap||fg(y)[O]._gsap,t._ptLookup[O]=$={},Rp[H.id]&&_s.length&&Dh(),V=E===y?O:E.indexOf(j),x&&(F=new x).init(j,nt||w,t,V,E)!==!1&&(t._pt=M=new fi(t._pt,j,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(N){$[N]=M}),F.priority&&(I=1)),!x||nt)for(S in w)Si[S]&&(F=NT(S,w,t,V,j,E))?F.priority&&(I=1):$[S]=M=dg.call(t,j,S,"get",w[S],V,E,0,r.stringFilter);t._op&&t._op[O]&&t.kill(j,t._op[O]),b&&t._pt&&(ls=t,ze.killTweensOf(j,$,t.globalTime(e)),X=!t.parent,ls=0),t._pt&&l&&(Rp[H.id]=1)}I&&VT(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,_&&e<=0&&A.render(Hi,!0,!0)},_I=function(t,e,n,r,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Np=1,t.vars[e]="+=0",pg(t,a),Np=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=$e(n)+Fn(u.e)),u.b&&(u.b=c.s+Fn(u.b))},yI=function(t,e){var n=t[0]?ho(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=Mo({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},vI=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Gn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},jl=function(t,e,n,r,s){return je(t)?t.call(e,n,r,s):_n(t)&&~t.indexOf("random(")?Sc(t):t},OT=hg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",UT={};hi(OT+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return UT[i]=1});var Je=function(i){tT(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Wl(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||ze,v=(Gn(n)||nT(n)?qr(n[0]):"length"in r)?[n]:Gi(n),E,b,A,w,O,S,M,j;if(a._targets=v.length?fg(v):Ph("GSAP target "+n+" not found. https://greensock.com",!Mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||cu(c)||cu(u)){if(r=a.vars,E=a.timeline=new ci({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),E.kill(),E.parent=E._dp=Pr(a),E._start=0,f||cu(c)||cu(u)){if(w=v.length,M=f&&xT(f),vr(f))for(O in f)~OT.indexOf(O)&&(j||(j={}),j[O]=f[O]);for(b=0;b<w;b++)A=Lh(r,UT),A.stagger=0,p&&(A.yoyoEase=p),j&&Mo(A,j),S=v[b],A.duration=+jl(c,Pr(a),b,S,v),A.delay=(+jl(u,Pr(a),b,S,v)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),E.to(S,A,M?M(b,S,v):0),E._ease=ye.none;E.duration()?c=u=0:a.timeline=0}else if(_){Wl(qi(E.vars.defaults,{ease:"none"})),E._ease=po(_.ease||r.ease||"none");var I=0,H,x,F;if(Gn(_))_.forEach(function($){return E.to(v,$,">")}),E.duration();else{A={};for(O in _)O==="ease"||O==="easeEach"||vI(O,_[O],A,_.easeEach);for(O in A)for(H=A[O].sort(function($,V){return $.t-V.t}),I=0,b=0;b<H.length;b++)x=H[b],F={ease:x.e,duration:(x.t-(b?H[b-1].t:0))/100*c},F[O]=x.v,E.to(v,F,I),I+=F.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!sg&&(ls=Pr(a),ze.killTweensOf(v),ls=0),or(y,Pr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===wn(y._time)&&ui(h)&&KC(Pr(a))&&y.data!=="nested")&&(a._tTime=-Re,a.render(Math.max(0,-u)||0)),m&&gT(Pr(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Re&&!u?l:r<Re?0:r,f,d,_,g,m,p,y,v,E;if(!c)QC(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=wn(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===h/g&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(E=this._yEase,f=c-f),m=Ha(this._tTime,g),f===a&&!o&&this._initted)return this._tTime=h,this;_!==m&&(v&&this._yEase&&PT(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(wn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(_T(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!s&&!_&&(Wi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(r<0?r:!f&&p?-Re:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Cp(this,r,s,o),Wi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Wi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Cp(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Rs(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Wi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a){bc||bi.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pg(this,l),c=this._ease(l/this._dur),_I(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Mf(this,0),this.parent||pT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ll(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ls&&ls.vars.overwrite!==!0)._first||Ll(this),this.parent&&o!==this.timeline.totalDuration()&&Ga(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gi(r):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&YC(a,l))return s==="all"&&(this._pt=0),Ll(this);for(h=this._op=this._op||[],s!=="all"&&(_n(s)&&(g={},hi(s,function(y){return g[y]=1}),s=g),s=yI(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&wf(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Ll(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Xl(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Xl(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ze.killTweensOf(r,s,o)},t}(wc);qi(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hi("staggerTo,staggerFrom,staggerFromTo",function(i){Je[i]=function(){var t=new ci,e=Pp.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var mg=function(t,e,n){return t[e]=n},kT=function(t,e,n){return t[e](n)},xI=function(t,e,n,r){return t[e](r.fp,n)},EI=function(t,e,n){return t.setAttribute(e,n)},gg=function(t,e){return je(t[e])?kT:og(t[e])&&t.setAttribute?EI:mg},FT=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},TI=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},BT=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},_g=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},SI=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},bI=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?wf(this,e,"_pt"):e.dep||(n=1),e=r;return!n},wI=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},VT=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},fi=function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||FT,this.d=l||this,this.set=c||mg,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=wI,this.m=n,this.mt=s,this.tween=r},i}();hi(hg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return ug[i]=1});Ii.TweenMax=Ii.TweenLite=Je;Ii.TimelineLite=Ii.TimelineMax=ci;ze=new ci({sortChildren:!1,defaults:za,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=CT;var mo=[],nh={},AI=[],J_=0,MI=0,id=function(t){return(nh[t]||AI).map(function(e){return e()})},Op=function(){var t=Date.now(),e=[];t-J_>2&&(id("matchMediaInit"),mo.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Li.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),id("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),J_=t,id("matchMedia"))},zT=function(){function i(e,n){this.selector=n&&Dp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=MI++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){je(n)&&(s=r,r=n,n=je);var o=this,a=function(){var c=Xe,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Dp(s)),Xe=o,h=r.apply(o,arguments),je(h)&&o._r.push(h),Xe=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===je?a(o):n?o[n]=a:a},t.ignore=function(n){var r=Xe;Xe=null,n(this),Xe=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Je&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Je)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=mo.length;a--;)mo[a].id===this.id&&mo.splice(a,1)},t.revert=function(n){this.kill(n||{})},i}(),RI=function(){function i(e){this.contexts=[],this.scope=e}var t=i.prototype;return t.add=function(n,r,s){vr(n)||(n={matches:n});var o=new zT(0,s||this.scope),a=o.conditions={},l,c,u;Xe&&!o.selector&&(o.selector=Xe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Li.matchMedia(n[c]),l&&(mo.indexOf(o)<0&&mo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Op):l.addEventListener("change",Op)));return u&&r(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Oh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return AT(r)})},timeline:function(t){return new ci(t)},getTweensOf:function(t,e){return ze.getTweensOf(t,e)},getProperty:function(t,e,n,r){_n(t)&&(t=Gi(t)[0]);var s=ho(t||{}).get,o=n?dT:fT;return n==="native"&&(n=""),t&&(e?o((Si[e]&&Si[e].get||s)(t,e,n,r)):function(a,l,c){return o((Si[a]&&Si[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Gi(t),t.length>1){var r=t.map(function(u){return mi.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=Si[e],a=ho(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;ga._pt=0,h.init(t,n?u+n:u,ga,0,[t]),h.render(1,h),ga._pt&&_g(1,ga)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=mi.to(t,Mo((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=po(t.ease,za.ease)),Y_(za,t||{})},config:function(t){return Y_(Mi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Si[a]&&!Ii[a]&&Ph(e+" effect requires "+a+" plugin.")}),Jf[e]=function(a,l,c){return n(Gi(a),qi(l||{},s),c)},o&&(ci.prototype[e]=function(a,l,c){return this.add(Jf[e](a,vr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ye[t]=po(e)},parseEase:function(t,e){return arguments.length?po(t,e):ye},getById:function(t){return ze.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ci(t),r,s;for(n.smoothChildTiming=ui(t.smoothChildTiming),ze.remove(n),n._dp=0,n._time=n._tTime=ze._time,r=ze._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Je&&r.vars.onComplete===r._targets[0]))&&or(n,r,r._start-r._delay),r=s;return or(ze,n,0),n},context:function(t,e){return t?new zT(t,e):Xe},matchMedia:function(t){return new RI(t)},matchMediaRefresh:function(){return mo.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Op()},addEventListener:function(t,e){var n=nh[t]||(nh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=nh[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:oI,wrapYoyo:aI,distribute:xT,random:TT,snap:ET,normalize:sI,getUnit:Fn,clamp:eI,splitColor:MT,toArray:Gi,selector:Dp,mapRange:bT,pipe:iI,unitize:rI,interpolate:lI,shuffle:vT},install:aT,effects:Jf,ticker:bi,updateRoot:ci.updateRoot,plugins:Si,globalTimeline:ze,core:{PropTween:fi,globals:lT,Tween:Je,Timeline:ci,Animation:wc,getCache:ho,_removeLinkedListItem:wf,reverting:function(){return Hn},context:function(t){return t&&Xe&&(Xe.data.push(t),t._ctx=Xe),Xe},suppressOverwrites:function(t){return sg=t}}};hi("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Oh[i]=Je[i]});bi.add(ci.updateRoot);ga=Oh.to({},{duration:0});var CI=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},II=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=CI(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},rd=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(_n(s)&&(l={},hi(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}II(a,s)}}}},mi=Oh.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Hn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},rd("roundProps",Lp),rd("modifiers"),rd("snap",ET))||Oh;Je.version=ci.version=mi.version="3.12.2";oT=1;ag()&&Wa();ye.Power0;ye.Power1;ye.Power2;ye.Power3;ye.Power4;ye.Linear;ye.Quad;ye.Cubic;ye.Quart;ye.Quint;ye.Strong;ye.Elastic;ye.Back;ye.SteppedEase;ye.Bounce;ye.Sine;ye.Expo;ye.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var t0,cs,Aa,yg,eo,e0,vg,PI=function(){return typeof window<"u"},Yr={},js=180/Math.PI,Ma=Math.PI/180,zo=Math.atan2,n0=1e8,xg=/([A-Z])/g,DI=/(left|right|width|margin|padding|x)/i,LI=/[\s,\(]\S/,hr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Up=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},NI=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},OI=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},UI=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},HT=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},GT=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},kI=function(t,e,n){return t.style[e]=n},FI=function(t,e,n){return t.style.setProperty(e,n)},BI=function(t,e,n){return t._gsap[e]=n},VI=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},zI=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},HI=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},He="transform",er=He+"Origin",GI=function i(t,e){var n=this,r=this.target,s=r.style;if(t in Yr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=hr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Lr(r,o)}):this.tfm[t]=r._gsap.x?r._gsap[t]:Lr(r,t);else return hr.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(He)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(er,e,"")),t=He}(s||e)&&this.props.push(t,e,s[t])},WT=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},WI=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(xg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=vg(),(!s||!s.isStart)&&!n[He]&&(WT(n),r.uncache=1)}},XT=function(t,e){var n={target:t,props:[],revert:WI,save:GI};return t._gsap||mi.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},jT,kp=function(t,e){var n=cs.createElementNS?cs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cs.createElement(t);return n.style?n:cs.createElement(t)},dr=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(xg,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Xa(e)||e,1)||""},i0="O,Moz,ms,Ms,Webkit".split(","),Xa=function(t,e,n){var r=e||eo,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(i0[o]+t in s););return o<0?null:(o===3?"ms":o>=0?i0[o]:"")+t},Fp=function(){PI()&&window.document&&(t0=window,cs=t0.document,Aa=cs.documentElement,eo=kp("div")||{style:{}},kp("div"),He=Xa(He),er=He+"Origin",eo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jT=!!Xa("perspective"),vg=mi.core.reverting,yg=1)},sd=function i(t){var e=kp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Aa.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Aa.removeChild(e),this.style.cssText=s,o},r0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},qT=function(t){var e;try{e=t.getBBox()}catch{e=sd.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===sd||(e=sd.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+r0(t,["x","cx","x1"])||0,y:+r0(t,["y","cy","y1"])||0,width:0,height:0}:e},YT=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&qT(t))},Ac=function(t,e){if(e){var n=t.style;e in Yr&&e!==er&&(e=He),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(xg,"-$1").toLowerCase())):n.removeAttribute(e)}},us=function(t,e,n,r,s,o){var a=new fi(t._pt,e,n,0,1,o?GT:HT);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},s0={deg:1,rad:1,turn:1},XI={grid:1,flex:1},Cs=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=eo.style,l=DI.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,g,m,p;return r===o||!s||s0[r]||s0[o]?s:(o!=="px"&&!f&&(s=i(t,e,n,"px")),p=t.getCTM&&YT(t),(d||o==="%")&&(Yr[e]||~e.indexOf("adius"))?(_=p?t.getBBox()[l?"width":"height"]:t[u],$e(d?s/_*h:s/100*_)):(a[l?"width":"height"]=h+(f?o:r),g=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===cs||!g.appendChild)&&(g=cs.body),m=g._gsap,m&&d&&m.width&&l&&m.time===bi.time&&!m.uncache?$e(s/m.width*h):((d||o==="%")&&!XI[dr(g,"display")]&&(a.position=dr(t,"position")),g===t&&(a.position="static"),g.appendChild(eo),_=eo[u],g.removeChild(eo),a.position="absolute",l&&d&&(m=ho(g),m.time=bi.time,m.width=g[u]),$e(f?_*s/h:_&&s?h/_*s:0))))},Lr=function(t,e,n,r){var s;return yg||Fp(),e in hr&&e!=="transform"&&(e=hr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Yr[e]&&e!=="transform"?(s=Rc(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:kh(dr(t,er))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Uh[e]&&Uh[e](t,e,n)||dr(t,e)||uT(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cs(t,e,s,n)+n:s},jI=function(t,e,n,r){if(!n||n==="none"){var s=Xa(e,t,1),o=s&&dr(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=dr(t,"borderTopColor"))}var a=new fi(this._pt,t.style,e,0,1,BT),l=0,c=0,u,h,f,d,_,g,m,p,y,v,E,b;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(t.style[e]=r,r=dr(t,e)||r,t.style[e]=n),u=[n,r],CT(u),n=u[0],r=u[1],f=n.match(ma)||[],b=r.match(ma)||[],b.length){for(;h=ma.exec(r);)m=h[0],y=r.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,E=g.substr((d+"").length),m.charAt(1)==="="&&(m=wa(d,m)+E),p=parseFloat(m),v=m.substr((p+"").length),l=ma.lastIndex-v.length,v||(v=v||Mi.units[e]||E,l===r.length&&(r+=v,a.e+=v)),E!==v&&(d=Cs(t,e,g,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?GT:HT;return rT.test(r)&&(a.e=0),this._pt=a,a},o0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qI=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=o0[n]||n,e[1]=o0[r]||r,e.join(" ")},YI=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yr[a]&&(l=1,a=a==="transformOrigin"?er:He),Ac(n,a);l&&(Ac(n,He),o&&(o.svg&&n.removeAttribute("transform"),Rc(n,1),o.uncache=1,WT(r)))}},Uh={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new fi(t._pt,e,n,0,0,YI);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Mc=[1,0,0,1,0,0],$T={},KT=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},a0=function(t){var e=dr(t,He);return KT(e)?Mc:e.substr(7).match(iT).map($e)},Eg=function(t,e){var n=t._gsap||ho(t),r=t.style,s=a0(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Mc:s):(s===Mc&&!t.offsetParent&&t!==Aa&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Aa.appendChild(t)),s=a0(t),l?r.display=l:Ac(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Aa.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bp=function(t,e,n,r,s,o){var a=t._gsap,l=s||Eg(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],v=e.split(" "),E=parseFloat(v[0])||0,b=parseFloat(v[1])||0,A,w,O,S;n?l!==Mc&&(w=d*m-_*g)&&(O=E*(m/w)+b*(-g/w)+(g*y-m*p)/w,S=E*(-_/w)+b*(d/w)-(d*y-_*p)/w,E=O,b=S):(A=qT(t),E=A.x+(~v[0].indexOf("%")?E/100*A.width:E),b=A.y+(~(v[1]||v[0]).indexOf("%")?b/100*A.height:b)),r||r!==!1&&a.smooth?(p=E-c,y=b-u,a.xOffset=h+(p*d+y*g)-p,a.yOffset=f+(p*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=b,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[er]="0px 0px",o&&(us(o,a,"xOrigin",c,E),us(o,a,"yOrigin",u,b),us(o,a,"xOffset",h,a.xOffset),us(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",E+" "+b)},Rc=function(t,e){var n=t._gsap||new LT(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=dr(t,er)||"0",u,h,f,d,_,g,m,p,y,v,E,b,A,w,O,S,M,j,I,H,x,F,$,V,nt,X,N,D,k,ct,rt,it;return u=h=f=g=m=p=y=v=E=0,d=_=1,n.svg=!!(t.getCTM&&YT(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[He]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[He]!=="none"?l[He]:"")),r.scale=r.rotate=r.translate="none"),w=Eg(t,n.svg),n.svg&&(n.uncache?(nt=t.getBBox(),c=n.xOrigin-nt.x+"px "+(n.yOrigin-nt.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),Bp(t,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,A=n.yOrigin||0,w!==Mc&&(j=w[0],I=w[1],H=w[2],x=w[3],u=F=w[4],h=$=w[5],w.length===6?(d=Math.sqrt(j*j+I*I),_=Math.sqrt(x*x+H*H),g=j||I?zo(I,j)*js:0,y=H||x?zo(H,x)*js+g:0,y&&(_*=Math.abs(Math.cos(y*Ma))),n.svg&&(u-=b-(b*j+A*H),h-=A-(b*I+A*x))):(it=w[6],ct=w[7],N=w[8],D=w[9],k=w[10],rt=w[11],u=w[12],h=w[13],f=w[14],O=zo(it,k),m=O*js,O&&(S=Math.cos(-O),M=Math.sin(-O),V=F*S+N*M,nt=$*S+D*M,X=it*S+k*M,N=F*-M+N*S,D=$*-M+D*S,k=it*-M+k*S,rt=ct*-M+rt*S,F=V,$=nt,it=X),O=zo(-H,k),p=O*js,O&&(S=Math.cos(-O),M=Math.sin(-O),V=j*S-N*M,nt=I*S-D*M,X=H*S-k*M,rt=x*M+rt*S,j=V,I=nt,H=X),O=zo(I,j),g=O*js,O&&(S=Math.cos(O),M=Math.sin(O),V=j*S+I*M,nt=F*S+$*M,I=I*S-j*M,$=$*S-F*M,j=V,F=nt),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=$e(Math.sqrt(j*j+I*I+H*H)),_=$e(Math.sqrt($*$+it*it)),O=zo(F,$),y=Math.abs(O)>2e-4?O*js:0,E=rt?1/(rt<0?-rt:rt):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!KT(dr(t,He)),V&&t.setAttribute("transform",V))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=$e(d),n.scaleY=$e(_),n.rotation=$e(g)+a,n.rotationX=$e(m)+a,n.rotationY=$e(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[er]=kh(c)),n.xOffset=n.yOffset=0,n.force3D=Mi.force3D,n.renderTransform=n.svg?KI:jT?ZT:$I,n.uncache=0,n},kh=function(t){return(t=t.split(" "))[0]+" "+t[1]},od=function(t,e,n){var r=Fn(e);return $e(parseFloat(e)+parseFloat(Cs(t,"x",n+"px",r)))+r},$I=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ZT(t,e)},Fs="0deg",xl="0px",Bs=") ",ZT=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,E="",b=p==="auto"&&t&&t!==1||p===!0;if(v&&(h!==Fs||u!==Fs)){var A=parseFloat(u)*Ma,w=Math.sin(A),O=Math.cos(A),S;A=parseFloat(h)*Ma,S=Math.cos(A),o=od(y,o,w*S*-v),a=od(y,a,-Math.sin(A)*-v),l=od(y,l,O*S*-v+v)}m!==xl&&(E+="perspective("+m+Bs),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(b||o!==xl||a!==xl||l!==xl)&&(E+=l!==xl||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Bs),c!==Fs&&(E+="rotate("+c+Bs),u!==Fs&&(E+="rotateY("+u+Bs),h!==Fs&&(E+="rotateX("+h+Bs),(f!==Fs||d!==Fs)&&(E+="skew("+f+", "+d+Bs),(_!==1||g!==1)&&(E+="scale("+_+", "+g+Bs),y.style[He]=E||"translate(0, 0)"},KI=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),E=parseFloat(a),b,A,w,O,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ma,c*=Ma,b=Math.cos(l)*h,A=Math.sin(l)*h,w=Math.sin(l-c)*-f,O=Math.cos(l-c)*f,c&&(u*=Ma,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,O*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,A*=S)),b=$e(b),A=$e(A),w=$e(w),O=$e(O)):(b=h,O=f,A=w=0),(v&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(v=Cs(d,"x",o,"px"),E=Cs(d,"y",a,"px")),(_||g||m||p)&&(v=$e(v+_-(_*b+g*w)+m),E=$e(E+g-(_*A+g*O)+p)),(r||s)&&(S=d.getBBox(),v=$e(v+r/100*S.width),E=$e(E+s/100*S.height)),S="matrix("+b+","+A+","+w+","+O+","+v+","+E+")",d.setAttribute("transform",S),y&&(d.style[He]=S)},ZI=function(t,e,n,r,s){var o=360,a=_n(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?js:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*n0)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*n0)%o-~~(c/o)*o)),t._pt=f=new fi(t._pt,e,n,r,c,NI),f.e=u,f.u="deg",t._props.push(n),f},l0=function(t,e){for(var n in e)t[n]=e[n];return t},QI=function(t,e,n){var r=l0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[He]=e,a=Rc(n,1),Ac(n,He),n.setAttribute("transform",c)):(c=getComputedStyle(n)[He],o[He]=e,a=Rc(n,1),o[He]=c);for(l in Yr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Fn(c),_=Fn(u),h=d!==_?Cs(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new fi(t._pt,a,l,h,f-h,Up),t._pt.u=_||0,t._props.push(l));l0(a,r)};hi("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});Uh[t>1?"border"+i:i]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Lr(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var QT={name:"css",register:Fp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,y,v,E,b,A,w,O;yg||Fp(),this.styles=this.styles||XT(t),O=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Si[g]&&NT(g,e,n,r,t,s)))){if(d=typeof u,_=Uh[g],d==="function"&&(u=u.call(n,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Sc(u)),_)_(this,t,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",ys.lastIndex=0,ys.test(c)||(m=Fn(c),p=Fn(u)),p?m!==p&&(c=Cs(t,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),O.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,t,s):l[g],_n(c)&&~c.indexOf("random(")&&(c=Sc(c)),Fn(c+"")||(c+=Mi.units[g]||Fn(Lr(t,g))||""),(c+"").charAt(1)==="="&&(c=Lr(t,g))):c=Lr(t,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in hr&&(g==="autoAlpha"&&(f===1&&Lr(t,"visibility")==="hidden"&&h&&(f=0),O.push("visibility",0,a.visibility),us(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=hr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Yr,v){if(this.styles.save(g),E||(b=t._gsap,b.renderTransform&&!e.parseTransform||Rc(t,e.parseTransform),A=e.smoothOrigin!==!1&&b.smooth,E=this._pt=new fi(this._pt,a,He,0,1,b.renderTransform,b,0,-1),E.dep=1),g==="scale")this._pt=new fi(this._pt,b,"scaleY",b.scaleY,(y?wa(b.scaleY,y+h):h)-b.scaleY||0,Up),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){O.push(er,0,a[er]),u=qI(u),b.svg?Bp(t,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&us(this,b,"zOrigin",b.zOrigin,p),us(this,a,g,kh(c),kh(u)));continue}else if(g==="svgOrigin"){Bp(t,u,1,A,0,this);continue}else if(g in $T){ZI(this,b,g,f,y?wa(f,y+u):u);continue}else if(g==="smoothOrigin"){us(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){QI(this,u,t);continue}}else g in a||(g=Xa(g)||g);if(v||(h||h===0)&&(f||f===0)&&!LI.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=Fn(u)||(g in Mi.units?Mi.units[g]:m),m!==p&&(f=Cs(t,g,c,p)),this._pt=new fi(this._pt,v?b:a,g,f,(y?wa(f,y+h):h)-f,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?UI:Up),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=OI);else if(g in a)jI.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,r,s);else if(g!=="parseTransform"){cg(g,u);continue}v||(g in a?O.push(g,0,a[g]):O.push(g,1,c||t[g])),o.push(g)}}w&&VT(this)},render:function(t,e){if(e.tween._time||!vg())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Lr,aliases:hr,getSetter:function(t,e,n){var r=hr[e];return r&&r.indexOf(",")<0&&(e=r),e in Yr&&e!==er&&(t._gsap.x||Lr(t,"x"))?n&&e0===n?e==="scale"?VI:BI:(e0=n||{})&&(e==="scale"?zI:HI):t.style&&!og(t.style[e])?kI:~e.indexOf("-")?FI:gg(t,e)},core:{_removeProperty:Ac,_getMatrix:Eg}};mi.utils.checkPrefix=Xa;mi.core.getStyleSaver=XT;(function(i,t,e,n){var r=hi(i+","+t+","+e,function(s){Yr[s]=1});hi(t,function(s){Mi.units[s]="deg",$T[s]=1}),hr[r[13]]=i+","+t,hi(n,function(s){var o=s.split(":");hr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Mi.units[i]="px"});mi.registerPlugin(QT);var Kr=mi.registerPlugin(QT)||mi;Kr.core.Tween;function c0(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function JI(i,t,e){return t&&c0(i.prototype,t),e&&c0(i,e),i}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rn,Vp,wi,hs,fs,Ra,JT,qs,ql,tS,Ur,Ki,eS,nS=function(){return Rn||typeof window<"u"&&(Rn=window.gsap)&&Rn.registerPlugin&&Rn},iS=1,_a=[],de=[],pr=[],Yl=Date.now,zp=function(t,e){return e},tP=function(){var t=ql.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,de),r.push.apply(r,pr),de=n,pr=r,zp=function(o,a){return e[o](a)}},vs=function(t,e){return~pr.indexOf(t)&&pr[pr.indexOf(t)+1][e]},$l=function(t){return!!~tS.indexOf(t)},Kn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},Yn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},uu="scrollLeft",hu="scrollTop",Hp=function(){return Ur&&Ur.isPressed||de.cache++},Fh=function(t,e){var n=function r(s){if(s||s===0){iS&&(wi.history.scrollRestoration="manual");var o=Ur&&Ur.isPressed;s=r.v=Math.round(s)||(Ur&&Ur.iOS?1:0),t(s),r.cacheID=de.cache,o&&zp("ss",s)}else(e||de.cache!==r.cacheID||zp("ref"))&&(r.cacheID=de.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},ni={s:uu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fh(function(i){return arguments.length?wi.scrollTo(i,rn.sc()):wi.pageXOffset||hs[uu]||fs[uu]||Ra[uu]||0})},rn={s:hu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ni,sc:Fh(function(i){return arguments.length?wi.scrollTo(ni.sc(),i):wi.pageYOffset||hs[hu]||fs[hu]||Ra[hu]||0})},ai=function(t,e){return(e&&e._ctx&&e._ctx.selector||Rn.utils.toArray)(t)[0]||(typeof t=="string"&&Rn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Is=function(t,e){var n=e.s,r=e.sc;$l(t)&&(t=hs.scrollingElement||fs);var s=de.indexOf(t),o=r===rn.sc?1:2;!~s&&(s=de.push(t)-1),de[s+o]||Kn(t,"scroll",Hp);var a=de[s+o],l=a||(de[s+o]=Fh(vs(t,n),!0)||($l(t)?r:Fh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Rn.getProperty(t,"scrollBehavior")==="smooth"),l},Gp=function(t,e,n){var r=t,s=t,o=Yl(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var m=Yl();g||m-o>l?(s=r,r=_,a=o,o=m):n?r+=_:r=s+(_-s)/(m-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(_){var g=a,m=s,p=Yl();return(_||_===0)&&_!==r&&u(_),o===a||p-a>c?0:(r+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},El=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},u0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},rS=function(){ql=Rn.core.globals().ScrollTrigger,ql&&ql.core&&tP()},sS=function(t){return Rn=t||nS(),Rn&&typeof document<"u"&&document.body&&(wi=window,hs=document,fs=hs.documentElement,Ra=hs.body,tS=[wi,hs,fs,Ra],Rn.utils.clamp,eS=Rn.core.context||function(){},qs="onpointerenter"in Ra?"pointer":"mouse",JT=en.isTouch=wi.matchMedia&&wi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in wi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ki=en.eventTypes=("ontouchstart"in fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return iS=0},500),rS(),Vp=1),Vp};ni.op=rn;de.cache=0;var en=function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){Vp||sS(Rn)||console.warn("Please gsap.registerPlugin(Observer)"),ql||rS();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,v=n.onPress,E=n.onRelease,b=n.onRight,A=n.onLeft,w=n.onUp,O=n.onDown,S=n.onChangeX,M=n.onChangeY,j=n.onChange,I=n.onToggleX,H=n.onToggleY,x=n.onHover,F=n.onHoverEnd,$=n.onMove,V=n.ignoreCheck,nt=n.isNormalizer,X=n.onGestureStart,N=n.onGestureEnd,D=n.onWheel,k=n.onEnable,ct=n.onDisable,rt=n.onClick,it=n.scrollSpeed,bt=n.capture,wt=n.allowClicks,mt=n.lockAxis,At=n.onLockAxis;this.target=a=ai(a)||fs,this.vars=n,d&&(d=Rn.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,it=it||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(wi.getComputedStyle(Ra).lineHeight)||22);var Kt,Rt,Z,Bt,T,Q,q,R=this,L=0,W=0,ot=Is(a,ni),at=Is(a,rn),K=ot(),P=at(),C=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ki[0]==="pointerdown",z=$l(a),tt=a.ownerDocument||hs,ut=[0,0,0],ht=[0,0,0],Mt=0,_t=function(){return Mt=Yl()},xt=function(Pt,te){return(R.event=Pt)&&d&&~d.indexOf(Pt.target)||te&&C&&Pt.pointerType!=="touch"||V&&V(Pt,te)},G=function(){R._vx.reset(),R._vy.reset(),Rt.pause(),h&&h(R)},dt=function(){var Pt=R.deltaX=u0(ut),te=R.deltaY=u0(ht),ae=Math.abs(Pt)>=r,Ot=Math.abs(te)>=r;j&&(ae||Ot)&&j(R,Pt,te,ut,ht),ae&&(b&&R.deltaX>0&&b(R),A&&R.deltaX<0&&A(R),S&&S(R),I&&R.deltaX<0!=L<0&&I(R),L=R.deltaX,ut[0]=ut[1]=ut[2]=0),Ot&&(O&&R.deltaY>0&&O(R),w&&R.deltaY<0&&w(R),M&&M(R),H&&R.deltaY<0!=W<0&&H(R),W=R.deltaY,ht[0]=ht[1]=ht[2]=0),(Bt||Z)&&($&&$(R),Z&&(y(R),Z=!1),Bt=!1),Q&&!(Q=!1)&&At&&At(R),T&&(D(R),T=!1),Kt=0},ft=function(Pt,te,ae){ut[ae]+=Pt,ht[ae]+=te,R._vx.update(Pt),R._vy.update(te),c?Kt||(Kt=requestAnimationFrame(dt)):dt()},Xt=function(Pt,te){mt&&!q&&(R.axis=q=Math.abs(Pt)>Math.abs(te)?"x":"y",Q=!0),q!=="y"&&(ut[2]+=Pt,R._vx.update(Pt,!0)),q!=="x"&&(ht[2]+=te,R._vy.update(te,!0)),c?Kt||(Kt=requestAnimationFrame(dt)):dt()},Lt=function(Pt){if(!xt(Pt,1)){Pt=El(Pt,u);var te=Pt.clientX,ae=Pt.clientY,Ot=te-R.x,fe=ae-R.y,$t=R.isDragging;R.x=te,R.y=ae,($t||Math.abs(R.startX-te)>=s||Math.abs(R.startY-ae)>=s)&&(y&&(Z=!0),$t||(R.isDragging=!0),Xt(Ot,fe),$t||m&&m(R))}},Vt=R.onPress=function(zt){xt(zt,1)||zt&&zt.button||(R.axis=q=null,Rt.pause(),R.isPressed=!0,zt=El(zt),L=W=0,R.startX=R.x=zt.clientX,R.startY=R.y=zt.clientY,R._vx.reset(),R._vy.reset(),Kn(nt?a:tt,Ki[1],Lt,u,!0),R.deltaX=R.deltaY=0,v&&v(R))},Nt=R.onRelease=function(zt){if(!xt(zt,1)){Yn(nt?a:tt,Ki[1],Lt,!0);var Pt=!isNaN(R.y-R.startY),te=R.isDragging&&(Math.abs(R.x-R.startX)>3||Math.abs(R.y-R.startY)>3),ae=El(zt);!te&&Pt&&(R._vx.reset(),R._vy.reset(),u&&wt&&Rn.delayedCall(.08,function(){if(Yl()-Mt>300&&!zt.defaultPrevented){if(zt.target.click)zt.target.click();else if(tt.createEvent){var Ot=tt.createEvent("MouseEvents");Ot.initMouseEvent("click",!0,!0,wi,1,ae.screenX,ae.screenY,ae.clientX,ae.clientY,!1,!1,!1,!1,0,null),zt.target.dispatchEvent(Ot)}}})),R.isDragging=R.isGesturing=R.isPressed=!1,h&&!nt&&Rt.restart(!0),p&&te&&p(R),E&&E(R,te)}},B=function(Pt){return Pt.touches&&Pt.touches.length>1&&(R.isGesturing=!0)&&X(Pt,R.isDragging)},Tt=function(){return(R.isGesturing=!1)||N(R)},gt=function(Pt){if(!xt(Pt)){var te=ot(),ae=at();ft((te-K)*it,(ae-P)*it,1),K=te,P=ae,h&&Rt.restart(!0)}},Et=function(Pt){if(!xt(Pt)){Pt=El(Pt,u),D&&(T=!0);var te=(Pt.deltaMode===1?l:Pt.deltaMode===2?wi.innerHeight:1)*_;ft(Pt.deltaX*te,Pt.deltaY*te,0),h&&!nt&&Rt.restart(!0)}},yt=function(Pt){if(!xt(Pt)){var te=Pt.clientX,ae=Pt.clientY,Ot=te-R.x,fe=ae-R.y;R.x=te,R.y=ae,Bt=!0,(Ot||fe)&&Xt(Ot,fe)}},pt=function(Pt){R.event=Pt,x(R)},kt=function(Pt){R.event=Pt,F(R)},jt=function(Pt){return xt(Pt)||El(Pt,u)&&rt(R)};Rt=R._dc=Rn.delayedCall(f||.25,G).pause(),R.deltaX=R.deltaY=0,R._vx=Gp(0,50,!0),R._vy=Gp(0,50,!0),R.scrollX=ot,R.scrollY=at,R.isDragging=R.isGesturing=R.isPressed=!1,eS(this),R.enable=function(zt){return R.isEnabled||(Kn(z?tt:a,"scroll",Hp),o.indexOf("scroll")>=0&&Kn(z?tt:a,"scroll",gt,u,bt),o.indexOf("wheel")>=0&&Kn(a,"wheel",Et,u,bt),(o.indexOf("touch")>=0&&JT||o.indexOf("pointer")>=0)&&(Kn(a,Ki[0],Vt,u,bt),Kn(tt,Ki[2],Nt),Kn(tt,Ki[3],Nt),wt&&Kn(a,"click",_t,!1,!0),rt&&Kn(a,"click",jt),X&&Kn(tt,"gesturestart",B),N&&Kn(tt,"gestureend",Tt),x&&Kn(a,qs+"enter",pt),F&&Kn(a,qs+"leave",kt),$&&Kn(a,qs+"move",yt)),R.isEnabled=!0,zt&&zt.type&&Vt(zt),k&&k(R)),R},R.disable=function(){R.isEnabled&&(_a.filter(function(zt){return zt!==R&&$l(zt.target)}).length||Yn(z?tt:a,"scroll",Hp),R.isPressed&&(R._vx.reset(),R._vy.reset(),Yn(nt?a:tt,Ki[1],Lt,!0)),Yn(z?tt:a,"scroll",gt,bt),Yn(a,"wheel",Et,bt),Yn(a,Ki[0],Vt,bt),Yn(tt,Ki[2],Nt),Yn(tt,Ki[3],Nt),Yn(a,"click",_t,!0),Yn(a,"click",jt),Yn(tt,"gesturestart",B),Yn(tt,"gestureend",Tt),Yn(a,qs+"enter",pt),Yn(a,qs+"leave",kt),Yn(a,qs+"move",yt),R.isEnabled=R.isPressed=R.isDragging=!1,ct&&ct(R))},R.kill=R.revert=function(){R.disable();var zt=_a.indexOf(R);zt>=0&&_a.splice(zt,1),Ur===R&&(Ur=0)},_a.push(R),nt&&$l(a)&&(Ur=R),R.enable(g)},JI(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();en.version="3.12.2";en.create=function(i){return new en(i)};en.register=sS;en.getAll=function(){return _a.slice()};en.getById=function(i){return _a.filter(function(t){return t.vars.id===i})[0]};nS()&&Rn.registerPlugin(en);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ft,ha,me,Be,Qi,Oe,oS,Bh,Vh,ya,ih,fu,On,Rf,Wp,Qn,h0,f0,fa,aS,ad,lS,vi,cS,uS,hS,ss,Xp,Tg,Ca,Sg,ld,du=1,ti=Date.now,cd=ti(),ji=0,Ol=0,d0=function(t,e,n){var r=Ei(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},p0=function(t,e){return e&&(!Ei(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},eP=function i(){return Ol&&requestAnimationFrame(i)},m0=function(){return Rf=1},g0=function(){return Rf=0},ir=function(t){return t},Ul=function(t){return Math.round(t*1e5)/1e5||0},fS=function(){return typeof window<"u"},dS=function(){return Ft||fS()&&(Ft=window.gsap)&&Ft.registerPlugin&&Ft},Ro=function(t){return!!~oS.indexOf(t)},pS=function(t){return(t==="Height"?Sg:me["inner"+t])||Qi["client"+t]||Oe["client"+t]},mS=function(t){return vs(t,"getBoundingClientRect")||(Ro(t)?function(){return ch.width=me.innerWidth,ch.height=Sg,ch}:function(){return Nr(t)})},nP=function(t,e,n){var r=n.d,s=n.d2,o=n.a;return(o=vs(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?pS(s):t["client"+s])||0}},iP=function(t,e){return!e||~pr.indexOf(t)?mS(t):function(){return ch}},kr=function(t,e){var n=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+r)&&(o=vs(t,n))?o()-mS(t)()[s]:Ro(t)?(Qi[n]||Oe[n])-pS(r):t[n]-t["offset"+r])},pu=function(t,e){for(var n=0;n<fa.length;n+=3)(!e||~e.indexOf(fa[n+1]))&&t(fa[n],fa[n+1],fa[n+2])},Ei=function(t){return typeof t=="string"},ii=function(t){return typeof t=="function"},rh=function(t){return typeof t=="number"},Ys=function(t){return typeof t=="object"},Tl=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ud=function(t,e){if(t.enabled){var n=e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ho=Math.abs,gS="left",_S="top",bg="right",wg="bottom",go="width",_o="height",Kl="Right",Zl="Left",Ql="Top",Jl="Bottom",Qe="padding",Oi="margin",ja="Width",Ag="Height",En="px",Ui=function(t){return me.getComputedStyle(t)},rP=function(t){var e=Ui(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},_0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Nr=function(t,e){var n=e&&Ui(t)[Wp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ft.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},jp=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},yS=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},sP=function(t){return function(e){return Ft.utils.snap(yS(t),e)}},Mg=function(t){var e=Ft.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},oP=function(t){return function(e,n){return Mg(yS(t))(e,n.direction)}},mu=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},cn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},ln=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},gu=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},y0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_u={toggleActions:"play",anticipatePin:0},zh={top:0,left:0,center:.5,bottom:1,right:1},sh=function(t,e){if(Ei(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in zh?zh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},yu=function(t,e,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=Be.createElement("div"),g=Ro(n)||vs(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?Oe:n,y=t.indexOf("start")!==-1,v=y?c:u,E="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(E+=(r===rn?bg:wg)+":"+(o+parseFloat(f))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=E,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],oh(_,0,r,y),_},oh=function(t,e,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+ja]=1,s["border"+a+ja]=0,s[n.p]=e+"px",Ft.set(t,s)},ce=[],qp={},Cc,v0=function(){return ti()-ji>34&&(Cc||(Cc=requestAnimationFrame(Hr)))},Go=function(){(!vi||!vi.isPressed||vi.startX>Oe.clientWidth)&&(de.cache++,vi?Cc||(Cc=requestAnimationFrame(Hr)):Hr(),ji||Io("scrollStart"),ji=ti())},hd=function(){hS=me.innerWidth,uS=me.innerHeight},kl=function(){de.cache++,!On&&!lS&&!Be.fullscreenElement&&!Be.webkitFullscreenElement&&(!cS||hS!==me.innerWidth||Math.abs(me.innerHeight-uS)>me.innerHeight*.25)&&Bh.restart(!0)},Co={},aP=[],vS=function i(){return ln(pe,"scrollEnd",i)||no(!0)},Io=function(t){return Co[t]&&Co[t].map(function(e){return e()})||aP},xi=[],xS=function(t){for(var e=0;e<xi.length;e+=5)(!t||xi[e+4]&&xi[e+4].query===t)&&(xi[e].style.cssText=xi[e+1],xi[e].getBBox&&xi[e].setAttribute("transform",xi[e+2]||""),xi[e+3].uncache=1)},Rg=function(t,e){var n;for(Qn=0;Qn<ce.length;Qn++)n=ce[Qn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));e&&xS(e),e||Io("revert")},ES=function(t,e){de.cache++,(e||!Jn)&&de.forEach(function(n){return ii(n)&&n.cacheID++&&(n.rec=0)}),Ei(t)&&(me.history.scrollRestoration=Tg=t)},Jn,yo=0,x0,lP=function(){if(x0!==yo){var t=x0=yo;requestAnimationFrame(function(){return t===yo&&no(!0)})}},TS=function(){Oe.appendChild(Ca),Sg=Ca.offsetHeight||me.innerHeight,Oe.removeChild(Ca)},no=function(t,e){if(ji&&!t){cn(pe,"scrollEnd",vS);return}TS(),Jn=pe.isRefreshing=!0,de.forEach(function(r){return ii(r)&&++r.cacheID&&(r.rec=r())});var n=Io("refreshInit");aS&&pe.sort(),e||Rg(),de.forEach(function(r){ii(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ce.slice(0).forEach(function(r){return r.refresh()}),ce.forEach(function(r,s){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-a),r.refresh()}}),ce.forEach(function(r){var s=kr(r.scroller,r._dir);(r.vars.end==="max"||r._endClamp&&r.end>s)&&r.setPositions(r.start,Math.max(r.start+1,s),!0)}),n.forEach(function(r){return r&&r.render&&r.render(-1)}),de.forEach(function(r){ii(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ES(Tg,1),Bh.pause(),yo++,Jn=2,Hr(2),ce.forEach(function(r){return ii(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Jn=pe.isRefreshing=!1,Io("refresh")},Yp=0,ah=1,tc,Hr=function(t){if(!Jn||t===2){pe.isUpdating=!0,tc&&tc.update(0);var e=ce.length,n=ti(),r=n-cd>=50,s=e&&ce[0].scroll();if(ah=Yp>s?-1:1,Jn||(Yp=s),r&&(ji&&!Rf&&n-ji>200&&(ji=0,Io("scrollEnd")),ih=cd,cd=n),ah<0){for(Qn=e;Qn-- >0;)ce[Qn]&&ce[Qn].update(0,r);ah=1}else for(Qn=0;Qn<e;Qn++)ce[Qn]&&ce[Qn].update(0,r);pe.isUpdating=!1}Cc=0},$p=[gS,_S,wg,bg,Oi+Jl,Oi+Kl,Oi+Ql,Oi+Zl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lh=$p.concat([go,_o,"boxSizing","max"+ja,"max"+Ag,"position",Oi,Qe,Qe+Ql,Qe+Kl,Qe+Jl,Qe+Zl]),cP=function(t,e,n){Ia(n);var r=t._gsap;if(r.spacerIsNative)Ia(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},fd=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=$p.length,o=e.style,a=t.style,l;s--;)l=$p[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[wg]=a[bg]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[go]=jp(t,ni)+En,o[_o]=jp(t,rn)+En,o[Qe]=a[Oi]=a[_S]=a[gS]="0",Ia(r),a[go]=a["max"+ja]=n[go],a[_o]=a["max"+Ag]=n[_o],a[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},uP=/([A-Z])/g,Ia=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,o;for((t.t._gsap||Ft.core.getCache(t.t)).uncache=1;r<n;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(uP,"-$1").toLowerCase())}},vu=function(t){for(var e=lh.length,n=t.style,r=[],s=0;s<e;s++)r.push(lh[s],n[lh[s]]);return r.t=t,r},hP=function(t,e,n){for(var r=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},ch={left:0,top:0},E0=function(t,e,n,r,s,o,a,l,c,u,h,f,d,_){ii(t)&&(t=t(l)),Ei(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?sh("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(t)||(t=+t),rh(t))d&&(t=Ft.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&oh(a,n,r,!0);else{ii(e)&&(e=e(l));var v=(t||"0").split(" "),E,b,A,w;y=ai(e,l)||Oe,E=Nr(y)||{},(!E||!E.left&&!E.top)&&Ui(y).display==="none"&&(w=y.style.display,y.style.display="block",E=Nr(y),w?y.style.display=w:y.style.removeProperty("display")),b=sh(v[0],E[r.d]),A=sh(v[1]||"0",n),t=E[r.p]-c[r.p]-u+b+s-A,a&&oh(a,A,r,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var O=t+n,S=o._isStart;m="scroll"+r.d2,oh(o,O,r,S&&O>20||!S&&(h?Math.max(Oe[m],Qi[m]):o.parentNode[m])<=O+1),h&&(c=Nr(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+En))}return d&&y&&(m=Nr(y),d.seek(f),p=Nr(y),d._caScrollDist=m[r.p]-p[r.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},fP=/(webkit|moz|length|cssText|inset)/i,T0=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===Oe){t._stOrig=s.cssText,a=Ui(t);for(o in a)!+o&&!fP.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=t._stOrig;Ft.core.getCache(t).uncache=1,e.appendChild(t)}},SS=function(t,e,n){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},xu=function(t,e,n){var r={};r[e.p]="+="+n,Ft.set(t,r)},S0=function(t,e){var n=Is(t,e),r="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=SS(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.modifiers=_,_[r]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){de.cache++,Hr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ft.to(t,l),f};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),pe.isTouch&&cn(t,"touchmove",n.wheelHandler),s},pe=function(){function i(e,n){ha||i.register(Ft)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Xp(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ol){this.update=this.refresh=this.kill=ir;return}n=_0(Ei(n)||rh(n)||n.nodeType?{trigger:n}:n,_u);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,E=s.snap,b=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,O=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ni:rn,j=!h&&h!==0,I=ai(n.scroller||me),H=Ft.core.getCache(I),x=Ro(I),F=("pinType"in n?n.pinType:vs(I,"pinType")||x&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=j&&n.toggleActions.split(" "),nt="markers"in n?n.markers:_u.markers,X=x?0:parseFloat(Ui(I)["border"+M.p2+ja])||0,N=this,D=n.onRefreshInit&&function(){return n.onRefreshInit(N)},k=nP(I,x,M),ct=iP(I,x),rt=0,it=0,bt=0,wt=Is(I,M),mt,At,Kt,Rt,Z,Bt,T,Q,q,R,L,W,ot,at,K,P,C,z,tt,ut,ht,Mt,_t,xt,G,dt,ft,Xt,Lt,Vt,Nt,B,Tt,gt,Et,yt,pt,kt,jt;if(N._startClamp=N._endClamp=!1,N._dir=M,m*=45,N.scroller=I,N.scroll=w?w.time.bind(w):wt,Rt=wt(),N.vars=n,r=r||n.animation,"refreshPriority"in n&&(aS=1,n.refreshPriority===-9999&&(tc=N)),H.tweenScroll=H.tweenScroll||{top:S0(I,rn),left:S0(I,ni)},N.tweenTo=mt=H.tweenScroll[M.p],N.scrubDuration=function(Ot){Tt=rh(Ot)&&Ot,Tt?B?B.duration(Ot):B=Ft.to(r,{ease:"expo",totalProgress:"+=0",duration:Tt,paused:!0,onComplete:function(){return p&&p(N)}}):(B&&B.progress(1).kill(),B=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(h),Vt=0,l||(l=r.vars.id)),E&&((!Ys(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in Oe.style&&Ft.set(x?[Oe,Qi]:I,{scrollBehavior:"auto"}),de.forEach(function(Ot){return ii(Ot)&&Ot.target===(x?Be.scrollingElement||Qi:I)&&(Ot.smooth=!1)}),Kt=ii(E.snapTo)?E.snapTo:E.snapTo==="labels"?sP(r):E.snapTo==="labelsDirectional"?oP(r):E.directional!==!1?function(Ot,fe){return Mg(E.snapTo)(Ot,ti()-it<500?0:fe.direction)}:Ft.utils.snap(E.snapTo),gt=E.duration||{min:.1,max:2},gt=Ys(gt)?ya(gt.min,gt.max):ya(gt,gt),Et=Ft.delayedCall(E.delay||Tt/2||.1,function(){var Ot=wt(),fe=ti()-it<500,$t=mt.tween;if((fe||Math.abs(N.getVelocity())<10)&&!$t&&!Rf&&rt!==Ot){var ee=(Ot-Bt)/at,Ye=r&&!j?r.totalProgress():ee,le=fe?0:(Ye-Nt)/(ti()-ih)*1e3||0,Fe=Ft.utils.clamp(-ee,1-ee,Ho(le/2)*le/.185),xn=ee+(E.inertia===!1?0:Fe),nn=ya(0,1,Kt(xn,N)),De=Math.round(Bt+nn*at),U=E,J=U.onStart,st=U.onInterrupt,et=U.onComplete;if(Ot<=T&&Ot>=Bt&&De!==Ot){if($t&&!$t._initted&&$t.data<=Ho(De-Ot))return;E.inertia===!1&&(Fe=nn-ee),mt(De,{duration:gt(Ho(Math.max(Ho(xn-Ye),Ho(nn-Ye))*.185/le/.05||0)),ease:E.ease||"power3",data:Ho(De-Ot),onInterrupt:function(){return Et.restart(!0)&&st&&st(N)},onComplete:function(){N.update(),rt=wt(),Vt=Nt=r&&!j?r.totalProgress():N.progress,y&&y(N),et&&et(N)}},Ot,Fe*at,De-Ot-Fe*at),J&&J(N,mt.tween)}}else N.isActive&&rt!==Ot&&Et.restart(!0)}).pause()),l&&(qp[l]=N),f=N.trigger=ai(f||d!==!0&&d),jt=f&&f._gsap&&f._gsap.stRevert,jt&&(jt=jt(N)),d=d===!0?f:ai(d),Ei(a)&&(a={targets:f,className:a}),d&&(_===!1||_===Oi||(_=!_&&d.parentNode&&d.parentNode.style&&Ui(d.parentNode).display==="flex"?!1:Qe),N.pin=d,At=Ft.core.getCache(d),At.spacer?K=At.pinState:(A&&(A=ai(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),At.spacerIsNative=!!A,A&&(At.spacerState=vu(A))),At.spacer=z=A||Be.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),At.pinState=K=vu(d)),n.force3D!==!1&&Ft.set(d,{force3D:!0}),N.spacer=z=At.spacer,Lt=Ui(d),xt=Lt[_+M.os2],ut=Ft.getProperty(d),ht=Ft.quickSetter(d,M.a,En),fd(d,z,Lt),C=vu(d)),nt){W=Ys(nt)?_0(nt,y0):y0,R=yu("scroller-start",l,I,M,W,0),L=yu("scroller-end",l,I,M,W,0,R),tt=R["offset"+M.op.d2];var zt=ai(vs(I,"content")||I);Q=this.markerStart=yu("start",l,zt,M,W,tt,0,w),q=this.markerEnd=yu("end",l,zt,M,W,tt,0,w),w&&(kt=Ft.quickSetter([Q,q],M.a,En)),!F&&!(pr.length&&vs(I,"fixedMarkers")===!0)&&(rP(x?Oe:I),Ft.set([R,L],{force3D:!0}),dt=Ft.quickSetter(R,M.a,En),Xt=Ft.quickSetter(L,M.a,En))}if(w){var Pt=w.vars.onUpdate,te=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){N.update(0,0,1),Pt&&Pt.apply(w,te||[])})}if(N.previous=function(){return ce[ce.indexOf(N)-1]},N.next=function(){return ce[ce.indexOf(N)+1]},N.revert=function(Ot,fe){if(!fe)return N.kill(!0);var $t=Ot!==!1||!N.enabled,ee=On;$t!==N.isReverted&&($t&&(yt=Math.max(wt(),N.scroll.rec||0),bt=N.progress,pt=r&&r.progress()),Q&&[Q,q,R,L].forEach(function(Ye){return Ye.style.display=$t?"none":"block"}),$t&&(On=N,N.update($t)),d&&(!b||!N.isActive)&&($t?cP(d,z,K):fd(d,z,Ui(d),G)),$t||N.update($t),On=ee,N.isReverted=$t)},N.refresh=function(Ot,fe,$t,ee){if(!((On||!N.enabled)&&!fe)){if(d&&Ot&&ji){cn(i,"scrollEnd",vS);return}!Jn&&D&&D(N),On=N,mt.tween&&!$t&&(mt.tween.kill(),mt.tween=0),B&&B.pause(),g&&r&&r.revert({kill:!1}).invalidate(),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Ye=k(),le=ct(),Fe=w?w.duration():kr(I,M),xn=at<=.01,nn=0,De=ee||0,U=Ys($t)?$t.end:n.end,J=n.endTrigger||f,st=Ys($t)?$t.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),et=N.pinnedContainer=n.pinnedContainer&&ai(n.pinnedContainer,N),lt=f&&Math.max(0,ce.indexOf(N))||0,Ct=lt,Ut,Gt,Yt,ne,Ht,Wt,xe,Le,Wn,Xn,Te,ie,Qr;for(nt&&Ys($t)&&(ie=Ft.getProperty(R,M.p),Qr=Ft.getProperty(L,M.p));Ct--;)Wt=ce[Ct],Wt.end||Wt.refresh(0,1)||(On=N),xe=Wt.pin,xe&&(xe===f||xe===d||xe===et)&&!Wt.isReverted&&(Xn||(Xn=[]),Xn.unshift(Wt),Wt.revert(!0,!0)),Wt!==ce[Ct]&&(lt--,Ct--);for(ii(st)&&(st=st(N)),st=d0(st,"start",N),Bt=E0(st,f,Ye,M,wt(),Q,R,N,le,X,F,Fe,w,N._startClamp&&"_startClamp")||(d?-.001:0),ii(U)&&(U=U(N)),Ei(U)&&!U.indexOf("+=")&&(~U.indexOf(" ")?U=(Ei(st)?st.split(" ")[0]:"")+U:(nn=sh(U.substr(2),Ye),U=Ei(st)?st:(w?Ft.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Bt):Bt)+nn,J=f)),U=d0(U,"end",N),T=Math.max(Bt,E0(U||(J?"100% 0":Fe),J,Ye,M,wt()+nn,q,L,N,le,X,F,Fe,w,N._endClamp&&"_endClamp"))||-.001,nn=0,Ct=lt;Ct--;)Wt=ce[Ct],xe=Wt.pin,xe&&Wt.start-Wt._pinPush<=Bt&&!w&&Wt.end>0&&(Ut=Wt.end-(N._startClamp?Math.max(0,Wt.start):Wt.start),(xe===f&&Wt.start-Wt._pinPush<Bt||xe===et)&&isNaN(st)&&(nn+=Ut*(1-Wt.progress)),xe===d&&(De+=Ut));if(Bt+=nn,T+=nn,N._startClamp&&(N._startClamp+=nn),N._endClamp&&!Jn&&(N._endClamp=T||-.001,T=Math.min(T,kr(I,M))),at=T-Bt||(Bt-=.01)&&.001,xn&&(bt=Ft.utils.clamp(0,1,Ft.utils.normalize(Bt,T,yt))),N._pinPush=De,Q&&nn&&(Ut={},Ut[M.a]="+="+nn,et&&(Ut[M.p]="-="+wt()),Ft.set([Q,q],Ut)),d)Ut=Ui(d),ne=M===rn,Yt=wt(),Mt=parseFloat(ut(M.a))+De,!Fe&&T>1&&(Te=(x?Be.scrollingElement||Qi:I).style,Te={style:Te,value:Te["overflow"+M.a.toUpperCase()]},x&&Ui(Oe)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Te.style["overflow"+M.a.toUpperCase()]="scroll")),fd(d,z,Ut),C=vu(d),Gt=Nr(d,!0),Le=F&&Is(I,ne?ni:rn)(),_&&(G=[_+M.os2,at+De+En],G.t=z,Ct=_===Qe?jp(d,M)+at+De:0,Ct&&G.push(M.d,Ct+En),Ia(G),et&&ce.forEach(function(Ie){Ie.pin===et&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),F&&wt(yt)),F&&(Ht={top:Gt.top+(ne?Yt-Bt:Le)+En,left:Gt.left+(ne?Le:Yt-Bt)+En,boxSizing:"border-box",position:"fixed"},Ht[go]=Ht["max"+ja]=Math.ceil(Gt.width)+En,Ht[_o]=Ht["max"+Ag]=Math.ceil(Gt.height)+En,Ht[Oi]=Ht[Oi+Ql]=Ht[Oi+Kl]=Ht[Oi+Jl]=Ht[Oi+Zl]="0",Ht[Qe]=Ut[Qe],Ht[Qe+Ql]=Ut[Qe+Ql],Ht[Qe+Kl]=Ut[Qe+Kl],Ht[Qe+Jl]=Ut[Qe+Jl],Ht[Qe+Zl]=Ut[Qe+Zl],P=hP(K,Ht,b),Jn&&wt(0)),r?(Wn=r._initted,ad(1),r.render(r.duration(),!0,!0),_t=ut(M.a)-Mt+at+De,ft=Math.abs(at-_t)>1,F&&ft&&P.splice(P.length-2,2),r.render(0,!0,!0),Wn||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ad(0)):_t=at,Te&&(Te.value?Te.style["overflow"+M.a.toUpperCase()]=Te.value:Te.style.removeProperty("overflow-"+M.a));else if(f&&wt()&&!w)for(Gt=f.parentNode;Gt&&Gt!==Oe;)Gt._pinOffset&&(Bt-=Gt._pinOffset,T-=Gt._pinOffset),Gt=Gt.parentNode;Xn&&Xn.forEach(function(Ie){return Ie.revert(!1,!0)}),N.start=Bt,N.end=T,Rt=Z=Jn?yt:wt(),!w&&!Jn&&(Rt<yt&&wt(yt),N.scroll.rec=0),N.revert(!1,!0),it=ti(),Et&&(rt=-1,Et.restart(!0)),On=0,r&&j&&(r._initted||pt)&&r.progress()!==pt&&r.progress(pt||0,!0).render(r.time(),!0,!0),(xn||bt!==N.progress||w)&&(r&&!j&&r.totalProgress(w&&Bt<-.001&&!bt?Ft.utils.normalize(Bt,T,0):bt,!0),N.progress=xn||(Rt-Bt)/at===bt?0:bt),d&&_&&(z._pinOffset=Math.round(N.progress*_t)),B&&B.invalidate(),isNaN(ie)||(ie-=Ft.getProperty(R,M.p),Qr-=Ft.getProperty(L,M.p),xu(R,M,ie),xu(Q,M,ie-(ee||0)),xu(L,M,Qr),xu(q,M,Qr-(ee||0))),xn&&!Jn&&N.update(),u&&!Jn&&!ot&&(ot=!0,u(N),ot=!1)}},N.getVelocity=function(){return(wt()-Z)/(ti()-ih)*1e3||0},N.endAnimation=function(){Tl(N.callbackAnimation),r&&(B?B.progress(1):r.paused()?j||Tl(r,N.direction<0,1):Tl(r,r.reversed()))},N.labelToScroll=function(Ot){return r&&r.labels&&(Bt||N.refresh()||Bt)+r.labels[Ot]/r.duration()*at||0},N.getTrailing=function(Ot){var fe=ce.indexOf(N),$t=N.direction>0?ce.slice(0,fe).reverse():ce.slice(fe+1);return(Ei(Ot)?$t.filter(function(ee){return ee.vars.preventOverlaps===Ot}):$t).filter(function(ee){return N.direction>0?ee.end<=Bt:ee.start>=T})},N.update=function(Ot,fe,$t){if(!(w&&!$t&&!Ot)){var ee=Jn===!0?yt:N.scroll(),Ye=Ot?0:(ee-Bt)/at,le=Ye<0?0:Ye>1?1:Ye||0,Fe=N.progress,xn,nn,De,U,J,st,et,lt;if(fe&&(Z=Rt,Rt=w?wt():ee,E&&(Nt=Vt,Vt=r&&!j?r.totalProgress():le)),m&&!le&&d&&!On&&!du&&ji&&Bt<ee+(ee-Z)/(ti()-ih)*m&&(le=1e-4),le!==Fe&&N.enabled){if(xn=N.isActive=!!le&&le<1,nn=!!Fe&&Fe<1,st=xn!==nn,J=st||!!le!=!!Fe,N.direction=le>Fe?1:-1,N.progress=le,J&&!On&&(De=le&&!Fe?0:le===1?1:Fe===1?2:3,j&&(U=!st&&V[De+1]!=="none"&&V[De+1]||V[De],lt=r&&(U==="complete"||U==="reset"||U in r))),S&&(st||lt)&&(lt||h||!r)&&(ii(S)?S(N):N.getTrailing(S).forEach(function(Yt){return Yt.endAnimation()})),j||(B&&!On&&!du?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",le,r._tTime/r._tDur):(B.vars.totalProgress=le,B.invalidate().restart())):r&&r.totalProgress(le,!!(On&&(it||Ot)))),d){if(Ot&&_&&(z.style[_+M.os2]=xt),!F)ht(Ul(Mt+_t*le));else if(J){if(et=!Ot&&le>Fe&&T+1>ee&&ee+1>=kr(I,M),b)if(!Ot&&(xn||et)){var Ct=Nr(d,!0),Ut=ee-Bt;T0(d,Oe,Ct.top+(M===rn?Ut:0)+En,Ct.left+(M===rn?0:Ut)+En)}else T0(d,z);Ia(xn||et?P:C),ft&&le<1&&xn||ht(Mt+(le===1&&!et?_t:0))}}E&&!mt.tween&&!On&&!du&&Et.restart(!0),a&&(st||v&&le&&(le<1||!ld))&&Vh(a.targets).forEach(function(Yt){return Yt.classList[xn||v?"add":"remove"](a.className)}),o&&!j&&!Ot&&o(N),J&&!On?(j&&(lt&&(U==="complete"?r.pause().totalProgress(1):U==="reset"?r.restart(!0).pause():U==="restart"?r.restart(!0):r[U]()),o&&o(N)),(st||!ld)&&(c&&st&&ud(N,c),$[De]&&ud(N,$[De]),v&&(le===1?N.kill(!1,1):$[De]=0),st||(De=le===1?1:3,$[De]&&ud(N,$[De]))),O&&!xn&&Math.abs(N.getVelocity())>(rh(O)?O:2500)&&(Tl(N.callbackAnimation),B?B.progress(1):Tl(r,U==="reverse"?1:!le,1))):j&&o&&!On&&o(N)}if(Xt){var Gt=w?ee/w.duration()*(w._caScrollDist||0):ee;dt(Gt+(R._isFlipped?1:0)),Xt(Gt)}kt&&kt(-ee/w.duration()*(w._caScrollDist||0))}},N.enable=function(Ot,fe){N.enabled||(N.enabled=!0,cn(I,"resize",kl),x||cn(I,"scroll",Go),D&&cn(i,"refreshInit",D),Ot!==!1&&(N.progress=bt=0,Rt=Z=rt=wt()),fe!==!1&&N.refresh())},N.getTween=function(Ot){return Ot&&mt?mt.tween:B},N.setPositions=function(Ot,fe,$t,ee){if(w){var Ye=w.scrollTrigger,le=w.duration(),Fe=Ye.end-Ye.start;Ot=Ye.start+Fe*Ot/le,fe=Ye.start+Fe*fe/le}N.refresh(!1,!1,{start:p0(Ot,$t&&!!N._startClamp),end:p0(fe,$t&&!!N._endClamp)},ee),N.update()},N.adjustPinSpacing=function(Ot){if(G&&Ot){var fe=G.indexOf(M.d)+1;G[fe]=parseFloat(G[fe])+Ot+En,G[1]=parseFloat(G[1])+Ot+En,Ia(G)}},N.disable=function(Ot,fe){if(N.enabled&&(Ot!==!1&&N.revert(!0,!0),N.enabled=N.isActive=!1,fe||B&&B.pause(),yt=0,At&&(At.uncache=1),D&&ln(i,"refreshInit",D),Et&&(Et.pause(),mt.tween&&mt.tween.kill()&&(mt.tween=0)),!x)){for(var $t=ce.length;$t--;)if(ce[$t].scroller===I&&ce[$t]!==N)return;ln(I,"resize",kl),x||ln(I,"scroll",Go)}},N.kill=function(Ot,fe){N.disable(Ot,fe),B&&!fe&&B.kill(),l&&delete qp[l];var $t=ce.indexOf(N);$t>=0&&ce.splice($t,1),$t===Qn&&ah>0&&Qn--,$t=0,ce.forEach(function(ee){return ee.scroller===N.scroller&&($t=1)}),$t||Jn||(N.scroll.rec=0),r&&(r.scrollTrigger=null,Ot&&r.revert({kill:!1}),fe||r.kill()),Q&&[Q,q,R,L].forEach(function(ee){return ee.parentNode&&ee.parentNode.removeChild(ee)}),tc===N&&(tc=0),d&&(At&&(At.uncache=1),$t=0,ce.forEach(function(ee){return ee.pin===d&&$t++}),$t||(At.spacer=0)),n.onKill&&n.onKill(N)},ce.push(N),N.enable(!1,!1),jt&&jt(N),r&&r.add&&!at){var ae=N.update;N.update=function(){N.update=ae,Bt||T||N.refresh()},Ft.delayedCall(.01,N.update),at=.01,Bt=T=0}else N.refresh();d&&lP()},i.register=function(n){return ha||(Ft=n||dS(),fS()&&window.document&&i.enable(),ha=Ol),ha},i.defaults=function(n){if(n)for(var r in n)_u[r]=n[r];return _u},i.disable=function(n,r){Ol=0,ce.forEach(function(o){return o[r?"kill":"disable"](n)}),ln(me,"wheel",Go),ln(Be,"scroll",Go),clearInterval(fu),ln(Be,"touchcancel",ir),ln(Oe,"touchstart",ir),mu(ln,Be,"pointerdown,touchstart,mousedown",m0),mu(ln,Be,"pointerup,touchend,mouseup",g0),Bh.kill(),pu(ln);for(var s=0;s<de.length;s+=3)gu(ln,de[s],de[s+1]),gu(ln,de[s],de[s+2])},i.enable=function(){if(me=window,Be=document,Qi=Be.documentElement,Oe=Be.body,Ft&&(Vh=Ft.utils.toArray,ya=Ft.utils.clamp,Xp=Ft.core.context||ir,ad=Ft.core.suppressOverwrites||ir,Tg=me.history.scrollRestoration||"auto",Yp=me.pageYOffset,Ft.core.globals("ScrollTrigger",i),Oe)){Ol=1,Ca=document.createElement("div"),Ca.style.height="100vh",Ca.style.position="absolute",TS(),eP(),en.register(Ft),i.isTouch=en.isTouch,ss=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),cn(me,"wheel",Go),oS=[me,Be,Qi,Oe],Ft.matchMedia?(i.matchMedia=function(l){var c=Ft.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ft.addEventListener("matchMediaInit",function(){return Rg()}),Ft.addEventListener("matchMediaRevert",function(){return xS()}),Ft.addEventListener("matchMedia",function(){no(0,1),Io("matchMedia")}),Ft.matchMedia("(orientation: portrait)",function(){return hd(),hd})):console.warn("Requires GSAP 3.11.0 or later"),hd(),cn(Be,"scroll",Go);var n=Oe.style,r=n.borderTopStyle,s=Ft.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Nr(Oe),rn.m=Math.round(o.top+rn.sc())||0,ni.m=Math.round(o.left+ni.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),fu=setInterval(v0,250),Ft.delayedCall(.5,function(){return du=0}),cn(Be,"touchcancel",ir),cn(Oe,"touchstart",ir),mu(cn,Be,"pointerdown,touchstart,mousedown",m0),mu(cn,Be,"pointerup,touchend,mouseup",g0),Wp=Ft.utils.checkPrefix("transform"),lh.push(Wp),ha=ti(),Bh=Ft.delayedCall(.2,no).pause(),fa=[Be,"visibilitychange",function(){var l=me.innerWidth,c=me.innerHeight;Be.hidden?(h0=l,f0=c):(h0!==l||f0!==c)&&kl()},Be,"DOMContentLoaded",no,me,"load",no,me,"resize",kl],pu(cn),ce.forEach(function(l){return l.enable(0,1)}),a=0;a<de.length;a+=3)gu(ln,de[a],de[a+1]),gu(ln,de[a],de[a+2])}},i.config=function(n){"limitCallbacks"in n&&(ld=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(fu)||(fu=r)&&setInterval(v0,r),"ignoreMobileResize"in n&&(cS=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(pu(ln)||pu(cn,n.autoRefreshEvents||"none"),lS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=ai(n),o=de.indexOf(s),a=Ro(s);~o&&de.splice(o,a?6:2),r&&(a?pr.unshift(me,r,Oe,r,Qi,r):pr.unshift(s,r))},i.clearMatchMedia=function(n){ce.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Ei(n)?ai(n):n).getBoundingClientRect(),a=o[s?go:_o]*r||0;return s?o.right-a>0&&o.left+a<me.innerWidth:o.bottom-a>0&&o.top+a<me.innerHeight},i.positionInViewport=function(n,r,s){Ei(n)&&(n=ai(n));var o=n.getBoundingClientRect(),a=o[s?go:_o],l=r==null?a/2:r in zh?zh[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/me.innerWidth:(o.top+l)/me.innerHeight},i.killAll=function(n){if(ce.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Co.killAll||[];Co={},r.forEach(function(s){return s()})}},i}();pe.version="3.12.2";pe.saveStyles=function(i){return i?Vh(i).forEach(function(t){if(t&&t.style){var e=xi.indexOf(t);e>=0&&xi.splice(e,5),xi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ft.core.getCache(t),Xp())}}):xi};pe.revert=function(i,t){return Rg(!i,t)};pe.create=function(i,t){return new pe(i,t)};pe.refresh=function(i){return i?kl():(ha||pe.register())&&no(!0)};pe.update=function(i){return++de.cache&&Hr(i===!0?2:0)};pe.clearScrollMemory=ES;pe.maxScroll=function(i,t){return kr(i,t?ni:rn)};pe.getScrollFunc=function(i,t){return Is(ai(i),t?ni:rn)};pe.getById=function(i){return qp[i]};pe.getAll=function(){return ce.filter(function(i){return i.vars.id!=="ScrollSmoother"})};pe.isScrolling=function(){return!!ji};pe.snapDirectional=Mg;pe.addEventListener=function(i,t){var e=Co[i]||(Co[i]=[]);~e.indexOf(t)||e.push(t)};pe.removeEventListener=function(i,t){var e=Co[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};pe.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ft.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&ii(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return ii(s)&&(s=s(),cn(pe,"refresh",function(){return s=t.batchMax()})),Vh(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(pe.create(c))}),e};var b0=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},dd=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(en.isTouch?" pinch-zoom":""):"none",t===Qi&&i(Oe,e)},Eu={auto:1,scroll:1},dP=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ft.core.getCache(s),a=ti(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Oe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Eu[(l=Ui(s)).overflowY]||Eu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ro(s)&&(Eu[(l=Ui(s)).overflowY]||Eu[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},bS=function(t,e,n,r){return en.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&dP,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&cn(Be,en.eventTypes[0],A0,!1,!0)},onDisable:function(){return ln(Be,en.eventTypes[0],A0,!0)}})},pP=/(input|label|select|textarea)/i,w0,A0=function(t){var e=pP.test(t.target.tagName);(e||w0)&&(t._gsapAllow=!0,w0=e)},mP=function(t){Ys(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=ai(t.target)||Qi,u=Ft.core.globals().ScrollSmoother,h=u&&u.get(),f=ss&&(t.content&&ai(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Is(c,rn),_=Is(c,ni),g=1,m=(en.isTouch&&me.visualViewport?me.visualViewport.scale*me.visualViewport.width:me.outerWidth)/me.innerWidth,p=0,y=ii(r)?function(){return r(a)}:function(){return r||2.8},v,E,b=bS(c,t.type,!0,s),A=function(){return E=!1},w=ir,O=ir,S=function(){l=kr(c,rn),O=ya(ss?1:0,l),n&&(w=ya(0,kr(c,ni))),v=yo},M=function(){f._gsap.y=Ul(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},j=function(){if(E){requestAnimationFrame(A);var nt=Ul(a.deltaY/2),X=O(d.v-nt);if(f&&X!==d.v+d.offset){d.offset=X-d.v;var N=Ul((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",d.cacheID=de.cache,Hr()}return!0}d.offset&&M(),E=!0},I,H,x,F,$=function(){S(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&Ft.set(f,{y:"+=0"}),t.ignoreCheck=function(V){return ss&&V.type==="touchmove"&&j()||g>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},t.onPress=function(){E=!1;var V=g;g=Ul((me.visualViewport&&me.visualViewport.scale||1)/m),I.pause(),V!==g&&dd(c,g>1.01?!0:n?!1:"x"),H=_(),x=d(),S(),v=yo},t.onRelease=t.onGestureStart=function(V,nt){if(d.offset&&M(),!nt)F.restart(!0);else{de.cache++;var X=y(),N,D;n&&(N=_(),D=N+X*.05*-V.velocityX/.227,X*=b0(_,N,D,kr(c,ni)),I.vars.scrollX=w(D)),N=d(),D=N+X*.05*-V.velocityY/.227,X*=b0(d,N,D,kr(c,rn)),I.vars.scrollY=O(D),I.invalidate().duration(X).play(.01),(ss&&I.vars.scrollY>=l||N>=l-1)&&Ft.to({},{onUpdate:$,duration:X})}o&&o(V)},t.onWheel=function(){I._ts&&I.pause(),ti()-p>1e3&&(v=0,p=ti())},t.onChange=function(V,nt,X,N,D){if(yo!==v&&S(),nt&&n&&_(w(N[2]===nt?H+(V.startX-V.x):_()+nt-N[1])),X){d.offset&&M();var k=D[2]===X,ct=k?x+V.startY-V.y:d()+X-D[1],rt=O(ct);k&&ct!==rt&&(x+=rt-ct),d(rt)}(X||nt)&&Hr()},t.onEnable=function(){dd(c,n?!1:"x"),pe.addEventListener("refresh",$),cn(me,"resize",$),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),b.enable()},t.onDisable=function(){dd(c,!0),ln(me,"resize",$),pe.removeEventListener("refresh",$),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new en(t),a.iOS=ss,ss&&!d()&&d(1),ss&&Ft.ticker.add(ir),F=a._dc,I=Ft.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:SS(d,d(),function(){return I.pause()})},onUpdate:Hr,onComplete:F.vars.onComplete}),a};pe.sort=function(i){return ce.sort(i||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};pe.observe=function(i){return new en(i)};pe.normalizeScroll=function(i){if(typeof i>"u")return vi;if(i===!0&&vi)return vi.enable();if(i===!1)return vi&&vi.kill();var t=i instanceof en?i:mP(i);return vi&&vi.target===t.target&&vi.kill(),Ro(t.target)&&(vi=t),t};pe.core={_getVelocityProp:Gp,_inputObserver:bS,_scrollers:de,_proxies:pr,bridge:{ss:function(){ji||Io("scrollStart"),ji=ti()},ref:function(){return On}}};dS()&&Ft.registerPlugin(pe);/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ri,wS,Gr,fr,xs,AS,MS,Tu,RS=function(){return typeof window<"u"},CS=function(){return ri||RS()&&(ri=window.gsap)&&ri.registerPlugin&&ri},IS=function(t){return typeof t=="string"},M0=function(t){return typeof t=="function"},Ic=function(t,e){var n=e==="x"?"Width":"Height",r="scroll"+n,s="client"+n;return t===Gr||t===fr||t===xs?Math.max(fr[r],xs[r])-(Gr["inner"+n]||fr[s]||xs[s]):t[r]-t["offset"+n]},Pc=function(t,e){var n="scroll"+(e==="x"?"Left":"Top");return t===Gr&&(t.pageXOffset!=null?n="page"+e.toUpperCase()+"Offset":t=fr[n]!=null?fr:xs),function(){return t[n]}},gP=function(t,e,n,r){if(M0(t)&&(t=t(e,n,r)),typeof t!="object")return IS(t)&&t!=="max"&&t.charAt(1)!=="="?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var s={},o;for(o in t)s[o]=o!=="onAutoKill"&&M0(t[o])?t[o](e,n,r):t[o];return s},PS=function(t,e){if(t=AS(t)[0],!t||!t.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=t.getBoundingClientRect(),r=!e||e===Gr||e===xs,s=r?{top:fr.clientTop-(Gr.pageYOffset||fr.scrollTop||xs.scrollTop||0),left:fr.clientLeft-(Gr.pageXOffset||fr.scrollLeft||xs.scrollLeft||0)}:e.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!r&&e&&(o.x+=Pc(e,"x")(),o.y+=Pc(e,"y")()),o},R0=function(t,e,n,r,s){return!isNaN(t)&&typeof t!="object"?parseFloat(t)-s:IS(t)&&t.charAt(1)==="="?parseFloat(t.substr(2))*(t.charAt(0)==="-"?-1:1)+r-s:t==="max"?Ic(e,n)-s:Math.min(Ic(e,n),PS(t,e)[n]-s)},C0=function(){ri=CS(),RS()&&ri&&typeof document<"u"&&document.body&&(Gr=window,xs=document.body,fr=document.documentElement,AS=ri.utils.toArray,ri.config({autoKillThreshold:7}),MS=ri.config(),wS=1)},Yc={version:"3.12.2",name:"scrollTo",rawVars:1,register:function(t){ri=t,C0()},init:function(t,e,n,r,s){wS||C0();var o=this,a=ri.getProperty(t,"scrollSnapType");o.isWin=t===Gr,o.target=t,o.tween=n,e=gP(e,r,t,s),o.vars=e,o.autoKill=!!e.autoKill,o.getX=Pc(t,"x"),o.getY=Pc(t,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Tu||(Tu=ri.core.globals().ScrollTrigger),ri.getProperty(t,"scrollBehavior")==="smooth"&&ri.set(t,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=t.style.scrollSnapType,t.style.scrollSnapType="none"),e.x!=null?(o.add(o,"x",o.x,R0(e.x,t,"x",o.x,e.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,e.y!=null?(o.add(o,"y",o.y,R0(e.y,t,"y",o.y,e.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(t,e){for(var n=e._pt,r=e.target,s=e.tween,o=e.autoKill,a=e.xPrev,l=e.yPrev,c=e.isWin,u=e.snap,h=e.snapInline,f,d,_,g,m;n;)n.r(t,n.d),n=n._next;f=c||!e.skipX?e.getX():a,d=c||!e.skipY?e.getY():l,_=d-l,g=f-a,m=MS.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),o&&(!e.skipX&&(g>m||g<-m)&&f<Ic(r,"x")&&(e.skipX=1),!e.skipY&&(_>m||_<-m)&&d<Ic(r,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(s.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(s,e.vars.onAutoKillParams||[]))),c?Gr.scrollTo(e.skipX?f:e.x,e.skipY?d:e.y):(e.skipY||(r.scrollTop=e.y),e.skipX||(r.scrollLeft=e.x)),u&&(t===1||t===0)&&(d=r.scrollTop,f=r.scrollLeft,h?r.style.scrollSnapType=h:r.style.removeProperty("scroll-snap-type"),r.scrollTop=d+1,r.scrollLeft=f+1,r.scrollTop=d,r.scrollLeft=f),e.xPrev=e.x,e.yPrev=e.y,Tu&&Tu.update()},kill:function(t){var e=t==="scrollTo";(e||t==="scrollTo_x")&&(this.skipX=1),(e||t==="scrollTo_y")&&(this.skipY=1)}};Yc.max=Ic;Yc.getOffset=PS;Yc.buildGetter=Pc;CS()&&ri.registerPlugin(Yc);var Su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bu(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var DS={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,u){if(!r[c]){if(!n[c]){var h=typeof bu=="function"&&bu;if(!u&&h)return h(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var d=r[c]={exports:{}};n[c][0].call(d.exports,function(_){var g=n[c][1][_];return o(g||_)},d,d.exports,e,n,r,s)}return r[c].exports}for(var a=typeof bu=="function"&&bu,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,u,h,f,d,_,g,m=[],p=0,y=l.length,v=y,E=s.getTypeOf(l)!=="string";p<l.length;)v=y-p,h=E?(c=l[p++],u=p<y?l[p++]:0,p<y?l[p++]:0):(c=l.charCodeAt(p++),u=p<y?l.charCodeAt(p++):0,p<y?l.charCodeAt(p++):0),f=c>>2,d=(3&c)<<4|u>>4,_=1<v?(15&u)<<2|h>>6:64,g=2<v?63&h:64,m.push(a.charAt(f)+a.charAt(d)+a.charAt(_)+a.charAt(g));return m.join("")},r.decode=function(l){var c,u,h,f,d,_,g=0,m=0,p="data:";if(l.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var y,v=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&v--,l.charAt(l.length-2)===a.charAt(64)&&v--,v%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|v):new Array(0|v);g<l.length;)c=a.indexOf(l.charAt(g++))<<2|(f=a.indexOf(l.charAt(g++)))>>4,u=(15&f)<<4|(d=a.indexOf(l.charAt(g++)))>>2,h=(3&d)<<6|(_=a.indexOf(l.charAt(g++))),y[m++]=c,d!==64&&(y[m++]=u),_!==64&&(y[m++]=h);return y}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(u,h,f,d,_){this.compressedSize=u,this.uncompressedSize=h,this.crc32=f,this.compression=d,this.compressedContent=_}c.prototype={getContentWorker:function(){var u=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return u.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,h,f){return u.pipe(new a).pipe(new l("uncompressedSize")).pipe(h.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var u=0;u<8;u++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,u,h,f){var d=o,_=f+h;c^=-1;for(var g=f;g<_;g++)c=c>>>8^d[255&(c^u[g])];return-1^c}(0|l,a,a.length,0):function(c,u,h,f){var d=o,_=f+h;c^=-1;for(var g=f;g<_;g++)c=c>>>8^d[255&(c^u.charCodeAt(g))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function u(h,f){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=f,this.meta={}}r.magic="\b\0",a.inherits(u,l),u.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,h.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(f){h.push({data:f,meta:h.meta})}},r.compressWorker=function(h){return new u("Deflate",h)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(d,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function o(d,_,g,m,p,y){var v,E,b=d.file,A=d.compression,w=y!==c.utf8encode,O=a.transformTo("string",y(b.name)),S=a.transformTo("string",c.utf8encode(b.name)),M=b.comment,j=a.transformTo("string",y(M)),I=a.transformTo("string",c.utf8encode(M)),H=S.length!==b.name.length,x=I.length!==M.length,F="",$="",V="",nt=b.dir,X=b.date,N={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(N.crc32=d.crc32,N.compressedSize=d.compressedSize,N.uncompressedSize=d.uncompressedSize);var D=0;_&&(D|=8),w||!H&&!x||(D|=2048);var k=0,ct=0;nt&&(k|=16),p==="UNIX"?(ct=798,k|=function(it,bt){var wt=it;return it||(wt=bt?16893:33204),(65535&wt)<<16}(b.unixPermissions,nt)):(ct=20,k|=function(it){return 63&(it||0)}(b.dosPermissions)),v=X.getUTCHours(),v<<=6,v|=X.getUTCMinutes(),v<<=5,v|=X.getUTCSeconds()/2,E=X.getUTCFullYear()-1980,E<<=4,E|=X.getUTCMonth()+1,E<<=5,E|=X.getUTCDate(),H&&($=s(1,1)+s(u(O),4)+S,F+="up"+s($.length,2)+$),x&&(V=s(1,1)+s(u(j),4)+I,F+="uc"+s(V.length,2)+V);var rt="";return rt+=`
\0`,rt+=s(D,2),rt+=A.magic,rt+=s(v,2),rt+=s(E,2),rt+=s(N.crc32,4),rt+=s(N.compressedSize,4),rt+=s(N.uncompressedSize,4),rt+=s(O.length,2),rt+=s(F.length,2),{fileRecord:h.LOCAL_FILE_HEADER+rt+O+F,dirRecord:h.CENTRAL_FILE_HEADER+s(ct,2)+rt+s(j.length,2)+"\0\0\0\0"+s(k,4)+s(m,4)+O+F+j}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),u=e("../crc32"),h=e("../signature");function f(d,_,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(f,l),f.prototype.push=function(d){var _=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},f.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var _=this.streamFiles&&!d.file.dir;if(_){var g=o(d,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(d){this.accumulate=!1;var _=this.streamFiles&&!d.file.dir,g=o(d,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return h.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var d=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-d,m=function(p,y,v,E,b){var A=a.transformTo("string",b(E));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(p,2)+s(p,2)+s(y,4)+s(v,4)+s(A.length,2)+A}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(d){this._sources.push(d);var _=this;return d.on("data",function(g){_.processChunk(g)}),d.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),d.on("error",function(g){_.error(g)}),this},f.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(d){var _=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var g=0;g<_.length;g++)try{_[g].error(d)}catch{}return!0},f.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,_=0;_<d.length;_++)d[_].lock()},n.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,c){var u=new o(l.streamFiles,c,l.platform,l.encodeFileName),h=0;try{a.forEach(function(f,d){h++;var _=function(y,v){var E=y||v,b=s[E];if(!b)throw new Error(E+" is not a valid compression method !");return b}(d.options.compression,l.compression),g=d.options.compressionOptions||l.compressionOptions||{},m=d.dir,p=d.date;d._compressWorker(_,g).withStreamInfo("file",{name:f,dir:m,date:p,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(u)}),u.entriesCount=h}catch(f){u.error(f)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),u=e("./nodejsUtils");function h(f){return new o.Promise(function(d,_){var g=f.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==f.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(f,d){var _=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),u.isNode&&u.isStream(f)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",f,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new l(d);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],p=g.files;if(d.checkCRC32)for(var y=0;y<p.length;y++)m.push(h(p[y]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),p=m.files,y=0;y<p.length;y++){var v=p[y],E=v.fileNameStr,b=s.resolve(v.fileNameStr);_.file(b,v.decompressed,{binary:!0,optimizedBinaryString:!0,date:v.date,dir:v.dir,comment:v.fileCommentStr.length?v.fileCommentStr:null,unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions,createFolders:d.createFolders}),v.dir||(_.file(b).unsafeOriginalName=E)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var u=this;a.on("data",function(h,f){u.push(h)||u._helper.pause(),c&&c(f)}).on("error",function(h){u.emit("error",h)}).on("end",function(){u.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(b,A,w){var O,S=a.getTypeOf(A),M=a.extend(w||{},u);M.date=M.date||new Date,M.compression!==null&&(M.compression=M.compression.toUpperCase()),typeof M.unixPermissions=="string"&&(M.unixPermissions=parseInt(M.unixPermissions,8)),M.unixPermissions&&16384&M.unixPermissions&&(M.dir=!0),M.dosPermissions&&16&M.dosPermissions&&(M.dir=!0),M.dir&&(b=p(b)),M.createFolders&&(O=m(b))&&y.call(this,O,!0);var j=S==="string"&&M.binary===!1&&M.base64===!1;w&&w.binary!==void 0||(M.binary=!j),(A instanceof h&&A.uncompressedSize===0||M.dir||!A||A.length===0)&&(M.base64=!1,M.binary=!0,A="",M.compression="STORE",S="string");var I=null;I=A instanceof h||A instanceof l?A:_.isNode&&_.isStream(A)?new g(b,A):a.prepareContent(b,A,M.binary,M.optimizedBinaryString,M.base64);var H=new f(b,I,M);this.files[b]=H}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),u=e("./defaults"),h=e("./compressedObject"),f=e("./zipObject"),d=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(b){b.slice(-1)==="/"&&(b=b.substring(0,b.length-1));var A=b.lastIndexOf("/");return 0<A?b.substring(0,A):""},p=function(b){return b.slice(-1)!=="/"&&(b+="/"),b},y=function(b,A){return A=A!==void 0?A:u.createFolders,b=p(b),this.files[b]||s.call(this,b,null,{dir:!0,createFolders:A}),this.files[b]};function v(b){return Object.prototype.toString.call(b)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(b){var A,w,O;for(A in this.files)O=this.files[A],(w=A.slice(this.root.length,A.length))&&A.slice(0,this.root.length)===this.root&&b(w,O)},filter:function(b){var A=[];return this.forEach(function(w,O){b(w,O)&&A.push(O)}),A},file:function(b,A,w){if(arguments.length!==1)return b=this.root+b,s.call(this,b,A,w),this;if(v(b)){var O=b;return this.filter(function(M,j){return!j.dir&&O.test(M)})}var S=this.files[this.root+b];return S&&!S.dir?S:null},folder:function(b){if(!b)return this;if(v(b))return this.filter(function(S,M){return M.dir&&b.test(S)});var A=this.root+b,w=y.call(this,A),O=this.clone();return O.root=w.name,O},remove:function(b){b=this.root+b;var A=this.files[b];if(A||(b.slice(-1)!=="/"&&(b+="/"),A=this.files[b]),A&&!A.dir)delete this.files[b];else for(var w=this.filter(function(S,M){return M.name.slice(0,b.length)===b}),O=0;O<w.length;O++)delete this.files[w[O].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(b){var A,w={};try{if((w=a.extend(b||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=w.type.toLowerCase(),w.compression=w.compression.toUpperCase(),w.type==="binarystring"&&(w.type="string"),!w.type)throw new Error("No output type specified.");a.checkSupport(w.type),w.platform!=="darwin"&&w.platform!=="freebsd"&&w.platform!=="linux"&&w.platform!=="sunos"||(w.platform="UNIX"),w.platform==="win32"&&(w.platform="DOS");var O=w.comment||this.comment||"";A=d.generateWorker(this,w,O)}catch(S){(A=new l("error")).error(S)}return new c(A,w.type||"string",w.mimeType)},generateAsync:function(b,A){return this.generateInternalStream(b).accumulate(A)},generateNodeStream:function(b,A){return(b=b||{}).type||(b.type="nodebuffer"),this.generateInternalStream(b).toNodejsStream(A)}};n.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),h=a.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===l&&this.data[f+1]===c&&this.data[f+2]===u&&this.data[f+3]===h)return f-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),h=a.charCodeAt(3),f=this.readData(4);return l===f[0]&&c===f[1]&&u===f[2]&&h===f[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),u=e("./Uint8ArrayReader");n.exports=function(h){var f=s.getTypeOf(h);return s.checkSupport(f),f!=="string"||o.uint8array?f==="nodebuffer"?new c(h):o.uint8array?new u(s.transformTo("uint8array",h)):new a(s.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=s.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),u=e("../external"),h=null;if(c.nodestream)try{h=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(_,g){return new u.Promise(function(m,p){var y=[],v=_._internalType,E=_._outputType,b=_._mimeType;_.on("data",function(A,w){y.push(A),g&&g(w)}).on("error",function(A){y=[],p(A)}).on("end",function(){try{var A=function(w,O,S){switch(w){case"blob":return s.newBlob(s.transformTo("arraybuffer",O),S);case"base64":return l.encode(O);default:return s.transformTo(w,O)}}(E,function(w,O){var S,M=0,j=null,I=0;for(S=0;S<O.length;S++)I+=O[S].length;switch(w){case"string":return O.join("");case"array":return Array.prototype.concat.apply([],O);case"uint8array":for(j=new Uint8Array(I),S=0;S<O.length;S++)j.set(O[S],M),M+=O[S].length;return j;case"nodebuffer":return Buffer.concat(O);default:throw new Error("concat : unsupported type '"+w+"'")}}(v,y),b);m(A)}catch(w){p(w)}y=[]}).resume()})}function d(_,g,m){var p=g;switch(g){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=g,this._mimeType=m,s.checkSupport(p),this._worker=_.pipe(new o(p)),_.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}d.prototype={accumulate:function(_){return f(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(p){g.call(m,p.data,p.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function f(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(_){var g,m,p,y,v,E=_.length,b=0;for(y=0;y<E;y++)(64512&(m=_.charCodeAt(y)))==55296&&y+1<E&&(64512&(p=_.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),y++),b+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(b):new Array(b),y=v=0;v<b;y++)(64512&(m=_.charCodeAt(y)))==55296&&y+1<E&&(64512&(p=_.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),y++),m<128?g[v++]=m:(m<2048?g[v++]=192|m>>>6:(m<65536?g[v++]=224|m>>>12:(g[v++]=240|m>>>18,g[v++]=128|m>>>12&63),g[v++]=128|m>>>6&63),g[v++]=128|63&m);return g}(d)},r.utf8decode=function(d){return o.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(_){var g,m,p,y,v=_.length,E=new Array(2*v);for(g=m=0;g<v;)if((p=_[g++])<128)E[m++]=p;else if(4<(y=c[p]))E[m++]=65533,g+=y-1;else{for(p&=y===2?31:y===3?15:7;1<y&&g<v;)p=p<<6|63&_[g++],y--;1<y?E[m++]=65533:p<65536?E[m++]=p:(p-=65536,E[m++]=55296|p>>10&1023,E[m++]=56320|1023&p)}return E.length!==m&&(E.subarray?E=E.subarray(0,m):E.length=m),s.applyFromCharCode(E)}(d=s.transformTo(o.uint8array?"uint8array":"array",d))},s.inherits(h,l),h.prototype.processChunk=function(d){var _=s.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(y,v){var E;for((v=v||y.length)>y.length&&(v=y.length),E=v-1;0<=E&&(192&y[E])==128;)E--;return E<0||E===0?v:E+c[y[E]]>v?E:v}(_),p=_;m!==_.length&&(o.uint8array?(p=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(p=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:r.utf8decode(p),meta:d.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=h,s.inherits(f,l),f.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(g){return g}function u(g,m){for(var p=0;p<g.length;++p)m[p]=255&g.charCodeAt(p);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(g),p.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(g,m,p){var y=[],v=0,E=g.length;if(E<=p)return String.fromCharCode.apply(null,g);for(;v<E;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,g.slice(v,Math.min(v+p,E)))):y.push(String.fromCharCode.apply(null,g.subarray(v,Math.min(v+p,E)))),v+=p;return y.join("")},stringifyByChar:function(g){for(var m="",p=0;p<g.length;p++)m+=String.fromCharCode(g[p]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function f(g){var m=65536,p=r.getTypeOf(g),y=!0;if(p==="uint8array"?y=h.applyCanBeUsed.uint8array:p==="nodebuffer"&&(y=h.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return h.stringifyByChunk(g,p,m)}catch{m=Math.floor(m/2)}return h.stringifyByChar(g)}function d(g,m){for(var p=0;p<g.length;p++)m[p]=g[p];return m}r.applyFromCharCode=f;var _={};_.string={string:c,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,a.allocBuffer(g.length))}},_.array={string:f,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return f(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:f,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:f,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var p=r.getTypeOf(m);return _[p][g](m)},r.resolve=function(g){for(var m=g.split("/"),p=[],y=0;y<m.length;y++){var v=m[y];v==="."||v===""&&y!==0&&y!==m.length-1||(v===".."?p.pop():p.push(v))}return p.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,p,y="";for(p=0;p<(g||"").length;p++)y+="\\x"+((m=g.charCodeAt(p))<16?"0":"")+m.toString(16).toUpperCase();return y},r.delay=function(g,m,p){setImmediate(function(){g.apply(p||null,m||[])})},r.inherits=function(g,m){function p(){}p.prototype=m.prototype,g.prototype=new p},r.extend=function(){var g,m,p={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&p[m]===void 0&&(p[m]=arguments[g][m]);return p},r.prepareContent=function(g,m,p,y,v){return l.Promise.resolve(m).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(b,A){var w=new FileReader;w.onload=function(O){b(O.target.result)},w.onerror=function(O){A(O.target.error)},w.readAsArrayBuffer(E)}):E}).then(function(E){var b=r.getTypeOf(E);return b?(b==="arraybuffer"?E=r.transformTo("uint8array",E):b==="string"&&(v?E=o.decode(E):p&&y!==!0&&(E=function(A){return u(A,s.uint8array?new Uint8Array(A.length):new Array(A.length))}(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function u(h){this.files=[],this.loadOptions=h}u.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(f)+", expected "+o.pretty(h)+")")}},isSignature:function(h,f){var d=this.reader.index;this.reader.setIndex(h);var _=this.reader.readString(4)===f;return this.reader.setIndex(d),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),f=c.uint8array?"uint8array":"array",d=o.transformTo(f,h);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,f,d,_=this.zip64EndOfCentralSize-44;0<_;)h=this.reader.readInt(2),f=this.reader.readInt(4),d=this.reader.readData(f),this.zip64ExtensibleData[h]={id:h,length:f,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,f;for(h=0;h<this.files.length;h++)f=this.files[h],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var f=h;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var _=f-d;if(0<_)this.isSignature(f,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(h){this.reader=s(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),u=e("./compressions"),h=e("./support");function f(d,_){this.options=d,this.loadOptions=_}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var _,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var p in u)if(Object.prototype.hasOwnProperty.call(u,p)&&u[p].magic===m)return u[p];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var _=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(_),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var _,g,m,p=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<p;)_=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[_]={id:_,length:g,value:m};d.setIndex(p)},handleUTF8:function(){var d=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var p=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var _=s(d.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var _=s(d.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(d.length-5))}return null}},n.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),u=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var p=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var y=!this._dataBinary;y&&!p&&(g=g.pipe(new l.Utf8EncodeWorker)),!y&&p&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(v){(g=new u("error")).error(v)}return new o(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new a(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<h.length;d++)s.prototype[h[d]]=f;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,u=new l(_),h=s.document.createTextNode("");u.observe(h,{characterData:!0}),o=function(){h.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var f=new s.MessageChannel;f.port1.onmessage=_,o=function(){f.port2.postMessage(0)}}var d=[];function _(){var g,m;a=!0;for(var p=d.length;p;){for(m=d,d=[],g=-1;++g<p;)m[g]();p=d.length}a=!1}n.exports=function(g){d.push(g)!==1||a||o()}}).call(this,typeof Su<"u"?Su:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function h(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,p!==o&&g(this,p)}function f(p,y,v){this.promise=p,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof v=="function"&&(this.onRejected=v,this.callRejected=this.otherCallRejected)}function d(p,y,v){s(function(){var E;try{E=y(v)}catch(b){return a.reject(p,b)}E===p?a.reject(p,new TypeError("Cannot resolve promise with itself")):a.resolve(p,E)})}function _(p){var y=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof y=="function")return function(){y.apply(p,arguments)}}function g(p,y){var v=!1;function E(w){v||(v=!0,a.reject(p,w))}function b(w){v||(v=!0,a.resolve(p,w))}var A=m(function(){y(b,E)});A.status==="error"&&E(A.value)}function m(p,y){var v={};try{v.value=p(y),v.status="success"}catch(E){v.status="error",v.value=E}return v}(n.exports=h).prototype.finally=function(p){if(typeof p!="function")return this;var y=this.constructor;return this.then(function(v){return y.resolve(p()).then(function(){return v})},function(v){return y.resolve(p()).then(function(){throw v})})},h.prototype.catch=function(p){return this.then(null,p)},h.prototype.then=function(p,y){if(typeof p!="function"&&this.state===c||typeof y!="function"&&this.state===l)return this;var v=new this.constructor(o);return this.state!==u?d(v,this.state===c?p:y,this.outcome):this.queue.push(new f(v,p,y)),v},f.prototype.callFulfilled=function(p){a.resolve(this.promise,p)},f.prototype.otherCallFulfilled=function(p){d(this.promise,this.onFulfilled,p)},f.prototype.callRejected=function(p){a.reject(this.promise,p)},f.prototype.otherCallRejected=function(p){d(this.promise,this.onRejected,p)},a.resolve=function(p,y){var v=m(_,y);if(v.status==="error")return a.reject(p,v.value);var E=v.value;if(E)g(p,E);else{p.state=c,p.outcome=y;for(var b=-1,A=p.queue.length;++b<A;)p.queue[b].callFulfilled(y)}return p},a.reject=function(p,y){p.state=l,p.outcome=y;for(var v=-1,E=p.queue.length;++v<E;)p.queue[v].callRejected(y);return p},h.resolve=function(p){return p instanceof this?p:a.resolve(new this(o),p)},h.reject=function(p){var y=new this(o);return a.reject(y,p)},h.all=function(p){var y=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=p.length,E=!1;if(!v)return this.resolve([]);for(var b=new Array(v),A=0,w=-1,O=new this(o);++w<v;)S(p[w],w);return O;function S(M,j){y.resolve(M).then(function(I){b[j]=I,++A!==v||E||(E=!0,a.resolve(O,b))},function(I){E||(E=!0,a.reject(O,I))})}},h.race=function(p){var y=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var v=p.length,E=!1;if(!v)return this.resolve([]);for(var b=-1,A=new this(o);++b<v;)w=p[b],y.resolve(w).then(function(O){E||(E=!0,a.resolve(A,O))},function(O){E||(E=!0,a.reject(A,O))});var w;return A}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),u=Object.prototype.toString,h=0,f=-1,d=0,_=8;function g(p){if(!(this instanceof g))return new g(p);this.options=o.assign({level:f,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},p||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var v=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(v!==h)throw new Error(l[v]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var E;if(E=typeof y.dictionary=="string"?a.string2buf(y.dictionary):u.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(v=s.deflateSetDictionary(this.strm,E))!==h)throw new Error(l[v]);this._dict_set=!0}}function m(p,y){var v=new g(y);if(v.push(p,!0),v.err)throw v.msg||l[v.err];return v.result}g.prototype.push=function(p,y){var v,E,b=this.strm,A=this.options.chunkSize;if(this.ended)return!1;E=y===~~y?y:y===!0?4:0,typeof p=="string"?b.input=a.string2buf(p):u.call(p)==="[object ArrayBuffer]"?b.input=new Uint8Array(p):b.input=p,b.next_in=0,b.avail_in=b.input.length;do{if(b.avail_out===0&&(b.output=new o.Buf8(A),b.next_out=0,b.avail_out=A),(v=s.deflate(b,E))!==1&&v!==h)return this.onEnd(v),!(this.ended=!0);b.avail_out!==0&&(b.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(b.output,b.next_out))):this.onData(o.shrinkBuf(b.output,b.next_out)))}while((0<b.avail_in||b.avail_out===0)&&v!==1);return E===4?(v=s.deflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===h):E!==2||(this.onEnd(h),!(b.avail_out=0))},g.prototype.onData=function(p){this.chunks.push(p)},g.prototype.onEnd=function(p){p===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(p,y){return(y=y||{}).raw=!0,m(p,y)},r.gzip=function(p,y){return(y=y||{}).gzip=!0,m(p,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),u=e("./zlib/zstream"),h=e("./zlib/gzheader"),f=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var p=s.inflateInit2(this.strm,m.windowBits);if(p!==l.Z_OK)throw new Error(c[p]);this.header=new h,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var p=new d(m);if(p.push(g,!0),p.err)throw p.msg||c[p.err];return p.result}d.prototype.push=function(g,m){var p,y,v,E,b,A,w=this.strm,O=this.options.chunkSize,S=this.options.dictionary,M=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?w.input=a.binstring2buf(g):f.call(g)==="[object ArrayBuffer]"?w.input=new Uint8Array(g):w.input=g,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new o.Buf8(O),w.next_out=0,w.avail_out=O),(p=s.inflate(w,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&S&&(A=typeof S=="string"?a.string2buf(S):f.call(S)==="[object ArrayBuffer]"?new Uint8Array(S):S,p=s.inflateSetDictionary(this.strm,A)),p===l.Z_BUF_ERROR&&M===!0&&(p=l.Z_OK,M=!1),p!==l.Z_STREAM_END&&p!==l.Z_OK)return this.onEnd(p),!(this.ended=!0);w.next_out&&(w.avail_out!==0&&p!==l.Z_STREAM_END&&(w.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(v=a.utf8border(w.output,w.next_out),E=w.next_out-v,b=a.buf2string(w.output,v),w.next_out=E,w.avail_out=O-E,E&&o.arraySet(w.output,w.output,v,E,0),this.onData(b)):this.onData(o.shrinkBuf(w.output,w.next_out)))),w.avail_in===0&&w.avail_out===0&&(M=!0)}while((0<w.avail_in||w.avail_out===0)&&p!==l.Z_STREAM_END);return p===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(p=s.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(w.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=d,r.inflate=_,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var h in u)u.hasOwnProperty(h)&&(l[h]=u[h])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,u,h,f){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+h),f);else for(var d=0;d<h;d++)l[f+d]=c[u+d]},flattenChunks:function(l){var c,u,h,f,d,_;for(c=h=0,u=l.length;c<u;c++)h+=l[c].length;for(_=new Uint8Array(h),c=f=0,u=l.length;c<u;c++)d=l[c],_.set(d,f),f+=d.length;return _}},a={arraySet:function(l,c,u,h,f){for(var d=0;d<h;d++)l[f+d]=c[u+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(h,f){if(f<65537&&(h.subarray&&a||!h.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(h,f));for(var d="",_=0;_<f;_++)d+=String.fromCharCode(h[_]);return d}l[254]=l[254]=1,r.string2buf=function(h){var f,d,_,g,m,p=h.length,y=0;for(g=0;g<p;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<p&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),y+=d<128?1:d<2048?2:d<65536?3:4;for(f=new s.Buf8(y),g=m=0;m<y;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<p&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),d<128?f[m++]=d:(d<2048?f[m++]=192|d>>>6:(d<65536?f[m++]=224|d>>>12:(f[m++]=240|d>>>18,f[m++]=128|d>>>12&63),f[m++]=128|d>>>6&63),f[m++]=128|63&d);return f},r.buf2binstring=function(h){return u(h,h.length)},r.binstring2buf=function(h){for(var f=new s.Buf8(h.length),d=0,_=f.length;d<_;d++)f[d]=h.charCodeAt(d);return f},r.buf2string=function(h,f){var d,_,g,m,p=f||h.length,y=new Array(2*p);for(d=_=0;d<p;)if((g=h[d++])<128)y[_++]=g;else if(4<(m=l[g]))y[_++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<p;)g=g<<6|63&h[d++],m--;1<m?y[_++]=65533:g<65536?y[_++]=g:(g-=65536,y[_++]=55296|g>>10&1023,y[_++]=56320|1023&g)}return u(y,_)},r.utf8border=function(h,f){var d;for((f=f||h.length)>h.length&&(f=h.length),d=f-1;0<=d&&(192&h[d])==128;)d--;return d<0||d===0?f:d+l[h[d]]>f?d:f}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var c=65535&s|0,u=s>>>16&65535|0,h=0;a!==0;){for(a-=h=2e3<a?2e3:a;u=u+(c=c+o[l++]|0)|0,--h;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var u=s,h=c+l;o^=-1;for(var f=c;f<h;f++)o=o>>>8^u[255&(o^a[f])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),u=e("./messages"),h=0,f=4,d=0,_=-2,g=-1,m=4,p=2,y=8,v=9,E=286,b=30,A=19,w=2*E+1,O=15,S=3,M=258,j=M+S+1,I=42,H=113,x=1,F=2,$=3,V=4;function nt(T,Q){return T.msg=u[Q],Q}function X(T){return(T<<1)-(4<T?9:0)}function N(T){for(var Q=T.length;0<=--Q;)T[Q]=0}function D(T){var Q=T.state,q=Q.pending;q>T.avail_out&&(q=T.avail_out),q!==0&&(o.arraySet(T.output,Q.pending_buf,Q.pending_out,q,T.next_out),T.next_out+=q,Q.pending_out+=q,T.total_out+=q,T.avail_out-=q,Q.pending-=q,Q.pending===0&&(Q.pending_out=0))}function k(T,Q){a._tr_flush_block(T,0<=T.block_start?T.block_start:-1,T.strstart-T.block_start,Q),T.block_start=T.strstart,D(T.strm)}function ct(T,Q){T.pending_buf[T.pending++]=Q}function rt(T,Q){T.pending_buf[T.pending++]=Q>>>8&255,T.pending_buf[T.pending++]=255&Q}function it(T,Q){var q,R,L=T.max_chain_length,W=T.strstart,ot=T.prev_length,at=T.nice_match,K=T.strstart>T.w_size-j?T.strstart-(T.w_size-j):0,P=T.window,C=T.w_mask,z=T.prev,tt=T.strstart+M,ut=P[W+ot-1],ht=P[W+ot];T.prev_length>=T.good_match&&(L>>=2),at>T.lookahead&&(at=T.lookahead);do if(P[(q=Q)+ot]===ht&&P[q+ot-1]===ut&&P[q]===P[W]&&P[++q]===P[W+1]){W+=2,q++;do;while(P[++W]===P[++q]&&P[++W]===P[++q]&&P[++W]===P[++q]&&P[++W]===P[++q]&&P[++W]===P[++q]&&P[++W]===P[++q]&&P[++W]===P[++q]&&P[++W]===P[++q]&&W<tt);if(R=M-(tt-W),W=tt-M,ot<R){if(T.match_start=Q,at<=(ot=R))break;ut=P[W+ot-1],ht=P[W+ot]}}while((Q=z[Q&C])>K&&--L!=0);return ot<=T.lookahead?ot:T.lookahead}function bt(T){var Q,q,R,L,W,ot,at,K,P,C,z=T.w_size;do{if(L=T.window_size-T.lookahead-T.strstart,T.strstart>=z+(z-j)){for(o.arraySet(T.window,T.window,z,z,0),T.match_start-=z,T.strstart-=z,T.block_start-=z,Q=q=T.hash_size;R=T.head[--Q],T.head[Q]=z<=R?R-z:0,--q;);for(Q=q=z;R=T.prev[--Q],T.prev[Q]=z<=R?R-z:0,--q;);L+=z}if(T.strm.avail_in===0)break;if(ot=T.strm,at=T.window,K=T.strstart+T.lookahead,P=L,C=void 0,C=ot.avail_in,P<C&&(C=P),q=C===0?0:(ot.avail_in-=C,o.arraySet(at,ot.input,ot.next_in,C,K),ot.state.wrap===1?ot.adler=l(ot.adler,at,C,K):ot.state.wrap===2&&(ot.adler=c(ot.adler,at,C,K)),ot.next_in+=C,ot.total_in+=C,C),T.lookahead+=q,T.lookahead+T.insert>=S)for(W=T.strstart-T.insert,T.ins_h=T.window[W],T.ins_h=(T.ins_h<<T.hash_shift^T.window[W+1])&T.hash_mask;T.insert&&(T.ins_h=(T.ins_h<<T.hash_shift^T.window[W+S-1])&T.hash_mask,T.prev[W&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=W,W++,T.insert--,!(T.lookahead+T.insert<S)););}while(T.lookahead<j&&T.strm.avail_in!==0)}function wt(T,Q){for(var q,R;;){if(T.lookahead<j){if(bt(T),T.lookahead<j&&Q===h)return x;if(T.lookahead===0)break}if(q=0,T.lookahead>=S&&(T.ins_h=(T.ins_h<<T.hash_shift^T.window[T.strstart+S-1])&T.hash_mask,q=T.prev[T.strstart&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=T.strstart),q!==0&&T.strstart-q<=T.w_size-j&&(T.match_length=it(T,q)),T.match_length>=S)if(R=a._tr_tally(T,T.strstart-T.match_start,T.match_length-S),T.lookahead-=T.match_length,T.match_length<=T.max_lazy_match&&T.lookahead>=S){for(T.match_length--;T.strstart++,T.ins_h=(T.ins_h<<T.hash_shift^T.window[T.strstart+S-1])&T.hash_mask,q=T.prev[T.strstart&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=T.strstart,--T.match_length!=0;);T.strstart++}else T.strstart+=T.match_length,T.match_length=0,T.ins_h=T.window[T.strstart],T.ins_h=(T.ins_h<<T.hash_shift^T.window[T.strstart+1])&T.hash_mask;else R=a._tr_tally(T,0,T.window[T.strstart]),T.lookahead--,T.strstart++;if(R&&(k(T,!1),T.strm.avail_out===0))return x}return T.insert=T.strstart<S-1?T.strstart:S-1,Q===f?(k(T,!0),T.strm.avail_out===0?$:V):T.last_lit&&(k(T,!1),T.strm.avail_out===0)?x:F}function mt(T,Q){for(var q,R,L;;){if(T.lookahead<j){if(bt(T),T.lookahead<j&&Q===h)return x;if(T.lookahead===0)break}if(q=0,T.lookahead>=S&&(T.ins_h=(T.ins_h<<T.hash_shift^T.window[T.strstart+S-1])&T.hash_mask,q=T.prev[T.strstart&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=T.strstart),T.prev_length=T.match_length,T.prev_match=T.match_start,T.match_length=S-1,q!==0&&T.prev_length<T.max_lazy_match&&T.strstart-q<=T.w_size-j&&(T.match_length=it(T,q),T.match_length<=5&&(T.strategy===1||T.match_length===S&&4096<T.strstart-T.match_start)&&(T.match_length=S-1)),T.prev_length>=S&&T.match_length<=T.prev_length){for(L=T.strstart+T.lookahead-S,R=a._tr_tally(T,T.strstart-1-T.prev_match,T.prev_length-S),T.lookahead-=T.prev_length-1,T.prev_length-=2;++T.strstart<=L&&(T.ins_h=(T.ins_h<<T.hash_shift^T.window[T.strstart+S-1])&T.hash_mask,q=T.prev[T.strstart&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=T.strstart),--T.prev_length!=0;);if(T.match_available=0,T.match_length=S-1,T.strstart++,R&&(k(T,!1),T.strm.avail_out===0))return x}else if(T.match_available){if((R=a._tr_tally(T,0,T.window[T.strstart-1]))&&k(T,!1),T.strstart++,T.lookahead--,T.strm.avail_out===0)return x}else T.match_available=1,T.strstart++,T.lookahead--}return T.match_available&&(R=a._tr_tally(T,0,T.window[T.strstart-1]),T.match_available=0),T.insert=T.strstart<S-1?T.strstart:S-1,Q===f?(k(T,!0),T.strm.avail_out===0?$:V):T.last_lit&&(k(T,!1),T.strm.avail_out===0)?x:F}function At(T,Q,q,R,L){this.good_length=T,this.max_lazy=Q,this.nice_length=q,this.max_chain=R,this.func=L}function Kt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*w),this.dyn_dtree=new o.Buf16(2*(2*b+1)),this.bl_tree=new o.Buf16(2*(2*A+1)),N(this.dyn_ltree),N(this.dyn_dtree),N(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(O+1),this.heap=new o.Buf16(2*E+1),N(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*E+1),N(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Rt(T){var Q;return T&&T.state?(T.total_in=T.total_out=0,T.data_type=p,(Q=T.state).pending=0,Q.pending_out=0,Q.wrap<0&&(Q.wrap=-Q.wrap),Q.status=Q.wrap?I:H,T.adler=Q.wrap===2?0:1,Q.last_flush=h,a._tr_init(Q),d):nt(T,_)}function Z(T){var Q=Rt(T);return Q===d&&function(q){q.window_size=2*q.w_size,N(q.head),q.max_lazy_match=s[q.level].max_lazy,q.good_match=s[q.level].good_length,q.nice_match=s[q.level].nice_length,q.max_chain_length=s[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=S-1,q.match_available=0,q.ins_h=0}(T.state),Q}function Bt(T,Q,q,R,L,W){if(!T)return _;var ot=1;if(Q===g&&(Q=6),R<0?(ot=0,R=-R):15<R&&(ot=2,R-=16),L<1||v<L||q!==y||R<8||15<R||Q<0||9<Q||W<0||m<W)return nt(T,_);R===8&&(R=9);var at=new Kt;return(T.state=at).strm=T,at.wrap=ot,at.gzhead=null,at.w_bits=R,at.w_size=1<<at.w_bits,at.w_mask=at.w_size-1,at.hash_bits=L+7,at.hash_size=1<<at.hash_bits,at.hash_mask=at.hash_size-1,at.hash_shift=~~((at.hash_bits+S-1)/S),at.window=new o.Buf8(2*at.w_size),at.head=new o.Buf16(at.hash_size),at.prev=new o.Buf16(at.w_size),at.lit_bufsize=1<<L+6,at.pending_buf_size=4*at.lit_bufsize,at.pending_buf=new o.Buf8(at.pending_buf_size),at.d_buf=1*at.lit_bufsize,at.l_buf=3*at.lit_bufsize,at.level=Q,at.strategy=W,at.method=q,Z(T)}s=[new At(0,0,0,0,function(T,Q){var q=65535;for(q>T.pending_buf_size-5&&(q=T.pending_buf_size-5);;){if(T.lookahead<=1){if(bt(T),T.lookahead===0&&Q===h)return x;if(T.lookahead===0)break}T.strstart+=T.lookahead,T.lookahead=0;var R=T.block_start+q;if((T.strstart===0||T.strstart>=R)&&(T.lookahead=T.strstart-R,T.strstart=R,k(T,!1),T.strm.avail_out===0)||T.strstart-T.block_start>=T.w_size-j&&(k(T,!1),T.strm.avail_out===0))return x}return T.insert=0,Q===f?(k(T,!0),T.strm.avail_out===0?$:V):(T.strstart>T.block_start&&(k(T,!1),T.strm.avail_out),x)}),new At(4,4,8,4,wt),new At(4,5,16,8,wt),new At(4,6,32,32,wt),new At(4,4,16,16,mt),new At(8,16,32,32,mt),new At(8,16,128,128,mt),new At(8,32,128,256,mt),new At(32,128,258,1024,mt),new At(32,258,258,4096,mt)],r.deflateInit=function(T,Q){return Bt(T,Q,y,15,8,0)},r.deflateInit2=Bt,r.deflateReset=Z,r.deflateResetKeep=Rt,r.deflateSetHeader=function(T,Q){return T&&T.state?T.state.wrap!==2?_:(T.state.gzhead=Q,d):_},r.deflate=function(T,Q){var q,R,L,W;if(!T||!T.state||5<Q||Q<0)return T?nt(T,_):_;if(R=T.state,!T.output||!T.input&&T.avail_in!==0||R.status===666&&Q!==f)return nt(T,T.avail_out===0?-5:_);if(R.strm=T,q=R.last_flush,R.last_flush=Q,R.status===I)if(R.wrap===2)T.adler=0,ct(R,31),ct(R,139),ct(R,8),R.gzhead?(ct(R,(R.gzhead.text?1:0)+(R.gzhead.hcrc?2:0)+(R.gzhead.extra?4:0)+(R.gzhead.name?8:0)+(R.gzhead.comment?16:0)),ct(R,255&R.gzhead.time),ct(R,R.gzhead.time>>8&255),ct(R,R.gzhead.time>>16&255),ct(R,R.gzhead.time>>24&255),ct(R,R.level===9?2:2<=R.strategy||R.level<2?4:0),ct(R,255&R.gzhead.os),R.gzhead.extra&&R.gzhead.extra.length&&(ct(R,255&R.gzhead.extra.length),ct(R,R.gzhead.extra.length>>8&255)),R.gzhead.hcrc&&(T.adler=c(T.adler,R.pending_buf,R.pending,0)),R.gzindex=0,R.status=69):(ct(R,0),ct(R,0),ct(R,0),ct(R,0),ct(R,0),ct(R,R.level===9?2:2<=R.strategy||R.level<2?4:0),ct(R,3),R.status=H);else{var ot=y+(R.w_bits-8<<4)<<8;ot|=(2<=R.strategy||R.level<2?0:R.level<6?1:R.level===6?2:3)<<6,R.strstart!==0&&(ot|=32),ot+=31-ot%31,R.status=H,rt(R,ot),R.strstart!==0&&(rt(R,T.adler>>>16),rt(R,65535&T.adler)),T.adler=1}if(R.status===69)if(R.gzhead.extra){for(L=R.pending;R.gzindex<(65535&R.gzhead.extra.length)&&(R.pending!==R.pending_buf_size||(R.gzhead.hcrc&&R.pending>L&&(T.adler=c(T.adler,R.pending_buf,R.pending-L,L)),D(T),L=R.pending,R.pending!==R.pending_buf_size));)ct(R,255&R.gzhead.extra[R.gzindex]),R.gzindex++;R.gzhead.hcrc&&R.pending>L&&(T.adler=c(T.adler,R.pending_buf,R.pending-L,L)),R.gzindex===R.gzhead.extra.length&&(R.gzindex=0,R.status=73)}else R.status=73;if(R.status===73)if(R.gzhead.name){L=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>L&&(T.adler=c(T.adler,R.pending_buf,R.pending-L,L)),D(T),L=R.pending,R.pending===R.pending_buf_size)){W=1;break}W=R.gzindex<R.gzhead.name.length?255&R.gzhead.name.charCodeAt(R.gzindex++):0,ct(R,W)}while(W!==0);R.gzhead.hcrc&&R.pending>L&&(T.adler=c(T.adler,R.pending_buf,R.pending-L,L)),W===0&&(R.gzindex=0,R.status=91)}else R.status=91;if(R.status===91)if(R.gzhead.comment){L=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>L&&(T.adler=c(T.adler,R.pending_buf,R.pending-L,L)),D(T),L=R.pending,R.pending===R.pending_buf_size)){W=1;break}W=R.gzindex<R.gzhead.comment.length?255&R.gzhead.comment.charCodeAt(R.gzindex++):0,ct(R,W)}while(W!==0);R.gzhead.hcrc&&R.pending>L&&(T.adler=c(T.adler,R.pending_buf,R.pending-L,L)),W===0&&(R.status=103)}else R.status=103;if(R.status===103&&(R.gzhead.hcrc?(R.pending+2>R.pending_buf_size&&D(T),R.pending+2<=R.pending_buf_size&&(ct(R,255&T.adler),ct(R,T.adler>>8&255),T.adler=0,R.status=H)):R.status=H),R.pending!==0){if(D(T),T.avail_out===0)return R.last_flush=-1,d}else if(T.avail_in===0&&X(Q)<=X(q)&&Q!==f)return nt(T,-5);if(R.status===666&&T.avail_in!==0)return nt(T,-5);if(T.avail_in!==0||R.lookahead!==0||Q!==h&&R.status!==666){var at=R.strategy===2?function(K,P){for(var C;;){if(K.lookahead===0&&(bt(K),K.lookahead===0)){if(P===h)return x;break}if(K.match_length=0,C=a._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++,C&&(k(K,!1),K.strm.avail_out===0))return x}return K.insert=0,P===f?(k(K,!0),K.strm.avail_out===0?$:V):K.last_lit&&(k(K,!1),K.strm.avail_out===0)?x:F}(R,Q):R.strategy===3?function(K,P){for(var C,z,tt,ut,ht=K.window;;){if(K.lookahead<=M){if(bt(K),K.lookahead<=M&&P===h)return x;if(K.lookahead===0)break}if(K.match_length=0,K.lookahead>=S&&0<K.strstart&&(z=ht[tt=K.strstart-1])===ht[++tt]&&z===ht[++tt]&&z===ht[++tt]){ut=K.strstart+M;do;while(z===ht[++tt]&&z===ht[++tt]&&z===ht[++tt]&&z===ht[++tt]&&z===ht[++tt]&&z===ht[++tt]&&z===ht[++tt]&&z===ht[++tt]&&tt<ut);K.match_length=M-(ut-tt),K.match_length>K.lookahead&&(K.match_length=K.lookahead)}if(K.match_length>=S?(C=a._tr_tally(K,1,K.match_length-S),K.lookahead-=K.match_length,K.strstart+=K.match_length,K.match_length=0):(C=a._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++),C&&(k(K,!1),K.strm.avail_out===0))return x}return K.insert=0,P===f?(k(K,!0),K.strm.avail_out===0?$:V):K.last_lit&&(k(K,!1),K.strm.avail_out===0)?x:F}(R,Q):s[R.level].func(R,Q);if(at!==$&&at!==V||(R.status=666),at===x||at===$)return T.avail_out===0&&(R.last_flush=-1),d;if(at===F&&(Q===1?a._tr_align(R):Q!==5&&(a._tr_stored_block(R,0,0,!1),Q===3&&(N(R.head),R.lookahead===0&&(R.strstart=0,R.block_start=0,R.insert=0))),D(T),T.avail_out===0))return R.last_flush=-1,d}return Q!==f?d:R.wrap<=0?1:(R.wrap===2?(ct(R,255&T.adler),ct(R,T.adler>>8&255),ct(R,T.adler>>16&255),ct(R,T.adler>>24&255),ct(R,255&T.total_in),ct(R,T.total_in>>8&255),ct(R,T.total_in>>16&255),ct(R,T.total_in>>24&255)):(rt(R,T.adler>>>16),rt(R,65535&T.adler)),D(T),0<R.wrap&&(R.wrap=-R.wrap),R.pending!==0?d:1)},r.deflateEnd=function(T){var Q;return T&&T.state?(Q=T.state.status)!==I&&Q!==69&&Q!==73&&Q!==91&&Q!==103&&Q!==H&&Q!==666?nt(T,_):(T.state=null,Q===H?nt(T,-3):d):_},r.deflateSetDictionary=function(T,Q){var q,R,L,W,ot,at,K,P,C=Q.length;if(!T||!T.state||(W=(q=T.state).wrap)===2||W===1&&q.status!==I||q.lookahead)return _;for(W===1&&(T.adler=l(T.adler,Q,C,0)),q.wrap=0,C>=q.w_size&&(W===0&&(N(q.head),q.strstart=0,q.block_start=0,q.insert=0),P=new o.Buf8(q.w_size),o.arraySet(P,Q,C-q.w_size,q.w_size,0),Q=P,C=q.w_size),ot=T.avail_in,at=T.next_in,K=T.input,T.avail_in=C,T.next_in=0,T.input=Q,bt(q);q.lookahead>=S;){for(R=q.strstart,L=q.lookahead-(S-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[R+S-1])&q.hash_mask,q.prev[R&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=R,R++,--L;);q.strstart=R,q.lookahead=S-1,bt(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=S-1,q.match_available=0,T.next_in=at,T.input=K,T.avail_in=ot,q.wrap=W,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,c,u,h,f,d,_,g,m,p,y,v,E,b,A,w,O,S,M,j,I,H,x,F;a=s.state,l=s.next_in,x=s.input,c=l+(s.avail_in-5),u=s.next_out,F=s.output,h=u-(o-s.avail_out),f=u+(s.avail_out-257),d=a.dmax,_=a.wsize,g=a.whave,m=a.wnext,p=a.window,y=a.hold,v=a.bits,E=a.lencode,b=a.distcode,A=(1<<a.lenbits)-1,w=(1<<a.distbits)-1;t:do{v<15&&(y+=x[l++]<<v,v+=8,y+=x[l++]<<v,v+=8),O=E[y&A];e:for(;;){if(y>>>=S=O>>>24,v-=S,(S=O>>>16&255)===0)F[u++]=65535&O;else{if(!(16&S)){if(!(64&S)){O=E[(65535&O)+(y&(1<<S)-1)];continue e}if(32&S){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}M=65535&O,(S&=15)&&(v<S&&(y+=x[l++]<<v,v+=8),M+=y&(1<<S)-1,y>>>=S,v-=S),v<15&&(y+=x[l++]<<v,v+=8,y+=x[l++]<<v,v+=8),O=b[y&w];n:for(;;){if(y>>>=S=O>>>24,v-=S,!(16&(S=O>>>16&255))){if(!(64&S)){O=b[(65535&O)+(y&(1<<S)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(j=65535&O,v<(S&=15)&&(y+=x[l++]<<v,(v+=8)<S&&(y+=x[l++]<<v,v+=8)),d<(j+=y&(1<<S)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=S,v-=S,(S=u-h)<j){if(g<(S=j-S)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(H=p,(I=0)===m){if(I+=_-S,S<M){for(M-=S;F[u++]=p[I++],--S;);I=u-j,H=F}}else if(m<S){if(I+=_+m-S,(S-=m)<M){for(M-=S;F[u++]=p[I++],--S;);if(I=0,m<M){for(M-=S=m;F[u++]=p[I++],--S;);I=u-j,H=F}}}else if(I+=m-S,S<M){for(M-=S;F[u++]=p[I++],--S;);I=u-j,H=F}for(;2<M;)F[u++]=H[I++],F[u++]=H[I++],F[u++]=H[I++],M-=3;M&&(F[u++]=H[I++],1<M&&(F[u++]=H[I++]))}else{for(I=u-j;F[u++]=F[I++],F[u++]=F[I++],F[u++]=F[I++],2<(M-=3););M&&(F[u++]=F[I++],1<M&&(F[u++]=F[I++]))}break}}break}}while(l<c&&u<f);l-=M=v>>3,y&=(1<<(v-=M<<3))-1,s.next_in=l,s.next_out=u,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=u<f?f-u+257:257-(u-f),a.hold=y,a.bits=v}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),u=1,h=2,f=0,d=-2,_=1,g=852,m=592;function p(I){return(I>>>24&255)+(I>>>8&65280)+((65280&I)<<8)+((255&I)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function v(I){var H;return I&&I.state?(H=I.state,I.total_in=I.total_out=H.total=0,I.msg="",H.wrap&&(I.adler=1&H.wrap),H.mode=_,H.last=0,H.havedict=0,H.dmax=32768,H.head=null,H.hold=0,H.bits=0,H.lencode=H.lendyn=new s.Buf32(g),H.distcode=H.distdyn=new s.Buf32(m),H.sane=1,H.back=-1,f):d}function E(I){var H;return I&&I.state?((H=I.state).wsize=0,H.whave=0,H.wnext=0,v(I)):d}function b(I,H){var x,F;return I&&I.state?(F=I.state,H<0?(x=0,H=-H):(x=1+(H>>4),H<48&&(H&=15)),H&&(H<8||15<H)?d:(F.window!==null&&F.wbits!==H&&(F.window=null),F.wrap=x,F.wbits=H,E(I))):d}function A(I,H){var x,F;return I?(F=new y,(I.state=F).window=null,(x=b(I,H))!==f&&(I.state=null),x):d}var w,O,S=!0;function M(I){if(S){var H;for(w=new s.Buf32(512),O=new s.Buf32(32),H=0;H<144;)I.lens[H++]=8;for(;H<256;)I.lens[H++]=9;for(;H<280;)I.lens[H++]=7;for(;H<288;)I.lens[H++]=8;for(c(u,I.lens,0,288,w,0,I.work,{bits:9}),H=0;H<32;)I.lens[H++]=5;c(h,I.lens,0,32,O,0,I.work,{bits:5}),S=!1}I.lencode=w,I.lenbits=9,I.distcode=O,I.distbits=5}function j(I,H,x,F){var $,V=I.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new s.Buf8(V.wsize)),F>=V.wsize?(s.arraySet(V.window,H,x-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):(F<($=V.wsize-V.wnext)&&($=F),s.arraySet(V.window,H,x-F,$,V.wnext),(F-=$)?(s.arraySet(V.window,H,x-F,F,0),V.wnext=F,V.whave=V.wsize):(V.wnext+=$,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=$))),0}r.inflateReset=E,r.inflateReset2=b,r.inflateResetKeep=v,r.inflateInit=function(I){return A(I,15)},r.inflateInit2=A,r.inflate=function(I,H){var x,F,$,V,nt,X,N,D,k,ct,rt,it,bt,wt,mt,At,Kt,Rt,Z,Bt,T,Q,q,R,L=0,W=new s.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!I||!I.state||!I.output||!I.input&&I.avail_in!==0)return d;(x=I.state).mode===12&&(x.mode=13),nt=I.next_out,$=I.output,N=I.avail_out,V=I.next_in,F=I.input,X=I.avail_in,D=x.hold,k=x.bits,ct=X,rt=N,Q=f;t:for(;;)switch(x.mode){case _:if(x.wrap===0){x.mode=13;break}for(;k<16;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(2&x.wrap&&D===35615){W[x.check=0]=255&D,W[1]=D>>>8&255,x.check=a(x.check,W,2,0),k=D=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&D)<<8)+(D>>8))%31){I.msg="incorrect header check",x.mode=30;break}if((15&D)!=8){I.msg="unknown compression method",x.mode=30;break}if(k-=4,T=8+(15&(D>>>=4)),x.wbits===0)x.wbits=T;else if(T>x.wbits){I.msg="invalid window size",x.mode=30;break}x.dmax=1<<T,I.adler=x.check=1,x.mode=512&D?10:12,k=D=0;break;case 2:for(;k<16;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(x.flags=D,(255&x.flags)!=8){I.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){I.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=D>>8&1),512&x.flags&&(W[0]=255&D,W[1]=D>>>8&255,x.check=a(x.check,W,2,0)),k=D=0,x.mode=3;case 3:for(;k<32;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}x.head&&(x.head.time=D),512&x.flags&&(W[0]=255&D,W[1]=D>>>8&255,W[2]=D>>>16&255,W[3]=D>>>24&255,x.check=a(x.check,W,4,0)),k=D=0,x.mode=4;case 4:for(;k<16;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}x.head&&(x.head.xflags=255&D,x.head.os=D>>8),512&x.flags&&(W[0]=255&D,W[1]=D>>>8&255,x.check=a(x.check,W,2,0)),k=D=0,x.mode=5;case 5:if(1024&x.flags){for(;k<16;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}x.length=D,x.head&&(x.head.extra_len=D),512&x.flags&&(W[0]=255&D,W[1]=D>>>8&255,x.check=a(x.check,W,2,0)),k=D=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(X<(it=x.length)&&(it=X),it&&(x.head&&(T=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),s.arraySet(x.head.extra,F,V,it,T)),512&x.flags&&(x.check=a(x.check,F,it,V)),X-=it,V+=it,x.length-=it),x.length))break t;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(X===0)break t;for(it=0;T=F[V+it++],x.head&&T&&x.length<65536&&(x.head.name+=String.fromCharCode(T)),T&&it<X;);if(512&x.flags&&(x.check=a(x.check,F,it,V)),X-=it,V+=it,T)break t}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(X===0)break t;for(it=0;T=F[V+it++],x.head&&T&&x.length<65536&&(x.head.comment+=String.fromCharCode(T)),T&&it<X;);if(512&x.flags&&(x.check=a(x.check,F,it,V)),X-=it,V+=it,T)break t}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;k<16;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(D!==(65535&x.check)){I.msg="header crc mismatch",x.mode=30;break}k=D=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),I.adler=x.check=0,x.mode=12;break;case 10:for(;k<32;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}I.adler=x.check=p(D),k=D=0,x.mode=11;case 11:if(x.havedict===0)return I.next_out=nt,I.avail_out=N,I.next_in=V,I.avail_in=X,x.hold=D,x.bits=k,2;I.adler=x.check=1,x.mode=12;case 12:if(H===5||H===6)break t;case 13:if(x.last){D>>>=7&k,k-=7&k,x.mode=27;break}for(;k<3;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}switch(x.last=1&D,k-=1,3&(D>>>=1)){case 0:x.mode=14;break;case 1:if(M(x),x.mode=20,H!==6)break;D>>>=2,k-=2;break t;case 2:x.mode=17;break;case 3:I.msg="invalid block type",x.mode=30}D>>>=2,k-=2;break;case 14:for(D>>>=7&k,k-=7&k;k<32;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if((65535&D)!=(D>>>16^65535)){I.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&D,k=D=0,x.mode=15,H===6)break t;case 15:x.mode=16;case 16:if(it=x.length){if(X<it&&(it=X),N<it&&(it=N),it===0)break t;s.arraySet($,F,V,it,nt),X-=it,V+=it,N-=it,nt+=it,x.length-=it;break}x.mode=12;break;case 17:for(;k<14;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(x.nlen=257+(31&D),D>>>=5,k-=5,x.ndist=1+(31&D),D>>>=5,k-=5,x.ncode=4+(15&D),D>>>=4,k-=4,286<x.nlen||30<x.ndist){I.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;k<3;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}x.lens[ot[x.have++]]=7&D,D>>>=3,k-=3}for(;x.have<19;)x.lens[ot[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,q={bits:x.lenbits},Q=c(0,x.lens,0,19,x.lencode,0,x.work,q),x.lenbits=q.bits,Q){I.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;At=(L=x.lencode[D&(1<<x.lenbits)-1])>>>16&255,Kt=65535&L,!((mt=L>>>24)<=k);){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(Kt<16)D>>>=mt,k-=mt,x.lens[x.have++]=Kt;else{if(Kt===16){for(R=mt+2;k<R;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(D>>>=mt,k-=mt,x.have===0){I.msg="invalid bit length repeat",x.mode=30;break}T=x.lens[x.have-1],it=3+(3&D),D>>>=2,k-=2}else if(Kt===17){for(R=mt+3;k<R;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}k-=mt,T=0,it=3+(7&(D>>>=mt)),D>>>=3,k-=3}else{for(R=mt+7;k<R;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}k-=mt,T=0,it=11+(127&(D>>>=mt)),D>>>=7,k-=7}if(x.have+it>x.nlen+x.ndist){I.msg="invalid bit length repeat",x.mode=30;break}for(;it--;)x.lens[x.have++]=T}}if(x.mode===30)break;if(x.lens[256]===0){I.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,q={bits:x.lenbits},Q=c(u,x.lens,0,x.nlen,x.lencode,0,x.work,q),x.lenbits=q.bits,Q){I.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,q={bits:x.distbits},Q=c(h,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,q),x.distbits=q.bits,Q){I.msg="invalid distances set",x.mode=30;break}if(x.mode=20,H===6)break t;case 20:x.mode=21;case 21:if(6<=X&&258<=N){I.next_out=nt,I.avail_out=N,I.next_in=V,I.avail_in=X,x.hold=D,x.bits=k,l(I,rt),nt=I.next_out,$=I.output,N=I.avail_out,V=I.next_in,F=I.input,X=I.avail_in,D=x.hold,k=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;At=(L=x.lencode[D&(1<<x.lenbits)-1])>>>16&255,Kt=65535&L,!((mt=L>>>24)<=k);){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(At&&!(240&At)){for(Rt=mt,Z=At,Bt=Kt;At=(L=x.lencode[Bt+((D&(1<<Rt+Z)-1)>>Rt)])>>>16&255,Kt=65535&L,!(Rt+(mt=L>>>24)<=k);){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}D>>>=Rt,k-=Rt,x.back+=Rt}if(D>>>=mt,k-=mt,x.back+=mt,x.length=Kt,At===0){x.mode=26;break}if(32&At){x.back=-1,x.mode=12;break}if(64&At){I.msg="invalid literal/length code",x.mode=30;break}x.extra=15&At,x.mode=22;case 22:if(x.extra){for(R=x.extra;k<R;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}x.length+=D&(1<<x.extra)-1,D>>>=x.extra,k-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;At=(L=x.distcode[D&(1<<x.distbits)-1])>>>16&255,Kt=65535&L,!((mt=L>>>24)<=k);){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(!(240&At)){for(Rt=mt,Z=At,Bt=Kt;At=(L=x.distcode[Bt+((D&(1<<Rt+Z)-1)>>Rt)])>>>16&255,Kt=65535&L,!(Rt+(mt=L>>>24)<=k);){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}D>>>=Rt,k-=Rt,x.back+=Rt}if(D>>>=mt,k-=mt,x.back+=mt,64&At){I.msg="invalid distance code",x.mode=30;break}x.offset=Kt,x.extra=15&At,x.mode=24;case 24:if(x.extra){for(R=x.extra;k<R;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}x.offset+=D&(1<<x.extra)-1,D>>>=x.extra,k-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){I.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(N===0)break t;if(it=rt-N,x.offset>it){if((it=x.offset-it)>x.whave&&x.sane){I.msg="invalid distance too far back",x.mode=30;break}bt=it>x.wnext?(it-=x.wnext,x.wsize-it):x.wnext-it,it>x.length&&(it=x.length),wt=x.window}else wt=$,bt=nt-x.offset,it=x.length;for(N<it&&(it=N),N-=it,x.length-=it;$[nt++]=wt[bt++],--it;);x.length===0&&(x.mode=21);break;case 26:if(N===0)break t;$[nt++]=x.length,N--,x.mode=21;break;case 27:if(x.wrap){for(;k<32;){if(X===0)break t;X--,D|=F[V++]<<k,k+=8}if(rt-=N,I.total_out+=rt,x.total+=rt,rt&&(I.adler=x.check=x.flags?a(x.check,$,rt,nt-rt):o(x.check,$,rt,nt-rt)),rt=N,(x.flags?D:p(D))!==x.check){I.msg="incorrect data check",x.mode=30;break}k=D=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;k<32;){if(X===0)break t;X--,D+=F[V++]<<k,k+=8}if(D!==(4294967295&x.total)){I.msg="incorrect length check",x.mode=30;break}k=D=0}x.mode=29;case 29:Q=1;break t;case 30:Q=-3;break t;case 31:return-4;case 32:default:return d}return I.next_out=nt,I.avail_out=N,I.next_in=V,I.avail_in=X,x.hold=D,x.bits=k,(x.wsize||rt!==I.avail_out&&x.mode<30&&(x.mode<27||H!==4))&&j(I,I.output,I.next_out,rt-I.avail_out)?(x.mode=31,-4):(ct-=I.avail_in,rt-=I.avail_out,I.total_in+=ct,I.total_out+=rt,x.total+=rt,x.wrap&&rt&&(I.adler=x.check=x.flags?a(x.check,$,rt,I.next_out-rt):o(x.check,$,rt,I.next_out-rt)),I.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(ct==0&&rt===0||H===4)&&Q===f&&(Q=-5),Q)},r.inflateEnd=function(I){if(!I||!I.state)return d;var H=I.state;return H.window&&(H.window=null),I.state=null,f},r.inflateGetHeader=function(I,H){var x;return I&&I.state&&2&(x=I.state).wrap?((x.head=H).done=!1,f):d},r.inflateSetDictionary=function(I,H){var x,F=H.length;return I&&I.state?(x=I.state).wrap!==0&&x.mode!==11?d:x.mode===11&&o(1,H,F,0)!==x.check?-3:j(I,H,F,F)?(x.mode=31,-4):(x.havedict=1,f):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,h,f,d,_,g,m,p){var y,v,E,b,A,w,O,S,M,j=p.bits,I=0,H=0,x=0,F=0,$=0,V=0,nt=0,X=0,N=0,D=0,k=null,ct=0,rt=new s.Buf16(16),it=new s.Buf16(16),bt=null,wt=0;for(I=0;I<=15;I++)rt[I]=0;for(H=0;H<d;H++)rt[h[f+H]]++;for($=j,F=15;1<=F&&rt[F]===0;F--);if(F<$&&($=F),F===0)return _[g++]=20971520,_[g++]=20971520,p.bits=1,0;for(x=1;x<F&&rt[x]===0;x++);for($<x&&($=x),I=X=1;I<=15;I++)if(X<<=1,(X-=rt[I])<0)return-1;if(0<X&&(u===0||F!==1))return-1;for(it[1]=0,I=1;I<15;I++)it[I+1]=it[I]+rt[I];for(H=0;H<d;H++)h[f+H]!==0&&(m[it[h[f+H]]++]=H);if(w=u===0?(k=bt=m,19):u===1?(k=o,ct-=257,bt=a,wt-=257,256):(k=l,bt=c,-1),I=x,A=g,nt=H=D=0,E=-1,b=(N=1<<(V=$))-1,u===1&&852<N||u===2&&592<N)return 1;for(;;){for(O=I-nt,M=m[H]<w?(S=0,m[H]):m[H]>w?(S=bt[wt+m[H]],k[ct+m[H]]):(S=96,0),y=1<<I-nt,x=v=1<<V;_[A+(D>>nt)+(v-=y)]=O<<24|S<<16|M|0,v!==0;);for(y=1<<I-1;D&y;)y>>=1;if(y!==0?(D&=y-1,D+=y):D=0,H++,--rt[I]==0){if(I===F)break;I=h[f+m[H]]}if($<I&&(D&b)!==E){for(nt===0&&(nt=$),A+=x,X=1<<(V=I-nt);V+nt<F&&!((X-=rt[V+nt])<=0);)V++,X<<=1;if(N+=1<<V,u===1&&852<N||u===2&&592<N)return 1;_[E=D&b]=$<<24|V<<16|A-g|0}}return D!==0&&(_[A+D]=I-nt<<24|64<<16|0),p.bits=$,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(L){for(var W=L.length;0<=--W;)L[W]=0}var c=0,u=29,h=256,f=h+1+u,d=30,_=19,g=2*f+1,m=15,p=16,y=7,v=256,E=16,b=17,A=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],O=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],j=new Array(2*(f+2));l(j);var I=new Array(2*d);l(I);var H=new Array(512);l(H);var x=new Array(256);l(x);var F=new Array(u);l(F);var $,V,nt,X=new Array(d);function N(L,W,ot,at,K){this.static_tree=L,this.extra_bits=W,this.extra_base=ot,this.elems=at,this.max_length=K,this.has_stree=L&&L.length}function D(L,W){this.dyn_tree=L,this.max_code=0,this.stat_desc=W}function k(L){return L<256?H[L]:H[256+(L>>>7)]}function ct(L,W){L.pending_buf[L.pending++]=255&W,L.pending_buf[L.pending++]=W>>>8&255}function rt(L,W,ot){L.bi_valid>p-ot?(L.bi_buf|=W<<L.bi_valid&65535,ct(L,L.bi_buf),L.bi_buf=W>>p-L.bi_valid,L.bi_valid+=ot-p):(L.bi_buf|=W<<L.bi_valid&65535,L.bi_valid+=ot)}function it(L,W,ot){rt(L,ot[2*W],ot[2*W+1])}function bt(L,W){for(var ot=0;ot|=1&L,L>>>=1,ot<<=1,0<--W;);return ot>>>1}function wt(L,W,ot){var at,K,P=new Array(m+1),C=0;for(at=1;at<=m;at++)P[at]=C=C+ot[at-1]<<1;for(K=0;K<=W;K++){var z=L[2*K+1];z!==0&&(L[2*K]=bt(P[z]++,z))}}function mt(L){var W;for(W=0;W<f;W++)L.dyn_ltree[2*W]=0;for(W=0;W<d;W++)L.dyn_dtree[2*W]=0;for(W=0;W<_;W++)L.bl_tree[2*W]=0;L.dyn_ltree[2*v]=1,L.opt_len=L.static_len=0,L.last_lit=L.matches=0}function At(L){8<L.bi_valid?ct(L,L.bi_buf):0<L.bi_valid&&(L.pending_buf[L.pending++]=L.bi_buf),L.bi_buf=0,L.bi_valid=0}function Kt(L,W,ot,at){var K=2*W,P=2*ot;return L[K]<L[P]||L[K]===L[P]&&at[W]<=at[ot]}function Rt(L,W,ot){for(var at=L.heap[ot],K=ot<<1;K<=L.heap_len&&(K<L.heap_len&&Kt(W,L.heap[K+1],L.heap[K],L.depth)&&K++,!Kt(W,at,L.heap[K],L.depth));)L.heap[ot]=L.heap[K],ot=K,K<<=1;L.heap[ot]=at}function Z(L,W,ot){var at,K,P,C,z=0;if(L.last_lit!==0)for(;at=L.pending_buf[L.d_buf+2*z]<<8|L.pending_buf[L.d_buf+2*z+1],K=L.pending_buf[L.l_buf+z],z++,at===0?it(L,K,W):(it(L,(P=x[K])+h+1,W),(C=w[P])!==0&&rt(L,K-=F[P],C),it(L,P=k(--at),ot),(C=O[P])!==0&&rt(L,at-=X[P],C)),z<L.last_lit;);it(L,v,W)}function Bt(L,W){var ot,at,K,P=W.dyn_tree,C=W.stat_desc.static_tree,z=W.stat_desc.has_stree,tt=W.stat_desc.elems,ut=-1;for(L.heap_len=0,L.heap_max=g,ot=0;ot<tt;ot++)P[2*ot]!==0?(L.heap[++L.heap_len]=ut=ot,L.depth[ot]=0):P[2*ot+1]=0;for(;L.heap_len<2;)P[2*(K=L.heap[++L.heap_len]=ut<2?++ut:0)]=1,L.depth[K]=0,L.opt_len--,z&&(L.static_len-=C[2*K+1]);for(W.max_code=ut,ot=L.heap_len>>1;1<=ot;ot--)Rt(L,P,ot);for(K=tt;ot=L.heap[1],L.heap[1]=L.heap[L.heap_len--],Rt(L,P,1),at=L.heap[1],L.heap[--L.heap_max]=ot,L.heap[--L.heap_max]=at,P[2*K]=P[2*ot]+P[2*at],L.depth[K]=(L.depth[ot]>=L.depth[at]?L.depth[ot]:L.depth[at])+1,P[2*ot+1]=P[2*at+1]=K,L.heap[1]=K++,Rt(L,P,1),2<=L.heap_len;);L.heap[--L.heap_max]=L.heap[1],function(ht,Mt){var _t,xt,G,dt,ft,Xt,Lt=Mt.dyn_tree,Vt=Mt.max_code,Nt=Mt.stat_desc.static_tree,B=Mt.stat_desc.has_stree,Tt=Mt.stat_desc.extra_bits,gt=Mt.stat_desc.extra_base,Et=Mt.stat_desc.max_length,yt=0;for(dt=0;dt<=m;dt++)ht.bl_count[dt]=0;for(Lt[2*ht.heap[ht.heap_max]+1]=0,_t=ht.heap_max+1;_t<g;_t++)Et<(dt=Lt[2*Lt[2*(xt=ht.heap[_t])+1]+1]+1)&&(dt=Et,yt++),Lt[2*xt+1]=dt,Vt<xt||(ht.bl_count[dt]++,ft=0,gt<=xt&&(ft=Tt[xt-gt]),Xt=Lt[2*xt],ht.opt_len+=Xt*(dt+ft),B&&(ht.static_len+=Xt*(Nt[2*xt+1]+ft)));if(yt!==0){do{for(dt=Et-1;ht.bl_count[dt]===0;)dt--;ht.bl_count[dt]--,ht.bl_count[dt+1]+=2,ht.bl_count[Et]--,yt-=2}while(0<yt);for(dt=Et;dt!==0;dt--)for(xt=ht.bl_count[dt];xt!==0;)Vt<(G=ht.heap[--_t])||(Lt[2*G+1]!==dt&&(ht.opt_len+=(dt-Lt[2*G+1])*Lt[2*G],Lt[2*G+1]=dt),xt--)}}(L,W),wt(P,ut,L.bl_count)}function T(L,W,ot){var at,K,P=-1,C=W[1],z=0,tt=7,ut=4;for(C===0&&(tt=138,ut=3),W[2*(ot+1)+1]=65535,at=0;at<=ot;at++)K=C,C=W[2*(at+1)+1],++z<tt&&K===C||(z<ut?L.bl_tree[2*K]+=z:K!==0?(K!==P&&L.bl_tree[2*K]++,L.bl_tree[2*E]++):z<=10?L.bl_tree[2*b]++:L.bl_tree[2*A]++,P=K,ut=(z=0)===C?(tt=138,3):K===C?(tt=6,3):(tt=7,4))}function Q(L,W,ot){var at,K,P=-1,C=W[1],z=0,tt=7,ut=4;for(C===0&&(tt=138,ut=3),at=0;at<=ot;at++)if(K=C,C=W[2*(at+1)+1],!(++z<tt&&K===C)){if(z<ut)for(;it(L,K,L.bl_tree),--z!=0;);else K!==0?(K!==P&&(it(L,K,L.bl_tree),z--),it(L,E,L.bl_tree),rt(L,z-3,2)):z<=10?(it(L,b,L.bl_tree),rt(L,z-3,3)):(it(L,A,L.bl_tree),rt(L,z-11,7));P=K,ut=(z=0)===C?(tt=138,3):K===C?(tt=6,3):(tt=7,4)}}l(X);var q=!1;function R(L,W,ot,at){rt(L,(c<<1)+(at?1:0),3),function(K,P,C,z){At(K),z&&(ct(K,C),ct(K,~C)),s.arraySet(K.pending_buf,K.window,P,C,K.pending),K.pending+=C}(L,W,ot,!0)}r._tr_init=function(L){q||(function(){var W,ot,at,K,P,C=new Array(m+1);for(K=at=0;K<u-1;K++)for(F[K]=at,W=0;W<1<<w[K];W++)x[at++]=K;for(x[at-1]=K,K=P=0;K<16;K++)for(X[K]=P,W=0;W<1<<O[K];W++)H[P++]=K;for(P>>=7;K<d;K++)for(X[K]=P<<7,W=0;W<1<<O[K]-7;W++)H[256+P++]=K;for(ot=0;ot<=m;ot++)C[ot]=0;for(W=0;W<=143;)j[2*W+1]=8,W++,C[8]++;for(;W<=255;)j[2*W+1]=9,W++,C[9]++;for(;W<=279;)j[2*W+1]=7,W++,C[7]++;for(;W<=287;)j[2*W+1]=8,W++,C[8]++;for(wt(j,f+1,C),W=0;W<d;W++)I[2*W+1]=5,I[2*W]=bt(W,5);$=new N(j,w,h+1,f,m),V=new N(I,O,0,d,m),nt=new N(new Array(0),S,0,_,y)}(),q=!0),L.l_desc=new D(L.dyn_ltree,$),L.d_desc=new D(L.dyn_dtree,V),L.bl_desc=new D(L.bl_tree,nt),L.bi_buf=0,L.bi_valid=0,mt(L)},r._tr_stored_block=R,r._tr_flush_block=function(L,W,ot,at){var K,P,C=0;0<L.level?(L.strm.data_type===2&&(L.strm.data_type=function(z){var tt,ut=4093624447;for(tt=0;tt<=31;tt++,ut>>>=1)if(1&ut&&z.dyn_ltree[2*tt]!==0)return o;if(z.dyn_ltree[18]!==0||z.dyn_ltree[20]!==0||z.dyn_ltree[26]!==0)return a;for(tt=32;tt<h;tt++)if(z.dyn_ltree[2*tt]!==0)return a;return o}(L)),Bt(L,L.l_desc),Bt(L,L.d_desc),C=function(z){var tt;for(T(z,z.dyn_ltree,z.l_desc.max_code),T(z,z.dyn_dtree,z.d_desc.max_code),Bt(z,z.bl_desc),tt=_-1;3<=tt&&z.bl_tree[2*M[tt]+1]===0;tt--);return z.opt_len+=3*(tt+1)+5+5+4,tt}(L),K=L.opt_len+3+7>>>3,(P=L.static_len+3+7>>>3)<=K&&(K=P)):K=P=ot+5,ot+4<=K&&W!==-1?R(L,W,ot,at):L.strategy===4||P===K?(rt(L,2+(at?1:0),3),Z(L,j,I)):(rt(L,4+(at?1:0),3),function(z,tt,ut,ht){var Mt;for(rt(z,tt-257,5),rt(z,ut-1,5),rt(z,ht-4,4),Mt=0;Mt<ht;Mt++)rt(z,z.bl_tree[2*M[Mt]+1],3);Q(z,z.dyn_ltree,tt-1),Q(z,z.dyn_dtree,ut-1)}(L,L.l_desc.max_code+1,L.d_desc.max_code+1,C+1),Z(L,L.dyn_ltree,L.dyn_dtree)),mt(L),at&&At(L)},r._tr_tally=function(L,W,ot){return L.pending_buf[L.d_buf+2*L.last_lit]=W>>>8&255,L.pending_buf[L.d_buf+2*L.last_lit+1]=255&W,L.pending_buf[L.l_buf+L.last_lit]=255&ot,L.last_lit++,W===0?L.dyn_ltree[2*ot]++:(L.matches++,W--,L.dyn_ltree[2*(x[ot]+h+1)]++,L.dyn_dtree[2*k(W)]++),L.last_lit===L.lit_bufsize-1},r._tr_align=function(L){rt(L,2,3),it(L,v,j),function(W){W.bi_valid===16?(ct(W,W.bi_buf),W.bi_buf=0,W.bi_valid=0):8<=W.bi_valid&&(W.pending_buf[W.pending++]=255&W.bi_buf,W.bi_buf>>=8,W.bi_valid-=8)}(L)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,c,u,h,f=1,d={},_=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(E){process.nextTick(function(){y(E)})}:function(){if(o.postMessage&&!o.importScripts){var E=!0,b=o.onmessage;return o.onmessage=function(){E=!1},o.postMessage("","*"),o.onmessage=b,E}}()?(h="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",v,!1):o.attachEvent("onmessage",v),function(E){o.postMessage(h+E,"*")}):o.MessageChannel?((u=new MessageChannel).port1.onmessage=function(E){y(E.data)},function(E){u.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(E){var b=g.createElement("script");b.onreadystatechange=function(){y(E),b.onreadystatechange=null,c.removeChild(b),b=null},c.appendChild(b)}):function(E){setTimeout(y,0,E)},m.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var b=new Array(arguments.length-1),A=0;A<b.length;A++)b[A]=arguments[A+1];var w={callback:E,args:b};return d[f]=w,l(f),f++},m.clearImmediate=p}function p(E){delete d[E]}function y(E){if(_)setTimeout(y,0,E);else{var b=d[E];if(b){_=!0;try{(function(A){var w=A.callback,O=A.args;switch(O.length){case 0:w();break;case 1:w(O[0]);break;case 2:w(O[0],O[1]);break;case 3:w(O[0],O[1],O[2]);break;default:w.apply(a,O)}})(b)}finally{p(E),_=!1}}}}function v(E){E.source===o&&typeof E.data=="string"&&E.data.indexOf(h)===0&&y(+E.data.slice(h.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Su<"u"?Su:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(DS);var _P=DS.exports;const yP=window.URL||window.webkitURL,io=document.querySelector(".canvas");io.width=window.innerWidth;io.height=window.innerHeight;const I0=io.getContext("2d"),LS=()=>{I0.clearRect(0,0,io.width,io.height),Es[Kp.frame]&&I0.drawImage(Es[Kp.frame],0,0,io.width,io.height)},Kp={frame:0},Cg=180,Es=[],Ig=[];Ig[0]=new Promise(i=>{Es[0]=new Image,Es[0].decoding="async",Es[0].onload=LS,i()});for(let i=1;i<Cg;i++)Ig[i]=new Promise(t=>{Es[i]=new Image,Es[i].decoding="async",t()});const vP=(i,t,e)=>{OC(i,t,async n=>{const r=await _P.loadAsync(n);await Promise.all(Ig);const s=[];for(let l=0;l<Cg;l++)s[l]=new Promise(c=>{r.file(`${l+1}.webp`).async("blob").then(u=>{c(u)})});const o=await Promise.all(s),a=[];for(let l=0;l<o.length;l++)a.push(new Promise(c=>{Es[l].src=yP.createObjectURL(o[l]),c()}));await Promise.all(a),e()}).catch(n=>{ZE(n)})};Kr.registerPlugin(Yc);Kr.registerPlugin(pe);const P0=Kr.quickTo(".progress-fill","margin-bottom",{duration:.3,ease:"power2"}),xP=Kr.quickTo(".progress-outline","stroke-dashoffset",{duration:.3,ease:"power2"}),Hh=(i,t)=>{P0(i?t*220-153:t*387-182),xP(887-t*887)},qa=Kr.timeline({paused:!0});qa.to(".progress-outline",{duration:1,delay:1.5,"stroke-dashoffset":-887});qa.to(".progress-outline",{duration:4,delay:.5,"stroke-dasharray":12,"stroke-dashoffset":887,ease:"power2.out"});qa.to(".cover",{duration:2,backgroundColor:"#000000"});qa.to(window,{duration:2,scrollTo:{y:"#NoGame",autoKill:!0},ease:"expo.inOut"});const EP=(i,t)=>{qa.eventCallback("onComplete",t),Hh(i,0),qa.play()},cl=Kr.timeline({scrollTrigger:{trigger:"#intro",pin:!0,start:"center center",end:"center -1200%",scrub:.5}});cl.set("#Just",{opacity:0,scale:.6});cl.to("#NoGame",{duration:2,opacity:0,scale:.5,delay:1});cl.to("#Just",{duration:2,opacity:1,scale:1,delay:2});cl.to("#Just",{duration:4,opacity:0,delay:1.5});cl.to(Kp,{duration:15,frame:Cg-1,snap:"frame",ease:"expoScale(0.5,7,none)",onUpdate:LS});cl.to(".canvas",{duration:3,opacity:0});const TP=(i,t,e)=>{const n=Kr.timeline({scrollTrigger:{trigger:"#render",pin:!0,start:"top top",end:"bottom -1000%",scrub:.3,onEnter:()=>{t()},onEnterBack:()=>{t()},onLeave:()=>{e()},onLeaveBack:()=>{e()}}});n.set(".webgl",{opacity:0}),n.set(i.position,{x:4.5,y:3.75,z:3.16}),n.to(".webgl",{opacity:1}),n.to(i.position,{duration:2,x:.532,y:.772,z:-6.52}),n.to(i.position,{duration:2,x:-6.83,y:1.98,z:-2.93}),n.to(i.position,{duration:2,x:-5.47,y:2.64,z:4.27}),n.to(".webgl",{opacity:0})},Pg=Kr.timeline({scrollTrigger:{trigger:"#Out",start:"center bottom",end:"center center",scrub:.5}});Pg.from("#Out",{opacity:0,x:"100vh"});Pg.from("#heart",{opacity:0,y:"20vh",delay:1});Pg.from("#broken",{opacity:0,y:"20vh"});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dg="157",Wo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},SP=0,D0=1,bP=2,NS=1,wP=2,Ir=3,$r=0,di=1,ar=2,Ts=0,Pa=1,L0=2,N0=3,O0=4,AP=5,da=100,MP=101,RP=102,U0=103,k0=104,CP=200,IP=201,PP=202,DP=203,OS=204,US=205,LP=206,NP=207,OP=208,UP=209,kP=210,FP=0,BP=1,VP=2,Zp=3,zP=4,HP=5,GP=6,WP=7,kS=0,XP=1,jP=2,Ss=0,qP=1,YP=2,$P=3,FS=4,KP=5,BS=300,Ya=301,$a=302,Qp=303,Jp=304,Cf=306,Ka=1e3,Bi=1001,Gh=1002,hn=1003,tm=1004,uh=1005,li=1006,VS=1007,Po=1008,bs=1009,ZP=1010,QP=1011,Lg=1012,zS=1013,ds=1014,Fr=1015,Dc=1016,HS=1017,GS=1018,vo=1020,JP=1021,Vi=1023,t2=1024,e2=1025,xo=1026,Za=1027,n2=1028,WS=1029,i2=1030,XS=1031,jS=1033,pd=33776,md=33777,gd=33778,_d=33779,F0=35840,B0=35841,V0=35842,z0=35843,r2=36196,H0=37492,G0=37496,W0=37808,X0=37809,j0=37810,q0=37811,Y0=37812,$0=37813,K0=37814,Z0=37815,Q0=37816,J0=37817,ty=37818,ey=37819,ny=37820,iy=37821,yd=36492,ry=36494,sy=36495,s2=36283,oy=36284,ay=36285,ly=36286,o2=2200,a2=2201,l2=2202,Lc=2300,Qa=2301,vd=2302,va=2400,xa=2401,Wh=2402,Ng=2500,c2=2501,u2=0,qS=1,em=2,YS=3e3,Eo=3001,h2=3200,f2=3201,$S=0,d2=1,zi="",We="srgb",Pn="srgb-linear",Og="display-p3",If="display-p3-linear",Xh="linear",Ne="srgb",jh="rec709",qh="p3",xd=7680,p2=519,m2=512,g2=513,_2=514,y2=515,v2=516,x2=517,E2=518,T2=519,nm=35044,cy="300 es",im=1035,Br=2e3,Yh=2001;class Ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uy=1234567;const ec=Math.PI/180,Ja=180/Math.PI;function nr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function An(i,t,e){return Math.max(t,Math.min(e,i))}function Ug(i,t){return(i%t+t)%t}function S2(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function b2(i,t,e){return i!==t?(e-i)/(t-i):0}function nc(i,t,e){return(1-e)*i+e*t}function w2(i,t,e,n){return nc(i,t,1-Math.exp(-e*n))}function A2(i,t=1){return t-Math.abs(Ug(i,t*2)-t)}function M2(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function R2(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function C2(i,t){return i+Math.floor(Math.random()*(t-i+1))}function I2(i,t){return i+Math.random()*(t-i)}function P2(i){return i*(.5-Math.random())}function D2(i){i!==void 0&&(uy=i);let t=uy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function L2(i){return i*ec}function N2(i){return i*Ja}function rm(i){return(i&i-1)===0&&i!==0}function KS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $h(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O2(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function lr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ZS={DEG2RAD:ec,RAD2DEG:Ja,generateUUID:nr,clamp:An,euclideanModulo:Ug,mapLinear:S2,inverseLerp:b2,lerp:nc,damp:w2,pingpong:A2,smoothstep:M2,smootherstep:R2,randInt:C2,randFloat:I2,randFloatSpread:P2,seededRandom:D2,degToRad:L2,radToDeg:N2,isPowerOfTwo:rm,ceilPowerOfTwo:KS,floorPowerOfTwo:$h,setQuaternionFromProperEuler:O2,normalize:Ae,denormalize:lr};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(An(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,r,s,o,a,l,c){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=r[0],m=r[3],p=r[6],y=r[1],v=r[4],E=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*g+a*y+l*b,s[3]=o*m+a*v+l*A,s[6]=o*p+a*E+l*w,s[1]=c*g+u*y+h*b,s[4]=c*m+u*v+h*A,s[7]=c*p+u*E+h*w,s[2]=f*g+d*y+_*b,s[5]=f*m+d*v+_*A,s[8]=f*p+d*E+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=e*h+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(r*c-u*n)*g,t[2]=(a*n-r*o)*g,t[3]=f*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ed.makeScale(t,e)),this}rotate(t){return this.premultiply(Ed.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ed.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ed=new ue;function QS(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function U2(){const i=Nc("canvas");return i.style.display="block",i}const hy={};function ic(i){i in hy||(hy[i]=!0,console.warn(i))}const fy=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dy=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wu={[Pn]:{transfer:Xh,primaries:jh,toReference:i=>i,fromReference:i=>i},[We]:{transfer:Ne,primaries:jh,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[If]:{transfer:Xh,primaries:qh,toReference:i=>i.applyMatrix3(dy),fromReference:i=>i.applyMatrix3(fy)},[Og]:{transfer:Ne,primaries:qh,toReference:i=>i.convertSRGBToLinear().applyMatrix3(dy),fromReference:i=>i.applyMatrix3(fy).convertLinearToSRGB()}},k2=new Set([Pn,If]),be={enabled:!0,_workingColorSpace:Pn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!k2.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=wu[t].toReference,r=wu[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return wu[i].primaries},getTransfer:function(i){return i===zi?Xh:wu[i].transfer}};function Da(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Td(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jo;class JS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jo===void 0&&(jo=Nc("canvas")),jo.width=t.width,jo.height=t.height;const n=jo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Da(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Da(e[n]/255)*255):e[n]=Da(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let F2=0;class tb{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F2++}),this.uuid=nr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sd(r[o].image)):s.push(Sd(r[o]))}else s=Sd(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Sd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?JS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B2=0;class In extends Ns{constructor(t=In.DEFAULT_IMAGE,e=In.DEFAULT_MAPPING,n=Bi,r=Bi,s=li,o=Po,a=Vi,l=bs,c=In.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B2++}),this.uuid=nr(),this.name="",this.source=new tb(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ic("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Eo?We:zi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==BS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ic("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?Eo:YS}set encoding(t){ic("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Eo?We:zi}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=BS;In.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,r=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,E=(d+1)/2,b=(p+1)/2,A=(u+f)/4,w=(h+g)/4,O=(_+m)/4;return v>E&&v>b?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=w/n):E>b?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=A/r,s=O/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=w/s,r=O/s),this.set(n,r,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V2 extends Ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(ic("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Eo?We:zi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new In(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tb(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do extends V2{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class eb extends In{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class z2 extends In{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,p*y);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const E=a*y;if(l=l*m+f*E,c=c*m+d*E,u=u*m+_*E,h=h*m+g*E,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-a*d,t[e+2]=c*_+u*d+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(An(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(py.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(py.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*r-a*n,u=l*n+a*e-s*r,h=l*r+s*n-o*e,f=-s*e-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bd.copy(this).projectOnVector(t),this.sub(bd)}reflect(t){return this.sub(bd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(An(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bd=new Y,py=new Ri;class Zr{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(br.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(br.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=br.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),qo.copy(t.boundingBox),qo.applyMatrix4(t.matrixWorld),this.union(qo);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)br.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(br)}else r.boundingBox===null&&r.computeBoundingBox(),qo.copy(r.boundingBox),qo.applyMatrix4(t.matrixWorld),this.union(qo)}const n=t.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,br),br.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sl),Au.subVectors(this.max,Sl),Yo.subVectors(t.a,Sl),$o.subVectors(t.b,Sl),Ko.subVectors(t.c,Sl),Jr.subVectors($o,Yo),ts.subVectors(Ko,$o),Vs.subVectors(Yo,Ko);let e=[0,-Jr.z,Jr.y,0,-ts.z,ts.y,0,-Vs.z,Vs.y,Jr.z,0,-Jr.x,ts.z,0,-ts.x,Vs.z,0,-Vs.x,-Jr.y,Jr.x,0,-ts.y,ts.x,0,-Vs.y,Vs.x,0];return!wd(e,Yo,$o,Ko,Au)||(e=[1,0,0,0,1,0,0,0,1],!wd(e,Yo,$o,Ko,Au))?!1:(Mu.crossVectors(Jr,ts),e=[Mu.x,Mu.y,Mu.z],wd(e,Yo,$o,Ko,Au))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,br).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(br).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],br=new Y,qo=new Zr,Yo=new Y,$o=new Y,Ko=new Y,Jr=new Y,ts=new Y,Vs=new Y,Sl=new Y,Au=new Y,Mu=new Y,zs=new Y;function wd(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zs.fromArray(i,s);const a=r.x*Math.abs(zs.x)+r.y*Math.abs(zs.y)+r.z*Math.abs(zs.z),l=t.dot(zs),c=e.dot(zs),u=n.dot(zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const H2=new Zr,bl=new Y,Ad=new Y;class xr{constructor(t=new Y,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):H2.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bl.subVectors(t,this.center);const e=bl.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(bl,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bl.copy(t.center).add(Ad)),this.expandByPoint(bl.copy(t.center).sub(Ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new Y,Md=new Y,Ru=new Y,es=new Y,Rd=new Y,Cu=new Y,Cd=new Y;class $c{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wr.copy(this.origin).addScaledVector(this.direction,e),wr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Md.copy(t).add(e).multiplyScalar(.5),Ru.copy(e).sub(t).normalize(),es.copy(this.origin).sub(Md);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ru),a=es.dot(this.direction),l=-es.dot(Ru),c=es.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Md).addScaledVector(Ru,f),d}intersectSphere(t,e){wr.subVectors(t.center,this.origin);const n=wr.dot(this.direction),r=wr.dot(wr)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,wr)!==null}intersectTriangle(t,e,n,r,s){Rd.subVectors(e,t),Cu.subVectors(n,t),Cd.crossVectors(Rd,Cu);let o=this.direction.dot(Cd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,t);const l=a*this.direction.dot(Cu.crossVectors(es,Cu));if(l<0)return null;const c=a*this.direction.dot(Rd.cross(es));if(c<0||l+c>o)return null;const u=-a*es.dot(Cd);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,_,g,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,_,g,m)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Zo.setFromMatrixColumn(t,0).length(),s=1/Zo.setFromMatrixColumn(t,1).length(),o=1/Zo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(G2,t,W2)}lookAt(t,e,n){const r=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),ns.crossVectors(n,_i),ns.lengthSq()===0&&(Math.abs(n.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),ns.crossVectors(n,_i)),ns.normalize(),Iu.crossVectors(_i,ns),r[0]=ns.x,r[4]=Iu.x,r[8]=_i.x,r[1]=ns.y,r[5]=Iu.y,r[9]=_i.y,r[2]=ns.z,r[6]=Iu.z,r[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],v=n[7],E=n[11],b=n[15],A=r[0],w=r[4],O=r[8],S=r[12],M=r[1],j=r[5],I=r[9],H=r[13],x=r[2],F=r[6],$=r[10],V=r[14],nt=r[3],X=r[7],N=r[11],D=r[15];return s[0]=o*A+a*M+l*x+c*nt,s[4]=o*w+a*j+l*F+c*X,s[8]=o*O+a*I+l*$+c*N,s[12]=o*S+a*H+l*V+c*D,s[1]=u*A+h*M+f*x+d*nt,s[5]=u*w+h*j+f*F+d*X,s[9]=u*O+h*I+f*$+d*N,s[13]=u*S+h*H+f*V+d*D,s[2]=_*A+g*M+m*x+p*nt,s[6]=_*w+g*j+m*F+p*X,s[10]=_*O+g*I+m*$+p*N,s[14]=_*S+g*H+m*V+p*D,s[3]=y*A+v*M+E*x+b*nt,s[7]=y*w+v*j+E*F+b*X,s[11]=y*O+v*I+E*$+b*N,s[15]=y*S+v*H+E*V+b*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+g*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-e*l*h+e*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,v=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,E=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,b=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,A=e*y+n*v+r*E+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(g*f*s-h*m*s-g*r*d+n*m*d+h*r*p-n*f*p)*w,t[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*p+n*l*p)*w,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*w,t[4]=v*w,t[5]=(u*m*s-_*f*s+_*r*d-e*m*d-u*r*p+e*f*p)*w,t[6]=(_*l*s-o*m*s-_*r*c+e*m*c+o*r*p-e*l*p)*w,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*w,t[8]=E*w,t[9]=(_*h*s-u*g*s-_*n*d+e*g*d+u*n*p-e*h*p)*w,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*w,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*w,t[12]=b*w,t[13]=(u*g*r-_*h*r+_*n*f-e*g*f-u*n*m+e*h*m)*w,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*m-e*a*m)*w,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,y=l*c,v=l*u,E=l*h,b=n.x,A=n.y,w=n.z;return r[0]=(1-(g+p))*b,r[1]=(d+E)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(d-E)*A,r[5]=(1-(f+p))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(_+v)*w,r[9]=(m-y)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Zo.set(r[0],r[1],r[2]).length();const o=Zo.set(r[4],r[5],r[6]).length(),a=Zo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Yi.copy(this);const c=1/s,u=1/o,h=1/a;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=h,Yi.elements[9]*=h,Yi.elements[10]*=h,e.setFromRotationMatrix(Yi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Br){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let d,_;if(a===Br)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Yh)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Br){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(o-s),f=(e+t)*c,d=(n+r)*u;let _,g;if(a===Br)_=(o+s)*h,g=-2*h;else if(a===Yh)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zo=new Y,Yi=new he,G2=new Y(0,0,0),W2=new Y(1,1,1),ns=new Y,Iu=new Y,_i=new Y,my=new he,gy=new Ri;class Pf{constructor(t=0,e=0,n=0,r=Pf.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(An(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-An(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return my.makeRotationFromQuaternion(t),this.setFromRotationMatrix(my,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gy.setFromEuler(this),this.setFromQuaternion(gy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pf.DEFAULT_ORDER="XYZ";class nb{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let X2=0;const _y=new Y,Qo=new Ri,Ar=new he,Pu=new Y,wl=new Y,j2=new Y,q2=new Ri,yy=new Y(1,0,0),vy=new Y(0,1,0),xy=new Y(0,0,1),Y2={type:"added"},$2={type:"removed"};class Ge extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new Y,e=new Pf,n=new Ri,r=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new he},normalMatrix:{value:new ue}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new nb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qo.setFromAxisAngle(t,e),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(t,e){return Qo.setFromAxisAngle(t,e),this.quaternion.premultiply(Qo),this}rotateX(t){return this.rotateOnAxis(yy,t)}rotateY(t){return this.rotateOnAxis(vy,t)}rotateZ(t){return this.rotateOnAxis(xy,t)}translateOnAxis(t,e){return _y.copy(t).applyQuaternion(this.quaternion),this.position.add(_y.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yy,t)}translateY(t){return this.translateOnAxis(vy,t)}translateZ(t){return this.translateOnAxis(xy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pu.copy(t):Pu.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(wl,Pu,this.up):Ar.lookAt(Pu,wl,this.up),this.quaternion.setFromRotationMatrix(Ar),r&&(Ar.extractRotation(r.matrixWorld),Qo.setFromRotationMatrix(Ar),this.quaternion.premultiply(Qo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Y2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($2)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ar.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ar),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,t,j2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,q2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ge.DEFAULT_UP=new Y(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new Y,Mr=new Y,Id=new Y,Rr=new Y,Jo=new Y,ta=new Y,Ey=new Y,Pd=new Y,Dd=new Y,Ld=new Y;let Du=!1;class Ji{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),$i.subVectors(t,e),r.cross($i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){$i.subVectors(r,e),Mr.subVectors(n,e),Id.subVectors(t,e);const o=$i.dot($i),a=$i.dot(Mr),l=$i.dot(Id),c=Mr.dot(Mr),u=Mr.dot(Id),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Rr),Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getUV(t,e,n,r,s,o,a,l){return Du===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Du=!0),this.getInterpolation(t,e,n,r,s,o,a,l)}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Rr),l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l}static isFrontFacing(t,e,n,r){return $i.subVectors(n,e),Mr.subVectors(t,e),$i.cross(Mr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $i.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),$i.cross(Mr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ji.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return Du===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Du=!0),Ji.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return Ji.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Jo.subVectors(r,n),ta.subVectors(s,n),Pd.subVectors(t,n);const l=Jo.dot(Pd),c=ta.dot(Pd);if(l<=0&&c<=0)return e.copy(n);Dd.subVectors(t,r);const u=Jo.dot(Dd),h=ta.dot(Dd);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Jo,o);Ld.subVectors(t,s);const d=Jo.dot(Ld),_=ta.dot(Ld);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ta,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Ey.subVectors(s,r),a=(h-u)/(h-u+(d-_)),e.copy(r).addScaledVector(Ey,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(Jo,o).addScaledVector(ta,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let K2=0;class mr extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Pa,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=OS,this.blendDst=US,this.blendEquation=da,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xd,this.stencilZFail=xd,this.stencilZPass=xd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pa&&(n.blending=this.blending),this.side!==$r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ib={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function Nd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=be.workingColorSpace){if(t=Ug(t,1),e=An(e,0,1),n=An(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Nd(o,s,t+1/3),this.g=Nd(o,s,t),this.b=Nd(o,s,t-1/3)}return be.toWorkingColorSpace(this,r),this}setStyle(t,e=We){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=ib[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=Td(t.r),this.g=Td(t.g),this.b=Td(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return be.fromWorkingColorSpace(Nn.copy(this),t),Math.round(An(Nn.r*255,0,255))*65536+Math.round(An(Nn.g*255,0,255))*256+Math.round(An(Nn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(Nn.copy(this),e);const n=Nn.r,r=Nn.g,s=Nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=We){be.fromWorkingColorSpace(Nn.copy(this),t);const e=Nn.r,n=Nn.g,r=Nn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(Lu);const n=nc(is.h,Lu.h,e),r=nc(is.s,Lu.s,e),s=nc(is.l,Lu.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new se;se.NAMES=ib;class ro extends mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new Y,Nu=new Zt;class oi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nm,this.updateRange={offset:0,count:-1},this.gpuType=Fr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nu.fromBufferAttribute(this,e),Nu.applyMatrix3(t),this.setXY(e,Nu.x,Nu.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=lr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nm&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class rb extends oi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sb extends oi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wr extends oi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Z2=0;const Pi=new he,Od=new Ge,ea=new Y,yi=new Zr,Al=new Zr,an=new Y;class Er extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z2++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(QS(t)?sb:rb)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ue().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,n){return Pi.makeTranslation(t,e,n),this.applyMatrix4(Pi),this}scale(t,e,n){return Pi.makeScale(t,e,n),this.applyMatrix4(Pi),this}lookAt(t){return Od.lookAt(t),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Al.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(yi.min,Al.min),yi.expandByPoint(an),an.addVectors(yi.max,Al.max),yi.expandByPoint(an)):(yi.expandByPoint(Al.min),yi.expandByPoint(Al.max))}yi.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)an.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(an));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(ea.fromBufferAttribute(t,c),an.add(ea)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new Y,u[M]=new Y;const h=new Y,f=new Y,d=new Y,_=new Zt,g=new Zt,m=new Zt,p=new Y,y=new Y;function v(M,j,I){h.fromArray(r,M*3),f.fromArray(r,j*3),d.fromArray(r,I*3),_.fromArray(o,M*2),g.fromArray(o,j*2),m.fromArray(o,I*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const H=1/(g.x*m.y-m.x*g.y);isFinite(H)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(H),y.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(H),c[M].add(p),c[j].add(p),c[I].add(p),u[M].add(y),u[j].add(y),u[I].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let M=0,j=E.length;M<j;++M){const I=E[M],H=I.start,x=I.count;for(let F=H,$=H+x;F<$;F+=3)v(n[F+0],n[F+1],n[F+2])}const b=new Y,A=new Y,w=new Y,O=new Y;function S(M){w.fromArray(s,M*3),O.copy(w);const j=c[M];b.copy(j),b.sub(w.multiplyScalar(w.dot(j))).normalize(),A.crossVectors(O,j);const H=A.dot(u[M])<0?-1:1;l[M*4]=b.x,l[M*4+1]=b.y,l[M*4+2]=b.z,l[M*4+3]=H}for(let M=0,j=E.length;M<j;++M){const I=E[M],H=I.start,x=I.count;for(let F=H,$=H+x;F<$;F+=3)S(n[F+0]),S(n[F+1]),S(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new oi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new oi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Er,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ty=new he,Hs=new $c,Ou=new xr,Sy=new Y,na=new Y,ia=new Y,ra=new Y,Ud=new Y,Uu=new Y,ku=new Zt,Fu=new Zt,Bu=new Zt,by=new Y,wy=new Y,Ay=new Y,Vu=new Y,zu=new Y;class Xi extends Ge{constructor(t=new Er,e=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Uu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ud.fromBufferAttribute(h,t),o?Uu.addScaledVector(Ud,u):Uu.addScaledVector(Ud.sub(e),u))}e.add(Uu)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ou.copy(n.boundingSphere),Ou.applyMatrix4(s),Hs.copy(t.ray).recast(t.near),!(Ou.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Ou,Sy)===null||Hs.origin.distanceToSquared(Sy)>(t.far-t.near)**2))&&(Ty.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Ty),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hs)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,b=v;E<b;E+=3){const A=a.getX(E),w=a.getX(E+1),O=a.getX(E+2);r=Hu(this,p,t,n,c,u,h,A,w,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);r=Hu(this,o,t,n,c,u,h,y,v,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,b=v;E<b;E+=3){const A=E,w=E+1,O=E+2;r=Hu(this,p,t,n,c,u,h,A,w,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=m,v=m+1,E=m+2;r=Hu(this,o,t,n,c,u,h,y,v,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Q2(i,t,e,n,r,s,o,a){let l;if(t.side===di?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===$r,a),l===null)return null;zu.copy(a),zu.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zu);return c<e.near||c>e.far?null:{distance:c,point:zu.clone(),object:i}}function Hu(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,na),i.getVertexPosition(l,ia),i.getVertexPosition(c,ra);const u=Q2(i,t,e,n,na,ia,ra,Vu);if(u){r&&(ku.fromBufferAttribute(r,a),Fu.fromBufferAttribute(r,l),Bu.fromBufferAttribute(r,c),u.uv=Ji.getInterpolation(Vu,na,ia,ra,ku,Fu,Bu,new Zt)),s&&(ku.fromBufferAttribute(s,a),Fu.fromBufferAttribute(s,l),Bu.fromBufferAttribute(s,c),u.uv1=Ji.getInterpolation(Vu,na,ia,ra,ku,Fu,Bu,new Zt),u.uv2=u.uv1),o&&(by.fromBufferAttribute(o,a),wy.fromBufferAttribute(o,l),Ay.fromBufferAttribute(o,c),u.normal=Ji.getInterpolation(Vu,na,ia,ra,by,wy,Ay,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};Ji.getNormal(na,ia,ra,h.normal),u.face=h}return u}class Kc extends Er{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Wr(c,3)),this.setAttribute("normal",new Wr(u,3)),this.setAttribute("uv",new Wr(h,2));function _(g,m,p,y,v,E,b,A,w,O,S){const M=E/w,j=b/O,I=E/2,H=b/2,x=A/2,F=w+1,$=O+1;let V=0,nt=0;const X=new Y;for(let N=0;N<$;N++){const D=N*j-H;for(let k=0;k<F;k++){const ct=k*M-I;X[g]=ct*y,X[m]=D*v,X[p]=x,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[p]=A>0?1:-1,u.push(X.x,X.y,X.z),h.push(k/w),h.push(1-N/O),V+=1}}for(let N=0;N<O;N++)for(let D=0;D<w;D++){const k=f+D+F*N,ct=f+D+F*(N+1),rt=f+(D+1)+F*(N+1),it=f+(D+1)+F*N;l.push(k,ct,it),l.push(ct,rt,it),nt+=6}a.addGroup(d,nt,S),d+=nt,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tl(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Zn(i){const t={};for(let e=0;e<i.length;e++){const n=tl(i[e]);for(const r in n)t[r]=n[r]}return t}function J2(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ob(i){return i.getRenderTarget()===null?i.outputColorSpace:be.workingColorSpace}const tD={clone:tl,merge:Zn};var eD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lo extends mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eD,this.fragmentShader=nD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tl(t.uniforms),this.uniformsGroups=J2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ab extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Br}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ei extends ab{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ec*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sa=-90,oa=1;class iD extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ei(sa,oa,t,e);r.layers=this.layers,this.add(r);const s=new ei(sa,oa,t,e);s.layers=this.layers,this.add(s);const o=new ei(sa,oa,t,e);o.layers=this.layers,this.add(o);const a=new ei(sa,oa,t,e);a.layers=this.layers,this.add(a);const l=new ei(sa,oa,t,e);l.layers=this.layers,this.add(l);const c=new ei(sa,oa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Br)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class lb extends In{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ya,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rD extends Do{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(ic("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Eo?We:zi),this.texture=new lb(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kc(5,5,5),s=new Lo({name:"CubemapFromEquirect",uniforms:tl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:di,blending:Ts});s.uniforms.tEquirect.value=e;const o=new Xi(r,s),a=e.minFilter;return e.minFilter===Po&&(e.minFilter=li),new iD(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const kd=new Y,sD=new Y,oD=new ue;class os{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=kd.subVectors(n,e).cross(sD.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(kd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oD.getNormalMatrix(t),r=this.coplanarPoint(kd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new xr,Gu=new Y;class kg{constructor(t=new os,e=new os,n=new os,r=new os,s=new os,o=new os){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Br){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],y=r[13],v=r[14],E=r[15];if(n[0].setComponents(l-s,f-c,m-d,E-p).normalize(),n[1].setComponents(l+s,f+c,m+d,E+p).normalize(),n[2].setComponents(l+o,f+u,m+_,E+y).normalize(),n[3].setComponents(l-o,f-u,m-_,E-y).normalize(),n[4].setComponents(l-a,f-h,m-g,E-v).normalize(),e===Br)n[5].setComponents(l+a,f+h,m+g,E+v).normalize();else if(e===Yh)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Gu.x=r.normal.x>0?t.max.x:t.min.x,Gu.y=r.normal.y>0?t.max.y:t.min.y,Gu.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cb(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function aD(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(e?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Fg extends Er{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let v=0;v<c;v++){const E=v*h-s;_.push(E,-y,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,E=y+c*(p+1),b=y+1+c*(p+1),A=y+1+c*p;d.push(v,E,A),d.push(E,b,A)}this.setIndex(d),this.setAttribute("position",new Wr(_,3)),this.setAttribute("normal",new Wr(g,3)),this.setAttribute("uv",new Wr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fg(t.width,t.height,t.widthSegments,t.heightSegments)}}var lD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cD=`#ifdef USE_ALPHAHASH
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
#endif`,uD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fD=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_D=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vD=`#ifdef USE_IRIDESCENCE
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
#endif`,xD=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ED=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,TD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,RD=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,CD=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,ID=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,PD=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ND=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UD="gl_FragColor = linearToOutputTexel( gl_FragColor );",kD=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,FD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VD=`#ifdef USE_ENVMAP
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
#endif`,zD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qD=`#ifdef USE_GRADIENTMAP
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
}`,YD=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$D=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QD=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,JD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,tL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,sL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gL=`#if defined( USE_POINTS_UV )
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
#endif`,_L=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vL=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,EL=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,TL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,SL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ML=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RL=`#ifdef USE_NORMALMAP
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
#endif`,CL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,HL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,WL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,qL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YL=`#ifdef USE_SKINNING
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
#endif`,$L=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QL=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JL=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tN=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oN=`uniform sampler2D t2D;
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
}`,aN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hN=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fN=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,pN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_N=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yN=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vN=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,xN=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,EN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,TN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,SN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,bN=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,RN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,CN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,IN=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PN=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,DN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,LN=`uniform float size;
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
}`,NN=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ON=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,UN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,kN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,FN=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,re={alphahash_fragment:lD,alphahash_pars_fragment:cD,alphamap_fragment:uD,alphamap_pars_fragment:hD,alphatest_fragment:fD,alphatest_pars_fragment:dD,aomap_fragment:pD,aomap_pars_fragment:mD,begin_vertex:gD,beginnormal_vertex:_D,bsdfs:yD,iridescence_fragment:vD,bumpmap_pars_fragment:xD,clipping_planes_fragment:ED,clipping_planes_pars_fragment:TD,clipping_planes_pars_vertex:SD,clipping_planes_vertex:bD,color_fragment:wD,color_pars_fragment:AD,color_pars_vertex:MD,color_vertex:RD,common:CD,cube_uv_reflection_fragment:ID,defaultnormal_vertex:PD,displacementmap_pars_vertex:DD,displacementmap_vertex:LD,emissivemap_fragment:ND,emissivemap_pars_fragment:OD,colorspace_fragment:UD,colorspace_pars_fragment:kD,envmap_fragment:FD,envmap_common_pars_fragment:BD,envmap_pars_fragment:VD,envmap_pars_vertex:zD,envmap_physical_pars_fragment:JD,envmap_vertex:HD,fog_vertex:GD,fog_pars_vertex:WD,fog_fragment:XD,fog_pars_fragment:jD,gradientmap_pars_fragment:qD,lightmap_fragment:YD,lightmap_pars_fragment:$D,lights_lambert_fragment:KD,lights_lambert_pars_fragment:ZD,lights_pars_begin:QD,lights_toon_fragment:tL,lights_toon_pars_fragment:eL,lights_phong_fragment:nL,lights_phong_pars_fragment:iL,lights_physical_fragment:rL,lights_physical_pars_fragment:sL,lights_fragment_begin:oL,lights_fragment_maps:aL,lights_fragment_end:lL,logdepthbuf_fragment:cL,logdepthbuf_pars_fragment:uL,logdepthbuf_pars_vertex:hL,logdepthbuf_vertex:fL,map_fragment:dL,map_pars_fragment:pL,map_particle_fragment:mL,map_particle_pars_fragment:gL,metalnessmap_fragment:_L,metalnessmap_pars_fragment:yL,morphcolor_vertex:vL,morphnormal_vertex:xL,morphtarget_pars_vertex:EL,morphtarget_vertex:TL,normal_fragment_begin:SL,normal_fragment_maps:bL,normal_pars_fragment:wL,normal_pars_vertex:AL,normal_vertex:ML,normalmap_pars_fragment:RL,clearcoat_normal_fragment_begin:CL,clearcoat_normal_fragment_maps:IL,clearcoat_pars_fragment:PL,iridescence_pars_fragment:DL,opaque_fragment:LL,packing:NL,premultiplied_alpha_fragment:OL,project_vertex:UL,dithering_fragment:kL,dithering_pars_fragment:FL,roughnessmap_fragment:BL,roughnessmap_pars_fragment:VL,shadowmap_pars_fragment:zL,shadowmap_pars_vertex:HL,shadowmap_vertex:GL,shadowmask_pars_fragment:WL,skinbase_vertex:XL,skinning_pars_vertex:jL,skinning_vertex:qL,skinnormal_vertex:YL,specularmap_fragment:$L,specularmap_pars_fragment:KL,tonemapping_fragment:ZL,tonemapping_pars_fragment:QL,transmission_fragment:JL,transmission_pars_fragment:tN,uv_pars_fragment:eN,uv_pars_vertex:nN,uv_vertex:iN,worldpos_vertex:rN,background_vert:sN,background_frag:oN,backgroundCube_vert:aN,backgroundCube_frag:lN,cube_vert:cN,cube_frag:uN,depth_vert:hN,depth_frag:fN,distanceRGBA_vert:dN,distanceRGBA_frag:pN,equirect_vert:mN,equirect_frag:gN,linedashed_vert:_N,linedashed_frag:yN,meshbasic_vert:vN,meshbasic_frag:xN,meshlambert_vert:EN,meshlambert_frag:TN,meshmatcap_vert:SN,meshmatcap_frag:bN,meshnormal_vert:wN,meshnormal_frag:AN,meshphong_vert:MN,meshphong_frag:RN,meshphysical_vert:CN,meshphysical_frag:IN,meshtoon_vert:PN,meshtoon_frag:DN,points_vert:LN,points_frag:NN,shadow_vert:ON,shadow_frag:UN,sprite_vert:kN,sprite_frag:FN},It={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},rr={basic:{uniforms:Zn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Zn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new se(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Zn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Zn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Zn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new se(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Zn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Zn([It.points,It.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Zn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Zn([It.common,It.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Zn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Zn([It.sprite,It.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Zn([It.common,It.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Zn([It.lights,It.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};rr.physical={uniforms:Zn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const Wu={r:0,b:0,g:0};function BN(i,t,e,n,r,s,o){const a=new se(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cf)?(u===void 0&&(u=new Xi(new Kc(1,1,1),new Lo({name:"BackgroundCubeMaterial",uniforms:tl(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=be.getTransfer(v.colorSpace)!==Ne,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xi(new Fg(2,2),new Lo({name:"BackgroundMaterial",uniforms:tl(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=be.getTransfer(v.colorSpace)!==Ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Wu,ob(i)),n.buffers.color.setClear(Wu.r,Wu.g,Wu.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function VN(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(x,F,$,V,nt){let X=!1;if(o){const N=g(V,$,F);c!==N&&(c=N,d(c.object)),X=p(x,V,$,nt),X&&y(x,V,$,nt)}else{const N=F.wireframe===!0;(c.geometry!==V.id||c.program!==$.id||c.wireframe!==N)&&(c.geometry=V.id,c.program=$.id,c.wireframe=N,X=!0)}nt!==null&&e.update(nt,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,O(x,F,$,V),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(x){return n.isWebGL2?i.bindVertexArray(x):s.bindVertexArrayOES(x)}function _(x){return n.isWebGL2?i.deleteVertexArray(x):s.deleteVertexArrayOES(x)}function g(x,F,$){const V=$.wireframe===!0;let nt=a[x.id];nt===void 0&&(nt={},a[x.id]=nt);let X=nt[F.id];X===void 0&&(X={},nt[F.id]=X);let N=X[V];return N===void 0&&(N=m(f()),X[V]=N),N}function m(x){const F=[],$=[],V=[];for(let nt=0;nt<r;nt++)F[nt]=0,$[nt]=0,V[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,F,$,V){const nt=c.attributes,X=F.attributes;let N=0;const D=$.getAttributes();for(const k in D)if(D[k].location>=0){const rt=nt[k];let it=X[k];if(it===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),rt===void 0||rt.attribute!==it||it&&rt.data!==it.data)return!0;N++}return c.attributesNum!==N||c.index!==V}function y(x,F,$,V){const nt={},X=F.attributes;let N=0;const D=$.getAttributes();for(const k in D)if(D[k].location>=0){let rt=X[k];rt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const it={};it.attribute=rt,rt&&rt.data&&(it.data=rt.data),nt[k]=it,N++}c.attributes=nt,c.attributesNum=N,c.index=V}function v(){const x=c.newAttributes;for(let F=0,$=x.length;F<$;F++)x[F]=0}function E(x){b(x,0)}function b(x,F){const $=c.newAttributes,V=c.enabledAttributes,nt=c.attributeDivisors;$[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),nt[x]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](x,F),nt[x]=F)}function A(){const x=c.newAttributes,F=c.enabledAttributes;for(let $=0,V=F.length;$<V;$++)F[$]!==x[$]&&(i.disableVertexAttribArray($),F[$]=0)}function w(x,F,$,V,nt,X,N){N===!0?i.vertexAttribIPointer(x,F,$,nt,X):i.vertexAttribPointer(x,F,$,V,nt,X)}function O(x,F,$,V){if(n.isWebGL2===!1&&(x.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const nt=V.attributes,X=$.getAttributes(),N=F.defaultAttributeValues;for(const D in X){const k=X[D];if(k.location>=0){let ct=nt[D];if(ct===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),ct!==void 0){const rt=ct.normalized,it=ct.itemSize,bt=e.get(ct);if(bt===void 0)continue;const wt=bt.buffer,mt=bt.type,At=bt.bytesPerElement,Kt=n.isWebGL2===!0&&(mt===i.INT||mt===i.UNSIGNED_INT||ct.gpuType===zS);if(ct.isInterleavedBufferAttribute){const Rt=ct.data,Z=Rt.stride,Bt=ct.offset;if(Rt.isInstancedInterleavedBuffer){for(let T=0;T<k.locationSize;T++)b(k.location+T,Rt.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let T=0;T<k.locationSize;T++)E(k.location+T);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let T=0;T<k.locationSize;T++)w(k.location+T,it/k.locationSize,mt,rt,Z*At,(Bt+it/k.locationSize*T)*At,Kt)}else{if(ct.isInstancedBufferAttribute){for(let Rt=0;Rt<k.locationSize;Rt++)b(k.location+Rt,ct.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Rt=0;Rt<k.locationSize;Rt++)E(k.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let Rt=0;Rt<k.locationSize;Rt++)w(k.location+Rt,it/k.locationSize,mt,rt,it*At,it/k.locationSize*Rt*At,Kt)}}else if(N!==void 0){const rt=N[D];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(k.location,rt);break;case 3:i.vertexAttrib3fv(k.location,rt);break;case 4:i.vertexAttrib4fv(k.location,rt);break;default:i.vertexAttrib1fv(k.location,rt)}}}}A()}function S(){I();for(const x in a){const F=a[x];for(const $ in F){const V=F[$];for(const nt in V)_(V[nt].object),delete V[nt];delete F[$]}delete a[x]}}function M(x){if(a[x.id]===void 0)return;const F=a[x.id];for(const $ in F){const V=F[$];for(const nt in V)_(V[nt].object),delete V[nt];delete F[$]}delete a[x.id]}function j(x){for(const F in a){const $=a[F];if($[x.id]===void 0)continue;const V=$[x.id];for(const nt in V)_(V[nt].object),delete V[nt];delete $[x.id]}}function I(){H(),u=!0,c!==l&&(c=l,d(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:H,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:j,initAttributes:v,enableAttribute:E,disableUnusedAttributes:A}}function zN(i,t,e,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function HN(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||t.has("OES_texture_float"),b=v&&E,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:A}}function GN(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new os,a=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,v=y*4;let E=p.clippingState||null;l.value=E,E=u(_,f,v,d);for(let b=0;b!==v;++b)E[b]=e[b];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,E=d;v!==g;++v,E+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function WN(i){let t=new WeakMap;function e(o,a){return a===Qp?o.mapping=Ya:a===Jp&&(o.mapping=$a),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qp||a===Jp)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rD(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Bg extends ab{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ea=4,My=[.125,.215,.35,.446,.526,.582],Ks=20,Fd=new Bg,Ry=new se;let Bd=null;const $s=(1+Math.sqrt(5))/2,aa=1/$s,Cy=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,$s,aa),new Y(0,$s,-aa),new Y(aa,0,$s),new Y(-aa,0,$s),new Y($s,aa,0),new Y(-$s,aa,0)];class Iy{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Bd=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ly(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bd),t.scissorTest=!1,Xu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ya||t.mapping===$a?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bd=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Dc,format:Vi,colorSpace:Pn,depthBuffer:!1},r=Py(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Py(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XN(s)),this._blurMaterial=jN(s,t,e)}return r}_compileMaterial(t){const e=new Xi(this._lodPlanes[0],t);this._renderer.compile(e,Fd)}_sceneToCubeUV(t,e,n,r){const a=new ei(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ry),u.toneMapping=Ss,u.autoClear=!1;const d=new ro({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1}),_=new Xi(new Kc,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Ry),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Xu(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ya||t.mapping===$a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ly()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dy());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xu(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fd)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cy[(r-1)%Cy.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xi(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ks-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ks;m>Ks&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);const p=[];let y=0;for(let w=0;w<Ks;++w){const O=w/g,S=Math.exp(-O*O/2);p.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const E=this._sizeLods[r],b=3*E*(r>v-Ea?r-v+Ea:0),A=4*(this._cubeSize-E);Xu(e,b,A,3*E,2*E),l.setRenderTarget(e),l.render(h,Fd)}}function XN(i){const t=[],e=[],n=[];let r=i;const s=i-Ea+1+My.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ea?l=My[o-i+Ea-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),v=new Float32Array(m*_*d),E=new Float32Array(p*_*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,O=A>2?0:-1,S=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];y.set(S,g*_*A),v.set(f,m*_*A);const M=[A,A,A,A,A,A];E.set(M,p*_*A)}const b=new Er;b.setAttribute("position",new oi(y,g)),b.setAttribute("uv",new oi(v,m)),b.setAttribute("faceIndex",new oi(E,p)),t.push(b),r>Ea&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Py(i,t,e){const n=new Do(i,t,e);return n.texture.mapping=Cf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xu(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function jN(i,t,e){const n=new Float32Array(Ks),r=new Y(0,1,0);return new Lo({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Dy(){return new Lo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vg(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Ly(){return new Lo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Vg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qN(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qp||l===Jp,u=l===Ya||l===$a;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Iy(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new Iy(i));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function YN(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $N(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let v=0,E=y.length;v<E;v+=3){const b=y[v+0],A=y[v+1],w=y[v+2];f.push(b,A,A,w,w,b)}}else if(_!==void 0){const y=_.array;g=_.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const b=v+0,A=v+1,w=v+2;f.push(b,A,A,w,w,b)}}else return;const m=new(QS(f)?sb:rb)(f,1);m.version=g;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function KN(i,t,e,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),e.update(d,s,1)}function h(f,d,_){if(_===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,d,a,f*l,_),e.update(d,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function ZN(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function QN(i,t){return i[0]-t[0]}function JN(i,t){return Math.abs(t[1])-Math.abs(i[1])}function tO(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ce,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let F=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var d=F;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),b===!0&&(S=3);let M=u.attributes.position.count*S,j=1;M>t.maxTextureSize&&(j=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const I=new Float32Array(M*j*4*g),H=new eb(I,M,j,g);H.type=Fr,H.needsUpdate=!0;const x=S*4;for(let $=0;$<g;$++){const V=A[$],nt=w[$],X=O[$],N=M*j*4*$;for(let D=0;D<V.count;D++){const k=D*x;v===!0&&(o.fromBufferAttribute(V,D),I[N+k+0]=o.x,I[N+k+1]=o.y,I[N+k+2]=o.z,I[N+k+3]=0),E===!0&&(o.fromBufferAttribute(nt,D),I[N+k+4]=o.x,I[N+k+5]=o.y,I[N+k+6]=o.z,I[N+k+7]=0),b===!0&&(o.fromBufferAttribute(X,D),I[N+k+8]=o.x,I[N+k+9]=o.y,I[N+k+10]=o.z,I[N+k+11]=X.itemSize===4?o.w:1)}}m={count:g,texture:H,size:new Zt(M,j)},s.set(u,m),u.addEventListener("dispose",F)}let p=0;for(let v=0;v<f.length;v++)p+=f[v];const y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];n[u.id]=g}for(let E=0;E<_;E++){const b=g[E];b[0]=E,b[1]=f[E]}g.sort(JN);for(let E=0;E<8;E++)E<_&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(QN);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let E=0;E<8;E++){const b=a[E],A=b[0],w=b[1];A!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+E)!==m[A]&&u.setAttribute("morphTarget"+E,m[A]),p&&u.getAttribute("morphNormal"+E)!==p[A]&&u.setAttribute("morphNormal"+E,p[A]),r[E]=w,y+=w):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),p&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function eO(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const ub=new In,hb=new eb,fb=new z2,db=new lb,Ny=[],Oy=[],Uy=new Float32Array(16),ky=new Float32Array(9),Fy=new Float32Array(4);function ul(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ny[r];if(s===void 0&&(s=new Float32Array(r),Ny[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Df(i,t){let e=Oy[t];e===void 0&&(e=new Int32Array(t),Oy[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nO(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function iO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function rO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function sO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function oO(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Fy.set(n),i.uniformMatrix2fv(this.addr,!1,Fy),on(e,n)}}function aO(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;ky.set(n),i.uniformMatrix3fv(this.addr,!1,ky),on(e,n)}}function lO(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Uy.set(n),i.uniformMatrix4fv(this.addr,!1,Uy),on(e,n)}}function cO(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function uO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function hO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function fO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function dO(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function mO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function gO(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function _O(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||ub,r)}function yO(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||fb,r)}function vO(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||db,r)}function xO(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||hb,r)}function EO(i){switch(i){case 5126:return nO;case 35664:return iO;case 35665:return rO;case 35666:return sO;case 35674:return oO;case 35675:return aO;case 35676:return lO;case 5124:case 35670:return cO;case 35667:case 35671:return uO;case 35668:case 35672:return hO;case 35669:case 35673:return fO;case 5125:return dO;case 36294:return pO;case 36295:return mO;case 36296:return gO;case 35678:case 36198:case 36298:case 36306:case 35682:return _O;case 35679:case 36299:case 36307:return yO;case 35680:case 36300:case 36308:case 36293:return vO;case 36289:case 36303:case 36311:case 36292:return xO}}function TO(i,t){i.uniform1fv(this.addr,t)}function SO(i,t){const e=ul(t,this.size,2);i.uniform2fv(this.addr,e)}function bO(i,t){const e=ul(t,this.size,3);i.uniform3fv(this.addr,e)}function wO(i,t){const e=ul(t,this.size,4);i.uniform4fv(this.addr,e)}function AO(i,t){const e=ul(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function MO(i,t){const e=ul(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function RO(i,t){const e=ul(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function CO(i,t){i.uniform1iv(this.addr,t)}function IO(i,t){i.uniform2iv(this.addr,t)}function PO(i,t){i.uniform3iv(this.addr,t)}function DO(i,t){i.uniform4iv(this.addr,t)}function LO(i,t){i.uniform1uiv(this.addr,t)}function NO(i,t){i.uniform2uiv(this.addr,t)}function OO(i,t){i.uniform3uiv(this.addr,t)}function UO(i,t){i.uniform4uiv(this.addr,t)}function kO(i,t,e){const n=this.cache,r=t.length,s=Df(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ub,s[o])}function FO(i,t,e){const n=this.cache,r=t.length,s=Df(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||fb,s[o])}function BO(i,t,e){const n=this.cache,r=t.length,s=Df(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||db,s[o])}function VO(i,t,e){const n=this.cache,r=t.length,s=Df(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||hb,s[o])}function zO(i){switch(i){case 5126:return TO;case 35664:return SO;case 35665:return bO;case 35666:return wO;case 35674:return AO;case 35675:return MO;case 35676:return RO;case 5124:case 35670:return CO;case 35667:case 35671:return IO;case 35668:case 35672:return PO;case 35669:case 35673:return DO;case 5125:return LO;case 36294:return NO;case 36295:return OO;case 36296:return UO;case 35678:case 36198:case 36298:case 36306:case 35682:return kO;case 35679:case 36299:case 36307:return FO;case 35680:case 36300:case 36308:case 36293:return BO;case 36289:case 36303:case 36311:case 36292:return VO}}class HO{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=EO(e.type)}}class GO{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=zO(e.type)}}class WO{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function By(i,t){i.seq.push(t),i.map[t.id]=t}function XO(i,t,e){const n=i.name,r=n.length;for(Vd.lastIndex=0;;){const s=Vd.exec(n),o=Vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){By(e,c===void 0?new HO(a,i,t):new GO(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new WO(a),By(e,h)),e=h}}}class hh{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);XO(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Vy(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let jO=0;function qO(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function YO(i){const t=be.getPrimaries(be.workingColorSpace),e=be.getPrimaries(i);let n;switch(t===e?n="":t===qh&&e===jh?n="LinearDisplayP3ToLinearSRGB":t===jh&&e===qh&&(n="LinearSRGBToLinearDisplayP3"),i){case Pn:case If:return[n,"LinearTransferOETF"];case We:case Og:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zy(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+qO(i.getShaderSource(t),o)}else return r}function $O(i,t){const e=YO(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function KO(i,t){let e;switch(t){case qP:e="Linear";break;case YP:e="Reinhard";break;case $P:e="OptimizedCineon";break;case FS:e="ACESFilmic";break;case KP:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ZO(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fl).join(`
`)}function QO(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function JO(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fl(i){return i!==""}function Hy(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gy(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tU=/^[ \t]*#include +<([\w\d./]+)>/gm;function sm(i){return i.replace(tU,nU)}const eU=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nU(i,t){let e=re[t];if(e===void 0){const n=eU.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sm(e)}const iU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wy(i){return i.replace(iU,rU)}function rU(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xy(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sU(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===NS?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wP?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ir&&(t="SHADOWMAP_TYPE_VSM"),t}function oU(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ya:case $a:t="ENVMAP_TYPE_CUBE";break;case Cf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aU(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $a:t="ENVMAP_MODE_REFRACTION";break}return t}function lU(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kS:t="ENVMAP_BLENDING_MULTIPLY";break;case XP:t="ENVMAP_BLENDING_MIX";break;case jP:t="ENVMAP_BLENDING_ADD";break}return t}function cU(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function uU(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=sU(e),c=oU(e),u=aU(e),h=lU(e),f=cU(e),d=e.isWebGL2?"":ZO(e),_=QO(s),g=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fl).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fl).join(`
`),p.length>0&&(p+=`
`)):(m=[Xy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),p=[d,Xy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ss?"#define TONE_MAPPING":"",e.toneMapping!==Ss?re.tonemapping_pars_fragment:"",e.toneMapping!==Ss?KO("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,$O("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fl).join(`
`)),o=sm(o),o=Hy(o,e),o=Gy(o,e),a=sm(a),a=Hy(a,e),a=Gy(a,e),o=Wy(o),a=Wy(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cy?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,E=y+p+a,b=Vy(r,r.VERTEX_SHADER,v),A=Vy(r,r.FRAGMENT_SHADER,E);if(r.attachShader(g,b),r.attachShader(g,A),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(g).trim(),M=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(A).trim();let I=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,b,A);else{const x=zy(r,b,"vertex"),F=zy(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+x+`
`+F)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(M===""||j==="")&&(H=!1);H&&(this.diagnostics={runnable:I,programLog:S,vertexShader:{log:M,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(b),r.deleteShader(A);let w;this.getUniforms=function(){return w===void 0&&(w=new hh(r,g)),w};let O;return this.getAttributes=function(){return O===void 0&&(O=JO(r,g)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jO++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}let hU=0;class fU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dU(t),e.set(t,n)),n}}class dU{constructor(t){this.id=hU++,this.code=t,this.usedTimes=0}}function pU(i,t,e,n,r,s,o){const a=new nb,l=new fU,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,M,j,I,H){const x=I.fog,F=H.geometry,$=S.isMeshStandardMaterial?I.environment:null,V=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),nt=V&&V.mapping===Cf?V.image.height:null,X=_[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,D=N!==void 0?N.length:0;let k=0;F.morphAttributes.position!==void 0&&(k=1),F.morphAttributes.normal!==void 0&&(k=2),F.morphAttributes.color!==void 0&&(k=3);let ct,rt,it,bt;if(X){const Pt=rr[X];ct=Pt.vertexShader,rt=Pt.fragmentShader}else ct=S.vertexShader,rt=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),bt=l.getFragmentShaderID(S);const wt=i.getRenderTarget(),mt=H.isInstancedMesh===!0,At=!!S.map,Kt=!!S.matcap,Rt=!!V,Z=!!S.aoMap,Bt=!!S.lightMap,T=!!S.bumpMap,Q=!!S.normalMap,q=!!S.displacementMap,R=!!S.emissiveMap,L=!!S.metalnessMap,W=!!S.roughnessMap,ot=S.anisotropy>0,at=S.clearcoat>0,K=S.iridescence>0,P=S.sheen>0,C=S.transmission>0,z=ot&&!!S.anisotropyMap,tt=at&&!!S.clearcoatMap,ut=at&&!!S.clearcoatNormalMap,ht=at&&!!S.clearcoatRoughnessMap,Mt=K&&!!S.iridescenceMap,_t=K&&!!S.iridescenceThicknessMap,xt=P&&!!S.sheenColorMap,G=P&&!!S.sheenRoughnessMap,dt=!!S.specularMap,ft=!!S.specularColorMap,Xt=!!S.specularIntensityMap,Lt=C&&!!S.transmissionMap,Vt=C&&!!S.thicknessMap,Nt=!!S.gradientMap,B=!!S.alphaMap,Tt=S.alphaTest>0,gt=!!S.alphaHash,Et=!!S.extensions,yt=!!F.attributes.uv1,pt=!!F.attributes.uv2,kt=!!F.attributes.uv3;let jt=Ss;return S.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(jt=i.toneMapping),{isWebGL2:u,shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:rt,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:bt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:mt,instancingColor:mt&&H.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Pn,map:At,matcap:Kt,envMap:Rt,envMapMode:Rt&&V.mapping,envMapCubeUVHeight:nt,aoMap:Z,lightMap:Bt,bumpMap:T,normalMap:Q,displacementMap:f&&q,emissiveMap:R,normalMapObjectSpace:Q&&S.normalMapType===d2,normalMapTangentSpace:Q&&S.normalMapType===$S,metalnessMap:L,roughnessMap:W,anisotropy:ot,anisotropyMap:z,clearcoat:at,clearcoatMap:tt,clearcoatNormalMap:ut,clearcoatRoughnessMap:ht,iridescence:K,iridescenceMap:Mt,iridescenceThicknessMap:_t,sheen:P,sheenColorMap:xt,sheenRoughnessMap:G,specularMap:dt,specularColorMap:ft,specularIntensityMap:Xt,transmission:C,transmissionMap:Lt,thicknessMap:Vt,gradientMap:Nt,opaque:S.transparent===!1&&S.blending===Pa,alphaMap:B,alphaTest:Tt,alphaHash:gt,combine:S.combine,mapUv:At&&g(S.map.channel),aoMapUv:Z&&g(S.aoMap.channel),lightMapUv:Bt&&g(S.lightMap.channel),bumpMapUv:T&&g(S.bumpMap.channel),normalMapUv:Q&&g(S.normalMap.channel),displacementMapUv:q&&g(S.displacementMap.channel),emissiveMapUv:R&&g(S.emissiveMap.channel),metalnessMapUv:L&&g(S.metalnessMap.channel),roughnessMapUv:W&&g(S.roughnessMap.channel),anisotropyMapUv:z&&g(S.anisotropyMap.channel),clearcoatMapUv:tt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:G&&g(S.sheenRoughnessMap.channel),specularMapUv:dt&&g(S.specularMap.channel),specularColorMapUv:ft&&g(S.specularColorMap.channel),specularIntensityMapUv:Xt&&g(S.specularIntensityMap.channel),transmissionMapUv:Lt&&g(S.transmissionMap.channel),thicknessMapUv:Vt&&g(S.thicknessMap.channel),alphaMapUv:B&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Q||ot),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:yt,vertexUv2s:pt,vertexUv3s:kt,pointsUvs:H.isPoints===!0&&!!F.attributes.uv&&(At||B),fog:!!x,useFog:S.fog===!0,fogExp2:x&&x.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:k,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:At&&S.map.isVideoTexture===!0&&be.getTransfer(S.map.colorSpace)===Ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ar,flipSided:S.side===di,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Et&&S.extensions.derivatives===!0,extensionFragDepth:Et&&S.extensions.fragDepth===!0,extensionDrawBuffers:Et&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Et&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)M.push(j),M.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function E(S){const M=_[S.type];let j;if(M){const I=rr[M];j=tD.clone(I.uniforms)}else j=S.uniforms;return j}function b(S,M){let j;for(let I=0,H=c.length;I<H;I++){const x=c[I];if(x.cacheKey===M){j=x,++j.usedTimes;break}}return j===void 0&&(j=new uU(i,M,S,s),c.push(j)),j}function A(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:O}}function mU(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function gU(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qy(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,_,g,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||gU),n.length>1&&n.sort(f||jy),r.length>1&&r.sort(f||jy)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function _U(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new qy,i.set(n,[o])):r>=s.length?(o=new qy,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function yU(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new se};break;case"SpotLight":e={position:new Y,direction:new Y,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function vU(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xU=0;function EU(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function TU(i,t){const e=new yU,n=vU(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new Y);const s=new Y,o=new he,a=new he;function l(u,h){let f=0,d=0,_=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let g=0,m=0,p=0,y=0,v=0,E=0,b=0,A=0,w=0,O=0,S=0;u.sort(EU);const M=h===!0?Math.PI:1;for(let I=0,H=u.length;I<H;I++){const x=u[I],F=x.color,$=x.intensity,V=x.distance,nt=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)f+=F.r*$*M,d+=F.g*$*M,_+=F.b*$*M;else if(x.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(x.sh.coefficients[X],$);S++}else if(x.isDirectionalLight){const X=e.get(x);if(X.color.copy(x.color).multiplyScalar(x.intensity*M),x.castShadow){const N=x.shadow,D=n.get(x);D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,r.directionalShadow[g]=D,r.directionalShadowMap[g]=nt,r.directionalShadowMatrix[g]=x.shadow.matrix,E++}r.directional[g]=X,g++}else if(x.isSpotLight){const X=e.get(x);X.position.setFromMatrixPosition(x.matrixWorld),X.color.copy(F).multiplyScalar($*M),X.distance=V,X.coneCos=Math.cos(x.angle),X.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),X.decay=x.decay,r.spot[p]=X;const N=x.shadow;if(x.map&&(r.spotLightMap[w]=x.map,w++,N.updateMatrices(x),x.castShadow&&O++),r.spotLightMatrix[p]=N.matrix,x.castShadow){const D=n.get(x);D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,r.spotShadow[p]=D,r.spotShadowMap[p]=nt,A++}p++}else if(x.isRectAreaLight){const X=e.get(x);X.color.copy(F).multiplyScalar($),X.halfWidth.set(x.width*.5,0,0),X.halfHeight.set(0,x.height*.5,0),r.rectArea[y]=X,y++}else if(x.isPointLight){const X=e.get(x);if(X.color.copy(x.color).multiplyScalar(x.intensity*M),X.distance=x.distance,X.decay=x.decay,x.castShadow){const N=x.shadow,D=n.get(x);D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,D.shadowCameraNear=N.camera.near,D.shadowCameraFar=N.camera.far,r.pointShadow[m]=D,r.pointShadowMap[m]=nt,r.pointShadowMatrix[m]=x.shadow.matrix,b++}r.point[m]=X,m++}else if(x.isHemisphereLight){const X=e.get(x);X.skyColor.copy(x.color).multiplyScalar($*M),X.groundColor.copy(x.groundColor).multiplyScalar($*M),r.hemi[v]=X,v++}}y>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=_;const j=r.hash;(j.directionalLength!==g||j.pointLength!==m||j.spotLength!==p||j.rectAreaLength!==y||j.hemiLength!==v||j.numDirectionalShadows!==E||j.numPointShadows!==b||j.numSpotShadows!==A||j.numSpotMaps!==w||j.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+w-O,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=S,j.directionalLength=g,j.pointLength=m,j.spotLength=p,j.rectAreaLength=y,j.hemiLength=v,j.numDirectionalShadows=E,j.numPointShadows=b,j.numSpotShadows=A,j.numSpotMaps=w,j.numLightProbes=S,r.version=xU++)}function c(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(E.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),_++}else if(E.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Yy(i,t){const e=new TU(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function SU(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Yy(i,t),e.set(s,[l])):o>=a.length?(l=new Yy(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class bU extends mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wU extends mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const AU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );