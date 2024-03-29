"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),y=o,d=s["".concat(c,".").concat(y)]||s[y]||m[y]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Introduction",custom_edit_url:"https://github.com/SymphonyQL/SymphonyQL/edit/master/docs/intro.md",slug:"/"},i=void 0,l={unversionedId:"intro",id:"intro",title:"Introduction",description:"SymphonyQL allows you to write GraphQL servers for both Scala and Java built in the same way. It is built at the top of the pekko-streams.",source:"@site/../mdoc/target/mdoc/intro.md",sourceDirName:".",slug:"/",permalink:"/SymphonyQL/docs/",draft:!1,editUrl:"https://github.com/SymphonyQL/SymphonyQL/edit/master/docs/intro.md",tags:[],version:"current",frontMatter:{title:"Introduction",custom_edit_url:"https://github.com/SymphonyQL/SymphonyQL/edit/master/docs/intro.md",slug:"/"},sidebar:"someSidebar",next:{title:"Quick Start - Java",permalink:"/SymphonyQL/docs/quickstart-java"}},c={},p=[{value:"Highlights",id:"highlights",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SymphonyQL allows you to write GraphQL servers for both Scala and Java built in the same way. It is built at the top of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-pekko"},"pekko-streams"),"."),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"support for Java 21: record classes, sealed interface."),(0,o.kt)("li",{parentName:"ul"},"minimal dependencies, no adapter required."),(0,o.kt)("li",{parentName:"ul"},"native support for ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-pekko"},"Apache Pekko"),", including Java and Scala."),(0,o.kt)("li",{parentName:"ul"},"minimal amount of boilerplate: no need to manually define a schema for every type in your API.")))}m.isMDXComponent=!0}}]);