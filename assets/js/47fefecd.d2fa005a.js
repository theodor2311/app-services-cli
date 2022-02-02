"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7776],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||a;return n?t.createElement(d,s(s({ref:r},p),{},{components:n})):t.createElement(d,s({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4777:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],i={},u=void 0,c={unversionedId:"commands/rhoas_kafka_consumer-group_list",id:"commands/rhoas_kafka_consumer-group_list",title:"rhoas_kafka_consumer-group_list",description:"rhoas kafka consumer-group list",source:"@site/../docs/commands/rhoas_kafka_consumer-group_list.md",sourceDirName:"commands",slug:"/commands/rhoas_kafka_consumer-group_list",permalink:"/commands/rhoas_kafka_consumer-group_list",editUrl:"https://github.com/redhat-developer/app-services-cli/../docs/commands/rhoas_kafka_consumer-group_list.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"rhoas_kafka_consumer-group_describe",permalink:"/commands/rhoas_kafka_consumer-group_describe"},next:{title:"rhoas_kafka_consumer-group_reset-offset",permalink:"/commands/rhoas_kafka_consumer-group_reset-offset"}},p=[{value:"rhoas kafka consumer-group list",id:"rhoas-kafka-consumer-group-list",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],l={toc:p};function m(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rhoas-kafka-consumer-group-list"},"rhoas kafka consumer-group list"),(0,a.kt)("p",null,"List all consumer groups"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"List the consumer groups in the current Kafka instance. You can view a list of all consumer groups in the Kafka instance, view a specific consumer group, or view the consumer groups for a particular topic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rhoas kafka consumer-group list [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# List all consumer groups\n$ rhoas kafka consumer-group list\n\n# List all consumer groups in JSON format\n$ rhoas kafka consumer-group list -o json\n\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -o, --output string   Specify the output format. Choose from: "json", "yaml", "yml"\n      --page int32      View the specified page number in the list of consumer groups (default 1)\n      --search string   Text search to filter consumer groups by ID\n      --size int32      Maximum number of consumer groups to be returned per page (default 10)\n      --topic string    Fetch the consumer groups for a specific Kafka topic\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_consumer-group"},"rhoas kafka consumer-group"),"\t - Describe, list, and delete consumer groups for the current Kafka instance")))}m.isMDXComponent=!0}}]);