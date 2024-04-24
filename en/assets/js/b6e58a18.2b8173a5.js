"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[227],{6867:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=e(74848),r=e(28453);const i={sidebar_position:6},t="draw_mask",o={id:"docsaidkit/funcs/drawings/draw_mask",title:"draw_mask",description:"drawmask(img np.ndarray, colormap Tuple[float, float] = (0.5, 0.5), gamma bool = False) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/drawings/draw_mask.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_mask",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_mask",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713961801e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"draw_text",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_text"},next:{title:"draw_ocr_infos",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_ocr_infos"}},d={},l=[];function c(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"draw_mask",children:"draw_mask"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L366",children:"draw_mask(img: np.ndarray, mask: np.ndarray, colormap: int = cv2.COLORMAP_JET, weight: Tuple[float, float] = (0.5, 0.5), gamma: float = 0, min_max_normalize: bool = False) -> np.ndarray"})}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Description"})}),"\n",(0,a.jsx)(s.p,{children:"Draw a mask on an image."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"img"})," (",(0,a.jsx)(s.code,{children:"np.ndarray"}),"): The image to draw on."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"mask"})," (",(0,a.jsx)(s.code,{children:"np.ndarray"}),"): The mask to draw."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"colormap"})," (",(0,a.jsx)(s.code,{children:"int"}),"): The colormap used for the mask. Defaults to ",(0,a.jsx)(s.code,{children:"cv2.COLORMAP_JET"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"weight"})," (",(0,a.jsx)(s.code,{children:"Tuple[float, float]"}),"): The weights of the image and the mask. Defaults to (0.5, 0.5)."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"gamma"})," (",(0,a.jsx)(s.code,{children:"float"}),"): The gamma value of the mask. Defaults to 0."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"min_max_normalize"})," (",(0,a.jsx)(s.code,{children:"bool"}),"): Whether to normalize the mask to the range [0, 1]. Defaults to False."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Returns"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"np.ndarray"}),": The image with the drawn mask."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\nimport numpy as np\n\nimg = D.imread('lena.png')\npolygon = D.Polygon([(20, 20), (100, 20), (80, 80), (20, 40)])\nmask = D.draw_polygon(np.zeros_like(img), polygon, fillup=True, color=255)\nmask_img = D.draw_mask(img, mask, colormap=cv2.COLORMAP_JET, weight=(0.5, 0.5), gamma=0, min_max_normalize=False)\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"draw_mask",src:e(70839).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,a.jsx)(s,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},70839:(n,s,e)=>{e.d(s,{A:()=>a});const a=e.p+"assets/images/test_draw_mask-790affdfa66ebbf22fceb184402c9c8f.jpg"},28453:(n,s,e)=>{e.d(s,{R:()=>t,x:()=>o});var a=e(96540);const r={},i=a.createContext(r);function t(n){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),a.createElement(i.Provider,{value:s},n.children)}}}]);