"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9272],{25424:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(74848),l=s(28453);const t={},r="albumentations",o={id:"gmailsummary/news/2024-05-14/albumentations",title:"albumentations",description:"2024-05-14 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-05-14/albumentations.md",sourceDirName:"gmailsummary/news/2024-05-14",slug:"/gmailsummary/news/2024-05-14/albumentations",permalink:"/docs/gmailsummary/news/2024-05-14/albumentations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BentoML",permalink:"/docs/gmailsummary/news/2024-05-14/BentoML"},next:{title:"docusaurus",permalink:"/docs/gmailsummary/news/2024-05-14/docusaurus"}},u={},d=[{value:"2024-05-14 \u5f59\u6574\u5831\u544a",id:"2024-05-14-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u80cc\u666f\u4ecb\u7d39",id:"1-\u80cc\u666f\u4ecb\u7d39",level:2},{value:"2. \u8b70\u984c\u8a0e\u8ad6\u91cd\u9ede",id:"2-\u8b70\u984c\u8a0e\u8ad6\u91cd\u9ede",level:2},{value:"2.1 \u932f\u8aa4\u4fee\u5fa9",id:"21-\u932f\u8aa4\u4fee\u5fa9",level:3},{value:"2.2 \u529f\u80fd\u589e\u52a0",id:"22-\u529f\u80fd\u589e\u52a0",level:3},{value:"2.3 \u8a0e\u8ad6\u7684\u8b70\u984c",id:"23-\u8a0e\u8ad6\u7684\u8b70\u984c",level:3},{value:"2.4 \u6210\u5c31\u8207\u6311\u6230",id:"24-\u6210\u5c31\u8207\u6311\u6230",level:3},{value:"3. \u89e3\u6c7a\u65b9\u6848\u5efa\u8b70",id:"3-\u89e3\u6c7a\u65b9\u6848\u5efa\u8b70",level:2},{value:"4. \u5c08\u6709\u540d\u8a5e\u89e3\u91cb",id:"4-\u5c08\u6709\u540d\u8a5e\u89e3\u91cb",level:2},{value:"5. \u5de5\u7a0b\u7d30\u7bc0",id:"5-\u5de5\u7a0b\u7d30\u7bc0",level:2}];function c(n){const e={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"albumentations",children:"albumentations"}),"\n",(0,i.jsx)(e.h2,{id:"2024-05-14-\u5f59\u6574\u5831\u544a",children:"2024-05-14 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(e.h1,{id:"augmentation-outputs-incorrect-bounding-boxes-values\u8b70\u984c\u68b3\u7406\u8207\u5206\u6790",children:"Augmentation outputs Incorrect Bounding Boxes Values\u8b70\u984c\u68b3\u7406\u8207\u5206\u6790"}),"\n",(0,i.jsx)(e.h2,{id:"1-\u80cc\u666f\u4ecb\u7d39",children:"1. \u80cc\u666f\u4ecb\u7d39"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u8b70\u984c\u662f\u95dc\u65bcAugmentation outputs\u4e2d\u51fa\u73fe\u932f\u8aa4Bounding Boxes Values\u7684\u554f\u984c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u4f7f\u7528transforms out of Compose\uff0c\u4f46\u6240\u6709\u7684preprocess\u548cpost process for bboxes\u90fd\u5728Compose\u5167\u90e8\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"2-\u8b70\u984c\u8a0e\u8ad6\u91cd\u9ede",children:"2. \u8b70\u984c\u8a0e\u8ad6\u91cd\u9ede"}),"\n",(0,i.jsx)(e.h3,{id:"21-\u932f\u8aa4\u4fee\u5fa9",children:"2.1 \u932f\u8aa4\u4fee\u5fa9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8a0e\u8ad6\u5982\u4f55\u4fee\u5fa9Augmentation outputs\u4e2d\u4e0d\u6b63\u78ba\u7684Bounding Boxes Values\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53ef\u80fd\u6d89\u53ca\u5230\u6aa2\u67e5\u548c\u6821\u6b63transforms\u7684\u904e\u7a0b\uff0c\u4ee5\u78ba\u4fddBounding Boxes\u7684\u503c\u5728Augmentation\u5f8c\u4ecd\u7136\u6b63\u78ba\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"22-\u529f\u80fd\u589e\u52a0",children:"2.2 \u529f\u80fd\u589e\u52a0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8003\u616e\u662f\u5426\u9700\u8981\u65b0\u589e\u529f\u80fd\u4f86\u8655\u7406Bounding Boxes Values\u7684\u554f\u984c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53ef\u80fd\u9700\u8981\u8a2d\u8a08\u66f4\u667a\u80fd\u7684\u8655\u7406\u65b9\u5f0f\u6216\u7b97\u6cd5\uff0c\u4ee5\u78ba\u4fddAugmentation\u5f8c\u7684Bounding Boxes\u4fdd\u6301\u6e96\u78ba\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"23-\u8a0e\u8ad6\u7684\u8b70\u984c",children:"2.3 \u8a0e\u8ad6\u7684\u8b70\u984c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8a0e\u8ad6\u5982\u4f55\u5728Compose\u5167\u90e8\u8655\u7406preprocess\u548cpost process for bboxes\u7684\u554f\u984c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53ef\u80fd\u9700\u8981\u91cd\u65b0\u8a2d\u8a08Compose\u7684\u7d50\u69cb\u6216\u6dfb\u52a0\u65b0\u7684\u529f\u80fd\u4f86\u89e3\u6c7a\u9019\u500b\u8b70\u984c\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"24-\u6210\u5c31\u8207\u6311\u6230",children:"2.4 \u6210\u5c31\u8207\u6311\u6230"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6210\u5c31\u53ef\u80fd\u5305\u62ec\u627e\u5230\u89e3\u6c7aAugmentation outputs\u4e2d\u932f\u8aa4Bounding Boxes Values\u7684\u6709\u6548\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6311\u6230\u5728\u65bc\u9700\u8981\u514b\u670d\u6280\u8853\u4e0a\u7684\u56f0\u96e3\uff0c\u4e26\u78ba\u4fdd\u65b0\u7684\u89e3\u6c7a\u65b9\u6848\u80fd\u5920\u5b8c\u6574\u4e14\u6e96\u78ba\u5730\u8655\u7406Bounding Boxes\u7684\u554f\u984c\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"3-\u89e3\u6c7a\u65b9\u6848\u5efa\u8b70",children:"3. \u89e3\u6c7a\u65b9\u6848\u5efa\u8b70"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5efa\u8b70\u95dc\u6ce8GitHub\u4e0aalbumentations\u5718\u968a\u7684\u8b70\u984c#1721\uff0c\u67e5\u770b\u66f4\u591a\u8a0e\u8ad6\u548c\u89e3\u6c7a\u65b9\u6848\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53ef\u80fd\u9700\u8981\u9032\u884c\u4ee3\u78bc\u5be9\u67e5\u3001\u6e2c\u8a66\u548c\u512a\u5316\uff0c\u4ee5\u78ba\u4fdd\u65b0\u7684\u89e3\u6c7a\u65b9\u6848\u80fd\u5920\u6709\u6548\u5730\u4fee\u5fa9\u932f\u8aa4\u7684Bounding Boxes Values\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"4-\u5c08\u6709\u540d\u8a5e\u89e3\u91cb",children:"4. \u5c08\u6709\u540d\u8a5e\u89e3\u91cb"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Augmentation: \u5728\u6a5f\u5668\u5b78\u7fd2\u4e2d\uff0cAugmentation\u662f\u6307\u901a\u904e\u5c0d\u6578\u64da\u96c6\u9032\u884c\u8b8a\u63db\u6216\u589e\u5f37\uff0c\u4f86\u64f4\u5927\u6578\u64da\u96c6\u7684\u591a\u6a23\u6027\uff0c\u5f9e\u800c\u63d0\u9ad8\u6a21\u578b\u7684\u6cdb\u5316\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Bounding Boxes: \u7528\u65bc\u6a19\u8a18\u5716\u50cf\u4e2d\u7269\u9ad4\u4f4d\u7f6e\u7684\u77e9\u5f62\u6846\uff0c\u901a\u5e38\u7531\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0b\u89d2\u7684\u5750\u6a19\u8868\u793a\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"5-\u5de5\u7a0b\u7d30\u7bc0",children:"5. \u5de5\u7a0b\u7d30\u7bc0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53ef\u80fd\u9700\u8981\u6df1\u5165\u7814\u7a76\u5716\u50cf\u8655\u7406\u548c\u6a5f\u5668\u5b78\u7fd2\u76f8\u95dc\u7684\u77e5\u8b58\uff0c\u4ee5\u7406\u89e3\u5982\u4f55\u6709\u6548\u8655\u7406Bounding Boxes Values\u7684\u554f\u984c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9700\u8981\u5177\u5099\u4ee3\u78bc\u7de8\u5beb\u548c\u8abf\u8a66\u7684\u80fd\u529b\uff0c\u4ee5\u5be6\u73fe\u65b0\u7684\u89e3\u6c7a\u65b9\u6848\u4e26\u9032\u884c\u6e2c\u8a66\u9a57\u8b49\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7e3d\u7d50\u4f86\u8aaa\uff0c\u9019\u500b\u8b70\u984c\u6d89\u53ca\u5230Augmentation outputs\u4e2d\u932f\u8aa4Bounding Boxes Values\u7684\u554f\u984c\uff0c\u9700\u8981\u627e\u5230\u6709\u6548\u7684\u89e3\u6c7a\u65b9\u6848\u4f86\u4fee\u5fa9\u9019\u4e00\u554f\u984c\u3002\u5efa\u8b70\u95dc\u6ce8GitHub\u4e0a\u76f8\u95dc\u7684\u8a0e\u8ad6\uff0c\u4e26\u901a\u904e\u6df1\u5165\u7814\u7a76\u548c\u5be6\u8e10\u4f86\u89e3\u6c7a\u9019\u500b\u6280\u8853\u6311\u6230\u3002"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 1 \u5c01"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var i=s(96540);const l={},t=i.createContext(l);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);