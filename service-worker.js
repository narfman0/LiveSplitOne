if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!i[e]&&(await new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}),!i[e]))throw new Error(`Module ${e} didn’t register its module`);return i[e]},s=async(s,i)=>{const r=await Promise.all(s.map(e));i(1===r.length?r[0]:r)};s.toUrl=e=>`./${e}`;const i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=new Promise(async i=>{let d={};const c={uri:location.origin+s.slice(1)},f=await Promise.all(r.map(s=>"exports"===s?d:"module"===s?c:e(s))),o=a(...f);d.default||(d.default=o),i(d)}))}}define("./service-worker.js",["./workbox-1a5b247d"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.js",revision:"11e62cd860101022db8afb8a1f3fdbf2"},{url:"1.js",revision:"a1bd0ca487eb9ded8f04a3f7ed1931e0"},{url:"1f16b2cb85eeb76e7be31ceb52e5de96.woff",revision:"1f16b2cb85eeb76e7be31ceb52e5de96"},{url:"3.js",revision:"ad69385b8066c877b96337ed658ff412"},{url:"4.js",revision:"649375ef9e6d470b812030edaa6c539c"},{url:"5.js",revision:"68282b9a73c5e906d3c01dfcd2a6db1b"},{url:"93f284548b42ab76fe3fd03a9d3a2180.woff",revision:"93f284548b42ab76fe3fd03a9d3a2180"},{url:"bundle.js",revision:"0aa2aff991553cc8c1bad378ab881b9e"},{url:"ca46642d4c257ed5eb20.module.wasm",revision:"3078f6f47822e3caecdf746fe83a8b9d"},{url:"e1b70ada54b37c1281e1fa5d3284c296.woff",revision:"e1b70ada54b37c1281e1fa5d3284c296"},{url:"index.html",revision:"0d2c7961019b26186f0e7907402ee363"}],{}),e.registerRoute(e=>self.origin===e.url.origin&&e.url.pathname.startsWith("/assets/"),new e.CacheFirst,"GET")}));
