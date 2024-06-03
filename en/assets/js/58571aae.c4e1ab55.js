"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[95344],{9920:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=i(74848),s=i(28453);const t={sidebar_position:1},r="EnumCheckMixin",c={id:"docsaidkit/funcs/mixins/enum_check_mixin",title:"EnumCheckMixin",description:"EnumCheckMixin",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/mixins/enum_check_mixin.md",sourceDirName:"docsaidkit/funcs/mixins",slug:"/docsaidkit/funcs/mixins/enum_check_mixin",permalink:"/en/docs/docsaidkit/funcs/mixins/enum_check_mixin",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mixins",permalink:"/en/docs/category/mixins"},next:{title:"DataClassCopyMixin",permalink:"/en/docs/docsaidkit/funcs/mixins/dataclass_copy_mixin"}},u={},l=[];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"enumcheckmixin",children:"EnumCheckMixin"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/mixins.py#L57",children:"EnumCheckMixin"})}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Description"})}),"\n",(0,o.jsxs)(e.p,{children:["Provides an ",(0,o.jsx)(e.code,{children:"obj_to_enum"})," method for Enum objects, allowing for the retrieval of different types of enum values."]}),"\n",(0,o.jsx)(e.p,{children:"The design philosophy behind this method is to prevent users from using incorrect enum values in the program by enforcing enum type constraints. However, it also aims to prevent users from feeling frustrated if they cannot find the corresponding enum value."}),"\n",(0,o.jsxs)(e.p,{children:["Therefore, this function also provides an ",(0,o.jsx)(e.code,{children:"obj_to_enum"})," method, which can be used to convert different types of enum values to the enum type."]}),"\n",(0,o.jsx)(e.p,{children:"Users can query enum values using strings, enum values, or integers."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Example"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"from enum import IntEnum\nfrom docsaidkit import EnumCheckMixin\n\nclass Color(EnumCheckMixin, IntEnum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3\n\ncolor = Color.obj_to_enum('GREEN')\nprint(color)  # Color.GREEN\n\ncolor = Color.obj_to_enum(Color.RED)\nprint(color)  # Color.RED\n\ncolor = Color.obj_to_enum(3)\nprint(color)  # Color.BLUE\n"})}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var o=i(96540);const s={},t=o.createContext(s);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);