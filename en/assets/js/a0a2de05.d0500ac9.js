"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3905],{90181:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(74848),s=i(28453);const r={sidebar_position:5},o="imgradient",c={id:"docsaidkit/funcs/vision/morphology/imgradient",title:"imgradient",description:'imgradient(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/morphology/imgradient.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imgradient",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imgradient",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"imclose",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imclose"},next:{title:"imtophat",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imtophat"}},d={},a=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"imgradient",children:"imgradient"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L135",children:'imgradient(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": Gradient operation: The result of dilating the image subtracted by the result of eroding the image. For multi-channel images, each channel will be processed independently. This operation is useful for extracting the edges of objects."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"img"})," (",(0,t.jsx)(e.code,{children:"np.ndarray"}),"): Input image."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ksize"})," (",(0,t.jsx)(e.code,{children:"Union[int, Tuple[int, int]]"}),"): Size of the structuring element. Default is (3, 3)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"kstruct"})," (",(0,t.jsx)(e.code,{children:"MORPH"}),'): Shape of the element, which can be one of "MORPH.CROSS", "MORPH.RECT", or "MORPH.ELLIPSE". Default is "MORPH.RECT".']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[0, 0, 0, 0, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 0, 0, 0, 0]], dtype=np.uint8)\n\ngradient_img = D.imgradient(img, ksize=3, kstruct='RECT')\n\n# Kernel will be like this:\n# >>> np.array([[1, 1, 1],\n#               [1, 1, 1],\n#               [1, 1, 1]], dtype=np.uint8)\n\n# After gradient, the image will be like this:\n# >>> np.array([[1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 0, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);