"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[23031],{42229:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=s(74848),i=s(28453);const l={},t="onnxruntime",c={id:"gmailsummary/news/2024-05/2024-05-26/onnxruntime",title:"onnxruntime",description:"2024-05-26 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-05/2024-05-26/onnxruntime.md",sourceDirName:"gmailsummary/news/2024-05/2024-05-26",slug:"/gmailsummary/news/2024-05/2024-05-26/onnxruntime",permalink:"/docs/gmailsummary/news/2024-05/2024-05-26/onnxruntime",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docusaurus",permalink:"/docs/gmailsummary/news/2024-05/2024-05-26/docusaurus"},next:{title:"pytorch-lightning",permalink:"/docs/gmailsummary/news/2024-05/2024-05-26/pytorch-lightning"}},o={},d=[{value:"2024-05-26 \u5f59\u6574\u5831\u544a",id:"2024-05-26-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u932f\u8aa4\u4fee\u5fa9",id:"1-\u932f\u8aa4\u4fee\u5fa9",level:3},{value:"2. \u529f\u80fd\u589e\u52a0",id:"2-\u529f\u80fd\u589e\u52a0",level:3},{value:"3. \u8a0e\u8ad6\u7684\u8b70\u984c",id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c",level:3},{value:"4. \u6210\u5c31",id:"4-\u6210\u5c31",level:3},{value:"5. \u6311\u6230",id:"5-\u6311\u6230",level:3}];function u(n){const e={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"onnxruntime",children:"onnxruntime"}),"\n",(0,r.jsx)(e.h2,{id:"2024-05-26-\u5f59\u6574\u5831\u544a",children:"2024-05-26 \u5f59\u6574\u5831\u544a"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u64da\u60a8\u63d0\u4f9b\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u4ee5\u4e0b\u662f\u5f9e\u4e2d\u63d0\u53d6\u7684\u4e00\u4e9b\u91cd\u8981\u8a0a\u606f\uff1a"}),"\n",(0,r.jsx)(e.h3,{id:"1-\u932f\u8aa4\u4fee\u5fa9",children:"1. \u932f\u8aa4\u4fee\u5fa9"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u4e00\u5c01\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u4fee\u6b63\u4e86Torch\u5c0e\u51fa\u7684ONNX\u6a21\u578b\u5728Onnxruntime\u7248\u672c1.17\u66f4\u65b0\u5f8c\u7121\u6cd5\u904b\u884c\u7684\u554f\u984c\u3002\u89e3\u6c7a\u65b9\u6cd5\u5305\u62ec\u6aa2\u67e5ONNX opset\u7248\u672c\u8207Onnxruntime\u7248\u672c\u7684\u76f8\u5bb9\u6027\uff0c\u4e26\u5347\u7d1aONNX opset\u7248\u672c\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u89e3\u91cb\u8207\u5ef6\u4f38"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"ONNX\uff08Open Neural Network Exchange\uff09\u662f\u4e00\u500b\u958b\u653e\u6a19\u6e96\uff0c\u7528\u65bc\u63cf\u8ff0\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u3002ONNX opset\u7248\u672c\u6307\u7684\u662fONNX\u6a19\u6e96\u4e2d\u652f\u6301\u7684\u904b\u7b97\u7b26\u96c6\u5408\u7684\u7248\u672c\u3002\u7576\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684ONNX runtime\u6642\uff0c\u9700\u8981\u78ba\u4fdd\u6a21\u578b\u7684ONNX opset\u7248\u672c\u8207runtime\u7248\u672c\u76f8\u5bb9\uff0c\u4ee5\u78ba\u4fdd\u6a21\u578b\u6b63\u78ba\u904b\u884c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"2-\u529f\u80fd\u589e\u52a0",children:"2. \u529f\u80fd\u589e\u52a0"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u53e6\u4e00\u5c01\u90f5\u4ef6\u4e2d\uff0c\u8a0e\u8ad6\u4e86TensorRT EP\u4e2d\u7684\u5f15\u64ce\u7de9\u5b58\u76f8\u95dc\u7684\u529f\u80fd\u589e\u5f37\uff0c\u5305\u62ec\u81ea\u52d5\u6aa2\u67e5\u6b0a\u91cd\u525d\u96e2\u5f15\u64ce\u7de9\u5b58\u4ee5\u53ca\u91cd\u65b0\u8a2d\u8a08\u5f15\u64ce\u7de9\u5b58\u7684\u76f8\u95dc\u4ee3\u78bc\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u89e3\u91cb\u8207\u5ef6\u4f38"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"TensorRT\u662fNVIDIA\u63a8\u51fa\u7684\u7528\u65bc\u9ad8\u6548\u904b\u884c\u6df1\u5ea6\u5b78\u7fd2\u63a8\u7406\u7684\u5eab\u3002\u5f15\u64ce\u7de9\u5b58\u662fTensorRT\u4e2d\u7528\u65bc\u512a\u5316\u63a8\u7406\u6027\u80fd\u7684\u91cd\u8981\u6a5f\u5236\u4e4b\u4e00\u3002\u81ea\u52d5\u6aa2\u67e5\u6b0a\u91cd\u525d\u96e2\u5f15\u64ce\u7de9\u5b58\u53ef\u4ee5\u5e6b\u52a9\u63d0\u9ad8\u6027\u80fd\u4e26\u7c21\u5316\u958b\u767c\u6d41\u7a0b\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c",children:"3. \u8a0e\u8ad6\u7684\u8b70\u984c"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6709\u7528\u6236\u8a62\u554f\u4e86\u5728\u4f7f\u7528I/O\u7d81\u5b9a\u6642\uff0c\u7576\u8f38\u5165\u5f35\u91cf\u5f62\u72c0\u4e0d\u56fa\u5b9a\u6642\u8a72\u5982\u4f55\u8655\u7406\u7684\u554f\u984c\uff0c\u4e26\u63d0\u51fa\u4e86\u76f8\u95dc\u7684\u7591\u554f\u548c\u6311\u6230\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u89e3\u91cb\u8207\u5ef6\u4f38"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"I/O\u7d81\u5b9a\u662f\u6307\u5c07\u6a21\u578b\u7684\u8f38\u5165\u548c\u8f38\u51fa\u8207\u5e95\u5c64\u904b\u884c\u6642\u7d81\u5b9a\u5728\u4e00\u8d77\u7684\u904e\u7a0b\u3002\u7576\u8f38\u5165\u5f35\u91cf\u5f62\u72c0\u4e0d\u56fa\u5b9a\u6642\uff0c\u53ef\u80fd\u9700\u8981\u7279\u6b8a\u8655\u7406\u4ee5\u78ba\u4fdd\u6a21\u578b\u80fd\u5920\u6b63\u78ba\u904b\u884c\uff0c\u9019\u53ef\u80fd\u6d89\u53ca\u52d5\u614b\u5f62\u72c0\u63a8\u65b7\u6216\u5176\u4ed6\u6280\u8853\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"4-\u6210\u5c31",children:"4. \u6210\u5c31"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e00\u5c01\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u4e00\u500b\u554f\u984c\u5df2\u7d93\u89e3\u6c7a\u4e26\u6a19\u8a18\u70ba\u5df2\u5b8c\u6210\uff0c\u9019\u8868\u660e\u67d0\u500b\u554f\u984c\u5f97\u5230\u4e86\u6210\u529f\u89e3\u6c7a\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"5-\u6311\u6230",children:"5. \u6311\u6230"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6709\u7528\u6236\u63d0\u5230\u4e86\u5728\u57f7\u884c\u6240\u6709\u6e2c\u8a66\u6642\u51fa\u73fe\u932f\u8aa4\uff0c\u4f46\u55ae\u7368\u904b\u884c\u67d0\u4e9b\u6e2c\u8a66\u6642\u537b\u6c92\u6709\u932f\u8aa4\uff0c\u9019\u53ef\u80fd\u8868\u660e\u67d0\u4e9b\u6e2c\u8a66\u4e4b\u9593\u5b58\u5728\u885d\u7a81\u6216\u554f\u984c\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7d9c\u5408\u4ee5\u4e0a\u5167\u5bb9\uff0c\u5718\u968a\u5728\u6301\u7e8c\u6539\u9032\u6a21\u578b\u5c0e\u51fa\u3001\u6027\u80fd\u512a\u5316\u548c\u8655\u7406\u7528\u6236\u53cd\u994b\u65b9\u9762\u53d6\u5f97\u4e86\u4e00\u4e9b\u91cd\u8981\u9032\u5c55\u3002\u901a\u904e\u4fee\u5fa9\u932f\u8aa4\u3001\u589e\u52a0\u529f\u80fd\u4ee5\u53ca\u89e3\u6c7a\u6311\u6230\uff0c\u5718\u968a\u5c55\u73fe\u4e86\u5c0d\u6280\u8853\u554f\u984c\u7684\u7a4d\u6975\u61c9\u5c0d\u548c\u89e3\u6c7a\u80fd\u529b\u3002\u9019\u4e9b\u52aa\u529b\u6709\u52a9\u65bc\u63d0\u9ad8\u7cfb\u7d71\u7684\u7a69\u5b9a\u6027\u3001\u6027\u80fd\u548c\u7528\u6236\u6eff\u610f\u5ea6\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u5718\u968a\u5728\u958b\u767c\u904e\u7a0b\u4e2d\u4e5f\u9047\u5230\u4e86\u4e00\u4e9b\u6311\u6230\uff0c\u4f8b\u5982\u6e2c\u8a66\u885d\u7a81\u7b49\u554f\u984c\uff0c\u9019\u9700\u8981\u9032\u4e00\u6b65\u7684\u8abf\u67e5\u548c\u89e3\u6c7a\u3002\u901a\u904e\u4e0d\u65b7\u5b78\u7fd2\u548c\u6539\u9032\uff0c\u5718\u968a\u5c07\u80fd\u5920\u66f4\u597d\u5730\u61c9\u5c0d\u672a\u4f86\u7684\u6280\u8853\u6311\u6230\uff0c\u63d0\u4f9b\u66f4\u512a\u8cea\u7684\u7522\u54c1\u548c\u670d\u52d9\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0a\u662f\u6839\u64da\u60a8\u63d0\u4f9b\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\u6574\u7406\u7684\u91cd\u8981\u8a0a\u606f\uff0c\u5e0c\u671b\u9019\u4e9b\u63d0\u53d6\u80fd\u5e6b\u52a9\u60a8\u66f4\u597d\u5730\u4e86\u89e3\u5718\u968a\u7684\u5de5\u4f5c\u548c\u9032\u5c55\u3002\u5982\u679c\u60a8\u6709\u4efb\u4f55\u5176\u4ed6\u554f\u984c\u6216\u9700\u8981\u9032\u4e00\u6b65\u7684\u89e3\u91cb\uff0c\u8acb\u96a8\u6642\u544a\u8a34\u6211\u3002"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 25 \u5c01"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var r=s(96540);const i={},l=r.createContext(i);function t(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);