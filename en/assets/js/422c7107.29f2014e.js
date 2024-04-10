"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5323],{22298:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=e(74848),t=e(28453);const s={sidebar_position:3},r="imopen",c={id:"docsaidkit/funcs/vision/morphology/imopen",title:"imopen",description:'imopen(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/docs/docsaidkit/funcs/vision/morphology/imopen.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imopen",permalink:"/en/docsaidkit/funcs/vision/morphology/imopen",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712752599e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"imdilate",permalink:"/en/docsaidkit/funcs/vision/morphology/imdilate"},next:{title:"imclose",permalink:"/en/docsaidkit/funcs/vision/morphology/imclose"}},d={},l=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"imopen",children:"imopen"}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L76C5-L76C11",children:'imopen(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u958b\u904b\u7b97\uff1a\u5148\u4fb5\u8755\u518d\u81a8\u8139\u7684\u904e\u7a0b\uff0c\u53ef\u4ee5\u7528\u4f86\u6d88\u9664\u5c0f\u7269\u9ad4\u3001\u65b7\u958b\u7269\u9ad4\u3001\u5e73\u6ed1\u7269\u9ad4\u7684\u908a\u7de3\u3001\u6d88\u9664\u5c0f\u5b54\u6d1e\u7b49\u3002\u5c0d\u65bc\u591a\u901a\u9053\u5716\u50cf\uff0c\u6bcf\u500b\u901a\u9053\u90fd\u5c07\u7368\u7acb\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"img"})," (",(0,o.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8f38\u5165\u5716\u50cf\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"ksize"})," (",(0,o.jsx)(i.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7d50\u69cb\u5143\u7d20\u7684\u5927\u5c0f\u3002\u9810\u8a2d\u70ba (3, 3)\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"kstruct"})," (",(0,o.jsx)(i.code,{children:"MORPH"}),')\uff1a\u5143\u7d20\u5f62\u72c0\uff0c\u53ef\u4ee5\u662f "MORPH.CROSS", "MORPH.RECT", "MORPH.ELLIPSE" \u4e4b\u4e00\u3002\u9810\u8a2d\u70ba "MORPH.RECT"\u3002']}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [0, 0, 1, 1, 0], # <- Look at this row\n                [0, 0, 0, 1, 1],\n                [0, 0, 0, 1, 1]], dtype=np.uint8)\n\nopened_img = D.imopen(img, ksize=3, kstruct='RECT')\n\n# Kernel will be like this:\n# >>> np.array([[1, 1, 1],\n#               [1, 1, 1],\n#               [1, 1, 1]], dtype=np.uint8)\n\n# After opening, the image will be like this:\n# >>> np.array([[1, 1, 1, 0, 0],\n#               [1, 1, 1, 0, 0],\n#               [1, 1, 1, 0, 0],\n#               [0, 0, 0, 0, 0], # <- 1's are removed\n#               [0, 0, 0, 1, 1],\n#               [0, 0, 0, 1, 1]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>c});var o=e(96540);const t={},s=o.createContext(t);function r(n){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),o.createElement(s.Provider,{value:i},n.children)}}}]);