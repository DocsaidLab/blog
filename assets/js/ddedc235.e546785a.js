"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[103],{56568:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var s=e(74848),l=e(28453);const r={sidebar_position:7},d="SimVLM",c={id:"multi-model/2021/simvlm",title:"SimVLM",description:"\u7c21\u55ae\u4e00\u9ede",source:"@site/papers/multi-model/2021/simvlm.md",sourceDirName:"multi-model/2021",slug:"/multi-model/2021/simvlm",permalink:"/papers/multi-model/2021/simvlm",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713882784e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"papersSidebar",previous:{title:"ALBEF",permalink:"/papers/multi-model/2021/albef"},next:{title:"METER",permalink:"/papers/multi-model/2021/meter"}},h={},x=[{value:"\u7c21\u55ae\u4e00\u9ede",id:"\u7c21\u55ae\u4e00\u9ede",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"SimVLM \u6a21\u578b\u8a2d\u8a08",id:"simvlm-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u9810\u8a13\u7df4\u7b56\u7565",id:"\u9810\u8a13\u7df4\u7b56\u7565",level:3},{value:"\u8cc7\u6599\u96c6",id:"\u8cc7\u6599\u96c6",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u6a21\u578b\u6548\u679c\u5982\u4f55\uff1f",id:"\u6a21\u578b\u6548\u679c\u5982\u4f55",level:3},{value:"Zero-shot \u7684\u8868\u73fe\uff1f",id:"zero-shot-\u7684\u8868\u73fe",level:3},{value:"\u8ab0\u7684\u8ca2\u737b\uff1f",id:"\u8ab0\u7684\u8ca2\u737b",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function j(n){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"simvlm",children:"SimVLM"}),"\n",(0,s.jsx)(i.h2,{id:"\u7c21\u55ae\u4e00\u9ede",children:"\u7c21\u55ae\u4e00\u9ede"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://arxiv.org/abs/2108.10904",children:"SimVLM: Simple Visual Language Model Pretraining with Weak Supervision (2021.08)"})})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:"\u7576\u4e00\u4ef6\u4e8b\u60c5\u767c\u5c55\u5f97\u592a\u904e\u8907\u96dc\uff0c\u5c31\u6703\u8b93\u4eba\u671b\u4e4b\u537b\u6b65\uff1a"}),"\n",(0,s.jsx)(i.p,{children:"\u4e00\u5b9a\u8981\u641e\u6210\u9019\u6a23\u55ce\uff1f"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u9019\u500b\u7576\u4e0b\uff0c GPT3 \u5df2\u7d93\u554f\u4e16\u4e86\uff0c\u4e26\u4e14\u53d6\u5f97\u76f8\u7576\u4e0d\u932f\u7684\u8868\u73fe\uff0c\u800c\u4e14\u4ed6\u5011\u4e26\u6c92\u6709\u628a\u6574\u4ef6\u4e8b\u60c5\u641e\u5f97\u9019\u9ebc\u8907\u96dc\u5440\uff01"}),"\n",(0,s.jsx)(i.p,{children:"\u672c\u8ad6\u6587\u7684\u4f5c\u8005\u57fa\u65bc\u9019\u500b\u60f3\u6cd5\uff0c\u8a8d\u70ba\u4e0d\u8981\u518d\u62d8\u6ce5\u65bc\u539f\u672c\u7684\u7de8\u78bc\u5668\u7684\u67b6\u69cb\u4e86\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u6216\u8a31\uff0c\u6211\u5011\u53ef\u4ee5\u8b93\u6574\u4ef6\u4e8b\u60c5\u7c21\u55ae\u4e00\u9ede\uff1f"}),"\n",(0,s.jsx)(i.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,s.jsx)(i.p,{children:"\u4f5c\u8005\u5b9a\u7fa9\u7684\u554f\u984c\u5305\u62ec\u4ee5\u4e0b\u5e7e\u9ede\uff1a"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u9810\u8a13\u7df4\u5fae\u8abf\u7bc4\u5f0f\u7684\u7f3a\u9677"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u96d6\u7136\u5229\u7528\u63a9\u78bc\u8a9e\u8a00\u5efa\u6a21 (MLM) \u5728\u5927\u898f\u6a21\u672a\u6a19\u8a18\u6587\u5b57\u8a9e\u6599\u5eab\u4e0a\u9810\u8a13\u7df4\u6a21\u578b\uff08\u4f8b\u5982 BERT\uff09\u5f8c\u9032\u884c\u5fae\u8abf\u5df2\u6210\u70ba\u4e3b\u6d41\uff0c\u4f46\u8fd1\u671f\u7684\u81ea\u56de\u6b78\u8a9e\u8a00\u6a21\u578b\uff0c\u5982\uff1aGPT-3\uff0c\u986f\u793a\u51fa\u5728\u7121\u9700\u5fae\u8abf\u7684\u60c5\u6cc1\u4e0b\uff0c\u4f7f\u7528\u5c11\u91cf\u8cc7\u6599\u5373\u80fd\u9054\u5230\u5f37\u5927\u7684\u6027\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u591a\u6a21\u5f0f\u5c0d\u61c9\u7684\u6311\u6230"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u5617\u8a66\u5efa\u7acb\u8996\u89ba\u548c\u6587\u5b57\u7684\u591a\u6a21\u5f0f\u5c0d\u61c9\uff0c\u4f46\u8981\u6355\u6349\u5f71\u50cf\u548c\u6587\u5b57\u4e4b\u9593\u7684\u5c0d\u9f4a\u4e26\u4e0d\u5bb9\u6613\u3002\u65e9\u671f\u7684\u65b9\u6cd5\u901a\u5e38\u4f9d\u8cf4\u65bc\u4eba\u5de5\u6a19\u8a18\u7684\u8cc7\u6599\u96c6\uff0c\u9032\u884c\u7269\u4ef6\u5075\u6e2c\u548c\u878d\u5408\u6a21\u578b\u7684 MLM \u9810\u8a13\u7df4\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u7531\u65bc\u4eba\u985e\u8a3b\u91cb\u8cc7\u6599\u7684\u898f\u6a21\u6709\u9650\uff0c\u5148\u524d\u7684\u65b9\u6cd5\u4e0d\u50c5\u9700\u8981\u4f7f\u7528\u8907\u96dc\u7684\u9810\u8a13\u7df4\u65b9\u6848\uff0c\u9084\u8981\u5f15\u5165\u7279\u5b9a\u65bc\u4efb\u52d9\u7684\u8f14\u52a9\u640d\u5931\uff0c\u4f7f\u6574\u500b VLP \u7684\u9810\u8a13\u7df4\u5354\u8b70\u8b8a\u5f97\u66f4\u70ba\u8907\u96dc\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u7f3a\u4e4f\u96f6\u6a23\u672c\u80fd\u529b"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u76ee\u524d\u57fa\u65bc\u9810\u8a13\u7df4\u5fae\u8abf\u7684\u65b9\u6cd5\u5728\u96f6\u6a23\u672c\u80fd\u529b\u65b9\u9762\u8868\u73fe\u4e0d\u4f73\uff0c\u5373\u6a21\u578b\u5728\u6c92\u6709\u770b\u904e\u7684\u65b0\u4efb\u52d9\u4e0a\u7684\u6cdb\u5316\u80fd\u529b\u53d7\u9650\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u4e00\u4e9b\u65b9\u6cd5\u53ea\u95dc\u6ce8\u7279\u5b9a\u7684\u4efb\u52d9\uff0c\u56e0\u6b64\u4e0d\u5bb9\u6613\u88ab\u7528\u4f5c\u901a\u7528\u7684\u9810\u8a13\u7df4\u5fae\u8abf\u8868\u793a\u3002\u4f8b\u5982\uff1a\u67d0\u4e9b\u65b9\u6cd5\u53ea\u5c08\u6ce8\u65bc\u5f71\u50cf\u5206\u985e\u6216\u5716\u6587\u6aa2\u7d22\u7684\u7279\u5b9a\u4efb\u52d9\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,s.jsx)(i.h3,{id:"simvlm-\u6a21\u578b\u8a2d\u8a08",children:"SimVLM \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"model_arch",src:e(39874).A+"",width:"1224",height:"704"})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"PrefixLM"})}),"\n",(0,s.jsx)(i.p,{children:"\u53d7\u5230\u55ae\u5411\u8a9e\u8a00\u6a21\u578b\u6240\u5e36\u4f86\u7684\u96f6\u6a23\u672c\u80fd\u529b\u555f\u767c\uff0c\u4f5c\u8005\u63d0\u51fa\u4e86\u4e00\u7a2e\u65b0\u7684\u65b9\u6cd5\uff0c\u7a31\u70ba\u300c\u524d\u7db4\u8a9e\u8a00\u5efa\u6a21\u300d\u6216\u300cPrefixLM\u300d\u3002\u8207\u50b3\u7d71\u7684\u55ae\u5411\u8a9e\u8a00\u6a21\u578b\u4e0d\u540c\uff0cPrefixLM \u6709\u5e7e\u500b\u7279\u6027\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u96d9\u5411\u95dc\u6ce8\u65bc\u524d\u7db4\u5e8f\u5217"}),"\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:"PrefixLM \u4e0d\u50c5\u8003\u616e\u524d\u7db4\u5e8f\u5217\u524d\u7684\u4e0a\u4e0b\u6587\uff0c\u9084\u8003\u616e\u5176\u5f8c\u7684\u4e0a\u4e0b\u6587\u3002\u9019\u610f\u5473\u8457\u5b83\u540c\u6642\u5f9e\u904e\u53bb\u548c\u672a\u4f86\u7684\u4fe1\u606f\u4e2d\u5b78\u7fd2\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u81ea\u8ff4\u6b78\u5206\u89e3\u7684\u7bc4\u570d"}),"\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:"\u53ea\u6709\u5728\u524d\u7db4\u4e4b\u5f8c\u7684\u90e8\u5206\uff0cPrefixLM \u9032\u884c\u81ea\u8ff4\u6b78\u5206\u89e3\uff0c\u4e5f\u5c31\u662f\u5617\u8a66\u9810\u6e2c\u63a5\u4e0b\u4f86\u7684\u5e8f\u5217\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u5716\u50cf\u4f5c\u70ba\u6587\u5b57\u7684\u524d\u7db4"}),"\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e2d\uff0cPrefixLM \u7684\u53e6\u4e00\u500b\u91cd\u8981\u7279\u6027\u662f\u5b83\u5c07\u5716\u50cf\u8996\u70ba\u6587\u5b57\u63cf\u8ff0\u7684\u524d\u7db4\u3002\u9019\u662f\u57fa\u65bc\u89c0\u5bdf\u5230\u5716\u50cf\u5f80\u5f80\u5728\u6587\u672c\u63cf\u8ff0\u4e4b\u524d\u51fa\u73fe\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsx)(i.p,{children:"\u5047\u8a2d\u6211\u5011\u6709\u4e00\u5f35\u5716\u7247\uff0c\u5716\u7247\u4e2d\u986f\u793a\u7684\u662f\u4e00\u53ea\u72d7\u6b63\u5728\u516c\u5712\u88e1\u73a9\u7403\u3002PrefixLM \u7684\u4efb\u52d9\u5c31\u662f\u5f9e\u7d66\u5b9a\u9019\u5f35\u5716\u7247\uff0c\u751f\u6210\u63cf\u8ff0\u9019\u5f35\u5716\u7247\u7684\u6587\u5b57\uff0c\u6574\u9ad4\u7684\u8655\u7406\u6b65\u9a5f\u53ef\u80fd\u6703\u9577\u9019\u500b\u6a23\u5b50\uff1a"}),(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u5716\u50cf\u4f5c\u70ba\u524d\u7db4\uff1a\u9996\u5148\uff0c\u6211\u5011\u5c07\u5716\u7247\u7684\u7279\u5fb5\u8868\u793a\uff08\u53ef\u80fd\u662f\u901a\u904e\u67d0\u7a2e\u8996\u89ba\u6a21\u578b\uff0c\u4f8b\u5982\uff1aResNet \u6216 VGG\uff09\u4f5c\u70ba\u524d\u7db4\u8f38\u5165\u5230\u6a21\u578b\u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4e00\u90e8\u5206\u7684\u6587\u5b57\u63cf\u8ff0\uff1a\u6709\u4e86\u9019\u5f35\u5716\u7247\u4f5c\u70ba\u524d\u7db4\uff0c\u9084\u8981\u642d\u914d\u4e00\u6bb5\u7c21\u77ed\u7684\u63cf\u8ff0\uff0c\u4f8b\u5982\uff1a\u300c\u4e00\u53ea\u72d7\u2026\u300d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u8003\u616e\u96d9\u5411\u4e0a\u4e0b\u6587\uff0c\u5f9e\u89e3\u78bc\u5668\u958b\u59cb\u751f\u6210\u63cf\u8ff0\uff1a\u5b83\u4e0d\u50c5\u8003\u616e\u5230\u76ee\u524d\u70ba\u6b62\u751f\u6210\u7684\u6587\u5b57\uff08\u4f8b\u5982\uff1a\u300c\u4e00\u53ea\u72d7\u300d\uff09\uff0c\u9084\u8003\u616e\u5230\u5716\u7247\u7684\u524d\u7db4\u4fe1\u606f\u3002\u56e0\u6b64\uff0c\u7576\u6a21\u578b\u8a66\u5716\u751f\u6210\u8a5e\u8a9e\u6642\uff0c\u5b83\u4e0d\u50c5\u5f9e\u300c\u4e00\u53ea\u72d7\u300d\u9019\u500b\u4e0a\u4e0b\u6587\u7372\u53d6\u4fe1\u606f\uff0c\u9084\u5f9e\u5716\u7247\u4e2d\u7372\u53d6\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u7e7c\u7e8c\u751f\u6210\u63cf\u8ff0\uff1a\u8003\u616e\u5230\u4e0a\u8ff0\u7684\u4e0a\u4e0b\u6587\uff0c\u6a21\u578b\u53ef\u80fd\u6703\u751f\u6210\u300c\u516c\u5712\u88e1\u73a9\u7403\u300d\u3002"}),"\n"]}),"\n"]}),(0,s.jsx)(i.p,{children:"\u6240\u4ee5\uff0c\u7d50\u5408\u5716\u7247\u524d\u7db4\u548c\u751f\u6210\u7684\u6587\u5b57\uff0c\u6211\u5011\u5f97\u5230\u4e86\u5b8c\u6574\u7684\u63cf\u8ff0\uff1a\u300c\u4e00\u53ea\u72d7\u6b63\u5728\u516c\u5712\u88e1\u73a9\u7403\u3002\u300d"})]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u67b6\u69cb\u8a2d\u8a08"})}),"\n",(0,s.jsx)(i.p,{children:"\u4f7f\u7528 Transformer \u4f5c\u70ba\u6838\u5fc3\u67b6\u69cb\uff0c\u7528 Encoder-Decoder \u7684\u5e8f\u5217\u5230\u5e8f\u5217\u8a9e\u8a00\u6a21\u578b\uff0c\u7d50\u5408\u4e86\u8996\u89ba\u6a21\u584a\u548c\u6587\u672c\u6a21\u584a\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u8996\u89ba\u6a21\u584a"})}),"\n",(0,s.jsx)(i.p,{children:"\u9019\u88e1\u5c31\u662f ViT\uff0c\u4f46\u6709\u4e9b\u5dee\u7570\uff0cViT \u5728\u4e00\u958b\u59cb\u662f\u900f\u904e\u4e00\u500b Linear \u5c64\uff0c\u628a\u5f71\u50cf\u7684 patch \u8f49\u6210\u7279\u5fb5\uff0c\u800c\u5728\u9019\u908a\u5247\u662f\u628a Linear \u7684\u90e8\u5206\u63db\u6210 ResNet\u3002\u539f\u672c\u7684 ViT \u53ea\u63a5\u53d7\u5f71\u50cf\u7684\u8f38\u5165\uff0c\u4f46\u9019\u908a\u5247\u662f\u628a\u4e00\u90e8\u5206\u7684\u6587\u5b57\u8f38\u5165\u4e32\u9032\u53bb token \u5e8f\u5217\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u6587\u672c\u6a21\u584a"})}),"\n",(0,s.jsx)(i.p,{children:"\u9019\u88e1\u9075\u5faa SentencePiece \u7684\u5206\u8a5e\u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f Byte-Pair Encoding (BPE) \u65b9\u6cd5\uff0c\u9019\u7a2e\u65b9\u6cd5\u9996\u5148\u5c07\u6587\u672c\u5207\u5206\u6210\u5b57\u7b26\uff0c\u7136\u5f8c\u53cd\u8986\u5408\u4f75\u6700\u5e38\u898b\u7684\u5b57\u7b26\u5c0d\u6210\u70ba\u65b0\u7684\u55ae\u4f4d\uff0c\u76f4\u5230\u9054\u5230\u9810\u5b9a\u7684\u8a5e\u5f59\u5927\u5c0f\uff0c\u7136\u5f8c\u91dd\u5c0d\u56fa\u5b9a\u7684\u8a5e\u5f59\u9032\u884c\u5b78\u7fd2\u7de8\u78bc\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsx)(i.p,{children:"\u7b49\u7b49\uff01\u9019\u67b6\u69cb\uff0c\u770b\u8d77\u4f86\u5c31\u50cf\u662f VL-T5 \uff01"}),(0,s.jsx)(i.p,{children:"\u8b93\u6211\u5011\u628a VL-T5 \u7684\u67b6\u69cb\u62ff\u51fa\u4f86\u770b\u4e00\u4e0b\uff1a"}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"vl-t5",src:e(72834).A+"",width:"1224",height:"296"})}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4ed6\u5011\u90fd\u6709 Encoder-Decoder"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4ed6\u5011\u90fd\u5728 Encoder \u52a0\u5165\u5716\u50cf\u8cc7\u8a0a\u548c\u6587\u5b57\u8cc7\u8a0a"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4ed6\u5011\uff0c\u771f\u7684\u4e0d\u4e00\u6a23\uff01"}),"\n"]}),"\n"]}),(0,s.jsx)(i.p,{children:"\u4e4d\u770b\u4e4b\u4e0b\u5f88\u50cf\uff0c\u4f46\u5be6\u969b\u4e0a\u5dee\u5f88\u591a\u3002"}),(0,s.jsxs)(i.p,{children:["\u5728 VL-T5 \u4e2d\uff0c",(0,s.jsx)(i.strong,{children:"\u4f7f\u7528\u7269\u4ef6\u5075\u6e2c\u5668\u7684\u8f38\u51fa"}),"\uff0c\u628a\u88c1\u5207\u51fa\u4f86\u7684\u5f71\u50cf\u7247\u6bb5\u7d66\u6a21\u578b\u770b\u3002\u540c\u6642\uff0c\u52a0\u4e0a\u5169\u6bb5\u6587\u5b57\u7684\u6558\u8ff0\uff1a"]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u7b2c\u4e00\u6bb5\uff1a\u4e5f\u5c31\u662f prefix\uff0c\u544a\u8a34\u6a21\u578b\u8981\u89e3\u6c7a\u7684\u554f\u984c\u985e\u578b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u7b2c\u4e8c\u6bb5\uff1a\u554f\u984c\u7684\u672c\u9ad4\u3002"}),"\n"]}),"\n"]}),(0,s.jsx)(i.p,{children:"\u900f\u904e\u5169\u6bb5\u6587\u5b57\u52a0\u4e0a\u5f71\u50cf\u7247\u6bb5\uff0c\u8b93\u6a21\u578b\u5f9e\u300c\u5f88\u591a\u500b\u7269\u4ef6\u300d\u4e2d\uff0c\u627e\u5230\u7b26\u5408\u6587\u5b57\u7684\u63cf\u8ff0\uff0c\u4e26\u4e14\u4f7f\u7528 Decoder \u8f38\u51fa\u7d50\u679c\u3002"}),(0,s.jsx)(i.p,{children:"\u9019\u6a23\u7684\u8a2d\u8a08\u628a\u5927\u90e8\u5206\u7684\u56f0\u96e3\u90fd\u7559\u7d66 Encoder\uff0c\u53cd\u89c0 Decoder \u5728\u9019\u88e1\u7684\u8655\u5883\u5341\u5206\u5c37\u5c2c\uff0c\u751a\u81f3\u53ef\u4ee5\u628a Decoder \u62ff\u6389\uff0c\u7136\u5f8c\u5728 Encoder \u7684\u90e8\u5206\u5916\u52a0\u4e00\u500b [CLS] \u7684 Token \u7d66\u4ed6\uff0c\u8b93\u4ed6\u53bb\u56de\u7b54\u554f\u984c\uff0c\u8aaa\u4e0d\u5b9a\u4e5f\u80fd\u9054\u5230\u5dee\u4e0d\u591a\u7684\u8868\u73fe\u3002"})]}),"\n",(0,s.jsx)(i.p,{children:"\u63a5\u8457\u56de\u4f86\u770b SimVLM\uff0c\u4ed6\u4e26\u6c92\u6709\u628a\u554f\u984c\u90fd\u7559\u5728 Encoder\uff0c\u5728\u6211\u5011\u770b\u4f86\uff0c\u4ed6\u66f4\u50cf\u662f\u71df\u9020\u4e86\u4e00\u500b\u300c\u6848\u767c\u73fe\u5834\u300d\uff0c\u5728\u9019\u88e1\u7684 Decoder \u50cf\u662f\u5075\u63a2\u7684\u89d2\u8272\uff0c\u4ed6\u5fc5\u9808\u900f\u904e Encoder \u7559\u4e0b\u4f86\u7684\u86db\u7d72\u99ac\u8de1\uff0c\u8a66\u8457\u63a8\u7406\u51fa\u5f8c\u7e8c\u7684\u7d50\u679c\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u751a\u81f3\uff0c\u6839\u64da\u4f5c\u8005\u6240\u8a00\uff1a",(0,s.jsx)(i.strong,{children:"\u9019\u88e1\u7684\u63d0\u5230\u300c\u524d\u7db4\u300d\u7684\u5f71\u50cf\u7dda\u7d22\uff0c\u751a\u81f3\u53ef\u4ee5\u4e0d\u7528\u4f86\u81ea\u5f71\u50cf\uff0c\u4f60\u8981\u8f38\u5165\u4e00\u6bb5\u7528\u4f86\u300c\u63cf\u8ff0\u5f71\u50cf\u7684\u6587\u5b57\u300d\u4f5c\u70ba\u7dda\u7d22"}),"\uff0c\u4e5f\u662f\u5b8c\u5168\u6c92\u554f\u984c\u7684\uff01"]}),"\n",(0,s.jsx)(i.p,{children:"\u4e5f\u5c31\u662f\u9019\u500b\u8a2d\u8a08\u4e0a\u7684\u5dee\u7570\uff0c\u5728\u5f8c\u7e8c\u7684\u4e0b\u6e38\u4efb\u52d9\u4e2d\uff0c\u5c45\u7136\u6709\u63d0\u5347\u5c07\u8fd1 10 \u500b\u767e\u5206\u9ede\u7684\u8868\u73fe\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\u9810\u8a13\u7df4\u7b56\u7565",children:"\u9810\u8a13\u7df4\u7b56\u7565"}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsx)(i.p,{children:"\u9019\u88e1\u6c92\u6709 MLM\uff0c\u6c92\u6709 ITM\uff0c\u6c92\u6709\u90a3\u4e9b\u4f60\u4ee5\u70ba\u61c9\u8a72\u8981\u6709\u7684\u6771\u897f\u3002"}),(0,s.jsx)(i.p,{children:"\u4f5c\u8005\u5728\u9019\u908a\u7684\u9810\u8a13\u7df4\u5c31\u53ea\u662f\u63a1\u7528\u300cPrefixLM\u300d\u7b56\u7565\uff0c\u4e5f\u5c31\u662f\u52a0\u4e0a\u5f71\u50cf\u7dda\u7d22\u4e4b\u5f8c\uff0c\u50cf\u662f GPT \u9019\u6a23\uff0c\u53bb\u73a9\u6587\u5b57\u63a5\u9f8d\u904a\u6232\u3002"}),(0,s.jsx)(i.p,{children:"\u54ce\u5440\uff01\u7c21\u55ae\u5230\u8b93\u6211\u63aa\u624b\u4e0d\u53ca\u2026\u2026"})]}),"\n",(0,s.jsx)(i.h3,{id:"\u8cc7\u6599\u96c6",children:"\u8cc7\u6599\u96c6"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"ALIGN \u8a13\u7df4\u8cc7\u6599\u96c6"}),"\uff1a\u4e00\u500b\u6db5\u84cb\u5716\u50cf\u8207\u5176\u76f8\u95dc\u63cf\u8ff0\u6216\u6587\u5b57\u6a19\u6ce8\uff0c\u4e14\u5e36\u6709\u300c\u5927\u91cf\u96dc\u8a0a\u300d\u7684\u5927\u578b\u8cc7\u6599\u96c6\u3002\u9019\u7a2e\u5716\u50cf-\u6587\u5b57\u914d\u5c0d\u7684\u8cc7\u6599\u96c6\u901a\u5e38\u7528\u65bc\u8996\u89ba\u8a9e\u8a00\u9810\u8a13\u7df4\uff0c\u652f\u6301\u591a\u6a21\u614b\u5b78\u7fd2\u4efb\u52d9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Colossal Clean Crawled Corpus (C4)"}),"\uff1aC4 \u662f\u4e00\u500b\u5927\u578b\u7684\u6587\u672c\u8cc7\u6599\u96c6\uff0c\u4e3b\u8981\u7528\u65bc\u9810\u8a13\u7df4\u8a9e\u8a00\u6a21\u578b\u3002\u8a72\u8cc7\u6599\u96c6\u662f\u5f9e\u7db2\u9801\u6587\u672c\u4e2d\u6574\u7406\u548c\u6de8\u5316\u7684\uff0c\u4e26\u5c08\u70ba\u9ad8\u6548\u548c\u5927\u898f\u6a21\u7684\u9810\u8a13\u7df4\u800c\u8a2d\u8a08\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,s.jsx)(i.h3,{id:"\u6a21\u578b\u6548\u679c\u5982\u4f55",children:"\u6a21\u578b\u6548\u679c\u5982\u4f55\uff1f"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"result",src:e(38845).A+"",width:"1024",height:"407"})}),"\n",(0,s.jsx)(i.p,{children:"SimVLM \u53ef\u4ee5\u5229\u7528\u5176\u7c21\u5316\u7684\u9810\u8a13\u7df4\u548c\u5fae\u8abf\u65b9\u6cd5\u4f86\u9054\u5230\u51fa\u8272\u7684\u6027\u80fd\uff0c\u5b83\u53ef\u4ee5\u7121\u7e2b\u5730\u61c9\u7528\u65bc\u9810\u8a13\u7df4\u5fae\u8abf\u7684\u6d41\u7a0b\u4e2d\uff1a"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u6a21\u578b\u6bd4\u8f03"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"SimVLM \u88ab\u8207\u591a\u500b\u5148\u9032\u7684\u8996\u89ba\u8a9e\u8a00\u9810\u8a13\u7df4 (VLP) \u65b9\u6cd5\u6bd4\u8f03\uff0c\u9019\u5305\u62ec\uff1aLXMERT\u3001VL-T5\u3001UNITER\u3001OSCAR\u3001Villa\u3001SOHO\u3001UNIMO \u548c VinVL\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u5728\u591a\u6a21\u614b\u4efb\u52d9\u4e0a\uff0cSimVLM \u7684\u6027\u80fd\u8d85\u8d8a\u4e86\u6240\u6709\u6bd4\u8f03\u7684\u6a21\u578b\uff0c\u8a2d\u5b9a\u4e86\u65b0\u7684 SOTA \u7d50\u679c\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u8a72\u7d50\u679c\u6307\u51fa SimVLM \u7684\u751f\u6210\u9810\u8a13\u7df4\u65b9\u6cd5\u5177\u6709\u7af6\u722d\u529b\uff0c\u4e14\u5176\u5f31\u76e3\u7763\u7684\u7c21\u55ae\u6846\u67b6\u80fd\u5920\u5b78\u7fd2\u9ad8\u54c1\u8cea\u7684\u591a\u6a21\u614b\u8868\u793a\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u7279\u5b9a\u4efb\u52d9\u4e0a\u7684\u8868\u73fe"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u5224\u5225\u4efb\u52d9"})}),"\n",(0,s.jsx)(i.p,{children:"\u5373\u4f7f\u5bb9\u91cf\u8f03\u5c0f\uff0cSimVLMbase \u4e5f\u512a\u65bc\u6240\u6709\u5176\u4ed6\u65b9\u6cd5\u3002\u7279\u5225\u662f SimVLMhuge \u5728 VQA \u4efb\u52d9\u4e0a\u300c\u9996\u6b21\u9054\u5230\u8d85\u904e 80%\u300d \u7684\u6027\u80fd\uff0c\u6bd4\u5148\u524d\u7684 SOTA (VinVL) \u63d0\u5347\u4e86\u8fd1 4 \u5206\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u8907\u96dc\u7684\u8996\u89ba\u8a9e\u8a00\u63a8\u7406"})}),"\n",(0,s.jsx)(i.p,{children:"SimVLM \u5728 NLVR2 \u548c SNLI-VE \u4e0a\u7684\u8868\u73fe\u5747\u512a\u65bc\u5148\u524d\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u751f\u6210\u4efb\u52d9"})}),"\n",(0,s.jsx)(i.p,{children:"SimVLM \u986f\u793a\u4e86\u986f\u8457\u7684\u6539\u9032\uff0c\u7279\u5225\u662f\u5728 CoCo \u5b57\u5e55\u7684\u300cKarpathy\u300d5k \u6e2c\u8a66\u5206\u5272\u548c NoCaps \u57fa\u6e96\u4e0a\uff0c\u5176\u6027\u80fd\u8d85\u8d8a\u4e86\u4f7f\u7528\u66f4\u8907\u96dc\u7684 CIDEr \u512a\u5316\u5f37\u5316\u5b78\u7fd2\u65b9\u6cd5\u7684\u5148\u524d\u6a21\u578b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u5716\u50cf\u7ffb\u8b6f"})}),"\n",(0,s.jsx)(i.p,{children:"SimVLM \u4e5f\u5728 Multi30k \u7684\u82f1\u8a9e\u5230\u5fb7\u8a9e\u7684\u5716\u50cf\u7ffb\u8b6f\u4efb\u52d9\u4e0a\u5c55\u73fe\u51fa\u6548\u679c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"zero-shot-\u7684\u8868\u73fe",children:"Zero-shot \u7684\u8868\u73fe\uff1f"}),"\n",(0,s.jsx)(i.p,{children:"\u4f5c\u8005\u5728\u9019\u908a\u4e3b\u8981\u63a2\u7d22\u4e86\u4e09\u7a2e\u96f6\u6a23\u672c\u7684\u61c9\u7528\u65b9\u5f0f\uff0c\u5177\u9ad4\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u96f6\u6a23\u672c/\u5c11\u6a23\u672c\u5716\u7247\u6a19\u984c\u751f\u6210"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"result1",src:e(17716).A+"",width:"1024",height:"492"})}),"\n",(0,s.jsx)(i.p,{children:"SimVLM \u7684\u9810\u8a13\u7df4\u904e\u7a0b\u53ef\u4ee5\u8996\u70ba\u5c0d\u7db2\u8def\u4e0a\u7684\u5f71\u50cf\u5b57\u5e55\u76ee\u6a19\u7684\u89e3\u91cb\u3002\u7576\u7528\u65bc\u96f6\u6a23\u672c\u6216\u5c11\u6a23\u672c\u8a2d\u5b9a\u6642\uff0c\u9019\u7a2e\u6a21\u578b\u7684\u6548\u679c\u8207\u5b8c\u5168\u76e3\u7763\u6a21\u578b\u76f8\u5ab2\u7f8e\u3002\u800c\u4f7f\u7528\u67d0\u4e9b\u524d\u7f00\u63d0\u793a\uff0c\u5982\uff1a\u300cA picture of\u300d\uff0c\u53ef\u4ee5\u63d0\u9ad8\u5b57\u5e55\u8cea\u91cf\u3002\u6a21\u578b\u5177\u6709\u5f37\u5927\u7684\u6cdb\u5316\u80fd\u529b\uff0c\u4e0d\u50c5\u80fd\u5920\u8b58\u5225\u771f\u5be6\u4e16\u754c\u7684\u6982\u5ff5\uff0c\u9084\u80fd\u5c0d\u8996\u89ba\u8f38\u5165\u63d0\u4f9b\u8a73\u7d30\u7684\u63cf\u8ff0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u96f6\u6a23\u672c\u8de8\u6a21\u614b\u50b3\u8f38"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"result2",src:e(63627).A+"",width:"1024",height:"506"})}),"\n",(0,s.jsx)(i.p,{children:"SimVLM\uff0c\u4e00\u7a2e VLP \u6a21\u578b\uff0c\u88ab\u7528\u65bc\u9019\u9805\u7814\u7a76\u3002\u7531\u65bc\u6587\u5b57\u8a13\u7df4\u8cc7\u6599\u7684\u6210\u672c\u901a\u5e38\u4f4e\u65bc\u8996\u89ba\u8cc7\u6599\uff0c\u56e0\u6b64\u8a72\u6a21\u578b\u5728\u7d14\u6587\u5b57\u8cc7\u6599\u4e0a\u9032\u884c\u4e86\u5fae\u8abf\uff0c\u4e4b\u5f8c\u518d\u8a55\u4f30\u5176\u5728\u806f\u5408\u8996\u89ba-\u8a9e\u8a00\u4efb\u52d9\u4e0a\u7684\u6548\u80fd\u3002\u9019\u7a2e\u65b9\u6cd5\u5728 SNLI-VE \u548c Multi30k \u8cc7\u6599\u96c6\u4e0a\u5f97\u5230\u4e86\u9a57\u8b49\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5c24\u5176\u5728 SNLI-VE \u7684\u61c9\u7528\u4e2d\uff0cSimVLM \u901a\u904e\u5728\u6587\u5b57 NLI \u8cc7\u6599\u96c6\u4e0a\u7684\u5fae\u8abf\uff0c\u7136\u5f8c\u518d\u5c07\u5716\u50cf\u8cc7\u6599\u4f5c\u70ba\u8f38\u5165\uff0c\u9054\u5230\u4e86\u4ee4\u4eba\u6eff\u610f\u7684\u96f6\u6a23\u672c\u50b3\u8f38\u6548\u679c\uff0c\u8207\u5176\u4ed6\u5b8c\u5168\u76e3\u7763\u65b9\u6cd5\u5177\u6709\u53ef\u6bd4\u6027\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u7576\u5c4f\u853d\u5716\u50cf\u7279\u5fb5\u53ea\u4f7f\u7528\u5047\u8a2d\u9032\u884c\u9810\u6e2c\u6642\uff0c\u8a72\u6a21\u578b\u7684\u8868\u73fe\u8207\u96a8\u6a5f\u731c\u6e2c\u76f8\u4f3c\uff0c\u78ba\u8a8d\u4e86 SimVLM \u5728\u8de8\u6a21\u614b\u50b3\u8f38\u4e0a\u7684\u6709\u6548\u6027\u3002\u6b64\u5916\uff0c\u8a72\u6a21\u578b\u9084\u6210\u529f\u5730\u5f9e\u4e00\u7a2e\u6a21\u614b\u548c\u8a9e\u8a00\u8f49\u79fb\u5230\u53e6\u4e00\u7a2e\uff0c\u8b49\u660e\u4e86\u5176\u5728\u8de8\u57df\u548c\u8de8\u8a9e\u8a00\u4e0a\u7684\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u958b\u653e\u5f0f\u8996\u89ba\u554f\u7b54"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"result3",src:e(42498).A+"",width:"1024",height:"487"})}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u8996\u89ba\u554f\u7b54\uff08VQA\uff09\u4efb\u52d9\u4e0a\uff0c\u50b3\u7d71\u65b9\u6cd5\u901a\u5e38\u5c07\u554f\u984c\u8868\u8ff0\u70ba\u5c0d\u4e00\u5957\u9810\u5b9a\u7fa9\u7684 3,129 \u500b\u5019\u9078\u7b54\u6848\u9032\u884c\u591a\u6a19\u7c64\u5206\u985e\u3002\u7136\u800c\uff0c\u9019\u7a2e\u65b9\u6cd5\u5728\u73fe\u5be6\u61c9\u7528\u4e2d\u53d7\u5230\u9650\u5236\uff0c\u56e0\u70ba\u56fa\u5b9a\u7684\u7b54\u6848\u96c6\u5f88\u96e3\u6db5\u84cb\u6240\u6709\u53ef\u80fd\u7684\u60c5\u5883\uff0c\u9019\u4f7f\u5f97\u958b\u653e\u5f0f VQA \u8b8a\u5f97\u5177\u6709\u6311\u6230\u6027\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5be6\u9a57\u7d50\u679c\u986f\u793a\uff0cSimVLM \u5728\u958b\u653e\u5f0f VQA \u4e0a\u8868\u73fe\u51fa\u8272\u3002\u5b83\u4e0d\u50c5\u5728\u90a3\u4e9b\u7b54\u6848\u4e0d\u5728\u9810\u5b9a\u7fa9\u5019\u9078\u7b54\u6848\u4e2d\u7684\u554f\u984c\u4e0a\u8d85\u8d8a\u4e86\u5176\u4ed6\u57fa\u7dda\u6a21\u578b\uff0c\u800c\u4e14\u5373\u4f7f\u53ea\u4f7f\u7528\u90e8\u5206\u7684\u9810\u5b9a\u7fa9\u7b54\u6848\u9032\u884c\u8a13\u7df4\uff0c\u5b83\u4ecd\u80fd\u5728\u672a\u898b\u904e\u7684\u7b54\u6848\u4e0a\u8868\u73fe\u826f\u597d\u3002\u4f46\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u6a21\u578b\u4e0d\u9032\u884c\u5fae\u8abf\uff0c\u5b83\u5728\u67d0\u4e9b\u554f\u984c\u4e0a\u53ef\u80fd\u7121\u6cd5\u751f\u6210\u6709\u610f\u7fa9\u7684\u7b54\u6848\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\u8ab0\u7684\u8ca2\u737b",children:"\u8ab0\u7684\u8ca2\u737b\uff1f"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"ablation",src:e(7033).A+"",width:"1002",height:"824"})}),"\n",(0,s.jsx)(i.p,{children:"\u9996\u5148\uff0c\u7576\u6a21\u578b\u53ea\u6709\u89e3\u78bc\u5668\u800c\u6c92\u6709\u96d9\u5411\u7de8\u78bc\u5668\u6642\uff0c\u5176\u5728\u8996\u89ba\u554f\u7b54\uff08VQA\uff09\u7684\u8868\u73fe\u660e\u986f\u4e0b\u6ed1\u3002\u9019\u6a23\u7684\u7d50\u679c\u610f\u5473\u8457\uff0c\u7d50\u5408\u96d9\u5411\u7684\u7de8\u78bc\u65b9\u5f0f\u548c\u55ae\u5411\u7684\u89e3\u78bc\u7b56\u7565\u662f\u4e00\u500b\u5c0d\u6a21\u578b\u6548\u80fd\u6709\u6b63\u9762\u5f71\u97ff\u7684\u7b56\u7565\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u63a5\u8457\uff0c\u7814\u7a76\u767c\u73fe\u5728\u9810\u8a13\u7df4\u7684\u76ee\u6a19\u4e2d\uff0cPrefixLM \u7684\u65b9\u6cd5\u6bd4\u5176\u4ed6\u7b56\u7565\u66f4\u70ba\u51fa\u8272\u3002\u9019\u4e0d\u50c5\u8aaa\u660e\u4e86PrefixLM \u7684\u6709\u6548\u6027\uff0c\u66f4\u9032\u4e00\u6b65\u8868\u793a\uff0c\u5728\u8655\u7406\u8996\u89ba\u548c\u6587\u672c\u8cc7\u6599\u6642\uff0c\u6709\u4e00\u5957\u7d71\u4e00\u548c\u4e00\u81f4\u7684\u76ee\u6a19\u516c\u5f0f\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u53e6\u5916\uff0c\u6a21\u578b\u5728\u8a13\u7df4\u904e\u7a0b\u4e2d\uff0c\u96d6\u7136\u9700\u8981\u6709\u5f31\u5c0d\u9f4a\u7684\u5716\u50cf\u6587\u5b57\u8cc7\u6599\u4ee5\u5e6b\u52a9\u6a21\u578b\u7406\u89e3\u8996\u89ba\u548c\u6587\u672c\u4e4b\u9593\u7684\u95dc\u4fc2\uff0c\u4f46\u540c\u6642\uff0c\u7d14\u6587\u5b57\u7684\u8a9e\u6599\u5eab\u4e5f\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u3002\u9019\u56e0\u70ba\u7d14\u6587\u5b57\u8a9e\u6599\u5eab\u80fd\u63d0\u4f9b\u8c50\u5bcc\u7684\u8a9e\u8a00\u8cc7\u8a0a\uff0c\u5e6b\u52a9\u6a21\u578b\u7372\u5f97\u66f4\u6df1\u5165\u7684\u8a9e\u8a00\u7406\u89e3\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u6700\u5f8c\uff0c\u7814\u7a76\u5f37\u8abf\u4e86\u5377\u7a4d\u968e\u6bb5\u5728\u8996\u89ba\u8a9e\u8a00\uff08VL\uff09\u4efb\u52d9\u4e2d\u7684\u91cd\u8981\u6027\u3002\u7279\u5225\u662f\u7576\u4f7f\u7528\u4e09\u500b\u5377\u7a4d\uff08conv\uff09\u5340\u584a\u6642\uff0c\u6a21\u578b\u7684\u6548\u80fd\u8868\u73fe\u6700\u70ba\u7a81\u51fa\u3002\u9019\u500b\u7d50\u679c\u63ed\u793a\u4e86\u5f71\u50cf\u548c\u6587\u672c\u8cc7\u6599\u5728\u8868\u793a\u6642\uff0c\u5177\u6709\u4e0d\u540c\u7684\u7c92\u5ea6\u548c\u7279\u9ede\uff0c\u56e0\u6b64\uff0c\u5728\u6a21\u578b\u67b6\u69cb\u4e2d\u8003\u616e\u9019\u4e9b\u5dee\u7570\u6027\u662f\u5f88\u6709\u5e6b\u52a9\u7684\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(i.p,{children:"\u900f\u904e\u4e00\u500b\u5982\u6b64\u7c21\u55ae\u7684\u67b6\u69cb\uff0c\u5c45\u7136\u80fd\u9054\u5230\u5982\u6b64\u7684\u7d50\u679c\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u4f46\u9019\u6a23\u7684\u7c21\u55ae\u6027\u4e26\u4e0d\u610f\u5473\u8457\u6613\u65bc\u88ab\u767c\u73fe\u6216\u5be6\u73fe\u3002SimVLM \u7684\u6210\u529f\u5c31\u662f\u5c0d\u9019\u4e00\u539f\u5247\u7684\u6700\u4f73\u8b49\u660e\u3002\u9019\u7bc7\u8ad6\u6587\u6240\u5c55\u793a\u7684\uff0c\u4e0d\u50c5\u662f\u4e00\u7a2e\u6548\u679c\u5353\u8d8a\u7684\u6280\u8853\u7b56\u7565\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5b83\u544a\u8a34\u6211\u5011\u5373\u4f7f\u5728\u7576\u4eca\u9019\u500b\u770b\u4f3c\u8907\u96dc\u7684\u6280\u8853\u4e16\u754c\u4e2d\uff0c\u4ecd\u6709\u53ef\u80fd\u627e\u5230\u7c21\u55ae\u800c\u76f4\u63a5\u7684\u89e3\u6c7a\u65b9\u6848\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5f88\u591a\u6642\u5019\uff0c\u4eba\u5011\u90fd\u6703\u81ea\u7136\u800c\u7136\u5730\u8a8d\u70ba\u8907\u96dc\u7684\u554f\u984c\u9700\u8981\u8907\u96dc\u7684\u89e3\u6c7a\u65b9\u6848\u3002\u7576 SimVLM \u4ee5\u5176\u7c21\u6f54\u7684\u300cPrefixLM\u300d\u7b56\u7565\u51fa\u73fe\uff0c\u5b83\u6253\u7834\u4e86\u9019\u4e00\u56fa\u6709\u7684\u601d\u7dad\u6a21\u5f0f\uff0c\u4e26\u70ba\u5f8c\u7e8c\u7684\u7814\u7a76\u63d0\u4f9b\u4e86\u4e00\u500b\u6e05\u6670\u7684\u65b9\u5411\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u6211\u5011\u53ef\u4ee5\u8a66\u8457\u767c\u60f3\u4e00\u4e0b\uff0c\u57fa\u65bc SimVLM \u7684\u512a\u7570\u6027\u80fd\uff0c\u672a\u4f86\u7684\u7814\u7a76\u8005\u53ef\u4ee5\u5617\u8a66\u5f9e ViT \u7684\u89d2\u5ea6\u9032\u884c\u512a\u5316\uff0c\u7562\u7adf ViT \u5df2\u7d93\u6709\u4e86\u9019\u9ebc\u591a\u7684\u9032\u5316\u5f62\u614b\uff1b\u6216\u8005\u5f9e GPT \u7684\u7b56\u7565\u4e0a\u9032\u4e00\u6b65\u6df1\u5316\uff0c\u90fd\u6709\u53ef\u80fd\u518d\u7e7c\u7e8c\u63a8\u52d5\u6574\u500b\u8996\u89ba\u8a9e\u8a00\u9810\u8a13\u7df4\u9818\u57df\u7684\u9032\u4e00\u6b65\u767c\u5c55\u3002"})]})}function t(n={}){const{wrapper:i}={...(0,l.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},39874:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/simvlm_1-974d9e80d7b4943767c8686ce2d485a3.jpg"},38845:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/simvlm_2-080a074d01c13a7a04e90dd07b296b06.png"},17716:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/simvlm_3-bc7b69f887e5d30b149a0bf76edd3999.png"},63627:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/simvlm_4-3f82f33f16f582275279c32de216898e.png"},42498:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/simvlm_5-3c215f6bdd6cd9611fa201a4bc9f45c3.png"},7033:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/simvlm_6-19b0d20d66a698c693749537deb31989.png"},72834:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/vlt5_2-d4ad3c84bf0acfb645076c8d79e4be97.jpg"},28453:(n,i,e)=>{e.d(i,{R:()=>d,x:()=>c});var s=e(96540);const l={},r=s.createContext(l);function d(n){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(r.Provider,{value:i},n.children)}}}]);