"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9478],{38020:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>x,toc:()=>h});var l=i(74848),s=i(28453);const r={},d="[20.04] Pixel-BERT",x={id:"pixelbert/index",title:"[20.04] Pixel-BERT",description:"\u50cf\u7d20\u4e4b\u8a9e",source:"@site/papers/2004-pixelbert/index.md",sourceDirName:"2004-pixelbert",slug:"/pixelbert/",permalink:"/papers/pixelbert/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[20.04] Oscar",permalink:"/papers/oscar/"},next:{title:"[20.05] DETR",permalink:"/papers/detr/"}},c={},h=[{value:"\u50cf\u7d20\u4e4b\u8a9e",id:"\u50cf\u7d20\u4e4b\u8a9e",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"Pixel-BERT \u6a21\u578b\u8a2d\u8a08",id:"pixel-bert-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u50cf\u7d20\u7279\u5fb5\u7de8\u78bc",id:"\u50cf\u7d20\u7279\u5fb5\u7de8\u78bc",level:3},{value:"\u53e5\u5b50\u7279\u5fb5\u7de8\u78bc",id:"\u53e5\u5b50\u7279\u5fb5\u7de8\u78bc",level:3},{value:"\u8de8\u6a21\u614b\u5b78\u7fd2",id:"\u8de8\u6a21\u614b\u5b78\u7fd2",level:3},{value:"\u9810\u8a13\u7df4\u65b9\u6cd5",id:"\u9810\u8a13\u7df4\u65b9\u6cd5",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"VQA \u7684\u8868\u73fe",id:"vqa-\u7684\u8868\u73fe",level:3},{value:"NLVR2 \u7684\u8868\u73fe",id:"nlvr2-\u7684\u8868\u73fe",level:3},{value:"Image-Text Retrieval",id:"image-text-retrieval",level:3},{value:"\u6a21\u578b\u7684\u95dc\u9375\u8a2d\u8a08\u662f\u4ec0\u9ebc\uff1f",id:"\u6a21\u578b\u7684\u95dc\u9375\u8a2d\u8a08\u662f\u4ec0\u9ebc",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function t(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"2004-pixel-bert",children:"[20.04] Pixel-BERT"}),"\n",(0,l.jsx)(e.h2,{id:"\u50cf\u7d20\u4e4b\u8a9e",children:"\u50cf\u7d20\u4e4b\u8a9e"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://arxiv.org/abs/2004.00849",children:(0,l.jsx)(e.strong,{children:"Pixel-BERT: Aligning Image Pixels with Text by Deep Multi-Modal Transformers"})})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u9019\u4e4b\u524d\uff0c\u7576\u6211\u5011\u8ac7\u8ad6\u8996\u89ba\u548c\u8a9e\u8a00\u6a21\u578b\u7684\u7d50\u5408\u6642\uff0c\u5927\u90e8\u5206\u7684\u7814\u7a76\u8005\u90fd\u6703\u63a1\u7528\u4e00\u5957\u7d04\u5b9a\u4fd7\u6210\u7684\u6a19\u6e96\u4f5c\u696d\u6d41\u7a0b\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u9996\u5148\u5229\u7528\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\u5982 Faster R-CNN \u4f86\u5f9e\u5f71\u50cf\u4e2d\u63d0\u53d6\u5340\u57df\u7279\u5fb5\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u7136\u5f8c\u7d50\u5408\u8a9e\u8a00\u6a21\u578b\u9032\u884c\u8de8\u6a21\u614b\u5b78\u7fd2\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6700\u5f8c\u958b\u59cb\u63a2\u8a0e\u8de8\u6a21\u614b\u5b78\u7fd2\u7684\u8a2d\u8a08\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u90a3\u2026\u2026"}),"\n",(0,l.jsx)(e.p,{children:"\u662f\u8ab0\u898f\u5b9a\u8981\u5728\u5916\u639b\u4e00\u500b\u300c\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\u300d\u5728\u5f71\u50cf\u7de8\u78bc\u6d41\u7a0b\u7684\u6700\u524d\u9762\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u53ef\u80fd\uff0c\u4e5f\u6c92\u6709\u4eba\u898f\u5b9a\uff0c\u53ea\u662f\u4e0d\u77e5\u4e0d\u89ba\u9593\u5927\u5bb6\u5c31\u9019\u9ebc\u505a\u4e86\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4e5f\u66fe\u7d93\u505a\u904e\u7814\u7a76\u4eba\u54e1\uff0c\u90a3\u5c31\u6703\u77e5\u9053\uff1a\u8981\u63d0\u51fa\u4e00\u7bc7\u7814\u7a76\u8ad6\u6587\u7684\u4e00\u500b\u6bd4\u8f03\u5bb9\u6613\u7684\u65b9\u5f0f\uff0c\u5c31\u662f\u4f9d\u5faa\u8457\u524d\u4eba\u7684\u8173\u6b65\uff0c\u7136\u5f8c\u9032\u884c\u6539\u826f\uff0c\u5617\u8a66\u63d0\u5347\u500b 1%~3% \u7684\u8868\u73fe\uff0c\u5c31\u53ef\u4ee5\u662f\u4e00\u7bc7\u512a\u79c0\u7684\u8ad6\u6587\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u7a2e\u60c5\u6cc1\u6703\u6301\u7e8c\u5230\u6709\u4e00\u500b\u7a81\u7834\u6027\u7684\u65b9\u6cd5\u88ab\u63d0\u51fa\u4f86\u6216\u662f\u8a55\u4f30\u8cc7\u6599\u96c6\u7684\u6548\u80fd\u98fd\u548c\u4e4b\u5f8c\uff0c\u624d\u6703\u9032\u5165\u4e0b\u4e00\u8f2a\u7684\u6539\u671d\u63db\u4ee3\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6216\u8a31\u5728\u672a\u4f86\u5e7e\u5e74\u5f8c\u7684\u65b0\u4e00\u4ee3\u7684\u7814\u7a76\u8005\u5011\u5c31\u6703\u63d0\u51fa\u7591\u554f\uff1a\u70ba\u4ec0\u9ebc\u300c\u4ee5\u524d\u300d\u7684\u90a3\u4e9b\u4eba\u5011\u90a3\u9ebc\u611b\u7528 Transformer \u5462\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u7bc7\u8ad6\u6587\u7684\u4f5c\u8005\u5247\u8a8d\u70ba\uff0c\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\u7684\u8a2d\u8a08\uff0c\u53ef\u80fd\u5f9e\u4e00\u958b\u59cb\u5c31\u932f\u4e86\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\u901a\u5e38\u662f\u91dd\u5c0d\u7279\u5b9a\u7684\u8996\u89ba\u4efb\u52d9\u8a2d\u8a08\u7684\uff0c\u9019\u53ef\u80fd\u6703\u5f15\u5165\u8207\u8a9e\u8a00\u7406\u89e3\u4e0d\u76f8\u7b26\u7684\u504f\u898b\uff0c\u5c24\u5176\u662f\u7576\u7269\u9ad4\u5075\u6e2c\u6a21\u578b\u7684\u8996\u89ba\u8868\u5fb5\u80fd\u529b\u53d7\u5230\u7279\u5b9a\u4efb\u52d9\u985e\u5225\u7684\u9650\u5236\u6642\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u800c Pixel-BERT \u63d0\u4f9b\u4e86\u4e00\u7a2e\u5168\u65b0\u7684\u8996\u89d2\u3002\u5b83\u4e0d\u518d\u4f9d\u8cf4\u65bc\u9810\u5148\u8a13\u7df4\u7684\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\uff0c\u800c\u662f\u76f4\u63a5\u5f9e\u5716\u50cf\u7684\u50cf\u7d20\u5b78\u7fd2\u8996\u89ba\u7de8\u78bc\u3002\u9019\u610f\u5473\u8457\u6a21\u578b\u80fd\u5920\u76f4\u63a5\u6355\u7372\u300c\u50cf\u7d20\u7d1a\u300d\u7684\u8996\u89ba\u4fe1\u606f\uff0c\u5305\u62ec\u5f62\u72c0\u3001\u7d0b\u7406\u548c\u7a7a\u9593\u95dc\u4fc2\uff0c\u9019\u4e9b\u4fe1\u606f\u5728\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\u4e2d\u53ef\u80fd\u6703\u4e1f\u5931\u3002\u518d\u52a0\u4e0a\u8a9e\u8a00\u7de8\u78bc\u7684\u90e8\u5206\uff0c\u8a72\u6a21\u578b\u80fd\u5920\u6709\u6548\u5730\u6355\u7372\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u7684\u5fae\u5999\u4ea4\u4e92\uff0c\u4e26\u5b78\u7fd2\u66f4\u8c50\u5bcc\u3001\u66f4\u7d30\u7dfb\u7684\u8de8\u6a21\u614b\u8868\u5fb5\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,l.jsx)(e.p,{children:"\u4f5c\u8005\u5728\u9019\u7bc7\u8ad6\u6587\u4e2d\u89c0\u5bdf\u548c\u5b9a\u7fa9\u4e86\u4ee5\u4e0b\u554f\u984c\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8de8\u6a21\u614b\u8a9e\u610f\u5dee\u8ddd"})}),"\n",(0,l.jsx)(e.p,{children:"\u7576\u524d\u8de8\u6a21\u614b\u5b78\u7fd2\uff08\u7279\u5225\u662f\u8996\u89ba\u8207\u8a9e\u8a00\u9593\uff09\u9762\u81e8\u8457\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u8a9e\u610f\u5dee\u8ddd\u7684\u6311\u6230\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8996\u89ba\u7279\u5fb5\u7684\u5c40\u9650\u6027"})}),"\n",(0,l.jsx)(e.p,{children:"\u5148\u524d\u7684\u65b9\u6cd5\u50be\u5411\u65bc\u4f7f\u7528\u57fa\u65bc\u5340\u57df\u7684\u8996\u89ba\u7279\u5fb5\uff0c\u5982\u5f9e\u7269\u4ef6\u6aa2\u6e2c\u6a21\u578b\u4e2d\u63d0\u53d6\u7684\u7279\u5fb5\u3002\u4f46\u9019\u4e9b\u57fa\u65bc\u5340\u57df\u7684\u7279\u5fb5\u63d0\u53d6\u5668\u4e3b\u8981\u662f\u70ba\u4e86\u7279\u5b9a\u7684\u8996\u89ba\u4efb\u52d9\u800c\u8a2d\u8a08\u7684\uff0c\u5c0e\u81f4\u8207\u8a9e\u8a00\u7406\u89e3\u4e4b\u9593\u5b58\u5728\u8cc7\u8a0a\u5dee\u8ddd\u3002\u4f8b\u5982\uff1a\u7269\u9ad4\u7684\u5f62\u72c0\u3001\u91cd\u758a\u7269\u9ad4\u4e4b\u9593\u7684\u7a7a\u9593\u95dc\u4fc2\u3001\u7269\u9ad4\u7684\u72c0\u614b\u7b49\u91cd\u8981\u8996\u89ba\u4fe1\u606f\u53ef\u80fd\u6703\u907a\u5931\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u73fe\u6709\u8996\u89ba\u7279\u5fb5\u7684\u5c40\u9650\u6027"})}),"\n",(0,l.jsx)(e.p,{children:"\u76ee\u524d\u4f7f\u7528\u7684\u57fa\u65bc\u5340\u57df\u7684\u8996\u89ba\u7279\u5fb5\u5728\u8996\u89ba\u8a9e\u7fa9\u7684\u8868\u793a\u4e0a\u6709\u6240\u5c40\u9650\u3002\u4f8b\u5982\uff1a\u7269\u4ef6\u5075\u6e2c\u6a21\u578b\u53ef\u80fd\u7121\u6cd5\u6355\u6349\u5230\u5834\u666f\u548c\u60c5\u611f\u7b49\u66f4\u5ee3\u6cdb\u7684\u8996\u89ba\u8a9e\u7fa9\u4fe1\u606f\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,l.jsx)(e.h3,{id:"pixel-bert-\u6a21\u578b\u8a2d\u8a08",children:"Pixel-BERT \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"Pixel-BERT \u6a21\u578b\u67b6\u69cb",src:i(21059).A+"",width:"1224",height:"628"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u65e9\u671f\u7684\u8996\u89ba\u548c\u8a9e\u8a00\u7d50\u5408\u6a21\u578b\u4e2d\uff0c\u4f7f\u7528\u7269\u4ef6\u6aa2\u6e2c\u6a21\u578b\uff0c\u5982\uff1aFaster R-CNN\uff0c\u5f9e\u5716\u50cf\u4e2d\u63d0\u53d6\u5340\u57df\u7279\u5fb5\u662f\u4e00\u7a2e\u5e38\u898b\u7684\u505a\u6cd5\u3002\u9019\u610f\u5473\u8457\u6a21\u578b\u6703\u641c\u5c0b\u5716\u7247\u4e2d\u7684\u7279\u5b9a\u7269\u4ef6\u6216\u4e3b\u9ad4\uff0c\u7136\u5f8c\u5c0d\u6bcf\u500b\u7269\u4ef6\u7684\u4f4d\u7f6e\u756b\u4e00\u500b\u908a\u754c\u6846\u3002\u9019\u4e9b\u908a\u754c\u6846\u5167\u7684\u50cf\u7d20\u503c\u5c07\u88ab\u7528\u4f5c\u7279\u5fb5\uff0c\u9032\u4e00\u6b65\u7528\u65bc\u6a21\u578b\u5b78\u7fd2\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f46\u9019\u7a2e\u65b9\u6cd5\u6709\u5176\u9650\u5236\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8cc7\u8a0a\u640d\u5931\uff1a\u908a\u754c\u6846\u53ef\u80fd\u6703\u5305\u62ec\u4e00\u4e9b\u7121\u95dc\u7684\u80cc\u666f\u6216\u5ffd\u7565\u90e8\u5206\u91cd\u8981\u7684\u7269\u4ef6\u90e8\u4f4d\uff0c\u5f9e\u800c\u5c0e\u81f4\u8cc7\u8a0a\u640d\u5931\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u7279\u5b9a\u4efb\u52d9\u7684\u4fb7\u9650\u6027\uff1a\u9019\u4e9b\u7269\u4ef6\u6aa2\u6e2c\u6a21\u578b\u662f\u70ba\u7279\u5b9a\u7684\u8996\u89ba\u4efb\u52d9\u8a2d\u8a08\u7684\uff0c\u4e26\u53ef\u80fd\u4e0d\u9069\u5408\u5176\u4ed6\u8de8\u6a21\u614b\u4efb\u52d9\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u50cf\u7d20\u7279\u5fb5\u7de8\u78bc",children:"\u50cf\u7d20\u7279\u5fb5\u7de8\u78bc"}),"\n",(0,l.jsx)(e.p,{children:"\u70ba\u4e86\u514b\u670d\u4e0a\u8ff0\u9650\u5236\uff0cPixel-BERT \u63a1\u53d6\u4e86\u4e00\u7a2e\u4e0d\u540c\u7684\u7b56\u7565\u3002\u5b83\u4e0d\u518d\u4f9d\u8cf4\u65bc\u7269\u4ef6\u7684\u908a\u754c\u6846\uff0c\u800c\u662f\u76f4\u63a5\u5f9e\u50cf\u7d20\u672c\u8eab\u5b78\u7fd2\u8996\u89ba\u7de8\u78bc\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u50cf\u7d20\u5b78\u7fd2\uff1a\u4f7f\u7528 CNN\uff0c\u50cf ResNet\uff0c\u76f4\u63a5\u5f9e\u6574\u500b\u5f71\u50cf\u5b78\u7fd2\u3002\u9019\u610f\u5473\u8457\u6a21\u578b\u5c07\u8003\u616e\u5716\u7247\u4e2d\u7684\u6bcf\u500b\u50cf\u7d20\uff0c\u800c\u4e0d\u50c5\u50c5\u662f\u88ab\u908a\u754c\u6846\u5305\u570d\u7684\u90e8\u5206\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u63d0\u53d6\u7279\u5fb5\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Image \u8f38\u5165: \u8f38\u5165\u5716\u50cf\u9996\u5148\u9032\u5165\u6a21\u578b\u3002"}),"\n",(0,l.jsx)(e.li,{children:"CNN Backbone: \u9019\u662f\u4e00\u500b\u9810\u8a13\u7df4\u7684\u795e\u7d93\u7db2\u8def\uff0c\u7528\u65bc\u5f9e\u8f38\u5165\u5f71\u50cf\u4e2d\u63d0\u53d6\u8996\u89ba\u7279\u5fb5\u3002"}),"\n",(0,l.jsx)(e.li,{children:"Convolution (Conv): \u900f\u904e\u5377\u7a4d\u5c64\u5c0d\u7279\u5fb5\u9032\u884c\u9032\u4e00\u6b65\u7684\u8655\u7406\u3002"}),"\n",(0,l.jsx)(e.li,{children:"Pooling: \u9019\u500b\u6b65\u9a5f\u5c07\u7279\u5fb5\u5716\u4e0b\u53d6\u6a23\uff0c\u901a\u5e38\u6e1b\u5c11\u5176\u7a7a\u9593\u5c3a\u5bf8\u3002"}),"\n",(0,l.jsx)(e.li,{children:"Random Sample: \u5f9e\u9019\u4e9b\u7279\u5fb5\u4e2d\u96a8\u6a5f\u9078\u53d6\u4e00\u4e9b\u7279\u5fb5\u9ede\uff0c\u7dad\u6301\u8a08\u7b97\u6548\u7387\u548c\u96a8\u6a5f\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"\u8a9e\u7fa9\u7de8\u78bc\uff1a\u6bcf\u4e00\u500b\u50cf\u7d20\u7279\u5fb5\u90fd\u88ab\u589e\u52a0\u4e00\u500b\u8a9e\u7fa9\u7de8\u78bc\u5411\u91cf sv\u3002\u9019\u662f\u4e00\u7a2e\u7279\u6b8a\u7684\u5411\u91cf\uff0c\u7528\u65bc\u5340\u5206\u8996\u89ba\u7de8\u78bc\u8207\u8a9e\u8a00\u7de8\u78bc\u7684\u5dee\u7570\u3002\u7531\u65bc\u6240\u6709\u7684\u50cf\u7d20\u7279\u5fb5\u90fd\u5171\u4eab\u9019\u500b\u76f8\u540c\u7684 sv\uff0c\u6240\u4ee5\u9019\u53ef\u4ee5\u88ab\u8996\u70ba\u662f\u52a0\u5230 CNN \u4e3b\u5e79\u4e0a\u7684\u4e00\u500b\u504f\u5dee\u9805\u3002\uff08\u4e0a\u5716\u7684 Semantic Embedding \u7684\u90e8\u5206\u3002\uff09"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53e5\u5b50\u7279\u5fb5\u7de8\u78bc",children:"\u53e5\u5b50\u7279\u5fb5\u7de8\u78bc"}),"\n",(0,l.jsx)(e.p,{children:"\u6a21\u578b\u9075\u5faa BERT \u7684\u65b9\u6cd5\u4f86\u7de8\u78bc\u53e5\u5b50\u7684\u8a9e\u8a00\u4fe1\u606f\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53e5\u5b50\u5207\u5206"})}),"\n",(0,l.jsx)(e.p,{children:"\u9996\u5148\uff0c\u7d66\u5b9a\u4e00\u500b\u53e5\u5b50\u4f5c\u70ba\u8f38\u5165\uff0c\u8a72\u53e5\u5b50\u6703\u88ab\u62c6\u5206\u6210\u55ae\u5b57\u5e8f\u5217\u3002\u9019\u901a\u5e38\u662f\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u4e2d\u7684\u4e00\u500b\u6a19\u6e96\u6b65\u9a5f\uff0c\u5c07\u53e5\u5b50\u62c6\u5206\u6210\u5176\u69cb\u6210\u7684\u8a5e\u5f59\u5143\u7d20\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u55ae\u5b57\u6a19\u8a18"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 WordPiece \u6a21\u578b\uff08\u4e00\u7a2e\u5e38\u7528\u65bc BERT \u7684\u5206\u8a5e\u65b9\u6cd5\uff09\u5c0d\u6bcf\u500b\u55ae\u5b57\u9032\u884c\u6a19\u8a18\u3002\u9019\u7a2e\u5206\u8a5e\u65b9\u6cd5\u53ef\u4ee5\u5c07\u4e00\u500b\u8a5e\u5206\u89e3\u6210\u66f4\u5c0f\u7684\u53ef\u8b58\u5225\u7684\u7247\u6bb5\u6216\u5b50\u8a5e\uff0c\u9019\u5c24\u5176\u5c0d\u65bc\u8655\u7406\u90a3\u4e9b\u4e0d\u5e38\u898b\u6216\u8a9e\u6599\u5eab\u4e2d\u672a\u51fa\u73fe\u7684\u8a5e\u7279\u5225\u6709\u7528\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7de8\u78bc\u77e9\u9663\u8f49\u63db"})}),"\n",(0,l.jsx)(e.p,{children:"\u63a5\u8457\uff0c\u6bcf\u500b\u6a19\u8a18\uff08\u6216\u7a31\u5b50\u8a5e\uff09\u90fd\u6703\u88ab\u7de8\u78bc\u5230\u4e00\u500b\u5411\u91cf\u4e2d\u3002\u9019\u662f\u901a\u904e\u4e00\u500b\u7de8\u78bc\u77e9\u9663\u5b8c\u6210\u7684\uff0c\u8a72\u77e9\u9663\u5c07\u6bcf\u500b\u552f\u4e00\u7684\u6a19\u8a18\u6216\u5b50\u8a5e\u6620\u5c04\u5230\u4e00\u500b\u56fa\u5b9a\u7dad\u5ea6\u7684\u5411\u91cf\u7a7a\u9593\u4e2d\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u4f4d\u7f6e\u7de8\u78bc"})}),"\n",(0,l.jsx)(e.p,{children:"\u9664\u4e86\u8a5e\u5f59\u7de8\u78bc\u5916\uff0c\u4f4d\u7f6e\u4fe1\u606f\u4e5f\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u7279\u5225\u662f\u5c0d\u65bc\u50cf Transformer \u9019\u6a23\u7684\u6a21\u578b\u3002\u56e0\u6b64\uff0c\u50cf BERT \u9019\u6a23\uff0cPixel-BERT \u4e5f\u6dfb\u52a0\u4e86\u4f4d\u7f6e\u7de8\u78bc\u4f86\u7de8\u78bc\u5e8f\u5217\u4e2d\u7684\u6bcf\u500b\u6a19\u8a18\u7684\u4f4d\u7f6e\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7d44\u5408\u7de8\u78bc\u7279\u5fb5"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u9019\u4e00\u6b65\u4e2d\uff0c\u8a5e\u5f59\u7de8\u78bc\u548c\u4f4d\u7f6e\u7de8\u78bc\u9032\u884c\u7d44\u5408\u3002\u6587\u7ae0\u4e2d\u7528\u5230\u4e86 LayerNorm(wi + pi + sw) \u9019\u500b\u516c\u5f0f\u3002\u5176\u4e2d\uff0cwi \u662f\u8a5e\u5f59\u7de8\u78bc\uff0cpi \u662f\u4f4d\u7f6e\u7de8\u78bc\uff0c\u800c sw \u662f\u8a9e\u7fa9\u7de8\u78bc\u5411\u91cf\u3002\u4f46\u6587\u7ae0\u63d0\u5230\uff0c\u5728\u5be6\u4f5c\u4e2d\uff0c\u9019\u500b sw \u9805\u662f\u88ab\u7701\u7565\u7684\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6700\u7d42\u8a9e\u8a00\u8868\u793a:"})}),"\n",(0,l.jsx)(e.p,{children:"\u7d44\u5408\u5f8c\u7684\u7de8\u78bc\u7279\u5fb5 [w^1,w^2,...,w^n] \u6210\u70ba\u53e5\u5b50\u7684\u6700\u7d42\u8a9e\u8a00\u8868\u793a\uff0c\u4e26\u53ef\u4f9b\u5f8c\u7e8c\u7684\u6a21\u578b\u90e8\u5206\u4f7f\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u8de8\u6a21\u614b\u5b78\u7fd2",children:"\u8de8\u6a21\u614b\u5b78\u7fd2"}),"\n",(0,l.jsx)(e.p,{children:"\u6a21\u578b\u4f7f\u7528 Transformer \u4f86\u5b78\u7fd2\u8de8\u6a21\u614b\u7684\u6ce8\u610f\u529b\uff0c\u7279\u5225\u662f\u5f71\u50cf\u50cf\u7d20\u548c\u8a9e\u8a00\u6a19\u8a18\u4e4b\u9593\u7684\u95dc\u7cfb\u3002\u6240\u6709\u7684\u7de8\u78bc\u7279\u5fb5\u90fd\u88ab\u7d44\u5408\u5728\u4e00\u8d77\u5f62\u6210\u4e00\u500b\u9577\u7684\u8f38\u5165\u5e8f\u5217\uff0c\u4e26\u52a0\u5165\u7279\u6b8a\u6a19\u8a18\u5982 [CLS] \u548c [SEP] \u4f86\u8fa8\u8b58\u5176\u7d50\u69cb\u3002\u9019\u7a2e\u8a2d\u8a08\u4f7f\u5f97\u6a21\u578b\u80fd\u5920\u7aef\u5230\u7aef\u5730\u5b78\u7fd2\uff0c\u4e26\u80fd\u5920\u6709\u6548\u5730\u6253\u7834\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u7684\u5dee\u8ddd\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u9810\u8a13\u7df4\u65b9\u6cd5",children:"\u9810\u8a13\u7df4\u65b9\u6cd5"}),"\n",(0,l.jsx)(e.p,{children:"\u4f5c\u8005\u70ba\u4e86\u5b78\u7fd2\u8207\u8996\u89ba\u548c\u8a9e\u8a00\u76f8\u95dc\u4efb\u52d9\u7684\u901a\u7528\u8996\u89ba\u548c\u53e5\u5b50\u8868\u793a\uff0c\u63a1\u7528\u4e86\u81ea\u76e3\u7763\u65b9\u6cd5\u5728\u5927\u578b\u805a\u5408\u8cc7\u6599\u96c6\u4e0a\u9032\u884c\u9810\u8a13\u7df4\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u63a9\u78bc\u8a9e\u8a00\u6a21\u578b (MLM)"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u9032\u884c\u906e\u7f69\u8a9e\u8a00\u5efa\u6a21\u7684\u904e\u7a0b\u4e2d\uff0c\u6a21\u578b\u7684\u8f38\u5165\u6a19\u8a18\u4e2d\u7d04\u6709 15% \u6703\u88ab\u96a8\u6a5f\u9078\u64c7\u4e26\u906e\u7f69\u3002\u906e\u7f69\u7684\u610f\u7fa9\u662f\u5c07\u7279\u5b9a\u6a19\u8a18\u7684\u539f\u59cb\u503c\u96b1\u85cf\uff0c\u4f7f\u6a21\u578b\u4e0d\u80fd\u76f4\u63a5\u770b\u5230\u5b83\u3002\u6b64\u5f8c\uff0c\u6a21\u578b\u7684\u5de5\u4f5c\u5c31\u662f\u5617\u8a66\u6062\u5fa9\u9019\u4e9b\u906e\u7f69\u6a19\u8a18\u7684\u771f\u5be6\u503c\uff0c\u5b83\u5fc5\u9808\u4f9d\u8cf4\u65bc\u5176\u4ed6\u975e\u906e\u7f69\u7684\u8a9e\u8a00\u6a19\u8a18\u4ee5\u53ca\u6240\u63d0\u4f9b\u7684\u8996\u89ba\u6a19\u8a18\u4f86\u505a\u51fa\u6062\u5fa9\u7684\u9810\u6e2c\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u50b3\u7d71\u7684 BERT \u6a21\u578b\u662f\u55ae\u6a21\u614b\u7684\uff0c\u610f\u601d\u662f\u5b83\u53ea\u5728\u8a9e\u8a00\u6a19\u8a18\u4e2d\u9032\u884c\u906e\u7f69\u9810\u6e2c\u3002\u4f46\u662f Pixel-BERT \u7531\u65bc\u5176\u8de8\u6a21\u614b\u6027\u8cea\uff0c\u4e0d\u50c5\u50c5\u4f9d\u8cf4\u65bc\u8a9e\u8a00\u6a21\u614b\uff0c\u9084\u53ef\u4ee5\u5229\u7528\u8996\u89ba\u6a19\u8a18\u4f86\u9032\u884c\u9810\u6e2c\u3002\u9019\u4f7f\u5f97 Pixel-BERT \u5728\u8655\u7406\u90a3\u4e9b\u55ae\u7d14\u5f9e\u8a9e\u8a00\u4e0a\u4e0b\u6587\u4e2d\u53ef\u80fd\u96e3\u4ee5\u89e3\u91cb\u6216\u6709\u6b67\u7fa9\u7684\u60c5\u5883\u6642\uff0c\u6709\u66f4\u5f37\u7684\u9810\u6e2c\u80fd\u529b\u3002\u4f8b\u5982\uff1a\u7576\u8a9e\u8a00\u4e2d\u7684\u67d0\u4e9b\u906e\u7f69\u6a19\u8a18\u8207\u5716\u50cf\u4e2d\u7684\u67d0\u4e9b\u7269\u9ad4\u6216\u5834\u666f\u76f4\u63a5\u76f8\u95dc\u6642\uff0c\u8996\u89ba\u6a19\u8a18\u53ef\u4ee5\u63d0\u4f9b\u95dc\u9375\u7684\u8a9e\u5883\u8cc7\u8a0a\uff0c\u5e6b\u52a9\u6a21\u578b\u505a\u51fa\u6b63\u78ba\u7684\u9810\u6e2c\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5f71\u50cf\u6587\u5b57\u5339\u914d (ITM)"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f71\u50cf\u6587\u5b57\u5339\u914d\uff08ITM\uff09\u662f\u4e00\u7a2e\u8907\u96dc\u7684\u7b56\u7565\uff0c\u4e3b\u8981\u8a2d\u8a08\u7528\u65bc\u8a55\u4f30\u6a21\u578b\u5728\u7406\u89e3\u5716\u50cf\u548c\u76f8\u5c0d\u61c9\u7684\u6587\u672c\u63cf\u8ff0\u4e4b\u9593\u7684\u6df1\u5c64\u8a9e\u7fa9\u95dc\u806f\u7684\u80fd\u529b\u3002\u9019\u4e0d\u53ea\u662f\u5c0b\u627e\u76f4\u63a5\u7684\u5339\u914d\uff0c\u66f4\u91cd\u8981\u7684\u662f\u78ba\u8a8d\u5b83\u5011\u4e4b\u9593\u7684\u7d30\u5fae\u9023\u63a5\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5728 Pixel-BERT \u6a21\u578b\u4e2d\uff0c\u9019\u9805\u4efb\u52d9\u4f7f\u7528\u4e86 [CLS] \u6a19\u8a18\uff0c\u4f5c\u70ba\u5716\u50cf\u548c\u6587\u672c\u878d\u5408\u7684\u4ee3\u8868\u9ede\u3002\u900f\u904e\u9019\u6a19\u8a18\uff0c\u6a21\u578b\u5f97\u4ee5\u751f\u6210\u4e00\u500b\u878d\u5408\u7684\u8868\u793a\uff0c\u53cd\u6620\u51fa\u6587\u672c\u548c\u5716\u50cf\u7684\u7d9c\u5408\u610f\u7fa9\u3002\u4f8b\u5982\uff1a\u7576\u6a21\u578b\u63a5\u6536\u5230\u63cf\u8ff0\u300c\u6625\u5929\u7684\u6afb\u82b1\u6a39\u4e0b\u300d\u7684\u6587\u672c\u548c\u4e00\u5f35\u5c55\u793a\u6afb\u82b1\u76db\u958b\u7684\u516c\u5712\u7684\u5716\u7247\u6642\uff0c\u900f\u904e [CLS] \u6a19\u8a18\uff0c\u6a21\u578b\u6703\u751f\u6210\u4e00\u500b\u9ad8\u5ea6\u76f8\u95dc\u7684\u878d\u5408\u8868\u793a\u3002\u9019\u8868\u793a\u6703\u9032\u4e00\u6b65\u7d93\u904e\u5168\u9023\u63a5\u5c64\u548c sigmoid \u51fd\u6578\u7684\u8f49\u63db\uff0c\u6700\u7d42\u7522\u751f\u4e00\u500b\u63a5\u8fd1 1 \u7684\u5206\u6578\uff0c\u8868\u793a\u5716\u7247\u548c\u6587\u672c\u9ad8\u5ea6\u5339\u914d\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u7136\u800c\uff0c\u70ba\u4e86\u63d0\u9ad8\u6a21\u578b\u7684\u8fa8\u8b58\u80fd\u529b\uff0c\u8a13\u7df4\u904e\u7a0b\u4e2d\u9084\u5c07\u5f15\u5165\u300c\u8ca0\u5c0d\u300d\uff0c\u4e5f\u5c31\u662f\u5716\u50cf\u548c\u6587\u672c\u4e0d\u76f8\u95dc\u7684\u914d\u5c0d\u3002\u4f8b\u5982\uff1a\u53ef\u80fd\u6703\u5c07\u63cf\u8ff0\u300c\u6625\u5929\u7684\u6afb\u82b1\u6a39\u4e0b\u300d\u7684\u6587\u672c\u8207\u4e00\u5f35\u5c55\u793a\u6c99\u6f20\u98a8\u666f\u7684\u5716\u7247\u914d\u5c0d\u3002\u9019\u6a23\u7684\u8a2d\u8a08\u662f\u70ba\u4e86\u8b93\u6a21\u578b\u5b78\u7fd2\u5230\u4f55\u6642\u5716\u7247\u548c\u6587\u672c\u662f\u4e0d\u5339\u914d\u7684\u3002\u900f\u904e\u9019\u7a2e\u6b63\u5c0d\u548c\u8ca0\u5c0d\u7684\u8a13\u7df4\u7d44\u5408\uff0c\u6a21\u578b\u5c07\u66f4\u7cbe\u6e96\u5730\u8a55\u4f30\u5be6\u969b\u61c9\u7528\u4e2d\u7684\u5716\u50cf\u548c\u6587\u672c\u5339\u914d\u5ea6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u50cf\u7d20\u96a8\u6a5f\u53d6\u6a23 (Pixel Random Sampling)"})}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u662f Pixel-BERT \u4e2d\u63a1\u7528\u7684\u4e00\u500b\u7368\u7279\u7b56\u7565\uff0c\u4e3b\u8981\u7684\u76ee\u7684\u662f\u63d0\u9ad8\u6a21\u578b\u5728\u5b78\u7fd2\u7279\u5fb5\u6642\u7684\u7a69\u5065\u6027\uff0c\u78ba\u4fdd\u6a21\u578b\u4e0d\u6703\u904e\u5ea6\u4f9d\u8cf4\u65bc\u6bcf\u4e00\u500b\u50cf\u7d20\uff0c\u5f9e\u800c\u6e1b\u5c11\u904e\u64ec\u5408\u7684\u98a8\u96aa\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6a21\u578b\u7684\u8a13\u7df4\u904e\u7a0b\u4e2d\uff0c\u6bcf\u6b21\u7576\u50cf\u7d20\u7279\u5fb5\u88ab\u63d0\u53d6\u5f8c\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528\u6240\u6709\u7684\u50cf\u7d20\u7279\u5fb5\uff0c\u4f5c\u8005\u6703\u9032\u884c\u96a8\u6a5f\u53d6\u6a23\uff0c\u9078\u53d6\u4e00\u90e8\u5206\u7684\u50cf\u7d20\u4f5c\u70ba\u6a21\u578b\u7684\u8f38\u5165\u3002\u9019\u610f\u5473\u8457\u5728\u6bcf\u6b21\u7684\u8fed\u4ee3\u4e2d\uff0c\u6a21\u578b\u90fd\u6703\u770b\u5230\u7565\u6709\u4e0d\u540c\u7684\u5716\u50cf\u8f38\u5165\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u6a23\u505a\u53ef\u80fd\u6709\u5e7e\u500b\u512a\u9ede\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u589e\u5f37\u7a69\u5065\u6027\uff1a\u901a\u904e\u96a8\u6a5f\u53d6\u6a23\u7684\u65b9\u5f0f\uff0c\u6a21\u578b\u5c07\u5b78\u6703\u5f9e\u90e8\u5206\u8cc7\u6599\u4e2d\u62bd\u53d6\u51fa\u95dc\u9375\u7684\u8996\u89ba\u4fe1\u606f\uff0c\u5373\u4f7f\u67d0\u4e9b\u50cf\u7d20\u4e1f\u5931\u6216\u88ab\u906e\u853d\uff0c\u4ecd\u80fd\u4fdd\u6301\u826f\u597d\u7684\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u63d0\u9ad8\u6548\u7387\uff1a\u6e1b\u5c11\u4e86\u8f38\u5165\u5230\u6a21\u578b\u4e2d\u7684\u50cf\u7d20\u6578\u91cf\uff0c\u9019\u610f\u5473\u8457\u6a21\u578b\u9700\u8981\u8655\u7406\u7684\u6578\u64da\u91cf\u6e1b\u5c11\uff0c\u5f9e\u800c\u53ef\u4ee5\u964d\u4f4e\u8a08\u7b97\u6210\u672c\u4e26\u52a0\u901f\u6574\u9ad4\u7684\u8a13\u7df4\u904e\u7a0b\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u9632\u6b62\u904e\u64ec\u5408\uff1a\u901a\u904e\u7d93\u5e38\u6539\u8b8a\u6a21\u578b\u7684\u8f38\u5165\uff0c\u6a21\u578b\u4e0d\u592a\u53ef\u80fd\u8a18\u4f4f\u7279\u5b9a\u7684\u8f38\u5165\u6a21\u5f0f\uff0c\u5f9e\u800c\u589e\u52a0\u4e86\u5176\u6cdb\u5316\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u9019\u7a2e\u50cf\u7d20\u96a8\u6a5f\u53d6\u6a23\u7684\u65b9\u6cd5\u4e3b\u8981\u61c9\u7528\u65bc\u6a21\u578b\u7684\u9810\u8a13\u7df4\u968e\u6bb5\u3002\u9019\u662f\u56e0\u70ba\u5728\u5fae\u8abf\u968e\u6bb5\uff0c\u76ee\u6a19\u662f\u8b93\u6a21\u578b\u80fd\u5920\u5c0d\u7279\u5b9a\u7684\u4efb\u52d9\u9032\u884c\u512a\u5316\uff0c\u9019\u6642\u9700\u8981\u4f7f\u7528\u5b8c\u6574\u7684\u5716\u50cf\u8cc7\u6599\u4f86\u78ba\u4fdd\u6700\u4f73\u7684\u6027\u80fd\u3002\u56e0\u6b64\uff0c\u50cf\u7d20\u96a8\u6a5f\u53d6\u6a23\u5728\u5fae\u8abf\u6642\u4e0d\u518d\u4f7f\u7528\uff0c\u4ee5\u78ba\u4fdd\u6a21\u578b\u7684\u8f38\u5165\u5728\u8a13\u7df4\u548c\u6e2c\u8a66\u968e\u6bb5\u662f\u4e00\u81f4\u7684\uff0c\u4e26\u6700\u5927\u9650\u5ea6\u5730\u5229\u7528\u6240\u6709\u53ef\u7528\u7684\u50cf\u7d20\u8cc7\u8a0a\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,l.jsx)(e.h3,{id:"vqa-\u7684\u8868\u73fe",children:"VQA \u7684\u8868\u73fe"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"Pixel-BERT \u5728 VQA \u4e0a\u7684\u8868\u73fe",src:i(19252).A+"",width:"768",height:"596"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 ResNet-50 \u4f5c\u70ba\u8996\u89ba\u4e3b\u5e79\u7684 Pixel-BERT \u5728 VQA \u7684\u6e2c\u8a66\u5206\u5272\u4e0a\u7372\u5f97\u4e86 71.35 \u7684\u5206\u6578\u3002\u9019\u6bd4\u4f7f\u7528 ResNet-101 \u6216 ResNeXt \u7684 ViLBERT \u548c VisualBERT \u7684\u7d50\u679c\u9084\u8981\u597d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u7576\u4f7f\u7528 ResNeXt-152 \u4f5c\u70ba\u4e3b\u5e79\u6642\uff0cPixel-BERT \u5728\u6e2c\u8a66\u4e0a\u9054\u5230\u4e86 74.45 \u7684\u5206\u6578\uff0c\u800c\u5728\u6e2c\u8a66-\u6a19\u6e96\u5206\u5272\u4e0a\u9054\u5230\u4e86 74.55\uff0c\u9019\u4e9b\u5206\u6578\u90fd\u512a\u65bc\u5176\u4ed6\u5148\u9032\u7684\u65b9\u6cd5\u3002"}),"\n",(0,l.jsx)(e.li,{children:"Pixel-BERT \u7684\u7d50\u679c\u8d85\u8d8a\u4e86\u4f7f\u7528 24 \u5c64 Transformer \u7684 UNITER (Large)\u6a21\u578b\uff0c\u5728 VQA \u7684 test-std split \u4e0a\u7372\u5f97\u4e86 73.40 \u7684\u5206\u6578\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Pixel-BERT \u7684\u986f\u8457\u9032\u6b65\u8b49\u660e\u4e86\u76f4\u63a5\u5728\u5716\u50cf\u50cf\u7d20\u7d1a\u5225\u4e0a\u5b78\u7fd2\u8996\u89ba\u548c\u8a9e\u8a00\u7684\u6ce8\u610f\u529b\u662f\u975e\u5e38\u6709\u5229\u7684\u3002\u9019\u4e0d\u50c5\u6709\u52a9\u65bc\u5f37\u5316\u8996\u89ba\u7de8\u78bc\u5668\u7684\u8868\u793a\uff0c\u9084\u80fd\u589e\u5f37\u96a8\u5f8c\u7684\u8996\u89ba\u548c\u8a9e\u8a00\u7de8\u78bc\u5b78\u7fd2\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"nlvr2-\u7684\u8868\u73fe",children:"NLVR2 \u7684\u8868\u73fe"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"Pixel-BERT \u5728 NLVR2 \u4e0a\u7684\u8868\u73fe",src:i(97777).A+"",width:"812",height:"608"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u771f\u5be6\u8996\u89ba\u63a8\u7406\u81ea\u7136\u8a9e\u8a00 (NLVR2) \u4efb\u52d9\u4e2d\uff0c\u76ee\u7684\u662f\u9810\u6e2c\u8a9e\u8a00\u63cf\u8ff0\u662f\u5426\u8207\u63d0\u4f9b\u7684\u5716\u50cf\u5c0d\u76f8\u95dc\u3002Pixel-BERT \u5c07\u5169\u500b\u5716\u50cf\u8a9e\u8a00\u5c0d\u4f5c\u70ba\u8f38\u5165\uff0c\u5f9e [CLS] \u6a19\u8a18\u4e2d\u7372\u5f97\u5169\u500b\u7de8\u78bc\u5411\u91cf\u3002\u9019\u5169\u500b\u5411\u91cf\u4e32\u806f\u5728\u4e00\u8d77\uff0c\u7136\u5f8c\u901a\u904e\u4ea4\u53c9\u71b5\u640d\u5931\u5b78\u7fd2\u300c\u771f\u300d\u6216\u300c\u5047\u300d\u7684\u5206\u985e\u5668\u3002"}),"\n",(0,l.jsx)(e.p,{children:"Pixel-BERT \u5728 NLVR2 \u7684\u958b\u767c\u5206\u5272\u4e0a\u9054\u5230\u4e86 76.5 \u7684\u6e96\u78ba\u7387\uff0c\u5728 test-P \u5206\u5272\u4e0a\u9054\u5230\u4e86 77.2 \u7684\u6e96\u78ba\u7387\u3002\u5f9e\u7d50\u679c\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0cPixel-BERT \u7d44\u5408\u5169\u500b\u5716\u50cf\u8a9e\u8a00\u5c0d\u7684\u65b9\u6cd5\u5728\u6548\u679c\u4e0a\u512a\u65bc\u5176\u4ed6\u6a21\u578b\uff0c\u5982 LXMERT \u548c UNITER \u7684 \u300cPair\u300d\u8a2d\u5b9a\u3002"}),"\n",(0,l.jsx)(e.p,{children:"Pixel-BERT \u7684\u6548\u679c\u8b49\u660e\u4e86\u5b83\u4e0d\u50c5\u5728 VQA \u4efb\u52d9\u4e0a\u8868\u73fe\u51fa\u8272\uff0c\u800c\u4e14\u5728\u9700\u8981\u8a55\u4f30\u5169\u500b\u5716\u50cf\u8207\u8a9e\u8a00\u63cf\u8ff0\u76f8\u95dc\u6027\u7684 NLVR2 \u4efb\u52d9\u4e0a\u4e5f\u8868\u73fe\u5f97\u5f88\u597d\u3002\u9019\u4e9b\u7d50\u679c\u4e5f\u986f\u793a\u4e86 Pixel-BERT \u53ef\u4ee5\u9748\u6d3b\u5730\u9069\u61c9\u548c\u8655\u7406\u4e0d\u540c\u7684\u8f38\u5165\u683c\u5f0f\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"image-text-retrieval",children:"Image-Text Retrieval"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"Pixel-BERT \u5728 Image-Text Retrieval \u4e0a\u7684\u8868\u73fe",src:i(84866).A+"",width:"1024",height:"611"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Pixel-BERT \u4e3b\u8981\u8207 Unicoder-VL \u548c UNITER \u9032\u884c\u6bd4\u8f03\uff0c\u5b83\u5011\u90fd\u4f7f\u7528\u4e86 12 \u5c64\u7684 Transformer \u4f5c\u70ba\u8a9e\u8a00\u6a21\u7d44\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u5716\u50cf\u5230\u6587\u5b57\u7684\u6aa2\u7d22\u4e0a\uff0cPixel-BERT \u5728 MS-COCO 1K \u6e2c\u8a66\u96c6\u4e0a\uff0crecall@1 \u63d0\u9ad8\u4e86 0.6\uff0c\u800c\u5728 MS-COCO 5K \u6e2c\u8a66\u96c6\u4e0a\u63d0\u9ad8\u4e86 0.3\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u6587\u5b57\u5230\u5716\u50cf\u7684\u6aa2\u7d22\u4e0a\uff0c\u8207 Unicoder-VL \u548c UNITER \u76f8\u6bd4\uff0cPixel-BERT \u5728 MS-COCO 1K \u6e2c\u8a66\u96c6\u4e0a\u81f3\u5c11\u63d0\u9ad8\u4e86 1.9\uff0c\u800c\u5728 MS-COCO 5K \u6e2c\u8a66\u96c6\u4e0a\u81f3\u5c11\u63d0\u9ad8\u4e86 1.7\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Pixel-BERT \u5728\u5716\u50cf\u6587\u672c\u6aa2\u7d22\u4efb\u52d9\u4e2d\u5c55\u73fe\u4e86\u5353\u8d8a\u7684\u8868\u73fe\u3002\u5176\u7279\u5225\u7684\u8a2d\u8a08\u7b56\u7565\u4f7f\u5b83\u80fd\u6709\u6548\u5730\u5b78\u7fd2\u8de8\u8a9e\u8a00\u548c\u5716\u50cf\u50cf\u7d20\u7684\u6ce8\u610f\u529b\uff0c\u7279\u5225\u662f\u5728\u6587\u5b57\u5230\u5716\u50cf\u7684\u6aa2\u7d22\u65b9\u9762\uff0c\u8207\u5176\u4ed6\u7576\u524d\u7684\u5148\u9032\u6a21\u578b\u76f8\u6bd4\uff0c\u5176\u6027\u80fd\u6709\u986f\u8457\u7684\u63d0\u5347\u3002\u9019\u4e9b\u7d50\u679c\u8b49\u660e\u4e86 Pixel-BERT \u5728\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e0a\u7684\u6548\u80fd\u548c\u6f5b\u529b\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u6a21\u578b\u7684\u95dc\u9375\u8a2d\u8a08\u662f\u4ec0\u9ebc",children:"\u6a21\u578b\u7684\u95dc\u9375\u8a2d\u8a08\u662f\u4ec0\u9ebc\uff1f"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"Pixel-BERT \u6d88\u878d\u7814\u7a76",src:i(21215).A+"",width:"1024",height:"358"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f5c\u8005\u5206\u6790 Pixel-BERT \u7684\u6709\u6548\u6027\u548c\u5353\u8d8a\u8868\u73fe\u90e8\u5206\u6b78\u56e0\u65bc\u5176\u5e7e\u500b\u95dc\u9375\u8a2d\u8a08\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u9810\u8a13\u7df4\u4efb\u52d9\u7684\u9078\u64c7"})}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u904e\u6d88\u878d\u5be6\u9a57\uff0c\u53ef\u4ee5\u660e\u78ba\u5730\u770b\u5230 MLM \u548c ITM \u5728\u9810\u8a13\u7df4\u4e2d\u7684\u91cd\u8981\u6027\u3002\u9019\u4e9b\u4efb\u52d9\u90fd\u70ba\u4e0b\u6e38\u4efb\u52d9\u63d0\u4f9b\u4e86\u986f\u8457\u7684\u6027\u80fd\u63d0\u5347\uff0c\u5176\u4e2d NLVR2 \u4efb\u52d9\u5c24\u5176\u4f9d\u8cf4\u65bc MLM\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7d44\u5408\u4e0d\u540c\u7684\u9810\u8a13\u7df4\u4efb\u52d9"})}),"\n",(0,l.jsx)(e.p,{children:"\u7576 MLM \u548c ITM \u88ab\u7d44\u5408\u5728\u4e00\u8d77\u6642\uff0c\u5b83\u5011\u7684\u5171\u540c\u6548\u679c\u5c0d\u6a21\u578b\u7684\u6027\u80fd\u6709\u986f\u8457\u7684\u6b63\u9762\u5f71\u97ff\uff0c\u8b49\u660e\u4e86\u4f7f\u7528\u591a\u7a2e\u9810\u8a13\u7df4\u4efb\u52d9\u53ef\u4ee5\u9032\u4e00\u6b65\u63d0\u9ad8\u4e0b\u6e38\u4efb\u52d9\u7684\u6548\u679c\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u96a8\u6a5f\u50cf\u7d20\u53d6\u6a23"})}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u662f Pixel-BERT \u7684\u4e00\u500b\u7368\u7279\u8a2d\u8a08\uff0c\u5b83\u7684\u76ee\u7684\u662f\u589e\u5f37\u6a21\u578b\u7684\u7a69\u5065\u6027\u4e26\u907f\u514d\u904e\u5ea6\u64ec\u5408\u3002\u5f9e\u6d88\u878d\u5be6\u9a57\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u8a72\u7b56\u7565\u5728 VQA\u3001\u6aa2\u7d22\u4efb\u52d9\u548c NLVR2 \u4e0a\u90fd\u7522\u751f\u4e86\u6b63\u9762\u7684\u8ca2\u737b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8996\u89ba\u4e3b\u5e79\u7684\u9078\u64c7"})}),"\n",(0,l.jsx)(e.p,{children:"\u6a21\u578b\u7684\u6027\u80fd\u4e5f\u53d6\u6c7a\u65bc\u6240\u9078\u64c7\u7684\u8996\u89ba\u4e3b\u5e79\u3002\u7576\u4f7f\u7528\u66f4\u5f37\u5927\u7684 ResNext-152 \u4f5c\u70ba\u8996\u89ba\u4e3b\u5e79\u6642\uff0c\u6a21\u578b\u7684\u6027\u80fd\u7372\u5f97\u4e86\u986f\u8457\u63d0\u5347\uff0c\u986f\u793a\u4e86 Pixel-BERT \u6a21\u578b\u8207\u5f37\u5927\u7684\u8996\u89ba\u4e3b\u5e79\u7684\u7d44\u5408\u80fd\u529b\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"Pixel-BERT \u7684\u53ef\u8996\u5316\u7d50\u679c",src:i(89904).A+"",width:"1024",height:"766"})}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u5f8c\uff0c\u4f5c\u8005\u63d0\u4f9b\u4e86\u6a21\u578b\u53ef\u8996\u5316\u7684\u7d50\u679c\uff0c\u5982\u4e0a\u5716\u6240\u793a\uff0cPixel-BERT \u7684\u53ef\u8996\u5316\u6ce8\u610f\u529b\u5716\u4e0d\u50c5\u986f\u793a\u4e86\u6a21\u578b\u7684\u7406\u89e3\u80fd\u529b\uff0c\u66f4\u9a57\u8b49\u4e86\u5176\u80fd\u5920\u7cbe\u78ba\u6355\u6349\u5230\u6587\u5b57\u8207\u5f71\u50cf\u4e4b\u9593\u7684\u8a9e\u7fa9\u95dc\u806f\u3002\u6a21\u578b\u7684\u6ce8\u610f\u529b\u6a5f\u5236\u900f\u904e\u53ef\u8996\u5316\u5c55\u73fe\u51fa\u6df1\u5165\u7684\u8de8\u6a21\u614b\u5b78\u7fd2\u6548\u679c\u3002\u9019\u4e0d\u50c5\u8b49\u660e\u4e86 Pixel-BERT \u7684\u6548\u80fd\uff0c\u9084\u6307\u51fa\u5176\u5728\u8996\u89ba\u548c\u8a9e\u8a00\u7de8\u78bc\u4e2d\u7684\u53ef\u9760\u6027\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6700\u8fd1\u7684\u7814\u7a76\u767c\u5c55\u4e2d\uff0c\u9810\u8a13\u7df4\u6a21\u578b\u5728\u8996\u89ba\u548c\u8a9e\u8a00\u9818\u57df\u5df2\u7d93\u53d6\u5f97\u4e86\u5f15\u4eba\u6ce8\u76ee\u7684\u6548\u679c\u3002\u70ba\u4e86\u89e3\u6c7a\u57fa\u65bc\u5340\u57df\u7684\u8996\u89ba\u8868\u793a\u6240\u5e36\u4f86\u7684\u9650\u5236\uff0c\u4f5c\u8005\u5f15\u5165\u4e86\u4e00\u7a2e\u57fa\u65bc CNN \u7684\u8996\u89ba\u7de8\u78bc\u5668\uff0c\u4e26\u5de7\u5999\u5730\u8207\u591a\u6a21\u614b Transformer \u7d50\u5408\uff0c\u5275\u5efa\u51fa Pixel-BERT \u6a21\u578b\u3002"}),"\n",(0,l.jsx)(e.p,{children:"Pixel-BERT \u4e0d\u50c5\u6df1\u5165\u63a2\u8a0e\u4e86\u50cf\u7d20\u548c\u6587\u5b57\u4e4b\u9593\u7684\u95dc\u806f\uff0c\u66f4\u5c55\u73fe\u4e86\u5176\u5728\u8996\u89ba\u8a9e\u8a00\u7de8\u78bc\u65b9\u9762\u7684\u7cbe\u78ba\u6027\u548c\u6df1\u5ea6\u3002\u5176\u5b78\u7fd2\u7b56\u7565\uff0c\u5982\u96a8\u6a5f\u50cf\u7d20\u53d6\u6a23\uff0c\u9032\u4e00\u6b65\u52a0\u5f37\u4e86\u6a21\u578b\u7684\u7a69\u5065\u6027\u3002\u5728\u4e3b\u6d41\u8cc7\u6599\u96c6\u5982 Visual Genome \u548c MSCOCO \u4e0a\uff0c\u9019\u6b3e\u6a21\u578b\u5df2\u7d93\u5c55\u793a\u51fa\u4e86\u4ee4\u4eba\u5370\u8c61\u6df1\u523b\u7684\u9810\u8a13\u7df4\u6210\u679c\u3002\u66f4\u70ba\u503c\u5f97\u671f\u5f85\u7684\u662f\uff0c\u4f5c\u8005\u9084\u8a08\u5283\u5728\u66f4\u591a\u7684\u8cc7\u6599\u96c6\u4e0a\u9032\u884c\u9810\u8a13\u7df4\uff0c\u4e26\u5c0b\u6c42\u7d50\u5408\u81ea\u76e3\u7763\u7684\u8996\u89ba\u5167\u5bb9\u4efb\u52d9\u4ee5\u9032\u4e00\u6b65\u63d0\u5347\u6a21\u578b\u7684\u6548\u80fd\u3002"}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.p,{children:"\u5982\u679c\u66ab\u4e14\u6487\u958b\u4f5c\u8005\u81ea\u5df1\u4e0b\u7684\u7d50\u8ad6\uff0c\u6211\u8a8d\u70ba\u628a\u300c\u7269\u4ef6\u6aa2\u6e2c\u6a21\u578b\u300d\u9019\u500b\u90e8\u5206\u62bd\u63db\u6389\uff0c\u9084\u80fd\u548c SOTA \u4f5c\u54c1\uff0cUNITER\uff0c\u7684\u8868\u73fe\u6301\u5e73\uff0c\u751a\u81f3\u9084\u80fd\u6709\u6240\u8d85\u8d8a\u3002\u9019\u5c31\u662f\u6700\u5927\u7684\u8ca2\u737b\u4e86\uff01"}),(0,l.jsx)(e.p,{children:"\u5b83\u610f\u5473\u8457\u6211\u5011\u4e0d\u518d\u9700\u8981\u53bb\u4e32\u63a5\u4e00\u500b\u80a5\u6ecb\u6ecb\u7684\uff0c\u9084\u53ef\u80fd\u9700\u8981\u984d\u5916\u9810\u8a13\u7df4\u7684 Faster R-CNN \uff08\u6216\u5176\u4ed6\u67b6\u69cb\uff09\uff0c\u9019\u500b\u90e8\u5206\u5c0d\u5de5\u7a0b\u5e2b\u4f86\u8aaa\uff0c\u7d55\u5c0d\u662f\u4e00\u4ef6\u503c\u5f97\u5927\u66f8\u7279\u66f8\uff0c\u7279\u5225\u6109\u6085\u7684\u4e8b\u60c5\u5440\uff01"})]})]})}function j(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}},21059:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/pixel_bert_1-346899fca653376f3a3f9565432cf7dc.jpg"},19252:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/pixel_bert_2-309c582a8f093b9f08a941ab5d52f05d.jpg"},97777:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/pixel_bert_3-5e03ee36420e7049b2bbb7e6d0341a0a.jpg"},84866:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/pixel_bert_4-641fd2a47b0ee556d64fad77141f6c78.jpg"},21215:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/pixel_bert_5-6e27761431656976985814a96c5b0c5f.jpg"},89904:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/pixel_bert_6-b07cef0ba0e80c9c445c51efab68484d.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>x});var l=i(96540);const s={},r=l.createContext(s);function d(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function x(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);