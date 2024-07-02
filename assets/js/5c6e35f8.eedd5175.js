"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8310],{10390:(s,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=i(74848),e=i(28453);const a={sidebar_position:2},o="DataClassCopyMixin",c={id:"docsaidkit/funcs/mixins/dataclass_copy_mixin",title:"DataClassCopyMixin",description:"DataClassCopyMixin",source:"@site/docs/docsaidkit/funcs/mixins/dataclass_copy_mixin.md",sourceDirName:"docsaidkit/funcs/mixins",slug:"/docsaidkit/funcs/mixins/dataclass_copy_mixin",permalink:"/docs/docsaidkit/funcs/mixins/dataclass_copy_mixin",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719919838e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EnumCheckMixin",permalink:"/docs/docsaidkit/funcs/mixins/enum_check_mixin"},next:{title:"DataClassToJsonMixin",permalink:"/docs/docsaidkit/funcs/mixins/dataclass_to_json_mixin"}},r={},d=[];function l(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dataclasscopymixin",children:"DataClassCopyMixin"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/mixins.py#L77",children:"DataClassCopyMixin"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u63d0\u4f9b DataClass \u7269\u4ef6\u7684\u8907\u88fd\u65b9\u6cd5\uff0c\u53ef\u4ee5\u7528\u4f86\u8907\u88fd DataClass \u7269\u4ef6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from dataclasses import dataclass\nfrom docsaidkit import DataclassCopyMixin\n\n@dataclass\nclass Person(DataclassCopyMixin):\n    name: str\n    age: int\n\nperson = Person('Alice', 20)\nperson_copy = person.__copy__()\nperson_deepcopy = person.__deepcopy__()\n"})}),"\n"]}),"\n"]})]})}function p(s={}){const{wrapper:n}={...(0,e.R)(),...s.components};return n?(0,t.jsx)(n,{...s,children:(0,t.jsx)(l,{...s})}):l(s)}},28453:(s,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const e={},a=t.createContext(e);function o(s){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function c(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(e):s.components||e:o(s.components),t.createElement(a.Provider,{value:n},s.children)}}}]);