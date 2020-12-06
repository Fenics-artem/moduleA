!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vuex")):"function"==typeof define&&define.amd?define(["exports","vuex"],t):t((e=e||self).moduleA={},e.vuex)}(this,(function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var s="moduleA",i={name:s,computed:o({},t.mapGetters(s,["value"])),methods:o({},t.mapActions(s,["setValue"]))};function a(e,t,n,r,o,s,i,a,c,l){"boolean"!=typeof i&&(c=a,a=i,i=!1);const u="function"==typeof n?n.options:n;let d;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),s?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=d):t&&(d=i?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(u.functional){const e=u.render;u.render=function(t,n){return d.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,d):[d]}return n}const c="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function l(e){return(e,t)=>function(e,t){const n=c?t.media||"default":e,r=d[n]||(d[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===u&&(u=document.head||document.getElementsByTagName("head")[0]),u.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,t=document.createTextNode(n),o=r.element.childNodes;o[e]&&r.element.removeChild(o[e]),o.length?r.element.insertBefore(t,o[e]):r.element.appendChild(t)}}}(e,t)}let u;const d={};const p=i;var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"moduleA"},[n("div",{staticClass:"counter"},[n("button",{on:{click:function(t){return e.setValue(e.value+1)}}},[e._v("+")]),e._v(" "),n("span",{staticClass:"result"},[e._v(e._s(e.value))])])])};m._withStripped=!0;const f=a({render:m,staticRenderFns:[]},(function(e){e&&e("data-v-0ea6be06_0",{source:"\n.counter[data-v-0ea6be06] {\n  display: inline-block;\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 20px;\n}\nbutton[data-v-0ea6be06] {\n  margin-right: 10px;\n}\n",map:{version:3,sources:["D:\\html\\test2\\moduleA\\lib\\components\\index.vue"],names:[],mappings:";AAyBA;EACA,qBAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;AACA",file:"index.vue",sourcesContent:["<template>\r\n  <div class=\"moduleA\">\r\n    <div class=\"counter\">\r\n      <button @click=\"setValue(value + 1)\">+</button>\r\n      <span class=\"result\">{{ value }}</span>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import { mapGetters, mapActions } from 'vuex';\r\n  import c from '../constants'\r\n\r\n  export default {\r\n    name: c.MODULE_NAME,\r\n    computed: {\r\n      ...mapGetters(c.MODULE_NAME, ['value']),\r\n    },\r\n    methods: {\r\n      ...mapActions(c.MODULE_NAME, ['setValue'])\r\n    }\r\n  }\r\n<\/script>\r\n\r\n<style scoped>\r\n  .counter {\r\n    display: inline-block;\r\n    border: 1px solid;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n  }\r\n\r\n  button {\r\n    margin-right: 10px;\r\n  }\r\n</style>\r\n"]},media:void 0})}),p,"data-v-0ea6be06",!1,void 0,!1,l,void 0,void 0);var v=n({},s,{namespaced:!0,state:{value:0},getters:{value:function(e){return e.value}},mutations:{setValue:function(e,t){e.value=t}},actions:{setValue:function(e,t){(0,e.commit)("setValue",t)}}});e.default=f,e.storeModule=v,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map