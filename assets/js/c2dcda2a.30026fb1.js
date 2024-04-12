"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5885],{55516:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=i(74848),r=i(28453);const s={sidebar_position:3},o="imrotate",c={id:"docsaidkit/funcs/vision/geometric/imrotate",title:"imrotate",description:"imrotate(img float, scale Union[str, int, INTER] = INTER.BILINEAR, bordertype Union[int, Tuple[int, int, int]] = None, expand Tuple[int, int] = None) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/geometric/imrotate.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imrotate",permalink:"/docsaidkit/funcs/vision/geometric/imrotate",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712934505e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"imrotate90",permalink:"/docsaidkit/funcs/vision/geometric/imrotate90"},next:{title:"imwarp_quadrangle",permalink:"/docsaidkit/funcs/vision/geometric/imwarp_quadrangle"}},d={},l=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"imrotate",children:"imrotate"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L80C1-L153C1",children:"imrotate(img: np.ndarray, angle: float, scale: float = 1, interpolation: Union[str, int, INTER] = INTER.BILINEAR, bordertype: Union[str, int, BORDER] = BORDER.CONSTANT, bordervalue: Union[int, Tuple[int, int, int]] = None, expand: bool = True, center: Tuple[int, int] = None) -> np.ndarray"})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u9032\u884c\u65cb\u8f49\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"img"})," (",(0,t.jsx)(e.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u65cb\u8f49\u8655\u7406\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"angle"})," (",(0,t.jsx)(e.code,{children:"float"}),")\uff1a\u65cb\u8f49\u89d2\u5ea6\u3002\u4ee5\u5ea6\u70ba\u55ae\u4f4d\uff0c\u9006\u6642\u91dd\u65b9\u5411\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"scale"})," (",(0,t.jsx)(e.code,{children:"float"}),")\uff1a\u7e2e\u653e\u6bd4\u4f8b\u3002\u9810\u8a2d\u70ba 1\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"interpolation"})," (",(0,t.jsx)(e.code,{children:"Union[str, int, INTER]"}),")\uff1a\u63d2\u503c\u65b9\u6cd5\u3002\u53ef\u7528\u9078\u9805\u6709\uff1aINTER.NEAREST, INTER.LINEAR, INTER.CUBIC, INTER.LANCZOS4\u3002\u9810\u8a2d\u70ba INTER.LINEAR\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"bordertype"})," (",(0,t.jsx)(e.code,{children:"Union[str, int, BORDER]"}),")\uff1a\u908a\u754c\u985e\u578b\u3002\u53ef\u7528\u9078\u9805\u6709\uff1aBORDER.CONSTANT, BORDER.REPLICATE, BORDER.REFLECT, BORDER.REFLECT_101\u3002\u9810\u8a2d\u70ba BORDER.CONSTANT\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"bordervalue"})," (",(0,t.jsx)(e.code,{children:"Union[int, Tuple[int, int, int]]"}),")\uff1a\u586b\u5145\u908a\u754c\u7684\u503c\u3002\u50c5\u5728 bordertype \u70ba BORDER.CONSTANT \u6642\u6709\u6548\u3002\u9810\u8a2d\u70ba None\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"expand"})," (",(0,t.jsx)(e.code,{children:"bool"}),")\uff1a\u662f\u5426\u64f4\u5c55\u8f38\u51fa\u5f71\u50cf\u4ee5\u5bb9\u7d0d\u6574\u500b\u65cb\u8f49\u5f8c\u7684\u5f71\u50cf\u3002\u5982\u679c\u70ba True\uff0c\u5247\u64f4\u5c55\u8f38\u51fa\u5f71\u50cf\u4ee5\u4f7f\u5176\u8db3\u5920\u5927\u4ee5\u5bb9\u7d0d\u6574\u500b\u65cb\u8f49\u5f8c\u7684\u5f71\u50cf\u3002\u5982\u679c\u70ba False \u6216\u7701\u7565\uff0c\u5247\u4f7f\u8f38\u51fa\u5f71\u50cf\u8207\u8f38\u5165\u5f71\u50cf\u5927\u5c0f\u76f8\u540c\u3002\u8acb\u6ce8\u610f\uff0cexpand \u6a19\u8a8c\u5047\u8a2d\u570d\u7e5e\u4e2d\u5fc3\u65cb\u8f49\u4e26\u4e14\u6c92\u6709\u5e73\u79fb\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"center"})," (",(0,t.jsx)(e.code,{children:"Tuple[int, int]"}),")\uff1a\u65cb\u8f49\u4e2d\u5fc3\u3002\u9810\u8a2d\u70ba\u5f71\u50cf\u7684\u4e2d\u5fc3\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"np.ndarray"}),"\uff1a\u65cb\u8f49\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nrotate_img = D.imrotate(img, 45, bordertype=D.BORDER.CONSTANT, expand=True)\n\n# Resize the rotated image to the original size for visualization\nrotate_img = D.imresize(rotate_img, [img.shape[0], img.shape[1]])\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"imrotate",src:i(48726).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},48726:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/test_imrotate-1938f829e04524ce3e3231727433ee25.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);