"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5261],{91029:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=e(74848),o=e(28453);const t={sidebar_position:4},r="imclose",c={id:"docsaidkit/funcs/vision/morphology/imclose",title:"imclose",description:'imclose(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/docs/docsaidkit/funcs/vision/morphology/imclose.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imclose",permalink:"/docs/docsaidkit/funcs/vision/morphology/imclose",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"imopen",permalink:"/docs/docsaidkit/funcs/vision/morphology/imopen"},next:{title:"imgradient",permalink:"/docs/docsaidkit/funcs/vision/morphology/imgradient"}},l={},d=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"imclose",children:"imclose"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L105",children:'imclose(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u9589\u904b\u7b97\uff1a\u5148\u81a8\u8139\u518d\u4fb5\u8755\u7684\u904e\u7a0b\uff0c\u53ef\u4ee5\u7528\u4f86\u586b\u5145\u7269\u9ad4\u5167\u90e8\u7684\u5c0f\u6d1e\u3001\u5e73\u6ed1\u7269\u9ad4\u7684\u908a\u7de3\u3001\u9023\u63a5\u5169\u500b\u7269\u9ad4\u7b49\u3002\u5c0d\u65bc\u591a\u901a\u9053\u5716\u50cf\uff0c\u6bcf\u500b\u901a\u9053\u90fd\u5c07\u7368\u7acb\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"img"})," (",(0,s.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8f38\u5165\u5716\u50cf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"ksize"})," (",(0,s.jsx)(i.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7d50\u69cb\u5143\u7d20\u7684\u5927\u5c0f\u3002\u9810\u8a2d\u70ba (3, 3)\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"kstruct"})," (",(0,s.jsx)(i.code,{children:"MORPH"}),')\uff1a\u5143\u7d20\u5f62\u72c0\uff0c\u53ef\u4ee5\u662f "MORPH.CROSS", "MORPH.RECT", "MORPH.ELLIPSE" \u4e4b\u4e00\u3002\u9810\u8a2d\u70ba "MORPH.RECT"\u3002']}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [0, 0, 0, 0, 0], # <- Look at this row\n                [0, 0, 0, 1, 1],\n                [0, 0, 0, 1, 1]], dtype=np.uint8)\n\nclosed_img = D.imclose(img, ksize=3, kstruct='CROSS')\n\n# Kernel will be like this:\n# >>> np.array([[0, 1, 0],\n#               [1, 1, 1],\n#               [0, 1, 0]], dtype=np.uint8)\n\n# After closing, the image will be like this:\n# >>> np.array([[1, 1, 1, 0, 0],\n#               [1, 1, 1, 0, 0],\n#               [1, 1, 1, 0, 0],\n#               [0, 0, 1, 1, 0], # <- 1's are connected\n#               [0, 0, 0, 1, 1],\n#               [0, 0, 0, 1, 1]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:i}={...(0,o.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>c});var s=e(96540);const o={},t=s.createContext(o);function r(n){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(t.Provider,{value:i},n.children)}}}]);