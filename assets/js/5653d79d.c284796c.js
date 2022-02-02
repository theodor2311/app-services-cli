"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3934],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8479:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=t(3117),i=t(102),s=(t(7294),t(3905)),a=["components"],o={},c=void 0,l={unversionedId:"commands/rhoas_service-registry_create",id:"commands/rhoas_service-registry_create",title:"rhoas_service-registry_create",description:"rhoas service-registry create",source:"@site/../docs/commands/rhoas_service-registry_create.md",sourceDirName:"commands",slug:"/commands/rhoas_service-registry_create",permalink:"/commands/rhoas_service-registry_create",editUrl:"https://github.com/redhat-developer/app-services-cli/../docs/commands/rhoas_service-registry_create.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"rhoas_service-registry_artifact_versions",permalink:"/commands/rhoas_service-registry_artifact_versions"},next:{title:"rhoas_service-registry_delete",permalink:"/commands/rhoas_service-registry_delete"}},p=[{value:"rhoas service-registry create",id:"rhoas-service-registry-create",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],m={toc:p};function u(e){var r=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"rhoas-service-registry-create"},"rhoas service-registry create"),(0,s.kt)("p",null,"Create a Service Registry instance"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"Create a Service Registry instance to store and manage your schema and API artifacts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rhoas service-registry create [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'## Create Service Registry instance\nrhoas service-registry create --name myregistry\n\n## Create Service Registry instance with description\nrhoas service-registry create --name myregistry --description "description of instance"\n\n')),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --description string   User-provided description of the new Service Registry instance\n      --name string          Unique name of the Service Registry instance\n  -o, --output string        Format in which to display the Service Registry instance (choose from: "json", "yml", "yaml") (default "json")\n      --use                  Set the new Service Registry instance to the current instance (default true)\n')),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/commands/rhoas_service-registry"},"rhoas service-registry"),"\t - Service Registry commands")))}u.isMDXComponent=!0}}]);