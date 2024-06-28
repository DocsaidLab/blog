"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5937],{49064:(o,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var e=s(74848),i=s(28453);const t={sidebar_position:9},r="polygon_iou",c={id:"docsaidkit/funcs/structures/polygon_iou",title:"polygon_iou",description:"polygon_iou(poly1 Polygon) -> float",source:"@site/docs/docsaidkit/funcs/structures/polygon_iou.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/polygon_iou",permalink:"/docs/docsaidkit/funcs/structures/polygon_iou",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"pairwise_ioa",permalink:"/docs/docsaidkit/funcs/structures/pairwise_ioa"},next:{title:"jaccard_index",permalink:"/docs/docsaidkit/funcs/structures/jaccard_index"}},l={},d=[];function u(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"polygon_iou",children:"polygon_iou"}),"\n",(0,e.jsxs)(n.blockquote,{children:["\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/6db820b92e709b61f1848d7583a3fa856b02716f/docsaidkit/structures/functionals.py#L166",children:"polygon_iou(poly1: Polygon, poly2: Polygon) -> float"})}),"\n"]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a"]}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"polygon_iou"})," \u662f\u4e00\u500b\u7528\u4f86\u8a08\u7b97\u5169\u500b\u591a\u908a\u5f62\u4e4b\u9593\u7684 IoU (\u4ea4\u96c6\u6bd4\u4f8b) \u7684\u51fd\u6578\u3002\u9019\u500b\u51fd\u6578\u6703\u8a08\u7b97\u5169\u500b\u591a\u908a\u5f62\u4e4b\u9593\u7684\u4ea4\u96c6\u9762\u7a4d\u8207\u806f\u96c6\u9762\u7a4d\u4e4b\u6bd4\u3002\u8f38\u5165\u7684\u591a\u908a\u5f62\u985e\u578b\u5fc5\u9808\u70ba ",(0,e.jsx)(n.code,{children:"Polygon"}),"\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"poly1"})," (",(0,e.jsx)(n.code,{children:"Polygon"}),")\uff1a\u9810\u6e2c\u7684\u591a\u908a\u5f62\u3002"]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"poly2"})," (",(0,e.jsx)(n.code,{children:"Polygon"}),")\uff1a\u771f\u5be6\u7684\u591a\u908a\u5f62\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\npoly1 = D.Polygon([(0, 0), (0, 1), (1, 1), (1, 0)])\npoly2 = D.Polygon([(0.5, 0.5), (0.5, 1.5), (1.5, 1.5), (1.5, 0.5)])\niou = D.polygon_iou(poly1, poly2)\nprint(iou)\n# >>> 0.14285714285714285\n"})}),"\n"]}),"\n"]})]})}function a(o={}){const{wrapper:n}={...(0,i.R)(),...o.components};return n?(0,e.jsx)(n,{...o,children:(0,e.jsx)(u,{...o})}):u(o)}},28453:(o,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var e=s(96540);const i={},t=e.createContext(i);function r(o){const n=e.useContext(t);return e.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function c(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:r(o.components),e.createElement(t.Provider,{value:n},o.children)}}}]);