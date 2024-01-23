"use strict";(self.webpackChunkthe_jew_bot_site=self.webpackChunkthe_jew_bot_site||[]).push([[9601],{8568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var l=t(5893),r=t(1151),a=t(4866),o=t(5162);const i={description:"Why hello",tags:["Voice Multiple"]},s=void 0,u={id:"voice multiple/hello",title:"hello",description:"Why hello",source:"@site/docs/voice multiple/hello.md",sourceDirName:"voice multiple",slug:"/voice multiple/hello",permalink:"/TheJewBot_Site/docs/voice multiple/hello",draft:!1,unlisted:!1,tags:[{label:"Voice Multiple",permalink:"/TheJewBot_Site/docs/tags/voice-multiple"}],version:"current",frontMatter:{description:"Why hello",tags:["Voice Multiple"]},sidebar:"tutorialSidebar",previous:{title:"gun",permalink:"/TheJewBot_Site/docs/voice multiple/gun"},next:{title:"holiday",permalink:"/TheJewBot_Site/docs/voice multiple/holiday"}},c={},d=[{value:"Using the command",id:"using-the-command",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Command Not Allowed in these Channels",id:"command-not-allowed-in-these-channels",level:3}];function h(e){const n={admonition:"admonition",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Name"}),": hello"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Group"}),": Voice Multiple"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Description"}),": Why hello"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Last Updated"}),": 11/18/2023"]}),"\n",(0,l.jsx)(n.h2,{id:"using-the-command",children:"Using the command"}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(a.Z,{defaultValue:"@",values:[{label:"@",value:"@"},{label:"Prefix",value:"//"}],children:[(0,l.jsx)(o.Z,{value:"@",children:"@TheJewBot hello"}),(0,l.jsx)(o.Z,{value:"//",children:"//hello"})]}),"\n",(0,l.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,l.jsx)(n.p,{children:"This command has multiple voice outputs. Entering a number after the command name will play the corresponding voice file from the list below. Entering just the command name or invalid data will play a random voice file from the list below."}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"bring"}),"\n",(0,l.jsx)(n.li,{children:"cloakerLate"}),"\n",(0,l.jsx)(n.li,{children:"door"}),"\n",(0,l.jsx)(n.li,{children:"good"}),"\n",(0,l.jsx)(n.li,{children:"hello"}),"\n",(0,l.jsx)(n.li,{children:"helloPam"}),"\n",(0,l.jsx)(n.li,{children:"meeting"}),"\n",(0,l.jsx)(n.li,{children:"neighbors"}),"\n",(0,l.jsx)(n.li,{children:"welcome"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"command-not-allowed-in-these-channels",children:"Command Not Allowed in these Channels"}),"\n",(0,l.jsxs)(n.admonition,{type:"caution",children:[(0,l.jsxs)(n.mdxAdmonitionTitle,{children:["Please note that this command and other commands from the ",(0,l.jsx)(n.strong,{children:"Voice Multiple"})," command group are not allowed in the following channels:"]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"the_board"}),"\n",(0,l.jsx)(n.li,{children:"attachment-spam"}),"\n",(0,l.jsx)(n.li,{children:"games"}),"\n",(0,l.jsx)(n.li,{children:"thejewbot-suggestions"}),"\n",(0,l.jsx)(n.li,{children:"quotes"}),"\n"]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var l=t(6010);const r={tabItem:"tabItem_Ymn6"};var a=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var l=t(7294),r=t(6010),a=t(2466),o=t(6550),i=t(469),s=t(1980),u=t(7392),c=t(12);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:r}}=e;return{value:n,label:t,attributes:l,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(a),(0,l.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:a}))),[u,d]=p({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Nk)(t);return[r,(0,l.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),v=(()=>{const e=u??f;return m({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function g(e){let{className:n,block:t,selectedValue:l,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==l&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var l=t(7294);const r={},a=l.createContext(r);function o(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);