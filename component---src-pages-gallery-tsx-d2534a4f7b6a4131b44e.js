/*! For license information please see component---src-pages-gallery-tsx-d2534a4f7b6a4131b44e.js.LICENSE.txt */
(self.webpackChunksawaych_github_io=self.webpackChunksawaych_github_io||[]).push([[355],{4213:function(e,t,a){var r,n,o;n=[],void 0===(o="function"==typeof(r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,a){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,a)},r.onerror=function(){console.error("could not download file")},r.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,a){var l=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?o(s):n(s.href)?r(e,t,a):o(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(s.href)}),4e4),setTimeout((function(){o(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,i){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),a);else if(n(e))r(e,a,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){o(l)}))}}:function(e,t,a,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,a);var o="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&s||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},d.readAsDataURL(e)}else{var u=i.URL||i.webkitURL,m=u.createObjectURL(e);n?n.location=m:location.href=m,n=null,setTimeout((function(){u.revokeObjectURL(m)}),4e4)}});i.saveAs=s.saveAs=s,e.exports=s})?r.apply(t,n):r)||(e.exports=o)},937:function(e,t,a){"use strict";var r=a(6942),n=a.n(r),o=a(2273),i=a(5681),l=a(2862),s=a(4848);t.A=e=>{let{alt:t,src:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:n()("flex justify-center w-32 h-32 bg-dracula-dark/20"),children:(0,s.jsx)(o.Img,{className:n()("object-cover"),src:a,alt:t,loader:(0,s.jsx)("div",{className:"flex flex-col items-center justify-center w-full h-32",children:(0,s.jsx)(l.A,{})}),unloader:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,s.jsx)(i.A,{size:"5rem"}),(0,s.jsx)("div",{children:"Fail to load image"})]})})})})}},3090:function(e,t,a){"use strict";var r=a(3338),n=a(4848);t.A=e=>{let{icon:t,text:a,extra:o,color:i="purple"}=e;return(0,n.jsxs)("div",{className:"flex items-center justify-center select-none",children:[(0,n.jsx)(r.A,{color:i,icon:t,className:"!scale-[0.35] m-4 w-32 h-24"}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("div",{className:"font-sans text-xl font-extrabold",children:(0,n.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#008B8B] to-[#54a4ff]",children:a})}),o]})]})}},9773:function(e,t,a){"use strict";a.r(t);var r=a(4506),n=a(3479),o=a(357),i=a(4192),l=a(5681),s=a(5561),c=a(4067),d=a(909),u=a(1922),m=a(6540),f=a(7826),h=a(1938),v=a(4778),x=a(5163),g=a(8691),p=a(6942),b=a.n(p),w=a(2532),j=a(159),y=a(2273),A=a(4213),k=a(3217),N=a(2862),C=a(937),M=a(9246),z=a(6194),L=a(3090),B=a(4848);t.default=e=>{let{...t}=e;const p=(0,m.useMemo)((()=>t.data.allStrapiGallery.nodes.map((e=>{const t=e;return t.image=(0,r.A)(e.image.sort(((e,t)=>e.name.localeCompare(t.name)))),t}))),[t.data.allStrapiGallery.nodes]),E=(0,m.useMemo)((()=>({open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}})),[]),O=(0,m.useRef)(null),{0:R,1:F}=(0,m.useState)(),{0:I,1:P}=(0,m.useState)(!0),{0:T,1:U}=(0,m.useState)(1),S=(0,m.useCallback)((e=>{U(1);const t=e;t.image=(0,r.A)(e.image.sort(((e,t)=>e.name.localeCompare(t.name)))),F(t)}),[]),D=(0,m.useCallback)((()=>{F(void 0)}),[]),X=(0,m.useCallback)(((e,t)=>{(0,A.saveAs)(e,t)}),[]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(L.A,{icon:(0,B.jsx)(n.A,{size:"3.5rem"}),text:"Gallery",color:"yellow",extra:(0,B.jsx)(f.E,{c:"dimmed",children:"Photo of random goods...?"})}),(0,B.jsx)(x.P.div,{variants:E,initial:"closed",animate:"open",className:"grid grid-cols-2 gap-2 px-10 mb-20 sm:grid-cols-4",children:p&&p.map((e=>{var t,a,r,n,o,i,l,s;return(0,B.jsx)(x.P.div,{variants:{open:{y:0,opacity:1,transition:{y:{stiffness:10,velocity:-1e3}}},closed:{y:25,opacity:0,transition:{y:{stiffness:10}}}},className:"flex flex-col items-center justify-around p-1 cursor-pointer select-none bg-dracula-darker",onClick:()=>S(e),children:(0,B.jsx)(C.A,{src:(0,z.A)(null!==(t=null===(a=e.image)||void 0===a||null===(r=a[0])||void 0===r||null===(n=r.formats)||void 0===n||null===(o=n.thumbnail)||void 0===o?void 0:o.url)&&void 0!==t?t:""),alt:null!==(i=null===(l=e.image)||void 0===l||null===(s=l[0])||void 0===s?void 0:s.alternativeText)&&void 0!==i?i:""})},e.id)}))}),(0,B.jsx)(g.N,{children:R&&(0,B.jsx)(x.P.div,{variants:{open:{y:0,opacity:1,transition:{y:{stiffness:10,velocity:-1e3}}},closed:{y:25,opacity:0,transition:{y:{stiffness:10}}}},initial:"closed",animate:"open",exit:"closed",className:"fixed top-0 z-[51] w-screen h-screen bg-dracula-darker/30 backdrop-blur-sm touch-none",onClick:()=>{F(void 0)},children:(0,B.jsxs)(x.P.div,{variants:{open:{opacity:1,transition:{y:{stiffness:10,velocity:-1e3}}},closed:{opacity:0,transition:{y:{stiffness:10}}}},initial:"closed",animate:"open",exit:"closed",className:b()("absolute w-[80vw] h-[80vh] left-0 right-0 top-0 ml-auto mr-auto translate-y-[10vh] bg-dracula-dark z-[60] rounded-lg",{"!h-[70vh]":j.Fr}),onClick:e=>{e.stopPropagation()},children:[(0,B.jsx)("button",{"aria-label":"left",type:"button",onClick:()=>{const e=null==p?void 0:p.findIndex((e=>e.id===R.id));null!=e&&(U(1),F(null==p?void 0:p[(e-1+p.length)%p.length]))},className:"fixed z-[61] top-1/2 w-fit h-fit left-1 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",children:(0,B.jsx)(o.A,{"aria-hidden":!0,className:"w-6 h-6"})}),(0,B.jsx)("button",{"aria-label":"right",type:"button",onClick:()=>{const e=null==p?void 0:p.findIndex((e=>e.id===R.id));null!=e&&(U(1),F(null==p?void 0:p[(e+1)%p.length]))},className:"fixed z-[61] top-1/2 w-fit h-fit right-1 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",children:(0,B.jsx)(i.A,{"aria-hidden":!0,className:"w-6 h-6"})}),(0,B.jsx)(k.GT,{initialScale:1,initialPositionX:0,initialPositionY:0,ref:O,children:e=>{var t,a,r,n,o,i,s,c,d,u,m,f;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(M.A,{zoomIn:e.zoomIn,zoomOut:e.zoomOut,resetTransform:e.resetTransform}),(0,B.jsx)(k.WZ,{children:(0,B.jsx)(y.Img,{className:b()("object-scale-down w-[80vw] h-[75vh] pb-6",{"!h-[60vh]":j.Fr}),src:(0,z.A)(null!==(t=null!==(a=null===(r=R.image)||void 0===r||null===(n=r[T-1].formats)||void 0===n||null===(o=n.large)||void 0===o?void 0:o.url)&&void 0!==a?a:null===(i=R.image)||void 0===i||null===(s=i[T-1].formats)||void 0===s||null===(c=s.small)||void 0===c?void 0:c.url)&&void 0!==t?t:null===(d=R.image)||void 0===d||null===(u=d[T-1].formats)||void 0===u||null===(m=u.thumbnail)||void 0===m?void 0:m.url),alt:null===(f=R.image)||void 0===f?void 0:f[T-1].alternativeText,loader:(0,B.jsx)("div",{className:"flex flex-col items-center justify-center w-[80vw] h-[70vh]",children:(0,B.jsx)(N.A,{className:"!w-24 !h-24"})}),unloader:(0,B.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,B.jsx)(l.A,{size:"5rem"}),(0,B.jsx)("div",{children:"Fail to load image"})]})})})]})}}),(0,B.jsx)("div",{className:b()("fixed z-[61] left-4 bottom-0 bg-dracula-darker w-fit h-fit px-4 cursor-pointer flex pt-1 justify-center items-center rounded-t-md text-dracula-dark-300 select-none",{hidden:I}),onClick:()=>{P((e=>!e))},children:(0,B.jsx)(s.A,{size:"1.2rem",className:"hover:text-dracula-dark-100"})}),(0,B.jsxs)("div",{className:"fixed flex items-center justify-center rounded-lg h-[4.7rem] w-9 top-4 right-4 bg-dracula-darker-800",children:[(0,B.jsx)("button",{"aria-label":"Close",type:"button",onClick:D,className:"fixed z-[90] top-4 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",children:(0,B.jsx)(c.A,{"aria-hidden":!0,className:"w-6 h-6"})}),(0,B.jsx)("button",{"aria-label":"Download",type:"button",onClick:()=>X((0,z.A)(R.image[T-1].url),R.name),className:"fixed z-[90] top-14 w-fit h-fit right-4 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",children:(0,B.jsx)(d.A,{"aria-hidden":!0,className:"w-6 h-6"})})]}),I&&(0,B.jsxs)("div",{className:"fixed flex flex-col z-[61] -bottom-[1px] p-4 w-full h-fit rounded-lg text-sm text-gray-400 bg-dracula-darker/80 backdrop-blur-sm break-all",children:[R.image.length>1&&(0,B.jsx)("div",{className:"flex w-full p-[2px] mb-2 overflow-x-auto border-2 rounded-md border-dracula-dark-700",children:R.image.map(((e,t)=>(0,B.jsx)(y.Img,{className:b()("object-contain w-[4rem] h-[2.5rem] hover:border-dracula-purple border-2 border-dracula-dark/0 rounded-md",{"border-dracula-pink":T===t+1}),src:(0,z.A)(e.formats.thumbnail.url),alt:"gallery-images "+e.name+" thumbnail",loader:(0,B.jsx)("div",{className:"flex flex-col items-center justify-center object-contain w-[4rem] h-[2.5rem] border-dracula-dark border-2",children:(0,B.jsx)(N.A,{})}),unloader:(0,B.jsx)("div",{className:"flex flex-col items-center justify-center object-contain w-[4rem] h-[2.5rem]",children:(0,B.jsx)(w.S,{src:"../images/home.webp",alt:"back to home",layout:"constrained",height:240,placeholder:"blurred",__imageData:a(6917)})}),onClick:()=>{U(t+1)}})))}),(0,B.jsx)("div",{className:"flex justify-between",children:(0,B.jsx)("button",{"aria-label":"hide",type:"button",onClick:()=>{P((e=>!e))},className:"flex z-[61] mb-2 w-fit h-fit rounded-lg bg-transparent px-4 text-sm text-gray-400 border-dracula-dark-600 border hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",children:(0,B.jsx)(u.A,{size:"1.2rem"})})}),(0,B.jsxs)("div",{className:"flex flex-col justify-between mb-2 sm:flex-row",children:[(0,B.jsx)("div",{className:"font-bold",children:R.name}),(0,B.jsx)("div",{className:"italic",children:R.updatedAt})]}),(0,B.jsx)(h.$,{remarkPlugins:[v.A],className:"flex text-xs break-all",children:R.captions})]})]})})})]})}},1922:function(e,t,a){"use strict";a.d(t,{A:function(){return r}});var r=(0,a(8728).A)("outline","chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]])},4192:function(e,t,a){"use strict";a.d(t,{A:function(){return r}});var r=(0,a(8728).A)("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},909:function(e,t,a){"use strict";a.d(t,{A:function(){return r}});var r=(0,a(8728).A)("outline","download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]])},4067:function(e,t,a){"use strict";a.d(t,{A:function(){return r}});var r=(0,a(8728).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},6917:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRoIBAABXRUJQVlA4WAoAAAAQAAAAEwAADwAAQUxQSJkAAAABgFpt2/LmCTMpUszMzBwdF5kBskCKsjMwTZAqrqtjXqC6khv68p6OEBETALYa2kg0GjGCGg/FF0aj0WhIkaxeXr3OvBvmCIPDl9HcCwHLMiJXWVaak1XcI3WzjMMR/fhfjhitD9JHm4EH0psKgDiFO9LoAEDnR3xLOwXQG5nvaCcA+qPMLe0YkPtt3rXNjfXZra3tnd2BRg4AVlA4IMIAAABwBQCdASoUABAAPtFUo0uoJKMhsAgBABoJbACdMoRwIsB9gOfV0zMcns7TagOUBHPMdQ1UAP4xhxeBOotwqvsXFF7djOTO0Mh1PSnvVV0s+2lHzZzLEZVtIsMGaDfLl2CKj5D0PmujdmeTLwVUFjHoFyucZXEHHQC949QhjOq3XQb1NDMXWJfRVPpK3u3Qi+madK3ZQfELC5Lmi9vWC0un0cfUxx3tPEajPNg7xD/fwb1UQoq+rX4qKLQ9OaFaIgAAAA=="},"images":{"fallback":{"src":"/static/2276c8a52369718494c15d9bc3a8980e/27ba8/home.webp","srcSet":"/static/2276c8a52369718494c15d9bc3a8980e/be8f6/home.webp 74w,\\n/static/2276c8a52369718494c15d9bc3a8980e/09563/home.webp 147w,\\n/static/2276c8a52369718494c15d9bc3a8980e/27ba8/home.webp 294w","sizes":"(min-width: 294px) 294px, 100vw"},"sources":[]},"width":294,"height":239.99999999999997}')}}]);
//# sourceMappingURL=component---src-pages-gallery-tsx-d2534a4f7b6a4131b44e.js.map