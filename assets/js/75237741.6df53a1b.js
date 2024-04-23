"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9857],{50982:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var r=i(74848),s=i(28453);const a={sidebar_position:4},o="imwarp_quadrangle",t={id:"docsaidkit/funcs/vision/geometric/imwarp_quadrangle",title:"imwarp_quadrangle",description:"imwarp_quadrangle(img Union[Polygon, np.ndarray]) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/geometric/imwarp_quadrangle.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imwarp_quadrangle",permalink:"/docsaidkit/funcs/vision/geometric/imwarp_quadrangle",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"imrotate",permalink:"/docsaidkit/funcs/vision/geometric/imrotate"},next:{title:"imwarp_quadrangles",permalink:"/docsaidkit/funcs/vision/geometric/imwarp_quadrangles"}},d={},c=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"imwarp_quadrangle",children:"imwarp_quadrangle"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L155C1-L203C71",children:"imwarp_quadrangle(img: np.ndarray, polygon: Union[Polygon, np.ndarray]) -> np.ndarray"})}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u61c9\u7528\u7d66\u5b9a\u591a\u908a\u5f62\u5b9a\u7fa9\u7684 4 \u9ede\u900f\u8996\u8b8a\u63db\u3002\u51fd\u6578\u70ba\u6703\u81ea\u52d5\u5c0d\u56db\u500b\u9ede\u9032\u884c\u6392\u5e8f\uff0c\u5176\u9806\u5e8f\uff1a\u7b2c\u4e00\u500b\u9ede\u70ba\u5de6\u4e0a\u89d2\uff0c\u7b2c\u4e8c\u500b\u9ede\u70ba\u53f3\u4e0a\u89d2\uff0c\u7b2c\u4e09\u500b\u9ede\u70ba\u53f3\u4e0b\u89d2\uff0c\u7b2c\u56db\u500b\u9ede\u70ba\u5de6\u4e0b\u89d2\u3002\u5f71\u50cf\u8b8a\u63db\u7684\u76ee\u6a19\u5927\u5c0f\u7684\u9577\u5bec\u7531\u591a\u908a\u5f62\u7684\u6700\u5c0f\u65cb\u8f49\u5916\u63a5\u77e9\u5f62\u7684\u9577\u5bec\u6c7a\u5b9a\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"img"})," (",(0,r.jsx)(e.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u8b8a\u63db\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"polygon"})," (",(0,r.jsx)(e.code,{children:"Union[Polygon, np.ndarray]"}),")\uff1a\u5305\u542b\u5b9a\u7fa9\u8b8a\u63db\u7684\u56db\u500b\u9ede\u7684\u591a\u908a\u5f62\u5c0d\u8c61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"np.ndarray"}),"\uff1a\u8b8a\u63db\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('./resource/test_warp.jpg')\npolygon = D.Polygon([[602, 404], [1832, 530], [1588, 985], [356, 860]])\nwarp_img = D.imwarp_quadrangle(img, polygon)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"imwarp_quadrangle",src:i(28072).A+"",width:"725",height:"256"})}),"\n",(0,r.jsx)(e.p,{children:"\u5176\u4e2d\uff0c\u4e0a\u5716\u7684\u7da0\u6846\u70ba\u8868\u793a\u539f\u59cb\u591a\u908a\u5f62\u7bc4\u570d\u3002"}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28072:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/test_imwarp_quadrangle-9b1226d91ee3973d3dea725c11ac0b7a.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>t});var r=i(96540);const s={},a=r.createContext(s);function o(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);