"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1287],{41186:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=r(74848),s=r(28453);const c={sidebar_position:10},t="jaccard_index",d={id:"docsaidkit/funcs/structures/jaccard_index",title:"jaccard_index",description:"jaccardindex(predpoly np.ndarray, imagesize: Tuple[int, int]) -> float",source:"@site/docs/docsaidkit/funcs/structures/jaccard_index.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/jaccard_index",permalink:"/en/docsaidkit/funcs/structures/jaccard_index",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712752599e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"polygon_iou",permalink:"/en/docsaidkit/funcs/structures/polygon_iou"},next:{title:"Mixins",permalink:"/en/category/mixins"}},a={},o=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"jaccard_index",children:"jaccard_index"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/6db820b92e709b61f1848d7583a3fa856b02716f/docsaidkit/structures/functionals.py#L93C5-L93C18",children:"jaccard_index(pred_poly: np.ndarray, gt_poly: np.ndarray, image_size: Tuple[int, int]) -> float"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"jaccard_index"})," \u662f\u4e00\u500b\u7528\u4f86\u8a08\u7b97\u5169\u500b\u591a\u908a\u5f62\u4e4b\u9593\u7684 Jaccard index \u7684\u51fd\u6578\u3002\u9019\u500b\u51fd\u6578\u6703\u8a08\u7b97\u5169\u500b\u591a\u908a\u5f62\u4e4b\u9593\u7684\u4ea4\u96c6\u9762\u7a4d\u8207\u806f\u96c6\u9762\u7a4d\u4e4b\u6bd4\u3002\u8f38\u5165\u7684\u591a\u908a\u5f62\u985e\u578b\u5fc5\u9808\u70ba ",(0,i.jsx)(e.code,{children:"np.ndarray"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"pred_poly"})," (",(0,i.jsx)(e.code,{children:"np.ndarray"}),")\uff1a\u9810\u6e2c\u7684\u591a\u908a\u5f62\uff0c\u4e00\u500b 4 \u500b\u9ede\u7684\u591a\u908a\u5f62\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"gt_poly"})," (",(0,i.jsx)(e.code,{children:"np.ndarray"}),")\uff1a\u771f\u5be6\u7684\u591a\u908a\u5f62\uff0c\u4e00\u500b 4 \u500b\u9ede\u7684\u591a\u908a\u5f62\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"image_size"})," (",(0,i.jsx)(e.code,{children:"Tuple[int, int]"}),")\uff1a\u5f71\u50cf\u5927\u5c0f\uff0c(\u9ad8\u5ea6, \u5bec\u5ea6)\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\npred_poly = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])\ngt_poly = np.array([[0.5, 0.5], [0.5, 1.5], [1.5, 1.5], [1.5, 0.5]])\nimage_size = (2, 2)\njaccard_index = D.jaccard_index(pred_poly, gt_poly, image_size)\nprint(jaccard_index)\n# >>> 0.14285714285714285\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>d});var i=r(96540);const s={},c=i.createContext(s);function t(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);