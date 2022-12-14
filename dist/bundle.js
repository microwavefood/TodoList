(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(81),a=t.n(o),r=t(645),s=t.n(r)()(a());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Thasadith:wght@400&display=swap);"]),s.push([n.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --shadow-color: 0deg 0% 58%;\n  --shadow-elevation-low: 0.3px 0.8px 1px hsl(var(--shadow-color) / 0.39),\n    0.6px 1.4px 1.7px -1.2px hsl(var(--shadow-color) / 0.39),\n    1.5px 3.5px 4.3px -2.5px hsl(var(--shadow-color) / 0.39);\n  --shadow-elevation-medium: 0.3px 0.8px 1px hsl(var(--shadow-color) / 0.41),\n    1.2px 2.8px 3.4px -0.8px hsl(var(--shadow-color) / 0.41),\n    3px 7.1px 8.7px -1.7px hsl(var(--shadow-color) / 0.41),\n    7.3px 17.3px 21.1px -2.5px hsl(var(--shadow-color) / 0.41);\n  --shadow-elevation-high: 0.3px 0.8px 1px hsl(var(--shadow-color) / 0.38),\n    2.2px 5.3px 6.5px -0.4px hsl(var(--shadow-color) / 0.38),\n    4.2px 9.9px 12.1px -0.7px hsl(var(--shadow-color) / 0.38),\n    6.9px 16.3px 19.9px -1.1px hsl(var(--shadow-color) / 0.38),\n    11px 26.1px 31.9px -1.4px hsl(var(--shadow-color) / 0.38),\n    17.2px 40.9px 49.9px -1.8px hsl(var(--shadow-color) / 0.38),\n    26.2px 62.3px 76px -2.1px hsl(var(--shadow-color) / 0.38),\n    38.7px 91.8px 112.1px -2.5px hsl(var(--shadow-color) / 0.38);\n\n  --color-text-lowest-freq: rgb(168, 168, 168);\n}\n\n.shadow-low {\n  box-shadow: var(--shadow-elevation-low);\n}\n\n.shadow-medium {\n  box-shadow: var(--shadow-elevation-medium);\n}\n\n.shadow-high {\n  box-shadow: var(--shadow-elevation-high);\n}\n\n/* Styling Now */\n\n#container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  background-color: gainsboro;\n}\n\n.task {\n  width: 400px;\n  min-height: 150px;\n  background-color: white;\n  padding: 10px;\n  border-radius: 10px;\n\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: start;\n  gap: 10px;\n\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 0.85rem;\n\n  box-shadow: var(--shadow-elevation-low);\n}\n\n.addtask {\n  width: 90%;\n  padding: 15px;\n}\n\n.addtask__form {\n  display: flex;\n  gap: 5px;\n\n  align-items: center;\n}\n\n.addtask__form > input[type="text"] {\n  width: 80%;\n  font-family: sans-serif;\n  font-size: 16px;\n}\n\n.addtask__form > input[type="submit"] {\n}\n',""]);const i=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);o&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},s=[],i=0;i<n.length;i++){var c=n[i],p=o.base?c[0]+o.base:c[0],l=r[p]||0,d="".concat(p," ").concat(l);r[p]=l+1;var u=t(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var x=a(h,o);o.byIndex=i,e.splice(i,0,{identifier:d,updater:x,references:1})}s.push(d)}return s}function a(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<r.length;s++){var i=t(r[s]);e[i].references--}for(var c=o(n,a),p=0;p<r.length;p++){var l=t(r[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),r=t(569),s=t.n(r),i=t(565),c=t.n(i),p=t(216),l=t.n(p),d=t(589),u=t.n(d),h=t(426),x={};x.styleTagTransform=u(),x.setAttributes=c(),x.insert=s().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=l();e()(h.Z,x);h.Z&&h.Z.locals&&h.Z.locals;const f=class{constructor(n){this.title=n}get element(){const n=document.createElement("div");n.setAttribute("class","task");const e=document.createElement("h2");e.textContent=this.title;const t=document.createElement("h3");t.textContent="Due today";const o=document.createElement("button");return o.textContent="Mark Complete!",n.append(e,t,o),n}};const m=class{get element(){const n=document.createElement("div");n.setAttribute("class","addtask");const e=document.createElement("form");e.setAttribute("class","addtask__form"),n.append(e);const t=document.createElement("input");t.type="text",t.placeholder="Add a new task...",e.append(t);const o=document.createElement("input");return o.type="submit",o.value="Add to To-Do List",o.addEventListener("click",(n=>{n.preventDefault();const e=new f(t.value);document.getElementById("container").append(e.element),t.value=""})),e.append(o),n}};document.body.appendChild(function(){const n=document.getElementById("container"),e=new m;return n.append(e.element),n}())})()})();