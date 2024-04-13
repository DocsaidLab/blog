"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8310],{4463:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=i(74848),e=i(28453);const a={sidebar_position:2},o="DataClassCopyMixin",c={id:"docsaidkit/funcs/mixins/dataclass_copy_mixin",title:"DataClassCopyMixin",description:"DataClassCopyMixin",source:"@site/docs/docsaidkit/funcs/mixins/dataclass_copy_mixin.md",sourceDirName:"docsaidkit/funcs/mixins",slug:"/docsaidkit/funcs/mixins/dataclass_copy_mixin",permalink:"/docsaidkit/funcs/mixins/dataclass_copy_mixin",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713019707e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EnumCheckMixin",permalink:"/docsaidkit/funcs/mixins/enum_check_mixin"},next:{title:"DataClassToJsonMixin",permalink:"/docsaidkit/funcs/mixins/dataclass_to_json_mixin"}},r={},d=[];function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"dataclasscopymixin",children:"DataClassCopyMixin"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/mixins.py#L77",children:"DataClassCopyMixin"})}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u63d0\u4f9b DataClass \u7269\u4ef6\u7684\u8907\u88fd\u65b9\u6cd5\uff0c\u53ef\u4ee5\u7528\u4f86\u8907\u88fd DataClass \u7269\u4ef6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"from dataclasses import dataclass\nfrom docsaidkit import DataclassCopyMixin\n\n@dataclass\nclass Person(DataclassCopyMixin):\n    name: str\n    age: int\n\nperson = Person('Alice', 20)\nperson_copy = person.__copy__()\nperson_deepcopy = person.__deepcopy__()\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:s}={...(0,e.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var t=i(96540);const e={},a=t.createContext(e);function o(n){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:o(n.components),t.createElement(a.Provider,{value:s},n.children)}}}]);