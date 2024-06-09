"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[28913],{64029:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var i=e(74848),l=e(28453);const r={},d="[19.08] LXMERT",c={id:"lxmert/index",title:"[19.08] LXMERT",description:"\u591a\u4f86\u9ede\u9810\u8a13\u7df4",source:"@site/papers/1908-lxmert/index.md",sourceDirName:"1908-lxmert",slug:"/lxmert/",permalink:"/papers/lxmert/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"papersSidebar",previous:{title:"[19.04] Sparse Transformer",permalink:"/papers/sparse-transformer/"},next:{title:"[19.08] ViLBERT",permalink:"/papers/vilbert/"}},h={},x=[{value:"\u591a\u4f86\u9ede\u9810\u8a13\u7df4",id:"\u591a\u4f86\u9ede\u9810\u8a13\u7df4",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"LXMERT \u6a21\u578b\u8a2d\u8a08",id:"lxmert-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u9810\u8a13\u7df4\u7b56\u7565",id:"\u9810\u8a13\u7df4\u7b56\u7565",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"LXMERT \u548c\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03",id:"lxmert-\u548c\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03",level:3},{value:"\u9810\u8a13\u7df4\u5982\u4f55\u5f71\u97ff\u6a21\u578b\u8868\u73fe\uff1f",id:"\u9810\u8a13\u7df4\u5982\u4f55\u5f71\u97ff\u6a21\u578b\u8868\u73fe",level:3},{value:"\u6a21\u578b\u7684\u54ea\u500b\u8a2d\u8a08\u6700\u6709\u7528\u5462\uff1f",id:"\u6a21\u578b\u7684\u54ea\u500b\u8a2d\u8a08\u6700\u6709\u7528\u5462",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function j(n){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"1908-lxmert",children:"[19.08] LXMERT"}),"\n",(0,i.jsx)(s.h2,{id:"\u591a\u4f86\u9ede\u9810\u8a13\u7df4",children:"\u591a\u4f86\u9ede\u9810\u8a13\u7df4"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://arxiv.org/abs/1908.07490",children:(0,i.jsx)(s.strong,{children:"LXMERT: Learning Cross-Modality Encoder Representations from Transformers"})})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.p,{children:"\u96a8\u8457\u79d1\u6280\u7684\u9032\u6b65\uff0c\u904e\u53bb\u6578\u5e74\u4e2d\u6211\u5011\u898b\u8b49\u4e86\u8a31\u591a\u5728\u8996\u89ba\u8207\u8a9e\u8a00\u7d50\u5408\u7684\u52aa\u529b\u3002 \u9019\u4e00\u9818\u57df\u4e4b\u6240\u4ee5\u5438\u5f15\u7814\u7a76\u8005\u4e0d\u61c8\u7684\u63a2\u7d22\uff0c\u662f\u56e0\u70ba\u5b83\u6d89\u53ca\u5230\u4eba\u985e\u5169\u5927\u4e3b\u8981\u7684\u611f\u77e5\u65b9\u5f0f\uff1a\u8996\u89ba\u548c\u8a9e\u8a00\uff0c\u800c\u9019\u5169\u8005\u5728\u65e5\u5e38\u751f\u6d3b\u4e2d\u7d93\u5e38\u662f\u5bc6\u4e0d\u53ef\u5206\u7684\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u56de\u6eaf\u9019\u689d\u767c\u5c55\u4e4b\u8def\uff0c\u6a21\u578b\u5982 ViLBERT\u3001VL-BERT\u3001VisualBERT \u7b49\u90fd\u662f\u7576\u6642\u7684\u91cc\u7a0b\u7891\uff0c\u6bcf\u4e00\u500b\u90fd\u5728\u5617\u8a66\u878d\u5408\u9019\u5169\u7a2e\u5f37\u5927\u7684\u8cc7\u8a0a\u4f86\u6e90\uff1a\u5716\u50cf\u548c\u6587\u5b57\u3002 \u7136\u800c\uff0c\u5c31\u50cf\u6240\u6709\u521d\u6b65\u7684\u7814\u7a76\u4e00\u6a23\uff0c\u5b83\u5011\u90fd\u6709\u81ea\u5df1\u7684\u9650\u5236\u548c\u7279\u9ede\u3002"}),"\n",(0,i.jsx)(s.p,{children:"LXMERT \u4e5f\u8a95\u751f\u5728\u9019\u4e00\u7cfb\u5217\u63a2\u7d22\u7684\u9ad8\u5cf0\u6642\u671f\uff0c\u4f46\u5b83\u6240\u505a\u7684\u4e0d\u50c5\u50c5\u662f\u91cd\u8907\u524d\u4eba\u7684\u6210\u679c\u3002 \u76f8\u53cd\uff0c\u5b83\u9078\u64c7\u8d70\u4e00\u689d\u4e0d\u540c\u7684\u8def\u3002 \u900f\u904e\u63a1\u7528\u66f4\u591a\u7684\u6ce8\u610f\u529b\u6a5f\u5236\u3001\u66f4\u5168\u9762\u7684\u9810\u8a13\u7df4\u7b56\u7565\uff0cLXMERT \u8a66\u5716\u91dd\u5c0d\u524d\u4eba\u6a21\u578b\u7684\u67d0\u4e9b\u4e0d\u8db3\u9032\u884c\u6539\u9032\uff0c\u5f9e\u800c\u63d0\u4f9b\u4e00\u500b\u7576\u6642\u76f8\u5c0d\u5b8c\u6574\u7684\u8996\u89ba\u548c\u8a9e\u8a00\u89e3\u6c7a\u65b9\u6848\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u90a3\u9ebc\uff0cLXMERT \u5728\u7576\u6642\u7a76\u7adf\u505a\u4e86\u54ea\u4e9b\u5617\u8a66\u5462\uff1f \u5b83\u8207\u5176\u4ed6\u7814\u7a76\u76f8\u6bd4\uff0c\u6709\u54ea\u4e9b\u7279\u9ede\u548c\u8ca2\u737b\uff1f"}),"\n",(0,i.jsx)(s.p,{children:"\u8b93\u6211\u5011\u85c9\u6b64\u56de\u9867\uff0c\u518d\u6b21\u63a2\u8a2a\u7576\u6642\u7684\u7814\u7a76\u73fe\u5834\uff0c\u9806\u4fbf\u4e5f\u9ad4\u6703\u4e00\u4e0b\u6574\u500b\u9818\u57df\u5982\u4f55\u9010\u6b65\u6f14\u9032\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,i.jsx)(s.p,{children:"\u96d6\u7136\u4f5c\u8005\u5728\u8ad6\u6587\u4e2d\u8b1b\u4e86\u4e00\u5927\u9577\u7bc7\u5c0d\u65bc\u904e\u53bb\u6587\u737b\u7684\u56de\u9867\u548c\u7814\u7a76\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Transformer \u7684\u8de8\u6a21\u614b\u61c9\u7528"})}),"\n",(0,i.jsx)(s.p,{children:"\u96d6\u7136 Transformer \u5df2\u5728\u6a5f\u5668\u7ffb\u8b6f\u4e2d\u53d6\u5f97\u4e86\u6210\u529f\uff0c\u4f46\u5b83\u5982\u4f55\u9069\u61c9\u55ae\u6a21\u614b\u548c\u8de8\u6a21\u614b\u7de8\u78bc\u5668\u4ecd\u7136\u662f\u4e00\u500b\u554f\u984c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7269\u4ef6\u7279\u5fb5\u7684\u7de8\u78bc\u65b9\u5f0f"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://arxiv.org/abs/1707.07998",children:(0,i.jsx)(s.strong,{children:"BUTD\uff08Anderson et al., 2018\uff09"})}),"\u63d0\u51fa\u4f7f\u7528\u7269\u4ef6\u7684 RoI \u7279\u5fb5\u4f86\u7de8\u78bc\u5f71\u50cf\uff0c\u4f46\u5982\u4f55\u66f4\u597d\u5730\u7d50\u5408\u7269\u4ef6\u4f4d\u7f6e\u548c\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\uff0c\u4ee5\u66f4\u597d\u5730\u8868\u9054\u5f71\u50cf\u7684\u8a9e\u7fa9\uff1f"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5927\u898f\u6a21\u9810\u8a13\u7df4\u6a21\u578b\u7684\u9069\u7528\u6027"})}),"\n",(0,i.jsx)(s.p,{children:"\u50cf ELMo\u3001GPT \u548c BERT \u9019\u4e9b\u6a21\u578b\u78ba\u5be6\u5c55\u793a\u4e86\u8a9e\u8a00\u9810\u8a13\u7df4\u7684\u6f5b\u529b\uff0c\u4f46\u5982\u4f55\u5229\u7528\u9019\u4e9b\u6a21\u578b\u4f86\u8a13\u7df4\u66f4\u5177\u6311\u6230\u6027\u7684\u8de8\u6a21\u614b\u4efb\u52d9\uff1f"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u8de8\u6a21\u614b\u9810\u8a13\u7df4\u65b9\u5411\u7684\u6700\u65b0\u767c\u5c55"})}),"\n",(0,i.jsx)(s.p,{children:"\u8fd1\u671f\u7684\u7814\u7a76\uff0c\u5982 ViLBERT \u548c VisualBERT\uff0c\u5617\u8a66\u4e86\u985e\u4f3c\u7684\u8de8\u6a21\u614b\u9810\u8a13\u7df4\u3002 \u7136\u800c\uff0c\u5982\u4f55\u8b93\u4e00\u500b\u6a21\u578b\u5728\u5404\u7a2e\u4efb\u52d9\u4e0a\u90fd\u6709\u5353\u8d8a\u7684\u8868\u73fe\uff1f \u4ee5\u53ca\uff0c\u54ea\u4e9b\u984d\u5916\u7684\u9810\u8a13\u7df4\u4efb\u52d9\u80fd\u5920\u771f\u6b63\u63d0\u5347\u6a21\u578b\u7684\u6548\u80fd\uff1f"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["\u4f46\u8aaa\u9019\u9ebc\u591a\uff0c\u5176\u554f\u984c\u7684\u6838\u5fc3\u5728\u65bc\uff1a",(0,i.jsx)(s.strong,{children:"\u5982\u4f55\u8a2d\u8a08\u548c\u8a13\u7df4\u4e00\u500b\u80fd\u5920\u6709\u6548\u5730\u7406\u89e3\u548c\u8868\u793a\u8996\u89ba\u548c\u8a9e\u8a00\u4fe1\u606f\uff0c\u4e26\u80fd\u5920\u5728\u5404\u7a2e\u8de8\u6a21\u614b\u4efb\u52d9\u4e0a\u90fd\u6709\u51fa\u8272\u8868\u73fe\u7684\u6a21\u578b\uff1f"})]}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u4ef6\u4e8b\uff0c\u5982 ViLBERT \u548c VisualBERT \u90fd\u6709\u5728\u505a\u4e86\uff0c\u4f46\u4f5c\u8005\u8a8d\u70ba\u4ed6\u5011\u505a\u7684\u4e26\u4e0d\u597d\uff0c\u56e0\u70ba\u4ed6\u5011\uff1a\u4e0d\u5920\u6cdb\u5316\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(s.h3,{id:"lxmert-\u6a21\u578b\u8a2d\u8a08",children:"LXMERT \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"LXMERT \u6a21\u578b\u67b6\u69cb",src:e(68287).A+"",width:"1024",height:"325"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u67b6\u69cb\u7e3d\u89bd"})}),"\n",(0,i.jsx)(s.p,{children:"LXMERT \u7684\u8a2d\u8a08\u9748\u611f\u6e90\u65bc Transformer \u7d50\u69cb\uff0c\u5b83\u7684\u7d50\u69cb\u6574\u5408\u4e86\u81ea\u6ce8\u610f\u529b\u548c\u4ea4\u53c9\u6ce8\u610f\u529b\u5c64\uff0c\u4f7f\u5f97\u6a21\u578b\u53ef\u4ee5\u540c\u6642\u8655\u7406\u5716\u50cf\u548c\u76f8\u61c9\u7684\u8a9e\u53e5\u8f38\u5165\u3002\u9019\u7a2e\u8a2d\u8a08\u4e0d\u50c5\u5141\u8a31\u6a21\u578b\u7368\u7acb\u5730\u7de8\u78bc\u8996\u89ba\u548c\u8a9e\u8a00\u4fe1\u606f\uff0c\u800c\u4e14\u9084\u8b93\u9019\u5169\u7a2e\u4fe1\u606f\u53ef\u4ee5\u76f8\u4e92\u4f5c\u7528\uff0c\u5171\u540c\u7522\u751f\u4e00\u500b\u8de8\u6a21\u614b\u7684\u7de8\u78bc\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u8f38\u5165\u7de8\u78bc"})}),"\n",(0,i.jsx)(s.p,{children:"\u5c0d\u65bc\u5716\u50cf\u548c\u53e5\u5b50\u7684\u8f38\u5165\uff0cLXMERT \u9996\u5148\u5c07\u5176\u8f49\u63db\u70ba\u5c0d\u61c9\u7684\u7de8\u78bc\u8868\u793a\u3002\u53e5\u5b50\u901a\u904e WordPiece \u5206\u8a5e\u5668\u9032\u884c\u5206\u8a5e\uff0c\u7136\u5f8c\u518d\u9032\u884c\u7de8\u78bc\uff0c\u4f7f\u5f97\u6bcf\u500b\u55ae\u8a5e\u53ca\u5176\u5728\u53e5\u5b50\u4e2d\u7684\u7d22\u5f15\u90fd\u5f97\u5230\u76f8\u61c9\u7684\u5411\u91cf\u8868\u793a\u3002\u5c0d\u65bc\u5716\u50cf\u90e8\u5206\uff0c\u6a21\u578b\u9078\u64c7\u4e86\u4e00\u7a2e\u7269\u4ef6\u7d1a\u7684\u7de8\u78bc\u65b9\u6cd5\uff0c\u9019\u4e0d\u50c5\u5305\u62ec\u4e86\u7269\u4ef6\u7684\u5340\u57df\u7279\u5fb5\uff0c\u9084\u52a0\u5165\u4e86\u7a7a\u9593\u4f4d\u7f6e\u7684\u4fe1\u606f\uff0c\u589e\u5f37\u4e86\u6a21\u578b\u7684\u7a7a\u9593\u611f\u77e5\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7de8\u78bc\u5668\u8a2d\u8a08"})}),"\n",(0,i.jsx)(s.p,{children:"LXMERT \u7684\u6838\u5fc3\u90e8\u5206\u662f\u5176\u7de8\u78bc\u5668\uff0c\u5b83\u5305\u62ec\u8a9e\u8a00\u7de8\u78bc\u5668\u3001\u7269\u4ef6\u95dc\u4fc2\u7de8\u78bc\u5668\u548c\u4ea4\u53c9\u6a21\u614b\u7de8\u78bc\u5668\u3002\u5728\u9019\u4e09\u90e8\u5206\u4e2d\uff0c\u6a21\u578b\u7d9c\u5408\u904b\u7528\u4e86\u81ea\u6ce8\u610f\u529b\u548c\u4ea4\u53c9\u6ce8\u610f\u529b\u6280\u8853\uff0c\u78ba\u4fdd\u4e86\u6a21\u578b\u53ef\u4ee5\u6df1\u5165\u6355\u6349\u5404\u81ea\u6a21\u614b\u7684\u4fe1\u606f\uff0c\u540c\u6642\u9084\u80fd\u5920\u5728\u4e0d\u540c\u6a21\u614b\u4e4b\u9593\u5efa\u7acb\u5f37\u5927\u7684\u95dc\u806f\u6027\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u8f38\u51fa\u8868\u793a"})}),"\n",(0,i.jsx)(s.p,{children:"\u6700\u7d42\uff0cLXMERT \u63d0\u4f9b\u4e86\u4e09\u500b\u4e0d\u540c\u5c64\u9762\u7684\u8f38\u51fa\uff1a\u8a9e\u8a00\u3001\u8996\u89ba\u548c\u8de8\u6a21\u614b\u8f38\u51fa\u3002\u5176\u4e2d\uff0c\u8a9e\u8a00\u548c\u8996\u89ba\u7684\u8f38\u51fa\u76f4\u63a5\u4f86\u81ea\u65bc\u8de8\u6a21\u614b\u7de8\u78bc\u5668\u7684\u7279\u5fb5\u5e8f\u5217\u3002\u800c\u8de8\u6a21\u614b\u8f38\u51fa\u5247\u5229\u7528\u4e00\u500b\u7279\u6b8a\u7684 [CLS] \u6a19\u8a18\uff0c\u9019\u662f\u6a21\u578b\u6700\u7d42\u7d9c\u5408\u8a9e\u8a00\u548c\u8996\u89ba\u4fe1\u606f\u7684\u7d50\u679c\uff0c\u53ef\u4ee5\u7528\u65bc\u591a\u7a2e\u4e0b\u6e38\u4efb\u52d9\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u9810\u8a13\u7df4\u7b56\u7565",children:"\u9810\u8a13\u7df4\u7b56\u7565"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"LXMERT \u9810\u8a13\u7df4\u4efb\u52d9",src:e(7728).A+"",width:"1226",height:"380"})}),"\n",(0,i.jsx)(s.p,{children:"\u70ba\u4e86\u4f7f\u6a21\u578b\u80fd\u5920\u66f4\u6df1\u5165\u5730\u7406\u89e3\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u7684\u806f\u7e6b\uff0cLXMERT \u5728\u4e00\u500b\u5927\u578b\u805a\u5408\u8cc7\u6599\u96c6\u4e0a\u9032\u884c\u4e86\u9810\u8a13\u7df4\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u9810\u8a13\u7df4\u4efb\u52d9"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u8a9e\u8a00\u4efb\u52d9 \u2013 \u5c4f\u853d\u8de8\u6a21\u614b\u8a9e\u8a00\u6a21\u578b"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u8aaa\u660e\uff1a\u6b64\u4efb\u52d9\u7684\u76ee\u7684\u662f\u5e6b\u52a9\u6a21\u578b\u7406\u89e3\u548c\u751f\u6210\u53e5\u5b50\u4e2d\u88ab\u96a8\u6a5f\u5c4f\u853d\u7684\u90e8\u5206\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u65b9\u6cd5\uff1a\u6a21\u578b\u6703\u96a8\u6a5f\u5730\u5c4f\u853d\u53e5\u5b50\u4e2d\u7684 15% \u55ae\u8a5e\u3002\u8207 BERT \u4e0d\u540c\u7684\u662f\uff0cLXMERT \u6703\u7d50\u5408\u8996\u89ba\u4fe1\u606f\u4f86\u9810\u6e2c\u9019\u4e9b\u88ab\u5c4f\u853d\u7684\u55ae\u8a5e\u3002\u4f8b\u5982\uff1a\u7576\u53e5\u5b50\u4e2d\u7684\u300c\u860b\u679c\u300d\u88ab\u5c4f\u853d\uff0c\u4f46\u5716\u50cf\u986f\u793a\u4e00\u500b\u860b\u679c\uff0cLXMERT \u6703\u4f7f\u7528\u5716\u50cf\u63d0\u793a\u4f86\u88dc\u5168\u8a72\u55ae\u8a5e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u8996\u89ba\u4efb\u52d9 \u2013 \u5c4f\u853d\u7269\u4ef6\u9810\u6e2c"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u8aaa\u660e\uff1a\u6b64\u4efb\u52d9\u65e8\u5728\u5f37\u5316\u6a21\u578b\u5c0d\u5716\u50cf\u4e2d\u7269\u4ef6\u7684\u7406\u89e3\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u65b9\u6cd5\uff1a\u5716\u50cf\u4e2d\u7684\u7269\u4ef6\u7279\u5fb5\u6703\u88ab\u96a8\u6a5f\u5c4f\u853d\uff0c\u6a21\u578b\u9700\u8981\u9810\u6e2c\u9019\u4e9b\u88ab\u5c4f\u853d\u7684\u7269\u4ef6\u7684\u5c6c\u6027\u6216\u8eab\u4efd\u3002\u5b83\u53ef\u4ee5\u4f7f\u7528\u5716\u50cf\u7684\u5176\u4ed6\u90e8\u5206\u6216\u8207\u5716\u50cf\u76f8\u95dc\u7684\u8a9e\u8a00\u4e0a\u4e0b\u6587\u4f5c\u70ba\u7dda\u7d22\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u8de8\u6a21\u614b\u4efb\u52d9"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u8de8\u6a21\u614b\u5339\u914d"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u8aaa\u660e\uff1a\u6b64\u4efb\u52d9\u65e8\u5728\u5f37\u5316\u6a21\u578b\u7684\u80fd\u529b\uff0c\u4f7f\u5176\u80fd\u5920\u7406\u89e3\u5716\u50cf\u548c\u53e5\u5b50\u4e4b\u9593\u7684\u95dc\u806f\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u65b9\u6cd5\uff1a\u6a21\u578b\u6703\u63a5\u6536\u4e00\u500b\u5716\u50cf\u548c\u4e00\u53e5\u63cf\u8ff0\u8a72\u5716\u50cf\u7684\u53e5\u5b50\uff0c\u7136\u5f8c\u5fc5\u9808\u6c7a\u5b9a\u53e5\u5b50\u662f\u5426\u6b63\u78ba\u5730\u63cf\u8ff0\u4e86\u5716\u50cf\u3002\u9019\u8207 BERT \u7684\u300c\u4e0b\u4e00\u53e5\u9810\u6e2c\u300d\u4efb\u52d9\u76f8\u4f3c\uff0c\u4f46\u66f4\u504f\u91cd\u65bc\u8996\u89ba\u548c\u8a9e\u8a00\u7684\u5339\u914d\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u5716\u50cf\u554f\u7b54"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u8aaa\u660e\uff1a\u6b64\u4efb\u52d9\u7684\u76ee\u7684\u662f\u4f7f\u6a21\u578b\u80fd\u5920\u56de\u7b54\u8207\u5716\u50cf\u5167\u5bb9\u76f8\u95dc\u7684\u554f\u984c\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u65b9\u6cd5\uff1a\u6a21\u578b\u6703\u63a5\u6536\u4e00\u500b\u5716\u50cf\u548c\u4e00\u500b\u95dc\u65bc\u8a72\u5716\u50cf\u7684\u554f\u984c\uff0c\u7136\u5f8c\u5fc5\u9808\u751f\u6210\u6216\u9078\u64c7\u4e00\u500b\u6b63\u78ba\u7684\u7b54\u6848\u3002\u9019\u9700\u8981\u6a21\u578b\u5177\u6709\u826f\u597d\u7684\u8996\u89ba\u548c\u8a9e\u8a00\u7406\u89e3\uff0c\u4e26\u80fd\u5920\u8de8\u6a21\u614b\u5730\u7d50\u5408\u5169\u8005\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u9810\u8a13\u7df4\u8cc7\u6599"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u6578\u64da\u4f86\u81ea\u4e94\u500b\u4e3b\u8981\u7684\u8996\u89ba\u548c\u8a9e\u8a00\u8cc7\u6599\u96c6\uff0c\u9019\u4e9b\u8cc7\u6599\u96c6\u7684\u5716\u50cf\u6e90\u65bc MS COCO \u548c Visual Genome\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u6574\u9ad4\u8cc7\u6599\u96c6\u5305\u62ec\u4e86 18 \u842c\u5f35\u5716\u50cf\uff0c\u5e36\u6709 918 \u842c\u500b\u76f8\u5c0d\u61c9\u7684\u5716\u50cf\u548c\u53e5\u5b50\u914d\u5c0d\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u9810\u8a13\u7df4\u7a0b\u5e8f"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u4f7f\u7528 WordPiece tokenizer \u9032\u884c\u53e5\u5b50\u7684\u5206\u8a5e\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u4f7f\u7528 Faster R-CNN \u4f5c\u70ba\u7279\u5fb5\u63d0\u53d6\u5668\uff0c\u4e26\u56fa\u5b9a\u5176\u53c3\u6578\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u6a21\u578b\u53c3\u6578\u5f9e\u982d\u958b\u59cb\uff0c\u4e0d\u63a1\u7528\u9810\u8a13\u7df4\u7684 BERT \u53c3\u6578\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u4f7f\u7528\u591a\u500b\u9810\u8a13\u7df4\u4efb\u52d9\uff0c\u5176\u640d\u5931\u88ab\u7d44\u5408\u5728\u4e00\u8d77\u9032\u884c\u8a13\u7df4\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u6574\u9ad4\u9810\u8a13\u7df4\u904e\u7a0b\u5728 4 Titan Xp \u4e0a\u904b\u884c\u4e86 10 \u5929\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5fae\u8abf"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u5728\u7279\u5b9a\u4efb\u52d9\u4e0a\u9032\u884c\u5fae\u8abf\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5c0d\u6a21\u578b\u9032\u884c\u5fc5\u8981\u7684\u8abf\u6574\u4ee5\u9069\u61c9\u7279\u5b9a\u4efb\u52d9\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u4f7f\u7528\u8f03\u5c0f\u7684\u5b78\u7fd2\u7387\uff0c\u4e26\u5728\u9810\u8a13\u7df4\u7684\u53c3\u6578\u57fa\u790e\u4e0a\u5fae\u8abf\u6a21\u578b\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(s.h3,{id:"lxmert-\u548c\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03",children:"LXMERT \u548c\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"LXMERT \u548c\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03",src:e(96306).A+"",width:"1024",height:"315"})}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"\u5728\u958b\u59cb\u8a0e\u8ad6\u524d\uff0c\u6211\u6709\u500b\u611f\u5230\u56f0\u64fe\u7684\u5730\u65b9\uff0c\u5c31\u662f\u672c\u6587\u4f5c\u8005\u5728\u6bd4\u8f03\u5c0d\u8c61\u7684\u4f4d\u7f6e\u4e0a\u5c31\u53ea\u5beb\u4e00\u500b\u300cState-of-the-Art\u300d\uff0c\u9019\u6a23\u4f7f\u5f97\u6211\u5fc5\u9808\u518d\u4ed4\u7d30\u5c0b\u627e\u9019\u500b SoTA \u5230\u5e95\u78ba\u5207\u5728\u6307\u8ab0\u2026\u2026"}),(0,i.jsx)(s.p,{children:"\u597d\u5427\uff0c\u7b97\u4e86\uff0c\u6211\u5011\u7e7c\u7e8c\u5427\u3002"})]}),"\n",(0,i.jsx)(s.p,{children:"\u6839\u64da\u4e0a\u8868\u7684\u6578\u64da\uff0cLXMERT \u5728\u591a\u7a2e\u6e2c\u8a66\u4e0a\u90fd\u5c55\u73fe\u4e86\u512a\u7570\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"VQA (Visual Question Answering)"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\u5148\u524d\u7684\u6700\u5148\u9032\u7d50\u679c\u662f\u7531 Kim \u7b49\u4eba\u65bc 2018 \u5e74\u63d0\u51fa\u7684 ",(0,i.jsx)(s.a,{href:"https://arxiv.org/abs/1805.07932",children:(0,i.jsx)(s.strong,{children:"BAN+Counter"})}),"\uff0c\u5b83\u5728 VQA \u4e0a\u6bd4\u5176\u4ed6\u8fd1\u671f\u7684\u65b9\u6cd5\uff08\u5982 MFH\u3001Pythia\u3001DFAF \u548c Cycle-Consistency\uff09\u8868\u73fe\u66f4\u597d\u3002"]}),"\n",(0,i.jsx)(s.li,{children:"\u7136\u800c\uff0cLXMERT \u5728\u6574\u9ad4\u6e96\u78ba\u6027\u4e0a\u63d0\u9ad8\u4e86 2.1%\uff0c\u4e26\u5728 \u300cBinary\u300d \u548c \u300cOther\u300d \u7684\u554f\u984c\u5b50\u985e\u5225\u4e0a\u53d6\u5f97\u4e86 2.4% \u7684\u6539\u9032\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5373\u4f7f LXMERT \u4e26\u672a\u50cf BAN+Counter \u90a3\u6a23\u660e\u78ba\u5730\u4f7f\u7528\u8a08\u6578\u6a21\u7d44\uff0c\u5b83\u5728\u8a08\u6578\u76f8\u95dc\u554f\u984c\uff08\u5982\u300cNumber\u300d\uff09\u4e0a\u7684\u7d50\u679c\u4ecd\u7136\u76f8\u540c\u6216\u66f4\u597d\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"GQA"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"GQA \u7684\u6700\u5148\u9032\u7d50\u679c\u662f\u57fa\u65bc BAN \u7684\uff0c\u6b64\u7d50\u679c\u5728\u516c\u5171\u6392\u884c\u699c\u4e0a\u7531 Kim \u7b49\u4eba\u65bc 2018 \u5e74\u63d0\u51fa\u3002"}),"\n",(0,i.jsx)(s.li,{children:"LXMERT \u5728 GQA \u4e0a\u7684\u6e96\u78ba\u6027\u76f8\u5c0d\u65bc\u5148\u524d\u7684 SOTA \u65b9\u6cd5\u63d0\u9ad8\u4e86 3.2%\uff0c\u9019\u500b\u63d0\u9ad8\u5e45\u5ea6\u8d85\u904e\u4e86\u5728 VQA \u4e0a\u7684\u63d0\u9ad8\u3002\u9019\u53ef\u80fd\u662f\u56e0\u70ba GQA \u66f4\u52a0\u4f9d\u8cf4\u65bc\u8996\u89ba\u63a8\u7406\u3002\u4e8b\u5be6\u4e0a\uff0c\u901a\u904e LXMERT \u7684\u65b0\u578b\u7de8\u78bc\u5668\u548c\u8de8\u6a21\u614b\u9810\u8a13\u7df4\uff0c\u5b83\u5728\u958b\u653e\u57df\u554f\u984c\u4e0a\u5be6\u73fe\u4e86 4.6% \u7684\u6539\u9032\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"NLVR2"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["NLVR2 \u662f\u4e00\u500b\u5177\u6709\u6311\u6230\u6027\u7684\u8996\u89ba\u63a8\u7406\u6578\u64da\u96c6\uff0c\u5176\u4e2d\u67d0\u4e9b\u5df2\u6709\u7684\u65b9\u6cd5\uff08\u5982 Hu \u7b49\u4eba\u65bc 2017 \u5e74\u7684\u65b9\u6cd5\u548c Perez \u7b49\u4eba\u65bc 2018 \u5e74\u7684\u65b9\u6cd5\uff09\u5728\u6b64\u4e0a\u8868\u73fe\u4e0d\u4f73\u3002\u7576\u524d\u7684 SOTA \u65b9\u6cd5\u662f Suhr \u7b49\u4eba\u65bc 2019 \u5e74\u63d0\u51fa\u7684 ",(0,i.jsx)(s.a,{href:"https://arxiv.org/abs/1811.00491",children:(0,i.jsx)(s.strong,{children:"MaxEnt"})}),"\u3002"]}),"\n",(0,i.jsx)(s.li,{children:"\u8a31\u591a\u65e2\u6709\u65b9\u6cd5\u7684\u5931\u6557\uff08\u4ee5\u53ca LXMERT \u5728\u6c92\u6709\u9810\u8a13\u7df4\u7684\u60c5\u6cc1\u4e0b\uff09\u6307\u793a\u5728\u6c92\u6709\u5927\u898f\u6a21\u9810\u8a13\u7df4\u7684\u60c5\u6cc1\u4e0b\uff0c\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u7684\u9023\u63a5\u53ef\u80fd\u7121\u6cd5\u5728\u8907\u96dc\u7684\u8996\u89ba\u548c\u8a9e\u8a00\u4efb\u52d9\u4e2d\u7aef\u5230\u7aef\u5b78\u7fd2\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u901a\u904e LXMERT \u7684\u65b0\u578b\u9810\u8a13\u7df4\u7b56\u7565\uff0c\u5176\u5728 NLVR2 \u7684\u672a\u767c\u5e03\u6e2c\u8a66\u96c6\u4e0a\u7684\u6e96\u78ba\u6027\u986f\u8457\u63d0\u9ad8\u4e86 22%\uff0c\u9054\u5230 76.2%\u3002\u6b64\u5916\uff0cLXMERT \u9084\u5728\u4e00\u81f4\u6027\u8a55\u4f30\u6307\u6a19\u4e0a\u5be6\u73fe\u4e86\u986f\u8457\u7684\u9032\u6b65\uff0c\u9054\u5230 42.1%\uff0c\u9019\u662f\u4e4b\u524d\u7684 3.5 \u500d\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u9810\u8a13\u7df4\u5982\u4f55\u5f71\u97ff\u6a21\u578b\u8868\u73fe",children:"\u9810\u8a13\u7df4\u5982\u4f55\u5f71\u97ff\u6a21\u578b\u8868\u73fe\uff1f"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"BERT \u8207 LXMERT \u7684\u6bd4\u8f03"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u8996\u89ba\u8a9e\u8a00\u6311\u6230\uff1a\u7576\u5c07 BERT \u61c9\u7528\u65bc\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u6642\uff0c\u4f8b\u5982\uff1aNLVR2\uff0c\u53ea\u9760\u8a9e\u8a00\u9810\u8a13\u7df4\u7684\u529b\u91cf\u662f\u4e0d\u8db3\u5920\u7684\u3002NLVR2 \u4f5c\u70ba\u4e00\u500b\u7d50\u5408\u8a9e\u8a00\u548c\u8996\u89ba\u7684\u8907\u96dc\u4efb\u52d9\uff0c\u9700\u8981\u6a21\u578b\u7406\u89e3\u5716\u50cf\u5167\u5bb9\u4e26\u8207\u81ea\u7136\u8a9e\u8a00\u8aaa\u660e\u76f8\u5339\u914d\u3002\u9019\u5c31\u662f\u70ba\u4ec0\u9ebc\u50c5\u4f7f\u7528 BERT \u6a21\u578b\u7684\u8868\u73fe\u6703\u6709 22% \u7684\u6027\u80fd\u4e0b\u964d\u3002"}),"\n",(0,i.jsx)(s.li,{children:"LXMERT \u7684\u512a\u52e2\uff1aLXMERT \u63d0\u4f9b\u4e86\u4e00\u7a2e\u7279\u6b8a\u7684\u9810\u8a13\u7df4\u7b56\u7565\uff0c\u5176\u4e2d\u4e0d\u50c5\u8003\u616e\u4e86\u8a9e\u8a00\u4fe1\u606f\uff0c\u9084\u8003\u616e\u4e86\u8996\u89ba\u4fe1\u606f\u3002\u901a\u904e\u6b64\u65b9\u6cd5\uff0c\u5b83\u80fd\u5920\u66f4\u597d\u5730\u6355\u6349\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u7684\u8907\u96dc\u95dc\u806f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5f71\u50cf QA \u9810\u8a13\u7df4\u7684\u91cd\u8981\u6027"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u9810\u8a13\u7df4\u7684\u512a\u52e2\uff1a\u900f\u904e\u5f71\u50cf QA \u9810\u8a13\u7df4\uff0c\u6a21\u578b\u4e0d\u50c5\u5b78\u7fd2\u8a9e\u8a00\u7d50\u69cb\uff0c\u9084\u5b78\u7fd2\u4e86\u5982\u4f55\u5f9e\u5716\u50cf\u4e2d\u89e3\u91cb\u548c\u56de\u7b54\u554f\u984c\u3002\u9019\u4f7f\u5f97\u6a21\u578b\u5728 NLVR2 \u9019\u6a23\u7684\u4efb\u52d9\u4e0a\u8868\u73fe\u5f97\u66f4\u597d\uff0c\u5373\u4f7f\u8a72\u4efb\u52d9\u7684\u8cc7\u6599\u5728\u9810\u8a13\u7df4\u968e\u6bb5\u5f9e\u672a\u88ab\u770b\u5230\u904e\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u8868\u73fe\u7684\u63d0\u5347\uff1a\u5728\u5be6\u9a57\u4e2d\uff0c\u4f7f\u7528 QA \u9810\u8a13\u7df4\u7b56\u7565\u7684\u6a21\u578b\u5728 NLVR2 \u4e0a\u63d0\u9ad8\u4e86 2.1% \u7684\u6027\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u9810\u8a13\u7df4\u8207\u8cc7\u6599\u589e\u5f37"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u8cc7\u6599\u589e\u5f37\u7684\u5e38\u898b\u7b56\u7565\uff1a\u70ba\u4e86\u64f4\u5145\u8a13\u7df4\u6578\u64da\uff0c\u8cc7\u6599\u589e\u5f37\u5728\u5f88\u591a\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e2d\u88ab\u5ee3\u6cdb\u63a1\u7528\u3002\u9019\u7a2e\u65b9\u6cd5\u589e\u52a0\u4e86\u8a13\u7df4\u6578\u64da\u7684\u591a\u6a23\u6027\uff0c\u6709\u52a9\u65bc\u6a21\u578b\u6cdb\u5316\u5230\u771f\u5be6\u4e16\u754c\u7684\u5834\u666f\u3002"}),"\n",(0,i.jsx)(s.li,{children:"LXMERT \u7684\u7368\u7279\u7b56\u7565\uff1a\u8207\u5176\u55ae\u7d14\u589e\u52a0\u8cc7\u6599\u91cf\uff0cLXMERT \u63a1\u7528\u4e86\u5728\u591a\u500b QA \u8cc7\u6599\u96c6\u4e0a\u9032\u884c\u9810\u8a13\u7df4\u7684\u7b56\u7565\uff0c\u9019\u6bd4\u55ae\u4e00\u8cc7\u6599\u96c6\u7684\u8cc7\u6599\u589e\u5f37\u66f4\u6709\u6548\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u8996\u89ba\u9810\u8a13\u7df4\u4efb\u52d9\u7684\u5f71\u97ff"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u8996\u89ba\u9810\u8a13\u7df4\u7684\u5fc5\u8981\u6027\uff1a\u50c5\u4f9d\u8cf4\u8a9e\u8a00\u7684\u9810\u8a13\u7df4\u5c0d\u65bc\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u53ef\u80fd\u662f\u4e0d\u8db3\u5920\u7684\u3002\u9019\u5c31\u662f\u70ba\u4ec0\u9ebc\u6a21\u578b\u9700\u8981\u7279\u5b9a\u7684\u8996\u89ba\u9810\u8a13\u7df4\u4efb\u52d9\uff0c\u4ee5\u66f4\u597d\u5730\u6355\u6349\u8996\u89ba\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u7d50\u679c\u7684\u63d0\u5347\uff1a\u7576\u7d50\u5408\u5169\u500b\u8996\u89ba\u9810\u8a13\u7df4\u4efb\u52d9\uff0c\u5982 RoI-feature \u56de\u6b78\u548c detected-label \u5206\u985e\uff0c\u6a21\u578b\u7684\u8868\u73fe\u5f97\u5230\u4e86\u9032\u4e00\u6b65\u7684\u63d0\u5347\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u6a21\u578b\u7684\u54ea\u500b\u8a2d\u8a08\u6700\u6709\u7528\u5462",children:"\u6a21\u578b\u7684\u54ea\u500b\u8a2d\u8a08\u6700\u6709\u7528\u5462\uff1f"}),"\n",(0,i.jsx)(s.p,{children:"\u5f9e LXMERT \u7684\u6d88\u878d\u5be6\u9a57\u4e2d\uff0c\u53ef\u4ee5\u627e\u51fa\u4ee5\u4e0b\u5e7e\u9ede\u7d50\u8ad6\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u9810\u8a13\u7df4\u7684\u91cd\u8981\u6027"})}),"\n",(0,i.jsx)(s.p,{children:"\u8207\u672a\u7d93 LXMERT \u9810\u8a13\u7df4\u7684 BERT \u76f8\u6bd4\uff0cLXMERT \u5728\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e0a\u7684\u6027\u80fd\u6709\u986f\u8457\u63d0\u5347\u3002\u9019\u8b49\u660e\u4e86\u9810\u8a13\u7df4\u7b56\u7565\u5728\u6a21\u578b\u6027\u80fd\u4e0a\u7684\u986f\u8457\u5f71\u97ff\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u8de8\u6a21\u614b\u5b78\u7fd2"})}),"\n",(0,i.jsx)(s.p,{children:"\u901a\u904e\u6d88\u878d\u5be6\u9a57\uff0c\u672c\u6587\u767c\u73fe\u6dfb\u52a0\u66f4\u591a\u7684\u8de8\u6a21\u614b\u5c64\u53ef\u4ee5\u9032\u4e00\u6b65\u6539\u5584\u6027\u80fd\uff0c\u4f46\u8d85\u904e\u4e00\u5b9a\u7684\u5c64\u6578\u5f8c\u589e\u76ca\u6703\u6e1b\u5c11\u3002\u9019\u5f37\u8abf\u4e86\u8de8\u6a21\u614b\u5b78\u7fd2\u5728\u6a21\u578b\u4e2d\u7684\u91cd\u8981\u6027\uff0c\u540c\u6642\u4e5f\u986f\u793a\u4e86\u5176\u5c0d\u6a21\u578b\u6027\u80fd\u7684\u9650\u5236\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u8cc7\u6599\u7b56\u7565\u7684\u5f71\u97ff"})}),"\n",(0,i.jsx)(s.p,{children:"\u901a\u904e\u6bd4\u8f03\u9810\u8a13\u7df4\u548c\u8cc7\u6599\u589e\u5f37\u7b56\u7565\uff0cLXMERT \u7684\u9810\u8a13\u7df4\u7b56\u7565\u5728\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e0a\u7684\u6027\u80fd\u8d85\u904e\u4e86\u55ae\u7d14\u7684\u8cc7\u6599\u589e\u5f37\u7b56\u7565\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u6a21\u578b\u67b6\u69cb\u7684\u8a2d\u8a08\u7684\u90e8\u5206\uff0c\u4f5c\u8005\u6c92\u6709\u591a\u63d0\uff0c\u986f\u7136\u9019\u4e0d\u662f\u4f5c\u8005\u60f3\u95dc\u6ce8\u7684\u91cd\u9ede\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u9019\u9805\u7814\u7a76\u4e2d\uff0c\u4f5c\u8005\u6df1\u5165\u63a2\u7d22\u4e86\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u7684\u5bc6\u5207\u4ea4\u4e92\uff0c\u50c5\u50c5\u662f\u5c07\u8996\u89ba\u548c\u8a9e\u8a00\u5143\u7d20\u55ae\u7368\u8655\u7406\uff0c\u800c\u662f\u900f\u904e\u5176\u7368\u7279\u7684 Transfermer \u7de8\u78bc\u5668\u548c\u8de8\u6a21\u614b\u7de8\u78bc\u5668\uff0c\u78ba\u4fdd\u5169\u8005\u5728\u6574\u500b\u5b78\u7fd2\u904e\u7a0b\u4e2d\u90fd\u662f\u5bc6\u4e0d\u53ef\u5206\u7684\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u7a2e\u7dca\u5bc6\u7684\u4ea4\u4e92\u63d0\u4f9b\u4e86\u984d\u5916\u7684\u529b\u91cf\uff0c\u7279\u5225\u662f\u7576\u6a21\u578b\u9032\u884c\u5927\u898f\u6a21\u7684\u9810\u8a13\u7df4\u6642\u3002\u901a\u904e\u5c07\u9019\u7a2e\u9810\u8a13\u7df4\u7b56\u7565\u8207\u5404\u7a2e\u9810\u8a13\u7df4\u4efb\u52d9\u7d50\u5408\uff0cLXMERT \u6210\u529f\u5730\u5728\u4e00\u7cfb\u5217\u7684\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e0a\u53d6\u5f97\u4e86\u4e0d\u932f\u7684\u6210\u679c\u3002\u5b83\u4e0d\u50c5\u5728 VQA \u548c GQA \u9019\u5169\u500b\u4e3b\u8981\u7684\u5f71\u50cf QA \u8cc7\u6599\u96c6\u4e0a\u8a2d\u4e0b\u4e86\u65b0\u7684\u6a19\u6e96\uff0c\u800c\u4e14\u5728 NLVR2 \u4e0a\u4e5f\u5c55\u73fe\u51fa\u4e86\u4ee4\u4eba\u5370\u8c61\u6df1\u523b\u7684\u901a\u7528\u6027\u3002"}),"\n",(0,i.jsx)(s.p,{children:"LXMERT \u7684\u51fa\u73fe\u4e0d\u50c5\u63a8\u52d5\u4e86\u8996\u89ba\u8a9e\u8a00\u7814\u7a76\u7684\u524d\u6cbf\uff0c\u4e5f\u70ba\u672a\u4f86\u8de8\u6a21\u614b\u5b78\u7fd2\u63d0\u4f9b\u4e86\u4e00\u500b\u5805\u5be6\u7684\u57fa\u790e\u3002"})]})}function t(n={}){const{wrapper:s}={...(0,l.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(j,{...n})}):j(n)}},68287:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/arch_lxmert-9fd1e01baec2801eac650d8cce30644e.jpg"},7728:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/lxmert_pretrain-1f080ab82345b75b9a28db571cb48692.jpg"},96306:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/lxmert_table1-0a80181d21e3b95f84fb39189af540d3.jpg"},28453:(n,s,e)=>{e.d(s,{R:()=>d,x:()=>c});var i=e(96540);const l={},r=i.createContext(l);function d(n){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),i.createElement(r.Provider,{value:s},n.children)}}}]);