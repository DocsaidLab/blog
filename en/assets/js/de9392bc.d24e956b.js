"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[56270],{31451:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var i=e(74848),r=e(28453);const l={},c="pytorch-lightning",d={id:"gmailsummary/news/2024-06-08/pytorch-lightning",title:"pytorch-lightning",description:"2024-06-08 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-06-08/pytorch-lightning.md",sourceDirName:"gmailsummary/news/2024-06-08",slug:"/gmailsummary/news/2024-06-08/pytorch-lightning",permalink:"/en/docs/gmailsummary/news/2024-06-08/pytorch-lightning",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"onnxruntime",permalink:"/en/docs/gmailsummary/news/2024-06-08/onnxruntime"},next:{title:"Gmail API Activation",permalink:"/en/docs/gmailsummary/gmailapi_enable"}},h={},t=[{value:"2024-06-08 \u5f59\u6574\u5831\u544a",id:"2024-06-08-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u79fb\u9664<code>numpy</code>\u5957\u4ef6\u4f9d\u8cf4\u7684\u8b70\u984c\uff08Issue #16649\uff09",id:"1-\u79fb\u9664numpy\u5957\u4ef6\u4f9d\u8cf4\u7684\u8b70\u984cissue-16649",level:3},{value:"2. \u8a18\u9304\u8d85\u53c3\u6578\u6642\u8655\u7406\u5217\u8868\u5b57\u5178\u7684\u8b70\u984c\uff08Issue #19957\uff09",id:"2-\u8a18\u9304\u8d85\u53c3\u6578\u6642\u8655\u7406\u5217\u8868\u5b57\u5178\u7684\u8b70\u984cissue-19957",level:3},{value:"3. \u8655\u7406\u8996\u983b\u5e40\u6642\u51fa\u73fe\u932f\u8aa4\u7684\u8b70\u984c\uff08Issue #19956\uff09",id:"3-\u8655\u7406\u8996\u983b\u5e40\u6642\u51fa\u73fe\u932f\u8aa4\u7684\u8b70\u984cissue-19956",level:3},{value:"4. \u7f3a\u5c11\u5fc5\u8981\u4f4d\u7f6e\u53c3\u6578<code>masks</code>\u7684\u8b70\u984c\uff08Issue #19921\uff09",id:"4-\u7f3a\u5c11\u5fc5\u8981\u4f4d\u7f6e\u53c3\u6578masks\u7684\u8b70\u984cissue-19921",level:3},{value:"5. \u81ea\u5b9a\u7fa9\u6279\u6b21\u9078\u64c7\u7528\u65bc\u8a18\u9304\u7684\u8b70\u984c\uff08Issue #19940\uff09",id:"5-\u81ea\u5b9a\u7fa9\u6279\u6b21\u9078\u64c7\u7528\u65bc\u8a18\u9304\u7684\u8b70\u984cissue-19940",level:3},{value:"6. \u907f\u514d\u4f7f\u7528<code>numpy()</code>\u8f49\u63db\u7684\u8b70\u984c\uff08Issue #19945\uff09",id:"6-\u907f\u514d\u4f7f\u7528numpy\u8f49\u63db\u7684\u8b70\u984cissue-19945",level:3}];function o(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"pytorch-lightning",children:"pytorch-lightning"}),"\n",(0,i.jsx)(s.h2,{id:"2024-06-08-\u5f59\u6574\u5831\u544a",children:"2024-06-08 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(s.p,{children:"\u6839\u64da\u6536\u5230\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u9019\u662f\u4e00\u500b\u95dc\u65bcPyTorch Lightning\u958b\u6e90\u9805\u76ee\u7684\u8a0e\u8ad6\u548c\u958b\u767c\u6d3b\u52d5\u7684\u6458\u8981\uff0c\u5176\u4e2d\u63d0\u5230\u4e86\u591a\u500b\u8b70\u984c\u548c\u76f8\u95dc\u7684\u4fee\u5fa9\u5de5\u4f5c\u3001\u8a0e\u8ad6\u4ee5\u53ca\u529f\u80fd\u589e\u5f37\u3002\u4ee5\u4e0b\u662f\u5c0d\u5176\u4e2d\u4e00\u4e9b\u91cd\u8981\u5167\u5bb9\u7684\u68b3\u7406\u548c\u7e3d\u7d50\uff1a"}),"\n",(0,i.jsxs)(s.h3,{id:"1-\u79fb\u9664numpy\u5957\u4ef6\u4f9d\u8cf4\u7684\u8b70\u984cissue-16649",children:["1. \u79fb\u9664",(0,i.jsx)(s.code,{children:"numpy"}),"\u5957\u4ef6\u4f9d\u8cf4\u7684\u8b70\u984c\uff08Issue #16649\uff09"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),"\uff1a\u8b70\u984c\u6d89\u53ca\u5f9e",(0,i.jsx)(s.code,{children:"src/lightning"}),"\u4e2d\u79fb\u9664",(0,i.jsx)(s.code,{children:"numpy"}),"\u5957\u4ef6\u4f9d\u8cf4\u7684\u5de5\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u9032\u5c55"}),"\uff1a\u76f8\u95dc\u7684\u4fee\u5fa9\u5de5\u4f5c\u6b63\u5728\u9032\u884c\u4e2d\uff0c\u4e26\u8a0e\u8ad6\u662f\u5426\u9700\u8981\u5728",(0,i.jsx)(s.code,{children:"tests"}),"\u5957\u4ef6\u4e2d\u4e5f\u66f4\u6539",(0,i.jsx)(s.code,{children:"numpy"}),"\u4f9d\u8cf4\u7684\u554f\u984c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"2-\u8a18\u9304\u8d85\u53c3\u6578\u6642\u8655\u7406\u5217\u8868\u5b57\u5178\u7684\u8b70\u984cissue-19957",children:"2. \u8a18\u9304\u8d85\u53c3\u6578\u6642\u8655\u7406\u5217\u8868\u5b57\u5178\u7684\u8b70\u984c\uff08Issue #19957\uff09"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),"\uff1a\u8b70\u984c\u6d89\u53ca\u5728",(0,i.jsx)(s.code,{children:"logger.py"}),"\u4e2d\u8a18\u9304\u8d85\u53c3\u6578\u6642\u8655\u7406\u5217\u8868\u5b57\u5178\u7684\u60c5\u6cc1\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u9032\u5c55"}),"\uff1a\u63d0\u51fa\u4e86\u4e00\u500b\u4fee\u5fa9\u65b9\u6848\u4f86\u66f4\u597d\u5730\u8655\u7406\u5217\u8868\u5b57\u5178\u7684\u60c5\u6cc1\uff0c\u4ee5\u63d0\u9ad8\u8a18\u9304\u7684\u6e96\u78ba\u6027\u548c\u5b8c\u6574\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"3-\u8655\u7406\u8996\u983b\u5e40\u6642\u51fa\u73fe\u932f\u8aa4\u7684\u8b70\u984cissue-19956",children:"3. \u8655\u7406\u8996\u983b\u5e40\u6642\u51fa\u73fe\u932f\u8aa4\u7684\u8b70\u984c\uff08Issue #19956\uff09"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),"\uff1a\u8b70\u984c\u6d89\u53ca\u5728\u8655\u7406\u8996\u983b\u5e40\u6642\u51fa\u73fe",(0,i.jsx)(s.code,{children:"ValueError: range() arg 3 must not be zero"}),"\u932f\u8aa4\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u9032\u5c55"}),"\uff1a\u6b63\u5728\u5c0b\u627e\u6839\u672c\u539f\u56e0\u4e26\u4fee\u5fa9\u9019\u500b\u554f\u984c\uff0c\u4ee5\u78ba\u4fdd\u9806\u5229\u8655\u7406\u8996\u983b\u5e40\u7684\u904e\u7a0b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"4-\u7f3a\u5c11\u5fc5\u8981\u4f4d\u7f6e\u53c3\u6578masks\u7684\u8b70\u984cissue-19921",children:["4. \u7f3a\u5c11\u5fc5\u8981\u4f4d\u7f6e\u53c3\u6578",(0,i.jsx)(s.code,{children:"masks"}),"\u7684\u8b70\u984c\uff08Issue #19921\uff09"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),"\uff1a\u8b70\u984c\u6307\u51fa\u5728",(0,i.jsx)(s.code,{children:"forward"}),"\u65b9\u6cd5\u4e2d\u7f3a\u5c11\u5fc5\u8981\u4f4d\u7f6e\u53c3\u6578",(0,i.jsx)(s.code,{children:"masks"}),"\u7684\u932f\u8aa4\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u9032\u5c55"}),"\uff1a\u63d0\u4f9b\u4e86\u95dc\u65bc\u4fee\u6b63",(0,i.jsx)(s.code,{children:"forward"}),"\u65b9\u6cd5\u4ee5\u89e3\u6c7a\u932f\u8aa4\u7684\u5efa\u8b70\uff0c\u4ee5\u78ba\u4fdd\u65b9\u6cd5\u80fd\u5920\u6b63\u78ba\u57f7\u884c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"5-\u81ea\u5b9a\u7fa9\u6279\u6b21\u9078\u64c7\u7528\u65bc\u8a18\u9304\u7684\u8b70\u984cissue-19940",children:"5. \u81ea\u5b9a\u7fa9\u6279\u6b21\u9078\u64c7\u7528\u65bc\u8a18\u9304\u7684\u8b70\u984c\uff08Issue #19940\uff09"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),"\uff1a\u8b70\u984c\u6d89\u53ca\u8a0e\u8ad6\u5982\u4f55\u5be6\u73fe\u7528\u6236\u63d0\u4f9b\u7d22\u5f15\u5217\u8868\u4e26\u5728\u9a57\u8b49\u6b65\u9a5f\u7d50\u675f\u6642\u8a18\u9304\u5b83\u5011\u7684\u529f\u80fd\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u9032\u5c55"}),"\uff1a\u6b63\u5728\u8a0e\u8ad6\u5982\u4f55\u5be6\u73fe\u9019\u4e00\u529f\u80fd\uff0c\u4ee5\u63d0\u4f9b\u66f4\u9748\u6d3b\u7684\u6279\u6b21\u9078\u64c7\u548c\u8a18\u9304\u65b9\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"6-\u907f\u514d\u4f7f\u7528numpy\u8f49\u63db\u7684\u8b70\u984cissue-19945",children:["6. \u907f\u514d\u4f7f\u7528",(0,i.jsx)(s.code,{children:"numpy()"}),"\u8f49\u63db\u7684\u8b70\u984c\uff08Issue #19945\uff09"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),"\uff1a\u8b70\u984c\u63d0\u51fa\u5728",(0,i.jsx)(s.code,{children:"multiprocessing.py"}),"\u4e2d\u907f\u514d\u4f7f\u7528",(0,i.jsx)(s.code,{children:"numpy()"}),"\u8f49\u63db\u7684\u5efa\u8b70\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u9032\u5c55"}),"\uff1a\u63d0\u51fa\u4e86\u4f7f\u7528\u7c21\u55aePython\u5be6\u4f8b\u4f86\u907f\u514d\u4f7f\u7528",(0,i.jsx)(s.code,{children:"numpy"}),"\u7684\u5efa\u8b70\uff0c\u4ee5\u63d0\u9ad8\u4ee3\u78bc\u7684\u6548\u7387\u548c\u53ef\u8b80\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u7d9c\u5408\u4ee5\u4e0a\u8b70\u984c\uff0c\u958b\u767c\u5718\u968a\u6b63\u5728\u7a4d\u6975\u8655\u7406\u5404\u7a2e\u932f\u8aa4\u4fee\u5fa9\u548c\u529f\u80fd\u589e\u5f37\u7684\u5de5\u4f5c\uff0c\u4ee5\u63d0\u5347PyTorch Lightning\u9805\u76ee\u7684\u7a69\u5b9a\u6027\u548c\u529f\u80fd\u6027\u3002\u5176\u4e2d\u6d89\u53ca\u5230\u7684\u8b70\u984c\u6db5\u84cb\u4e86\u5f9e\u5e95\u5c64\u5957\u4ef6\u4f9d\u8cf4\u7684\u79fb\u9664\u3001\u932f\u8aa4\u4fee\u5fa9\u3001\u529f\u80fd\u589e\u5f37\u4ee5\u53ca\u6548\u80fd\u512a\u5316\u7b49\u591a\u500b\u65b9\u9762\u3002\u9019\u4e9b\u5de5\u4f5c\u5c07\u6709\u52a9\u65bc\u63d0\u9ad8PyTorch Lightning\u5728\u6df1\u5ea6\u5b78\u7fd2\u9818\u57df\u7684\u61c9\u7528\u548c\u767c\u5c55\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u53e6\u4e00\u5c01\u96fb\u5b50\u90f5\u4ef6\u4e2d\u63d0\u5230\u7684\u554f\u984c\u5247\u6d89\u53ca\u5230\u5728\u5f9e\u6aa2\u67e5\u9ede\u6062\u5fa9\u6a21\u578b\u8a13\u7df4\u6642\u89c0\u5bdf\u5230\u7684GPU\u5229\u7528\u7387\u4e0b\u964d\u554f\u984c\uff0c\u4e3b\u8981\u539f\u56e0\u662fAdam\u5728\u6062\u5fa9\u5f8c\u57f7\u884cCUDA\u540c\u6b65\u7684\u6b65\u9a5f\u3002\u5efa\u8b70\u6aa2\u67e5Adam\u512a\u5316\u5668\u7684\u72c0\u614b\u8655\u7406\uff0c\u4ee5\u78ba\u4fdd\u5728GPU\u4e0a\u6b63\u78ba\u8655\u7406\u6b65\u9a5f\u7d44\u4ef6\uff0c\u5f9e\u800c\u63d0\u9ad8\u8a13\u7df4\u6548\u7387\u548cGPU\u5229\u7528\u7387\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u4e9b\u8a0e\u8ad6\u548c\u4fee\u5fa9\u5de5\u4f5c\u7684\u9032\u5c55\u5c07\u6709\u52a9\u65bc\u6539\u9032PyTorch Lightning\u7684\u529f\u80fd\u6027\u548c\u6027\u80fd\uff0c\u4f7f\u5176\u6210\u70ba\u6df1\u5ea6\u5b78\u7fd2\u9818\u57df\u4e2d\u4e00\u500b\u66f4\u52a0\u5f37\u5927\u548c\u6613\u7528\u7684\u958b\u6e90\u5de5\u5177\u3002\u5e0c\u671b\u4ee5\u4e0a\u6458\u8981\u80fd\u5920\u5e6b\u52a9\u60a8\u66f4\u597d\u5730\u4e86\u89e3PyTorch Lightning\u9805\u76ee\u7684\u6700\u65b0\u9032\u5c55\u548c\u8a0e\u8ad6\u5167\u5bb9\u3002"}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 21 \u5c01"}),"\n",(0,i.jsx)(s.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function u(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>d});var i=e(96540);const r={},l=i.createContext(r);function c(n){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function d(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(l.Provider,{value:s},n.children)}}}]);