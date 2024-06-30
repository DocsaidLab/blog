"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1808],{79753:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>t,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(74848),l=n(28453);const a={},t="[17.07] NASNet",r={id:"nasnet/index",title:"[17.07] NASNet",description:"\u641c\u7d22\u7db2\u8def\u67b6\u69cb",source:"@site/papers/1707-nasnet/index.md",sourceDirName:"1707-nasnet",slug:"/nasnet/",permalink:"/en/papers/nasnet/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[17.06] Transformer",permalink:"/en/papers/transformer/"},next:{title:"[17.07] ShuffleNet",permalink:"/en/papers/shufflenet/"}},h={},c=[{value:"\u641c\u7d22\u7db2\u8def\u67b6\u69cb",id:"\u641c\u7d22\u7db2\u8def\u67b6\u69cb",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u53ef\u9077\u79fb\u67b6\u69cb",id:"\u53ef\u9077\u79fb\u67b6\u69cb",level:3},{value:"\u57fa\u790e\u7d50\u69cb",id:"\u57fa\u790e\u7d50\u69cb",level:3},{value:"\u641c\u7d22\u904e\u7a0b",id:"\u641c\u7d22\u904e\u7a0b",level:3},{value:"DropPath \u6a21\u7d44",id:"droppath-\u6a21\u7d44",level:3},{value:"\u641c\u7d22\u5be6\u9a57\u7d50\u679c",id:"\u641c\u7d22\u5be6\u9a57\u7d50\u679c",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u5728 CIFAR-10 \u4e0a\u7684\u7d50\u679c",id:"\u5728-cifar-10-\u4e0a\u7684\u7d50\u679c",level:3},{value:"\u9077\u79fb\u67b6\u69cb\u5230 ImageNet",id:"\u9077\u79fb\u67b6\u69cb\u5230-imagenet",level:3},{value:"\u5728\u884c\u52d5\u88dd\u7f6e\u4e0a\u7684\u8a55\u6bd4",id:"\u5728\u884c\u52d5\u88dd\u7f6e\u4e0a\u7684\u8a55\u6bd4",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function d(s){const e={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1707-nasnet",children:"[17.07] NASNet"}),"\n",(0,i.jsx)(e.h2,{id:"\u641c\u7d22\u7db2\u8def\u67b6\u69cb",children:"\u641c\u7d22\u7db2\u8def\u67b6\u69cb"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1707.07012",children:(0,i.jsx)(e.strong,{children:"Learning Transferable Architectures for Scalable Image Recognition"})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u7576\u4f60\u62ff\u5230\u4e00\u6839\u939a\u5b50\uff0c\u4f60\u770b\u4ec0\u9ebc\u90fd\u50cf\u662f\u91d8\u5b50\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\uff0a"}),"\n",(0,i.jsx)(e.p,{children:"\u5f9e\u6df1\u5ea6\u5b78\u7fd2\u795e\u7d93\u7db2\u8def\u958b\u59cb\u6d41\u884c\u4e4b\u5f8c\uff0c\u5982\u4f55\u69cb\u5efa\u4e00\u500b\u6709\u6548\u7684\u7db2\u8def\u67b6\u69cb\u5c31\u6210\u70ba\u4e86\u4e00\u500b\u91cd\u8981\u7684\u554f\u984c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u7814\u7a76\u4eba\u54e1\u63d0\u51fa\u4e86\u8a31\u591a\u81ea\u52d5\u641c\u7d22\u7db2\u8def\u67b6\u69cb\uff08Neural Architecture Search, NAS\uff09\u7684\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u800c\u5176\u4e2d\u7684\u4f7c\u4f7c\u8005\u5c31\u662f Google \u5718\u968a\uff0c\u4f60\u53ef\u4ee5\u5728\u5404\u500b\u5730\u65b9\u770b\u5230\u4ed6\u5011\u62ff\u8457 NAS \u6280\u8853\u5728\u5404\u7a2e\u5730\u65b9\u641c\u7d22\u3002"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"Neural Architecture Search\uff08NAS\uff09\u662f\u4e00\u7a2e\u81ea\u52d5\u5316\u6280\u8853\uff0c\u5c08\u9580\u7528\u65bc\u8a2d\u8a08\u548c\u512a\u5316\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u67b6\u69cb\u3002\u5b83\u65e8\u5728\u514b\u670d\u624b\u52d5\u8a2d\u8a08\u795e\u7d93\u7db2\u7d61\u67b6\u69cb\u7684\u6311\u6230\u548c\u5c40\u9650\u6027\uff0c\u7279\u5225\u662f\u5728\u8655\u7406\u8907\u96dc\u6578\u64da\u6216\u7279\u5b9a\u61c9\u7528\u5834\u666f\u6642\u3002\u901a\u904e\u81ea\u52d5\u641c\u7d22\u6d41\u7a0b\uff0cNAS \u53ef\u4ee5\u8b58\u5225\u51fa\u6700\u9ad8\u6548\u7684\u7db2\u7d61\u7d50\u69cb\uff0c\u5f9e\u800c\u63d0\u5347\u6a21\u578b\u6027\u80fd\uff0c\u6e1b\u5c11\u8a2d\u8a08\u904e\u7a0b\u6240\u9700\u7684\u6642\u9593\u8207\u5c08\u696d\u77e5\u8b58\u3002"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,i.jsx)(e.p,{children:"\u5f9e AlexNet \u6d41\u884c\u8d77\u4f86\uff0c\u5230\u73fe\u5728\u7684\u904e\u53bb\u5e7e\u5e74\u9593\uff0c\u5404\u7a2e\u4e0d\u540c\u7db2\u8def\u67b6\u69cb\u84ec\u52c3\u767c\u5c55\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u800c\uff0c\u9019\u4e9b\u7db2\u8def\u67b6\u69cb\u7684\u8a2d\u8a08\u901a\u5e38\u662f\u57fa\u65bc\u7d93\u9a57\u548c\u76f4\u89ba\uff0c\u800c\u975e\u56b4\u683c\u7684\u7406\u8ad6\u57fa\u790e\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u5c0e\u81f4\u4e86\u8a31\u591a\u554f\u984c\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4eba\u5011\u4e0d\u77e5\u9053\u54ea\u4e9b\u7db2\u8def\u67b6\u69cb\u662f\u6700\u597d\u7684\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u8a2d\u8a08\u7db2\u8def\u67b6\u69cb\u9700\u8981\u5927\u91cf\u7684\u5c08\u696d\u77e5\u8b58\u548c\u7d93\u9a57\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u7db2\u8def\u67b6\u69cb\u7684\u8a2d\u8a08\u904e\u7a0b\u901a\u5e38\u662f\u8017\u6642\u4e14\u8017\u8cbb\u8cc7\u6e90\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7406\u8ad6\u57fa\u790e\u7684\u90e8\u5206\u5728\u9019\u88e1\u5148\u6487\u958b\u4e0d\u8ac7\uff0c\u672c\u7bc7\u8ad6\u6587\u8981\u63d0\u51fa\u4e00\u500b\u81ea\u52d5\u641c\u7d22\u7db2\u8def\u67b6\u69cb\u7684\u65b9\u6cd5\uff0c\u800c\u9019\u500b\u65b9\u6cd5\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u89e3\u6c7a\u4e0a\u8ff0\u7684\u300c\u90e8\u5206\u300d\u554f\u984c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(e.h3,{id:"\u53ef\u9077\u79fb\u67b6\u69cb",children:"\u53ef\u9077\u79fb\u67b6\u69cb"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasnet transferable architecture",src:n(39012).A+"",width:"930",height:"966"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u73fe\u968e\u6bb5\u4e2d\uff0c\u6240\u6709\u8ad6\u6587\u7684\u76ee\u6a19\u90fd\u662f\u4e00\u81f4\u7684\uff1a\u5c31\u662f\u5728 ImageNet \u8cc7\u6599\u96c6\u4e0a\u9054\u5230\u6700\u4f73\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u662f ImageNet \u592a\u5927\u4e86\uff0c\u5982\u679c\u76f4\u63a5\u5728 ImageNet \u4e0a\u641c\u7d22\u9069\u5408\u7684\u7db2\u8def\u67b6\u69cb\uff0c\u6703\u6d88\u8017\u975e\u5e38\u53ef\u89c0\u7684\u8cc7\u6e90\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u5728\u672c\u7bc7\u8ad6\u6587\u4e2d\u63d0\u51fa\u5148\u5728 CIFAR-10 \u8cc7\u6599\u96c6\u4e0a\u641c\u7d22\u9069\u5408\u7684\u7db2\u8def\u67b6\u69cb\uff0c\u7136\u5f8c\u518d\u5c07\u9019\u500b\u7db2\u8def\u67b6\u69cb\u9077\u79fb\u5230 ImageNet \u4e0a\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u57fa\u790e\u7d50\u69cb",children:"\u57fa\u790e\u7d50\u69cb"}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u63d0\u51fa\u4e86\u5169\u500b\u53ef\u4ee5\u7528\u4f86\u69cb\u5efa\u7db2\u8def\u67b6\u69cb\u7684\u57fa\u790e\u7d50\u69cb\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Normal Cell"}),"\uff1a\u4e3b\u8981\u529f\u80fd\u662f\u7dad\u6301\u8f38\u5165\u7279\u5fb5\u5716\u7684\u7dad\u5ea6\uff08\u5373\u9ad8\u5ea6\u548c\u5bec\u5ea6\uff09\u3002\u9019\u6a23\u7684\u8a2d\u8a08\u78ba\u4fdd\u4e86\u7279\u5fb5\u63d0\u53d6\u904e\u7a0b\u4e2d\u7a7a\u9593\u4fe1\u606f\u7684\u5b8c\u6574\u6027\uff0c\u6709\u52a9\u65bc\u6df1\u5c64\u7db2\u7d61\u4e2d\u4fe1\u606f\u7684\u6709\u6548\u50b3\u905e\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Reduction Cell"}),"\uff1a\u4e3b\u8981\u529f\u80fd\u662f\u6e1b\u5c11\u7279\u5fb5\u5716\u7684\u7a7a\u9593\u7dad\u5ea6\uff0c\u5177\u9ad4\u662f\u5c07\u9ad8\u5ea6\u548c\u5bec\u5ea6\u7e2e\u5c0f\u4e00\u534a\u3002\u9019\u901a\u904e\u5c07\u6b65\u9577\u8a2d\u7f6e\u70ba 2 \u4f86\u5be6\u73fe\uff0c\u6709\u6548\u5730\u964d\u4f4e\u4e86\u8a08\u7b97\u91cf\u4e26\u589e\u52a0\u4e86\u6a21\u578b\u7684\u62bd\u8c61\u80fd\u529b\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u96d6\u7136 Reduction \u548c Normal Cell \u53ef\u4ee5\u6709\u76f8\u540c\u7684\u67b6\u69cb\uff0c\u4f46\u6839\u64da\u7d93\u9a57\uff0c\u5b78\u7fd2\u5169\u7a2e\u7368\u7acb\u7684\u67b6\u69cb\u662f\u6709\u76ca\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u6bcf\u6b21\u6e1b\u5c11\u7a7a\u9593\u7dad\u5ea6\u6642\uff0c\u70ba\u4fdd\u6301\u4fe1\u606f\u5bc6\u5ea6\uff0c\u4f5c\u8005\u901a\u904e\u52a0\u500d\u6ffe\u6ce2\u5668\u7684\u6578\u91cf\u4f86\u88dc\u511f\u4fe1\u606f\u7684\u640d\u5931\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7a2e\u8a2d\u8a08\u9748\u611f\u4f86\u81ea\u65bc Inception \u548c ResNet \u7d50\u69cb\uff0c\u5176\u4e2d\u5c64\u6b21\u7684\u6df1\u5ea6\u548c\u6ffe\u6ce2\u5668\u7684\u6578\u91cf\u6839\u64da\u5177\u9ad4\u7684\u61c9\u7528\u9700\u6c42\u9032\u884c\u8abf\u6574\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u641c\u7d22\u904e\u7a0b",children:"\u641c\u7d22\u904e\u7a0b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasnet search process",src:n(33171).A+"",width:"1940",height:"404"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u641c\u7d22\u7a7a\u9593\u4e2d\uff0c\u6bcf\u500b\u5377\u7a4d\u55ae\u5143\u63a5\u6536\u5169\u500b\u521d\u59cb\u96b1\u85cf\u72c0\u614b ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mi,{children:"i"})]})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"h_i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]})," \u548c ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]})]})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"h_{i-1}"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.9028em",verticalAlign:"-0.2083em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]}),"\uff0c\u9019\u5169\u500b\u72c0\u614b\u4f86\u81ea\u65bc\u524d\u5169\u500b\u8f03\u4f4e\u5c64\u7684\u55ae\u5143\u8f38\u51fa\u6216\u662f\u8f38\u5165\u5716\u50cf\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6574\u500b\u641c\u7d22\u904e\u7a0b\u6703\u900f\u904e RNN \u4f86\u9032\u884c\uff0cRNN \u6703\u9810\u6e2c\u5377\u7a4d\u55ae\u5143\u7684\u7d50\u69cb\uff0c\u4e26\u4e14\u6839\u64da\u9810\u6e2c\u7d50\u679c\u4f86\u751f\u6210\u65b0\u7684\u96b1\u85cf\u72c0\u614b\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"RNN \u7684\u9810\u6e2c\u904e\u7a0b"})}),"\n",(0,i.jsx)(e.p,{children:"RNN \u6703\u905e\u6b78\u5730\u9810\u6e2c\u5377\u7a4d\u55ae\u5143\u7684\u7d50\u69cb\uff0c\u6839\u64da\u4ee5\u4e0b\u6b65\u9a5f\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9078\u64c7\u96b1\u85cf\u72c0\u614b"}),"\uff1a\u5f9e ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mi,{children:"i"})]})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"h_i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]}),"\u3001",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]})]})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"h_{i-1}"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.9028em",verticalAlign:"-0.2083em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]})," \u6216\u524d\u9762\u5340\u584a\u751f\u6210\u7684\u96b1\u85cf\u72c0\u614b\u96c6\u4e2d\u9078\u64c7\u4e00\u500b\u96b1\u85cf\u72c0\u614b\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9078\u64c7\u7b2c\u4e8c\u500b\u96b1\u85cf\u72c0\u614b"}),"\uff1a\u5f9e\u8207\u6b65\u9a5f 1 \u76f8\u540c\u7684\u9078\u9805\u4e2d\u9078\u64c7\u7b2c\u4e8c\u500b\u96b1\u85cf\u72c0\u614b\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9078\u64c7\u64cd\u4f5c"}),"\uff1a\u5c0d\u65bc\u6b65\u9a5f 1 \u9078\u64c7\u7684\u96b1\u85cf\u72c0\u614b\uff0c\u9078\u64c7\u4e00\u500b\u64cd\u4f5c\u9032\u884c\u8655\u7406\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9078\u64c7\u7b2c\u4e8c\u500b\u64cd\u4f5c"}),"\uff1a\u5c0d\u65bc\u6b65\u9a5f 2 \u9078\u64c7\u7684\u96b1\u85cf\u72c0\u614b\uff0c\u540c\u6a23\u9078\u64c7\u4e00\u500b\u64cd\u4f5c\u9032\u884c\u8655\u7406\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5408\u4f75\u8f38\u51fa"}),"\uff1a\u9078\u64c7\u4e00\u7a2e\u65b9\u6cd5\u4f86\u7d50\u5408\u6b65\u9a5f 3 \u548c 4 \u7684\u8f38\u51fa\u4ee5\u7522\u751f\u65b0\u7684\u96b1\u85cf\u72c0\u614b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u9810\u6e2c\u6b65\u9a5f\u7684\u91cd\u8907\u8207\u5340\u584a"})}),"\n",(0,i.jsx)(e.p,{children:"RNN \u5c07\u4e0a\u8ff0 5 \u500b\u9810\u6e2c\u6b65\u9a5f\u91cd\u8907 B \u6b21\uff0c\u5c0d\u61c9\u65bc\u5377\u7a4d\u55ae\u5143\u4e2d\u7684 B \u500b\u5340\u584a\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5be6\u9a57\u4e2d\uff0c\u9078\u64c7 B=5 \u901a\u5e38\u80fd\u63d0\u4f9b\u826f\u597d\u7684\u7d50\u679c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u4e00\u8f2a\u7684\u9810\u6e2c\u90fd\u5c07\u65b0\u5efa\u7acb\u7684\u96b1\u85cf\u72c0\u614b\u6dfb\u52a0\u5230\u73fe\u6709\u96b1\u85cf\u72c0\u614b\u96c6\u5408\u4e2d\uff0c\u4f5c\u70ba\u5f8c\u7e8c\u5340\u584a\u4e2d\u7684\u6f5b\u5728\u8f38\u5165\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u64cd\u4f5c\u9078\u64c7"})}),"\n",(0,i.jsx)(e.p,{children:"RNN \u5f9e\u4ee5\u4e0b\u64cd\u4f5c\u4e2d\u9032\u884c\u9078\u64c7\uff0c\u9019\u4e9b\u64cd\u4f5c\u57fa\u65bc\u5b83\u5011\u5728 CNN \u6587\u737b\u4e2d\u7684\u666e\u53ca\u5ea6\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"identity"}),"\n",(0,i.jsx)(e.li,{children:"1x3 then 3x1 convolution"}),"\n",(0,i.jsx)(e.li,{children:"1x7 then 7x1 convolution"}),"\n",(0,i.jsx)(e.li,{children:"3x3 dilated convolution"}),"\n",(0,i.jsx)(e.li,{children:"3x3 average pooling"}),"\n",(0,i.jsx)(e.li,{children:"3x3 max pooling"}),"\n",(0,i.jsx)(e.li,{children:"5x5 average pooling"}),"\n",(0,i.jsx)(e.li,{children:"5x5 max pooling"}),"\n",(0,i.jsx)(e.li,{children:"7x7 max pooling"}),"\n",(0,i.jsx)(e.li,{children:"1x1 convolution"}),"\n",(0,i.jsx)(e.li,{children:"3x3 convolution"}),"\n",(0,i.jsx)(e.li,{children:"3x3 depthwise separable convolution"}),"\n",(0,i.jsx)(e.li,{children:"5x5 depthwise separable convolution"}),"\n",(0,i.jsx)(e.li,{children:"7x7 depthwise separable convolution"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5408\u4f75\u65b9\u6cd5"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6b65\u9a5f 5 \u4e2d\uff0c RNN \u9078\u64c7\u5408\u4f75\u5169\u500b\u96b1\u85cf\u72c0\u614b\u7684\u65b9\u6cd5\uff0c\u53ef\u80fd\u662f\u5169\u500b\u96b1\u85cf\u72c0\u614b\u4e4b\u9593\u7684\u5143\u7d20\u7d1a\u52a0\u6cd5\u6216\u6cbf\u8457\u904e\u6ffe\u5668\u7dad\u5ea6\u7684\u4e32\u806f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"droppath-\u6a21\u7d44",children:"DropPath \u6a21\u7d44"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u904e\u53bb\u7684\u6587\u737b\u4e2d\uff0cDropPath \u6280\u8853\u53ef\u4ee5\u7528\u4f86\u9632\u6b62\u904e\u64ec\u5408\uff0c\u4e26\u4e14\u53ef\u4ee5\u63d0\u9ad8\u6a21\u578b\u7684\u6cdb\u5316\u80fd\u529b\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/abs/1605.07648",children:(0,i.jsx)(e.strong,{children:"Fractalnet: Ultra-deep neural networks without residuals"})})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u672c\u7bc7\u8ad6\u6587\u4e2d\uff0c\u4f5c\u8005\u5c07 DropPath \u6280\u8853\u61c9\u7528\u5230\u4e86\u641c\u7d22\u904e\u7a0b\u4e2d\uff0c\u767c\u73fe\u6c92\u7528\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u65bc\u662f\u6539\u9032\u4e86 DropPath \u6280\u8853\uff0c\u4e26\u7a31\u4e4b\u70ba ",(0,i.jsx)(e.strong,{children:"ScheduledDropPath"}),"\uff0c\u9019\u500b\u6280\u8853\u6703\u5728\u8a13\u7df4\u904e\u7a0b\u4e2d\u300c\u7dda\u6027\u589e\u52a0\u300d\u4e1f\u68c4\u6a21\u7d44\u7684\u6a5f\u7387\uff0c\u5be6\u9a57\u6548\u679c\u826f\u597d\uff01"]}),"\n",(0,i.jsx)(e.h3,{id:"\u641c\u7d22\u5be6\u9a57\u7d50\u679c",children:"\u641c\u7d22\u5be6\u9a57\u7d50\u679c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasnet search results",src:n(46710).A+"",width:"1304",height:"780"})}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u7d42\u4f5c\u8005\u5728 CIFAR-10 \u8cc7\u6599\u96c6\u4e0a\u641c\u7d22\u5230\u4e86\u4e00\u500b\u6709\u6548\u7684\u7db2\u8def\u67b6\u69cb\uff0c\u5982\u4e0a\u5716\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u5f35\u5716\u770b\u8d77\u4f86\u5f88\u8907\u96dc\uff0c\u4f46\u4ed4\u7d30\u770b\u7684\u8a71\u5176\u5be6\u5f88\u597d\u7406\u89e3\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u7b2c ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]})]})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"h_{i-1}"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.9028em",verticalAlign:"-0.2083em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]})," \u5c64\u8d70\u865b\u7dda\uff1b\u7b2c ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mi,{children:"i"})]})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"h_i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]})," \u5c64\u8d70\u5be6\u7dda\uff0c\u6700\u5f8c\u5169\u8005\u5408\u4f75\uff0c\u5f97\u5230 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"1"})]})]})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"h_{i+1}"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.9028em",verticalAlign:"-0.2083em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,i.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.2083em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u9700\u8981\u964d\u63a1\u6a23\uff0c\uff0c\u5c31\u8d70 ",(0,i.jsx)(e.code,{children:"Reduction Cell"})," \u8def\u5f91\uff0c\u5426\u5247\u8d70 ",(0,i.jsx)(e.code,{children:"Normal Cell"})," \u8def\u5f91\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(e.h3,{id:"\u5728-cifar-10-\u4e0a\u7684\u7d50\u679c",children:"\u5728 CIFAR-10 \u4e0a\u7684\u7d50\u679c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasnet cifar-10 results",src:n(1469).A+"",width:"1224",height:"720"})}),"\n",(0,i.jsx)(e.p,{children:"\u5f9e\u8868\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u5177\u6709\u526a\u5207\u8cc7\u6599\u589e\u5f37\u7684\u5927\u578b NASNet-A \u6a21\u578b\u5be6\u73fe\u4e86 2.40% \u7684\u6700\u5148\u9032\u932f\u8aa4\u7387\uff085 \u6b21\u904b\u884c\u7684\u5e73\u5747\u503c\uff09\uff0c\u7565\u512a\u65bc\u4e4b\u524d\u7684\u6700\u4f73\u6c34\u5e73\u8a18\u9304\u70ba 2.56%\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u63d0\u5230\uff0c\u4ed6\u5011\u6700\u4f73\u55ae\u6b21\u904b\u884c\u932f\u8aa4\u7387\u9054\u5230 2.19%\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u9077\u79fb\u67b6\u69cb\u5230-imagenet",children:"\u9077\u79fb\u67b6\u69cb\u5230 ImageNet"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasnet imagenet results",src:n(50336).A+"",width:"1514",height:"556"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u88e1\u9077\u79fb\u7684\u53ea\u6709\u7db2\u8def\u7d50\u69cb\uff0c\u6a21\u578b\u7684\u90e8\u5206\u662f\u91cd\u65b0\u8a13\u7df4\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5f9e\u4e0a\u9762\u8868\u683c\u8b49\u660e\uff0c\u8207\u540c\u985e\u67b6\u69cb\u76f8\u6bd4\uff0cNASNet \u4ee5\u66f4\u5c11\u7684\u6d6e\u9ede\u904b\u7b97\u548c\u53c3\u6578\u5be6\u73fe\u4e86\u6700\u5148\u9032\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u5927\u7684\u6a21\u578b\u57fa\u65bc\u55ae\u4e00\u975e\u6574\u5408\u9810\u6e2c\u70ba ImageNet \u5be6\u73fe\u4e86\u65b0\u7684\u6700\u5148\u9032\u6027\u80fd (82.7%)\uff0c\u6bd4\u5148\u524d\u767c\u5e03\u7684\u6700\u4f73\u7d50\u679c\uff08DPN-131\uff09\u63d0\u5347\u4e86\u7d04 1.2%\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5728\u884c\u52d5\u88dd\u7f6e\u4e0a\u7684\u8a55\u6bd4",children:"\u5728\u884c\u52d5\u88dd\u7f6e\u4e0a\u7684\u8a55\u6bd4"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"nasnet mobile results",src:n(63951).A+"",width:"1438",height:"370"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4e4b\u524d\u7684\u7814\u7a76\u4e2d\uff0cMobileNet \u548c ShuffleNet \u63d0\u4f9b\u4e86\u6700\u5148\u9032\u7684\u7d50\u679c\uff0c\u4f7f\u7528 ~550M \u4e58\u52a0\u64cd\u4f5c\u5728 224x224 \u5f71\u50cf\u4e0a\u5206\u5225\u7372\u5f97\u4e86 70.6% \u548c 70.9% \u7684\u6e96\u78ba\u7387\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u800c\u7531 NASNet \u6240\u5efa\u69cb\u7684\u67b6\u69cb\uff0c\u5728\u8a08\u7b97\u9700\u6c42\u76f8\u7576\u7684\u524d\u63d0\u4e0b\uff0c\u5be6\u73fe\u4e86\u8d85\u8d8a\u5148\u524d\u6a21\u578b\u7684\u9810\u6e2c\u6027\u80fd\uff0c\u9054\u5230 74.0% \u6e96\u78ba\u7387\u3002"}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:"\u55ae\u7d14\u7528\u904b\u7b97\u91cf\u4f86\u8a55\u4f30\u6a21\u578b\uff0c\u4e26\u4e0d\u4e00\u5b9a\u80fd\u53cd\u6620\u51fa\u771f\u6b63\u7684\u6027\u80fd\uff0c\u8981\u5be6\u969b\u4e0a\u6a5f\u63a8\u8ad6\u624d\u77e5\u9053\u662f\u4e0d\u662f\u771f\u7684\u6709\u6548\u679c\u3002"}),(0,i.jsx)(e.p,{children:"\u8003\u616e\u5230 NASNet \u4e0a\u5b58\u5728\u5927\u91cf\u7684\u8de8\u5206\u652f\u7684\u76f8\u52a0\u548c\u4e32\u806f\u904b\u7b97\uff0c\u9019\u4e9b\u64cd\u4f5c\u6703\u8b93\u591a\u500b\u5206\u652f\u4e92\u76f8\u7b49\u5f85\uff0c\u9032\u800c\u5c0e\u81f4\u6a21\u578b\u7684\u6548\u7387\u4e0b\u964d\u3002"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u672c\u7bc7\u8ad6\u6587\u4e2d\uff0c\u7814\u7a76\u4e86\u4e00\u500b\u76f4\u63a5\u5728\u611f\u8208\u8da3\u7684\u8cc7\u6599\u96c6\u4e0a\u5b78\u7fd2\u6a21\u578b\u67b6\u69cb\u7684\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u904e\u8a2d\u8a08\u80fd\u5920\u89e3\u8026\u67b6\u69cb\u8907\u96dc\u5ea6\u8207\u7db2\u8def\u6df1\u5ea6\u7684\u641c\u5c0b\u7a7a\u9593\uff0c\u5f9e\u5f71\u50cf\u5206\u985e\u4efb\u52d9\u4e2d\u5b78\u7fd2\u5230\u53ef\u64f4\u5c55\u7684\u6372\u7a4d\u55ae\u5143\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u4e00\u65b9\u6cd5\u63d0\u5347\u4e86\u6a21\u578b\u7684\u9069\u61c9\u6027\uff0c\u5141\u8a31\u5176\u4ed6\u6c92\u6709\u8db3\u5920\u7b97\u529b\u7684\u7814\u7a76\u8005\u53ef\u4ee5\u76f4\u63a5\u63a1\u7528\u9019\u4e9b\u7531 NAS \u627e\u51fa\u4f86\u7684\u55ae\u5143\u67b6\u69cb\u3002"}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsx)(e.p,{children:"\u6211\u5011\u597d\u5947\u7684\u662f\uff0c\u5982\u679c\u5728\u8cc7\u6e90\u8db3\u5920\u5f97\u60c5\u6cc1\u4e0b\uff0c\u76f4\u63a5\u91dd\u5c0d ImageNet \u9032\u884c\u67b6\u69cb\u641c\u7d22\uff0c\u6703\u4e0d\u6703\u5f97\u5230\u66f4\u597d\u7684\u7d50\u679c\u5462\uff1f"}),(0,i.jsx)(e.p,{children:"\u6216\u8a31\u7b49\u5230 Google \u5718\u968a\u4e4b\u5f8c\u4f86\u4e86\u8208\u81f4\uff0c\u9019\u500b\u554f\u984c\u5c31\u6703\u6709\u7b54\u6848\u4e86\u3002"})]})]})}function m(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(d,{...s})}):d(s)}},39012:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/img1-a930a37bbd23548fea479e280665b88f.jpg"},33171:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/img2-4c0259e19e4f225def21fca7655045e3.jpg"},46710:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/img3-25c6b681ee26d2485193962fcd9b7ac8.jpg"},1469:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/img4-622f117fc4251904183d00bbd2a05848.jpg"},50336:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/img5-b616c80abb3f5a9a0ea4c80b9b348ebc.jpg"},63951:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/img6-5b9c125f18482cce5818974d738cb5bb.jpg"},28453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>r});var i=n(96540);const l={},a=i.createContext(l);function t(s){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),i.createElement(a.Provider,{value:e},s.children)}}}]);