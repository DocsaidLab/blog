"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[21747],{94662:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=i(74848),l=i(28453);const s={},t="onnxruntime",c={id:"gmailsummary/news/2024-04/2024-04-28/onnxruntime",title:"onnxruntime",description:"2024-04-28 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-04/2024-04-28/onnxruntime.md",sourceDirName:"gmailsummary/news/2024-04/2024-04-28",slug:"/gmailsummary/news/2024-04/2024-04-28/onnxruntime",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-28/onnxruntime",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docusaurus",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-28/docusaurus"},next:{title:"pytorch-lightning",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-28/pytorch-lightning"}},d={},o=[{value:"2024-04-28 \u5f59\u6574\u5831\u544a",id:"2024-04-28-\u5f59\u6574\u5831\u544a",level:2},{value:"\u932f\u8aa4\u4fee\u5fa9\uff1a",id:"\u932f\u8aa4\u4fee\u5fa9",level:3},{value:"\u529f\u80fd\u589e\u52a0\uff1a",id:"\u529f\u80fd\u589e\u52a0",level:3},{value:"\u8a0e\u8ad6\u7684\u8b70\u984c\uff1a",id:"\u8a0e\u8ad6\u7684\u8b70\u984c",level:3},{value:"\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230\uff1a",id:"\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230",level:3}];function u(n){const e={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"onnxruntime",children:"onnxruntime"}),"\n",(0,r.jsx)(e.h2,{id:"2024-04-28-\u5f59\u6574\u5831\u544a",children:"2024-04-28 \u5f59\u6574\u5831\u544a"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u64da\u60a8\u63d0\u4f9b\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u9019\u88e1\u6709\u4e00\u4e9b\u91cd\u8981\u7684\u8a0a\u606f\u63d0\u53d6\uff0c\u5305\u62ec\u932f\u8aa4\u4fee\u5fa9\u3001\u529f\u80fd\u589e\u52a0\u3001\u8a0e\u8ad6\u7684\u8b70\u984c\u4ee5\u53ca\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230\u3002\u4ee5\u4e0b\u662f\u5c0d\u9019\u4e9b\u5167\u5bb9\u7684\u8a73\u7d30\u63cf\u8ff0\uff1a"}),"\n",(0,r.jsx)(e.h3,{id:"\u932f\u8aa4\u4fee\u5fa9",children:"\u932f\u8aa4\u4fee\u5fa9\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u4e00\u5c01\u90f5\u4ef6\u4e2d\uff0c@jywu-msft\u63d0\u4ea4\u4e86\u4fee\u5fa9dll\u641c\u7d22\u554f\u984c\u7684\u4ee3\u78bc\u3002\u9019\u500b\u4fee\u5fa9\u53ef\u80fd\u89e3\u6c7a\u4e86\u5728\u7a0b\u5e8f\u904b\u884c\u6642\u7121\u6cd5\u6b63\u78ba\u52a0\u8f09dll\u6587\u4ef6\u7684\u554f\u984c\u3002\u901a\u5e38\uff0cdll\u641c\u7d22\u554f\u984c\u53ef\u80fd\u5c0e\u81f4\u7a0b\u5e8f\u7121\u6cd5\u627e\u5230\u6240\u9700\u7684\u52d5\u614b\u9023\u63a5\u5eab\uff0c\u9032\u800c\u5c0e\u81f4\u7a0b\u5e8f\u5d29\u6f70\u6216\u7121\u6cd5\u6b63\u5e38\u904b\u884c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53e6\u4e00\u5c01\u90f5\u4ef6\u63d0\u5230\uff0c\u539f\u59cb\u5b9a\u7fa9\u5fc5\u9808\u7559\u5728cuda_call.cc\u4e2d\uff0c\u4f46cudnn_frontend\u7684\u6a21\u677f\u5fc5\u9808\u4f4d\u65bc\u4e0d\u540c\u65bccuda_call.h/cc\u7684\u6587\u4ef6\u4e2d\u3002\u9019\u53ef\u80fd\u662f\u70ba\u4e86\u66f4\u597d\u5730\u7d44\u7e54\u4ee3\u78bc\u7d50\u69cb\uff0c\u4f7f\u5f97\u4e0d\u540c\u90e8\u5206\u7684\u529f\u80fd\u548c\u5b9a\u7fa9\u66f4\u6e05\u6670\u5730\u5206\u96e2\u548c\u7ba1\u7406\u3002\u9019\u6a23\u7684\u8abf\u6574\u6709\u52a9\u65bc\u4ee3\u78bc\u7684\u53ef\u8b80\u6027\u548c\u7dad\u8b77\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u529f\u80fd\u589e\u52a0",children:"\u529f\u80fd\u589e\u52a0\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e00\u5c01\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u5c0dCUDNN\u524d\u7aef\u7684\u6dfb\u52a0\uff0c\u4e26\u7528\u65bcCUDA NN\u5377\u7a4d\u3002\u9019\u53ef\u80fd\u610f\u5473\u8457\u5f15\u5165\u4e86\u65b0\u7684\u529f\u80fd\u6216\u6a21\u7d44\uff0c\u4ee5\u652f\u6301CUDA NN\u5377\u7a4d\u64cd\u4f5c\u3002\u9019\u6a23\u7684\u529f\u80fd\u589e\u52a0\u53ef\u80fd\u63d0\u9ad8\u4e86\u5eab\u7684\u6027\u80fd\u6216\u64f4\u5c55\u4e86\u5176\u61c9\u7528\u7bc4\u570d\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53e6\u4e00\u5c01\u90f5\u4ef6\u8a0e\u8ad6\u4e86\u5728JavaScript/WebGPU\u4e2d\u652f\u6301GroupQueryAttention\u3002\u9019\u53ef\u80fd\u662f\u5728\u5eab\u7684WebGPU\u90e8\u5206\u4e2d\u5f15\u5165\u4e86\u5c0dGroupQueryAttention\u7684\u652f\u6301\uff0c\u9019\u5c07\u4f7f\u5f97\u5728Web\u74b0\u5883\u4e0b\u9032\u884c\u76f8\u95dc\u64cd\u4f5c\u66f4\u52a0\u4fbf\u6377\u548c\u9ad8\u6548\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u8a0e\u8ad6\u7684\u8b70\u984c",children:"\u8a0e\u8ad6\u7684\u8b70\u984c\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6709\u95dc\u5728\u672c\u5730\u8def\u5f91\u52a0\u8f09\u6a21\u578b\u6642\u9047\u5230\u554f\u984c\u7684\u8a0e\u8ad6\u3002\u9019\u53ef\u80fd\u662f\u8a0e\u8ad6\u4e86\u5728\u52a0\u8f09\u6a21\u578b\u6642\u9047\u5230\u7684\u8def\u5f91\u554f\u984c\uff0c\u9019\u53ef\u80fd\u6d89\u53ca\u5230\u6587\u4ef6\u8def\u5f91\u7684\u89e3\u6790\u6216\u6a21\u578b\u52a0\u8f09\u904e\u7a0b\u4e2d\u7684\u932f\u8aa4\u8655\u7406\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8a0e\u8ad6\u4e86OnnxRuntime 1.7.3\u4f9d\u8cf4\u65bccuda122\u548ccuda118\u7684\u554f\u984c\u3002\u9019\u53ef\u80fd\u662f\u5728\u8a0e\u8ad6\u5eab\u7248\u672c\u9593\u7684\u4f9d\u8cf4\u554f\u984c\uff0c\u7279\u5225\u662f\u5728\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684CUDA\u6642\u53ef\u80fd\u51fa\u73fe\u7684\u517c\u5bb9\u6027\u6216\u529f\u80fd\u652f\u6301\u554f\u984c\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230",children:"\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e00\u5c01\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u6210\u529f\u5c07\u652f\u6301prelu fp16\u5408\u4f75\u5230\u4e3b\u5206\u652f\u3002\u9019\u53ef\u80fd\u4ee3\u8868\u8457\u4e00\u9805\u91cd\u8981\u7684\u6280\u8853\u9032\u6b65\u6216\u529f\u80fd\u6539\u9032\u5df2\u7d93\u6210\u529f\u6574\u5408\u5230\u4e86\u4e3b\u8981\u7684\u4ee3\u78bc\u5eab\u5206\u652f\u4e2d\uff0c\u9019\u5c07\u4f7f\u5f97\u66f4\u591a\u7528\u6236\u80fd\u5920\u53d7\u76ca\u65bc\u9019\u9805\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53e6\u4e00\u5c01\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u6210\u529f\u904b\u884c\u4e869\u500b\u7ba1\u9053\u3002\u9019\u53ef\u80fd\u662f\u6307\u6210\u529f\u5be6\u73fe\u4e86\u540c\u6642\u904b\u884c9\u500b\u7ba1\u9053\u7684\u529f\u80fd\u6216\u6027\u80fd\u6e2c\u8a66\uff0c\u9019\u5c0d\u65bc\u7cfb\u7d71\u7684\u6027\u80fd\u512a\u5316\u548c\u64f4\u5c55\u6027\u6e2c\u8a66\u975e\u5e38\u91cd\u8981\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7d9c\u4e0a\u6240\u8ff0\uff0c\u9019\u4e9b\u63d0\u53d6\u7684\u8a0a\u606f\u986f\u793a\u4e86\u5728\u958b\u767c\u904e\u7a0b\u4e2d\u9032\u884c\u7684\u932f\u8aa4\u4fee\u5fa9\u3001\u529f\u80fd\u589e\u52a0\u3001\u8a0e\u8ad6\u7684\u8b70\u984c\u4ee5\u53ca\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230\u3002\u9019\u4e9b\u5de5\u4f5c\u53cd\u6620\u4e86\u5718\u968a\u5728\u6301\u7e8c\u6539\u9032\u548c\u64f4\u5c55\u5eab\u529f\u80fd\u65b9\u9762\u7684\u52aa\u529b\u548c\u6210\u5c31\u3002\u5982\u679c\u60a8\u9700\u8981\u9032\u4e00\u6b65\u4e86\u89e3\u4efb\u4f55\u7279\u5b9a\u5167\u5bb9\u6216\u6709\u5176\u4ed6\u554f\u984c\uff0c\u8acb\u96a8\u6642\u544a\u8a34\u6211\u3002"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 33 \u5c01"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var r=i(96540);const l={},s=r.createContext(l);function t(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);