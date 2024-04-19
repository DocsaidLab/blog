"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9344],{77583:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=i(74848),r=i(28453);const t={sidebar_position:3},d="medianblur",o={id:"docsaidkit/funcs/vision/functionals/medianblur",title:"medianblur",description:"medianblur(img _Ksize = 3, kwargs) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/functionals/medianblur.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/medianblur",permalink:"/en/docsaidkit/funcs/vision/functionals/medianblur",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713493386e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"gaussianblur",permalink:"/en/docsaidkit/funcs/vision/functionals/gaussianblur"},next:{title:"imcvtcolor",permalink:"/en/docsaidkit/funcs/vision/functionals/imcvtcolor"}},c={},l=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"medianblur",children:"medianblur"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L78",children:"medianblur(img: np.ndarray, ksize: _Ksize = 3, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Description"}),": Apply median blur processing to the input image."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"img"})," (",(0,s.jsx)(e.code,{children:"np.ndarray"}),"): Input image to be blurred."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ksize"})," (",(0,s.jsx)(e.code,{children:"Union[int, Tuple[int, int]]"}),"): Size of the kernel used for blurring. If an integer value is provided, a square kernel of the specified size is used. If a tuple ",(0,s.jsx)(e.code,{children:"(k_height, k_width)"})," is provided, a rectangular kernel of the specified size is used. Default is 3."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"np.ndarray"}),": Blurred image."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nblur_img = D.medianblur(img, ksize=5)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"medianblur",src:i(49015).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},49015:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/test_medianblur-890b9df163d032f31dd4e89f989c33b8.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>o});var s=i(96540);const r={},t=s.createContext(r);function d(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);