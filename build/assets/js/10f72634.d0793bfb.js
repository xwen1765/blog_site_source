"use strict";(self.webpackChunkxuan_blog=self.webpackChunkxuan_blog||[]).push([[697],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,g=c["".concat(s,".").concat(p)]||c[p]||m[p]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),d=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,d]=g({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??c;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==o&&(c(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);a(941);const o={id:"quaddle_01",title:"",sidebar_label:"Intro & Download",slug:"/Quaddle"},s=void 0,d={unversionedId:"Quaddle2.0/quaddle_01",id:"Quaddle2.0/quaddle_01",title:"",description:"Quaddle2.0: A Multidimensional 3D Stimuli for Cognitive Science Research",source:"@site/docs/Quaddle2.0/1_Intro.md",sourceDirName:"Quaddle2.0",slug:"/Quaddle",permalink:"/docs/Quaddle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Quaddle2.0/1_Intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"quaddle_01",title:"",sidebar_label:"Intro & Download",slug:"/Quaddle"},sidebar:"myAutogeneratedSidebar",previous:{title:"IIT on fMRI",permalink:"/docs/IIT/doc3"},next:{title:"Get Start",permalink:"/docs/Quaddle2.0/quaddle_02"}},u={},c=[{value:"<i>Quaddle2.0</i>: A Multidimensional 3D Stimuli for Cognitive Science Research",id:"quaddle20-a-multidimensional-3d-stimuli-for-cognitive-science-research",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Dimensions Demo",id:"dimensions-demo",level:3},{value:"Download Blender &amp; Set up Quaddle",id:"download-blender--set-up-quaddle",level:3},{value:"Support and Community",id:"support-and-community",level:3}],m={toc:c},p="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"quaddle20-a-multidimensional-3d-stimuli-for-cognitive-science-research"},(0,r.kt)("i",null,"Quaddle2.0"),": A Multidimensional 3D Stimuli for Cognitive Science Research"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus themed imag",src:a(2645).Z+"#gh-light-mode-only",width:"1920",height:"1080"}),(0,r.kt)("img",{alt:"Docusaurus themed imag",src:a(8610).Z+"#gh-dark-mode-only",width:"1920",height:"1080"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This page is under construction, for any query please contact author. ",(0,r.kt)("a",{parentName:"p",href:"mailto:xuan.wen@vanderbilt.edu"},"Email"))),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Quaddle2.0 is an open-source software program designed to help researchers in the field of cognitive science create and manipulate a wide range of stimuli for use in their studies. Developed using Blender, the popular 3D modeling software, Quaddle2.0 allows researchers to create complex, multi-dimensional stimuli that can be easily exported to a variety of file formats, including PNG and FBX. The program is designed to be intuitive and user-friendly, making it accessible even to researchers who may not have extensive experience with 3D modeling software. The program includes a wide range of features that allow users to manipulate and customize their stimuli, including the ability to adjust the shape, size, and color of objects, as well as the ability to add textures and other visual effects.  The program can be used with a variety of other research tools, including Unity, Psychopy, and Psychtoolbox, making it easy to integrate into existing research workflows. With over 1.5 billion potential stimuli variations, researchers can use Quaddle2.0 to create a wide range of different stimuli for use in their studies, including visual, auditory, and tactile stimuli."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dimensions-demo"},"Dimensions Demo"),(0,r.kt)("p",null,"Quaddle 2.0 is a powerful 3D stimuli generation toolbox based on Blender, which has six main dimensions for creating custom 3D models. Here are examples of one quaddle and how its compositions in blender."),(0,r.kt)("div",{class:"brand-wheel"},(0,r.kt)("div",{class:"brand-slide"},(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(81).Z})),(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(2525).Z})),(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(7131).Z})),(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(6377).Z})),(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(831).Z}))),(0,r.kt)("div",{class:"brand-slide delay"},(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(81).Z})),(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(2525).Z})),(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(7131).Z})),(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(6377).Z})),(0,r.kt)("div",{class:"logo-div"},(0,r.kt)("img",{alt:"#",src:a(831).Z})))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"image",label:"Total",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus themed image",src:a(8749).Z+"#gh-light-mode-only",width:"1920",height:"1080"}),(0,r.kt)("img",{alt:"Docusaurus themed image",src:a(6279).Z+"#gh-dark-mode-only",width:"1920",height:"1080"}))),(0,r.kt)(i.Z,{value:"image1",label:"Body",mdxType:"TabItem"},(0,r.kt)("div",{className:"image-container"},(0,r.kt)("img",{src:a(9782).Z,alt:"Example banner"}))),(0,r.kt)(i.Z,{value:"image2",label:"Pattern & Fractal",mdxType:"TabItem"},(0,r.kt)("div",{className:"image-container"},(0,r.kt)("img",{src:a(6087).Z,alt:"Example banner"}))),(0,r.kt)(i.Z,{value:"image3",label:"Arm",mdxType:"TabItem"},(0,r.kt)("div",{className:"image-container"},(0,r.kt)("img",{src:a(4772).Z,alt:"Example banner"}))),(0,r.kt)(i.Z,{value:"image4",label:"Head",mdxType:"TabItem"},(0,r.kt)("div",{className:"image-container"},(0,r.kt)("img",{src:a(9511).Z,alt:"Example banner"}))),(0,r.kt)(i.Z,{value:"image5",label:"Head Features",mdxType:"TabItem"},(0,r.kt)("div",{className:"image-container"},(0,r.kt)("img",{src:a(864).Z,alt:"Example banner"})))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"download-blender--set-up-quaddle"},"Download Blender & Set up Quaddle"),(0,r.kt)("p",null,"Both Blender and Quaddle2.0 code are open-source."),(0,r.kt)("p",null,"All the source code of Quaddle2.0 can be found on our Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xwen1765/blender-quaddle"},"Quaddle2.0 Github Repo")," (Currently in private mode, will update later)."),(0,r.kt)("p",null,"To download blender, please use this link ",(0,r.kt)("a",{parentName:"p",href:"https://www.blender.org/download/"},"Download Blender")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more detailed information please check next page.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"support-and-community"},"Support and Community"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"mailto:xuan.wen@vanderbilt.edu"},"Contact Author")))}g.isMDXComponent=!0},9782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example001_cropped-59e384022a246363039c8f483b6f2f72.png"},6087:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example002_cropped-165e413ad86b05ba18da0059d755689a.png"},4772:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example003_cropped-e45c147293aa1277a0f0e80d10828bde.png"},9511:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example004_cropped-025fbaff15720ecaceed6ad3750477f4.png"},864:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example005_cropped-c32eb305f786c56bcf068bfbe0aeeb63.png"},81:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example034-949d5ed96b93fc1a50595ecea819cea9.png"},2525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example035-7d16627a6bab91423efa6a0a168e4b31.png"},7131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example036-9d60e11defd2d4086c834682091009d7.png"},6377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example039-947aad2bfcda332c3957b8ef2019ebc1.png"},831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example040-484a5289eaf51aa207840b98e67d3594.png"},6279:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example005_cropped_example_large_dark-55b347c44cb0b19c43a79f7556e403bf.png"},8749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example005_cropped_example_large_light-3954e97057e0f96bdcb3a4048e4ec27e.png"},2645:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/website_imgs.002-bfa003014b97c14f7ac0e42a7a85cc49.png"},8610:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/website_imgs.002_dark-84d872ffe636840ef063e7eab3f260a8.png"}}]);