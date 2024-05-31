"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[71851],{24135:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=r(74848),c=r(28453);const s={sidebar_position:8},t="centercrop",o={id:"docsaidkit/funcs/vision/functionals/centercrop",title:"centercrop",description:"centercrop(img: np.ndarray) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/functionals/centercrop.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/centercrop",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/centercrop",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"imcropboxes",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/imcropboxes"},next:{title:"geometric",permalink:"/en/docs/category/geometric"}},d={},a=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"centercrop",children:"centercrop"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L374",children:"centercrop(img: np.ndarray) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Description"}),": Performs center cropping on the input image."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"img"})," (",(0,i.jsx)(e.code,{children:"np.ndarray"}),"): The input image to be center cropped."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"np.ndarray"}),": The cropped image."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nimg = D.imresize(img, [128, 256])\ncrop_img = D.centercrop(img)\n"})}),"\n",(0,i.jsx)(e.p,{children:"The green box indicates the center cropped area."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"centercrop",src:r(68907).A+"",width:"630",height:"256"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},68907:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/test_centercrop-67126c32c625b509fdee0d42ce85698d.jpg"},28453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>o});var i=r(96540);const c={},s=i.createContext(c);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);