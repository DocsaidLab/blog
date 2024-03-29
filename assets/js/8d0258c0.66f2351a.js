"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2823],{7955:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=e(4848),s=e(8453);const o={sidebar_position:2},t="imwrite",c={id:"docsaidkit/vision/improc/imwrite",title:"imwrite",description:"imwrite(img Union[str, Path] = None, color_base str = '.jpg') -> bool",source:"@site/docs/docsaidkit/vision/improc/imwrite.md",sourceDirName:"docsaidkit/vision/improc",slug:"/docsaidkit/vision/improc/imwrite",permalink:"/docsaidkit/vision/improc/imwrite",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"imread",permalink:"/docsaidkit/vision/improc/imread"},next:{title:"morphology",permalink:"/category/morphology"}},d={},l=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"imwrite",children:"imwrite"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L245C1-L272C67",children:"imwrite(img: np.ndarray, path: Union[str, Path] = None, color_base: str = 'BGR', suffix: str = '.jpg') -> bool"})}),"\n"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07\u5f71\u50cf\u5beb\u5165\u6a94\u6848\uff0c\u4e26\u53ef\u9078\u64c7\u8f49\u63db\u8272\u5f69\u7a7a\u9593\u3002\u4e0d\u7d66\u5b9a\u8def\u5f91\u6642\uff0c\u5c07\u5beb\u5165\u81e8\u6642\u6a94\u6848\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"img"})," (",(0,r.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8981\u5beb\u5165\u7684\u5f71\u50cf\uff0c\u4ee5 numpy ndarray \u8868\u793a\u3002"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"path"})," (",(0,r.jsx)(i.code,{children:"Union[str, Path]"}),", optional)\uff1a\u8981\u5beb\u5165\u5f71\u50cf\u6a94\u6848\u7684\u8def\u5f91\u3002\u5982\u679c\u70ba None\uff0c\u5247\u5beb\u5165\u81e8\u6642\u6a94\u6848\u3002\u9810\u8a2d\u70ba None\u3002"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"color_base"})," (",(0,r.jsx)(i.code,{children:"str"}),", optional)\uff1a\u5f71\u50cf\u7684\u7576\u524d\u8272\u5f69\u7a7a\u9593\u3002\u5982\u679c\u4e0d\u662f ",(0,r.jsx)(i.code,{children:"BGR"}),"\uff0c\u51fd\u6578\u5c07\u5617\u8a66\u5c07\u5176\u8f49\u63db\u70ba ",(0,r.jsx)(i.code,{children:"BGR"}),"\u3002\u9810\u8a2d\u70ba ",(0,r.jsx)(i.code,{children:"BGR"}),"\u3002"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"suffix"})," (",(0,r.jsx)(i.code,{children:"str"}),", optional)\uff1a\u5982\u679c path \u70ba None\uff0c\u5247\u81e8\u6642\u6a94\u6848\u7684\u5f8c\u7db4\u3002\u9810\u8a2d\u70ba ",(0,r.jsx)(i.code,{children:".jpg"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"bool"}),"\uff1a\u5982\u679c\u5beb\u5165\u64cd\u4f5c\u6210\u529f\uff0c\u5247\u8fd4\u56de True\uff0c\u5426\u5247\u8fd4\u56de False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nD.imwrite(img, 'lena.jpg')\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,r.jsx)(i,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>t,x:()=>c});var r=e(6540);const s={},o=r.createContext(s);function t(n){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(o.Provider,{value:i},n.children)}}}]);