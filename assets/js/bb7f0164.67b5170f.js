"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[19741],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){return function(t){var a=p(t.components);return n.createElement(e,d({},t,{components:a}))}},p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||d;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,i=new Array(d);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<d;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(39960),r=a(86341),d=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return d.createElement("div",{className:"docsRating",id:"docsRating"},d.createElement("hr",null),t)}var s=function(){var e=d.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":d.createElement(d.Fragment,null,"Is this page useful?",d.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},d.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),d.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},d.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return d.createElement("p",null,"Let us know how these docs can be improved by",d.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return d.createElement("p",null,"Help us make the site even better by"," ",d.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return d.createElement(o,null,d.createElement(l,null),d.createElement(s,null),d.createElement(u,null))},m=function(){return d.createElement(o,null,d.createElement(s,null),d.createElement(u,null))};const c=function(){return(0,r.fbContent)({internal:d.createElement(p,null),external:d.createElement(m,null)})}},24589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(83117),r=a(80102),d=(a(67294),a(3905)),i=(a(68629),a(86341)),o=["components"],s={id:"typesafe-updaters-faq",title:"Typesafe updaters FAQ",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",description:"Typesafe updater FAQ",keywords:["typesafe updaters","readUpdatableQuery","readUpdatableFragment","updater","updatable"]},l="Typesafe Updaters FAQ",u={unversionedId:"guided-tour/updating-data/typesafe-updaters-faq",id:"guided-tour/updating-data/typesafe-updaters-faq",title:"Typesafe updaters FAQ",description:"Typesafe updater FAQ",source:"@site/docs/guided-tour/updating-data/typesafe-updaters-faq.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",permalink:"/docs/next/guided-tour/updating-data/typesafe-updaters-faq/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/updating-data/typesafe-updaters-faq.md",tags:[],version:"current",lastUpdatedBy:"Cooper Lees",lastUpdatedAt:1702599382,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{id:"typesafe-updaters-faq",title:"Typesafe updaters FAQ",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",description:"Typesafe updater FAQ",keywords:["typesafe updaters","readUpdatableQuery","readUpdatableFragment","updater","updatable"]},sidebar:"docs",previous:{title:"Imperatively modifying linked fields",permalink:"/docs/next/guided-tour/updating-data/imperatively-modifying-linked-fields/"},next:{title:"Local Data Updates",permalink:"/docs/next/guided-tour/updating-data/local-data-updates/"}},p={},m=[{value:"What is typesafe updaters?",id:"what-is-typesafe-updaters",level:2},{value:"Why?",id:"why",level:2},{value:"What was wrong with the existing APIs?",id:"what-was-wrong-with-the-existing-apis",level:2},{value:"How does a developer use typesafe updaters?",id:"how-does-a-developer-use-typesafe-updaters",level:2},{value:"Why are these labeled <code>_EXPERIMENTAL</code>?",id:"why-are-these-labeled-_experimental",level:2},{value:"What is an updatable query or fragment?",id:"what-is-an-updatable-query-or-fragment",level:2},{value:"Are fields selected in updatable queries and fragments fetched from the server?",id:"are-fields-selected-in-updatable-queries-and-fragments-fetched-from-the-server",level:2},{value:"What if I want to fetch a field and also mutate it?",id:"what-if-i-want-to-fetch-a-field-and-also-mutate-it",level:2},{value:"What are some consequences of this?",id:"what-are-some-consequences-of-this",level:2},{value:"Where do I get a <code>store</code>?",id:"where-do-i-get-a-store",level:2}],c={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,o);return(0,d.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"typesafe-updaters-faq"},"Typesafe Updaters FAQ"),(0,d.mdx)(i.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,d.mdx)("admonition",{type:"note"},(0,d.mdx)("p",{parentName:"admonition"},"Is something missing from this Q&A? Are you confused? Would you like help adopting these APIs? Please, reach out to ",(0,d.mdx)("a",{parentName:"p",href:"https://fb.workplace.com/profile.php?id=100042823931887"},"Robert Balicki"),". I am happy to help!"))),(0,d.mdx)("h1",{id:"general"},"General"),(0,d.mdx)("h2",{id:"what-is-typesafe-updaters"},"What is typesafe updaters?"),(0,d.mdx)("p",null,"Typesafe updaters is the name given to a project to provide a typesafe and ergonomic alternative to the existing APIs for imperatively updating data in the Relay store."),(0,d.mdx)("h2",{id:"why"},"Why?"),(0,d.mdx)("p",null,"Relay provides typesafe and ergonomic APIs for fetching and managing data that originates on the server. In addition, Relay provides the ability to define local-only fields in ",(0,d.mdx)("strong",{parentName:"p"},"client schema extensions"),". However, the APIs for mutating the data in these fields has hitherto been verbose and not ergonomic, meaning that we could not recommend Relay as a solution for managing local state."),(0,d.mdx)("h2",{id:"what-was-wrong-with-the-existing-apis"},"What was wrong with the existing APIs?"),(0,d.mdx)("p",null,"The pre-existing APIs are verbose and not typesafe. They make it easy to make a variety of mistakes and require that the developer understand a new set of APIs only when writing updaters."),(0,d.mdx)("p",null,"Typesafe updaters is a set of APIs that are typesafe and (hopefully) more ergonomic. They leverage well-known Relay idioms (queries, fragments, type refinement) and use getters and setters instead of requiring that the developer learn about a set of methods that are unused elsewhere."),(0,d.mdx)("h2",{id:"how-does-a-developer-use-typesafe-updaters"},"How does a developer use typesafe updaters?"),(0,d.mdx)("p",null,"With typesafe updaters, a developers writes an updatable query or a fragment that specifies the data to imperatively update. Then, the developer reads out that data from the store, returning a so-called ",(0,d.mdx)("strong",{parentName:"p"},"updatable proxy"),". Then, the developer mutates that updatable proxy. Mutating that updatable proxy using setters (e.g. ",(0,d.mdx)("inlineCode",{parentName:"p"},'updatableData.name = "Godzilla"'),") results in calls to the old API, but with added type safety."),(0,d.mdx)("h2",{id:"why-are-these-labeled-_experimental"},"Why are these labeled ",(0,d.mdx)("inlineCode",{parentName:"h2"},"_EXPERIMENTAL"),"?"),(0,d.mdx)("p",null,"These are de facto not experimental. We encourage you to use them when writing new code! This suffix will be removed soon."),(0,d.mdx)("h2",{id:"what-is-an-updatable-query-or-fragment"},"What is an updatable query or fragment?"),(0,d.mdx)("p",null,"An updatable query or fragment is a query or fragment that has the ",(0,d.mdx)("inlineCode",{parentName:"p"},"@updatable")," directive."),(0,d.mdx)("h1",{id:"updatable-queries-and-fragments-are-not-fetched"},"Updatable queries and fragments are not fetched"),(0,d.mdx)("h2",{id:"are-fields-selected-in-updatable-queries-and-fragments-fetched-from-the-server"},"Are fields selected in updatable queries and fragments fetched from the server?"),(0,d.mdx)("p",null,"No! The server doesn't know about updatable queries and fragments. Their fields are never fetched."),(0,d.mdx)("p",null,"Even if you spread an updatable fragment in a regular query or fragment, the fields selected by that updatable fragment are not fetched as part of that request."),(0,d.mdx)("h2",{id:"what-if-i-want-to-fetch-a-field-and-also-mutate-it"},"What if I want to fetch a field and also mutate it?"),(0,d.mdx)("p",null,"You should select that field in both a regular query/fragment ",(0,d.mdx)("strong",{parentName:"p"},"and")," in an updatable query/fragment."),(0,d.mdx)("h2",{id:"what-are-some-consequences-of-this"},"What are some consequences of this?"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"When you read out updatable data, it can be missing if it isn't present in the store."),(0,d.mdx)("li",{parentName:"ul"},"You cannot spread regular fragments in updatable queries/fragments."),(0,d.mdx)("li",{parentName:"ul"},"The generated artifact for updatable queries/fragments does not contain a query ID and does not contain a normalization AST (which is used for writing network data to the store.)"),(0,d.mdx)("li",{parentName:"ul"},"Directives like ",(0,d.mdx)("inlineCode",{parentName:"li"},"@defer"),", etc. do not make sense in this context, and are disallowed.")),(0,d.mdx)("h1",{id:"misc"},"Misc"),(0,d.mdx)("h2",{id:"where-do-i-get-a-store"},"Where do I get a ",(0,d.mdx)("inlineCode",{parentName:"h2"},"store"),"?"),(0,d.mdx)("p",null,"The classes ",(0,d.mdx)("inlineCode",{parentName:"p"},"RelayRecordSourceSelectorProxy")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"RelayRecordSourceProxy")," contain the methods ",(0,d.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"readUpdatableFragment"),". One can acquire an instance of these classes:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"In updaters of mutations and subscriptions"),(0,d.mdx)("li",{parentName:"ul"},"In optimistic updaters of mutations"),(0,d.mdx)("li",{parentName:"ul"},"When using ",(0,d.mdx)("inlineCode",{parentName:"li"},"RelayModernEnvironment"),"'s ",(0,d.mdx)("inlineCode",{parentName:"li"},"commitUpdate"),", ",(0,d.mdx)("inlineCode",{parentName:"li"},"applyUpdate"),", etc. methods."),(0,d.mdx)("li",{parentName:"ul"},"When using the standalone ",(0,d.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," method.")))}f.isMDXComponent=!0}}]);