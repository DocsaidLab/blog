"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3996],{45068:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=e(74848),s=e(28453);const i={sidebar_position:9},r="polygon_iou",c={id:"docsaidkit/funcs/structures/polygon_iou",title:"polygon_iou",description:"polygon_iou(poly1 Polygon) -> float",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/polygon_iou.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/polygon_iou",permalink:"/en/docs/docsaidkit/funcs/structures/polygon_iou",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"pairwise_ioa",permalink:"/en/docs/docsaidkit/funcs/structures/pairwise_ioa"},next:{title:"jaccard_index",permalink:"/en/docs/docsaidkit/funcs/structures/jaccard_index"}},l={},u=[];function d(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"polygon_iou",children:"polygon_iou"}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/6db820b92e709b61f1848d7583a3fa856b02716f/docsaidkit/structures/functionals.py#L166",children:"polygon_iou(poly1: Polygon, poly2: Polygon) -> float"})}),"\n"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Description"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"polygon_iou"})," is a function used to compute the Intersection over Union (IoU) between two polygons. This function calculates the ratio of intersection area to union area between the two polygons. The input polygon types must be ",(0,t.jsx)(o.code,{children:"Polygon"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"poly1"})," (",(0,t.jsx)(o.code,{children:"Polygon"}),"): The predicted polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"poly2"})," (",(0,t.jsx)(o.code,{children:"Polygon"}),"): The ground truth polygon."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Example"})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"import docsaidkit as D\n\npoly1 = D.Polygon([(0, 0), (0, 1), (1, 1), (1, 0)])\npoly2 = D.Polygon([(0.5, 0.5), (0.5, 1.5), (1.5, 1.5), (1.5, 0.5)])\niou = D.polygon_iou(poly1, poly2)\nprint(iou)\n# >>> 0.14285714285714285\n"})}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:o}={...(0,s.R)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>r,x:()=>c});var t=e(96540);const s={},i=t.createContext(s);function r(n){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function c(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(i.Provider,{value:o},n.children)}}}]);