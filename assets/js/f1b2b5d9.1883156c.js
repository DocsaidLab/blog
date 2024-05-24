"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4602],{22746:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var d=s(74848),r=s(28453);const l={sidebar_position:5},i="GPT-2",h={id:"language-model/gpt_2/index",title:"GPT-2",description:"\u56db\u5341\u516b\u5c64\u89e3\u78bc\u5668",source:"@site/papers/language-model/gpt_2/index.md",sourceDirName:"language-model/gpt_2",slug:"/language-model/gpt_2/",permalink:"/papers/language-model/gpt_2/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"papersSidebar",previous:{title:"Adapter",permalink:"/papers/language-model/adapter/"}},t={},c=[{value:"\u56db\u5341\u516b\u5c64\u89e3\u78bc\u5668",id:"\u56db\u5341\u516b\u5c64\u89e3\u78bc\u5668",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u8106\u5f31\u6027",id:"\u8106\u5f31\u6027",level:3},{value:"\u72f9\u9698\u5c08\u5bb6\u7684\u5c40\u9650\u6027",id:"\u72f9\u9698\u5c08\u5bb6\u7684\u5c40\u9650\u6027",level:3},{value:"\u6cdb\u5316\u80fd\u529b\u4e0d\u8db3",id:"\u6cdb\u5316\u80fd\u529b\u4e0d\u8db3",level:3},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u6a21\u578b\u8a2d\u8a08",id:"\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u591a\u4efb\u52d9\u5b78\u7fd2",id:"\u591a\u4efb\u52d9\u5b78\u7fd2",level:3},{value:"\u591a\u6a23\u5316\u7684\u8cc7\u6599",id:"\u591a\u6a23\u5316\u7684\u8cc7\u6599",level:3},{value:"\u512a\u5316 BPE \u7de8\u78bc",id:"\u512a\u5316-bpe-\u7de8\u78bc",level:3},{value:"\u4f4d\u5143\u7d44 BPE\uff08Byte-Level BPE\uff09",id:"\u4f4d\u5143\u7d44-bpebyte-level-bpe",level:4},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u6a21\u578b\u5c3a\u5bf8",id:"\u6a21\u578b\u5c3a\u5bf8",level:3},{value:"Zero-shot",id:"zero-shot",level:3},{value:"\u5404\u985e\u5be6\u9a57",id:"\u5404\u985e\u5be6\u9a57",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function x(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"gpt-2",children:"GPT-2"}),"\n",(0,d.jsx)(n.h2,{id:"\u56db\u5341\u516b\u5c64\u89e3\u78bc\u5668",children:"\u56db\u5341\u516b\u5c64\u89e3\u78bc\u5668"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",children:(0,d.jsx)(n.strong,{children:"Language models are unsupervised multitask learners (2019.02)"})})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.p,{children:"\u7b2c\u4e00\u4ee3\u7684 GPT \u758a\u4e86\u5341\u4e8c\u5c64 Transformer \u89e3\u78bc\u5668\u3002"}),"\n",(0,d.jsx)(n.p,{children:"OpenAI \u89ba\u5f97\u9019\u6a23\u4e0d\u5920\uff0c\u65bc\u662f\u4ed6\u5011\u758a\u4e86\u56db\u5341\u516b\u5c64 Transformer \u89e3\u78bc\u5668\uff0c\u9019\u5c31\u662f GPT-2\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,d.jsx)(n.p,{children:"\u4f5c\u8005\u8a8d\u70ba\u73fe\u6709\u7684\u6a5f\u5668\u5b78\u7fd2\u7cfb\u7d71\u8868\u73fe\u51fa\u8272\uff0c\u4f46\u5176\u5be6\u5145\u6eff\u554f\u984c\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u9019\u7bc7\u6587\u7ae0\u4e2d\uff0c\u7c21\u8981\u7684\u8aaa\u660e\u4e86\u5e7e\u500b\u65b9\u5411\uff1a"}),"\n",(0,d.jsx)(n.h3,{id:"\u8106\u5f31\u6027",children:"\u8106\u5f31\u6027"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6a5f\u5668\u5b78\u7fd2\u7cfb\u7d71\u5728\u8cc7\u6599\u5206\u4f48\u548c\u4efb\u52d9\u898f\u7bc4\u7684\u8f15\u5fae\u8b8a\u5316\u65b9\u9762\u8868\u73fe\u51fa\u8106\u5f31\u6027\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u9019\u4e9b\u7cfb\u7d71\u5c0d\u65bc\u4e0d\u540c\u8f38\u5165\u7684\u591a\u6a23\u6027\u548c\u8b8a\u5316\u7f3a\u4e4f\u7a69\u5b9a\u6027\uff0c\u5c0e\u81f4\u4e0d\u7a69\u5b9a\u7684\u884c\u70ba\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u72f9\u9698\u5c08\u5bb6\u7684\u5c40\u9650\u6027",children:"\u72f9\u9698\u5c08\u5bb6\u7684\u5c40\u9650\u6027"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u7576\u524d\u7684\u6a5f\u5668\u5b78\u7fd2\u7cfb\u7d71\u66f4\u50cf\u662f\u72f9\u9698\u7684\u5c08\u5bb6\uff0c\u800c\u4e0d\u662f\u901a\u7528\u578b\u7684\u7cfb\u7d71\uff0c\u9650\u5236\u4e86\u5176\u61c9\u7528\u7bc4\u570d\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u9019\u4e9b\u7cfb\u7d71\u4f9d\u8cf4\u65bc\u70ba\u6bcf\u500b\u7279\u5b9a\u4efb\u52d9\u624b\u52d5\u5efa\u7acb\u548c\u6a19\u8a18\u8a13\u7df4\u8cc7\u6599\u96c6\uff0c\u904e\u7a0b\u7e41\u7463\u4e14\u4e0d\u5177\u901a\u7528\u6027\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6cdb\u5316\u80fd\u529b\u4e0d\u8db3",children:"\u6cdb\u5316\u80fd\u529b\u4e0d\u8db3"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u55ae\u57df\u8cc7\u6599\u96c6\u4e0a\u55ae\u4efb\u52d9\u8a13\u7df4\u7684\u666e\u904d\u5b58\u5728\u5c0e\u81f4\u4e86\u7cfb\u7d71\u7f3a\u4e4f\u6cdb\u5316\u80fd\u529b\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u70ba\u4e86\u5be6\u73fe\u7a69\u5065\u7684\u7cfb\u7d71\uff0c\u53ef\u80fd\u9700\u8981\u5728\u66f4\u5ee3\u6cdb\u7684\u9818\u57df\u548c\u591a\u4efb\u52d9\u4e0a\u9032\u884c\u57f9\u8a13\u548c\u6e2c\u91cf\u6548\u80fd\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,d.jsx)(n.p,{children:"\u9019\u7bc7\u8ad6\u6587\u6c92\u6709\u63d0\u51fa\u65b0\u7684\u6a21\u578b\u67b6\u69cb\uff0c\u800c\u662f\u5c07\u73fe\u6709\u7684 GPT-1 \u6a21\u578b\u9032\u884c\u4e86\u64f4\u5c55\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u6a21\u578b\u8a2d\u8a08",children:"\u6a21\u578b\u8a2d\u8a08"}),"\n",(0,d.jsx)(n.p,{children:"\u9996\u5148\uff0c\u5c07 LayerNorm \u79fb\u5230\u4e86\u6bcf\u500b\u5b50\u584a\u7684\u8f38\u5165\u8655\uff0c\u9019\u8207\u524d\u6fc0\u6d3b\u6b98\u5dee\u7db2\u7d61\u985e\u4f3c\u3002\u6b64\u5916\uff0c\u4f5c\u8005\u5728\u6700\u5f8c\u4e00\u500b\u81ea\u6ce8\u610f\u529b\u584a\uff08self-attention block\uff09\u4e4b\u5f8c\u6dfb\u52a0\u4e86\u4e00\u500b\u984d\u5916\u7684\u5c64\u6b78\u4e00\u5316\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4f5c\u8005\u4f7f\u7528\u4e86\u4e00\u7a2e\u4fee\u6539\u904e\u7684\u521d\u59cb\u5316\u65b9\u6cd5\uff0c\u8003\u616e\u5230\u6a21\u578b\u6df1\u5ea6\u589e\u52a0\u6642\u6b98\u5dee\u8def\u5f91\u4e0a\u7684\u7d2f\u7a4d\u3002\u5728\u521d\u59cb\u5316\u6642\u5c07\u6b98\u5dee\u5c64\u7684\u6b0a\u91cd\u6309 1/\u221aN \u7684\u56e0\u5b50\u9032\u884c\u7e2e\u653e\uff0c\u9019\u88e1 N \u662f\u6b98\u5dee\u5c64\u7684\u6578\u91cf\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u70ba\u4e86\u589e\u5f37\u6a21\u578b\u7684\u80fd\u529b\uff0c\u4f5c\u8005\u5c07\u8a5e\u5f59\u8868\u64f4\u5c55\u5230 50,257\u3002\u4e0a\u4e0b\u6587\u5927\u5c0f\u4e5f\u5f9e 512 \u589e\u52a0\u5230 1024 \u500b Tokens\uff0c\u4e26\u4e14\u4f7f\u7528\u66f4\u5927\u7684 Batch size \u70ba 512\u3002"}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsx)(n.p,{children:"\u5982\u679c\u4f60\u6709\u7d93\u9a57\uff0c\u5c31\u6703\u77e5\u9053\u5728\u9019\u7a2e\u8a2d\u8a08\u4e0b\uff0cBatch size \u70ba 512 \u771f\u7684\u662f\u500b\u5f88\u5927\u7684\u6578\u5b57\u3002"})}),"\n",(0,d.jsx)(n.h3,{id:"\u591a\u4efb\u52d9\u5b78\u7fd2",children:"\u591a\u4efb\u52d9\u5b78\u7fd2"}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u500b\u901a\u7528\u7cfb\u7d71\u61c9\u8a72\u80fd\u5920\u57f7\u884c\u8a31\u591a\u4e0d\u540c\u7684\u4efb\u52d9\u3002\u9019\u610f\u5473\u8457\u7cfb\u7d71\u9700\u8981\u5c0d P(\u8f38\u51fa|\u8f38\u5165\uff0c\u4efb\u52d9) \u9032\u884c\u5efa\u6a21\uff0c\u800c\u4e0d\u50c5\u50c5\u662f\u5c0d\u55ae\u4e00\u4efb\u52d9\u7684\u689d\u4ef6\u5206\u4f48 P(\u8f38\u51fa|\u8f38\u5165) \u9032\u884c\u5efa\u6a21\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u9019\u88e1\uff0c\u4f5c\u8005\u63d0\u51fa\u7684\u5be6\u73fe\u65b9\u5f0f\u70ba\uff1a\u5c07\u8f38\u5165\u548c\u8f38\u51fa\u5168\u90e8\u6307\u5b9a\u70ba\u7b26\u865f\u5e8f\u5217\uff0c\u4e26\u4f7f\u7528\u8a9e\u8a00\u5efa\u6a21\u4f86\u8a13\u7df4\u6a21\u578b\u3002\u4f8b\u5982\uff0c\u7ffb\u8b6f\u8a13\u7df4\u7bc4\u4f8b\u53ef\u4ee5\u8868\u793a\u70ba\uff08\u7ffb\u8b6f\u70ba\u6cd5\u6587\u3001\u82f1\u6587\u6587\u5b57\u3001\u6cd5\u6587\u6587\u5b57\uff09\uff0c\u800c\u95b1\u8b80\u7406\u89e3\u8a13\u7df4\u7bc4\u4f8b\u53ef\u4ee5\u8868\u793a\u70ba\uff08\u56de\u7b54\u554f\u984c\u3001\u6587\u4ef6\u3001\u554f\u984c\u3001\u7b54\u6848\uff09\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u7e3d\u4e4b\uff0c\u5c31\u662f\u7528\u6587\u5b57\u8aaa\u660e\uff0c\u4f86\u5340\u5206\u4e0d\u540c\u7684\u4efb\u52d9\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u591a\u6a23\u5316\u7684\u8cc7\u6599",children:"\u591a\u6a23\u5316\u7684\u8cc7\u6599"}),"\n",(0,d.jsx)(n.p,{children:"\u5927\u591a\u6578\u5148\u524d\u7684\u8a9e\u8a00\u6a21\u578b\u8a13\u7df4\u5de5\u4f5c\u96c6\u4e2d\u5728\u55ae\u4e00\u6587\u672c\u57df\uff0c\u4f8b\u5982\u65b0\u805e\u6587\u7ae0\u3001\u7dad\u57fa\u767e\u79d1\u6216\u5c0f\u8aaa\u66f8\u7c4d\u3002\u4f5c\u8005\u63d0\u51fa\u7684\u65b9\u6cd5\u5247\u9f13\u52f5\u5efa\u7acb\u76e1\u53ef\u80fd\u5927\u548c\u591a\u6a23\u5316\u7684\u8cc7\u6599\u96c6\uff0c\u4ee5\u4fbf\u6db5\u84cb\u66f4\u591a\u9818\u57df\u548c\u4e0a\u4e0b\u6587\u7684\u81ea\u7136\u8a9e\u8a00\u6f14\u793a\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u70ba\u6b64\uff0c\u4f5c\u8005\u9078\u64c7\u4e86\u7db2\u9801\u6293\u53d6\uff0c\u7279\u5225\u662f\u4f7f\u7528\u4e86 Common Crawl \u8cc7\u6599\u96c6\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4f46\u662f\u7528\u4e86\u4e4b\u5f8c\uff0c\u767c\u73fe Common Crawl \u5b58\u5728\u56b4\u91cd\u7684\u8cc7\u6599\u54c1\u8cea\u554f\u984c..."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u89e3\u6c7a\u65b9\u6848"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u65b0\u7684\u7db2\u9801\u6293\u53d6"}),"\uff1a\u70ba\u4e86\u63d0\u9ad8\u8cc7\u6599\u54c1\u8cea\uff0c\u4f5c\u8005\u6293\u53d6\u4f86\u81ea Reddit \u5e73\u53f0\u7684\u6240\u6709\u51fa\u7ad9\u93c8\u63a5\uff0c\u9019\u4e9b\u93c8\u63a5\u81f3\u5c11\u300c\u9700\u8981\u7372\u5f97\u4e86 3 \u500b\u5176\u4ed6\u7528\u6236\u7684\u8a8d\u540c\u300d\uff0c\u624d\u6703\u88ab\u8a8d\u70ba\u662f\u53ef\u4ee5\u4f7f\u7528\u7684\u4e7e\u6de8\u8cc7\u6599\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u8cc7\u6599\u96c6 WebText"}),"\uff1a\u7522\u751f\u7684\u8cc7\u6599\u96c6 WebText \u5305\u542b\u9019 4500 \u842c\u500b\u9023\u7d50\u7684\u6587\u5b57\u5b50\u96c6\u3002WebText \u521d\u6b65\u7248\u672c\u4e0d\u5305\u62ec 2017 \u5e74 12 \u6708\u4e4b\u5f8c\u5275\u5efa\u7684\u93c8\u63a5\uff0c\u7d93\u904e\u91cd\u8907\u6578\u64da\u522a\u9664\u548c\u555f\u767c\u5f0f\u6e05\u7406\u5f8c\uff0c\u5305\u542b\u7565\u8d85\u904e 800 \u842c\u500b\u6587\u6a94\uff0c\u5171\u8a08 40 GB \u6587\u5b57\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u7dad\u57fa\u767e\u79d1\u6587\u6a94\u6392\u9664"}),"\uff1a\u5f9e WebText \u4e2d\u522a\u9664\u4e86\u6240\u6709\u7dad\u57fa\u767e\u79d1\u6587\u6a94\uff0c\u907f\u514d\u8a13\u7df4\u8cc7\u6599\u8207\u6e2c\u8a66\u8a55\u4f30\u4efb\u52d9\u91cd\u758a\uff0c\u5f9e\u800c\u4f7f\u5206\u6790\u66f4\u52a0\u6e96\u78ba\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.admonition,{type:"tip",children:[(0,d.jsx)(n.p,{children:"\u9019\u8868\u793a\u5728 2017 \u5e74\u4ee5\u524d\u7684\u8cc7\u6599\u624d\u662f\u6c92\u6709\u7d93\u904e\u8a9e\u8a00\u6a21\u578b\u300c\u6c61\u67d3\u300d\u7684\u771f\u5be6\u4eba\u985e\u8a9e\u8a00\u3002\u5728\u9019\u4e4b\u5f8c\uff0c\u4eba\u5011\u5f88\u96e3\u5224\u65b7\u4e00\u7bc7\u6587\u7ae0\u6216\u662f\u4e00\u6bb5\u6587\u5b57\u5230\u5e95\u662f\u4eba\u5beb\u7684\u9084\u662f\u6a5f\u5668\u5beb\u7684\u3002"}),(0,d.jsx)(n.p,{children:"\u9019\u5c0d\u4e4b\u5f8c\u7684\u6a21\u578b\u8a13\u7df4\u7522\u751f\u5f88\u5927\u7684\u6311\u6230\uff0c\u56e0\u70ba\u7576\u6a21\u578b\u5b78\u7fd2\u81ea\u5df1\u7522\u751f\u7684\u8cc7\u6599\u6642\uff0c\u4efb\u4f55\u932f\u8aa4\u6216\u504f\u5dee\u90fd\u6703\u88ab\u653e\u5927\u3002\u96a8\u8457\u8fed\u4ee3\u6b21\u6578\u589e\u52a0\uff0c\u9019\u4e9b\u932f\u8aa4\u6703\u7d2f\u7a4d\uff0c\u5c0e\u81f4\u6a21\u578b\u6027\u80fd\u9010\u6f38\u60e1\u5316\uff0c\u76f4\u5230\u6700\u7d42\u5d29\u6f70\u3002"})]}),"\n",(0,d.jsx)(n.h3,{id:"\u512a\u5316-bpe-\u7de8\u78bc",children:"\u512a\u5316 BPE \u7de8\u78bc"}),"\n",(0,d.jsx)(n.p,{children:"\u4f4d\u5143\u7d44\u7d1a BPE \u7684\u512a\u52e2\u5728\u65bc\u5176\u9748\u6d3b\u6027\u548c\u901a\u7528\u6027\uff0c\u56e0\u70ba\u5b83\u53ef\u4ee5\u5c07\u4efb\u4f55\u5b57\u7b26\u5206\u89e3\u70ba\u4f4d\u5143\u7d44\u5e8f\u5217\u3002\u7136\u800c\uff0c\u76f4\u63a5\u5c07 BPE \u61c9\u7528\u65bc\u4f4d\u5143\u7d44\u5e8f\u5217\u4e0a\uff0c\u53ef\u80fd\u6703\u56e0\u70ba BPE \u4f7f\u7528\u8caa\u5a6a\u7684\u983b\u7387\u7b97\u6cd5\u4f86\u69cb\u5efa\u8a5e\u5f59\uff0c\u5c0e\u81f4\u6b21\u512a\u7684\u5408\u4f75\u7d50\u679c\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u4f5c\u8005\u63d0\u51fa\u4e86\u4e00\u7a2e\u6539\u9032\u7684\u65b9\u6cd5\uff1a\u5728\u4f4d\u5143\u7d44\u5e8f\u5217\u4e2d\uff0c\u963b\u6b62\u4e0d\u540c\u5b57\u7b26\u985e\u5225\u4e4b\u9593\u7684\u5408\u4f75\uff0c\u50c5\u5c0d\u7a7a\u683c\u4f5c\u70ba\u4f8b\u5916\u3002\u9019\u6a23\u53ef\u4ee5\u986f\u8457\u63d0\u9ad8\u58d3\u7e2e\u6548\u7387\uff0c\u540c\u6642\u50c5\u5728\u591a\u500b\u8a5e\u5f59\u6a19\u8a18\u4e2d\u6dfb\u52a0\u6700\u5c11\u7684\u55ae\u5b57\u788e\u7247\u3002"}),"\n",(0,d.jsxs)(n.admonition,{type:"tip",children:[(0,d.jsx)(n.p,{children:"\u9019\u53ef\u80fd\u50cf\u662f\u62fc\u62fc\u5716\u3002"}),(0,d.jsx)(n.p,{children:"\u666e\u901a\u7684 BPE \u5c31\u50cf\u662f\u4f60\u5148\u628a\u4e00\u4e9b\u7d93\u5e38\u51fa\u73fe\u7684\u62fc\u5716\u584a\u7d44\u5408\u8d77\u4f86\uff0c\u6bd4\u5982\u5929\u7a7a\u7684\u90e8\u5206\u3001\u8349\u5730\u7684\u90e8\u5206\uff0c\u7136\u5f8c\u628a\u9019\u4e9b\u7d44\u5408\u597d\u7684\u5927\u584a\u653e\u5230\u4e00\u8d77\u62fc\u3002\u9019\u6a23\u505a\u7684\u597d\u8655\u662f\uff0c\u4f60\u5f88\u5feb\u5c31\u80fd\u62fc\u51fa\u4e00\u5927\u7247\u5929\u7a7a\u6216\u4e00\u5927\u7247\u8349\u5730\uff0c\u6548\u7387\u5f88\u9ad8\u3002"}),(0,d.jsx)(n.p,{children:"\u4e0d\u904e\uff0c\u5982\u679c\u9019\u500b\u62fc\u5716\u7684\u5716\u6848\u975e\u5e38\u8907\u96dc\uff0c\u6709\u5f88\u591a\u7a2e\u4e0d\u540c\u7684\u5716\u6848\u7d44\u5408\uff08\u76f8\u7576\u65bc Unicode \u5b57\u7b26\uff09\uff0c\u4f60\u9700\u8981\u8a18\u4f4f\u6240\u6709\u9019\u4e9b\u5716\u6848\u7684\u7d44\u5408\u65b9\u5f0f\uff0c\u9019\u6a23\u4f60\u7684\u62fc\u5716\u584a\u5c31\u6703\u8b8a\u5f97\u975e\u5e38\u591a\uff0c\u7ba1\u7406\u8d77\u4f86\u5f88\u9ebb\u7169\u3002"}),(0,d.jsx)(n.h4,{id:"\u4f4d\u5143\u7d44-bpebyte-level-bpe",children:"\u4f4d\u5143\u7d44 BPE\uff08Byte-Level BPE\uff09"}),(0,d.jsx)(n.p,{children:"\u4f4d\u5143\u7d44 BPE \u7684\u65b9\u6cd5\u5c31\u50cf\u662f\u4f60\u4e0d\u7ba1\u9019\u4e9b\u5716\u6848\uff0c\u53ea\u95dc\u6ce8\u6bcf\u4e00\u584a\u62fc\u5716\u672c\u8eab\u3002\u4f60\u628a\u6bcf\u4e00\u584a\u62fc\u5716\u5206\u6210\u66f4\u5c0f\u7684\u55ae\u4f4d\uff0c\u53ef\u80fd\u662f\u6bcf\u4e00\u5c0f\u7247\u7684\u984f\u8272\u6216\u5f62\u72c0\u3002\u9019\u6a23\u505a\u7684\u597d\u8655\u662f\uff0c\u4f60\u53ea\u9700\u8981\u8a18\u4f4f\u9019\u4e9b\u57fa\u672c\u7684\u55ae\u4f4d\uff0c\u800c\u4e0d\u9700\u8981\u8a18\u4f4f\u6574\u500b\u5716\u6848\u7684\u7d44\u5408\u65b9\u5f0f\u3002\u4f60\u7684\u62fc\u5716\u584a\u6578\u91cf\u5927\u5927\u6e1b\u5c11\uff0c\u53ea\u9700\u8981\u7ba1\u7406 256 \u7a2e\u57fa\u672c\u55ae\u4f4d\uff0c\u6bd4\u8d77\u6210\u5343\u4e0a\u842c\u7a2e\u5716\u6848\u7d44\u5408\u7c21\u55ae\u591a\u4e86\u3002"}),(0,d.jsx)(n.p,{children:"\u4f46\u9019\u4e5f\u6709\u4e00\u500b\u554f\u984c\uff0c\u5982\u679c\u4f60\u96a8\u610f\u5730\u628a\u9019\u4e9b\u5c0f\u55ae\u4f4d\u7d44\u5408\u8d77\u4f86\uff0c\u4f60\u53ef\u80fd\u6703\u767c\u73fe\u62fc\u5716\u8b8a\u5f97\u66f4\u52a0\u96f6\u6563\uff0c\u6bd4\u5982\u8aaa\u4f60\u6703\u628a\u4e00\u90e8\u5206\u5929\u7a7a\u548c\u4e00\u90e8\u5206\u8349\u5730\u6df7\u5728\u4e00\u8d77\uff0c\u9019\u6a23\u4f60\u5f88\u96e3\u62fc\u51fa\u5b8c\u6574\u7684\u5716\u6848\u3002"}),(0,d.jsx)(n.p,{children:"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u4f5c\u8005\u63d0\u51fa\u4e86\u4e00\u500b\u6539\u9032\u7684\u65b9\u6cd5\u3002\u4ed6\u5011\u6c7a\u5b9a\u5728\u7d44\u5408\u9019\u4e9b\u5c0f\u55ae\u4f4d\u6642\uff0c\u907f\u514d\u628a\u4e0d\u540c\u985e\u578b\u7684\u5716\u6848\u6df7\u5408\u5728\u4e00\u8d77\uff0c\u6bd4\u5982\u4e0d\u628a\u5929\u7a7a\u548c\u8349\u5730\u7684\u55ae\u4f4d\u6df7\u5728\u4e00\u8d77\uff0c\u9019\u6a23\u53ef\u4ee5\u4fdd\u8b49\u6bcf\u4e00\u90e8\u5206\u5716\u6848\u66f4\u5bb9\u6613\u62fc\u51fa\u4f86\u3002\u540c\u6642\uff0c\u4ed6\u5011\u5141\u8a31\u5728\u5716\u6848\u4e4b\u9593\u7559\u4e00\u4e9b\u7a7a\u767d\uff0c\u9019\u6a23\u53ef\u4ee5\u4fdd\u6301\u6bcf\u4e00\u90e8\u5206\u5716\u6848\u7684\u5b8c\u6574\u6027\u3002"}),(0,d.jsx)(n.p,{children:"\u9019\u6a23\u4e00\u4f86\uff0c\u4ed6\u5011\u5c31\u80fd\u7d50\u5408\u5169\u7a2e\u65b9\u6cd5\u7684\u512a\u9ede\uff1a\u65e2\u80fd\u6709\u6548\u5730\u62fc\u51fa\u5927\u7684\u5716\u6848\uff0c\u53c8\u4e0d\u9700\u8981\u8a18\u4f4f\u904e\u591a\u7684\u5716\u6848\u7d44\u5408\u65b9\u5f0f\u3002\u9019\u7a2e\u65b9\u6cd5\u8b93\u4ed6\u5011\u80fd\u5920\u66f4\u9ad8\u6548\u5730\u5b8c\u6210\u62fc\u5716\u904a\u6232\uff0c\u4e5f\u66f4\u5bb9\u6613\u770b\u5230\u5b8c\u6574\u7684\u5716\u6848\u3002"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,d.jsx)(n.h3,{id:"\u6a21\u578b\u5c3a\u5bf8",children:"\u6a21\u578b\u5c3a\u5bf8"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"arch hyper",src:s(90874).A+"",width:"804",height:"312"})}),"\n",(0,d.jsx)(n.p,{children:"\u672c\u8ad6\u6587\u63d0\u51fa\u4e86\u56db\u500b\u6a21\u578b\u53c3\u6578\u8a2d\u8a08\uff0c\u9032\u884c\u4e86\u8a13\u7df4\u548c\u57fa\u6e96\u6e2c\u8a66\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"zero-shot",children:"Zero-shot"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"results",src:s(13477).A+"",width:"1586",height:"376"})}),"\n",(0,d.jsx)(n.p,{children:"\u4f5c\u8005\u9996\u5148\u6aa2\u8996\u6a21\u578b\u7684\u96f6\u6a23\u672c\u6027\u80fd\uff0c\u5373\u6a21\u578b\u5728\u672a\u898b\u904e\u7684\u4efb\u52d9\u4e0a\u7684\u8868\u73fe\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4ed6\u5011\u767c\u73fe\uff0cGPT-2 \u5728\u8de8\u57df\u548c\u8de8\u8cc7\u6599\u96c6\u7684\u9077\u79fb\u80fd\u529b\u4e0a\u8868\u73fe\u826f\u597d\uff0c\u5728\u96f6\u6a23\u672c\u8a2d\u7f6e\u4e2d\u63d0\u5347\u4e86 8 \u500b\u8cc7\u6599\u96c6\u4e2d\u7684 7 \u500b\u8cc7\u6599\u96c6\u7684\u73fe\u6709\u6280\u8853\u6c34\u5e73\u3002\u5728 Penn Treebank \u548c WikiText-2 \u7b49\u5c0f\u578b\u8cc7\u6599\u96c6\u4e0a\uff0c\u6709\u986f\u8457\u7684\u6539\u9032\uff0c\u9019\u4e9b\u8cc7\u6599\u96c6\u50c5\u6709 100 \u5230 200 \u842c\u500b\u8a13\u7df4\u6a19\u8a18\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u91dd\u5c0d\u9577\u671f\u4f9d\u8cf4\u6027\u6e2c\u91cf\u7684\u8cc7\u6599\u96c6\uff08\u5982 LAMBADA \u548c\u5152\u7ae5\u5716\u66f8\u6e2c\u8a66\uff09\u4e5f\u53d6\u5f97\u4e86\u5de8\u5927\u7684\u9032\u6b65\u3002"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u6307\u6a19"}),(0,d.jsx)(n.th,{children:"\u542b\u7fa9"}),(0,d.jsx)(n.th,{children:"\u89e3\u8b80\u65b9\u5f0f"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"PPL"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.strong,{children:"\u56f0\u60d1\u5ea6"}),"\uff1a\u8861\u91cf\u6a21\u578b\u9810\u6e2c\u5e8f\u5217\u7684\u6548\u679c\uff0c\u6578\u503c\u6108\u4f4e\u8868\u793a\u6a21\u578b\u8d8a\u597d\u3002"]}),(0,d.jsx)(n.td,{children:"\u5206\u6578\u6108\u4f4e\uff0c\u8868\u793a\u6a21\u578b\u5c0d\u5e8f\u5217\u7684\u9810\u6e2c\u8d8a\u6e96\u78ba\uff0c\u5373\u6a21\u578b\u8d8a\u597d\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"ACC"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.strong,{children:"\u6e96\u78ba\u7387"}),"\uff1a\u8861\u91cf\u6a21\u578b\u9810\u6e2c\u6b63\u78ba\u7684\u6bd4\u4f8b\u3002"]}),(0,d.jsx)(n.td,{children:"\u5206\u6578\u8d8a\u9ad8\uff0c\u8868\u793a\u6a21\u578b\u9810\u6e2c\u6b63\u78ba\u7684\u6bd4\u4f8b\u8d8a\u9ad8\uff0c\u5373\u6a21\u578b\u8d8a\u6e96\u78ba\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"BPB"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.strong,{children:"\u6bcf\u4f4d\u5143\u7d44\u4f4d\u6578"}),"\uff1a\u6bcf\u500b\u4f4d\u5143\u7d44\u5728\u4e8c\u9032\u5236\u8868\u793a\u4e2d\u5e73\u5747\u9700\u8981\u7684\u4f4d\u6578\u3002"]}),(0,d.jsx)(n.td,{children:"\u5206\u6578\u6108\u4f4e\uff0c\u8868\u793a\u6a21\u578b\u58d3\u7e2e\u548c\u9810\u6e2c\u7684\u6548\u7387\u8d8a\u9ad8\uff0c\u5373\u6a21\u578b\u8d8a\u512a\u79c0\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"BPC"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.strong,{children:"\u6bcf\u5b57\u5143\u4f4d\u6578"}),"\uff1a\u6bcf\u500b\u5b57\u5143\u5728\u4e8c\u9032\u5236\u8868\u793a\u4e2d\u5e73\u5747\u9700\u8981\u7684\u4f4d\u6578\u3002"]}),(0,d.jsx)(n.td,{children:"\u5206\u6578\u6108\u4f4e\uff0c\u8868\u793a\u6a21\u578b\u58d3\u7e2e\u548c\u9810\u6e2c\u7684\u6548\u7387\u8d8a\u9ad8\uff0c\u5373\u6a21\u578b\u8d8a\u512a\u79c0\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u5404\u985e\u5be6\u9a57",children:"\u5404\u985e\u5be6\u9a57"}),"\n",(0,d.jsx)(n.p,{children:"\u4f5c\u8005\u5728\u5404\u7a2e\u4e0d\u540c\u7684\u4efb\u52d9\u4e0a\u9032\u884c\u4e86\u5be6\u9a57\uff0c\u5305\u62ec\u8a9e\u8a00\u5efa\u6a21\u3001\u6a5f\u5668\u7ffb\u8b6f\u3001\u554f\u7b54\u3001\u6587\u672c\u6458\u8981\u3001\u6587\u672c\u751f\u6210\u7b49\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u5011\u5c31\u7c21\u55ae\u5f59\u6574\u4e00\u4efd\u8868\u683c\uff0c\u8b93\u4f60\u5feb\u901f\u4e86\u89e3 GPT-2 \u5728\u5404\u500b\u4efb\u52d9\u4e0a\u7684\u8868\u73fe\uff1a"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u6e2c\u8a66\u540d\u7a31"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u76ee\u7684"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u6e2c\u8a66\u65b9\u5f0f"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u7d50\u679c"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u5152\u7ae5\u5716\u66f8\u6e2c\u9a57 (CBT)"})}),(0,d.jsx)(n.td,{children:"\u6aa2\u67e5\u6a21\u578b\u5728\u4e0d\u540c\u985e\u5225\u55ae\u5b57\u4e0a\u7684\u8868\u73fe\u3002"}),(0,d.jsx)(n.td,{children:"\u9810\u6e2c\u5b8c\u5f62\u586b\u7a7a\u6e2c\u8a66\u4e2d\u7701\u7565\u55ae\u5b57\u7684\u6b63\u78ba\u9078\u9805\u3002"}),(0,d.jsx)(n.td,{children:"\u666e\u901a\u540d\u8a5e\u6e96\u78ba\u7387 93.3%\uff0c\u547d\u540d\u5be6\u9ad4\u6e96\u78ba\u7387 89.1%\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"LAMBADA"})}),(0,d.jsx)(n.td,{children:"\u6e2c\u8a66\u5c0d\u9060\u7aef\u4f9d\u8cf4\u95dc\u4fc2\u7684\u5efa\u6a21\u80fd\u529b\u3002"}),(0,d.jsx)(n.td,{children:"\u9810\u6e2c\u53e5\u5b50\u7684\u6700\u7d42\u55ae\u8a5e\u3002"}),(0,d.jsx)(n.td,{children:"\u56f0\u60d1\u5ea6\u5f9e 99.8 \u964d\u81f3 8.6\uff0c\u6e96\u78ba\u7387\u5f9e 19% \u63d0\u9ad8\u5230 52.66%\uff1b\u4f7f\u7528\u505c\u7528\u8a5e\u904e\u6ffe\u5668\u5f8c\u6e96\u78ba\u5ea6\u63d0\u9ad8\u5230 63.24%\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"Winograd Schema \u6311\u6230"})}),(0,d.jsx)(n.td,{children:"\u6e2c\u91cf\u89e3\u6c7a\u6587\u672c\u6b67\u7fa9\u7684\u80fd\u529b\u3002"}),(0,d.jsx)(n.td,{children:"\u89e3\u6c7a\u6a21\u7cca\u6027\u554f\u984c\u3002"}),(0,d.jsx)(n.td,{children:"\u5728 273 \u500b\u7bc4\u4f8b\u7684\u5c0f\u578b\u8cc7\u6599\u96c6\u4e0a\u8868\u73fe\u826f\u597d\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u95b1\u8b80\u7406\u89e3\uff08CoQA\uff09"})}),(0,d.jsx)(n.td,{children:"\u6e2c\u8a66\u56de\u7b54\u4f9d\u8cf4\u5c0d\u8a71\u6b77\u53f2\u7684\u554f\u984c\u80fd\u529b\u3002"}),(0,d.jsx)(n.td,{children:"\u4f7f\u7528\u5c0d\u8a71\u554f\u7b54\u8cc7\u6599\u96c6\u3002"}),(0,d.jsx)(n.td,{children:"\u958b\u767c\u96c6\u4e0a\u9054\u5230 55 F1 \u5206\u6578\uff0c\u63a5\u8fd1\u6216\u8d85\u904e\u56db\u5206\u4e4b\u4e09\u7684\u57fa\u7dda\u7cfb\u7d71\u6027\u80fd\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u6458\u8981"})}),(0,d.jsx)(n.td,{children:"\u6e2c\u8a66\u7e3d\u7d50\u80fd\u529b\u3002"}),(0,d.jsx)(n.td,{children:"\u901a\u904e Top-k \u96a8\u6a5f\u63a1\u6a23\u751f\u6210\u6458\u8981\u3002"}),(0,d.jsx)(n.td,{children:"\u751f\u6210\u6458\u8981\u8cea\u91cf\u985e\u4f3c\u65bc\u6458\u8981\uff0c\u4f46\u7d30\u7bc0\u6709\u6642\u6df7\u6dc6\uff1b\u5728 ROUGE \u6307\u6a19\u4e0a\u50c5\u52c9\u5f37\u512a\u65bc\u96a8\u6a5f\u9078\u64c7\u7684 3 \u500b\u53e5\u5b50\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u7ffb\u8b6f"})}),(0,d.jsx)(n.td,{children:"\u6e2c\u8a66\u7ffb\u8b6f\u80fd\u529b\u3002"}),(0,d.jsx)(n.td,{children:"\u4f7f\u7528\u82f1\u8a9e=\u6cd5\u8a9e\u53e5\u5b50\u9032\u884c\u7ffb\u8b6f\u3002"}),(0,d.jsx)(n.td,{children:"\u82f1\u6cd5\u6e2c\u8a66\u96c6\u4e0a\u7372\u5f97 5 BLEU\uff1b\u6cd5\u82f1\u6e2c\u8a66\u96c6\u4e0a\u7372\u5f97 11.5 BLEU\uff0c\u4f4e\u65bc\u6700\u4f73\u7121\u76e3\u7763\u65b9\u6cd5\u7684 33.5 BLEU\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u554f\u7b54"})}),(0,d.jsx)(n.td,{children:"\u6e2c\u8a66\u70ba\u4e8b\u5be6\u6027\u554f\u984c\u7522\u751f\u6b63\u78ba\u7b54\u6848\u7684\u983b\u7387\u3002"}),(0,d.jsx)(n.td,{children:"\u690d\u5165\u7bc4\u4f8b\u554f\u984c\u7b54\u6848\u5c0d\uff0c\u8a55\u4f30\u56de\u7b54\u6e96\u78ba\u6027\u3002"}),(0,d.jsx)(n.td,{children:"\u6b63\u78ba\u56de\u7b54\u4e86 4.1% \u7684\u554f\u984c\uff0c\u6bd4\u57fa\u7dda\u591a 5.3 \u500d\uff1b\u5728\u6700\u6709\u4fe1\u5fc3\u7684 1% \u554f\u984c\u4e0a\u7684\u6e96\u78ba\u5ea6\u70ba 63.1%\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,d.jsx)(n.p,{children:"\u672c\u7814\u7a76\u65e8\u5728\u63a2\u7d22\u7121\u76e3\u7763\u4efb\u52d9\u5b78\u7fd2\u5728\u81ea\u7136\u8a9e\u8a00\u8655\u7406\uff08NLP\uff09\u4e2d\u7684\u61c9\u7528\u548c\u6f5b\u529b\uff0c\u7279\u5225\u662f\u5229\u7528 GPT-2 \u6a21\u578b\u5728\u7121\u9700\u76e3\u7763\u9069\u61c9\u6216\u4fee\u6539\u7684\u60c5\u6cc1\u4e0b\u76f4\u63a5\u57f7\u884c\u5404\u7a2e NLP \u4efb\u52d9\u7684\u80fd\u529b\u3002"}),"\n",(0,d.jsx)(n.p,{children:"GPT-2 \u544a\u8a34\u6211\u5011\uff1a\u7576\u5927\u578b\u8a9e\u8a00\u6a21\u578b\u5728\u8db3\u5920\u5927\u4e14\u591a\u6a23\u5316\u7684\u8cc7\u6599\u96c6\u4e0a\u9032\u884c\u8a13\u7df4\u6642\uff0c\u5b83\u5011\u80fd\u5920\u5728\u8a31\u591a\u9818\u57df\u548c\u8cc7\u6599\u96c6\u4e0a\u8868\u73fe\u826f\u597d\uff0c\u4e26\u4e14\u80fd\u5920\u5728\u4e0d\u9700\u8981\u986f\u5f0f\u76e3\u7763\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u5927\u91cf\u4efb\u52d9\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u9019\u4e9b\u767c\u73fe\u70ba\u672a\u4f86 NLP \u4efb\u52d9\u4e2d\u7684\u7121\u76e3\u7763\u5b78\u7fd2\u548c\u6a21\u578b\u6539\u9032\u63d0\u4f9b\u4e86\u65b0\u7684\u8996\u89d2\u548c\u53ef\u80fd\u6027\u3002"})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},90874:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/img1-c3737326094ba966db2b08b32ee80e8b.jpg"},13477:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/img2-ae04d7f1c1775b0a20e0982c681cefcd.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>h});var d=s(96540);const r={},l=d.createContext(r);function i(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);