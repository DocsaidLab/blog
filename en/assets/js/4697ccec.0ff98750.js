"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7803],{62885:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(74848),t=s(28453);const o={sidebar_position:6},r="pairwise_intersection",c={id:"docsaidkit/funcs/structures/pairwise_intersection",title:"pairwise_intersection",description:"pairwise_intersection(boxes1 Boxes) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/pairwise_intersection.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/pairwise_intersection",permalink:"/en/docsaidkit/funcs/structures/pairwise_intersection",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171371528e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Polygons",permalink:"/en/docsaidkit/funcs/structures/polygons"},next:{title:"pairwise_iou",permalink:"/en/docsaidkit/funcs/structures/pairwise_iou"}},a={},d=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pairwise_intersection",children:"pairwise_intersection"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/functionals.py#L17",children:"pairwise_intersection(boxes1: Boxes, boxes2: Boxes) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pairwise_intersection"})," is a function used to calculate the intersection area between two lists of bounding boxes. This function calculates the intersection area for all N x M pairs of bounding boxes. The input bounding box type must be ",(0,i.jsx)(n.code,{children:"Boxes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"boxes1"})," (",(0,i.jsx)(n.code,{children:"Boxes"}),"): The first list of bounding boxes, containing N bounding boxes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"boxes2"})," (",(0,i.jsx)(n.code,{children:"Boxes"}),"): The second list of bounding boxes, containing M bounding boxes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nboxes1 = D.Boxes([[10, 20, 50, 80], [20, 30, 60, 90]])\nboxes2 = D.Boxes([[20, 30, 60, 90], [30, 40, 70, 100]])\nintersection = D.pairwise_intersection(boxes1, boxes2)\nprint(intersection)\n# >>> [[1500. 800.]\n#      [2400. 1500.]]\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);