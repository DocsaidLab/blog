"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8769],{81725:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var s=r(74848),l=r(28453);const i={sidebar_position:4},d="Adapter",t={id:"language-model/adapter/index",title:"Adapter",description:"\u53c3\u6578\u7bc0\u7701\u4e5d\u6210\u516d",source:"@site/papers/language-model/adapter/index.md",sourceDirName:"language-model/adapter",slug:"/language-model/adapter/",permalink:"/en/papers/language-model/adapter/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"papersSidebar",previous:{title:"BERT",permalink:"/en/papers/language-model/bert/"}},c={},a=[{value:"\u53c3\u6578\u7bc0\u7701\u4e5d\u6210\u516d",id:"\u53c3\u6578\u7bc0\u7701\u4e5d\u6210\u516d",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u6d6a\u8cbb\uff01",id:"\u6d6a\u8cbb",level:3},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"GLUE \u8a55\u50f9",id:"glue-\u8a55\u50f9",level:3},{value:"\u6d88\u878d\u5be6\u9a57",id:"\u6d88\u878d\u5be6\u9a57",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function h(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"adapter",children:"Adapter"}),"\n",(0,s.jsx)(e.h2,{id:"\u53c3\u6578\u7bc0\u7701\u4e5d\u6210\u516d",children:"\u53c3\u6578\u7bc0\u7701\u4e5d\u6210\u516d"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://arxiv.org/abs/1902.00751",children:(0,s.jsx)(e.strong,{children:"Parameter-Efficient Transfer Learning for NLP (2019.02)"})})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"BERT \u63d0\u51fa\u5f8c\uff0c\u5b9a\u8abf\u7684 NLP \u7684\u5b78\u7fd2\u7bc4\u5f0f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u6211\u5011\u5fc5\u9808\u5148\u7528\u300c\u5927\u91cf\u300d\u8cc7\u6599\u8a13\u7df4\u4e00\u500b\u300c\u5927\u578b\u300d\u6a21\u578b\uff0c\u7136\u5f8c\u518d\u9032\u884c\u5fae\u8abf\u3002"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u53ea\u8981\u4f60\u9075\u5b88\u9019\u500b\u5b78\u7fd2\u7bc4\u5f0f\uff0c\u4f60\u5c31\u80fd\u5728\u5404\u7a2e NLP \u4efb\u52d9\u4e0a\u53d6\u5f97\u6700\u4f73\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u8ad6\u6587\u7684\u4f5c\u8005\u8a8d\u70ba\u9019\u4ef6\u4e8b\u6709\u500b\u986f\u800c\u6613\u898b\u7684\u554f\u984c\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"\u6d6a\u8cbb",children:"\u6d6a\u8cbb\uff01"}),"\n",(0,s.jsx)(e.p,{children:"\u56de\u60f3\u4e00\u4e0b\uff0c\u5728\u76ee\u6a19\u4efb\u52d9\u4e0a\uff0c\u6211\u5011\u662f\u4e0d\u662f\u5fc5\u9808\u62ff\u6574\u500b\u9810\u8a13\u7df4\u6a21\u578b\u4f86\u5fae\u8abf\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5373\u4f7f\u6211\u5011\u53ea\u9700\u8981\u6539\u8b8a\u5176\u4e2d\u4e00\u5c0f\u90e8\u5206\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u4ee5\uff0c\u5982\u679c\u6211\u5011\u60f3\u89e3\u6c7a\u5341\u500b\u4e0d\u540c\u7684\u4efb\u52d9\uff0c\u6211\u5011\u5c31\u5fc5\u9808\u8a13\u7df4\u5341\u500b\u4e0d\u540c\u7684\u6a21\u578b\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5373\u4f7f\u9019\u4e9b\u4efb\u52d9\u4e4b\u9593\u6709\u5f88\u591a\u5171\u901a\u4e4b\u8655\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u660e\u660e\u6709\u5f88\u591a\u5171\u901a\u4e4b\u8655\uff0c\u70ba\u4ec0\u9ebc\u6211\u5011\u9084\u8981\u6d6a\u8cbb\u9019\u9ebc\u591a\u8cc7\u6e90\uff1f"}),"\n",(0,s.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Adapter",src:r(41937).A+"",width:"980",height:"712"})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u88e1\uff0c\u6211\u5011\u9700\u8981\u7684\u6771\u897f\u4e0d\u591a\uff0c\u53ea\u662f\u7d66\u6bcf\u500b\u4efb\u52d9\u4e00\u500b\u5c0f\u5c0f\u7684\u300cAdapter\u300d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u5728\u73fe\u6709\u7684 Transformer \u67b6\u69cb\u4e2d\u52a0\u5165\u4e86\u4e00\u4e9b\u5c0f\u4f46\u9ad8\u6548\u7684 Adapter \u6a21\u7d44\uff0c\u9019\u4e9b Adapter \u7684\u76ee\u7684\u662f\u5728\u4e0d\u589e\u52a0\u592a\u591a\u984d\u5916\u53c3\u6578\u7684\u60c5\u6cc1\u4e0b\uff0c\u63d0\u9ad8\u6a21\u578b\u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u88e1\u8acb\u642d\u914d\u4e0a\u5716\u770b\u4e00\u4e0b\uff0c\u5177\u9ad4\u4f86\u8aaa\uff0c\u4f5c\u8005\u5728 Transformer \u7684\u6bcf\u4e00\u5c64\u5f8c\u9762\u52a0\u4e0a\u4e86\u5169\u500b Adapter \u6a21\u7d44\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u7b2c\u4e00\u500b\u52a0\u5728 Self-Attention \u4e4b\u5f8c\uff0cLayerNorm \u4e4b\u524d\u3002"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u7b2c\u4e8c\u500b\u52a0\u5728 Feed-Forward \u4e4b\u5f8c\uff0cLayerNorm \u4e4b\u524d\u3002"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6bcf\u500b Adapter \u6a21\u7d44\u7684\u5de5\u4f5c\u65b9\u5f0f\u5c31\u50cf\u4e00\u500b\u5c0f\u578b\u7684\u795e\u7d93\u7db2\u8def\uff0c\u5148\u5c07\u539f\u59cb\u7684\u9ad8\u7dad\u7279\u5fb5\u58d3\u7e2e\u5230\u8f03\u4f4e\u7dad\u5ea6\uff0c\u518d\u61c9\u7528\u975e\u7dda\u6027\u8f49\u63db\uff0c\u6700\u5f8c\u518d\u8f49\u63db\u56de\u539f\u4f86\u7684\u9ad8\u7dad\u5ea6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u6a23\u7684\u8a2d\u8a08\u5c31\u662f\u6211\u5011\u4ee5\u524d\u5e38\u5728 MobileNet \u6216 SqueezeNet \u7b49\u8f15\u91cf\u7d1a\u6a21\u578b\u4e2d\u770b\u5230\u7684\u300c\u74f6\u9838\u300d\u7684\u8a2d\u8a08\uff0c\u9019\u7a2e\u8a2d\u8a08\u6709\u5169\u500b\u597d\u8655\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7bc0\u7701\u53c3\u6578\uff1a"})," \u9019\u6a23\u7684\u8a2d\u8a08\u53ea\u9700\u8981\u539f\u6a21\u578b\u5927\u7d04 0.5% - 8% \u7684\u53c3\u6578\u91cf\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u58d3\u7e2e\u7279\u5fb5\uff1a"})," \u900f\u904e\u7279\u5fb5\u58d3\u7e2e\uff0c\u63d0\u9ad8\u7279\u5fb5\u7684\u8868\u9054\u80fd\u529b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u70ba\u4e86\u78ba\u4fdd\u6bcf\u500b Adapter \u6a21\u7d44\u80fd\u5920\u9806\u5229\u904b\u4f5c\uff0c\u4f5c\u8005\u9084\u70ba\u6bcf\u500b Adapter \u6a21\u7d44\u5167\u90e8\u52a0\u5165\u4e86\u4e00\u500b\u300c\u8df3\u8e8d\u9023\u63a5\u300d\uff0c\u9019\u6a23\u4e00\u4f86\uff0c\u5982\u679c Adapter \u6a21\u7d44\u521d\u59cb\u5316\u7684\u53c3\u6578\u63a5\u8fd1\u65bc\u96f6\uff0c\u5b83\u5011\u5c31\u6703\u50cf\u6046\u7b49\u51fd\u6578\u4e00\u6a23\u4e0d\u6703\u5f71\u97ff\u539f\u4f86\u7684\u8f38\u51fa\uff0c\u4fdd\u8b49\u4e86\u7a69\u5b9a\u6027\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6a21\u578b\u8a13\u7df4\u6642\uff0c\u6211\u5011\u53ea\u9700\u8981\u7d62\u7df4\u300c Adapter \u6a21\u7d44\u300d\u7684\u53c3\u6578\uff0c\u5176\u4ed6\u53c3\u6578\u90fd\u76f4\u63a5\u51cd\u7d50\uff0c\u4e0d\u9700\u8981\u9032\u884c\u66f4\u65b0\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u4ee5\u6709\u7528\u55ce\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u7576\u7136\uff0c\u4e0d\u7136\u8ad6\u6587\u5c31\u4e0d\u767c\u4e86..."}),"\n",(0,s.jsx)(e.h3,{id:"glue-\u8a55\u50f9",children:"GLUE \u8a55\u50f9"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"benchmark",src:r(84166).A+"",width:"1224",height:"232"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u5728 GLUE \u9a57\u8b49\u96c6\u4e0a\u9032\u884c\u4e86\u5be6\u9a57\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7d50\u679c\u986f\u793a\uff1a\u9019\u7a2e Adapter \u6a21\u7d44\u7684\u8a2d\u8a08\u78ba\u5be6\u80fd\u5920\u5728\u4e0d\u589e\u52a0\u592a\u591a\u53c3\u6578\u7684\u60c5\u6cc1\u4e0b\uff0c\u63d0\u9ad8\u6a21\u578b\u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u8868\u683c\u4e2d\u6709\u5206\u5169\u7a2e\u5be6\u9a57\u8a2d\u8a08\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7b2c\u4e00\u7d44\u5be6\u9a57 (8-256)"}),"\uff1a\u9019\u500b\u8a2d\u8a08\u662f\u91dd\u5c0d\u4e0d\u540c\u4efb\u52d9\u8a2d\u8a08\u4e0d\u540c\u7684 Adapter \u6a21\u7d44\uff0c\u5176\u7279\u5fb5\u7dad\u5ea6\uff08\u74f6\u9838\u4e2d\u7684\u55ae\u5143\u6578\u91cf\uff09\u5728 \u300c8, 64, 256\u300d \u4e09\u9078\u4e00\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7b2c\u4e8c\u7d44\u5be6\u9a57 (64)"}),"\uff1a\u9019\u500b\u7684\u8a2d\u8a08\u662f\u91dd\u5c0d\u6240\u6709\u4efb\u52d9\u4f7f\u7528\u76f8\u540c\u7684 Adapter \u6a21\u7d44\uff0c\u5176\u7279\u5fb5\u7dad\u5ea6\u90fd\u662f 64\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u5f8c\uff0c\u7531\u65bc\u8a13\u7df4\u4e0d\u7a69\u5b9a\uff0c\u4f5c\u8005\u4f7f\u7528\u4e0d\u540c\u7684\u96a8\u6a5f\u7a2e\u5b50\u91cd\u65b0\u904b\u884c 5 \u6b21\uff0c\u4e26\u5728\u9a57\u8b49\u96c6\u4e0a\u9078\u64c7\u6700\u4f73\u6a21\u578b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5f9e\u4e0a\u9762\u7684\u8868\u683c\u4e2d\uff0c Adapter \u7684\u5e73\u5747 GLUE \u5f97\u5206\u70ba 80.0\uff0c\u800c\u300c\u5b8c\u5168\u5fae\u8abf\u300d\u7684\u5e73\u5747\u5f97\u5206\u70ba 80.4\u3002\u96d6\u7136 Adapter \u7684\u8868\u73fe\u7565\u905c\u65bc\u300c\u5b8c\u5168\u5fae\u8abf\u300d\uff0c\u4f46\u662f Adapter \u7684\u53c3\u6578\u91cf\u53ea\u6709\u300c\u5b8c\u5168\u5fae\u8abf\u300d\u7684 3.6%\uff0c\u9019\u6a23\u7684\u6548\u679c\u5df2\u7d93\u975e\u5e38\u9a5a\u4eba\u4e86\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"\u5f9e\u6b64\u4ee5\u5f8c\u6211\u5011\u7528\u5c0f\u986f\u5361\u4e5f\u53ef\u4ee5\u5fae\u8abf\u5927\u6a21\u578b\uff01\u597d\u68d2\uff01"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6d88\u878d\u5be6\u9a57",children:"\u6d88\u878d\u5be6\u9a57"}),"\n",(0,s.jsx)(e.p,{children:"\u70ba\u4e86\u6aa2\u9a57 Adapter \u6a21\u7d44\u7684\u6709\u6548\u6027\uff0c\u4f5c\u8005\u9032\u884c\u4e86\u4e00\u7cfb\u5217\u7684\u6d88\u878d\u5be6\u9a57\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"ablation",src:r(48867).A+"",width:"1522",height:"632"})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u662f\u71b1\u5716\uff0c\u986f\u793a\u4e86\u5f9e\u9023\u7e8c\u5c64\u8de8\u5ea6\u4e2d\u79fb\u9664 Adapter \u6642\u6548\u80fd\u7684\u8b8a\u5316\u3002"}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsx)(e.p,{children:"\u9019\u500b\u5716\u7b2c\u4e00\u6b21\u770b\u53ef\u80fd\u6709\u9ede\u8907\u96dc\uff0c\u6211\u5011\u5e36\u4f60\u770b\u4e00\u4e0b\uff1a"}),(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u770b Row0"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9019\u6642 First ablated layer \u7b49\u65bc 0\uff0c\u4e5f\u5c31\u662f\u5f9e\u7b2c 0 \u5c64\u958b\u59cb\u79fb\u9664 Adapter\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u8457\u770b Row0\uff0c\u548c Column0"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6b64\u6642 Last ablated layer \u7b49\u65bc 0\uff0c\u4e5f\u5c31\u662f\u53ea\u79fb\u9664\u7b2c 0 \u5c64\u7684 Adapter\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u8457\u770b Row0\uff0c\u548c Column1"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6b64\u6642 Last ablated layer \u7b49\u65bc 1\uff0c\u4e5f\u5c31\u662f\u79fb\u9664\u7b2c 0 \u5c64\u300c\u81f3\u300d\u7b2c 1 \u5c64\u7684 Adapter\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u8457\u770b Row0\uff0c\u548c Column11"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6b64\u6642 Last ablated layer \u7b49\u65bc 11\uff0c\u4e5f\u5c31\u662f\u79fb\u9664\u7b2c 0 \u5c64\u300c\u81f3\u300d\u7b2c 11 \u5c64\u7684 Adapter\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u8457\u770b Row5\uff0c\u548c Column8"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6b64\u6642 First ablated layer \u7b49\u65bc 5\uff1bLast ablated layer \u7b49\u65bc 8\uff0c\u4e5f\u5c31\u662f\u79fb\u9664\u7b2c 5 \u5c64\u300c\u81f3\u300d\u7b2c 8 \u5c64\u7684 Adapter\u3002"}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(e.p,{children:"\u76f8\u4fe1\u4f60\u5df2\u7d93\u770b\u61c2\u4e86\uff0c\u9019\u500b\u5716\u5c31\u662f\u7528\u4f86\u770b\u5f9e\u4e0d\u540c\u5c64\u6b21\u79fb\u9664 Adapter \u6642\u6548\u80fd\u7684\u8b8a\u5316\uff0c\u6bcf\u500b\u683c\u5b50\u7684\u984f\u8272\u4ee3\u8868\u6548\u80fd\u7684\u8b8a\u5316\uff0c\u6108\u6df1\u8272\u4ee3\u8868\u6548\u80fd\u6108\u5dee\u3002"}),(0,s.jsx)(e.p,{children:"\u9019\u5f35\u5716\u770b\u4e0a\u4e09\u89d2\u7684\u90e8\u5206\u5373\u53ef\uff0c\u4e0b\u4e09\u89d2\u6c92\u6709\u610f\u7fa9\u3002"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5be6\u9a57\u7d50\u679c\u5c55\u793a\u4e86 Adapter \u6574\u9ad4\u7d50\u679c\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u79fb\u9664\u5c64\u5f71\u97ff"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u79fb\u9664\u55ae\u5c64\u7684 Adapter \u5c0d\u6574\u9ad4\u6548\u80fd\u5f71\u97ff\u4e0d\u5927\uff0c\u6700\u5927\u6e1b\u5c11\u53ea\u6709 2%\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4f46\u5982\u679c\u79fb\u9664\u6240\u6709 Adapter\uff0c\u6548\u80fd\u6703\u5927\u5e45\u4e0b\u964d\uff0c\u5728 MNLI \u4e0a\u964d\u5230 37%\uff0c\u5728 CoLA \u4e0a\u964d\u5230 69%\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u9ad8\u4f4e\u5c64\u5f71\u97ff"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f4e\u5c64 Adapter\uff08\u4f8b\u5982 0-4 \u5c64\uff09\u7684\u5f71\u97ff\u8f03\u5c0f\uff0c\u79fb\u9664\u5b83\u5011\u5e7e\u4e4e\u4e0d\u5f71\u97ff\u6548\u80fd\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u9ad8\u5c64 Adapter \u5c0d\u6548\u80fd\u5f71\u97ff\u66f4\u5927\uff0c\u9019\u7b26\u5408\u76f4\u89ba\uff0c\u56e0\u70ba\u9ad8\u5c64 Adapter \u8ca0\u8cac\u7279\u5b9a\u4efb\u52d9\u7684\u7279\u5fb5\u5efa\u69cb\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u521d\u59cb\u5316\u5c3a\u5ea6"}),"\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Adapter \u7684\u521d\u59cb\u5316\u6a19\u6e96\u5dee\u4f4e\u65bc 0.01 \u6642\uff0c\u6548\u80fd\u7a69\u5065\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u521d\u59cb\u5316\u6a19\u6e96\u5dee\u904e\u5927\u6703\u5c0e\u81f4\u6548\u80fd\u4e0b\u964d\uff0c\u5c24\u5176\u5728 CoLA \u6578\u64da\u96c6\u4e0a\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u74f6\u9838\u7279\u5fb5\u5927\u5c0f"}),"\uff1a \u7279\u5fb5\u5c3a\u5bf8\u5728 8\u300164 \u548c 256 \u6642\uff0c\u6548\u80fd\u76f8\u5c0d\u7a69\u5b9a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u67b6\u69cb\u64f4\u5c55"}),"\uff1a\u6dfb\u52a0 BatchNorm \u6216 LayerNorm\u3001\u589e\u52a0 Adapter \u5c64\u6578\u3001\u66f4\u63db\u6fc0\u6d3b\u51fd\u6578\uff08\u4f8b\u5982\uff1atanh\uff09\u3001\u50c5\u5728\u6ce8\u610f\u5c64\u5167\u63d2\u5165 Adapter \u7b49\u65b9\u6cd5\u6c92\u6709\u986f\u8457\u63d0\u5347\u6548\u80fd\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u4f5c\u8005\u63a8\u85a6\u6700\u539f\u59cb\u7684 Adapter \u7684\u8a2d\u8a08\uff0c\u56e0\u70ba\u5b83\u65e2\u7c21\u55ae\u53c8\u6709\u6548\uff0c\u4e0d\u7528\u50b7\u8166\u7b4b\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(e.p,{children:"Adapter \u6a21\u7d44\u7684\u8a2d\u8a08\u7406\u5ff5\uff0c\u5c31\u50cf\u662f\u5728\u6a21\u578b\u4e2d\u52a0\u4e86\u4e00\u4e9b\u5c0f\u800c\u9ad8\u6548\u7684\u63d2\u4ef6\uff0c\u53ea\u9700\u5f88\u5c11\u7684\u53c3\u6578\uff0c\u5927\u7d04 0.5% \u81f3 8%\uff0c\u5c31\u80fd\u8b93\u6a21\u578b\u6548\u80fd\u9077\u79fb\u5230\u6211\u5011\u7684\u76ee\u6a19\u4efb\u52d9\u4e0a\u3002\u4f8b\u5982\u4e00\u500b 30B \u53c3\u6578\u91cf\u7684\u6a21\u578b\uff0c\u53ea\u9700\u8981 0.15 ~ 2.4 B \u7684\u53c3\u6578\u91cf\u5c31\u80fd\u9054\u5230\u76f8\u540c\u7684\u6548\u679c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u80fd\u5920\u8b93\u6c92\u6709\u7b97\u529b\u7684\u666e\u901a\u4eba\u4e5f\u80fd\u8f15\u9b06\u5fae\u8abf\u5927\u578b Transformer \u6a21\u578b\uff0c\u5f9e\u5404\u65b9\u9762\u4f86\u8aaa\uff0c\u90fd\u662f\u500b\u975e\u5e38\u597d\u7684\u6d88\u606f\uff01"})]})}function x(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},41937:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/img1-42012ca216793e6d6b86afca1f1dfa58.jpg"},84166:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/img2-61fdec5bf25f1cc16bfc543e31c018be.jpg"},48867:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/img3-17ba710d42c58879899a21cc8574bef7.jpg"},28453:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>t});var s=r(96540);const l={},i=s.createContext(l);function d(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);