"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8090],{24731:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var s=i(74848),l=i(28453);const r={},d="[23.09] TIVC",c={id:"tivc/index",title:"[23.09] TIVC",description:"\u96d9\u80de\u80ce\u8fa8\u8b58\u7684\u89c0\u9ede",source:"@site/papers/2309-tivc/index.md",sourceDirName:"2309-tivc",slug:"/tivc/",permalink:"/papers/tivc/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[22.09] FRVT-Twins",permalink:"/papers/frvt-distinguishing-twins/"}},h={},t=[{value:"\u96d9\u80de\u80ce\u8fa8\u8b58\u7684\u89c0\u9ede",id:"\u96d9\u80de\u80ce\u8fa8\u8b58\u7684\u89c0\u9ede",level:2},{value:"\u4f86\u81ea\u53e6\u5916\u4e00\u7bc7\u8ad6\u6587\u7684\u56de\u9867",id:"\u4f86\u81ea\u53e6\u5916\u4e00\u7bc7\u8ad6\u6587\u7684\u56de\u9867",level:2},{value:"DCNN \u4e4b\u524d\u7684\u6f14\u7b97\u6cd5",id:"dcnn-\u4e4b\u524d\u7684\u6f14\u7b97\u6cd5",level:3},{value:"\u6df1\u5ea6\u5b78\u7fd2\u65b9\u6cd5",id:"\u6df1\u5ea6\u5b78\u7fd2\u65b9\u6cd5",level:3},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u5be6\u9a57 1\uff1a\u4eba\u985e\u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58",id:"\u5be6\u9a57-1\u4eba\u985e\u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58",level:3},{value:"\u5be6\u9a57 2\uff1aDCNN \u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58",id:"\u5be6\u9a57-2dcnn-\u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u5be6\u9a57\u7d50\u679c",id:"\u5be6\u9a57\u7d50\u679c",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function x(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"2309-tivc",children:"[23.09] TIVC"}),"\n",(0,s.jsx)(e.h2,{id:"\u96d9\u80de\u80ce\u8fa8\u8b58\u7684\u89c0\u9ede",children:"\u96d9\u80de\u80ce\u8fa8\u8b58\u7684\u89c0\u9ede"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://dl.acm.org/doi/pdf/10.1145/3609224",children:(0,s.jsx)(e.strong,{children:"Twin Identification over Viewpoint Change: A Deep Convolutional Neural Network Surpasses Humans"})})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u96d9\u80de\u80ce\u8fa8\u8b58\u7684\u554f\u984c\u4e00\u76f4\u662f\u6a5f\u5668\u8996\u89ba\u7814\u7a76\u7684\u4e00\u500b\u6311\u6230\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u7bc7\u8ad6\u6587\u65e8\u5728\u6bd4\u8f03\u4eba\u985e\u548c\u6df1\u5ea6\u5377\u7a4d\u795e\u7d93\u7db2\u8def\uff08DCNN\uff09\u5728\u540c\u5375\u96d9\u80de\u80ce\u8eab\u4efd\u9a57\u8b49\u4e2d\u7684\u6e96\u78ba\u6027\uff0c\u4e26\u6e2c\u8a66\u5728\u8996\u89d2\u8b8a\u5316\u6642\u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5177\u9ad4\u800c\u8a00\uff0c\u7814\u7a76\u8005\u5e0c\u671b\u4e86\u89e3\u9019\u5169\u7a2e\u7cfb\u7d71\u5728\u9ad8\u5ea6\u76f8\u4f3c\u7684\u9762\u5b54\u5340\u5206\u65b9\u9762\u7684\u5dee\u7570\uff0c\u4ee5\u53ca\u5728\u5be6\u969b\u61c9\u7528\u4e2d\uff0c\u9019\u4e9b\u7cfb\u7d71\u7684\u53ef\u9760\u6027\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4f86\u81ea\u53e6\u5916\u4e00\u7bc7\u8ad6\u6587\u7684\u56de\u9867",children:"\u4f86\u81ea\u53e6\u5916\u4e00\u7bc7\u8ad6\u6587\u7684\u56de\u9867"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u4f86\u6211\u5011\u8981\u770b\u7684\u662f\u9019\u7bc7\u8ad6\u6587\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.sciencedirect.com/science/article/abs/pii/S0262885621002365",children:(0,s.jsx)(e.strong,{children:"[21.12] Monozygotic twin face recognition: An in-depth analysis and plausible improvements"})})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u662f\u9019\u7bc7\u8ad6\u6587\u7684 PDF \u5fc5\u9808\u4ed8\u8cbb\u8cfc\u8cb7\u624d\u80fd\u4e0b\u8f09\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5f8c\u4f86\u6211\u5011\u767c\u73fe\uff0c\u5f8c\u7e8c\u6709\u5176\u4ed6\u8ad6\u6587\u5f15\u7528\u4e86\u9019\u7bc7\u4ed8\u8cbb\u7684\u8ad6\u6587\uff0c\u800c\u4e14\u6709\u5927\u7bc7\u5e45\u5730\u56de\u9867\u4e86\u90a3\u7bc7\u8ad6\u6587\u7684\u5167\u5bb9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u563f\uff01\u9019\u9ebc\u525b\u597d\uff01\u90a3\u6211\u5011\u5c31\u4e00\u8d77\u4e86\u89e3\u4e00\u4e0b\u5427\uff01"}),"\n",(0,s.jsx)(e.h3,{id:"dcnn-\u4e4b\u524d\u7684\u6f14\u7b97\u6cd5",children:"DCNN \u4e4b\u524d\u7684\u6f14\u7b97\u6cd5"}),"\n",(0,s.jsx)(e.p,{children:"2011 \u5e74\u81f3 2014 \u5e74\u9593\uff0c\u8a31\u591a\u7814\u7a76\u6e2c\u8a66\u4e86\u5546\u696d\u4eba\u81c9\u8fa8\u8b58\u6f14\u7b97\u6cd5\u5728\u5340\u5206\u540c\u5375\u96d9\u80de\u80ce\u65b9\u9762\u7684\u6548\u80fd\uff0c\u5f97\u51fa\u7684\u7d50\u8ad6\u662f\u7576\u6642\u7684\u4eba\u81c9\u8fa8\u8b58\u6280\u8853\u7121\u6cd5\u6709\u6548\u5340\u5206\u540c\u5375\u96d9\u80de\u80ce\u3002\u7576\u6642\uff0c\u4ee5\u96fb\u8166\u70ba\u57fa\u790e\u7684\u4eba\u81c9\u8fa8\u8b58\u7cfb\u7d71\u901a\u5e38\u4f7f\u7528\u4e3b\u6210\u5206\u5206\u6790\uff08PCA\uff09\u6216\u624b\u52d5\u9078\u64c7\u7684\u7279\u5fb5\u4f86\u8655\u7406\u4eba\u81c9\u5f71\u50cf\uff0c\u4e26\u63a1\u7528\u5c0d\u6578\u4f3c\u7136\u51fd\u6578\u4f86\u964d\u4f4e\u932f\u8aa4\u7387\u3002\u9019\u4e9b\u7814\u7a76\u5e7e\u4e4e\u5b8c\u5168\u4f9d\u8cf4 Notre Dame Twins \u8cc7\u6599\u96c6 (ND-TWINS-2009-2010) \u7684\u4eba\u81c9\u5f71\u50cf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u9019\u4e9b\u65e9\u671f\u7814\u7a76\u4e2d\uff0c\u5c0d\u65bc\u4e00\u4e9b\u96d9\u80de\u80ce\uff0c\u53ef\u4ee5\u5f9e 2009 \u5e74\u548c 2010 \u5e74\u62cd\u651d\u7684\u7167\u7247\u4e2d\u7372\u53d6\u5f71\u50cf\uff0c\u5f9e\u800c\u652f\u63f4\u5ef6\u6642\u8fa8\u8b58\u6e2c\u8a66\u3002\u9019\u4e9b\u8cc7\u6599\u96c6\u7684\u53ef\u7528\u6027\u548c\u54c1\u8cea\u6fc0\u767c\u4e86\u5c0d\u96d9\u80de\u80ce\u4eba\u81c9\u8fa8\u8b58\u7684\u591a\u9805\u7814\u7a76\u3002\u4f8b\u5982\uff0c\u5728\u4e00\u9805\u7814\u7a76\u4e2d\uff0c\u53c3\u8207\u8005\u5b8c\u6210\u4e86\u4e00\u9805\u8eab\u4efd\u9a57\u8b49\u4efb\u52d9\uff0c\u5176\u4e2d\u4ed6\u5011\u67e5\u770b\u4e86\u6210\u5c0d\u7684\u540c\u5375\u96d9\u80de\u80ce\u5144\u5f1f\u59d0\u59b9\uff08\u4e0d\u540c\u8eab\u4efd\u8a66\u9a57\uff09\u548c\u76f8\u540c\u6578\u91cf\u7684\u76f8\u540c\u8eab\u4efd\u5716\u50cf\u5c0d\u3002\u6240\u6709\u5f71\u50cf\u5c0d\u90fd\u662f\u5728\u76f8\u540c\u7684\u7167\u660e\u689d\u4ef6\u4e0b\u62cd\u651d\u7684\u3002\u7d50\u679c\u986f\u793a\uff0c\u4eba\u985e\u5728\u6709\u66f4\u591a\u6642\u9593\u505a\u51fa\u6c7a\u5b9a\u6642\u7684\u8868\u73fe\u8981\u6bd4\u50c5\u6aa2\u67e5\u5f71\u50cf\u5c0d 2 \u79d2\u6642\u597d\u5f97\u591a\uff0c\u9019\u8868\u660e\u4e86\u6642\u9593\u5c0d\u65bc\u4eba\u985e\u8fa8\u8b58\u540c\u5375\u96d9\u80de\u80ce\u7684\u5f71\u97ff\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6e2c\u8a66\u7684\u96fb\u8166\u6f14\u7b97\u6cd5\u4e2d\uff0c\u53ea\u6709\u4e00\u7a2e\u5546\u696d\u6f14\u7b97\u6cd5\uff08Cognitec\uff09\u7684\u6548\u80fd\u63a5\u8fd1\u4f46\u4f4e\u65bc\u4eba\u985e\u6548\u80fd\u3002\u6b64\u5916\uff0c\u96a8\u8457\u5f71\u50cf\u689d\u4ef6\u8b8a\u5316\uff0c\u9019\u4e9b\u65e9\u671f\u6f14\u7b97\u6cd5\u5728\u5340\u5206\u540c\u5375\u96d9\u80de\u80ce\u6642\u7684\u8aa4\u5831\u7387\u4e5f\u6703\u589e\u52a0\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u6df1\u5ea6\u5b78\u7fd2\u65b9\u6cd5",children:"\u6df1\u5ea6\u5b78\u7fd2\u65b9\u6cd5"}),"\n",(0,s.jsx)(e.p,{children:"\u6df1\u5ea6\u5b78\u7fd2\u65b9\u6cd5\uff0c\u7279\u5225\u662f\u6df1\u5ea6\u5377\u7a4d\u795e\u7d93\u7db2\u8def\uff08DCNN\uff09\uff0c\u5728\u63a8\u9032\u81ea\u52d5\u4eba\u81c9\u8fa8\u8b58\u9818\u57df\u7684\u6700\u65b0\u6280\u8853\u65b9\u9762\u53d6\u5f97\u4e86\u5de8\u5927\u6210\u529f\u3002\u9019\u4e9b\u7db2\u8def\u7684\u4e00\u500b\u5f37\u5927\u512a\u52e2\u662f\u5b83\u5011\u80fd\u5920\u6982\u62ec\u5716\u50cf\u548c\u5916\u89c0\u8b8a\u5316\u3002\u5c07 DCNN \u61c9\u7528\u65bc\u5340\u5206\u540c\u5375\u96d9\u80de\u80ce\u7684\u5617\u8a66\u96d6\u7136\u4e0d\u591a\uff0c\u4f46\u5df2\u7d93\u53d6\u5f97\u4e86\u4e00\u4e9b\u521d\u6b65\u7684\u6210\u529f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u5728\u4e00\u9805\u7814\u7a76\u4e2d\uff0c\u57fa\u65bc PCA\u3001\u5b9a\u5411\u68af\u5ea6\u76f4\u65b9\u5716(HOG)\u548c\u5c40\u90e8\u4e8c\u503c\u6a21\u5f0f(LBP)\u7684\u5c40\u90e8\u7279\u5fb5\u63d0\u53d6\u6f14\u7b97\u6cd5\u7684\u7d44\u5408\u5728 ND-TWINS-2009 \u8cc7\u6599\u96c6\u4e0a\u6bd4\u7269\u4ef6\u8a13\u7df4\u7684 CNN \u8868\u73fe\u5f97\u66f4\u6e96\u78ba\u3002\u5728\u53e6\u4e00\u9805\u7814\u7a76\u4e2d\uff0c\u7814\u7a76\u8005\u5275\u5efa\u4e86\u4e00\u500b\u57fa\u7dda\u9762\u90e8\u76f8\u4f3c\u6027\u6e2c\u91cf\uff0c\u4e26\u4f7f\u7528\u8a72\u57fa\u7dda\u4f86\u6e2c\u91cf\u6c92\u6709\u5bb6\u5ead\u95dc\u4fc2\u7684\u300c\u76f8\u4f3c\u300d\u8eab\u4efd\u7684\u5f71\u97ff\u3002\u4ed6\u5011\u767c\u73fe\uff0c\u6839\u64da\u4e0a\u8ff0\u95be\u503c\u7684\u5b9a\u7fa9\uff0c15,455 \u500b\u8eab\u4efd\u4e2d\u6709 6,153 \u500b\u5177\u6709\u4e00\u500b\u6216\u591a\u500b\u6f5b\u5728\u7684\u76f8\u4f3c\u8005\uff0c\u8868\u660e\u5728\u5927\u898f\u6a21\u8cc7\u6599\u96c6\u4e2d\u5b58\u5728\u5927\u91cf\u7684\u6f5b\u5728\u76f8\u4f3c\u8005\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u8fd1\u671f\u7684\u7814\u7a76\u9084\u8868\u660e\uff0c\u5c07\u91dd\u5c0d\u96d9\u80de\u80ce\u8fa8\u8b58\u512a\u5316\u7684\u6df1\u5ea6\u7db2\u8def\u61c9\u7528\u65bc\u8fa8\u8b58\u96d9\u80de\u80ce\u7684\u554f\u984c\u662f\u5408\u7406\u7684\u3002\u4f8b\u5982\uff0c\u67d0\u4e9b\u7814\u7a76\u4f7f\u7528\u5927\u578b\u8cc7\u6599\u96c6\u9032\u884c\u521d\u6b65\u8a13\u7df4\uff0c\u96a8\u5f8c\u9032\u884c\u6700\u4f73\u5316\u4ee5\u5340\u5206\u540c\u5375\u96d9\u80de\u80ce\uff0c\u4e26\u5728\u6e2c\u8a66\u4e2d\u53d6\u5f97\u4e86\u4e0d\u932f\u7684\u6548\u679c\u3002\u7136\u800c\uff0c\u9019\u4e9b\u7814\u7a76\u7684\u4e00\u500b\u4e3b\u8981\u9650\u5236\u662f\u8cc7\u6599\u96c6\u7121\u6cd5\u516c\u958b\uff0c\u9019\u4f7f\u5f97\u5be6\u9a57\u7d50\u679c\u96e3\u4ee5\u8907\u88fd\u548c\u9a57\u8b49\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7f8e\u570b\u570b\u5bb6\u6a19\u6e96\u8207\u6280\u8853\u7814\u7a76\u6240\uff08NIST\uff09\u9032\u884c\u7684\u4eba\u81c9\u8fa8\u8b58\u4f9b\u61c9\u5546\u6e2c\u8a66\uff08FRVT\uff09\u4e5f\u6aa2\u9a57\u4e86\u5340\u5206\u540c\u5375\u96d9\u80de\u80ce\u7684\u81c9\u90e8\u554f\u984c\u3002\u7814\u7a76\u8868\u660e\uff0c\u63d0\u4ea4\u7d66 FRVT \u7684\u6240\u6709\u6f14\u7b97\u6cd5\u90fd\u7121\u6cd5\u5728\u7522\u751f\u842c\u5206\u4e4b\u4e00\u8aa4\u5831\u7684\u95be\u503c\u4e0b\u6aa2\u6e2c\u5230\u540c\u5375\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u8005\u3002\u9019\u4e9b\u7d50\u679c\u96d6\u7136\u63d0\u4f9b\u4e86\u6709\u50f9\u503c\u7684\u8996\u89d2\uff0c\u4f46\u7531\u65bc\u591a\u7a2e\u539f\u56e0\uff0c\u5f9e\u7814\u7a76\u7d50\u679c\u4e2d\u5f97\u51fa\u7684\u7d50\u8ad6\u662f\u6709\u9650\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u672c\u7814\u7a76\u4e2d\uff0c\u7814\u7a76\u8005\u9078\u64c7\u4e86\u4e00\u500b\u9ad8\u6e96\u78ba\u5ea6\u7684 DCNN\uff0c\u4e26\u901a\u904e\u95dc\u806f\u4eba\u985e\u548c\u6a5f\u5668\u7684\u76f8\u4f3c\u5ea6\u8a55\u7d1a\u4f86\u6e2c\u8a66\u4eba\u985e\u5c0d\u9ad8\u5ea6\u76f8\u4f3c\u5716\u50cf\u7684\u611f\u77e5\u8207 DCNN \u4e4b\u9593\u662f\u5426\u5b58\u5728\u95dc\u4fc2\u3002\u9019\u4e0d\u50c5\u63d0\u4f9b\u4e86\u5c0d\u6f14\u7b97\u6cd5\u6e2c\u8a66\u4e2d\u4f7f\u7528\u7684\u5b8c\u5168\u76f8\u540c\u7684\u81c9\u90e8\u523a\u6fc0\u548c\u8996\u9ede\u689d\u4ef6\u7684\u4eba\u985e\u57fa\u6e96\u6e2c\u8a66\uff0c\u4e5f\u6709\u52a9\u65bc\u4e86\u89e3\u4eba\u81c9\u8fa8\u8b58\u7cfb\u7d71\u5c0d\u65bc\u9ad8\u5ea6\u76f8\u4f3c\u7684\u81c9\u90e8\uff08\u5305\u62ec\u96d9\u80de\u80ce\uff09\u7684\u53ef\u9760\u6027\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,s.jsx)(e.p,{children:"\u597d\uff0c\u770b\u5b8c\u4e86\u4e4b\u524d\u7684\u6587\u737b\u56de\u9867\uff0c\u8b93\u6211\u5011\u56de\u5230\u539f\u672c\u8981\u770b\u7684\u9019\u7bc7\u8ad6\u6587\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u65bc\u540c\u5375\u96d9\u80de\u80ce\u4e0d\u8ad6\u5728\u4eba\u985e\u773c\u4e2d\u6216\u662f\u5728\u6a5f\u5668\u8996\u89ba\u7cfb\u7d71\u4e2d\uff0c\u90fd\u6975\u5177\u6311\u6230\u6027\uff0c\u56e0\u6b64\u9019\u7bc7\u8ad6\u6587\u8981\u505a\u7684\u4e8b\u60c5\u5176\u5be6\u5f88\u7c21\u55ae\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u5c31\u662f\u6bd4\u8f03\u4eba\u985e\u548c\u6a5f\u5668\u5728\u5340\u5206\u540c\u5375\u96d9\u80de\u80ce\u65b9\u9762\u7684\u8868\u73fe\u3002"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u7814\u7a76\u8005\u900f\u904e\u4e86\u89e3\u96fb\u8166\u8996\u89ba\u7cfb\u7d71\u548c\u4eba\u985e\u8a8d\u77e5\u7684\u5dee\u7570\uff0c\u8a66\u5716\u627e\u5230\u512a\u5316\u6a5f\u5668\u8996\u89ba\u7cfb\u7d71\u7684\u65b9\u6cd5\uff0c\u4ee5\u63d0\u9ad8\u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58\u6e96\u78ba\u6027\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,s.jsx)(e.h3,{id:"\u5be6\u9a57-1\u4eba\u985e\u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58",children:"\u5be6\u9a57 1\uff1a\u4eba\u985e\u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"\u5be6\u9a57 1",src:i(81626).A+"",width:"1224",height:"476"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5be6\u9a57 1 \u4e2d\uff0c\u7814\u7a76\u8005\u4f7f\u7528 ND-TWINS-2009-2010 \u8cc7\u6599\u96c6\u6e2c\u91cf\u4e86\u4eba\u985e\u53c3\u8207\u8005\u5c0d\u96d9\u80de\u80ce\u7684\u8fa8\u8b58\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7814\u7a76\u8005\u5f9e\u5fb7\u5dde\u5927\u5b78\u9054\u62c9\u65af\u5206\u6821\uff08UTD\uff09\u62db\u52df\u4e86 87 \u540d\u5b78\u751f\u53c3\u8207\u8005\u3002\u53c3\u8207\u8005\u4ee5\u7372\u5f97\u8ab2\u7a0b\u5b78\u5206\u4f5c\u70ba\u5831\u916c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6bcf\u500b\u8996\u89d2\u689d\u4ef6\uff08\u6b63\u9762\u5c0d\u6b63\u9762\u3001\u6b63\u9762\u5c0d 45 \u5ea6\u548c\u6b63\u9762\u5c0d 90 \u5ea6\uff09\u5404\u6709 29 \u540d\u53c3\u8207\u8005\u3002\u53c3\u8207\u8005\u5fc5\u9808\u5e74\u6eff 18 \u6b72\u4e26\u5177\u6709\u6b63\u5e38\u6216\u77ef\u6b63\u5f8c\u6b63\u5e38\u7684\u8996\u529b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53c3\u8207\u8cc7\u683c\u901a\u904e Qualtrics \u8abf\u67e5\u9032\u884c\u81ea\u6211\u5831\u544a\u3002\u6240\u6709\u5be6\u9a57\u7a0b\u5e8f\u5747\u7d93\u904e UTD \u6a5f\u69cb\u5be9\u67e5\u59d4\u54e1\u6703\u6279\u51c6\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5be6\u9a57\u8a2d\u8a08"})}),"\n",(0,s.jsx)(e.p,{children:"\u7814\u7a76\u8005\u6e2c\u8a66\u4e86\u5716\u50cf\u5c0d\u4e2d\u7684\u81c9\u90e8\u8eab\u4efd\u5339\u914d\uff08\u8eab\u4efd\u9a57\u8b49\uff09\uff0c\u4e26\u6839\u64da\u523a\u6fc0\u985e\u578b\u9032\u884c\u4e86\u6e2c\u8a66\u3002\u5716\u50cf\u5c0d\u986f\u793a\u7684\u662f\u76f8\u540c\u8eab\u4efd\uff08\u76f8\u540c\u8eab\u4efd\u5c0d\uff09\u6216\u4e0d\u540c\u8eab\u4efd\u3002\u5728\u4e0d\u540c\u8eab\u4efd\u5c0d\u7684\u60c5\u6cc1\u4e0b\uff0c\u4e0d\u540c\u8eab\u4efd\u5c0d\u5206\u70ba\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u5c0d\u548c\u4e00\u822c\u5192\u540d\u9802\u66ff\u5c0d\u3002\u76f8\u540c\u8eab\u4efd\u5c0d\u7531\u540c\u4e00\u8eab\u4efd\u7684\u5169\u5f35\u4e0d\u540c\u5716\u50cf\u7d44\u6210\u3002\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u5c0d\u7531\u540c\u5375\u96d9\u80de\u80ce\u5144\u5f1f\u59d0\u59b9\u7d44\u6210\u3002\u4e00\u822c\u5192\u540d\u9802\u66ff\u5c0d\u7531\u5169\u500b\u4e0d\u540c\u4e14\u7121\u95dc\u7684\u4eba\u7269\u5716\u50cf\u7d44\u6210\u3002\u6bcf\u7a2e\u985e\u578b\u7684\u5716\u50cf\u5c0d\u5728\u4e09\u500b\u8996\u89d2\u689d\u4ef6\u4e2d\u90fd\u9032\u884c\u4e86\u6e2c\u8a66\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8eab\u4efd\u5339\u914d\u6e96\u78ba\u6027\u901a\u904e\u8a08\u7b97\u5169\u500b\u689d\u4ef6\u7684 AUC \u4f86\u6e2c\u91cf\uff1a\uff08a\uff09\u76f8\u540c\u8eab\u4efd\u5c0d\u8207\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u5c0d\uff0c\u548c\uff08b\uff09\u76f8\u540c\u8eab\u4efd\u5c0d\u8207\u4e00\u822c\u5192\u540d\u9802\u66ff\u5c0d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7a0b\u5e8f"})}),"\n",(0,s.jsx)(e.p,{children:"\u53c3\u8207\u8005\u9996\u5148\u5b8c\u6210\u4e00\u4efd\u7be9\u9078\u554f\u5377\u4ee5\u78ba\u5b9a\u8cc7\u683c\u3002\u554f\u5377\u78ba\u8a8d\u53c3\u8207\u8005\u81f3\u5c11 18 \u6b72\u4e26\u4e14\u5177\u6709\u6b63\u5e38\u6216\u77ef\u6b63\u5f8c\u6b63\u5e38\u7684\u8996\u529b\u3002\u5982\u679c\u53c3\u8207\u8005\u6eff\u8db3\u689d\u4ef6\uff0c\u4ed6\u5011\u5c07\u88ab\u5f15\u5c0e\u5230\u5728\u7dda\u77e5\u60c5\u540c\u610f\u66f8\u3002\u53c3\u8207\u8005\u5b8c\u6210\u77e5\u60c5\u540c\u610f\u66f8\u5f8c\uff0c\u5c07\u7372\u5f97\u4e00\u500b\u8a2a\u554f\u4ee3\u78bc\u4ee5\u5b89\u6392\u7814\u7a76\u6642\u9593\u3002\u53c3\u8207\u8005\u5728\u9810\u5b9a\u7684\u6642\u9593\u5167\uff0c\u901a\u904e\u7279\u5b9a\u65bc\u53c3\u8207\u8005\u7684 Microsoft Teams \u93c8\u63a5\u8207\u7814\u7a76\u52a9\u7406\u898b\u9762\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7814\u7a76\u54e1\u7c21\u8981\u63cf\u8ff0\u4e86\u4efb\u52d9\uff0c\u89e3\u91cb\u53c3\u8207\u8005\u5c07\u770b\u5230\u4e00\u7cfb\u5217\u81c9\u90e8\u5716\u50cf\u5c0d\uff0c\u4e26\u5c0d\u6bcf\u5c0d\u5716\u50cf\u986f\u793a\u7684\u662f\u540c\u4e00\u500b\u4eba\u9084\u662f\u5169\u500b\u4e0d\u540c\u7684\u4eba\u9032\u884c\u78ba\u5b9a\u6027\u8a55\u5206\u3002\u53c3\u8207\u8005\u88ab\u544a\u77e5\u5be6\u9a57\u4e2d\u53ef\u80fd\u6703\u6709\u540c\u5375\u96d9\u80de\u80ce\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6bcf\u6b21\u8a66\u9a57\u4e2d\uff0c\u4e00\u5c0d\u81c9\u90e8\u5716\u50cf\u4e26\u6392\u51fa\u73fe\u5728\u5c4f\u5e55\u4e0a\u3002\u53c3\u8207\u8005\u88ab\u8981\u6c42\u4f7f\u7528 5 \u9ede\u91cf\u8868\u4f86\u5224\u65b7\u5716\u50cf\u5c0d\u986f\u793a\u7684\u662f\u540c\u4e00\u500b\u4eba\u9084\u662f\u5169\u500b\u4e0d\u540c\u7684\u4eba\u3002\u56de\u61c9\u9078\u9805\u5305\u62ec\uff1a\uff081\uff09\u78ba\u5b9a\u662f\u4e0d\u540c\u7684\u4eba\uff0c\uff082\uff09\u8a8d\u70ba\u662f\u4e0d\u540c\u7684\u4eba\uff0c\uff083\uff09\u4e0d\u78ba\u5b9a\uff0c\uff084\uff09\u8a8d\u70ba\u662f\u540c\u4e00\u500b\u4eba\uff0c\uff085\uff09\u78ba\u5b9a\u662f\u540c\u4e00\u500b\u4eba\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53c3\u8207\u8005\u4f7f\u7528\u6ed1\u9f20\u9078\u64c7\u8a55\u5206\uff0c\u5716\u50cf\u548c\u91cf\u8868\u5c07\u4fdd\u6301\u5728\u5c4f\u5e55\u4e0a\u76f4\u5230\u53c3\u8207\u8005\u9078\u64c7\u56de\u61c9\u3002\u5be6\u9a57\u5728 PsychoPy \u4e2d\u7de8\u7a0b\u3002\u6bcf\u4f4d\u53c3\u8207\u8005\u7684\u8a66\u9a57\u5448\u73fe\u9806\u5e8f\u662f\u96a8\u6a5f\u7684\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5be6\u9a57-2dcnn-\u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58",children:"\u5be6\u9a57 2\uff1aDCNN \u5c0d\u540c\u5375\u96d9\u80de\u80ce\u7684\u8fa8\u8b58"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6f14\u7b97\u6cd5\u6e2c\u8a66\u4e2d\uff0c\u6211\u5011\u4f7f\u7528\u4e86\u57fa\u65bc ResNet-101 \u67b6\u69cb\u7684\u6df1\u5ea6\u5377\u7a4d\u795e\u7d93\u7db2\u8def\uff08DCNN\uff09\u3002\u8a72\u7db2\u8def\u5728 Universe \u8cc7\u6599\u96c6\u4e0a\u9032\u884c\u8a13\u7df4\uff0c\u9019\u662f\u4e00\u500b\u5f9e\u7db2\u7d61\u4e0a\u6293\u53d6\u7684\u91ce\u5916\u8cc7\u6599\u96c6\uff0c\u5305\u542b 5,714,444 \u5f35\u5716\u50cf\uff0c\u6d89\u53ca 58,020 \u500b\u552f\u4e00\u8eab\u4efd\u3002\u9019\u4e9b\u8a13\u7df4\u6578\u64da\u96c6\u4e2d\u7684\u5716\u50cf\u5c6c\u6027\u8b8a\u5316\u5f88\u5927\uff0c\u5305\u62ec\u59ff\u52e2\u3001\u5149\u7167\u3001\u89e3\u6790\u5ea6\u548c\u5e74\u9f61\u3002\u7528\u65bc\u8a13\u7df4\u7db2\u8def\u7684 Universe \u8cc7\u6599\u96c6\u7684\u65cf\u7fa4\u7d44\u6210\u5c1a\u4e0d\u6e05\u695a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8a72\u7db2\u8def\u5305\u542b 101 \u5c64\uff0c\u4f7f\u7528\u8df3\u8e8d\u9023\u63a5\u4f86\u4fdd\u6301\u8a13\u7df4\u904e\u7a0b\u4e2d\u8aa4\u5dee\u4fe1\u865f\u7684\u5e45\u5ea6\u3002\u70ba\u4e86\u78ba\u4fdd L2 \u8303\u6578\u5728\u5b78\u7fd2\u904e\u7a0b\u4e2d\u4fdd\u6301\u4e0d\u8b8a\uff0c\u61c9\u7528\u4e86 Crystal loss\uff0calpha \u53c3\u6578\u8a2d\u7f6e\u70ba 50\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u4f5c\u70ba\u7db2\u8def\u8a13\u7df4\u7684\u9810\u8655\u7406\u6b65\u9a5f\uff0c\u81c9\u90e8\u5716\u50cf\u88ab\u88c1\u526a\u4ee5\u5305\u542b\u5167\u90e8\u81c9\u90e8\uff0c\u4e26\u5c0d\u9f4a\u5230 128 \xd7 128 \u7684\u5927\u5c0f\u5f8c\u518d\u8f38\u5165\u7db2\u8def\u3002\u8a72\u6d41\u7a0b\u5c0d\u6240\u6709\u5716\u50cf\u59ff\u52e2\u90fd\u4ee5\u76f8\u540c\u65b9\u5f0f\u61c9\u7528\u3002\u7576\u5b8c\u5168\u8a13\u7df4\u7684\u7db2\u8def\u5b8c\u6210\u5f8c\uff0c\u5012\u6578\u7b2c\u4e8c\u500b\u5168\u9023\u63a5\u5c64\u7684\u8f38\u51fa\u7528\u65bc\u751f\u6210\u6bcf\u5f35\u5716\u50cf\u7684\u8eab\u4efd\u8868\u793a\u7279\u5fb5\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,s.jsx)(e.h3,{id:"\u5be6\u9a57\u7d50\u679c",children:"\u5be6\u9a57\u7d50\u679c"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"\u5be6\u9a57\u7d50\u679c",src:i(69477).A+"",width:"1224",height:"588"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u5716\u4e2d\uff0c\u7d05\u8272\u9ede\u70ba\u96fb\u8166\u8996\u89ba\u7cfb\u7d71\u7684\u7d50\u679c\uff0c\u5176\u4ed6\u9ede\u70ba\u4eba\u985e\u53c3\u8207\u8005\u7684\u7d50\u679c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6240\u6709\u689d\u4ef6\u4e0b\uff0c\u4e00\u822c\u5192\u540d\u9802\u66ff\u689d\u4ef6\u4e0b\u7684\u8eab\u4efd\u5339\u914d\u6e96\u78ba\u5ea6\u660e\u986f\u9ad8\u65bc\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u689d\u4ef6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u96a8\u8457\u5716\u50cf\u4e4b\u9593\u8996\u89d2\u5dee\u7570\u7684\u589e\u52a0\uff0c\u6e96\u78ba\u5ea6\u4e0b\u964d\uff0c\u4e14\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u689d\u4ef6\u4e0b\u7684\u4e0b\u964d\u5e45\u5ea6\u6bd4\u4e00\u822c\u5192\u540d\u9802\u66ff\u689d\u4ef6\u66f4\u70ba\u986f\u8457\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"AUC \u6e2c\u91cf\u65b9\u6cd5"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6bcf\u500b\u53c3\u8207\u8005\u5728\u6bcf\u500b\u8996\u89d2\u689d\u4ef6\u4e0b\uff0c\u8a08\u7b97\u4e86\u5169\u7a2e\u689d\u4ef6\u7684 AUC\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e00\u822c\u5192\u540d\u9802\u66ff\u689d\u4ef6\u4e2d\u7684\u5716\u50cf\u5c0d"}),"\n",(0,s.jsx)(e.li,{children:"\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u689d\u4ef6\u4e2d\u7684\u5716\u50cf\u5c0d"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"AUC \u8a08\u7b97\u57fa\u790e"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u5169\u500b\u689d\u4ef6\u4e0b\uff0c\u76f8\u540c\u8eab\u4efd\u7684\u5716\u50cf\u5c0d\u751f\u6210\u4e86\u6b63\u78ba\u7684\u8eab\u4efd\u9a57\u8b49\u53cd\u61c9\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4e00\u822c\u5192\u540d\u9802\u66ff\u689d\u4ef6\u4e2d\u7684\u8aa4\u5831\u4f86\u81ea\u986f\u793a\u5169\u500b\u4e0d\u540c\u4e14\u7121\u95dc\u8eab\u4efd\u7684\u5716\u50cf\u5c0d\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u689d\u4ef6\u4e2d\u7684\u8aa4\u5831\u4f86\u81ea\u986f\u793a\u540c\u5375\u96d9\u80de\u80ce\u7684\u5716\u50cf\u5c0d\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4eba\u985e\u5be6\u9a57\u7d50\u679c"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e00\u822c\u5192\u540d\u9802\u66ff\u689d\u4ef6\uff0c\u6b63\u9762\u5c0d\u6b63\u9762\uff1a0.969"}),"\n",(0,s.jsx)(e.li,{children:"\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u689d\u4ef6\uff0c\u6b63\u9762\u5c0d\u6b63\u9762\uff1a0.874"}),"\n",(0,s.jsx)(e.li,{children:"\u4e00\u822c\u5192\u540d\u9802\u66ff\u689d\u4ef6\uff0c\u6b63\u9762\u5c0d 45 \u5ea6\u5074\u9762\uff1a0.933"}),"\n",(0,s.jsx)(e.li,{children:"\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u689d\u4ef6\uff0c\u6b63\u9762\u5c0d 45 \u5ea6\u5074\u9762\uff1a0.691"}),"\n",(0,s.jsx)(e.li,{children:"\u4e00\u822c\u5192\u540d\u9802\u66ff\u689d\u4ef6\uff0c\u6b63\u9762\u5c0d 90 \u5ea6\u5074\u9762\uff1a0.869"}),"\n",(0,s.jsx)(e.li,{children:"\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u689d\u4ef6\uff0c\u6b63\u9762\u5c0d 90 \u5ea6\u5074\u9762\uff1a0.652"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"DCNN \u5be6\u9a57\u7d50\u679c"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6536\u96c6\u4eba\u985e\u6578\u64da\u5be6\u9a57\u4e2d\u89c0\u770b\u7684\u6bcf\u5c0d\u5716\u50cf\u5c0d\uff0cDCNN \u90fd\u751f\u6210\u4e86\u76f8\u4f3c\u5ea6\u8a55\u5206\u3002\u901a\u904e\u8a08\u7b97\u5206\u914d\u7d66\u76f8\u540c\u8eab\u4efd\u5716\u50cf\u5c0d\u548c\u4e0d\u540c\u8eab\u4efd\u5716\u50cf\u5c0d\u7684\u76f8\u4f3c\u5ea6\u8a55\u5206\u7684 AUC \u4f86\u6e2c\u91cf DCNN \u7684\u8fa8\u8b58\u6e96\u78ba\u5ea6\u3002\u6b63\u78ba\u7684\u53cd\u61c9\u4f86\u81ea\u986f\u793a\u76f8\u540c\u8eab\u4efd\u7684\u5716\u50cf\u5c0d\uff0c\u800c\u8aa4\u5831\u4f86\u81ea\u986f\u793a\u4e0d\u540c\u8eab\u4efd\u7684\u5716\u50cf\u5c0d\u3002DCNN \u7684\u6027\u80fd\u986f\u793a\u5728\u4e0a\u5716\u4e2d\uff0c\u4ee5\u7d05\u8272\u5713\u5708\u8868\u793a\uff0c\u8986\u84cb\u5728\u4eba\u985e\u500b\u9ad4\u8868\u73fe\u6578\u64da\u4e0a\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5c0d\u65bc\u4e00\u822c\u5192\u540d\u9802\u66ff\u689d\u4ef6\uff0cDCNN \u7372\u5f97\u4e86\u5b8c\u7f8e\u7684\u8eab\u4efd\u5339\u914d\u6027\u80fd\uff08AUC = 1.0\uff09\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5c0d\u65bc\u96d9\u80de\u80ce\u5192\u540d\u9802\u66ff\u689d\u4ef6\uff0cDCNN \u7684\u8eab\u4efd\u5339\u914d\u6027\u80fd\u4ecd\u7136\u5f88\u9ad8\uff08AUC = 0.96\uff09\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u7814\u7a76\u5f37\u8abf\u4e86\u5728\u5340\u5206\u540c\u5375\u96d9\u80de\u80ce\u6642\uff0c\u8868\u89c0\u907a\u50b3\u751f\u7269\u7279\u5fb5\u7684\u91cd\u8981\u6027\uff0c\u5118\u7ba1\u6307\u7d0b\u548c\u8679\u819c\u7d0b\u7406\u88ab\u8a8d\u70ba\u662f\u6700\u53ef\u9760\u7684\u65b9\u6cd5\uff0c\u4f46\u81c9\u90e8\u8b58\u5225\u6280\u8853\u4e5f\u5c55\u793a\u4e86\u5176\u6f5b\u529b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6df1\u5ea6\u5377\u7a4d\u795e\u7d93\u7db2\u8def\u76f8\u8f03\u65bc\u65e9\u671f\u7684\u81c9\u90e8\u8b58\u5225\u6f14\u7b97\u6cd5\uff0c\u5728\u4e0d\u540c\u8996\u89d2\u548c\u5149\u7167\u689d\u4ef6\u4e0b\u4ecd\u80fd\u4fdd\u6301\u9ad8\u6e96\u78ba\u5ea6\uff0c\u986f\u793a\u51fa\u986f\u8457\u7684\u9032\u6b65\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u8ad6\u6587\u5be6\u9a57\u7d50\u679c\u8868\u660e\uff0cDCNN \u5728\u6240\u6709\u6e2c\u8a66\u689d\u4ef6\u4e0b\u7684\u6e96\u78ba\u5ea6\u5747\u8d85\u904e\u4e86\u5927\u591a\u6578\u4eba\u985e\u53c3\u8207\u8005\uff0c\u7279\u5225\u662f\u5728\u6311\u6230\u6027\u9ad8\u7684\u96d9\u80de\u80ce\u8fa8\u8b58\u4efb\u52d9\u4e2d\uff0c\u9019\u8207\u7f8e\u570b\u570b\u5bb6\u6a19\u6e96\u8207\u6280\u8853\u7814\u7a76\u6240\uff08NIST\uff09\u7684\u7814\u7a76\u7d50\u679c\u5f62\u6210\u5c0d\u6bd4\uff0c\u5f37\u8abf\u4e86\u5728\u4e0d\u540c\u554f\u984c\u80cc\u666f\u4e0b\u8003\u91cf DCNN \u6027\u80fd\u7684\u91cd\u8981\u6027\u3002\u4eba\u985e\u53c3\u8207\u8005\u7684\u8868\u73fe\u986f\u793a\u51fa\u5ee3\u6cdb\u7684\u500b\u9ad4\u5dee\u7570\uff0c\u800c DCNN \u59cb\u7d42\u4fdd\u6301\u5728\u9ad8\u6c34\u5e73\u4e14\u7121\u500b\u9ad4\u5dee\u7570\u3002\u672a\u4f86\u7814\u7a76\u61c9\u8003\u616e\u5305\u62ec\u5916\u90e8\u7279\u5fb5\u5728\u5167\u7684\u66f4\u591a\u8b58\u5225\u4fe1\u606f\uff0c\u4e26\u9032\u4e00\u6b65\u63a2\u8a0e DCNN \u751f\u6210\u7684\u9762\u90e8\u8868\u793a\u7684\u6027\u8cea\uff0c\u4ee5\u63d0\u5347\u4eba\u985e\u548c\u6a5f\u5668\u5728\u96d9\u80de\u80ce\u8b58\u5225\u4efb\u52d9\u4e2d\u7684\u806f\u5408\u4f5c\u7528\uff0c\u9019\u5c0d\u65bc\u5982\u6cd5\u91ab\u61c9\u7528\u7b49\u56f0\u96e3\u7684\u5716\u50cf\u5339\u914d\u4efb\u52d9\u5c24\u70ba\u91cd\u8981\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\uff0a"}),"\n",(0,s.jsx)(e.p,{children:"\u770b\u5b8c\u9019\u7bc7\u8ad6\u6587\uff0c\u6211\u5011\u8a8d\u70ba\u53ea\u6709\u4e00\u500b\u6bd4\u8f03\u91cd\u8981\u7684\u7d50\u8ad6\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u96fb\u8166\u8996\u89ba\u7cfb\u7d71\u548c\u4eba\u985e\u7684\u8868\u73fe\u662f\u4e00\u81f4\u7684\uff0c\u56e0\u6b64\u63a2\u8a0e\u4eba\u985e\u5c08\u5bb6\u662f\u5982\u4f55\u8fa8\u8b58\u96d9\u80de\u80ce\u7684\u6a5f\u5236\uff0c\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u6539\u9032\u96fb\u8166\u8996\u89ba\u7cfb\u7d71\u3002"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u4f86\u6211\u5011\u671f\u5f85\u9019\u7bc7\u8ad6\u6587\u80fd\u7d66\u51fa\u89e3\u6c7a\u96d9\u80de\u80ce\u8fa8\u8b58\u554f\u984c\u7684\u65b9\u6cd5\u6216\u67b6\u69cb\uff0c\u4f46\u6c92\u6709\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u904e\u65e2\u7136\u90fd\u770b\u5b8c\u4e86\uff0c\u5c31\u9806\u624b\u8a18\u9304\u5728\u6b64\u5427\u3002"})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},81626:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img1-2539c562754578afedae808db3ed3698.jpg"},69477:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/img2-d0e8b0f3f66cb64f37013c8ee8b42ebb.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>d,x:()=>c});var s=i(96540);const l={},r=s.createContext(l);function d(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);