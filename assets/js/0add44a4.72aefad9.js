"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8445],{44608:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>e,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var c=s(74848),t=s(28453);const o={sidebar_position:4},e="imcvtcolor",r={id:"docsaidkit/funcs/vision/functionals/imcvtcolor",title:"imcvtcolor",description:"imcvtcolor(img Union[int, str]) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/functionals/imcvtcolor.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/imcvtcolor",permalink:"/docsaidkit/funcs/vision/functionals/imcvtcolor",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713878085e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"medianblur",permalink:"/docsaidkit/funcs/vision/functionals/medianblur"},next:{title:"imadjust",permalink:"/docsaidkit/funcs/vision/functionals/imadjust"}},d={},l=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h1,{id:"imcvtcolor",children:"imcvtcolor"}),"\n",(0,c.jsxs)(i.blockquote,{children:["\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L96",children:"imcvtcolor(img: np.ndarray, cvt_mode: Union[int, str]) -> np.ndarray"})}),"\n"]}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsxs)(i.p,{children:[(0,c.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u9032\u884c\u984f\u8272\u7a7a\u9593\u8f49\u63db\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"img"})," (",(0,c.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u8f49\u63db\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"cvt_mode"})," (",(0,c.jsx)(i.code,{children:"Union[int, str]"}),")\uff1a\u984f\u8272\u8f49\u63db\u6a21\u5f0f\u3002\u53ef\u4ee5\u662f\u8868\u793a\u8f49\u63db\u4ee3\u78bc\u7684\u6574\u6578\u5e38\u6578\uff0c\u4e5f\u53ef\u4ee5\u662f\u8868\u793a OpenCV \u984f\u8272\u8f49\u63db\u540d\u7a31\u7684\u5b57\u7b26\u4e32\u3002\u4f8b\u5982\uff1a",(0,c.jsx)(i.code,{children:"BGR2GRAY"})," \u7528\u65bc\u8f49\u63db BGR \u5f71\u50cf\u70ba\u7070\u968e\u3002\u53ef\u7528\u53c3\u6578\u8acb\u76f4\u63a5\u53c3\u8003 ",(0,c.jsx)(i.a,{href:"https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html",children:(0,c.jsx)(i.strong,{children:"OpenCV COLOR"})}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.strong,{children:"np.ndarray"}),"\uff1a\u5177\u6709\u6240\u9700\u984f\u8272\u7a7a\u9593\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(i.li,{children:["\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nycrcb_img = D.imcvtcolor(img, 'BGR2YCrCb')\n"})}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.img,{alt:"imcvtcolor_ycrcb",src:s(61734).A+"",width:"426",height:"256"})}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nycrcb_img = D.imcvtcolor(img, 'BGR2YCrCb')\n"})}),"\n",(0,c.jsx)(i.p,{children:(0,c.jsx)(i.img,{alt:"imcvtcolor_gray",src:s(84118).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,c.jsx)(i,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},84118:(n,i,s)=>{s.d(i,{A:()=>c});const c=s.p+"assets/images/test_imcvtcolor_gray-54c79a2c6642900e976eb44d460f2d83.jpg"},61734:(n,i,s)=>{s.d(i,{A:()=>c});const c=s.p+"assets/images/test_imcvtcolor_ycrcb-c4c02b18d21bca1524232a041ab26761.jpg"},28453:(n,i,s)=>{s.d(i,{R:()=>e,x:()=>r});var c=s(96540);const t={},o=c.createContext(t);function e(n){const i=c.useContext(o);return c.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:e(n.components),c.createElement(o.Provider,{value:i},n.children)}}}]);