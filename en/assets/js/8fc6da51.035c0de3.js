"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6637],{38818:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var l=i(74848),s=i(28453);const r={},d="[20.06] ERNIE-ViL",c={id:"ernie-vil/index",title:"[20.06] ERNIE-ViL",description:"\u77e5\u8b58\u7684\u96d9\u9762\u5203",source:"@site/papers/2006-ernie-vil/index.md",sourceDirName:"2006-ernie-vil",slug:"/ernie-vil/",permalink:"/en/papers/ernie-vil/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719787737e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[20.05] GPT-3",permalink:"/en/papers/gpt_3/"},next:{title:"[20.06] VILLA",permalink:"/en/papers/villa/"}},h={},x=[{value:"\u77e5\u8b58\u7684\u96d9\u9762\u5203",id:"\u77e5\u8b58\u7684\u96d9\u9762\u5203",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"ERNIE-ViL \u6a21\u578b\u8a2d\u8a08",id:"ernie-vil-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u96d9\u6d41\u8de8\u6a21\u614b\u7db2\u8def",id:"\u96d9\u6d41\u8de8\u6a21\u614b\u7db2\u8def",level:3},{value:"\u5834\u666f\u5716\u9810\u6e2c\u4efb\u52d9",id:"\u5834\u666f\u5716\u9810\u6e2c\u4efb\u52d9",level:3},{value:"\u8a9e\u7fa9\u5c0d\u9f4a",id:"\u8a9e\u7fa9\u5c0d\u9f4a",level:3},{value:"\u7de8\u78bc\u65b9\u6cd5",id:"\u7de8\u78bc\u65b9\u6cd5",level:3},{value:"\u9810\u8a13\u7df4\u4efb\u52d9",id:"\u9810\u8a13\u7df4\u4efb\u52d9",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u57df\u5916\u8a13\u7df4\u8cc7\u6599\u7684\u512a\u52e2",id:"\u57df\u5916\u8a13\u7df4\u8cc7\u6599\u7684\u512a\u52e2",level:3},{value:"\u5834\u666f\u5716\u9810\u6e2c\u7684\u91cd\u8981\u6027",id:"\u5834\u666f\u5716\u9810\u6e2c\u7684\u91cd\u8981\u6027",level:3},{value:"\u5b8c\u5f62\u586b\u7a7a\u6e2c\u9a57",id:"\u5b8c\u5f62\u586b\u7a7a\u6e2c\u9a57",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function j(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"2006-ernie-vil",children:"[20.06] ERNIE-ViL"}),"\n",(0,l.jsx)(e.h2,{id:"\u77e5\u8b58\u7684\u96d9\u9762\u5203",children:"\u77e5\u8b58\u7684\u96d9\u9762\u5203"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://arxiv.org/abs/2006.16934",children:(0,l.jsx)(e.strong,{children:"ERNIE-ViL: Knowledge Enhanced Vision-Language Representations Through Scene Graph"})})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:"\u5728 BERT \u4e4b\u5f8c\u7684\u8a31\u591a\u6545\u4e8b\uff0c\u4f60\u5927\u6982\u4e5f\u90fd\u7565\u6709\u8033\u805e\uff0c\u80fd\u591a\u5c11\u8aaa\u51fa\u5e7e\u500b\u5dee\u7570\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,l.jsx)(e.p,{children:"ERNIE \u6a21\u578b\u5728\u9810\u8a13\u7df4\u6642\u878d\u5408\u4e86\u8c50\u5bcc\u7684\u5148\u9a57\u77e5\u8b58\uff0c\u50cf\u662f\u5be6\u9ad4\u77e5\u8b58\u5716\uff0c\u5f9e\u800c\u7372\u5f97\u66f4\u597d\u7684\u8a9e\u7fa9\u7406\u89e3\u3002\u53e6\u5916\uff0cERNIE \u63a1\u7528\u4e86\u7247\u6bb5\u7d1a\u7684 masking\u3002\u9664\u4e86\u5e38\u898b\u7684 Masked Language Model (MLM) \u4efb\u52d9\uff0cERNIE \u9084\u52a0\u5165\u4e86\u5176\u4ed6\u7684\u9810\u8a13\u7df4\u4efb\u52d9\uff0c\u9032\u4e00\u6b65\u63d0\u9ad8\u6a21\u578b\u7684\u8868\u793a\u80fd\u529b\u7b49\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u65e2\u7136 ERNIE \u90fd\u512a\u5316\u4e86 BERT\uff0c\u90a3\u7814\u7a76\u8005\u5011\u80af\u5b9a\u662f\u8981\u628a\u9019\u4efd\u512a\u5316\u7406\u5ff5\uff0c\u540c\u7406\u985e\u63a8\u5230\u5176\u4ed6\u9818\u57df\uff0c\u4e5f\u662f\u500b\u610f\u6599\u4e4b\u5167\u7684\u64cd\u4f5c\u4e86\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,l.jsx)(e.p,{children:"\u4f5c\u8005\u8457\u91cd\u65bc\u8996\u89ba\u8a9e\u8a00\u9810\u8a13\u7df4\u6a21\u578b\u7684\u554f\u984c\uff0c\u7279\u5225\u662f\u7576\u524d\u6a21\u578b\u5728\u8a73\u7d30\u8a9e\u7fa9\u5c0d\u9f4a\u65b9\u9762\u7684\u4e0d\u8db3\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u76ee\u524d\u7684\u6a21\u578b\u5f80\u5f80\u7121\u6cd5\u5340\u5206\u5e38\u898b\u8a5e\u548c\u63cf\u8ff0\u8a73\u7d30\u8a9e\u7fa9\u7684\u8a5e\uff0c\u5982\u5c0d\u8c61\u3001\u5c6c\u6027\u5c0d\u8c61\u3001\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\u7b49\u3002\u9019\u4f7f\u5f97\u9019\u4e9b\u6a21\u578b\u5728\u8655\u7406\u771f\u5be6\u5834\u666f\u6642\uff0c\u96e3\u4ee5\u6709\u6548\u5730\u8868\u793a\u548c\u6355\u6349\u5230\u7d30\u5fae\u8a9e\u7fa9\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f5c\u8005\u5b9a\u7fa9\u4e26\u8a66\u5716\u89e3\u6c7a\u7684\u5e7e\u500b\u8981\u9ede\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7576\u524d\u8996\u89ba\u8a9e\u8a00\u9810\u8a13\u7df4\u6a21\u578b\u7684\u4e0d\u8db3"})}),"\n",(0,l.jsx)(e.p,{children:"\u73fe\u6709\u6a21\u578b\u5e38\u57fa\u65bc\u96a8\u6a5f\u5c4f\u853d\u548c\u9810\u6e2c\u5b50\u8a5e\u7684\u65b9\u6cd5\uff0c\u800c\u6c92\u6709\u6709\u6548\u5730\u5340\u5206\u5e38\u898b\u8a5e\u548c\u63cf\u8ff0\u8a73\u7d30\u8a9e\u7fa9\u7684\u8a5e\uff0c\u5982\u5c0d\u8c61\u3001\u5c6c\u6027\u5c0d\u8c61\u3001\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\u7b49\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8a73\u7d30\u8a9e\u7fa9\u5c0d\u9f4a\u7684\u91cd\u8981\u6027"})}),"\n",(0,l.jsx)(e.p,{children:"\u7576\u524d\u7684\u65b9\u6cd5\u5f80\u5f80\u5ffd\u7565\u4e86\u8de8\u8996\u89ba\u548c\u8a9e\u8a00\u5efa\u69cb\u8a73\u7d30\u8a9e\u7fa9\u5c0d\u9f4a\u7684\u91cd\u8981\u6027\u3002\u9019\u610f\u5473\u8457\u6a21\u578b\u5728\u8655\u7406\u771f\u5be6\u5834\u666f\u6642\uff0c\u53ef\u80fd\u7121\u6cd5\u5145\u5206\u6355\u6349\u548c\u8868\u793a\u7d30\u5fae\u7684\u8a9e\u7fa9\u5dee\u7570\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8996\u89ba\u8a9e\u8a00\u9810\u8a13\u7df4\u7684\u8cc7\u6599\u4f86\u6e90\u554f\u984c"})}),"\n",(0,l.jsx)(e.p,{children:"\u8207\u6587\u5b57\u9810\u8a13\u7df4\u6a21\u578b\u4e0d\u540c\uff0c\u8996\u89ba\u8a9e\u8a00\u6a21\u578b\u9700\u8981\u9ad8\u54c1\u8cea\u5c0d\u9f4a\u7684\u5716\u50cf\u6587\u5b57\u8cc7\u6599\uff0c\u9019\u4e9b\u8cc7\u6599\u901a\u5e38\u96e3\u4ee5\u7372\u5f97\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,l.jsx)(e.h3,{id:"ernie-vil-\u6a21\u578b\u8a2d\u8a08",children:"ERNIE-ViL \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"ERNIE-ViL \u6a21\u578b\u67b6\u69cb",src:i(24152).A+"",width:"1680",height:"776"})}),"\n",(0,l.jsx)(e.h3,{id:"\u96d9\u6d41\u8de8\u6a21\u614b\u7db2\u8def",children:"\u96d9\u6d41\u8de8\u6a21\u614b\u7db2\u8def"}),"\n",(0,l.jsx)(e.p,{children:"\u96d9\u6d41\u8de8\u6a21\u614b Transformer \u7d50\u69cb\u78ba\u4fdd\u4e86\u9019\u5169\u7a2e\u6a21\u614b\u7684\u8cc7\u8a0a\u80fd\u5920\u6709\u6548\u5730\u7d44\u5408\u5728\u4e00\u8d77\uff0c\u63d0\u4f9b\u4e00\u500b\u5168\u9762\u7684\u3001\u7d71\u4e00\u7684\u8996\u89ba\u8a9e\u8a00\u8868\u793a\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u96d9\u6d41\u7d50\u69cb"})}),"\n",(0,l.jsx)(e.p,{children:"\u300c\u96d9\u6d41\u300d\u610f\u5473\u8457\u6709\u5169\u500b\u7368\u7acb\u7684\u6578\u64da\u6d41\u6216\u9014\u5f91\u3002\u5728 ERNIE-ViL \u7684\u60c5\u5883\u4e2d\uff0c\u9019\u5169\u500b\u6d41\u5206\u5225\u70ba\u6587\u672c\uff08\u6216\u8a9e\u8a00\uff09\u548c\u5716\u50cf\u3002\u9019\u5169\u7a2e\u6a21\u614b\u90fd\u6709\u5176\u81ea\u5df1\u7684 Transformer \u7d50\u69cb\uff0c\u9019\u610f\u5473\u8457\u6a21\u578b\u53ef\u4ee5\u5206\u5225\u5c08\u6ce8\u65bc\u6bcf\u7a2e\u6a21\u614b\u7684\u7279\u5b9a\u7279\u5fb5\uff0c\u800c\u4e0d\u662f\u6df7\u5408\u5b83\u5011\u5728\u4e00\u8d77\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8655\u7406\u6587\u672c\u548c\u5716\u50cf\u8cc7\u6599"})}),"\n",(0,l.jsx)(e.p,{children:"\u56e0\u70ba\u8996\u89ba\u548c\u8a9e\u8a00\u8cc7\u6599\u7684\u6027\u8cea\u6709\u5f88\u5927\u7684\u5dee\u7570\uff08\u4f8b\u5982\uff1a\u6587\u672c\u662f\u5e8f\u5217\u5316\u7684\uff0c\u800c\u5716\u50cf\u662f\u4e8c\u7dad\u7684\uff09\uff0c\u6240\u4ee5\u5206\u5225\u8655\u7406\u5b83\u5011\u4f7f\u5f97\u6a21\u578b\u53ef\u4ee5\u5c08\u6ce8\u65bc\u6bcf\u7a2e\u6a21\u614b\u7684\u7368\u7279\u6027\u8cea\uff0c\u7136\u5f8c\u4f7f\u7528\u5c08\u9580\u8a2d\u8a08\u7684\u65b9\u6cd5\u4f86\u89e3\u6790\u548c\u5b78\u7fd2\u9019\u4e9b\u8cc7\u6599\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8de8\u6a21\u614b Transformer \u5340\u584a"})}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u4e9b\u5340\u584a\u7684\u76ee\u7684\u662f\u4fc3\u9032\u8996\u89ba\u548c\u8a9e\u8a00\u6578\u64da\u4e4b\u9593\u7684\u4e92\u52d5\u548c\u5c0d\u9f4a\u3002\u4e00\u65e6\u6587\u672c\u548c\u5716\u50cf\u90fd\u88ab\u5b83\u5011\u5404\u81ea\u7684 Transformer \u7d50\u69cb\u8655\u7406\uff0c\u8de8\u6a21\u614b\u7684\u5340\u584a\u5c31\u6703\u958b\u59cb\u5de5\u4f5c\uff0c\u5c07\u9019\u5169\u7a2e\u6a21\u614b\u7684\u8cc7\u8a0a\u878d\u5408\u5728\u4e00\u8d77\u3002\u9019\u662f\u901a\u904e\u6ce8\u610f\u529b\u6a5f\u5236\u548c\u5176\u4ed6\u7279\u5b9a\u7684\u7b56\u7565\u4f86\u5b8c\u6210\u7684\uff0c\u76ee\u7684\u662f\u627e\u5230\u6587\u672c\u548c\u5716\u50cf\u4e4b\u9593\u7684\u76f8\u95dc\u6027\u548c\u8a9e\u5883\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6574\u500b\u96d9\u6d41\u7d50\u69cb\u7684\u4e3b\u8981\u76ee\u7684\u3002\u7576\u4f60\u6709\u4e00\u500b\u5716\u50cf\u548c\u4e00\u500b\u76f8\u95dc\u7684\u53e5\u5b50\u6216\u63cf\u8ff0\uff0c\u7406\u60f3\u7684\u60c5\u6cc1\u662f\u4f60\u7684\u6a21\u578b\u80fd\u5920\u7406\u89e3\u5b83\u5011\u4e4b\u9593\u7684\u95dc\u806f\u6027\u3002\u4f8b\u5982\uff1a\u5982\u679c\u6587\u672c\u8aaa\u300c\u7d05\u8272\u7684\u7403\u300d\uff0c\u6a21\u578b\u61c9\u8a72\u80fd\u5920\u8b58\u5225\u5716\u50cf\u4e2d\u7684\u7d05\u8272\u7403\u9ad4\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u5834\u666f\u5716\u9810\u6e2c\u4efb\u52d9",children:"\u5834\u666f\u5716\u9810\u6e2c\u4efb\u52d9"}),"\n",(0,l.jsx)(e.p,{children:"\u5834\u666f\u5716\uff08Scene Graph\uff09\u672c\u8eab\u4e0d\u662f\u4e00\u500b\u53ef\u8a13\u7df4\u7684\u6a21\u578b\uff0c\u800c\u662f\u4e00\u7a2e\u8cc7\u6599\u7d50\u69cb\u6216\u8868\u793a\u6cd5\u3002\u5b83\u662f\u7528\u4f86\u63cf\u8ff0\u5716\u50cf\u4e2d\u7269\u4ef6\u7684\u5b58\u5728\u3001\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\u4ee5\u53ca\u7269\u4ef6\u7684\u7279\u5b9a\u5c6c\u6027\u7684\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5834\u666f\u5716\u662f\u4e00\u7a2e\u8996\u89ba\u8868\u793a\u6cd5\uff0c\u63cf\u8ff0\u4e86\u5716\u50cf\u4e2d\u7269\u4ef6\u7684\u5b58\u5728\u3001\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\u4ee5\u53ca\u7269\u4ef6\u7684\u7279\u5b9a\u5c6c\u6027\u3002\u8209\u4f8b\u4f86\u8aaa\uff0c\u5c0d\u65bc\u4e00\u5f35\u6709\u300c\u7d05\u860b\u679c\u5728\u684c\u5b50\u4e0a\u300d\u7684\u5716\u7247\uff0c\u5834\u666f\u5716\u5c07\u6703\u5305\u542b\uff1a\u300c\u860b\u679c\u300d\u9019\u500b\u7269\u4ef6\u3001\u300c\u684c\u5b50\u300d\u9019\u500b\u7269\u4ef6\u3001\u860b\u679c\u7684\u5c6c\u6027\u300c\u7d05\u8272\u300d\u3001\u4ee5\u53ca\u860b\u679c\u548c\u684c\u5b50\u4e4b\u9593\u7684\u95dc\u4fc2\u300c\u5728\u2026\u4e0a\u300d\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e09\u5927\u9810\u6e2c\u4efb\u52d9\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7269\u4ef6\u9810\u6e2c"}),"\uff1a\u9019\u90e8\u5206\u7684\u76ee\u7684\u662f\u9810\u6e2c\u6216\u8b58\u5225\u6587\u672c\u4e2d\u63d0\u5230\u7684\u7279\u5b9a\u7269\u4ef6\u3002\u4f8b\u5982\uff1a\u5728\u53e5\u5b50\u300c\u7d05\u860b\u679c\u5728\u684c\u5b50\u4e0a\u300d\u4e2d\uff0c\u5b83\u61c9\u8a72\u80fd\u5920\u8b58\u5225\u300c\u860b\u679c\u300d\u548c\u300c\u684c\u5b50\u300d\u70ba\u4e3b\u8981\u7684\u7269\u4ef6\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5c6c\u6027\u9810\u6e2c"}),"\uff1a\u9019\u90e8\u5206\u8457\u91cd\u65bc\u7269\u4ef6\u7684\u7279\u5b9a\u7279\u5fb5\u6216\u63cf\u8ff0\u3002\u5728\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0c\u7269\u4ef6\u300c\u860b\u679c\u300d\u7684\u5c6c\u6027\u662f\u300c\u7d05\u8272\u300d\u3002\u9019\u90e8\u5206\u7684\u76ee\u7684\u662f\u8b58\u5225\u548c\u9810\u6e2c\u9019\u4e9b\u5c6c\u6027\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u95dc\u4fc2\u9810\u6e2c"}),"\uff1a\u9019\u90e8\u5206\u7684\u76ee\u6a19\u662f\u8b58\u5225\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\u3002\u5728\u6211\u5011\u7684\u4f8b\u5b50\u4e2d\uff0c\u860b\u679c\u548c\u684c\u5b50\u4e4b\u9593\u7684\u95dc\u4fc2\u662f\u300c\u5728\u2026\u4e0a\u300d\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u85c9\u7531\u9019\u4e09\u500b\u9810\u6e2c\u4efb\u52d9\uff0cERNIE-ViL \u88ab\u8a13\u7df4\u53bb\u6df1\u5165\u5730\u5c0d\u8996\u89ba\uff08\u5716\u50cf\uff09\u548c\u8a9e\u8a00\uff08\u6587\u672c\u63cf\u8ff0\uff09\u4e4b\u9593\u7684\u8a9e\u7fa9\u9032\u884c\u5efa\u6a21\u3002\u9019\u610f\u5473\u8457\u6a21\u578b\u4e0d\u50c5\u50c5\u8b58\u5225\u5716\u50cf\u4e2d\u7684\u7269\u4ef6\u548c\u5176\u63cf\u8ff0\uff0c\u9084\u80fd\u5920\u7406\u89e3\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\u4ee5\u53ca\u5b83\u5011\u7684\u7279\u5b9a\u5c6c\u6027\uff0c\u5f9e\u800c\u63d0\u4f9b\u66f4\u8c50\u5bcc\u3001\u66f4\u6df1\u5165\u7684\u8996\u89ba\u8a9e\u8a00\u8868\u793a\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u8a9e\u7fa9\u5c0d\u9f4a",children:"\u8a9e\u7fa9\u5c0d\u9f4a"}),"\n",(0,l.jsx)(e.p,{children:"ERNIE-ViL \u7684\u6838\u5fc3\u76ee\u6a19\u4e4b\u4e00\u662f\u78ba\u4fdd\u8996\u89ba\uff08\u5373\u5716\u50cf\uff09\u548c\u8a9e\u8a00\uff08\u5373\u6587\u672c\uff09\u4e4b\u9593\u5b58\u5728\u6df1\u5165\u7684\u8a9e\u7fa9\u5c0d\u9f4a\u3002\u8a9e\u7fa9\u5c0d\u9f4a\u53ef\u4ee5\u7406\u89e3\u70ba\u6a21\u578b\u5c0d\u5716\u50cf\u4e2d\u7684\u7269\u4ef6\u548c\u5b83\u5728\u53e5\u5b50\u4e2d\u7684\u8a9e\u7fa9\u63cf\u8ff0\u4e4b\u9593\u7684\u6df1\u5165\u7406\u89e3\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f8b\u5982\uff1a\u7576\u5716\u50cf\u4e2d\u6709\u4e00\u53ea\u8c93\u5728\u6c7d\u8eca\u4e0a\uff0c\u6a21\u578b\u4e0d\u50c5\u8981\u8b58\u5225\u51fa\u5716\u50cf\u4e2d\u7684\u300c\u8c93\u300d\u548c\u300c\u6c7d\u8eca\u300d\uff0c\u9084\u8981\u7406\u89e3\u300c\u5728\u2026\u4e4b\u4e0a\u300d\u9019\u4e00\u95dc\u4fc2\u3002\u9019\u6a23\u7684\u8a9e\u7fa9\u7406\u89e3\u78ba\u4fdd\u6a21\u578b\u80fd\u5920\u5728\u63cf\u8ff0\u548c\u5716\u50cf\u4e4b\u9593\u5efa\u7acb\u6b63\u78ba\u7684\u9023\u63a5\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u7269\u4ef6\u3001\u5c6c\u6027\u548c\u95dc\u4fc2\u7684\u9810\u6e2c\u4efb\u52d9\u5728\u6b64\u904e\u7a0b\u4e2d\u8d77\u5230\u4e86\u95dc\u9375\u4f5c\u7528\u3002\u9019\u4e9b\u4efb\u52d9\u8981\u6c42\u6a21\u578b\u4e0d\u50c5\u8981\u8b58\u5225\u5716\u50cf\u4e2d\u7684\u7269\u4ef6\u548c\u5176\u5c6c\u6027\uff0c\u9084\u8981\u7406\u89e3\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\uff0c\u9019\u6709\u52a9\u65bc\u5efa\u7acb\u66f4\u5f37\u5927\u7684\u8de8\u6a21\u614b\u7406\u89e3\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u7de8\u78bc\u65b9\u6cd5",children:"\u7de8\u78bc\u65b9\u6cd5"}),"\n",(0,l.jsx)(e.p,{children:"\u7de8\u78bc\u662f\u6a5f\u5668\u5b78\u7fd2\u4e2d\u7684\u4e00\u7a2e\u6280\u8853\uff0c\u76ee\u7684\u662f\u5c07\u9ad8\u7dad\u7684\u8f38\u5165\u6578\u64da\u8f49\u5316\u70ba\u4f4e\u7dad\u7684\u5f62\u5f0f\uff0c\u9019\u6709\u52a9\u65bc\u6a21\u578b\u66f4\u597d\u5730\u7406\u89e3\u548c\u8655\u7406\u6578\u64da\u3002ERNIE-ViL \u4f7f\u7528\u4e86\u4e00\u4e9b\u5148\u9032\u7684\u7de8\u78bc\u6280\u8853\u4f86\u8655\u7406\u5176\u8f38\u5165\u7684\u6587\u672c\u548c\u5716\u50cf\u6578\u64da\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u53e5\u5b50\u7de8\u78bc"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 WordPiece \u65b9\u6cd5\u9032\u884c\u53e5\u5b50\u5206\u89e3\u3002\u9019\u662f\u4e00\u7a2e\u5c07\u8a5e\u8a9e\u5206\u89e3\u6210\u66f4\u5c0f\u7684\u5b50\u55ae\u4f4d\u6216\u7247\u6bb5\u7684\u65b9\u6cd5\u3002\u4f8b\u5982\uff1a\u300cplaying\u300d\u53ef\u4ee5\u5206\u89e3\u70ba\u300cplay\u300d\u548c\u300cing\u300d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u751f\u6210\u7684\u6bcf\u500b\u5b50\u8a5e\u7684\u7de8\u78bc\u662f\u57fa\u65bc\u591a\u7a2e\u4fe1\u606f\u6e90\u7684\u7d44\u5408\uff0c\u5305\u62ec\uff1a\u539f\u59cb\u7684\u8a5e\u7de8\u78bc\uff08\u57fa\u65bc\u8a5e\u7684\u8a9e\u7fa9\uff09\u3001\u5206\u6bb5\u7de8\u78bc\uff08\u5340\u5206\u4e0d\u540c\u7684\u53e5\u5b50\u6216\u6bb5\u843d\uff09\u4ee5\u53ca\u5e8f\u5217\u4f4d\u7f6e\u7de8\u78bc\uff08\u78ba\u5b9a\u8a5e\u5728\u53e5\u5b50\u4e2d\u7684\u4f4d\u7f6e\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5716\u50cf\u7de8\u78bc"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528\u9810\u8a13\u7df4\u7684\u7269\u4ef6\u5075\u6e2c\u5668\u4f86\u8b58\u5225\u5716\u50cf\u4e2d\u7684\u4e3b\u8981\u7269\u4ef6\u548c\u7279\u5f81\u3002\u4f8b\u5982\uff1a\u5b83\u53ef\u4ee5\u8b58\u5225\u5716\u50cf\u4e2d\u7684\u300c\u8c93\u300d\u6216\u300c\u6c7d\u8eca\u300d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5c0d\u65bc\u6bcf\u500b\u8b58\u5225\u51fa\u7684\u7269\u4ef6\u6216\u5340\u57df\uff0c\u6a21\u578b\u9084\u6703\u7de8\u78bc\u5176\u5728\u5716\u50cf\u4e2d\u7684\u4f4d\u7f6e\u8cc7\u8a0a\u3002\u9019\u6709\u52a9\u65bc\u6a21\u578b\u4e86\u89e3\u7269\u4ef6\u4e4b\u9593\u7684\u76f8\u5c0d\u4f4d\u7f6e\u548c\u95dc\u4fc2\uff0c\u4f8b\u5982\uff1a\u300c\u8c93\u300d\u5728\u300c\u6c7d\u8eca\u300d\u7684\u4e0a\u65b9\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u9810\u8a13\u7df4\u4efb\u52d9",children:"\u9810\u8a13\u7df4\u4efb\u52d9"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6df1\u5ea6\u5b78\u7fd2\u7684\u9818\u57df\u4e2d\uff0c\u9810\u8a13\u7df4\u4efb\u52d9\u662f\u4e00\u7a2e\u5e38\u898b\u7684\u7b56\u7565\uff0c\u65e8\u5728\u5229\u7528\u5927\u91cf\u672a\u6a19\u8a18\u7684\u6578\u64da\u63d0\u524d\u8a13\u7df4\u6a21\u578b\uff0c\u4f7f\u5176\u5728\u5f8c\u7e8c\u7684\u7279\u5b9a\u4efb\u52d9\u4e0a\u5177\u6709\u66f4\u597d\u7684\u6cdb\u5316\u80fd\u529b\u3002ERNIE-ViL \u91dd\u5c0d\u8996\u89ba\u8a9e\u8a00\u6a21\u578b\u63d0\u51fa\u4e86\u4e00\u7cfb\u5217\u9810\u8a13\u7df4\u4efb\u52d9\uff0c\u5305\u62ec\u7269\u4ef6\u9810\u6e2c\u3001\u5c6c\u6027\u9810\u6e2c\u3001\u95dc\u4fc2\u9810\u6e2c\u4ee5\u53ca\u63a9\u78bc\u8a9e\u8a00\u5efa\u6a21\uff0c\u4ee5\u4e0b\u6211\u5011\u9032\u4e00\u6b65\u63a2\u8a0e\u6bcf\u4e00\u500b\u9810\u8a13\u7df4\u4efb\u52d9\u7684\u7279\u9ede\u53ca\u5176\u610f\u7fa9\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7269\u4ef6\u9810\u6e2c"})}),"\n",(0,l.jsx)(e.p,{children:"\u7269\u4ef6\u4f5c\u70ba\u8996\u89ba\u5834\u666f\u7684\u6838\u5fc3\u5143\u7d20\uff0c\u5c0d\u65bc\u7406\u89e3\u8a72\u5834\u666f\u81f3\u95dc\u91cd\u8981\u3002\u60f3\u50cf\u4e00\u5f35\u53ea\u6709\u860b\u679c\u548c\u684c\u5b50\u7684\u5716\u7247\uff0c\u82e5\u860b\u679c\u88ab\u906e\u7f69\uff0c\u6574\u5f35\u5716\u7247\u7684\u4e3b\u8981\u5143\u7d20\u5c07\u88ab\u96b1\u85cf\uff0c\u9019\u6703\u5c0d\u6a21\u578b\u7684\u7406\u89e3\u9020\u6210\u56f0\u96e3\u3002\u5728\u7269\u4ef6\u9810\u6e2c\u7684\u9810\u8a13\u7df4\u4efb\u52d9\u4e2d\uff0c\u90e8\u5206\u7269\u4ef6\u6703\u88ab\u9019\u6a23\u906e\u7f69\uff0c\u8981\u6c42\u6a21\u578b\u57fa\u65bc\u5176\u4ed6\u53ef\u898b\u7684\u8996\u89ba\u548c\u6587\u672c\u4fe1\u606f\u9032\u884c\u9810\u6e2c\u3002\u9019\u8feb\u4f7f\u6a21\u578b\u5b78\u7fd2\u5728\u5716\u50cf\u548c\u6587\u672c\u4e4b\u9593\u5efa\u7acb\u9023\u63a5\uff0c\u4e26\u63d0\u9ad8\u5c0d\u5834\u666f\u7684\u6574\u9ad4\u8a8d\u77e5\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5c6c\u6027\u9810\u6e2c"})}),"\n",(0,l.jsx)(e.p,{children:"\u7269\u4ef6\u9664\u4e86\u57fa\u672c\u7684\u6982\u5ff5\u5916\uff0c\u9084\u6709\u8a31\u591a\u76f8\u95dc\u7684\u5c6c\u6027\uff0c\u5982\u984f\u8272\u3001\u5927\u5c0f\u548c\u5f62\u72c0\u3002\u4f8b\u5982\uff1a\u300c\u7d05\u8272\u7684\u860b\u679c\u300d\u4e2d\u7684\u300c\u7d05\u8272\u300d\u5c31\u662f\u860b\u679c\u7684\u4e00\u500b\u5c6c\u6027\u3002\u5c6c\u6027\u9810\u6e2c\u4efb\u52d9\u8981\u6c42\u6a21\u578b\u9810\u6e2c\u88ab\u906e\u7f69\u7684\u7269\u4ef6\u7684\u9019\u4e9b\u5c6c\u6027\uff0c\u5f9e\u800c\u4f7f\u6a21\u578b\u80fd\u5920\u66f4\u7cbe\u78ba\u5730\u63cf\u8ff0\u548c\u7406\u89e3\u5716\u50cf\u4e2d\u7684\u7269\u4ef6\uff0c\u800c\u4e0d\u53ea\u662f\u57fa\u672c\u7684\u5206\u985e\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u95dc\u4fc2\u9810\u6e2c"})}),"\n",(0,l.jsx)(e.p,{children:"\u7269\u4ef6\u4e4b\u9593\u7684\u95dc\u4fc2\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u5834\u666f\u4fe1\u606f\u3002\u4f8b\u5982\uff1a\u5728\u300c\u860b\u679c\u5728\u684c\u5b50\u4e0a\u300d\u4e2d\uff0c\u300c\u5728\u2026\u4e4b\u4e0a\u300d\u63cf\u8ff0\u4e86\u860b\u679c\u548c\u684c\u5b50\u4e4b\u9593\u7684\u76f8\u5c0d\u4f4d\u7f6e\u95dc\u4fc2\u3002\u5728\u95dc\u4fc2\u9810\u6e2c\u4efb\u52d9\u4e2d\uff0c\u6a21\u578b\u5c07\u5b78\u7fd2\u5982\u4f55\u5f9e\u5716\u50cf\u4e2d\u8b58\u5225\u9019\u4e9b\u95dc\u4fc2\uff0c\u4e26\u5c07\u5176\u6b63\u78ba\u5730\u6620\u5c04\u5230\u8a9e\u8a00\u63cf\u8ff0\u4e2d\uff0c\u5f9e\u800c\u63d0\u4f9b\u5c0d\u8996\u89ba\u5834\u666f\u7684\u6df1\u5165\u7406\u89e3\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u63a9\u78bc\u8a9e\u8a00\u5efa\u6a21 (MLM)"})}),"\n",(0,l.jsx)(e.p,{children:"MLM \u662f\u4e00\u7a2e\u6587\u672c\u9810\u8a13\u7df4\u4efb\u52d9\u3002\u4f8b\u5982\uff1a\u5f9e\u300c\u860b\u679c\u662f\u7d05\u8272\u7684\u300d\u9019\u53e5\u8a71\u4e2d\uff0c\u906e\u4f4f\u300c\u7d05\u8272\u300d\uff0c\u7136\u5f8c\u8981\u6c42\u6a21\u578b\u586b\u88dc\u9019\u500b\u907a\u5931\u7684\u90e8\u5206\u3002ERNIE-ViL \u901a\u904e\u9019\u7a2e\u7b56\u7565\u5b78\u7fd2\u6587\u672c\u7684\u53e5\u6cd5\u548c\u8a9e\u7fa9\u4fe1\u606f\uff0c\u4f7f\u5176\u5728\u5f8c\u7e8c\u7684\u4efb\u52d9\u4e2d\u5177\u6709\u66f4\u5f37\u5927\u7684\u8a9e\u8a00\u8655\u7406\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u63a9\u78bc\u5340\u57df\u9810\u6e2c\u548c\u5716\u50cf\u6587\u5b57\u5339\u914d"})}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u4e9b\u4efb\u52d9\u5c08\u6ce8\u65bc\u5716\u50cf\u90e8\u5206\uff0c\u5c31\u662f\u6211\u5011\u4e4b\u524d\u63d0\u5230\u904e\u7684 ITM (Image-Text Matching) \u548c MRM (Masked Region Modeling)\u3002\u4f8b\u5982\uff1a\u4e00\u5f35\u5716\u7247\u4e2d\u53ef\u80fd\u5305\u542b\u4e00\u500b\u300c\u7d05\u8272\u7684\u860b\u679c\u300d\u548c\u300c\u6728\u88fd\u7684\u684c\u5b50\u300d\u3002\u6a21\u578b\u53ef\u80fd\u6703\u906e\u4f4f\u860b\u679c\u7684\u90e8\u5206\uff0c\u7136\u5f8c\u8a66\u5716\u6839\u64da\u684c\u5b50\u548c\u76f8\u95dc\u7684\u6587\u5b57\u63cf\u8ff0\u4f86\u9810\u6e2c\u906e\u4f4f\u7684\u90e8\u5206\u3002\u9019\u7a2e\u9810\u8a13\u7df4\u4efb\u52d9\u4e0d\u50c5\u589e\u5f37\u4e86\u6a21\u578b\u5c0d\u55ae\u4e00\u6a21\u614b\u7684\u7406\u89e3\uff0c\u9084\u52a0\u5f37\u4e86\u8de8\u6a21\u614b\u9593\u7684\u806f\u7cfb\uff0c\u5e6b\u52a9\u6a21\u578b\u5728\u771f\u5be6\u5834\u666f\u4e2d\u66f4\u597d\u5730\u6574\u5408\u8996\u89ba\u548c\u8a9e\u8a00\u4fe1\u606f\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,l.jsx)(e.p,{children:"ERNIE-ViL \u7684\u5be6\u9a57\u7d50\u679c\u5728\u591a\u7a2e\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e0a\u5c55\u73fe\u4e86\u5176\u5353\u8d8a\u7684\u6027\u80fd\uff0c\u7279\u5225\u662f\u7576\u5b83\u548c\u5176\u4ed6\u5148\u9032\u7684\u8de8\u6a21\u614b\u9810\u8a13\u7df4\u6a21\u578b\u9032\u884c\u6bd4\u8f03\u6642\u3002\u4ee5\u4e0b\u5e7e\u9ede\u70ba\u4f5c\u8005\u5c0d\u6b64\u6a21\u578b\u7684\u4e3b\u8981\u89c0\u5bdf\u548c\u8a0e\u8ad6\uff1a"}),"\n",(0,l.jsx)(e.h3,{id:"\u57df\u5916\u8a13\u7df4\u8cc7\u6599\u7684\u512a\u52e2",children:"\u57df\u5916\u8a13\u7df4\u8cc7\u6599\u7684\u512a\u52e2"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"ERNIE-ViL \u5728\u4e0d\u540c\u8cc7\u6599\u96c6\u4e0a\u7684\u6027\u80fd",src:i(4135).A+"",width:"1024",height:"656"})}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u64da\u8868 1 \u7684\u6578\u64da\uff0cERNIE-ViL \u6a21\u578b\u5728\u591a\u500b\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e0a\u5c55\u73fe\u51fa\u5353\u8d8a\u7684\u6027\u80fd\uff0c\u7279\u5225\u662f\u7576\u5b83\u5728\u57df\u5916\u7684\u5927\u578b\u8cc7\u6599\u96c6 CC \u548c SBU \u4e0a\u9032\u884c\u9810\u8a13\u7df4\u6642\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4e3b\u8981\u7684\u4eae\u9ede\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u6bd4\u8f03\u5176\u4ed6\u5728\u76f8\u540c\u57df\u5916\u8cc7\u6599\u96c6\u4e0a\u9810\u8a13\u7df4\u7684\u65b9\u6cd5\uff0cERNIE-ViL \u5728 5 \u500b\u4e3b\u8981\u65b9\u9762\u4e0a\u5747\u53d6\u5f97\u4e86\u6700\u4f73\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u8996\u89ba\u63a8\u7406\u90e8\u5206\uff0cERNIE-ViL-large \u76f8\u6bd4 VLBERT-large \u5728 VCR \u4efb\u52d9\u4e0a\u6709\u4e86 6.60% \u7684\u63d0\u5347\uff0c\u800c\u5728 VQA \u4efb\u52d9\u4e0a\u63d0\u9ad8\u4e86 1.74%\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5c0d\u65bc\u8996\u89ba\u57fa\u790e\u4efb\u52d9\uff0cERNIE-ViL-large \u5728 RefCOCO+ \u7684 testA \u548c testB \u90e8\u5206\u76f8\u6bd4 VLBERT-large \u5206\u5225\u63d0\u9ad8\u4e86 2.40%\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u8de8\u6a21\u614b\u6aa2\u7d22\u7684\u90e8\u5206\uff0cERNIE-ViLbase \u5728\u5f71\u50cf\u6aa2\u7d22\u548c\u6587\u5b57\u6aa2\u7d22\u4efb\u52d9\u4e2d\u5206\u5225\u53d6\u5f97\u4e86 2.94% \u548c 0.50% \u7684\u63d0\u5347\uff0c\u8d85\u8d8a\u4e86 Unicoder-VL-base\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u7576\u4f7f\u7528\u57df\u5916\u548c\u57df\u5167\u7684\u6240\u6709\u8cc7\u6599\u96c6\u9032\u884c\u9810\u8a13\u7df4\u6642\uff0cERNIE-ViL-large \u4f9d\u7136\u5728\u591a\u500b\u4efb\u52d9\u4e0a\u8d85\u8d8a\u4e86\u5176\u4ed6\u5148\u9032\u6a21\u578b\uff0c\u5982 UNITER\u3001OSCAR \u548c VILLA\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u5834\u666f\u5716\u9810\u6e2c\u7684\u91cd\u8981\u6027",children:"\u5834\u666f\u5716\u9810\u6e2c\u7684\u91cd\u8981\u6027"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"ERNIE-ViL \u5728\u4e0d\u540c\u4efb\u52d9\u4e0a\u7684\u6027\u80fd",src:i(36394).A+"",width:"1024",height:"151"})}),"\n",(0,l.jsx)(e.p,{children:"\u5834\u666f\u5716\u9810\u6e2c\uff08Scene Graph Prediction, SGP\uff09\u4efb\u52d9\u5728\u6a21\u578b\u7684\u8868\u73fe\u4e2d\u8d77\u5230\u4e86\u81f3\u95dc\u91cd\u8981\u7684\u4f5c\u7528\u3002\u5f9e\u5be6\u9a57\u4e2d\u53ef\u4ee5\u89c0\u5bdf\u5230\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5834\u666f\u5716\u9810\u6e2c\u7684\u5f15\u5165"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"ERNIE-ViL \u5728\u5f15\u5165 SGP \u4efb\u52d9\u5f8c\uff0c\u6574\u9ad4\u8868\u73fe\u5f97\u5230\u4e86\u986f\u8457\u7684\u63d0\u5347\u3002\u9019\u500b\u7d50\u679c\u7a81\u986f\u4e86 SGP \u5728\u9810\u8a13\u7df4\u968e\u6bb5\u7684\u50f9\u503c\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5c0d\u7279\u5b9a\u4efb\u52d9\u7684\u6539\u9032"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5728\u57fa\u790e\u5f15\u7528\u8868\u9054\u5f0f\u4e0a\uff0c\u5c24\u5176\u662f\u9700\u8981\u6df1\u5165\u7684\u8a9e\u7fa9\u5c0d\u9f4a\u7684\u90e8\u5206\uff0cSGP \u4f7f\u6a21\u578b\u5728 RefCOCO+ \u4e0a\u7684\u6e96\u78ba\u7387\u63d0\u9ad8\u4e86 0.69%\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5c0d\u65bc\u5716\u50cf\u6aa2\u7d22\u4efb\u52d9\uff0c\u6a21\u578b\u5728 Flickr30K \u6578\u64da\u96c6\u4e0a\u7684 R@1 \u63d0\u9ad8\u4e86 2.22%\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"ERNIE 2.0 \u7684\u5f71\u97ff"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f9e ERNIE 2.0 \u958b\u59cb\u7684\u6587\u5b57\u521d\u59cb\u5316\u9032\u4e00\u6b65\u63d0\u9ad8\u4e86\u6a21\u578b\u7684\u8868\u73fe\u3002\u7279\u5225\u662f\u5728\u8996\u89ba\u63a8\u7406\u4efb\u52d9\uff0c\u5982 VCR\uff0c\u5176\u6548\u679c\u5c24\u70ba\u660e\u986f\u3002\u9019\u53ef\u80fd\u662f\u56e0\u70ba ERNIE 2.0 \u5728\u9810\u8a13\u7df4\u904e\u7a0b\u4e2d\u5b78\u5230\u4e86\u66f4\u591a\u7684\u5e38\u8b58\u77e5\u8b58\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"ERNIE-ViL \u5728\u52a0\u5165 SGP \u4efb\u52d9\u5f8c\uff0c\u5176\u6027\u80fd\u6709\u986f\u8457\u7684\u63d0\u5347\uff0c\u5c24\u5176\u662f\u5728\u9700\u8981\u8a73\u7d30\u8a9e\u7fa9\u5c0d\u9f4a\u7684\u4efb\u52d9\u4e0a\uff0c\u5982\u57fa\u790e\u5f15\u7528\u8868\u9054\u548c\u8de8\u6a21\u614b\u6aa2\u7d22\u3002\u9019\u7a81\u986f\u4e86\u5834\u666f\u5716\u7684\u5efa\u6a21\u5c0d\u65bc\u7406\u89e3\u5716\u50cf\u548c\u6587\u672c\u4e4b\u9593\u7684\u95dc\u806f\u7684\u91cd\u8981\u6027\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u5b8c\u5f62\u586b\u7a7a\u6e2c\u9a57",children:"\u5b8c\u5f62\u586b\u7a7a\u6e2c\u9a57"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"ERNIE-ViL \u5728\u5b8c\u5f62\u586b\u7a7a\u6e2c\u9a57\u4e0a\u7684\u6027\u80fd",src:i(73113).A+"",width:"1024",height:"398"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528\u8996\u89ba\u6a21\u614b\u70ba\u689d\u4ef6\u7684\u8a9e\u8a00\u5b8c\u5f62\u586b\u7a7a\u6e2c\u9a57\u4f86\u8a55\u4f30 SGP \u4efb\u52d9\u7684\u6548\u679c\u3002\u6b64\u6e2c\u9a57\u9700\u8981\u6a21\u578b\u6839\u64da\u6587\u5b57\u548c\u5716\u50cf\u7684\u4e0a\u4e0b\u6587\u63a8\u65b7\u88ab\u96b1\u85cf\u7684\u8a73\u7d30\u8a9e\u610f\u6a19\u8a18\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6578\u64da\u96c6\u69cb\u5efa"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f9e Flickr30K \u8cc7\u6599\u96c6\u4e2d\u96a8\u6a5f\u9078\u53d6\u4e86 15,000 \u500b\u5716\u50cf\u6587\u5b57\u5c0d\u3002\u5206\u5225\u9078\u64c7\u4e86 5,000 \u500b\u7269\u4ef6\u3001\u5c6c\u6027\u548c\u95dc\u4fc2\u6a19\u8a18\u4f5c\u70ba\u96b1\u85cf\u76ee\u6a19\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u8a55\u4f30\u6307\u6a19"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528\u524d\u4e00\u6e96\u78ba\u7387\uff08ACC@1\uff09\u548c\u524d\u4e94\u6e96\u78ba\u7387\uff08ACC@5\uff09\u4f5c\u70ba\u8a55\u4f30\u6a19\u6e96\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6bd4\u8f03\u7d50\u679c\uff08\u6839\u64da\u8868 3\uff09"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 SGP \u9810\u8a13\u7df4\u7684\u6a21\u578b\u76f8\u6bd4\u4e0d\u4f7f\u7528 SGP \u7684\u6a21\u578b\u5728 ACC@1 \u4e0a\u986f\u793a\u51fa\u4e86\u986f\u8457\u6539\u9032\uff1a\u7269\u4ef6\u6539\u9032\u4e86 1.20%\uff0c\u95dc\u4fc2\u6539\u9032\u4e86 3.08%\uff0c\u5c6c\u6027\u6539\u9032\u4e86 1.84%\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5169\u500b\u6a21\u578b\u7684\u6587\u5b57\u53c3\u6578\u90fd\u662f\u57fa\u65bc BERT \u521d\u59cb\u5316\u7684\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u89c0\u5bdf\u7d50\u679c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6709\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u4e0d\u4f7f\u7528 SGP \u4efb\u52d9\u9810\u8a13\u7df4\u7684\u6a21\u578b\u7121\u6cd5\u6b63\u78ba\u9810\u6e2c\uff0c\u56e0\u5176\u6c92\u6709\u5b78\u7fd2\u8a73\u7d30\u8a9e\u7fa9\u5c0d\u9f4a\u4e14\u5728\u9810\u8a13\u7df4\u6642\u7121\u6cd5\u5340\u5206\u5e38\u7528\u8a5e\u548c\u8a73\u7d30\u8a9e\u7fa9\u8a5e\u3002\u5728\u5176\u4ed6\u60c5\u5883\u4e0b\uff0c\u5118\u7ba1\u6a21\u578b\u80fd\u5920\u9032\u884c\u9810\u6e2c\uff0c\u4f46\u5176\u7f6e\u4fe1\u5ea6\u4f4e\u65bc\u4f7f\u7528 SGP \u4efb\u52d9\u9810\u8a13\u7df4\u7684\u6a21\u578b\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4f5c\u8005\u5f9e\u5b8c\u5f62\u586b\u7a7a\u6e2c\u9a57\u8868\u660e\uff0c\u5f15\u5165 SGP \u4efb\u52d9\u53ef\u4ee5\u4f7f ERNIE-ViL \u6a21\u578b\u66f4\u6709\u6548\u5730\u5b78\u7fd2\u8de8\u6a21\u5f0f\u7684\u8a73\u7d30\u8a9e\u7fa9\u5c0d\u9f4a\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,l.jsx)(e.p,{children:"ERNIE \u67b6\u69cb\u5728\u591a\u6a21\u614b\u5b78\u7fd2\u7684\u904e\u7a0b\u4e2d\uff0c\u96d6\u7136\u80fd\u6709\u6548\u63d0\u53d6\u77e5\u8b58\uff0c\u4f46\u5176\u8a08\u7b97\u91cf\u548c\u5b58\u5132\u9700\u6c42\u90fd\u76f8\u5c0d\u8f03\u5927\u3002\u9019\u610f\u5473\u8457\u9700\u8981\u66f4\u591a\u7684\u8a08\u7b97\u8cc7\u6e90\uff0c\u9019\u5728\u90e8\u5206\u8a2d\u5099\u6216\u60c5\u5883\u4e2d\u53ef\u80fd\u6703\u53d7\u5230\u9650\u5236\u3002\u5176\u6b21\uff0c\u5118\u7ba1 ERNIE \u6709\u80fd\u529b\u5229\u7528\u4e8b\u5148\u5b78\u7fd2\u7684\u77e5\u8b58\uff0c\u4f46\u5b83\u7684\u6cdb\u5316\u80fd\u529b\u5728\u4e00\u4e9b\u7279\u5b9a\u7684\u3001\u8f03\u70ba\u7f55\u898b\u7684\u8de8\u6a21\u614b\u5834\u666f\u4e2d\u53ef\u80fd\u4ecd\u6709\u5f85\u52a0\u5f37\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5ef6\u4f38\u81f3 ERNIE-ViL\uff0c\u8a72\u6a21\u578b\u96d6\u7136\u6210\u529f\u5730\u5f15\u5165\u4e86\u5834\u666f\u5716\u9810\u6e2c\u4efb\u52d9\u4ee5\u512a\u5316\u8de8\u6a21\u614b\u8a73\u7d30\u8a9e\u7fa9\u5c0d\u9f4a\uff0c\u4f46\u540c\u6642\u4e5f\u5e36\u4f86\u4e86\u65b0\u7684\u6311\u6230\u3002\u8209\u4f8b\u4f86\u8aaa\uff0c\u5982\u679c\u5834\u666f\u5716\u4e2d\u7684\u7269\u4ef6\u5982\u300c\u6a39\u300d\u548c\u300c\u4eba\u300d\u4e4b\u9593\u7684\u95dc\u4fc2\u88ab\u932f\u8aa4\u5730\u6a19\u8a18\u70ba\u300c\u5750\u5728\u300d\u800c\u975e\u300c\u7ad9\u5728\u300d\uff0c\u9019\u7a2e\u8aa4\u89e3\u53ef\u80fd\u6703\u5c0e\u81f4\u6a21\u578b\u5728\u4e0b\u6e38\u4efb\u52d9\u4e0a\u7684\u5931\u6548\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u5834\u666f\u5716\u7684\u6e96\u78ba\u6027\u548c\u5b8c\u6574\u6027\u90fd\u6703\u76f4\u63a5\u5f71\u97ff\u6a21\u578b\u7684\u6027\u80fd\uff01"})}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u589e\u52a0\u4e86\u5728\u5be6\u969b\u61c9\u7528\u4e2d\u7684\u4e0d\u78ba\u5b9a\u6027\u3002\u518d\u8005\uff0c\u8003\u616e\u4e00\u500b\u7167\u7247\u4e2d\u5448\u73fe\u7684\u662f\u4e00\u500b\u6a21\u7cca\u7684\u80cc\u5f71\uff0c\u6216\u662f\u591a\u91cd\u91cd\u758a\u7684\u7269\u4ef6\uff0c\u6a21\u578b\u53ef\u80fd\u96e3\u4ee5\u78ba\u5b9a\u90a3\u662f\u300c\u4eba\u300d\u9084\u662f\u300c\u5f71\u5b50\u300d\u6216\u5176\u4ed6\u7269\u9ad4\u3002\u5728\u9019\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u6a21\u578b\u5728\u9047\u5230\u8907\u96dc\u6216\u6a21\u7cca\u7684\u5834\u666f\u6642\uff0c\u53ef\u80fd\u6703\u9762\u81e8\u89e3\u8b80\u56f0\u96e3\uff0c\u9019\u4e5f\u9650\u5236\u4e86\u5176\u5728\u67d0\u4e9b\u7279\u5b9a\u5834\u5408\uff0c\u4f8b\u5982\u7576\u9700\u8981\u7cbe\u78ba\u7269\u4ef6\u8b58\u5225\u6216\u5834\u666f\u89e3\u8b80\u6642\u7684\u9069\u7528\u6027\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528\u5834\u666f\u5716\uff0c\u5176\u5be6\u80cc\u5f8c\u96b1\u542b\u7684\u610f\u6db5\u5c31\u662f\uff1a\u300c\u4eba\u985e\u7406\u89e3\u77e5\u8b58\u7684\u65b9\u5f0f\u300d\u6bd4\u300c\u6a21\u578b\u7406\u89e3\u77e5\u8b58\u7684\u65b9\u5f0f\u300d\u9084\u8981\u597d\uff0c\u6240\u4ee5\u8b93\u6a21\u578b\u4f86\u5b78\u7fd2\u4eba\u985e\u7406\u89e3\u4e16\u754c\u7684\u65b9\u5f0f\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f46\uff0c\u9019\u6a23\u597d\u55ce\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u5011\u4e5f\u5efa\u8b70\u4f60\u4e5f\u53ef\u4ee5\u8a66\u8457\u60f3\u60f3\uff0c\u9019\u6a23\u597d\u5728\u54ea\u88e1\uff1f\u4e0d\u597d\u5728\u54ea\u88e1\uff1f\u60f3\u6e05\u695a\u4e4b\u5f8c\uff0c\u4f60\u5c31\u6703\u66f4\u6e05\u695a\u5730\u8a8d\u8b58\u5230\u672c\u7bc7\u6587\u7ae0\u4e2d\u4f7f\u7528\u7684\u300c\u77e5\u8b58\u589e\u5f37\u300d\u6280\u6cd5\u6703\u9047\u5230\u7684\u6a5f\u9047\u8207\u56f0\u96e3\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5118\u7ba1\u5982\u6b64\uff0cERNIE-ViL \u5728\u8de8\u6a21\u614b\u9810\u8a13\u7df4\u7684\u9818\u57df\u4ecd\u5c55\u73fe\u51fa\u4ee4\u4eba\u77da\u76ee\u7684\u512a\u52e2\u3002\u5b83\u4e0d\u50c5\u512a\u5316\u4e86\u8a73\u7d30\u8a9e\u7fa9\u7684\u5c0d\u9f4a\uff0c\u800c\u4e14\u9084\u63d0\u4f9b\u4e86\u65b0\u7684\u65b9\u5411\uff0c\u8b6c\u5982\uff1a\u6211\u5011\u80fd\u9032\u4e00\u6b65\u6574\u5408\u5f9e\u5f71\u50cf\u4e2d\u63d0\u53d6\u7684\u5834\u666f\u5716\uff0c\u4ee5\u53ca\u5229\u7528\u5716\u795e\u7d93\u7db2\u8def\uff08GNN\uff09\u4f86\u6574\u5408\u66f4\u591a\u7684\u7d50\u69cb\u5316\u77e5\u8b58\u3002\u9019\u4e0d\u50c5\u662f\u6280\u8853\u9032\u6b65\u7684\u8c61\u5fb5\uff0c\u4e5f\u70ba\u672a\u4f86\u7684\u7814\u7a76\u8005\u63d0\u4f9b\u4e86\u65b0\u7684\u7814\u7a76\u65b9\u5411\u548c\u601d\u8003\u7a7a\u9593\u3002"})]})}function t(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(j,{...n})}):j(n)}},24152:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/ernie_vil_1-7aa05503f954d682d9f2c55c1fb92360.jpg"},4135:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/ernie_vil_2-366b8fa885506457759c6a0514053983.jpg"},36394:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/ernie_vil_3-2005f7d64bb742d62b5a52bc76588a78.jpg"},73113:(n,e,i)=>{i.d(e,{A:()=>l});const l=i.p+"assets/images/ernie_vil_4-8d270533806f2e78d8a1e81e82dcfcfd.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>c});var l=i(96540);const s={},r=l.createContext(s);function d(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);