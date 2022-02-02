"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5169],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),i=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=i(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?t.createElement(f,s(s({ref:r},l),{},{components:n})):t.createElement(f,s({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5263:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var t=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],c={},u=void 0,i={unversionedId:"commands/rhoas_kafka_consumer-group_delete",id:"commands/rhoas_kafka_consumer-group_delete",title:"rhoas_kafka_consumer-group_delete",description:"rhoas kafka consumer-group delete",source:"@site/../docs/commands/rhoas_kafka_consumer-group_delete.md",sourceDirName:"commands",slug:"/commands/rhoas_kafka_consumer-group_delete",permalink:"/commands/rhoas_kafka_consumer-group_delete",editUrl:"https://github.com/redhat-developer/app-services-cli/../docs/commands/rhoas_kafka_consumer-group_delete.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"rhoas_kafka_consumer-group",permalink:"/commands/rhoas_kafka_consumer-group"},next:{title:"rhoas_kafka_consumer-group_describe",permalink:"/commands/rhoas_kafka_consumer-group_describe"}},l=[{value:"rhoas kafka consumer-group delete",id:"rhoas-kafka-consumer-group-delete",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],p={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rhoas-kafka-consumer-group-delete"},"rhoas kafka consumer-group delete"),(0,a.kt)("p",null,"Delete a consumer group"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Delete a consumer group from the current Kafka instance."),(0,a.kt)("p",null,"To select a different Kafka instance, use the \u201crhoas kafka use\u201d command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rhoas kafka consumer-group delete [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# delete a consumer group\n$ rhoas kafka consumer-group delete --id consumer_group_1\n\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --id string   The unique ID of the consumer group to delete\n  -y, --yes         Skip confirmation of this action \n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_consumer-group"},"rhoas kafka consumer-group"),"\t - Describe, list, and delete consumer groups for the current Kafka instance")))}m.isMDXComponent=!0}}]);