"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7011],{32175:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>t});var s=r(74848),i=r(28453);const l={},d="[18.06] GPT-1",h={id:"gpt_1/index",title:"[18.06] GPT-1",description:"\u5341\u4e8c\u5c64\u89e3\u78bc\u5668",source:"@site/papers/1806-gpt_1/index.md",sourceDirName:"1806-gpt_1",slug:"/gpt_1/",permalink:"/papers/gpt_1/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[18.03] PANet",permalink:"/papers/panet/"},next:{title:"[18.10] BERT",permalink:"/papers/bert/"}},c={},t=[{value:"\u5341\u4e8c\u5c64\u89e3\u78bc\u5668",id:"\u5341\u4e8c\u5c64\u89e3\u78bc\u5668",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"1. \u7f3a\u4e4f\u6a19\u6ce8\u8cc7\u6599",id:"1-\u7f3a\u4e4f\u6a19\u6ce8\u8cc7\u6599",level:3},{value:"2. \u4efb\u52d9\u4e0d\u4e00\u81f4",id:"2-\u4efb\u52d9\u4e0d\u4e00\u81f4",level:3},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u6a21\u578b\u67b6\u69cb",id:"\u6a21\u578b\u67b6\u69cb",level:3},{value:"\u9810\u8a13\u7df4\u7b56\u7565",id:"\u9810\u8a13\u7df4\u7b56\u7565",level:3},{value:"\u5fae\u8abf\u7b56\u7565",id:"\u5fae\u8abf\u7b56\u7565",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u70ba\u4ec0\u9ebc Transformer \u6709\u6548\uff1f",id:"\u70ba\u4ec0\u9ebc-transformer-\u6709\u6548",level:3},{value:"\u54ea\u4e00\u500b\u90e8\u5206\u6709\u6548\uff1f",id:"\u54ea\u4e00\u500b\u90e8\u5206\u6709\u6548",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function x(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"1806-gpt-1",children:"[18.06] GPT-1"}),"\n",(0,s.jsx)(e.h2,{id:"\u5341\u4e8c\u5c64\u89e3\u78bc\u5668",children:"\u5341\u4e8c\u5c64\u89e3\u78bc\u5668"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf",children:(0,s.jsx)(e.strong,{children:"Improving language understanding by generative pre-training"})})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u539f\u59cb\u7684 Transformer \u67b6\u69cb\u7531\u5169\u500b\u90e8\u5206\u7d44\u6210\uff1a\u4e00\u500b\u7de8\u78bc\u5668\uff08encoder\uff09\u548c\u4e00\u500b\u89e3\u78bc\u5668\uff08decoder\uff09\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u800c OpenAI \u5247\u662f\u57fa\u65bc\u9019\u500b\u67b6\u69cb\uff0c\u9078\u4e86\u4e0d\u4e00\u6a23\u7684\u6280\u8853\u8def\u7dda\uff1a",(0,s.jsx)(e.strong,{children:"\u5168\u89e3\u78bc\u5668\uff08decoder-only\uff09"}),"\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u5c0d\u65bc\u76ee\u524d\u7684 NLP \u6a21\u578b\u63d0\u51fa\u4e86\u5e7e\u500b\u554f\u984c\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"1-\u7f3a\u4e4f\u6a19\u6ce8\u8cc7\u6599",children:"1. \u7f3a\u4e4f\u6a19\u6ce8\u8cc7\u6599"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 NLP \u9818\u57df\u4e2d\uff0c\u8cc7\u6599\u662f\u4e0d\u7f3a\u7684\uff0c\u7f3a\u7684\u662f\u6a19\u6ce8\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7279\u5225\u662f\u7576\u4f60\u60f3\u8981\u505a\u4e00\u4e9b\u7279\u5b9a\u4efb\u52d9\u6642\uff0c\u4f8b\u5982\u5c08\u9580\u9818\u57df\u7684\u554f\u7b54\uff08QA\uff09\u6216\u6a5f\u5668\u7ffb\u8b6f\uff08MT\uff09\u7b49\uff0c\u6703\u56e0\u70ba\u7f3a\u4e4f\u5c0d\u61c9\u7684\u6a19\u6ce8\u8cc7\u6599\u800c\u96e3\u4ee5\u9032\u884c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6709\u8a31\u591a\u65b9\u6cd5\u90fd\u76f4\u63a5\u63a1\u7528\u7121\u76e3\u7763\u5b78\u7fd2\uff08unsupervised learning\uff09\u7684\u65b9\u5f0f\uff0c\u5f8c\u4f86\u53c8\u88ab\u7a31\u70ba\u81ea\u76e3\u7763\u5b78\u7fd2\uff08self-supervised learning\uff09\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u5e38\u898b\u7684\u65b9\u6cd5\u5c31\u662f\u8b93\u6a21\u578b\u53bb\u505a\u300c\u6587\u5b57\u63a5\u9f8d\u300d\u7684\u4efb\u52d9\uff0c\u4e5f\u5c31\u662f\uff1a\u4e0b\u4e00\u500b\u5b57\u9810\u6e2c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u6a23\u4f60\u5b8c\u5168\u4e0d\u9700\u8981\u4efb\u4f55\u6a19\u6ce8\u8cc7\u6599\uff0c\u53ea\u9700\u8981\u6301\u7e8c\u5730\u641c\u96c6\u5927\u91cf\u7684\u6587\u672c\u8cc7\u6599\uff0c\u5c31\u53ef\u4ee5\u8b93\u6a21\u578b\u81ea\u5df1\u5b78\u7fd2\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u9019\u7a2e\u65b9\u6cd5\u4e5f\u884d\u751f\u51fa\u4e86\u53e6\u5916\u4e0b\u4e00\u500b\u554f\u984c\uff1a\u4efb\u52d9\u4e0d\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"2-\u4efb\u52d9\u4e0d\u4e00\u81f4",children:"2. \u4efb\u52d9\u4e0d\u4e00\u81f4"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 NLP \u6a21\u578b\u4e2d\uff0c\u901a\u5e38\u6703\u6709\u5169\u500b\u968e\u6bb5\uff1a\u9810\u8a13\u7df4\uff08pre-training\uff09\u548c\u5fae\u8abf\uff08fine-tuning\uff09\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9810\u8a13\u7df4\u662f\u6307\u5728\u5927\u91cf\u7684\u6587\u672c\u8cc7\u6599\u4e0a\uff0c\u8b93\u6a21\u578b\u81ea\u5df1\u5b78\u7fd2\uff0c\u800c\u5fae\u8abf\u5247\u662f\u6307\u5728\u7279\u5b9a\u4efb\u52d9\u4e0a\uff0c\u5c0d\u6a21\u578b\u9032\u884c\u9032\u4e00\u6b65\u7684\u8a13\u7df4\u3002\u4f46\u9019\u5169\u500b\u968e\u6bb5\u4e4b\u9593\u5b58\u5728\u7684\u4e0d\u4e00\u81f4\u6027\uff0c\u537b\u662f\u500b\u96e3\u4ee5\u5ffd\u7565\u7684\u554f\u984c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e5f\u5c31\u662f\u8aaa\uff0c\u7576\u4f60\u5728\u9810\u8a13\u7df4\u6642\uff0c\u6a21\u578b\u5b78\u7fd2\u7684\u662f\u300c\u4e0b\u4e00\u500b\u5b57\u662f\u4ec0\u9ebc\u300d\u9019\u6a23\u7684\u4efb\u52d9\uff0c\u4f46\u7576\u4f60\u5728\u5fae\u8abf\u6642\uff0c\u6a21\u578b\u5b78\u7fd2\u7684\u53ef\u80fd\u662f\u300c\u56de\u7b54\u554f\u984c\u300d\u6216\u300c\u7ffb\u8b6f\u53e5\u5b50\u300d\u9019\u6a23\u7684\u4efb\u52d9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u904e\u53bb\u7684\u7814\u7a76\u4e2d\uff0c\u5728\u5fae\u8abf\u6a21\u578b\u53bb\u9069\u61c9\u76ee\u6a19\u4efb\u52d9\u6642\uff0c\u6703\u5f15\u5165\u5927\u91cf\u7684\u53c3\u6578\uff0c\u4ee5\u63d0\u9ad8\u6a21\u578b\u7684\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u540c\u7684\u4efb\u52d9\uff0c\u5c31\u9700\u8981\u4e0d\u540c\u7684\u53c3\u6578\uff0c\u904e\u7a0b\u7e41\u7463\u4e14\u4e0d\u597d\u7ba1\u7406\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u56e0\u6b64\u63d0\u51fa\u4f7f\u7528\u5168\u89e3\u78bc\u5668\u7684\u67b6\u69cb\uff0c\u5e0c\u671b\u80fd\u7528\u6700\u5c0f\u7684\u53c3\u6578\u91cf\u4f86\u9069\u61c9\u4e0d\u540c\u7684\u4efb\u52d9\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,s.jsx)(e.h3,{id:"\u6a21\u578b\u67b6\u69cb",children:"\u6a21\u578b\u67b6\u69cb"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"\u6a21\u578b\u67b6\u69cb",src:r(8972).A+"",width:"1224",height:"620"})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u662f\u4f5c\u8005\u63d0\u51fa\u7684\u6a21\u578b\u67b6\u69cb\uff0c\u7e3d\u5171\u6709 12 \u5c64\u89e3\u78bc\u5668\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u76f8\u95dc\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5171 12 \u5c64\u89e3\u78bc\u5668\uff0c\u6bcf\u5c64\u89e3\u78bc\u5668\u90fd\u662f Transformer \u7684\u57fa\u672c\u7d50\u69cb\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6bcf\u5c64\u89e3\u78bc\u5668\u6709 768 \u7dad\u7279\u5fb5\u548c 12 \u500b\u6ce8\u610f\u529b\u982d\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5728 FFN \u7684\u96b1\u85cf\u5c64\u4e2d\uff0c\u4f7f\u7528\u4e86 3072 \u500b\u795e\u7d93\u5143\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5e8f\u5217\u9577\u5ea6\u70ba 512\u3002"}),"\n",(0,s.jsx)(e.li,{children:"Dropout \u6a5f\u7387\u70ba 0.1\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u63a1\u7528 L2 \u6b63\u5247\u5316\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u63a1\u7528 Gelu \u6fc0\u6d3b\u51fd\u6578\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4f4d\u7f6e\u7de8\u78bc\u63a1\u7528\u53ef\u5b78\u7fd2\u5f0f\u7684\u4f4d\u7f6e\u5d4c\u5165\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"https://spacy.io/api/tokenizer**",children:(0,s.jsx)(e.strong,{children:"spaCy tokenizer"})})," \u9032\u884c\u5206\u8a5e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8a13\u7df4\u65b9\u5f0f\u4e0a\uff0c\u4f5c\u8005\u4f7f\u7528\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Adam \u512a\u5316\u5668\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6700\u5927\u5b78\u7fd2\u7387\u70ba 2.5e-4\uff0c\u5728\u524d 2000 \u6b65\u4e2d\u7dda\u6027\u589e\u52a0\uff0c\u7136\u5f8c\u4f7f\u7528\u9918\u5f26\u9000\u706b\u6cd5\u76f4\u5230 0\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u9810\u8a13\u7df4\u7b56\u7565",children:"\u9810\u8a13\u7df4\u7b56\u7565"}),"\n",(0,s.jsx)(e.p,{children:"\u6a21\u578b\u7684\u8a13\u7df4\u7531\u5169\u500b\u968e\u6bb5\u7d44\u6210\uff0c\u7b2c\u4e00\u968e\u6bb5\u662f\u5728\u5927\u91cf\u7684\u6587\u672c\u8cc7\u6599\u4e0a\u9032\u884c\u81ea\u76e3\u7763\u5b78\u7fd2\uff0c\u7b2c\u4e8c\u968e\u6bb5\u662f\u5728\u76ee\u6a19\u4efb\u52d9\u4e0a\u9032\u884c\u5fae\u8abf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u63a1\u7528\u8cc7\u6599\u96c6\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://arxiv.org/abs/1506.06724",children:(0,s.jsx)(e.strong,{children:"BooksCorpus"})}),":"]}),"\n",(0,s.jsx)(e.p,{children:"\u5b83\u5305\u542b 7,000 \u591a\u672c\u7368\u7279\u7684\u672a\u51fa\u7248\u66f8\u7c4d\uff0c\u6db5\u84cb\u5192\u96aa\u3001\u5947\u5e7b\u548c\u6d6a\u6f2b\u7b49\u591a\u7a2e\u985e\u578b\u3002 \u81f3\u95dc\u91cd\u8981\u7684\u662f\uff0c\u5b83\u5305\u542b\u9577\u6bb5\u7684\u9023\u7e8c\u6587\u672c\uff0c\u9019\u4f7f\u5f97\u751f\u6210\u6a21\u578b\u80fd\u5920\u5b78\u7fd2\u4ee5\u9060\u7aef\u8cc7\u8a0a\u70ba\u689d\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://www.statmt.org/lm-benchmark/",children:(0,s.jsx)(e.strong,{children:"1B Word Benchmark"})}),":"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7531\u985e\u4f3c\u7684\u65b9\u6cd5 ",(0,s.jsx)(e.a,{href:"https://arxiv.org/abs/1802.05365",children:"ELMo"})," \u4f7f\u7528\uff0c\u5176\u5927\u5c0f\u5927\u81f4\u76f8\u540c\uff0c\u4f46\u5728\u53e5\u5b50\u5c64\u7d1a\u9032\u884c\u4e86\u91cd\u7d44\uff08\u76ee\u7684\u662f\u7834\u58de\u4e86\u9060\u7aef\u7d50\u69cb\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5fae\u8abf\u7b56\u7565",children:"\u5fae\u8abf\u7b56\u7565"}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u6c92\u6709\u7279\u5225\u60f3\u8457\u8981\u5728\u5fae\u8abf\u4e0a\u505a\u4ec0\u9ebc\u7279\u5225\u7684\u4e8b\u60c5\uff0c\u53ea\u662f\u7c21\u55ae\u5730\u4f7f\u7528\u4e86\u4e00\u4e9b\u6a19\u6e96\u7684\u5fae\u8abf\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9664\u975e\u6709\u7279\u5225\u8aaa\u660e\uff0c\u5426\u5247\u5927\u591a\u6578\u60c5\u6cc1\u4e0b\uff0c\u4f5c\u8005\u90fd\u91cd\u8907\u4f7f\u7528\u7121\u76e3\u7763\u9810\u8a13\u7df4\u4e2d\u7684\u8d85\u53c3\u6578\u8a2d\u5b9a\u3002\u5728\u5206\u985e\u5668\u4e0a\uff0c\u4f7f\u7528 0.1 \u7684 dropout \u6a5f\u7387\u3002\u5c0d\u65bc\u5927\u591a\u6578\u4efb\u52d9\uff0c\u4f7f\u7528 6.25e-5 \u7684\u5b78\u7fd2\u7387\u548c 32 \u7684\u6279\u91cf\u5927\u5c0f\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,s.jsx)(e.p,{children:"\u6574\u9ad4\u800c\u8a00\uff0c\u672c\u6587\u63d0\u51fa\u7684\u65b9\u6cd5\u5728\u8a55\u4f30\u7684 12 \u500b\u8cc7\u6599\u96c6\u4e2d\u7684 9 \u500b\u8cc7\u6599\u96c6\u4e2d\u53d6\u5f97\u4e86 SoTA \u7684\u7d50\u679c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u8868\u660e\u4e86\u5168\u89e3\u78bc\u5668\u7684\u67b6\u69cb\u5728 NLP \u4efb\u52d9\u4e0a\u7684\u6709\u6548\u6027\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u91dd\u5c0d Zero-shot \u7684\u8b70\u984c\u4e0a\uff0c\u9032\u884c\u4e86\u66f4\u6df1\u5165\u7684\u63a2\u8a0e\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u70ba\u4ec0\u9ebc-transformer-\u6709\u6548",children:"\u70ba\u4ec0\u9ebc Transformer \u6709\u6548\uff1f"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"\u5be6\u9a57\u5716\u8868",src:r(85947).A+"",width:"1224",height:"652"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5716 2\uff08\u5de6\uff09\u4e2d\uff0c\u4f5c\u8005\u63a2\u8a0e\u96a8\u6298\u6a21\u578b\u6df1\u5ea6\u589e\u52a0\uff0c\u5728\u4efb\u52d9\u9077\u79fb\u7684\u904e\u7a0b\u4e2d\uff0c\u6a21\u578b\u7684\u6027\u80fd\u5982\u4f55\u63d0\u5347\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u64da\u5be6\u9a57\u7d50\u679c\u8868\u660e\uff0c\u9810\u8a13\u7df4\u7684\u6a21\u578b\u4e2d\uff0c\u6bcf\u4e00\u5c64\u90fd\u5305\u542b\u7528\u65bc\u89e3\u6c7a\u76ee\u6a19\u4efb\u52d9\u7684\u6709\u6548\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u4f5c\u8005\u5728\u5716 2\uff08\u53f3\uff09\u4e2d\u8996\u89ba\u5316\u4e86\u6a21\u578b\u67b6\u69cb\u5728\u9810\u8a13\u7df4\u904e\u7a0b\u4e2d\u7684\u6709\u6548\u6027\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e5f\u5c31\u662f\u8aaa\uff0c\u96a8\u8457\u9810\u8a13\u7df4\u7684\u9032\u884c\uff0c\u6a21\u578b\u7684\u6027\u80fd\u9010\u6f38\u63d0\u5347\uff0c\u9019\u8868\u660e\u9810\u8a13\u7df4\u7522\u751f\u7684\u652f\u6301\u5b78\u7fd2\u5404\u7a2e\u4efb\u52d9\u76f8\u95dc\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u54ea\u4e00\u500b\u90e8\u5206\u6709\u6548",children:"\u54ea\u4e00\u500b\u90e8\u5206\u6709\u6548\uff1f"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"\u6d88\u878d\u5be6\u9a57",src:r(84638).A+"",width:"1514",height:"434"})}),"\n",(0,s.jsx)(e.p,{children:"\u70ba\u4e86\u78ba\u8a8d\u6a21\u578b\u54ea\u4e00\u500b\u74b0\u7bc0\u6709\u6700\u5927\u7684\u8ca2\u737b\uff0c\u4f5c\u8005\u9032\u884c\u4e86\u4e09\u7a2e\u4e0d\u540c\u7684\u6d88\u878d\u5be6\u9a57\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7d50\u679c\u5982\u8ad6\u6587\u5167\u8868 5 \u6240\u793a\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8f14\u52a9\u8a9e\u8a00\u6a21\u578b\u76ee\u6a19\u7684\u5f71\u97ff\uff1a"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u5fae\u8abf\u968e\u6bb5\u53d6\u6d88\u8f14\u52a9\u8a9e\u8a00\u6a21\u578b\u76ee\u6a19\uff0c\u7d50\u679c\u986f\u793a\u5176\u5c0d\u81ea\u7136\u8a9e\u8a00\u63a8\u7406\uff08NLI\uff09\u4efb\u52d9\u548c\u554f\u7b54\u4efb\u52d9\uff08QQP\uff09\u6709\u6240\u5e6b\u52a9\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6574\u9ad4\u8da8\u52e2\u8868\u660e\uff0c\u8f03\u5927\u7684\u8cc7\u6599\u96c6\u5f9e\u8f14\u52a9\u76ee\u6a19\u4e2d\u7372\u76ca\u66f4\u591a\uff0c\u800c\u8f03\u5c0f\u7684\u8cc7\u6599\u96c6\u5247\u4e0d\u660e\u986f\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Transformer \u8207 LSTM \u7684\u6bd4\u8f03\uff1a"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5c07 Transformer \u8207\u55ae\u5c64 2048 \u55ae\u5143\u7684 LSTM \u9032\u884c\u6bd4\u8f03\uff0c\u7d50\u679c\u986f\u793a\u5728\u76f8\u540c\u6846\u67b6\u4e0b\u4f7f\u7528 LSTM \u5e73\u5747\u5f97\u5206\u4e0b\u964d 5.6 \u5206\u3002"}),"\n",(0,s.jsx)(e.li,{children:"LSTM \u50c5\u5728 MRPC \u8cc7\u6599\u96c6\u4e0a\u512a\u65bc Transformer\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u9810\u8a13\u7df4\u7684\u91cd\u8981\u6027\uff1a"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6bd4\u8f03\u76f4\u63a5\u5728\u76ee\u6a19\u4efb\u52d9\u4e0a\u8a13\u7df4\u7684 Transformer \u8207\u9810\u5148\u8a13\u7df4\u7684 Transformer\u3002"}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u7d50\u679c\u986f\u793a\u7f3a\u4e4f\u9810\u8a13\u7df4\u6703\u5c0d\u6240\u6709\u4efb\u52d9\u7684\u8868\u73fe\u9020\u6210\u5f71\u97ff\uff0c\u8207\u5b8c\u6574\u6a21\u578b\u76f8\u6bd4\u8868\u73fe\u4e0b\u964d 14.8%\u3002"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u662f OpenAI \u63d0\u51fa\u7684\u9996\u500b\u57fa\u65bc Transformer \u67b6\u69cb\u7684\u5927\u898f\u6a21\u9810\u8a13\u7df4\u6a21\u578b\uff0c\u6a19\u8a8c\u8457\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u9818\u57df\u7684\u91cd\u8981\u9032\u6b65\u3002\u5b83\u900f\u904e\u5728\u5927\u91cf\u672a\u6a19\u8a18\u6587\u5b57\u4e0a\u9032\u884c\u9810\u8a13\u7df4\uff0c\u518d\u5728\u7279\u5b9a\u4efb\u52d9\u4e0a\u9032\u884c\u5fae\u8abf\uff0c\u5be6\u73fe\u4e86\u986f\u8457\u7684\u6548\u80fd\u63d0\u5347\u3002"}),"\n",(0,s.jsx)(e.p,{children:"GPT-1 \u7684\u6210\u529f\u8b49\u660e\u4e86\u9810\u8a13\u7df4-\u5fae\u8abf\u7684\u534a\u76e3\u7763\u5b78\u7fd2\u7bc4\u5f0f\u5728\u591a\u6a23\u5316\u7684\u81ea\u7136\u8a9e\u8a00\u7406\u89e3\u4efb\u52d9\u4e2d\u5177\u6709\u6f5b\u529b\uff0c\u958b\u555f\u4e86\u5c07\u901a\u7528\u8868\u793a\u5b78\u7fd2\u61c9\u7528\u65bc\u5ee3\u6cdb NLP \u4efb\u52d9\u7684\u65b0\u6642\u4ee3\uff0c\u70ba\u5f8c\u7e8c\u66f4\u5927\u898f\u6a21\u3001\u66f4\u5f37\u6027\u80fd\u7684 GPT-2 \u548c GPT-3 \u7b49\u6a21\u578b\u5960\u5b9a\u4e86\u57fa\u790e\u3002"})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},8972:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/img1-87f8c6da47fd8cd40f20287200c28762.jpg"},85947:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/img2-67a61571b3bdb1f1a081e83cbbd7c645.jpg"},84638:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/img3-6587fb5a5e0a69bfd6a3beef2e91e114.jpg"},28453:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>h});var s=r(96540);const i={},l=s.createContext(i);function d(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);