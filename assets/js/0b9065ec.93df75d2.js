"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3757],{31342:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=n(74848),t=n(28453);const r={sidebar_position:6},o="pairwise_intersection",c={id:"docsaidkit/funcs/structures/pairwise_intersection",title:"pairwise_intersection",description:"pairwise_intersection(boxes1 Boxes) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/structures/pairwise_intersection.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/pairwise_intersection",permalink:"/docs/docsaidkit/funcs/structures/pairwise_intersection",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Polygons",permalink:"/docs/docsaidkit/funcs/structures/polygons"},next:{title:"pairwise_iou",permalink:"/docs/docsaidkit/funcs/structures/pairwise_iou"}},d={},a=[];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"pairwise_intersection",children:"pairwise_intersection"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/functionals.py#L17",children:"pairwise_intersection(boxes1: Boxes, boxes2: Boxes) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"pairwise_intersection"})," \u662f\u4e00\u500b\u7528\u4f86\u8a08\u7b97\u5169\u500b\u908a\u754c\u6846\u5217\u8868\u4e4b\u9593\u7684\u4ea4\u96c6\u9762\u7a4d\u7684\u51fd\u6578\u3002\u9019\u500b\u51fd\u6578\u6703\u8a08\u7b97\u6240\u6709 N x M \u5c0d\u7684\u908a\u754c\u6846\u4e4b\u9593\u7684\u4ea4\u96c6\u9762\u7a4d\u3002\u8f38\u5165\u7684\u908a\u754c\u6846\u985e\u578b\u5fc5\u9808\u70ba ",(0,i.jsx)(s.code,{children:"Boxes"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"boxes1"})," (",(0,i.jsx)(s.code,{children:"Boxes"}),")\uff1a\u7b2c\u4e00\u500b\u908a\u754c\u6846\u5217\u8868\u3002\u5305\u542b N \u500b\u908a\u754c\u6846\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"boxes2"})," (",(0,i.jsx)(s.code,{children:"Boxes"}),")\uff1a\u7b2c\u4e8c\u500b\u908a\u754c\u6846\u5217\u8868\u3002\u5305\u542b M \u500b\u908a\u754c\u6846\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nboxes1 = D.Boxes([[10, 20, 50, 80], [20, 30, 60, 90]])\nboxes2 = D.Boxes([[20, 30, 60, 90], [30, 40, 70, 100]])\nintersection = D.pairwise_intersection(boxes1, boxes2)\nprint(intersection)\n# >>> [[1500. 800.]\n#      [2400. 1500.]]\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var i=n(96540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);