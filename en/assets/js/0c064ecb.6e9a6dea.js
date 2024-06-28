"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3940],{87522:(n,l,i)=>{i.r(l),i.d(l,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var s=i(74848),e=i(28453);const r={},d="[19.08] VisualBERT",c={id:"visualbert/index",title:"[19.08] VisualBERT",description:"\u5e8f\u5e55\u4e0a\u7684\u51dd\u8996",source:"@site/papers/1908-visualbert/index.md",sourceDirName:"1908-visualbert",slug:"/visualbert/",permalink:"/en/papers/visualbert/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[19.08] ViLBERT",permalink:"/en/papers/vilbert/"},next:{title:"[19.08] VL-BERT",permalink:"/en/papers/vlbert/"}},h={},x=[{value:"\u5e8f\u5e55\u4e0a\u7684\u51dd\u8996",id:"\u5e8f\u5e55\u4e0a\u7684\u51dd\u8996",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"VisualBERT \u6a21\u578b\u8a2d\u8a08",id:"visualbert-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u9810\u8a13\u7df4\u6a5f\u5236",id:"\u9810\u8a13\u7df4\u6a5f\u5236",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u6a21\u578b\u8868\u73fe\u597d\u55ce\uff1f",id:"\u6a21\u578b\u8868\u73fe\u597d\u55ce",level:3},{value:"\u5728\u9019\u6a21\u578b\u8a2d\u8a08\u4e2d\uff0c\u8ab0\u6700\u91cd\u8981\uff1f",id:"\u5728\u9019\u6a21\u578b\u8a2d\u8a08\u4e2d\u8ab0\u6700\u91cd\u8981",level:3},{value:"\u6a21\u578b\u771f\u7684\u6709\u770b\u5230\u5c0d\u7684\u5730\u65b9\u55ce\uff1f",id:"\u6a21\u578b\u771f\u7684\u6709\u770b\u5230\u5c0d\u7684\u5730\u65b9\u55ce",level:3},{value:"\u6ce8\u610f\u529b\u5206\u5e03\u6a23\u614b\u5982\u4f55\uff1f",id:"\u6ce8\u610f\u529b\u5206\u5e03\u6a23\u614b\u5982\u4f55",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function j(n){const l={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"1908-visualbert",children:"[19.08] VisualBERT"}),"\n",(0,s.jsx)(l.h2,{id:"\u5e8f\u5e55\u4e0a\u7684\u51dd\u8996",children:"\u5e8f\u5e55\u4e0a\u7684\u51dd\u8996"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.a,{href:"https://arxiv.org/abs/1908.03557",children:(0,s.jsx)(l.strong,{children:"VisualBERT: A Simple and Performant Baseline for Vision and Language"})})}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.admonition,{type:"info",children:(0,s.jsx)(l.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,s.jsx)(l.hr,{}),"\n",(0,s.jsx)(l.p,{children:"\u5728 2015 \u5e74\u5de6\u53f3\uff0c\u65e9\u5c31\u6709\u5f88\u591a\u8de8\u6a21\u614b\u6a21\u578b\u5617\u8a66\uff0c\u4e3b\u8981\u90fd\u662f\u57fa\u65bc LSTM \u7684\u67b6\u69cb\u4f86\u9032\u884c\u76f8\u95dc\u7684\u5be6\u9a57\uff0c\u5c31\u5982\u672c\u6587\u4f5c\u8005\u6240\u8aaa\uff1a\u300c\u591a\u6a21\u614b\u7684\u6a21\u578b\u7814\u7a76\uff0c\u6839\u672c\u5c31\u4e0d\u662f\u4ec0\u9ebc\u65b0\u9bae\u4e8b\uff01\u300d\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u96a8\u8457\u6642\u5e8f\u4f86\u5230 2017 \u5e74\uff0cTransformer \u67b6\u69cb\u53ca\u5176\u6ce8\u610f\u529b\u6a5f\u5236\u5728\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u9818\u57df\u5f15\u8d77\u4e86\u5ee3\u6cdb\u7684\u95dc\u6ce8\uff0c\u4e26\u5e36\u4f86\u4e86\u8a31\u591a\u5275\u65b0\u548c\u7a81\u7834\u3002\u7279\u5225\u662f BERT\uff0c\u9019\u4e00\u4ee3\u8868\u6027\u7684\u6a21\u578b\u6210\u529f\u5730\u9810\u8a13\u7df4\u4e86\u4e00\u500b\u901a\u7528\u8a9e\u8a00\u7de8\u78bc\u5668\uff0c\u80fd\u5920\u9810\u6e2c\u6587\u672c\u4e2d\u88ab\u5c4f\u853d\u7684\u55ae\u8a5e\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u5230\u4e86 2019 \u5e74\uff0c\u6ce8\u610f\u529b\u6a5f\u5236\u5728\u591a\u6a21\u614b\u9818\u57df\u4e2d\u7684\u61c9\u7528\u4e5f\u5f97\u5230\u4e86\u6975\u5927\u7684\u767c\u5c55\u3002\u9019\u4fc3\u4f7f\u8a9e\u8a00\u8207\u8996\u89ba\u7684\u7d50\u5408\u518d\u6b21\u6210\u70ba\u7814\u7a76\u7684\u7126\u9ede\uff0c\u6316\u6398\u5716\u50cf\u4e2d\u66f4\u6df1\u5c64\u6b21\u7684\u8a9e\u7fa9\u7d30\u7bc0\uff0c\u6db5\u84cb\u4e86\u7269\u9ad4\u3001\u5c6c\u6027\u3001\u90e8\u4f4d\u3001\u7a7a\u9593\u95dc\u4fc2\u3001\u52d5\u4f5c\u548c\u610f\u5716\u7b49\u8a9e\u7fa9\u5c64\u9762\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u4f5c\u8005\u53d7\u6b64\u555f\u767c\uff0c\u5e0c\u671b\u80fd\u900f\u904e\u6ce8\u610f\u529b\u6a5f\u5236\u6355\u6349\u5f71\u50cf\u4e2d\u7684\u96b1\u5f0f\u95dc\u4fc2\uff0c\u4e26\u8a8d\u70ba\u9810\u5148\u8a13\u7df4\u80fd\u6709\u6548\u5b78\u7fd2\u9019\u4e9b\u95dc\u4fc2\uff0c\u6839\u64da\u524d\u4eba\u7684\u7814\u7a76\uff0c\u4f5c\u8005\u7e3d\u7d50\u51fa\u5e7e\u500b\u73fe\u968e\u6bb5\u7684\u554f\u984c\uff1a"}),"\n",(0,s.jsx)(l.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"\u8996\u89ba\u8207\u8a9e\u8a00\u7684\u8907\u96dc\u4e92\u52d5\uff1a"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u7576\u524d\u7684\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\uff08\u5982\u7269\u9ad4\u8b58\u5225\u3001\u8996\u89ba\u5b57\u5e55\u3001\u8996\u89ba\u554f\u7b54\u548c\u8996\u89ba\u63a8\u7406\uff09\u90fd\u8981\u6c42\u7cfb\u7d71\u7406\u89e3\u5716\u50cf\u4e2d\u7684\u8a73\u7d30\u8a9e\u7fa9\uff0c\u5305\u62ec\u5c0d\u8c61\u3001\u5c6c\u6027\u3001\u90e8\u5206\u3001 \u7a7a\u9593\u95dc\u4fc2\u3001"}),"\n",(0,s.jsx)(l.li,{children:"\u52d5\u4f5c\u548c\u610f\u5716\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u8a9e\u8a00\u4e2d\u5f15\u7528\u548c\u5efa\u7acb\u9019\u4e9b\u6982\u5ff5\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"\u7d71\u4e00\u8996\u89ba\u8207\u8a9e\u8a00\u7684\u6a21\u578b\u67b6\u69cb\uff1a"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u76ee\u524d\u7684\u8a31\u591a\u6a21\u578b\u90fd\u662f\u91dd\u5c0d\u7279\u5b9a\u7684\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u800c\u8a2d\u8a08\u7684\uff0c\u800c\u7f3a\u4e4f\u4e00\u500b\u53ef\u4ee5\u901a\u7528\u65bc\u5404\u7a2e\u4efb\u52d9\u7684\u6a21\u578b\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"\u9810\u8a13\u7df4\u7684\u91cd\u8981\u6027\uff1a"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5982\u4f55\u6709\u6548\u5730\u5728\u8996\u89ba\u8207\u8a9e\u8a00\u8cc7\u6599\u4e0a\u9810\u8a13\u7df4\u6a21\u578b\uff0c\u4ee5\u63d0\u9ad8\u5176\u5728\u4e0b\u6e38\u4efb\u52d9\u7684\u8868\u73fe\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"\u7406\u89e3\u5716\u50cf\u8a9e\u7fa9\u7684\u6311\u6230\uff1a"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u9700\u8981\u6355\u6349\u548c\u7406\u89e3\u5716\u50cf\u4e2d\u63cf\u8ff0\u7684\u8a73\u7d30\u8a9e\u7fa9\uff0c\u4e26\u5c07\u5176\u8207\u6587\u5b57\u63cf\u8ff0\u76f8\u95dc\u806f\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,s.jsx)(l.h3,{id:"visualbert-\u6a21\u578b\u8a2d\u8a08",children:"VisualBERT \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{alt:"VisualBERT \u6a21\u578b\u67b6\u69cb",src:i(26170).A+"",width:"1816",height:"672"})}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"\u6ce8\u610f\u529b\u6a5f\u5236\uff1a"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"VisualBERT \u7684\u6838\u5fc3\u60f3\u6cd5\u662f\u5229\u7528 Transformer \u4e2d\u7684\u6ce8\u610f\u529b\u6a5f\u5236\u300c\u96b1\u5f0f\u300d\u5c0d\u8f38\u5165\u6587\u5b57\u7684\u5143\u7d20\u548c\u8f38\u5165\u5f71\u50cf\u4e2d\u7684\u5340\u57df\u9032\u884c\u5c0d\u9f4a\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"\u8996\u89ba\u7279\u5fb5\uff1a"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u9664\u4e86 BERT \u7684\u6240\u6709\u7d44\u4ef6\uff0cVisualBERT \u9084\u5f15\u5165\u4e86\u4e00\u7d44\u540d\u70ba F \u7684\u8996\u89ba\u7279\u5fb5\u4f86\u5c0d\u5f71\u50cf\u9032\u884c\u5efa\u6a21\u3002"}),"\n",(0,s.jsx)(l.li,{children:"F \u4e2d\u7684\u6bcf\u4e00\u500b\u7279\u5fb5\u90fd\u5c0d\u61c9\u65bc\u5f71\u50cf\u4e2d\u7684\u4e00\u500b\u7269\u4ef6\u5340\u57df\uff0c\u9019\u4e9b\u7269\u4ef6\u5340\u57df\u662f\u7531\u7269\u4ef6\u5075\u6e2c\u5668\u5c0e\u51fa\u7684\uff08\u53ef\u80fd\u662f Faster RCNN \u6216\u5176\u4ed6\uff09\u3002"}),"\n",(0,s.jsxs)(l.li,{children:["F \u4e2d\u7684\u6bcf\u4e00\u500b\u7279\u5fb5 f \u662f\u900f\u904e\u4ee5\u4e0b\u4e09\u500b\u7279\u5fb5\u7684\u7e3d\u548c\u4f86\u8a08\u7b97\u7684\uff1a","\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"(f_o)\uff1a\u4ee3\u8868 f \u7269\u4ef6\u5340\u57df\u7684\u8996\u89ba\u7279\u5fb5\u8868\u793a\uff0c\u7531\u5377\u7a4d\u795e\u7d93\u7db2\u8def\u8a08\u7b97\u3002"}),"\n",(0,s.jsx)(l.li,{children:"(f_s)\uff1a\u8868\u793a\u5b83\u662f\u5f71\u50cf\u7279\u5fb5\u7684\u5206\u6bb5\u7279\u5fb5\u5230\u6587\u5b57\u7279\u5fb5\u3002"}),"\n",(0,s.jsx)(l.li,{children:"(f_p)\uff1a\u4f4d\u7f6e\u7279\u5fb5\uff0c\u7576\u55ae\u5b57\u548c\u7269\u4ef6\u5340\u57df\u4e4b\u9593\u7684\u5c0d\u9f4a\u4f5c\u70ba\u8f38\u5165\u7684\u4e00\u90e8\u5206\u63d0\u4f9b\u6642\u4f7f\u7528\uff0c\u4e26\u8a2d\u5b9a\u70ba\u8207\u5c0d\u9f4a\u7684\u55ae\u5b57\u76f8\u5c0d\u61c9\u7684\u4f4d\u7f6e\u7279\u5fb5\u7684\u7e3d\u548c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"\u7d50\u5408\u8996\u89ba\u7279\u5fb5\u8207\u6587\u5b57\u7279\u5fb5\uff1a"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u8996\u89ba\u7279\u5fb5 F \u8207\u539f\u59cb\u6587\u5b57\u7279\u5fb5\u96c6 E \u4e00\u540c\u50b3\u905e\u81f3\u591a\u5c64\u7684 Transformer\u3002\u9019\u8a2d\u8a08\u4f7f\u6a21\u578b\u80fd\u5920\u96b1\u5f0f\u5730\u767c\u73fe\u5169\u7d44\u8f38\u5165\uff08\u6587\u5b57\u548c\u5716\u50cf\uff09\u4e4b\u9593\u7684\u6709\u7528\u5c0d\u9f4a\uff0c\u9032\u800c\u5efa\u7acb\u65b0\u7684\u806f\u5408\u8868\u793a\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u9019\u7a2e\u67b6\u69cb\u7684\u8a2d\u8a08\u5141\u8a31 VisualBERT \u5728\u8655\u7406\u591a\u6a21\u614b\u4efb\u52d9\u6642\uff0c\u80fd\u5920\u6355\u6349\u5716\u50cf\u548c\u76f8\u61c9\u6587\u5b57\u4e4b\u9593\u7684\u8c50\u5bcc\u8a9e\u7fa9\u95dc\u4fc2\uff0c\u4e26\u4e14\u53ef\u4ee5\u5229\u7528 Transformer \u7684\u5f37\u5927\u80fd\u529b\u9032\u884c\u6df1\u5165\u7684\u8868\u5fb5\u5b78\u7fd2\u3002"}),"\n",(0,s.jsx)(l.h3,{id:"\u9810\u8a13\u7df4\u6a5f\u5236",children:"\u9810\u8a13\u7df4\u6a5f\u5236"}),"\n",(0,s.jsx)(l.p,{children:"VisualBERT \u7684\u9810\u8a13\u7df4\u904e\u7a0b\u53ef\u4ee5\u7d30\u5206\u70ba\u4ee5\u4e0b\u4e09\u500b\u4e3b\u8981\u968e\u6bb5\uff1a"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u8207\u4efb\u52d9\u7121\u95dc\u7684\u9810\u8a13\u7df4\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u8cc7\u6599\u4f86\u6e90\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u5047\u8a2d\u5728 COCO \u8cc7\u6599\u96c6\u4e2d\uff0c\u6709\u4e00\u5f35\u7167\u7247\u986f\u793a\u4e00\u500b\u5c0f\u7537\u5b69\u5728\u516c\u5712\u88e1\u548c\u4ed6\u7684\u72d7\u73a9\u800d\u3002\u5c0d\u9019\u5f35\u7167\u7247\u7684\u4e94\u500b\u6a19\u984c\u53ef\u80fd\u662f\uff1a","\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5c0f\u7537\u5b69\u5728\u516c\u5712\u88e1\u73a9\u800d\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u4e00\u96bb\u72d7\u5728\u8349\u5730\u4e0a\u8ffd\u7403\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5b69\u5b50\u548c\u4ed6\u7684\u5bf5\u7269\u5728\u6236\u5916\u5ea6\u904e\u5feb\u6a02\u6642\u5149\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5728\u967d\u5149\u4e0b\uff0c\u7537\u5b69\u548c\u72d7\u73a9\u5f97\u5f88\u958b\u5fc3\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u516c\u5712\u88e1\u7684\u5b69\u5b50\u548c\u72d7\u4e92\u52d5\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u63a9\u853d\u8a9e\u8a00\u5efa\u6a21\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u57fa\u65bc\u524d\u9762\u7684\u4f8b\u5b50\uff0c\u9078\u53d6\u7b2c\u4e00\u500b\u6a19\u984c\u300c\u5c0f\u7537\u5b69\u5728\u516c\u5712\u88e1\u73a9\u800d\u300d\u4f5c\u70ba\u8f38\u5165\uff0c\u4e26\u96a8\u6a5f\u5c4f\u853d\u300c\u73a9\u800d\u300d\u9019\u500b\u8a5e\uff0c\u6240\u4ee5\u8f38\u5165\u8b8a\u6210\u300c\u5c0f\u7537\u5b69\u5728\u516c\u5712\u88e1[MASK]\u300d\u3002VisualBERT \u7684\u4efb\u52d9\u662f\u6839\u64da\u4e0a\u4e0b\u6587\u548c\u8207\u6587\u5b57\u8f38\u5165\u76f8\u5c0d\u61c9\u7684\u5716\u50cf\uff08\u5373\u5c0f\u7537\u5b69\u548c\u72d7\u5728\u516c\u5712\u88e1\u7684\u7167\u7247\uff09\u4f86\u9810\u6e2c\u88ab\u5c4f\u853d\u7684\u8a5e\uff0c\u4e5f\u5c31\u662f\u300c\u73a9\u800d\u300d\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u53e5\u5716\u9810\u6e2c\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u518d\u4ee5\u540c\u4e00\u5f35\u7167\u7247\u70ba\u4f8b\uff0c\u7d66\u6a21\u578b\u5169\u500b\u6a19\u984c\uff1a","\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"(a) \u5c0f\u7537\u5b69\u5728\u516c\u5712\u88e1\u73a9\u800d\uff08\u63cf\u8ff0\u8a72\u5716\u50cf\uff09"}),"\n",(0,s.jsx)(l.li,{children:"(b) \u8001\u592a\u592a\u5728\u5e02\u5834\u8cfc\u7269\uff08\u96a8\u6a5f\u9078\u53d6\u7684\u4e0d\u76f8\u95dc\u7684\u6a19\u984c\uff09"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.li,{children:"VisualBERT \u6703\u63a5\u6536\u9019\u5169\u500b\u6a19\u984c\u548c\u7167\u7247\u4f5c\u70ba\u8f38\u5165\uff0c\u4e26\u9700\u8981\u78ba\u5b9a\u54ea\u500b\u6a19\u984c\u662f\u8207\u5716\u50cf\u76f8\u7b26\u7684\u3002\u5728\u9019\u500b\u60c5\u5883\u4e0b\uff0c\u7b54\u6848\u61c9\u8a72\u662f\u6a19\u984c (a)\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u91dd\u5c0d\u7279\u5b9a\u4efb\u52d9\u7684\u9810\u8a13\u7df4\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5728\u5fae\u8abf VisualBERT \u81f3\u7279\u5b9a\u4e0b\u6e38\u4efb\u52d9\u4e4b\u524d\uff0c\u9032\u884c\u9019\u4e00\u9810\u8a13\u7df4\u968e\u6bb5\u662f\u70ba\u4e86\u4f7f\u6a21\u578b\u66f4\u597d\u5730\u9069\u61c9\u76ee\u6a19\u9818\u57df\u3002\u9019\u500b\u968e\u6bb5\u4e3b\u8981\u4f7f\u7528\u5e36\u6709\u5716\u50cf\u76ee\u6a19\u7684\u63a9\u853d\u8a9e\u8a00\u5efa\u6a21\uff0c\u5728\u7279\u5b9a\u7684\u4efb\u52d9\u8cc7\u6599\u4e0a\u9032\u884c\u8a13\u7df4\uff0c\u4f7f\u6a21\u578b\u7fd2\u6163\u65bc\u65b0\u7684\u76ee\u6a19\u57df\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5fae\u8abf\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u9019\u4e00\u6b65\u9a5f\u8207 BERT \u7684\u5fae\u8abf\u7b56\u7565\u76f8\u4f3c\u3002\u9996\u5148\uff0c\u6703\u6839\u64da\u7279\u5b9a\u7684\u4efb\u52d9\u5f15\u5165\u76f8\u5c0d\u61c9\u7684\u8f38\u5165\u3001\u8f38\u51fa\u5c64\u548c\u76ee\u6a19\u3002\u7136\u5f8c\uff0c\u518d\u8a13\u7df4 Transformer \u4f7f\u5176\u6700\u5927\u5316\u5728\u8a72\u7279\u5b9a\u4efb\u52d9\u4e0a\u7684\u8868\u73fe\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u7d9c\u5408\u4ee5\u4e0a\u9019\u4e09\u968e\u6bb5\u7684\u9810\u8a13\u7df4\u7b56\u7565\uff0c\u4f5c\u8005\u5e0c\u671b\u4f7f\u6a21\u578b\u66f4\u52a0\u6cdb\u5316\u4e14\u9069\u61c9\u65bc\u591a\u7a2e\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u3002"}),"\n",(0,s.jsx)(l.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,s.jsx)(l.p,{children:"\u5728\u9019\u7bc7\u7814\u7a76\u4e2d\uff0c\u4f5c\u8005\u89c0\u5bdf\u5230 VisualBERT \u4e0d\u50c5\u5728\u591a\u7a2e\u4efb\u52d9\u4e0a\u90fd\u8868\u73fe\u512a\u7570\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5176\u8a13\u7df4\u7b56\u7565\u548c\u7d50\u69cb\u8a2d\u8a08\u63d0\u4f9b\u4e86\u7368\u7279\u7684\u6d1e\u5bdf\u3002\u5c24\u5176\u662f\u5982\u4f55\u878d\u5408\u5716\u50cf\u8207\u6587\u672c\u4fe1\u606f\uff0c\u4e26\u5728\u9019\u5169\u8005\u4e4b\u9593\u5efa\u7acb\u6df1\u5ea6\u7684\u8a9e\u7fa9\u9023\u63a5\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u63a5\u4e0b\u4f86\uff0c\u518d\u4f86\u63a2\u8a0e VisualBERT \u7684\u6838\u5fc3\u512a\u52e2\u3001\u9810\u8a13\u7df4\u7684\u7b56\u7565\u9078\u64c7\uff0c\u4ee5\u53ca\u5176\u5982\u4f55\u78ba\u5be6\u6293\u53d6\u5230\u5716\u7247\u548c\u8a9e\u8a00\u4e4b\u9593\u7684\u7d30\u7dfb\u95dc\u806f\u3002"}),"\n",(0,s.jsx)(l.h3,{id:"\u6a21\u578b\u8868\u73fe\u597d\u55ce",children:"\u6a21\u578b\u8868\u73fe\u597d\u55ce\uff1f"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"VQA"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u4efb\u52d9\u63cf\u8ff0\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4efb\u52d9\u76ee\u7684\uff1a\u5c0d\u7d66\u5b9a\u7684\u5716\u50cf\u548c\u554f\u984c\u63d0\u4f9b\u6b63\u78ba\u7684\u7b54\u6848\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u4f7f\u7528\u7684\u8cc7\u6599\u96c6\uff1aVQA 2.0\uff0c\u7531 Goyal \u7b49\u4eba\u65bc 2017 \u5e74\u63d0\u51fa\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u8cc7\u6599\u96c6\u7279\u6027\uff1a\u5305\u542b\u8d85\u904e 100 \u842c\u500b\u95dc\u65bc COCO \u5f71\u50cf\u7684\u554f\u984c\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u6a21\u578b\u8a13\u7df4\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u7b54\u6848\u7684\u9078\u64c7\uff1a\u8a13\u7df4\u6a21\u578b\u4ee5\u9810\u6e2c 3,129 \u500b\u6700\u5e38\u898b\u7684\u7b54\u6848\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5716\u50cf\u7279\u5fb5\u4f86\u6e90\uff1a\u57fa\u65bc ResNeXt \u7684 Faster RCNN\uff0c\u5df2\u5728 Visual Genome \u4e0a\u9032\u884c\u9810\u8a13\u7df4\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u7b2c\u4e00\u90e8\u5206\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4f7f\u7528\u8207\u672c\u6587\u7684\u65b9\u6cd5\u76f8\u540c\u7684\u8996\u89ba\u7279\u5fb5\uff08\u9019\u88e1\u662f\u6307\u7279\u5fb5\u7dad\u5ea6\uff09\uff0c\u548c\u7269\u4ef6\u5340\u57df\u5efa\u8b70\u6578\u91cf\uff08\u9019\u88e1\u662f\u6307\u9078\u53d6\u5f71\u50cf\u5167\u5340\u57df\u7684\u6578\u91cf\uff09\u7684\u57fa\u7dda\u6a21\u578b\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u7b2c\u4e8c\u90e8\u5206\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5c55\u793a\u4e86 VisualBERT \u7684\u6a21\u578b\u7d50\u679c\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u7b2c\u4e09\u90e8\u5206\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5176\u4ed6\u4e0d\u53ef\u6bd4\u8f03\u65b9\u6cd5\u7684\u7d50\u679c\uff0c\u5305\u62ec\u4f7f\u7528\u5916\u90e8\u554f\u7b54\u5c0d\u7684\u65b9\u6cd5\u3001\u4f7f\u7528\u591a\u500b\u6aa2\u6e2c\u5668\u7684\u65b9\u6cd5\uff0c\u4ee5\u53ca\u6a21\u578b\u7684\u96c6\u5408\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5c0f\u7d50\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5728\u53ef\u4ee5\u6bd4\u8f03\u7684\u57fa\u7dda\u4e0a\uff0c\u6548\u679c\u6bd4\u8f03\u597d\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5728\u4e0d\u80fd\u76f4\u63a5\u6bd4\u8f03\u7684\u65b9\u6cd5\u4e2d\uff0c\u4f5c\u8005\u8a8d\u70ba\u4ed6\u5011\u63d0\u51fa\u4f86\u7684\u7684\u65b9\u6cd5\u4e5f\u4e0d\u5dee\u3002\u56e0\u70ba\u9019\u500b\u65b9\u6cd5\u300c\u7c21\u55ae\u4e14\u5728\u6548\u80fd\u4e0a\u300d\u512a\u65bc\u5176\u4ed6\u73fe\u6709\u7684\u65b9\u6cd5\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"VCR"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u4efb\u52d9\u63cf\u8ff0\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"VCR \u5305\u62ec\u4f86\u81ea 11 \u842c\u500b\u96fb\u5f71\u5834\u666f\u7684 29 \u842c\u500b\u554f\u984c\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u9019\u4e9b\u554f\u984c\u4e3b\u8981\u95dc\u65bc\u8996\u89ba\u5e38\u8b58\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5b50\u4efb\u52d9\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"VCR \u4efb\u52d9\u88ab\u5283\u5206\u70ba\u5169\u500b\u591a\u91cd\u9078\u64c7\u5b50\u4efb\u52d9\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5206\u5225\u662f\u554f\u984c\u56de\u7b54\uff08Q \u2192 A\uff09\u548c\u7b54\u6848\u8ad6\u8b49\uff08QA \u2192 R\uff09\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5c0d\u65bc\u9019\u5169\u500b\u5b50\u4efb\u52d9\uff0c\u90fd\u6709\u7368\u7acb\u7684\u6a21\u578b\u9032\u884c\u8a13\u7df4\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5f71\u50cf\u7279\u5fb5\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4f7f\u7528 ResNet50\uff08\u7531 He \u7b49\u4eba\u65bc 2016 \u5e74\u63d0\u51fa\uff09\u4f86\u63d0\u53d6\u5f71\u50cf\u7279\u5fb5\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5229\u7528\u8cc7\u6599\u96c6\u4e2d\u6240\u63d0\u4f9b\u7684\u300c\u9ec3\u91d1\u300d\u6aa2\u6e2c\u7269\u4ef6\u6846\u548c\u5206\u5272\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u6587\u5b57\u8207\u5f71\u50cf\u5c0d\u9f4a\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"VCR \u8cc7\u6599\u96c6\u63d0\u4f9b\u4e86\u6587\u672c\u4e2d\u5f15\u7528\u7684\u55ae\u5b57\u8207\u7269\u4ef6\u5340\u57df\u4e4b\u9593\u7684\u5c0d\u9f4a\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u901a\u904e\u4f7f\u7528\u5c0d\u61c9\u7684\u4f4d\u7f6e\u7279\u5fb5\u4f86\u5339\u914d\u55ae\u5b57\u548c\u5340\u57df\uff0c\u6a21\u578b\u80fd\u5920\u5229\u7528\u6b64\u5c0d\u9f4a\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u6bd4\u8f03\u57fa\u6e96\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u7814\u7a76\u8005\u5c07\u4ed6\u5011\u7684\u65b9\u6cd5\u8207\u57fa\u65bc BERT (R2C) \u69cb\u5efa\u7684\u8cc7\u6599\u96c6\u767c\u5e03\u7684\u6a21\u578b\u9032\u884c\u6bd4\u8f03\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u540c\u6642\uff0c\u9084\u8207\u5728\u6392\u884c\u699c\u4e0a\u8868\u73fe\u6700\u597d\u7684\u55ae\u4e00\u6a21\u578b (B2T2) \u9032\u884c\u5c0d\u6bd4\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5c0f\u7d50\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u7cbe\u7c21\u7248\u7684 VisualBERT w/o COCO \u9810\u8a13\u7df4\u8207 R2C \u6709\u76f8\u540c\u7684\u8cc7\u6e90\u914d\u6bd4\uff0c\u4f46\u5176\u6548\u80fd\u660e\u986f\u512a\u65bc R2C\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u4f7f\u7528\u5b8c\u6574\u7248\u672c\u7684 VisualBERT \u53ef\u9032\u4e00\u6b65\u63d0\u9ad8\u6548\u80fd\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u5118\u7ba1 VCR (\u4e3b\u8981\u6db5\u84cb\u96fb\u5f71\u5834\u666f) \u8207 COCO \u4e4b\u9593\u5b58\u5728\u986f\u8457\u7684\u9818\u57df\u5dee\u7570\uff0cCOCO \u4e0a\u7684\u9810\u8a13\u7df4\u5c0d\u65bc VCR \u4ecd\u7136\u975e\u5e38\u6709\u5e6b\u52a9\u3002"}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"NLVR2"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u4efb\u52d9\u63cf\u8ff0\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"NLVR2 \u5c08\u6ce8\u65bc\u81ea\u7136\u8a9e\u8a00\u8207\u5716\u50cf\u7684\u806f\u5408\u63a8\u7406\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u4e3b\u8981\u6311\u6230\u5305\u62ec\u8a9e\u7fa9\u591a\u6a23\u6027\u3001\u7d44\u5408\u6027\u4ee5\u53ca\u8996\u89ba\u63a8\u7406\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u8cc7\u6599\u96c6\u7684\u4efb\u52d9\u662f\u5224\u5b9a\u7d66\u5b9a\u7684\u81ea\u7136\u8a9e\u8a00\u63cf\u8ff0\u662f\u5426\u6b63\u78ba\u5730\u63cf\u8ff0\u4e86\u4e00\u5c0d\u5f71\u50cf\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5305\u542b\u8d85\u904e 10 \u842c\u500b\u8207\u7db2\u8def\u5f71\u50cf\u914d\u5c0d\u7684\u82f1\u6587\u53e5\u5b50\u7bc4\u4f8b\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5206\u6bb5\u7279\u5fb5\u8abf\u6574\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5728 VisualBERT \u4e2d\u7684\u5206\u6bb5\u7279\u5fb5\u6a5f\u5236\u88ab\u8abf\u6574\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u7528\u65bc\u6307\u6d3e\u4f86\u81ea\u4e0d\u540c\u5f71\u50cf\u7684\u7279\u5fb5\uff0c\u5229\u7528\u4e0d\u540c\u7684\u5206\u6bb5\u7279\u5fb5\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5f71\u50cf\u7279\u5fb5\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5229\u7528 Detectron\uff08\u7531 Girshick \u7b49\u4eba\u65bc 2018 \u5e74\u63d0\u51fa\uff09\u7684\u73fe\u6210\u5075\u6e2c\u5668\u4f86\u7372\u53d6\u5f71\u50cf\u7279\u5fb5\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u6bcf\u500b\u5f71\u50cf\u4f7f\u7528 144 \u500b\u63d0\u6848\u4f86\u63d0\u4f9b\u7279\u5fb5\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5c0f\u7d50\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"VisualBERT \u986f\u793a\u51fa\u512a\u8d8a\u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5176\u4e2d\uff0cPhBERT w/o Early Fusion \u548c VisualBERT w/o COCO \u9810\u8a13\u7df4\u5728\u6548\u80fd\u4e0a\u660e\u986f\u8d85\u8d8a\u4e86\u4e4b\u524d\u7684\u9818\u5148\u6a21\u578b MaxEnt\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5b8c\u6574\u7684 VisualBERT \u66f4\u9032\u4e00\u6b65\u64f4\u5927\u4e86\u5176\u8207\u5176\u4ed6\u6a21\u578b\u4e4b\u9593\u7684\u6027\u80fd\u5dee\u8ddd\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.strong,{children:"FLICKR30K"})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u4efb\u52d9\u63cf\u8ff0\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Flickr30K \u8cc7\u6599\u96c6\u7684\u4e3b\u8981\u76ee\u6a19\u662f\u6aa2\u9a57\u7cfb\u7d71\u5c07\u5b57\u5e55\u4e2d\u7684\u77ed\u8a9e\u5b9a\u4f4d\u5230\u5716\u50cf\u7684\u7279\u5b9a\u7269\u4ef6\u5340\u57df\u7684\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u7d66\u5b9a\u53e5\u5b50\u7684\u4e00\u90e8\u5206\u6216\u7247\u6bb5\uff0c\u7cfb\u7d71\u9700\u8981\u9078\u64c7\u5c0d\u61c9\u7684\u5716\u50cf\u7269\u4ef6\u5340\u57df\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u8cc7\u6599\u96c6\u5305\u542b\u4e86 30k \u500b\u5f71\u50cf\u4ee5\u53ca\u8fd1 250k \u7684\u8a3b\u91cb\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u6a21\u578b\u914d\u7f6e\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u57fa\u65bc BAN \u7684\u8a2d\u5b9a\uff08\u7531 Kim et al. \u5728 2018 \u5e74\u63d0\u51fa\uff09\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5716\u50cf\u7279\u5fb5\u4f7f\u7528\u5728 Visual Genome \u4e0a\u9810\u5148\u8a13\u7df4\u904e\u7684 Faster R-CNN \u4f86\u7372\u5f97\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5fae\u8abf\u6642\uff0c\u52a0\u5165\u4e86\u984d\u5916\u7684\u6ce8\u610f\u529b\u5340\u584a\uff0c\u4e26\u4f7f\u7528\u6ce8\u610f\u529b\u982d\u7684\u5e73\u5747\u6b0a\u91cd\u4f86\u9810\u6e2c\u7269\u4ef6\u6846\u548c\u77ed\u8a9e\u4e4b\u9593\u7684\u5c0d\u9f4a\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u7cfb\u7d71\u9810\u6e2c\u6642\uff0c\u6703\u9078\u64c7\u77ed\u8a9e\u4e2d\u6700\u5f8c\u4e00\u500b\u5b50\u8a5e\u4e2d\u88ab\u95dc\u6ce8\u6700\u591a\u7684\u6846\u4f5c\u70ba\u7d50\u679c\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5c0f\u7d50\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"VisualBERT \u5728\u6b64\u4efb\u52d9\u4e0a\u7684\u8868\u73fe\u8d85\u8d8a\u4e86\u76ee\u524d\u7684\u9818\u5148\u6a21\u578b BAN\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u6709\u8da3\u7684\u662f\uff0c\u4e0d\u4f7f\u7528\u65e9\u671f\u878d\u5408\u7684\u6a21\u578b\u8207\u5b8c\u6574\u7684 VisualBERT \u5728\u6027\u80fd\u4e0a\u6c92\u6709\u986f\u8457\u5dee\u7570\uff0c\u9019\u6697\u793a\u5c0d\u65bc\u6b64\u4efb\u52d9\uff0c\u8f03\u7c21\u55ae\u6216\u6dfa\u5c64\u7684\u6a21\u578b\u7d50\u69cb\u53ef\u80fd\u5df2\u8db3\u5920\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"\u5728\u9019\u6a21\u578b\u8a2d\u8a08\u4e2d\u8ab0\u6700\u91cd\u8981",children:"\u5728\u9019\u6a21\u578b\u8a2d\u8a08\u4e2d\uff0c\u8ab0\u6700\u91cd\u8981\uff1f"}),"\n",(0,s.jsx)(l.p,{children:"\u4f5c\u8005\u63a2\u8a0e\u5728 VisualBERT \u6a21\u578b\u4e2d\uff0c\u54ea\u4e9b\u5143\u4ef6\u6216\u8a2d\u8a08\u9078\u64c7\u5c0d\u6027\u80fd\u6700\u5177\u8ca2\u737b\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u4ed6\u5011\u9078\u64c7\u4e86\u4ee5\u4e0b\u56db\u500b\u6838\u5fc3\u5143\u4ef6/\u7b56\u7565\u9032\u884c\u6d88\u878d\u7814\u7a76\uff1a"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsx)(l.li,{children:"\u8207\u4efb\u52d9\u7121\u95dc\u7684\u9810\u8a13\u7df4\uff08C1\uff09\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u65e9\u671f\u878d\u5408\uff0c\u5373\u5716\u50cf\u548c\u6587\u5b57\u7279\u5fb5\u4e4b\u9593\u65e9\u671f\u7684\u4e92\u52d5\uff08C2\uff09\u3002"}),"\n",(0,s.jsx)(l.li,{children:"BERT \u7684\u521d\u59cb\u5316\u7b56\u7565\uff08C3\uff09\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u53e5\u5b50-\u5f71\u50cf\u7684\u9810\u6e2c\u76ee\u6a19\uff08C4\uff09\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u5be6\u9a57\u7d50\u679c\u986f\u793a\uff1a"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsx)(l.li,{children:"\u8207\u4efb\u52d9\u7121\u95dc\u7684\u9810\u8a13\u7df4\uff08C1\uff09\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u7279\u5225\u662f\u4f7f\u7528\u914d\u5c0d\u7684\u8996\u89ba\u548c\u8a9e\u8a00\u8cc7\u6599\u9032\u884c\u9810\u8a13\u7df4\u5c0d\u6a21\u578b\u7684\u6027\u80fd\u6709\u986f\u8457\u7684\u63d0\u5347\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u65e9\u671f\u878d\u5408\uff08C2\uff09\u4e5f\u8b49\u660e\u662f\u91cd\u8981\u7684\u3002\u8b93\u5716\u50cf\u548c\u6587\u5b57\u7279\u5fb5\u5728\u65e9\u671f\u5c31\u9032\u884c\u4e92\u52d5\uff0c\u53ef\u4ee5\u589e\u5f37\u8996\u89ba\u548c\u8a9e\u8a00\u4e4b\u9593\u5728\u591a\u500b\u4e92\u52d5\u5c64\u4e2d\u7684\u76f8\u4e92\u4f5c\u7528\u3002"}),"\n",(0,s.jsx)(l.li,{children:"BERT \u7684\u521d\u59cb\u5316\u7b56\u7565\uff08C3\uff09\u4e5f\u6709\u4e00\u5b9a\u7684\u91cd\u8981\u6027\u3002\u96d6\u7136\u6a21\u578b\u5728\u6c92\u6709 BERT \u9810\u8a13\u7df4\u6b0a\u91cd\u7684\u60c5\u6cc1\u4e0b\u6027\u80fd\u4e0b\u964d\uff0c\u4f46\u9019\u7a2e\u4e0b\u964d\u4e0d\u5982\u9810\u671f\u7684\u90a3\u9ebc\u660e\u986f\uff0c\u8a8d\u70ba\u6a21\u578b\u5728 COCO \u9810\u8a13\u7df4\u671f\u9593\u4e5f\u5b78\u5230\u4e86\u5f88\u591a\u6709\u95dc\u7d2e\u6839\u8a9e\u8a00\u7684\u77e5\u8b58\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u53e5\u5b50-\u5f71\u50cf\u7684\u9810\u6e2c\u76ee\u6a19\uff08C4\uff09\u6709\u4e00\u5b9a\u7684\u5f71\u97ff\uff0c\u4f46\u76f8\u5c0d\u65bc\u5176\u4ed6\u5143\u4ef6\u4f86\u8aaa\uff0c\u5b83\u7684\u5f71\u97ff\u8f03\u5c0f\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.admonition,{type:"tip",children:(0,s.jsx)(l.p,{children:"\u9019\u500b\u7d50\u8ad6\u5728\u4e4b\u5f8c CLIP \u7684\u5be6\u9a57\u4e2d\u9a57\u8b49\u4e86\u7b2c\u4e00\u548c\u7b2c\u4e8c\u500b\u7d50\u8ad6\uff0c\u53ea\u8981\u8db3\u5920\u591a\u7684\u8cc7\u6599\u5c31\u80fd\u5e79\u5927\u4e8b\u3002\u81f3\u65bc\u7b2c\u4e09\u9ede\u7684\u7d50\u8ad6\uff0c\u6211\u8a8d\u70ba\u9019\u88e1\u53ef\u4ee5\u5617\u8a66\u63a2\u8a0e BERT \u7684\u9810\u8a13\u7df4\u8cc7\u6599\u548c COCO \u4e4b\u9593\u662f\u5426\u6709\u4e00\u5b9a\u7684\u91cd\u758a\u6027\uff0c\u6700\u5f8c\u4e00\u9ede\u5247\u662f\u4f9d\u7167\u6211\u81ea\u5df1\u7684\u7d93\u9a57\u4f86\u770b\uff0c\u9019\u500b\u4efb\u52d9\u53ef\u80fd\u5c0d\u6a21\u578b\u4f86\u8aaa\u592a\u7c21\u55ae\uff0c\u6c92\u6709\u5c0d\u6a21\u578b\u7522\u751f\u61c9\u6709\u7684\u76e3\u7763\u6548\u679c\u3002"})}),"\n",(0,s.jsx)(l.h3,{id:"\u6a21\u578b\u771f\u7684\u6709\u770b\u5230\u5c0d\u7684\u5730\u65b9\u55ce",children:"\u6a21\u578b\u771f\u7684\u6709\u770b\u5230\u5c0d\u7684\u5730\u65b9\u55ce\uff1f"}),"\n",(0,s.jsx)(l.p,{children:"\u4f5c\u8005\u63a2\u8a0e VisualBERT \u6a21\u578b\u4e2d\u7684\u6ce8\u610f\u529b\u982d\u662f\u5426\u80fd\u5920\u6b63\u78ba\u5730\u5c07\u53e5\u5b50\u4e2d\u7684\u5be6\u9ad4\u5c0d\u61c9\u5230\u5716\u50cf\u4e2d\u7684\u76f8\u61c9\u7269\u4ef6\u5340\u57df\uff0c\u6b64\u5916\uff0c\u4f5c\u8005\u60f3\u4e86\u89e3 VisualBERT \u6a21\u578b\u7684\u6ce8\u610f\u529b\u982d\u662f\u5426\u80fd\u5920\u8b58\u5225\u53e5\u5b50\u4e2d\u7684\u53e5\u6cd5\u95dc\u4fc2\uff0c\u7279\u5225\u662f\u7576\u9019\u4e9b\u53e5\u6cd5\u95dc\u4fc2\u8207\u5716\u50cf\u5340\u57df\u4e4b\u9593\u5b58\u5728\u660e\u78ba\u7684\u5c0d\u61c9\u95dc\u4fc2\u6642\uff1f"}),"\n",(0,s.jsxs)(l.ol,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u5be6\u9ad4\u8fa8\u8b58\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"VisualBERT \u7684\u8a31\u591a\u6ce8\u610f\u529b\u982d\u5177\u6709\u5f88\u9ad8\u7684\u6e96\u78ba\u6027\uff0c\u4e14\u6c92\u6709\u53d7\u5230\u5be6\u9ad4\u8fa8\u8b58\u7684\u76f4\u63a5\u76e3\u7763\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u6a21\u578b\u7684\u8f03\u9ad8\u5c64\u5728\u9032\u884c\u8fa8\u8b58\u6642\u7684\u7cbe\u5ea6\u4f3c\u4e4e\u6709\u6240\u63d0\u9ad8\uff0c\u9019\u610f\u5473\u8457\u5728\u6a21\u578b\u7684\u521d\u7d1a\u5c64\u53ef\u80fd\u5c0d\u65bc\u5982\u4f55\u9032\u884c\u5be6\u9ad4\u8fa8\u8b58\u9084\u4e0d\u90a3\u9ebc\u78ba\u5b9a\uff0c\u4f46\u5728\u5f8c\u7e8c\u5c64\u4e2d\u6a21\u578b\u8b8a\u5f97\u8d8a\u4f86\u8d8a\u78ba\u5b9a\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsx)(l.p,{children:"\u53e5\u6cd5\u57fa\u790e\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"VisualBERT \u7684\u8a31\u591a\u6ce8\u610f\u529b\u982d\u4f3c\u4e4e\u53ef\u4ee5\u6355\u6349\u5230\u53e5\u6cd5\u95dc\u4fc2\uff0c\u5c24\u5176\u662f\u52d5\u8a5e\u8207\u5176\u5c0d\u61c9\u7684\u53c3\u6578\u4e4b\u9593\u7684\u95dc\u806f\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5c0d\u65bc\u5404\u7a2e\u4e0d\u540c\u7684\u53e5\u6cd5\u4f9d\u8cf4\u95dc\u4fc2\uff0c\u4f5c\u8005\u767c\u73fe VisualBERT \u4e2d\u81f3\u5c11\u6709\u4e00\u500b\u6ce8\u610f\u529b\u982d\u7684\u6027\u80fd\u662f\u660e\u986f\u512a\u65bc\u57fa\u65bc\u731c\u6e2c\u7684\u57fa\u7dda\u7684\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u9019\u610f\u5473\u8457 VisualBERT \u5728\u7121\u9700\u660e\u78ba\u53e5\u6cd5\u76e3\u7763\u7684\u60c5\u6cc1\u4e0b\uff0c\u80fd\u5920\u96b1\u5f0f\u5730\u8b58\u5225\u53e5\u6cd5\u7d50\u69cb\u4e26\u5c0d\u5176\u9032\u884c\u5c0d\u61c9\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"\u6ce8\u610f\u529b\u5206\u5e03\u6a23\u614b\u5982\u4f55",children:"\u6ce8\u610f\u529b\u5206\u5e03\u6a23\u614b\u5982\u4f55\uff1f"}),"\n",(0,s.jsx)(l.p,{children:"\u4f5c\u8005\u63a2\u8a0e VisualBERT \u5982\u4f55\u5728\u591a\u500b Transformer \u5c64\u4e2d\u9010\u6b65\u6539\u8b8a\u5176\u6ce8\u610f\u529b\u5206\u5e03\uff0c\u4ee5\u66f4\u7cbe\u78ba\u5730\u5c0d\u9f4a\u6587\u5b57\u548c\u5716\u50cf\u4e2d\u7684\u5be6\u9ad4\u6216\u6982\u5ff5\u3002"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u6ce8\u610f\u529b\u7684\u7d30\u5316\uff1aVisualBERT \u5728\u5176\u9023\u7e8c\u7684 Transformer \u5c64\u4e2d\u9010\u6b65\u7d30\u5316\u6587\u5b57\u548c\u5716\u50cf\u4e4b\u9593\u7684\u5c0d\u9f4a\u3002\u4f8b\u5982\uff1a\u53c3\u8003\u4e0a\u5716\u7684\u5de6\u4e0b\u89d2\u3002\u4e00\u958b\u59cb\u300c\u4e08\u592b\u300d\u548c\u300c\u5973\u4eba\u300d\u5169\u8a5e\u53ef\u80fd\u90fd\u5f37\u70c8\u5730\u5c08\u6ce8\u65bc\u5716\u50cf\u4e2d\u7684\u300c\u5973\u4eba\u300d\u5340\u57df\uff0c\u4f46\u5728\u6a21\u578b\u7684\u5f8c\u7e8c\u5c64\u4e2d\uff0c\u9019\u7a2e\u5c0d\u9f4a\u8b8a\u5f97\u66f4\u52a0\u660e\u78ba\u548c\u6b63\u78ba\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u53e5\u6cd5\u5c0d\u9f4a\uff1aVisualBERT \u4e0d\u50c5\u53ef\u4ee5\u6839\u64da\u8a9e\u7fa9\u5c0d\u9f4a\u5be6\u9ad4\uff0c\u9084\u53ef\u4ee5\u6839\u64da\u53e5\u6cd5\u5c0d\u9f4a\u5b83\u5011\u3002\u4f8b\u5982\uff1a\u5728\u5716\u7247\u4e2d\uff0c\u300c\u6232\u5f04\u300d\u9019\u500b\u8a5e\u540c\u6642\u5c08\u6ce8\u65bc\u7537\u4eba\u548c\u5973\u4eba\uff0c\u800c\u300c\u88ab\u300d\u9019\u500b\u8a5e\u53ea\u5c08\u6ce8\u65bc\u7537\u4eba\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5171\u6307\u89e3\u6c7a\uff1aVisualBERT \u4f3c\u4e4e\u9084\u80fd\u5920\u89e3\u6c7a\u8a9e\u8a00\u4e2d\u7684\u5171\u6307\u554f\u984c\uff0c\u4f8b\u5982\uff1a\u300c\u5979\u300d\u9019\u500b\u8a5e\u5728\u5716\u50cf\u4e2d\u88ab\u6b63\u78ba\u5730\u5c0d\u9f4a\u5230\u300c\u5973\u4eba\u300d\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(l.p,{children:"VisualBERT \u5728\u591a\u7a2e\u8996\u89ba\u8a9e\u8a00\u4efb\u52d9\u4e0a\u90fd\u5c55\u73fe\u4e86\u5353\u8d8a\u7684\u8868\u73fe\u3002\u9019\u4e9b\u6210\u679c\u4e0d\u50c5\u8b49\u660e\u4e86\u6a21\u578b\u7684\u6548\u80fd\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u900f\u904e\u5176\u5167\u5efa\u7684\u6ce8\u610f\u529b\u6a5f\u5236\uff0cVisualBERT \u63d0\u4f9b\u4e86\u4e00\u500b\u53ef\u89e3\u91cb\u548c\u76f4\u89c0\u7684\u65b9\u5f0f\u4f86\u6355\u7372\u548c\u7406\u89e3\u8cc7\u8a0a\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u4f46\u6709\u4e00\u4ef6\u4e8b\u60c5\uff0c\u4e0d\u8ad6\u5982\u4f55\u90fd\u7121\u6cd5\u8ff4\u907f\uff1a"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u7576\u4eba\u5011\u5617\u8a66\u7d50\u5408\u7269\u4ef6\u5075\u6e2c\u7684\u6a21\u578b\u6642\uff0c\u6a21\u578b\u7684\u67b6\u69cb\u7acb\u523b\u8b8a\u5f97\u975e\u5e38\u8907\u96dc\u4e14\u96e3\u4ee5\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u9019\u7a2e\u904e\u5ea6\u8907\u96dc\u7684\u8a2d\u8a08\u53ef\u80fd\u6703\u6291\u5236\u6a21\u578b\u5728\u5be6\u969b\u61c9\u7528\u4e2d\u7684\u6f5b\u529b\uff0c\u4e26\u589e\u52a0\u4e86\u90e8\u7f72\u548c\u8abf\u6574\u7684\u56f0\u96e3\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u56e0\u6b64\uff0c\u5c07\u6b64\u67b6\u69cb\u9032\u884c\u512a\u5316\u548c\u7c21\u5316\u7d55\u5c0d\u61c9\u8a72\u88ab\u8996\u70ba\u5f8c\u7e8c\u7684\u91cd\u8981\u7814\u7a76\u65b9\u5411\u3002"}),"\n",(0,s.jsx)(l.p,{children:"\u7576\u7136\uff0c\u9019\u9805\u5de5\u4f5c\u9084\u6709\u8a31\u591a\u9700\u8981\u9032\u4e00\u6b65\u63a2\u7d22\u548c\u91d0\u6e05\u7684\u554f\u984c\u3002\u4f8b\u5982\uff1a\u5c0d\u65bc\u7d14\u7cb9\u7684\u5f71\u50cf\u4efb\u52d9\uff0c\u50cf\u662f\u5834\u666f\u5716\u89e3\u6790\u548c\u60c5\u5883\u8fa8\u8b58\uff0cVisualBERT \u662f\u5426\u4e5f\u80fd\u5c55\u73fe\u76f8\u540c\u7684\u6548\u80fd\uff1f\u6b64\u5916\uff0c\u662f\u5426\u80fd\u5920\u9032\u4e00\u6b65\u64f4\u5145\u5176\u80fd\u529b\uff0c\u4f7f\u4e4b\u5728\u66f4\u5927\u7684\u5b57\u5e55\u8cc7\u6599\u96c6\uff0c\u4f8b\u5982\uff1aVisual Genome \u548c Conceptual Caption \u4e0a\u9032\u884c\u9810\u8a13\u7df4\uff1f"}),"\n",(0,s.jsx)(l.p,{children:"\u5728\u672c\u7814\u7a76\u968e\u6bb5\uff0c\u5118\u7ba1\u6709\u8a31\u591a\u503c\u5f97\u9032\u4e00\u6b65\u63a2\u8a0e\u7684\u554f\u984c\uff0c\u9019\u9805\u7814\u7a76\u70ba\u5f8c\u7e8c\u7684\u7814\u7a76\u8005\u6307\u660e\u4e86\u5f8c\u7e8c\u7684\u65b9\u5411\u3002"})]})}function u(n={}){const{wrapper:l}={...(0,e.R)(),...n.components};return l?(0,s.jsx)(l,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},26170:(n,l,i)=>{i.d(l,{A:()=>s});const s=i.p+"assets/images/arch_visual_bert-8032691edcd02251fc604c7557f2ea4e.jpg"},28453:(n,l,i)=>{i.d(l,{R:()=>d,x:()=>c});var s=i(96540);const e={},r=s.createContext(e);function d(n){const l=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(l):{...l,...n}}),[l,n])}function c(n){let l;return l=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:d(n.components),s.createElement(r.Provider,{value:l},n.children)}}}]);