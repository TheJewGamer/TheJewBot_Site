"use strict";(self.webpackChunkthe_jew_bot_site=self.webpackChunkthe_jew_bot_site||[]).push([[4193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(r),p=a,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[m]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),u=r(6550),s=r(1980),i=r(7392),c=r(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,i]=b({queryString:r,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var h=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==u&&(m(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},9121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const u={description:"Is this the guest bedroom?",tags:["Voice"]},s=void 0,i={unversionedId:"voice/guestbedroom",id:"voice/guestbedroom",title:"guestbedroom",description:"Is this the guest bedroom?",source:"@site/docs/voice/guestbedroom.md",sourceDirName:"voice",slug:"/voice/guestbedroom",permalink:"/TheJewBot_Site/docs/voice/guestbedroom",draft:!1,tags:[{label:"Voice",permalink:"/TheJewBot_Site/docs/tags/voice"}],version:"current",frontMatter:{description:"Is this the guest bedroom?",tags:["Voice"]},sidebar:"tutorialSidebar",previous:{title:"gps",permalink:"/TheJewBot_Site/docs/voice/gps"},next:{title:"gun",permalink:"/TheJewBot_Site/docs/voice/gun"}},c={},m=[{value:"Using the command",id:"using-the-command",level:2},{value:"Examples",id:"examples",level:3},{value:"Command Not Allowed in these Channels",id:"command-not-allowed-in-these-channels",level:3}],d={toc:m},p="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Name"),": guestbedroom"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Group"),": Voice"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),": Is this the guest bedroom?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Last Updated"),": 1/13/2022"),(0,a.kt)("h2",{id:"using-the-command"},"Using the command"),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"@",values:[{label:"@",value:"@"},{label:"Prefix",value:"//"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"@",mdxType:"TabItem"},"@TheJewBot guestbedroom"),(0,a.kt)(l.Z,{value:"//",mdxType:"TabItem"},"//guestbedroom")),(0,a.kt)("h3",{id:"command-not-allowed-in-these-channels"},"Command Not Allowed in these Channels"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Please note that this command and other commands from the ",(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Voice")," command group are not allowed in the following channels:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"the_board"),(0,a.kt)("li",{parentName:"ul"},"attachment-spam"),(0,a.kt)("li",{parentName:"ul"},"games"),(0,a.kt)("li",{parentName:"ul"},"thejewbot-suggestions"),(0,a.kt)("li",{parentName:"ul"},"quotes"))))}b.isMDXComponent=!0}}]);