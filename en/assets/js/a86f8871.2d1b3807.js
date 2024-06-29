"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6732],{9627:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var l=e(74848),s=e(28453);const r={},d="[19.08] ViLBERT",c={id:"vilbert/index",title:"[19.08] ViLBERT",description:"\u5e8f\u5e55\u4e2d\u7684\u4ea4\u7e54",source:"@site/papers/1908-vilbert/index.md",sourceDirName:"1908-vilbert",slug:"/vilbert/",permalink:"/en/papers/vilbert/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[19.08] LXMERT",permalink:"/en/papers/lxmert/"},next:{title:"[19.08] VisualBERT",permalink:"/en/papers/visualbert/"}},h={},x=[{value:"\u5e8f\u5e55\u4e2d\u7684\u4ea4\u7e54",id:"\u5e8f\u5e55\u4e2d\u7684\u4ea4\u7e54",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u8996\u89ba\u8207\u8a9e\u8a00\u7684\u7d50\u5408",id:"\u8996\u89ba\u8207\u8a9e\u8a00\u7684\u7d50\u5408",level:3},{value:"\u6709\u6548\u7684\u8996\u89ba\u57fa\u790e",id:"\u6709\u6548\u7684\u8996\u89ba\u57fa\u790e",level:3},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"ViLBERT \u6a21\u578b\u8a2d\u8a08",id:"vilbert-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u9810\u8a13\u7df4\u6a5f\u5236",id:"\u9810\u8a13\u7df4\u6a5f\u5236",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"ViLBERT \u6548\u679c\u5982\u4f55\uff1f",id:"vilbert-\u6548\u679c\u5982\u4f55",level:3},{value:"ViLBERT \u7684\u8996\u89ba\u6df1\u5ea6\u5c0d\u6548\u80fd\u7684\u5f71\u97ff\uff1f",id:"vilbert-\u7684\u8996\u89ba\u6df1\u5ea6\u5c0d\u6548\u80fd\u7684\u5f71\u97ff",level:3},{value:"\u9810\u8a13\u7df4\u8cc7\u6599\u96c6\u7684\u5f71\u97ff\uff1f",id:"\u9810\u8a13\u7df4\u8cc7\u6599\u96c6\u7684\u5f71\u97ff",level:3},{value:"ViLBERT \u5b78\u5230\u4ec0\u9ebc\uff1f",id:"vilbert-\u5b78\u5230\u4ec0\u9ebc",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function j(n){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"1908-vilbert",children:"[19.08] ViLBERT"}),"\n",(0,l.jsx)(i.h2,{id:"\u5e8f\u5e55\u4e2d\u7684\u4ea4\u7e54",children:"\u5e8f\u5e55\u4e2d\u7684\u4ea4\u7e54"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.a,{href:"https://arxiv.org/abs/1908.02265",children:(0,l.jsx)(i.strong,{children:"ViLBERT: Pretraining Task-Agnostic Visiolinguistic Representations for Vision-and-Language Tasks"})})}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.admonition,{type:"info",children:(0,l.jsx)(i.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,l.jsx)(i.hr,{}),"\n",(0,l.jsx)(i.p,{children:"\u672c\u7bc7\u6587\u7ae0\u8981\u4ecb\u7d39\u7684 ViLBERT \u548c\u4e0a\u4e00\u7bc7\u7684 VisualBERT \u662f\u540c\u4e00\u500b\u6642\u671f\u7684\u4f5c\u54c1\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u5b78\u8853\u754c\u7684\u6bcf\u4e00\u5e74\u90fd\u6703\u767c\u751f\u5f88\u591a\u4e8b\u60c5\uff0c\u800c 2019 \u5e74\u7279\u5225\u591a\uff0c\u4e8b\u60c5\u9060\u9060\u9084\u6c92\u5230\u7d50\u675f\u7684\u6642\u5019\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6211\u5011\u90fd\u77e5\u9053\uff0c\u8981\u8b93\u6a5f\u5668\u771f\u6b63\u300c\u770b\u61c2\u300d\u4e00\u5f35\u5716\u7247\uff0c\u4e26\u7528\u8a9e\u8a00\u63cf\u8ff0\u51fa\u4f86\uff0c\u9019\u7d55\u975e\u6613\u4e8b\u3002\u904e\u53bb\uff0c\u5927\u591a\u6578\u7684\u7814\u7a76\u65b9\u6cd5\u662f\u5c07\u5716\u7247\u7406\u89e3\u548c\u8a9e\u8a00\u8655\u7406\u5206\u958b\u4f86\u9032\u884c\u3002\u4f46\u9019\u6a23\u7684\u505a\u6cd5\uff0c\u7576\u4eba\u5011\u5617\u8a66\u5c07\u9019\u5169\u8005\u7d50\u5408\u6642\uff0c\u7d50\u679c\u5f80\u5f80\u4e0d\u76e1\u4eba\u610f\u3002\u5c31\u597d\u50cf\u6a5f\u5668\u80fd\u8fa8\u8b58\u51fa\u5716\u7247\u4e2d\u662f\u4e00\u96bb\u67f4\u72ac\uff0c\u4f46\u7576\u4f60\u554f\u5b83\u300c\u9019\u662f\u4ec0\u9ebc\u54c1\u7a2e\u7684\u72d7\uff1f\u300d\uff0c\u5b83\u53ef\u80fd\u675f\u624b\u7121\u7b56\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u65bc\u662f\uff0c\u672c\u8ad6\u6587\u63d0\u51fa\u4e86\u4e00\u500b\u65b0\u7684\u65b9\u6cd5\uff1aViLBERT\u3002\u4e0d\u540c\u65bc\u50b3\u7d71\u7684\u5b78\u7fd2\u65b9\u5f0f\uff0cViLBERT \u5e0c\u671b\u5f9e\u4e00\u958b\u59cb\u5c31\u8b93\u6a5f\u5668\u540c\u6642\u5b78\u7fd2\u5716\u7247\u548c\u8a9e\u8a00\u3002\u4f8b\u5982\uff1a\u7576\u7d66\u6a5f\u5668\u4e00\u5f35\u7d05\u8272\u7684\u860b\u679c\u7167\u7247\u548c\u6587\u5b57\u300c\u9019\u662f\u7d05\u8272\u7684\u860b\u679c\u300d\uff0cViLBERT \u6703\u52aa\u529b\u8b93\u6a5f\u5668\u660e\u767d\u300c\u7d05\u8272\u300d\u9019\u500b\u63cf\u8ff0\u8207\u860b\u679c\u7684\u984f\u8272\u4e4b\u9593\u7684\u95dc\u806f\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6839\u64da\u521d\u6b65\u7684\u7814\u7a76\uff0cViLBERT \u5728\u591a\u9805\u6e2c\u8a66\u4e2d\u90fd\u5c55\u73fe\u51fa\u8272\u7684\u8868\u73fe\uff0c\u9060\u8d85\u904e\u5176\u4ed6\u65b9\u6cd5\u3002\u7279\u5225\u662f\u5728\u554f\u7b54\u904a\u6232\u4e2d\uff0cViLBERT \u4e0d\u50c5\u80fd\u300c\u770b\u61c2\u300d\u5716\u7247\uff0c\u9084\u80fd\u7d66\u51fa\u66f4\u7cbe\u6e96\u7684\u56de\u7b54\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u63a5\u8457\uff0c\u6211\u5011\u4f86\u770b\u4e00\u4e0b\u5728\u672c\u8ad6\u6587\u4e2d\uff0c\u4f5c\u8005\u5982\u4f55\u5b9a\u7fa9\u554f\u984c\uff0c\u4e26\u4e14\u63d0\u4f9b\u4e86\u4ec0\u9ebc\u89e3\u6c7a\u65b9\u5f0f\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,l.jsx)(i.h3,{id:"\u8996\u89ba\u8207\u8a9e\u8a00\u7684\u7d50\u5408",children:"\u8996\u89ba\u8207\u8a9e\u8a00\u7684\u7d50\u5408"}),"\n",(0,l.jsx)(i.p,{children:"\u96d6\u7136\u9019\u5169\u500b\u9818\u57df\u5728\u5404\u81ea\u7684\u7bc4\u7587\u4e2d\u90fd\u53d6\u5f97\u4e86\u4e0d\u5c11\u9032\u5c55\uff0c\u4f46\u8981\u7d50\u5408\u8d77\u4f86\u4ecd\u7136\u5177\u6709\u6311\u6230\u6027\u3002\u76ee\u524d\u7684\u65b9\u6cd5\u591a\u534a\u662f\u300c\u5206\u958b\u8a13\u7df4\u8996\u89ba\u548c\u8a9e\u8a00\u6a21\u578b\u300d\uff0c\u7136\u5f8c\u518d\u8a66\u5716\u7d50\u5408\u5b83\u5011\u3002\u9019\u6a23\u7684\u65b9\u5f0f\u5f80\u5f80\u5c0e\u81f4\u4e0d\u7406\u60f3\u7684\u7d50\u679c\uff0c\u56e0\u70ba\u7576\u8996\u89ba\u548c\u8a9e\u8a00\u8cc7\u6599\u6709\u9650\u6216\u6709\u504f\u5dee\u6642\uff0c\u6a21\u578b\u7684\u6cdb\u5316\u80fd\u529b\u8f03\u5dee\u3002"}),"\n",(0,l.jsx)(i.h3,{id:"\u6709\u6548\u7684\u8996\u89ba\u57fa\u790e",children:"\u6709\u6548\u7684\u8996\u89ba\u57fa\u790e"}),"\n",(0,l.jsx)(i.p,{children:"\u5118\u7ba1\u96fb\u8166\u53ef\u4ee5\u8fa8\u8b58\u5716\u7247\u4e2d\u7684\u7269\u9ad4\u6216\u7406\u89e3\u8a9e\u8a00\uff0c\u4f46\u5982\u4f55\u8b93\u9019\u5169\u8005\u95dc\u806f\u8d77\u4f86\u4ecd\u662f\u4e00\u5927\u554f\u984c\u3002\u4f8b\u5982\uff1a\u96fb\u8166\u53ef\u80fd\u53ef\u4ee5\u8fa8\u8b58\u51fa\u5716\u7247\u4e2d\u7684\u4e00\u96bb\u72d7\uff0c\u4f46\u53ef\u80fd\u7121\u6cd5\u8207\u300c\u67f4\u72ac\u300d\u6216\u300c\u7267\u7f8a\u72ac\u300d\u9019\u6a23\u7684\u8a9e\u8a00\u6982\u5ff5\u806f\u7e6b\u8d77\u4f86\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,l.jsx)(i.h3,{id:"vilbert-\u6a21\u578b\u8a2d\u8a08",children:"ViLBERT \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"ViLBERT \u6a21\u578b\u67b6\u69cb",src:e(54739).A+"",width:"1024",height:"813"})}),"\n",(0,l.jsx)(i.p,{children:"\u5728\u8a2d\u8a08 ViLBERT \u6a21\u578b\u6642\uff0c\u4f5c\u8005\u7684\u4e3b\u8981\u76ee\u7684\u662f\u7cc5\u5408\u8996\u89ba\u548c\u8a9e\u8a00\uff0c\u5f9e\u800c\u5f97\u5230\u4e00\u500b\u53ef\u4ee5\u5f9e\u5716\u50cf\u548c\u5c0d\u61c9\u63cf\u8ff0\u4e2d\u5b78\u7fd2\u7684\u6a21\u578b\u3002\u88ab BERT \u5728\u8a9e\u8a00\u5efa\u6a21\u4e0a\u7684\u6210\u529f\u6240\u555f\u767c\uff0c\u4f5c\u8005\u5e0c\u671b\u958b\u767c\u4e00\u500b\u53ef\u4ee5\u5f9e\u914d\u5c0d\u8cc7\u6599\u4e2d\u5b78\u7fd2\u8a9e\u8a00\u548c\u8996\u89ba\u5167\u5bb9\u806f\u5408\u8868\u793a\u7684\u985e\u4f3c\u6a21\u578b\u3002"}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u57fa\u672c\u6982\u5ff5"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u4f5c\u8005\u63d0\u5230\u4e00\u7a2e\u76f4\u89c0\u7684\u8a2d\u8a08\u65b9\u6cd5\uff0c\u5373\u5c07\u8996\u89ba\u8f38\u5165\u8f49\u5316\u70ba\u300cToken\u300d\u4e26\u50cf\u8655\u7406\u6587\u672c\u8f38\u5165\u4e00\u6a23\u5c0d\u5f85\u5b83\u3002\u7136\u800c\uff0c\u9019\u7a2e\u65b9\u6cd5\u6709\u5176\u9650\u5236\uff0c\u56e0\u70ba\u5b83\u53ef\u80fd\u6703\u907a\u5931\u8996\u89ba\u7d30\u7bc0\u4e14\u4e0d\u8003\u616e\u5169\u7a2e\u6a21\u614b\u53ef\u80fd\u9700\u8981\u7684\u4e0d\u540c\u8655\u7406\u5c64\u7d1a\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u96d9\u6d41\u67b6\u69cb"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u4f5c\u8005\u63d0\u51fa\u4e86\u4e00\u500b\u96d9\u6d41\u67b6\u69cb\uff0c\u5176\u4e2d\u4e00\u6d41\u5c08\u70ba\u8996\u89ba\u8a2d\u8a08\uff0c\u53e6\u4e00\u6d41\u5c08\u70ba\u8a9e\u8a00\u8a2d\u8a08\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u9019\u5169\u500b\u6d41\u900f\u904e\u5171\u540c\u6ce8\u610f Transformer layer \u9032\u884c\u4e92\u52d5\uff0c\u5141\u8a31\u5169\u7a2e\u6a21\u614b\u7684\u7db2\u8def\u6df1\u5ea6\u53ef\u8b8a\u4e14\u80fd\u5728\u4e0d\u540c\u6df1\u5ea6\u5be6\u73fe\u8de8\u6a21\u614b\u9023\u63a5\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u5171\u540c\u6ce8\u610f Transformer layer"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u9019\u662f\u4f5c\u8005\u4ecb\u7d39\u7684\u6838\u5fc3\u6a5f\u5236\uff0c\u5b83\u5141\u8a31\u6a21\u578b\u5728\u6bcf\u500b\u6a21\u614b\u7684\u9375\u548c\u503c\u4e4b\u9593\u4ea4\u63db\u8a0a\u606f\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u9019\u7a2e\u8a2d\u8a08\u4f7f\u5f97\u5728\u4e00\u500b\u6a21\u614b\u4e2d\u7684\u7279\u5fb5\u80fd\u5920\u878d\u5408\u5230\u53e6\u4e00\u500b\u6a21\u614b\u7684\u8868\u793a\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u5716\u50cf\u8868\u793a"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u4f5c\u8005\u9078\u64c7\u4e86\u5f9e\u9810\u5148\u8a13\u7df4\u7684\u7269\u4ef6\u5075\u6e2c\u7db2\u8def\u4e2d\u63d0\u53d6\u908a\u754c\u6846\u548c\u76f8\u5c0d\u61c9\u7684\u8996\u89ba\u7279\u5fb5\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u7531\u65bc\u5716\u50cf\u5340\u57df\u4e26\u4e0d\u5177\u6709\u56fa\u5b9a\u7684\u5e8f\u5217\uff0c\u4f5c\u8005\u9078\u64c7\u6839\u64da\u5340\u57df\u4f4d\u7f6e\u7de8\u78bc\u7a7a\u9593\u4f4d\u7f6e\uff0c\u518d\u5c07\u5176\u8207\u8996\u89ba\u7279\u5fb5\u7d50\u5408\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u8a13\u7df4\u4efb\u52d9\u8207\u76ee\u6a19"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u4f5c\u8005\u63d0\u51fa\u4e86\u5169\u7a2e\u4e3b\u8981\u7684\u9810\u8a13\u7df4\u4efb\u52d9\uff1a\u5206\u5225\u70ba MLM \u591a\u6a21\u614b\u5efa\u6a21\u548c\u591a\u6a21\u614b\u5c0d\u9f4a\u9810\u6e2c\u3002"}),"\n",(0,l.jsx)(i.li,{children:"MLM \u591a\u6a21\u614b\u5efa\u6a21\u4efb\u52d9\u7684\u76ee\u7684\u662f\u8b93\u6a21\u578b\u80fd\u5920\u91cd\u5efa\u88ab\u63a9\u84cb\u7684\u8f38\u5165\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u591a\u6a21\u614b\u5c0d\u9f4a\u9810\u6e2c\u5247\u8981\u6c42\u6a21\u578b\u5224\u5b9a\u5716\u50cf\u548c\u6587\u5b57\u662f\u5426\u5c0d\u9f4a\uff0c\u5373\u6587\u5b57\u662f\u5426\u63cf\u8ff0\u5716\u50cf\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\u9810\u8a13\u7df4\u6a5f\u5236",children:"\u9810\u8a13\u7df4\u6a5f\u5236"}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u8a13\u7df4 ViLBERT"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u8cc7\u6599\u96c6"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u4f5c\u8005\u4f7f\u7528\u6982\u5ff5\u5b57\u5e55\u8cc7\u6599\u96c6\uff08Conceptual Captions\uff09\u9032\u884c\u8a13\u7df4\uff0c\u8a72\u8cc7\u6599\u96c6\u662f\u7531 330 \u842c\u500b\u5716\u50cf\u5b57\u5e55\u5c0d\u7d44\u6210\uff0c\u9019\u4e9b\u5c0d\u5b50\u662f\u5f9e\u7db2\u8def\u5716\u50cf\u4e2d\u81ea\u52d5\u64f7\u53d6\u7684\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u5118\u7ba1\u9019\u500b\u8cc7\u6599\u96c6\u5305\u542b\u4e86\u67d0\u4e9b\u566a\u97f3\u548c\u4e0d\u5b8c\u6574\u7684\u5b57\u5e55\uff0c\u5b83\u4ecd\u7136\u63d0\u4f9b\u4e86\u975e\u5e38\u591a\u6a23\u5316\u7684\u8996\u89ba\u5167\u5bb9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u5be6\u65bd\u7d30\u7bc0"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u8a9e\u8a00\u6d41\u4f7f\u7528 BERT-BASE \u6a21\u578b\u521d\u59cb\u5316\uff0c\u9019\u500b\u6a21\u578b\u5728 BookCorpus \u548c\u82f1\u8a9e\u7dad\u57fa\u767e\u79d1\u4e0a\u4e8b\u5148\u8a13\u7df4\u904e\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u8996\u89ba\u7279\u5fb5\u662f\u4f7f\u7528\u5728\u8996\u89ba\u57fa\u56e0\u7d44\u8cc7\u6599\u96c6\u4e0a\u9810\u5148\u8a13\u7df4\u7684 Faster R-CNN \u63d0\u53d6\u7684\u3002"}),"\n",(0,l.jsx)(i.li,{children:"Transformer \u548c\u5171\u540c\u6ce8\u610f\u529b Transformer \u5340\u584a\u5728\u8996\u89ba\u6d41\u4e2d\u90fd\u6709 1024 \u500b\u795e\u7d93\u5143\u548c 8 \u500b\u6ce8\u610f\u529b\u982d\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u6574\u500b\u6a21\u578b\u5728 8 \u500b TitanX GPU \u4e0a\u9032\u884c\u4e86 10 \u500b epoch \u7684\u8a13\u7df4\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u8996\u89ba\u548c\u8a9e\u8a00\u4efb\u52d9\u7684\u5fae\u8abf"})}),"\n",(0,l.jsx)(i.p,{children:"\u4f5c\u8005\u5c07\u9810\u8a13\u7df4\u7684 ViLBERT \u6a21\u578b\u61c9\u7528\u5230\u4e00\u7d44\u8996\u89ba\u548c\u8a9e\u8a00\u4efb\u52d9\u4e0a\uff0c\u4e26\u5c0d\u5176\u9032\u884c\u4e86\u5fae\u8abf\u3002\n\u4ee5\u4e0b\u662f\u5c0d\u5404\u500b\u4efb\u52d9\u7684\u8a73\u7d30\u6982\u8ff0\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Visual Question Answering (VQA)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u8cc7\u6599\u96c6: \u5728\u5305\u542b 110 \u842c\u500b\u8207 COCO \u5f71\u50cf\u76f8\u95dc\u554f\u984c\u7684 VQA 2.0 \u8cc7\u6599\u96c6\u4e0a\u9032\u884c\u8a13\u7df4\u548c\u8a55\u4f30\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u5fae\u8abf\u65b9\u6cd5: \u4f7f\u7528\u5716\u50cf\u548c\u6587\u5b57\u7684\u5143\u7d20\u4e58\u7a4d\u4e0a\u65b9\u7684\u5169\u5c64 MLP \u9032\u884c\u5fae\u8abf\uff0c\u4e26\u5c07\u8a72\u8868\u793a\u6620\u5c04\u5230 3,129 \u500b\u53ef\u80fd\u7b54\u6848\u4e2d\u3002\u9032\u884c\u591a\u6a19\u7c64\u5206\u985e\uff0c\u4e26\u4f7f\u7528\u4e8c\u5143\u4ea4\u53c9\u71b5\u640d\u5931\u9032\u884c\u8a13\u7df4\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Visual Commonsense Reasoning (VCR)"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u8cc7\u6599\u96c6: VCR \u8cc7\u6599\u96c6\uff0c\u6e90\u65bc 11 \u842c\u500b\u96fb\u5f71\u5834\u666f\u7684\u591a\u9805\u9078\u64c7 QA \u554f\u984c\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u5fae\u8abf\u65b9\u6cd5: \u4ee5\u6bcf\u500b\u53ef\u80fd\u7b54\u6848\u548c\u554f\u984c\u7d44\u5408\u70ba\u56db\u500b\u4e0d\u540c\u7684\u6587\u5b57\u8f38\u5165\uff0c\u7136\u5f8c\u5c07\u6bcf\u500b\u6587\u5b57\u8f38\u5165\u8207\u5716\u50cf\u4e00\u8d77\u9032\u884c\u5fae\u8abf\u3002\u6700\u5f8c\u9810\u6e2c\u6bcf\u7d44\u914d\u5c0d\u7684\u5206\u6578\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Grounding Referring Expressions"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u8cc7\u6599\u96c6: RefCOCO+ \u8cc7\u6599\u96c6\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u5fae\u8abf\u65b9\u6cd5: \u4f7f\u7528\u7531 Mask R-CNN \u7522\u751f\u7684\u63d0\u8b70\u908a\u754c\u6846\uff0c\u5c0d\u6bcf\u4e00\u7d44\u5716\u50cf\u5340\u57df\u63d0\u8b70\u9032\u884c\u91cd\u65b0\u6392\u5e8f\uff0c\u4e26\u5229\u7528\u4e8c\u5143\u4ea4\u53c9\u71b5\u640d\u5931\u4f86\u9032\u884c\u8a13\u7df4\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Caption-Based Image Retrieval"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u8cc7\u6599\u96c6: \u8a72\u8cc7\u6599\u96c6\u5305\u542b\u4f86\u81ea Flickr \u7684 31,000 \u5f35\u5716\u7247\uff0c\u6bcf\u5f35\u5716\u7247\u90fd\u6709 5 \u500b\u7368\u7279\u7684\u6a19\u984c\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u5fae\u8abf\u65b9\u6cd5: \u4f5c\u8005\u5728\u591a\u9805\u9078\u64c7\u8a2d\u5b9a\u4e2d\u9032\u884c\u8a13\u7df4\u3002\u5c0d\u65bc\u6bcf\u4e00\u5c0d\u5716\u50cf\u548c\u6a19\u984c\uff0c\u96a8\u6a5f\u9078\u53d6\u4e09\u500b\u5e72\u64fe\u9805\uff1a\u66ff\u63db\u4e00\u500b\u96a8\u6a5f\u7684\u6a19\u984c\u3001\u4e00\u500b\u96a8\u6a5f\u7684\u5716\u50cf\u6216\u5f9e\u76ee\u6a19\u5716\u50cf\u7684 100 \u500b\u6700\u8fd1\u9130\u5c45\u4e2d\u9078\u64c7\u4e00\u500b\u56f0\u96e3\u7684\u8ca0\u6a23\u672c\u3002\u4f7f\u7528\u5c0d\u9f4a\u9810\u6e2c\u7684\u65b9\u6cd5\u4f86\u8a08\u7b97\u6bcf\u4e00\u5c0d\u7684\u76f8\u4f3c\u5ea6\u5206\u6578\uff0c\u4e26\u61c9\u7528 softmax \u51fd\u6578\u4f86\u78ba\u5b9a\u6700\u53ef\u80fd\u7684\u5339\u914d\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Zero-shot Caption-Based Image Retrieval"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u8cc7\u6599\u96c6: \u4f7f\u7528 Flickr30k \u8cc7\u6599\u96c6\u9032\u884c\u96f6\u6a23\u672c\u5716\u50cf\u6aa2\u7d22\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u65b9\u6cd5: \u672c\u4efb\u52d9\u7684\u76ee\u7684\u662f\u8b49\u660e ViLBERT \u6a21\u578b\u5728\u6982\u5ff5\u5b57\u5e55\u8cc7\u6599\u96c6\u4e0a\u7684\u9810\u8a13\u7df4\u5df2\u7d93\u7372\u5f97\u4e86\u57fa\u65bc\u6587\u5b57\u7684\u5b9a\u4f4d\u80fd\u529b\uff0c\u4e14\u9019\u7a2e\u80fd\u529b\u53ef\u4ee5\u5728\u6c92\u6709\u7279\u5b9a\u4efb\u52d9\u5fae\u8abf\u7684\u60c5\u6cc1\u4e0b\uff0c\u6cdb\u5316\u5230\u8996\u89ba\u548c\u8a9e\u8a00\u7684\u8b8a\u5316\u3002\u5728\u9019\u88e1\uff0c\u4f5c\u8005\u6c92\u6709\u9032\u884c\u4efb\u4f55\u5fae\u8abf\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528\u9810\u8a13\u7df4\u7684 ViLBERT \u6a21\u578b\uff0c\u4e26\u5229\u7528\u5c0d\u9f4a\u9810\u6e2c\u76ee\u6a19\u4f5c\u70ba\u5f97\u5206\u51fd\u6578\uff0c\u4ee5\u8a55\u4f30\u5716\u50cf\u8207\u6a19\u984c\u4e4b\u9593\u7684\u5c0d\u9f4a\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,l.jsx)(i.h3,{id:"vilbert-\u6548\u679c\u5982\u4f55",children:"ViLBERT \u6548\u679c\u5982\u4f55\uff1f"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"table1",src:e(28181).A+"",width:"1024",height:"264"})}),"\n",(0,l.jsx)(i.p,{children:"\u53c3\u8003\u8868 1\uff0cViLBERT \u6a21\u578b\u5728\u591a\u7a2e\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e0a\u5c55\u73fe\u4e86\u51fa\u8272\u7684\u6548\u80fd\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u8207\u57fa\u7dda\u7684\u6bd4\u8f03"})}),"\n",(0,l.jsx)(i.p,{children:"ViLBERT \u4e0d\u50c5\u5728\u9810\u8a13\u7df4\u7684\u60c5\u5883\u4e0b\uff08\u8207\u55ae\u6d41\u6a21\u578b\u53ca ViLBERT \u7684\u6bd4\u8f03\uff09\u8868\u73fe\u51fa\u8272\uff0c\u800c\u4e14\u5728\u975e\u9810\u8a13\u7df4\u7684\u60c5\u5883\uff08\u8207\u55ae\u6d41\u2020\u53ca ViLBERT\u2020\u6bd4\u8f03\uff09\u4e5f\u6709\u512a\u8d8a\u7684\u6548\u80fd\u3002\u7279\u5225\u662f\u5728 VQA \u548c RefCOCO+ \u4e0a\uff0cViLBERT \u90fd\u7372\u5f97\u4e86\u6700\u70ba\u986f\u8457\u7684\u6548\u76ca\u3002"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u9810\u8a13\u7df4\u4efb\u52d9\u7684\u6548\u76ca"})}),"\n",(0,l.jsx)(i.p,{children:"\u901a\u904e\u5728\u9810\u8a13\u7df4\u4efb\u52d9\u4e0a\u4f7f\u7528 ViLBERT \u6a21\u578b\uff0c\u5176\u6548\u80fd\u5728\u4e0d\u540c\u4efb\u52d9\u4e0a\u63d0\u9ad8\u4e86 2%\u81f3 13%\uff08\u6bd4\u8f03 ViLBERT \u8207 ViLBERT\u2020 \uff09\u3002\u9019\u8868\u660e\uff0c\u4e0d\u50c5 ViLBERT \u6a21\u578b\u53ef\u4ee5\u53d7\u76ca\u65bc\u9810\u8a13\u7df4\uff0c\u55ae\u6d41\u6a21\u578b\u4e5f\u53ef\u4ee5\u901a\u904e\u9019\u4e9b\u9810\u8a13\u7df4\u4efb\u52d9\u5f97\u5230\u6539\u5584\u3002"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u8207\u7279\u5b9a\u4efb\u52d9\u57fa\u6e96\u7684\u6bd4\u8f03"})}),"\n",(0,l.jsx)(i.p,{children:"\u4f7f\u7528 ViLBERT \u7684\u5fae\u8abf\u7b56\u7565\u5728\u6240\u6709\u56db\u500b\u5df2\u78ba\u7acb\u7684\u4efb\u52d9\u4e0a\u90fd\u8d85\u8d8a\u4e86\u6700\u5148\u9032\u7684\u7279\u5b9a\u4efb\u52d9\u6a21\u578b\u3002\u7279\u5225\u662f\u5728 VCR\u3001RefCOCO+ \u548c\u5f71\u50cf\u64f7\u53d6\u4e0a\uff0cViLBERT \u8a2d\u5b9a\u4e86\u65b0\u7684\u6280\u8853\u6c34\u6e96\uff0c\u5176\u6548\u76ca\u63d0\u9ad8\u4e86 7-10 \u500b\u767e\u5206\u9ede\u3002\u53e6\u5916\uff0c\u5c0d\u9019\u4e9b\u4efb\u52d9\u7684\u64f4\u5c55\u76f8\u5c0d\u7c21\u55ae\uff0c\u53ea\u9700\u70ba\u6bcf\u500b\u4efb\u52d9\u6dfb\u52a0\u4e00\u500b\u5206\u985e\u5668\u5c31\u884c\u4e86\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"vilbert-\u7684\u8996\u89ba\u6df1\u5ea6\u5c0d\u6548\u80fd\u7684\u5f71\u97ff",children:"ViLBERT \u7684\u8996\u89ba\u6df1\u5ea6\u5c0d\u6548\u80fd\u7684\u5f71\u97ff\uff1f"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"table2",src:e(52458).A+"",width:"1024",height:"194"})}),"\n",(0,l.jsx)(i.p,{children:"\u5f9e\u8868 2 \u53ef\u4ee5\u770b\u51fa\uff0cViLBERT \u6a21\u578b\u7684\u8996\u89ba\u6d41\u6df1\u5ea6\u78ba\u5be6\u5c0d\u5176\u5728\u591a\u7a2e\u4efb\u52d9\u4e0a\u7684\u6548\u80fd\u6709\u6240\u5f71\u97ff\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"VQA \u548c\u5f71\u50cf\u6aa2\u7d22"})}),"\n",(0,l.jsx)(i.p,{children:"\u9019\u5169\u7a2e\u4efb\u52d9\u90fd\u5f9e\u66f4\u6df1\u7684 ViLBERT \u6a21\u578b\u4e2d\u7372\u76ca\uff0c\u6548\u80fd\u96a8\u8457\u5c64\u6df1\u5ea6\u7684\u589e\u52a0\u800c\u55ae\u8abf\u589e\u52a0\u3002\u7279\u5225\u662f\u7576\u5c64\u6df1\u5ea6\u70ba 6 \u6642\uff0c\u6548\u80fd\u9054\u5230\u4e86\u5cf0\u503c\u3002"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"\u96f6\u6a23\u672c\u5f71\u50cf\u6aa2\u7d22"})}),"\n",(0,l.jsx)(i.p,{children:"\u5c0d\u65bc\u9019\u9805\u4efb\u52d9\uff0c\u96a8\u8457\u6a21\u578b\u7684\u6df1\u5ea6\u589e\u52a0\uff0c\u6548\u76ca\u4e5f\u986f\u8457\u5730\u63d0\u9ad8\uff0c\u9019\u986f\u793a\u5728\u9019\u9805\u4efb\u52d9\u4e0a\uff0c\u6df1\u5c64\u6a21\u578b\u53ef\u80fd\u66f4\u70ba\u9069\u5408\u3002"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"VCR \u548c RefCOCO+"})}),"\n",(0,l.jsx)(i.p,{children:"\u8207\u4e0a\u8ff0\u4efb\u52d9\u76f8\u53cd\uff0c\u9019\u5169\u7a2e\u4efb\u52d9\u4f3c\u4e4e\u66f4\u50be\u5411\u65bc\u4f7f\u7528\u6dfa\u5c64\u7684\u6a21\u578b\uff0c\u9019\u53ef\u80fd\u8868\u660e\u4e0d\u540c\u7684\u4efb\u52d9\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u7684\u6a21\u578b\u6df1\u5ea6\u4ee5\u9054\u5230\u6700\u4f73\u6548\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.admonition,{type:"tip",children:(0,l.jsx)(i.p,{children:"\u4e0d\u904e\u5c31\u6211\u5011\u73fe\u5728\u52d5\u8f12 100 \u5c64\uff08\u5c0d\uff0cGPT4 \u5c31\u662f\u5728\u8b1b\u4f60\uff01\uff09\u7684\u6a21\u578b\u67b6\u69cb\u7684\u89d2\u5ea6\u4f86\u770b\uff0c\u4e0d\u7ba1\u662f 2 \u5c64\u9084\u662f 8 \u5c64\uff0c\u90fd\u662f\u5c0f\u6a21\u578b\u7684\u5c3a\u5ea6\u800c\u5df2\u3002"})}),"\n",(0,l.jsx)(i.h3,{id:"\u9810\u8a13\u7df4\u8cc7\u6599\u96c6\u7684\u5f71\u97ff",children:"\u9810\u8a13\u7df4\u8cc7\u6599\u96c6\u7684\u5f71\u97ff\uff1f"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"table3",src:e(3847).A+"",width:"1024",height:"196"})}),"\n",(0,l.jsx)(i.p,{children:"\u5f9e\u4f5c\u8005\u7684\u5be6\u9a57\u4e2d\u53ef\u4ee5\u6e05\u695a\u5730\u770b\u5230\uff0c\u9810\u8a13\u7df4\u8cc7\u6599\u96c6\u7684\u5927\u5c0f\u5c0d ViLBERT \u6a21\u578b\u7684\u6548\u80fd\u6709\u986f\u8457\u7684\u5f71\u97ff\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6982\u5ff5\u5b57\u5e55\u8cc7\u6599\u96c6\u4e2d\u96a8\u6a5f\u62bd\u53d6 25% \u548c 50% \u7684\u5b50\u96c6\u9032\u884c\u9810\u8a13\u7df4\u6642\uff0c\u96a8\u8457\u4f7f\u7528\u8cc7\u6599\u7684\u589e\u591a\uff0c\u6a21\u578b\u7684\u6e96\u78ba\u5ea6\u4e5f\u55ae\u8abf\u5730\u589e\u52a0\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u9019\u4e00\u767c\u73fe\u78ba\u8a8d\u4e86\u5728\u6df1\u5ea6\u5b78\u7fd2\u9818\u57df\u4e2d\u4e00\u500b\u5e38\u898b\u7684\u89c0\u5ff5\uff1a\u6709\u66f4\u591a\u7684\u8a13\u7df4\u8cc7\u6599\u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\uff0c\u56e0\u70ba\u6a21\u578b\u6709\u66f4\u591a\u7684\u6a5f\u6703\u5b78\u7fd2\u4e26\u5f9e\u5927\u91cf\u7684\u6a23\u672c\u4e2d\u63d0\u53d6\u7279\u5fb5\u548c\u6a21\u5f0f\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6b64\u5916\uff0c\u9019\u4e5f\u8868\u660e ViLBERT \u6a21\u578b\u5728\u9032\u884c\u9810\u8a13\u7df4\u6642\u6709\u6f5b\u529b\u53d7\u76ca\u65bc\u66f4\u5927\u7684\u8cc7\u6599\u96c6\uff0c\u9019\u53ef\u80fd\u662f\u672a\u4f86\u7814\u7a76\u548c\u61c9\u7528\u4e2d\u7684\u4e00\u500b\u65b9\u5411\uff0c\u4ee5\u9032\u4e00\u6b65\u512a\u5316\u548c\u63d0\u9ad8\u6a21\u578b\u7684\u6548\u80fd\u3002"}),"\n",(0,l.jsx)(i.h3,{id:"vilbert-\u5b78\u5230\u4ec0\u9ebc",children:"ViLBERT \u5b78\u5230\u4ec0\u9ebc\uff1f"}),"\n",(0,l.jsx)(i.p,{children:"\u5728\u9810\u8a13\u7df4\u671f\u9593\uff0cViLBERT \u901a\u904e\u6982\u5ff5\u5b57\u5e55\u8cc7\u6599\u96c6\u5b78\u7fd2\u4e86\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u8a9e\u7fa9\u4e0a\u6709\u610f\u7fa9\u7684\u5c0d\u9f4a\u3002\u9019\u4e00\u9ede\u53ef\u4ee5\u5f9e\u5176\u5728\u96f6\u6a23\u672c\u5b57\u5e55\u7684\u5716\u50cf\u6aa2\u7d22\u4e2d\u7684\u8868\u73fe\u5f97\u4ee5\u89c0\u5bdf\uff1a\u5118\u7ba1\u5176\u96f6\u6a23\u672c\u6548\u679c\u660e\u986f\u4f4e\u65bc\u7d93\u904e\u5fae\u8abf\u7684\u6a21\u578b\uff0c\u4f46\u5728\u672a\u66fe\u63a5\u89f8 Flickr30k \u5716\u50cf\u6216\u6a19\u984c\u7684\u60c5\u5883\u4e0b\uff0c\u5176\u8868\u73fe\u5df2\u7d93\u76f8\u7576\u51fa\u8272\u3002\u9019\u8b49\u660e\u4e86 ViLBERT \u5728\u9810\u8a13\u7df4\u671f\u9593\u5df2\u6210\u529f\u5b78\u7fd2\u548c\u638c\u63e1\u4e86\u8996\u89ba\u548c\u8a9e\u8a00\u7684\u5c0d\u9f4a\u6280\u5de7\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u6b64\u5916\uff0c\u901a\u904e\u8f38\u5165\u5716\u50cf\u4e26\u91dd\u5c0d\u9019\u4e9b\u5716\u50cf\u751f\u6210\u689d\u4ef6\u6027\u7684\u6587\u5b57\u63cf\u8ff0\uff08\u57fa\u672c\u4e0a\u662f\u5716\u50cf\u5b57\u5e55\uff09\uff0c\u53ef\u4ee5\u9032\u4e00\u6b65\u5b9a\u6027\u5730\u63a2\u67e5 ViLBERT \u5728\u9810\u8a13\u7df4\u671f\u9593\u7a76\u7adf\u5b78\u5230\u4e86\u4ec0\u9ebc\u3002\u5118\u7ba1\u5728\u6c92\u6709\u4f7f\u7528\u4e7e\u6de8\u3001\u4eba\u5de5\u8a3b\u91cb\u7684\u5b57\u5e55\u8cc7\u6599\u9032\u884c\u5fae\u8abf\u7684\u60c5\u6cc1\u4e0b\uff0c\u751f\u6210\u7684\u63cf\u8ff0\u4e0d\u53ef\u80fd\u662f\u9ad8\u54c1\u8cea\u7684\uff0c\u4f46\u9019\u4e9b\u63cf\u8ff0\u4ecd\u7136\u53ef\u4ee5\u8b93\u6211\u5011\u7406\u89e3\u9810\u8a13\u7df4\u6a21\u578b\u7684\u5b78\u7fd2\u6210\u679c\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u7136\u800c\uff0c\u6709\u4e00\u9ede\u9700\u8981\u6ce8\u610f\uff0c\u90a3\u5c31\u662f\u5f9e BERT \u98a8\u683c\u7684\u6a21\u578b\u751f\u6210\u6587\u5b57\u4ecd\u7136\u662f\u4e00\u500b\u5c1a\u672a\u89e3\u6c7a\u7684\u6311\u6230\u3002\u5728 ViLBERT \u7684\u4f8b\u5b50\u4e2d\uff0c\u751f\u6210\u7684\u300c\u6a19\u984c\u300d\u7d93\u5e38\u53ef\u4ee5\u63cf\u8ff0\u5716\u50cf\u7684\u4e3b\u8981\u5167\u5bb9\uff0c\u4f46\u7531\u65bc\u6982\u5ff5\u6a19\u984c\u662f\u5f9e\u7db2\u9801\u5716\u50cf\u7684\u66ff\u4ee3\u6587\u5b57\u4e2d\u6536\u96c6\u7684\uff0c\u6709\u6642\u751f\u6210\u7684\u6a19\u984c\u6703\u7d93\u904e\u7de8\u8f2f\u6216\u5f15\u7528\u4e00\u4e9b\u975e\u8996\u89ba\u6982\u5ff5\uff0c\u9019\u53ef\u80fd\u6703\u5c0e\u81f4\u67d0\u4e9b\u63cf\u8ff0\u8207\u5be6\u969b\u5716\u50cf\u5167\u5bb9\u4e4b\u9593\u5b58\u5728\u5dee\u7570\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,l.jsx)(i.p,{children:"\u5728\u9019\u7bc7\u6587\u7ae0\u4e2d\uff0c\u7814\u7a76\u8005\u6df1\u5165\u63a2\u8a0e\u4e86\u81ea\u6211\u76e3\u7763\u5b78\u7fd2\u5728\u8996\u89ba\u548c\u8a9e\u8a00\u9818\u57df\u7684\u61c9\u7528\u3002ViLBERT \u7684\u63d0\u51fa\uff0c\u53ef\u8aaa\u662f\u9019\u9818\u57df\u7684\u4e00\u500b\u91cc\u7a0b\u7891\uff0c\u5b83\u8a66\u5716\u6df1\u5165\u7d50\u5408\u5716\u50cf\u5167\u5bb9\u8207\u6587\u5b57\uff0c\u5c07\u4e8c\u8005\u7dca\u5bc6\u5730\u7d50\u5408\u5728\u4e00\u8d77\u3002\u9019\u53ef\u4ee5\u88ab\u8996\u70ba\u4e00\u53f0\u96fb\u8166\u540c\u6642\u95b1\u8b80\u5716\u7247\u548c\u6587\u5b57\uff0c\u8a66\u8457\u7406\u89e3\u5b83\u5011\u4e4b\u9593\u7684\u95dc\u806f\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u5c0d\u6bd4\u65e9\u5148\u7684 VisualBERT\uff0cViLBERT \u7684\u96d9\u6d41\u67b6\u69cb\u986f\u5f97\u66f4\u70ba\u7279\u5225\uff0c\u63d0\u4f9b\u4e86\u4e00\u500b\u66f4\u70ba\u7d30\u7dfb\u7684\u8996\u89d2\uff0c\u89c0\u5bdf\u548c\u5b78\u7fd2\u5716\u50cf\u548c\u6587\u5b57\u4e4b\u9593\u7684\u7d30\u5fae\u95dc\u806f\u3002\u4f8b\u5982\uff1a\u7576\u63cf\u8ff0\u4e00\u500b\u70f9\u98ea\u904e\u7a0b\u6642\uff0cViLBERT \u80fd\u66f4\u7cbe\u78ba\u5730\u5c0d\u61c9\u6587\u5b57\u63cf\u8ff0\u548c\u8996\u89ba\u5167\u5bb9\uff0c\u800c\u4e0d\u53ea\u662f\u7c21\u55ae\u5730\u8b58\u5225\u95dc\u9375\u7269\u4ef6\u6216\u52d5\u4f5c\u3002"}),"\n",(0,l.jsx)(i.p,{children:"ViLBERT \u96d6\u7136\u5728\u67d0\u4e9b\u61c9\u7528\u4e0a\u7684\u6027\u80fd\u5df2\u7d93\u8d85\u8d8a\u4e86\u4e00\u4e9b\u5148\u524d\u7684\u6280\u8853\uff0c\u4f46\u4ecd\u6709\u5f85\u5728\u66f4\u591a\u5834\u666f\u548c\u4efb\u52d9\u4e2d\u9032\u4e00\u6b65\u7684\u9a57\u8b49\u548c\u512a\u5316\u3002\u5c0d\u6bd4\u65e9\u671f\u7684 VisualBERT\uff0cViLBERT \u5c55\u793a\u4e86\u66f4\u591a\u7684\u53ef\u80fd\u6027\u548c\u6df1\u5ea6\uff0c\u4f46\u6bcf\u7a2e\u65b9\u6cd5\u90fd\u6709\u5176\u7368\u7279\u4e4b\u8655\uff0c\u503c\u5f97\u9032\u4e00\u6b65\u7684\u7814\u7a76\u548c\u6bd4\u8f03\u3002"})]})}function t(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,l.jsx)(i,{...n,children:(0,l.jsx)(j,{...n})}):j(n)}},54739:(n,i,e)=>{e.d(i,{A:()=>l});const l=e.p+"assets/images/arch_vilbert-16638bbbd4cdd4384236b9bb29fcfc8c.jpg"},28181:(n,i,e)=>{e.d(i,{A:()=>l});const l=e.p+"assets/images/vil_bert_table1-4bccb527b41c66e7cda171e364f53d1b.jpg"},52458:(n,i,e)=>{e.d(i,{A:()=>l});const l=e.p+"assets/images/vil_bert_table2-662499c8a2ff88bd94a328e1e4893697.jpg"},3847:(n,i,e)=>{e.d(i,{A:()=>l});const l=e.p+"assets/images/vil_bert_table3-087a820ee7c2681bf93473ca37e16ab2.jpg"},28453:(n,i,e)=>{e.d(i,{R:()=>d,x:()=>c});var l=e(96540);const s={},r=l.createContext(s);function d(n){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),l.createElement(r.Provider,{value:i},n.children)}}}]);