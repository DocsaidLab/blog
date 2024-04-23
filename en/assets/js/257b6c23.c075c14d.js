"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2239],{13872:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(74848),r=i(28453);const t={sidebar_position:1},a="meanblur",l={id:"docsaidkit/funcs/vision/functionals/meanblur",title:"meanblur",description:"meanblur(img _Ksize = 3, kwargs) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/functionals/meanblur.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/meanblur",permalink:"/en/docsaidkit/funcs/vision/functionals/meanblur",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713878085e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"functionals",permalink:"/en/category/functionals"},next:{title:"gaussianblur",permalink:"/en/docsaidkit/funcs/vision/functionals/gaussianblur"}},o={},c=[];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"meanblur",children:"meanblur"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L33",children:"meanblur(img: np.ndarray, ksize: _Ksize = 3, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Description"}),": Apply mean blur processing to the input image."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"img"})," (",(0,s.jsx)(e.code,{children:"np.ndarray"}),"): Input image to be blurred."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ksize"})," (",(0,s.jsx)(e.code,{children:"Union[int, Tuple[int, int]]"}),"): Size of the kernel used for blurring. If an integer value is provided, a square kernel of the specified size is used. If a tuple ",(0,s.jsx)(e.code,{children:"(k_height, k_width)"})," is provided, a rectangular kernel of the specified size is used. Default is 3."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"np.ndarray"}),": Blurred image."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nblur_img = D.meanblur(img, ksize=5)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"meanblur",src:i(62970).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},62970:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/test_meanblur-90f9a2e2e01698da6a61e1b016b66355.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>l});var s=i(96540);const r={},t=s.createContext(r);function a(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);