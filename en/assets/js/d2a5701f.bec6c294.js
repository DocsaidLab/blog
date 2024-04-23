"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[131],{39790:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(74848),o=i(28453);const s={sidebar_position:7},r="imblackhat",a={id:"docsaidkit/funcs/vision/morphology/imblackhat",title:"imblackhat",description:'imblackhat(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/morphology/imblackhat.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imblackhat",permalink:"/en/docsaidkit/funcs/vision/morphology/imblackhat",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713878085e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"imtophat",permalink:"/en/docsaidkit/funcs/vision/morphology/imtophat"},next:{title:"videotools",permalink:"/en/category/videotools"}},c={},l=[];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"imblackhat",children:"imblackhat"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L191",children:'imblackhat(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": Black Hat operation: Subtract the result of a closing operation from the original image. For multi-channel images, each channel will be processed independently. This operation is useful for extracting regions darker than the original image, such as dark spots or fine structures, while removing or weakening large dark areas."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"img"})," (",(0,t.jsx)(e.code,{children:"np.ndarray"}),"): Input image."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ksize"})," (",(0,t.jsx)(e.code,{children:"Union[int, Tuple[int, int]]"}),"): Size of the structuring element. Default is (3, 3)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"kstruct"})," (",(0,t.jsx)(e.code,{children:"MORPH"}),'): Shape of the element, which can be one of "MORPH.CROSS", "MORPH.RECT", or "MORPH.ELLIPSE". Default is "MORPH.RECT".']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [0, 0, 0, 0, 0], # <- Look at this row\n                [0, 0, 0, 1, 1],\n                [0, 0, 0, 1, 1]], dtype=np.uint8)\n\nblackhat_img = D.imblackhat(img, ksize=3, kstruct='CROSS')\n\n# Kernel will be like this:\n# >>> np.array([[0, 1, 0],\n#               [1, 1, 1],\n#               [0, 1, 0]], dtype=np.uint8)\n\n# After blackhat, the image will be like this:\n# >>> np.array([[0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 1, 1, 0], # <- 1's are extracted\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);