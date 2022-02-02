"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9244],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||c;return t?n.createElement(v,i(i({ref:r},u),{},{components:t})):n.createElement(v,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1846:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=t(3117),o=t(102),c=(t(7294),t(3905)),i=["components"],a={},s=void 0,l={unversionedId:"commands/rhoas_service-account_describe",id:"commands/rhoas_service-account_describe",title:"rhoas_service-account_describe",description:"rhoas service-account describe",source:"@site/../docs/commands/rhoas_service-account_describe.md",sourceDirName:"commands",slug:"/commands/rhoas_service-account_describe",permalink:"/commands/rhoas_service-account_describe",editUrl:"https://github.com/redhat-developer/app-services-cli/../docs/commands/rhoas_service-account_describe.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"rhoas_service-account_delete",permalink:"/commands/rhoas_service-account_delete"},next:{title:"rhoas_service-account_list",permalink:"/commands/rhoas_service-account_list"}},u=[{value:"rhoas service-account describe",id:"rhoas-service-account-describe",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],p={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"rhoas-service-account-describe"},"rhoas service-account describe"),(0,c.kt)("p",null,"View configuration details for a service account"),(0,c.kt)("h3",{id:"synopsis"},"Synopsis"),(0,c.kt)("p",null,"View configuration details for a service account."),(0,c.kt)("p",null,"Use the \u201c--id\u201d flag to specify which service account you would like to view."),(0,c.kt)("p",null,"You can view the output as either JSON or YAML."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"rhoas service-account describe [flags]\n")),(0,c.kt)("h3",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# View a specific service account\n$ rhoas service-account describe --id=8a06e685-f827-44bc-b0a7-250bc8abe52e --output yml\n\n")),(0,c.kt)("h3",{id:"options"},"Options"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'      --id string       The unique ID of the service account to view\n  -o, --output string   Format in which to display the service account (choose from: "json", "yml", "yaml") (default "json")\n')),(0,c.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,c.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/commands/rhoas_service-account"},"rhoas service-account"),"\t - Create, list, describe, delete, and update service accounts")))}d.isMDXComponent=!0}}]);