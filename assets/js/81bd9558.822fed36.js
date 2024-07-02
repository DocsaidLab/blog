"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8785],{42438:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>t,toc:()=>h});var i=s(74848),l=s(28453);const r={},d="[19.12] UNet++",t={id:"unetpp/index",title:"[19.12] UNet++",description:"\u5fae\u5999\u7684\u7e54\u7db2\u8005",source:"@site/papers/1912-unetpp/index.md",sourceDirName:"1912-unetpp",slug:"/unetpp/",permalink:"/papers/unetpp/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719919838e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[19.09] UNITER",permalink:"/papers/uniter/"},next:{title:"[20.01] Scaling Laws",permalink:"/papers/scaling_laws/"}},c={},h=[{value:"\u5fae\u5999\u7684\u7e54\u7db2\u8005",id:"\u5fae\u5999\u7684\u7e54\u7db2\u8005",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"UNet++ \u6a21\u578b\u8a2d\u8a08",id:"unet-\u6a21\u578b\u8a2d\u8a08",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u5c31\u53ea\u662f\u53c3\u6578\u591a\uff1f",id:"\u5c31\u53ea\u662f\u53c3\u6578\u591a",level:3},{value:"\u6df1\u5ea6\u76e3\u7763\u548c\u6a21\u578b\u526a\u679d",id:"\u6df1\u5ea6\u76e3\u7763\u548c\u6a21\u578b\u526a\u679d",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function x(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1912-unet",children:"[19.12] UNet++"}),"\n",(0,i.jsx)(e.h2,{id:"\u5fae\u5999\u7684\u7e54\u7db2\u8005",children:"\u5fae\u5999\u7684\u7e54\u7db2\u8005"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1912.05074",children:"UNet++: Redesigning Skip Connections to Exploit Multiscale Features in Image Segmentation"})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7bc7\u6587\u7ae0\u7684\u4f5c\u8005\u5f9e U-Net \u70ba\u51fa\u767c\u9ede\uff0c\u63a2\u8a0e\u539f\u59cb U-Net \u67b6\u69cb\u7684\u8a2d\u8a08\u554f\u984c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5957\u7528\u4e00\u53e5\u4f5c\u8005\u7684\u539f\u8a71\uff1a"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u300c\u9019\u500b\u4e09\u5e74\u4e0d\u52d5\u7684\u62d3\u6a38\u7d50\u69cb\u771f\u7684\u4e00\u9ede\u5152\u6bdb\u75c5\u90fd\u6c92\u6709\u55ce\uff1f\u300d"}),"\n",(0,i.jsxs)(e.p,{children:["Excerpted from ",(0,i.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/44958351",children:(0,i.jsx)(e.strong,{children:"\u7814\u4e60 U-Net"})})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u8a8d\u70ba U-Net \u4e0d\u53ea\u662f\u6709\u554f\u984c\uff0c\u800c\u4e14\u554f\u984c\u9084\u5f88\u591a\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"UNetpp_1",src:s(85635).A+"",width:"1024",height:"204"})}),"\n",(0,i.jsx)(e.p,{children:"\u5e38\u898b\u7684 U-Net\uff0c\u5176\u6df1\u5ea6\u662f\u4e94\u5c64\u964d\u63a1\u6a23\uff0c\u5982\u4e0a\u5716 (d)\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u70ba\u4ec0\u9ebc\u4e0d\u662f\u4e09\u5c64\uff1f\u70ba\u4ec0\u9ebc\u4e0d\u662f\u4e03\u5c64\uff1f\u7db2\u8def\u7684\u8a2d\u8a08\u5230\u5e95\u8981\u591a\u6df1\uff1f"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8a31\u591a\u6df1\u5ea6\u5b78\u7fd2\u7684\u61c9\u7528\u4e2d\uff0c\u7db2\u8def\u7684\u6df1\u5ea6\u901a\u5e38\u662f\u4e00\u500b\u95dc\u9375\u7684\u53c3\u6578\uff0c\u5b83\u76f4\u63a5\u5f71\u97ff\u4e86\u7db2\u8def\u7684\u6548\u80fd\u548c\u5b78\u7fd2\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8b93\u6211\u5011\u9032\u4e00\u6b65\u63a2\u8a0e\u9019\u500b\u554f\u984c\u7684\u5404\u500b\u5c64\u9762\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7279\u5fb5\u8868\u5fb5\u80fd\u529b"})}),"\n",(0,i.jsx)(e.p,{children:"\u7db2\u8def\u7684\u6df1\u5ea6\u6c7a\u5b9a\u4e86\u5176\u8868\u5fb5\u80fd\u529b\u3002 \u7c21\u55ae\u4f86\u8aaa\uff0c\u66f4\u6df1\u7684\u7db2\u8def\u901a\u5e38\u80fd\u5920\u5b78\u7fd2\u5230\u66f4\u8907\u96dc\u3001\u66f4\u62bd\u8c61\u7684\u7279\u5fb5\u3002 \u5728\u5f71\u50cf\u5206\u5272\u3001\u76ee\u6a19\u5075\u6e2c\u6216\u5206\u985e\u7b49\u4efb\u52d9\u4e2d\uff0c\u9019\u7a2e\u62bd\u8c61\u7684\u7279\u5fb5\u7372\u53d6\u80fd\u529b\u53ef\u80fd\u662f\u81f3\u95dc\u91cd\u8981\u7684\u3002 \u800c\u8f03\u6dfa\u7684\u7db2\u8def\u53ef\u80fd\u53ea\u80fd\u6355\u6349\u66f4\u7c21\u55ae\u3001\u66f4\u5c40\u90e8\u7684\u7279\u5fb5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8a08\u7b97\u8907\u96dc\u5ea6"})}),"\n",(0,i.jsx)(e.p,{children:"\u96a8\u8457\u7db2\u8def\u7684\u6df1\u5ea6\u589e\u52a0\uff0c\u8a08\u7b97\u8907\u96dc\u5ea6\u548c\u53c3\u6578\u6578\u91cf\u901a\u5e38\u6703\u6025\u5287\u589e\u52a0\u3002 \u9019\u4e0d\u50c5\u6703\u589e\u52a0\u8a13\u7df4\u548c\u63a8\u7406\u7684\u6642\u9593\u6210\u672c\uff0c\u9084\u53ef\u80fd\u9700\u8981\u66f4\u591a\u7684\u904b\u7b97\u8cc7\u6e90\u3002 \u5728\u8cc7\u6e90\u6709\u9650\u7684\u60c5\u6cc1\u4e0b\uff0c\u627e\u5230\u4e00\u500b\u9069\u7576\u7684\u7db2\u8def\u6df1\u5ea6\u662f\u4e00\u500b\u6311\u6230\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u904e\u64ec\u5408\u8207\u6cdb\u5316"})}),"\n",(0,i.jsx)(e.p,{children:"\u8f03\u6df1\u7684\u7db2\u8def\u901a\u5e38\u5177\u6709\u8f03\u9ad8\u7684\u6a21\u578b\u8907\u96dc\u5ea6\uff0c\u53ef\u80fd\u5bb9\u6613\u767c\u751f\u904e\u64ec\u5408\uff0c\u7279\u5225\u662f\u5728\u8cc7\u6599\u8f03\u5c11\u7684\u60c5\u6cc1\u4e0b\u3002 \u800c\u8f03\u6dfa\u7684\u7db2\u8def\u53ef\u80fd\u5177\u6709\u66f4\u597d\u7684\u6cdb\u5316\u80fd\u529b\uff0c\u4f46\u53ef\u80fd\u6703\u72a7\u7272\u4e00\u4e9b\u8868\u5fb5\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u512a\u5316\u96e3\u5ea6"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f60\u7576\u7136\u53ef\u4ee5\u964d\u63a1\u6a23 100 \u5c64\uff08\u5982\u679c\u4f60\u7684\u5f71\u50cf\u8db3\u5920\u5927\u7684\u8a71\uff09\uff0c\u4f46\u96a8\u8457\u7db2\u8def\u6df1\u5ea6\u7684\u589e\u52a0\uff0c\u512a\u5316\u7db2\u8def\u53c3\u6578\u8b8a\u5f97\u8d8a\u4f86\u8d8a\u56f0\u96e3\u3002 \u4f8b\u5982\uff1a\u68af\u5ea6\u6d88\u5931\u6216\u68af\u5ea6\u7206\u70b8\u554f\u984c\u53ef\u80fd\u6703\u51fa\u73fe\uff0c\u9019\u9700\u8981\u63a1\u7528\u7279\u5b9a\u7684\u521d\u59cb\u5316\u65b9\u6cd5\u6216\u6700\u4f73\u5316\u5668\u4f86\u89e3\u6c7a\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7406\u8ad6\u8207\u5be6\u52d9"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u7406\u8ad6\u4e0a\uff0c\u6df1\u5ea6\u7db2\u8def\u80fd\u5920\u4ee5\u8f03\u5c11\u7684\u7bc0\u9ede\u548c\u8f03\u5c11\u7684\u8a08\u7b97\u91cf\u4f86\u8868\u5fb5\u76f8\u540c\u7684\u51fd\u6578\uff0c\u4f46\u5728\u5be6\u8e10\u4e2d\uff0c\u627e\u5230\u4e00\u500b\u5408\u9069\u7684\u7db2\u8def\u6df1\u5ea6\u4e26\u4e0d\u5bb9\u6613\u3002 \u904e\u6df1\u6216\u904e\u6dfa\u7684\u7db2\u8def\u90fd\u53ef\u80fd\u7121\u6cd5\u5f88\u597d\u5730\u5b8c\u6210\u7279\u5b9a\u7684\u4efb\u52d9\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8cc7\u6599\u96c6\u8207\u4efb\u52d9\u7684\u7279\u6027"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u540c\u7684\u8cc7\u6599\u96c6\u548c\u4efb\u52d9\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u7684\u7db2\u8def\u6df1\u5ea6\u3002 \u6709\u4e9b\u4efb\u52d9\u53ef\u80fd\u9700\u8981\u6df1\u5c64\u7db2\u8def\u4f86\u6355\u6349\u8907\u96dc\u7684\u6a21\u5f0f\uff0c\u800c\u5176\u4ed6\u4efb\u52d9\u53ef\u80fd\u4e0d\u9700\u8981\u90a3\u9ebc\u591a\u7684\u62bd\u8c61\u5c64\u6b21\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u53ef\u89e3\u91cb\u6027\u8207\u8abf\u8a66\u96e3\u5ea6"})}),"\n",(0,i.jsx)(e.p,{children:"\u96a8\u8457\u7db2\u8def\u8b8a\u5f97\u66f4\u6df1\uff0c\u6a21\u578b\u7684\u53ef\u89e3\u91cb\u6027\u53ef\u80fd\u6703\u964d\u4f4e\uff0c\u540c\u6642\u8abf\u8a66\u548c\u7406\u89e3\u6a21\u578b\u7684\u884c\u70ba\u4e5f\u8b8a\u5f97\u66f4\u52a0\u56f0\u96e3\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u900f\u904e\u6df1\u5165\u7814\u7a76\u300c\u8981\u591a\u6df1\uff1f\u300d\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u53ef\u4ee5\u66f4\u597d\u5730\u7406\u89e3\u7db2\u8def\u6df1\u5ea6\u5982\u4f55\u5f71\u97ff\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u7684\u6548\u80fd\u548c\u6548\u679c\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u5177\u9ad4\u7684\u5be6\u8e10\u4e2d\u505a\u51fa\u5408\u7406\u7684\u9078\u64c7\u548c\u8a2d\u8a08\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(e.h3,{id:"unet-\u6a21\u578b\u8a2d\u8a08",children:"UNet++ \u6a21\u578b\u8a2d\u8a08"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"UNetpp_2",src:s(83828).A+"",width:"1024",height:"244"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8655\u7406\u5f71\u50cf\u5206\u5272\u7b49\u554f\u984c\u6642\uff0c\u7406\u60f3\u7684\u60c5\u6cc1\u662f\u7db2\u8def\u80fd\u5920\u5145\u5206\u5b78\u7fd2\u5230\u4e0d\u540c\u6df1\u5ea6\u5c64\u6b21\u7684\u7279\u5fb5\uff0c\u4ee5\u4fbf\u66f4\u597d\u5730\u7406\u89e3\u548c\u8655\u7406\u5f71\u50cf\u8cc7\u6599\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u5728\u9019\u500b\u554f\u984c\u7684\u63a2\u8a0e\u4e2d\uff0c\u63d0\u51fa\u4e86\u5e7e\u500b\u7368\u5275\u6027\u7684\u7db2\u8def\u7d50\u69cb\u8a2d\u8a08\uff0c\u65e8\u5728\u66f4\u597d\u5730\u6574\u5408\u4e0d\u540c\u6df1\u5ea6\u7684\u7279\u5fb5\u4e26\u512a\u5316\u7db2\u8def\u6548\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u5e7e\u7a2e\u6838\u5fc3\u7684\u8a2d\u8a08\u601d\u8def\u548c\u65b9\u6848\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7d71\u4e00\u67b6\u69cb\uff08U-Nete\uff09"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u76ee\u7684\uff1a\u8a02\u5b9a\u5de2\u72c0 UNet \u7684\u7d71\u4e00\u67b6\u69cb"}),"\n",(0,i.jsx)(e.li,{children:"\u9019\u7a2e\u8a2d\u8a08\u5c07\u4e0d\u540c\u6df1\u5ea6\u7684 U-Net \u6574\u5408\u5728\u4e00\u500b\u7d71\u4e00\u7684\u67b6\u69cb\u4e2d\u3002 \u5728\u9019\u500b\u67b6\u69cb\u4e2d\uff0c\u6240\u6709\u7684 U-Net \u81f3\u5c11\u90e8\u5206\u5171\u4eab\u76f8\u540c\u7684\u7de8\u78bc\u5668\uff0c\u4f46\u5177\u6709\u5404\u81ea\u7684\u89e3\u78bc\u5668\u3002 \u9019\u7a2e\u8a2d\u8a08\u8b93\u4e0d\u540c\u6df1\u5ea6\u7684\u89e3\u78bc\u5668\u80fd\u5920\u5728\u540c\u4e00\u500b\u7db2\u8def\u67b6\u69cb\u4e0b\u7368\u7acb\u904b\u4f5c\uff0c\u5f9e\u800c\u63d0\u4f9b\u4e00\u500b\u7279\u6b8a\u7684\u8996\u89d2\u4f86\u89c0\u5bdf\u548c\u6bd4\u8f03\u4e0d\u540c\u6df1\u5ea6\u5982\u4f55\u5f71\u97ff\u7db2\u8def\u7684\u6548\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"U-Net \u5347\u7d1a\u7248\uff08UNet+\uff09"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u76ee\u7684\uff1a\u9a57\u8b49\u9577\u9023\u63a5\u662f\u5426\u6709\u6548\u7684\u5c0d\u7167\u7d44"}),"\n",(0,i.jsx)(e.li,{children:"\u9019\u500b\u8a2d\u8a08\u5f9e U-Nete \u6f14\u8b8a\u800c\u4f86\uff0c\u653e\u68c4\u4e86\u539f\u59cb\u7684\u9577\u8df3\u8e8d\u9023\u63a5\uff0c\u800c\u662f\u900f\u904e\u77ed\u8df3\u8e8d\u9023\u63a5\u5c07\u6bcf\u5169\u500b\u76f8\u9130\u7bc0\u9ede\u9023\u63a5\u8d77\u4f86\u3002 \u9019\u7a2e\u8a2d\u8a08\u4f7f\u5f97\u8f03\u6df1\u7684\u89e3\u78bc\u5668\u80fd\u5920\u5411\u8f03\u6dfa\u7684\u89e3\u78bc\u5668\u50b3\u9001\u76e3\u7763\u8a0a\u865f\uff0c\u5f9e\u800c\u5be6\u73fe\u4e86\u66f4\u597d\u7684\u8a0a\u606f\u50b3\u905e\u548c\u7279\u5fb5\u6574\u5408\u3002 \u9019\u7a2e\u8a2d\u8a08\u65e8\u5728\u63a2\u7d22\u4e0d\u540c\u6df1\u5ea6\u89e3\u78bc\u5668\u9593\u7684\u5354\u4f5c\u5982\u4f55\u5f71\u97ff\u7db2\u8def\u7684\u6574\u9ad4\u6548\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"U-Net \u9032\u968e\u7248\uff08UNet++\uff09"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u76ee\u7684\uff1a\u9a57\u8b49\u9577\u9023\u63a5\u662f\u5426\u6709\u6548\u7684\u5be6\u9a57\u7d44"}),"\n",(0,i.jsx)(e.li,{children:"UNet++\u5efa\u7acb\u5728 U-Nete \u7684\u57fa\u790e\u4e0a\uff0c\u900f\u904e\u9023\u63a5\u89e3\u78bc\u5668\uff0c\u5be6\u73fe\u4e86\u5bc6\u96c6\u9023\u63a5\u7684\u8df3\u8e8d\u9023\u63a5\u3002 \u9019\u7a2e\u8a2d\u8a08\u5141\u8a31\u6cbf\u8457\u8df3\u8e8d\u9023\u63a5\u7684\u5bc6\u96c6\u7279\u5fb5\u50b3\u64ad\uff0c\u5f9e\u800c\u5be6\u73fe\u66f4\u9748\u6d3b\u7684\u7279\u5fb5\u878d\u5408\u3002UNet++\u65e8\u5728\u5728\u4e00\u500b\u7d71\u4e00\u7684\u67b6\u69cb\u4e2d\u5be6\u73fe\u66f4\u9748\u6d3b\u548c\u9ad8\u6548\u7684\u7279\u5fb5\u63d0\u53d6\u8207\u878d\u5408\uff0c\u4ee5\u61c9\u5c0d\u4e0d\u540c\u6df1\u5ea6\u5e36\u4f86\u7684\u6311\u6230\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u900f\u904e\u9019\u5e7e\u7a2e\u67b6\u69cb\u8a2d\u8a08\uff0c\u4f5c\u8005\u5e0c\u671b\u5728\u4fdd\u7559\u539f\u59cb U-Net \u67b6\u69cb\u512a\u52e2\u7684\u540c\u6642\uff0c\u76e1\u53ef\u80fd\u5730\u89e3\u6c7a\u7db2\u8def\u6df1\u5ea6\u9078\u64c7\u7684\u554f\u984c\uff0c\u4ee5\u671f\u900f\u904e\u6574\u5408\u4e0d\u540c\u6df1\u5ea6\u7684\u7279\u5fb5\uff0c\u63d0\u5347\u7db2\u8def\u5728\u5f71\u50cf\u5206\u5272\u7b49\u4efb\u52d9\u4e0a\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7576\u7136\uff0c\u9019\u500b\u67b6\u69cb\u8a2d\u8a08\u4e0d\u662f\u7a81\u7136\u9593\u5c31\u9577\u6210\u9019\u6a23\u4e86\uff0c\u4e2d\u9593\u9084\u6709\u7d93\u904e\u4e00\u4e9b\u4f5c\u8005\u7684\u601d\u8003\u548c\u6539\u8b8a\uff0c\u76f8\u95dc\u7684\u5fc3\u8def\u6b77\u7a0b\u53ef\u4ee5\u53bb\u770b\u4f5c\u8005\u672c\u4eba\u5beb\u7684\u6587\u7ae0\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"\u91dd\u5c0d\u4e0a\u9762\u7684\u5167\u5bb9\uff0c\u5206\u5e7e\u500b\u554f\u984c\u9032\u884c\u8a0e\u8ad6\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"\u5c31\u53ea\u662f\u53c3\u6578\u591a",children:"\u5c31\u53ea\u662f\u53c3\u6578\u591a\uff1f"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"UNetpp_3",src:s(62353).A+"",width:"1024",height:"283"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u91dd\u5c0d\u9019\u500b\u7591\u554f\u8a2d\u8a08\u4e86\u4e00\u7d44\u5be6\u9a57\uff0c\u5373\u5c07\u539f\u59cb\u7684 U-Net \u7684\u62d3\u5bec\uff0c\u62c9\u5230\u548c UNet++ \u540c\u7b49\u7684\u6578\u91cf\uff0c\u518d\u9032\u884c\u6bd4\u8f03\u7d50\u679c\uff0c\u9019\u500b\u64cd\u4f5c\u96d6\u7136\u6709\u9ede\u6f66\u8349\uff08\u4f5c\u8005\u8aaa\u7684\uff09\uff0c\u4f46\u662f\u5f9e\u8868\u683c\u4e0a\u4f86\u770b\uff0c\u76f4\u63a5\u52a0\u5927\u53c3\u6578\u91cf\u7684\u7d50\u679c\u662f\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"\u6839\u672c\u6c92\u6709\u4efb\u4f55\u986f\u8457\u7684\u63d0\u5347\u3002"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6df1\u5ea6\u5b78\u7fd2\u4e2d\uff0c\u901a\u5e38\u66f4\u591a\u7684\u53c3\u6578\u610f\u5473\u8457\u6a21\u578b\u5177\u6709\u66f4\u9ad8\u7684\u8868\u9054\u80fd\u529b\uff0c\u4f46\u9019\u4e26\u4e0d\u7e3d\u662f\u5c0e\u81f4\u66f4\u597d\u7684\u7d50\u679c\u3002 \u904e\u591a\u7684\u53c3\u6578\u53ef\u80fd\u6703\u5c0e\u81f4\u904e\u5ea6\u64ec\u5408\uff0c\u5c24\u5176\u662f\u5728\u8cc7\u6599\u91cf\u8f03\u5c0f\u7684\u60c5\u6cc1\u4e0b\u3002\u6b64\u5916\uff0c\u96a8\u8457\u53c3\u6578\u6578\u91cf\u7684\u589e\u52a0\uff0c\u6a21\u578b\u7684\u8a08\u7b97\u548c\u5132\u5b58\u9700\u6c42\u4e5f\u6703\u986f\u8457\u589e\u52a0\uff0c\u9019\u53ef\u80fd\u4e0d\u662f\u6211\u5011\u60f3\u8981\u7684\u3002UNet++ \u900f\u904e\u512a\u5316\u7db2\u8def\u7d50\u69cb\uff0c\u800c\u4e0d\u662f\u7c21\u55ae\u5730\u589e\u52a0\u53c3\u6578\uff0c\u5c55\u73fe\u4e86\u53c3\u6578\u6700\u4f73\u5316\u5229\u7528\u7684\u91cd\u8981\u6027\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u6df1\u5ea6\u76e3\u7763\u548c\u6a21\u578b\u526a\u679d",children:"\u6df1\u5ea6\u76e3\u7763\u548c\u6a21\u578b\u526a\u679d"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u63a2\u8a0e\u6df1\u5ea6\u5b78\u7fd2\u7684\u7db2\u7d61\u7d50\u69cb\u6642\uff0c\u5c24\u5176\u662f\u91dd\u5c0d\u5716\u50cf\u5206\u5272\u4efb\u52d9\u7684 U-Net \u67b6\u69cb\uff0c\u6df1\u5ea6\u76e3\u7763\uff08Deep Supervision\uff09\u548c\u6a21\u578b\u526a\u679d\uff08Model Pruning\uff09\u5169\u500b\u6982\u5ff5\u986f\u5f97\u683c\u5916\u91cd\u8981\u3002\u9019\u4e9b\u6280\u8853\u4e0d\u50c5\u80fd\u5920\u63d0\u9ad8\u7db2\u7d61\u7684\u5b78\u7fd2\u6548\u7387\uff0c\u800c\u4e14\u6709\u52a9\u65bc\u5728\u4fdd\u6301\u4e00\u5b9a\u7cbe\u5ea6\u7684\u524d\u63d0\u4e0b\uff0c\u5927\u5e45\u6e1b\u5c11\u6a21\u578b\u7684\u898f\u6a21\uff0c\u9032\u800c\u52a0\u901f\u63a8\u7406\u904e\u7a0b\uff0c\u7279\u5225\u662f\u5728\u8cc7\u6e90\u53d7\u9650\u7684\u74b0\u5883\u5982\u79fb\u52d5\u8a2d\u5099\u4e0a\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6df1\u5ea6\u76e3\u7763\uff08Deep Supervision\uff09"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"UNetpp_4",src:s(65794).A+"",width:"740",height:"526"})}),"\n",(0,i.jsx)(e.p,{children:"\u6df1\u5ea6\u76e3\u7763\u7684\u6838\u5fc3\u601d\u60f3\u662f\u5728\u7db2\u7d61\u7684\u4e0d\u540c\u968e\u6bb5\u5f15\u5165\u984d\u5916\u7684\u640d\u5931\u51fd\u6578\uff0c\u4ee5\u4fdd\u8b49\u5373\u4fbf\u662f\u6dfa\u5c64\u7684\u7db2\u7d61\u7d50\u69cb\u4e5f\u80fd\u5920\u5f97\u5230\u6709\u6548\u7684\u68af\u5ea6\u66f4\u65b0\u3002\u901a\u904e\u5728\u6bcf\u500b\u5c64\u7d1a\u7684\u5b50\u7db2\u7d61\u4e2d\u6dfb\u52a0\u8f14\u52a9\u640d\u5931\uff0c\u4f7f\u5f97\u6bcf\u500b\u968e\u6bb5\u7684 U-Net \u90fd\u80fd\u5f97\u5230\u660e\u78ba\u7684\u76e3\u7763\u4fe1\u865f\uff0c\u9032\u800c\u4fc3\u9032\u6574\u500b\u7db2\u7d61\u7684\u5b78\u7fd2\u3002\u5728 U-Net++ \u67b6\u69cb\u4e2d\uff0c\u901a\u904e\u9032\u4e00\u6b65\u7684\u6df1\u5ea6\u76e3\u7763\uff0c\u6bcf\u500b\u5b50\u7db2\u7d61\u7684\u8f38\u51fa\u90fd\u80fd\u5920\u88ab\u8996\u70ba\u5716\u50cf\u7684\u5206\u5272\u7d50\u679c\uff0c\u63d0\u4f9b\u4e86\u4e00\u7a2e\u81ea\u7136\u800c\u76f4\u63a5\u7684\u89e3\u6c7a\u65b9\u6848\u4f86\u514b\u670d\u68af\u5ea6\u6d88\u5931\u7684\u554f\u984c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6a21\u578b\u526a\u679d\uff08Pruning\uff09"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"UNetpp_5",src:s(85791).A+"",width:"1024",height:"181"})}),"\n",(0,i.jsx)(e.p,{children:"\u6a21\u578b\u526a\u679d\u662f\u53e6\u4e00\u7a2e\u6709\u6548\u6e1b\u5c11\u6a21\u578b\u898f\u6a21\u7684\u6280\u8853\u3002\u901a\u904e\u8a55\u4f30\u6bcf\u500b\u5b50\u7db2\u7d61\u5728\u9a57\u8b49\u96c6\u4e0a\u7684\u6027\u80fd\uff0c\u53ef\u4ee5\u6c7a\u5b9a\u5728\u4e0d\u640d\u5931\u7cbe\u5ea6\u7684\u524d\u63d0\u4e0b\u526a\u53bb\u591a\u5c11\u5197\u4f59\u7684\u7db2\u7d61\u7d50\u69cb\u3002\u5728\u63a8\u7406\u968e\u6bb5\uff0c\u80fd\u5920\u4f9d\u64da\u5be6\u969b\u9700\u6c42\u9078\u64c7\u9069\u7576\u7684\u7db2\u7d61\u6df1\u5ea6\u4ee5\u9054\u5230\u5e73\u8861\u6027\u80fd\u548c\u8a08\u7b97\u6210\u672c\u7684\u76ee\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8a0e\u8ad6\u4e86 UNet++ \u7d50\u69cb\u548c\u6a21\u578b\u526a\u679d\u7684\u6982\u5ff5\u5f8c\uff0c\u53ef\u4ee5\u5f9e\u4ee5\u4e0b\u5e7e\u500b\u65b9\u9762\u4f86\u5206\u6790\u5176\u53ef\u884c\u6027\u548c\u91cd\u8981\u6027\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u53ef\u884c\u6027"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6df1\u76e3\u7763\u8207\u591a\u5c64\u8f38\u51fa\uff1aUNet++ \u7d50\u69cb\u900f\u904e\u6df1\u76e3\u7763\u64c1\u6709\u591a\u5c64\u6b21\u7684\u8f38\u51fa\uff0c\u9019\u4f7f\u5f97\u6bcf\u500b\u5b50\u7db2\u8def\u90fd\u80fd\u5920\u7522\u751f\u5f71\u50cf\u7684\u5206\u5272\u7d50\u679c\u3002 \u7531\u65bc\u9019\u7a2e\u8a2d\u8a08\uff0c\u6bcf\u500b\u5b50\u7db2\u8def\u7684\u8868\u73fe\u53ef\u4ee5\u7368\u7acb\u8a55\u4f30\uff0c\u70ba\u5f8c\u7e8c\u7684\u526a\u679d\u63d0\u4f9b\u4e86\u57fa\u790e\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6a21\u578b\u526a\u679d\uff1a\u5728\u6e2c\u8a66\u968e\u6bb5\uff0c\u53ea\u9700\u8981\u524d\u5411\u50b3\u64ad\uff0c\u67d0\u4e9b\u5b50\u7db2\u8def\u5982\u679c\u5df2\u7d93\u80fd\u5920\u7522\u751f\u6eff\u610f\u7684\u7d50\u679c\uff0c\u526a\u53bb\u5176\u4ed6\u5b50\u7db2\u8def\u4e0d\u6703\u5f71\u97ff\u5230\u524d\u9762\u5b50\u7db2\u8def\u7684\u8f38\u51fa\u3002 \u4f46\u5728\u8a13\u7df4\u6642\uff0c\u88ab\u526a\u53bb\u7684\u90e8\u5206\u5728\u53cd\u5411\u50b3\u64ad\u4e2d\u6709\u52a9\u65bc\u6b0a\u91cd\u66f4\u65b0\uff0c\u986f\u793a\u9019\u4e9b\u526a\u53bb\u7684\u90e8\u5206\u5c0d\u8a13\u7df4\u904e\u7a0b\u4ecd\u7136\u5f88\u91cd\u8981\u3002 \u9019\u7a2e\u8a2d\u8a08\u4fdd\u8b49\u4e86\u5728\u4fdd\u6301\u7db2\u8def\u6548\u80fd\u7684\u540c\u6642\u9032\u884c\u526a\u679d\u7684\u53ef\u884c\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u91cd\u8981\u6027"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8a08\u7b97\u6548\u7387\u8207\u8cc7\u6e90\u4f7f\u7528\uff1a\u900f\u904e\u526a\u679d\uff0c\u6a21\u578b\u7684\u5927\u5c0f\u6703\u986f\u8457\u6e1b\u5c11\u3002\u4f8b\u5982\uff1a\u5982\u679c L2 \u5c64\u7684\u8f38\u51fa\u5df2\u7d93\u6eff\u610f\uff0c\u5247\u53ef\u4ee5\u526a\u53bb\u5f88\u591a\u53c3\u6578\uff0c\u5f9e\u800c\u5927\u5e45\u964d\u4f4e\u904b\u7b97\u548c\u5132\u5b58\u7684\u9700\u6c42\u3002\u9019\u5c0d\u65bc\u5728\u8cc7\u6e90\u53d7\u9650\u74b0\u5883\uff08\u5982\u884c\u52d5\u88dd\u7f6e\uff09\u4e2d\u904b\u884c\u6a21\u578b\u662f\u5f88\u91cd\u8981\u7684\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u63d0\u901f\uff1a\u526a\u679d\u5f8c\u7684\u7db2\u72c0\u7d50\u69cb\u53ef\u4ee5\u986f\u8457\u63d0\u9ad8\u63a8\u7406\u901f\u5ea6\u3002 \u4f8b\u5982\uff1a\u5c07 L4 \u66ff\u63db\u70ba L2 \u53ef\u4ee5\u5c07\u8655\u7406\u901f\u5ea6\u63d0\u9ad8\u4e09\u500d\u3002 \u9019\u5c0d\u65bc\u9700\u8981\u5373\u6642\u6216\u8fd1\u5373\u6642\u56de\u61c9\u7684\u61c9\u7528\u5834\u666f\u975e\u5e38\u91cd\u8981\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u9748\u6d3b\u7684\u7db2\u8def\u7d50\u69cb\uff1a\u900f\u904e\u5408\u7406\u7684\u526a\u679d\uff0cUNet++ \u63d0\u4f9b\u4e86\u4e00\u500b\u9748\u6d3b\u7684\u7db2\u8def\u7d50\u69cb\uff0c\u53ef\u4ee5\u6839\u64da\u4e0d\u540c\u7684\u4efb\u52d9\u9700\u6c42\u548c\u8cc7\u6599\u96c6\u96e3\u5ea6\u4f86\u8abf\u6574\u7db2\u8def\u7684\u6df1\u5ea6\uff0c\u9054\u5230\u826f\u597d\u7684\u6548\u80fd\u8207\u6548\u7387\u7684\u5e73\u8861 \u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7cbe\u5ea6\u8207\u6a21\u578b\u5927\u5c0f\u7684\u5e73\u8861"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8cc7\u6599\u96c6\u7684\u96e3\u5ea6\u8207\u7db2\u8def\u6df1\u5ea6\u7684\u95dc\u4fc2\u8868\u660e\uff1a\u900f\u904e\u526a\u679d\uff0c\u53ef\u4ee5\u91dd\u5c0d\u8f03\u7c21\u55ae\u7684\u8cc7\u6599\u96c6\u4f7f\u7528\u8f03\u5c0f\u7684\u6a21\u578b\uff0c\u540c\u6642\u4fdd\u6301\u76f8\u8fd1\u7684\u6548\u80fd\u3002\u9019\u6a23\u7684\u8a2d\u8a08\u4f7f\u5f97 UNet++ \u80fd\u5920\u5728\u4fdd\u6301\u8f03\u9ad8\u7cbe\u5ea6\u7684\u540c\u6642\uff0c\u964d\u4f4e\u6a21\u578b\u7684\u5927\u5c0f\u548c\u8a08\u7b97\u6210\u672c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728 UNet++ \u67b6\u69cb\u7684\u5be6\u73fe\u4e2d\uff0c\u901a\u904e\u904b\u7528\u6df1\u5ea6\u76e3\u7763\u548c\u6a21\u578b\u526a\u679d\uff0c\u6210\u529f\u5730\u5728\u4fdd\u6301\u826f\u597d\u5206\u5272\u6027\u80fd\u7684\u540c\u6642\uff0c\u5927\u5e45\u7e2e\u6e1b\u4e86\u6a21\u578b\u7684\u53c3\u6578\u91cf\u3002\u9019\u4e0d\u50c5\u63d0\u5347\u4e86\u6a21\u578b\u5728\u79fb\u52d5\u8a2d\u5099\u4e0a\u7684\u904b\u884c\u6548\u7387\uff0c\u800c\u4e14\u5c0d\u65bc\u7db2\u7d61\u8a2d\u8a08\u7684\u9748\u6d3b\u6027\u548c\u53ef\u8abf\u6574\u6027\u63d0\u4f9b\u4e86\u65b0\u7684\u601d\u8003\u7dad\u5ea6\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u904e\u5728 UNet++ \u4e0a\u5be6\u65bd\u6df1\u5ea6\u76e3\u7763\u548c\u6a21\u578b\u526a\u679d\uff0c\u53ef\u4ee5\u89c0\u5bdf\u5230\u4e86\u8a72\u65b9\u6cd5\u5728\u512a\u5316\u5716\u50cf\u5206\u5272\u4efb\u52d9\u4e0a\u7684\u6f5b\u529b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6df1\u5ea6\u76e3\u7763\u5141\u8a31\u6a21\u578b\u5728\u4e0d\u540c\u7684\u7db2\u7d61\u5c64\u7d1a\u7372\u5f97\u66f4\u597d\u7684\u7279\u5fb5\u8868\u793a\uff0c\u800c\u526a\u679d\u63d0\u4f9b\u4e86\u4e00\u7a2e\u5728\u4fdd\u6301\u6027\u80fd\u7684\u540c\u6642\u964d\u4f4e\u8a08\u7b97\u548c\u5b58\u5132\u9700\u6c42\u7684\u6709\u6548\u65b9\u6cd5\uff0c\u9019\u5c0d\u65bc\u786c\u9ad4\u8cc7\u6e90\u53d7\u9650\u7684\u5834\u666f\u5c24\u70ba\u91cd\u8981\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u904e\uff0c\u5f9e\u5de5\u7a0b\u89d2\u5ea6\u770b\uff0c\u9019\u4e9b\u65b9\u6cd5\u4e5f\u5e36\u4f86\u4e86\u4e00\u4e9b\u6311\u6230\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u76f4\u89c0\u7684\u662f\uff0c\u526a\u679d\u7a0b\u5ea6\u7684\u78ba\u5b9a\u4f9d\u8cf4\u65bc\u9a57\u8b49\u96c6\u7684\u8868\u73fe\uff0c\u9019\u53ef\u80fd\u5c0e\u81f4\u6a21\u578b\u5728\u4e0d\u540c\u7684\u6578\u64da\u96c6\u6216\u771f\u5be6\u4e16\u754c\u61c9\u7528\u4e2d\u7684\u6027\u80fd\u4e0d\u7a69\u5b9a\uff0c\u4e00\u4e0d\u7559\u610f\u5c31\u8b93\u6a21\u578b\u53bb\u4e16\u4e86\u4e5f\u8aaa\u4e0d\u5b9a\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u89e3\u6c7a\u4e0a\u8ff0\u554f\u984c\u7684\u4e00\u500b\u53ef\u80fd\u65b9\u5411\u662f\u63a1\u7528\u81ea\u9069\u61c9\u526a\u679d\u7b56\u7565\uff0c\u901a\u904e\u5728\u4e0d\u540c\u968e\u6bb5\u52d5\u614b\u8abf\u6574\u526a\u679d\u7a0b\u5ea6\uff0c\u4ee5\u53ca\u63a2\u7d22\u591a\u76ee\u6a19\u512a\u5316\u65b9\u6cd5\u4f86\u5e73\u8861\u6e96\u78ba\u5ea6\u548c\u6548\u7387\u3002\u6216\u662f\u63a2\u7d22\u4f7f\u7528\u8de8\u6578\u64da\u96c6\u7684\u9a57\u8b49\u548c\u8f49\u79fb\u5b78\u7fd2\u6280\u8853\uff0c\u4ee5\u63d0\u9ad8\u6a21\u578b\u5728\u4e0d\u540c\u61c9\u7528\u5834\u666f\u4e0b\u7684\u6cdb\u5316\u80fd\u529b\u548c\u7a69\u5b9a\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5be6\u969b\u64cd\u4f5c\u4e2d\uff0c\u5be6\u65bd\u6df1\u5ea6\u76e3\u7763\u548c\u6a21\u578b\u526a\u679d\u589e\u52a0\u4e86\u6a21\u578b\u8a2d\u8a08\u548c\u8a13\u7df4\u7684\u8907\u96dc\u5ea6\uff0c\u5de5\u7a0b\u5e2b\u53ef\u80fd\u9700\u8981\u6295\u5165\u984d\u5916\u7684\u6642\u9593\u548c\u8cc7\u6e90\u4f86\u8abf\u6574\u548c\u9a57\u8b49\u526a\u679d\u7b56\u7565\uff0c\u4ee5\u78ba\u4fdd\u6a21\u578b\u7684\u6cdb\u5316\u80fd\u529b\uff0c\u958b\u767c\u9031\u671f\u53ef\u80fd\u6703\u5ef6\u9577\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7bc7\u8ad6\u6587\u63d0\u4f9b\u4e86\u5c0d\u512a\u5316\u7279\u5fb5\u878d\u5408\u65b9\u5f0f\u7684\u65b0\u601d\u8def\uff0c\u4f46\u9084\u662f\u5e36\u6709\u4e00\u5b9a\u7684\u6280\u8853\u96e3\u5ea6\uff0c\u9700\u901a\u904e\u9032\u4e00\u6b65\u7684\u7814\u7a76\u548c\u5be6\u8e10\u4f86\u514b\u670d\u3002\u5e0c\u671b\u9019\u7bc7\u6587\u7ae0\u80fd\u5920\u70ba\u7814\u7a76\u8005\u7684\u5de5\u4f5c\u548c\u7814\u7a76\u63d0\u4f9b\u6709\u76ca\u7684\u53c3\u8003\u548c\u555f\u793a\u3002"})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},85635:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/unetpp_1-25be1ac5d2f0c8250257166a10c85fd7.jpg"},83828:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/unetpp_2-316f3fd4393960b0bc97b5a98765cbfe.jpg"},62353:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/unetpp_3-e7076be2db82c82591e4efb4ffe59a56.jpg"},65794:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/unetpp_4-89eabd8ec640fdfa657b8b214f6eaa5c.jpg"},85791:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/unetpp_5-47f073a8eec6816a9ad912c6303d6f17.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>t});var i=s(96540);const l={},r=i.createContext(l);function d(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);