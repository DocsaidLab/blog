"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6868],{9782:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=i(4848),s=i(8453);const o={sidebar_position:1},c="imread",d={id:"docsaidkit/vision/improc/imread",title:"imread",description:"imread(path str = 'BGR', verbose: bool = False) -> Union[np.ndarray, None]",source:"@site/docs/docsaidkit/vision/improc/imread.md",sourceDirName:"docsaidkit/vision/improc",slug:"/docsaidkit/vision/improc/imread",permalink:"/docsaidkit/vision/improc/imread",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"imporc",permalink:"/category/imporc"},next:{title:"imwrite",permalink:"/docsaidkit/vision/improc/imwrite"}},t={},l=[];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"imread",children:"imread"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L197C1-L242C15",children:"imread(path: Union[str, Path], color_base: str = 'BGR', verbose: bool = False) -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u8b80\u53d6\u5716\u7247\uff0c\u57fa\u65bc\u4e0d\u540c\u7684\u5f71\u50cf\u683c\u5f0f\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u8b80\u53d6\u65b9\u5f0f\uff0c\u5176\u652f\u63f4\u7684\u683c\u5f0f\u8aaa\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".heic"}),"\uff1a\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"read_heic_to_numpy"})," \u8b80\u53d6\uff0c\u4e26\u8f49\u63db\u6210 ",(0,r.jsx)(n.code,{children:"BGR"})," \u683c\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".jpg"}),"\uff1a\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"jpgread"})," \u8b80\u53d6\uff0c\u4e26\u8f49\u63db\u6210 ",(0,r.jsx)(n.code,{children:"BGR"})," \u683c\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5176\u4ed6\u683c\u5f0f\uff1a\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"cv2.imread"})," \u8b80\u53d6\uff0c\u4e26\u8f49\u63db\u6210 ",(0,r.jsx)(n.code,{children:"BGR"})," \u683c\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u82e5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"jpgread"})," \u8b80\u53d6\u70ba ",(0,r.jsx)(n.code,{children:"None"}),"\uff0c\u5247\u6703\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"cv2.imread"})," \u9032\u884c\u8b80\u53d6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"path"})," (",(0,r.jsx)(n.code,{children:"Union[str, Path]"}),")\uff1a\u8981\u8b80\u53d6\u7684\u5716\u7247\u8def\u5f91\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"color_base"})," (",(0,r.jsx)(n.code,{children:"str"}),")\uff1a\u5716\u7247\u7684\u8272\u5f69\u7a7a\u9593\u3002\u5982\u679c\u4e0d\u662f ",(0,r.jsx)(n.code,{children:"BGR"}),"\uff0c\u5c07\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"imcvtcolor"})," \u51fd\u6578\u9032\u884c\u8f49\u63db\u3002\u9810\u8a2d\u70ba ",(0,r.jsx)(n.code,{children:"BGR"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"verbose"})," (",(0,r.jsx)(n.code,{children:"bool"}),")\uff1a\u5982\u679c\u8a2d\u7f6e\u70ba True\uff0c\u7576\u8b80\u53d6\u7684\u5716\u7247\u70ba None \u6642\uff0c\u5c07\u767c\u51fa\u8b66\u544a\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"np.ndarray"}),"\uff1a\u6210\u529f\u6642\u8fd4\u56de\u5716\u7247\u7684 numpy ndarray\uff0c\u5426\u5247\u8fd4\u56de None\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var r=i(6540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);