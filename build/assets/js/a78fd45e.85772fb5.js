"use strict";(self.webpackChunkhaochen_blog=self.webpackChunkhaochen_blog||[]).push([[2768],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),l=o,h=d["".concat(c,".").concat(l)]||d[l]||m[l]||i;return a?r.createElement(h,n(n({ref:t},p),{},{components:a})):r.createElement(h,n({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,n[1]=s;for(var u=2;u<i;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}l.displayName="MDXCreateElement"},5873:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(7462),o=(a(7294),a(3905));const i={slug:"azure-app-service-custom-domain",title:"Map your Custom Domain to Your App Service App",author:"Haochen Qi",author_title:"Full Stack Developer",author_url:"https://github.com/HaochenQ",author_image_url:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4",tags:["Azure App Service","Custom Domain","TLS/SSL Binding","Certificate","HTTPS"]},n=void 0,s={permalink:"/blog/azure-app-service-custom-domain",source:"@site/blog/2022-06-01-custom-domain-on-app-service.md",title:"Map your Custom Domain to Your App Service App",description:"azure-map-custom-domain",date:"2022-06-01T00:00:00.000Z",formattedDate:"June 1, 2022",tags:[{label:"Azure App Service",permalink:"/blog/tags/azure-app-service"},{label:"Custom Domain",permalink:"/blog/tags/custom-domain"},{label:"TLS/SSL Binding",permalink:"/blog/tags/tls-ssl-binding"},{label:"Certificate",permalink:"/blog/tags/certificate"},{label:"HTTPS",permalink:"/blog/tags/https"}],readingTime:2.46,hasTruncateMarker:!0,authors:[{name:"Haochen Qi",title:"Full Stack Developer",url:"https://github.com/HaochenQ",imageURL:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4"}],frontMatter:{slug:"azure-app-service-custom-domain",title:"Map your Custom Domain to Your App Service App",author:"Haochen Qi",author_title:"Full Stack Developer",author_url:"https://github.com/HaochenQ",author_image_url:"https://avatars1.githubusercontent.com/u/44130343?s=400&u=a5a4729addf5c5b972d1d6220546273ff6e00eb4&v=4",tags:["Azure App Service","Custom Domain","TLS/SSL Binding","Certificate","HTTPS"]},prevItem:{title:"How to Protect Your Azure App Service App from DDoS Attacks",permalink:"/blog/protect-app-service-from-ddos-attacks"},nextItem:{title:"Azure Blob Functions's Re-triggering Issue",permalink:"/blog/azure-blob-function-retriggering"}},c={authorsImageUrls:[void 0]},u=[{value:"Purchase a Domain",id:"purchase-a-domain",level:2},{value:"Verify Your Domain Ownership and Add DNS Record",id:"verify-your-domain-ownership-and-add-dns-record",level:2},{value:"Add Your Custom Domain to Azure App Service",id:"add-your-custom-domain-to-azure-app-service",level:2},{value:"Create a TLS Binding to Use HTTPS",id:"create-a-tls-binding-to-use-https",level:2},{value:"Summary",id:"summary",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"azure-map-custom-domain",src:a(9186).Z,width:"1280",height:"720"})),(0,o.kt)("p",null,"Azure App Service provides a unique default FQDN for every App Service App like myapp.azurewebsites.net. However, we can also map our own domain to App Service App. Custom domain mapping feature is only supported by ",(0,o.kt)("strong",{parentName:"p"},"paid plans"),", while custom TLS/SSL binding is only supported by Plans higher than ",(0,o.kt)("strong",{parentName:"p"},"Basic"),". For more information about App Service Plan, see ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/pricing/details/app-service/windows/"},"App Service Pricing"),"."),(0,o.kt)("h2",{id:"purchase-a-domain"},"Purchase a Domain"),(0,o.kt)("p",null,"The very first step is to purchase your domain. You can buy your domain at App Service or any other domain registrar like Namecheap, GoDaddy, Domain and etc."),(0,o.kt)("h2",{id:"verify-your-domain-ownership-and-add-dns-record"},"Verify Your Domain Ownership and Add DNS Record"),(0,o.kt)("p",null,"You need to verify the ownership by adding the App Service Custom Domain Verification ID as a TXT record at your domain registrar. You can find this ID at Azure Portal >> Custom Domain. If you are going to map a root domain to your App Service App, configure the host/name as ",(0,o.kt)("strong",{parentName:"p"},"asuid"),", other wise ",(0,o.kt)("strong",{parentName:"p"},"asuid.subdomain"),".\n",(0,o.kt)("img",{alt:"azure-map-custom-domain",src:a(7734).Z,width:"609",height:"306"})),(0,o.kt)("p",null,"To add this DNS record, you need to go to the dashboard of your domain provider and find DNS record management section. The name for this section can vary for different providers. For example, you can find this at ",(0,o.kt)("strong",{parentName:"p"},"Advanced DNS")," in Namecheap dashboard Domain List >> Advanced DNS.",(0,o.kt)("img",{alt:"namecheap-dns-management",src:a(118).Z,width:"1159",height:"454"})),(0,o.kt)("p",null,"Adding domain verification IDs to your custom domain can prevent dangling DNS entries and help to avoid subdomain takeovers. For custom domains you previously configured without this verification ID, you should protect them from the same risk by adding the verification ID to your DNS record. For more information on this common high-severity threat, see ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/security/fundamentals/subdomain-takeover"},"Subdomain takeover"),"."),(0,o.kt)("p",null,"The next step is to create DNS records. You can choose A record to map the root domain to your App Service or CNAME to map a subdomain."),(0,o.kt)("h2",{id:"add-your-custom-domain-to-azure-app-service"},"Add Your Custom Domain to Azure App Service"),(0,o.kt)("p",null,'Go back to Azure Portal >> Custom Domains and click "Add Custom domain" to validate. If your domain is available and you have added the TXT record, you will see a screen like below:',(0,o.kt)("img",{alt:"domain-validation",src:a(4945).Z,width:"437",height:"442"})),(0,o.kt)("p",null,'Click "Add Custom domain" to add the verified domain.'),(0,o.kt)("h2",{id:"create-a-tls-binding-to-use-https"},"Create a TLS Binding to Use HTTPS"),(0,o.kt)("p",null,"Now you can visit your site with the domain you just added. However, you can only use HTTP because no certificate is added to this custom domain."),(0,o.kt)("p",null,"Luckily, Azure App Service provides free certificates for Azure apps known as Azure App Service Managed certificates which allow us to add the TLS binding with few clicks."),(0,o.kt)("p",null,"To use Azure App Service Managed Certificate, go to Azure Portal >> TLS/SSL settings. Click Private Key Certificate then choose ",(0,o.kt)("strong",{parentName:"p"},"Create App Service Managed Certificate")," to generate a free certificate for your custom domain."),(0,o.kt)("p",null,"After your certificate is generated, go back to Custom domains page and add the certificate as a binding. ",(0,o.kt)("img",{alt:"tls binding",src:a(8815).Z,width:"1102",height:"251"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In a summary, we can add our custom domains to Azure App Service apps and create TLS bindings with free App Service managed certificates to enable HTTPS."))}m.isMDXComponent=!0},7734:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Azure-portal-custom-domain-08143024f21d0eb0ee19e9d7e9adcc8c.png"},9186:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-custom-domain-13d3f95e232e5ed0fff9ae1892b02f53.jpg"},4945:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/domain-validation-98be577ede4bb2865600974d7ddf0ebf.jpg"},118:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/namecheap1-0ffc5427696d8a50e6fe1b669285cfc4.png"},8815:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tls-8df8c76ac52f996613722c46de6a6613.jpg"}}]);