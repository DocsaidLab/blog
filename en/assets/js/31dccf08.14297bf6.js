"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[915],{38445:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var e=s(74848),t=s(28453);const r={sidebar_position:5},a="imadjust",o={id:"docsaidkit/funcs/vision/functionals/imadjust",title:"imadjust",description:"imadjust(img Tuple[int, int] = (0, 255), gamma str = 'BGR') -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/functionals/imadjust.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/imadjust",permalink:"/en/docsaidkit/funcs/vision/functionals/imadjust",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"imcvtcolor",permalink:"/en/docsaidkit/funcs/vision/functionals/imcvtcolor"},next:{title:"pad",permalink:"/en/docsaidkit/funcs/vision/functionals/pad"}},d={},c=[];function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"imadjust",children:"imadjust"}),"\n",(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L122",children:"imadjust(img: np.ndarray, rng_out: Tuple[int, int] = (0, 255), gamma: float = 1.0, color_base: str = 'BGR') -> np.ndarray"})}),"\n"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Description"}),": Adjust the intensity of an image."]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Parameters"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"img"})," (",(0,e.jsx)(i.code,{children:"np.ndarray"}),"): Input image to adjust the intensity of. Should be 2-D or 3-D."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"rng_out"})," (",(0,e.jsx)(i.code,{children:"Tuple[int, int]"}),"): Target intensity range for the output image. Default is (0, 255)."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"gamma"})," (",(0,e.jsx)(i.code,{children:"float"}),"): Value used for gamma correction. If gamma is less than 1, the mapping will bias towards higher (brighter) output values. If gamma is greater than 1, the mapping will bias towards lower (darker) output values. Default is 1.0 (linear mapping)."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"color_base"})," (",(0,e.jsx)(i.code,{children:"str"}),"): Color base of the input image. Should be 'BGR' or 'RGB'. Default is 'BGR'."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"np.ndarray"}),": Adjusted image."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nadj_img = D.imadjust(img, gamma=2)\n"})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{alt:"imadjust",src:s(26421).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},26421:(n,i,s)=>{s.d(i,{A:()=>e});const e=s.p+"assets/images/test_imadjust-d2e6bf3028c135b953e2f1a0bb952fe4.jpg"},28453:(n,i,s)=>{s.d(i,{R:()=>a,x:()=>o});var e=s(96540);const t={},r=e.createContext(t);function a(n){const i=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),e.createElement(r.Provider,{value:i},n.children)}}}]);