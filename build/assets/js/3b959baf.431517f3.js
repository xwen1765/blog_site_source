"use strict";(self.webpackChunkxuan_blog=self.webpackChunkxuan_blog||[]).push([[765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(y,r(r({ref:t},p),{},{components:n})):i.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={id:"quaddle_04",title:"",sidebar_label:"Adding Dimension"},r=void 0,s={unversionedId:"Quaddle2.0/quaddle_04",id:"Quaddle2.0/quaddle_04",title:"",description:"Adding New Dimensions to Quaddle2.0",source:"@site/docs/Quaddle2.0/4_Development.md",sourceDirName:"Quaddle2.0",slug:"/Quaddle2.0/quaddle_04",permalink:"/docs/Quaddle2.0/quaddle_04",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Quaddle2.0/4_Development.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"quaddle_04",title:"",sidebar_label:"Adding Dimension"},sidebar:"myAutogeneratedSidebar",previous:{title:"Troubleshooting",permalink:"/docs/Quaddle2.0/quaddle_03"},next:{title:"Quaddle Dimensions",permalink:"/docs/Quaddle2.0/quaddle_05"}},l={},d=[{value:"Adding New Dimensions to Quaddle2.0",id:"adding-new-dimensions-to-quaddle20",level:2},{value:"Adding New Features to Existing Dimensions",id:"adding-new-features-to-existing-dimensions",level:2},{value:"Adding New Dimensions",id:"adding-new-dimensions",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"adding-new-dimensions-to-quaddle20"},"Adding New Dimensions to Quaddle2.0"),(0,a.kt)("p",null,"Quaddle2.0 is a powerful tool for creating and manipulating stimuli for cognitive science research. One of the key benefits of Quaddle2.0 is its ability to create complex, multi-dimensional stimuli. In this post, we'll explore how to add new dimensions to Quaddle2.0, including adding new features to existing dimensions and adding entirely new dimensions."),(0,a.kt)("h2",{id:"adding-new-features-to-existing-dimensions"},"Adding New Features to Existing Dimensions"),(0,a.kt)("p",null,"Adding new features to existing dimensions in Quaddle2.0 is a relatively straightforward process. Here are the steps you'll need to follow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update Asset.txt: The Asset.txt file contains a list of all the assets that Quaddle2.0 can use. To add a new feature to an existing dimension, you'll need to update the Asset.txt file to include the new asset.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update Python Script: Next, you'll need to update the Python script that corresponds to the dimension you're adding the new feature to. This script will be responsible for generating the new asset and integrating it into the dimension.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update Correspondence ",(0,a.kt)("inlineCode",{parentName:"p"},"parser.py"),": Finally, you'll need to update the Correspondence ",(0,a.kt)("inlineCode",{parentName:"p"},"parser.py")," file to ensure that the new asset is properly linked to the correct dimension."))),(0,a.kt)("p",null,"Here's an example of how to add a new body shape (UpFrustum) to Quaddle2.0:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Update Asset.txt: Add the new body shape to the Asset.txt file, making sure to include all the necessary information (e.g., file path, scale, rotation, etc.).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Body: <..., UpFrustum>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Update Python Script: Update the Python script that corresponds to the body shape dimension to generate the new asset. This will likely involve importing the new asset and integrating it into the existing code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def createUpFrustum():\n    bpy.ops.mesh.primitive_cone_add(vertices=32, radius1=6, radius2=2, depth=9, location=(0, 0, 0))\n    frustum = bpy.context.active_object\n    frustum.name = 'Body'\n    return frustum, 'upfrustum'\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Update Correspondence ",(0,a.kt)("inlineCode",{parentName:"li"},"parser.py"),": Finally, update the Correspondence ",(0,a.kt)("inlineCode",{parentName:"li"},"parser.py")," file to ensure that the new body shape is properly linked to the body shape dimension.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def parse_body_shape(body_shape):\n    if traits[0] == 0:\n        body, body_type = createObject.createSphere()\n    ...\n    elif traits[0] == 6: # number of position in asset file\n        body, body_type = createObject.createUpFrustum()\n    \n")),(0,a.kt)("h2",{id:"adding-new-dimensions"},"Adding New Dimensions"),(0,a.kt)("p",null,"Adding entirely new dimensions to Quaddle2.0 is a bit more involved than adding new features to existing dimensions, but it's still a relatively straightforward process. Here are the steps you'll need to follow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create New Asset: First, you'll need to create a new asset that corresponds to the new dimension you're adding. This could be a 3D model, an image, or any other type of asset that's relevant to your research.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update Asset.txt: Next, you'll need to add the new asset to the Asset.txt file, making sure to include all the necessary information.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create New Python Script: You'll need to create a new Python script that corresponds to the new dimension you're adding. This script will be responsible for generating the new asset and integrating it into the dimension.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update Correspondence ",(0,a.kt)("inlineCode",{parentName:"p"},"parser.py"),": Finally, you'll need to update the Correspondence ",(0,a.kt)("inlineCode",{parentName:"p"},"parser.py")," file to ensure that the new asset is properly linked to the new dimension."))),(0,a.kt)("p",null,"By following these steps, you can easily add new features to existing dimensions or add entirely new dimensions to Quaddle2.0. This flexibility and ease-of-use make Quaddle2.0 a powerful tool for cognitive science research."),(0,a.kt)("p",null,"For any question, please contact author for help!"))}c.isMDXComponent=!0}}]);