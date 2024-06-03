"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35559],{17193:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var s=i(74848),r=i(28453);const c={sidebar_position:1},o="imread",d={id:"docsaidkit/funcs/vision/improc/imread",title:"imread",description:"imread(path str = 'BGR', verbose: bool = False) -> Union[np.ndarray, None]",source:"@site/docs/docsaidkit/funcs/vision/improc/imread.md",sourceDirName:"docsaidkit/funcs/vision/improc",slug:"/docsaidkit/funcs/vision/improc/imread",permalink:"/docs/docsaidkit/funcs/vision/improc/imread",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"imporc",permalink:"/docs/category/imporc"},next:{title:"imwrite",permalink:"/docs/docsaidkit/funcs/vision/improc/imwrite"}},t={},l=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"imread",children:"imread"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L197C1-L242C15",children:"imread(path: Union[str, Path], color_base: str = 'BGR', verbose: bool = False) -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u8b80\u53d6\u5716\u7247\uff0c\u57fa\u65bc\u4e0d\u540c\u7684\u5f71\u50cf\u683c\u5f0f\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u8b80\u53d6\u65b9\u5f0f\uff0c\u5176\u652f\u63f4\u7684\u683c\u5f0f\u8aaa\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:".heic"}),"\uff1a\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"read_heic_to_numpy"})," \u8b80\u53d6\uff0c\u4e26\u8f49\u63db\u6210 ",(0,s.jsx)(e.code,{children:"BGR"})," \u683c\u5f0f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:".jpg"}),"\uff1a\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"jpgread"})," \u8b80\u53d6\uff0c\u4e26\u8f49\u63db\u6210 ",(0,s.jsx)(e.code,{children:"BGR"})," \u683c\u5f0f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5176\u4ed6\u683c\u5f0f\uff1a\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"cv2.imread"})," \u8b80\u53d6\uff0c\u4e26\u8f49\u63db\u6210 ",(0,s.jsx)(e.code,{children:"BGR"})," \u683c\u5f0f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u82e5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"jpgread"})," \u8b80\u53d6\u70ba ",(0,s.jsx)(e.code,{children:"None"}),"\uff0c\u5247\u6703\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"cv2.imread"})," \u9032\u884c\u8b80\u53d6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"path"})," (",(0,s.jsx)(e.code,{children:"Union[str, Path]"}),")\uff1a\u8981\u8b80\u53d6\u7684\u5716\u7247\u8def\u5f91\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"color_base"})," (",(0,s.jsx)(e.code,{children:"str"}),")\uff1a\u5716\u7247\u7684\u8272\u5f69\u7a7a\u9593\u3002\u5982\u679c\u4e0d\u662f ",(0,s.jsx)(e.code,{children:"BGR"}),"\uff0c\u5c07\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"imcvtcolor"})," \u51fd\u6578\u9032\u884c\u8f49\u63db\u3002\u9810\u8a2d\u70ba ",(0,s.jsx)(e.code,{children:"BGR"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"verbose"})," (",(0,s.jsx)(e.code,{children:"bool"}),")\uff1a\u5982\u679c\u8a2d\u7f6e\u70ba True\uff0c\u7576\u8b80\u53d6\u7684\u5716\u7247\u70ba None \u6642\uff0c\u5c07\u767c\u51fa\u8b66\u544a\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"np.ndarray"}),"\uff1a\u6210\u529f\u6642\u8fd4\u56de\u5716\u7247\u7684 numpy ndarray\uff0c\u5426\u5247\u8fd4\u56de None\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>d});var s=i(96540);const r={},c=s.createContext(r);function o(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);