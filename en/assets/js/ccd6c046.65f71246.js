"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[16380],{65501:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(74848),r=s(28453);const l={},t="onnxruntime",c={id:"gmailsummary/news/2024-05/2024-05-17/onnxruntime",title:"onnxruntime",description:"2024-05-17 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-05/2024-05-17/onnxruntime.md",sourceDirName:"gmailsummary/news/2024-05/2024-05-17",slug:"/gmailsummary/news/2024-05/2024-05-17/onnxruntime",permalink:"/en/docs/gmailsummary/news/2024-05/2024-05-17/onnxruntime",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docusaurus",permalink:"/en/docs/gmailsummary/news/2024-05/2024-05-17/docusaurus"},next:{title:"pytorch-lightning",permalink:"/en/docs/gmailsummary/news/2024-05/2024-05-17/pytorch-lightning"}},d={},o=[{value:"2024-05-17 \u5f59\u6574\u5831\u544a",id:"2024-05-17-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u932f\u8aa4\u4fee\u5fa9",id:"1-\u932f\u8aa4\u4fee\u5fa9",level:3},{value:"2. \u529f\u80fd\u589e\u52a0",id:"2-\u529f\u80fd\u589e\u52a0",level:3},{value:"3. \u8a0e\u8ad6\u7684\u8b70\u984c",id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c",level:3},{value:"4. \u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230",id:"4-\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230",level:3}];function u(n){const e={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"onnxruntime",children:"onnxruntime"}),"\n",(0,i.jsx)(e.h2,{id:"2024-05-17-\u5f59\u6574\u5831\u544a",children:"2024-05-17 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u64da\u6536\u5230\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u5728Microsoft\u7684ONNX Runtime\u5c08\u6848\u4e2d\uff0c\u5718\u968a\u6301\u7e8c\u9032\u884c\u8457\u5404\u7a2e\u6d3b\u52d5\uff0c\u5305\u62ec\u932f\u8aa4\u4fee\u5fa9\u3001\u529f\u80fd\u589e\u52a0\u3001\u8a0e\u8ad6\u7684\u8b70\u984c\u4ee5\u53ca\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230\u3002\u4ee5\u4e0b\u662f\u6211\u8a8d\u70ba\u91cd\u8981\u7684\u5167\u5bb9\u68b3\u7406\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u932f\u8aa4\u4fee\u5fa9",children:"1. \u932f\u8aa4\u4fee\u5fa9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728PR #20690 \u4e2d\uff0c\u5718\u968a\u6210\u529f\u4fee\u5fa9\u4e867\u500b\u6f0f\u6d1e\uff0c\u9019\u986f\u793a\u4e86\u4ed6\u5011\u5728\u5b89\u5168\u65b9\u9762\u7684\u52aa\u529b\u548c\u6210\u5c31\u3002\u9019\u5305\u62ec\u5347\u7d1a\u53d7\u6f0f\u6d1e\u5f71\u97ff\u7684\u4f9d\u8cf4\u9805\u7248\u672c\uff0c\u4e26\u63d0\u4f9b\u4e86\u76f8\u95dc\u7684\u6f0f\u6d1e\u4fe1\u606f\u548c\u4fee\u5fa9\u65b9\u6cd5\u3002\u9019\u5c0d\u65bc\u78ba\u4fdd\u4ee3\u78bc\u7684\u7a69\u5b9a\u6027\u548c\u5b89\u5168\u6027\u81f3\u95dc\u91cd\u8981\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-\u529f\u80fd\u589e\u52a0",children:"2. \u529f\u80fd\u589e\u52a0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728PR #20344 \u4e2d\uff0c\u5718\u968a\u6dfb\u52a0\u4e86Split QuickGelu Fusion \u529f\u80fd\uff0c\u9019\u8868\u660e\u4ed6\u5011\u4e0d\u50c5\u81f4\u529b\u65bc\u4fee\u5fa9\u554f\u984c\uff0c\u9084\u5728\u4e0d\u65b7\u589e\u52a0\u65b0\u529f\u80fd\uff0c\u4ee5\u63d0\u9ad8ONNX Runtime\u7684\u6027\u80fd\u548c\u529f\u80fd\u6027\u3002\u9019\u7a2e\u6301\u7e8c\u7684\u6539\u9032\u5c0d\u65bc\u7528\u6236\u9ad4\u9a57\u548c\u6027\u80fd\u512a\u5316\u81f3\u95dc\u91cd\u8981\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c",children:"3. \u8a0e\u8ad6\u7684\u8b70\u984c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728Issue #20674 \u4e2d\uff0c\u8a0e\u8ad6\u4e86Clip\u904b\u7b97\u7b26\u4e2d\u7684\u985e\u578b\u932f\u8aa4\u554f\u984c\uff0c\u4e26\u63d0\u5230\u4e86ONNX opset\u7248\u672c\u7684\u76f8\u95dc\u4fe1\u606f\u3002\u9019\u7a2e\u8a0e\u8ad6\u6709\u52a9\u65bc\u5718\u968a\u66f4\u597d\u5730\u7406\u89e3\u554f\u984c\u7684\u672c\u8cea\uff0c\u4e26\u627e\u5230\u89e3\u6c7a\u65b9\u6848\u3002\u540c\u6642\uff0c\u8a0e\u8ad6\u4e5f\u6709\u52a9\u65bc\u4fc3\u9032\u5718\u968a\u5167\u90e8\u7684\u5408\u4f5c\u548c\u77e5\u8b58\u5206\u4eab\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"4-\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230",children:"4. \u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728PR #20703 \u4e2d\uff0c\u5718\u968a\u63d0\u4ea4\u4e86\u81ea\u5b9a\u7fa9allreduce cuda kernel\uff0c\u9019\u8868\u660e\u4ed6\u5011\u5728\u512a\u5316CUDA\u76f8\u95dc\u5167\u5bb9\u65b9\u9762\u53d6\u5f97\u4e86\u9032\u5c55\u3002\u9019\u7a2e\u512a\u5316\u5c0d\u65bc\u63d0\u9ad8\u904b\u884c\u6642\u7684\u6548\u7387\u548c\u6027\u80fd\u81f3\u95dc\u91cd\u8981\uff0c\u540c\u6642\u4e5f\u5c55\u793a\u4e86\u5718\u968a\u5728GPU\u52a0\u901f\u65b9\u9762\u7684\u6280\u8853\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7e3d\u7684\u4f86\u8aaa\uff0cONNX Runtime\u5718\u968a\u5728\u6301\u7e8c\u6539\u9032\u548c\u7dad\u8b77\u5c08\u6848\u7684\u904e\u7a0b\u4e2d\uff0c\u5c55\u73fe\u4e86\u5c08\u696d\u7684\u6280\u8853\u80fd\u529b\u548c\u5718\u968a\u5408\u4f5c\u7cbe\u795e\u3002\u4ed6\u5011\u4e0d\u50c5\u81f4\u529b\u65bc\u89e3\u6c7a\u554f\u984c\u548c\u63d0\u9ad8\u5b89\u5168\u6027\uff0c\u9084\u7a4d\u6975\u589e\u52a0\u65b0\u529f\u80fd\u548c\u512a\u5316\u6027\u80fd\uff0c\u4ee5\u78ba\u4fddONNX Runtime\u5728\u6a5f\u5668\u5b78\u7fd2\u548c\u6df1\u5ea6\u5b78\u7fd2\u9818\u57df\u7684\u9818\u5148\u5730\u4f4d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5ef6\u4f38\u89e3\u91cb\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"ONNX Runtime"}),"\uff1a\u4e00\u500b\u9ad8\u6027\u80fd\u7684\u958b\u6e90\u63a8\u7406\u5f15\u64ce\uff0c\u7528\u65bc\u5728\u4e0d\u540c\u786c\u9ad4\u5e73\u53f0\u4e0a\u57f7\u884cONNX\u683c\u5f0f\u7684\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"PR (Pull Request)"}),"\uff1a\u4ee3\u8868\u958b\u767c\u4eba\u54e1\u63d0\u4ea4\u7684\u4ee3\u78bc\u66f4\u6539\u8acb\u6c42\uff0c\u901a\u5e38\u7528\u65bc\u65b0\u589e\u529f\u80fd\u3001\u4fee\u5fa9\u932f\u8aa4\u6216\u9032\u884c\u4ee3\u78bc\u512a\u5316\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"CUDA"}),"\uff1aCompute Unified Device Architecture\uff0c\u662fNVIDIA\u958b\u767c\u7684\u4e26\u884c\u904b\u7b97\u5e73\u53f0\u548c\u61c9\u7528\u7a0b\u5f0f\u7a0b\u5f0f\u8a2d\u8a08\u4ecb\u9762\uff0c\u7528\u65bcGPU\u52a0\u901f\u8a08\u7b97\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"opset"}),"\uff1aOperation Set\uff0c\u6307\u7684\u662fONNX\u683c\u5f0f\u4e2d\u652f\u6301\u7684\u64cd\u4f5c\u96c6\u5408\u7248\u672c\uff0c\u5f71\u97ff\u6a21\u578b\u7684\u76f8\u5bb9\u6027\u548c\u529f\u80fd\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"GPU\u52a0\u901f"}),"\uff1a\u5229\u7528\u5716\u5f62\u8655\u7406\u5668\uff08GPU\uff09\u7684\u4e26\u884c\u904b\u7b97\u80fd\u529b\u4f86\u52a0\u901f\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u7684\u8a13\u7df4\u548c\u63a8\u7406\u904e\u7a0b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5b89\u5168\u6f0f\u6d1e"}),"\uff1a\u6307\u8edf\u9ad4\u4e2d\u5b58\u5728\u7684\u53ef\u80fd\u88ab\u60e1\u610f\u5229\u7528\u7684\u6f0f\u6d1e\uff0c\u9700\u8981\u53ca\u6642\u4fee\u5fa9\u4ee5\u78ba\u4fdd\u7cfb\u7d71\u7684\u5b89\u5168\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6027\u80fd\u512a\u5316"}),"\uff1a\u901a\u904e\u6539\u9032\u4ee3\u78bc\u7d50\u69cb\u3001\u7b97\u6cd5\u6216\u786c\u9ad4\u5229\u7528\u7387\u7b49\u65b9\u5f0f\uff0c\u63d0\u9ad8\u7cfb\u7d71\u7684\u904b\u884c\u6548\u7387\u548c\u901f\u5ea6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 97 \u5c01"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);