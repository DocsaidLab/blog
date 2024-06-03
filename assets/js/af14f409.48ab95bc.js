"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[89842],{84531:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var e=i(74848),t=i(28453);const o={sidebar_position:3},c="DataClassToJsonMixin",r={id:"docsaidkit/funcs/mixins/dataclass_to_json_mixin",title:"DataClassToJsonMixin",description:"DataClassToJsonMixin",source:"@site/docs/docsaidkit/funcs/mixins/dataclass_to_json_mixin.md",sourceDirName:"docsaidkit/funcs/mixins",slug:"/docsaidkit/funcs/mixins/dataclass_to_json_mixin",permalink:"/docs/docsaidkit/funcs/mixins/dataclass_to_json_mixin",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"DataClassCopyMixin",permalink:"/docs/docsaidkit/funcs/mixins/dataclass_copy_mixin"},next:{title:"Time",permalink:"/docs/category/time"}},a={},l=[];function d(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h1,{id:"dataclasstojsonmixin",children:"DataClassToJsonMixin"}),"\n",(0,e.jsxs)(s.blockquote,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/mixins.py#L90",children:"DataClassToJsonMixin"})}),"\n"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u63d0\u4f9b DataClass \u7269\u4ef6\u7684 JSON \u5e8f\u5217\u5316\u65b9\u6cd5\uff0c\u53ef\u4ee5\u7528\u4f86\u5c07 DataClass \u7269\u4ef6\u8f49\u63db\u6210 JSON \u683c\u5f0f\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"dict_to_jsonable"})," \u652f\u63f4\u683c\u5f0f\u8aaa\u660e\uff1a"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Box"}),"\u3001",(0,e.jsx)(s.strong,{children:"Boxes"}),"\uff1a\u8f49\u63db\u6210 ",(0,e.jsx)(s.code,{children:"List[float]"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Polygon"}),"\u3001",(0,e.jsx)(s.strong,{children:"Polygons"}),"\uff1a\u8f49\u63db\u6210 ",(0,e.jsx)(s.code,{children:"List[List[float]]"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"np.ndarray"}),"\u3001",(0,e.jsx)(s.strong,{children:"np.generic"}),"\uff1a\u8f49\u63db\u6210 ",(0,e.jsx)(s.code,{children:"List"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"list"}),"\u3001",(0,e.jsx)(s.strong,{children:"tuple"}),"\uff1a\u905e\u8ff4\u8f49\u63db\u6210 ",(0,e.jsx)(s.code,{children:"List"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Enum"}),"\uff1a\u8f49\u63db\u6210 ",(0,e.jsx)(s.code,{children:"str"})," \u683c\u5f0f\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"Mapping"}),"\uff1a\u905e\u8ff4\u8f49\u63db\u6210 ",(0,e.jsx)(s.code,{children:"Dict"})," \u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-python",children:"from dataclasses import dataclass\nfrom docsaidkit import DataclassToJsonMixin\n\n@dataclass\nclass Person(DataclassToJsonMixin):\n    name: str\n    age: int\n\nperson = Person('Alice', 20)\nprint(person.be_jsonable())\n# >>> OrderedDict([('name', 'Alice'), ('age', 20)])\n"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},28453:(n,s,i)=>{i.d(s,{R:()=>c,x:()=>r});var e=i(96540);const t={},o=e.createContext(t);function c(n){const s=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function r(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),e.createElement(o.Provider,{value:s},n.children)}}}]);