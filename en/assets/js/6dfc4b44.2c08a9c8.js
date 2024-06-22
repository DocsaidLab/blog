"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7662],{197:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>h});var r=e(74848),l=e(28453);const i={},o="[16.03] Hourglass",t={id:"hourglass/index",title:"[16.03] Hourglass",description:"\u88ab\u907a\u5fd8\u7684\u9577\u8005",source:"@site/papers/1603-hourglass/index.md",sourceDirName:"1603-hourglass",slug:"/hourglass/",permalink:"/en/papers/hourglass/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"papersSidebar",previous:{title:"Introduction",permalink:"/en/papers/intro"},next:{title:"[16.12] FPN",permalink:"/en/papers/fpn/"}},c={},h=[{value:"\u88ab\u907a\u5fd8\u7684\u9577\u8005",id:"\u88ab\u907a\u5fd8\u7684\u9577\u8005",level:2},{value:"\u6a21\u578b\u67b6\u69cb",id:"\u6a21\u578b\u67b6\u69cb",level:2},{value:"Hourglass \u7684\u6700\u521d\uff1f",id:"hourglass-\u7684\u6700\u521d",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function d(n){const s={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"1603-hourglass",children:"[16.03] Hourglass"}),"\n",(0,r.jsx)(s.h2,{id:"\u88ab\u907a\u5fd8\u7684\u9577\u8005",children:"\u88ab\u907a\u5fd8\u7684\u9577\u8005"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://arxiv.org/abs/1603.06937",children:"Stacked Hourglass Networks for Human Pose Estimation"})})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u4f60\u662f\u6642\u5e38\u5728\u4e0d\u540c\u8ad6\u6587\u9593\u5f98\u5f8a\u7684\u958b\u767c\u8005\uff0cHourglass \u67b6\u69cb\u5c31\u7b97\u8aaa\u4e0d\u4e0a\u719f\u6089\uff0c\u4e5f\u80af\u5b9a\u662f\u4e0d\u964c\u751f\u7684\u3002\u6211\u5011\u5148\u5feb\u901f\u5730\u4ecb\u7d39\u4e00\u4e0b\u9019\u500b\u67b6\u69cb\uff1a"}),"\n",(0,r.jsx)(s.p,{children:"Hourglass \u67b6\u69cb\u662f\u5c08\u70ba\u4eba\u9ad4\u59ff\u52e2\u4f30\u8a08\u4efb\u52d9\u800c\u8a2d\u8a08\u3002\u9019\u500b\u67b6\u69cb\u901a\u904e\u5168\u9762\u8655\u7406\u548c\u6574\u5408\u6240\u6709\u5c3a\u5ea6\u7684\u7279\u5fb5\uff0c\u81f4\u529b\u65bc\u6700\u4f73\u5730\u6355\u6349\u8207\u4eba\u9ad4\u76f8\u95dc\u7684\u591a\u7a2e\u7a7a\u9593\u95dc\u4fc2\u3002\u7814\u7a76\u5718\u968a\u986f\u793a\uff0c\u901a\u904e\u5c07\u81ea\u4e0b\u800c\u4e0a\u548c\u81ea\u4e0a\u800c\u4e0b\u7684\u8655\u7406\u65b9\u6cd5\u91cd\u8907\u61c9\u7528\uff0c\u4e26\u7d50\u5408\u4e2d\u9593\u7684\u76e3\u7763\u8a13\u7df4\uff0c\u53ef\u4ee5\u6975\u5927\u5730\u63d0\u5347\u7db2\u7d61\u7684\u6027\u80fd\u3002\u56e0\u6b64\uff0c\u4ed6\u5011\u5c07\u9019\u4e00\u65b0\u67b6\u69cb\u547d\u540d\u70ba\u300c\u5806\u758a\u6c99\u6f0f\u300d\u7db2\u7d61\u3002\u8a72\u7db2\u7d61\u57fa\u65bc\u9023\u7e8c\u7684\u6c60\u5316\u548c\u4e0a\u63a1\u6a23\u6b65\u9a5f\uff0c\u7528\u65bc\u751f\u6210\u6700\u7d42\u7684\u9810\u6e2c\u7d50\u679c\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u9019\u7bc7\u8ad6\u6587\u63d0\u51fa\u4f86\u7684\u6642\u9593\u6bd4 FPN \u9084\u8981\u65e9\u4e86\u534a\u5e74\u591a\uff0c\u4f46\u70ba\u4ec0\u9ebc\u4ed6\u5011\u7684\u540d\u6c23\u5dee\u7570\u5982\u6b64\u5de8\u5927\u5462\uff1f\u6700\u76f4\u89c0\u7684\u611f\u89ba\u5c31\u662f\u8ad6\u6587\u7684\u5f15\u7528\u6578\uff0c\u622a\u81f3 2023.08\uff0cFPN \u5f15\u7528\u6578\u70ba 20816\uff1bHourglass \u5f15\u7528\u6578\u70ba 5365\u3002\u600e\u9ebc\u90fd\u4e00\u6a23\u7684\u67b6\u69cb\u8a2d\u8a08\uff0c\u5f15\u7528\u6578\u537b\u53ef\u4ee5\u5dee\u8ddd\u56db\u500d\u4e4b\u591a\uff1f"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u7b49\u4e00\u4e0b\uff0c\u4f60\u8aaa\u5b83\u5011\u6709\u4e00\u6a23\uff1f"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u6a21\u578b\u67b6\u69cb",children:"\u6a21\u578b\u67b6\u69cb"}),"\n",(0,r.jsx)(s.p,{children:"\u6211\u5011\u4e4b\u524d\u5df2\u7d93\u804a\u904e FPN \u7684\u8a71\u984c\u4e86\uff0c\u5b83\u7684\u67b6\u69cb\u60f3\u5fc5\u4f60\u4e5f\u5f88\u719f\u6089\u4e86\u3002\u800c\u672c\u6b21\u8981\u8a0e\u8ad6\u7684 Hourglass \u67b6\u69cb\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"hourglass_1",src:e(87532).A+"",width:"1024",height:"468"})}),"\n",(0,r.jsx)(s.p,{children:"\u4e4d\u770b\u4e4b\u4e0b\uff0c\u4ed6\u5011\u662f\u622a\u7136\u4e0d\u540c\u7684\u67b6\u69cb\uff0c\u4f46\u6211\u5011\u5be6\u969b\u4f86\u9806\u8457\u8ad6\u6587\u7684\u6558\u8ff0\uff0c\u628a\u9019\u500b\u6a21\u578b\u8d70\u904e\u4e00\u6b21\uff1a"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u6355\u6349\u4e0d\u540c\u5c3a\u5ea6\u7684\u4fe1\u606f"})}),"\n",(0,r.jsx)(s.p,{children:"\u60f3\u50cf\u4f60\u5728\u89c0\u5bdf\u4e00\u5f35\u5716\u7247\uff0c\u4e0a\u9762\u6709\u4e00\u500b\u4eba\u7684\u5168\u8eab\u3002\u8981\u6e96\u78ba\u5730\u7406\u89e3\u9019\u500b\u4eba\u7684\u59ff\u52e2\uff0c\u6211\u5011\u9700\u8981\u540c\u6642\u95dc\u6ce8\u6574\u500b\u8eab\u9ad4\u4ee5\u53ca\u7d30\u7bc0\u7684\u90e8\u5206\uff0c\u6bd4\u5982\u81c9\u90e8\u548c\u624b\u90e8\u3002\u4f46\u9019\u4e9b\u4fe1\u606f\u53ef\u80fd\u4f4d\u65bc\u4e0d\u540c\u7684\u5c3a\u5ea6\u4e0a\u3002\u6c99\u6f0f\u8a2d\u8a08\u7684\u76ee\u7684\u5c31\u662f\u80fd\u5920\u540c\u6642\u6355\u6349\u9019\u4e9b\u4e0d\u540c\u5c3a\u5ea6\u7684\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u6c99\u6f0f\u7d50\u69cb\u7684\u8a2d\u8a08"})}),"\n",(0,r.jsx)(s.p,{children:"\u9019\u500b\u6a21\u578b\u7684\u7d50\u69cb\u5c31\u50cf\u9019\u500b\u6c99\u6f0f\u4e00\u6a23\u3002\u5b83\u7531\u4e00\u7cfb\u5217\u7684\u5377\u7a4d\u5c64\uff08\u7528\u4f86\u63d0\u53d6\u7279\u5fb5\uff09\u548c\u6700\u5927\u6c60\u5316\u5c64\uff08\u7528\u4f86\u6e1b\u5c11\u5716\u50cf\u7684\u5206\u8fa8\u7387\uff09\u7d44\u6210\u3002\u9019\u6a23\u53ef\u4ee5\u5728\u6bcf\u500b\u5206\u8fa8\u7387\u4e0b\u4fdd\u7559\u7a7a\u9593\u4fe1\u606f\uff0c\u4e0d\u8b93\u7d30\u7bc0\u4e1f\u5931\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u4e0a\u4e0b\u63a1\u6a23\u548c\u7279\u5fb5\u7d44\u5408"})}),"\n",(0,r.jsx)(s.p,{children:"\u7576\u7db2\u7d61\u8655\u7406\u5b8c\u8f03\u4f4e\u7684\u5206\u8fa8\u7387\u5f8c\uff0c\u5b83\u6703\u958b\u59cb\u9032\u884c\u4e0a\u63a1\u6a23\uff0c\u5c31\u50cf\u628a\u756b\u9762\u653e\u5927\u4e00\u6a23\u3002\u540c\u6642\uff0c\u5b83\u6703\u5c07\u4e0d\u540c\u5c3a\u5ea6\u7684\u7279\u5fb5\u7d44\u5408\u5728\u4e00\u8d77\uff0c\u9019\u6a23\u5c31\u80fd\u5920\u5c07\u5168\u8eab\u7684\u4fe1\u606f\u548c\u7d30\u7bc0\u7d50\u5408\u8d77\u4f86\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u6700\u7d42\u9810\u6e2c"})}),"\n",(0,r.jsx)(s.p,{children:"\u6700\u5f8c\uff0c\u7db2\u7d61\u6703\u901a\u904e\u4e00\u4e9b\u8655\u7406\u4f86\u751f\u6210\u6700\u7d42\u7684\u9810\u6e2c\u3002\u9019\u500b\u9810\u6e2c\u662f\u4e00\u7d44\u71b1\u5716\uff0c\u5c31\u50cf\u5730\u5716\u4e0a\u4e0d\u540c\u4f4d\u7f6e\u7684\u984f\u8272\u8868\u793a\u4e0d\u540c\u7684\u7279\u5fb5\u3002\u9019\u88e1\uff0c\u7db2\u7d61\u8a66\u5716\u9810\u6e2c\u5728\u5716\u50cf\u4e2d\u54ea\u4e9b\u5730\u65b9\u5b58\u5728\u8457\u4eba\u9ad4\u7684\u95dc\u7bc0\uff0c\u6bd4\u5982\u624b\u8098\u3001\u819d\u84cb\u7b49\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u6700\u5f8c\u7b2c\u56db\u500b\u90e8\u5206\u662f\u5c6c\u65bc\u7279\u5b9a\u5206\u652f\u9818\u57df\u7684\u61c9\u7528\uff0c\u5148\u4e0d\u7ba1\u4ed6\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u6211\u5011\u5148\u628a\u6a21\u578b\u67b6\u69cb\u5716\u91cd\u756b\u4e00\u6b21\uff1a"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"hourglass_2",src:e(13979).A+"",width:"1024",height:"561"})}),"\n",(0,r.jsx)(s.p,{children:"\u7da0\u8272\u6846\u8d77\u4f86\u7684\u5730\u65b9\uff0c\u5c6c\u65bc Backbone \u7684\u7bc4\u7587\uff0c\u4ed6\u505a\u4e86 N \u500b\u968e\u6bb5\u7684\u964d\u63a1\u6a23\u3002\u8ad6\u6587\u4e2d\u6709\u63d0\u5230\u9019\u88e1\u7684\u964d\u63a1\u6a23\u65b9\u5f0f\u70ba\u4e00\u9023\u4e32\u7684\u5377\u7a4d\u5c64\u642d\u914d\u6700\u5927\u6c60\u5316\u64cd\u4f5c\u3002\u63a5\u8457\u9032\u5165\u4e0a\u63a1\u6a23\u7684\u6d41\u7a0b\uff0c\u9010\u5c64\u653e\u5927\u7279\u5fb5\u5716\u7684\u89e3\u6790\u5ea6\u4e26\u76f8\u52a0\u3002\u901a\u9053\u5c0d\u9f4a\u7684\u64cd\u4f5c\u662f\u900f\u904e 1\xd71 \u5230\u5377\u7a4d\u4f86\u9054\u6210\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u770b\u5230\u9019\u908a\uff0c\u61c9\u8a72\u5f88\u660e\u986f\u4e86\u5427\uff1f"}),"\n",(0,r.jsx)(s.p,{children:"\u5c31\u4ee5\u7279\u5fb5\u878d\u5408\u7684\u65b9\u5f0f\u4f86\u770b\u7684\u8a71\uff0cHourglass \u5c31\u662f FPN\uff0cFPN \u5c31\u662f Hourglass \u5440\uff01"}),"\n",(0,r.jsx)(s.p,{children:"\u7576\u7136\uff0c\u4ed6\u5011\u7684\u61c9\u7528\u5834\u666f\u662f\u4e0d\u4e00\u6a23\u7684\uff0cHourglass \u5be6\u969b\u4e0a\u53ea\u62ff\u89e3\u6790\u5ea6\u6700\u9ad8\u7684\u90a3\u5c64\u7279\u5fb5\u5716\uff08P1\uff09\uff0c\u4e26\u91cd\u8907\u5806\u758a\u591a\u5c64\u5df2\u9054\u5230\u8403\u53d6\u95dc\u9375\u9ede\u7684\u6548\u679c\uff1b\u800c FPN \u4e26\u6c92\u6709\u7279\u5225\u63d0\u5230\u4ed6\u5011\u5806\u758a\u5f88\u591a\u5c64\uff08\u5be6\u52d9\u4e0a\u662f\u53ef\u884c\u7684\uff09\uff0c\u800c\u4e3b\u8981\u662f\u8457\u91cd\u5728\u4f7f\u7528\u4e0d\u540c\u89e3\u6790\u5ea6\u7684\u7279\u5fb5\u5716\uff08P3, P4, P5\uff09\uff0c\u900f\u904e\u4e0d\u540c\u611f\u53d7\u91ce\uff08Receptive Field\uff09\u7684\u7279\u5fb5\u5716\u4f86\u9054\u6210\u591a\u5c3a\u5ea6\u7269\u4ef6\u5075\u6e2c\u7684\u76ee\u7684\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u90a3\u5230\u5e95\u70ba\u4ec0\u9ebc\u9019\u5169\u7bc7\u8ad6\u6587\u7684\u5f15\u7528\u6578\u5dee\u9019\u9ebc\u591a\u5462\uff1f"}),"\n",(0,r.jsx)(s.p,{children:"\u5176\u5be6\u6211\u5011\u4e5f\u53ea\u80fd\u7d66\u4e00\u500b\u63a8\u6e2c\u7684\u7b54\u6848\uff0c\u56e0\u70ba\u61c9\u7528\u5834\u666f\u4e0d\u4e00\u6a23\uff0c\u7269\u4ef6\u5075\u6e2c\u6bd4\u8f03\u71b1\u9580\uff0c\u9019\u662f\u5176\u4e00\u3002\u53e6\u5916\u4e00\u500b\u53ef\u80fd\u7684\u539f\u56e0\u662f\u56e0\u70ba\u8ad6\u6587\u6558\u4e8b\u7684\u7d50\u69cb\uff1a\u5728 Hourglass \u7684\u8ad6\u6587\u7576\u4e2d\uff0c\u4e3b\u8981\u5f37\u8abf\u7684\u662f\u300c\u5806\u758a\u5f88\u591a\u5c64\u300d\u548c\u300c\u4e2d\u9593\u76e3\u7763\u300d\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"hourglass-\u7684\u6700\u521d",children:"Hourglass \u7684\u6700\u521d\uff1f"}),"\n",(0,r.jsx)(s.p,{children:"\u4ed4\u7d30\u7ffb\u95b1 Hourglass \u7684\u8ad6\u6587\uff0c\u5176\u5be6\u53ef\u4ee5\u627e\u5230\u66f4\u65e9\u7684\u4e00\u7bc7\u53c3\u8003\u6587\u737b\uff0c\u88e1\u9762\u6709\u8457\u975e\u5e38\u50cf\u7684\u7d50\u69cb\uff1a"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://arxiv.org/abs/1507.05699",children:"Bottom-Up and Top-Down Reasoning with Hierarchical Rectified Gaussians (2015.07)"})})}),"\n",(0,r.jsx)(s.p,{children:"\u5728\u9019\u7bc7\u6587\u737b\u4e2d\u4e26\u6c92\u6709\u7a31\u547c\u8a72\u67b6\u69cb\u70ba\u300cHourglass\u300d\uff0c\u4ed6\u53ea\u662f\u8aaa\u9019\u662f\u4e00\u500b\u300cBottom-Up\u300d\u548c\u300cTop-Down\u300d\u7684\u67b6\u69cb\uff0c\u4ee5\u4e0b\u7bc0\u9304\u4e00\u6bb5\u8ad6\u6587\u7684\u539f\u8a71\uff1a"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u672c\u6587\u4e3b\u8981\u7684\u76ee\u7684\u662f\u70ba\u4e86\u63a2\u7d22\u4e86\u4e00\u7a2e\u300c\u96d9\u5411\u300d\u7684\u7d50\u69cb\uff0c\u540c\u6642\u8003\u616e\u4e86\u81ea\u4e0a\u800c\u4e0b\u7684\u53cd\u994b\uff1a\u795e\u7d93\u5143\u53d7\u5230\u4e0a\u5c64\u548c\u4e0b\u5c64\u795e\u7d93\u5143\u7684\u5f71\u97ff\u3002\u8a72\u6587\u737b\u5c07\u901a\u904e\u5c07\u795e\u7d93\u5143\u8996\u70ba\u5177\u6709\u4fee\u6b63\u7684\u6f5b\u5728\u8b8a\u6578\uff0c\u5728\u4e00\u500b\u4e8c\u6b21\u80fd\u91cf\u51fd\u6578\u4e2d\u9032\u884c\u64cd\u4f5c\uff0c\u9019\u53ef\u4ee5\u770b\u4f5c\u662f\u4e00\u500b\u968e\u5c64\u4fee\u6b63\u9ad8\u65af\u6a21\u578b\uff08RGs\uff09\u7684\u65b9\u6cd5\u3002\u4f5c\u8005\u5c55\u793a\u4e86 RGs \u53ef\u4ee5\u901a\u904e\u4e00\u500b\u4e8c\u6b21\u898f\u5283\uff08QP\uff09\u9032\u884c\u512a\u5316\uff0c\u800c QP \u5247\u53ef\u4ee5\u901a\u904e\u4e00\u500b\u5177\u6709\u4fee\u6b63\u7dda\u6027\u55ae\u5143\u7684\u5faa\u74b0\u795e\u7d93\u7db2\u7d61\u9032\u884c\u512a\u5316\u3002\u9019\u4f7f\u5f97 RGs \u53ef\u4ee5\u4f7f\u7528 GPU \u9032\u884c\u512a\u5316\u7684\u68af\u5ea6\u4e0b\u964d\u4f86\u9032\u884c\u8a13\u7df4\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u6b38\u4e0d\u662f\uff0c\u7b49\u7b49\uff0c\u4ed6\u9019\u662f\u5728\u8aaa\u4ec0\u9ebc\uff1f"}),"\n",(0,r.jsx)(s.p,{children:"\u90a3\u8a66\u8457\u8b1b\u7c21\u55ae\u4e00\u9ede\uff1a"}),"\n",(0,r.jsx)(s.p,{children:"\u9019\u7bc7\u8ad6\u6587\u63a2\u8a0e\u4e86\u4e00\u7a2e\u65b0\u7684\u65b9\u6cd5\uff0c\u4ee5\u66f4\u8cbc\u8fd1\u4fee\u6b63\u7684\u65b9\u5f0f\u8655\u7406\u795e\u7d93\u5143\uff0c\u5c31\u50cf\u662f\u5c0d\u5b83\u5011\u9032\u884c\u4e86\u5fae\u8abf\uff0c\u4f7f\u5176\u66f4\u9069\u61c9\u7279\u5b9a\u4efb\u52d9\u3002\u9019\u7a2e\u65b9\u6cd5\u88ab\u61c9\u7528\u5728\u4e00\u500b\u6578\u5b78\u6a21\u578b\u4e2d\uff0c\u8a72\u6a21\u578b\u80fd\u5920\u66f4\u597d\u5730\u8655\u7406\u5716\u50cf\u7b49\u8cc7\u6599\u3002\u7814\u7a76\u4eba\u54e1\u5c55\u793a\u4e86\u9019\u500b\u65b9\u6cd5\u53ef\u4ee5\u900f\u904e\u89e3\u6c7a\u4e00\u500b\u7279\u6b8a\u7684\u6578\u5b78\u554f\u984c\u4f86\u9032\u884c\u6700\u4f73\u5316\uff0c\u800c\u9019\u500b\u554f\u984c\u53ef\u4ee5\u900f\u904e\u4e00\u7a2e\u7279\u6b8a\u7684\u5faa\u74b0\u795e\u7d93\u7db2\u7d61\u4f86\u6c42\u89e3\u3002\u9019\u6a23\u7684\u7d50\u69cb\u4f7f\u5f97\u6211\u5011\u80fd\u5920\u5728\u904b\u7b97\u4e2d\u66f4\u6709\u6548\u5730\u4f7f\u7528\u786c\u9ad4\u8cc7\u6e90\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u9084\u662f\u770b\u4e0d\u61c2\u4e5f\u6c92\u95dc\u4fc2\uff0c\u53cd\u6b63\u9019\u4e0d\u662f\u672c\u6587\u60f3\u8a0e\u8ad6\u7684\u5167\u5bb9\uff0c\u5225\u5fd8\u4e86\u6211\u5011\u53ea\u662f\u60f3\u8981\u627e\u4e00\u4e0b\u6700\u65e9\u63d0\u51fa\u9019\u500b\u67b6\u69cb\u7684\u6587\u737b\u800c\u5df2\uff0c\u4e0b\u5716\u5c31\u662f\u4ed6\u5011\u6240\u4f7f\u7528\u7684\u6a21\u578b\u67b6\u69cb\uff1a"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"hourglass_3",src:e(82494).A+"",width:"1024",height:"351"})}),"\n",(0,r.jsx)(s.p,{children:"\u76f8\u4fe1\u770b\u5230\u9019\u500b\u4f3c\u66fe\u76f8\u4f3c\u7684\u7d50\u69cb\uff0c\u61c9\u8a72\u4e5f\u53ef\u4ee5\u8a8d\u540c\u5b83\u53ef\u80fd\u5c31\u662f Hourglass \u7684\u9748\u611f\u4f86\u6e90\uff0c\u4f46\u9019\u771f\u7684\u662f\u6700\u65e9\u7684\u67b6\u69cb\u8a2d\u8a08\u4e86\u55ce\uff1f"}),"\n",(0,r.jsx)(s.p,{children:"\u5be6\u8a71\u8aaa\uff0c\u4e5f\u4e0d\u4e00\u5b9a\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u56e0\u70ba\u6bd4\u9019\u7bc7\u8ad6\u6587\u518d\u66f4\u65e9\u534a\u5e74\u524d \u2014\u2014"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://arxiv.org/abs/1505.04597",children:"U-Net: Convolutional Networks for Biomedical Image Segmentation"})})}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u5df2\u7d93\u88ab\u63d0\u51fa\u4f86\u4e86\uff0c\u800c U-Net \u7684\u591a\u5c3a\u5ea6\u9023\u63a5\u7684\u7d50\u69cb\u5176\u5be6\u4e5f\u662f\u9577\u9019\u6a23\uff0c\u5dee\u5225\u53ea\u5728\u65bc U-Net \u4f7f\u7528 concat \u64cd\u4f5c\u3002\u4f46\u53ef\u60dc\u7684\u662f\u9019\u7bc7\u8ad6\u6587\u6c92\u6709\u5f15\u7528 U-Net\uff0c\u56e0\u6b64\u4e5f\u6c92\u8fa6\u6cd5\u770b\u5230\u4f5c\u8005\u5c0d\u65bc\u9019\u7bc7\u524d\u4f5c\u7684\u7e3d\u7d50\u8207\u8a55\u50f9\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,r.jsx)(s.p,{children:"\u96d6\u7136 Hourglass \u548c FPN \u662f\u5728\u4e0d\u540c\u9818\u57df\u4e2d\u61c9\u7528\u7684\u5169\u7a2e\u67b6\u69cb\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u4f46\uff0c\u4ed6\u5011\u5728\u7279\u5fb5\u878d\u5408\u7db2\u8def\u7684\u672c\u8cea\u5176\u5be6\u662f\u4e00\u6a23\u7684\uff0c\u5c31\u53ea\u662f\u540c\u4e00\u7a2e\u67b6\u69cb\u7684\u4e0d\u540c\u7528\u6cd5\u800c\u5df2\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u5728\u540c\u6a23\u7684\u57fa\u790e\u67b6\u69cb\u4e0a\uff0c\u70ba\u4e86\u53bb\u89e3\u6c7a\u4e0d\u540c\u7684\u554f\u984c\uff0c\u9032\u800c\u767c\u5c55\u51fa\u4e0d\u540c\u7684\u61c9\u7528\u6d41\u7a0b\u3002\u5176\u4e2d\uff0cFPN \u901a\u904e\u7279\u5fb5\u91d1\u5b57\u5854\u4f86\u8655\u7406\u4e0d\u540c\u5c3a\u5ea6\u7684\u4fe1\u606f\uff0c\u4e3b\u8981\u7528\u65bc\u5c0d\u8c61\u6aa2\u6e2c\u548c\u5206\u5272\u7b49\u4efb\u52d9\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0cHourglass \u7db2\u7d61\u5247\u900f\u904e\u591a\u5c64\u6b21\u7684\u7d50\u69cb\u5728\u4e0d\u540c\u7d30\u7bc0\u5c64\u6b21\u4e0a\u9032\u884c\u7279\u5fb5\u63d0\u53d6\uff0c\u7279\u5225\u9069\u7528\u65bc\u5bc6\u96c6\u9810\u6e2c\u4efb\u52d9\uff0c\u4f8b\u5982\u59ff\u614b\u4f30\u8a08\u7b49\u4efb\u52d9\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u4f60\u4e5f\u66fe\u7d93\u5c0d\u9019\u5169\u500b\u67b6\u69cb\u7684\u672c\u8cea\u611f\u5230\u56f0\u60d1\uff0c\u90a3\u9ebc\u5e0c\u671b\u672c\u7bc7\u6587\u7ae0\u53ef\u4ee5\u8b93\u4f60\u5f97\u5230\u89e3\u7b54\u3002"})]})}function a(n={}){const{wrapper:s}={...(0,l.R)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},87532:(n,s,e)=>{e.d(s,{A:()=>r});const r=e.p+"assets/images/hourglass_1-c6f54a344af454752ecbe012354325f9.jpg"},13979:(n,s,e)=>{e.d(s,{A:()=>r});const r=e.p+"assets/images/hourglass_2-b45e523ba28e7057a62166bf88bc12d7.jpg"},82494:(n,s,e)=>{e.d(s,{A:()=>r});const r=e.p+"assets/images/hourglass_3-d22ae7dda52b9c4d30f3bc10a101d827.jpg"},28453:(n,s,e)=>{e.d(s,{R:()=>o,x:()=>t});var r=e(96540);const l={},i=r.createContext(l);function o(n){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function t(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),r.createElement(i.Provider,{value:s},n.children)}}}]);