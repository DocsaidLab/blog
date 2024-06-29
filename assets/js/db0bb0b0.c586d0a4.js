"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[355],{36600:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>r});var a=n(74848),l=n(28453);const i={},c="[17.07] ShuffleNet",t={id:"shufflenet/index",title:"[17.07] ShuffleNet",description:"\u901a\u9053\u6d17\u724c\u7db2\u8def",source:"@site/papers/1707-shufflenet/index.md",sourceDirName:"1707-shufflenet",slug:"/shufflenet/",permalink:"/papers/shufflenet/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[17.07] NASNet",permalink:"/papers/nasnet/"},next:{title:"[17.09] SENet",permalink:"/papers/senet/"}},h={},r=[{value:"\u901a\u9053\u6d17\u724c\u7db2\u8def",id:"\u901a\u9053\u6d17\u724c\u7db2\u8def",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u8a08\u7b97\u91cf\u8207\u901f\u5ea6\u4e0d\u4e00\u81f4",id:"\u8a08\u7b97\u91cf\u8207\u901f\u5ea6\u4e0d\u4e00\u81f4",level:3},{value:"\u5927\u91cf 1x1 \u5377\u7a4d",id:"\u5927\u91cf-1x1-\u5377\u7a4d",level:3},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u7d44\u5377\u7a4d",id:"\u7d44\u5377\u7a4d",level:3},{value:"\u901a\u9053\u6d17\u724c",id:"\u901a\u9053\u6d17\u724c",level:3},{value:"\u6d17\u724c\u6a21\u7d44\u653e\u7f6e\u4f4d\u7f6e",id:"\u6d17\u724c\u6a21\u7d44\u653e\u7f6e\u4f4d\u7f6e",level:3},{value:"\u6a21\u578b\u67b6\u69cb",id:"\u6a21\u578b\u67b6\u69cb",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u7d44\u5377\u7a4d\u7684\u6548\u679c",id:"\u7d44\u5377\u7a4d\u7684\u6548\u679c",level:3},{value:"\u901a\u9053\u6d17\u724c\u7684\u6548\u679c",id:"\u901a\u9053\u6d17\u724c\u7684\u6548\u679c",level:3},{value:"\u8207\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03",id:"\u8207\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03",level:3},{value:"\u771f\u5be6\u63a8\u8ad6\u901f\u5ea6\u8a55\u4f30",id:"\u771f\u5be6\u63a8\u8ad6\u901f\u5ea6\u8a55\u4f30",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function m(s){const e={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"1707-shufflenet",children:"[17.07] ShuffleNet"}),"\n",(0,a.jsx)(e.h2,{id:"\u901a\u9053\u6d17\u724c\u7db2\u8def",children:"\u901a\u9053\u6d17\u724c\u7db2\u8def"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://arxiv.org/abs/1707.01083",children:(0,a.jsx)(e.strong,{children:"ShuffleNet: An Extremely Efficient Convolutional Neural Network for Mobile Devices"})})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:"\u8f15\u91cf\u7db2\u8def\u7684\u7af6\u8cfd\u624d\u525b\u958b\u59cb\u3002"}),"\n",(0,a.jsx)(e.p,{children:"ShuffleNet \u4e5f\u5728\u9019\u500b\u6642\u5019\u52a0\u5165\u6230\u5c40\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,a.jsx)(e.h3,{id:"\u8a08\u7b97\u91cf\u8207\u901f\u5ea6\u4e0d\u4e00\u81f4",children:"\u8a08\u7b97\u91cf\u8207\u901f\u5ea6\u4e0d\u4e00\u81f4"}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u672c\u7814\u7a76\u4e2d\uff0c\u4f5c\u8005\u548c\u4e4b\u524d\u7814\u7a76\u4e00\u6a23\uff0c\u60f3\u89e3\u6c7a\u7684\u9084\u662f\u540c\u4e00\u4ef6\u4e8b\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"\u5982\u4f55\u5728\u4fdd\u6301\u9ad8\u7cbe\u5ea6\u7684\u540c\u6642\uff0c\u70ba\u904b\u7b97\u80fd\u529b\u975e\u5e38\u6709\u9650\u7684\u79fb\u52d5\u8a2d\u5099\u8a2d\u8a08\u4e00\u500b\u9ad8\u6548\u7684\u795e\u7d93\u7db2\u8def\uff1f"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u96d6\u7136\u5982 MobileNet \u548c SENet \u7b49\u6a21\u578b\u5df2\u5411\u4f4e\u8a08\u7b97\u6210\u672c\u65b9\u5411\u9081\u51fa\u4e86\u4e00\u6b65\uff0c\u4f46\u9019\u4e9b\u6a21\u578b\u5728\u975e\u5e38\u4f4e\u7684\u8a08\u7b97\u9810\u7b97\u4e0b\uff08\u4f8b\u5982\u5c0f\u65bc 150 MFLOPs\uff09\u7684\u6027\u80fd\u4ecd\u6709\u63d0\u5347\u7a7a\u9593\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u4f5c\u8005\u6307\u51fa\uff0c\u73fe\u6709\u7684\u9ad8\u6548\u6a21\u578b\u300c",(0,a.jsx)(e.strong,{children:"\u5728\u5be6\u969b\u786c\u9ad4\u4e0a\u7684\u5be6\u969b\u63a8\u7406\u6642\u9593\u548c\u9810\u671f\u6027\u80fd\u4e4b\u9593\u5e38\u5e38\u5b58\u5728\u8f03\u5927\u5dee\u8ddd"}),"\u300d\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u5927\u91cf-1x1-\u5377\u7a4d",children:"\u5927\u91cf 1x1 \u5377\u7a4d"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"MobileNet-V1 FLOPs",src:n(60254).A+"",width:"1224",height:"408"})}),"\n",(0,a.jsx)(e.p,{children:"\u5728 MobileNet-V1 \u4e2d\uff0c\u4f5c\u8005\u6709\u5c0d\u6574\u500b\u7db2\u8def\u67b6\u69cb\u7684\u8a08\u7b97\u91cf\u9032\u884c\u5206\u6790\uff0c\u5982\u4e0a\u8868\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u672c\u7bc7\u8ad6\u6587\u7684\u4f5c\u8005\u8a8d\u70ba\u5927\u91cf\u7684 1x1 \u5377\u7a4d\u662f\u8a08\u7b97\u91cf\u7684\u4e3b\u8981\u4f86\u6e90\uff0c\u61c9\u8a72\u8981\u5f9e\u9019\u500b\u89d2\u5ea6\u8457\u624b\uff0c\u7e2e\u6e1b\u8a08\u7b97\u91cf\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,a.jsx)(e.h3,{id:"\u7d44\u5377\u7a4d",children:"\u7d44\u5377\u7a4d"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"ShuffleNet arch",src:n(51753).A+"",width:"1746",height:"678"})}),"\n",(0,a.jsx)(e.p,{children:"\u4e00\u500b\u4e3b\u8981\u7684\u6311\u6230\u662f\u5982\u4f55\u6e1b\u5c11 1x1 \u5377\u7a4d\u7684\u8a08\u7b97\u91cf\uff0c\u4f5c\u8005\u8a8d\u70ba\u63d0\u9ad8\u5206\u7d44\u6578\u91cf\u662f\u89e3\u6c7a\u554f\u984c\u7684\u8fa6\u6cd5\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u5047\u8a2d\u8f38\u5165\u548c\u8f38\u51fa\u7684\u901a\u9053\u6578\u90fd\u70ba 128\u3002\u5728\u4e0d\u4f7f\u7528\u5206\u7d44\u7684\u60c5\u6cc1\u4e0b\uff0c1x1 \u5377\u7a4d\u9700\u8981\u5c0d\u6bcf\u500b\u8f38\u51fa\u901a\u9053\u7684\u6bcf\u500b\u8f38\u5165\u901a\u9053\u9032\u884c\u8a08\u7b97\uff0c\u56e0\u6b64\u4e58\u6cd5\u904b\u7b97\u7684\u7e3d\u6578\u70ba ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"128"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"128"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"16"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mn,{children:"384"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"128 \\times 128 = 16,384"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"128"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"128"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord",children:"16"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord",children:"384"})]})]})]})," \u6b21\u3002\u7136\u800c\uff0c\u5982\u679c\u8a2d\u5b9a\u5206\u7d44\u6578\u91cf\u70ba 8\uff0c\u5247\u6bcf\u500b\u5206\u7d44\u6240\u5305\u542b\u7684\u901a\u9053\u6578\u8b8a\u6210 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"128"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(e.mn,{children:"8"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"16"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"128 / 8 = 16"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord",children:"128/8"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"16"})]})]})]}),"\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6bcf\u7d44\u5167\u90e8\u7684\u6372\u7a4d\u8a08\u7b97\u50c5\u6d89\u53ca 16 \u500b\u8f38\u5165\u901a\u9053\u8207 16 \u500b\u8f38\u51fa\u901a\u9053\u4e4b\u9593\u7684\u4e58\u6cd5\uff0c\u56e0\u6b64\u6bcf\u500b\u5206\u7d44\u7684\u8a08\u7b97\u91cf\u70ba ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"16"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"16"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"256"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"16 \\times 16 = 256"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"16"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"16"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"256"})]})]})]})," \u6b21\u4e58\u6cd5\u3002\u7531\u65bc\u5171\u6709 8 \u500b\u9019\u6a23\u7684\u5206\u7d44\uff0c\u7e3d\u7684\u4e58\u6cd5\u904b\u7b97\u6578\u70ba ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"256"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"8"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mn,{children:"048"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"256 \\times 8 = 2,048"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"256"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"8"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord",children:"048"})]})]})]})," \u6b21\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u900f\u904e\u6bd4\u8f03\uff0c\u53ef\u4ee5\u770b\u51fa\u5206\u7d44\u5377\u7a4d\u53ef\u4ee5\u5c07\u8a08\u7b97\u91cf\u6e1b\u5c11\u5230\u539f\u59cb 1x1 \u5377\u7a4d\u7684\u5927\u7d04 12.5%\uff0c\u5f9e 16,384 \u6b21\u964d\u4f4e\u5230 2,048 \u6b21\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4f46\u662f\u5929\u4e0b\u6c92\u6709\u767d\u5403\u7684\u5348\u9910\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u5206\u7d44\u5377\u7a4d\u7684\u78ba\u53ef\u4ee5\u6e1b\u5c11\u8a08\u7b97\u91cf\uff0c\u4f46\u4e5f\u6703\u5e36\u4f86\u4e00\u500b\u554f\u984c\uff1a",(0,a.jsx)(e.strong,{children:"\u5206\u7d44\u5377\u7a4d\u6703\u7834\u58de\u901a\u9053\u4e4b\u9593\u7684\u95dc\u806f\u6027"}),"\uff0c\u5982\u4e0a\u5716 (a) \u6240\u793a\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u7d42\u4f7f\u6574\u500b\u7db2\u8def\u7684\u8868\u73fe\u6703\u5927\u5e45\u964d\u4f4e\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u901a\u9053\u6d17\u724c",children:"\u901a\u9053\u6d17\u724c"}),"\n",(0,a.jsxs)(e.p,{children:["\u70ba\u4e86\u89e3\u6c7a\u5206\u7d44\u5377\u7a4d\u5e36\u4f86\u7684\u554f\u984c\uff0c\u4f5c\u8005\u63d0\u51fa\u4e86\u4e00\u500b\u65b0\u7684\u64cd\u4f5c\uff1a",(0,a.jsx)(e.strong,{children:"\u901a\u9053\u6d17\u724c"}),"\uff0c\u5982\u4e0a\u5716 (b) \u6240\u793a\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u6982\u5ff5\u662f\uff1a\u65e2\u7136\u5206\u7d44\u9650\u5236\u4e86\u901a\u9053\u9593\u4e92\u76f8\u6d41\u901a\u4fe1\u606f\u7684\u80fd\u529b\uff0c\u90a3\u9ebc\u6211\u5011\u53ef\u4ee5\u5728\u5206\u7d44\u5167\u90e8\u5f15\u5165\u4e00\u500b\u64cd\u4f5c\uff0c\u5c07\u4e0d\u540c\u5206\u7d44\u7684\u901a\u9053\u9032\u884c\u6df7\u5408\uff0c\u4ee5\u4fdd\u6301\u901a\u9053\u9593\u7684\u95dc\u806f\u6027\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u500b\u64cd\u4f5c\u770b\u4f3c\u4e0d\u597d\u7406\u89e3\uff0c\u4f46\u662f\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u5be6\u4f5c\u6d17\u724c\u7684\u51fd\u6578\uff0c\u5c31\u80fd\u7406\u89e3\u9019\u500b\u64cd\u4f5c\u7684\u610f\u7fa9\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import torch\n\ndef shuffle_channel(x: torch.Tensor, groups: int) -> torch.Tensor:\n    batch_size, num_channels, height, width = x.size()\n    channels_per_group = num_channels // groups\n\n    x = x.view(batch_size, groups, channels_per_group, height, width)\n    x = x.permute(0, 2, 1, 3, 4).contiguous()\n    x = x.view(batch_size, num_channels, height, width)\n    return x\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u4e0a\u8ff0\u51fd\u6578\uff0c\u9996\u5148\u628a\u901a\u9053\u6578\u91cf\u5206\u6210\u5e7e\u500b\u7d44\uff0c\u7136\u5f8c\u79fb\u52d5\u901a\u9053\u7684\u4f4d\u7f6e\uff0c\u9019\u6a23\u5c31\u53ef\u4ee5\u5be6\u73fe\u901a\u9053\u6d17\u724c\u7684\u6548\u679c\u3002\u8209\u4f8b\u4f86\u8aaa\uff0c\u5982\u679c\u539f\u672c\u7684\u901a\u9053\u662f\uff1aAAA,BBB,CCC\uff0c\u7d93\u904e\u6d17\u724c\u5f8c\u8b8a\u6210\uff1aABC,ABC,ABC\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u96d6\u7136\u8aaa\u662f\u6d17\u724c\uff0c\u4f46\u4e0d\u662f\u96a8\u6a5f\u7684\u6d17\u724c\uff0c\u800c\u662f\u6709\u898f\u5247\u7684\u6d17\u724c\uff0c\u53cd\u6b63\u5c31\u662f\u8981\u8b93\u4e0d\u540c\u7d44\u7684\u901a\u9053\u80fd\u5920\u4e92\u76f8\u4ea4\u6d41\u4fe1\u606f\u5c31\u5c0d\u4e86\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6d17\u724c\u6a21\u7d44\u653e\u7f6e\u4f4d\u7f6e",children:"\u6d17\u724c\u6a21\u7d44\u653e\u7f6e\u4f4d\u7f6e"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"ShuffleNet block",src:n(80411).A+"",width:"1386",height:"774"})}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u5f8c\u662f\u6d17\u724c\u6a21\u7d44\u7684\u653e\u7f6e\u4f4d\u7f6e\uff0c\u5982\u4e0a\u5716\u6240\u793a\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["ShuffleNet \u55ae\u5143\u7684\u8a2d\u8a08\u8d77\u6e90\u65bc\u5c0d\u6b98\u5dee\u584a\u74f6\u9838\u55ae\u5143\u7684\u501f\u9452\uff0c\u7279\u5225\u662f\u5728\u5176\u6b98\u5dee\u8def\u5f91\u4e2d\uff0c\u904b\u7528\u4e86\u8a08\u7b97\u6548\u7387\u8f03\u9ad8\u7684",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"3"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"3"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"3 \\times 3"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"3"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"3"})]})]})]}),"\u6df1\u5ea6\u5377\u7a4d\u4f86\u8655\u7406\u74f6\u9838\u7279\u5fb5\u5716\u3002\u5728\u9019\u500b\u57fa\u790e\u4e0a\uff0c\u900f\u904e\u4f7f\u7528\u5206\u7d44\u9010\u9ede\u5377\u7a4d\u4ee3\u66ff\u50b3\u7d71\u7684",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"1"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 \\times 1"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),"\u5377\u7a4d\uff0c\u4e26\u7d50\u5408\u901a\u9053\u6d17\u724c\u64cd\u4f5c\uff0c\u5f62\u6210\u4e86 ShuffleNet \u55ae\u5143\u7684\u6838\u5fc3\u7d50\u69cb\uff08\u5982\u4e0a\u5716\uff08b\uff09\u6240\u793a\uff09\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u70ba\u4e86\u5339\u914d\u5feb\u6377\u8def\u5f91\u4e26\u6062\u5fa9\u901a\u9053\u7dad\u5ea6\uff0c\u55ae\u5143\u4e2d\u7684\u7b2c\u4e8c\u500b\u9010\u9ede\u5377\u7a4d\u4e5f\u662f\u5206\u7d44\u7684\uff0c\u4f46\u5728\u6b64\u4e4b\u5f8c\u4e26\u6c92\u6709\u6dfb\u52a0\u984d\u5916\u7684\u901a\u9053\u6d17\u724c\u64cd\u4f5c\uff0c\u4ee5\u4fdd\u6301\u64cd\u4f5c\u7684\u7c21\u6f54\u6027\u3002\u5728\u9019\u7a2e\u7d50\u69cb\u4e2d\uff0c\u6279\u91cf\u6b78\u4e00\u5316\uff08BN\uff09\u548c\u975e\u7dda\u6027\u6d3b\u5316\u7684\u61c9\u7528\u8207\u5176\u4ed6\u7814\u7a76\u4e2d\u7684\u4f7f\u7528\u76f8\u4f3c\uff0c\u4e0d\u904e\u4e0d\u63a1\u7528\u5728\u6df1\u5ea6\u5377\u7a4d\u5f8c\u7acb\u5373\u4f7f\u7528 ReLU \u7684\u5e38\u898f\u5efa\u8b70\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u7576\u6d89\u53ca\u5230\u6b65\u9577\uff08stride\uff09\u7684\u4f7f\u7528\u6642\uff0cShuffleNet \u55ae\u5143\u9032\u884c\u4e86\u5169\u9805\u4e3b\u8981\u7684\u8abf\u6574\uff0c\u5982\u4e0a\u5716\uff08c\uff09\u6240\u793a\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u9996\u5148\uff0c\u5728\u5feb\u6377\u8def\u5f91\u4e0a\u5f15\u5165\u4e86",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"3"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"3"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"3 \\times 3"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"3"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"3"})]})]})]}),"\u7684\u5e73\u5747\u6c60\u5316\u64cd\u4f5c"]}),"\n",(0,a.jsx)(e.li,{children:"\u5176\u6b21\uff0c\u900f\u904e\u901a\u9053\u4e32\u806f\u4ee3\u66ff\u9010\u5143\u7d20\u52a0\u6cd5\uff0c\u6709\u6548\u5730\u64f4\u5c55\u4e86\u901a\u9053\u7dad\u5ea6\u800c\u5e7e\u4e4e\u4e0d\u589e\u52a0\u8a08\u7b97\u6210\u672c\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u7a2e\u8a2d\u8a08\u4f7f\u5f97\u55ae\u5143\u4e2d\u7684\u6240\u6709\u7d44\u4ef6\u90fd\u53ef\u4ee5\u6709\u6548\u5730\u8a08\u7b97\uff0c\u7279\u5225\u662f\u5728\u5206\u7d44\u9010\u9ede\u5377\u7a4d\u4e2d\u5be6\u73fe\u4e86\u901a\u9053\u6d17\u724c\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6a21\u578b\u67b6\u69cb",children:"\u6a21\u578b\u67b6\u69cb"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"ShuffleNet architecture",src:n(75528).A+"",width:"1562",height:"678"})}),"\n",(0,a.jsxs)(e.p,{children:["\u57fa\u65bc\u4e0a\u8ff0\u7684\u6240\u6709\u6a21\u7d44\uff0c\u6700\u7d42\u7d44\u6210\u4e86 ShuffleNet \u7684\u6574\u9ad4\u67b6\u69cb\uff0c\u5982\u4e0a\u8868\u6240\u793a\u3002\u5230\u53f3\u908a\u6709\u4e00\u500b ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"1"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"g=1"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," \u5230 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"8"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"g=8"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"8"})]})]})]})," \u7684\u8868\u683c\uff0c\u9019\u500b ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"g"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"g"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"})]})})]})," \u5c31\u662f\u5206\u7d44\u6578\u91cf\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u4f5c\u8005\u5728\u9019\u88e1\u8003\u616e\u5230\u63d0\u9ad8\u5206\u7d44\u6578\u91cf\u6703\u6e1b\u5c11\u8a08\u7b97\u91cf\uff0c\u800c\u70ba\u4e86\u8b93\u6bcf\u500b\u6a21\u578b\u80fd\u5920\u6709\u4e00\u81f4\u7684\u8a08\u7b97\u91cf\uff08\u4e00\u81f4\u7684\u6bd4\u8f03\u57fa\u6e96\uff09\uff0c\u56e0\u6b64\u63d0\u5347\u5206\u7d44\u6578\u91cf\u7684\u540c\u6642\uff0c\u4e5f\u540c\u6642\u63d0\u5347\u7db2\u8def\u7684\u6bcf\u5c64\u7684\u901a\u9053\u6578\u91cf\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,a.jsx)(e.h3,{id:"\u7d44\u5377\u7a4d\u7684\u6548\u679c",children:"\u7d44\u5377\u7a4d\u7684\u6548\u679c"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"ShuffleNet results 1",src:n(19493).A+"",width:"1412",height:"290"})}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u6a21\u578b\u5927\u5c0f\u548c\u7d44\u6578\u5f71\u97ff"}),"\uff1a"]}),"\n",(0,a.jsx)(e.p,{children:"\u5be6\u9a57\u6bd4\u8f03\u4e86\u4e0d\u540c\u7d44\u6578\uff08\u5f9e 1 \u5230 8\uff09\u7684 ShuffleNet \u6a21\u578b\uff0c\u540c\u6642\u8003\u616e\u4e86\u4e0d\u540c\u7684\u7db2\u7d61\u8907\u96dc\u5ea6\uff081x, 0.5x, 0.25x\uff09\u3002\u5728\u76f8\u540c\u7684\u8907\u96dc\u5ea6\u4e0b\uff0c\u5206\u7d44\u5377\u7a4d\uff08\u7279\u5225\u662f\u8f03\u5927\u7684\u7d44\u6578\u5982 g=8\uff09\u901a\u5e38\u6703\u63d0\u9ad8\u6a21\u578b\u7684\u5206\u985e\u6548\u80fd\u3002\u5177\u9ad4\u4f86\u8aaa\uff0c\u5c0d\u65bc\u6700\u57fa\u672c\u7684 ShuffleNet 1x \u6a21\u578b\uff0c\u6700\u5927\u7d44\u6578\u63d0\u9ad8\u4e86\u6548\u80fd 1.2%\uff1b\u800c\u5c0d\u65bc\u8f03\u5c0f\u7684\u6a21\u578b ShuffleNet 0.5x \u548c 0.25x\uff0c\u6548\u80fd\u63d0\u5347\u5206\u5225\u70ba 3.5%\u548c 4.4%\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u6027\u80fd\u98fd\u548c\u548c\u4e0b\u964d"}),"\uff1a"]}),"\n",(0,a.jsx)(e.p,{children:"\u5c0d\u65bc\u67d0\u4e9b\u6a21\u578b\uff0c\u5982 ShuffleNet 0.5x\uff0c\u7576\u7d44\u6578\u8f03\u5927\uff08\u4f8b\u5982 g=8\uff09\u6642\uff0c\u5206\u985e\u6027\u80fd\u53ef\u80fd\u6703\u9054\u5230\u98fd\u548c\u751a\u81f3\u4e0b\u964d\uff0c\u56e0\u70ba\u6bcf\u500b\u5377\u7a4d\u6ffe\u6ce2\u5668\u7684\u8f38\u5165\u901a\u9053\u6578\u6e1b\u5c11\uff0c\u53ef\u80fd\u640d\u5bb3\u4e86\u8868\u793a\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u5c0f\u6a21\u578b\u66f4\u5927\u7684\u7d44\u6578\u6548\u679c\u66f4\u4f73"}),"\uff1a"]}),"\n",(0,a.jsx)(e.p,{children:"\u5c0d\u65bc\u8f03\u5c0f\u7684\u6a21\u578b\uff0c\u5982 ShuffleNet 0.25x\uff0c\u8f03\u5927\u7684\u7d44\u6578\u901a\u5e38\u80fd\u5e36\u4f86\u66f4\u597d\u7684\u7d50\u679c\uff0c\u9019\u8868\u660e\u66f4\u5bec\u7684\u7279\u5fb5\u5716\u70ba\u9019\u4e9b\u8f03\u5c0f\u7684\u6a21\u578b\u5e36\u4f86\u66f4\u591a\u7684\u597d\u8655\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u901a\u9053\u6d17\u724c\u7684\u6548\u679c",children:"\u901a\u9053\u6d17\u724c\u7684\u6548\u679c"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"ShuffleNet results 2",src:n(62266).A+"",width:"1662",height:"450"})}),"\n",(0,a.jsx)(e.p,{children:"\u5f88\u660e\u986f\uff0c\u901a\u9053\u6d17\u724c\u59cb\u7d42\u53ef\u4ee5\u63d0\u9ad8\u4e0d\u540c\u8a2d\u5b9a\u7684\u5206\u985e\u5206\u6578\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u8207\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03",children:"\u8207\u5176\u4ed6\u6a21\u578b\u7684\u6bd4\u8f03"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"ShuffleNet results 3",src:n(14199).A+"",width:"1800",height:"688"})}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u5404\u7a2e\u8907\u96dc\u5ea6\u7b49\u7d1a\u4e0a\uff0cShuffleNet \u5728\u6548\u80fd\u4e0a\u7686\u512a\u65bc MobileNet\u3002"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"ShuffleNet 1\xd7 \u7684\u6e96\u78ba\u7387\u6bd4 MobileNet \u9ad8 3.1%\uff0c\u5118\u7ba1\u5176\u904b\u7b97\u6210\u672c\u66f4\u9ad8\uff08\u589e\u52a0\u4e86 500 MFLOPs\uff09"}),"\n",(0,a.jsx)(e.li,{children:"\u5728\u7d04 40 MFLOP \u7684\u8f03\u5c0f\u7db2\u8def\u4e2d\uff0cShuffleNet \u7684\u6548\u80fd\u512a\u65bc MobileNet 7.8%\u3002"}),"\n",(0,a.jsx)(e.li,{children:"ShuffleNet \u5728\u7cbe\u78ba\u5ea6\u76f8\u7576\u7684\u60c5\u6cc1\u4e0b\uff0c\u5c55\u73fe\u4e86\u6bd4\u5176\u4ed6\u6d41\u884c\u7db2\u7d61\u6a21\u578b\u66f4\u9ad8\u7684\u6548\u7387\u3002\u4f8b\u5982\uff1a\u76f8\u8f03\u65bc AlexNet\uff0cShuffleNet \u7406\u8ad6\u4e0a\u5feb 18 \u500d\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.admonition,{type:"tip",children:[(0,a.jsx)(e.p,{children:"\u7279\u5225\u6ce8\u610f\u5230\u6574\u5408 SE \u6a21\u7d44\u7684 ShuffleNet 2\xd7 \u5728 top-1 \u932f\u8aa4\u7387\u4e0a\u9054\u5230 24.7%\u3002"}),(0,a.jsx)(e.p,{children:"\u5118\u7ba1\u7406\u8ad6\u8907\u96dc\u6027\u589e\u52a0\u4e0d\u5927\uff0c\u4f46\u5728\u8ad6\u6587\u4e2d\uff0c\u4f5c\u8005\u63d0\u5230\u5be6\u969b\u4e0a\u9019\u7a2e\u914d\u7f6e\u7684 ShuffleNet \u5728\u79fb\u52d5\u8a2d\u5099\u4e0a\u904b\u884c\u901f\u5ea6\u6bd4\u539f\u59cb\u7248\u672c\u6162 25%\u5230 40%\u3002"})]}),"\n",(0,a.jsx)(e.h3,{id:"\u771f\u5be6\u63a8\u8ad6\u901f\u5ea6\u8a55\u4f30",children:"\u771f\u5be6\u63a8\u8ad6\u901f\u5ea6\u8a55\u4f30"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"ShuffleNet results 4",src:n(19044).A+"",width:"1804",height:"396"})}),"\n",(0,a.jsx)(e.p,{children:"\u4f5c\u8005\u8a55\u4f30\u4e86 ShuffleNet \u5728 ARM \u884c\u52d5\u88dd\u7f6e\u4e0a\u7684\u63a8\u8ad6\u901f\u5ea6\uff0c\u4e26\u8207\u5176\u4ed6\u6a21\u578b\u9032\u884c\u4e86\u6bd4\u8f03\u3002"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u7d44\u6578\u8207\u6548\u7387"}),"\uff1a\u5728 ShuffleNet \u6a21\u578b\u4e2d\uff0c\u96d6\u7136\u8f03\u5927\u7684\u7d44\u6578\uff08\u5982 g=4 \u6216 g=8\uff09\u901a\u5e38\u80fd\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\uff0c\u4f46\u5728\u7576\u524d\u5be6\u73fe\u4e2d\u5b83\u5011\u7684\u6548\u7387\u8f03\u4f4e\u3002\u7d93\u9a57\u8868\u660e\uff0cg=3 \u5728\u6e96\u78ba\u6027\u548c\u5be6\u969b\u63a8\u7406\u6642\u9593\u4e4b\u9593\u63d0\u4f9b\u4e86\u9069\u7576\u7684\u5e73\u8861\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u7406\u8ad6\u8207\u5be6\u969b\u8868\u73fe\u5dee\u7570"}),"\uff1a\u5be6\u969b\u52a0\u901f\u8207\u7406\u8ad6\u8907\u96dc\u5ea6\u4e4b\u9593\u6709\u986f\u8457\u5dee\u7570\u3002\u7406\u8ad6\u4e0a\u6bcf\u964d\u4f4e 4 \u500d\u7684\u8907\u96dc\u5ea6\uff0c\u5be6\u969b\u5be6\u73fe\u901a\u5e38\u6703\u5e36\u4f86\u7d04 2.6 \u500d\u7684\u52a0\u901f\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u8207 AlexNet \u7684\u6bd4\u8f03"}),"\uff1a\u5118\u7ba1\u7406\u8ad6\u52a0\u901f\u6bd4\u70ba 18 \u500d\uff0cShuffleNet 0.5\xd7 \u6a21\u578b\u5728\u8207 AlexNet \u76f8\u7576\u7684\u5206\u985e\u7cbe\u5ea6\u4e0b\uff0c\u5be6\u73fe\u4e86\u7d04 13 \u500d\u7684\u5be6\u969b\u52a0\u901f\u6bd4\u3002\u9019\u986f\u793a ShuffleNet \u76f8\u5c0d\u65bc\u50b3\u7d71\u7684 AlexNet \u53ca\u5176\u4ed6\u820a\u6709\u6a21\u578b\u6216\u52a0\u901f\u65b9\u6cd5\u5177\u6709\u986f\u8457\u7684\u901f\u5ea6\u512a\u52e2\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,a.jsx)(e.p,{children:"\u8a31\u591a\u5c08\u6ce8\u65bc\u79fb\u52d5\u8a2d\u5099\u7684\u8f15\u91cf\u6a21\u578b\uff0c\u5728\u786c\u9ad4\u4e0a\u7684\u5be6\u969b\u63a8\u7406\u6642\u9593\u548c\u9810\u671f\u6027\u80fd\u5e38\u5b58\u5728\u975e\u5e38\u5927\u7684\u5dee\u8ddd\u3002"}),"\n",(0,a.jsx)(e.p,{children:"ShuffleNet \u901a\u904e\u5f15\u5165\u5206\u7d44\u5377\u7a4d\u548c\u901a\u9053\u6d17\u724c\u64cd\u4f5c\uff0c\u6709\u6548\u5730\u6e1b\u5c11\u4e86\u8a08\u7b97\u91cf\uff0c\u4e26\u5728\u4fdd\u6301\u9ad8\u7cbe\u5ea6\u7684\u540c\u6642\uff0c\u70ba\u904b\u7b97\u80fd\u529b\u975e\u5e38\u6709\u9650\u7684\u79fb\u52d5\u8a2d\u5099\u8a2d\u8a08\u4e86\u4e00\u500b\u9ad8\u6548\u7684\u795e\u7d93\u7db2\u8def\u3002\u9019\u7a2e\u8a2d\u8a08\u601d\u8def\u503c\u5f97\u6211\u5011\u6df1\u5165\u601d\u8003\uff0c\u6216\u8a31\u6211\u5011\u4e5f\u53ef\u4ee5\u5f9e\u9019\u500b\u89d2\u5ea6\u51fa\u767c\uff0c\u8a2d\u8a08\u51fa\u66f4\u52a0\u9ad8\u6548\u7684\u795e\u7d93\u7db2\u8def\u6a21\u578b\u3002"})]})}function x(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(m,{...s})}):m(s)}},51753:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img1-f39f9320a0986aa8041285b5b52fb2c1.jpg"},60254:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img2-3d237b1435f85380c8d678d5c9bceaca.jpg"},80411:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img3-08bfc4664a2329a70e0afa87b1678985.jpg"},75528:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img4-57ad8a592e67736f8b1f9f5623d4d0ef.jpg"},19493:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img5-5bf19ab2da0ecec0fe9753a5c4d7833a.jpg"},62266:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img6-179f8d76692672534a74bfc029d37156.jpg"},14199:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img7-0393ebc39c226f4094a41cec6d14a7bf.jpg"},19044:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img8-3bf4ca71ad347de0fd1d7cbd892855e1.jpg"},28453:(s,e,n)=>{n.d(e,{R:()=>c,x:()=>t});var a=n(96540);const l={},i=a.createContext(l);function c(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:c(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);