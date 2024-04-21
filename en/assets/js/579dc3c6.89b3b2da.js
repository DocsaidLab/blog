"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1737],{96699:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=i(74848),o=i(28453);const r={sidebar_position:1},s="imerode",c={id:"docsaidkit/funcs/vision/morphology/imerode",title:"imerode",description:'imerode(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/morphology/imerode.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imerode",permalink:"/en/docsaidkit/funcs/vision/morphology/imerode",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171371528e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"morphology",permalink:"/en/category/morphology"},next:{title:"imdilate",permalink:"/en/docsaidkit/funcs/vision/morphology/imdilate"}},d={},l=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"imerode",children:"imerode"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L14C1-L42C69",children:'imerode(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": Erosion operation: Erodes the source image using a specified structuring element, which determines the shape of the pixel neighborhood from which the minimum value is taken. For multi-channel images, each channel will be processed independently."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"img"})," (",(0,t.jsx)(e.code,{children:"np.ndarray"}),"): Input image."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ksize"})," (",(0,t.jsx)(e.code,{children:"Union[int, Tuple[int, int]]"}),"): Size of the structuring element. Default is (3, 3)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"kstruct"})," (",(0,t.jsx)(e.code,{children:"MORPH"}),'): Shape of the element, which can be one of "MORPH.CROSS", "MORPH.RECT", or "MORPH.ELLIPSE". Default is "MORPH.RECT".']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[0, 0, 0, 0, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 0, 0, 0, 0]], dtype=np.uint8)\n\neroded_img = D.imerode(img, ksize=3, kstruct='RECT')\n\n# Kernel will be like this:\n# >>> np.array([[1, 1, 1],\n#               [1, 1, 1],\n#               [1, 1, 1]], dtype=np.uint8)\n\n# After erosion, the image will be like this:\n# >>> np.array([[0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 1, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var t=i(96540);const o={},r=t.createContext(o);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);