"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2761],{43777:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var s=i(74848),l=i(28453);const t={},d="[17.09] SENet",r={id:"senet/index",title:"[17.09] SENet",description:"\u64e0\uff5e\uff5e\u7528\u529b\u64e0\uff5e\uff5e",source:"@site/papers/1709-senet/index.md",sourceDirName:"1709-senet",slug:"/senet/",permalink:"/papers/senet/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[17.07] ShuffleNet",permalink:"/papers/shufflenet/"},next:{title:"[18.01] MobileNet-V2",permalink:"/papers/mobilenet-v2/"}},c={},h=[{value:"\u64e0\uff5e\uff5e\u7528\u529b\u64e0\uff5e\uff5e",id:"\u64e0\u7528\u529b\u64e0",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u6a21\u578b\u67b6\u69cb",id:"\u6a21\u578b\u67b6\u69cb",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u5f71\u50cf\u5206\u985e\u6548\u679c\u5c55\u793a",id:"\u5f71\u50cf\u5206\u985e\u6548\u679c\u5c55\u793a",level:3},{value:"\u8f15\u91cf\u6a21\u578b\u6548\u679c\u5c55\u793a",id:"\u8f15\u91cf\u6a21\u578b\u6548\u679c\u5c55\u793a",level:3},{value:"Squeeze \u7684\u91cd\u8981\u6027",id:"squeeze-\u7684\u91cd\u8981\u6027",level:3},{value:"Excitation \u7684\u91cd\u8981\u6027",id:"excitation-\u7684\u91cd\u8981\u6027",level:3},{value:"\u5176\u4ed6\u5be6\u9a57\u7d50\u679c",id:"\u5176\u4ed6\u5be6\u9a57\u7d50\u679c",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1709-senet",children:"[17.09] SENet"}),"\n",(0,s.jsx)(n.h2,{id:"\u64e0\u7528\u529b\u64e0",children:"\u64e0\uff5e\uff5e\u7528\u529b\u64e0\uff5e\uff5e"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1709.01507",children:(0,s.jsx)(n.strong,{children:"Squeeze-and-Excitation Networks"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u662f\u500b\u5927\u5bb6\u722d\u5148\u6050\u5f8c\u5237\u8457 ImageNet \u699c\u55ae\u7684\u5e74\u4ee3\uff0c\u5404\u7a2e\u7db2\u7d61\u67b6\u69cb\u5c64\u51fa\u4e0d\u7aae\u3002"}),"\n",(0,s.jsx)(n.p,{children:"SENet \u9019\u500b\u7db2\u7d61\u67b6\u69cb\u7684\u63d0\u51fa\uff0c\u5c31\u662f\u70ba\u4e86\u63d0\u5347\u7db2\u7d61\u4e2d\u4e0d\u540c\u901a\u9053\u9593\u7684\u5168\u5c40\u76f8\u4e92\u95dc\u4fc2\uff0c\u4ee5\u63d0\u5347\u7db2\u7d61\u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u904e\u53bb\u7684\u7814\u7a76\u4e2d\uff0c\u4e00\u500b\u89c0\u5bdf\u4f86\u81ea\u65bc VGG \u548c ResNet\uff0c\u5b83\u5011\u8aaa\u660e\u4e86\u589e\u52a0\u6df1\u5ea6\u53ef\u4ee5\u63d0\u9ad8\u6a21\u578b\u54c1\u8cea\uff0c\u9084\u6709\u6b98\u5dee\u9023\u63a5\u7684\u65b9\u5f0f\uff0c\u5c0d\u65bc\u5e6b\u52a9\u7db2\u7d61\u5b78\u7fd2\u66f4\u597d\u7684\u7279\u5fb5\u975e\u5e38\u6709\u5e6b\u52a9\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u500b\u89c0\u5bdf\u4f86\u81ea\u65bc\u5206\u7d44\u5377\u7a4d\u7684\u81ea\u7136\u6f14\u5316\uff0c\u5230\u5f8c\u7e8c\u7684 Inception \u7cfb\u5217\uff0c\u5b83\u5011\u900f\u904e\u591a\u5206\u652f\u7684\u8a2d\u8a08\uff0c\u63d0\u5347\u4e86\u7db2\u7d61\u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u4e9b\u7814\u7a76\u5176\u5be6\u53cd\u6620\u51fa\u4e86\u4e00\u7a2e\u5047\u8a2d\uff0c\u5373\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7db2\u8def\u901a\u9053\u9593\u7684\u95dc\u4fc2\u53ef\u4ee5\u8868\u793a\u70ba\u5177\u6709\u300c\u5c40\u90e8\u300d\u611f\u53d7\u4e5f\u7684\u4e0d\u53ef\u77e5\u51fd\u6578\u7684\u7d44\u5408\u3002"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u800c\u9019\u500b\u89c0\u9ede\u6b63\u662f\u4f5c\u8005\u8a8d\u70ba\u6709\u554f\u984c\u7684\u5730\u65b9\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u70ba\u4ec0\u9ebc\u6211\u5011\u53ea\u8003\u616e\u4e86\u5c40\u90e8\u611f\u53d7\u91ce\uff0c\u800c\u6c92\u6709\u8003\u616e\u5168\u5c40\u611f\u53d7\u91ce\uff1f"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,s.jsx)(n.p,{children:"\u4f5c\u8005\u5e0c\u671b\u53ef\u4ee5\u5728\u7db2\u8def\u7684\u901a\u9053\u9593\u5f15\u5165\u5168\u5c40\u7684\u8cc7\u8a0a\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u589e\u52a0\u592a\u591a\u8a08\u7b97\u91cf\u548c\u53c3\u6578\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u63d0\u51fa\u4e86 Squeeze-and-Excitation \u6a21\u584a\uff0c\u5728\u4e0d\u589e\u52a0\u592a\u591a\u8a08\u7b97\u91cf\u7684\u60c5\u6cc1\u4e0b\uff0c\u5f15\u5165\u5168\u5c40\u7684\u8cc7\u8a0a\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6a21\u578b\u67b6\u69cb",children:"\u6a21\u578b\u67b6\u69cb"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SENet arch",src:i(15190).A+"",width:"1688",height:"394"})}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u4e5f\u662f\u500b\u770b\u7a0b\u5f0f\u6bd4\u770b\u8ad6\u6587\u66f4\u5bb9\u6613\u7684\u7db2\u7d61\u67b6\u69cb\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u958b\u59cb\u524d\uff0c\u6211\u5011\u5148\u5be6\u4f5c\u4e00\u4e0b\u5427\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import torch\nimport torch.nn as nn\n\nclass SEBlock(nn.Module):\n\n    def __init__(self, in_channels, reduction_ratio=16):\n        super(SEBlock, self).__init__()\n        self.squeeze = nn.AdaptiveAvgPool2d(1)\n        self.excitation = nn.Sequential(\n            nn.Conv2d(in_channels, in_channels // reduction_ratio, kernel_size=1, stride=1, padding=0, bias=False),\n            nn.ReLU(),\n            nn.Conv2d(in_channels // reduction_ratio, in_channels, kernel_size=1, stride=1, padding=0, bias=False),\n            nn.Sigmoid()\n        )\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        # x: (B, C, H, W)\n\n        # (B, C, H, W) -> (B, C, 1, 1)\n        out = self.squeeze(x)\n\n        # (B, C, 1, 1) -> (B, C//16, 1, 1) -> (B, C, 1, 1)\n        out = self.excitation(out)\n\n        # (B, C, H, W) * (B, C, 1, 1) -> (B, C, H, W)\n        return x * out\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u4e0d\u662f\uff1f\u770b\u7a0b\u5f0f\u6bd4\u770b\u8ad6\u6587\u7c21\u55ae\u591a\u4e86\uff01"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 SENet \u4e2d\uff0c\u5f15\u5165\u5168\u5c40\u8cc7\u8a0a\u7684\u65b9\u6cd5\u5c31\u662f\u900f\u904e Global Average Pooling\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5c07\u7279\u5fb5\u5716\u7684\u6bcf\u500b\u901a\u9053\u7684\u7279\u5fb5\u503c\u5e73\u5747\u8d77\u4f86\uff0c\u7136\u5f8c\u901a\u904e\u4e00\u500b\u5168\u9023\u63a5\u5c64\uff0c\u5f97\u5230\u6bcf\u500b\u901a\u9053\u7684\u91cd\u8981\u6027\u6b0a\u91cd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u96d6\u7136\u9019\u6a23\u7684\u5168\u5c40\u8cc7\u8a0a\u5176\u5be6\u6c92\u6709\u5f88\u591a\uff0c\u4f46\u662f\u5728\u5be6\u9a57\u4e2d\u8b49\u660e\uff0c\u9019\u6a23\u7684\u8a2d\u8a08\u53ef\u4ee5\u63d0\u5347\u7db2\u7d61\u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u6211\u5011\u4f7f\u7528 1x1 \u5377\u7a4d\u4f86\u5be6\u73fe\u5168\u9023\u63a5\u5c64\uff0c\u9019\u6a23\u53ef\u4ee5\u4e0d\u7528\u5728\u90a3\u908a permute \u548c reshape\uff0c\u7701\u4e8b\u3002"})}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u4f86\uff0c\u770b\u5b8c\u7a0b\u5f0f\u78bc\u4e4b\u5f8c\uff0c\u56de\u4f86\u770b\u4e00\u4e0b\u4f5c\u8005\u756b\u7684\u5716\u5427\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SENet arch 1",src:i(90977).A+"",width:"850",height:"848"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u5716\uff0c\u5728 SENet \u4e2d\uff0c\u6b65\u9a5f\u4f9d\u5e8f\u662f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Global Pooling"}),"\uff1a\u5168\u5c40\u8cc7\u8a0a\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FC"}),"\uff1a \u964d\u7dad\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ReLU"}),"\uff1a\u5f15\u5165\u975e\u7dda\u6027\u7279\u6027\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FC"}),"\uff1a\u5347\u7dad\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sigmoid"}),"\uff1a\u5f97\u5230\u6bcf\u500b\u901a\u9053\u7684\u91cd\u8981\u6027\u6b0a\u91cd\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u88e1\u9078\u7528 ",(0,s.jsx)(n.code,{children:"Sigmoid"})," \u662f\u56e0\u70ba\u4f5c\u8005\u5e0c\u671b\u6bcf\u500b\u901a\u9053\u9593\u4e0d\u8981\u6210\u7af6\u722d\u95dc\u4fc2\uff0c\u800c\u662f\u8981\u4e92\u76f8\u7d44\u5408\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u4ee5\u53ea\u9700\u8981\u8003\u616e\u6bcf\u500b\u901a\u9053\u8981\u7559\u6216\u4e0d\u7559\uff08\u5373\u6b0a\u91cd\uff09\u5c31\u597d\uff0c\u4e0d\u9700\u8981\u7522\u751f\u4e92\u76f8\u6291\u5236\u7684\u7af6\u722d\u95dc\u4fc2\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,s.jsx)(n.h3,{id:"\u5f71\u50cf\u5206\u985e\u6548\u679c\u5c55\u793a",children:"\u5f71\u50cf\u5206\u985e\u6548\u679c\u5c55\u793a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"senet params",src:i(17380).A+"",width:"4477",height:"999"})}),"\n",(0,s.jsx)(n.p,{children:"SENet \u53ef\u4ee5\u5b89\u63d2\u5230\u4efb\u4f55\u7db2\u7d61\u4e2d\uff0c\u4e26\u4e14\u4e0d\u6703\u589e\u52a0\u592a\u591a\u7684\u53c3\u6578\u91cf\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5 ResNet-50 \u548c SE-ResNet-50 \u4e4b\u9593\u7684\u6bd4\u8f03\u70ba\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u5c0d\u65bc 224 \xd7 224 \u50cf\u7d20\u8f38\u5165\u5f71\u50cf\uff0cResNet-50 \u5728\u55ae\u6b21\u524d\u5411\u50b3\u905e\u4e2d\u5927\u7d04\u9700\u8981 3.86 GFLOP \u7684\u904b\u7b97\u91cf\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6bcf\u500b SE \u5340\u584a\u5728\u64e0\u58d3\u968e\u6bb5\u4f7f\u7528\u5168\u57df\u5e73\u5747\u6c60\u5316\u64cd\u4f5c\uff0c\u5728\u6fc0\u52f5\u968e\u6bb5\u4f7f\u7528\u5169\u500b\u5c0f\u578b FC \u5c64\u3002\u7576\u7e2e\u6e1b\u7387\u8a2d\u5b9a\u70ba 16 \u6642\uff0cSE-ResNet-50 \u9700\u8981\u7d04 3.87 GFLOP \u904b\u7b97\u91cf\uff0c\u76f8\u7576\u65bc\u6bd4\u539f\u59cb ResNet-50 \u76f8\u5c0d\u589e\u52a0\u4e86 0.26%\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53c3\u6578\u91cf\u7684\u90e8\u5206\u5247\u662f\u589e\u52a0\u4e86\u7d04 10%\uff0c\u9019\u500b\u6c92\u6709\u5728\u8868\u683c\u5167\uff0c\u662f\u5beb\u5728\u8ad6\u6587\u88e1\u7684\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53c3\u6578\u91cf\u589e\u52a0\u4e86\u4e00\u9ede\uff0c\u63db\u4f86\u7684\u6548\u679c\u662f\u8b93\u539f\u672c ResNet-50 \u76f4\u8ffd ResNet-101 \u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u4f5c\u8005\u5206\u6790\u53c3\u6578\u91cf\u5927\u591a\u589e\u52a0\u5728\u7db2\u8def\u7684\u672b\u6bb5\uff0c\u5982\u679c\u79fb\u9664\u672b\u6bb5\u7684\u5168\u9023\u63a5\u5c64\uff0c\u5247\u53c3\u6578\u91cf\u589e\u52a0\u7684\u5e45\u5ea6\u6703\u964d\u4f4e\u70ba 4%\uff0c\u540c\u6642\u5728 ImageNet top-5 \u7684\u7cbe\u5ea6\u6703\u964d\u4f4e 0.1%\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8f15\u91cf\u6a21\u578b\u6548\u679c\u5c55\u793a",children:"\u8f15\u91cf\u6a21\u578b\u6548\u679c\u5c55\u793a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"senet on mobile",src:i(43759).A+"",width:"1756",height:"162"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c07 SENet \u61c9\u7528\u5728 MobileNet \u7684\u6548\u679c\u4e5f\u662f\u975e\u5e38\u597d\uff0c\u5728 ImageNet \u4e0a\u7684 top-1 \u932f\u8aa4\u7387\u4e0b\u964d\u4e86 3.1%\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 ShuffleNet \u4e0a\u7684\u6548\u679c\u4e5f\u662f\u975e\u5e38\u597d\uff0ctop-1 \u932f\u8aa4\u7387\u4e0b\u964d\u4e86 1.6%\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u5dee\u4e00\u9ede\u5c31\u8981\u505a\u51fa MobileNet-V3 \u4e86\u3002\uff08\uff1f\uff1f\uff1f\uff09"})}),"\n",(0,s.jsx)(n.h3,{id:"squeeze-\u7684\u91cd\u8981\u6027",children:"Squeeze \u7684\u91cd\u8981\u6027"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ablation1",src:i(83730).A+"",width:"1044",height:"228"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f5c\u8005\u5c07 SENet \u7684 Squeeze \u7684\u90e8\u5206\u79fb\u9664\uff0c\u767c\u73fe\u9084\u662f\u6709\u6548\u679c\uff01"}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u6bd4\u8f03\u6c92\u6709\u90a3\u9ebc\u8b93\u4eba\u9a5a\u8277\uff0c\u4f7f\u7528 Squeeze \u6642\uff0c\u53ef\u4ee5\u63d0\u5347 1.02%\uff0c\u79fb\u9664\u4e4b\u5f8c\u53ea\u5269\u63d0\u5347 0.37%\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"excitation-\u7684\u91cd\u8981\u6027",children:"Excitation \u7684\u91cd\u8981\u6027"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ablation2",src:i(21533).A+"",width:"1290",height:"692"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f5c\u8005\u7814\u7a76\u4e86\u4e0d\u540c\u985e\u5225\uff08\u5982\u91d1\u9b5a\u3001\u54c8\u5df4\u72d7\u3001\u98db\u6a5f\u3001\u61f8\u5d16\uff09\u5728\u7db2\u7d61\u4e0d\u540c\u5c64\u6b21\u7684\u6fc0\u6d3b\u5206\u4f48\uff0c\u6574\u7406\u51fa\u5e7e\u500b\u7d50\u8ad6\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u7db2\u7d61\u65e9\u671f\u5c64\u6b21\u4e2d\uff0c\u4e0d\u540c\u985e\u5225\u7684\u6fc0\u6d3b\u5206\u4f48\u76f8\u4f3c\uff0c\u4f46\u5728\u66f4\u6df1\u5c64\u6b21\uff0c\u6d3b\u5316\u503c\u958b\u59cb\u8b8a\u5f97\u66f4\u52a0\u985e\u5225\u7279\u7570\u6027\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u7db2\u8def\u7684\u6df1\u5c64\uff08\u5982 SE_4_6 \u548c SE_5_1\uff09\uff0c\u7279\u5b9a\u901a\u9053\u7684\u6d3b\u5316\u503c\u986f\u793a\u51fa\u5f37\u70c8\u7684\u985e\u5225\u504f\u597d\uff0c\u8aaa\u660e SE \u6a21\u7d44\u5728\u9019\u4e9b\u5c64\u4e2d\u5c0d\u7279\u5fb5\u7684\u5224\u5225\u6709\u986f\u8457\u4f5c\u7528\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728 SE_5_2 \u5c64\u89c0\u5bdf\u5230\u8a31\u591a\u6d3b\u5316\u503c\u63a5\u8fd1 1 \u7684\u8da8\u52e2\uff0c\u9019\u7a2e\u60c5\u6cc1\u4e0b SE \u6a21\u7d44\u76f8\u7576\u65bc\u4e00\u500b\u6046\u7b49\u904b\u7b97\u7b26\uff0c\u4e0d\u518d\u91cd\u65b0\u6821\u6e96\u7279\u5fb5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u7db2\u8def\u7684\u672b\u7aef\uff0cSE \u6a21\u7d44\u7684\u91cd\u8981\u6027\u964d\u4f4e\uff0c\u7814\u7a76\u986f\u793a\u79fb\u9664\u9019\u4e9b\u6a21\u7d44\u53ea\u6703\u5c0e\u81f4\u908a\u969b\u6548\u80fd\u640d\u5931\uff0c\u4f46\u53ef\u4ee5\u986f\u8457\u6e1b\u5c11\u53c3\u6578\u6578\u91cf\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u4e9b\u89c0\u5bdf\u7d50\u679c\u8aaa\u660e SE \u6a21\u7d44\u5728\u4e0d\u540c\u7db2\u8def\u5c64\u6b21\u4e2d\u7684\u4f5c\u7528\u662f\u4e0d\u540c\u7684\uff0c\u5c0d\u65bc\u7406\u89e3\u548c\u512a\u5316\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u4e2d\u7684\u7279\u5fb5\u63d0\u53d6\u548c\u8655\u7406\u6975\u70ba\u91cd\u8981\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5176\u4ed6\u5be6\u9a57\u7d50\u679c",children:"\u5176\u4ed6\u5be6\u9a57\u7d50\u679c"}),"\n",(0,s.jsx)(n.p,{children:"\u4f5c\u8005\u9084\u91dd\u5c0d\u6a21\u578b\u5167\u7684\u4e0d\u540c\u90e8\u5206\u505a\u4e86\u5c0d\u61c9\u7684\u5be6\u9a57\uff0c\u6574\u7406\u51fa\u4e86\u4e00\u4e9b\u7d50\u8ad6\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Signoid"})," \u6548\u679c\u6700\u597d\uff0c",(0,s.jsx)(n.code,{children:"Tanh"})," \u6b21\u4e4b\uff0c",(0,s.jsx)(n.code,{children:"ReLU"})," \u6700\u5dee\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"AvgPool"})," \u6bd4 ",(0,s.jsx)(n.code,{children:"MaxPool"})," \u597d\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5728 SE \u6a21\u7d44\u5167\u7684 Reduction Ratio \u8a2d\u5b9a\u70ba 16 \u6709\u6bd4\u8f03\u597d\u7684\u6b0a\u6a6b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8a73\u7d30\u8868\u683c\u8acb\u8b80\u8005\u53c3\u8003\u539f\u8ad6\u6587\uff0c\u6211\u5011\u8a8d\u70ba\u9019\u4e00\u90e8\u5206\u7684\u5be6\u9a57\u6bd4\u8f03\u504f\u5411\u65bc\u5de5\u7a0b\u5be6\u8e10\uff0c\u5c31\u4e0d\u518d\u4e00\u4e00\u5217\u8209\u4e86\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,s.jsx)(n.p,{children:"SENet \u900f\u904e\u5728\u7db2\u8def\u4e2d\u5f15\u5165 SE \u584a\uff0c\u6709\u6548\u5730\u63d0\u5347\u4e86\u7db2\u8def\u7684\u5b78\u7fd2\u548c\u6cdb\u5316\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u95dc\u9375\u8ca2\u737b\u5728\u65bc\u5c07\u6ce8\u610f\u529b\u6a5f\u5236\u4ee5\u7c21\u6f54\u7684\u65b9\u5f0f\u6574\u5408\u5230\u5377\u7a4d\u7db2\u8def\u4e2d\uff0c\u4f7f\u7db2\u8def\u80fd\u5920\u66f4\u52a0\u805a\u7126\u65bc\u91cd\u8981\u7684\u7279\u5fb5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u7a2e\u65b9\u6cd5\u7684\u6210\u529f\u8b49\u660e\u4e86\u900f\u904e\u589e\u5f37\u5167\u90e8\u7279\u5fb5\u7684\u8868\u9054\u80fd\u529b\uff0c\u53ef\u4ee5\u986f\u8457\u63d0\u9ad8\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u7684\u8868\u73fe\u3002"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u5118\u7ba1 ",(0,s.jsx)(n.code,{children:"Squeeze-and-Excitation"})," \u6a21\u7d44\u5728\u589e\u52a0\u7684\u904b\u7b97\u6210\u672c\u65b9\u9762\u76f8\u5c0d\u8f03\u4f4e\uff0c\u4f46\u5728\u5f8c\u7e8c\u7684\u8a31\u591a\u7814\u7a76\u4e2d\uff0c\u767c\u73fe\u8a72\u67b6\u69cb\u5076\u723e\u6703\u6210\u70ba\u6548\u80fd\u74f6\u9838\u3002"]}),(0,s.jsx)(n.p,{children:"\u5728\u90e8\u7f72\u5230\u5373\u6642\u7cfb\u7d71\u6216\u904b\u7b97\u8cc7\u6e90\u6975\u70ba\u6709\u9650\u7684\u74b0\u5883\u6642\uff0c\u958b\u767c\u8005\u4ecd\u9700\u6b0a\u8861\u5176\u6548\u80fd\u63d0\u5347\u8207\u984d\u5916\u904b\u7b97\u8ca0\u64d4\u4e4b\u9593\u7684\u95dc\u4fc2\u3002"})]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},15190:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img1-a83ff0e498f3ab45699722d803aba6e2.jpg"},90977:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img2-a8638833b96f0bf730e5a23b313d6732.jpg"},17380:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img3-9d942b83bac6a88e1a6313f4fb77b522.jpg"},43759:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img4-d70af9b35945e293250a5dcf490c8b47.jpg"},83730:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img5-210924dad529c9d06afb584ebb68242a.jpg"},21533:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/img6-b4d0673d2e4ef7363a4c7c8c2bf0bb02.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var s=i(96540);const l={},t=s.createContext(l);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);