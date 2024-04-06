"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6375],{50543:(n,s,r)=>{r.r(s),r.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=r(74848),e=r(28453);const a={sidebar_position:6},o="draw_mask",d={id:"docsaidkit/drawings/draw_mask",title:"draw_mask",description:"drawmask(img np.ndarray, colormap Tuple[float, float] = (0.5, 0.5), gamma bool = False) -> np.ndarray",source:"@site/docs/docsaidkit/drawings/draw_mask.md",sourceDirName:"docsaidkit/drawings",slug:"/docsaidkit/drawings/draw_mask",permalink:"/docsaidkit/drawings/draw_mask",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"draw_text",permalink:"/docsaidkit/drawings/draw_text"},next:{title:"draw_ocr_infos",permalink:"/docsaidkit/drawings/draw_ocr_infos"}},t={},l=[];function c(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"draw_mask",children:"draw_mask"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L366",children:"draw_mask(img: np.ndarray, mask: np.ndarray, colormap: int = cv2.COLORMAP_JET, weight: Tuple[float, float] = (0.5, 0.5), gamma: float = 0, min_max_normalize: bool = False) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5728\u5f71\u50cf\u4e0a\u7e6a\u88fd\u906e\u7f69\u3002"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"img"})," (",(0,i.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u5f71\u50cf\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"mask"})," (",(0,i.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u906e\u7f69\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"colormap"})," (",(0,i.jsx)(s.code,{children:"int"}),")\uff1a\u7528\u65bc\u906e\u7f69\u7684\u8272\u5f69\u5730\u5716\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"cv2.COLORMAP_JET"}),"\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"weight"})," (",(0,i.jsx)(s.code,{children:"Tuple[float, float]"}),")\uff1a\u5f71\u50cf\u548c\u906e\u7f69\u7684\u6b0a\u91cd\u3002\u9810\u8a2d\u70ba (0.5, 0.5)\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"gamma"})," (",(0,i.jsx)(s.code,{children:"float"}),")\uff1a\u906e\u7f69\u7684 Gamma \u503c\u3002\u9810\u8a2d\u70ba 0\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"min_max_normalize"})," (",(0,i.jsx)(s.code,{children:"bool"}),")\uff1a\u662f\u5426\u5c07\u906e\u7f69\u6b63\u898f\u5316\u70ba\u7bc4\u570d [0, 1]\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u7e6a\u88fd\u4e86\u906e\u7f69\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\nimport numpy as np\n\nimg = D.imread('lena.png')\npolygon = D.Polygon([(20, 20), (100, 20), (80, 80), (20, 40)])\nmask = D.draw_polygon(np.zeros_like(img), polygon, fillup=True, color=255)\nmask_img = D.draw_mask(img, mask, colormap=cv2.COLORMAP_JET, weight=(0.5, 0.5), gamma=0, min_max_normalize=False)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"draw_mask",src:r(55565).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:s}={...(0,e.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},55565:(n,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/test_draw_mask-790affdfa66ebbf22fceb184402c9c8f.jpg"},28453:(n,s,r)=>{r.d(s,{R:()=>o,x:()=>d});var i=r(96540);const e={},a=i.createContext(e);function o(n){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function d(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:o(n.components),i.createElement(a.Provider,{value:s},n.children)}}}]);