"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[652],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return t?n.createElement(v,o(o({ref:r},p),{},{components:t})):n.createElement(v,o({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6810:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=t(3117),i=t(102),s=(t(7294),t(3905)),o=["components"],a={},c=void 0,l={unversionedId:"commands/rhoas_service-registry_list",id:"commands/rhoas_service-registry_list",title:"rhoas_service-registry_list",description:"rhoas service-registry list",source:"@site/../docs/commands/rhoas_service-registry_list.md",sourceDirName:"commands",slug:"/commands/rhoas_service-registry_list",permalink:"/commands/rhoas_service-registry_list",editUrl:"https://github.com/redhat-developer/app-services-cli/../docs/commands/rhoas_service-registry_list.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"rhoas_service-registry_describe",permalink:"/commands/rhoas_service-registry_describe"},next:{title:"rhoas_service-registry_role",permalink:"/commands/rhoas_service-registry_role"}},p=[{value:"rhoas service-registry list",id:"rhoas-service-registry-list",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:p};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"rhoas-service-registry-list"},"rhoas service-registry list"),(0,s.kt)("p",null,"List Service Registry instances"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"List all Service Registry instances for your account and paginate over the results."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rhoas service-registry list [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rhoas service-registry list\n\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --limit int32     The maximum number of Service Registry instances to be returned (default 100)\n  -o, --output string   Format in which to display the Service Registry instance (choose from: "json", "yml", "yaml")\n      --page int32      Display the Service Registry instances from the specified page number (default 1)\n')),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/commands/rhoas_service-registry"},"rhoas service-registry"),"\t - Service Registry commands")))}m.isMDXComponent=!0}}]);