"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8194],{63630:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=s(74848),r=s(28453);const l={sidebar_position:1},d="FPN",c={id:"feat-fusion/fpn",title:"FPN",description:"\u91d1\u5b57\u5854\u67b6\u69cb",source:"@site/papers/feat-fusion/fpn.md",sourceDirName:"feat-fusion",slug:"/feat-fusion/fpn",permalink:"/papers/feat-fusion/fpn",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"papersSidebar",previous:{title:"FeatureFusion",permalink:"/papers/category/featurefusion"},next:{title:"PANet",permalink:"/papers/feat-fusion/panet"}},t={},h=[{value:"\u91d1\u5b57\u5854\u67b6\u69cb",id:"\u91d1\u5b57\u5854\u67b6\u69cb",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"FPN \u6a21\u578b\u8a2d\u8a08",id:"fpn-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u9019\u6a23\u771f\u7684\u6709\u6bd4\u8f03\u597d\u55ce\uff1f",id:"\u9019\u6a23\u771f\u7684\u6709\u6bd4\u8f03\u597d\u55ce",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function p(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"fpn",children:"FPN"}),"\n",(0,i.jsx)(e.h2,{id:"\u91d1\u5b57\u5854\u67b6\u69cb",children:"\u91d1\u5b57\u5854\u67b6\u69cb"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1612.03144",children:"Feature Pyramid Networks for Object Detection (2016.12)"})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u8003\u616e\u4e00\u500b\u5834\u666f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7d66\u5b9a\u4e00\u500b\u5e38\u898b\u7684\u5377\u7a4d\u7db2\u8def\u6a21\u578b\u7684\u64cd\u4f5c\u6d41\u7a0b\uff1a\u9996\u5148\u8f38\u5165\u4e00\u5f35\u539f\u59cb\u5716\u50cf\uff0c\u53ef\u80fd\u662f 3 x 224 x 224 \u7684\u8f38\u5165\u5c3a\u5bf8\uff0c\u63a5\u8457\u7d93\u904e\u4e00\u5c64\u4e00\u5c64\u7684\u964d\u63a1\u6a23\uff0c\u6700\u5f8c\u5c07\u7372\u5f97\u4e00\u500b\u9ad8\u7dad\u7684\u8a9e\u7fa9\u7279\u5fb5\uff0c\u5c3a\u5bf8\u53ef\u80fd\u70ba 256 x 7 x 7\uff0c\u901a\u5e38\u4e00\u500b\u7d04\u5b9a\u4fd7\u6210\u7684\u6a21\u578b\u5728\u6700\u5f8c\u7684\u8f38\u51fa\u901a\u5e38\u662f 1/32 \u7684\u5c3a\u5bf8\uff0c\u5373\uff1a\u4ee5\u539f\u5716 224 x 224 \u70ba\u4f8b\uff0c\u6700\u5f8c\u8f38\u51fa\u7684\u7279\u5fb5\u5c3a\u5bf8\u70ba 7 x 7 \u7684\u7279\u5fb5\u5716\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5c0d\u65bc\u9019\u500b\u7279\u5fb5\u5716\u6709\u5f88\u591a\u7a2e\u8aaa\u6cd5\uff0c\u4f60\u53ef\u80fd\u6709\u807d\u904e\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f4e\u89e3\u6790\u5ea6\u7684\u7279\u5fb5\u5716\uff08\u56e0\u70ba\u6bd4\u8d77\u539f\u5716\uff0c\u6700\u5f8c\u7279\u5fb5\u5716\u53ea\u6709 1/32 \u7684\u5927\u5c0f\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u9ad8\u7dad\u5ea6\u7684\u8a9e\u7fa9\u7279\u5fb5\uff08\u56e0\u70ba\u6fc3\u7e2e\u4e86\u6574\u5f35\u5716\u7684\u7279\u5fb5\uff0c\u5e36\u6709\u8f03\u5927\u7684\u611f\u53d7\u91ce\u3002\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u9802\u5c64(Top)\u7684\u7279\u5fb5 (bottom\uff5c\u539f\u5716 -> C1 -> C2 -> \u2026 -> C5 \uff5ctop)"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7a2e\u8a2d\u8a08\u5728\u5206\u985e\u4efb\u52d9\u4e0a\u6c92\u6709\u554f\u984c\uff0c\u56e0\u70ba\u5206\u985e\u4efb\u52d9\u662f\u53ef\u4ee5\u53c3\u8003\u6574\u5f35\u8f38\u5165\u5f71\u50cf\u7684\u5167\u5bb9\uff0c\u6700\u5f8c\u8f38\u51fa\u4e00\u500b\u6216\u6578\u500b\u53ef\u80fd\u7684\u5206\u985e\u7d50\u679c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u5728\u7269\u4ef6\u5075\u6e2c\u4e0a\u5c31\u4e0d\u7ba1\u7528\u4e86\uff0c\u5982\u525b\u624d\u63d0\u5230\uff0c\u9019\u500b\u7279\u5fb5\u5716\u662f 1/32 \u7684\u5c3a\u5ea6\u3002\u6b64\u6642\u5982\u679c\u6709\u500b\u300c\u6211\u5011\u60f3\u8981\u5075\u6e2c\u7684\u7269\u4ef6\u300d\uff0c\u5b83\u7684\u5716\u4e2d\u7684\u5c3a\u5bf8\u5c0f\u65bc 32 x 32 \u500b pixel\uff0c\u90a3\u9ebc\u5f88\u907a\u61be\uff0c\u5b83\u6703\u5728\u964d\u63a1\u6a23\u7684\u904e\u7a0b\u4e2d\u300c\u7159\u6d88\u96f2\u6563\u300d\uff0c\u6a21\u578b\u5728\u6700\u5f8c\u7684\u7279\u5fb5\u5716\u4e0a\u770b\u4e0d\u5230\u5b83\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u597d\u5427\uff0c\u7528\u300c\u7159\u6d88\u96f2\u6563\u300d\u53ef\u80fd\u662f\u6709\u9ede\u8a87\u5f35\u7684\u8aaa\u6cd5\uff0c\u4e8b\u5be6\u4e0a\u5982\u679c\u6a21\u578b\u662f\u63a1\u7528\u5377\u7a4d\u64cd\u4f5c\u4f86\u9032\u884c\u964d\u63a1\u6a23\uff0c\u90a3\u9ebc\u8a72\u7269\u4ef6\u6216\u8a31\u80fd\u628a\u81ea\u5df1\u7684\u5b58\u5728\u4f9d\u9644\u5728\u9644\u8fd1\u7684\u50cf\u7d20\u4e0a\u3002"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f60\u6c92\u8fa6\u6cd5\u63a5\u53d7\u9019\u9ebc\u8d85\u81ea\u7136\u7684\u63cf\u8ff0\u4e5f\u7121\u59a8\uff0c\u7e3d\u4e4b\u6a21\u578b\u60f3\u770b\u5230\u5b83\u6703\u6bd4\u8f03\u5403\u529b\uff0c\u5b83\u5f97\u6d88\u8017\u66f4\u591a\u5bb9\u91cf\u4f86\u8a18\u4e0b\u9019\u500b\u5fae\u5c0f\u7684\u7279\u5fb5\uff0c\u6700\u5f8c\u4f7f\u5f97\u6574\u9ad4\u7684\u8868\u73fe\u4e0d\u5982\u9810\u671f\u3002"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u8868\u793a\u5982\u679c\u8981\u63d0\u5347\u7269\u4ef6\u5075\u6e2c\u7684\u8868\u73fe\u7684\u8a71\uff0c\u6211\u5011\u7e3d\u5f97\u505a\u9ede\u4ec0\u9ebc\u4e8b\u60c5\u4f86\u633d\u7559\u9019\u4e9b\u7279\u5fb5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5927\u7d04\u57282015 \u5e74\u5e95\uff0cSSD \u88ab\u63d0\u51fa\u4f86\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1512.02325",children:"SSD: Single Shot MultiBox Detector (2015.12)"})})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7576\u5e74\u4e3b\u8981\u60f3\u6539\u9032\u7684\u5c0d\u8c61\u662f YOLO v1\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5b83\u57fa\u65bc YOLO v1 \u7684\u67b6\u69cb\u4e2d\uff0c\u628a\u4e0d\u540c\u5c3a\u5ea6\u7684\u7279\u5fb5\u5716\u52a0\u5165\u9810\u6e2c\u982d\uff0c\u5c07\u9ad8\u7dad\u7279\u5fb5\uff08P3~P5\uff09\u5408\u4f75\u5f8c\u9032\u884c\u9810\u6e2c\uff0c\u662f\u91d1\u5b57\u5854\u7279\u5fb5\u5c64\u6b21\u7d50\u69cb\u7684\u9996\u6b21\u5617\u8a66\u8005\u3002\u96d6\u7136\u662f\u8f03\u65e9\u671f\u7684\u8a2d\u8a08\u65b9\u5f0f\uff0c\u4f46\u4e5f\u7b97\u662f\u7279\u5fb5\u91d1\u5b57\u5854\u7db2\u8def\u7684\u5148\u884c\u8005\u3002\u7f3a\u9ede\u5c31\u662f\u904b\u7b97\u91cf\u6bd4\u8f03\u5927\uff0c\u53e6\u5916\u662f\u4f4e\u7dad\u7279\u5fb5\u7121\u6cd5\u53c3\u8003\u5230\u9ad8\u7dad\u7279\u5fb5\u7684\u8a9e\u7fa9\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u7bc7\u8ad6\u6587\u4e2d\uff0c\u4f5c\u8005\u660e\u78ba\u6307\u51fa\u4e86\u9019\u4e9b\u4e3b\u8981\u554f\u984c\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7279\u5fb5\u91d1\u5b57\u5854\u7684\u4fb7\u9650"})}),"\n",(0,i.jsx)(e.p,{children:"\u50b3\u7d71\u7684\u7279\u5fb5\u91d1\u5b57\u5854\u7b56\u7565\uff0c\u5728\u904e\u53bb\u7684\u624b\u5de5\u7279\u5fb5\u6642\u4ee3\uff0c\u662f\u5c0d\u591a\u5c3a\u5ea6\u5c0d\u8c61\u9032\u884c\u8b58\u5225\u7684\u4e3b\u8981\u5de5\u5177\u3002\u4f46\u5728\u6df1\u5ea6\u5b78\u7fd2\u6642\u4ee3\uff0c\u9019\u4e9b\u65b9\u6cd5\u5df2\u7d93\u4e0d\u80fd\u6eff\u8db3\u7576\u524d\u7684\u9700\u6c42\u3002\u5176\u4e3b\u8981\u7684\u554f\u984c\u662f\u5b83\u5c0d\u65bc\u4e0d\u540c\u5c3a\u5ea6\u7684\u7279\u5fb5\u8655\u7406\u80fd\u529b\u76f8\u5c0d\u8f03\u5f31\u3002\u7279\u5225\u662f\u7576\u9762\u5c0d\u5927\u91cf\u7684\u5716\u50cf\u8cc7\u6599\u6642\uff0c\u5b83\u7684\u8655\u7406\u901f\u5ea6\u9060\u9060\u4e0d\u80fd\u6eff\u8db3\u5be6\u6642\u61c9\u7528\u7684\u9700\u6c42\u3002\u6b64\u5916\uff0c\u9019\u7a2e\u65b9\u6cd5\u50c5\u50c5\u662f\u9032\u884c\u4e86\u7c21\u55ae\u7684\u7279\u5fb5\u7e2e\u653e\uff0c\u800c\u6c92\u6709\u9032\u884c\u66f4\u6df1\u5165\u7684\u7279\u5fb5\u878d\u5408\u548c\u512a\u5316\uff0c\u9019\u4f7f\u5f97\u5176\u8b58\u5225\u6548\u679c\u53d7\u5230\u4e86\u9650\u5236\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"SSD \u7684\u5c40\u9650\u6027"})}),"\n",(0,i.jsx)(e.p,{children:"\u70ba\u4e86\u89e3\u6c7a\u4e0a\u8ff0\u554f\u984c\uff0cSSD \u4f5c\u70ba\u4e00\u500b\u65b0\u8208\u7684\u7b56\u7565\uff0c\u5617\u8a66\u5229\u7528\u6df1\u5ea6\u5377\u7a4d\u7db2\u7d61\u7684\u91d1\u5b57\u5854\u7279\u5fb5\u5c64\u6b21\u7d50\u69cb\u3002\u5b83\u7684\u76ee\u6a19\u662f\u5e0c\u671b\u80fd\u5920\u5b8c\u5168\u53d6\u4ee3\u50b3\u7d71\u7684\u7279\u5fb5\u91d1\u5b57\u5854\u7b56\u7565\u3002\u4f46 SSD \u5728\u8a2d\u8a08\u4e0a\u5b58\u5728\u4e00\u4e9b\u660e\u986f\u7684\u7f3a\u9677\u3002\u5b83\u70ba\u4e86\u907f\u514d\u4f7f\u7528\u8f03\u4f4e\u7d1a\u7684\u7279\u5fb5\uff0c\u523b\u610f\u4e0d\u91cd\u7528\u5df2\u7d93\u8a08\u7b97\u904e\u7684\u9ad8\u5206\u8fa8\u7387\u5c64\uff0c\u800c\u662f\u9078\u64c7\u6dfb\u52a0\u65b0\u5c64\u4f86\u5efa\u7acb\u5176\u91d1\u5b57\u5854\u3002\u9019\u7a2e\u505a\u6cd5\u4e0d\u50c5\u589e\u52a0\u4e86\u8a08\u7b97\u7684\u8907\u96dc\u6027\uff0c\u9084\u907a\u6f0f\u4e86\u7279\u5fb5\u5c64\u6b21\u7d50\u69cb\u4e2d\u9ad8\u5206\u8fa8\u7387\u6620\u5c04\u7684\u91cd\u8981\u6027\u3002\u5c0d\u65bc\u6aa2\u6e2c\u5c0f\u5c3a\u5bf8\u7684\u5c0d\u8c61\uff0c\u9019\u4e9b\u9ad8\u5206\u8fa8\u7387\u6620\u5c04\u662f\u95dc\u9375\u7684\uff0c\u800c SSD \u7684\u9019\u4e00\u7b56\u7565\u986f\u7136\u5ffd\u8996\u4e86\u9019\u4e00\u9ede\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(e.h3,{id:"fpn-\u6a21\u578b\u8a2d\u8a08",children:"FPN \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fpn_3",src:s(14902).A+"",width:"1024",height:"887"})}),"\n",(0,i.jsx)(e.p,{children:"FPN \u7684\u4e3b\u8981\u7684\u76ee\u7684\u5c31\u662f\u8981\u6539\u5584 SSD \u7684\u8a2d\u8a08\u65b9\u5f0f\uff0c\u4f5c\u8005\u63d0\u51fa\u4e00\u7a2e\u7d50\u69cb\uff0c\u5982\u4e0a\u5716\uff0c\u5728\u4fdd\u6301\u5377\u7a4d\u7db2\u7d61\u7279\u5fb5\u5c64\u6b21\u7d50\u69cb\u7684\u91d1\u5b57\u5854\u5f62\u72c0\u7684\u57fa\u790e\u4e0a\uff0c\u5275\u5efa\u4e00\u500b\u5728\u6240\u6709\u5c3a\u5ea6\u4e0a\u90fd\u5177\u6709\u5f37\u5927\u8a9e\u7fa9\u7684\u7279\u5fb5\u91d1\u5b57\u5854\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u70ba\u4e86\u5be6\u73fe\u9019\u500b\u76ee\u6a19\uff0c\u4f5c\u8005\u8a2d\u8a08\u4e00\u7a2e\u7d50\u69cb\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u901a\u904e\u81ea\u9802\u5411\u4e0b\u7684\u901a\u9053\u548c\u5074\u9023\u63a5\uff0c\u5c07\u4f4e\u5206\u8fa8\u7387\u7684\u7279\u5fb5\u8207\u9ad8\u5206\u8fa8\u7387\u7684\u7279\u5fb5\u76f8\u7d50\u5408\u3002"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u5be6\u8b1b\u5b8c\u9019\u53e5\u8a71\uff0c\u9019\u7bc7\u8ad6\u6587\u5176\u5be6\u5c31\u7b97\u662f\u7d50\u675f\u4e86\uff0c\u518d\u4f86\u5c31\u662f\u5be6\u4f5c\u548c\u6e2c\u8a66\u7684\u90e8\u5206\u800c\u5df2\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u904e\u6211\u5011\u9084\u662f\u53ef\u4ee5\u518d\u770b\u4e00\u4e0b\u4f5c\u8005\u63d0\u4f9b\u7684\u4e00\u4e9b\u5be6\u4f5c\u7d30\u7bc0\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Bottom-up pathway"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fpn_2",src:s(1363).A+"",width:"1024",height:"396"})}),"\n",(0,i.jsx)(e.p,{children:"\u7b2c\u4e00\u500b\u90e8\u5206\uff0c\u53eb\u505a\u7531 Bottom \u7279\u5fb5\u958b\u59cb\u5230 Top \u7279\u5fb5\u7684\u8cc7\u6599\u8def\u5f91\u3002\u7531"}),"\n",(0,i.jsx)(e.p,{children:"\u65bc\u9019\u7bc7\u8ad6\u6587\u6c92\u6709\u63d0\u4f9b\u5f71\u50cf\u53c3\u8003\uff0c\u56e0\u6b64\u6211\u624b\u7e6a\u4e00\u5f35\u67b6\u69cb\u5716\uff0c\u4e26\u4ee3\u5165\u5be6\u969b\u7684\u6578\u5b57\uff0c\u4e26\u76e1\u91cf\u7c21\u5316\u8cc7\u8a0a\u4f86\u8aaa\u660e\uff0c\u5e0c\u671b\u53ef\u4ee5\u8b93\u4f60\u66f4\u76f4\u89c0\u5730\u611f\u89ba\u8cc7\u6599\u5728\u6a21\u578b\u5167\u6d41\u52d5\u7684\u65b9\u5f0f\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5 ResNet18 \u70ba\u4f8b\uff0c\u8f38\u5165\u4e00\u5f35 224 x 224 x 3 \u7684\u5716\u50cf\u3002\u6211\u5011\u57fa\u65bc PyTorch \u8a9e\u6cd5\uff0c\u56e0\u6b64\u901a\u9053\u6578\u91cf\u653e\u5728\u6700\u524d\u9762\u3002\u5716\u50cf\u901a\u904e ResNet18 \u5f8c\uff0c\u53ef\u4ee5\u5f97\u5230\u4e94\u7a2e\u4e0d\u540c\u89e3\u6790\u5ea6\u7684\u7279\u5fb5\u5716\uff0c\u9019\u88e1\u5148\u91dd\u5c0d\u9019\u4e9b\u7279\u5fb5\u5716\u505a\u51fa\u4e00\u4e9b\u5b9a\u7fa9\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"P1\uff1a\u5373 1/2 \u5c3a\u5bf8\u7684\u7279\u5fb5\u5716\uff0c\u5927\u5c0f\u70ba 64 x 112 x 112\u3002"}),"\n",(0,i.jsx)(e.li,{children:"P2\uff1a\u5373 1/4 \u5c3a\u5bf8\u7684\u7279\u5fb5\u5716\uff0c\u5927\u5c0f\u70ba 64 x 56 x 56\u3002"}),"\n",(0,i.jsx)(e.li,{children:"P3\uff1a\u5373 1/8 \u5c3a\u5bf8\u7684\u7279\u5fb5\u5716\uff0c\u5927\u5c0f\u70ba 128 x 28 x 28\u3002"}),"\n",(0,i.jsx)(e.li,{children:"P4\uff1a\u5373 1/16 \u5c3a\u5bf8\u7684\u7279\u5fb5\u5716\uff0c\u5927\u5c0f\u70ba 256 x 14 x 14\u3002"}),"\n",(0,i.jsx)(e.li,{children:"P5\uff1a\u5373 1/32 \u5c3a\u5bf8\u7684\u7279\u5fb5\u5716\uff0c\u5927\u5c0f\u70ba 512 x 7 x 7\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u5f71\u50cf\u901a\u904e\u6a21\u578b\u7684\u964d\u63a1\u6a23\u904e\u7a0b\uff0c\u5728\u6b64\u8ad6\u6587\u4e2d\u5c31\u88ab\u7a31\u70ba\uff1aBottom-up pathway\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53e6\u5916\u503c\u5f97\u4e00\u63d0\u7684\u662f\u5728\u5927\u90e8\u5206\u7684\u6a21\u578b\u67b6\u69cb\u8a2d\u8a08\u4e2d\uff0c\u90fd\u4e0d\u6703\u63a1\u7528 P1 \u548c P2 \u7279\u5fb5\u5716\u4f86\u9032\u884c\u7279\u5fb5\u91d1\u5b57\u5854\uff0c\u56e0\u70ba\u9019\u5169\u5c64\u7279\u5fb5\u5716\u7684\u5c3a\u5bf8\u4ecd\u7136\u975e\u5e38\u5de8\u5927\uff0c\u6703\u4f54\u7528\u5927\u91cf\u7684\u8a08\u7b97\u8cc7\u6e90\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Top-down pathway and lateral connections"})}),"\n",(0,i.jsx)(e.p,{children:"\u56de\u60f3\u4e00\u4e0b\u525b\u624d\u7684\u6b65\u9a5f\uff0c\u8f38\u5165\u8cc7\u6599\u662f\u5f9e\u5de6\u908a\u958b\u59cb\uff0c\u4e00\u8def\u6d41\u5411\u53f3\u908a\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u800c\u5728\u7279\u5fb5\u91d1\u5b57\u5854\u7684\u8a2d\u8a08\u4e0a\u7684\u7b2c\u4e8c\u968e\u6bb5\uff0c\u5c31\u662f\u8981\u5c07\u7279\u5fb5\u300c\u5f9e\u53f3\u5230\u5de6\u300d\u518d\u878d\u5408\u56de\u4f86\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u65bc\u662f\u6211\u5011\u628a\u525b\u624d\u7684 P4 \u2013 P5 \u7684\u5340\u6bb5\u653e\u5927\u4f86\u770b\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fpn_3",src:s(59762).A+"",width:"1140",height:"828"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u500b\u878d\u5408\u904e\u7a0b\u4e2d\uff0c\u9996\u5148\uff0c\u56e0\u70ba\u9ad8\u7dad\u7279\u5fb5\u5716\u7684\u5c3a\u5bf8\u8f03\u5c0f\uff0c\u6211\u5011\u5fc5\u9808\u5148\u8655\u7406\u5b83\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u908a\u5c0d P5 \u7279\u5fb5\u5716\u9032\u884c\u4e00\u6b21 Upsample \u64cd\u4f5c\uff0c\u4ee5\u78ba\u4fdd\u5c3a\u5bf8\u4e00\u81f4\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u8457\uff0c\u6211\u5011\u5e0c\u671b\u5c07\u9019\u5169\u500b\u4e0d\u540c\u7dad\u5ea6\u7684\u7279\u5fb5\u5716\u76f8\u52a0\uff0c\u7136\u800c\uff0c\u9019\u5f15\u767c\u4e86\u53e6\u4e00\u500b\u6311\u6230\uff1a\u901a\u9053\u6578\u7121\u6cd5\u5c0d\u9f4a\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5c31\u50cf\u4e0a\u5716\u6240\u793a\uff0c\u5f9e Block5 \u8f38\u51fa\u7684\u7279\u5fb5\u5716\u5177\u6709 512 \u500b\u901a\u9053\uff0c\u800c\u5f9e Block4 \u8f38\u51fa\u7684\u7279\u5fb5\u5716\u53ea\u6709 256 \u500b\u901a\u9053\u3002\u7531\u65bc\u901a\u9053\u6578\u4e0d\u4e00\u81f4\uff0c\u7121\u6cd5\u76f4\u63a5\u9032\u884c\u52a0\u6cd5\u64cd\u4f5c\u3002\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u9700\u8981\u4f7f\u7528 1\xd71 \u7684\u5377\u7a4d\u6838\u4f86\u8abf\u6574\u7279\u5fb5\u5716\u7684\u901a\u9053\u6578\u91cf\u3002\u8acb\u6ce8\u610f\uff0c\u8abf\u6574\u901a\u9053\u6578\u91cf\u7684\u65b9\u6cd5\u4e26\u6c92\u6709\u56fa\u5b9a\u7684\u898f\u7bc4\uff0c\u4f60\u53ef\u4ee5\u6839\u64da\u5be6\u969b\u60c5\u6cc1\u9810\u5148\u5b9a\u7fa9\u4e00\u500b\u9069\u7576\u7684\u901a\u9053\u6578\uff0c\u4f8b\u5982\u8a2d\u5b9a\u70ba 64\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u500b P1\uff5eP5 \u7684\u7279\u5fb5\u5716\u90fd\u9700\u8981\u901a\u904e\u4e00\u5c64 1\xd71 \u7684\u5377\u7a4d\uff0c\u4ee5\u78ba\u4fdd\u901a\u9053\u6578\u91cf\u4e00\u81f4\uff0c\u5f9e\u800c\u907f\u514d\u7121\u6cd5\u5c0d\u9f4a\u901a\u9053\u7684\u554f\u984c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u78ba\u4fdd\u901a\u9053\u5c0d\u9f4a\u548c\u5c3a\u5bf8\u5c0d\u9f4a\u4e4b\u5f8c\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u5c07\u4e0d\u540c\u5c64\u7684\u7279\u5fb5\u5716\u9032\u884c\u76f8\u52a0\uff0c\u5f9e\u800c\u5b8c\u6210\u4e00\u8f2a\u7684\u878d\u5408\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u6b65\u9a5f\u5982\u679c\u53ef\u4ee5\u591a\u8d70\u4e00\u6b21\uff0c\u53ef\u80fd\u6703\u8b93\u4f60\u66f4\u6709\u9ad4\u6703\uff0c\u56e0\u6b64\uff0c\u6211\u5011\u518d\u4f86\u770b\u4e00\u6b21 P4 \u5230 P3 \u7684\u878d\u5408\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fpn_5",src:s(18528).A+"",width:"1024",height:"392"})}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u5f8c\uff0c\u9019\u908a\u88dc\u4e0a\u4e00\u500b\u5be6\u969b\u4e0a\u505a\u8d77\u4f86\u6bd4\u8f03\u5bb9\u6613\u7684\u67b6\u69cb\u8a2d\u8a08\uff0c\u53ef\u4ee5\u662f\u9577\u9019\u6a23\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fpn_6",src:s(32143).A+"",width:"1024",height:"346"})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"\u5148\u7e2e\u653e\u6bcf\u500b\u5c3a\u5ea6\u7684\u7279\u5fb5\u5716\uff0c\u518d\u9032\u884c\u7279\u5fb5\u878d\u5408\uff0c\u5728\u5de5\u7a0b\u5be6\u4f5c\u4e0a\u662f\u4e00\u500b\u6bd4\u8f03\u5e38\u898b\u7684\u8a2d\u8a08\u65b9\u5f0f\u3002"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(e.h3,{id:"\u9019\u6a23\u771f\u7684\u6709\u6bd4\u8f03\u597d\u55ce",children:"\u9019\u6a23\u771f\u7684\u6709\u6bd4\u8f03\u597d\u55ce\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"\u76f4\u63a5\u8b1b\u7d50\u679c\uff1a\u6709\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8ad6\u6587\u4f5c\u8005\u70ba\u4e86\u8ad6\u8ff0\u9019\u4ef6\u4e8b\u60c5\uff0c\u6709\u505a\u4e86\u5f88\u591a\u7d44\u5be6\u9a57\u6578\u64da\uff0c\u5728\u6587\u7ae0\u7684\u6700\u5f8c\uff0c\u6211\u5011\u5c31\u6311\u5e7e\u500b\u91cd\u9ede\u5716\u8868\u4f86\u770b\u770b\uff0c\u5148\u4f86\u770b\u4e00\u4e0b\u8ad6\u6587\u5167\u63d0\u4f9b\u7684\u6d88\u878d\u5be6\u9a57\uff0c\u5982\u4e0b\u8868\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fpn_4",src:s(69661).A+"",width:"1024",height:"231"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u5f35\u8868\u9996\u5148\u8a0e\u8ad6\u4e86\u62ff\u6389\u4e0d\u540c\u7684\u7d44\u4ef6\uff0c\u4e0a\u8868 (d) \u662f\u62ff\u6389 top-down \u7d44\u4ef6\uff1b(e) \u662f\u62ff\u6389\u6a6b\u5411\u9023\u63a5\uff1b(f) \u662f\u62ff\u6389\u7279\u5fb5\u91d1\u5b57\u5854\u7684\u7279\u5fb5\u8868\u793a\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\u4e0d\u7ba1\u662f\u79fb\u9664\u54ea\u500b\u7d44\u4ef6\uff0c\u90fd\u6703\u9020\u6210\u8868\u73fe\u7684\u5927\u5e45\u4e0b\u964d\uff0c\u751a\u81f3\u5c0d\u65bc\u57fa\u7dda\u5c0d\u6bd4\u7684\u6a21\u578b\u76f8\u5dee\u7121\u5e7e\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u8457\u770b\u4e0b\u4e00\u5f35\u8868\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"fpn_1",src:s(7204).A+"",width:"1024",height:"218"})}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u8ad6\u6587\u7684\u4f5c\u8005\u5c07\u65b9\u6cd5\u8207 COCO \u7af6\u8cfd\u7372\u52dd\u8005\u7684\u55ae\u6a21\u578b\u7d50\u679c\u9032\u884c\u4e86\u6bd4\u8f03\uff0c\u5305\u62ec 2016 \u5e74\u7372\u52dd\u8005 G-RMI \u548c 2015 \u5e74\u7372\u52dd\u8005 Faster R-CNN+++\u3002\u5728\u4e0d\u4f7f\u7528\u5404\u7a2e\u82b1\u54e8\u7684\u6280\u5de7\u60c5\u6cc1\u4e0b\uff0cFPN \u55ae\u4e00\u6a21\u578b\u5df2\u7d93\u8d85\u8d8a\u4e86\u9019\u4e9b\u5f37\u5927\u7684\u3001\u7cbe\u5fc3\u8a2d\u8a08\u7684\u7af6\u722d\u5c0d\u624b\u3002\u5728\u6e2c\u8a66\u958b\u767c\u96c6\u4e0a\uff0cFPN \u6bd4\u73fe\u6709\u7684\u6700\u4f73\u7d50\u679c\u63d0\u9ad8\u4e86 0.5 \u9ede AP\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"FPN \u63d0\u51fa\u4e86\u4e00\u500b\u7c21\u6f54\u7684\u6846\u67b6\uff0c\u53ef\u4ee5\u8207\u5404\u7a2e\u4e3b\u5e79\u7db2\u7d61\u7d50\u5408\uff0c\u69cb\u5efa\u51fa\u5f37\u5927\u7684\u7279\u5fb5\u91d1\u5b57\u5854\u3002\u8a72\u65b9\u6cd5\u5728\u591a\u500b\u5f37\u5927\u7684\u57fa\u6e96\u6a21\u578b\u548c\u7af6\u8cfd\u7372\u52dd\u8005\u7684\u57fa\u790e\u4e0a\u5c55\u73fe\u4e86\u986f\u8457\u7684\u6539\u9032\u3002"}),"\n",(0,i.jsx)(e.p,{children:"FPN \u9019\u7bc7\u6587\u7ae0\u8b1b\u4e86\u5169\u4ef6\u4e8b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5176\u4e00\uff0c\u53ea\u8981\u60f3\u8981\u89e3\u6c7a\u7684\u554f\u984c\u6709\u591a\u5c3a\u5ea6\u7684\u7279\u6027\uff0c\u5c31\u5f97\u8003\u616e\u4e0d\u540c\u5c3a\u5ea6\u7684\u7279\u5fb5\u878d\u5408\u6280\u5de7\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5176\u4e8c\uff0c\u7279\u5fb5\u878d\u5408\u6280\u5de7\u5c31\u4e09\u53e5\u8a71\uff1a\u300c\u4e0b\u5230\u4e0a\uff0c\u4e0a\u5230\u4e0b\uff0c\u7136\u5f8c\u52a0\u8d77\u4f86\u3002\u300d"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u7bc7\u8ad6\u6587\u4e4b\u5f8c\uff0c\u5f15\u7533\u51fa\u4e86\u5f88\u591a\u8a0e\u8ad6\u7684\u65b9\u5411\uff0c\u4f8b\u5982\uff1a\u5982\u4f55\u8a2d\u8a08\u66f4\u597d\u7684\u7279\u5fb5\u878d\u5408\u7b56\u7565\uff1f\u8981\u600e\u9ebc\u63d0\u9ad8\u878d\u5408\u7684\u6548\u7387\uff1f\u6216\u662f\u8981\u600e\u9ebc\u8abf\u6574\u878d\u5408\u7684\u6b0a\u91cd\uff1f\u8af8\u5982\u6b64\u985e\u7684\u5404\u7a2e\u5834\u666f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5f8c\u7e8c\u9084\u6709\u4e0d\u5c11\u8ad6\u6587\uff0c\u6709\u7a7a\u6211\u5011\u518d\u4e00\u8d77\u4f86\u770b\u770b\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},7204:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/fpn_1-806ea6b48d355fcaea10b6ebeea1065c.jpg"},1363:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/fpn_2-c3d635c32d5e688c8cd4718addfd29a7.jpg"},14902:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/fpn_3-8343b88168361c005df0ee97a372bbf8.jpg"},69661:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/fpn_4-11a1be8958d93fbeb388f60f6f00c1a4.jpg"},18528:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/fpn_5-9d164ae1834a36be83c64d1262a3b821.jpg"},32143:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/fpn_6-29914d6ce938ac71055641c746b66e9a.jpg"},59762:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/fpn_7-f85c22c3c6fe9e3c51d4d9fc8bc59b0c.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function d(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);