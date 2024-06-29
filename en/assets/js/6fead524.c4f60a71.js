"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[58],{52089:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var o=i(74848),s=i(28453);const t={sidebar_position:4},r="imclose",c={id:"docsaidkit/funcs/vision/morphology/imclose",title:"imclose",description:'imclose(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/morphology/imclose.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imclose",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imclose",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"imopen",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imopen"},next:{title:"imgradient",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imgradient"}},l={},d=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"imclose",children:"imclose"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L105",children:'imclose(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Description"}),": Closing operation: The process of dilation followed by erosion, which can be used to fill small holes inside objects, smooth the edges of objects, connect two objects, etc. For multi-channel images, each channel will be processed independently."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"img"})," (",(0,o.jsx)(e.code,{children:"np.ndarray"}),"): Input image."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"ksize"})," (",(0,o.jsx)(e.code,{children:"Union[int, Tuple[int, int]]"}),"): Size of the structuring element. Default is (3, 3)."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"kstruct"})," (",(0,o.jsx)(e.code,{children:"MORPH"}),'): Shape of the element, which can be one of "MORPH.CROSS", "MORPH.RECT", or "MORPH.ELLIPSE". Default is "MORPH.RECT".']}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Example"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [0, 0, 0, 0, 0], # <- Look at this row\n                [0, 0, 0, 1, 1],\n                [0, 0, 0, 1, 1]], dtype=np.uint8)\n\nclosed_img = D.imclose(img, ksize=3, kstruct='CROSS')\n\n# Kernel will be like this:\n# >>> np.array([[0, 1, 0],\n#               [1, 1, 1],\n#               [0, 1, 0]], dtype=np.uint8)\n\n# After closing, the image will be like this:\n# >>> np.array([[1, 1, 1, 0, 0],\n#               [1, 1, 1, 0, 0],\n#               [1, 1, 1, 0, 0],\n#               [0, 0, 1, 1, 0], # <- 1's are connected\n#               [0, 0, 0, 1, 1],\n#               [0, 0, 0, 1, 1]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var o=i(96540);const s={},t=o.createContext(s);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);