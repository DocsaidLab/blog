"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[984],{36570:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var i=s(74848),r=s(28453);const c={sidebar_position:5},l="\u6a21\u578b\u8a2d\u8a08",d={id:"docclassifier/model_arch",title:"\u6a21\u578b\u8a2d\u8a08",description:"\u4e00\u500b\u8f03\u70ba\u5b8c\u6574\u7684\u6a21\u578b\u529f\u80fd\uff0c\u90fd\u4e0d\u662f\u4e00\u8e74\u53ef\u5e7e\u7684\uff0c\u4e2d\u9593\u5fc5\u9808\u7d93\u904e\u591a\u6b21\u7684\u8abf\u6574\u548c\u8a2d\u8a08\u3002",source:"@site/docs/docclassifier/model_arch.md",sourceDirName:"docclassifier",slug:"/docclassifier/model_arch",permalink:"/docclassifier/model_arch",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713882784e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u9032\u968e\u8a2d\u5b9a",permalink:"/docclassifier/advance"},next:{title:"\u8a55\u4f30\u6a21\u578b",permalink:"/docclassifier/benchmark"}},h={},t=[{value:"\u7b2c\u4e00\u4ee3\u6a21\u578b",id:"\u7b2c\u4e00\u4ee3\u6a21\u578b",level:2},{value:"\u7b2c\u4e8c\u4ee3\u6a21\u578b",id:"\u7b2c\u4e8c\u4ee3\u6a21\u578b",level:2},{value:"\u7b2c\u4e09\u4ee3\u6a21\u578b",id:"\u7b2c\u4e09\u4ee3\u6a21\u578b",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u6a21\u578b\u8a2d\u8a08",children:"\u6a21\u578b\u8a2d\u8a08"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u500b\u8f03\u70ba\u5b8c\u6574\u7684\u6a21\u578b\u529f\u80fd\uff0c\u90fd\u4e0d\u662f\u4e00\u8e74\u53ef\u5e7e\u7684\uff0c\u4e2d\u9593\u5fc5\u9808\u7d93\u904e\u591a\u6b21\u7684\u8abf\u6574\u548c\u8a2d\u8a08\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u7b2c\u4e00\u4ee3\u6a21\u578b",children:"\u7b2c\u4e00\u4ee3\u6a21\u578b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"arch_1.jpg",src:s(38433).A+"",width:"3176",height:"779"})}),"\n",(0,i.jsx)(e.p,{children:"\u7b2c\u4e00\u4ee3\u6a21\u578b\u662f\u6211\u5011\u6700\u65e9\u671f\u7684\u7248\u672c\uff0c\u5b83\u7684\u57fa\u672c\u67b6\u69cb\u5206\u6210\u56db\u500b\u90e8\u5206\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7279\u5fb5\u63d0\u53d6\u5668"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"pp-lcnet.jpg",src:s(75549).A+"",width:"1224",height:"736"})}),"\n",(0,i.jsxs)(e.p,{children:["\u9019\u90e8\u5206\u4e3b\u8981\u662f\u7528\u4f86\u5c07\u5f71\u50cf\u8f49\u63db\u6210\u5411\u91cf\uff0c\u9019\u88e1\u4f7f\u7528\u4e86 ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/2109.15099",children:(0,i.jsx)(e.strong,{children:"PP-LCNet"})})," \u4f5c\u70ba\u7279\u5fb5\u63d0\u53d6\u5668\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8f38\u5165\u5f71\u50cf\u70ba 128 x 128 \u7684 RGB \u5f71\u50cf\uff0c\u7d93\u904e\u7279\u5fb5\u63d0\u53d6\u5668\u5f8c\uff0c\u8f38\u51fa\u4e00\u500b 256 \u7dad\u7684\u5411\u91cf\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"CosFace"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/pdf/1801.09414.pdf",children:(0,i.jsx)(e.img,{alt:"cosface.jpg",src:s(28186).A+"",width:"1224",height:"348"})})}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u5011\u6253\u5f9e\u4e00\u958b\u59cb\u5c31\u60f3\u6e2c\u8a66\u5ea6\u91cf\u5b78\u7fd2\u7684\u6548\u679c\uff0c\u6240\u4ee5\u6211\u5011\u76f4\u63a5\u8df3\u904e\u4e86\u50b3\u7d71\u5206\u985e\u5668\u7684\u5be6\u4f5c\uff0c\u9996\u5148\u4f7f\u7528\u4e86 ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1801.09414",children:(0,i.jsx)(e.strong,{children:"CosFace"})})," \u7684\u65b9\u6cd5\u3002\u7531\u65bc\u9019\u88e1\u7684\u91cd\u9ede\u4e0d\u662f\u5e36\u5927\u5bb6\u8a8d\u8b58 Margin-based \u7684\u65b9\u6cd5\uff0c\u6240\u4ee5\u9019\u88e1\u4e0d\u8981\u5360\u7528\u592a\u591a\u7bc7\u5e45\u3002\u5982\u679c\u4f60\u6709\u9700\u8981\u7684\u8a71\uff0c\u6211\u5011\u4e4b\u5f8c\u53ef\u4ee5\u5728\u8ad6\u6587\u95b1\u8b80\u90a3\u88e1\u65b0\u589e\u4e00\u500b\u4e3b\u984c\u4f86\u5c08\u9580\u4ecb\u7d39\u76f8\u95dc\u7684\u6f14\u9032\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u7c21\u55ae\u4f86\u8aaa\uff0cCosFace \u662f\u4e00\u7a2e\u57fa\u65bc margin \u7684\u65b9\u6cd5\uff0c\u5b83\u5728\u539f\u672c\u7684 softmax \u640d\u5931\u51fd\u6578\u4e0a\u52a0\u5165\u4e86\u4e00\u500b margin \u53c3\u6578\uff0c\u4f7f\u5f97\u6a21\u578b\u5728\u8a13\u7df4\u6642\u66f4\u52a0\u5bb9\u6613\u5340\u5206\u4e0d\u540c\u7684\u985e\u5225\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Dataset"})}),"\n",(0,i.jsx)(e.p,{children:"\u70ba\u4e86\u8a13\u7df4\u6a21\u578b\uff0c\u6211\u5011\u5beb\u4e86\u4e00\u500b\u7c21\u55ae\u7684\u722c\u87f2\uff0c\u5230\u7db2\u8def\u4e0a\u6293\u53d6\u4e00\u4e9b\u6587\u4ef6\u7684\u5f71\u50cf\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5927\u6982\u6709 650 \u591a\u7a2e\u4e0d\u540c\u7684\u6587\u4ef6\uff0c\u5927\u90e8\u5206\u662f\u5404\u5927\u9280\u884c\u7684\u4fe1\u7528\u5361\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u9019\u4e00\u4efd\u8cc7\u6599\u6211\u5011\u653e\u5728\u9019\u88e1\uff1a",(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocClassifier/tree/main/data/unique_pool",children:(0,i.jsx)(e.strong,{children:"UniquePool"})}),"\uff0c\u6709\u8208\u8da3\u8acb\u81ea\u884c\u4e0b\u8f09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Training"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u4f7f\u7528\u4e86 PyTorch \u4f86\u8a13\u7df4\u6a21\u578b\uff0c\u9019\u88e1\u4e0d\u591a\u505a\u4ecb\u7d39\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u88e1\u8981\u63d0\u7684\u662f\u7d66\u5b9a\u8cc7\u6599\u985e\u5225\u7684\u65b9\u5f0f\uff1a\u5728\u9019\u4e00\u4ee3\u6a21\u578b\u4e2d\uff0c\u6211\u5011\u5c07\u300c\u6bcf\u4e00\u5f35\u300d\u5716\u7247\u8996\u70ba\u4e00\u500b\u985e\u5225\u3002\u56e0\u70ba\u6211\u5011\u5e0c\u671b\u6a21\u578b\u53ef\u4ee5\u78ba\u5be6\u5730\u627e\u5230\u5404\u7a2e\u6587\u4ef6\u4e0d\u540c\u7684\u5730\u65b9\uff0c\u65e2\u7136\u5c0d\u6a21\u578b\u9019\u7a2e\u671f\u5f85\uff0c\u90a3\u5c31\u4e0d\u61c9\u8a72\u628a\u4e0d\u540c\u7684\u6587\u4ef6\uff08\u5118\u7ba1\u53ef\u80fd\u53ea\u6709\u4e00\u9ede\u5dee\u7570\uff09\u653e\u5728\u540c\u4e00\u500b\u985e\u5225\u88e1\u9762\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u8a2d\u8a08\u65b9\u5f0f\u884d\u4f38\u51fa\u4e00\u500b\u554f\u984c\uff0c\u5c31\u662f\u985e\u5225\u6578\u91cf\u592a\u591a\uff0c\u539f\u59cb\u8cc7\u6599\u592a\u5c11\uff08\u53ea\u6709 1 \u5f35\uff09\u3002\u6240\u4ee5\u5fc5\u9808\u642d\u914d\u5f71\u50cf\u589e\u5f37\u7684\u65b9\u6cd5\uff0c\u4f86\u589e\u52a0\u8cc7\u6599\u91cf\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8cc7\u6599\u589e\u5f37\u7684\u6a21\u7d44\u6211\u5011\u9078\u64c7\u4f7f\u7528 ",(0,i.jsx)(e.a,{href:"https://github.com/albumentations-team/albumentations",children:(0,i.jsx)(e.strong,{children:"Albumentations"})}),"\uff0c\u9019\u662f\u4e00\u500b\u975e\u5e38\u597d\u7528\u7684\u8cc7\u6599\u589e\u5f37\u6a21\u7d44\uff0c\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u5feb\u901f\u5730\u589e\u52a0\u8cc7\u6599\u91cf\uff0c\u5728\u6b64\u4e5f\u9806\u4fbf\u63a8\u85a6\u7d66\u5927\u5bb6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u7b2c\u4e00\u4ee3\u6a21\u578b\u8457\u91cd\u7684\u662f\u60f3\u6cd5\u7684\u9a57\u8b49\uff0c\u6211\u5011\u5728\u7b2c\u4e00\u4ee3\u4e2d\u78ba\u8a8d\u4e86\u9019\u500b\u60f3\u6cd5\u662f\u53ef\u884c\u7684\uff0c\u4f46\u662f\u5728\u5be6\u969b\u61c9\u7528\u4e2d\uff0c\u6211\u5011\u767c\u73fe\u4e86\u4e00\u4e9b\u554f\u984c\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7a69\u5b9a\u6027"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5be6\u969b\u6e2c\u8a66\u5834\u666f\u4e2d\uff0c\u6211\u5011\u767c\u73fe\u6a21\u578b\u7684\u7a69\u5b9a\u6027\u4e0d\u5920\u597d\uff0c\u5bb9\u6613\u53d7\u5230\u5916\u5728\u74b0\u5883\u7684\u8b8a\u5316\u3002\u7279\u5225\u662f\u6587\u4ef6\u5728\u6821\u6b63\u7684\u904e\u7a0b\u4e2d\u51fa\u73fe\u4e86\u4e00\u4e9b\u8b8a\u5f62\uff0c\u9019\u5c0d\u6a21\u578b\u7684\u5f71\u97ff\u975e\u5e38\u5927\u3002\u4f46\u6587\u4ef6\u8b8a\u5f62\u662f\u5fc5\u7136\u6703\u767c\u751f\u7684\uff0c\u800c\u4e14\u4e00\u500b\u7a69\u5b9a\u7684\u6a21\u578b\u4e5f\u4e0d\u8a72\u88ab\u4e00\u9ede\u626d\u66f2\u8b8a\u5f62\u6240\u5e72\u64fe\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6548\u80fd"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5be6\u969b\u6e2c\u8a66\u5834\u666f\u4e2d\uff0c\u6211\u5011\u767c\u73fe\u76f8\u4f3c\u7684\u6587\u4ef6\u6703\u8b93\u6a21\u578b\u7522\u751f\u6df7\u6dc6\uff0c\u9019\u8868\u793a\u6a21\u578b\u5b78\u7fd2\u5230\u7684\u7279\u5fb5\u4e0d\u5920\u597d\uff0c\u7121\u6cd5\u5f88\u597d\u5730\u5340\u5206\u4e0d\u540c\u7684\u6587\u4ef6\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7d9c\u5408\u4ee5\u4e0a\u5169\u9ede\uff0c\u6240\u4ee5\u6211\u5011\u7684\u7d50\u8ad6\u662f\uff1a",(0,i.jsx)(e.strong,{children:"\u6a21\u578b\u904e\u64ec\u5408\u4e86\uff01"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u7b2c\u4e8c\u4ee3\u6a21\u578b",children:"\u7b2c\u4e8c\u4ee3\u6a21\u578b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"arch_2.jpg",src:s(48854).A+"",width:"3176",height:"779"})}),"\n",(0,i.jsx)(e.p,{children:"\u7b2c\u4e8c\u4ee3\u6a21\u578b\u662f\u6211\u5011\u5728\u7b2c\u4e00\u4ee3\u6a21\u578b\u7684\u57fa\u790e\u4e0a\u9032\u884c\u4e86\u4e00\u4e9b\u6539\u9032\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u589e\u52a0\u8cc7\u6599"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u5be6\u5728\u627e\u4e0d\u5230\u66f4\u591a\u7684\u6587\u4ef6\u4e86\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u6240\u4ee5\u6211\u5011\u60f3\uff1a",(0,i.jsx)(e.strong,{children:"\u4f55\u4e0d\u628a\u5176\u4ed6\u958b\u6e90\u8cc7\u6599\u96c6\u7684\u8cc7\u6599\u4e5f\u90fd\u8996\u70ba\u4e00\u7a2e\u6587\u4ef6\u5462\uff1f"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u65bc\u662f\u6211\u5011\u627e\u4f86\u4e86 ",(0,i.jsx)(e.a,{href:"https://web.mit.edu/torralba/www/indoor.html",children:(0,i.jsx)(e.strong,{children:"Indoor Scene Recognition"})}),"\uff0c\u9019\u662f\u4e00\u500b MIT \u7684\u958b\u6e90\u8cc7\u6599\u96c6\uff0c\u88e1\u9762\u6709 67 \u7a2e\u4e0d\u540c\u7684\u5ba4\u5167\u5834\u666f\u3002\u5171\u6709\u7d04 15,620 \u5f35\u5f71\u50cf\u3002\u65bc\u662f\u6211\u5011\u5c31\u591a\u4e86\u9019\u9ebc\u591a\u985e\u578b\u7684\u300c\u6587\u4ef6\u300d\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u62bd\u63db CosFace\uff0c\u6539\u7528 PartialFC"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"partialfc.jpg",src:s(84498).A+"",width:"1224",height:"476"})}),"\n",(0,i.jsx)(e.p,{children:"\u985e\u5225\u6578\u91cf\u4e00\u63d0\u4e0a\u53bb\uff0c\u5de8\u5927\u5206\u985e\u982d\u7684\u554f\u984c\u7acb\u523b\u5c31\u66b4\u9732\u51fa\u4f86\u4e86\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4eba\u81c9\u8fa8\u8b58\u7684\u9818\u57df\u4e2d\uff0c\u6709\u4e00\u500b\u975e\u5e38\u6709\u540d\u7684\u65b9\u6cd5\u53eb\u505a ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/2203.15565",children:(0,i.jsx)(e.strong,{children:"PartialFC"})}),"\uff0c\u8a72\u7814\u7a76\u5718\u968a\u767c\u73fe\u5728\u81c9\u90e8\u7279\u5fb5\u5b78\u7fd2\u4e2d\uff0cSoftmax \u51fd\u6578\u4e2d\u8ca0\u985e\u5225\uff08\u5373\u975e\u76ee\u6a19\u985e\u5225\uff09\u7684\u91cd\u8981\u6027\u4e26\u4e0d\u50cf\u4e4b\u524d\u60f3\u8c61\u7684\u90a3\u9ebc\u9ad8\u3002\u4ed6\u5011\u7684\u5be6\u9a57\u8868\u660e\uff0c\u7576\u4f7f\u7528 Softmax \u57fa\u65bc\u640d\u5931\u51fd\u6578\u8a13\u7df4\u6642\uff0c\u5373\u4f7f\u53ea\u96a8\u6a5f\u62bd\u6a23 10% \u7684\u985e\u5225\uff0c\u8207\u4f7f\u7528\u6240\u6709\u985e\u5225\u9032\u884c\u8a13\u7df4\u76f8\u6bd4\uff0c\u4e5f\u4e0d\u6703\u5931\u53bb\u6e96\u78ba\u6027\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["\u5c0d\u6211\u5011\u9019\u7a2e\u7b97\u529b\u6709\u9650\u7684\u6563\u6236\u4f86\u8aaa\uff0c\u9019\u662f\u795e\u5668\u554a\uff01\u5728\u6b64\u6211\u5011\u4e5f\u7279\u5225\u611f\u8b1d ",(0,i.jsx)(e.a,{href:"https://github.com/deepinsight/insightface",children:(0,i.jsx)(e.strong,{children:"insightface"})})," \u7684\u5be6\u4f5c\uff0c\u82e5\u4f60\u6709\u7a7a\u7684\u8a71\u4e0d\u59a8\u53bb\u5e6b\u4ed6\u5011\u9ede\u500b\u661f\u661f\u3002"]})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u66f4\u591a\u7684\u8cc7\u6599"})}),"\n",(0,i.jsx)(e.p,{children:"\u5118\u7ba1\u6211\u5011\u589e\u52a0\u4e86\u8cc7\u6599\uff0c\u4f46\u662f\u6211\u5011\u767c\u73fe\u904e\u64ec\u5408\u7684\u554f\u984c\u96d6\u7136\u6709\u7de9\u89e3\u4e86\uff0c\u4f46\u662f\u6c92\u6709\u89e3\u6c7a\u3002\u6a21\u578b\u5b78\u5230\u7684\u7279\u5fb5\u9084\u662f\u4e0d\u5920\u597d\uff0c\u7121\u6cd5\u5f88\u597d\u5730\u5340\u5206\u76f8\u4f3c\u7684\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u65bc\u662f\u6211\u5011\u5c0d\u8cc7\u6599\u96c6\u9032\u884c\u4e86\u4e00\u4e9b\u8abf\u6574\uff0c\u628a\u6bcf\u5f35\u5f71\u50cf\u9032\u884c\u65cb\u8f49\u3001\u7ffb\u8f49\u548c\u88c1\u5207\u7b49\u64cd\u4f5c\uff0c\u5982\u6b64\u4e00\u4f86\uff0c\u4e00\u5f35\u5f71\u50cf\u5c31\u53ef\u4ee5\u5b9a\u7fa9\u51fa\u300c24\u500b\u300d\u985e\u5225\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u908f\u8f2f\u5927\u6982\u662f\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u539f\u59cb\u5f71\u50cf"}),"\n",(0,i.jsx)(e.li,{children:"\u65cb\u8f49 90 \u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"\u65cb\u8f49 180 \u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"\u65cb\u8f49 270 \u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"\u6c34\u5e73\u7ffb\u8f49"}),"\n",(0,i.jsx)(e.li,{children:"\u6c34\u5e73\u7ffb\u8f49 + \u65cb\u8f49 90 \u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"\u6c34\u5e73\u7ffb\u8f49 + \u65cb\u8f49 180 \u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"\u6c34\u5e73\u7ffb\u8f49 + \u65cb\u8f49 270 \u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"\u539f\u59cb\u5f71\u50cf\uff08\u4e0a\u534a\u90e8\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u539f\u59cb\u5f71\u50cf\uff08\u4e0a\u534a\u90e8\uff09+ \u65cb\u8f49 90 \u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"\u539f\u59cb\u5f71\u50cf\uff08\u4e0a\u534a\u90e8\uff09+ \u65cb\u8f49 180 \u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"......"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u6a23\u4e00\u4f86\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u628a\u539f\u672c\u7684\u5f71\u50cf\u8b8a\u6210\u4e86 (15,620 + 650) x 24 = 390,480 \u5f35\u5f71\u50cf\uff08\u985e\u5225\uff09\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u66f4\u591a\u66f4\u591a...\u9084\u8981\u66f4\u591a\u8cc7\u6599\u554a\uff01"})}),"\n",(0,i.jsx)(e.p,{children:"\u904e\u64ec\u5408\u7684\u554f\u984c\u6301\u7e8c\u5728\u7de9\u89e3\uff0c\u4f46\u662f\u6c92\u6709\u89e3\u6c7a\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u986f\u7136\u5730\uff0c\u4e0d\u7ba1\u600e\u9ebc\u5b9a\u7fa9\u300c\u65b0\u7684\u300d\u985e\u5225\uff0c\u55ae\u7d14\u4f7f\u7528 ",(0,i.jsx)(e.strong,{children:"Indoor Scene Recognition"})," \u7684\u8cc7\u6599\u9084\u662f\u4e0d\u5920\u7684\uff0c\u6211\u5011\u9700\u8981\u66f4\u591a\u7684\u591a\u6a23\u6027\uff0c\u4f86\u652f\u6490\u6a21\u578b\u7684\u5b78\u7fd2\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u65bc\u662f\u6211\u5011\u6c7a\u5b9a\u6368\u68c4 ",(0,i.jsx)(e.strong,{children:"Indoor Scene Recognition"}),"\uff0c\u6539\u7528 ",(0,i.jsx)(e.a,{href:"https://www.image-net.org/",children:(0,i.jsx)(e.strong,{children:"ImageNet-1K"})}),"\uff0c\u9019\u662f\u4e00\u500b\u975e\u5e38\u5927\u7684\u8cc7\u6599\u96c6\uff0c\u88e1\u9762\u6709 1,000 \u7a2e\u4e0d\u540c\u7684\u985e\u5225\uff0c\u5171\u6709\u7d04 1,281,167 \u5f35\u5f71\u50cf\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"\u9664\u4e86 1K \u7684\u7248\u672c\u4e4b\u5916\uff0c\u5b83\u9084\u6709 21K \u7684\u7248\u672c\uff0c\u9019\u500b\u7248\u672c\u6709\u5927\u7d04\u4e00\u5343\u56db\u767e\u842c\u5f35\u5f71\u50cf\u3002"})}),"\n",(0,i.jsx)(e.p,{children:"\u7d42\u65bc\uff0c\u5728\u6211\u5011\u628a\u985e\u5225\u64f4\u5145\u5230 128 \u842c\u591a\u4e4b\u5f8c\uff0c\u904e\u64ec\u5408\u7684\u554f\u984c\u5f97\u5230\u4e86\u89e3\u6c7a\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7b2c\u4e09\u4ee3\u6a21\u578b",children:"\u7b2c\u4e09\u4ee3\u6a21\u578b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"arch_3.jpg",src:s(12019).A+"",width:"3877",height:"1407"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u8ffd\u6c42\u66f4\u7a69\u5b9a\u7684\u6a21\u578b\uff0c\u6240\u4ee5\u6211\u5011\u5617\u8a66\u5f15\u5165\u4e00\u4e9b\u65b0\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/2103.00020",children:(0,i.jsx)(e.strong,{children:"CLIP"})})}),"\n",(0,i.jsxs)(e.p,{children:["\u96d6\u7136\u8ddd\u96e2 OpenAI \u63d0\u51fa ",(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/2103.00020",children:(0,i.jsx)(e.strong,{children:"CLIP"})})," \u4e5f\u904e\u4e86\u597d\u5e7e\u5e74\u4e86\uff0c\u4f46\u9019\u500b\u60f3\u6cd5\u4ecd\u6301\u7e8c\u5728\u5404\u500b\u9818\u57df\u767c\u63ee\u8457\u4f5c\u7528\u3002\u6211\u5011\u8a8d\u70ba\u53ef\u4ee5\u5728\u539f\u6709\u7684\u67b6\u69cb\u4e2d\uff0c\u52a0\u5165\u4e00\u4e9b CLIP \u7684\u7279\u6027\u4f86\u63d0\u5347\u6a21\u578b\u7684\u7a69\u5b9a\u6027\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u88e1\u5047\u8a2d\u7684\u908f\u8f2f\u662f\uff1a\u7531\u65bc CLIP \u770b\u904e\u66f4\u591a\u7684\u5f71\u50cf\uff0c\u6240\u4ee5\u6211\u5011\u5408\u7406\u5730\u8a8d\u70ba CLIP \u53ef\u4ee5\u63d0\u4f9b\u66f4\u7a69\u5065\u7684\u7279\u5fb5\u5411\u91cf\u3002\u56e0\u6b64\uff0c\u6211\u5011\u5c07\u81ea\u5df1\u7684\u6a21\u578b\u6240\u5b78\u7fd2\u5230\u7684\u7279\u5fb5\u548c CLIP \u5c0d\u9f4a\uff0c\u52e2\u5fc5\u80fd\u53d6\u5f97\u66f4\u597d\u7684\u7279\u5fb5\u8868\u73fe\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u70ba\u4e86\u9a57\u8b49\u6211\u5011\u7684\u731c\u60f3\uff0c\u65bc\u662f\u8a2d\u8a08\u4e86\u6574\u500b\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e8c\u4ee3\u67b6\u69cb\u7dad\u6301\u4e0d\u8b8a\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5c07\u539f\u59cb\u5f71\u50cf\u8f38\u5165\u6211\u5011\u81ea\u5df1\u5efa\u7f6e\u7684 CNN Backbone \u4e2d\uff0c\u53d6\u5f97\u5f71\u50cf\u7684\u7279\u5fb5\u5411\u91cf\uff0c\u7279\u5fb51\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u8f38\u5165\u5f71\u50cf\u7684\u540c\u6642\uff0c\u5c07\u539f\u59cb\u5f71\u50cf\u8f38\u5165 CLIP-Image \u5206\u652f\uff0c\u53d6\u5f97\u5f71\u50cf\u7684\u7279\u5fb5\u5411\u91cf\uff0c\u7279\u5fb52\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u8a08\u7b97\u7279\u5fb5 1 \u548c\u7279\u5fb5 2 \u7684 KLD \u640d\u5931\uff08\u9019\u662f\u4e00\u500b\u8003\u616e\u5411\u91cf\u76f8\u4f3c\u6027\u7684\u640d\u5931\u51fd\u6578\uff09\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5c07 KLD \u640d\u5931\u52a0\u5165\u5230\u539f\u6709\u7684\u640d\u5931\u51fd\u6578\u4e2d\uff0c\u51cd\u7d50 CLIP-Image \u5206\u652f\u7684\u53c3\u6578\uff0c\u53ea\u8a13\u7df4\u7b2c\u4e8c\u4ee3\u7684\u67b6\u69cb\u5206\u652f\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u500b\u5617\u8a66\u53d6\u5f97\u524d\u6240\u672a\u6709\u7684\u6210\u529f\uff0c\u6211\u5011\u7684\u6a21\u578b\u5728\u7a69\u5b9a\u6027\u4e0a\u6709\u4e86\u5f88\u5927\u7684\u63d0\u5347\uff0c\u4e26\u4e14\u5728\u9a57\u8b49\u8cc7\u6599\u96c6\u4e0a\u9762\u63d0\u5347\u4e86\u63a5\u8fd1 5 \u500b\u767e\u5206\u9ede\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u758a\u52a0\u6a19\u6e96\u5316\u5c64"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u7b2c\u4e8c\u4ee3\u6a21\u578b\u4e2d\uff0c\u6211\u5011\u6e2c\u8a66\u4e86\u5f88\u591a\u4e0d\u540c\u7684\u6a19\u6e96\u5316\u5c64\uff0c\u5305\u62ec BatchNorm\u3001LayerNorm\u3001InstanceNorm \u7b49\u7b49\u3002\u6709\u5225\u65bc\u4eba\u81c9\u8fa8\u8b58\u7684\u6a21\u578b\uff0c\u5728\u4eba\u81c9\u8fa8\u8b58\u7684\u6a21\u578b\u4e2d\uff0c\u666e\u904d\u662f\u4f7f\u7528 BatchNorm \u5f97\u5230\u8f03\u512a\u7570\u7684\u7d50\u679c\uff0c\u5728\u6211\u5011\u7684\u5be6\u9a57\u4e2d\uff0c\u4f7f\u7528 LayerNorm \u6548\u679c\u66f4\u597d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u662f\u5728\u4e00\u500b\u5076\u7136\u7684\u5be6\u9a57\u4e2d\uff0c\u6211\u5011\u767c\u73fe\u4e86\u6709\u500b\u66f4\u597d\u7684\u6a19\u6e96\u5316\u65b9\u5f0f\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u540c\u6642\u4f7f\u7528 BatchNorm \u548c LayerNorm\uff01"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u767c\u73fe\u9019\u500b\u65b9\u6cd5\u7684\u539f\u56e0\u662f\u56e0\u70ba\u8a13\u7df4\u7684\u6642\u5019\u5fd8\u8a18\u522a\u9664\uff0c\u7d50\u679c\u767c\u73fe\u600e\u9ebc\u8dd1\u5206\u7a81\u7136\u63d0\u5347\u4e86 5 \u500b\u767e\u5206\u9ede\uff1f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"self.embed_feats = nn.Sequential(\n    nn.Linear(in_dim_flatten, embed_dim, bias=False),\n    nn.LayerNorm(embed_dim),\n    nn.BatchNorm1d(embed_dim),\n    nn.Linear(embed_dim, embed_dim, bias=False),\n    nn.LayerNorm(embed_dim),\n    nn.BatchNorm1d(embed_dim),\n)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u4ed4\u7d30\u6392\u67e5\u5f8c\uff0c\u78ba\u8a8d\u662f\u9019\u500b\u884c\u70ba\u5e36\u4f86\u4e86\u63d0\u5347\uff0c\u65bc\u662f\u6211\u5011\u5c31\u63a1\u7528\u4e86\u9019\u500b\u65b9\u6cd5\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5c0f\u7d50",children:"\u5c0f\u7d50"}),"\n",(0,i.jsx)(e.p,{children:"\u7b2c\u4e09\u4ee3\u7684\u6a21\u578b\u5728\u7a69\u5b9a\u6027\u548c\u6548\u80fd\u4e0a\u90fd\u6709\u4e86\u5f88\u5927\u7684\u63d0\u5347\uff0c\u6211\u5011\u5c0d\u9019\u500b\u6a21\u578b\u7684\u8868\u73fe\u611f\u5230\u6eff\u610f\uff0c\u4e26\u4e14\u5728\u5be6\u969b\u61c9\u7528\u4e2d\u4e5f\u53d6\u5f97\u4e86\u4e0d\u932f\u7684\u6548\u679c\u3002\u6211\u5011\u8a8d\u70ba\u9019\u500b\u4efb\u52d9\u7684\u968e\u6bb5\u6027\u4efb\u52d9\u5df2\u7d93\u5b8c\u6210\uff0c\u73fe\u5728\u6211\u5011\u628a\u9019\u4e00\u7cfb\u5217\u7684\u7d50\u679c\u767c\u8868\u5728\u9019\u88e1\uff0c\u5e0c\u671b\u80fd\u5920\u5c0d\u5927\u5bb6\u6709\u6240\u5e6b\u52a9\u3002"})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},38433:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/arch1-89cc525b9ffe2ebb654bbe26abc3441e.jpg"},48854:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/arch2-1b2be66b452227ffb08ea0deeda493ce.jpg"},12019:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/arch3-eaaa66125e7eb5c097ce748be90f03f5.jpg"},28186:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/cosface-fa54d916c225516fc25248859d8d561e.jpg"},75549:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/lcnet_arch-89fd4d95f589dbbd8ca1edc5b4486391.jpg"},84498:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/pfc_arch-d6ef9772b55ce287f22c30df75edb176.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>d});var i=s(96540);const r={},c=i.createContext(r);function l(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);