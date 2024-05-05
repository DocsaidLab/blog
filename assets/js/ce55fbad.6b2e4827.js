"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7786],{28863:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var e=s(74848),r=s(28453);const t={sidebar_position:3},c="medianblur",d={id:"docsaidkit/funcs/vision/functionals/medianblur",title:"medianblur",description:"medianblur(img _Ksize = 3, kwargs) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/functionals/medianblur.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/medianblur",permalink:"/docs/docsaidkit/funcs/vision/functionals/medianblur",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"gaussianblur",permalink:"/docs/docsaidkit/funcs/vision/functionals/gaussianblur"},next:{title:"imcvtcolor",permalink:"/docs/docsaidkit/funcs/vision/functionals/imcvtcolor"}},o={},l=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"medianblur",children:"medianblur"}),"\n",(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L78",children:"medianblur(img: np.ndarray, ksize: _Ksize = 3, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u5957\u7528\u4e2d\u503c\u6a21\u7cca\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"img"})," (",(0,e.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u6a21\u7cca\u8655\u7406\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"ksize"})," (",(0,e.jsx)(i.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7528\u65bc\u6a21\u7cca\u8655\u7406\u7684\u6838\u5fc3\u5927\u5c0f\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u6574\u6578\u503c\uff0c\u5247\u4f7f\u7528\u6307\u5b9a\u5927\u5c0f\u7684\u6b63\u65b9\u5f62\u6838\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u5143\u7d44",(0,e.jsx)(i.code,{children:"(k_height, k_width)"}),"\uff0c\u5247\u4f7f\u7528\u6307\u5b9a\u5927\u5c0f\u7684\u77e9\u5f62\u6838\u3002\u9810\u8a2d\u70ba 3\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"np.ndarray"}),"\uff1a\u6a21\u7cca\u8655\u7406\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nblur_img = D.medianblur(img, ksize=5)\n"})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{alt:"medianblur",src:s(54471).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(a,{...n})}):a(n)}},54471:(n,i,s)=>{s.d(i,{A:()=>e});const e=s.p+"assets/images/test_medianblur-890b9df163d032f31dd4e89f989c33b8.jpg"},28453:(n,i,s)=>{s.d(i,{R:()=>c,x:()=>d});var e=s(96540);const r={},t=e.createContext(r);function c(n){const i=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function d(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),e.createElement(t.Provider,{value:i},n.children)}}}]);