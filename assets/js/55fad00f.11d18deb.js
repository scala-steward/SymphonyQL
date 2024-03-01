"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),d=a,g=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Quick Start - Java",custom_edit_url:"https://github.com/SymphonyQL/SymphonyQL/edit/master/docs/quickstart-java.md"},o=void 0,p={unversionedId:"quickstart-java",id:"quickstart-java",title:"Quick Start - Java",description:"This guide gets you started with SymphonyQL with a simple working example on Java.",source:"@site/../mdoc/target/mdoc/quickstart-java.md",sourceDirName:".",slug:"/quickstart-java",permalink:"/SymphonyQL/docs/quickstart-java",draft:!1,editUrl:"https://github.com/SymphonyQL/SymphonyQL/edit/master/docs/quickstart-java.md",tags:[],version:"current",frontMatter:{title:"Quick Start - Java",custom_edit_url:"https://github.com/SymphonyQL/SymphonyQL/edit/master/docs/quickstart-java.md"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/SymphonyQL/docs/"},next:{title:"Quick Start - Scala",permalink:"/SymphonyQL/docs/quickstart-scala"}},c={},s=[],u={toc:s},l="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide gets you started with SymphonyQL with a simple working example on Java."),(0,a.kt)("p",null,"Assuming we want to develop an application for the GraphQL Schema below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Queries\n}\n\nenum Origin {\n  EARTH\n  MARS\n  BELT\n}\n\ninput NestedArgInput {\n  id: String!\n  name: String\n}\n\ntype CharacterOutput {\n  name: String!\n  origin: Origin!\n}\n\ntype Queries {\n  characters(origin: Origin, nestedArg: NestedArgInput): [CharacterOutput!]\n}\n")),(0,a.kt)("p",null,"SymphonyQL uses APT (Annotation Processing Tool) to automatically generate schema during compilation.\nTherefore, you only need to write ",(0,a.kt)("strong",{parentName:"p"},"record class")," to define the schema:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Defining Resolver")),(0,a.kt)("p",null,"Resolver Object defined using ",(0,a.kt)("inlineCode",{parentName:"p"},"@ObjectSchema")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"withArgs = true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ObjectSchema(withArgs = true)\nrecord Queries(Function<FilterArgs, Source<CharacterOutput, NotUsed>> characters) {\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"FilterArgs")," is the input and ",(0,a.kt)("inlineCode",{parentName:"p"},"Source<CharacterOutput, NotUsed>>")," is the output.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Source")," indicates that it is a Query/Subscription that returns pekko streams. For more types, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/SymphonyQL/docs/schema"},"Schema Specification"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Defining Object")),(0,a.kt)("p",null,"Object defined using ",(0,a.kt)("inlineCode",{parentName:"p"},"@ObjectSchema"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@ObjectSchema\nrecord CharacterOutput(String name, Origin origin) {\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Defining Input")),(0,a.kt)("p",null,"Input defined using ",(0,a.kt)("inlineCode",{parentName:"p"},"@InputSchema")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@ArgExtractor"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@InputSchema\n@ArgExtractor\nrecord FilterArgs(Optional<Origin> origin, Optional<NestedArg> nestedArg) {\n}\n\n@InputSchema\n@ArgExtractor\nrecord NestedArg(String id, Optional<String> name) {\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Defining Enum")),(0,a.kt)("p",null,"Enum defined using ",(0,a.kt)("inlineCode",{parentName:"p"},"@EnumSchema"),", If enumeration is input, you also need ",(0,a.kt)("inlineCode",{parentName:"p"},"@ArgExtractor"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@EnumSchema\n@ArgExtractor\nenum Origin {\n  EARTH,\n  MARS,\n  BELT\n}\n")),(0,a.kt)("p",null,"After writing the record class, we don't need to write graphql schemas to start developing the application."),(0,a.kt)("p",null,"Let's start developing the application now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    var graphql = SymphonyQL\n            .newSymphonyQL()\n            .addQuery(\n                    new Queries(\n                            args1 -> Source.single(new CharacterOutput("hello-" + args1.origin().map(Enum::toString).get(), args1.origin().get()))\n                    ),\n                    QueriesSchema.schema\n            )\n            .build();\n\n    var characters = """\n              {\n              characters(origin: "BELT") {\n                name\n                origin\n              }\n            }""";\n\n    final var actorSystem = ActorSystem.create("symphonyActorSystem");\n\n    var getRes = graphql.run(\n            SymphonyQLRequest.newRequest().query(Optional.of(characters)).build(),\n            actorSystem\n    );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"QueriesSchema.schema")," is a static method automatically generated by APT."))}m.isMDXComponent=!0}}]);