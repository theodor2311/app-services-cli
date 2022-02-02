"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[670],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9245:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],p={},c=void 0,s={unversionedId:"commands/rhoas_kafka_topic_update",id:"commands/rhoas_kafka_topic_update",title:"rhoas_kafka_topic_update",description:"rhoas kafka topic update",source:"@site/../docs/commands/rhoas_kafka_topic_update.md",sourceDirName:"commands",slug:"/commands/rhoas_kafka_topic_update",permalink:"/commands/rhoas_kafka_topic_update",editUrl:"https://github.com/redhat-developer/app-services-cli/../docs/commands/rhoas_kafka_topic_update.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"rhoas_kafka_topic_list",permalink:"/commands/rhoas_kafka_topic_list"},next:{title:"rhoas_kafka_update",permalink:"/commands/rhoas_kafka_update"}},l=[{value:"rhoas kafka topic update",id:"rhoas-kafka-topic-update",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rhoas-kafka-topic-update"},"rhoas kafka topic update"),(0,o.kt)("p",null,"Update configuration details for a Kafka topic"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Update a topic in the current Kafka instance. You can update the cleanup policy, number of partitions, retention size, and retention time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rhoas kafka topic update [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Update the message retention period for a topic\n$ rhoas kafka topic update --name topic-1 --retention-ms -1\n\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --cleanup-policy string    Determines whether log messages are deleted, compacted, or both\n      --name string              Topic name\n      --partitions string        The number of partitions in the topic\n      --retention-bytes string   The maximum total size of a partition log segments before old log segments are deleted to free up space\n      --retention-ms string      The period of time in milliseconds the broker will retain a partition log before deleting it\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_topic"},"rhoas kafka topic"),"\t - Create, describe, update, list, and delete topics")))}d.isMDXComponent=!0}}]);