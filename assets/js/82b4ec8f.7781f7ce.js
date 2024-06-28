"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4953],{88698:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(74848),i=n(28453);const l={},t="[17.04] MobileNet-V1",r={id:"mobilenet-v1/index",title:"[17.04] MobileNet-V1",description:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u767c\u63da\u8005",source:"@site/papers/1704-mobilenet-v1/index.md",sourceDirName:"1704-mobilenet-v1",slug:"/mobilenet-v1/",permalink:"/papers/mobilenet-v1/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[16.12] FPN",permalink:"/papers/fpn/"},next:{title:"[17.06] Transformer",permalink:"/papers/transformer/"}},m={},c=[{value:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u767c\u63da\u8005",id:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u767c\u63da\u8005",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d",id:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d",level:3},{value:"\u7db2\u8def\u67b6\u69cb",id:"\u7db2\u8def\u67b6\u69cb",level:2},{value:"\u8a13\u7df4\u6280\u5de7",id:"\u8a13\u7df4\u6280\u5de7",level:2},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u6548\u80fd",id:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u6548\u80fd",level:3},{value:"\u8981\u6df1\u5ea6\u9084\u662f\u8981\u5bec\u5ea6\uff1f",id:"\u8981\u6df1\u5ea6\u9084\u662f\u8981\u5bec\u5ea6",level:3},{value:"\u548c\u5176\u4ed6\u6a21\u578b\u6bd4\u8f03",id:"\u548c\u5176\u4ed6\u6a21\u578b\u6bd4\u8f03",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function h(s){const e={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"1704-mobilenet-v1",children:"[17.04] MobileNet-V1"}),"\n",(0,a.jsx)(e.h2,{id:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u767c\u63da\u8005",children:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u767c\u63da\u8005"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://arxiv.org/abs/1704.04861",children:(0,a.jsx)(e.strong,{children:"MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications"})})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u662f\u4e00\u7a2e\u5377\u7a4d\u795e\u7d93\u7db2\u7d61\u7684\u7d50\u69cb\uff0c\u5b83\u5c07\u6a19\u6e96\u5377\u7a4d\u5206\u89e3\u70ba\u5169\u500b\u7368\u7acb\u7684\u5c64\uff1a\u6df1\u5ea6\u5377\u7a4d\u548c\u9010\u9ede\u5377\u7a4d\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u7a2e\u7d50\u69cb\u53ef\u4ee5\u6e1b\u5c11\u6a21\u578b\u7684\u53c3\u6578\u6578\u91cf\u548c\u8a08\u7b97\u91cf\uff0c\u5f9e\u800c\u4f7f\u5f97\u6a21\u578b\u66f4\u52a0\u8f15\u91cf\u5316\uff0c\u9019\u5c0d\u65bc\u79fb\u52d5\u8a2d\u5099\u7b49\u8cc7\u6e90\u53d7\u9650\u7684\u5834\u666f\u975e\u5e38\u6709\u7528\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u96d6\u7136\u9019\u7bc7\u8ad6\u6587\u901a\u7bc7\u5728\u8b1b\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\uff0c\u4f46\u5be6\u969b\u4e0a\u9019\u500b\u7d50\u69cb\u7684\u5275\u59cb\u8005\u537b\u662f\u53e6\u6709\u5176\u4eba\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://arxiv.org/abs/1403.1687",children:(0,a.jsx)(e.strong,{children:"Rigid-motion scattering for image classification"})})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"MobileNets \u7684\u4f5c\u8005\u4e5f\u63d0\u5230\uff0c\u4ed6\u5011\u7684\u4e3b\u8981\u8ca2\u737b\u5728\u65bc\u5c07\u300c\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u300d\u9019\u500b\u7d50\u69cb\uff0c\u7cfb\u7d71\u6027\u7684\u61c9\u7528\u5230\u4e86\u5377\u7a4d\u795e\u7d93\u7db2\u7d61\u4e2d\uff0c\u4e26\u4e14\u5728 ImageNet \u4e0a\u53d6\u5f97\u4e86\u4e0d\u932f\u7684\u6548\u679c\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u4e5f\u5c31\u662f\u73fe\u5728\u8d6b\u8d6b\u6709\u540d\u7684\uff1a ",(0,a.jsx)(e.strong,{children:"MobileNet-V1"}),"\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u9019\u5e7e\u5e74\u7684\u767c\u5c55\u4e2d\uff0c\u4eba\u5011\u5c0d\u65bc\u5efa\u69cb\u5c0f\u578b\u4e14\u9ad8\u6548\u7684\u795e\u7d93\u7db2\u8def\u6108\u4f86\u6108\u611f\u8208\u8da3\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4f46\u662f\uff0c\u8a31\u591a\u95dc\u65bc\u5c0f\u578b\u7db2\u5ea6\u7684\u8ad6\u6587\u300c\u53ea\u95dc\u6ce8\u5927\u5c0f\u800c\u4e0d\u8003\u616e\u6548\u7387\u300d\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u986f\u7136\u5730\uff0c\u53c8\u5c0f\u53c8\u5feb\u7684\u7db2\u8def\u67b6\u69cb\uff0c\u624d\u662f\u6211\u5011\u771f\u6b63\u9700\u8981\u7684\u3002"}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.p,{children:["\u96d6\u7136\u5728\u8ad6\u6587\u4e2d\u6c92\u6709\u660e\u78ba\u63d0\u5230\uff0c\u4f46\u6211\u5011\u731c\u6e2c\u9019\u53e5\u8a71\u6307\u7684\u662f ",(0,a.jsx)(e.a,{href:"https://arxiv.org/abs/1602.07360",children:(0,a.jsx)(e.strong,{children:"SqueezeNet"})}),"\u3002"]})}),"\n",(0,a.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,a.jsx)(e.h3,{id:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d",children:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Depthwise Separable Convolution",src:n(25663).A+"",width:"1064",height:"1080"})}),"\n",(0,a.jsx)(e.p,{children:"\u50b3\u7d71\u5377\u7a4d\u5c64\u5c07\u8f38\u5165\u7684\u7279\u5fb5\u5716\u901a\u904e\u4e00\u500b\u591a\u901a\u9053\u7684\u5377\u7a4d\u6838\u904e\u6ffe\u4e26\u7d50\u5408\uff0c\u751f\u6210\u65b0\u7684\u7279\u5fb5\u5716\u3002\u9019\u500b\u904e\u7a0b\u5728\u6bcf\u500b\u8f38\u51fa\u901a\u9053\u4e0a\u90fd\u6703\u8003\u616e\u6240\u6709\u8f38\u5165\u901a\u9053\u7684\u4fe1\u606f\uff0c\u8a08\u7b97\u6210\u672c\u5f88\u9ad8\u3002\u800c\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u5247\u5c07\u6b64\u904e\u7a0b\u5206\u89e3\u70ba\u5169\u500b\u968e\u6bb5\uff0c\u5148\u9032\u884c\u6df1\u5ea6\u5377\u7a4d\uff0c\u5373\u6bcf\u500b\u8f38\u5165\u901a\u9053\u7368\u7acb\u61c9\u7528\u4e00\u500b\u6ffe\u6ce2\u5668\uff0c\u53ea\u8655\u7406\u8f38\u5165\u8cc7\u6599\u7684\u4e00\u500b\u901a\u9053\uff0c\u7136\u5f8c\u900f\u904e\u9010\u9ede\u5377\u7a4d\u5c07\u9019\u4e9b\u8f38\u51fa\u901a\u9053\u7684\u7d50\u679c\u9032\u884c\u7d44\u5408\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5177\u9ad4\u4f86\u8aaa\uff0c\u6df1\u5ea6\u5377\u7a4d\u4e0d\u6703\u6539\u8b8a\u8f38\u5165\u7279\u5fb5\u5716\u7684\u901a\u9053\u6578\uff0c\u53ea\u5c0d\u6bcf\u500b\u901a\u9053\u9032\u884c\u7a7a\u9593\u4e0a\u7684\u904e\u6ffe\u64cd\u4f5c\u3002\u6bcf\u500b\u901a\u9053\u4f7f\u7528\u4e00\u500b\u7368\u7acb\u7684\u5377\u7a4d\u6838\uff0c\u9019\u610f\u5473\u8457\u5982\u679c\u8f38\u5165\u7279\u5fb5\u5716\u6709 M \u500b\u901a\u9053\uff0c\u90a3\u9ebc\u5c31\u6709 M \u500b\u6df1\u5ea6\u5377\u7a4d\u6838\u3002\u9010\u9ede\u5377\u7a4d\u5247\u662f\u4f7f\u7528 1\xd71 \u7684\u5377\u7a4d\u6838\u4f86\u5c0d\u9019\u4e9b\u904e\u6ffe\u5f8c\u7684\u901a\u9053\u9032\u884c\u7dda\u6027\u7d44\u5408\uff0c\u7522\u751f\u6700\u7d42\u7684\u8f38\u51fa\u901a\u9053\u3002\u9019\u7a2e\u5206\u89e3\u65b9\u5f0f\u7684\u4e3b\u8981\u512a\u52e2\u662f\u986f\u8457\u964d\u4f4e\u4e86\u8a08\u7b97\u91cf\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u5c0d\u65bc\u6bcf\u500b\u6df1\u5ea6\u5377\u7a4d\uff0c\u5176\u8a08\u7b97\u6210\u672c\u70ba",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"K"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"K"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"M"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"F"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"F"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"DK \\times DK \\times M \\times DF \\times DF"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"DK"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"DK"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})]})]}),"\uff0c\u5176\u4e2d",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"K"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"DK"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"DK"})]})})]})," \u662f\u5377\u7a4d\u6838\u7684\u7a7a\u9593\u5c3a\u5bf8\uff0c",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"F"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"DF"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})})]})," \u662f\u8f38\u5165\u7279\u5fb5\u5716\u7684\u5c3a\u5bf8\uff0c",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"M"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"M"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"})]})})]})," \u662f\u8f38\u5165\u901a\u9053\u6578\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5c0d\u65bc\u9010\u9ede\u5377\u7a4d\uff0c\u8a08\u7b97\u6210\u672c\u5247\u70ba",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"M"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"N"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"F"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"F"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"M \\times N \\times DF \\times DF"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})]})]}),"\uff0c\u5176\u4e2d",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"N"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," \u662f\u8f38\u51fa\u901a\u9053\u6578\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5c07\u9019\u5169\u500b\u6b65\u9a5f\u7684\u6210\u672c\u76f8\u52a0\uff0c\u4ecd\u7136\u9060\u4f4e\u65bc\u50b3\u7d71\u5377\u7a4d\u7684",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"K"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"K"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"M"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"N"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"F"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"D"}),(0,a.jsx)(e.mi,{children:"F"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"DK \\times DK \\times M \\times N \\times DF \\times DF"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"DK"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"DK"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})]})]}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u4f7f\u7528\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u53ef\u4ee5\u5728\u4fdd\u6301\u76f8\u5c0d\u8f03\u9ad8\u6e96\u78ba\u5ea6\u7684\u540c\u6642\uff0c\u986f\u8457\u6e1b\u5c11\u6a21\u578b\u7684\u8a08\u7b97\u9700\u6c42\u548c\u53c3\u6578\u91cf\uff0c\u975e\u5e38\u9069\u5408\u9700\u8981\u5728\u8a08\u7b97\u8cc7\u6e90\u6709\u9650\u7684\u8a2d\u5099\u4e0a\u904b\u884c\u7684\u61c9\u7528\u3002"}),"\n",(0,a.jsxs)(e.admonition,{type:"info",children:[(0,a.jsx)(e.p,{children:"\u6211\u5011\u53ef\u4ee5\u9806\u624b\u7528 PyTorch \u5be6\u73fe\u4e00\u4e0b\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\uff1a"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\nclass DepthwiseSeparableConv(nn.Module):\n\n    def __init__(self, n_in, n_out, kernel_size, padding=0, stride=1):\n        super(DepthwiseSeparableConv, self).__init__()\n        self.depthwise = nn.Conv2d(n_in, n_in, kernel_size=kernel_size, padding=padding, stride=stride, groups=n_in)\n        self.pointwise = nn.Conv2d(n_in, n_out, kernel_size=1)\n\n    def forward(self, x):\n        out = self.depthwise(x)\n        out = self.pointwise(out)\n        return out\n"})}),(0,a.jsx)(e.p,{children:"\u5728\u9019\u7bc7\u8ad6\u6587\u7684\u5be6\u4f5c\u4e2d\uff0c\u6709\u63d0\u5230\u6bcf\u500b\u5377\u7a4d\u5c64\u5f8c\u9762\u90fd\u63a5\u4e86 Batch Normalization \u548c ReLU \u6fc0\u6d3b\u51fd\u6578\uff0c\u5982\u4e0b\u5716\uff1a"}),(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Depthwise Separable Convolution with BN and ReLU",src:n(41328).A+"",width:"972",height:"504"})}),(0,a.jsx)(e.p,{children:"\u6240\u4ee5\u5be6\u4f5c\u65b9\u5f0f\u53ef\u4ee5\u6539\u6210\u9019\u6a23\uff1a"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\nclass DepthwiseSeparableConv(nn.Module):\n\n    def __init__(self, n_in, n_out, kernel_size, padding=0, stride=1):\n        super(DepthwiseSeparableConv, self).__init__()\n        self.depthwise = nn.Conv2d(n_in, n_in, kernel_size=kernel_size, padding=padding, stride=stride, groups=n_in)\n        self.pointwise = nn.Conv2d(n_in, n_out, kernel_size=1)\n        self.depth_bn = nn.BatchNorm2d(n_in)\n        self.depth_relu = nn.ReLU()\n        self.point_bn = nn.BatchNorm2d(n_out)\n        self.point_relu = nn.ReLU()\n\n    def forward(self, x):\n        x = self.depthwise(x)\n        x = self.depth_bn(x)\n        x = self.depth_relu(x)\n        x = self.pointwise(x)\n        x = self.point_bn(x)\n        x = self.point_relu(x)\n        return x\n"})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u7db2\u8def\u67b6\u69cb",children:"\u7db2\u8def\u67b6\u69cb"}),"\n",(0,a.jsxs)(e.p,{children:["\u6839\u64da\u8ad6\u6587\uff0cMobileNet-V1 \u7684\u7db2\u8def\u67b6\u69cb\uff0c\u300c",(0,a.jsx)(e.strong,{children:"\u53ea\u6709\u7b2c\u4e00\u5c64\u7684 3x3 \u662f\u4e00\u822c\u5377\u7a4d\u6838"}),"\u300d\u4e4b\u5916\uff0c\u5176\u4ed6\u90fd\u662f\u7531\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u5806\u758a\u800c\u6210\u3002"]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"The MobileNet structure is built on depthwise separable convolutions as mentioned in the previous section except for the first layer which is a full convolution."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u6574\u9ad4\u7d50\u69cb\u5982\u4e0b\u8868\uff1a"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"MobileNet-V1 Architecture",src:n(42253).A+"",width:"932",height:"1080"})}),"\n",(0,a.jsx)(e.h2,{id:"\u8a13\u7df4\u6280\u5de7",children:"\u8a13\u7df4\u6280\u5de7"}),"\n",(0,a.jsx)(e.p,{children:"MobileNet-V1 \u7684\u4f5c\u8005\u5728\u8a13\u7df4\u904e\u7a0b\u4e2d\u4f7f\u7528\u4e86\u4e00\u4e9b\u6280\u5de7\u4f86\u63d0\u9ad8\u6a21\u578b\u7684\u6027\u80fd\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u4f7f\u7528\u8f03\u5c11\u7684\u6b63\u5247\u5316\u548c\u8cc7\u6599\u589e\u5f37\uff0c\u56e0\u70ba\u5c0f\u6a21\u578b\u7684\u904e\u64ec\u5408\u554f\u984c\u8f03\u5c11\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u5728\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u6ffe\u6ce2\u5668\u4e0a\uff0c\u653e\u7f6e\u5f88\u5c11\u6216\u4e0d\u653e\u7f6e\u4efb\u4f55\u6b0a\u91cd\u8870\u6e1b\uff08L2 \u6b63\u5247\u5316\uff09\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u4f7f\u7528 RMSprop \u4f5c\u70ba\u512a\u5316\u5668\uff0c\u4e26\u4f7f\u7528\u8f03\u5c0f\u7684\u5b78\u7fd2\u7387\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u63a1\u7528\u985e\u4f3c Inception-V3 \u7684\u975e\u540c\u6b65\u68af\u5ea6\u4e0b\u964d\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.p,{children:"\u975e\u540c\u6b65\u68af\u5ea6\u4e0b\u964d\uff08Asynchronous Gradient Descent\uff09\u662f\u4e00\u7a2e\u7528\u65bc\u6df1\u5ea6\u5b78\u7fd2\u8a13\u7df4\u4e2d\u7684\u512a\u5316\u6280\u8853\uff0c\u7279\u5225\u9069\u7528\u65bc\u5206\u5e03\u5f0f\u8a08\u7b97\u74b0\u5883\u3002\u5728\u50b3\u7d71\u7684\u540c\u6b65\u68af\u5ea6\u4e0b\u964d\u4e2d\uff0c\u6240\u6709\u8a08\u7b97\u7bc0\u9ede\uff08\u6216\u5de5\u4f5c\u5668\uff09\u5fc5\u9808\u5b8c\u6210\u5b83\u5011\u7684\u68af\u5ea6\u8a08\u7b97\u5f8c\uff0c\u624d\u80fd\u9032\u884c\u6a21\u578b\u66f4\u65b0\u3002\u9019\u610f\u5473\u8457\u6574\u500b\u8a13\u7df4\u904e\u7a0b\u7684\u901f\u5ea6\u53d7\u5230\u6700\u6162\u7bc0\u9ede\u7684\u9650\u5236\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u975e\u540c\u6b65\u68af\u5ea6\u4e0b\u964d\u5141\u8a31\u6bcf\u500b\u8a08\u7b97\u7bc0\u9ede\u7368\u7acb\u5730\u8a08\u7b97\u68af\u5ea6\u4e26\u66f4\u65b0\u5171\u4eab\u6a21\u578b\uff0c\u800c\u4e0d\u9700\u8981\u7b49\u5f85\u5176\u4ed6\u7bc0\u9ede\u7684\u8a08\u7b97\u7d50\u679c\u3002"})}),"\n",(0,a.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u6574\u9ad4\u7684\u5be6\u9a57\u8a2d\u8a08\u4e2d\uff0c\u4e0a\u8ff0\u63d0\u5230\u7684\u7db2\u8def\u67b6\u69cb\u505a\u70ba Baseline\uff0c\u4f5c\u8005\u53e6\u5916\u5f15\u5165\u5169\u500b\u5e38\u6578\u7684\u8d85\u53c3\u6578\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsxs)(e.strong,{children:["Width Multiplier ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"\u03b1"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\alpha"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"})]})})]})]}),"\uff1a\u7528\u4f86\u63a7\u5236\u7db2\u8def\u7684\u5bec\u5ea6\uff0c\u5373\u6bcf\u4e00\u5c64\u7684\u8f38\u51fa\u901a\u9053\u6578\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsxs)(e.strong,{children:["Resolution Multiplier ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"\u03c1"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\rho"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"\u03c1"})]})})]})]}),"\uff1a\u7528\u4f86\u63a7\u5236\u8f38\u5165\u5716\u50cf\u7684\u89e3\u6790\u5ea6\u3002"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u6548\u80fd",children:"\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u7684\u6548\u80fd"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Depthwise Separable Convolution Performance",src:n(60806).A+"",width:"988",height:"292"})}),"\n",(0,a.jsx)(e.p,{children:"\u8207\u5168\u5377\u7a4d\u76f8\u6bd4\uff0c\u4f7f\u7528\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u5728 ImageNet \u4e0a\u50c5\u964d\u4f4e\u4e86 1% \u7684\u6e96\u78ba\u5ea6\uff0c\u4e26\u4e14\u5927\u5927\u7bc0\u7701\u4e86\u4e58\u6cd5\u548c\u53c3\u6578\u6578\u91cf\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u8981\u6df1\u5ea6\u9084\u662f\u8981\u5bec\u5ea6",children:"\u8981\u6df1\u5ea6\u9084\u662f\u8981\u5bec\u5ea6\uff1f"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Depth vs Width",src:n(99331).A+"",width:"972",height:"284"})}),"\n",(0,a.jsx)(e.p,{children:"\u964d\u4f4e\u6a21\u578b\u5bec\u5ea6\uff0c\u6b63\u78ba\u7387\u964d\u4f4e 2.2%\uff1b\u964d\u4f4e\u6a21\u578b\u6df1\u5ea6\uff0c\u6b63\u78ba\u7387\u964d\u4f4e 5.3%\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u8868\u793a\u7576\u7b97\u529b\u53d7\u9650\u6642\uff0c\u8acb\u9078\u64c7\u964d\u4f4e\u6a21\u578b\u5bec\u5ea6\u800c\u4e0d\u662f\u6df1\u5ea6\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u548c\u5176\u4ed6\u6a21\u578b\u6bd4\u8f03",children:"\u548c\u5176\u4ed6\u6a21\u578b\u6bd4\u8f03"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Comparison with Other Models",src:n(4852).A+"",width:"1012",height:"684"})}),"\n",(0,a.jsx)(e.p,{children:"\u5c07\u5b8c\u6574\u7684 MobileNet \u8207\u539f\u59cb\u7684 GoogleNet \u548c VGG16 \u9032\u884c\u4e86\u6bd4\u8f03\u3002"}),"\n",(0,a.jsx)(e.p,{children:"MobileNet \u5e7e\u4e4e\u8207 VGG16 \u4e00\u6a23\u6e96\u78ba\uff0c\u540c\u6642\u9ad4\u7a4d\u5c0f 32 \u500d\uff0c\u8a08\u7b97\u5f37\u5ea6\u964d\u4f4e 27 \u500d\u3002"}),"\n",(0,a.jsx)(e.p,{children:"MobileNet \u6bd4 GoogleNet \u66f4\u6e96\u78ba\uff0c\u540c\u6642\u9ad4\u7a4d\u66f4\u5c0f\uff0c\u8a08\u7b97\u91cf\u6e1b\u5c11 2.5 \u500d\u4ee5\u4e0a\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u5927\u7d04\u76f8\u540c\u7684\u5927\u5c0f\u548c\u6e1b\u5c11 22 \u500d\u7684\u8a08\u7b97\u91cf\u7684\u60c5\u6cc1\u4e0b\uff0cMobileNet \u4e5f\u6bd4 Squeezenet \u7684\u6548\u679c\u63d0\u5347\u4e86\u7d04 4%\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,a.jsx)(e.p,{children:"MobileNet-V1 \u7684\u63a8\u51fa\uff0c\u5c07\u6df1\u5ea6\u53ef\u5206\u96e2\u5377\u7a4d\u6280\u8853\u6b63\u5f0f\u5730\u5e36\u5165\u4e86\u5927\u773e\u7684\u8996\u91ce\u3002\u9019\u7a2e\u7d50\u69cb\u5728\u4fdd\u6301\u76f8\u5c0d\u9ad8\u6e96\u78ba\u5ea6\u7684\u540c\u6642\uff0c\u5927\u5e45\u964d\u4f4e\u4e86\u6a21\u578b\u7684\u5927\u5c0f\u548c\u8a08\u7b97\u9700\u6c42\uff0c\u5f9e\u800c\u89e3\u6c7a\u4e86\u5728\u8cc7\u6e90\u53d7\u9650\u7684\u74b0\u5883\u4e0a\u904b\u884c\u8907\u96dc\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u7684\u6311\u6230\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u7bc7\u8ad6\u6587\u4e0d\u50c5\u63d0\u4f9b\u4e86\u4e00\u7a2e\u5728\u8cc7\u6e90\u6709\u9650\u74b0\u5883\u4e2d\u90e8\u7f72\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u7684\u6709\u6548\u65b9\u6848\uff0c\u800c\u4e14\u5176\u8a2d\u8a08\u7406\u5ff5\u555f\u767c\u4e86\u5f8c\u7e8c\u591a\u7a2e\u8f15\u91cf\u7d1a\u6df1\u5ea6\u5b78\u7fd2\u67b6\u69cb\u7684\u958b\u767c\uff0c\u9032\u4e00\u6b65\u63a8\u52d5\u4e86\u6df1\u5ea6\u5b78\u7fd2\u67b6\u69cb\u5728\u884c\u52d5\u88dd\u7f6e\u548c\u908a\u7de3\u8a08\u7b97\u4e2d\u7684\u61c9\u7528\u3002"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:"MobileNet \u5728\u5f8c\u7e8c\u4e5f\u63a8\u51fa V2\u3001V3 \u548c V4 \u7248\u672c\uff0c\u9032\u4e00\u6b65\u6539\u9032\u4e86\u6a21\u578b\u7684\u6027\u80fd\u548c\u6548\u7387\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u4e00\u7cfb\u5217\u7684\u7814\u7a76\u6210\u679c\u5728\u5be6\u969b\u61c9\u7528\u4e2d\u53d6\u5f97\u4e86\u5ee3\u6cdb\u7684\u6210\u529f\uff0c\u6210\u70ba\u4e86\u8f15\u91cf\u7d1a\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u7684\u7d93\u5178\u4e4b\u4f5c\u3002"})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},25663:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img1-941e9b2943c5e476b4e1e16350316c45.jpg"},41328:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img2-c077021c8181d71db5ff38e4f4be81c9.jpg"},42253:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img3-95022b238fac2fc64881e419a592720d.jpg"},60806:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img4-64ab7c428a236ad9a7cf007c1c6db99e.jpg"},99331:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img5-239af6ce9fe53c42ab903303ead6be88.jpg"},4852:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img6-9856e8ff02664221debb20bcbf03a27d.jpg"},28453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>r});var a=n(96540);const i={},l=a.createContext(i);function t(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);