"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3245],{16966:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(74848),c=s(28453);const r={sidebar_position:8},t="centercrop",o={id:"docsaidkit/funcs/vision/functionals/centercrop",title:"centercrop",description:"centercrop(img: np.ndarray) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/functionals/centercrop.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/centercrop",permalink:"/docs/docsaidkit/funcs/vision/functionals/centercrop",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719787737e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"imcropboxes",permalink:"/docs/docsaidkit/funcs/vision/functionals/imcropboxes"},next:{title:"geometric",permalink:"/docs/category/geometric"}},d={},a=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"centercrop",children:"centercrop"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L374",children:"centercrop(img: np.ndarray) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u9032\u884c\u4e2d\u5fc3\u88c1\u526a\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"img"})," (",(0,i.jsx)(e.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u4e2d\u5fc3\u88c1\u526a\u8655\u7406\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"np.ndarray"}),"\uff1a\u88c1\u526a\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nimg = D.imresize(img, [128, 256])\ncrop_img = D.centercrop(img)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7da0\u8272\u6846\u8868\u793a\u4e2d\u5fc3\u88c1\u526a\u7684\u5340\u57df\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"centercrop",src:s(70139).A+"",width:"630",height:"256"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},70139:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/test_centercrop-67126c32c625b509fdee0d42ce85698d.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>o});var i=s(96540);const c={},r=i.createContext(c);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);