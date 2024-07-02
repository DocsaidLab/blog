"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4833],{86909:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var s=i(74848),r=i(28453);const d={},l="[20.10] ViT",c={id:"vit/index",title:"[20.10] ViT",description:"\u65b0\u4e16\u754c\u62d3\u8352\u8005",source:"@site/papers/2010-vit/index.md",sourceDirName:"2010-vit",slug:"/vit/",permalink:"/papers/vit/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719893441e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[20.10] AutoPrompt",permalink:"/papers/autoprompt/"},next:{title:"[20.12] DeiT",permalink:"/papers/deit/"}},h={},t=[{value:"\u65b0\u4e16\u754c\u62d3\u8352\u8005",id:"\u65b0\u4e16\u754c\u62d3\u8352\u8005",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u6a21\u578b\u67b6\u69cb",id:"\u6a21\u578b\u67b6\u69cb",level:3},{value:"Patchify",id:"patchify",level:3},{value:"\u7136\u5f8c\u5462\uff1f",id:"\u7136\u5f8c\u5462",level:3},{value:"\u6c92\u6709\u6b78\u7d0d\u504f\u5dee",id:"\u6c92\u6709\u6b78\u7d0d\u504f\u5dee",level:3},{value:"\u8a13\u7df4\u8cc7\u6599\u5fc5\u9808\u5927",id:"\u8a13\u7df4\u8cc7\u6599\u5fc5\u9808\u5927",level:3},{value:"\u9084\u80fd\u518d\u66f4\u5927",id:"\u9084\u80fd\u518d\u66f4\u5927",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"ViT \u770b\u5230\u4e86\u4ec0\u9ebc\uff1f",id:"vit-\u770b\u5230\u4e86\u4ec0\u9ebc",level:3},{value:"\u7528 [CLS] \u9810\u6e2c\u9084\u662f\u7528 GAP \u9810\u6e2c\uff1f",id:"\u7528-cls-\u9810\u6e2c\u9084\u662f\u7528-gap-\u9810\u6e2c",level:3},{value:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9805",id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9805",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function x(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2010-vit",children:"[20.10] ViT"}),"\n",(0,s.jsx)(e.h2,{id:"\u65b0\u4e16\u754c\u62d3\u8352\u8005",children:"\u65b0\u4e16\u754c\u62d3\u8352\u8005"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://arxiv.org/abs/2010.11929",children:(0,s.jsx)(e.strong,{children:"An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"})})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u5728 2017 \u5e74\uff0cTransformer \u6a21\u578b\u63d0\u51fa\u5f8c\uff0c\u5728 NLP \u9818\u57df\u5167\u6380\u8d77\u4e00\u9663\u72c2\u6f6e\uff0c\u970e\u6642\u9593\u4fbf\u70fd\u706b\u9023\u5929\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u9663\u98a8\u5439\u4e86\u4e09\u5e74\uff0c\u7d42\u65bc\u628a\u785d\u7159\u4e5f\u5439\u9032\u4e86\u96fb\u8166\u8996\u89ba\u9818\u57df\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u524d\u5e7e\u5e74\u7684\u5617\u8a66\u4e2d\uff0c\u8a31\u591a\u7814\u7a76\u5617\u8a66\u5c07\u6ce8\u610f\u529b\u6a5f\u5236\u8207\u5377\u7a4d\u7db2\u8def\u7d50\u5408\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6216\u662f\u5728\u4fdd\u6301\u5377\u7a4d\u7db2\u8def\u7684\u7d50\u69cb\u4e0d\u8b8a\u7684\u524d\u63d0\u4e0b\uff0c\u66ff\u63db\u6389\u67d0\u4e9b\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u4e9b\u7814\u7a76\u90fd\u6697\u793a\u8457 Transformer \u67b6\u69cb\u6c92\u6709\u8fa6\u6cd5\u76f4\u63a5\u751f\u642c\u786c\u5957\u5230\u5716\u50cf\u9818\u57df\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u7bc7\u8ad6\u6587\u7684\u4f5c\u8005\u8a8d\u70ba\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u90a3\u53ea\u662f\u4f60\u5011\u7684\u65b9\u6cd5\u4e0d\u5c0d\uff01"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5011\u5b8c\u5168\u53ef\u4ee5\u6368\u68c4\u5377\u7a4d\uff0c\u76f4\u63a5\u7528 Transformer \u4f86\u8655\u7406\u5716\u50cf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5716\u50cf\u9019\u4ef6\u4e8b\uff0c\u4e0d\u904e\u5c31\u662f 16 x 16 \u7684\u6587\u5b57\u96c6\u5408\u7f77\u4e86\uff01"}),"\n",(0,s.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,s.jsx)(e.h3,{id:"\u6a21\u578b\u67b6\u69cb",children:"\u6a21\u578b\u67b6\u69cb"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"arch",src:i(66090).A+"",width:"1472",height:"772"})}),"\n",(0,s.jsx)(e.p,{children:"\u8aaa\u5230 Transformer\uff0c\u6211\u5011\u90fd\u5f88\u719f\u6089\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u628a\u6587\u5b57\u7d93\u904e Embedding \u5f8c\uff0c\u6392\u6210\u4e00\u500b\u5e8f\u5217\uff0c\u7136\u5f8c\u4e1f\u9032 Encoder\uff0c\u518d\u7d93\u904e Decoder\uff0c\u6700\u5f8c\u8f38\u51fa\u7d50\u679c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7576\u6211\u5011\u60f3\u5728\u5716\u50cf\u4e0a\u5957\u7528\u9019\u500b\u67b6\u69cb\uff0c\u9996\u5148\u8981\u601d\u8003\u7684\u554f\u984c\u662f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u8a72\u600e\u9ebc\u628a\u5716\u50cf\u8f49\u63db\u6210\u6587\u5b57\u5e8f\u5217\uff1f"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u9019\u88e1\uff0c\u4f5c\u8005\u63d0\u51fa\u7684\u65b9\u6cd5\u662f\uff1a\u5207\u584a\u5427\uff01"}),"\n",(0,s.jsx)(e.h3,{id:"patchify",children:"Patchify"}),"\n",(0,s.jsx)(e.p,{children:"\u7d66\u5b9a\u4e00\u5f35\u5716\u50cf\uff0c\u5047\u8a2d\u5176\u5c3a\u5bf8\u70ba 224 x 224\uff0c\u8a66\u60f3\u8a72\u5982\u4f55\u628a\u4ed6\u5011\u5207\u6210\u4e00\u584a\u4e00\u584a\u7684\u5340\u57df\u5462\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u624b\u52d5\u5207\u55ce\uff1f\u7576\u7136\u4e0d\u662f\uff01"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u88e1\u4f5c\u8005\u5f15\u5165\u4e00\u500b Conv2d \u7684\u64cd\u4f5c\uff0c\u5c31\u5b8c\u6210\u4e86\u9019\u500b\u4efb\u52d9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u76f4\u63a5\u4f86\u5be6\u4f5c\u4e00\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import torch\nimport torch.nn as nn\n\n# \u5047\u8a2d\u5716\u50cf\u5c3a\u5bf8\u70ba 224 x 224\ndummy_img = torch.randn(1, 3, 224, 224)\n\n# \u5207\u584a\npatch_size = 16\n\n# \u7de8\u78bc\u7dad\u5ea6\nembed_dim = 768\n\n# Patchify\nemb_layer = nn.Conv2d(3, embed_dim, kernel_size=patch_size, stride=patch_size)\n\n# \u5207\u584a\u5f8c\u7684\u7d50\u679c\uff1a\n# input.shape = (1, 3, 224, 224)\n# tokens.shape = (1, 768, 14, 14)\ntokens = emb_layer(dummy_img)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u88e1\u6211\u5011\u8a2d\u5b9a\u5207\u584a\u5716\u50cf\u7684\u5c3a\u5bf8\u70ba 16 x 16\uff0c\u4e26\u4e14\u8a2d\u5b9a\u7de8\u78bc\u7dad\u5ea6\u70ba 768\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u900f\u904e\u5377\u7a4d\u7684 stride \u9032\u884c\u4e0d\u91cd\u758a\u6ed1\u52d5\u8996\u7a97\uff0c\u5c31\u53ef\u4ee5\u5c07 224 x 224 \u7684\u5716\u50cf\u5207\u6210 14 x 14 \u584a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u539f\u672c\u7684 Transformer \u4e2d\uff0c\u6211\u5011\u6703\u5c07\u6587\u5b57\u5e8f\u5217\u7684\u6bcf\u500b token \u9032\u884c Embedding\uff0c\u9019\u88e1\u4e5f\u662f\u4e00\u6a23\u7684\u3002\u5c07\u6bcf\u500b\u5207\u584a\u7684\u5716\u50cf\u9032\u884c Embedding\uff0c\u610f\u601d\u5c31\u662f\u628a\u6bcf\u500b 16 x 16 x 3 \u7684\u5340\u57df\u8f49\u63db\u7d93\u904e\u7dda\u6027\u8f49\u63db\uff0c\u6295\u5f71\u5230 768 \u7dad\u7684\u5411\u91cf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u5f8c\u6211\u5011\u628a\u9019\u4e9b\u5207\u584a\u7684\u7d50\u679c\u5c55\u5e73\uff0c\u8b8a\u6210\u4e00\u500b\u5e8f\u5217\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"tokens = tokens.flatten(2) # (1, 768, 14, 14) -> (1, 768, 196)\ntokens = tokens.permute(2, 0, 1) # (1, 768, 196) -> (196, 1, 768)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Transformer encoder \u4e2d\uff0c\u8f38\u5165\u7684\u7b2c\u4e00\u500b\u7dad\u5ea6\u662f\u5e8f\u5217\u7684\u9577\u5ea6\uff0c\u7b2c\u4e8c\u500b\u7dad\u5ea6\u662f batch size\uff0c\u7b2c\u4e09\u500b\u7dad\u5ea6\u662f\u7279\u5fb5\u7de8\u78bc\u9577\u5ea6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7d93\u904e\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u6211\u5011\u5c31\u5f97\u5230\u53ef\u4ee5\u4e1f\u9032 Transformer \u7684\u8f38\u5165\u5e8f\u5217\u4e86\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u7136\u5f8c\u5462",children:"\u7136\u5f8c\u5462\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u7136\u5f8c\u5c31\u7d50\u675f\u4e86\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e4b\u5f8c\u5c31\u8ddf NLP \u7684 Transformer \u4e00\u6a23\uff0c\u60f3\u600e\u6a23\u5c31\u600e\u6a23\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5361\uff01\u4e0d\u5c0d\uff0c\u4e0d\u80fd\u9019\u9ebc\u65e9\u7d50\u675f\uff01"}),"\n",(0,s.jsx)(e.p,{children:"\uff0a"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u8868\u70ba ViT \u7684\u53c3\u6578\u8a2d\u5b9a\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"params",src:i(84472).A+"",width:"1224",height:"332"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6c92\u6709\u6b78\u7d0d\u504f\u5dee",children:"\u6c92\u6709\u6b78\u7d0d\u504f\u5dee"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Transformer \u7684\u67b6\u69cb\u4e2d\uff0c\u4e26\u6c92\u6709\u5c0d\u65bc\u5716\u7247\u7684\u6b78\u7d0d\u504f\u5dee\uff08inductive bias\uff09\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 ViT \u4e2d\uff0c\u53ea\u6709 MLP \u5c64\u662f\u5c40\u90e8\u548c\u5e73\u79fb\u4e0d\u8b8a\u7684\uff0c\u540c\u6642\u81ea\u6ce8\u610f\u529b\u6a5f\u5236\u662f\u5168\u5c40\u7684\uff0c\u4e8c\u7dad\u9130\u57df\u7684\u7d50\u69cb\u95dc\u4fc2\u975e\u5e38\u5c11\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u6b64\u6a21\u578b\u5fc5\u9808\u91cd\u982d\u958b\u59cb\u5b78\u7fd2\u4e26\u7406\u89e3\uff1a\u4ec0\u9ebc\u662f\u5716\u50cf\uff1f\u6240\u8b02\u5716\u50cf\u7684\u7279\u5fb5\u53c8\u662f\u4ec0\u9ebc\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u4e5f\u662f\u70ba\u4ec0\u9ebc\u5f9e Transformer \u5230 ViT \u7684\u6642\u9593\u9700\u8981\u9019\u9ebc\u9577\u7684\u539f\u56e0\uff0c\u5927\u90e8\u5206\u7684\u65e9\u671f\u7814\u7a76\u90fd\u6c92\u6709\u505a\u51fa\u6bd4\u5377\u7a4d\u7db2\u8def\u66f4\u597d\u7684\u7d50\u679c\uff0c\u6545\u800c\u4e0d\u4e86\u4e86\u4e4b\u3002"}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5377\u7a4d\u7db2\u8def\u7684\u6b78\u7d0d\u504f\u5dee\u662f\u4ec0\u9ebc\uff1f"})}),(0,s.jsx)(e.p,{children:"\u5377\u7a4d\u7db2\u8def\u7684\u6b78\u7d0d\u504f\u5dee\u662f\u6307\uff0c\u5377\u7a4d\u7db2\u8def\u5728\u8a2d\u8a08\u4e0a\uff0c\u5c0d\u65bc\u5716\u50cf\u7684\u5e73\u79fb\u4e0d\u8b8a\u6027\u548c\u5c40\u90e8\u6027\u6709\u8457\u5f88\u5f37\u7684\u504f\u597d\u3002\u9019\u7a2e\u504f\u597d\u662f\u901a\u904e\u5377\u7a4d\u6838\u7684\u8a2d\u8a08\u5be6\u73fe\u7684\uff0c\u5377\u7a4d\u6838\u7684\u5171\u4eab\u6b0a\u91cd\u548c\u5c40\u90e8\u611f\u53d7\u91ce\uff0c\u4f7f\u5f97\u5377\u7a4d\u7db2\u8def\u80fd\u5920\u6355\u6349\u5230\u5716\u50cf\u7684\u5c40\u90e8\u7279\u5fb5\uff0c\u4e26\u4e14\u5c0d\u65bc\u5716\u50cf\u7684\u5e73\u79fb\u4e0d\u8b8a\u6027\u6709\u8457\u5f88\u597d\u7684\u6027\u80fd\uff0c\u4e26\u4e14\u5bb9\u6613\u6cdb\u5316\u5230\u5176\u4ed6\u5716\u50cf\u8fa8\u8b58\u4efb\u52d9\u4e0a\u3002"})]}),"\n",(0,s.jsx)(e.h3,{id:"\u8a13\u7df4\u8cc7\u6599\u5fc5\u9808\u5927",children:"\u8a13\u7df4\u8cc7\u6599\u5fc5\u9808\u5927"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"data",src:i(92341).A+"",width:"1224",height:"748"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f9e\u5be6\u9a57\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u5982\u679c\u8a13\u7df4\u8cc7\u6599\u7684\u898f\u6a21\u4e0d\u5920\u5927\uff0cViT \u7684\u6548\u679c\u6703\u6bd4\u5377\u7a4d\u7db2\u8def\u5dee\u5f88\u591a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u5716\u4e2d\uff0c\u7070\u8272\u7684\u7dda\u8868\u793a ResNet50x1 (BiT) \u548c ResNet152x2 (BiT) \u7684\u7d50\u679c\uff0c\u800c\u5176\u4ed6\u984f\u8272\u7684\u7dda\u5247\u662f ViT \u7684\u7d50\u679c\u3002\u5e95\u4e0b\u6a6b\u8ef8\u662f\u8a13\u7df4\u8cc7\u6599\u91cf\uff0c\u7576\u8cc7\u6599\u91cf\u4f86\u5230 300M \u6642\uff0cViT \u7684\u6548\u679c\u7d42\u65bc\u8d85\u8d8a\u5377\u7a4d\u7db2\u8def\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u8a8d\u70ba\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u5728\u5c0f\u8cc7\u6599\u96c6\u4e0a\uff0c\u5377\u7a4d\u7db2\u8def\u7684\u6b78\u7d0d\u504f\u5dee\u662f\u5f88\u91cd\u8981\u7684\u3002"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u5728\u5927\u8cc7\u6599\u96c6\u4e0a\uff0c\u76f4\u63a5\u5f9e\u8cc7\u6599\u4e2d\u5b78\u7fd2\u76f8\u95dc\u7684\u6a21\u5f0f\u5c31\u8db3\u5920\u4e86\uff01"})}),"\n"]}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsx)(e.p,{children:"ViT \u6a21\u578b\u7684\u95b1\u8b80\u65b9\u5f0f\uff1a"}),(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ViT-L/16\uff1aLarge \u6a21\u578b\uff0c16 x 16 \u7684\u5207\u584a"}),"\n",(0,s.jsx)(e.li,{children:"ViT-L/32\uff1aLarge \u6a21\u578b\uff0c32 x 32 \u7684\u5207\u584a"}),"\n"]}),(0,s.jsx)(e.p,{children:"\u5207\u584a\u7684\u5927\u5c0f\u6108\u5c0f\uff0c\u7de8\u78bc\u7684\u89e3\u6790\u5ea6\u6108\u9ad8\uff0c\u6a21\u578b\u7684\u6548\u679c\u6108\u597d\uff0c\u4f46\u662f\u8a08\u7b97\u91cf\u4e5f\u6108\u5927\uff0c\u5448\u5e73\u65b9\u95dc\u4fc2\u589e\u9577\u3002"})]}),"\n",(0,s.jsx)(e.h3,{id:"\u9084\u80fd\u518d\u66f4\u5927",children:"\u9084\u80fd\u518d\u66f4\u5927"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"scale",src:i(7915).A+"",width:"1224",height:"524"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4e00\u76f4 Train \u4e0b\u53bb\uff0c\u6703\u600e\u6a23\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u9019\u500b\u5be6\u9a57\u4e2d\uff0c\u4f5c\u8005\u4f7f\u7528\u4e86 3 \u500b\u4e0d\u540c\u7684\u6a21\u578b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ViT"}),"\n",(0,s.jsx)(e.li,{children:"ResNet"}),"\n",(0,s.jsx)(e.li,{children:"Hybrid Model"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5be6\u9a57\u7d50\u679c\u986f\u793a\uff0c\u7576\u8a13\u7df4\u8cc7\u6599\u91cf\u8db3\u5920\u5927\u6642\uff0cViT \u7684\u6548\u679c\u6703\u8d85\u8d8a ResNet\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u540c\u6642 Hybrid Model \u5728\u5c0f\u6a21\u578b\u4e0a\u7684\u6548\u679c\u6703\u6bd4 ViT \u7a0d\u5fae\u597d\u4e00\u9ede\uff0c\u4f46\u662f\u7576\u6a21\u578b\u8b8a\u5927\u6642\uff0c\u9019\u7a2e\u5dee\u7570\u5c31\u6d88\u5931\u4e86\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u5f8c\uff0cViT \u5728\u5617\u8a66\u7684\u7bc4\u570d\u5167\u4e26\u672a\u98fd\u548c\uff0c\u9019\u5176\u4e2d\u986f\u7136\u9084\u6709\u5f88\u591a\u6f5b\u529b\u53ef\u4ee5\u6316\u6398\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u4eba\u5011\u53ef\u80fd\u6703\u671f\u671b\u5377\u7a4d\u5c40\u90e8\u7279\u5fb5\u8655\u7406\u80fd\u5920\u5e6b\u52a9\u4efb\u4f55\u5927\u5c0f\u7684 ViT\uff0c\u4f46\u662f\u6c92\u6709\u3002"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"result",src:i(29870).A+"",width:"1224",height:"608"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,s.jsx)(e.h3,{id:"vit-\u770b\u5230\u4e86\u4ec0\u9ebc",children:"ViT \u770b\u5230\u4e86\u4ec0\u9ebc\uff1f"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"what",src:i(36985).A+"",width:"1654",height:"500"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u5c07\u7b2c\u4e00\u5c64\u5c07\u5f71\u50cf\u7247\u6bb5\uff08patches\uff09\u6295\u5f71\u5230\u4f4e\u7dad\u7a7a\u9593\uff0c\u53d6\u51fa\u524d 28 \u500b\u4e3b\u6210\u4efd\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Self-attention\uff08\u4e0a\u5716\u5de6\uff09"})}),"\n",(0,s.jsx)(e.p,{children:"ViT \u901a\u904e\u81ea\u6211\u6ce8\u610f\u529b\u6a5f\u5236\uff0c\u80fd\u5920\u6574\u5408\u5f71\u50cf\u7684\u6574\u9ad4\u4fe1\u606f\uff0c\u5373\u4f7f\u5728\u6700\u4f4e\u5c64\u4e5f\u662f\u5982\u6b64\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\u529b\u6b0a\u91cd\u7528\u65bc\u8a08\u7b97\u5f71\u50cf\u7a7a\u9593\u4e2d\u4fe1\u606f\u6574\u5408\u7684\u5e73\u5747\u8ddd\u96e2\uff0c\u9019\u985e\u4f3c\u65bc CNN \u4e2d\u7684\u611f\u53d7\u91ce\u5927\u5c0f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6a21\u578b\u5c55\u793a\u4e86\u5728\u6700\u4f4e\u5c64\u4e2d\u5c0d\u5927\u90e8\u5206\u5f71\u50cf\u7684\u95dc\u6ce8\uff0c\u8aaa\u660e\u5176\u5168\u5c40\u6574\u5408\u4fe1\u606f\u7684\u80fd\u529b\u3002\u800c\u5176\u4ed6\u6ce8\u610f\u529b\u982d\u5728\u4f4e\u5c64\u7684\u95dc\u6ce8\u5247\u66f4\u5c40\u90e8\u5316\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Position Embeddings\uff08\u4e0a\u5716\u4e2d\uff09"})}),"\n",(0,s.jsx)(e.p,{children:"\u7a7a\u9593\u4e0a\u8f03\u8fd1\u7684\u5340\u584a\u5177\u6709\u76f8\u4f3c\u7684 embeddings\uff0c\u8868\u793a\u9019\u4e9b embeddings \u80fd\u5920\u7de8\u78bc\u5f71\u50cf\u5167\u90e8\u5404\u5340\u584a\u4e4b\u9593\u7684\u8ddd\u96e2\u95dc\u4fc2\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5f9e embeddings \u4e2d\u770b\u5230\u770b\u5230\u884c\u5217\u7d50\u69cb\uff0c\u5c0d\u65bc\u8f03\u5927\u7684\u7db2\u683c\uff0c\u6709\u6642\u89c0\u5bdf\u5230\u986f\u8457\u7684\u6b63\u5f26\u7d50\u69cb\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6ce8\u610f\u529b\u8ddd\u96e2\uff08\u4e0a\u5716\u53f3\uff09"})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u7a2e\u300c\u6ce8\u610f\u529b\u8ddd\u96e2\u300d\u985e\u4f3c\u65bc CNN \u4e2d\u7684\u611f\u53d7\u91ce\u5927\u5c0f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8f03\u4f4e\u5c64\u4e2d\u5404\u500b\u982d\u90e8\u7684\u5e73\u5747\u6ce8\u610f\u529b\u8ddd\u96e2\u8b8a\u5316\u5f88\u5927\uff0c\u6709\u4e9b\u982d\u90e8\u95dc\u6ce8\u5f71\u50cf\u7684\u5927\u90e8\u5206\uff0c\u800c\u5176\u4ed6\u982d\u90e8\u5247\u5c08\u6ce8\u65bc\u67e5\u8a62\u4f4d\u7f6e\u6216\u9644\u8fd1\u7684\u5c0f\u5340\u57df\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u96a8\u8457\u6df1\u5ea6\u7684\u589e\u52a0\uff0c\u6240\u6709\u982d\u90e8\u7684\u6ce8\u610f\u529b\u8ddd\u96e2\u90fd\u6703\u589e\u52a0\u3002 \u5728\u7db2\u8def\u7684\u5f8c\u534a\u90e8\u5206\uff0c\u5927\u591a\u6578\u982d\u90e8\u5ee3\u6cdb\u5e36\u6709\u9577\u6ce8\u610f\u529b\u8ddd\u96e2\uff0c\u9019\u8868\u660e\u4e86\u6a21\u578b\u5728\u9019\u4e9b\u5c64\u4e2d\u66f4\u591a\u5730\u95dc\u6ce8\u5168\u5c40\u4fe1\u606f\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7528-cls-\u9810\u6e2c\u9084\u662f\u7528-gap-\u9810\u6e2c",children:"\u7528 [CLS] \u9810\u6e2c\u9084\u662f\u7528 GAP \u9810\u6e2c\uff1f"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"cls",src:i(15932).A+"",width:"1224",height:"598"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u672c\u7bc7\u8ad6\u6587\u4e2d\uff0c\u4f5c\u8005\u4f7f\u7528\u4e86\u5169\u7a2e\u4e0d\u540c\u7684\u65b9\u6cd5\u4f86\u9032\u884c\u5206\u985e\u4efb\u52d9\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"[CLS] \u9810\u6e2c"})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u662f NLP \u4e2d\u5e38\u898b\u7684\u505a\u6cd5\uff0c\u5c07\u5e8f\u5217\u7684\u7b2c\u4e00\u500b token \u4f5c\u70ba\u6574\u500b\u5e8f\u5217\u7684\u8868\u793a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u7a2e\u65b9\u6cd5\u5728\u5716\u50cf\u9818\u57df\u4e2d\u4e5f\u53d6\u5f97\u4e86\u4e0d\u932f\u7684\u6548\u679c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"GAP \u9810\u6e2c"})}),"\n",(0,s.jsx)(e.p,{children:"GAP\uff08Global Average Pooling\uff09\u662f\u4e00\u7a2e\u5e38\u898b\u7684\u7279\u5fb5\u63d0\u53d6\u65b9\u6cd5\uff0c\u5c07\u7279\u5fb5\u5716\u7684\u6bcf\u500b\u901a\u9053\u9032\u884c\u5e73\u5747\uff0c\u5f97\u5230\u4e00\u500b\u5411\u91cf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u958b\u59cb\u4f5c\u8005\u662f\u7528\u9019\u7a2e\u65b9\u5f0f\uff0c\u4f46\u767c\u73fe\u6548\u679c\u975e\u5e38\u5dee\uff01"}),"\n",(0,s.jsx)(e.p,{children:"\u4ed4\u7d30\u5206\u6790\u5f8c\u767c\u73fe\uff0c\u554f\u984c\u4e0d\u662f GAP \u7684\u554f\u984c\uff0c\u800c\u662f\u300c\u5b78\u7fd2\u7387\u300d\u8a2d\u592a\u5927\u4e86\uff01"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u7d93\u904e\u8abf\u6574\u5f8c\uff0c\u5169\u7a2e\u9810\u6e2c\u65b9\u5f0f\u90fd\u53d6\u5f97\u4e86\u4e0d\u932f\u7684\u6548\u679c\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"\u5728\u6211\u5011\u7684\u7d93\u9a57\u4e2d\uff0cTransformer \u67b6\u69cb\u5c0d\u5b78\u7fd2\u7387\u975e\u5e38\u654f\u611f\uff0c\u9019\u5728 ViT \u4e2d\u4e5f\u662f\u5982\u6b64\u3002"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9805",children:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9805"}),"\n",(0,s.jsx)(e.p,{children:"\u9664\u4e86\u4e3b\u8981\u8ad6\u8ff0\u7684\u5167\u5bb9\u4e4b\u5916\uff0c\u9084\u6709\u4e00\u4e9b\u8a13\u7df4\u7684\u6280\u5de7\u548c\u6ce8\u610f\u4e8b\u9805\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528 0.1 \u7684 Weight Decay \u9032\u884c\u8a13\u7df4\uff0c\u4f5c\u8005\u767c\u73fe\u9019\u5c0d\u65bc\u5f8c\u7e8c\u4e0b\u6e38\u4efb\u52d9\u5f88\u6709\u5e6b\u52a9\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4f5c\u8005\u6a21\u4eff\u4e86 MLM \u7684\u8a13\u7df4\u65b9\u5f0f\uff0c\u767c\u73fe\u6548\u679c\u4e0d\u597d\uff0c\u4e4b\u5f8c\u9084\u5f97\u518d\u7814\u7a76\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7576\u8f38\u5165\u5f71\u50cf\u89e3\u6790\u5ea6\u6709\u8b8a\u52d5\u6642\uff0c\u6703\u5c0d\u61c9\u5730\u6539\u8b8a\u8f38\u5165\u5e8f\u5217\u7684\u9577\u5ea6\uff08\u56e0\u70ba Patch \u7684\u5c3a\u5bf8\u56fa\u5b9a\uff09\uff0c\u9019\u6642\u5019\u5fc5\u9808\u5c07\u5b78\u7fd2\u597d\u7684\u4f4d\u7f6e\u7de8\u78bc\u9032\u884c\u7dda\u6027\u63d2\u503c\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7528 Adam \u6703\u6bd4 SGD \u66f4\u597d\uff0c\u4f5c\u8005\u8a8d\u70ba\u9019\u662f\u56e0\u70ba Adam \u80fd\u5920\u66f4\u597d\u5730\u8655\u7406\u5b78\u7fd2\u7387\u7684\u554f\u984c\u3002\uff08\u73fe\u5728\u5927\u591a\u6539\u7528 AdamW\uff09"}),"\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528 1-D \u7684\u53ef\u5b78\u7fd2\u7684\u4f4d\u7f6e\u7de8\u78bc\uff0c\u6216\u662f 2-D \u7684\u53ef\u5b78\u7fd2\u7684\u4f4d\u7f6e\u7de8\u78bc\uff0c\u6216\u662f\u76f8\u5c0d\u4f4d\u7f6e\u908a\u7de8\u78bc\uff0c\u6c92\u6709\u592a\u5927\u7684\u5dee\u5225\uff0c\u4f46\u4e00\u5b9a\u8981\u9078\u4e00\u500b\uff0c\u5982\u679c\u90fd\u4e0d\u9078\uff0c\u6548\u679c\u6703\u5f88\u5dee\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u7bc7\u8ad6\u6587\u63a2\u7d22\u4e86 Transformer \u5728\u5716\u50cf\u9818\u57df\u7684\u61c9\u7528\uff0c\u63d0\u51fa\u4e86\u4e00\u7a2e\u5168\u65b0\u7684\u67b6\u69cb ViT\u3002"}),"\n",(0,s.jsx)(e.p,{children:"ViT \u5728\u5927\u8cc7\u6599\u96c6\u4e0a\u7684\u6548\u679c\u8d85\u8d8a\u4e86\u50b3\u7d71\u7684\u5377\u7a4d\u7db2\u8def\uff0c\u4e26\u4e14\u5728\u5be6\u9a57\u4e2d\u5c55\u73fe\u4e86\u66f4\u5927\u7684\u6f5b\u529b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u7bc7\u8ad6\u6587\u7684\u767c\u8868\uff0c\u6a19\u8a8c\u8457 Transformer \u67b6\u69cb\u5728\u5716\u50cf\u9818\u57df\u7684\u6210\u529f\u61c9\u7528\uff0c\u4e5f\u70ba\u672a\u4f86\u7684\u7814\u7a76\u958b\u555f\u4e86\u65b0\u7684\u65b9\u5411\u3002"})]})}function j(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},66090:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img1-e4df6921f628ba6819ec9fc778d6150e.jpg"},92341:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img2-c1d80181e8e6a9afb5e7c4b1ed9f0941.jpg"},84472:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img3-c3e287a1c047ee24e5f254dec9bff6b7.jpg"},7915:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img4-c6486156c2adc483b4526e2ec9f41f29.jpg"},29870:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img5-e3e59b7769f43255b07a34b40a54aa2c.jpg"},36985:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img6-51c223d1ccba5bf64a36cb3c07e9fdd2.jpg"},15932:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img7-493ec8fcb301917eb825b68df3dd31bb.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var s=i(96540);const r={},d=s.createContext(r);function l(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);