"use strict";(self.webpackChunkhaochen_blog=self.webpackChunkhaochen_blog||[]).push([[2913],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(o),b=a,d=u["".concat(c,".").concat(b)]||u[b]||h[b]||n;return o?r.createElement(d,l(l({ref:t},s),{},{components:o})):r.createElement(d,l({ref:t},s))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},3889:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(7462),a=(o(7294),o(3905));const n={slug:"understand-copy-in-js",title:"Shallow Copy vs. Deep Copy",author:"Haochen Qi",author_title:"Fullstack Developer",author_url:"https://github.com/HaochenQ",author_image_url:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4",tags:["Javascript","Deep Copy","Shallow Copy"]},l="Understanding Object Copying in JavaScript",i={permalink:"/blog/understand-copy-in-js",source:"@site/blog/2021-04-14-copy-in-js.md",title:"Shallow Copy vs. Deep Copy",description:"question",date:"2021-04-14T00:00:00.000Z",formattedDate:"April 14, 2021",tags:[{label:"Javascript",permalink:"/blog/tags/javascript"},{label:"Deep Copy",permalink:"/blog/tags/deep-copy"},{label:"Shallow Copy",permalink:"/blog/tags/shallow-copy"}],readingTime:3.475,hasTruncateMarker:!0,authors:[{name:"Haochen Qi",title:"Fullstack Developer",url:"https://github.com/HaochenQ",imageURL:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4"}],frontMatter:{slug:"understand-copy-in-js",title:"Shallow Copy vs. Deep Copy",author:"Haochen Qi",author_title:"Fullstack Developer",author_url:"https://github.com/HaochenQ",author_image_url:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4",tags:["Javascript","Deep Copy","Shallow Copy"]},prevItem:{title:"How to Upload Files to AWS S3 in Node.js?",permalink:"/blog/upload-files-to-s3-iwth-node"},nextItem:{title:"Django project - A Twitter Like Web APP",permalink:"/blog/djang0-blog"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"question",src:o(7107).Z,width:"2886",height:"1747"}),"\nObjects are the basic blocks of JavaScript. An object is a collection of attributes, and an attribute is an association between a key (or name) and a value. Almost all objects in JavaScript are Object instances at the top of the prototype chain."),(0,a.kt)("p",null,"When it comes to copying objects in JavaScript, you need to know whether you need to do a shallow copying or a deep copying. In this article, we will go through these two different ways to copy objects."))}h.isMDXComponent=!0},7107:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/question-21d989d4a8c3f8606182539040ebd149.jpg"}}]);