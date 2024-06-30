"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1145],{83333:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var r=s(74848),i=s(28453);const c={sidebar_position:7},o="\u7d50\u679c\u8207\u8a0e\u8ad6",t={id:"docclassifier/discussion",title:"\u7d50\u679c\u8207\u8a0e\u8ad6",description:"\u7d9c\u5408\u4e4b\u524d\u7684\u5be6\u9a57\uff0c\u6211\u5011\u5f97\u5230\u4e86\u4e00\u500b\u6548\u679c\u4e0d\u932f\u7684\u6a21\u578b\u3002\u9019\u500b\u6a21\u578b\u5728\u6211\u5011\u7684\u6e2c\u8a66\u96c6\u4e0a\u53d6\u5f97\u4e86 90% \u4ee5\u4e0a\u7684\u6e96\u78ba\u7387\uff0c\u4e26\u4e14\u5728\u5be6\u969b\u61c9\u7528\u4e2d\u4e5f\u53d6\u5f97\u4e86\u4e0d\u932f\u7684\u6548\u679c\u3002",source:"@site/docs/docclassifier/discussion.md",sourceDirName:"docclassifier",slug:"/docclassifier/discussion",permalink:"/docs/docclassifier/discussion",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u8a55\u4f30\u6a21\u578b",permalink:"/docs/docclassifier/benchmark"},next:{title:"\u6a21\u578b\u8a13\u7df4\u6307\u5357",permalink:"/docs/docclassifier/training_env"}},d={},l=[];function a(n){const e={a:"a",code:"code",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u7d50\u679c\u8207\u8a0e\u8ad6",children:"\u7d50\u679c\u8207\u8a0e\u8ad6"}),"\n",(0,r.jsx)(e.p,{children:"\u7d9c\u5408\u4e4b\u524d\u7684\u5be6\u9a57\uff0c\u6211\u5011\u5f97\u5230\u4e86\u4e00\u500b\u6548\u679c\u4e0d\u932f\u7684\u6a21\u578b\u3002\u9019\u500b\u6a21\u578b\u5728\u6211\u5011\u7684\u6e2c\u8a66\u96c6\u4e0a\u53d6\u5f97\u4e86 90% \u4ee5\u4e0a\u7684\u6e96\u78ba\u7387\uff0c\u4e26\u4e14\u5728\u5be6\u969b\u61c9\u7528\u4e2d\u4e5f\u53d6\u5f97\u4e86\u4e0d\u932f\u7684\u6548\u679c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u9019\u88e1\u6211\u5011\u5c07\u8a0e\u8ad6\u4e00\u4e9b\u6211\u5011\u5728\u8a13\u7df4\u904e\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5fc3\u5f97\u548c\u7d93\u9a57\u3002"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4f60\u53ef\u80fd\u6703\u8003\u616e\u8981\u7528\u4ec0\u9ebc Margin loss\uff0c\u53ef\u80fd\u662f CosFace \u6216\u662f ArcFace\u3002\u4f46\u4e0d\u7ba1\u7528\u4ec0\u9ebc\uff0c\u8acb\u4e00\u5b9a\u8981\u642d\u914d ",(0,r.jsx)(e.a,{href:"https://arxiv.org/abs/2203.15565",children:"PartialFC"}),"\uff0c\u8a13\u7df4\u901f\u5ea6\u5927\u5e45\u63d0\u9ad8\uff0c\u6536\u6582\u7d50\u679c\u7a69\u5b9a\uff0c\u4e14\u6548\u80fd\u66f4\u597d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5c0d\u65bc\u6587\u672c\u5716\u50cf\u7684\u7a2e\u985e\uff0c\u4e00\u958b\u59cb\u6211\u5011\u4f7f\u7528\u4e86\u7d04 500 \u7a2e\uff0c\u5f8c\u4f86\u589e\u52a0\u5230 800 \u7a2e\u300110000 \u7a2e\u7b49\uff0c\u6700\u5f8c\u6c7a\u5b9a\u7d0d\u5165 indoor dataset \u4f5c\u70ba\u57fa\u5e95\uff0c\u628a\u6574\u9ad4\u7684\u5206\u985e\u7a2e\u985e\u589e\u52a0\u5230\u7d04 40 \u842c\u7a2e\u3002\u9019\u88e1\u7684\u7d50\u8ad6\u548c\u4eba\u81c9\u8fa8\u8b58\u7684\u4efb\u52d9\u4e00\u81f4\uff1a\u6a21\u578b\u7684\u6548\u679c\u548c\u8a13\u7df4\u8cc7\u6599\u7684\u591a\u6a23\u6027\u6709\u5f88\u5927\u7684\u95dc\u4fc2\uff0c\u56e0\u6b64\u6211\u5011\u9700\u8981\u4f7f\u7528\u5927\u91cf\u7684\u8cc7\u6599\u96c6\uff0c\u4ee5\u78ba\u4fdd\u6a21\u578b\u80fd\u5920\u5b78\u7fd2\u5230\u8db3\u5920\u7684\u7279\u5fb5\uff0c\u4e26\u4e14\u80fd\u5920\u6709\u6548\u5730\u5340\u5206\u4e0d\u540c\u7684\u985e\u5225\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u7d93\u5be6\u9a57\u767c\u73fe\uff0c\u63a1\u7528",(0,r.jsx)(e.strong,{children:"\u4f4e\u7cbe\u5ea6\u8a13\u7df4"}),"\u53ef\u589e\u5f37\u6a21\u578b\u7684\u6cdb\u5316\u80fd\u529b\u3002\u6211\u5011\u8a8d\u70ba\u9019\u662f\u56e0\u70ba\u6a21\u578b\u6975\u6613\u767c\u751f\u904e\u5ea6\u64ec\u5408\uff0c\u800c\u4f4e\u7cbe\u5ea6\u8a13\u7df4\u6709\u52a9\u65bc\u6e1b\u7de9\u6b64\u554f\u984c\u3002\u76f4\u63a5\u5728 ",(0,r.jsx)(e.code,{children:"trainer"})," \u4e0a\u8a2d\u7f6e\u4f4e\u7cbe\u5ea6\u8a13\u7df4\u4e26\u4e0d\u53ef\u884c\uff0c\u539f\u56e0\u662f\u90e8\u5206\u904b\u7b97\u5b50\u5728 CUDA \u4e0a\u4e0d\u652f\u6301\u6b64\u8a2d\u5b9a\u3002\u56e0\u6b64\uff0c\u6211\u5011\u63a1\u7528\u4e86 ",(0,r.jsx)(e.code,{children:"torch.set_float32_matmul_precision('medium')"})," \u65b9\u6cd5\u4f86\u5be6\u73fe\u4f4e\u7cbe\u5ea6\u8a13\u7df4\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u7d93\u904e\u5be6\u9a57\uff0c\u5728\u6587\u672c\u5716\u50cf\u5206\u985e\u7684\u4efb\u52d9\u4e2d\uff0c\u63a1\u7528 LayerNorm \u6bd4 BatchNorm \u6548\u679c\u66f4\u597d\uff0c\u6211\u5011\u8a8d\u70ba\u662f\u56e0\u70ba\u6587\u672c\u5716\u50cf\uff08\u5982\u8857\u9053\u6a19\u8a8c\u3001\u6587\u4ef6\u5716\u50cf\u7b49\uff09\u901a\u5e38\u5305\u542b\u8457\u9ad8\u5ea6\u8b8a\u7570\u6027\u7684\u7279\u5fb5\uff0c\u5982\u4e0d\u540c\u5b57\u9ad4\u3001\u5927\u5c0f\u3001\u80cc\u666f\u96dc\u8a0a\u7b49\u3002LayerNorm \u901a\u904e\u5c0d\u6bcf\u500b\u6a23\u672c\u9032\u884c\u7368\u7acb\u6a19\u6e96\u5316\uff0c\u5e6b\u52a9\u6a21\u578b\u66f4\u6709\u6548\u5730\u8655\u7406\u9019\u4e9b\u8b8a\u7570\u3002\u800c\u5728\u4eba\u81c9\u8fa8\u8b58\u4e2d\uff0c\u4f7f\u7528 BatchNorm \u6709\u52a9\u65bc\u6a21\u578b\u5b78\u7fd2\u5982\u4f55\u5f9e\u9ad8\u5ea6\u76f8\u4f3c\u7684\u81c9\u90e8\u5716\u50cf\u4e2d\u8fa8\u8b58\u51fa\u7d30\u5fae\u7684\u5dee\u7570\u3002\u9019\u5c0d\u65bc\u78ba\u4fdd\u6a21\u578b\u5728\u5404\u7a2e\u4e0d\u540c\u689d\u4ef6\uff08\u5982\u7167\u660e\u3001\u89d2\u5ea6\u3001\u8868\u60c5\u8b8a\u5316\u7b49\uff09\u4e0b\u90fd\u80fd\u6709\u6548\u5730\u8fa8\u8b58\u81c9\u90e8\u7279\u5fb5\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6211\u5011\u5728\u55ae\u7368\u4f7f\u7528 CosFace \u548c ArcFace \u7684\u6642\u5019\uff0c\u767c\u73fe ArcFace \u7684\u6548\u679c\u6bd4\u8f03\u597d\uff1b\u4f46\u662f\u642d\u914d\u4e86 PartialFC \u4e4b\u5f8c\u60c5\u6cc1\u622a\u7136\u4e0d\u540c\uff0c\u53cd\u800c\u662f CosFace \u6548\u679c\u66f4\u597d\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Pretrain \u662f\u5fc5\u8981\u7684\uff0c\u6211\u5011\u5617\u8a66\u904e\u4e0d\u4f7f\u7528 Pretrain\uff0c\u4f46\u6548\u679c\u975e\u5e38\u5dee\u3002\u5176\u4e2d\u539f\u56e0\u53ef\u80fd\u662f\u56e0\u70ba\u6211\u5011\u6240\u63d0\u4f9b\u7684\u8cc7\u6599\u96c6\u7684\u591a\u6a23\u6027\u4ecd\u7136\u4e0d\u5920\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528 Pretrain \u4f86\u5e6b\u52a9\u6a21\u578b\u5b78\u7fd2\u5230\u66f4\u591a\u7684\u7279\u5fb5\u3002\u6211\u5011\u518d\u6b21\u611f\u8b1d timm \u6240\u63d0\u4f9b\u7684\u6a21\u578b\uff0c\u9019\u4e9b\u6a21\u578b\u5e6b\u52a9\u6211\u5011\u7bc0\u7701\u4e86\u5927\u91cf\u7684\u6642\u9593\u548c\u4eba\u529b\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5728 Backbone \u8207 Head \u4e32\u63a5\u7684\u904e\u7a0b\u4e2d\uff0c\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"nn.Flatten"})," \u53d6\u5f97\u6240\u6709\u8cc7\u8a0a\u4e26\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"nn.Linear"})," \u6574\u5408\u5230\u7279\u5fb5\u7de8\u78bc\u5c64\u6548\u679c\u662f\u6700\u597d\u7684\uff01\u4f46\u662f\u7f3a\u9ede\u662f\u9700\u8981\u4f54\u7528\u5927\u91cf\u7684\u53c3\u6578 \u2014\u2014 \u5728\u8f15\u91cf\u6a21\u578b\u7684\u5834\u666f\u4e2d\uff0c\u589e\u52a0 1MB \u7684\u6a21\u578b\u5927\u5c0f\u90fd\u662f\u4e00\u4ef6\u4ee4\u4eba\u9aee\u6307\u7684\u4e8b\u60c5\u3002\u70ba\u6b64\u6211\u5011\u5617\u8a66\u4e86\u5169\u500b\u65b9\u5411\uff0c\u5176\u4e00\uff1a\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"nn.GlobalAvgPool2d"})," \u53d6\u5f97\u6240\u6709\u8cc7\u8a0a\u4e26\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"nn.Linear"})," \u6574\u5408\u5230\u7279\u5fb5\u7de8\u78bc\u5c64\uff1b\u5176\u4e8c\uff1a\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"nn.Conv2d"})," \u5148\u5c07\u901a\u9053\u6578\u964d\u7dad\u81f3\u539f\u672c\u7684 1/4 \uff0c\u9019\u908a\u6211\u5011\u7a31\u70ba Squeeze\uff0c\u63a5\u8457\u518d\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"nn.Flatten"})," \u642d\u914d ",(0,r.jsx)(e.code,{children:"nn.Linear"})," \u6574\u5408\u5230\u7279\u5fb5\u7de8\u78bc\u5c64\u3002\u7d93\u904e\u5be6\u9a57\uff0c\u4f7f\u7528 Squeeze \u7684\u7b56\u7565\u662f\u5c0d\u7684\u3002\u9019\u500b\u7b56\u7565\u4e0d\u50c5\u80fd\u5920\u6709\u6548\u5730\u6e1b\u5c11\u6a21\u578b\u5927\u5c0f\uff0c\u540c\u6642\u7dad\u6301\u6a21\u578b\u7684\u6548\u80fd\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5f15\u5165 CLIP \u7684\u7279\u5fb5\u662f\u4e00\u500b\u4e0d\u932f\u7684\u7b56\u7565\uff0c\u9019\u500b\u7b56\u7565\u4e0d\u50c5\u80fd\u5920\u63d0\u9ad8\u6a21\u578b\u7684\u6548\u80fd\uff0c\u540c\u6642\u4e5f\u80fd\u5920\u63d0\u9ad8\u6a21\u578b\u7684\u6cdb\u5316\u80fd\u529b\u3002\u9019\u500b\u7b56\u7565\u7684\u6838\u5fc3\u662f\u5229\u7528 CLIP \u6a21\u578b\u5c0d\u6211\u5011\u7684\u6a21\u578b\u9032\u884c\u77e5\u8b58\u84b8\u993e\uff0c\u5f9e\u800c\u5c07 CLIP \u6a21\u578b\u7684\u7279\u5fb5\u5f15\u5165\u5230\u6211\u5011\u7684\u6a21\u578b\u4e2d\u3002\u9019\u500b\u7b56\u7565\u7684\u6548\u679c\u662f\u975e\u5e38\u597d\u7684\uff0c\u6211\u5011\u8a8d\u70ba\u9019\u662f\u56e0\u70ba CLIP \u6a21\u578b\u5177\u6709\u8c50\u5bcc\u7684\u77e5\u8b58\uff0c\u80fd\u5920\u5e6b\u52a9\u6211\u5011\u7684\u6a21\u578b\u5b78\u7fd2\u5230\u66f4\u7a69\u5065\u7684\u7279\u5fb5\u8868\u793a\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728 LayerNorm \u4e4b\u5f8c\u518d\u52a0\u4e0a\u4e00\u5c64 BatchNorm\uff0c\u662f\u8b93\u6211\u5011\u6a21\u578b\u53ef\u4ee5\u7ad9\u4e0a 90% \u7684\u95dc\u9375\u3002\u6211\u5011\u8a8d\u70ba\u9019\u662f\u56e0\u70ba LayerNorm \u548c BatchNorm \u5169\u8005\u7684\u7279\u6027\u4e92\u88dc\uff0cLayerNorm \u6709\u52a9\u65bc\u6a21\u578b\u5b78\u7fd2\u5230\u66f4\u7a69\u5b9a\u7684\u7279\u5fb5\uff0c\u800c BatchNorm \u5247\u6709\u52a9\u65bc\u6a21\u578b\u5b78\u7fd2\u5230\u8de8\u6a23\u672c\u7684\u7279\u5fb5\u8868\u793a\u3002"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>t});var r=s(96540);const i={},c=r.createContext(i);function o(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);