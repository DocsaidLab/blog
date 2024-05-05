"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9842],{61776:(s,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var e=i(74848),t=i(28453);const o={sidebar_position:3},c="DataClassToJsonMixin",a={id:"docsaidkit/funcs/mixins/dataclass_to_json_mixin",title:"DataClassToJsonMixin",description:"DataClassToJsonMixin",source:"@site/docs/docsaidkit/funcs/mixins/dataclass_to_json_mixin.md",sourceDirName:"docsaidkit/funcs/mixins",slug:"/docsaidkit/funcs/mixins/dataclass_to_json_mixin",permalink:"/docs/docsaidkit/funcs/mixins/dataclass_to_json_mixin",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"DataClassCopyMixin",permalink:"/docs/docsaidkit/funcs/mixins/dataclass_copy_mixin"},next:{title:"Time",permalink:"/docs/category/time"}},r={},l=[];function d(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"dataclasstojsonmixin",children:"DataClassToJsonMixin"}),"\n",(0,e.jsxs)(n.blockquote,{children:["\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/mixins.py#L90",children:"DataClassToJsonMixin"})}),"\n"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u63d0\u4f9b DataClass \u7269\u4ef6\u7684 JSON \u5e8f\u5217\u5316\u65b9\u6cd5\uff0c\u53ef\u4ee5\u7528\u4f86\u5c07 DataClass \u7269\u4ef6\u8f49\u63db\u6210 JSON \u683c\u5f0f\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"dict_to_jsonable"})," \u652f\u63f4\u683c\u5f0f\u8aaa\u660e\uff1a"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Box"}),"\u3001",(0,e.jsx)(n.strong,{children:"Boxes"}),"\uff1a\u8f49\u63db\u6210 ",(0,e.jsx)(n.code,{children:"List[float]"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Polygon"}),"\u3001",(0,e.jsx)(n.strong,{children:"Polygons"}),"\uff1a\u8f49\u63db\u6210 ",(0,e.jsx)(n.code,{children:"List[List[float]]"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"np.ndarray"}),"\u3001",(0,e.jsx)(n.strong,{children:"np.generic"}),"\uff1a\u8f49\u63db\u6210 ",(0,e.jsx)(n.code,{children:"List"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"list"}),"\u3001",(0,e.jsx)(n.strong,{children:"tuple"}),"\uff1a\u905e\u8ff4\u8f49\u63db\u6210 ",(0,e.jsx)(n.code,{children:"List"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Enum"}),"\uff1a\u8f49\u63db\u6210 ",(0,e.jsx)(n.code,{children:"str"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Mapping"}),"\uff1a\u905e\u8ff4\u8f49\u63db\u6210 ",(0,e.jsx)(n.code,{children:"Dict"})," \u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",children:"from dataclasses import dataclass\nfrom docsaidkit import DataclassToJsonMixin\n\n@dataclass\nclass Person(DataclassToJsonMixin):\n    name: str\n    age: int\n\nperson = Person('Alice', 20)\nprint(person.be_jsonable())\n# >>> OrderedDict([('name', 'Alice'), ('age', 20)])\n"})}),"\n"]}),"\n"]})]})}function x(s={}){const{wrapper:n}={...(0,t.R)(),...s.components};return n?(0,e.jsx)(n,{...s,children:(0,e.jsx)(d,{...s})}):d(s)}},28453:(s,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var e=i(96540);const t={},o=e.createContext(t);function c(s){const n=e.useContext(o);return e.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function a(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:c(s.components),e.createElement(o.Provider,{value:n},s.children)}}}]);