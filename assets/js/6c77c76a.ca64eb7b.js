"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4585],{63225:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=r(74848),t=r(28453);const s={},l="onnxruntime",o={id:"gmailsummary/news/2024-05-07/onnxruntime",title:"onnxruntime",description:"2024-05-07 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-05-07/onnxruntime.md",sourceDirName:"gmailsummary/news/2024-05-07",slug:"/gmailsummary/news/2024-05-07/onnxruntime",permalink:"/docs/gmailsummary/news/2024-05-07/onnxruntime",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1715033071e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docusaurus",permalink:"/docs/gmailsummary/news/2024-05-07/docusaurus"},next:{title:"pytorch-lightning",permalink:"/docs/gmailsummary/news/2024-05-07/pytorch-lightning"}},u={},c=[{value:"2024-05-07 \u5f59\u6574\u5831\u544a",id:"2024-05-07-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u529f\u80fd\u589e\u52a0\u548c\u66f4\u65b0",id:"1-\u529f\u80fd\u589e\u52a0\u548c\u66f4\u65b0",level:3},{value:"2. \u932f\u8aa4\u4fee\u5fa9\u548c\u554f\u984c\u89e3\u6c7a",id:"2-\u932f\u8aa4\u4fee\u5fa9\u548c\u554f\u984c\u89e3\u6c7a",level:3},{value:"3. \u8a0e\u8ad6\u7684\u8b70\u984c\u548c\u6311\u6230",id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c\u548c\u6311\u6230",level:3},{value:"4. \u6210\u5c31\u548c\u7a81\u7834",id:"4-\u6210\u5c31\u548c\u7a81\u7834",level:3}];function a(n){const e={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"onnxruntime",children:"onnxruntime"}),"\n",(0,i.jsx)(e.h2,{id:"2024-05-07-\u5f59\u6574\u5831\u544a",children:"2024-05-07 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u64da\u60a8\u63d0\u4f9b\u7684\u591a\u500b\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u9019\u88e1\u662f\u4e00\u4e9b\u95dc\u9375\u8a0a\u606f\u7684\u7e3d\u7d50\u548c\u91cd\u9ede\u63d0\u53d6\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u529f\u80fd\u589e\u52a0\u548c\u66f4\u65b0",children:"1. \u529f\u80fd\u589e\u52a0\u548c\u66f4\u65b0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u591a\u500bPR\u4e2d\uff0c\u5305\u62ecPR #20572\u3001PR #20539\u3001PR #20583\u7b49\uff0c\u63d0\u5230\u4e86\u5c0dMicrosoft Onnxruntime\u5c08\u6848\u7684\u529f\u80fd\u589e\u5f37\u548c\u66f4\u65b0\u3002\u4f8b\u5982\uff0c\u65b0\u589e\u4e86\u7c21\u5316layernorm\u878d\u5408\u529f\u80fd\u3001\u5be6\u73fe\u4e86\u5c07numpy\u6578\u7d44\u61c9\u7528\u65bcCPU OrtValues\u7684\u8fd4\u56de\u503c\u3001\u652f\u63f4Java CUDA 12\u7b49\u3002\u9019\u4e9b\u529f\u80fd\u589e\u52a0\u548c\u66f4\u65b0\u986f\u793a\u4e86\u5c08\u6848\u5718\u968a\u5728\u4e0d\u65b7\u6539\u9032\u548c\u64f4\u5c55Onnxruntime\u7684\u529f\u80fd\u548c\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-\u932f\u8aa4\u4fee\u5fa9\u548c\u554f\u984c\u89e3\u6c7a",children:"2. \u932f\u8aa4\u4fee\u5fa9\u548c\u554f\u984c\u89e3\u6c7a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u4e0d\u540c\u7684PR\u548cIssue\u4e2d\uff0c\u63d0\u5230\u4e86\u932f\u8aa4\u4fee\u5fa9\u548c\u554f\u984c\u89e3\u6c7a\u7684\u76f8\u95dc\u5167\u5bb9\u3002\u4f8b\u5982\uff0c\u4fee\u5fa9\u4e86GQA CPU NaN\u932f\u8aa4\u3001\u8a0e\u8ad6\u4e86Dilation\u4e0d\u652f\u6301AutoPadType::SAME_UPPER\u6216AutoPadType::SAME_LOWER\u7684\u554f\u984c\u3001\u89e3\u6c7a\u4e86\u4f7f\u7528Pytorch\u8f49\u63db\u70baonnxruntime\u6a21\u578b\u6642\u51fa\u73fe\u7684\u932f\u8aa4\u7b49\u3002\u9019\u4e9b\u4fee\u5fa9\u548c\u89e3\u6c7a\u904e\u7a0b\u5c55\u793a\u4e86\u5718\u968a\u5c0d\u65bc\u7dad\u8b77\u4ee3\u78bc\u54c1\u8cea\u548c\u89e3\u6c7a\u554f\u984c\u7684\u5c08\u696d\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c\u548c\u6311\u6230",children:"3. \u8a0e\u8ad6\u7684\u8b70\u984c\u548c\u6311\u6230"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u8a31\u591aPR\u548cIssue\u4e2d\uff0c\u8a0e\u8ad6\u4e86\u4e00\u4e9b\u8b70\u984c\u548c\u6311\u6230\uff0c\u4f8b\u5982\u6709\u95dcQNN HTP\u529f\u80fd\u7684\u652f\u6301\u3001TensorRT\u5eab\u540d\u7a31\u66f4\u6539\u7684\u6587\u6a94\u66f4\u65b0\u3001ORT 1.18.0\u7248\u672c\u7684\u767c\u5e03\u5019\u9078\u7248\u672c\u7b49\u3002\u9019\u4e9b\u8a0e\u8ad6\u548c\u6311\u6230\u53cd\u6620\u4e86\u5718\u968a\u5728\u5c08\u6848\u958b\u767c\u904e\u7a0b\u4e2d\u6240\u9762\u81e8\u7684\u6280\u8853\u96e3\u984c\u548c\u6c7a\u7b56\u904e\u7a0b\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"4-\u6210\u5c31\u548c\u7a81\u7834",children:"4. \u6210\u5c31\u548c\u7a81\u7834"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u4e00\u4e9bPR\u4e2d\uff0c\u63d0\u5230\u4e86\u6210\u529f\u555f\u52d5\u4e86\u591a\u500bAzure Pipelines\u3001\u5df2\u5408\u4f75\u5230\u4e3b\u5206\u652f\u7b49\u6210\u5c31\u548c\u7a81\u7834\u3002\u9019\u4e9b\u6210\u5c31\u5c55\u793a\u4e86\u5718\u968a\u5728\u5c08\u6848\u958b\u767c\u4e2d\u53d6\u5f97\u7684\u9032\u5c55\u548c\u91cc\u7a0b\u7891\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7d9c\u5408\u4ee5\u4e0a\u5167\u5bb9\uff0cMicrosoft Onnxruntime\u5c08\u6848\u5728\u4e0d\u65b7\u9032\u884c\u529f\u80fd\u589e\u5f37\u3001\u932f\u8aa4\u4fee\u5fa9\u3001\u8a0e\u8ad6\u8b70\u984c\u548c\u53d6\u5f97\u6210\u5c31\u7684\u904e\u7a0b\u4e2d\uff0c\u5c55\u73fe\u4e86\u6301\u7e8c\u6539\u9032\u548c\u767c\u5c55\u7684\u52d5\u529b\u548c\u5be6\u529b\u3002\u5718\u968a\u901a\u904e\u89e3\u6c7a\u554f\u984c\u3001\u8a0e\u8ad6\u6280\u8853\u8b70\u984c\u548c\u63a8\u52d5\u65b0\u529f\u80fd\u7684\u6dfb\u52a0\uff0c\u81f4\u529b\u65bc\u63d0\u4f9b\u66f4\u512a\u8cea\u548c\u9ad8\u6548\u7684\u958b\u6e90\u6a5f\u5668\u5b78\u7fd2\u63a8\u65b7\u6846\u67b6\u3002\u9019\u4e9b\u52aa\u529b\u548c\u6210\u5c31\u5c0d\u65bc\u6574\u500b\u6a5f\u5668\u5b78\u7fd2\u548c\u4eba\u5de5\u667a\u6167\u9818\u57df\u90fd\u5177\u6709\u91cd\u8981\u610f\u7fa9\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5e0c\u671b\u9019\u4efd\u7e3d\u7d50\u80fd\u5920\u5e6b\u52a9\u60a8\u66f4\u597d\u5730\u7406\u89e3Microsoft Onnxruntime\u5c08\u6848\u7684\u6700\u65b0\u9032\u5c55\u548c\u91cd\u8981\u8a0a\u606f\u3002\u5982\u679c\u60a8\u5c0d\u4efb\u4f55\u7279\u5b9a\u5167\u5bb9\u6709\u66f4\u6df1\u5165\u7684\u7591\u554f\u6216\u9700\u8981\u9032\u4e00\u6b65\u4e86\u89e3\uff0c\u8acb\u96a8\u6642\u544a\u8a34\u6211\uff0c\u6211\u5c07\u6a02\u610f\u63d0\u4f9b\u66f4\u591a\u5e6b\u52a9\u548c\u89e3\u91cb\u3002"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 107 \u5c01"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>o});var i=r(96540);const t={},s=i.createContext(t);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);