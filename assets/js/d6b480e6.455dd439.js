"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2066],{31675:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=e(74848),r=e(28453);const t={sidebar_position:3},d="medianblur",o={id:"docsaidkit/vision/functionals/medianblur",title:"medianblur",description:"medianblur(img _Ksize = 3, kwargs) -> np.ndarray",source:"@site/docs/docsaidkit/vision/functionals/medianblur.md",sourceDirName:"docsaidkit/vision/functionals",slug:"/docsaidkit/vision/functionals/medianblur",permalink:"/docsaidkit/vision/functionals/medianblur",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712407759e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"gaussianblur",permalink:"/docsaidkit/vision/functionals/gaussianblur"},next:{title:"imcvtcolor",permalink:"/docsaidkit/vision/functionals/imcvtcolor"}},c={},l=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"medianblur",children:"medianblur"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L78",children:"medianblur(img: np.ndarray, ksize: _Ksize = 3, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u5957\u7528\u4e2d\u503c\u6a21\u7cca\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"img"})," (",(0,s.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u6a21\u7cca\u8655\u7406\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"ksize"})," (",(0,s.jsx)(i.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7528\u65bc\u6a21\u7cca\u8655\u7406\u7684\u6838\u5fc3\u5927\u5c0f\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u6574\u6578\u503c\uff0c\u5247\u4f7f\u7528\u6307\u5b9a\u5927\u5c0f\u7684\u6b63\u65b9\u5f62\u6838\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u5143\u7d44",(0,s.jsx)(i.code,{children:"(k_height, k_width)"}),"\uff0c\u5247\u4f7f\u7528\u6307\u5b9a\u5927\u5c0f\u7684\u77e9\u5f62\u6838\u3002\u9810\u8a2d\u70ba 3\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"np.ndarray"}),"\uff1a\u6a21\u7cca\u8655\u7406\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nblur_img = D.medianblur(img, ksize=5)\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"medianblur",src:e(92593).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},92593:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/test_medianblur-890b9df163d032f31dd4e89f989c33b8.jpg"},28453:(n,i,e)=>{e.d(i,{R:()=>d,x:()=>o});var s=e(96540);const r={},t=s.createContext(r);function d(n){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(t.Provider,{value:i},n.children)}}}]);