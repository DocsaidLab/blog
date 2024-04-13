"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4653],{92228:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=o(74848),t=o(28453);const r={sidebar_position:1},c="BoxMode",d={id:"docsaidkit/funcs/structures/box_mode",title:"BoxMode",description:"BoxMode",source:"@site/docs/docsaidkit/funcs/structures/box_mode.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/box_mode",permalink:"/docsaidkit/funcs/structures/box_mode",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171298044e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Structures",permalink:"/category/structures"},next:{title:"Box",permalink:"/docsaidkit/funcs/structures/box"}},i={},l=[];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"boxmode",children:"BoxMode"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/boxes.py#L31",children:"BoxMode"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"BoxMode"})," \u662f\u4e00\u500b\u5217\u8209\u985e\u5225\uff0c\u7528\u4f86\u8868\u793a\u4e0d\u540c\u7684\u908a\u754c\u6846\u8868\u793a\u65b9\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u822c\u4f86\u8aaa\uff0c\u5e38\u898b\u7684\u908a\u754c\u6846\u7684\u8868\u73fe\u65b9\u5f0f\u6709\u4e09\u7a2e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"XYXY"}),"\uff1a\u8868\u793a\u70ba ",(0,s.jsx)(n.code,{children:"(x0, y0, x1, y1)"}),"\uff0c\u4f7f\u7528\u7d55\u5c0d\u6d6e\u9ede\u5ea7\u6a19\u3002 \u5ea7\u6a19\u7bc4\u570d ",(0,s.jsx)(n.code,{children:"[0, w]"})," \u53ca ",(0,s.jsx)(n.code,{children:"[0, h]"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"XYWH"}),"\uff1a\u8868\u793a\u70ba ",(0,s.jsx)(n.code,{children:"(x0, y0, w, h)"}),"\uff0c\u4f7f\u7528\u7d55\u5c0d\u6d6e\u9ede\u5ea7\u6a19\u3002 ",(0,s.jsx)(n.code,{children:"(x0, y0)"})," \u662f\u908a\u754c\u6846\u7684\u5de6\u4e0a\u89d2\u9ede\uff0c",(0,s.jsx)(n.code,{children:"(w, h)"})," \u662f\u908a\u754c\u6846\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CXCYWH"}),"\uff1a\u8868\u793a\u70ba ",(0,s.jsx)(n.code,{children:"(xc, yc, w, h)"}),"\uff0c\u4f7f\u7528\u7d55\u5c0d\u6d6e\u9ede\u5ea7\u6a19\u3002 ",(0,s.jsx)(n.code,{children:"(xc, yc)"})," \u662f\u908a\u754c\u6846\u7684\u4e2d\u5fc3\u9ede\uff0c",(0,s.jsx)(n.code,{children:"(w, h)"})," \u662f\u908a\u754c\u6846\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u5011\u8a8d\u70ba\u4e00\u500b\u597d\u7684\u8a2d\u8a08\uff0c\u5fc5\u9808\u53ef\u4ee5\u6109\u5feb\u5730\u5728\u9019\u5e7e\u7a2e\u985e\u578b\u9593\u81ea\u7531\u8f49\u63db\uff0c\u6240\u4ee5\u6211\u5011\u5728 ",(0,s.jsx)(n.code,{children:"BoxMode"})," \u5e95\u4e0b\u5be6\u4f5c\u4e86\u4e00\u500b ",(0,s.jsx)(n.code,{children:"convert"})," \u65b9\u6cd5\u3002\u76f8\u95dc\u7528\u6cd5\u53ef\u4ee5\u53c3\u8003\u4ee5\u4e0b\u7bc4\u4f8b\u8aaa\u660e\u3002\u6b64\u5916\uff0c\u5728\u9019\u500b\u985e\u5225\u4e2d\u6211\u5011\u4e5f\u5be6\u4f5c\u4e86\u4e00\u500b ",(0,s.jsx)(n.code,{children:"align_code"})," \u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u63a5\u53d7\u5927\u5c0f\u5beb\u4e0d\u5b9a\u7684\u5b57\u4e32\uff0c\u4e26\u5c07\u5176\u8f49\u63db\u70ba\u5927\u5beb\u7684\u8868\u793a\u65b9\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\nimport numpy as np\n\nbox = np.array([10, 20, 50, 80]).astype(np.float32)\nbox = D.BoxMode.convert(box, from_mode=D.BoxMode.XYXY, to_mode=D.BoxMode.XYWH)\n# >>> array([10, 20, 40, 60])\n\n# Using string to represent the mode\nbox = D.BoxMode.convert(box, from_mode='XYWH', to_mode='CXCYWH')\n# >>> array([30, 50, 40, 60])\n"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>d});var s=o(96540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);