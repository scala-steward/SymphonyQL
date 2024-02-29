"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,d=m["".concat(c,".").concat(g)]||m[g]||s[g]||p;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const p={},o="Java Schema Annotation",i={unversionedId:"schema-apt",id:"schema-apt",title:"Java Schema Annotation",description:"@EnumSchema",source:"@site/../mdoc/target/mdoc/schema-apt.md",sourceDirName:".",slug:"/schema-apt",permalink:"/SymphonyQL/docs/schema-apt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/SymphonyQL/docs/quickstart"},next:{title:"Schema Specification",permalink:"/SymphonyQL/docs/schema"}},c={},l=[{value:"@EnumSchema",id:"enumschema",level:2},{value:"@InputSchema",id:"inputschema",level:2},{value:"@ObjectSchema",id:"objectschema",level:2},{value:"@IgnoreSchema",id:"ignoreschema",level:2}],u={toc:l},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java-schema-annotation"},"Java Schema Annotation"),(0,a.kt)("h2",{id:"enumschema"},"@EnumSchema"),(0,a.kt)("p",null,"Defining SymphonyQL ",(0,a.kt)("strong",{parentName:"p"},"Enum Type"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@EnumSchema\nenum OriginEnum {\n    EARTH, MARS, BELT\n}\n")),(0,a.kt)("p",null,"The enumeration used in ",(0,a.kt)("strong",{parentName:"p"},"Input Object Type")," must be annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@ArgExtractor"),"."),(0,a.kt)("p",null,"It is equivalent to the GraphQL Enum Type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum Origin {\n  EARTH\n  MARS\n  BELT\n}\n")),(0,a.kt)("h2",{id:"inputschema"},"@InputSchema"),(0,a.kt)("p",null,"Defining SymphonyQL ",(0,a.kt)("strong",{parentName:"p"},"Input Object Type"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@InputSchema\n@ArgExtractor\nrecord FilterArgs(Optional<Origin> origin, Optional<NestedArg> nestedArg) {\n}\n")),(0,a.kt)("p",null,"Any custom type (including enumeration) used for ",(0,a.kt)("strong",{parentName:"p"},"Input Object Type")," needs to be annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"ArgExtractor"),"."),(0,a.kt)("p",null,"As mentioned above, ",(0,a.kt)("inlineCode",{parentName:"p"},"NestedArg")," are used in ",(0,a.kt)("strong",{parentName:"p"},"Input Object Type"),", to generate the correct ",(0,a.kt)("strong",{parentName:"p"},"Input Object Type"),",\nit is necessary to define ",(0,a.kt)("inlineCode",{parentName:"p"},"NestedArg")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"@InputSchema")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@ArgExtractor"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@InputSchema\n@ArgExtractor\nrecord NestedArg(String id, Optional<String> name) {\n}\n")),(0,a.kt)("p",null,"It is equivalent to the GraphQL Input Type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input NestedArgInput {\n    id: String!\n    name: String\n}\n")),(0,a.kt)("h2",{id:"objectschema"},"@ObjectSchema"),(0,a.kt)("p",null,"Defining SymphonyQL ",(0,a.kt)("strong",{parentName:"p"},"Object Type"),"."),(0,a.kt)("p",null,"It has one argument ",(0,a.kt)("inlineCode",{parentName:"p"},"withArgs"),", which defaults to false, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ObjectSchema\nrecord CharacterOutput(String name, Origin origin) {\n}\n")),(0,a.kt)("p",null,"It is equivalent to the GraphQL Object Type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterOutput {\n  name: String!\n  origin: Origin!\n}\n")),(0,a.kt)("p",null,"When defining a ",(0,a.kt)("strong",{parentName:"p"},"Resolver")," Object, ",(0,a.kt)("inlineCode",{parentName:"p"},"withArgs")," must be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ObjectSchema(withArgs = true)\nrecord Queries(Function<FilterArgs, Source<CharacterOutput, NotUsed>> characters) {\n}\n")),(0,a.kt)("p",null,"It is equivalent to the GraphQL Object Type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"# There is no FilterArgs, but it has all its fields: origin, nestedArg\ntype Queries {\n    characters(origin: Origin, nestedArg: NestedArgInput): [CharacterOutput!]\n}\n")),(0,a.kt)("h2",{id:"ignoreschema"},"@IgnoreSchema"),(0,a.kt)("p",null,"Ignore class from SymphonyQL's processing."))}s.isMDXComponent=!0}}]);