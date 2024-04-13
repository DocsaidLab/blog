"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8735],{74833:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>t});var i=e(74848),r=e(28453);const o={sidebar_position:7},l="pairwise_iou",c={id:"docsaidkit/funcs/structures/pairwise_iou",title:"pairwise_iou",description:"paiwise_iou(boxes1 Boxes) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/structures/pairwise_iou.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/pairwise_iou",permalink:"/docsaidkit/funcs/structures/pairwise_iou",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171298044e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"pairwise_intersection",permalink:"/docsaidkit/funcs/structures/pairwise_intersection"},next:{title:"pairwise_ioa",permalink:"/docsaidkit/funcs/structures/pairwise_ioa"}},d={},t=[{value:"\u88dc\u5145\u8aaa\u660e",id:"\u88dc\u5145\u8aaa\u660e",level:2},{value:"IoU \u7c21\u4ecb",id:"iou-\u7c21\u4ecb",level:3},{value:"\u5b9a\u7fa9",id:"\u5b9a\u7fa9",level:3},{value:"\u8a08\u7b97\u6b65\u9a5f",id:"\u8a08\u7b97\u6b65\u9a5f",level:3},{value:"\u61c9\u7528\u5834\u666f",id:"\u61c9\u7528\u5834\u666f",level:3},{value:"\u512a\u9ede\u8207\u9650\u5236",id:"\u512a\u9ede\u8207\u9650\u5236",level:3}];function x(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"pairwise_iou",children:"pairwise_iou"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/functionals.py#L41",children:"paiwise_iou(boxes1: Boxes, boxes2: Boxes) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"pairwise_iou"})," \u662f\u4e00\u500b\u7528\u4f86\u8a08\u7b97\u5169\u500b\u908a\u754c\u6846\u5217\u8868\u4e4b\u9593\u7684 IoU (\u4ea4\u96c6\u6bd4\u4f8b) \u7684\u51fd\u6578\u3002\u9019\u500b\u51fd\u6578\u6703\u8a08\u7b97\u6240\u6709 N x M \u5c0d\u7684\u908a\u754c\u6846\u4e4b\u9593\u7684 IoU\u3002\u8f38\u5165\u7684\u908a\u754c\u6846\u985e\u578b\u5fc5\u9808\u70ba ",(0,i.jsx)(s.code,{children:"Boxes"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"boxes1"})," (",(0,i.jsx)(s.code,{children:"Boxes"}),")\uff1a\u7b2c\u4e00\u500b\u908a\u754c\u6846\u5217\u8868\u3002\u5305\u542b N \u500b\u908a\u754c\u6846\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"boxes2"})," (",(0,i.jsx)(s.code,{children:"Boxes"}),")\uff1a\u7b2c\u4e8c\u500b\u908a\u754c\u6846\u5217\u8868\u3002\u5305\u542b M \u500b\u908a\u754c\u6846\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nboxes1 = D.Boxes([[10, 20, 50, 80], [20, 30, 60, 90]])\nboxes2 = D.Boxes([[20, 30, 60, 90], [30, 40, 70, 100]])\niou = D.pairwise_iou(boxes1, boxes2)\nprint(iou)\n# >>> [[0.45454547 0.2]\n#      [1.0 0.45454547]]\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u88dc\u5145\u8aaa\u660e",children:"\u88dc\u5145\u8aaa\u660e"}),"\n",(0,i.jsx)(s.h3,{id:"iou-\u7c21\u4ecb",children:"IoU \u7c21\u4ecb"}),"\n",(0,i.jsx)(s.p,{children:"IoU\uff08Intersection over Union\uff09\u662f\u96fb\u8166\u8996\u89ba\u4e2d\u8a55\u4f30\u7269\u4ef6\u5075\u6e2c\u6f14\u7b97\u6cd5\u6548\u80fd\u7684\u91cd\u8981\u6307\u6a19\uff0c\u7279\u5225\u662f\u5728\u76ee\u6a19\u5075\u6e2c\u548c\u5206\u5272\u4efb\u52d9\u4e2d\u3002 \u5b83\u8861\u91cf\u7684\u662f\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u4e4b\u9593\u7684\u91cd\u758a\u7a0b\u5ea6\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"\u5b9a\u7fa9",children:"\u5b9a\u7fa9"}),"\n",(0,i.jsx)(s.p,{children:"IoU \u8a08\u7b97\u516c\u5f0f\u70ba\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u4ea4\u96c6\u7684\u9762\u7a4d\u9664\u4ee5\u5b83\u5011\u4e26\u96c6\u7684\u9762\u7a4d\u3002 IoU \u7684\u503c\u7bc4\u570d\u5f9e 0 \u5230 1\uff0c\u6578\u503c\u8d8a\u5927\u8868\u793a\u91cd\u758a\u7a0b\u5ea6\u8d8a\u9ad8\uff0c\u9810\u6e2c\u7d50\u679c\u8d8a\u6e96\u78ba\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"\u8a08\u7b97\u6b65\u9a5f",children:"\u8a08\u7b97\u6b65\u9a5f"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u78ba\u5b9a\u908a\u754c\u6846\u5ea7\u6a19"}),"\uff1a\u9996\u5148\uff0c\u9700\u8981\u78ba\u5b9a\u9810\u6e2c\u908a\u754c\u6846\u548c\u771f\u5be6\u908a\u754c\u6846\u5728\u5f71\u50cf\u4e2d\u7684\u4f4d\u7f6e\uff0c\u901a\u5e38\u4f7f\u7528\u56db\u500b\u5ea7\u6a19\u4f86\u8868\u793a\u4e00\u500b\u908a\u754c\u6846\uff1a(x0, y0, x1, y1)\uff0c\u5176\u4e2d (x0, y0) \u662f\u908a\u754c\u6846\u5de6\u4e0a\u89d2\u7684\u5ea7\u6a19\uff0c(x1, y1) \u662f\u53f3\u4e0b\u89d2\u7684\u5ea7\u6a19\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8a08\u7b97\u4ea4\u96c6\u9762\u7a4d"}),"\uff1a\u8a08\u7b97\u5169\u500b\u908a\u754c\u6846\u91cd\u758a\u90e8\u5206\u7684\u9762\u7a4d\u3002 \u5982\u679c\u5169\u500b\u908a\u754c\u6846\u5b8c\u5168\u4e0d\u91cd\u758a\uff0c\u5247\u4ea4\u96c6\u9762\u7a4d\u70ba 0\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8a08\u7b97\u4e26\u96c6\u9762\u7a4d"}),"\uff1a\u4e26\u96c6\u9762\u7a4d\u7b49\u65bc\u5169\u500b\u908a\u754c\u6846\u5404\u81ea\u7684\u9762\u7a4d\u7e3d\u548c\u6e1b\u53bb\u4ea4\u96c6\u9762\u7a4d\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8a08\u7b97 IoU"}),"\uff1a\u4ea4\u96c6\u9762\u7a4d\u9664\u4ee5\u4e26\u96c6\u9762\u7a4d\uff0c\u5f97\u5230 IoU \u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u61c9\u7528\u5834\u666f",children:"\u61c9\u7528\u5834\u666f"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u76ee\u6a19\u5075\u6e2c"}),"\uff1a\u5728\u76ee\u6a19\u5075\u6e2c\u4efb\u52d9\u4e2d\uff0cIoU \u7528\u65bc\u8a55\u4f30\u5075\u6e2c\u6846\u662f\u5426\u6e96\u78ba\u8986\u5beb\u5230\u76ee\u6a19\u7269\u4ef6\u3002 \u901a\u5e38\u6703\u8a2d\u5b9a\u4e00\u500b\u95be\u503c\uff08\u5982 0.5\uff09\uff0c\u7576 IoU \u5927\u65bc\u9019\u500b\u95be\u503c\u6642\uff0c\u53ef\u4ee5\u8a8d\u70ba\u5075\u6e2c\u662f\u6210\u529f\u7684\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u6a21\u578b\u8a55\u4f30"}),"\uff1aIoU \u5e38\u7528\u65bc\u8a55\u4f30\u548c\u6bd4\u8f03\u4e0d\u540c\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\u7684\u6548\u80fd\uff0c\u8f03\u9ad8\u7684 IoU \u503c\u8868\u793a\u6a21\u578b\u5177\u6709\u8f03\u597d\u7684\u5075\u6e2c\u7cbe\u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u975e\u6975\u5927\u503c\u6291\u5236\uff08NMS\uff09"}),"\uff1a\u5728\u76ee\u6a19\u6aa2\u6e2c\u5f8c\u8655\u7406\u4e2d\uff0cIoU \u7528\u65bc\u975e\u6975\u5927\u503c\u6291\u5236\uff0c\u4ee5\u6d88\u9664\u91cd\u758a\u7684\u6aa2\u6e2c\u6846\uff0c\u4fdd\u7559\u6700\u4f73\u7684\u6aa2\u6e2c\u7d50\u679c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u512a\u9ede\u8207\u9650\u5236",children:"\u512a\u9ede\u8207\u9650\u5236"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u512a\u9ede"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u76f4\u89ba\u5f0f"}),"\uff1aIoU \u63d0\u4f9b\u4e86\u4e00\u500b\u76f4\u89ba\u7684\u65b9\u5f0f\u4f86\u91cf\u5316\u9810\u6e2c\u908a\u754c\u6846\u8207\u771f\u5be6\u908a\u754c\u6846\u4e4b\u9593\u7684\u76f8\u4f3c\u5ea6\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u6a19\u6e96\u5316"}),"\uff1a\u4f5c\u70ba\u4e00\u500b\u7bc4\u570d\u5728 0 \u5230 1 \u4e4b\u9593\u7684\u6a19\u91cf\u503c\uff0cIoU \u4fbf\u65bc\u6bd4\u8f03\u548c\u8a55\u4f30\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5c40\u9650"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u4e0d\u654f\u611f\u6027"}),"\uff1a\u7576\u9810\u6e2c\u6846\u8207\u771f\u5be6\u6846\u4e4b\u9593\u7684\u504f\u5dee\u8f03\u5c0f\uff0c\u5373\u5169\u8005\u5e7e\u4e4e\u91cd\u758a\u6642\uff0cIoU \u7684\u8b8a\u5316\u53ef\u80fd\u4e0d\u5920\u654f\u611f\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u95be\u503c\u9078\u64c7"}),"\uff1aIoU \u7684\u95be\u503c\u9078\u64c7\u53ef\u80fd\u6703\u5f71\u97ff\u5230\u6700\u7d42\u7684\u8a55\u4f30\u7d50\u679c\uff0c\u4e0d\u540c\u7684\u95be\u503c\u53ef\u80fd\u5c0e\u81f4\u4e0d\u540c\u7684\u8a55\u50f9\u6a19\u6e96\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>c});var i=e(96540);const r={},o=i.createContext(r);function l(n){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(o.Provider,{value:s},n.children)}}}]);