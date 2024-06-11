"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[667],{62090:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var i=s(74848),r=s(28453);const l={sidebar_position:5},d="\u6a21\u578b\u8a2d\u8a08",c={id:"docaligner/model_arch",title:"\u6a21\u578b\u8a2d\u8a08",description:"\u6211\u5011\u53c3\u8003\u904e\u53bb\u7684\u7814\u7a76\u6587\u737b\uff0c\u9996\u5148\u8003\u616e\u4e86\u9ede\u56de\u6b78\u6a21\u578b\u3002",source:"@site/docs/docaligner/model_arch.md",sourceDirName:"docaligner",slug:"/docaligner/model_arch",permalink:"/docs/docaligner/model_arch",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u9032\u968e\u8a2d\u5b9a",permalink:"/docs/docaligner/advance"},next:{title:"\u8a55\u4f30\u6a21\u578b",permalink:"/docs/docaligner/benchmark"}},o={},t=[{value:"\u9ede\u56de\u6b78\u6a21\u578b",id:"\u9ede\u56de\u6b78\u6a21\u578b",level:2},{value:"1. \u7279\u5fb5\u63d0\u53d6",id:"1-\u7279\u5fb5\u63d0\u53d6",level:3},{value:"2. Cross-Attention",id:"2-cross-attention",level:3},{value:"3. Point Regression",id:"3-point-regression",level:3},{value:"4. Smooth L1 Loss",id:"4-smooth-l1-loss",level:3},{value:"\u707d\u96e3\u6027\u5931\u6557",id:"\u707d\u96e3\u6027\u5931\u6557",level:2},{value:"\u5176\u4ed6\u4eba\u600e\u9ebc\u505a\uff1f",id:"\u5176\u4ed6\u4eba\u600e\u9ebc\u505a",level:2},{value:"\u4f7f\u7528\u5927\u5716\u9810\u6e2c",id:"\u4f7f\u7528\u5927\u5716\u9810\u6e2c",level:3},{value:"\u5f15\u5165\u9328\u9ede\u548c\u504f\u79fb\u91cf",id:"\u5f15\u5165\u9328\u9ede\u548c\u504f\u79fb\u91cf",level:3},{value:"\u76f4\u63a5\u64ec\u5408\u8a55\u4f30\u6578\u64da\u96c6",id:"\u76f4\u63a5\u64ec\u5408\u8a55\u4f30\u6578\u64da\u96c6",level:3},{value:"\u71b1\u5716\u56de\u6b78\u6a21\u578b",id:"\u71b1\u5716\u56de\u6b78\u6a21\u578b",level:2},{value:"1. \u7279\u5fb5\u63d0\u53d6",id:"1-\u7279\u5fb5\u63d0\u53d6-1",level:3},{value:"2. BiFPN",id:"2-bifpn",level:3},{value:"3. Heatmap Regression",id:"3-heatmap-regression",level:3},{value:"4. Adaptive Wing Loss",id:"4-adaptive-wing-loss",level:3},{value:"\u89e3\u6c7a\u653e\u5927\u8aa4\u5dee",id:"\u89e3\u6c7a\u653e\u5927\u8aa4\u5dee",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function h(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u6a21\u578b\u8a2d\u8a08",children:"\u6a21\u578b\u8a2d\u8a08"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u5011\u53c3\u8003\u904e\u53bb\u7684",(0,i.jsx)(e.a,{href:"/docs/docaligner/reference",children:(0,i.jsx)(e.strong,{children:"\u7814\u7a76\u6587\u737b"})}),"\uff0c\u9996\u5148\u8003\u616e\u4e86\u9ede\u56de\u6b78\u6a21\u578b\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u9ede\u56de\u6b78\u6a21\u578b",children:"\u9ede\u56de\u6b78\u6a21\u578b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"arch_1.jpg",src:s(75124).A+"",width:"4574",height:"3254"})}),"\n",(0,i.jsx)(e.p,{children:"\u9ede\u56de\u6b78\u6a21\u578b\u662f\u6211\u5011\u6700\u65e9\u671f\u7684\u7248\u672c\uff0c\u5b83\u7684\u57fa\u672c\u67b6\u69cb\u5206\u6210\u56db\u500b\u90e8\u5206\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u7279\u5fb5\u63d0\u53d6",children:"1. \u7279\u5fb5\u63d0\u53d6"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"pp-lcnet.jpg",src:s(15644).A+"",width:"1224",height:"736"})}),"\n",(0,i.jsxs)(e.p,{children:["\u9019\u90e8\u5206\u4e3b\u8981\u662f\u7528\u4f86\u5c07\u5f71\u50cf\u8f49\u63db\u6210\u5411\u91cf\uff0c\u9019\u88e1\u4f7f\u7528\u4e86 ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/2109.15099",children:(0,i.jsx)(e.strong,{children:"PP-LCNet"})})," \u4f5c\u70ba\u7279\u5fb5\u63d0\u53d6\u5668\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8f38\u5165\u5f71\u50cf\u70ba 128 x 128 \u7684 RGB \u5f71\u50cf\uff0c\u7d93\u904e\u7279\u5fb5\u63d0\u53d6\u5668\u5f8c\uff0c\u8f38\u51fa\u4e00\u500b 256 \u7dad\u7684\u5411\u91cf\u3002"}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u70ba\u4ec0\u9ebc\u4f60\u5011\u7e3d\u662f\u559c\u6b61\u7528 LCNet\uff1f"})}),(0,i.jsx)(e.p,{children:"\u56e0\u70ba\u6211\u5011\u5e38\u6703\u9700\u8981\u628a\u6a21\u578b\u90e8\u7f72\u5230\u624b\u6a5f\u4e0a\uff0cLCNet \u662f\u4e00\u500b\u975e\u5e38\u8f15\u91cf\u7684\u6a21\u578b\uff0c\u9069\u5408\u5728\u624b\u6a5f\u4e0a\u904b\u884c\u3002\u6b64\u5916\uff0c\u7576\u6211\u5011\u9700\u8981\u5c0d\u6a21\u578b\u9032\u884c\u91cf\u5316\u6642\uff0cLCNet \u901a\u5e38\u4e0d\u6703\u6709\u904b\u7b97\u5b50\u4e0d\u652f\u63f4\u7684\u554f\u984c\u3002"})]}),"\n",(0,i.jsx)(e.h3,{id:"2-cross-attention",children:"2. Cross-Attention"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6b64\u6a21\u578b\u4e2d\uff0c\u6211\u5011\u5c07 Neck \u90e8\u5206\u662f\u7528\u65bc\u589e\u5f37\u5f9e Backbone \u6d41\u51fa\u7684\u7279\u5fb5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u500b\u6a21\u578b\u4e2d\uff0c\u6211\u5011\u4f7f\u7528\u4e86 Cross-Attention \u6a5f\u5236\uff0c\u9019\u662f\u4e00\u7a2e Transformer \u4e2d\u5e38\u7528\u7684\u6a5f\u5236\uff0c\u80fd\u5920\u6355\u6349\u4e0d\u540c\u7279\u5fb5\u4e4b\u9593\u7684\u95dc\u4fc2\uff0c\u4e26\u5c07\u9019\u4e9b\u95dc\u4fc2\u61c9\u7528\u65bc\u7279\u5fb5\u7684\u589e\u5f37\u3002\u6211\u5011\u9810\u671f Cross-Attention \u80fd\u5920\u5e6b\u52a9\u6a21\u578b\u7406\u89e3\u5716\u50cf\u4e2d\u4e0d\u540c\u9ede\u4e4b\u9593\u7684\u7a7a\u9593\u95dc\u4fc2\uff0c\u5f9e\u800c\u63d0\u9ad8\u9810\u6e2c\u7684\u6e96\u78ba\u6027\u3002\u9664\u4e86 Cross-Attention \u4e4b\u5916\uff0c\u6211\u5011\u9084\u4f7f\u7528\u4e86\u4f4d\u7f6e\u7de8\u78bc\uff08positional encodings\uff09\uff0c\u9019\u4e9b\u7de8\u78bc\u6709\u52a9\u65bc\u6a21\u578b\u7406\u89e3\u5716\u50cf\u4e2d\u9ede\u7684\u7a7a\u9593\u4f4d\u7f6e\uff0c\u5f9e\u800c\u63d0\u9ad8\u9810\u6e2c\u7684\u6e96\u78ba\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u8003\u616e\u9ede\u56de\u6b78\u7684\u7279\u6027\uff0c\u5c0d\u65bc\u7cbe\u78ba\u7684\u50cf\u7d20\u5b9a\u4f4d\uff0c\u975e\u5e38\u4f9d\u8cf4\u65bc\u4f4e\u7d1a\u7684\u7279\u5fb5\u3002\u56e0\u6b64\u6211\u5011\u5f9e\u6df1\u5c64\u7279\u5fb5\u958b\u59cb\uff0c\u4f9d\u5e8f\u5f80\u6dfa\u5c64\u7279\u5fb5\uff081/32 -> 1/16 -> 1/8 -> 1/4 -> 1/2\uff09\u9032\u884c\u67e5\u8a62\uff0c\u9019\u6a23\u7684\u8a2d\u8a08\u80fd\u5920\u8b93\u6a21\u578b\u5728\u4e0d\u540c\u5c3a\u5ea6\u7684\u7279\u5fb5\u4e2d\u627e\u5230\u6587\u4ef6\u7684\u4f4d\u7f6e\u3002\u6211\u5011\u8a8d\u70ba\u9019\u7a2e\u67e5\u8a62\u65b9\u5f0f\u80fd\u5920\u6709\u6548\u5730\u63d0\u9ad8\u6a21\u578b\u7684\u6e96\u78ba\u6027\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"3-point-regression",children:"3. Point Regression"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9810\u6e2c\u982d\u7684\u8a2d\u8a08\u4e2d\uff0c\u6211\u5011\u50c5\u4f7f\u7528\u4e00\u500b\u7c21\u55ae\u7684\u7dda\u6027\u5c64\u4f5c\u70ba Head\uff0c\u5c07\u7279\u5fb5\u8f49\u63db\u70ba\u9ede\u7684\u5750\u6a19\u3002\u6211\u5011\u5e0c\u671b\u6a21\u578b\u53ef\u4ee5\u66f4\u4f9d\u8cf4\u65bc Cross-Attention \u7684\u7279\u5fb5\u7684\u8868\u9054\u80fd\u529b\uff0c\u800c\u4e0d\u662f\u4f9d\u8cf4\u65bc\u8907\u96dc\u982d\u90e8\u67b6\u69cb\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"4-smooth-l1-loss",children:"4. Smooth L1 Loss"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6211\u5011\u7684\u6a21\u578b\u4e2d\uff0c\u6211\u5011\u9078\u64c7\u4f7f\u7528 Smooth L1 Loss \u4f5c\u70ba\u640d\u5931\u51fd\u6578\uff0c\u9019\u662f\u4e00\u7a2e\u5728\u56de\u6b78\u4efb\u52d9\u4e2d\u5e38\u7528\u7684\u640d\u5931\u51fd\u6578\uff0c\u7279\u5225\u9069\u7528\u65bc\u8655\u7406\u5b58\u5728\u7570\u5e38\u503c\u7684\u60c5\u6cc1\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8207 L1 Loss \u76f8\u6bd4\uff0cSmooth L1 Loss \u5728\u9810\u6e2c\u503c\u8207\u771f\u5be6\u503c\u5dee\u7570\u8f03\u5927\u6642\u66f4\u52a0\u7a69\u5065\uff0c\u80fd\u5920\u6e1b\u5c11\u7570\u5e38\u503c\u5c0d\u6a21\u578b\u8a13\u7df4\u7684\u5f71\u97ff\u3002\u6b64\u5916\uff0c\u70ba\u4e86\u964d\u4f4e\u9ede\u56de\u6b78\u7684\u653e\u5927\u8aa4\u5dee\uff0c\u6211\u5011\u5c07\u9ede\u9810\u6e2c\u7684\u6b0a\u91cd\u300c\u63d0\u9ad8\u81f3 1000\u300d\uff0c\u7d93\u904e\u6211\u5011\u7684\u5be6\u9a57\uff0c\u9019\u6a23\u7684\u8a2d\u8a08\u80fd\u5920\u6709\u6548\u5730\u63d0\u9ad8\u6a21\u578b\u7684\u6e96\u78ba\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4e86\u89d2\u9ede\u7684\u640d\u5931\u4e4b\u5916\uff0c\u6211\u5011\u4e5f\u7528\u4e86\u5176\u4ed6\u7684\u640d\u5931\uff0c\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Classification Loss: \u9019\u662f\u4e00\u7a2e\u7528\u65bc\u5206\u985e\u7684\u640d\u5931\u51fd\u6578\uff0c\u7528\u65bc\u9810\u6e2c\u5716\u50cf\u4e2d\u662f\u5426\u5b58\u5728\u6587\u4ef6\uff0c\u4f7f\u7528 BCE Loss\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8acb\u6ce8\u610f\uff0c\u9019\u88e1\u7684\u5206\u985e\u640d\u5931\u4e26\u975e\u53ea\u662f\u8f14\u52a9\u640d\u5931\uff0c\u800c\u662f\u4e3b\u8981\u640d\u5931\u4e4b\u4e00\uff0c\u56e0\u70ba\u89d2\u9ede\u9810\u6e2c\u672c\u8eab\u7684\u9650\u5236\uff0c\u7576\u9047\u5230\u6c92\u6709\u76ee\u6a19\u7269\u7684\u60c5\u6cc1\u6642\uff0c\u4ecd\u6703\u9810\u6e2c\u51fa\u89d2\u9ede\uff0c\u56e0\u6b64\u5728\u90e8\u7f72\u968e\u6bb5\uff0c\u6211\u5011\u9700\u8981\u5206\u985e\u982d\u4f86\u544a\u8a34\u6211\u5011\u662f\u5426\u6709\u76ee\u6a19\u7269\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u707d\u96e3\u6027\u5931\u6557",children:"\u707d\u96e3\u6027\u5931\u6557"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u300c\u9ede\u56de\u6b78\u6a21\u578b\u300d\u7684\u67b6\u69cb\u4e2d\uff0c\u6211\u5011\u906d\u9047\u4e86\u975e\u5e38\u56b4\u91cd\u7684\u300c",(0,i.jsx)(e.strong,{children:"\u653e\u5927\u8aa4\u5dee"}),"\u300d\u554f\u984c\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u554f\u984c\u7684\u6839\u6e90\u5728\u65bc\uff0c\u6211\u5011\u8a13\u7df4\u6a21\u578b\u7684\u904e\u7a0b\u4e2d\uff0c\u9700\u8981\u7e2e\u5c0f\u539f\u59cb\u5716\u50cf\u81f3 128 x 128 \u6216 256 x 256\u3002\u9019\u6a23\u7684\u7e2e\u5c0f\u904e\u7a0b\uff0c\u6703\u5c0e\u81f4\u539f\u59cb\u5716\u50cf\u4e2d\u7684\u7d30\u7bc0\u4fe1\u606f\u4e1f\u5931\uff0c\u9032\u800c\u5c0e\u81f4\u6a21\u578b\u5728\u9810\u6e2c\u6642\uff0c\u7121\u6cd5\u6e96\u78ba\u5730\u627e\u5230\u6587\u4ef6\u7684\u89d2\u9ede\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6b63\u78ba\u4f86\u8aaa\uff0c\u6a21\u578b\u6703\u627e\u5230\u57fa\u65bc\u7e2e\u5c0f\u5716\u50cf\u7684\u89d2\u9ede\u3002"})}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u5f8c\u6211\u5011\u5fc5\u9808\u5c07\u9019\u4e9b\u89d2\u9ede\u653e\u5927\u81f3\u539f\u59cb\u5716\u50cf\u7684\u5c3a\u5bf8\uff0c\u624d\u80fd\u627e\u5230\u539f\u59cb\u5716\u50cf\u4e2d\u7684\u89d2\u9ede\u4f4d\u7f6e\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u6a23\u7684\u653e\u5927\u904e\u7a0b\uff0c\u6703\u5c0e\u81f4\u89d2\u9ede\u7684\u4f4d\u7f6e\u51fa\u73fe\u5927\u7d04 5 ~ 10 \u50cf\u7d20\u7684\u504f\u79fb\u91cf\uff0c\u9032\u800c\u5c0e\u81f4\u6a21\u578b\u7121\u6cd5\u6e96\u78ba\u5730\u9810\u6e2c\u6587\u4ef6\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u60f3\u50cf\uff1a\u5728\u539f\u59cb\u5716\u50cf\u4e2d\uff0c\u76ee\u6a19\u89d2\u9ede\u7684\u65b9\u5713 10 \u50cf\u7d20\u7684\u5716\u50cf\uff0c\u5728\u9810\u6e2c\u6642\u90fd\u6703\u7e2e\u5c0f\u5230 1 \u50cf\u7d20\u3002\u7136\u5f8c\u6a21\u578b\u4f5c\u51fa\u9810\u6e2c\uff0c\u6700\u5f8c\u5728\u653e\u5927\u904e\u7a0b\u4e2d\uff0c\u5c31\u6703\u5c0e\u81f4\u89d2\u9ede\u7684\u4f4d\u7f6e\u51fa\u73fe\u504f\u79fb\u3002"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5176\u4ed6\u4eba\u600e\u9ebc\u505a",children:"\u5176\u4ed6\u4eba\u600e\u9ebc\u505a\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"\u9047\u5230\u9019\u500b\u554f\u984c\u5f8c\uff0c\u6211\u5011\u958b\u59cb\u6709\u610f\u8b58\u5730\u53bb\u5c0b\u627e\u5176\u4ed6\u4eba\u662f\u5982\u4f55\u89e3\u6c7a\u9019\u500b\u554f\u984c\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5f8c\u4f86\u767c\u73fe\u5728\u8a72\u9818\u57df (Document Localization) \u7684\u8a31\u591a\u6587\u737b\u4e2d\uff0c\u89e3\u6c7a\u65b9\u5f0f\u5c31\u662f\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"\u4f7f\u7528\u5927\u5716\u9810\u6e2c",children:"\u4f7f\u7528\u5927\u5716\u9810\u6e2c"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u6a23\u7684\u505a\u6cd5\uff0c\u53ef\u4ee5\u4fdd\u8b49\u6a21\u578b\u5728\u9810\u6e2c\u6642\uff0c\u80fd\u5920\u6e96\u78ba\u5730\u627e\u5230\u6587\u4ef6\u7684\u89d2\u9ede\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u662f\u5f88\u6162\uff0c\u975e\u5e38\u975e\u5e38\u6162\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5f15\u5165\u9328\u9ede\u548c\u504f\u79fb\u91cf",children:"\u5f15\u5165\u9328\u9ede\u548c\u504f\u79fb\u91cf"}),"\n",(0,i.jsx)(e.p,{children:"\u9328\u9ede\uff08Anchor-Based\uff09\u7684\u505a\u6cd5\u53ef\u4ee5\u53c3\u8003\u7269\u4ef6\u5075\u6e2c\u7684\u9818\u57df\uff0c\u6211\u5011\u6703\u9700\u8981\u4e00\u4e9b\u5148\u9a57\u77e5\u8b58\uff0c\u7528\u4f86\u5b9a\u7fa9 Anchor \u7684\u5c3a\u5bf8\u3002\u4f46\u662f\u6587\u4ef6\u51fa\u73fe\u5728\u5f71\u50cf\u4e2d\u53ef\u4ee5\u662f\u4efb\u610f\u89d2\u5ea6\u548c\u5f62\u8b8a\uff0c\u800c\u9328\u9ede\u7684\u8a2d\u8a08\u6703\u8b93\u6a21\u578b\u7684\u5075\u6e2c\u80fd\u529b\u9650\u7e2e\u5728\u4e00\u5b9a\u7bc4\u570d\u5167\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u57fa\u672c\u4e0a\uff0c\u4f60\u6240\u77e5\u9053\u7684\u6709\u95dc\u9328\u9ede\u67b6\u69cb\u7684\u512a\u7f3a\u9ede\uff0c\u90fd\u53ef\u4ee5\u5728\u9019\u88e1\u91cd\u5beb\u4e00\u6b21\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u73fe\u5be6\u4e16\u754c\u4e2d\u7684\u6587\u4ef6\u9577\u5bec\u6bd4\u904e\u65bc\u96a8\u610f\uff0c\u56e0\u6b64\u4e0d\u9069\u5408\u4f7f\u7528\u9328\u9ede\u7684\u8a2d\u8a08\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u76f4\u63a5\u64ec\u5408\u8a55\u4f30\u6578\u64da\u96c6",children:"\u76f4\u63a5\u64ec\u5408\u8a55\u4f30\u6578\u64da\u96c6"}),"\n",(0,i.jsx)(e.p,{children:"\u6bd4\u8f03\u65e9\u671f\u7684\u8ad6\u6587\u4e2d\uff0c\u8ad6\u8ff0\u908f\u8f2f\u6bd4\u8f03\u50cf\u662f\u76f4\u63a5\u91dd\u5c0d SmartDoc 2015 \u8a2d\u8a08\u4e00\u5957\u7b97\u6cd5\uff0c\u800c\u4e0d\u662f\u8a2d\u8a08\u4e00\u500b\u901a\u7528\u7684\u6a21\u578b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8fd1\u5e7e\u5e74\u7684\u8ad6\u6587\u4e2d\uff0c\u5247\u662f\u6703\u5c07 SmartDoc 2015 \u81ea\u884c\u62c6\u5206\u8a13\u7df4\u96c6\u548c\u6e2c\u8a66\u96c6\uff0c\u900f\u904e\u9019\u7a2e\u65b9\u5f0f\u4f86\u63d0\u6607\u5c0d\u65bc SmartDoc 2015 \u7684\u5206\u6578\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6240\u4ee5\u4f60\u6703\u5728 Benchmark \u7684\u7d50\u679c\u4e2d\u770b\u5230\u6709\u8a31\u591a\u67b6\u69cb\u7684\u5206\u6578\u76f8\u7576\u4e0d\u932f\uff0c\u4f46\u662f\u5728\u5be6\u969b\u61c9\u7528\u4e2d\uff0c\u6c92\u6709\u8db3\u5920\u7684\u6cdb\u5316\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u767c\u73fe\u9019\u500b\u9818\u57df\u7684\u7814\u7a76\u8005\uff0c\u5c0d\u65bc\u9019\u500b\u554f\u984c\u7684\u89e3\u6c7a\u65b9\u5f0f\uff0c\u4e26\u6c92\u6709\u4e00\u500b\u7d71\u4e00\u7684\u770b\u6cd5\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u71b1\u5716\u56de\u6b78\u6a21\u578b",children:"\u71b1\u5716\u56de\u6b78\u6a21\u578b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"arch_2.jpg",src:s(15620).A+"",width:"3277",height:"1929"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u6a21\u578b\u67b6\u69cb\u6cbf\u7528\u4e86\u539f\u672c\u7684\u7279\u5fb5\u63d0\u53d6\u5668\uff0c\u4f46\u662f\u4fee\u6539\u4e86 Neck \u548c Head \u90e8\u5206\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u7279\u5fb5\u63d0\u53d6-1",children:"1. \u7279\u5fb5\u63d0\u53d6"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4e86\u7528\u4f86\u653e\u5728\u624b\u6a5f\u4e0a\u7684\u6a21\u578b\u63a1\u7528 LCNet \u4e4b\u5916\uff0c\u6211\u5011\u9084\u4f7f\u7528\u4e86\u4e00\u500b\u66f4\u5927\u7684\u6a21\u578b\uff0c\u7528\u4f86\u63d0\u53d6\u66f4\u591a\u7684\u7279\u5fb5\u3002\u56e0\u70ba\u6211\u5011\u5e0c\u671b\u53ef\u4ee5\u505a\u51fa\u8d85\u8d8a SoTA \u7684\u6a21\u578b\uff0c\u55ae\u7d14\u4f7f\u7528 LCNet \u662f\u4e0d\u5920\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u500b\u6a21\u578b\u4e2d\uff0c\u6211\u5011\u5617\u8a66\u4f7f\u7528\u4e86 FastViT\u3001MobileNetV2 \u7b49\uff0c\u9084\u7b97\u300c\u8f15\u91cf\u300d\u7684\u5377\u7a4d\u795e\u7d93\u7db2\u7d61\uff0c\u7279\u5225\u9069\u7528\u65bc\u5728\u8a08\u7b97\u8cc7\u6e90\u53d7\u9650\u7684\u74b0\u5883\u4e0b\u9032\u884c\u9ad8\u6548\u7684\u7279\u5fb5\u63d0\u53d6\u3002\u6211\u5011\u9810\u671f Backbone \u61c9\u8a72\u80fd\u5f9e\u8f38\u5165\u6578\u64da\u4e2d\u63d0\u53d6\u51fa\u8db3\u5920\u7684\u7279\u5fb5\u4fe1\u606f\uff0c\u70ba\u5f8c\u7e8c\u7684\u71b1\u5716\u56de\u6b78\u505a\u597d\u6e96\u5099\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"2-bifpn",children:"2. BiFPN"}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u8457\u6211\u5011\u70ba\u4e86\u66f4\u597d\u5730\u878d\u5408\u591a\u5c3a\u5ea6\u7684\u7279\u5fb5\uff0c\u6211\u5011\u5f15\u5165\u4e86 BiFPN (Bidirectional Feature Pyramid Network) \u901a\u904e\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u96d9\u5411\u6d41\u52d5\uff0c\u589e\u5f37\u4e86\u7279\u5fb5\u7684\u8868\u9054\u80fd\u529b\u3002\u6211\u5011\u9810\u671f BiFPN \u6703\u7522\u751f\u4e00\u7cfb\u5217\u5c3a\u5ea6\u8c50\u5bcc\u4e14\u8a9e\u7fa9\u5f37\u7684\u7279\u5fb5\u5716\uff0c\u9019\u4e9b\u7279\u5fb5\u5716\u5c0d\u65bc\u6355\u6349\u4e0d\u540c\u5c3a\u5ea6\u7684\u5c0d\u8c61\u975e\u5e38\u6709\u6548\uff0c\u4e26\u5c0d\u6700\u7d42\u7684\u9810\u6e2c\u7cbe\u5ea6\u6709\u6b63\u9762\u5f71\u97ff\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"3-heatmap-regression",children:"3. Heatmap Regression"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"awing_loss.jpg",src:s(18617).A+"",width:"1224",height:"912"})}),"\n",(0,i.jsxs)(e.p,{children:["\u70ba\u4e86\u89e3\u6c7a\u4e4b\u524d\u63d0\u5230\u7684\u653e\u5927\u8aa4\u5dee\uff0c\u6211\u5011\u9700\u8981\u5c0d\u9810\u6e2c\u7684\u7d50\u679c\u6709\u4e00\u5b9a\u7684\u300c\u6a21\u7cca\u6027\u300d\u3002\u610f\u601d\u662f\uff1a\u6211\u5011\u4e0d\u80fd\u8b93\u6a21\u578b\u6e96\u78ba\u5730\u6307\u51fa\u9019\u500b\u6587\u4ef6\u7684\u89d2\u9ede\u5728\u54ea\u88e1\uff0c\u800c\u662f\u61c9\u8a72\u8981\u8b93\u6a21\u578b\u8aaa\uff1a\u300c",(0,i.jsx)(e.strong,{children:"\u9019\u500b\u6587\u4ef6\u7684\u89d2\u9ede\u5927\u6982\u5728\u9019\u500b\u5340\u57df"}),"\u300d\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u70ba\u6b64\uff0c\u6211\u5011\u627e\u4f86\u4e86\u5e38\u7528\u65bc\u4eba\u81c9\u95dc\u9375\u9ede\u6aa2\u6e2c\u6216\u4eba\u9ad4\u59ff\u52e2\u4f30\u8a08\u7684\u65b9\u6cd5\uff1a",(0,i.jsx)(e.strong,{children:"\u71b1\u5716\u56de\u6b78"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u71b1\u5716\u56de\u6b78\u5c07\u751f\u6210\u7269\u9ad4\u7684\u71b1\u5716\u8868\u793a\uff0c\u9019\u4e9b\u71b1\u5716\u53cd\u6620\u4e86\u7269\u9ad4\u51fa\u73fe\u5728\u4e0d\u540c\u4f4d\u7f6e\u7684\u53ef\u80fd\u6027\u3002\u901a\u904e\u5206\u6790\u9019\u4e9b\u71b1\u5716\uff0c\u6a21\u578b\u80fd\u5920\u6e96\u78ba\u5730\u9810\u6e2c\u51fa\u7269\u9ad4\u7684\u4f4d\u7f6e\u548c\u59ff\u614b\u3002\u800c\u5728\u6211\u5011\u7684\u60c5\u5883\u4e2d\uff0c\u71b1\u5716\u5247\u662f\u7528\u4f86\u627e\u5230\u6587\u4ef6\u7684\u89d2\u9ede\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"4-adaptive-wing-loss",children:"4. Adaptive Wing Loss"}),"\n",(0,i.jsx)(e.p,{children:"Loss \u662f\u6a21\u578b\u8a13\u7df4\u7684\u95dc\u9375\uff0c\u8ca0\u8cac\u8a08\u7b97\u6a21\u578b\u9810\u6e2c\u7d50\u679c\u548c\u771f\u5be6\u6a19\u7c64\u4e4b\u9593\u7684\u5dee\u7570\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u500b\u6a21\u578b\u4e2d\uff0c\u6211\u5011\u4f7f\u7528\u7684\u662f Adaptive Wing Loss\uff0c\u9019\u662f\u4e00\u7a2e\u5c08\u9580\u7528\u65bc\u4eba\u81c9\u95dc\u9375\u9ede\u6aa2\u6e2c\u7684\u640d\u5931\u51fd\u6578\uff0c\u9019\u7a2e\u65b9\u6cd5\u662f\u91dd\u5c0d\u71b1\u5716\u56de\u6b78\u4e2d\u7684\u640d\u5931\u51fd\u6578\u9032\u884c\u5275\u65b0\uff0c\u7279\u5225\u9069\u7528\u65bc\u4eba\u81c9\u5c0d\u9f4a\u554f\u984c\u3002\u5176\u6838\u5fc3\u601d\u60f3\u662f\u8b93\u640d\u5931\u51fd\u6578\u80fd\u5920\u6839\u64da\u4e0d\u540c\u985e\u578b\u7684\u771f\u5be6\u71b1\u5716\u50cf\u7d20\u8abf\u6574\u5176\u5f62\u72c0\uff0c\u5c0d\u524d\u666f\u50cf\u7d20\uff08\u5373\u4eba\u81c9\u7279\u5fb5\u9ede\u9644\u8fd1\u7684\u50cf\u7d20\uff09\u65bd\u52a0\u66f4\u591a\u7684\u61f2\u7f70\uff0c\u800c\u5c0d\u80cc\u666f\u50cf\u7d20\u65bd\u52a0\u8f03\u5c11\u7684\u61f2\u7f70\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u88e1\uff0c\u6211\u5011\u5c07\u6587\u4ef6\u89d2\u9ede\u9810\u6e2c\u7684\u554f\u984c\u8996\u70ba\u4eba\u81c9\u95dc\u9375\u9ede\u6aa2\u6e2c\u554f\u984c\uff0c\u4e26\u4f7f\u7528\u5c08\u9580\u7528\u65bc\u4eba\u81c9\u95dc\u9375\u9ede\u6aa2\u6e2c\u7684\u640d\u5931\u51fd\u6578\u3002\u6211\u5011\u8a8d\u70ba\u9019\u7a2e\u65b9\u6cd5\u80fd\u5920\u6709\u6548\u5730\u89e3\u6c7a\u6587\u4ef6\u89d2\u9ede\u6aa2\u6e2c\u4e2d\u7684\u554f\u984c\uff0c\u4e26\u4e14\u80fd\u5920\u5728\u4e0d\u540c\u7684\u5834\u666f\u4e2d\u53d6\u5f97\u826f\u597d\u7684\u6548\u679c\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Reference:"})," ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1904.07399",children:(0,i.jsx)(e.strong,{children:"Adaptive Wing Loss for Robust Face Alignment via Heatmap Regression"})})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4e86\u89d2\u9ede\u7684\u640d\u5931\u4e4b\u5916\uff0c\u6211\u5011\u4e5f\u7528\u4e86\u591a\u500b\u8f14\u52a9\u7684\u640d\u5931\uff0c\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Edge Loss:"})," \u9019\u88e1\u540c\u6642\u76e3\u7763\u7269\u9ad4\u908a\u754c\u8a0a\u606f\uff0c\u4f7f\u7528 AWing Loss\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Classification Loss:"})," \u9019\u88e1\u7528\u65bc\u9810\u6e2c\u5716\u50cf\u4e2d\u662f\u5426\u5b58\u5728\u6587\u4ef6\uff0c\u4f7f\u7528 BCE Loss\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u89e3\u6c7a\u653e\u5927\u8aa4\u5dee",children:"\u89e3\u6c7a\u653e\u5927\u8aa4\u5dee"}),"\n",(0,i.jsx)(e.p,{children:"\u71b1\u5716\u56de\u6b78\u6a21\u578b\u7684\u8f38\u51fa\u5c31\u662f\u4e00\u5f35\u71b1\u5716\uff0c\u9019\u5f35\u71b1\u5716\u53ef\u4ee5\u544a\u8a34\u6211\u5011\u6587\u4ef6\u7684\u89d2\u9ede\u5927\u6982\u5728\u54ea\u88e1\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u63a5\u8457\uff0c\u6211\u5011",(0,i.jsx)(e.strong,{children:"\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\u9019\u5f35\u71b1\u5716"}),"\uff0c\u56e0\u70ba\u9019\u5f35\u71b1\u5716\u662f\u7e2e\u5c0f\u904e\u7684\uff0c\u5be6\u969b\u4e0a\u61c9\u8a72\u8981\u9019\u6a23\uff1a"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u6211\u5011\u9700\u8981\u5c07\u9019\u5f35\u71b1\u5716\u653e\u5927\u81f3\u539f\u59cb\u5716\u50cf\u7684\u5c3a\u5bf8\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u5f71\u50cf\u5f8c\u8655\u7406\u7684\u65b9\u5f0f\uff0c\u627e\u5230\u6bcf\u500b\u71b1\u5716\u4e2d\u63d0\u793a\u7684\u89d2\u9ede\u5340\u57df\u7684 Contour\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u8a08\u7b97 Contour \u7684\u8cea\u5fc3\uff0c\u9019\u500b\u8cea\u5fc3\u5c31\u662f\u6587\u4ef6\u7684\u89d2\u9ede\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u6b64\u4e00\u4f86\uff0c\u6a21\u578b\u5c31\u80fd\u5920\u6e96\u78ba\u5730\u627e\u5230\u89d2\u9ede\uff0c\u89e3\u6c7a\u4e86\u4e4b\u524d\u63d0\u5230\u7684\u653e\u5927\u8aa4\u5dee\u554f\u984c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u5728\u71b1\u5716\u6a21\u578b\u7684\u67b6\u69cb\u4e2d\u627e\u5230\u4e00\u500b\u5f88\u660e\u986f\u7684\u7f3a\u9ede\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u4e0d\u662f\u7aef\u5230\u7aef\u7684\u6a21\u578b\u67b6\u69cb"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u4e5f\u662f\u6211\u5011\u5728\u8a2d\u8a08\u6a21\u578b\u6642\uff0c\u4e00\u76f4\u5728\u601d\u8003\u7684\u554f\u984c\u3002\u6211\u5011\u5e0c\u671b\u80fd\u5920\u8a2d\u8a08\u4e00\u500b\u7aef\u5230\u7aef\u7684\u6a21\u578b\uff0c\u9019\u6a23\u5c0d\u65bc\u4f7f\u7528\u8005\u4f86\u8aaa\u66f4\u7c21\u55ae\uff0c\u6a21\u578b\u4e5f\u53ef\u4ee5\u5c0d\u6bcf\u500b\u7d44\u4ef6\u9032\u884c\u5b78\u7fd2\u3002\u4f46\u662f\u57fa\u65bc\u9ede\u56de\u6b78\u6a21\u578b\u9047\u5230\u7684\u56f0\u96e3\uff0c\u6211\u5011\u4e0d\u5f97\u4e0d\u4f7f\u7528\u71b1\u5716\u56de\u6b78\u6a21\u578b\u7684\u8a2d\u8a08\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7e3d\u4e4b\uff0c\u96d6\u7136\u4e0d\u662f\u90a3\u9ebc\u5b8c\u7f8e\uff0c\u4f46\u81f3\u5c11\u5148\u89e3\u6c7a\u4e86\u653e\u5927\u8aa4\u5dee\u554f\u984c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6211\u5011\u7684\u71b1\u5716\u6a21\u578b\u5be6\u9a57\u4e2d\uff0c\u4f7f\u7528\u66f4\u5927\u7684 Backbone\u3001\u66f4\u8907\u96dc\u7684 Neck \u90fd\u80fd\u63d0\u9ad8\u6a21\u578b\u7684\u6e96\u78ba\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u90e8\u7f72\u968e\u6bb5\uff0c\u4f60\u53ea\u9700\u8981\u8003\u616e\u5230\u4f7f\u7528\u5834\u666f\u4e2d\u7684\u7b97\u529b\u9650\u5236\uff0c\u6311\u9078\u5408\u9069\u7684\u6a21\u578b\u5373\u53ef\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},18617:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/awing_loss-f4531a7f843e26f0085e9962144a905d.jpg"},15620:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/hmap_model_arch-5a3b42fd4d54769ec6f331952327e323.jpg"},15644:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/lcnet_arch-89fd4d95f589dbbd8ca1edc5b4486391.jpg"},75124:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/point_model_arch-cb2afeedf5c66ea527d29726f64e2f03.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function d(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);