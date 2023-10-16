"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[1446],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>c});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){return function(t){var r=d(t.components);return n.createElement(e,a({},t,{components:r}))}},d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=o,m=c["".concat(i,".").concat(u)]||c[u]||g[u]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},l=void 0,p={unversionedId:"relay-debugging",id:"version-v1.6.0/relay-debugging",title:"Debugging",description:"When problems arise developers would need an insight into Relay's store. Relay provides a couple of tools to inspect the store and its records.",source:"@site/versioned_docs/version-v1.6.0/Modern-Debugging.md",sourceDirName:".",slug:"/relay-debugging",permalink:"/docs/v1.6.0/relay-debugging",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.0/Modern-Debugging.md",tags:[],version:"v1.6.0",lastUpdatedBy:"captbaritone",lastUpdatedAt:1697497870,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},sidebar:"version-v1.6.0/docs",previous:{title:"Routing",permalink:"/docs/v1.6.0/routing"},next:{title:"GraphQL Server Specification",permalink:"/docs/v1.6.0/graphql-server-specification"}},c={},d=[],u={toc:d};function g(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"When problems arise developers would need an insight into Relay's store. Relay provides a couple of tools to inspect the store and its records."),(0,a.mdx)("p",null,"Relay DevTools is tool designed to help developers inspect their Relay state and understand how store changes overtime. Relay DevTools ships in two ways:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/relay-devtools/oppikflppfjfdpjimpdadhelffjpciba"},"Chrome Extension")," creates a Relay tab in the developer tools interface for debugging apps in Chrome"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/relay-devtools"},"Electron App")," that connects to React Native apps running Relay")),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Store Explorer",src:r(56377).Z,width:"1219",height:"551"}),"\n",(0,a.mdx)("img",{alt:"Mutations View",src:r(49616).Z,width:"1291",height:"550"})))}g.isMDXComponent=!0},49616:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mutations-view-c5ab060209093a52fd4b2a236e09a08f.png"},56377:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/store-explorer-0a5595b3de2f554959305069dcf6082e.png"}}]);