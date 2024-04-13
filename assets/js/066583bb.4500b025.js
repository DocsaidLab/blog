"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[97],{66367:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=e(74848),r=e(28453);const t={sidebar_position:2},o="imwrite",c={id:"docsaidkit/funcs/vision/improc/imwrite",title:"imwrite",description:"imwrite(img Union[str, Path] = None, color_base str = '.jpg') -> bool",source:"@site/docs/docsaidkit/funcs/vision/improc/imwrite.md",sourceDirName:"docsaidkit/funcs/vision/improc",slug:"/docsaidkit/funcs/vision/improc/imwrite",permalink:"/docsaidkit/funcs/vision/improc/imwrite",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171298044e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"imread",permalink:"/docsaidkit/funcs/vision/improc/imread"},next:{title:"pdf2imgs",permalink:"/docsaidkit/funcs/vision/improc/pdf2imgs"}},d={},l=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"imwrite",children:"imwrite"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L245C1-L272C67",children:"imwrite(img: np.ndarray, path: Union[str, Path] = None, color_base: str = 'BGR', suffix: str = '.jpg') -> bool"})}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07\u5f71\u50cf\u5beb\u5165\u6a94\u6848\uff0c\u4e26\u53ef\u9078\u64c7\u8f49\u63db\u8272\u5f69\u7a7a\u9593\u3002\u4e0d\u7d66\u5b9a\u8def\u5f91\u6642\uff0c\u5c07\u5beb\u5165\u81e8\u6642\u6a94\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"img"})," (",(0,s.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8981\u5beb\u5165\u7684\u5f71\u50cf\uff0c\u4ee5 numpy ndarray \u8868\u793a\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"path"})," (",(0,s.jsx)(i.code,{children:"Union[str, Path]"}),")\uff1a\u8981\u5beb\u5165\u5f71\u50cf\u6a94\u6848\u7684\u8def\u5f91\u3002\u5982\u679c\u70ba None\uff0c\u5247\u5beb\u5165\u81e8\u6642\u6a94\u6848\u3002\u9810\u8a2d\u70ba None\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"color_base"})," (",(0,s.jsx)(i.code,{children:"str"}),")\uff1a\u5f71\u50cf\u7684\u7576\u524d\u8272\u5f69\u7a7a\u9593\u3002\u5982\u679c\u4e0d\u662f ",(0,s.jsx)(i.code,{children:"BGR"}),"\uff0c\u51fd\u6578\u5c07\u5617\u8a66\u5c07\u5176\u8f49\u63db\u70ba ",(0,s.jsx)(i.code,{children:"BGR"}),"\u3002\u9810\u8a2d\u70ba ",(0,s.jsx)(i.code,{children:"BGR"}),"\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"suffix"})," (",(0,s.jsx)(i.code,{children:"str"}),")\uff1a\u5982\u679c path \u70ba None\uff0c\u5247\u81e8\u6642\u6a94\u6848\u7684\u5f8c\u7db4\u3002\u9810\u8a2d\u70ba ",(0,s.jsx)(i.code,{children:".jpg"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"bool"}),"\uff1a\u5982\u679c\u5beb\u5165\u64cd\u4f5c\u6210\u529f\uff0c\u5247\u8fd4\u56de True\uff0c\u5426\u5247\u8fd4\u56de False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nD.imwrite(img, 'lena.jpg')\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>o,x:()=>c});var s=e(96540);const r={},t=s.createContext(r);function o(n){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(t.Provider,{value:i},n.children)}}}]);