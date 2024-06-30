"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1711],{82459:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var e=s(74848),c=s(28453);const r={sidebar_position:6},t=void 0,o={id:"docsaidkit/funcs/vision/functionals/imbinarize",title:"imbinarize",description:"imbinarize(img int = cv2.THRESHBINARY, colorbase: str = 'BGR') -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/functionals/imbinarize.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/imbinarize",permalink:"/docs/docsaidkit/funcs/vision/functionals/imbinarize",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"pad",permalink:"/docs/docsaidkit/funcs/vision/functionals/pad"},next:{title:"imcropbox",permalink:"/docs/docsaidkit/funcs/vision/functionals/imcropbox"}},d={},l=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L336",children:"imbinarize(img: np.ndarray, threth: int = cv2.THRESH_BINARY, color_base: str = 'BGR') -> np.ndarray"})}),"\n"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u9032\u884c\u4e8c\u503c\u5316\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"img"})," (",(0,e.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u4e8c\u503c\u5316\u8655\u7406\u7684\u8f38\u5165\u5f71\u50cf\u3002\u5982\u679c\u8f38\u5165\u5f71\u50cf\u662f 3 \u901a\u9053\uff0c\u5247\u51fd\u6578\u6703\u81ea\u52d5\u61c9\u7528 ",(0,e.jsx)(i.code,{children:"bgr2gray"})," \u51fd\u6578\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"threth"})," (",(0,e.jsx)(i.code,{children:"int"}),")\uff1a\u95be\u503c\u985e\u578b\u3002\u6709\u5169\u7a2e\u95be\u503c\u985e\u578b\uff1a","\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"cv2.THRESH_BINARY"}),"\uff1a",(0,e.jsx)(i.code,{children:"cv2.THRESH_OTSU + cv2.THRESH_BINARY"})]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.code,{children:"cv2.THRESH_BINARY_INV"}),"\uff1a",(0,e.jsx)(i.code,{children:"cv2.THRESH_OTSU + cv2.THRESH_BINARY_INV"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"color_base"})," (",(0,e.jsx)(i.code,{children:"str"}),")\uff1a\u8f38\u5165\u5f71\u50cf\u7684\u984f\u8272\u7a7a\u9593\u3002\u9810\u8a2d\u70ba ",(0,e.jsx)(i.code,{children:"'BGR'"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"np.ndarray"}),"\uff1a\u4e8c\u503c\u5316\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nbin_img = D.imbinarize(img)\n"})}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{alt:"imbinarize",src:s(86756).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,c.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(a,{...n})}):a(n)}},86756:(n,i,s)=>{s.d(i,{A:()=>e});const e=s.p+"assets/images/test_imbinarize-f2b0306a9e9ccd488d482927349d40e8.jpg"},28453:(n,i,s)=>{s.d(i,{R:()=>t,x:()=>o});var e=s(96540);const c={},r=e.createContext(c);function t(n){const i=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),e.createElement(r.Provider,{value:i},n.children)}}}]);