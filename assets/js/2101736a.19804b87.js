"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[804],{91677:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(74848),r=s(28453);const l={},t="onnxruntime",c={id:"gmailsummary/news/2024-04-26/onnxruntime",title:"onnxruntime",description:"2024-04-26 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-04-26/onnxruntime.md",sourceDirName:"gmailsummary/news/2024-04-26",slug:"/gmailsummary/news/2024-04-26/onnxruntime",permalink:"/docs/gmailsummary/news/2024-04-26/onnxruntime",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714082673e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docusaurus",permalink:"/docs/gmailsummary/news/2024-04-26/docusaurus"},next:{title:"pytorch-lightning",permalink:"/docs/gmailsummary/news/2024-04-26/pytorch-lightning"}},d={},o=[{value:"2024-04-26 \u5f59\u6574\u5831\u544a",id:"2024-04-26-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u932f\u8aa4\u4fee\u5fa9",id:"1-\u932f\u8aa4\u4fee\u5fa9",level:3},{value:"2. \u529f\u80fd\u589e\u52a0",id:"2-\u529f\u80fd\u589e\u52a0",level:3},{value:"3. \u8a0e\u8ad6\u7684\u8b70\u984c",id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c",level:3},{value:"4. \u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230",id:"4-\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230",level:3}];function u(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"onnxruntime",children:"onnxruntime"}),"\n",(0,i.jsx)(e.h2,{id:"2024-04-26-\u5f59\u6574\u5831\u544a",children:"2024-04-26 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u64da\u60a8\u63d0\u4f9b\u7684\u591a\u5c01\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u9019\u88e1\u662f\u5f9e\u4e2d\u63d0\u53d6\u7684\u4e00\u4e9b\u91cd\u8981\u8a0a\u606f\uff0c\u6db5\u84cb\u4e86\u932f\u8aa4\u4fee\u5fa9\u3001\u529f\u80fd\u589e\u52a0\u3001\u8a0e\u8ad6\u7684\u8b70\u984c\u4ee5\u53ca\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230\u3002\u4ee5\u4e0b\u662f\u5c0d\u9019\u4e9b\u8a0a\u606f\u7684\u8a73\u7d30\u63cf\u8ff0\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u932f\u8aa4\u4fee\u5fa9",children:"1. \u932f\u8aa4\u4fee\u5fa9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5728\u4e0d\u540c\u7684\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u4e00\u4e9b\u932f\u8aa4\u4fee\u5fa9\u7684\u76f8\u95dc\u5167\u5bb9\u3002\u4f8b\u5982\uff0c\u6709\u4e00\u5c01\u90f5\u4ef6\u63d0\u5230\u4e86\u7de8\u8b6f\u932f\u8aa4\uff0c\u5efa\u8b70\u4f7f\u7528",(0,i.jsx)(e.code,{children:'--cmake_extra_defines CMAKE_CXX_FLAGS="/bigobj"'}),"\u4f86\u4fee\u5fa9\u3002\u9019\u8868\u660e\u5728\u7de8\u8b6f\u904e\u7a0b\u4e2d\u53ef\u80fd\u9047\u5230\u4e86\u4e00\u4e9b\u554f\u984c\uff0c\u4e26\u63d0\u4f9b\u4e86\u89e3\u6c7a\u65b9\u6848\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53e6\u4e00\u5c01\u90f5\u4ef6\u63d0\u5230\u4e86\u4f7f\u7528OpenVINO EP\u57f7\u884c\u63d0\u4f9b\u8005\u6642\u53ea\u6709\u7b2c\u4e00\u500b\u7d50\u679c\u662f\u6b63\u78ba\u7684\u554f\u984c\uff0c\u4f46\u5728\u6e2c\u8a66\u5f8c\u767c\u73fe\u5728\u7279\u5b9a\u74b0\u5883\u4e0b\u904b\u884c\u63a8\u8ad6\u7d50\u679c\u8207\u9810\u671f\u4e00\u81f4\uff0c\u9019\u8868\u660e\u53ef\u80fd\u5df2\u7d93\u89e3\u6c7a\u4e86\u9019\u500b\u554f\u984c\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-\u529f\u80fd\u589e\u52a0",children:"2. \u529f\u80fd\u589e\u52a0"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6709\u591a\u5c01\u90f5\u4ef6\u63d0\u5230\u4e86\u529f\u80fd\u589e\u52a0\u7684\u5167\u5bb9\u3002\u4f8b\u5982\uff0c\u4e00\u5c01\u90f5\u4ef6\u63d0\u5230\u4e86\u65b0\u589e\u4e86Mlas Gemm 4bit avx2\u3001avx512\u548cavx512vnni\u5167\u6838\uff0c\u4e26\u63d0\u4ea4\u4e86\u76f8\u61c9\u7684\u4fee\u5fa9\u4ee3\u78bc\u3002\u9019\u8868\u660e\u5718\u968a\u5728\u4e0d\u65b7\u512a\u5316\u548c\u64f4\u5c55\u529f\u80fd\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u548c\u529f\u80fd\u6027\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53e6\u4e00\u5c01\u90f5\u4ef6\u63d0\u5230\u4e86\u5c0dMlasComputeSoftmax\u9032\u884c\u4e86\u512a\u5316\uff0c\u65b0\u589e\u4e86\u5c0d\u8f38\u5165\u7de9\u885d\u5340\u7684\u9810\u53d6\u529f\u80fd\uff0c\u4e26\u5efa\u8b70\u5728\u7279\u5b9a\u689d\u4ef6\u4e0b\u9032\u884c\u4fdd\u8b77\u3002\u9019\u986f\u793a\u4e86\u5c0d\u6027\u80fd\u512a\u5316\u548c\u7d30\u7bc0\u512a\u5316\u7684\u95dc\u6ce8\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c",children:"3. \u8a0e\u8ad6\u7684\u8b70\u984c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u90f5\u4ef6\u4e2d\u8a0e\u8ad6\u4e86\u4e00\u4e9b\u8b70\u984c\uff0c\u4f8b\u5982\u5728\u4f7f\u7528\u81ea\u5b9a\u7fa9\u5206\u914d\u5668\u6642\u51fa\u73fe\u7684\u554f\u984c\uff0c\u4ee5\u53ca\u5728\u5be6\u73febf16\u652f\u6301\u6642\u53ef\u80fd\u5c0d\u6027\u80fd\u7522\u751f\u8ca0\u9762\u5f71\u97ff\u7684\u554f\u984c\u3002\u9019\u4e9b\u8a0e\u8ad6\u8868\u660e\u5718\u968a\u5728\u4e0d\u65b7\u63a2\u8a0e\u548c\u89e3\u6c7a\u6280\u8853\u6311\u6230\uff0c\u4e26\u5c0b\u627e\u6700\u4f73\u89e3\u6c7a\u65b9\u6848\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"4-\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230",children:"4. \u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6709\u90f5\u4ef6\u63d0\u5230\u4e86\u6210\u529f\u5408\u4f75\u4e86\u4e00\u500b\u529f\u80fd\u589e\u52a0\u7684PR\uff0c\u4e26\u63d0\u5230\u4e86\u6210\u529f\u904b\u884c\u7684CI\u3002\u9019\u986f\u793a\u4e86\u5718\u968a\u5728\u958b\u767c\u904e\u7a0b\u4e2d\u53d6\u5f97\u7684\u6210\u5c31\u548c\u9032\u5c55\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53e6\u4e00\u5c01\u90f5\u4ef6\u63d0\u5230\u4e86\u5728\u67d0\u500b\u554f\u984c\u4e0a\u7372\u5f97\u4e86\u89e3\u6c7a\u65b9\u6848\uff0c\u4e26\u5206\u4eab\u4e86\u89e3\u6c7a\u65b9\u6848\u7684\u9023\u7d50\uff0c\u9019\u6709\u52a9\u65bc\u5176\u4ed6\u7528\u6236\u89e3\u6c7a\u76f8\u540c\u7684\u554f\u984c\u3002\u9019\u8868\u660e\u5718\u968a\u5728\u89e3\u6c7a\u6311\u6230\u548c\u5206\u4eab\u77e5\u8b58\u65b9\u9762\u53d6\u5f97\u4e86\u9032\u5c55\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7d9c\u5408\u4ee5\u4e0a\u8a0a\u606f\uff0c\u53ef\u4ee5\u770b\u51fa\u5718\u968a\u5728\u6301\u7e8c\u512a\u5316\u548c\u64f4\u5c55\u529f\u80fd\u7684\u540c\u6642\uff0c\u4e5f\u9762\u81e8\u8457\u4e00\u4e9b\u6280\u8853\u6311\u6230\u548c\u8a0e\u8ad6\u8b70\u984c\u3002\u4ed6\u5011\u901a\u904e\u89e3\u6c7a\u932f\u8aa4\u3001\u512a\u5316\u4ee3\u78bc\u3001\u8a0e\u8ad6\u6280\u8853\u554f\u984c\u4ee5\u53ca\u5206\u4eab\u6210\u5c31\u548c\u89e3\u6c7a\u65b9\u6848\uff0c\u4e0d\u65b7\u63a8\u52d5\u9805\u76ee\u5411\u524d\u767c\u5c55\u3002\u9019\u4e9b\u52aa\u529b\u5c07\u6709\u52a9\u65bc\u63d0\u9ad8\u7cfb\u7d71\u7684\u7a69\u5b9a\u6027\u3001\u6027\u80fd\u548c\u529f\u80fd\u6027\uff0c\u4e26\u70ba\u7528\u6236\u63d0\u4f9b\u66f4\u597d\u7684\u9ad4\u9a57\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5e0c\u671b\u9019\u4e9b\u8a73\u7d30\u63cf\u8ff0\u80fd\u5e6b\u52a9\u60a8\u66f4\u597d\u5730\u7406\u89e3\u548c\u61c9\u7528\u9019\u4e9b\u91cd\u8981\u8a0a\u606f\u3002\u5982\u679c\u60a8\u5c0d\u4efb\u4f55\u5167\u5bb9\u6709\u9032\u4e00\u6b65\u7684\u7591\u554f\u6216\u9700\u8981\u66f4\u591a\u89e3\u91cb\uff0c\u8acb\u96a8\u6642\u544a\u8a34\u6211\u3002"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 110 \u5c01"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);