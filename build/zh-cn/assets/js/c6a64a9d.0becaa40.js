"use strict";(self.webpackChunkhaochen_blog=self.webpackChunkhaochen_blog||[]).push([[9684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||h[b]||a;return n?o.createElement(d,c(c({ref:t},s),{},{components:n})):o.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={slug:"understand-copy-in-js",title:"Shallow Copy vs. Deep Copy",author:"Haochen Qi",author_title:"Fullstack Developer",author_url:"https://github.com/HaochenQ",author_image_url:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4",tags:["Javascript","Deep Copy","Shallow Copy"]},c="Understanding Object Copying in JavaScript",l={permalink:"/zh-cn/blog/understand-copy-in-js",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2021-04-14-copy-in-js.md",title:"Shallow Copy vs. Deep Copy",description:"question",date:"2021-04-14T00:00:00.000Z",formattedDate:"2021\u5e744\u670814\u65e5",tags:[{label:"Javascript",permalink:"/zh-cn/blog/tags/javascript"},{label:"Deep Copy",permalink:"/zh-cn/blog/tags/deep-copy"},{label:"Shallow Copy",permalink:"/zh-cn/blog/tags/shallow-copy"}],readingTime:3.475,hasTruncateMarker:!0,authors:[{name:"Haochen Qi",title:"Fullstack Developer",url:"https://github.com/HaochenQ",imageURL:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4"}],frontMatter:{slug:"understand-copy-in-js",title:"Shallow Copy vs. Deep Copy",author:"Haochen Qi",author_title:"Fullstack Developer",author_url:"https://github.com/HaochenQ",author_image_url:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4",tags:["Javascript","Deep Copy","Shallow Copy"]},prevItem:{title:"How to Upload Files to AWS S3 in Node.js?",permalink:"/zh-cn/blog/upload-files-to-s3-iwth-node"},nextItem:{title:"Django project - A Twitter Like Web APP",permalink:"/zh-cn/blog/djang0-blog"}},i={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"question",src:n(7107).Z,width:"2886",height:"1747"}),"\nObjects are the basic blocks of JavaScript. An object is a collection of attributes, and an attribute is an association between a key (or name) and a value. Almost all objects in JavaScript are Object instances at the top of the prototype chain."),(0,r.kt)("p",null,"When it comes to copying objects in JavaScript, you need to know whether you need to do a shallow copying or a deep copying. In this article, we will go through these two different ways to copy objects."))}h.isMDXComponent=!0},7107:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/question-21d989d4a8c3f8606182539040ebd149.jpg"}}]);