"use strict";(self.webpackChunkthe_jew_bot_site=self.webpackChunkthe_jew_bot_site||[]).push([[724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:r,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),u=n(6550),i=n(1980),c=n(7392),s=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=i??m;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var h=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==u&&(m(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":u===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},3527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const u={description:"Take me by the hand.",tags:["Voice"]},i=void 0,c={unversionedId:"voice/oceanman",id:"voice/oceanman",title:"oceanman",description:"Take me by the hand.",source:"@site/docs/voice/oceanman.md",sourceDirName:"voice",slug:"/voice/oceanman",permalink:"/TheJewBot_Site/docs/voice/oceanman",draft:!1,tags:[{label:"Voice",permalink:"/TheJewBot_Site/docs/tags/voice"}],version:"current",frontMatter:{description:"Take me by the hand.",tags:["Voice"]},sidebar:"tutorialSidebar",previous:{title:"nowhere",permalink:"/TheJewBot_Site/docs/voice/nowhere"},next:{title:"oh",permalink:"/TheJewBot_Site/docs/voice/oh"}},s={},m=[{value:"Using the command",id:"using-the-command",level:2},{value:"Examples",id:"examples",level:3},{value:"Command Not Allowed in these Channels",id:"command-not-allowed-in-these-channels",level:3}],p={toc:m},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name"),": oceanman"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group"),": Voice"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": Take me by the hand."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Last Updated"),": 1/13/2022"),(0,r.kt)("h2",{id:"using-the-command"},"Using the command"),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{defaultValue:"@",values:[{label:"@",value:"@"},{label:"Prefix",value:"//"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"@",mdxType:"TabItem"},"@TheJewBot oceanman"),(0,r.kt)(l.Z,{value:"//",mdxType:"TabItem"},"//oceanman")),(0,r.kt)("h3",{id:"command-not-allowed-in-these-channels"},"Command Not Allowed in these Channels"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Please note that this command and other commands from the ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Voice")," command group are not allowed in the following channels:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"the_board"),(0,r.kt)("li",{parentName:"ul"},"attachment-spam"),(0,r.kt)("li",{parentName:"ul"},"games"),(0,r.kt)("li",{parentName:"ul"},"thejewbot-suggestions"),(0,r.kt)("li",{parentName:"ul"},"quotes"))))}f.isMDXComponent=!0}}]);