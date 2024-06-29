"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5477],{63327:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=e(74848),t=e(28453);const o={sidebar_position:3},r="DataClassToJsonMixin",c={id:"docsaidkit/funcs/mixins/dataclass_to_json_mixin",title:"DataClassToJsonMixin",description:"DataClassToJsonMixin",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/mixins/dataclass_to_json_mixin.md",sourceDirName:"docsaidkit/funcs/mixins",slug:"/docsaidkit/funcs/mixins/dataclass_to_json_mixin",permalink:"/en/docs/docsaidkit/funcs/mixins/dataclass_to_json_mixin",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"DataClassCopyMixin",permalink:"/en/docs/docsaidkit/funcs/mixins/dataclass_copy_mixin"},next:{title:"Time",permalink:"/en/docs/category/time"}},a={},d=[];function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"dataclasstojsonmixin",children:"DataClassToJsonMixin"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/mixins.py#L90",children:"DataClassToJsonMixin"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Description"})}),"\n",(0,i.jsx)(s.p,{children:"Provides a JSON serialization method for DataClass objects, enabling the conversion of DataClass objects into JSON format."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Supported Formats for dict_to_jsonable"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Box"}),", ",(0,i.jsx)(s.strong,{children:"Boxes"}),": Converted to ",(0,i.jsx)(s.code,{children:"List[float]"})," format."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Polygon"}),", ",(0,i.jsx)(s.strong,{children:"Polygons"}),": Converted to ",(0,i.jsx)(s.code,{children:"List[List[float]]"})," format."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"np.ndarray"}),", ",(0,i.jsx)(s.strong,{children:"np.generic"}),": Converted to ",(0,i.jsx)(s.code,{children:"List"})," format."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"list"}),", ",(0,i.jsx)(s.strong,{children:"tuple"}),": Recursively converted to ",(0,i.jsx)(s.code,{children:"List"})," format."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Enum"}),": Converted to ",(0,i.jsx)(s.code,{children:"str"})," format."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Mapping"}),": Recursively converted to ",(0,i.jsx)(s.code,{children:"Dict"})," format."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from dataclasses import dataclass\nfrom docsaidkit import DataclassToJsonMixin\n\n@dataclass\nclass Person(DataclassToJsonMixin):\n    name: str\n    age: int\n\nperson = Person('Alice', 20)\nprint(person.be_jsonable())\n# >>> OrderedDict([('name', 'Alice'), ('age', 20)])\n"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>r,x:()=>c});var i=e(96540);const t={},o=i.createContext(t);function r(n){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(o.Provider,{value:s},n.children)}}}]);