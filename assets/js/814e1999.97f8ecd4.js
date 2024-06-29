"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2067],{54639:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>t,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=s(74848),r=s(28453);const l={},t="[19.04] NAS-FPN",c={id:"nasfpn/index",title:"[19.04] NAS-FPN",description:"\u6709\u9322\u5c31\u662f\u4efb\u6027",source:"@site/papers/1904-nasfpn/index.md",sourceDirName:"1904-nasfpn",slug:"/nasfpn/",permalink:"/papers/nasfpn/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[19.02] GPT-2",permalink:"/papers/gpt_2/"},next:{title:"[19.04] Sparse Transformer",permalink:"/papers/sparse-transformer/"}},h={},d=[{value:"\u6709\u9322\u5c31\u662f\u4efb\u6027",id:"\u6709\u9322\u5c31\u662f\u4efb\u6027",level:2},{value:"\u4ec0\u9ebc\u662f NAS\uff1f",id:"\u4ec0\u9ebc\u662f-nas",level:2},{value:"\u512a\u9ede",id:"\u512a\u9ede",level:3},{value:"\u7f3a\u9ede",id:"\u7f3a\u9ede",level:3},{value:"\u5176\u5be6\u7f3a\u9ede\u591a\u4e00\u9ede",id:"\u5176\u5be6\u7f3a\u9ede\u591a\u4e00\u9ede",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"NAS-FPN \u6a21\u578b\u8a2d\u8a08",id:"nas-fpn-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u5408\u4f75\u55ae\u5143\uff08Merging Cell\uff09",id:"\u5408\u4f75\u55ae\u5143merging-cell",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function a(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1904-nas-fpn",children:"[19.04] NAS-FPN"}),"\n",(0,i.jsx)(e.h2,{id:"\u6709\u9322\u5c31\u662f\u4efb\u6027",children:"\u6709\u9322\u5c31\u662f\u4efb\u6027"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1904.07392",children:(0,i.jsx)(e.strong,{children:"NAS-FPN: Learning Scalable Feature Pyramid Architecture for Object Detection"})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u5728 FPN \u88ab\u63d0\u51fa\u4f86\u4e4b\u5f8c\uff0c\u7279\u5fb5\u878d\u5408\u4e00\u76f4\u662f\u71b1\u70c8\u8a0e\u8ad6\u7684\u554f\u984c\uff0c\u6211\u5011\u9019\u88e1\u6839\u64da\u6642\u9593\u5e8f\u7f85\u5217\u5e7e\u7bc7\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2017.01"})," -> ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1701.06659",children:"DSSD : Deconvolutional single shot detector"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2017.07"})," -> ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1707.01691",children:"RON: reverse connection with objectness prior networks for object detection"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2017.07"})," -> ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1707.06484",children:"Deep layer aggregation"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2017.09"})," -> ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1709.05788",children:"StairNet: top-down semantic aggregation for accurate one shot detection"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2017.11"})," -> ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1711.06897",children:"Single-shot refinement neural network for object detection"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2018.03"})," -> ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1803.01534",children:"Path Aggregation Network for Instance Segmentation"})," (< PANet \u5728\u9019\u88e1 )"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2018.08"})," -> ",(0,i.jsx)(e.a,{href:"https://ieeexplore.ieee.org/document/8578160",children:"Scale-transferrable object detection"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2018.08"})," -> ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1808.07993",children:"Deep feature pyramid reconfiguration for object detection"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"2018.10"})," -> ",(0,i.jsx)(e.a,{href:"https://link.springer.com/chapter/10.1007/978-3-030-01228-1_15#chapter-info",children:"Parallel feature pyramid network for object detection"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4e2d\u4eba\u5011\u6bd4\u8f03\u5e38\u807d\u5230\u7684\u662f PANet\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u4e0a\u8ff0\u7684\u5e7e\u7bc7\u8ad6\u6587\u4e5f\u90fd\u6709\u6578\u767e\u5230\u4e0a\u5343\u7684\u5f15\u7528\u91cf\uff0c\u6709\u6642\u9593\u6211\u5011\u4e5f\u53ef\u4ee5\u95b1\u8b80\u4e00\u4e0b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u90a3\u9ebc\uff0c\u8a72\u9078\u500b\u597d\u5462\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"Google \u4e5f\u60f3\u77e5\u9053\u9019\u500b\u554f\u984c\uff0c\u6240\u4ee5\u4ed6\u5011\u5c31\u63d0\u51fa\u4e86\u9019\u7bc7\uff1aNAS-FPN \u7684\u8ad6\u6587\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u63a2\u7a76\u5176\u6838\u5fc3\u6982\u5ff5\u5c31\u662f\uff1a\u6211\u4e5f\u4e0d\u77e5\u9053\u54ea\u500b\u597d\uff0c\u6240\u4ee5\u8b93\u6211\u5011\u7528\u6f14\u7b97\u6cd5\u2026"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u4f86\u66b4\u641c\u4e00\u6ce2\u5427\uff01"})}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:"\u6b38\u4e0d\u662f\uff1f\u9019\u500b\u7d50\u8ad6\u662f\u4e0d\u662f\u4e0d\u592a\u5c0d\uff1f"}),(0,i.jsx)(e.p,{children:"\u5176\u5be6\u9019\u5f88 Google\u3002"}),(0,i.jsx)(e.p,{children:"\u50cf\u4e4b\u524d\u7684 NasNet \u7cfb\u5217\uff0c\u5c31\u662f\u641c\u7d22\u7db2\u8def\u67b6\u69cb\uff0c\u641c\u5230\u6700\u5f8c\u9084\u6574\u7406\u51fa\u4e86\u53e6\u5916\u4e00\u7bc7\u8ad6\u6587\uff0c\u53eb\u505a EfficientNet\uff0c\u76f8\u4fe1\u4f60\u4e5f\u7565\u6709\u8033\u805e\u3002"}),(0,i.jsx)(e.p,{children:"\u9664\u4e86\u7db2\u8def\u67b6\u69cb\u5916\uff0c\u6676\u7247\u8a2d\u8a08\u4e5f\u53ef\u4ee5 NAS\uff0c\u73fe\u5728\u53ea\u662f\u5728\u7279\u5fb5\u878d\u5408\u4e0a\u7528 NAS\uff0c\u5c31\u662f\u500b\u5f88\u6a38\u5be6\u7684\u64cd\u4f5c\u800c\u5df2\u3002"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u4ec0\u9ebc\u662f-nas",children:"\u4ec0\u9ebc\u662f NAS\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"NAS \u4ee3\u8868\u795e\u7d93\u67b6\u69cb\u641c\u7d22\uff08Neural Architecture Search\uff09\uff0c\u662f\u6df1\u5ea6\u5b78\u7fd2\u9818\u57df\u4e2d\u7684\u4e00\u500b\u91cd\u8981\u7814\u7a76\u65b9\u5411\u3002\u5b83\u7684\u4e3b\u8981\u76ee\u6a19\u662f\u81ea\u52d5\u5730\u627e\u5230\u6700\u4f73\u7684\u795e\u7d93\u7db2\u7d61\u67b6\u69cb\uff0c\u4ee5\u89e3\u6c7a\u7279\u5b9a\u7684\u4efb\u52d9\u3002\u795e\u7d93\u7db2\u7d61\u67b6\u69cb\u901a\u5e38\u7531\u591a\u500b\u5c64\u3001\u795e\u7d93\u5143\u548c\u9023\u63a5\u7d44\u6210\uff0c\u800c\u9019\u4e9b\u67b6\u69cb\u7684\u8a2d\u8a08\u53ef\u80fd\u6703\u5c0d\u6a21\u578b\u7684\u6027\u80fd\u7522\u751f\u5de8\u5927\u7684\u5f71\u97ff\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u50b3\u7d71\u4e0a\uff0c\u795e\u7d93\u7db2\u7d61\u7684\u8a2d\u8a08\u901a\u5e38\u7531\u5c08\u5bb6\u4eba\u5de5\u9032\u884c\uff0c\u9700\u8981\u9032\u884c\u5927\u91cf\u7684\u8a66\u9a57\u548c\u8abf\u6574\uff0c\u9019\u662f\u4e00\u500b\u8017\u6642\u4e14\u9700\u8981\u5c08\u696d\u77e5\u8b58\u7684\u904e\u7a0b\u3002NAS \u7684\u76ee\u7684\u662f\u901a\u904e\u81ea\u52d5\u5316\u4f86\u7c21\u5316\u9019\u500b\u904e\u7a0b\uff0c\u8b93\u6a5f\u5668\u80fd\u5920\u63a2\u7d22\u548c\u767c\u73fe\u6700\u4f73\u7684\u795e\u7d93\u7db2\u7d61\u67b6\u69cb\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728 NAS \u4e2d\uff0c\u4e00\u500b\u641c\u7d22\u7a7a\u9593\u88ab\u5b9a\u7fa9\uff0c\u9019\u500b\u641c\u7d22\u7a7a\u9593\u5305\u542b\u4e86\u6240\u6709\u53ef\u80fd\u7684\u795e\u7d93\u7db2\u7d61\u67b6\u69cb\u7684\u8b8a\u9ad4\u3002\u7136\u5f8c\uff0c\u901a\u904e\u4e0d\u540c\u7684\u641c\u7d22\u7b56\u7565\uff0c\u5982\u907a\u50b3\u7b97\u6cd5\u3001\u5f37\u5316\u5b78\u7fd2\u3001\u9032\u5316\u7b97\u6cd5\u7b49\uff0c\u7cfb\u7d71\u6703\u81ea\u52d5\u751f\u6210\u3001\u8a55\u4f30\u548c\u9078\u64c7\u9019\u4e9b\u67b6\u69cb\uff0c\u4ee5\u627e\u5230\u5728\u7279\u5b9a\u4efb\u52d9\u4e0a\u8868\u73fe\u6700\u597d\u7684\u67b6\u69cb\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u822c\u4f86\u8aaa\uff0cNAS \u7684\u512a\u7f3a\u9ede\u5927\u6982\u662f\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"\u512a\u9ede",children:"\u512a\u9ede"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u81ea\u52d5\u5316"}),"\uff1a\u80fd\u5920\u81ea\u52d5\u5730\u63a2\u7d22\u548c\u627e\u5230\u6700\u4f73\u7684\u795e\u7d93\u7db2\u7d61\u67b6\u69cb\uff0c\u6e1b\u5c11\u4e86\u4eba\u5de5\u8abf\u6574\u548c\u8a2d\u8a08\u7684\u5de5\u4f5c\u91cf\uff0c\u4e26\u4e14\u6709\u52a9\u65bc\u7bc0\u7701\u6642\u9593\u548c\u8cc7\u6e90\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u6700\u4f73\u5316"}),"\uff1a\u53ef\u4ee5\u91dd\u5c0d\u7279\u5b9a\u4efb\u52d9\u548c\u6578\u64da\u96c6\u627e\u5230\u6700\u4f73\u7684\u795e\u7d93\u7db2\u7d61\u7d50\u69cb\uff0c\u63d0\u9ad8\u6a21\u578b\u6027\u80fd\uff0c\u4e26\u4e14\u53ef\u80fd\u5728\u4e00\u4e9b\u60c5\u6cc1\u4e0b\u8d85\u8d8a\u4eba\u5de5\u8a2d\u8a08\u7684\u6a21\u578b\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9748\u6d3b\u6027"}),"\uff1a\u4e0d\u50c5\u9650\u65bc\u7279\u5b9a\u7684\u4efb\u52d9\u6216\u67b6\u69cb\uff0c\u53ef\u4ee5\u9069\u61c9\u4e0d\u540c\u7684\u61c9\u7528\u5834\u666f\uff0c\u4e26\u751f\u6210\u9069\u5408\u7279\u5b9a\u9700\u6c42\u7684\u6a21\u578b\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5275\u65b0\u6027"}),"\uff1a\u6709\u52a9\u65bc\u767c\u73fe\u65b0\u7684\u795e\u7d93\u7db2\u7d61\u7d50\u69cb\uff0c\u6709\u53ef\u80fd\u5e36\u4f86\u5275\u65b0\u7684\u6a21\u578b\u67b6\u69cb\uff0c\u5f9e\u800c\u63a8\u52d5\u6df1\u5ea6\u5b78\u7fd2\u7684\u9032\u4e00\u6b65\u767c\u5c55\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u7f3a\u9ede",children:"\u7f3a\u9ede"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8a08\u7b97\u8cc7\u6e90\u6d88\u8017"}),"\uff1a\u641c\u7d22\u904e\u7a0b\u53ef\u80fd\u9700\u8981\u5927\u91cf\u7684\u8a08\u7b97\u8cc7\u6e90\uff0c\u5305\u62ec GPU \u6216 TPU\uff0c\u4ee5\u53ca\u5927\u91cf\u7684\u6642\u9593\uff0c\u9019\u53ef\u80fd\u9650\u5236\u4e86\u5176\u5be6\u969b\u61c9\u7528\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8907\u96dc\u6027"}),"\uff1a\u641c\u7d22\u7a7a\u9593\u7684\u5927\u5c0f\u548c\u53ef\u80fd\u7684\u7d44\u5408\u6578\u91cf\u53ef\u80fd\u5c0e\u81f4\u641c\u7d22\u904e\u7a0b\u8b8a\u5f97\u975e\u5e38\u8907\u96dc\uff0c\u9700\u8981\u66f4\u9ad8\u7d1a\u7684\u7b97\u6cd5\u548c\u6280\u8853\u4f86\u9032\u884c\u6709\u6548\u641c\u7d22\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9ad8\u5ea6\u4f9d\u8cf4\u65bc\u6578\u64da\u96c6"}),"\uff1a\u627e\u5230\u7684\u6700\u4f73\u67b6\u69cb\u53ef\u80fd\u9ad8\u5ea6\u4f9d\u8cf4\u65bc\u7528\u65bc\u641c\u7d22\u7684\u7279\u5b9a\u6578\u64da\u96c6\uff0c\u7121\u6cd5\u4fdd\u8b49\u5728\u5176\u4ed6\u6578\u64da\u96c6\u4e0a\u4e5f\u80fd\u8868\u73fe\u51fa\u8272\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u96a8\u6a5f\u6027"}),"\uff1a\u641c\u7d22\u904e\u7a0b\u53ef\u80fd\u5177\u6709\u4e00\u5b9a\u7684\u96a8\u6a5f\u6027\uff0c\u4e0d\u540c\u7684\u641c\u7d22\u904b\u884c\u53ef\u80fd\u6703\u5f97\u5230\u4e0d\u540c\u7684\u7d50\u679c\uff0c\u9019\u4f7f\u5f97\u7d50\u679c\u7684\u7a69\u5b9a\u6027\u6210\u70ba\u4e00\u500b\u6311\u6230\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5176\u5be6\u7f3a\u9ede\u591a\u4e00\u9ede",children:"\u5176\u5be6\u7f3a\u9ede\u591a\u4e00\u9ede"}),"\n",(0,i.jsx)(e.p,{children:"\u770b\u4e86 NAS \u512a\u7f3a\u9ede\u4e4b\u5f8c\uff0c\u4f60\u53ef\u80fd\u5c0d\u65bc\u9748\u6d3b\u548c\u5275\u65b0\u975e\u5e38\u611f\u8208\u8da3\uff0c\u4f46\u4e8b\u5be6\u662f\u6709 90% \u4ee5\u4e0a\u6216\u66f4\u9ad8\u7684\u5f9e\u696d\u4eba\u54e1\u7121\u6cd5\u6709\u8db3\u5920\u7684\u8cc7\u6e90\u5efa\u69cb\u81ea\u5df1\u7684\u641c\u7d22\u7cfb\u7d71\uff0c\u901a\u5e38\u53ea\u80fd\u4f7f\u7528\u9019\u9805\u6280\u8853\u5e36\u4f86\u7684\u7d50\u679c\uff0c\u800c\u9019\u5c31\u6703\u7acb\u523b\u9762\u81e8\u4e0b\u4e00\u500b\u554f\u984c\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u6211\u7684\u4f7f\u7528\u60c5\u5883\u8ddf\u8ad6\u6587\u4e00\u6a23\u55ce\uff1f"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u88e1\u7684\u4f7f\u7528\u60c5\u5883\u5305\u542b\u4e86\u63a8\u8ad6\u8cc7\u6599\u7684\u7279\u5fb5\u5206\u4f48\uff0c\u8a13\u7df4\u8cc7\u6599\u7684\u7279\u5fb5\u5206\u4f48\uff0c\u89e3\u6c7a\u554f\u984c\u7684\u641c\u7d22\u7a7a\u9593\u7b49\uff0c\u5982\u679c\u6709\u500b\u7b54\u6848\u662f\u5426\uff0c\u90a3\u9019\u500b\u6700\u4f73\u5316\u7684\u67b6\u69cb\uff0c\u53ef\u80fd\uff0c\u6216\u8a31\uff0c\u61c9\u8a72\u2026"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u4e0d\u9069\u5408\u3002"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u90a3\u62ff\u9019\u7bc7\u8ad6\u6587\u51fa\u4f86\u8b1b\u7684\u76ee\u7684\u662f\u4ec0\u9ebc\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\uff0c\u6211\u5011\u90fd\u53ef\u80fd\u662f\u90a3 10% \u7684\u4eba\uff0c\u800c\u9019\u7bc7\u8ad6\u6587\u5c55\u793a\u4e86\u8a72\u5982\u4f55\u8a2d\u8a08\u4e00\u500b\u641c\u7d22\u67b6\u69cb\uff0c\u4e26\u6839\u64da\u81ea\u5df1\u7684\u4f7f\u7528\u5834\u666f\u627e\u51fa\u6700\u5408\u9069\u7684\u7279\u5fb5\u878d\u5408\u65b9\u5f0f\u3002\u5176\u6b21\uff0c\u9019\u7bc7\u8ad6\u6587\u6709\u5c55\u793a\u4e00\u4e9b\u81ea\u52d5\u5316\u641c\u7d22\u5f8c\u7684\u7d50\u679c\uff0c\u800c\u9019\u4e9b\u7d50\u679c\u53ef\u4ee5\u70ba\u6211\u5011\u5f8c\u7e8c\u7684\u8a2d\u8a08\u5e36\u4f86\u4e00\u9ede\u555f\u767c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(e.h3,{id:"nas-fpn-\u6a21\u578b\u8a2d\u8a08",children:"NAS-FPN \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasfpn_1",src:s(51390).A+"",width:"1024",height:"284"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u4efd\u7814\u7a76\u7684\u4e3b\u8981\u76ee\u6a19\uff0c\u662f\u8981\u627e\u51fa\u4e00\u7a2e\u66f4\u597d\u7684 FPN \u67b6\u69cb\uff0c\u5728\u5b78\u8853\u5708\u7fd2\u6163\u4f7f\u7528\u7684\u8a9e\u8a00\u4e2d\uff0c\u6a21\u578b\u7684\u4e00\u958b\u59cb\u6703\u6709\u4e00\u500b\u57fa\u790e\u7684\u67b6\u69cb\uff0c\u7a31\u70ba Backbone\uff0c\u9019\u500b\u67b6\u69cb\u53ef\u4ee5\u96a8\u610f\u62bd\u63db\uff0c\u4f8b\u5982 ResNet\u3001MobileNet \u7b49\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u8457 FPN \u7684\u90e8\u5206\u901a\u5e38\u88ab\u7a31\u70ba Neck\uff0c\u9019\u908a\u4e3b\u8981\u5de5\u4f5c\u662f\u591a\u5c3a\u5ea6\u7684\u7279\u5fb5\u9023\u63a5\uff0c\u4e5f\u5c31\u662f\u73fe\u5728\u8981\u8a0e\u8ad6\u7684\u7bc4\u570d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u9806\u4fbf\u63d0\u4e00\u4e0b\uff0c\u5728 Neck \u5f8c\u9762\u5c31\u6703\u63a5\u4e0a\u6211\u5011\u8981\u89e3\u6c7a\u7684\u554f\u984c\uff0c\u7a31\u70ba Head\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u65e5\u5e38\u5de5\u4f5c\u7684\u74b0\u5883\u4e2d\uff0c\u5de5\u7a0b\u5e2b\u901a\u5e38\u5c31\u6703\u570d\u7e5e\u8457\u9019\u4e09\u500b\u90e8\u5206\u9032\u884c\u62bd\u63db\uff0c\u6e2c\u8a66\u548c\u5ef6\u4f38\u76f8\u95dc\u7684\u8a0e\u8ad6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u4efd\u7814\u7a76\u4e2d\uff0c\u4f5c\u8005\u7528\u4e00\u7a2e\u540d\u70ba\u300cRetinaNet\u300d\u7684\u67b6\u69cb\u4f5c\u70ba\u57fa\u790e\uff0cRetinaNet \u7684 backbone \u63a1\u7528 ResNet\uff0cneck \u63a1\u7528 FPN\u3002"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"RetinaNet \u9019\u7bc7\u8ad6\u6587\u7684\u4e3b\u984c\u5176\u5be6\u662f FocalLoss\uff0c\u88e1\u9762\u7684 RetinaNet \u67b6\u69cb\u662f\u70ba\u4e86\u61c9\u7528 FocalLoss \u800c\u7c21\u55ae\u642d\u914d\u7684\u7522\u7269\u3002"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5408\u4f75\u55ae\u5143merging-cell",children:"\u5408\u4f75\u55ae\u5143\uff08Merging Cell\uff09"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasfpn_2",src:s(25097).A+"",width:"1024",height:"335"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728 NAS-FPN \u4e2d\uff0c\u57fa\u65bc\u539f\u672c\u7684 FPN \u8a2d\u8a08\uff0c\u63d0\u51fa\u4e86\u4e00\u500b\u540d\u70ba\u300c\u5408\u4f75\u55ae\u5143\u300d\u7684\u65b0\u6982\u5ff5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5408\u4f75\u55ae\u5143\u662f\u4e00\u500b\u5c0f\u6a21\u584a\uff0c\u8ca0\u8cac\u5c07\u5169\u500b\u4e0d\u540c\u7684\u8f38\u5165\u7279\u5fb5\u5c64\u300c\u5408\u4f75\u300d\u6210\u4e00\u500b\u65b0\u7684\u8f38\u51fa\u7279\u5fb5\u5c64\u3002\u9019\u500b\u5408\u4f75\u7684\u904e\u7a0b\u5177\u9ad4\u5305\u542b\u4ee5\u4e0b\u6b65\u9a5f\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u9078\u64c7\u7b2c\u4e00\u500b\u7279\u5fb5\u5c64: \u5f9e\u591a\u500b\u5019\u9078\u7279\u5fb5\u5c64\uff08\u53ef\u80fd\u662f C3, C4, C5 \u7b49\uff09\u4e2d\u9078\u64c7\u4e00\u500b\uff0c\u7a31\u4e4b\u70ba hi\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u9078\u64c7\u7b2c\u4e8c\u500b\u7279\u5fb5\u5c64: \u518d\u6b21\u5f9e\u591a\u500b\u5019\u9078\u7279\u5fb5\u5c64\u4e2d\u9078\u64c7\u4e00\u500b\uff0c\u7a31\u4e4b\u70ba hj\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u78ba\u5b9a\u8f38\u51fa\u7279\u5fb5\u7684\u5c3a\u5bf8: \u9078\u64c7\u4e00\u500b\u5206\u8fa8\u7387\u5927\u5c0f\uff0c\u9019\u5c07\u662f\u5408\u4f75\u5f8c\u65b0\u7684\u7279\u5fb5\u5c64\u7684\u5927\u5c0f\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u9078\u64c7\u5408\u4f75\u64cd\u4f5c: \u4f7f\u7528\u4e00\u500b\u7279\u5b9a\u7684\u6578\u5b78\u64cd\u4f5c\uff08\u5982\u52a0\u6cd5\u6216\u5168\u5c40\u6c60\u5316\uff09\u4f86\u5408\u4f75 hi \u548c hj\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6b65\u9a5f 4 \u4e2d\uff0c\u5982\u4e0b\u5716\uff0c\u641c\u7d22\u7a7a\u9593\u4e2d\u8a2d\u8a08\u4e86\u5169\u500b\u4e8c\u5143\u904b\u7b97\uff1a\u6c42\u548c\u548c\u5168\u5c40\u6c60\u5316\uff0c\u9078\u64c7\u9019\u5169\u500b\u904b\u7b97\u662f\u56e0\u70ba\u5b83\u5011\u7c21\u55ae\u4e14\u9ad8\u6548\u3002\u4ed6\u5011\u6c92\u6709\u6dfb\u52a0\u4efb\u4f55\u984d\u5916\u7684\u53ef\u8a13\u7df4\u53c3\u6578\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c hi \u548c hj \u7684\u5c3a\u5bf8\u4e0d\u540c\uff0c\u5728\u5408\u4f75\u4e4b\u524d\u6703\u4f7f\u7528\u4e0a\u63a1\u6a23\u6216\u4e0b\u63a1\u6a23\u4f86\u4f7f\u5b83\u5011\u6709\u76f8\u540c\u7684\u5c3a\u5bf8\u3002\u5408\u4f75\u5f8c\u7684\u65b0\u7279\u5fb5\u5c64\u6703\u7d93\u904e\u4e00\u500b ReLU \u6fc0\u6d3b\u51fd\u6578\u3001\u4e00\u500b 3\xd73 \u7684\u5377\u7a4d\u5c64\uff0c\u4ee5\u53ca\u4e00\u500b BatchNorm \u5c64\uff0c\u4ee5\u589e\u5f37\u5176\u8868\u9054\u80fd\u529b\u3002\u9019\u6a23\uff0cFPN \u80fd\u901a\u904e\u591a\u500b\u9019\u6a23\u7684\u5408\u4f75\u55ae\u5143\uff0c\u4e0d\u65b7\u5730\u5408\u4f75\u548c\u6539\u9032\u7279\u5fb5\u5c64\uff0c\u6700\u7d42\u751f\u6210\u4e00\u7d44\u66f4\u597d\u7684\u591a\u5c3a\u5ea6\u7279\u5fb5\u5c64\uff08P3, P4, P5 \u7b49\uff09\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u64da\u5be6\u9a57\u6578\u64da\u986f\u793a\uff0c\u96a8\u8457\u8a13\u7df4\u6b65\u9a5f\u7684\u589e\u52a0\uff0c\u63a7\u5236\u5668\u80fd\u5920\u751f\u6210\u8d8a\u4f86\u8d8a\u597d\u7684\u5b50\u7db2\u7d61\u67b6\u69cb\u3002\u9019\u4e00\u904e\u7a0b\u5927\u7d04\u5728 8000 \u500b\u8a13\u7df4\u6b65\u9a5f\u5f8c\u9054\u5230\u4e00\u500b\u7a69\u5b9a\u72c0\u614b\uff0c\u4e5f\u5c31\u662f\u8aaa\uff0c\u65b0\u589e\u7684\u7368\u7279\u67b6\u69cb\u6578\u91cf\u958b\u59cb\u6536\u6582\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u5f8c\uff0c\u6839\u64da\u734e\u52f5\u7684\u512a\u5316\u7d50\u679c\uff0c\u4f5c\u8005\u9078\u64c7\u4e86 AP \u6700\u9ad8\u7684\u67b6\u69cb\u9032\u884c\u9032\u4e00\u6b65\u7684\u8a13\u7df4\u548c\u8a55\u4f30\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7a2e\u67b6\u69cb\u9996\u5148\u662f\u5728 8000 \u6b65\u7684\u8a13\u7df4\u4e2d\u88ab\u63a1\u6a23\u51fa\u4f86\u7684\uff0c\u4e26\u5728\u5f8c\u7e8c\u7684\u5be6\u9a57\u4e2d\u88ab\u591a\u6b21\u63a1\u6a23\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u8457\uff0c\u4f5c\u8005\u5c55\u793a\u4e86\u6839\u64da NAS \u7b97\u6cd5\u5f97\u5230\u7684 FPN \u67b6\u69cb\uff0c\u5982\u4e0b\u5716\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasfpn_5",src:s(39610).A+"",width:"800",height:"602"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u5716\u770b\u8d77\u4f86\u5f88\u8907\u96dc\uff0c\u6709\u7a2e\u770b\u4e0d\u61c2\u4f46\u662f\u89ba\u5f97\u5f88\u53b2\u5bb3\u7684\u611f\u89ba\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u5be6\u6c92\u6709\uff0c\u6211\u628a\u5b83\u8a3b\u8a18\u4e00\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasfpn_3",src:s(79724).A+"",width:"1024",height:"523"})}),"\n",(0,i.jsx)(e.p,{children:"\u7d93\u904e\u8a3b\u8a18\u8aaa\u660e\u5f8c\uff0c\u6211\u5011\u5c31\u80fd\u597d\u597d\u5730\u4f86\u770b\u4e00\u4e0b NAS-FPN \u7684\u7d50\u679c\u4e86\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\u5728\u4e00\u958b\u59cb (a) \u4e2d\u7684 FPN \u4e26\u4e0d\u592a\u8868\u771f\u6b63\u7684 FPN\uff0c\u5b83\u662f\u300c\u985e FPN\u300d\uff0c\u56e0\u70ba\u4ed6\u8f38\u51fa\u7279\u5fb5\u5716\u7684\u65b9\u5f0f\u548c\u8cc7\u6599\u6d41\u5f97\u9806\u5e8f\uff0c\u78ba\u5be6\u8ddf FPN \u662f\u4e00\u81f4\u7684\uff0c\u4f46\u539f\u672c\u7684 FPN \u5167\u90e8\u6c92\u6709\u9019\u9ebc\u591a\u5c64\u5377\u7a4d\u5c64\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u518d\u4f86\uff0c\u6211\u5011\u770b\u4e00\u4e0b NAS-FPN \u7684\u5be6\u9a57\u7d50\u679c\uff0c\u5f9e (b) -> (f) \u7684\u9806\u5e8f\u4f86\u770b\uff0c\u96a8\u8457 AP \u5206\u6578\u4e0d\u65b7\u5730\u63d0\u5347\uff0c\u53ef\u4ee5\u767c\u73fe\u641c\u7d22\u67b6\u69cb\u7684\u65b9\u5f0f\u6700\u5f8c\u9a57\u8b49 PANet \u9019\u7bc7\u6587\u7ae0\u7684\u8a2d\u8a08\u7406\u5ff5\u662f\u6b63\u78ba\u7684\uff0c\u5373\u5716 (f)\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8cc7\u6599\u5fc5\u9808\u7531\u4e0a\u5f80\u4e0b\u878d\u5408"}),"\n",(0,i.jsx)(e.li,{children:"\u8cc7\u6599\u5fc5\u9808\u518d\u7531\u4e0b\u5f80\u4e0a\u878d\u5408"}),"\n",(0,i.jsx)(e.li,{children:"\u96d6\u7136\u7d30\u7bc0\u53ef\u80fd\u6709\u9ede\u4e0d\u4e00\u6a23\uff0c\u4f46\u610f\u601d\u5230\u4e86\u5c31\u597d\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasfpn_4",src:s(34071).A+"",width:"1024",height:"472"})}),"\n",(0,i.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u904e\u53bb\u7684\u7814\u7a76\u4e2d\uff0c\u7279\u5fb5\u878d\u5408\u67b6\u69cb\u591a\u662f\u901a\u904e\u4eba\u5de5\u8a2d\u8a08\u548c\u5be6\u9a57\u5f97\u4f86\uff0c\u9019\u7a2e\u505a\u6cd5\u7684\u53ef\u9760\u6027\u548c\u898f\u6a21\u4e00\u76f4\u662f\u5927\u5bb6\u8cea\u7591\u7684\u7126\u9ede\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u78ba\u5be6\uff0c\u5be6\u9a57\u6027\u7684\u7814\u7a76\u96d6\u7136\u80fd\u5920\u63d0\u4f9b\u67d0\u4e9b\u898b\u89e3\uff0c\u4f46\u5176\u50f9\u503c\u5f80\u5f80\u5c40\u9650\u65bc\u5be6\u9a57\u7684\u898f\u6a21\u548c\u8a2d\u8a08\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6216\u8a31\u6211\u5011\u53ef\u4ee5\u63a5\u53d7\u67d0\u7d50\u8ad6\u7684\u300c\u7406\u8ad6\u6839\u57fa\u300d\u53ef\u80fd\u4e0d\u5920\uff0c\u4e26\u63a5\u53d7\u7d93\u7531\u300c\u5be6\u9a57\u300d\u6240\u5f97\u5230\u7684\u7d50\u8ad6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u9019\u4e9b\u6587\u737b\u8981\u600e\u9ebc\u8aaa\u670d\u5225\u4eba\u8aaa\u300c\u5be6\u9a57\u300d\u7684\u91cf\u7d1a\u662f\u8db3\u5920\u7684\u5462\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"\uff0a"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6b64\uff0cNAS-FPN \u85c9\u7531\u4e00\u500b\u7cbe\u5bc6\u7684\u641c\u5c0b\u67b6\u69cb\u548c\u524d\u6240\u672a\u6709\u7684\u8a08\u7b97\u898f\u6a21\uff08\u53ef\u80fd\u6c92\u6709\u5176\u4ed6\u516c\u53f8\u6709\u9322\uff0c\u800c\u4e14\u9858\u610f\u82b1\u9322\u505a\u9019\u7a2e\u8a08\u7b97\uff09\uff0c\u5c0d\u9019\u500b\u554f\u984c\u63d0\u51fa\u4e86\u4e00\u500b\u5168\u65b0\u7684\u89d2\u5ea6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u4e0d\u50c5\u78ba\u8a8d\u4e86 PANet \u7684\u8a2d\u8a08\u7406\u5ff5\u7684\u6b63\u78ba\u6027\uff0c\u800c\u4e14\u9084\u63ed\u793a\u4e86\u5176\u9023\u63a5\u65b9\u5f0f\u53ef\u80fd\u5b58\u5728\u7684\u4f4e\u6548\u554f\u984c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7a2e\u7d93\u7531 NAS \u641c\u7d22\u5f97\u5230\u7684\u7d50\u5408\u65b9\u5f0f\uff0c\u4e0d\u50c5\u589e\u52a0\u4e86\u524d\u4eba\u7814\u7a76\u7684\u53ef\u4fe1\u5ea6\uff0c\u4e5f\u70ba\u672a\u4f86\u7684\u7814\u7a76\u63d0\u4f9b\u4e86\u65b0\u7684\u65b9\u5411\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},51390:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/nasfpn_1-01b0062e70541234d43589331cde5246.jpg"},25097:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/nasfpn_2-02f26c48d4b0f0596bd9e17e923084a6.jpg"},79724:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/nasfpn_3-55712a3bcdfaa8f0bcefb5c2ba165093.jpg"},34071:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/nasfpn_4-4fc798fa415af362fcbb494ab6b4349b.jpg"},39610:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/nasfpn_5-74aa9280cbf9836c059d825df38e640a.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);