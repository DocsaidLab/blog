"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2028],{16965:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=o(74848),t=o(28453);const r={sidebar_position:1},d="BoxMode",c={id:"docsaidkit/funcs/structures/box_mode",title:"BoxMode",description:"BoxMode",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/box_mode.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/box_mode",permalink:"/en/docs/docsaidkit/funcs/structures/box_mode",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Structures",permalink:"/en/docs/category/structures"},next:{title:"Box",permalink:"/en/docs/docsaidkit/funcs/structures/box"}},i={},a=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"boxmode",children:"BoxMode"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/boxes.py#L31",children:"BoxMode"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BoxMode"})," is an enumeration class used to represent different bounding box formats. Typically, bounding boxes are expressed in one of three formats:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"XYXY"}),": Defined as ",(0,s.jsx)(n.code,{children:"(x0, y0, x1, y1)"})," using absolute float coordinates. Coordinates range between ",(0,s.jsx)(n.code,{children:"[0, w]"})," and ",(0,s.jsx)(n.code,{children:"[0, h]"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"XYWH"}),": Defined as ",(0,s.jsx)(n.code,{children:"(x0, y0, w, h)"})," using absolute float coordinates. ",(0,s.jsx)(n.code,{children:"(x0, y0)"})," is the top-left corner of the bounding box, and ",(0,s.jsx)(n.code,{children:"(w, h)"})," are its width and height."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CXCYWH"}),": Defined as ",(0,s.jsx)(n.code,{children:"(xc, yc, w, h)"})," using absolute float coordinates. ",(0,s.jsx)(n.code,{children:"(xc, yc)"})," is the center of the bounding box, and ",(0,s.jsx)(n.code,{children:"(w, h)"})," are its width and height."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A good design should allow easy conversion between these types, so we implemented a ",(0,s.jsx)(n.code,{children:"convert"})," method under ",(0,s.jsx)(n.code,{children:"BoxMode"}),". You can refer to the example below for usage. Additionally, this class also features an ",(0,s.jsx)(n.code,{children:"align_code"})," method that accepts a string of the mode, regardless of case, and converts it to an uppercase representation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\nimport numpy as np\n\nbox = np.array([10, 20, 50, 80]).astype(np.float32)\nbox = D.BoxMode.convert(box, from_mode=D.BoxMode.XYXY, to_mode=D.BoxMode.XYWH)\n# >>> array([10, 20, 40, 60])\n\n# Using string to represent the mode\nbox = D.BoxMode.convert(box, from_mode='XYWH', to_mode='CXCYWH')\n# >>> array([30, 50, 40, 60])\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>c});var s=o(96540);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);