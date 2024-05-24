"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1829],{67504:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var s=i(74848),c=i(28453);const o={sidebar_position:4},r="imcvtcolor",t={id:"docsaidkit/funcs/vision/functionals/imcvtcolor",title:"imcvtcolor",description:"imcvtcolor(img Union[int, str]) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/functionals/imcvtcolor.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/imcvtcolor",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/imcvtcolor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"medianblur",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/medianblur"},next:{title:"imadjust",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/imadjust"}},l={},a=[];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"imcvtcolor",children:"imcvtcolor"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L96",children:"imcvtcolor(img: np.ndarray, cvt_mode: Union[int, str]) -> np.ndarray"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Description"}),": Perform color space conversion on the input image."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"img"})," (",(0,s.jsx)(e.code,{children:"np.ndarray"}),"): Input image to be converted."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"cvt_mode"})," (",(0,s.jsx)(e.code,{children:"Union[int, str]"}),"): Color conversion mode. It can be an integer constant representing the conversion code, or a string representing the OpenCV color conversion name. For example, ",(0,s.jsx)(e.code,{children:"BGR2GRAY"})," is used to convert a BGR image to grayscale. For available parameters, please refer directly to ",(0,s.jsx)(e.a,{href:"https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html",children:(0,s.jsx)(e.strong,{children:"OpenCV COLOR"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"np.ndarray"}),": Image with the desired color space."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nycrcb_img = D.imcvtcolor(img, 'BGR2YCrCb')\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"imcvtcolor_ycrcb",src:i(60214).A+"",width:"426",height:"256"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nycrcb_img = D.imcvtcolor(img, 'BGR2YCrCb')\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"imcvtcolor_gray",src:i(50438).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},50438:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/test_imcvtcolor_gray-54c79a2c6642900e976eb44d460f2d83.jpg"},60214:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/test_imcvtcolor_ycrcb-c4c02b18d21bca1524232a041ab26761.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>t});var s=i(96540);const c={},o=s.createContext(c);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);