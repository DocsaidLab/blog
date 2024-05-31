"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[23802],{46894:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var e=i(74848),r=i(28453);const t={sidebar_position:2},a="gaussianblur",c={id:"docsaidkit/funcs/vision/functionals/gaussianblur",title:"gaussianblur",description:"gaussianblur(img _Ksize = 3, sigmaX: int = 0, kwargs) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/functionals/gaussianblur.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/gaussianblur",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/gaussianblur",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"meanblur",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/meanblur"},next:{title:"medianblur",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/medianblur"}},o={},l=[];function d(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h1,{id:"gaussianblur",children:"gaussianblur"}),"\n",(0,e.jsxs)(s.blockquote,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L54",children:"gaussianblur(img: np.ndarray, ksize: _Ksize = 3, sigmaX: int = 0, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"Description"}),": Apply Gaussian blur to the input image."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"Parameters"}),":"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"img"})," (",(0,e.jsx)(s.code,{children:"np.ndarray"}),"): Input image to be blurred."]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"ksize"})," (",(0,e.jsx)(s.code,{children:"Union[int, Tuple[int, int]]"}),"): Size of the kernel used for blurring. If an integer value is provided, a square kernel of the specified size is used. If a tuple ",(0,e.jsx)(s.code,{children:"(k_height, k_width)"})," is provided, a rectangular kernel of the specified size is used. Default is 3."]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"sigmaX"})," (",(0,e.jsx)(s.code,{children:"int"}),"): Standard deviation of the Gaussian kernel in the X direction. Default is 0."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"np.ndarray"}),": Blurred image."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"Example"}),":"]}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nblur_img = D.gaussianblur(img, ksize=5)\n"})}),"\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.img,{alt:"gaussianblur",src:i(70976).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},70976:(n,s,i)=>{i.d(s,{A:()=>e});const e=i.p+"assets/images/test_gaussianblur-4d4a6cbe684cca361bb8c234c4c042a7.jpg"},28453:(n,s,i)=>{i.d(s,{R:()=>a,x:()=>c});var e=i(96540);const r={},t=e.createContext(r);function a(n){const s=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),e.createElement(t.Provider,{value:s},n.children)}}}]);