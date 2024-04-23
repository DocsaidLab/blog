"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6900],{86912:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=e(74848),r=e(28453);const t={sidebar_position:1},c="meanblur",o={id:"docsaidkit/funcs/vision/functionals/meanblur",title:"meanblur",description:"meanblur(img _Ksize = 3, kwargs) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/functionals/meanblur.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/meanblur",permalink:"/docsaidkit/funcs/vision/functionals/meanblur",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713882784e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"functionals",permalink:"/category/functionals"},next:{title:"gaussianblur",permalink:"/docsaidkit/funcs/vision/functionals/gaussianblur"}},a={},l=[];function d(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"meanblur",children:"meanblur"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L33",children:"meanblur(img: np.ndarray, ksize: _Ksize = 3, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u5957\u7528\u5747\u503c\u6a21\u7cca\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"img"})," (",(0,i.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u6a21\u7cca\u8655\u7406\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"ksize"})," (",(0,i.jsx)(s.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7528\u65bc\u6a21\u7cca\u8655\u7406\u7684\u6838\u5fc3\u5927\u5c0f\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u6574\u6578\u503c\uff0c\u5247\u4f7f\u7528\u6307\u5b9a\u5927\u5c0f\u7684\u6b63\u65b9\u5f62\u6838\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u5143\u7d44",(0,i.jsx)(s.code,{children:"(k_height, k_width)"}),"\uff0c\u5247\u4f7f\u7528\u6307\u5b9a\u5927\u5c0f\u7684\u77e9\u5f62\u6838\u3002\u9810\u8a2d\u70ba 3\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u6a21\u7cca\u8655\u7406\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nblur_img = D.meanblur(img, ksize=5)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"meanblur",src:e(77002).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},77002:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/test_meanblur-90f9a2e2e01698da6a61e1b016b66355.jpg"},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>o});var i=e(96540);const r={},t=i.createContext(r);function c(n){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(t.Provider,{value:s},n.children)}}}]);