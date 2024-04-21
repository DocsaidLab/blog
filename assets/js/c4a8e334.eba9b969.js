"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3108],{34605:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=e(74848),t=e(28453);const s={sidebar_position:1},c="EnumCheckMixin",r={id:"docsaidkit/funcs/mixins/enum_check_mixin",title:"EnumCheckMixin",description:"EnumCheckMixin",source:"@site/docs/docsaidkit/funcs/mixins/enum_check_mixin.md",sourceDirName:"docsaidkit/funcs/mixins",slug:"/docsaidkit/funcs/mixins/enum_check_mixin",permalink:"/docsaidkit/funcs/mixins/enum_check_mixin",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171371528e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mixins",permalink:"/category/mixins"},next:{title:"DataClassCopyMixin",permalink:"/docsaidkit/funcs/mixins/dataclass_copy_mixin"}},l={},d=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"enumcheckmixin",children:"EnumCheckMixin"}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/mixins.py#L57",children:"EnumCheckMixin"})}),"\n"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u63d0\u4f9b Enum \u7269\u4ef6 ",(0,o.jsx)(i.code,{children:"obj_to_enum"})," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u7528\u4f86\u627f\u63a5\u4e0d\u540c\u578b\u614b\u7684\u5217\u8209\u67e5\u8a62\u3002"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"\u9019\u500b\u65b9\u6cd5\u7684\u8a2d\u8a08\u7406\u5ff5\u662f\uff1a\u900f\u904e\u5217\u8209\u7684\u578b\u614b\u9650\u5236\uff0c\u4f86\u907f\u514d\u4f7f\u7528\u8005\u5728\u7a0b\u5f0f\u4e2d\u4f7f\u7528\u932f\u8aa4\u7684\u5217\u8209\u503c\u3002\u4f46\u540c\u6642\u53c8\u4e0d\u5e0c\u671b\u4f7f\u7528\u8005\u6703\u56e0\u70ba\u627e\u4e0d\u5230\u5c0d\u61c9\u7684\u5217\u8209\u503c\u800c\u611f\u5230\u751f\u6c23\u3002"}),"\n",(0,o.jsxs)(i.p,{children:["\u56e0\u6b64\u8a72\u51fd\u6578\u4e5f\u63d0\u4f9b\u4e86\u4e00\u500b ",(0,o.jsx)(i.code,{children:"obj_to_enum"})," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u7528\u4f86\u5c07\u4e0d\u540c\u578b\u614b\u7684\u5217\u8209\u503c\u8f49\u63db\u70ba\u5217\u8209\u578b\u614b\u3002"]}),"\n",(0,o.jsx)(i.p,{children:"\u4f7f\u7528\u8005\u53ef\u4ee5\u4f7f\u7528\u5b57\u4e32\u3001\u5217\u8209\u503c\u6216\u6574\u6578\u4f86\u67e5\u8a62\u5217\u8209\u503c\u3002"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-python",children:"from enum import IntEnum\nfrom docsaidkit import EnumCheckMixin\n\nclass Color(EnumCheckMixin, IntEnum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3\n\ncolor = Color.obj_to_enum('GREEN')\nprint(color)  # Color.GREEN\n\ncolor = Color.obj_to_enum(Color.RED)\nprint(color)  # Color.RED\n\ncolor = Color.obj_to_enum(3)\nprint(color)  # Color.BLUE\n"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>c,x:()=>r});var o=e(96540);const t={},s=o.createContext(t);function c(n){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),o.createElement(s.Provider,{value:i},n.children)}}}]);