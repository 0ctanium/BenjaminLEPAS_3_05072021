if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise((async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},c=(c,i)=>{Promise.all(c.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(c)};self.define=(c,a,r)=>{i[c]||(i[c]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+c.slice(1)};return Promise.all(a.map((c=>{switch(c){case"exports":return i;case"module":return n;default:return e(c)}}))).then((e=>{const c=r(...e);return i.default||(i.default=c),i}))})))}}define("./service-worker.js",["./workbox-0d6c8d95"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"a-la-francaise.3544676c.jpg",revision:"e89fc4ad3ada243e9c28d58ba7ce8bcb"},{url:"a-la-francaise.cbc1f8f5.jpg",revision:"2393fc720cf943de91b248cd50506b50"},{url:"a-la-francaise.html",revision:"35776849e004665e94ec7e74d51c91ac"},{url:"android-icon-192x192.67bcef0e.png",revision:"da43a9440bbb0016e3bf91e94a84e66f"},{url:"apple-icon-114x114.4eacca18.png",revision:"6940cdc421aeca00af5a79195ed4869a"},{url:"apple-icon-120x120.7b3d2824.png",revision:"0d7324026c50dfd5f650be0d6b538b46"},{url:"apple-icon-144x144.5acc1624.png",revision:"f316c393ecc841a1126dbc8d4d28c3cc"},{url:"apple-icon-152x152.b395d393.png",revision:"8d77a6b71f9b284ae20725cf408ff9bc"},{url:"apple-icon-180x180.2fe68454.png",revision:"8c72a4e0ae953d63b21f88764c6e1bf8"},{url:"apple-icon-57x57.6027eb6a.png",revision:"4e3b6c88c7c6f4d79241b18060338b13"},{url:"apple-icon-60x60.847e716a.png",revision:"8e7048b1b51b0902e301f2518e19682e"},{url:"apple-icon-72x72.5908e4a3.png",revision:"cc1292cc775b6b676ab5299fe84a555e"},{url:"apple-icon-76x76.920db0b2.png",revision:"56bc1b5be891034a3f3ebb220fd21ebe"},{url:"favicon-16x16.e85cdb4f.png",revision:"b034ddebb1c28643ca2258c88789f981"},{url:"favicon-32x32.e30ac234.png",revision:"9fc6c6cfba839dfd2cdafb8fb20d8e8b"},{url:"favicon-96x96.892a1dd4.png",revision:"d4ed1da850afcc5f0a144dec1c9b1176"},{url:"favicon.ico",revision:"4ee1f16526eb2667cb645ba64947459b"},{url:"index.15a23b25.css",revision:"8f7b8a57cf816f2f437e1871106e6d90"},{url:"index.15a23b25.css.map",revision:"e4b399e8d8b5e9804c6a9bfca2dba40b"},{url:"index.html",revision:"5f8b86e40c43b8d3ccbec9c92b3ba6ab"},{url:"la-note-enchantee.a9766455.jpg",revision:"e605daaf871a18d71f574123e78e029c"},{url:"la-note-enchantee.cf2f086e.jpg",revision:"4f729cfa149279ddb0f0573717078632"},{url:"la-note-enchantee.html",revision:"e02241972e9717e0ca8786d2aa13dfc0"},{url:"la-palette-du-gout.3dd7d204.jpg",revision:"9af34b62b97311937c7db3e5e07a3e21"},{url:"la-palette-du-gout.478bfdd0.jpg",revision:"3ad2633240d80359b233375f78eaf8c9"},{url:"la-palette-du-gout.html",revision:"907b5a3c1e073216d5ae813b2b9fa3d9"},{url:"le-delice-des-sens.2adc890d.jpg",revision:"6ef2c0b3c3420742e661d7388a381805"},{url:"le-delice-des-sens.c5c59325.jpg",revision:"f151174ef80b2b6f237a1e86c2c1ed2e"},{url:"le-delice-des-sens.html",revision:"9d0850771e88a637053e717810db681d"},{url:"site.webmanifest",revision:"80218270904789152715091eff780644"}],{})}));
//# sourceMappingURL=service-worker.js.map
