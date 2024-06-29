"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2692],{34040:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=r(74848),i=r(28453);const o={sidebar_position:5},a="imwarp_quadrangles",t={id:"docsaidkit/funcs/vision/geometric/imwarp_quadrangles",title:"imwarp_quadrangles",description:"imwarp_quadrangles(img Union[Polygons, np.ndarray]) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/geometric/imwarp_quadrangles.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imwarp_quadrangles",permalink:"/docs/docsaidkit/funcs/vision/geometric/imwarp_quadrangles",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"imwarp_quadrangle",permalink:"/docs/docsaidkit/funcs/vision/geometric/imwarp_quadrangle"},next:{title:"imporc",permalink:"/docs/category/imporc"}},d={},c=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"imwarp_quadrangles",children:"imwarp_quadrangles"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L206",children:"imwarp_quadrangles(img: np.ndarray, polygons: Union[Polygons, np.ndarray]) -> np.ndarray"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u61c9\u7528\u7d66\u5b9a\u300c\u591a\u500b\u300d\u591a\u908a\u5f62\u5b9a\u7fa9\u7684 4 \u9ede\u900f\u8996\u8b8a\u63db\u3002\u51fd\u6578\u70ba\u6703\u81ea\u52d5\u5c0d\u56db\u500b\u9ede\u9032\u884c\u6392\u5e8f\uff0c\u5176\u9806\u5e8f\uff1a\u7b2c\u4e00\u500b\u9ede\u70ba\u5de6\u4e0a\u89d2\uff0c\u7b2c\u4e8c\u500b\u9ede\u70ba\u53f3\u4e0a\u89d2\uff0c\u7b2c\u4e09\u500b\u9ede\u70ba\u53f3\u4e0b\u89d2\uff0c\u7b2c\u56db\u500b\u9ede\u70ba\u5de6\u4e0b\u89d2\u3002\u5f71\u50cf\u8b8a\u63db\u7684\u76ee\u6a19\u5927\u5c0f\u7684\u9577\u5bec\u7531\u591a\u908a\u5f62\u7684\u6700\u5c0f\u65cb\u8f49\u5916\u63a5\u77e9\u5f62\u7684\u9577\u5bec\u6c7a\u5b9a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"img"})," (",(0,s.jsx)(e.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u8b8a\u63db\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"polygons"})," (",(0,s.jsx)(e.code,{children:"Union[Polygons, np.ndarray]"}),")\uff1a\u5305\u542b\u5b9a\u7fa9\u8b8a\u63db\u7684\u300c\u591a\u500b\u300d\u56db\u500b\u9ede\u7684\u591a\u908a\u5f62\u5c0d\u8c61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"List[np.ndarray]"}),"\uff1a\u8b8a\u63db\u5f8c\u7684\u5f71\u50cf\u5217\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('./resource/test_warp.jpg')\npolygons = D.Polygons([[[602, 404], [1832, 530], [1588, 985], [356, 860]]])\nwarp_imgs = D.imwarp_quadrangles(img, polygons)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5716\u793a\u8acb\u53c3\u8003 ",(0,s.jsx)(e.a,{href:"/docs/docsaidkit/funcs/vision/geometric/imwarp_quadrangle",children:(0,s.jsx)(e.strong,{children:"imwarp_quadrangle"})}),"\u3002"]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>t});var s=r(96540);const i={},o=s.createContext(i);function a(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);