"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9680],{40725:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>j});var i=e(74848),r=e(28453);const l={sidebar_position:11},c="Oscar",d={id:"multi-model/2020/oscar",title:"Oscar",description:"\u5967\u65af\u5361\u7684\u9328\u9ede",source:"@site/papers/multi-model/2020/oscar.md",sourceDirName:"multi-model/2020",slug:"/multi-model/2020/oscar",permalink:"/en/papers/multi-model/2020/oscar",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"papersSidebar",previous:{title:"UNIMO",permalink:"/en/papers/multi-model/2020/unimo"},next:{title:"2021",permalink:"/en/papers/category/2021"}},h={},j=[{value:"\u5967\u65af\u5361\u7684\u9328\u9ede",id:"\u5967\u65af\u5361\u7684\u9328\u9ede",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"Oscar \u6a21\u578b\u8a2d\u8a08",id:"oscar-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u9810\u8a13\u7df4\u76ee\u6a19",id:"\u9810\u8a13\u7df4\u76ee\u6a19",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u53c3\u6578\u6548\u7387\u6bd4\u8f03",id:"\u53c3\u6578\u6548\u7387\u6bd4\u8f03",level:3},{value:"\u6a21\u578b\u6027\u80fd\u6bd4\u8f03",id:"\u6a21\u578b\u6027\u80fd\u6bd4\u8f03",level:3},{value:"\u5b9a\u6027\u7814\u7a76",id:"\u5b9a\u6027\u7814\u7a76",level:3},{value:"\u6d88\u878d\u7814\u7a76",id:"\u6d88\u878d\u7814\u7a76",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function x(n){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"oscar",children:"Oscar"}),"\n",(0,i.jsx)(s.h2,{id:"\u5967\u65af\u5361\u7684\u9328\u9ede",children:"\u5967\u65af\u5361\u7684\u9328\u9ede"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://arxiv.org/abs/2004.06165",children:"Oscar: Object-Semantics Aligned Pre-training for Vision-Language Tasks (2020.04)"})})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u8996\u89ba\u8a9e\u8a00(V+L)\u7684\u9818\u57df\u4e2d\uff0c\u6a21\u7cca\u6027\u7684\u554f\u984c\u4e00\u76f4\u662f\u4e00\u500b\u96e3\u4ee5\u903e\u8d8a\u7684\u969c\u7919\uff0c\u5c24\u5176\u7576\u591a\u500b\u7269\u4ef6\u7684\u5f71\u50cf\u5340\u57df\u91cd\u758a\u6642\uff0c\u5f9e\u4e2d\u63d0\u53d6\u7cbe\u78ba\u7121\u8aa4\u7684\u8996\u89ba\u5340\u57df\u7279\u5fb5\u5c31\u986f\u5f97\u5c24\u70ba\u68d8\u624b\u3002\u4ee5\u4e00\u500b\u7c21\u55ae\u7684\u4f8b\u5b50\u4f86\u8aaa\uff0c\u7576\u4e00\u500b\u5f71\u50cf\u4e2d\u540c\u6642\u51fa\u73fe\u4e00\u96bb\u8c93\u548c\u4e00\u96bb\u72d7\uff0c\u5f7c\u6b64\u4ea4\u758a\u7e8f\u7e5e\u6642\uff0c\u5176\u5c0d\u61c9\u7684\u5340\u57df\u7279\u5fb5\u4fbf\u53ef\u80fd\u8b8a\u5f97\u6a21\u7cca\u4e0d\u6e05\uff0c\u56e0\u6b64\u5728\u8a9e\u7fa9\u5c0d\u9f4a\u4e0a\u9762\u81e8\u4e86\u76f8\u7576\u7684\u6311\u6230\u3002\u5982\u4f55\u5728\u9019\u500b\u6df7\u5408\u4ea4\u7e54\u7684\u5340\u57df\u627e\u5230\u4e00\u500b\u6e05\u6670\u800c\u6709\u610f\u7fa9\u7684\u8868\u793a\uff0c\u4ee5\u53ca\u5982\u4f55\u5c07\u5176\u8207\u8a9e\u8a00\u6e96\u78ba\u5c0d\u9f4a\uff0c\u5c31\u662f Oscar \u6240\u8981\u63a2\u8a0e\u7684\u554f\u984c\u3002"}),"\n",(0,i.jsx)(s.p,{children:"Oscar \u7684\u904b\u4f5c\u6a5f\u5236\u7c21\u55ae\u4f86\u8aaa\uff1a\u5047\u8a2d\u6709\u4e00\u500b\u5f71\u50cf\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u500b\u860b\u679c\u548c\u4e00\u500b\u9999\u8549\uff0c\u800c\u4e14\u5169\u8005\u90e8\u5206\u91cd\u758a\u3002\u5728\u5e38\u898f\u7684\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u76f4\u63a5\u5f9e\u9019\u500b\u91cd\u758a\u7684\u8996\u89ba\u5340\u57df\u63d0\u53d6\u7279\u5fb5\uff0c\u5f97\u5230\u7684\u8cc7\u8a0a\u5c07\u662f\u5169\u8005\u7684\u67d0\u7a2e\u300c\u6df7\u5408\u9ad4\u300d\uff0c\u9019\u5728\u5f8c\u7e8c\u7684\u8a9e\u7fa9\u5c0d\u9f4a\u4e0a\u5c07\u9047\u5230\u56f0\u96e3\u3002"}),"\n",(0,i.jsx)(s.p,{children:"Oscar \u5728\u9019\u88e1\u5f15\u5165\u4e00\u500b\u5de7\u5999\u7684\u7b56\u7565\uff0c\u5b83\u4e0d\u55ae\u55ae\u53ea\u770b\u91cd\u758a\u7684\u8996\u89ba\u5340\u57df\uff0c\u800c\u662f\u5229\u7528\u7269\u9ad4\u6a19\u7c64\uff0c\u9019\u88e1\u7684\u6a19\u7c64\u6307\u7684\u5c31\u662f\u300c\u860b\u679c\u300d\u548c\u300c\u9999\u8549\u300d\uff0c\u4f5c\u70ba\u5354\u52a9\u8a9e\u7fa9\u5c0d\u9f4a\u7684\u9328\u9ede\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u9019\u500b\u67b6\u69cb\u4e0b\uff0c\u6bcf\u500b\u8a13\u7df4\u6a23\u672c\u88ab\u5b9a\u7fa9\u70ba\u4e00\u500b\u4e09\u5143\u7d44\uff0c\u5305\u62ec\u4e00\u500b\u55ae\u5b57\u5e8f\u5217\u3001\u4e00\u7d44\u7269\u4ef6\u6a19\u7c64\u548c\u4e00\u7d44\u5716\u50cf\u5340\u57df\u7279\u5fb5\u3002\u85c9\u7531\u6b64\u7b56\u7565\uff0c\u5373\u4fbf\u5728\u7269\u4ef6\u7684\u8996\u89ba\u5340\u57df\u7279\u5fb5\u51fa\u73fe\u6a21\u7cca\u6642\uff0c\u4f5c\u8005\u4ecd\u80fd\u5229\u7528\u7269\u4ef6\u6a19\u7c64\u9032\u884c\u6709\u6548\u7684\u8a9e\u7fa9\u5c0d\u9f4a\uff0c\u9019\u70ba\u5f8c\u7e8c\u7684 V+L \u4efb\u52d9\u63d0\u4f9b\u4e86\u4e00\u500b\u76f8\u5c0d\u7a69\u56fa\u7684\u57fa\u790e\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,i.jsx)(s.p,{children:"\u4f5c\u8005\u5728\u6587\u4e2d\u660e\u78ba\u63d0\u51fa\u4e86\u6709\u95dc\u65bc\u8996\u89ba-\u8a9e\u8a00\u9810\u8a13\u7df4\uff08V+L pre-training\uff0c\u6216 VLP\uff09\u6a21\u578b\u7684\u5169\u5927\u6838\u5fc3\u554f\u984c\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u6a21\u7cca\u6027 (Ambiguity)"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u554f\u984c\uff1a\u7576\u5169\u500b\u6216\u591a\u500b\u7269\u4ef6\u7684\u5f71\u50cf\u5340\u57df\u91cd\u758a\u6642\uff0c\u63d0\u53d6\u51fa\u4f86\u7684\u8996\u89ba\u5340\u57df\u7279\u5fb5\u53ef\u80fd\u8b8a\u5f97\u6a21\u7cca\uff0c\u4e0d\u5bb9\u6613\u5340\u5206\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u4f8b\u5b50\uff1a\u5728\u5716 2(a) \u4e2d\uff0c\u300cdog\u300d \u548c \u300ccouch\u300d \u9019\u5169\u500b\u7269\u9ad4\u7684\u8996\u89ba\u5340\u57df\u91cd\u758a\u56b4\u91cd\uff0c\u56e0\u6b64\u5b83\u5011\u7684\u8996\u89ba\u5340\u57df\u7279\u5fb5\u53ef\u80fd\u96e3\u4ee5\u5340\u5206\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5c0e\u81f4\u7684\u554f\u984c\uff1a\u5728\u8655\u7406\u8907\u96dc\u7684\u5716\u50cf-\u6587\u5b57\u5c0d\u61c9\u4efb\u52d9\u6642\uff0c\u6a21\u578b\u53ef\u80fd\u96e3\u4ee5\u5efa\u7acb\u7cbe\u78ba\u7684\u8de8\u6a21\u614b\u5c0d\u9f4a\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7f3a\u4e4f\u5b9a\u4f4d (Lack of Grounding)"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u554f\u984c\u63cf\u8ff0\uff1aVLP \u662f\u4e00\u7a2e\u5f31\u76e3\u7763\u5b78\u7fd2\u554f\u984c\uff0c\u7576\u4e2d\u6c92\u6709\u660e\u78ba\u6a19\u793a\u51fa\u5716\u50cf\u4e2d\u7684\u5340\u57df\u6216\u7269\u4ef6\u8207\u6587\u5b57\u4e2d\u7684\u55ae\u5b57\u6216\u77ed\u8a9e\u7684\u5c0d\u61c9\u95dc\u4fc2\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u80cc\u666f\u5206\u6790\uff1a\u5373\u4f7f\u7269\u4ef6\u50cf\u300cdog\u300d \u548c \u300ccouch\u300d\u9019\u6a23\u7684\u5143\u7d20\u5728\u5716\u50cf\u548c\u76f8\u5c0d\u61c9\u7684\u6587\u672c\u4e2d\u90fd\u51fa\u73fe\uff0c\u7531\u65bc\u6c92\u6709\u660e\u78ba\u7684\u5c0d\u9f4a\u6a19\u6ce8\uff0c\u6a21\u578b\u53ef\u80fd\u7121\u6cd5\u78ba\u5207\u5b78\u5230\u7269\u4ef6\u548c\u6587\u672c\u55ae\u5143\u4e4b\u9593\u7684\u8a9e\u610f\u5c0d\u61c9\u95dc\u4fc2\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(s.h3,{id:"oscar-\u6a21\u578b\u8a2d\u8a08",children:"Oscar \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Oscar \u6a21\u578b\u8a2d\u8a08",src:e(41365).A+"",width:"1224",height:"484"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u4e09\u5143\u7d44\u8f38\u5165\u8868\u793a (w, q, v)"})}),"\n",(0,i.jsx)(s.p,{children:"Oscar\u6a21\u578b\u5c07\u6bcf\u500b\u5716\u50cf-\u6587\u5b57\u914d\u5c0d\u8868\u73fe\u70ba\u4e09\u5143\u7d44\uff08w, q, v\uff09\u3002"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"w (\u55ae\u5b57\u7de8\u78bc\u5e8f\u5217)"})}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u662f\u5f9e\u6587\u5b57\u8f38\u5165\u4e2d\u5f97\u5230\u7684\u55ae\u5b57\u7de8\u78bc\u5e8f\u5217\uff0c\u4e5f\u5c31\u662f\u6bcf\u500b\u55ae\u5b57\u6216\u7247\u8a9e\u88ab\u8f49\u63db\u6210\u7684\u5411\u91cf\u8868\u793a\u5f62\u5f0f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"q (\u7269\u4ef6\u6a19\u7c64\u7684\u55ae\u5b57\u7de8\u78bc\u5e8f\u5217)"})}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u662f\u5716\u50cf\u4e2d\u8b58\u5225\u7269\u4ef6\u6a19\u7c64\u7684\u55ae\u5b57\u7de8\u78bc\u5e8f\u5217\u3002\u9019\u4e9b\u6a19\u7c64\u901a\u5e38\u8207\u5716\u50cf\u4e2d\u7684\u7269\u4ef6\u76f8\u95dc\u4e26\u7531\u5716\u50cf\u8b58\u5225\u6a21\u578b\uff08\u53ef\u80fd\u57fa\u65bc Faster R-CNN\uff09\u751f\u6210\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"v (\u5340\u57df\u5411\u91cf\u96c6\u5408)"})}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u662f\u5716\u50cf\u4e2d\u8b58\u5225\u5340\u57df\u7684\u7279\u5fb5\u5411\u91cf\u96c6\u5408\uff0c\u9019\u4e9b\u7279\u5fb5\u5411\u91cf\u53ef\u80fd\u5305\u62ec\u8a72\u5340\u57df\u7684\u8996\u89ba\u8a9e\u7fa9\u53ca\u4f4d\u7f6e\u4fe1\u606f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"\u5230\u9019\u908a\uff0c\u5148\u66ab\u505c\u4e00\u4e0b\u3002"}),(0,i.jsx)(s.p,{children:"\u5728\u7e7c\u7e8c\u770b\u4e0b\u53bb\u524d\uff0c\u8acb\u5148\u8a18\u5f97 w\u3001q\u3001v \u9019\u4e09\u500b\u8f38\u5165\u8868\u793a\u6982\u5ff5\u3002\u56e0\u70ba\u9019\u7bc7\u8ad6\u6587\u5f8c\u9762\u5230\u8655\u90fd\u662f wqv \u7684\u6392\u5217\u7d44\u5408\u7684\u7814\u7a76\u63a2\u8a0e\u3002"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7269\u4ef6\u6a19\u7c64\u4f5c\u70ba\u5c0d\u9f4a\u9328\u9ede"})}),"\n",(0,i.jsx)(s.p,{children:"Oscar \u5229\u7528\u7269\u4ef6\u6a19\u7c64 q \u4f5c\u70ba\u4e00\u500b\u9328\u9ede\uff0c\u7c21\u5316\u5716\u50cf\u548c\u6587\u5b57\u4e4b\u9593\u7684\u5c0d\u9f4a\u5b78\u7fd2\u3002\u7531\u65bc\u5716\u50cf\u4e2d\u7684\u91cd\u8981\u7269\u4ef6\u901a\u5e38\u4e5f\u5728\u76f8\u5c0d\u61c9\u7684\u6587\u5b57\u63cf\u8ff0\u4e2d\u88ab\u63d0\u53ca\uff0c\u4f7f\u7528 q \u53ef\u4ee5\u5f37\u5316\u6a21\u578b\u5c0d\u65bc\u5716\u50cf\u548c\u6587\u5b57\u4e4b\u9593\u95dc\u806f\u6027\u7684\u7406\u89e3\u548c\u5b78\u7fd2\u3002\u5728\u5b78\u7fd2\u904e\u7a0b\u4e2d\uff0c\u6a21\u578b\u6703\u5c07\u5f71\u50cf\u7269\u4ef6\uff08\u53ef\u80fd\u5728\u8996\u89ba\u7a7a\u9593\u4e2d\u88ab\u6a21\u7cca\u5730\u8868\u793a\uff09\u5c0d\u9f4a\u5230\u8a9e\u8a00\u7a7a\u9593\u4e2d\u6e05\u6670\u4e14\u7368\u7279\u7684\u5be6\u9ad4\u8868\u793a\uff0c\u9032\u4e00\u6b65\u5f37\u5316\u6a21\u578b\u5728\u8996\u89ba\u548c\u8a9e\u8a00\u6a21\u614b\u4e4b\u9593\u7684\u5c0d\u9f4a\u5b78\u7fd2\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u8a9e\u7fa9\u7a7a\u9593\u7684\u5171\u4eab\u8207\u6ce8\u610f\u529b\u6a5f\u5236"})}),"\n",(0,i.jsx)(s.p,{children:"\u5229\u7528 BERT \u6a21\u578b\uff0c\u6a21\u578b\u53ef\u4ee5\u76f8\u5c0d\u5bb9\u6613\u5730\u8b58\u5225\u51fa\u6587\u672c\u4e2d\u7684 q \u548c w \u4e4b\u9593\u7684\u5c0d\u9f4a\u3002\u5728\u6b64\u57fa\u790e\u4e0a\uff0c\u6a21\u578b\u53ef\u4ee5\u628a\u66f4\u591a\u7684\u6ce8\u610f\u529b\u5206\u914d\u7d66\u90a3\u4e9b\u8207\u6587\u5b57\u8a9e\u7fa9\u76f8\u95dc\u806f\u7684\u5716\u50cf\u5340\u57df\u3002\u7576\u900f\u904e\u8207 q \u8a9e\u7fa9\u76f8\u95dc\u7684\u55ae\u5b57\u9032\u884c\u67e5\u8a62\u6642\uff0c\u6a21\u578b\u5c07\u5206\u914d\u8f03\u9ad8\u7684\u6ce8\u610f\u529b\u6b0a\u91cd\u7d66\u9019\u4e9b\u7279\u5b9a\u7684\u5716\u50cf\u5340\u57df\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"v \u548c q \u7684\u751f\u6210"})}),"\n",(0,i.jsx)(s.p,{children:"\u7d66\u5b9a\u4e00\u500b\u5305\u542b K \u500b\u7269\u4ef6\u5340\u57df\u7684\u5716\u50cf\uff0cOscar \u6a21\u578b\u4f7f\u7528 Faster R-CNN \u5f9e\u6bcf\u500b\u5340\u57df\u63d0\u53d6\u8996\u89ba\u8a9e\u7fa9\u6210\u70ba (v\u2019, z)\uff0c\u5176\u4e2d v\u2019 \u662f P \u7dad\u5411\u91cf\uff08\u5340\u57df\u7279\u5fb5\uff09\uff0cz \u662f\u5340\u57df\u4f4d\u7f6e\u7684 R \u7dad\u5411\u91cf\u3002"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"v \u662f\u901a\u904e\u5c07 v\u2019 \u548c z \u9023\u63a5\u8d77\u4f86\u5f62\u6210\u7684\u4f4d\u7f6e\u654f\u611f\u5340\u57df\u7279\u5fb5\u5411\u91cf\uff0c\u4e26\u901a\u904e\u7dda\u6027\u6295\u5f71\u9032\u4e00\u6b65\u8f49\u63db\uff0c\u4ee5\u78ba\u4fdd\u5176\u8207\u8a5e\u7de8\u78bc\u6709\u76f8\u540c\u7684\u5411\u91cf\u7dad\u5ea6\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u540c\u6642\uff0c\u7269\u4ef6\u6a19\u7c64\u7684\u5b57\u7de8\u78bc\u5e8f\u5217 q \u4e5f\u662f\u901a\u904e\u4f7f\u7528\u76f8\u540c\u7684 Faster R-CNN \u5f9e\u5716\u50cf\u4e2d\u5f97\u5230\u7684\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u9810\u8a13\u7df4\u76ee\u6a19",children:"\u9810\u8a13\u7df4\u76ee\u6a19"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Oscar \u9810\u8a13\u7df4\u76ee\u6a19",src:e(90378).A+"",width:"1024",height:"198"})}),"\n",(0,i.jsx)(s.p,{children:"Oscar \u6a21\u578b\u7684\u8f38\u5165\u53ef\u4ee5\u5f9e\u5169\u500b\u4e0d\u540c\u7684\u8996\u89d2\u4f86\u770b\uff1a\u5728\u9019\u88e1\uff0cx \u662f\u7528\u4f86\u5340\u5206\u6587\u672c\u548c\u5716\u50cf\u8868\u793a\u7684\u6a21\u614b\u8996\u89d2\uff1b\u800c x\u2019 \u662f\u5b57\u5178\u8996\u89d2\uff0c\u7528\u4f86\u5340\u5206\u5169\u500b\u4e0d\u540c\u7684\u8a9e\u610f\u7a7a\u9593\uff0c\u5728\u5176\u4e2d\u8868\u9054\u8f38\u5165\u3002"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5b57\u5178\u8996\u89d2\uff1a\u906e\u853d Token \u640d\u5931(Masked Token Loss)"})}),"\n",(0,i.jsx)(s.p,{children:"\u4f7f\u7528\u4e0d\u540c\u7684\u5b57\u5178\u4f86\u78ba\u5b9a\u8868\u793a\u4e0d\u540c\u5b50\u5e8f\u5217\u7684\u8a9e\u610f\u7a7a\u9593\u3002\u7c21\u55ae\u4f86\u8aaa\uff0c\u7269\u9ad4\u6a19\u7c64\u548c\u55ae\u8a5e Token \u5171\u4eab\u76f8\u540c\u7684\u8a9e\u8a00\u8a9e\u7fa9\u7a7a\u9593\uff0c\u800c\u5716\u50cf\u5340\u57df\u7684\u7279\u5fb5\u5247\u8655\u65bc\u8996\u89ba\u8a9e\u7fa9\u7a7a\u9593\u3002\u5728\u9810\u8a13\u7df4\u7684\u904e\u7a0b\u4e2d\uff0c\u4f5c\u8005\u5229\u7528\u300c\u906e\u853d Token \u640d\u5931\u300d\uff08Masked Token Loss\uff0c\u7c21\u7a31 MTL\uff09\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u6bcf\u500b\u8a13\u7df4\u8fed\u4ee3\u4e2d\uff0c\u6703\u96a8\u6a5f\u906e\u853d\u5e8f\u5217\u4e2d\u7d04 15% \u7684\u8f38\u5165 Token\uff08\u5373\uff0c\u5c07\u5176\u66ff\u63db\u70ba\u7279\u6b8a\u7684 [MASK] Token\uff09\u3002\u8a13\u7df4\u904e\u7a0b\u7684\u76ee\u6a19\u662f\uff0c\u6839\u64da\u5468\u570d\u7684 Token \u548c\u6240\u6709\u5716\u50cf\u7279\u5fb5\uff0c\u9810\u6e2c\u9019\u4e9b\u88ab\u906e\u853d\u7684 Token\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u500b\u904e\u7a0b\u8207 BERT \u4f7f\u7528\u7684\u906e\u853d\u8a9e\u8a00\u6a21\u578b\u5341\u5206\u76f8\u4f3c\uff0c\u56e0\u70ba\u5b83\u8981\u5f9e\u5176\u5468\u908a\u74b0\u5883\u4e2d\u6062\u5fa9\u88ab\u906e\u853d\u7684\u55ae\u8a5e\u6216\u6a19\u7c64\u3002\u8207\u6b64\u540c\u6642\uff0c\u9084\u9700\u5229\u7528\u984d\u5916\u7684\u5716\u50cf\u4fe1\u606f\uff0c\u4f86\u5e6b\u52a9\u5b78\u5230\u7684\u55ae\u8a5e\u7de8\u78bc\u5728\u8996\u89ba\u4e0a\u4e0b\u6587\u4e2d\u627e\u5230\u5b9a\u4f4d\u3002"}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"\u5047\u8a2d\u4e00\u53e5\u8a71\uff1a\u300c\u9019\u662f\u4e00\u96bb\u53ef\u611b\u7684\u72d7\u300d\uff0c\u548c\u4e00\u5f35\u72d7\u7684\u5716\u7247\u3002"}),(0,i.jsx)(s.p,{children:"\u5728\u9810\u8a13\u7df4\u6642\uff0c\u53ef\u80fd\u6703\u906e\u853d\u6389\u300c\u72d7\u300d\u9019\u500b\u8a5e\uff0c\u6240\u4ee5\u53e5\u5b50\u8b8a\u6210\uff1a\u300c\u9019\u662f\u4e00\u96bb\u53ef\u611b\u7684 [MASK]\u300d\u3002"})]}),"\n",(0,i.jsx)(s.p,{children:"\u6a21\u578b\u7684\u5de5\u4f5c\u5c31\u662f\u5229\u7528\u5176\u5b83\u672a\u88ab\u906e\u853d\u7684\u6587\u5b57\u548c\u72d7\u7684\u5716\u7247\u4f5c\u70ba\u8108\u7d61\uff0c\u9810\u6e2c\u9019\u500b [MASK] \u7684\u771f\u5be6\u5167\u5bb9\uff0c\u4e5f\u5c31\u662f\u300c\u72d7\u300d\u3002\u5728\u9019\u500b\u904e\u7a0b\u4e2d\uff0c\u5716\u50cf\u8cc7\u8a0a\u5354\u52a9\u6a21\u578b\u66f4\u7cbe\u78ba\u5730\u9810\u6e2c\u906e\u853d\u7684\u55ae\u8a5e\uff0c\u56e0\u70ba\u8996\u89ba\u4fe1\u606f\u63d0\u4f9b\u4e86\u984d\u5916\u7684\u8a9e\u5883\u8cc7\u8a0a\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u6a21\u614b\u8996\u89d2\uff1a\u5c0d\u6bd4\u640d\u5931(Contrastive Loss)"})}),"\n",(0,i.jsx)(s.p,{children:"\u70ba\u4e86\u8868\u9054\u6bcf\u500b\u8f38\u5165\u7684\u4e09\u5143\u7d44\uff0c\u4f5c\u8005\u5206\u7d44\u8655\u7406[ h\u2019, [q, v] ] \u4f86\u4ee3\u8868\u5716\u50cf\u6a21\u614b\uff0c\u800c\u5c07 ( w ) \u8996\u4f5c\u8a9e\u8a00\u6a21\u614b\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u88e1\u6709\u4e00\u500b\u6709\u8da3\u7684\u5be6\u9a57\u904e\u7a0b\uff1a\u4f5c\u8005\u63a1\u7528 50% \u7684\u6a5f\u7387\uff0c\u4f7f\u7528\u5f9e\u8cc7\u6599\u96c6\u4e2d\u96a8\u6a5f\u62bd\u53d6\u7684\u4e0d\u540c\u6a19\u7c64\u5e8f\u5217\u4f86\u66ff\u63db ( q )\uff0c\u4ee5\u6b64\u5275\u5efa\u4e00\u7d44\u300c\u6c61\u67d3\u300d\u7684\u5716\u50cf\u8868\u793a\u3002\u7136\u5f8c\uff0c\u7531\u65bc\u5728\u7279\u6b8a\u6a19\u8a18 [CLS] \u4e0a\u7684\u7de8\u78bc\u5668\u8f38\u51fa\u662f\uff08( h\u2019, w )\uff09\u7684\u878d\u5408\u8996\u89ba-\u8a9e\u8a00\u8868\u793a\uff0c\u4f5c\u8005\u5728\u5176\u9802\u90e8\u4f7f\u7528\u4e00\u500b\u5168\u9023\u63a5\u5c64\u4f5c\u70ba\u4e00\u500b\u4e8c\u9032\u5236\u5206\u985e\u5668\u4f86\u9810\u6e2c\u9019\u5c0d\u662f\u5426\u5305\u542b\u539f\u59cb\u5716\u50cf\u8868\u793a\uff08\u5373 ( y = 1 )\uff09\u6216\u4efb\u4f55\u300c\u6c61\u67d3\u300d\u7684\u8868\u793a\uff08\u5373 ( y = 0 )\uff09\u3002"}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"\u5982\u679c\u4f60\u770b\u4e0d\u61c2\u4e0a\u9762\u7684\u6558\u8ff0\uff0c\u6216\u8a31\u4f60\u53ef\u4ee5\u5c07\u9019\u500b\u904e\u7a0b\u60f3\u50cf\u6210\u4e00\u500b\u904a\u6232\uff1a"}),(0,i.jsx)(s.p,{children:"\u4f60\u7684\u670b\u53cb\u7d66\u4f60\u4e00\u5f35\u5716\u7247\u548c\u4e00\u4e9b\u6587\u5b57\u63cf\u8ff0\u3002"}),(0,i.jsx)(s.p,{children:"\u4f46\u6709\u4e00\u500b\u9677\u9631\uff1a\u6587\u5b57\u63cf\u8ff0\u53ef\u80fd\u4e0d\u6b63\u78ba\uff08\u4f8b\u5982\uff1a\u4e00\u5f35\u986f\u793a\u7d05\u860b\u679c\u7684\u5716\u7247\uff0c\u537b\u88ab\u63cf\u8ff0\u6210\uff1a\u300c\u4e00\u500b\u85cd\u8272\u7684\u66f8\u5305\u300d\uff09\u3002\u4f60\u7684\u4efb\u52d9\u662f\u5206\u8fa8\u9019\u4e9b\u63cf\u8ff0\u662f\u5426\u771f\u5be6\u3002\u5728 Oscar \u7684\u60c5\u5883\u4e0b\uff0c\u6a21\u578b\u4e5f\u9032\u884c\u76f8\u4f3c\u7684\u904a\u6232\uff0c\u4f7f\u7528\u6578\u5b78\u548c\u6a5f\u5668\u5b78\u7fd2\u7684\u6280\u5de7\u4f86\u5206\u8fa8\u7d66\u5b9a\u7684\u6587\u5b57\u63cf\u8ff0\u662f\u5426\u771f\u7684\u5339\u914d\u5716\u7247\u3002"})]}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u6574\u500b\u8de8\u6a21\u614b\u7684\u9810\u8a13\u7df4\u904e\u7a0b\u4e2d\uff0c\u4f5c\u8005\u4f7f\u7528\u7269\u9ad4\u6a19\u7c64\u4f5c\u70ba\u5716\u50cf\u7684\u4ee3\u7406\uff0c\u4ee5\u8abf\u6574 BERT \u8a5e\u7de8\u78bc\u7a7a\u9593\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u5177\u9ad4\u4f86\u8aaa\uff0c\u6211\u5011\u5e0c\u671b\u6a21\u578b\u5b78\u5230\u7684\u6587\u5b57\u8868\u793a\u80fd\u8207\u76f8\u5c0d\u61c9\u7684\u5716\u50cf\uff08\u6216\u5f9e\u5716\u50cf\u4e2d\u6aa2\u6e2c\u5230\u7684\u5c0d\u8c61\u6a19\u7c64\uff09\u76f8\u4f3c\uff0c\u4e26\u8207\u300c\u6c61\u67d3\u300d\u7684\u8868\u793a\u5f62\u6210\u5c0d\u6bd4\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(s.h3,{id:"\u53c3\u6578\u6548\u7387\u6bd4\u8f03",children:"\u53c3\u6578\u6548\u7387\u6bd4\u8f03"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Oscar \u53c3\u6578\u6548\u7387\u6bd4\u8f03",src:e(13031).A+"",width:"1024",height:"233"})}),"\n",(0,i.jsx)(s.p,{children:"\u4f5c\u8005\u9996\u5148\u8a0e\u8ad6\u4e86 Oscar \u5728\u8996\u89ba+\u8a9e\u8a00\uff08V+L\uff09\u4efb\u52d9\u4e0a\u7684\u6027\u80fd\u548c\u6548\u7387\uff0c\u6bd4\u8f03\u4e86 Oscar \u548c\u4e09\u7a2e\u4e0d\u540c\u7684\u73fe\u6709 SoTA \u6a21\u578b\u985e\u578b\u7684\u6027\u80fd\u548c\u53c3\u6578\u6548\u7387\u3002Oscar \u986f\u793a\u51fa\u76f8\u5c0d\u65bc\u5176\u4ed6\u5927\u578b\u6a21\u578b\uff0c\u5728\u591a\u6578\u4efb\u52d9\u4e0a\u64c1\u6709\u8f03\u9ad8\u7684\u53c3\u6578\u6548\u7387\u548c\u512a\u7570\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"\u6a21\u578b\u6027\u80fd\u6bd4\u8f03",children:"\u6a21\u578b\u6027\u80fd\u6bd4\u8f03"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Oscar \u6a21\u578b\u6027\u80fd\u6bd4\u8f03",src:e(5596).A+"",width:"794",height:"1024"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Oscar\u6a21\u578b\u7684\u7e3d\u9ad4\u6027\u80fd"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Oscar \u5728\u591a\u6578 V+L\uff08\u8996\u89ba+\u8a9e\u8a00\uff09\u4efb\u52d9\u4e0a\u986f\u793a\u51fa\u5f37\u5927\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5728 7 \u500b\u4efb\u52d9\u4e0a\uff0cOscar \u8d85\u8d8a\u4e86\u6240\u6709\u73fe\u6709\u7684 VLP\uff08\u8996\u89ba\u8a9e\u8a00\u9810\u8a13\u7df4\uff09\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5728\u9019 7 \u500b\u4efb\u52d9\u4e2d\uff0c6 \u9805\u4efb\u52d9\u4e0a\u9054\u5230\u4e86\u65b0\u7684\u6700\u4f73\u72c0\u614b\uff08SoTA\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u8207\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u5c0d\u6bd4\u795e\u7d93\u72c0\u614b\u6a5f\uff08NSM\uff09\uff0cOscar \u5728 GQA \u4efb\u52d9\u4e0a\u53ef\u80fd\u7565\u986f\u4e0d\u8db3\uff0c\u4f46\u53ef\u4ee5\u901a\u904e\u7d50\u5408NSM \u7684\u7d50\u69cb\u5148\u9a57\u4f86\u5f37\u5316\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u76f8\u8f03\u65bc\u591a\u4efb\u52d9\u6a21\u578b 12-in-1\uff0cOscarB \u5728\u591a\u6578\u4efb\u52d9\u4e0a\u5c55\u73fe\u66f4\u597d\u7684\u8868\u73fe\uff0c\u53ea\u5728NLVR2\u7684Test-P\u4e0a\u7684\u7d50\u679c\u8f03\u5dee\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u65b9\u6cd5\u548c\u8a13\u7df4\u7b56\u7565"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u5728\u5b57\u5e55\u4efb\u52d9\u4e0a\uff0c\u5229\u7528\u81ea\u6211\u6279\u5224\u5e8f\u5217\u8a13\u7df4\uff08SCST\uff09\u4f86\u9032\u4e00\u6b65\u5fae\u8abf Oscar\uff0c\u5c55\u73fe\u4e86\u6539\u5584\u5e8f\u5217\u7d1a\u5b78\u7fd2\u7684\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u88682 (e)\u90e8\u5206\u53ef\u80fd\u5c55\u793a\u4e86 Oscar \u5728 BLEU@4 \u548c CIDEr \u6307\u6a19\u4e0a\u76f8\u5c0d\u65bc\u5176\u4ed6\u65b9\u6cd5\u7684\u63d0\u5347\u60c5\u6cc1\uff08\u63d0\u53472\u9ede\u4ee5\u4e0a\u548c10\u9ede\u4ee5\u4e0a\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u6cdb\u5316\u80fd\u529b\u7684\u5c55\u793a"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"NoCaps \u7684\u5be6\u9a57\u90e8\u5206\u8981\u6c42\u6a21\u578b\u53ea\u4f7f\u7528 COCO \u5b57\u5e55\u8a13\u7df4\u96c6\uff0cOscar \u9075\u5faa\u4e86\u9019\u4e00\u898f\u5b9a\uff0c\u5c55\u73fe\u51fa\u5176\u5728\u9650\u5b9a\u8a13\u7df4\u6578\u64da\u4e0b\u7684\u5f37\u5927\u8868\u73fe\u548c\u6cdb\u5316\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u88682 (f)\u90e8\u5206\u6216\u5c55\u73fe\u4e86Oscar\u8b8a\u9ad4\u8207\u5148\u524d SoTA \u65b9\u6cd5 UpDown \u7684\u6bd4\u8f03\uff0c\u4e26\u5f37\u8abf\u4e86 Oscar\u5728\u4e0d\u540c\u60c5\u5883\uff08\u8fd1\u57df\u6216\u57df\u5916\uff09\u4e0b\u7684\u512a\u52e2\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Oscar\u901a\u904e\u4f7f\u7528\u7269\u4ef6\u6a19\u7c64\u4f5c\u70ba\u9328\u9ede\uff0c\u5927\u5927\u7c21\u5316\u4e86\u5716\u50cf\u548c\u6587\u5b57\u4e4b\u9593\u7684\u8a9e\u7fa9\u5c0d\u9f4a\u5b78\u7fd2\uff0c\u9019\u662f\u5176\u9ad8\u6548\u7387\u548c\u5f37\u5927\u6027\u80fd\u7684\u4e00\u500b\u95dc\u9375\u56e0\u7d20\u3002\u5728\u67d0\u4e9b\u4efb\u52d9\u6216\u5834\u666f\u4e0b\uff0cOscar\u7684\u65b9\u6cd5\u548c\u6a21\u578b\u7d50\u69cb\u9084\u53ef\u4ee5\u7d50\u5408\u5176\u4ed6\u5df2\u6709\u7684\u5f37\u529b\u6280\u8853\u6216\u5148\u9a57\u77e5\u8b58\u4f86\u9032\u4e00\u6b65\u63d0\u5347\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u96d6\u7136 Oscar \u5728\u591a\u6578\u4efb\u52d9\u4e0a\u5c55\u73fe\u51fa\u5f37\u5927\u7684\u6027\u80fd\uff0c\u4f46\u5b83\u5728\u67d0\u4e9b\u7279\u5b9a\u4efb\u52d9\u6216\u6307\u6a19\u4e0a\u53ef\u80fd\u5b58\u5728\u512a\u5316\u7684\u7a7a\u9593\u6216\u8005\u5c40\u9650\uff0c\u6bd4\u5982\u5728 NLVR2 \u7684 Test-P \u4e0a\u7684\u8868\u73fe\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"\u5b9a\u6027\u7814\u7a76",children:"\u5b9a\u6027\u7814\u7a76"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Oscar \u5b9a\u6027\u7814\u7a76",src:e(2969).A+"",width:"1024",height:"402"})}),"\n",(0,i.jsx)(s.p,{children:"\u672c\u7814\u7a76\u4f7f\u7528 t-SNE \u6280\u8853\u5728 2D \u5730\u5716\u4e0a\u8996\u89ba\u5316 COCO \u6e2c\u8a66\u96c6\u4e2d\u7684\u5716\u50cf\u548c\u6587\u672c\u914d\u5c0d\u7684\u5b78\u7fd2\u8a9e\u7fa9\u7279\u5fb5\u7a7a\u9593\uff0c\u901a\u904e\u5206\u6790\uff0c\u4f5c\u8005\u63d0\u51fa\u4ee5\u4e0b\u5e7e\u500b\u8981\u9ede\uff1a"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u985e\u5167\u4e00\u81f4\u6027"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u4f7f\u7528\u7269\u4ef6\u6a19\u7c64\u53ef\u986f\u8457\u7e2e\u77ed\u76f8\u540c\u7269\u4ef6\u5728\u8996\u89ba\u548c\u6587\u672c\u8868\u793a\u4e4b\u9593\u7684\u8ddd\u96e2\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5728 Oscar \u6a21\u578b\u4e2d\uff0c\u67d0\u4e00\u7269\u4ef6\uff08\u4f8b\u5982\u300c\u4eba\u300d\u6216\u300c\u6591\u99ac\u300d\uff09\u7684\u8996\u89ba\u548c\u6587\u672c\u8868\u793a\u6bd4\u5728\u57fa\u7dda\u65b9\u6cd5\u4e2d\u66f4\u70ba\u76f8\u8fd1\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u985e\u9593\u5dee\u7570\u6027"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7576\u6dfb\u52a0\u6a19\u7c64\u5f8c\uff0c\u8a9e\u610f\u76f8\u95dc\u7684\u7269\u4ef6\u985e\u5225\u5f7c\u6b64\u66f4\u52a0\u63a5\u8fd1\uff0c\u96d6\u7136\u5b83\u5011\u4ecd\u7136\u662f\u53ef\u5340\u5206\u7684\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u57fa\u7dda\u65b9\u6cd5\u4e2d\u7684\u985e\u5225\uff08\u4f8b\u5982\u52d5\u7269\u3001\u5bb6\u5177\u548c\u4ea4\u901a\u5de5\u5177\uff09\u51fa\u73fe\u67d0\u4e9b\u6df7\u5408\uff0c\u800c\u6dfb\u52a0\u6a19\u7c64\u7684\u65b9\u6cd5\u53ef\u4ee5\u66f4\u7cbe\u78ba\u5730\u5206\u8fa8\u9019\u4e9b\u985e\u5225\uff08\u4f8b\u5982\u300c\u4eba\u300d\u3001\u300c\u6591\u99ac\u300d\u3001\u300c\u7f8a\u300d\u3001\u300c\u9ce5\u300d\u3001\u300c\u6905\u5b50\u300d\u3001\u300c\u6c99\u767c\u300d\u3001\u300c\u9577\u51f3\u300d\u3001\u300c\u516c\u8eca\u300d\u3001\u300c\u706b\u8eca\u300d\u3001\u300c\u5361\u8eca\u300d\u3001\u300c\u6469\u6258\u8eca\u300d\u548c\u300c\u6c7d\u8eca\u300d\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7269\u4ef6\u6a19\u7c64\u7684\u91cd\u8981\u6027"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7269\u4ef6\u6a19\u7c64\u5728\u5c0d\u9f4a\u5b78\u7fd2\u4e2d\u64d4\u4efb\u4e86\u4e00\u500b\u6975\u70ba\u91cd\u8981\u7684\u89d2\u8272\uff0c\u4f5c\u70ba\u9023\u7d50\u548c\u6b63\u5247\u5316\u8de8\u6a21\u614b\u7279\u5fb5\u5b78\u7fd2\u7684\u9328\u9ede\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"\u6d88\u878d\u7814\u7a76",children:"\u6d88\u878d\u7814\u7a76"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Oscar \u6d88\u878d\u7814\u7a76",src:e(46830).A+"",width:"1024",height:"279"})}),"\n",(0,i.jsx)(s.p,{children:"\u6839\u64da\u4e0a\u5716\uff0c\u53ef\u4ee5\u89c0\u5bdf\u5230\u5e7e\u500b\u91cd\u9ede\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u4f7f\u7528\u7269\u4ef6\u6a19\u7c64\u5fae\u8abf\u7684\u5b78\u7fd2\u66f2\u7dda\u5728\u6240\u6709\u4efb\u52d9\u4e0a\u6bd4\u6c92\u6709\u4f7f\u7528\u6a19\u7c64\u7684 VLP \u65b9\u6cd5\u66f4\u5feb\u3001\u66f4\u597d\u5730\u6536\u6582\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5728 VQA\uff08\u8996\u89ba\u554f\u7b54\uff09\u548c\u5f71\u50cf\u6aa2\u7d22\u4efb\u52d9\u4e0a\uff0c\u5229\u7528\u6a19\u7c64\u9032\u884c\u8a13\u7df4\u53ea\u9700\u57fa\u7dda\u65b9\u6cd5\u4e00\u534a\u7684\u8a13\u7df4\u6642\u9593\u5373\u53ef\u9054\u5230\u5176\u6700\u7d42\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u4e9b\u767c\u73fe\u8868\u660e\uff0cOscar \u5229\u7528\u7269\u4ef6\u6a19\u7c64\u5728\u9019\u4e9b\u8996\u89ba\u4efb\u52d9\u4e0a\u5c55\u73fe\u51fa\u4e86\u66f4\u51fa\u8272\u4e14\u66f4\u9ad8\u6548\u7684\u6027\u80fd\uff0c\u4e14\u80fd\u5728\u8f03\u77ed\u7684\u8a13\u7df4\u6642\u9593\u5167\u9054\u5230\u6216\u8d85\u904e\u7121\u6a19\u7c64\u65b9\u6cd5\u7684\u6548\u80fd\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Oscar \u6d88\u878d\u7814\u7a761",src:e(73291).A+"",width:"694",height:"312"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u4f7f\u7528\u7269\u4ef6\u6a19\u7c64\u78ba\u5be6\u63d0\u5347\u4e86\u6a21\u578b\u7684\u6027\u80fd\u3002\u9019\u662f\u901a\u904e\u6bd4\u8f03\u5b8c\u5168\u6ce8\u610f\u529b\u548c\u90e8\u5206\u6ce8\u610f\u529b\uff08w-v\uff09\u7684\u6a21\u578b\u800c\u5f97\u51fa\u7684\u7d50\u8ad6\uff0c\u986f\u793a\u6dfb\u52a0\u7269\u4ef6\u6a19\u7c64\u5c0d\u6a21\u578b\u662f\u6709\u76ca\u7684\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5340\u57df\u7279\u5fb5\u5728\u5f71\u50cf\u8868\u793a\u6642\u63d0\u4f9b\u4e86\u6bd4\u7269\u4ef6\u6a19\u7c64\u66f4\u591a\u7684\u8cc7\u8a0a\uff0c\u9019\u5728 w-v\uff08\u7269\u4ef6\u5340\u57df\u8207\u6587\u5b57\u4e4b\u9593\u7684\u95dc\u4fc2\uff09\u548c v-q\uff08\u7269\u4ef6\u6a19\u7c64\u8207\u554f\u984c\u4e4b\u9593\u7684\u95dc\u4fc2\uff09\u7684\u6bd4\u8f03\u4e2d\u5f97\u5230\u5448\u73fe\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Oscar \u6a21\u578b\u901a\u904e\u5229\u7528\u7269\u4ef6\u6a19\u7c64\u986f\u8457\u63d0\u9ad8\u4e86\u591a\u500b\u4e0b\u6e38\u4efb\u52d9\u7684\u6027\u80fd\uff0c\u4e26\u4e14\u4f7f\u7528\u7269\u4ef6\u6a19\u7c64\u9032\u884c\u8a13\u7df4\u53ef\u4ee5\u5728\u66f4\u77ed\u7684\u8a13\u7df4\u6642\u9593\u5167\u9054\u5230\u6216\u8d85\u904e\u7121\u6a19\u7c64\u57fa\u7dda\u7684\u6700\u7d42\u6027\u80fd\u3002\u7269\u4ef6\u6a19\u7c64\u548c\u5340\u57df\u7279\u5fb5\u5728\u6a21\u578b\u6ce8\u610f\u529b\u6a5f\u5236\u7684\u4ea4\u4e92\u4e2d\u8d77\u5230\u4e86\u91cd\u8981\u7684\u4f5c\u7528\uff0c\u800c\u5728\u9810\u8a13\u7df4\u968e\u6bb5\u4f7f\u7528\u4e0d\u540c\u7684\u7269\u4ef6\u6a19\u7c64\u96c6\u4e5f\u986f\u793a\u51fa\u5c0d\u6a21\u578b\u6027\u80fd\u7684\u5f71\u97ff\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(s.p,{children:"\u5176\u5be6\uff0c\u9019\u4e5f\u662f\u4e00\u500b\u5f15\u5165\u77e5\u8b58\u5716\u8b5c\u7684\u624b\u6cd5\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u56e0\u70ba\u6a19\u7c64\u4e5f\u662f\u4eba\u985e\u7d66\u7684\uff0c\u7576\u6211\u5011\u7d66\u4e86\u6a21\u578b\u6a19\u7c64\uff0c\u96d6\u7136\u8aaa\u662f\u7d66\u4e86\u4e00\u500b\u660e\u78ba\u7684\u6307\u5f15\uff0c\u4f46\u9019\u500b\u6307\u5f15\u771f\u7684\u5c0d\u55ce\uff1f\u9019\u500b\u6307\u5f15\u771f\u7684\u8db3\u5920\u55ce\uff1f\u6703\u4e0d\u6703\u53cd\u800c\u9650\u5236\u4e86\u6a21\u578b\u7684\u767c\u63ee\uff1f"}),"\n",(0,i.jsx)(s.p,{children:"Oscar \u6a21\u578b\u5229\u7528\u7269\u4ef6\u6a19\u7c64\u4f5c\u70ba\u9328\u9ede\uff0c\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u6703\u4f9d\u8cf4\u65bc\u7269\u4ef6\u6a19\u7c64\u7684\u6e96\u78ba\u5ea6\u548c\u54c1\u8cea\u3002\u82e5\u7269\u4ef6\u6a19\u7c64\u751f\u6210\u7684\u4e0d\u5920\u7cbe\u78ba\u6216\u591a\u6a23\uff0c\u6a21\u578b\u53ef\u80fd\u6703\u5b78\u7fd2\u5230\u932f\u8aa4\u7684\u6216\u904e\u65bc\u72f9\u9698\u7684\u7279\u5fb5\uff0c\u9032\u800c\u5f71\u97ff\u9810\u8a13\u7df4\u7684\u6548\u679c\u548c\u4e0b\u6e38\u4efb\u52d9\u7684\u8868\u73fe\u3002\u7562\u7adf\uff0c\u4eba\u985e\u7684\u8a9e\u8a00\u6709\u7121\u9650\u7684\u53ef\u80fd\uff0c\u4f46\u6a19\u7c64\u5167\u5bb9\u537b\u662f\u6709\u9650\u7684\u3002\u4f7f\u7528\u6709\u9650\u7684\u6982\u5ff5\u4f86\u9032\u884c\u7121\u9650\u7684\u62d3\u5c55\uff0c\u672c\u8eab\u5c31\u662f\u4e00\u4ef6\u975e\u5e38\u56f0\u96e3\u7684\u6311\u6230\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u4f46\u4e0d\u7ba1\u600e\u9ebc\u8aaa\uff0cOscar \u4e5f\u8c50\u5bcc\u4e86\u591a\u6a21\u614b\u9810\u8a13\u7df4\u6a21\u578b\u7684\u7814\u7a76\u9818\u57df\uff0c\u66f4\u5c55\u73fe\u4e86\u4e00\u689d\u6709\u6548\u6574\u5408\u8996\u89ba\u8207\u8a9e\u8a00\u7684\u65b0\u9014\u5f91\u3002\u901a\u904e\u7cbe\u5fc3\u8a2d\u8a08\u7684\u9810\u8a13\u7df4\u7b56\u7565\u548c\u5be6\u9a57\u9a57\u8b49\uff0c\u8a72\u7814\u7a76\u672a\u76e1\u7684\u53ef\u80fd\u5c07\u4fc3\u4f7f\u5f8c\u7e8c\u7684\u7814\u7a76\u8005\u5011\u5728\u9019\u4e00\u57fa\u790e\u4e0a\u63a2\u7d22\u66f4\u591a\u5275\u65b0\u7684\u601d\u8def\u548c\u61c9\u7528\uff0c\u6301\u7e8c\u63a8\u52d5\u8996\u89ba\u8207\u8a9e\u8a00\u6574\u5408\u6280\u8853\u7684\u767c\u5c55\u524d\u666f\u3002"})]})}function a(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},41365:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/oscar_1-6d8ac3da7dfa1389b376a2f2889266fd.jpg"},90378:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/oscar_2-058cacfdaff0d5c927853c6ec488078b.jpg"},13031:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/oscar_3-2205e4e05aad8273a3812da6253e3d18.jpg"},5596:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/oscar_4-66bb9016d93cdcbe96464938d6bfe6ad.jpg"},2969:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/oscar_5-56c0c67caec1512a9ca3df536184915d.jpg"},46830:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/oscar_6-a5f3331ab13a775c61053f8343c38a59.jpg"},73291:(n,s,e)=>{e.d(s,{A:()=>i});const i=e.p+"assets/images/oscar_7-315f2c2cfccf706f891c7e2bdfad28ee.jpg"},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>d});var i=e(96540);const r={},l=i.createContext(r);function c(n){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function d(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(l.Provider,{value:s},n.children)}}}]);