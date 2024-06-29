"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[320],{38568:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>l,metadata:()=>c,toc:()=>x});var i=s(74848),r=s(28453);const l={},d="[18.10] BERT",c={id:"bert/index",title:"[18.10] BERT",description:"\u5341\u4e8c\u5c64\u7de8\u78bc\u5668",source:"@site/papers/1810-bert/index.md",sourceDirName:"1810-bert",slug:"/bert/",permalink:"/en/papers/bert/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[18.06] GPT-1",permalink:"/en/papers/gpt_1/"},next:{title:"[19.01] Transformer-XL",permalink:"/en/papers/transformer-xl/"}},h={},x=[{value:"\u5341\u4e8c\u5c64\u7de8\u78bc\u5668",id:"\u5341\u4e8c\u5c64\u7de8\u78bc\u5668",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u55ae\u5411\u6027",id:"\u55ae\u5411\u6027",level:3},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u6a21\u578b\u67b6\u69cb",id:"\u6a21\u578b\u67b6\u69cb",level:3},{value:"\u9810\u8a13\u7df4\u7b56\u7565",id:"\u9810\u8a13\u7df4\u7b56\u7565",level:3},{value:"\u5fae\u8abf\u7b56\u7565",id:"\u5fae\u8abf\u7b56\u7565",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u6d88\u878d\u5be6\u9a57",id:"\u6d88\u878d\u5be6\u9a57",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function j(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1810-bert",children:"[18.10] BERT"}),"\n",(0,i.jsx)(e.h2,{id:"\u5341\u4e8c\u5c64\u7de8\u78bc\u5668",children:"\u5341\u4e8c\u5c64\u7de8\u78bc\u5668"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/pdf/1810.04805.pdf",children:(0,i.jsx)(e.strong,{children:"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u5728 Transformer \u63d0\u51fa\u5f8c\uff0c\u8a31\u591a\u7814\u7a76\u8005\u958b\u59cb\u63a2\u8a0e\u5982\u4f55\u66f4\u597d\u5730\u5229\u7528\u9019\u500b\u67b6\u69cb\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5148\u524d\u7684 GPT-1 \u9078\u64c7\u4e86",(0,i.jsx)(e.strong,{children:"\u5168\u7de8\u78bc\u5668\uff08decoder-only\uff09"})," \u7684\u67b6\u69cb\uff0c\u800c BERT \u6070\u597d\u76f8\u53cd\uff0c\u9078\u64c7\u4e86",(0,i.jsx)(e.strong,{children:"\u5168\u7de8\u78bc\u5668\uff08encoder-only\uff09"}),"\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"\u5728 BERT \u6a21\u578b\u524d\u534a\u5e74\uff0c\u6709\u500b\u6a21\u578b\u53eb\u505a ELMo\u3002\u7136\u5f8c\u5f9e BERT \u53d6\u540d\u70ba BERT \u4e4b\u5f8c\uff0c\u7814\u7a76\u8005\u958b\u59cb\u6d41\u884c\u8d77\u5c07\u6a21\u578b\u53d6\u540d\u829d\u9ebb\u8857\u89d2\u8272\u7684\u98a8\u6f6e\u3002\u6211\u5011\u9084\u8a18\u5f97\u4e00\u958b\u59cb\u7684\u8ad6\u6587\u90fd\u9084\u6703\u8a8d\u771f\u5730\u7528\u6a19\u984c\u4f86\u627e\u7e2e\u5beb\uff0c\u5f8c\u4f86\u5247\u662f\u5b8c\u5168\u653e\u98db\u81ea\u6211\uff0c\u60f3\u53d6\u4ec0\u9ebc\u540d\u5b57\u5c31\u53d6\u4ec0\u9ebc\u540d\u5b57..."})}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,i.jsx)(e.p,{children:"\u5c07\u9810\u5148\u8a13\u7df4\u7684\u8a9e\u8a00\u6a21\u578b\u61c9\u7528\u65bc\u4e0b\u6e38\u4efb\u52d9\uff0c\u901a\u5e38\u6709\u5169\u7a2e\u7b56\u7565\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"1. \u57fa\u65bc\u7279\u5fb5\u7684\u65b9\u6cd5"})}),"\n",(0,i.jsxs)(e.p,{children:["\u9019\u985e\u65b9\u6cd5\uff0c\u4f8b\u5982 ELMo\uff08",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1802.05365",children:"Peters \u7b49\u4eba\uff0c2018a"}),"\uff09\uff0c\u4f7f\u7528\u7279\u5b9a\u65bc\u4efb\u52d9\u7684\u67b6\u69cb\uff0c\u5176\u4e2d\u5305\u62ec\u9810\u8a13\u7df4\u7684\u8868\u793a\u4f5c\u70ba\u9644\u52a0\u7279\u5fb5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"2. \u5fae\u8abf\u65b9\u6cd5"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u985e\u65b9\u6cd5\uff0c\u4f8b\u5982\u751f\u6210\u5f0f\u9810\u8a13\u7df4\u7684 OpenAI GPT\uff0c\u5f15\u5165\u4e86\u6700\u5c11\u7684\u7279\u5b9a\u4efb\u52d9\u7684\u53c3\u6578\uff0c\u4e26\u900f\u904e\u7c21\u55ae\u5730\u5fae\u8abf\u6240\u6709\u9810\u8a13\u7df4\u53c3\u6578\u4f86\u8a13\u7df4\u4e0b\u6e38\u4efb\u52d9\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u5169\u7a2e\u65b9\u6cd5\u5728\u9810\u8a13\u7df4\u671f\u9593\u5171\u4eab\u76f8\u540c\u7684\u76ee\u6a19\u51fd\u6578\uff0c\u5b83\u5011\u4f7f\u7528\u55ae\u4e00\u8a9e\u8a00\u6a21\u578b\u4f86\u5b78\u7fd2\u901a\u7528\u8a9e\u8a00\u8868\u793a\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4e2d\uff0c\u4f5c\u8005\u8a8d\u70ba\u300c\u55ae\u5411\u6027\u300d\u7684\u554f\u984c\u7279\u5225\u56b4\u91cd\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u55ae\u5411\u6027",children:"\u55ae\u5411\u6027"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6211\u5011\u4e0a\u4e00\u7bc7\u63d0\u5230\u7684 OpenAI GPT \u4e2d\uff0c\u4f7f\u7528\u7684\u662f\u5f9e\u5de6\u5230\u53f3\u7684\u67b6\u69cb\uff0c\u5176\u4e2d\u6bcf\u500b Token \u53ea\u80fd\u5c08\u6ce8\u65bc Transformer \u7684\u81ea\u6ce8\u610f\u529b\u5c64\u4e2d\u7684\u5148\u524d Token\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7a2e\u9650\u5236\u5c0d\u65bc\u53e5\u5b50\u7d1a\u4efb\u52d9\u4f86\u8aaa\u4e26\u4e0d\u662f\u6700\u512a\u7684\uff0c\u4e26\u4e14\u7576\u5c07\u57fa\u65bc\u5fae\u8abf\u7684\u65b9\u6cd5\u61c9\u7528\u65bc\u6a19\u8a18\u7d1a\u4efb\u52d9\uff08\u4f8b\u5982\u554f\u7b54\uff09\u6642\u53ef\u80fd\u975e\u5e38\u6709\u5bb3\uff0c\u56e0\u70ba\u5728\u9019\u4e9b\u4efb\u52d9\u4e2d\uff0c\u5f9e\u5169\u500b\u65b9\u5411\u5408\u4f75\u4e0a\u4e0b\u6587\u53ef\u4ee5\u5927\u5e45\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(e.h3,{id:"\u6a21\u578b\u67b6\u69cb",children:"\u6a21\u578b\u67b6\u69cb"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u6a21\u578b\u67b6\u69cb",src:s(75457).A+"",width:"1224",height:"396"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u662f\u4f5c\u8005\u63d0\u51fa\u7684\u6a21\u578b\u67b6\u69cb\uff0c\u7e3d\u5171\u6709 12 \u5c64\u7de8\u78bc\u5668\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u95dc\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"BERT-Base"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5171 12 \u5c64\u7de8\u78bc\u5668\uff0c\u6bcf\u5c64\u7de8\u78bc\u5668\u90fd\u662f Transformer \u7684\u57fa\u672c\u7d50\u69cb\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6bcf\u5c64\u7de8\u78bc\u5668\u6709 768 \u7dad\u7279\u5fb5\u548c 12 \u500b\u6ce8\u610f\u529b\u982d\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u7e3d\u53c3\u6578\u91cf\u70ba 110M\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"BERT-Large"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5171 24 \u5c64\u7de8\u78bc\u5668\uff0c\u6bcf\u5c64\u7de8\u78bc\u5668\u90fd\u662f Transformer \u7684\u57fa\u672c\u7d50\u69cb\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6bcf\u5c64\u7de8\u78bc\u5668\u6709 1024 \u7dad\u7279\u5fb5\u548c 16 \u500b\u6ce8\u610f\u529b\u982d\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u7e3d\u53c3\u6578\u91cf\u70ba 340M\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5c0d\u65bc\u8f38\u5165\u8cc7\u6599\uff0cBERT \u63a1\u7528\u4e86\u4e00\u4e9b\u7b56\u7565\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8f38\u5165\u5e8f\u5217\u7684\u9748\u6d3b\u5b9a\u7fa9"}),"\uff1a\u5728 BERT \u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u300c\u53e5\u5b50\u300d\u4e26\u4e0d\u5c40\u9650\u65bc\u5be6\u969b\u7684\u8a9e\u8a00\u5b78\u4e0a\u7684\u53e5\u5b50\uff0c\u800c\u53ef\u4ee5\u662f\u4efb\u4f55\u9023\u7e8c\u6587\u672c\u7684\u7bc4\u570d\u3002\u300c\u5e8f\u5217\u300d\u5247\u6307\u7684\u662f BERT \u8655\u7406\u7684\u8f38\u5165 Token \u5e8f\u5217\uff0c\u53ef\u80fd\u5305\u542b\u55ae\u4e00\u53e5\u5b50\u6216\u5169\u500b\u53e5\u5b50\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"WordPiece \u5d4c\u5165"}),"\uff1a\u4f7f\u7528\u4e00\u500b\u5305\u542b 30,000 \u500b\u6a19\u8a18\u7684 WordPiece \u8a5e\u5f59\u4f86\u9032\u884c\u5d4c\u5165\uff08",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1609.08144",children:(0,i.jsx)(e.strong,{children:"Wu et al., 2016"})}),"\uff09\uff0c\u9019\u6709\u52a9\u65bc\u6709\u6548\u5730\u8655\u7406\u672a\u77e5\u8a5e\u6216\u7f55\u898b\u8a5e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u7279\u6b8a\u6a19\u8a18\u7684\u4f7f\u7528"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[CLS] Token"}),"\uff1a\u6bcf\u500b\u5e8f\u5217\u7684\u7b2c\u4e00\u500b\u6a19\u8a18\u3002\u9019\u500b\u6a19\u8a18\u7684\u6700\u7d42\u96b1\u85cf\u72c0\u614b\u6703\u88ab\u7528\u4f5c\u9032\u884c\u5206\u985e\u4efb\u52d9\u7684\u5e8f\u5217\u8868\u793a\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[SEP] Token"}),"\uff1a\u7528\u4f86\u5206\u9694\u53e5\u5b50\u5c0d\u3002\u9019\u6709\u52a9\u65bc BERT \u8b58\u5225\u548c\u8655\u7406\u4f86\u81ea\u4e0d\u540c\u53e5\u5b50\u7684\u8cc7\u8a0a\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"[MASK] Token"}),"\uff1a\u5728\u9810\u8a13\u7df4\u904e\u7a0b\u4e2d\uff0c\u96a8\u6a5f\u906e\u84cb\u4e00\u4e9b Token\uff0c\u4ee5\u4fbf\u6a21\u578b\u9810\u6e2c\u9019\u4e9b\u88ab\u906e\u84cb\u7684 Token\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u53e5\u5b50\u5206\u9694\u7684\u7279\u5fb5\u6a19\u8a18"}),"\uff1a\u9664\u4e86[SEP]\u6a19\u8a18\u5916\uff0cBERT \u9084\u5728\u6bcf\u500b Token \u4e0a\u6dfb\u52a0\u5b78\u7fd2\u7684\u53c3\u6578\uff0c\u7528\u4ee5\u6307\u793a\u8a72 Token \u5c6c\u65bc\u53e5\u5b50 A \u9084\u662f\u53e5\u5b50 B\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u9810\u8a13\u7df4\u7b56\u7565",children:"\u9810\u8a13\u7df4\u7b56\u7565"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"BERT Pre-training",src:s(83318).A+"",width:"1224",height:"488"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u4e0a\u5716\uff0c\u5de6\u5074\u662f BERT \u7684\u9810\u8a13\u7df4\u7b56\u7565\uff0c\u53f3\u5074\u662f\u5fae\u8abf\u7b56\u7565\u3002"}),"\n",(0,i.jsx)(e.p,{children:"BERT \u7684\u9810\u8a13\u7df4\u7b56\u7565\u975e\u5e38\u7d93\u5178\uff0c\u5f71\u97ff\u4e86\u5f8c\u4f86\u8a31\u591a\u6a21\u578b\u7684\u8a2d\u8a08\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Masked Language Model\uff08MLM\uff09"})}),"\n",(0,i.jsx)(e.p,{children:"BERT \u63a1\u7528\u63a9\u78bc\u8a9e\u8a00\u6a21\u578b\uff08\u53c8\u7a31\u5b8c\u5f62\u586b\u7a7a\u4efb\u52d9\uff09\u4f86\u8a13\u7df4\u6df1\u5ea6\u96d9\u5411\u8868\u793a\u3002\u5728\u6b64\u4efb\u52d9\u4e2d\uff0c\u6a21\u578b\u96a8\u6a5f\u906e\u84cb\u8f38\u5165\u5e8f\u5217\u4e2d\u7684\u4e00\u5b9a\u6bd4\u4f8b\u7684 Token\uff0c\u76ee\u6a19\u662f\u9810\u6e2c\u9019\u4e9b\u88ab\u906e\u84cb\u7684 Token\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u96a8\u6a5f\u906e\u84cb\u7b56\u7565"}),"\uff1a\u5728 BERT \u4e2d\uff0c\u6bcf\u500b\u8f38\u5165\u5e8f\u5217\u4e2d\u7d04 15% \u7684 WordPiece Token \u6703\u88ab\u96a8\u6a5f\u9078\u4e2d\u4e26\u906e\u84cb\u3002\u906e\u84cb\u9078\u4e2d\u7684 Token \u6642\uff0c80% \u7684\u60c5\u6cc1\u4e0b\u6703\u7528 [MASK] Token \u66ff\u63db\uff0c10% \u7684\u60c5\u6cc1\u4e0b\u66ff\u63db\u70ba\u96a8\u6a5f Token\uff0c\u53e6\u5916 10%\u7684\u60c5\u6cc1\u4e0b\u4fdd\u6301\u4e0d\u8b8a\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u9810\u6e2c\u88ab\u906e\u84cb\u7684 Token"}),"\uff1a\u5c0d\u65bc\u6bcf\u500b\u88ab\u906e\u84cb\u7684 Token\uff0cBERT \u4f7f\u7528\u5c0d\u61c9\u7684\u6700\u7d42\u96b1\u85cf\u5411\u91cf\uff0c\u901a\u904e\u4e00\u500b\u8f38\u51fa softmax \u5c64\u4f86\u9810\u6e2c\u539f\u59cb Token\u3002\u9019\u500b\u904e\u7a0b\u985e\u4f3c\u65bc\u50b3\u7d71\u8a9e\u8a00\u6a21\u578b\u7684\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5fae\u8abf\u968e\u6bb5\u7684\u6f5b\u5728\u4e0d\u5339\u914d\u554f\u984c"}),"\uff1a\u7531\u65bc\u5728\u9810\u8a13\u7df4\u671f\u9593\u4f7f\u7528\u4e86 [MASK] Token\uff0c\u800c\u9019\u4e9b Token \u5728\u5be6\u969b\u4e0b\u6e38\u4efb\u52d9\u7684\u5fae\u8abf\u968e\u6bb5\u4e26\u4e0d\u6703\u51fa\u73fe\uff0c\u9019\u5728\u7406\u8ad6\u4e0a\u9020\u6210\u4e86\u9810\u8a13\u7df4\u548c\u5fae\u8abf\u4e4b\u9593\u7684\u4e0d\u5339\u914d\u3002BERT \u901a\u904e\u4e0d\u7e3d\u662f\u4f7f\u7528\u5be6\u969b\u7684 [MASK] Token \u4f86\u66ff\u63db\u9078\u4e2d\u7684 Token\uff0c\u800c\u662f\u63a1\u7528\u4e0a\u8ff0\u7684\u96a8\u6a5f\u7b56\u7565\u4f86\u7de9\u89e3\u9019\u4e00\u554f\u984c\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Next Sentence Prediction\uff08NSP\uff09"})}),"\n",(0,i.jsx)(e.p,{children:"\u70ba\u4e86\u8b93\u6a21\u578b\u66f4\u597d\u5730\u7406\u89e3\u548c\u6355\u6349\u53e5\u5b50\u4e4b\u9593\u7684\u95dc\u4fc2\uff0cBERT \u5f15\u5165\u4e86\u4e0b\u4e00\u53e5\u9810\u6e2c\u9019\u500b\u9810\u8a13\u7df4\u4efb\u52d9\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9810\u8a13\u7df4\u904e\u7a0b\u4e2d\uff0c\u7576\u9078\u64c7\u53e5\u5b50 A \u548c B \u7d44\u6210\u8f38\u5165\u5c0d\u6642\uff0c\u6709 50% \u7684\u6a5f\u6703 B \u662f A \u7684\u5be6\u969b\u5f8c\u7e8c\u53e5\u5b50\uff08\u6a19\u8a18\u70ba IsNext\uff09\uff0c\u53e6\u5916 50% \u7684\u6a5f\u6703 B \u662f\u5f9e\u8a9e\u6599\u5eab\u4e2d\u96a8\u6a5f\u9078\u64c7\u7684\u975e\u9023\u7e8c\u53e5\u5b50\uff08\u6a19\u8a18\u70ba NotNext\uff09\u3002\u9019\u7a2e\u8a2d\u8a08\u4f7f\u6a21\u578b\u80fd\u5b78\u7fd2\u8b58\u5225\u5169\u500b\u53e5\u5b50\u662f\u5426\u5728\u908f\u8f2f\u4e0a\u76f8\u95dc\u6216\u9806\u5e8f\u4e0a\u76f8\u7e7c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u904e NSP \u4efb\u52d9\uff0cBERT \u80fd\u5920\u5728\u9810\u8a13\u7df4\u968e\u6bb5\u5c31\u5b78\u7fd2\u5230\u5982\u4f55\u7406\u89e3\u548c\u8655\u7406\u4e0d\u540c\u53e5\u5b50\u4e4b\u9593\u7684\u95dc\u4fc2\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5fae\u8abf\u7b56\u7565",children:"\u5fae\u8abf\u7b56\u7565"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"BERT Fine-tuning",src:s(83318).A+"",width:"1224",height:"488"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5fae\u8abf\u968e\u6bb5\uff0cBERT \u901a\u904e\u6dfb\u52a0\u4e00\u500b\u984d\u5916\u7684\u5206\u985e\u5c64\u4f86\u9032\u884c\u4e0b\u6e38\u4efb\u52d9\u7684\u5fae\u8abf\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u554f\u7b54\u4efb\u52d9\uff08SQuAD\uff09\uff1a"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u554f\u7b54\u4efb\u52d9\u4e2d\uff0cBERT \u6703\u5c07\u554f\u984c\u548c\u5305\u542b\u7b54\u6848\u7684\u6bb5\u843d\u4f5c\u70ba\u55ae\u4e00\u5e8f\u5217\u8655\u7406\uff0c\u5229\u7528\u4e0d\u540c\u7684\u5d4c\u5165\u4f86\u6a19\u8b58\u554f\u984c\u90e8\u5206\u548c\u6bb5\u843d\u90e8\u5206\u3002\u5fae\u8abf\u904e\u7a0b\u4e2d\uff0cBERT \u5f15\u5165\u4e86\u7279\u5b9a\u7684\u8d77\u59cb\u548c\u7d50\u675f\u5411\u91cf\u4f86\u9810\u6e2c\u7b54\u6848\u5728\u6bb5\u843d\u4e2d\u7684\u4f4d\u7f6e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u81ea\u7136\u8a9e\u8a00\u63a8\u7406\uff08NLI\uff09\uff1a"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728 NLI \u4efb\u52d9\u4e2d\uff0cBERT \u63a5\u53d7\u5169\u500b\u53e5\u5b50\u4f5c\u70ba\u8f38\u5165\uff0c\u4e26\u901a\u904e\u5c07\u5169\u500b\u53e5\u5b50\u7684\u8868\u793a\u9032\u884c\u9023\u63a5\uff0c\u7136\u5f8c\u901a\u904e\u4e00\u500b\u5206\u985e\u5c64\u4f86\u9810\u6e2c\u5169\u500b\u53e5\u5b50\u4e4b\u9593\u7684\u95dc\u4fc2\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7a2e\u5fae\u8abf\u65b9\u6cd5\u76f8\u5c0d\u6210\u672c\u8f03\u4f4e\uff0c\u4e14\u80fd\u5728\u77ed\u6642\u9593\u5167\uff08\u4f8b\u5982\uff0c\u5728 Cloud TPU \u4e0a 1 \u5c0f\u6642\u6216 GPU \u4e0a\u6578\u5c0f\u6642\u5167\uff09\u5b8c\u6210\u3002\u9019\u7a2e\u6548\u7387\u548c\u901a\u7528\u6027\u4f7f\u5f97 BERT \u7279\u5225\u9069\u5408\u65bc\u5feb\u901f\u90e8\u7f72\u548c\u5be6\u73fe\u5404\u7a2e\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u4efb\u52d9\u7684\u9ad8\u6027\u80fd\u89e3\u6c7a\u65b9\u6848\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"BERT Results",src:s(28083).A+"",width:"1224",height:"280"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728 GLUE \u4efb\u52d9\u4e0a\uff0cBERT \u7684\u8868\u73fe\u986f\u8457\u8d85\u904e\u4e86 OpenAI GPT \u6a21\u578b\uff0c\u7279\u5225\u662f\u5728 MNLI \u4efb\u52d9\u4e0a\uff0cBERT-LARGE \u7248\u672c\u9054\u5230\u4e86 80.5 \u5206\uff0c\u986f\u8457\u9ad8\u65bc GPT \u7684 72.8 \u5206\u3002\u7814\u7a76\u9084\u986f\u793a\uff0c\u5c0d\u65bc\u8cc7\u6599\u91cf\u8f03\u5c11\u7684\u4efb\u52d9\uff0cBERT-LARGE \u76f8\u6bd4\u65bc BERT-BASE \u6709\u66f4\u51fa\u8272\u7684\u8868\u73fe\uff0c\u8868\u660e\u6a21\u578b\u5927\u5c0f\u5c0d\u65bc\u63d0\u9ad8\u8868\u73fe\u5177\u6709\u91cd\u8981\u5f71\u97ff\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u50c5\u5982\u6b64\uff0cBERT \u7e3d\u5171\u5728 11 \u500b\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u4efb\u52d9\u4e2d\u53d6\u5f97\u4e86\u65b0\u7684\u6700\u4f73\u7d50\u679c\uff0c\u9019\u8868\u660e\u4e86 BERT \u5728\u591a\u500b\u4efb\u52d9\u4e0a\u7684\u901a\u7528\u6027\u548c\u6709\u6548\u6027\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u6d88\u878d\u5be6\u9a57",children:"\u6d88\u878d\u5be6\u9a57"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"BERT Ablation",src:s(37920).A+"",width:"968",height:"414"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u4e5f\u9032\u884c\u4e86\u4e00\u7cfb\u5217\u6d88\u878d\u5be6\u9a57\uff0c\u4ee5\u63a2\u8a0e BERT \u7684\u4e0d\u540c\u7d44\u6210\u90e8\u5206\u5c0d\u6027\u80fd\u7684\u5f71\u97ff\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7121 NSP"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u4e86 Masked LM (MLM) \u9032\u884c\u8a13\u7df4\u7684\u96d9\u5411\u6a21\u578b\uff0c\u4f46\u6c92\u6709\u57f7\u884c\u4e0b\u4e00\u53e5\u8a71\u9810\u6e2c (NSP) \u4efb\u52d9\u3002\u7d50\u679c\u8868\u660e\uff0c\u7f3a\u5c11 NSP \u6703\u986f\u8457\u640d\u5bb3 QNLI\u3001MNLI \u548c SQuAD 1.1 \u7684\u6548\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"LTR & \u7121 NSP"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u50c5\u4f7f\u7528\u5f9e\u5de6\u5230\u53f3 (LTR) \u8a9e\u8a00\u6a21\u578b\u9032\u884c\u8a13\u7df4\uff0c\u672a\u4f7f\u7528 MLM \u6216 NSP\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u6240\u6709\u4efb\u52d9\u4e0a\uff0c\u9019\u500b\u6a21\u578b\u7684\u8868\u73fe\u5747\u4e0d\u5982 MLM \u6a21\u578b\uff0c\u7279\u5225\u662f\u5728 MRPC \u548c SQuAD \u4efb\u52d9\u4e0a\u7684\u4e0b\u964d\u5e45\u5ea6\u66f4\u5927\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728 SQuAD \u4efb\u52d9\u4e0a\uff0cLTR \u6a21\u578b\u7684 Token \u9810\u6e2c\u6548\u80fd\u986f\u8457\u8f03\u5dee\uff0c\u9019\u662f\u56e0\u70ba\u5176 Token \u5c64\u7d1a\u96b1\u85cf\u72c0\u614b\u7f3a\u4e4f\u53f3\u5074\u4e0a\u4e0b\u6587\u7684\u652f\u6301\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"BiLSTM \u7684\u6dfb\u52a0"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u70ba\u4e86\u5617\u8a66\u6539\u5584 LTR \u7cfb\u7d71\uff0c\u6dfb\u52a0\u4e86\u4e00\u500b\u96a8\u6a5f\u521d\u59cb\u5316\u7684 BiLSTM\u3002\u96d6\u7136 BiLSTM \u5728 SQuAD \u7684\u8868\u73fe\u6709\u6240\u63d0\u5347\uff0c\u4f46\u4ecd\u9060\u4e0d\u5982\u96d9\u5411\u6a21\u578b\u3002"}),"\n",(0,i.jsx)(e.li,{children:"BiLSTM \u5c0d GLUE \u4efb\u52d9\u7684\u6548\u80fd\u6709\u640d\u5bb3\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6bd4\u8f03 ELMo \u7684\u7b56\u7565"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8a13\u7df4\u7368\u7acb\u7684 LTR \u548c RTL \u6a21\u578b\u4e26\u5c07\u5b83\u5011\u7684\u8f38\u51fa\u4e32\u806f\u8d77\u4f86\uff0c\u9019\u4e00\u7b56\u7565\u985e\u4f3c\u65bc ELMo \u6240\u63a1\u7528\u7684\u65b9\u6cd5\u3002\u96d6\u7136\u9019\u7a2e\u65b9\u6cd5\u80fd\u5920\u5229\u7528\u5de6\u53f3\u4e0a\u4e0b\u6587\uff0c\u4f46\u6210\u672c\u662f\u55ae\u4e00\u96d9\u5411\u6a21\u578b\u7684\u5169\u500d\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"BERT \u7684\u77e5\u540d\u5ea6\uff0c\u4f86\u81ea\u65bc\u5b83\u7684\u9ad8\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u90a3\u500b\u5e74\u4ee3\uff0c\u9019\u7a2e\u5c60\u699c\u7684\u884c\u70ba\u662f\u975e\u5e38\u5c11\u898b\u7684\uff0c\u56e0\u6b64 BERT \u7684\u51fa\u73fe\u5f15\u8d77\u4e86\u6975\u5927\u7684\u95dc\u6ce8\u3002\u5f9e BERT \u63d0\u51fa\u4e4b\u5f8c\uff0c\u5b78\u8853\u5708\u5167\u518d\u4e5f\u6c92\u6709 LSTM \u7acb\u8db3\u7684\u5730\u65b9\uff0c\u5929\u5e95\u4e0b\u53ea\u5269\u4e0b Transformer\u3002"}),"\n",(0,i.jsx)(e.p,{children:"BERT \u7684\u6210\u529f\u8b49\u660e\u4e86\u300c\u9810\u8a13\u7df4-\u5fae\u8abf\u7684\u6a21\u5f0f\u300d\u5728\u591a\u6a23\u5316\u7684\u81ea\u7136\u8a9e\u8a00\u7406\u89e3\u4efb\u52d9\u4e2d\u5177\u6709\u6f5b\u529b\uff0c\u70ba\u5f8c\u7e8c\u66f4\u5927\u898f\u6a21\u3001\u66f4\u5f37\u6027\u80fd\u7684\u6a21\u578b\u5960\u5b9a\u4e86\u57fa\u790e\u3002"})]})}function t(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(j,{...n})}):j(n)}},75457:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img1-41bfb99df10461370d0216ae59469093.jpg"},83318:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img2-1567224d4a4076c2fca6a71489194baf.jpg"},28083:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img3-3d722e11e4894c16e56c1da28cc4c70d.jpg"},37920:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img4-b6a0c39f58bb03bff44d2f62db5f9039.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function d(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);