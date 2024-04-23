"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5740],{40277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var l=n(74848),s=n(28453);const r={sidebar_position:6},i="\u8a55\u4f30\u6a21\u578b",c={id:"docclassifier/benchmark",title:"\u8a55\u4f30\u6a21\u578b",description:"\u672c\u5c08\u6848\u7684\u6e2c\u8a66\u8cc7\u6599\u96c6\u7531\u63d0\u51fa\u672c\u5c08\u6848\u7684\u5ba2\u6236\u6240\u63d0\u4f9b\u3002",source:"@site/docs/docclassifier/benchmark.md",sourceDirName:"docclassifier",slug:"/docclassifier/benchmark",permalink:"/docclassifier/benchmark",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u578b\u8a2d\u8a08",permalink:"/docclassifier/model_arch"},next:{title:"\u7d50\u679c\u8207\u8a0e\u8ad6",permalink:"/docclassifier/discussion"}},d={},x=[{value:"\u8a55\u4f30\u5354\u8b70",id:"\u8a55\u4f30\u5354\u8b70",level:2},{value:"AUROC",id:"auroc",level:3},{value:"TPR@FPR \u95be\u503c\u8868",id:"tprfpr-\u95be\u503c\u8868",level:3},{value:"Zero-shot Testing",id:"zero-shot-testing",level:3},{value:"\u6d88\u878d\u5be6\u9a57",id:"\u6d88\u878d\u5be6\u9a57",level:2},{value:"\u8a55\u4f30\u7d50\u679c",id:"\u8a55\u4f30\u7d50\u679c",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"\u8a55\u4f30\u6a21\u578b",children:"\u8a55\u4f30\u6a21\u578b"}),"\n",(0,l.jsx)(t.p,{children:"\u672c\u5c08\u6848\u7684\u6e2c\u8a66\u8cc7\u6599\u96c6\u7531\u63d0\u51fa\u672c\u5c08\u6848\u7684\u5ba2\u6236\u6240\u63d0\u4f9b\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u9019\u4efd\u8cc7\u6599\u96c6\u5305\u542b\u5927\u7d04 25,000 \u5f35\u7d93\u904e\u300c\u6587\u672c\u5b9a\u4f4d\u88c1\u5207\u300d\u5f8c\u7684\u300c\u53bb\u8b58\u5225\u5316\u300d\u7684\u5716\u50cf\uff0c\u5305\u542b\u4e03\u7a2e\u4e0d\u540c\u7684\u985e\u5225\uff0c\u5176\u6578\u91cf\u6975\u5ea6\u4e0d\u5747\u8861\u3002\u6578\u64da\u4e2d\u5b58\u5728\u5927\u91cf\u4e0d\u540c\u5149\u5f71\u8b8a\u5316\u3001\u6a21\u7cca\u3001\u53cd\u5149\u3001\u89d2\u9ede\u5b9a\u4f4d\u8aa4\u5dee\u6240\u5c0e\u81f4\u7684\u88c1\u5207\u5f62\u8b8a\u7b49\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u6211\u5011\u50c5\u6e05\u6d17\u8a72\u8cc7\u6599\u96c6\u7684\u300c\u932f\u8aa4\u985e\u5225\u6a19\u6ce8\u300d\uff0c\u800c\u5f8c\u5c07\u6240\u6709\u8cc7\u6599\u7528\u65bc\u8a55\u4f30\u6a21\u578b\u7684\u6548\u80fd\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u53d7\u9650\u65bc\u96b1\u79c1\u4fdd\u8b77\uff0c\u6211\u5011\u50c5\u63d0\u4f9b\u57fa\u65bc\u9019\u4efd\u8cc7\u6599\u7684\u8a55\u4f30\u7d50\u679c\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u8a55\u4f30\u5354\u8b70",children:"\u8a55\u4f30\u5354\u8b70"}),"\n",(0,l.jsx)(t.h3,{id:"auroc",children:"AUROC"}),"\n",(0,l.jsx)(t.p,{children:"AUROC (Area Under the Receiver Operating Characteristic Curve\uff0c\u63a5\u6536\u8005\u64cd\u4f5c\u7279\u5fb5\u66f2\u7dda\u4e0b\u9762\u7a4d) \u662f\u7528\u65bc\u8a55\u4f30\u5206\u985e\u6a21\u578b\u6548\u80fd\u7684\u7d71\u8a08\u6307\u6a19\uff0c\u7279\u5225\u662f\u5728\u8655\u7406\u4e8c\u5206\u985e\u554f\u984c\u6642\u3002AUROC \u503c\u7684\u7bc4\u570d\u5f9e 0 \u5230 1\uff0c\u4e00\u500b\u8f03\u9ad8\u7684 AUROC \u503c\u8868\u793a\u6a21\u578b\u5177\u6709\u8f03\u597d\u7684\u5340\u5206\u5169\u500b\u985e\u5225\u7684\u80fd\u529b\u3002"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"ROC\u66f2\u7dda"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"\u5b9a\u7fa9"}),"\uff1aROC\u66f2\u7dda\u662f\u4e00\u500b\u5716\u5f62\u5316\u7684\u8a55\u4f30\u5de5\u5177\uff0c\u5c55\u793a\u4e86\u5206\u985e\u6a21\u578b\u5728\u6240\u6709\u53ef\u80fd\u7684\u5206\u985e\u95be\u503c\u4e0b\u7684\u8868\u73fe\u3002 \u5b83\u900f\u904e\u5c07\u771f\u6b63\u4f8b\u7387\uff08TPR, True Positive Rate\uff09\u548c\u5047\u6b63\u4f8b\u7387\uff08FPR, False Positive Rate\uff09\u5728\u4e0d\u540c\u95be\u503c\u4e0b\u7684\u503c\u7e6a\u88fd\u5728\u5716\u8868\u4e2d\u4f86\u5be6\u73fe\u3002"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"\u771f\u6b63\u4f8b\u7387\uff08TPR\uff09"}),"\uff1a\u4e5f\u88ab\u7a31\u70ba\u654f\u611f\u5ea6\uff0c\u8a08\u7b97\u516c\u5f0f\u70ba TPR = TP / (TP + FN)\uff0c\u5176\u4e2dTP\u662f\u771f\u6b63\u4f8b\u7684\u6578\u91cf\uff0cFN\u662f\u5047\u8ca0\u4f8b\u7684\u6578\u91cf\u3002"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"\u5047\u6b63\u4f8b\u7387\uff08FPR\uff09"}),"\uff1a\u8a08\u7b97\u516c\u5f0f\u70ba FPR = FP / (FP + TN)\uff0c\u5176\u4e2dFP\u662f\u5047\u6b63\u4f8b\u7684\u6578\u91cf\uff0cTN\u662f\u771f\u8ca0\u4f8b\u7684\u6578\u91cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"AUROC \u7684\u8a08\u7b97"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"AUROC \u662f ROC \u66f2\u7dda\u4e0b\u7684\u9762\u7a4d\u3002 \u5b83\u63d0\u4f9b\u4e86\u4e00\u500b\u5ea6\u91cf\u503c\u4f86\u7e3d\u7d50\u6a21\u578b\u5728\u6240\u6709\u5206\u985e\u95be\u503c\u4e0b\u7684\u8868\u73fe\u3002"}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"\u5206\u6790\u65b9\u5f0f"}),"\uff1a","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"AUROC = 1"}),"\uff1a\u5b8c\u7f8e\u5206\u985e\u5668\uff0c\u80fd\u5920\u5b8c\u5168\u5340\u5206\u5169\u500b\u985e\u5225\u3002"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"0.5 < AUROC < 1"}),"\uff1a\u6a21\u578b\u5177\u6709\u5340\u5206\u4e00\u5b9a\u7684\u80fd\u529b\uff0cAUROC \u503c\u8d8a\u63a5\u8fd1 1\uff0c\u6a21\u578b\u7684\u6548\u80fd\u8d8a\u597d\u3002"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"AUROC = 0.5"}),"\uff1a\u7121\u5340\u5206\u80fd\u529b\uff0c\u76f8\u7576\u65bc\u96a8\u6a5f\u731c\u6e2c\u3002"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"AUROC < 0.5"}),"\uff1a\u6bd4\u96a8\u6a5f\u731c\u6e2c\u9084\u5dee\uff0c\u4f46\u5982\u679c\u6a21\u578b\u9810\u6e2c\u53cd\u5411\u89e3\u91cb\uff0c\u53ef\u80fd\u6703\u6709\u8f03\u597d\u7684\u6548\u80fd\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"tprfpr-\u95be\u503c\u8868",children:"TPR@FPR \u95be\u503c\u8868"}),"\n",(0,l.jsx)(t.p,{children:"TPR@FPR \u95be\u503c\u8868\u662f\u5728\u4eba\u81c9\u8fa8\u8b58\u9818\u57df\u4e2d\u5ee3\u6cdb\u4f7f\u7528\u7684\u4e00\u7a2e\u95dc\u9375\u8a55\u4f30\u5de5\u5177\uff0c\u5176\u4e3b\u8981\u7528\u9014\u662f\u8861\u91cf\u6a21\u578b\u5728\u4e0d\u540c\u95be\u503c\u8a2d\u5b9a\u4e0b\u7684\u8868\u73fe\u3002\u9019\u7a2e\u8868\u683c\u662f\u57fa\u65bc ROC \u66f2\u7dda\u884d\u751f\u51fa\u4f86\u7684\uff0c\u63d0\u4f9b\u4e86\u4e00\u7a2e\u76f4\u89c0\u4e14\u7cbe\u78ba\u7684\u65b9\u6cd5\u4f86\u8a55\u4f30\u6a21\u578b\u6548\u80fd\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u4f8b\u5982\uff1a\u82e5\u76ee\u6a19\u662f\u5728FPR\uff08\u5047\u967d\u6027\u7387\uff09\u70ba 0.01 \u6642\u9054\u5230\u81f3\u5c11 TPR\uff08\u771f\u967d\u6027\u7387\uff090.9 \u7684\u6548\u80fd\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e TPR-FPR \u95be\u503c\u8868\u4f86\u78ba\u5b9a\u76f8\u5c0d\u61c9\u7684\u95be\u503c\u3002\u9019\u500b\u95be\u503c\u9032\u800c\u6307\u5c0e\u6a21\u578b\u63a8\u8ad6\u7684\u904e\u7a0b\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u5728\u672c\u5c08\u6848\u7684\u5be6\u4f5c\u4e2d\uff0c\u6211\u5011\u4e5f\u63a1\u7d0d\u4e86\u985e\u4f3c\u7684\u8a55\u4f30\u65b9\u6cd5\u3002\u6211\u5011\u9078\u64c7\u4e86 TPR \u5728 FPR \u70ba 0.0001 \u6642\u7684\u8868\u73fe\u4f5c\u70ba\u6a19\u6e96\uff0c\u9019\u6a23\u7684\u6a19\u6e96\u5e6b\u52a9\u6211\u5011\u66f4\u6e96\u78ba\u5730\u7406\u89e3\u6a21\u578b\u5728\u7279\u5b9a\u689d\u4ef6\u4e0b\u7684\u6548\u80fd\u3002"}),"\n",(0,l.jsx)(t.h3,{id:"zero-shot-testing",children:"Zero-shot Testing"}),"\n",(0,l.jsx)(t.p,{children:"\u6211\u5011\u63a1\u53d6\u96f6\u6a23\u672c\u6e2c\u8a66\u7b56\u7565\uff0c\u78ba\u4fdd\u6e2c\u8a66\u8cc7\u6599\u4e2d\u7684\u6240\u6709\u985e\u5225\u6216\u6a23\u614b\u90fd\u6c92\u6709\u51fa\u73fe\u5728\u8a13\u7df4\u8cc7\u6599\u4e2d\u3002\u9019\u610f\u5473\u8457\u5728\u6a21\u578b\u7684\u8a13\u7df4\u968e\u6bb5\uff0c\u5b83\u672a\u66fe\u63a5\u89f8\u6216\u5b78\u7fd2\u4efb\u4f55\u6e2c\u8a66\u96c6\u7684\u6a23\u672c\u6216\u985e\u5225\u3002 \u9019\u6a23\u505a\u7684\u76ee\u7684\u662f\u70ba\u4e86\u8a55\u4f30\u548c\u9a57\u8b49\u6a21\u578b\u5728\u9762\u5c0d\u5b8c\u5168\u672a\u77e5\u7684\u6578\u64da\u6642\u7684\u6cdb\u5316\u80fd\u529b\u548c\u8fa8\u8b58\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u9019\u7a2e\u6e2c\u8a66\u65b9\u6cd5\u7279\u5225\u9069\u7528\u65bc\u8a55\u4f30\u96f6\u6a23\u672c\u5b78\u7fd2\uff08Zero-shot Learning\uff09\u6a21\u578b\uff0c\u56e0\u70ba\u96f6\u6a23\u672c\u5b78\u7fd2\u7684\u6838\u5fc3\u6311\u6230\u5728\u65bc\u8655\u7406\u6a21\u578b\u5728\u8a13\u7df4\u671f\u9593\u5f9e\u672a\u898b\u904e\u7684\u985e\u5225\u3002 \u5728\u96f6\u6a23\u672c\u5b78\u7fd2\u7684\u8108\u7d61\u4e2d\uff0c\u6a21\u578b\u901a\u5e38\u9700\u8981\u5229\u7528\u5176\u4ed6\u5f62\u5f0f\u7684\u8f14\u52a9\u8cc7\u8a0a\uff08\u5982\u985e\u5225\u7684\u6587\u5b57\u63cf\u8ff0\u3001\u5c6c\u6027\u6a19\u7c64\u6216\u985e\u5225\u9593\u7684\u8a9e\u610f\u95dc\u806f\uff09\u4f86\u5efa\u7acb\u5c0d\u65b0\u985e\u5225\u7684\u7406\u89e3\u3002 \u56e0\u6b64\uff0c\u5728\u96f6\u6a23\u672c\u6e2c\u8a66\u4e2d\uff0c\u6a21\u578b\u5fc5\u9808\u4f9d\u8cf4\u5b83\u5f9e\u8a13\u7df4\u985e\u5225\u4e2d\u5b78\u5230\u7684\u77e5\u8b58\uff0c\u4ee5\u53ca\u985e\u5225\u9593\u7684\u6f5b\u5728\u95dc\u806f\uff0c\u4f86\u8fa8\u8b58\u6e2c\u8a66\u96c6\u4e2d\u7684\u65b0\u6a23\u672c\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u6d88\u878d\u5be6\u9a57",children:"\u6d88\u878d\u5be6\u9a57"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Global settings"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Num of classes: 394,080"}),"\n",(0,l.jsx)(t.li,{children:"Num of epochs: 20"}),"\n",(0,l.jsx)(t.li,{children:"Num of data per epoch: 2,560,000"}),"\n",(0,l.jsx)(t.li,{children:"Batch Size: 512"}),"\n",(0,l.jsx)(t.li,{children:"Optimizer: AdamW"}),"\n",(0,l.jsxs)(t.li,{children:["Setting:","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"flatten: Flatten -> Linear (Default)"}),"\n",(0,l.jsx)(t.li,{children:"gap: GlobalAveragePooling2d -> Linear"}),"\n",(0,l.jsx)(t.li,{children:"squeeze: Conv2d -> Flatten -> Linear"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u7d9c\u5408\u6bd4\u8f03"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"FLOPs (G)"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Size (MB)"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.754"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9951"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-softmax"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.663"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9907"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.784"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.9968"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-from-scratch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.141"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9273"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-squeeze"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.772"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9958"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.052"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"2.46"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-bn-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.721"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.992"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f128-r96-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.713"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9944"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.029"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2.33"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-gap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.480"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9762"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2.67"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"efficientnet_b0-f256-r128-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.682"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9931"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.242"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"19.89"})]})]})]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u76ee\u6a19\u985e\u5225\u6578\u91cf\u6bd4\u8f03"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"Num_Classes"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"16,256"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.615"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9867"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"130,048"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.666"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9919"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"390,144"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.754"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.9951"})})]})]})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u985e\u5225\u6578\u91cf\u8d8a\u591a\uff0c\u6a21\u578b\u6548\u679c\u8d8a\u597d\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"MarginLoss \u6bd4\u8f03"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-softmax"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.663"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9907"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.754"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9951"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.784"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.9968"})})]})]})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u55ae\u7368\u4f7f\u7528 CosFace \u6216 ArcFace \u6642\uff0cArcFace \u6548\u679c\u597d\u3002"}),"\n",(0,l.jsx)(t.li,{children:"\u642d\u914d PartialFC \u5f8c\uff0cCosFace \u6548\u679c\u597d\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"BatchNorm vs LayerNorm"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-bn-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.721"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9921"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.784"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.9968"})})]})]})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u4f7f\u7528 LayerNorm \u6548\u679c\u512a\u65bc BatchNorm\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Pretrain vs From-Scratch"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-from-scratch"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.141"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9273"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.784"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.9968"})})]})]})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u4f7f\u7528 Pretrain \u662f\u5fc5\u8981\u7684\uff0c\u53ef\u4ee5\u7bc0\u7701\u6211\u5011\u5927\u91cf\u7684\u6642\u9593\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u964d\u4f4e\u6a21\u578b\u898f\u6a21\u7684\u65b9\u6cd5"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Size (MB)"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"FLOPs (G)"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.784"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.9968"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-squeeze"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.772"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9958"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"2.46"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.053"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-gap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.480"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9762"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2.67"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f128-r96-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.713"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9944"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2.33"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.029"})]})]})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\u65b9\u6cd5\uff1a","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"flatten: Flatten -> Linear (Default)"}),"\n",(0,l.jsx)(t.li,{children:"gap: GlobalAveragePooling2d -> Linear"}),"\n",(0,l.jsx)(t.li,{children:"squeeze: Conv2d -> Flatten -> Linear"}),"\n",(0,l.jsx)(t.li,{children:"\u964d\u4f4e\u89e3\u6790\u5ea6\u548c\u7279\u5fb5\u7dad\u5ea6"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.li,{children:"\u4f7f\u7528 squeeze \u65b9\u6cd5\uff0c\u96d6\u72a7\u7272\u4e00\u9ede\u6548\u80fd\uff0c\u4f46\u6e1b\u5c11\u4e00\u534a\u7684\u6a21\u578b\u5927\u5c0f\u3002"}),"\n",(0,l.jsx)(t.li,{children:"\u4f7f\u7528 gap \u65b9\u6cd5\uff0c\u6e96\u78ba\u5ea6\u5927\u5e45\u964d\u4f4e\u3002"}),"\n",(0,l.jsx)(t.li,{children:"\u964d\u4f4e\u89e3\u6790\u5ea6\u548c\u7279\u5fb5\u7dad\u5ea6\uff0c\u6e96\u78ba\u5ea6\u5c0f\u5e45\u964d\u4f4e\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u52a0\u5927 Backbone"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.784"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.9968"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"efficientnet_b0-f256-r128-ln-cos"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.682"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9931"})]})]})]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"\u53c3\u6578\u91cf\u589e\u52a0\uff0c\u6548\u679c\u964d\u4f4e\uff0c\u6211\u5011\u8a8d\u70ba\u9019\u500b\u8ddf\u8a13\u7df4\u8cc7\u6599\u96c6\u7684\u8cc7\u6599\u591a\u6a23\u6027\u6709\u95dc\u3002\u7531\u65bc\u6211\u5011\u6240\u63a1\u7528\u7684\u65b9\u5f0f\u7121\u6cd5\u63d0\u4f9b\u592a\u591a\u7684\u591a\u6a23\u6027\uff0c\u56e0\u6b64\u589e\u52a0\u53c3\u6578\u91cf\u4e26\u4e0d\u80fd\u63d0\u9ad8\u6548\u679c\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u5f15\u5165 ImageNet1K \u8cc7\u6599\u96c6\u53ca\u4f7f\u7528 CLIP \u6a21\u578b\u9032\u884c\u77e5\u8b58\u84b8\u993e"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Dataset"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"with CLIP"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Norm"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Num_Classes"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Indoor"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LN"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"390,144"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.772"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9958"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"ImageNet-1K"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LN"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1,281,833"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.813"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9961"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"ImageNet-1K"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LN"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1,281,833"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.859"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9982"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"ImageNet-1K"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LN + BN"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1,281,833"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.912"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"0.9984"})})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"\u7531\u65bc\u8cc7\u6599\u96c6\u898f\u6a21\u64f4\u5927\uff0c\u539f\u672c\u7684\u8a2d\u5b9a\u53c3\u6578\u5df2\u7d93\u7121\u6cd5\u9806\u5229\u5730\u8b93\u6a21\u578b\u6536\u6582\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u56e0\u6b64\u6211\u5011\u5c0d\u6a21\u578b\u9032\u884c\u4e86\u4e00\u4e9b\u8abf\u6574\uff1a"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Settings"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Num of classes: 1,281,833"}),"\n",(0,l.jsx)(t.li,{children:"Num of epochs: 40"}),"\n",(0,l.jsx)(t.li,{children:"Num of data per epoch: 25,600,000 (\u5982\u679c\u6a21\u578b\u7121\u6cd5\u9806\u5229\u6536\u6582\uff0c\u53ef\u80fd\u662f\u8cc7\u6599\u91cf\u4e0d\u8db3\u3002)"}),"\n",(0,l.jsx)(t.li,{children:"Batch Size: 1024"}),"\n",(0,l.jsx)(t.li,{children:"Optimizer: AdamW"}),"\n",(0,l.jsx)(t.li,{children:"Learning Rate: 0.001"}),"\n",(0,l.jsx)(t.li,{children:"Learning Rate Scheduler: PolynomialDecay"}),"\n",(0,l.jsxs)(t.li,{children:["Setting:","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"squeeze: Conv2d -> Flatten -> Linear"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.li,{children:"\u4f7f\u7528 ImageNet-1K \u5c07\u985e\u5225\u64f4\u5145\u5230\u7d04 130 \u842c\u985e\uff0c\u7d66\u4e88\u6a21\u578b\u66f4\u8c50\u5bcc\u7684\u5716\u9762\u8b8a\u5316\uff0c\u589e\u52a0\u8cc7\u6599\u591a\u6a23\u6027\uff0c\u5c07\u6548\u679c\u63d0\u9ad8 4.1%\u3002"}),"\n",(0,l.jsx)(t.li,{children:"\u5728 ImageNet-1K \u7684\u57fa\u790e\u4e0a\u518d\u5f15\u5165 CLIP \u6a21\u578b\uff0c\u5728\u8a13\u7df4\u7684\u904e\u7a0b\u4e2d\u9032\u884c\u77e5\u8b58\u84b8\u993e\uff0c\u5247\u6548\u679c\u53ef\u4ee5\u5728 TPR@FPR=1e-4 \u7684\u6bd4\u8f03\u57fa\u6e96\u4e2d\u518d\u5f80\u4e0a\u63d0\u5347 4.6%\u3002"}),"\n",(0,l.jsx)(t.li,{children:"\u82e5\u5c07 BatchNorm \u548c LayerNorm \u540c\u6642\u4f7f\u7528\uff0c\u53ef\u4ee5\u5c07\u7d50\u679c\u63d0\u5347\u5230 91.2%\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"\u8a55\u4f30\u7d50\u679c",children:"\u8a55\u4f30\u7d50\u679c"}),"\n",(0,l.jsx)(t.p,{children:"\u6211\u5011\u5728\u8a55\u4f30\u6a21\u578b\u7684\u80fd\u529b\u4e0a\uff0c\u63a1\u7528 TPR@FPR=1e-4 \u7684\u6a19\u6e96\uff0c\u4f46\u5be6\u969b\u4e0a\u9019\u500b\u6a19\u6e96\u76f8\u5c0d\u56b4\u683c\uff0c\u4e14\u5728\u90e8\u7f72\u6642\u5019\u6703\u8981\u6210\u6bd4\u8f03\u4e0d\u597d\u7684\u4f7f\u7528\u8005\u9ad4\u9a57\u3002\u56e0\u6b64\u6211\u5011\u5efa\u8b70\u5728\u90e8\u7f72\u6642\uff0c\u53ef\u4ee5\u63a1\u7528 TPR@FPR=1e-1 \u6216 TPR@FPR=1e-2 \u7684\u95be\u503c\u8a2d\u5b9a\u3002"}),"\n",(0,l.jsxs)(t.p,{children:["\u76ee\u524d\u6211\u5011\u9810\u8a2d\u7684\u95be\u503c\u662f\u63a1\u7528 ",(0,l.jsx)(t.code,{children:"TPR@FPR=1e-2"})," \u7684\u6a19\u6e96\uff0c\u9019\u500b\u95be\u503c\u662f\u7d93\u904e\u6211\u5011\u7684\u6e2c\u8a66\u548c\u8a55\u4f30\u5f8c\uff0c\u8a8d\u70ba\u662f\u4e00\u500b\u6bd4\u8f03\u9069\u5408\u7684\u95be\u503c\u3002\u8a73\u7d30\u7684\u95be\u503c\u8a2d\u5b9a\u8868\u5982\u4e0b\u5217\uff1a"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"lcnet050_cosface_f256_r128_squeeze_imagenet_clip_20240326 results"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsxs)(t.strong,{children:["Setting ",(0,l.jsx)(t.code,{children:"model_cfg"}),' to "20240326"']})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"TPR@FPR=1e-4: 0.912"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"FPR"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1e-05"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1e-04"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1e-03"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1e-02"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1e-01"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"1"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"TPR"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.856"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.912"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.953"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.980"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.996"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1.0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Threshold"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.705"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.682"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.657"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.626"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.581"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.359"})]})]})]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"TSNE & PCA & ROC Curve"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"result",src:n(4421).A+"",width:"2012",height:"4936"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4421:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/cosface_result_squeeze_imagenet_clip_20240326-d874056ab91a84fc909f9796fb064fb5.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var l=n(96540);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);