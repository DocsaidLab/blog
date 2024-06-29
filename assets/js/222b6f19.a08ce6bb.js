"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9253],{7092:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>t});var i=e(74848),r=e(28453);const o={sidebar_position:8},c="pairwise_ioa",l={id:"docsaidkit/funcs/structures/pairwise_ioa",title:"pairwise_ioa",description:"pairwise_ioa(boxes1 Boxes) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/structures/pairwise_ioa.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/pairwise_ioa",permalink:"/docs/docsaidkit/funcs/structures/pairwise_ioa",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"pairwise_iou",permalink:"/docs/docsaidkit/funcs/structures/pairwise_iou"},next:{title:"polygon_iou",permalink:"/docs/docsaidkit/funcs/structures/polygon_iou"}},d={},t=[{value:"\u88dc\u5145\u8aaa\u660e",id:"\u88dc\u5145\u8aaa\u660e",level:2},{value:"IoA \u7c21\u4ecb",id:"ioa-\u7c21\u4ecb",level:3},{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:3},{value:"\u8a08\u7b97\u6b65\u9a5f",id:"\u8a08\u7b97\u6b65\u9a5f",level:3},{value:"\u61c9\u7528\u5834\u666f",id:"\u61c9\u7528\u5834\u666f",level:3},{value:"\u512a\u9ede\u8207\u9650\u5236",id:"\u512a\u9ede\u8207\u9650\u5236",level:3}];function a(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pairwise_ioa",children:"pairwise_ioa"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/functionals.py#L69C46-L69C47",children:"pairwise_ioa(boxes1: Boxes, boxes2: Boxes) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pairwise_ioa"})," \u662f\u4e00\u500b\u7528\u4f86\u8a08\u7b97\u5169\u500b\u908a\u754c\u6846\u5217\u8868\u4e4b\u9593\u7684 IoA (\u4ea4\u96c6\u6bd4\u4f8b) \u7684\u51fd\u6578\u3002\u9019\u500b\u51fd\u6578\u6703\u8a08\u7b97\u6240\u6709 N x M \u5c0d\u7684\u908a\u754c\u6846\u4e4b\u9593\u7684 IoA\u3002\u8f38\u5165\u7684\u908a\u754c\u6846\u985e\u578b\u5fc5\u9808\u70ba ",(0,i.jsx)(n.code,{children:"Boxes"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"boxes1"})," (",(0,i.jsx)(n.code,{children:"Boxes"}),")\uff1a\u7b2c\u4e00\u500b\u908a\u754c\u6846\u5217\u8868\u3002\u5305\u542b N \u500b\u908a\u754c\u6846\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"boxes2"})," (",(0,i.jsx)(n.code,{children:"Boxes"}),")\uff1a\u7b2c\u4e8c\u500b\u908a\u754c\u6846\u5217\u8868\u3002\u5305\u542b M \u500b\u908a\u754c\u6846\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nboxes1 = D.Boxes([[10, 20, 50, 80], [20, 30, 60, 90]])\nboxes2 = D.Boxes([[20, 30, 60, 90], [30, 40, 70, 100]])\nioa = D.pairwise_ioa(boxes1, boxes2)\nprint(ioa)\n# >>> [[0.625 0.33333334]\n#      [1.0 0.625]]\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u88dc\u5145\u8aaa\u660e",children:"\u88dc\u5145\u8aaa\u660e"}),"\n",(0,i.jsx)(n.h3,{id:"ioa-\u7c21\u4ecb",children:"IoA \u7c21\u4ecb"}),"\n",(0,i.jsx)(n.p,{children:"IoA\uff08Intersection over Area\uff09\u662f\u4e00\u7a2e\u7528\u4f86\u8a55\u4f30\u908a\u754c\u6846\u91cd\u758a\u7a0b\u5ea6\u7684\u6307\u6a19\uff0c\u5b83\u8861\u91cf\u7684\u662f\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u4e4b\u9593\u7684\u4ea4\u96c6\u9762\u7a4d\u8207\u771f\u5be6\u908a\u754c\u6846\u7684\u9762\u7a4d\u4e4b\u6bd4\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,i.jsx)(n.p,{children:"IoA \u8a08\u7b97\u516c\u5f0f\u70ba\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u4ea4\u96c6\u7684\u9762\u7a4d\u9664\u4ee5\u771f\u5be6\u908a\u754c\u6846\u7684\u9762\u7a4d\u3002 IoA \u7684\u503c\u7bc4\u570d\u5f9e 0 \u5230 1\uff0c\u6578\u503c\u8d8a\u5927\u8868\u793a\u9810\u6e2c\u908a\u754c\u6846\u8986\u84cb\u771f\u5be6\u908a\u754c\u6846\u7684\u7a0b\u5ea6\u8d8a\u9ad8\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8a08\u7b97\u6b65\u9a5f",children:"\u8a08\u7b97\u6b65\u9a5f"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u78ba\u5b9a\u908a\u754c\u6846\u5ea7\u6a19"}),"\uff1a\u9996\u5148\uff0c\u9700\u8981\u78ba\u5b9a\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u5728\u5f71\u50cf\u4e2d\u7684\u4f4d\u7f6e\uff0c\u901a\u5e38\u4f7f\u7528\u56db\u500b\u5ea7\u6a19\u4f86\u8868\u793a\u4e00\u500b\u908a\u754c\u6846\uff1a(x0, y0, x1, y1)\uff0c\u5176\u4e2d (x0, y0) \u662f\u908a\u754c\u6846\u5de6\u4e0a\u89d2\u7684\u5ea7\u6a19\uff0c(x1, y1) \u662f\u53f3\u4e0b\u89d2\u7684\u5ea7\u6a19\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8a08\u7b97\u4ea4\u96c6\u9762\u7a4d"}),"\uff1a\u8a08\u7b97\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u7684\u4ea4\u96c6\u9762\u7a4d\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8a08\u7b97 IoA"}),"\uff1a\u4ea4\u96c6\u9762\u7a4d\u9664\u4ee5\u771f\u5be6\u908a\u754c\u6846\u7684\u9762\u7a4d\uff0c\u5f97\u5230 IoA \u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u61c9\u7528\u5834\u666f",children:"\u61c9\u7528\u5834\u666f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u76ee\u6a19\u5075\u6e2c"}),"\uff1a\u5728\u76ee\u6a19\u5075\u6e2c\u4efb\u52d9\u4e2d\uff0cIoA \u7528\u65bc\u8a55\u4f30\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u4e4b\u9593\u7684\u91cd\u758a\u7a0b\u5ea6\uff0c\u9032\u800c\u8a55\u4f30\u5075\u6e2c\u6a21\u578b\u7684\u6e96\u78ba\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6a21\u578b\u8a55\u4f30"}),"\uff1aIoA \u5e38\u7528\u65bc\u8a55\u4f30\u548c\u6bd4\u8f03\u4e0d\u540c\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\u7684\u6548\u80fd\uff0c\u8f03\u9ad8\u7684 IoA \u503c\u8868\u793a\u6a21\u578b\u5177\u6709\u8f03\u597d\u7684\u5075\u6e2c\u7cbe\u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u975e\u6975\u5927\u503c\u6291\u5236\uff08NMS\uff09"}),"\uff1a\u5728\u76ee\u6a19\u6aa2\u6e2c\u5f8c\u8655\u7406\u4e2d\uff0cIoA \u7528\u65bc\u975e\u6975\u5927\u503c\u6291\u5236\uff0c\u4ee5\u6d88\u9664\u91cd\u758a\u7684\u6aa2\u6e2c\u6846\uff0c\u4fdd\u7559\u6700\u4f73\u7684\u6aa2\u6e2c\u7d50\u679c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u512a\u9ede\u8207\u9650\u5236",children:"\u512a\u9ede\u8207\u9650\u5236"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u512a\u9ede"}),"\uff1aIoA \u80fd\u5920\u91cf\u5316\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u4e4b\u9593\u7684\u91cd\u758a\u7a0b\u5ea6\uff0c\u5e6b\u52a9\u8a55\u4f30\u6a21\u578b\u7684\u6e96\u78ba\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5c40\u9650"}),"\uff1aIoA \u53ea\u8003\u616e\u4e86\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u4e4b\u9593\u7684\u91cd\u758a\u7a0b\u5ea6\uff0c\u4e26\u672a\u8003\u616e\u5176\u4ed6\u56e0\u7d20\uff0c\u5982\u908a\u754c\u6846\u7684\u5f62\u72c0\u548c\u65b9\u5411\uff0c\u56e0\u6b64\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u53ef\u80fd\u4e0d\u5920\u6e96\u78ba\u3002"]}),"\n"]}),"\n"]})]})}function x(s={}){const{wrapper:n}={...(0,r.R)(),...s.components};return n?(0,i.jsx)(n,{...s,children:(0,i.jsx)(a,{...s})}):a(s)}},28453:(s,n,e)=>{e.d(n,{R:()=>c,x:()=>l});var i=e(96540);const r={},o=i.createContext(r);function c(s){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function l(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:c(s.components),i.createElement(o.Provider,{value:n},s.children)}}}]);