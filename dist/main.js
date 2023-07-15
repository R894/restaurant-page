(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root{\n    --color1: #2C363F;\n    --color2: #E75A7C;\n    --color3: #E3E3E3;\n    --color4: #D6DBD2;\n    --color5: #BBC7A4;\n}\n\nhtml, body{\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    color: var(--color3);\n}\n\na{\n    color: var(--color3);\n}\n\nbody{\n    background-color: var(--color1);\n}\n\n.header{\n    display: flex;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.1);\n    width: 100%;\n    padding: 2% 0;\n}\n\n.header .wrapper{\n    display: flex;\n    gap: 1rem;\n}\n\nul{\n    display: flex;\n    gap: 1rem;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n}\n\n.main{\n    color: var(--color2);\n    background-color: var(--color3);\n    border-radius: 4px;\n    margin: 1%;\n    padding: 1%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    flex-grow: 1;\n}\n\n.title{\n    text-align: center;\n    font-size: 2rem;\n}\n\n.desc{\n    display: flex;\n    justify-content: center;\n    max-width: 70%;\n    margin-bottom: 2%;\n}\n\n.section{\n    margin: 2% 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title-hr{\n    width: 10vw;\n}\n\nhr{\n    width: 2vw;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 1% 0;\n    background-color: rgba(0, 0, 0, 0.1);;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],l=r.base?d[0]+r.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),l=t(216),s=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};function v(n){let e=document.createElement("div");e.classList.add("title"),e.textContent=n;let t=document.createElement("hr");return t.classList.add("title-hr"),e.appendChild(t),e}function h(n,e){let t=document.createElement("div");t.classList.add("section");let r=document.createElement("div");return r.classList.add("desc"),r.innerText=n,t.appendChild(r),e&&t.appendChild(document.createElement("hr")),t}function y(){let n=document.querySelector(".main"),e=v("Waow"),t=h("Gween",!0);n.appendChild(e),n.appendChild(t)}function g(){document.querySelector(".main").textContent=""}m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let x=document.getElementById("home"),b=document.getElementById("about"),C=document.getElementById("menu");x.addEventListener("click",(function(){g(),y()})),b.addEventListener("click",(function(){g(),function(){let n=document.querySelector(".main"),e=v("About Us"),t=h("We do stuff I guess lol");n.appendChild(e),n.appendChild(t)}()})),C.addEventListener("click",(function(){g(),function(){let n=document.querySelector(".main"),e=v("Food"),t=h("We do stuff I guess lol"),r=h("20$",!0);n.appendChild(e),n.appendChild(t),n.appendChild(r)}()})),g(),y()})()})();