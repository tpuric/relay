"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[42943],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>s,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){return function(n){var t=m(n.components);return a.createElement(e,o({},n,{components:t}))}},m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=m(t),s=r,h=c["".concat(i,".").concat(s)]||c[s]||u[s]||o;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},96592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],l={id:"api-cheatsheet",title:"API Cheatsheet",original_id:"api-cheatsheet"},d=void 0,p={unversionedId:"api-cheatsheet",id:"version-v10.0.0/api-cheatsheet",title:"API Cheatsheet",description:"A reference for translating between the Relay Classic and Relay Modern APIs.",source:"@site/versioned_docs/version-v10.0.0/Modern-APICheatsheet.md",sourceDirName:".",slug:"/api-cheatsheet",permalink:"/docs/v10.0.0/api-cheatsheet",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.0.0/Modern-APICheatsheet.md",tags:[],version:"v10.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1697130822,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"api-cheatsheet",title:"API Cheatsheet",original_id:"api-cheatsheet"}},c={},m=[{value:"To add a new root for relay components",id:"to-add-a-new-root-for-relay-components",level:3},{value:"To add a new relay container",id:"to-add-a-new-relay-container",level:3},{value:"To add a new relay container that has changing data requirements",id:"to-add-a-new-relay-container-that-has-changing-data-requirements",level:3},{value:"To add a new paginating relay container",id:"to-add-a-new-paginating-relay-container",level:3},{value:"To update a variable for my component",id:"to-update-a-variable-for-my-component",level:3},{value:"To paginate through a connection",id:"to-paginate-through-a-connection",level:3},{value:"To force fetch a component",id:"to-force-fetch-a-component",level:3},{value:"To commit a mutation",id:"to-commit-a-mutation",level:3}],s={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A reference for translating between the Relay Classic and Relay Modern APIs."),(0,o.mdx)("h3",{id:"to-add-a-new-root-for-relay-components"},"To add a new root for relay components"),(0,o.mdx)("p",null,"Classic: ",(0,o.mdx)("inlineCode",{parentName:"p"},"<RelayRootContainer>")),(0,o.mdx)("p",null,"Modern: ",(0,o.mdx)("inlineCode",{parentName:"p"},"<QueryRenderer>")),(0,o.mdx)("h3",{id:"to-add-a-new-relay-container"},"To add a new relay container"),(0,o.mdx)("p",null,"Classic: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Relay.createContainer")),(0,o.mdx)("p",null,"Modern: ",(0,o.mdx)("inlineCode",{parentName:"p"},"createFragmentContainer")),(0,o.mdx)("h3",{id:"to-add-a-new-relay-container-that-has-changing-data-requirements"},"To add a new relay container that has changing data requirements"),(0,o.mdx)("p",null,"Classic: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Relay.createContainer")),(0,o.mdx)("p",null,"Modern ",(0,o.mdx)("inlineCode",{parentName:"p"},"createRefetchContainer")),(0,o.mdx)("h3",{id:"to-add-a-new-paginating-relay-container"},"To add a new paginating relay container"),(0,o.mdx)("p",null,"Classic: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Relay.createContainer")),(0,o.mdx)("p",null,"Modern: ",(0,o.mdx)("inlineCode",{parentName:"p"},"createPaginationContainer")),(0,o.mdx)("h3",{id:"to-update-a-variable-for-my-component"},"To update a variable for my component"),(0,o.mdx)("p",null,"Classic: ",(0,o.mdx)("inlineCode",{parentName:"p"},"this.props.relay.setVariable({foo: bar}...)")),(0,o.mdx)("p",null,"Modern: ",(0,o.mdx)("inlineCode",{parentName:"p"},"this.props.relay.refetch({foo: bar}...")," in a Refetch Container"),(0,o.mdx)("h3",{id:"to-paginate-through-a-connection"},"To paginate through a connection"),(0,o.mdx)("p",null,"Classic: ",(0,o.mdx)("inlineCode",{parentName:"p"},"this.props.relay.setVariable({count: prevCount + pageSize}...)")),(0,o.mdx)("p",null,"Modern ",(0,o.mdx)("inlineCode",{parentName:"p"},"this.props.relay.loadMore(pageSize...)")," in a Pagination Container"),(0,o.mdx)("h3",{id:"to-force-fetch-a-component"},"To force fetch a component"),(0,o.mdx)("p",null,"Classic: ",(0,o.mdx)("inlineCode",{parentName:"p"},"this.props.relay.forceFetch()")),(0,o.mdx)("p",null,"Modern: ",(0,o.mdx)("inlineCode",{parentName:"p"},"this.props.relay.refetchConnection(...)")," in a Pagination Container"),(0,o.mdx)("p",null,"or: ",(0,o.mdx)("inlineCode",{parentName:"p"},"this.props.relay.refetch({}, {}, callback, {force: true})")," in a Refetch Container"),(0,o.mdx)("h3",{id:"to-commit-a-mutation"},"To commit a mutation"),(0,o.mdx)("p",null,"Classic: ",(0,o.mdx)("inlineCode",{parentName:"p"},"this.props.relay.commitUpdate(mutation...)")),(0,o.mdx)("p",null,"Modern: ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation(this.props.relay.environment, {mutation...})")))}u.isMDXComponent=!0}}]);