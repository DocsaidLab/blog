"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6700],{64894:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(74848),s=i(28453);const o={sidebar_position:2},r="imdilate",l={id:"docsaidkit/funcs/vision/morphology/imdilate",title:"imdilate",description:'imdilate(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/morphology/imdilate.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imdilate",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imdilate",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"imerode",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imerode"},next:{title:"imopen",permalink:"/en/docs/docsaidkit/funcs/vision/morphology/imopen"}},c={},d=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"imdilate",children:"imdilate"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L45",children:'imdilate(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": Dilation operation: Dilates the source image using a specified structuring element, which determines the shape of the pixel neighborhood from which the maximum value is taken. For multi-channel images, each channel will be processed independently."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"img"})," (",(0,t.jsx)(e.code,{children:"np.ndarray"}),"): Input image."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ksize"})," (",(0,t.jsx)(e.code,{children:"Union[int, Tuple[int, int]]"}),"): Size of the structuring element. Default is (3, 3)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"kstruct"})," (",(0,t.jsx)(e.code,{children:"MORPH"}),'): Shape of the element, which can be one of "MORPH.CROSS", "MORPH.RECT", or "MORPH.ELLIPSE". Default is "MORPH.RECT".']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[0, 0, 0, 0, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 0, 0, 0, 0]], dtype=np.uint8)\n\ndilated_img = D.imdilate(img, ksize=3, kstruct='RECT')\n\n# Kernel will be like this:\n# >>> np.array([[1, 1, 1],\n#               [1, 1, 1],\n#               [1, 1, 1]], dtype=np.uint8)\n\n# After dilation, the image will be like this:\n# >>> np.array([[1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var t=i(96540);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);