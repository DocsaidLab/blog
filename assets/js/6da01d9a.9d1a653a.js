"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9559],{86952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(74848),s=t(28453);const r={sidebar_position:2},a="PANet",l={id:"feat-fusion/panet",title:"PANet",description:"\u7d66\u6211\u4e00\u689d\u6377\u5f91",source:"@site/papers/feat-fusion/panet.md",sourceDirName:"feat-fusion",slug:"/feat-fusion/panet",permalink:"/papers/feat-fusion/panet",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714946536e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"papersSidebar",previous:{title:"FPN",permalink:"/papers/feat-fusion/fpn"},next:{title:"Hourglass",permalink:"/papers/feat-fusion/hourglass"}},d={},c=[{value:"\u7d66\u6211\u4e00\u689d\u6377\u5f91",id:"\u7d66\u6211\u4e00\u689d\u6377\u5f91",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"PANet \u6a21\u578b\u8a2d\u8a08",id:"panet-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u8def\u5f91\u805a\u5408\u7db2\u8def\uff08Path Aggregation FPN\uff09",id:"\u8def\u5f91\u805a\u5408\u7db2\u8defpath-aggregation-fpn",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u6bd4\u8d77\u57fa\u672c\u7684 FPN \u5982\u4f55\uff1f",id:"\u6bd4\u8d77\u57fa\u672c\u7684-fpn-\u5982\u4f55",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"panet",children:"PANet"}),"\n",(0,i.jsx)(n.h2,{id:"\u7d66\u6211\u4e00\u689d\u6377\u5f91",children:"\u7d66\u6211\u4e00\u689d\u6377\u5f91"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/1803.01534v4",children:"Path Aggregation Network for Instance Segmentation (2018.03)"})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u7d93\u5178\u6b3e\u7684 FPN \u63d0\u51fa\u4f86\u5f8c\uff0c\u300c\u8a72\u5982\u4f55\u7528\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u9032\u884c\u7279\u5fb5\u878d\u5408\uff1f\u300d\u6210\u70ba\u4e00\u9580\u5f85\u7814\u7a76\u7684\u8ab2\u984c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u5011\u4f86\u770b\u770b\u53e6\u5916\u4e00\u500b\u540c\u6a23\u662f\u5f88\u7d93\u5178\u7684\u67b6\u69cb \u2014\u2014 PANet\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 PANet \u7684\u8ad6\u6587\u4e2d\uff0c\u4e3b\u8981\u6bd4\u8f03\u7684\u5c0d\u8c61\u5c31\u662f FPN \u67b6\u69cb\uff0c\u82e5\u60a8\u9084\u4e0d\u719f\u6089\uff0c\u53ef\u4ee5\u53c3\u95b1\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.strong,{children:["\u50b3\u9001\u9580\uff1a ",(0,i.jsx)(n.a,{href:"./fpn",children:"FPN\uff1a\u91d1\u5b57\u5854\u67b6\u69cb"})]})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u56de\u60f3\u4e00\u4e0b\u4e4b\u524d\u6211\u5011\u5728 FPN \u5f97\u5230\u7684\u4e00\u500b\u5c0f\u7d50\u8ad6\uff1a\u300c\u4e0b\u5230\u4e0a\uff0c\u4e0a\u5230\u4e0b\uff0c\u7136\u5f8c\u52a0\u8d77\u4f86\u3002\u300d"}),"\n",(0,i.jsx)(n.p,{children:"\u5c0d\u65bc\u9019\u500b\u8a2d\u8a08\uff0cPANet \u8a8d\u70ba\u662f\u4e0d\u5920\u7684\uff0c\u4ee5\u4e0b\u662f\u4f86\u81ea\u65bc\u8ad6\u6587\u4f5c\u8005\u7684\u8ad6\u8ff0\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The insightful point that neurons in high layers strongly respond to entire objects while other neurons are more likely to be activated by local texture and patterns manifests the necessity of augmenting a top-down path to propagate semantically strong features and enhance all features with reasonable classification capability in FPN."}),"\n",(0,i.jsx)(n.p,{children:"Excerpted from PANet"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u8a8d\u70ba\u4e0a\u9762\u9019\u6bb5\u6558\u8ff0\u5982\u679c\u76f4\u63a5\u7ffb\u8b6f\u6210\u4e2d\u6587\uff0c\u5c31\u5931\u53bb\u4e86\u539f\u4f86\u7684\u7f8e\u611f\uff0c\u6240\u4ee5\u9084\u662f\u9078\u64c7\u628a\u4ed6\u7559\u4e0b\u4f86\u3002\u7c21\u55ae\u4f86\u8aaa\uff0c\u9802\u5c64\u7684\u795e\u7d93\u5143\u53ef\u4ee5\u770b\u5230\u6574\u500b\u7269\u9ad4\uff0c\u5e95\u5c64\u795e\u7d93\u5143\u53ef\u4ee5\u770b\u5230\u5c40\u90e8\u7d0b\u7406\uff0c\u6240\u4ee5\u6211\u5011\u4e0d\u80fd\u53ea\u6709\u4e00\u689d\u878d\u5408\u7279\u5fb5\u7684\u8def\u5f91\uff0c\u8981\u518d\u591a\u7d66\u4e00\u9ede\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9019\u6bb5\u8a71\u5df2\u7d93\u628a\u5168\u6587\u7684\u6838\u5fc3\u529f\u80fd\u90fd\u8b1b\u5b8c\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"panet_1",src:t(1363).A+"",width:"1024",height:"396"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u5011\u642d\u914d\u5716\u4f86\u770b\uff0c\u5c07\u9019\u6bb5\u8a71\u62c6\u958b\u4f86\u770b\u4e00\u4e0b\uff0c\u9996\u5148\u662f neurons in high layers\uff0c\u6307\u7684\u662f Block5\u3002\u9019\u4e00\u5c64\u7684\u795e\u7d93\u5143\u7684\u611f\u53d7\u91ce\uff08Receptive Field\uff09\u975e\u5e38\u5ee3\uff0c\u4ed6\u5011\u80fd\u95dc\u6ce8\u5230\u8f03\u5927\u7684\u7269\u4ef6\u3002\u5176\u4ed6\u7684\u6bd4\u8f03\u4f4e\u5c64\u7684\u7279\u5fb5\uff0c\u4f8b\u5982 P1, P2 \u7b49\uff0c\u5247\u662f\u6703\u95dc\u6ce8 local texture and patterns\uff08\u5c40\u90e8\u7279\u5fb5\u548c\u7d0b\u7406\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u539f\u672c\u7684 FPN \u7684\u8a2d\u8a08\uff0c\u8b93\u5e95\u5c64\uff08\u4f8b\u5982P1\uff09\u80fd\u5920\u53c3\u8003\u9ad8\u5c64\u7684\u7279\u5fb5\uff08\u4f8b\u5982P5\uff09\u2014\u2014  \u4ee5\u4e00\u500b\u5f88\u77ed\u7684\u8def\u5f91\uff0c\u53ef\u80fd\u53ea\u6709\u6578\u500b\u6216\u6578\u5341\u500b\u5377\u7a4d\u5c64\u3002\u4f46\u9ad8\u5c64\uff08\u4f8b\u5982P5\uff09\u82e5\u8981\u53c3\u8003\u5e95\u5c64\uff08\u4f8b\u5982P1\uff09\u7684\u8cc7\u8a0a\u7684\u8a71\uff0c\u5247\u53ef\u80fd\u9700\u8981\u6578\u767e\u5c64\u5377\u7a4d \u2014\u2014  \u57fa\u65bc\u9078\u7528\u7684\u9aa8\u5e79\u7db2\u8def\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e5f\u5dee\u592a\u591a\u4e86\u5427\uff0c\u662f\u4e0d\u662f\u61c9\u8a72\u8981\u6539\u4e00\u6539\uff1f"}),"\n",(0,i.jsx)(n.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(n.h3,{id:"panet-\u6a21\u578b\u8a2d\u8a08",children:"PANet \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"panet_2",src:t(47917).A+"",width:"1024",height:"348"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4e0a\u5716\uff0c\u9019\u5c31\u662f\u4f5c\u8005\u63d0\u51fa\u4f86\u7684\u6539\u5584\u65b9\u5f0f\u3002\u9996\u5148\u662f\u5716 (a)\uff0c\u9019\u662f\u6211\u5011\u4e4b\u524d\u63d0\u5230\u904e\u7684 FPN \u67b6\u69cb\u3002\u63a5\u8457\u662f\u5716 (b)\uff0c\u9019\u662f\u4f5c\u8005\u52a0\u4e0a\u7684\u8def\u5f91\uff0c\u6982\u5ff5\u4e0a\u5c31\u662f\uff1a\u89ba\u5f97\u539f\u672c\u8def\u5f91\u592a\u9577\uff08\u5716\u4e0a\u7684\u7d05\u7dda\uff09\uff0c\u90a3\u5c31\u7d66\u4ed6\u4e00\u689d\u5f9e\u4e0b\u5230\u4e0a\u7684\u6377\u5f91\uff08\u5716\u4e0a\u7684\u7da0\u7dda\uff09\u3002\u5716 (c) \u548c \u5716 (d) \u5df2\u7d93\u5c6c\u65bc Head \u7684\u7d50\u69cb\uff0c\u9019\u4e0d\u5728\u6211\u5011\u9019\u6b21\u7684\u8a0e\u8ad6\u7bc4\u570d\uff0c\u5c31\u5148\u7565\u904e\u4e0d\u63d0\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8def\u5f91\u805a\u5408\u7db2\u8defpath-aggregation-fpn",children:"\u8def\u5f91\u805a\u5408\u7db2\u8def\uff08Path Aggregation FPN\uff09"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u5f8c\u6211\u5011\u4ed4\u7d30\u8b1b\u4e00\u4e0b\u8def\u5f91\u805a\u5408\u6a21\u7d44\u7684\u5be6\u4f5c\u65b9\u5f0f\uff1a\u6bcf\u500b\u69cb\u5efa\u584a\u7684\u505a\u6cd5\u662f\uff0c\u6211\u5011\u628a\u4f86\u81ea\u8f03\u5e95\u5c64\u7684\u7279\u5fb5\u5716\uff08Ni\uff09\u548c\u9ad8\u4e00\u5c64\u7684\u7279\u5fb5\u5716\uff08Pi+1\uff09\u653e\u5728\u4e00\u8d77\uff0c\u7136\u5f8c\u88fd\u4f5c\u4e00\u500b\u65b0\u7684\u7279\u5fb5\u5716\uff08Ni+1\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5c0d\u65bc\u6bcf\u500b\u7279\u5fb5\u5716\uff08Ni\uff09\uff0c\u9996\u5148\u4f7f\u7528\u4e00\u7a2e 3\xd73 \u5927\u5c0f\u7684\u5377\u7a4d\u904b\u7b97\uff0c\u642d\u914d stride=2\uff0c\u5b83\u6703\u628a\u5716\u7247\u7684\u7a7a\u9593\u5c3a\u5bf8\u7e2e\u5c0f\u4e00\u534a\uff0c\u597d\u8b93\u6211\u5011\u8655\u7406\u66f4\u5c11\u7684\u8cc7\u6599\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5716 1 \u4e2d\u7684 N2 \u53ea\u662f P2\uff0c\u6c92\u6709\u9032\u884c\u4efb\u4f55\u8655\u7406\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u8457\uff0c\u628a\u7279\u5fb5\u5716\uff08Pi+1\uff09\u4e2d\u7684\u6bcf\u500b\u5c0f\u65b9\u584a\uff0c\u8ddf\u5c3a\u5bf8\u8b8a\u5c0f\u7684\u7279\u5fb5\u5716\uff08Ni\uff09\u5c0d\u61c9\u4f4d\u7f6e\u7684\u5c0f\u65b9\u584a\u76f8\u52a0\u3002\u6700\u5f8c\uff0c\u6211\u5011\u518d\u7528\u53e6\u4e00\u7a2e3\xd73\u7684\u5377\u7a4d\u904b\u7b97\u8655\u7406\u9019\u500b\u7d50\u5408\u5f8c\u7684\u7279\u5fb5\u5716\uff0c\u9019\u6a23\u5c31\u5f97\u5230\u4e86\u4f9b\u5f8c\u7e8c\u5b50\u7db2\u7d61\u4f7f\u7528\u7684\u65b0\u7279\u5fb5\u5716\uff08Ni+1\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6574\u500b\u904e\u7a0b\u662f\u91cd\u8907\u9032\u884c\u7684\uff0c\u76f4\u5230\u63a5\u8fd1\u6700\u9802\u5c64\u7684\u7279\u5fb5\u5716\uff08P5\uff09\u5c31\u505c\u6b62\u3002\u5728\u9019\u4e9b\u69cb\u5efa\u584a\u4e2d\uff0cPANet \u4fdd\u6301\u7279\u5fb5\u5716\u7684\u901a\u9053\u6578\u70ba 256\uff0c\u800c\u4e14\u6bcf\u500b\u5377\u7a4d\u904b\u7b97\u5f8c\u90fd\u6703\u52a0\u4e0a ReLU \u7684\u6fc0\u6d3b\u51fd\u6578\uff0c\u4f5c\u8005\u8a8d\u70ba\u9019\u53ef\u4ee5\u8b93\u6a21\u578b\u5b78\u7fd2\u5230\u66f4\u6709\u7528\u7684\u7279\u5fb5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u5f8c\uff0c\u5f9e\u9019\u4e9b\u65b0\u751f\u6210\u7684\u7279\u5fb5\u6620\u5c04\u4e2d\uff0c\u628a\u6bcf\u500b\u63d0\u6848\u7684\u7279\u5fb5\u7db2\u683c\u7d50\u5408\u5728\u4e00\u8d77\uff0c\u9019\u4e9b\u7279\u5fb5\u7db2\u683c\u5c31\u662f\u4e0a\u5716\u4e2d\u7684 [N2\uff0cN3\uff0cN4\uff0cN5]\u3002\u901a\u904e\u9019\u6a23\u7684\u65b9\u5f0f\uff0cPANet \u67b6\u69cb\u4e0d\u50c5\u4fdd\u7559\u4e86\u7279\u5fb5\u7684\u91cd\u8981\u6027\uff0c\u9084\u6709\u6548\u5730\u589e\u5f37\u4e86\u4fe1\u606f\u7684\u6d41\u52d5\uff0c\u70ba\u5f8c\u7e8c\u7684\u4efb\u52d9\u5960\u5b9a\u4e86\u5805\u5be6\u7684\u57fa\u790e\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(n.h3,{id:"\u6bd4\u8d77\u57fa\u672c\u7684-fpn-\u5982\u4f55",children:"\u6bd4\u8d77\u57fa\u672c\u7684 FPN \u5982\u4f55\uff1f"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"panet_3",src:t(63344).A+"",width:"1024",height:"456"})}),"\n",(0,i.jsx)(n.p,{children:"\u7576\u6211\u5011\u6df1\u5165\u4e86\u89e3\u9019\u500b\u67b6\u69cb\u6642\uff0c\u53ef\u4ee5\u770b\u5230\u4f5c\u8005\u5728\u512a\u5316\u904e\u7a0b\u4e2d\u9032\u884c\u4e86\u4e0d\u5c11\u7684\u5206\u6790\u548c\u5be6\u9a57\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8b93\u6211\u5011\u4e00\u8d77\u4f86\u770b\u770b\u5176\u4e2d\u7684\u4e00\u4e9b\u4eae\u9ede\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u805a\u7126\u5728\u300c\u591a\u5c3a\u5ea6\u8a13\u7df4\u300d\u9019\u500b\u5143\u7d20\uff0c\u4e5f\u5c31\u662f\u5716\u4e2d\u7684\u300cMST\u300d\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9019\u88e1\u5c31\u662f\u4e4b\u524d\u63d0\u5230\u7684 FPN \u7684\u67b6\u69cb\u5be6\u4f5c\uff0c\u53ef\u4ee5\u770b\u5230\u7576\u52a0\u5165\u9019\u500b\u5143\u7d20\u7684\u6642\u5019\uff0c\u53ef\u4ee5\u8b93\u539f\u672c\u7684\u6a21\u578b\u8868\u73fe AP \u5206\u6578\u63d0\u5347 2%\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u8457\u4f5c\u8005\u52a0\u5165\u4e86\u300c\u591a GPU \u7684 BatchNorm\u300d\u9019\u500b\u5143\u7d20\uff0c\u5148\u57fa\u65bc\u539f\u672c\u7684\u591a\u5c3a\u5ea6\u67b6\u69cb\u4e0a\u518d\u63d0\u5347 0.4%\uff0c\u518d\u4f86\u5c31\u662f\u672c\u8ad6\u6587\u4e2d\u5f37\u8abf\u7684\u300c\u81ea\u4e0b\u800c\u4e0a\u7684\u8def\u5f91\u589e\u5f37\u300d\u9019\u500b\u95dc\u9375\u5143\u7d20\uff0c\u4e5f\u5c31\u662f\u4e0a\u5716\u4e2d\u7684 \u300cBPA\u300d\u3002\u9019\u500b\u65b9\u6cd5\u7684\u6838\u5fc3\u7406\u5ff5\u662f\u5f9e\u5e95\u90e8\u958b\u59cb\uff0c\u901a\u904e\u5c07\u8f03\u4f4e\u5c64\u6b21\u7684\u7279\u5fb5\u5716\u8207\u9ad8\u5c64\u6b21\u7684\u7279\u5fb5\u5716\u7d50\u5408\uff0c\u5efa\u7acb\u8d77\u4e00\u500b\u66f4\u8c50\u5bcc\u7684\u4fe1\u606f\u5c64\u6b21\u7d50\u69cb\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u52a0\u5165\u4e86\u300cBPA\u300d\u4e4b\u5f8c\uff0c\u53ef\u4ee5\u5c07\u6a21\u578b\u8868\u73fe\u518d\u6b21\u63d0\u5347 0.7%\uff0c\u9019\u908a\u6211\u5011\u89ba\u5f97\u9019\u500b\u6d88\u878d\u5be6\u9a57\u6709\u9ede\u53ef\u60dc\uff0c\u5728\u300cMST\u300d\u548c\u300cBPA\u300d\u4e4b\u9593\u88ab\u63d2\u5165\u4e86\u4e00\u7d44\u300cMBN\u300d\u7684\u5143\u7d20\uff0c\u56e0\u6b64\u6c92\u80fd\u66f4\u76f4\u89c0\u5730\u770b\u51fa\u55ae\u7d14\u7684\u300cMST\u300d\u548c\u300cMST+BPA\u300d\u7684\u5c0d\u6bd4\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u4e86\u300c\u81ea\u4e0b\u800c\u4e0a\u7684\u8def\u5f91\u589e\u5f37\u300d\uff0c\u4f5c\u8005\u9084\u5f15\u5165\u4e86\u4e00\u4e9b\u5176\u4ed6\u95dc\u9375\u5143\u7d20\uff0c\u8b93\u6574\u500b\u67b6\u69cb\u66f4\u52a0\u5f37\u5927\u3002\u96d6\u7136\u9019\u4e9b\u662f\u5c6c\u65bc Model Head \u7684\u90e8\u5206\uff0c\u4e0d\u662f\u672c\u6587\u7684\u91cd\u9ede\uff0c\u4e0d\u904e\u65e2\u7136\u5716\u8868\u90fd\u653e\u4e0a\u4f86\u4e86\uff0c\u9019\u908a\u5c31\u7c21\u55ae\u5e36\u904e\u904e\u4e00\u4e9b\u8cc7\u8a0a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\u4e00\u500b\u662f\u300c\u81ea\u9069\u61c9\u7279\u5fb5\u6c60\u300d\uff0c\u9019\u500b\u6280\u8853\u7684\u4f5c\u7528\u662f\u5c07\u7279\u5fb5\u7db2\u683c\u548c\u6240\u6709\u7279\u5fb5\u7d1a\u5225\u9032\u884c\u9023\u63a5\uff0c\u4f7f\u6bcf\u500b\u7279\u5fb5\u7d1a\u5225\u4e2d\u7684\u6709\u7528\u4fe1\u606f\u80fd\u5920\u76f4\u63a5\u50b3\u64ad\u5230\u5f8c\u7e8c\u7684\u5b50\u7db2\u7d61\u3002\u9019\u7a2e\u65b9\u5f0f\u8b93\u4e0d\u540c\u5c64\u6b21\u7684\u7279\u5fb5\u53ef\u4ee5\u66f4\u597d\u5730\u5408\u4f5c\uff0c\u9032\u4e00\u6b65\u589e\u5f37\u6a21\u578b\u7684\u8868\u73fe\u3002\u53e6\u5916\uff0c\u300c\u5168\u9023\u63a5\u878d\u5408\u300d\u4e5f\u662f\u4e00\u500b\u91cd\u8981\u7684\u90e8\u5206\u3002\u901a\u904e\u9019\u7a2e\u65b9\u6cd5\uff0c\u4f5c\u8005\u81f4\u529b\u65bc\u63d0\u9ad8\u6a21\u578b\u7684\u9810\u6e2c\u8cea\u91cf\uff0c\u5f9e\u800c\u6539\u5584\u6574\u9ad4\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(n.p,{children:"PANet \u5ef6\u7e8c\u4e86 FPN \u7684\u8a2d\u8a08\u7406\u5ff5\uff0c\u7e7c\u7e8c\u63a2\u7d22\u5982\u4f55\u66f4\u597d\u5730\u89e3\u6c7a\u591a\u5c3a\u5ea6\u7684\u7279\u5fb5\u878d\u5408\u554f\u984c\uff0c\u540c\u6642\u5728\u6b64\u57fa\u790e\u4e0a\u9032\u884c\u4e86\u66f4\u9032\u4e00\u6b65\u7684\u5275\u65b0\u3002\u9019\u500b\u67b6\u69cb\u4e0d\u50c5\u80fd\u5920\u6709\u6548\u5730\u7d50\u5408\u5404\u7a2e\u4e3b\u5e79\u7db2\u7d61\uff0c\u69cb\u5efa\u51fa\u66f4\u5f37\u5927\u7684\u7279\u5fb5\u91d1\u5b57\u5854\uff0c\u66f4\u80fd\u5920\u70ba\u591a\u5c3a\u5ea6\u7684\u4efb\u52d9\u63d0\u4f9b\u512a\u8d8a\u7684\u6027\u80fd\u6539\u9032\u3002"}),"\n",(0,i.jsx)(n.p,{children:"PANet \u7684\u8ad6\u6587\u5411\u6211\u5011\u50b3\u905e\u4e86\u5169\u500b\u91cd\u8981\u7684\u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u7121\u8ad6\u6211\u5011\u9762\u5c0d\u600e\u6a23\u7684\u591a\u5c3a\u5ea6\u554f\u984c\uff0c\u90fd\u5fc5\u9808\u8003\u616e\u5982\u4f55\u9032\u884c\u7279\u5fb5\u878d\u5408\u3002PANet \u7684\u8a2d\u8a08\u6982\u5ff5\u4e2d\u5145\u6eff\u4e86\u5c0d\u4e0d\u540c\u5c3a\u5ea6\u7279\u5fb5\u7684\u95dc\u6ce8\uff0c\u4e26\u901a\u904e\u8def\u5f91\u7684\u589e\u5f37\u4ee5\u53ca\u7279\u5fb5\u6c60\u548c\u878d\u5408\u7684\u65b9\u5f0f\uff0c\u5c07\u9019\u4e9b\u5c3a\u5ea6\u878d\u5408\u6210\u4e00\u500b\u5f37\u5927\u7684\u7279\u5fb5\u8868\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u6b21\uff0c\u6709\u5225\u65bc\u4e4b\u524d FPN \u63d0\u5230\u7684\uff1a\u300c\u4e0b \u2013> \u4e0a\uff0c\u4e0a \u2013> \u4e0b\uff0c\u7136\u5f8c\u76f8\u52a0\u3002\u300d\uff1b\u5728 PANet \u4e2d\uff0c\u4f5c\u8005\u8a8d\u70ba\u8981\u6539\u6210 \u300c\u4e0b \u2013> \u4e0a\uff0c\u4e0a \u2013> \u4e0b\uff0c\u4e0b \u2013> \u4e0a\uff0c\u7136\u5f8c\u76f8\u52a0\u3002\u300d\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u63a2\u7d22\u7279\u5fb5\u878d\u5408\u7684\u904e\u7a0b\u4e2d\uff0c\u9084\u5b58\u5728\u8457\u4e00\u7cfb\u5217\u6709\u5f85\u89e3\u6c7a\u7684\u554f\u984c\uff0c\u4f8b\u5982\u52a0\u6cd5\u878d\u5408\u8207\u9023\u63a5\u878d\u5408\u7684\u6bd4\u8f03\u3001\u878d\u5408\u6548\u7387\u7684\u63d0\u5347\uff0c\u4ee5\u53ca\u878d\u5408\u6b0a\u91cd\u7684\u8abf\u6574\u7b49\u3002\u9019\u4e9b\u8b70\u984c\u5c07\u5728\u672a\u4f86\u7684\u7814\u7a76\u4e2d\u9032\u4e00\u6b65\u63a2\u8a0e\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1363:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fpn_2-c3d635c32d5e688c8cd4718addfd29a7.jpg"},47917:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/panet_2-4e3ad8aa7847c06176c584f84e60b0ce.jpg"},63344:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/panet_3-53604030d93d316d1ef590fe4dea809d.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);