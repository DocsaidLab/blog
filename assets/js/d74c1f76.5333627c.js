"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4145],{85551:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=i(74848),r=i(28453);const l={},t="onnxruntime",c={id:"gmailsummary/news/2024-05-12/onnxruntime",title:"onnxruntime",description:"2024-05-12 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-05-12/onnxruntime.md",sourceDirName:"gmailsummary/news/2024-05-12",slug:"/gmailsummary/news/2024-05-12/onnxruntime",permalink:"/docs/gmailsummary/news/2024-05-12/onnxruntime",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docusaurus",permalink:"/docs/gmailsummary/news/2024-05-12/docusaurus"},next:{title:"pytorch-lightning",permalink:"/docs/gmailsummary/news/2024-05-12/pytorch-lightning"}},o={},d=[{value:"2024-05-12 \u5f59\u6574\u5831\u544a",id:"2024-05-12-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u932f\u8aa4\u4fee\u5fa9:",id:"1-\u932f\u8aa4\u4fee\u5fa9",level:3},{value:"2. \u529f\u80fd\u589e\u52a0:",id:"2-\u529f\u80fd\u589e\u52a0",level:3},{value:"3. \u8a0e\u8ad6\u7684\u8b70\u984c:",id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c",level:3}];function h(n){const e={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"onnxruntime",children:"onnxruntime"}),"\n",(0,s.jsx)(e.h2,{id:"2024-05-12-\u5f59\u6574\u5831\u544a",children:"2024-05-12 \u5f59\u6574\u5831\u544a"}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u64da\u60a8\u63d0\u4f9b\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u6211\u5c07\u5c0d\u5176\u4e2d\u7684\u91cd\u8981\u8a0a\u606f\u9032\u884c\u68b3\u7406\u548c\u7e3d\u7d50\uff0c\u4e26\u63d0\u4f9b\u76f8\u61c9\u7684\u89e3\u91cb\u548c\u5ef6\u4f38\u8aaa\u660e\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"1-\u932f\u8aa4\u4fee\u5fa9",children:"1. \u932f\u8aa4\u4fee\u5fa9:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u57f7\u884cPhi3 CUDA\u7248\u672c\u6642\u9047\u5230\u554f\u984c\uff0c\u53ef\u80fd\u8207SimplifiedLayerNormalization\u7684domain_version\u70ba14\u6709\u95dc\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:'\u7528\u6236\u5831\u544a\u4f7f\u7528Vue3+Vite\u52a0\u8f09onnxruntime-web\u6642\u51fa\u73fe\u932f\u8aa4\uff0c\u6307\u51fa"wasm streaming compile failed: LinkError: WebAssembly.instantiate()"\u3002'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u89e3\u91cb\u8207\u5ef6\u4f38\u8aaa\u660e"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Phi3 CUDA\u7248\u672c\u554f\u984c"}),": CUDA\u662f\u4e00\u7a2e\u4e26\u884c\u8a08\u7b97\u5e73\u53f0\u548c\u61c9\u7528\u7a0b\u5f0f\u7a0b\u5f0f\u5eab\uff0c\u7528\u65bcGPU\u52a0\u901f\u3002\u5728\u57f7\u884cPhi3 CUDA\u7248\u672c\u6642\u9047\u5230\u554f\u984c\u53ef\u80fd\u610f\u5473\u8457\u8207CUDA\u76f8\u95dc\u7684\u7a0b\u5f0f\u78bc\u6216\u8a2d\u5b9a\u51fa\u73fe\u4e86\u932f\u8aa4\u3002SimplifiedLayerNormalization\u662f\u4e00\u7a2e\u898f\u7bc4\u5316\u6280\u8853\uff0cdomain_version\u70ba14\u53ef\u80fd\u4ee3\u8868\u7279\u5b9a\u7248\u672c\u6216\u8a2d\u5b9a\u3002\u89e3\u6c7a\u6b64\u554f\u984c\u53ef\u80fd\u9700\u8981\u6aa2\u67e5CUDA\u7248\u672c\u76f8\u5bb9\u6027\u3001\u7a0b\u5f0f\u78bc\u5be6\u4f5c\u3001\u4ee5\u53ca\u76f8\u95dc\u8a2d\u5b9a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Vue3+Vite\u52a0\u8f09onnxruntime-web\u932f\u8aa4"}),': Vue.js\u662f\u4e00\u500b\u6d41\u884c\u7684JavaScript\u6846\u67b6\uff0cVite\u662f\u4e00\u500b\u73fe\u4ee3\u5316\u7684\u524d\u7aef\u69cb\u5efa\u5de5\u5177\u3002onnxruntime-web\u5247\u662fONNX Runtime\u7684Web\u7248\u672c\uff0c\u7528\u65bc\u5728\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u3002"wasm streaming compile failed"\u932f\u8aa4\u53ef\u80fd\u6d89\u53caWebAssembly\u7de8\u8b6f\u554f\u984c\uff0c\u9700\u8981\u6aa2\u67e5\u7db2\u9801\u74b0\u5883\u3001\u6a21\u7d44\u8f09\u5165\u7b49\u65b9\u9762\u3002']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"2-\u529f\u80fd\u589e\u52a0",children:"2. \u529f\u80fd\u589e\u52a0:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Python\u4e2d\u4f7f\u7528onnxRuntime\u9032\u884c\u58d3\u529b\u6e2c\u8a66\u6642\uff0cGPU\u548cCPU\u8868\u73fe\u4e0d\u540c\uff0c\u4f7f\u7528\u7684onnx runtime\u7248\u672c\u70ba1.10.0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u52a0\u901ftanhf\u6fc0\u6d3b\u51fd\u6578\u7684\u529f\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u89e3\u91cb\u8207\u5ef6\u4f38\u8aaa\u660e"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"onnxRuntime\u58d3\u529b\u6e2c\u8a66"}),": ONNX Runtime\u662f\u4e00\u500b\u7528\u65bc\u57f7\u884cOpen Neural Network Exchange (ONNX)\u683c\u5f0f\u6a21\u578b\u7684\u9ad8\u6027\u80fd\u5f15\u64ce\u3002\u5728Python\u4e2d\u9032\u884c\u58d3\u529b\u6e2c\u8a66\u6642\uff0cGPU\u548cCPU\u8868\u73fe\u4e0d\u540c\u53ef\u80fd\u6d89\u53ca\u786c\u9ad4\u52a0\u901f\u3001\u512a\u5316\u7a0b\u5f0f\u78bc\u7b49\u3002\u7248\u672c1.10.0\u53ef\u80fd\u5e36\u4f86\u65b0\u529f\u80fd\u6216\u4fee\u5fa9\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"tanhf\u6fc0\u6d3b\u51fd\u6578\u52a0\u901f"}),": tanhf\u662f\u4e00\u7a2e\u5e38\u898b\u7684\u6fc0\u6d3b\u51fd\u6578\uff0c\u52a0\u901f\u5176\u8a08\u7b97\u53ef\u80fd\u6d89\u53ca\u5230\u512a\u5316\u8a08\u7b97\u65b9\u6cd5\u3001\u4f7f\u7528\u786c\u9ad4\u52a0\u901f\u7b49\u3002\u9019\u9805\u529f\u80fd\u589e\u52a0\u53ef\u80fd\u91dd\u5c0d\u6a21\u578b\u7684\u6027\u80fd\u512a\u5316\u548c\u52a0\u901f\u9032\u884c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"3-\u8a0e\u8ad6\u7684\u8b70\u984c",children:"3. \u8a0e\u8ad6\u7684\u8b70\u984c:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u79fb\u9664\u5c0dprotobuf\u7684\u4f9d\u8cf4\uff0c\u5efa\u8b70\u4f7f\u7528\u81ea\u5df1\u7684\u5e8f\u5217\u5316\u5eab\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u6dfb\u52a0\u65b0\u57f7\u884c\u63d0\u4f9b\u8005\u7684\u6587\u6a94\u4e2d\u5b58\u5728\u7f3a\u9677\uff0c\u5efa\u8b70\u5275\u5efa\u4e00\u500b\u5305\u542b\u65b0\u9aa8\u67b6\u57f7\u884c\u63d0\u4f9b\u8005\u7684\u5206\u652f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6709\u4eba\u63d0\u5230\u5728\u4f3a\u670d\u5668\u4e0a\u4f7f\u7528SLURM\u4efb\u52d9\u7ba1\u7406\u5668\u6642\uff0cCPU\u63a8\u7406\u51cd\u7d50\u7684\u554f\u984c\uff0c\u63d0\u4f9b\u4e86\u89e3\u6c7a\u65b9\u6848\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u89e3\u91cb\u8207\u5ef6\u4f38\u8aaa\u660e"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"protobuf\u4f9d\u8cf4\u79fb\u9664"}),": Protocol Buffers (protobuf)\u662f\u4e00\u7a2e\u8cc7\u6599\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u79fb\u9664\u5c0d\u5176\u7684\u4f9d\u8cf4\u53ef\u80fd\u610f\u5473\u8457\u5c0b\u627e\u66f4\u8f15\u91cf\u3001\u66f4\u9069\u5408\u7279\u5b9a\u9700\u6c42\u7684\u5e8f\u5217\u5316\u5eab\uff0c\u4ee5\u63d0\u9ad8\u6548\u80fd\u6216\u7c21\u5316\u7a0b\u5f0f\u78bc\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u65b0\u57f7\u884c\u63d0\u4f9b\u8005\u6587\u6a94\u7f3a\u9677"}),": \u65b0\u57f7\u884c\u63d0\u4f9b\u8005\u53ef\u80fd\u6307\u64f4\u5c55ONNX Runtime\u652f\u63f4\u65b0\u786c\u9ad4\u6216\u52a0\u901f\u5668\u7684\u529f\u80fd\u3002\u4fee\u5fa9\u6587\u6a94\u7f3a\u9677\u53ef\u80fd\u6709\u52a9\u65bc\u958b\u767c\u8005\u66f4\u5bb9\u6613\u64f4\u5c55ONNX Runtime\uff0c\u63d0\u9ad8\u53ef\u64f4\u5c55\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"SLURM\u4efb\u52d9\u7ba1\u7406\u5668\u554f\u984c"}),": SLURM\u662f\u4e00\u7a2e\u7528\u65bc\u7ba1\u7406\u548c\u8abf\u5ea6\u8a08\u7b97\u8cc7\u6e90\u7684\u958b\u6e90\u5de5\u5177\uff0cCPU\u63a8\u7406\u51cd\u7d50\u53ef\u80fd\u6307\u5728\u4f7f\u7528SLURM\u6642CPU\u8a08\u7b97\u9047\u5230\u554f\u984c\u3002\u63d0\u4f9b\u7684\u89e3\u6c7a\u65b9\u6848\u53ef\u80fd\u6d89\u53ca\u8abf\u6574\u4efb\u52d9\u7ba1\u7406\u5668\u8a2d\u5b9a\u6216\u7a0b\u5f0f\u78bc\u4fee\u6b63\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u4e9b\u8a0a\u606f\u53cd\u6620\u4e86\u5728\u8edf\u9ad4\u958b\u767c\u548c\u6a5f\u5668\u5b78\u7fd2\u9818\u57df\u4e2d\u53ef\u80fd\u9047\u5230\u7684\u554f\u984c\u3001\u6539\u9032\u548c\u8a0e\u8ad6\u8b70\u984c\u3002\u900f\u904e\u89e3\u6c7a\u932f\u8aa4\u3001\u589e\u52a0\u529f\u80fd\u548c\u8a0e\u8ad6\u8b70\u984c\uff0c\u53ef\u4ee5\u4e0d\u65b7\u63d0\u5347\u8edf\u9ad4\u54c1\u8cea\u548c\u6548\u80fd\uff0c\u4e26\u63a8\u52d5\u76f8\u95dc\u6280\u8853\u7684\u767c\u5c55\u3002\u5e0c\u671b\u9019\u4e9b\u8a0a\u606f\u7684\u68b3\u7406\u80fd\u5e6b\u52a9\u60a8\u66f4\u597d\u5730\u7406\u89e3\u548c\u61c9\u5c0d\u76f8\u95dc\u6311\u6230\u548c\u6a5f\u6703\u3002"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 55 \u5c01"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var s=i(96540);const r={},l=s.createContext(r);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);