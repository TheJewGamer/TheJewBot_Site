"use strict";(self.webpackChunkthe_jew_bot_site=self.webpackChunkthe_jew_bot_site||[]).push([[6953],{3266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(5893),a=t(1151),i=t(4866),o=t(5162);const l={description:"Are you winning?",tags:["Voice"]},s=void 0,u={id:"voice/winning",title:"winning",description:"Are you winning?",source:"@site/docs/voice/winning.md",sourceDirName:"voice",slug:"/voice/winning",permalink:"/TheJewBot_Site/docs/voice/winning",draft:!1,unlisted:!1,tags:[{label:"Voice",permalink:"/TheJewBot_Site/docs/tags/voice"}],version:"current",frontMatter:{description:"Are you winning?",tags:["Voice"]},sidebar:"tutorialSidebar",previous:{title:"wife",permalink:"/TheJewBot_Site/docs/voice/wife"},next:{title:"witness",permalink:"/TheJewBot_Site/docs/voice/witness"}},c={},d=[{value:"Using the command",id:"using-the-command",level:2},{value:"Examples",id:"examples",level:3},{value:"Command Not Allowed in these Channels",id:"command-not-allowed-in-these-channels",level:3}];function h(e){const n={admonition:"admonition",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": winning"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Group"}),": Voice"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Are you winning?"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Last Updated"}),": 6/11/2022"]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-command",children:"Using the command"}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(i.Z,{defaultValue:"@",values:[{label:"@",value:"@"},{label:"Prefix",value:"//"}],children:[(0,r.jsx)(o.Z,{value:"@",children:"@TheJewBot winning"}),(0,r.jsx)(o.Z,{value:"//",children:"//winning"})]}),"\n",(0,r.jsx)(n.h3,{id:"command-not-allowed-in-these-channels",children:"Command Not Allowed in these Channels"}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["Please note that this command and other commands from the ",(0,r.jsx)(n.strong,{children:"Voice"})," command group are not allowed in the following channels:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the_board"}),"\n",(0,r.jsx)(n.li,{children:"attachment-spam"}),"\n",(0,r.jsx)(n.li,{children:"games"}),"\n",(0,r.jsx)(n.li,{children:"thejewbot-suggestions"}),"\n",(0,r.jsx)(n.li,{children:"quotes"}),"\n"]})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(6010);const a={tabItem:"tabItem_Ymn6"};var i=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(7294),a=t(6010),i=t(2466),o=t(6550),l=t(469),s=t(1980),u=t(7392),c=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,d]=p({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),v=(()=>{const e=u??f;return m({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function w(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==r&&(u(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);