"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2093],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return v}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),v=o,d=m["".concat(c,".").concat(v)]||m[v]||u[v]||i;return t?n.createElement(d,s(s({ref:r},p),{},{components:t})):n.createElement(d,s({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2864:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=t(3117),o=t(102),i=(t(7294),t(3905)),s=["components"],a={},c=void 0,l={unversionedId:"commands/rhoas_service-registry_role_revoke",id:"commands/rhoas_service-registry_role_revoke",title:"rhoas_service-registry_role_revoke",description:"rhoas service-registry role revoke",source:"@site/../docs/commands/rhoas_service-registry_role_revoke.md",sourceDirName:"commands",slug:"/commands/rhoas_service-registry_role_revoke",permalink:"/commands/rhoas_service-registry_role_revoke",editUrl:"https://github.com/redhat-developer/app-services-cli/../docs/commands/rhoas_service-registry_role_revoke.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"rhoas_service-registry_role_list",permalink:"/commands/rhoas_service-registry_role_list"},next:{title:"rhoas_service-registry_use",permalink:"/commands/rhoas_service-registry_use"}},p=[{value:"rhoas service-registry role revoke",id:"rhoas-service-registry-role-revoke",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rhoas-service-registry-role-revoke"},"rhoas service-registry role revoke"),(0,i.kt)("p",null,"Revoke role for principal"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Revoke the role of a user or service account."),(0,i.kt)("p",null,"NOTE: It is not possible to revoke the role of the owner of the instance. The instance owner always retains ADMIN rights."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rhoas service-registry role revoke [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## Revoke role for user\nrhoas service-registry role revoke --username=janedough\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --instance-id string       ID of the Service Registry instance to be used (by default, uses the currently selected instance)\n      --service-account string   ServiceAccount name\n      --username string          Username of the user within organization\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/rhoas_service-registry_role"},"rhoas service-registry role"),"\t - Service Registry role management")))}m.isMDXComponent=!0}}]);