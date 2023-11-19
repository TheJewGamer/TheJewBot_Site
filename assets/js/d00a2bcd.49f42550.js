"use strict";(self.webpackChunkthe_jew_bot_site=self.webpackChunkthe_jew_bot_site||[]).push([[3201],{2394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(5893),a=n(1151),o=n(4866),s=n(5162);const l={description:"I want to see more",tags:["Voice"]},i=void 0,u={id:"voice/this",title:"this",description:"I want to see more",source:"@site/docs/voice/this.md",sourceDirName:"voice",slug:"/voice/this",permalink:"/TheJewBot_Site/docs/voice/this",draft:!1,unlisted:!1,tags:[{label:"Voice",permalink:"/TheJewBot_Site/docs/tags/voice"}],version:"current",frontMatter:{description:"I want to see more",tags:["Voice"]},sidebar:"tutorialSidebar",previous:{title:"survey",permalink:"/TheJewBot_Site/docs/voice/survey"},next:{title:"thx",permalink:"/TheJewBot_Site/docs/voice/thx"}},c={},d=[{value:"Using the command",id:"using-the-command",level:2},{value:"Examples",id:"examples",level:3},{value:"Command Not Allowed in these Channels",id:"command-not-allowed-in-these-channels",level:3}];function h(e){const t={admonition:"admonition",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Name"}),": this"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Group"}),": Voice"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Description"}),": I want to see more"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Last Updated"}),": 1/13/2022"]}),"\n",(0,r.jsx)(t.h2,{id:"using-the-command",children:"Using the command"}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(o.Z,{defaultValue:"@",values:[{label:"@",value:"@"},{label:"Prefix",value:"//"}],children:[(0,r.jsx)(s.Z,{value:"@",children:"@TheJewBot this"}),(0,r.jsx)(s.Z,{value:"//",children:"//this"})]}),"\n",(0,r.jsx)(t.h3,{id:"command-not-allowed-in-these-channels",children:"Command Not Allowed in these Channels"}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Please note that this command and other commands from the ",(0,r.jsx)(t.strong,{children:"Voice"})," command group are not allowed in the following channels:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"the_board"}),"\n",(0,r.jsx)(t.li,{children:"attachment-spam"}),"\n",(0,r.jsx)(t.li,{children:"games"}),"\n",(0,r.jsx)(t.li,{children:"thejewbot-suggestions"}),"\n",(0,r.jsx)(t.li,{children:"quotes"}),"\n"]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(6010);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6010),o=n(2466),s=n(6550),l=n(469),i=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=u??f;return m({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(w,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(7294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);