"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4651],{64363:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(74848),l=n(28453);const i={},c="[20.01] Scaling Laws",r={id:"scaling_laws/index",title:"[20.01] Scaling Laws",description:"\u6a21\u578b\u7684\u7e2e\u653e\u5f8b",source:"@site/papers/2001-scaling_laws/index.md",sourceDirName:"2001-scaling_laws",slug:"/scaling_laws/",permalink:"/en/papers/scaling_laws/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[19.12] UNet++",permalink:"/en/papers/unetpp/"},next:{title:"[20.04] Longformer",permalink:"/en/papers/longformer/"}},t={},h=[{value:"\u6a21\u578b\u7684\u7e2e\u653e\u5f8b",id:"\u6a21\u578b\u7684\u7e2e\u653e\u5f8b",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u8a13\u7df4\u904e\u7a0b",id:"\u8a13\u7df4\u904e\u7a0b",level:3},{value:"\u6578\u64da\u96c6",id:"\u6578\u64da\u96c6",level:3},{value:"\u8b8a\u5316\u56e0\u7d20",id:"\u8b8a\u5316\u56e0\u7d20",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u898f\u6a21\u5927\u65bc\u4e00\u5207",id:"\u898f\u6a21\u5927\u65bc\u4e00\u5207",level:3},{value:"\u51aa\u5b9a\u5f8b",id:"\u51aa\u5b9a\u5f8b",level:3},{value:"\u904e\u64ec\u5408\u7684\u666e\u904d\u6027",id:"\u904e\u64ec\u5408\u7684\u666e\u904d\u6027",level:3},{value:"\u6e2c\u8a66\u8868\u73fe\u8207\u4e0b\u6e38\u8868\u73fe",id:"\u6e2c\u8a66\u8868\u73fe\u8207\u4e0b\u6e38\u8868\u73fe",level:3},{value:"\u6a23\u672c\u6548\u7387",id:"\u6a23\u672c\u6548\u7387",level:3},{value:"\u6536\u6582\u662f\u4e00\u4ef6\u4f4e\u6548\u7684\u4e8b\u60c5",id:"\u6536\u6582\u662f\u4e00\u4ef6\u4f4e\u6548\u7684\u4e8b\u60c5",level:3},{value:"\u6700\u4f73\u6279\u91cf\u5927\u5c0f",id:"\u6700\u4f73\u6279\u91cf\u5927\u5c0f",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function m(s){const e={a:"a",admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"2001-scaling-laws",children:"[20.01] Scaling Laws"}),"\n",(0,a.jsx)(e.h2,{id:"\u6a21\u578b\u7684\u7e2e\u653e\u5f8b",children:"\u6a21\u578b\u7684\u7e2e\u653e\u5f8b"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://arxiv.org/abs/2001.08361",children:(0,a.jsx)(e.strong,{children:"Scaling Laws for Neural Language Models"})})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.p,{children:"OpenAI \u5728 Transformer \u89e3\u78bc\u5668\u4e0a\u8d70\u5f97\u6108\u4f86\u6108\u9060\u4e86\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,a.jsx)(e.p,{children:"\u5f9e\u524d\u5e7e\u7bc7\u6587\u7ae0\u4e2d\uff0c\u60f3\u5fc5\u4f60\u4e5f\u770b\u51fa OpenAI \u7684\u91ce\u5fc3\u4e86\uff1a\u4ed6\u5011\u60f3\u5efa\u7acb\u4e00\u500b\u300c\u8d85\u7d1a\u5927\u300d\u7684\u8a9e\u8a00\u6a21\u578b\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u65bc\u662f\u5c31\u6709\u4e86\u9019\u7bc7\u7814\u7a76\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u5230\u5e95\u8a72\u600e\u9ebc\u628a\u6a21\u578b\u505a\u5927\uff1f"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u500b\u554f\u984c\uff0c\u5c31\u662f\u672c\u8ad6\u6587\u60f3\u89e3\u6c7a\u7684\u6838\u5fc3\u6311\u6230\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,a.jsx)(e.p,{children:"\u672c\u6587\u4e2d\uff0c\u4f7f\u7528\u4e86\u4ee5\u4e0b\u8d85\u53c3\u6578\u4f86\u53c3\u6578\u5316 Transformer \u67b6\u69cb\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"\u4e2d\u9593\u524d\u994b\u5c64\u7684\u7dad\u5ea6"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"\u6ce8\u610f\u529b\u8f38\u51fa\u7684\u7dad\u5ea6"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"\u6bcf\u5c64\u7684\u6ce8\u610f\u529b\u982d\u6578"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u5c64\u6578"}),"\uff1aTransformer \u7684\u5c64\u6578"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Token \u6578\u91cf"}),"\uff1a\u4e0a\u4e0b\u6587\u9577\u5ea6\uff0c\u901a\u5e38\u8a2d\u5b9a\u70ba 1024"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u8a13\u7df4\u904e\u7a0b",children:"\u8a13\u7df4\u904e\u7a0b"}),"\n",(0,a.jsxs)(e.p,{children:["\u9664\u975e\u7279\u5225\u8a3b\u660e\uff0c\u5426\u5247\u4f7f\u7528 Adam \u512a\u5316\u5668\u9032\u884c\u8a13\u7df4\uff0c\u6bcf\u6b21\u8a13\u7df4\u9032\u884c ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"2.5"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mn,{children:"5"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2.5\\times10^{5}"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2.5"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"5"})})})]})})})})})]})]})]})]})," \u6b65\uff0c\u6279\u6b21\u5927\u5c0f\u70ba 512 \u500b\u5e8f\u5217\uff0c\u6bcf\u500b\u5e8f\u5217\u5305\u542b 1024 \u500b\u6a19\u8a18\u3002\u7531\u65bc\u8a18\u61b6\u9ad4\u9650\u5236\uff0c\u8d85\u904e 10 \u5104\u53c3\u6578\u7684\u6a21\u578b\u4f7f\u7528 Adafactor \u9032\u884c\u8a13\u7df4\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u4f5c\u8005\u8a66\u9a57\u4e86\u5404\u7a2e\u5b78\u7fd2\u7387\u548c\u5b78\u7fd2\u7387\u8abf\u5ea6\u65b9\u6cd5\uff0c\u767c\u73fe\u6536\u6582\u6642\u7684\u7d50\u679c\u57fa\u672c\u4e0d\u53d7\u5b78\u7fd2\u7387\u8abf\u5ea6\u7684\u5f71\u97ff\u3002\u9664\u975e\u7279\u5225\u8aaa\u660e\uff0c\u6240\u6709\u8a13\u7df4\u5747\u4f7f\u7528 3000 \u6b65\u7684\u7dda\u6027\u589e\u6eab\u5f8c\u9010\u6b65\u8870\u6e1b\u81f3\u96f6\u7684\u5b78\u7fd2\u7387\u8abf\u5ea6\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6578\u64da\u96c6",children:"\u6578\u64da\u96c6"}),"\n",(0,a.jsxs)(e.p,{children:["\u6a21\u578b\u8a13\u7df4\u5728\u300c",(0,a.jsx)(e.strong,{children:"\u64f4\u5c55\u7248\u7684 WebText \u6578\u64da\u96c6"}),"\u300d\u4e0a\u3002"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u539f\u59cb WebText \u6578\u64da\u96c6\u4f86\u81ea\u65bc Reddit \u7684\u5916\u90e8\u93c8\u63a5\uff0c\u9019\u4e9b\u93c8\u63a5\u5728 2017 \u5e74 12 \u6708\u524d\u7372\u5f97\u81f3\u5c11 3 \u500b\u5176\u4ed6\u8b80\u8005\u8a8d\u540c\u3002"}),"\n",(0,a.jsx)(e.li,{children:"WebText2 \u4e2d\uff0c\u52a0\u5165\u4e86 2018 \u5e74 1 \u6708\u81f3 10 \u6708\u671f\u9593\u7684 Reddit \u5916\u90e8\u93c8\u63a5\uff0c\u9019\u4e9b\u93c8\u63a5\u4e5f\u9700\u8981\u81f3\u5c11 3 \u500b\u5176\u4ed6\u8b80\u8005\u8a8d\u540c\u3002"}),"\n",(0,a.jsxs)(e.li,{children:["\u4f7f\u7528 Newspaper3k Python \u5eab\u63d0\u53d6\u93c8\u63a5\u6587\u672c\uff0c\u6700\u7d42\u6578\u64da\u96c6\u5305\u542b 2030 \u842c\u500b\u6587\u6a94\uff0c\u7e3d\u8a08 96GB \u6587\u672c\u548c ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"1.62"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mn,{children:"10"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"1.62\\times10^{10}"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1.62"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"10"})})})]})})})})})]})]})]})]})," \u8a5e\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:["\u61c9\u7528\u4e86\u53ef\u9006\u7684\u5b57\u7bc0\u5c0d\u7de8\u78bc\uff08byte-pair encoding\uff09\u4f86\u9032\u884c\u6a19\u8a18\u5316\uff0c\u6700\u7d42\u5f97\u5230 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"2.29"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mn,{children:"10"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2.29\\times10^{10}"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2.29"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"10"})})})]})})})})})]})]})]})]})," \u500b\u6a19\u8a18\uff0c\u4e26\u4fdd\u7559\u4e86 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"6.6"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mn,{children:"8"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"6.6\\times10^{8}"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"6.6"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"8"})})})]})})})})})]})]})]})]})," \u500b\u6a19\u8a18\u4f5c\u70ba\u6e2c\u8a66\u96c6\u3002"]}),"\n",(0,a.jsx)(e.li,{children:"\u5728 Books Corpus\u3001Common Crawl\u3001\u82f1\u8a9e\u7dad\u57fa\u767e\u79d1\u548c\u5176\u4ed6\u516c\u5171\u53ef\u7528\u7684\u7db2\u7d61\u66f8\u7c4d\u6a23\u672c\u4e0a\u9032\u884c\u6e2c\u8a66\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u8b8a\u5316\u56e0\u7d20",children:"\u8b8a\u5316\u56e0\u7d20"}),"\n",(0,a.jsx)(e.p,{children:"\u70ba\u4e86\u5168\u9762\u7814\u7a76\u8a9e\u8a00\u6a21\u578b\u7684\u7e2e\u653e\u7279\u6027\uff0c\u672c\u8ad6\u6587\u5728\u4ee5\u4e0b\u65b9\u9762\u9032\u884c\u4e86\u5ee3\u6cdb\u7684\u6a21\u578b\u8a13\u7df4\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u6a21\u578b\u5927\u5c0f"}),"\uff1a\u5f9e 768 \u5230 15 \u5104\u975e\u5d4c\u5165\u53c3\u6578\u7684\u6a21\u578b"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u6578\u64da\u96c6\u5927\u5c0f"}),"\uff1a\u5f9e 2200 \u842c\u5230 230 \u5104\u6a19\u8a18\u7684\u6578\u64da\u96c6"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u6a21\u578b\u5f62\u72c0"}),"\uff1a\u5305\u62ec\u6df1\u5ea6\u3001\u5bec\u5ea6\u3001\u6ce8\u610f\u529b\u982d\u6578\u548c\u524d\u994b\u5c64\u7dad\u5ea6"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u4e0a\u4e0b\u6587\u9577\u5ea6"}),"\uff1a\u5927\u591a\u6578\u8a13\u7df4\u4f7f\u7528 1024 \u9577\u5ea6\u7684\u4e0a\u4e0b\u6587\uff0c\u4f46\u6211\u5011\u4e5f\u8a66\u9a57\u4e86\u66f4\u77ed\u7684\u4e0a\u4e0b\u6587"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u6279\u6b21\u5927\u5c0f"}),"\uff1a\u5927\u591a\u6578\u8a13\u7df4\u4f7f\u7528 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mn,{children:"19"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^{19}"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"19"})})})]})})})})})]})]})})]})," \u7684\u6279\u6b21\u5927\u5c0f\uff0c\u4f46\u6211\u5011\u4e5f\u8b8a\u5316\u6279\u6b21\u5927\u5c0f\u4f86\u6e2c\u91cf\u95dc\u9375\u6279\u6b21\u5927\u5c0f"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u4e0a\u8ff0\u7684\u5be6\u9a57\u8a2d\u8a08\u65e8\u5728\u7cfb\u7d71\u5730\u7814\u7a76\u6a21\u578b\u5728\u4e0d\u540c\u689d\u4ef6\u4e0b\u7684\u6027\u80fd\u8868\u73fe\uff0c\u4e26\u5f97\u51fa\u76f8\u95dc\u7684\u7e2e\u653e\u898f\u5f8b\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,a.jsx)(e.h3,{id:"\u898f\u6a21\u5927\u65bc\u4e00\u5207",children:"\u898f\u6a21\u5927\u65bc\u4e00\u5207"}),"\n",(0,a.jsx)(e.p,{children:"\u6a21\u578b\u7684\u6027\u80fd\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u6c7a\u65bc\u898f\u6a21\uff0c\u800c\u8f03\u5f31\u5730\u53d6\u6c7a\u65bc\u6a21\u578b\u5f62\u72c0\uff0c\u6a21\u578b\u6027\u80fd\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u6c7a\u65bc\u898f\u6a21\uff0c\u5b83\u7531\u4e09\u500b\u56e0\u7d20\u7d44\u6210\uff1a"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"N: \u6a21\u578b\u53c3\u6578\u7684\u6578\u91cf"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"D: \u6578\u64da\u96c6\u5927\u5c0f"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"C: \u4f7f\u7528\u7684\u8a08\u7b97\u91cf"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u5be6\u9a57\u6307\u51fa\uff1a\u5728\u5408\u7406\u7684\u7bc4\u570d\u5167\uff0c\u6548\u80fd\u5c0d\u5176\u4ed6\u67b6\u69cb\u8d85\u53c3\u6578\uff08\u4f8b\u5982\u6df1\u5ea6\u8207\u5bec\u5ea6\uff09\u7684\u4f9d\u8cf4\u6027\u975e\u5e38\u5f31\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u51aa\u5b9a\u5f8b",children:"\u51aa\u5b9a\u5f8b"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"img1",src:n(80326).A+"",width:"1696",height:"544"})}),"\n",(0,a.jsx)(e.p,{children:"\u7576\u4e0d\u53d7\u5176\u4ed6\u5169\u500b\u6bd4\u4f8b\u56e0\u5b50\u9650\u5236\u6642\uff0c\u8868\u73fe\u8207\u4e09\u500b\u6bd4\u4f8b\u56e0\u5b50 N\u3001D\u3001C \u4e2d\u7684\u6bcf\u4e00\u500b\u90fd\u5b58\u5728\u51aa\u5f8b\u95dc\u4fc2\uff0c\u8da8\u52e2\u8de8\u8d8a\u300c\u516d\u500b\u300d\u6578\u91cf\u7d1a\u4ee5\u4e0a\uff0c\u5982\u4e0a\u5716\u3002"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u5de6\u5716"}),"\uff1a\u8a08\u7b97\u91cf\u6108\u5927\uff0c\u6a21\u578b\u6548\u80fd\u6108\u597d\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u4e2d\u5716"}),"\uff1a\u6578\u64da\u96c6\u6108\u5927\uff0c\u6a21\u578b\u6548\u80fd\u6108\u597d\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"\u53f3\u5716"}),"\uff1a\u6a21\u578b\u53c3\u6578\u6108\u591a\uff0c\u6a21\u578b\u6548\u80fd\u6108\u597d\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.admonition,{type:"tip",children:[(0,a.jsx)(e.p,{children:"\u4f60\u53ef\u80fd\u6703\u89ba\u5f97\u597d\u50cf\u5728\u8aaa\u5ee2\u8a71\uff1f"}),(0,a.jsx)(e.p,{children:"\u4e26\u4e0d\u662f\u3002\u5728\u904e\u53bb\u7684\u67b6\u69cb\u4e2d\uff0c\u4f8b\u5982 CNN \u6216 LSTM\uff0c\u9019\u4e9b\u95dc\u4fc2\u4e26\u4e0d\u7e3d\u662f\u6210\u7acb\u3002\u8981\u4e0d\u5c31\u662f\u6548\u80fd\u98fd\u548c\uff0c\u8981\u4e0d\u5c31\u662f\u904e\u64ec\u5408\u3002\u9019\u7a2e\u6a6b\u8de8\u516d\u500b\u6578\u91cf\u7d1a\u7684\u95dc\u4fc2\uff0c\u7684\u78ba\u662f\u4e00\u500b\u5f88\u5927\u7684\u7a81\u7834\u3002"})]}),"\n",(0,a.jsx)(e.h3,{id:"\u904e\u64ec\u5408\u7684\u666e\u904d\u6027",children:"\u904e\u64ec\u5408\u7684\u666e\u904d\u6027"}),"\n",(0,a.jsxs)(e.p,{children:["\u5be6\u9a57\u6307\u51fa\uff1a\u53ea\u8981\u6211\u5011\u540c\u6642\u64f4\u5927 N \u548c D\uff0c\u6548\u80fd\u5c31\u53ef\u4ee5\u9810\u898b\u5730\u63d0\u9ad8\uff0c\u4f46\u5982\u679c N \u6216 D \u4fdd\u6301\u56fa\u5b9a\u800c\u53e6\u4e00\u500b\u589e\u52a0\uff0c\u5247\u9032\u5165\u6536\u76ca\u905e\u6e1b\u72c0\u614b\u3002\u6548\u80fd\u640d\u5931\u53ef\u9810\u6e2c\u5730\u53d6\u6c7a\u65bc\u6bd4\u7387 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsxs)(e.mfrac,{children:[(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"N"}),(0,a.jsx)(e.mn,{children:"0.74"})]}),(0,a.jsx)(e.mi,{children:"D"})]})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"N^{0.74}\\over D"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.3629em",verticalAlign:"-0.345em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"1.0179em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"D"})})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsxs)(e.span,{className:"mord mtight",children:[(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.931em",marginRight:"0.0714em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"0.74"})})})]})})})})})]})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})})]}),"\uff0c\u9019\u610f\u5473\u8457\u6bcf\u6b21\u6211\u5011\u5c07\u6a21\u578b\u5927\u5c0f\u589e\u52a0 8 \u500d\uff0c\u6211\u5011\u53ea\u9700\u5c07\u8cc7\u6599\u589e\u52a0\u7d04 5 \u500d\u5373\u53ef\u907f\u514d\u640d\u5931\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u6e2c\u8a66\u8868\u73fe\u8207\u4e0b\u6e38\u8868\u73fe",children:"\u6e2c\u8a66\u8868\u73fe\u8207\u4e0b\u6e38\u8868\u73fe"}),"\n",(0,a.jsx)(e.p,{children:"\u5be6\u9a57\u6307\u51fa\uff1a\u7576\u6211\u5011\u5728\u5206\u4f48\u8207\u8a13\u7df4\u4e0d\u540c\u7684\u6587\u672c\u4e0a\u8a55\u4f30\u6a21\u578b\u6642\uff0c\u7d50\u679c\u8207\u8a13\u7df4\u9a57\u8b49\u96c6\u4e0a\u7684\u7d50\u679c\u5bc6\u5207\u76f8\u95dc\uff0c\u640d\u5931\u7684\u504f\u79fb\u91cf\u5927\u81f4\u6046\u5b9a\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u63db\u53e5\u8a71\u8aaa\uff0c\u8f49\u79fb\u5230\u4e0d\u540c\u7684\u5206\u4f48\u6703\u7522\u751f\u6046\u5b9a\u7684\u61f2\u7f70\uff0c\u4f46\u5728\u5176\u4ed6\u65b9\u9762\u6703\u6839\u64da\u6e2c\u8a66\u96c6\u7684\u8868\u73fe\u5927\u81f4\u63d0\u9ad8\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6a23\u672c\u6548\u7387",children:"\u6a23\u672c\u6548\u7387"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"img2",src:n(38097).A+"",width:"2809",height:"2030"})}),"\n",(0,a.jsx)(e.p,{children:"\u5927\u578b\u6a21\u578b\u6bd4\u5c0f\u578b\u6a21\u578b\u7684\u6a23\u672c\u6548\u7387\u66f4\u9ad8\uff0c\u53ef\u4ee5\u900f\u904e\u66f4\u5c11\u7684\u6700\u4f73\u5316\u6b65\u9a5f(\u4e0a\u5716\uff0c\u7b2c\u4e00\u5f35\u5716\u8868)\u548c\u4f7f\u7528\u66f4\u5c11\u7684\u6578\u64da\u9ede(\u4e0a\u5716\uff0c\u7b2c\u4e8c\u5f35\u5716\u8868)\u9054\u5230\u76f8\u540c\u7684\u6548\u80fd\u6c34\u6e96\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6536\u6582\u662f\u4e00\u4ef6\u4f4e\u6548\u7684\u4e8b\u60c5",children:"\u6536\u6582\u662f\u4e00\u4ef6\u4f4e\u6548\u7684\u4e8b\u60c5"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"img3",src:n(59572).A+"",width:"1224",height:"560"})}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u4e0a\u5716\u986f\u793a\uff0c\u589e\u52a0\u6a21\u578b\u5c3a\u5bf8\u662f\u4e00\u500b\u66f4\u6709\u6548\u7684\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f\u8a13\u7df4\u5c0f\u6a21\u578b\u76f4\u5230\u5b8c\u5168\u6536\u6582\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u7c21\u55ae\u4f86\u8aaa\uff0c\u5982\u679c\u6211\u5011\u6709\u56fa\u5b9a\u7684\u8a08\u7b97\u8cc7\u6e90\uff0c\u6700\u597d\u8a13\u7df4\u975e\u5e38\u5927\u7684\u6a21\u578b\u4e26\u5728\u5b83\u5011\u5b8c\u5168\u6536\u6582\u4e4b\u524d\u505c\u6b62\uff0c\u9019\u6a23\u53ef\u4ee5\u5728\u56fa\u5b9a\u7684\u8a08\u7b97\u9810\u7b97\u5167\u7372\u5f97\u6700\u4f73\u6027\u80fd\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u8a13\u7df4\u5c0f\u6a21\u578b\u76f4\u5230\u5b83\u5011\u5b8c\u5168\u6536\u6582\u53cd\u800c\u6548\u7387\u66f4\u4f4e\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u96a8\u8457\u8a08\u7b97\u8cc7\u6e90\u7684\u589e\u52a0\uff0c\u6240\u9700\u7684\u8a13\u7df4\u6578\u64da\u91cf\u589e\u52a0\u5f97\u5f88\u6162\uff0c\u56e0\u6b64\u6211\u5011\u4e0d\u9700\u8981\u5927\u91cf\u589e\u52a0\u6578\u64da\u4f86\u5339\u914d\u589e\u52a0\u7684\u8a08\u7b97\u8cc7\u6e90\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6700\u4f73\u6279\u91cf\u5927\u5c0f",children:"\u6700\u4f73\u6279\u91cf\u5927\u5c0f"}),"\n",(0,a.jsx)(e.p,{children:"\u8a13\u7df4\u8a9e\u8a00\u6a21\u578b\u7684\u6700\u4f73\u6279\u6b21\u5927\u5c0f\u4e26\u4e0d\u662f\u4e00\u500b\u56fa\u5b9a\u7684\u6578\u503c\uff0c\u800c\u662f\u8207\u640d\u5931\u51fd\u6578\u6709\u95dc\uff0c\u53ef\u4ee5\u901a\u904e\u6e2c\u91cf\u68af\u5ea6\u566a\u8072\u5c3a\u5ea6\u4f86\u78ba\u5b9a\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u672c\u8ad6\u6587\u4e2d\uff0c\u5b9a\u7fa9\u7684\u6700\u5927\u6a21\u578b\u70ba 15 \u5104\uff081.5B\uff09\uff0c\u5728\u8a13\u7df4\u6548\u679c\u6700\u597d\u7684\u6642\u5019\uff0c\u6700\u4f73\u7684\u6279\u6b21\u5927\u5c0f\u5927\u7d04\u662f 100 \u842c\u5230 200 \u842c\u500b Tokens\u3002\u9019\u6a23\u7684\u6279\u6b21\u5927\u5c0f\u6709\u52a9\u65bc\u5728\u8a13\u7df4\u904e\u7a0b\u4e2d\u9054\u5230\u6700\u4f73\u6027\u80fd\u548c\u6548\u679c\u3002"}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.p,{children:"\u9019\u908a\u63d0\u5230\u7684 100 \u842c\u5230 200 \u842c\u6307\u7684\u662f Tokens \u6578\u91cf\uff0c\u800c\u4e0d\u662f Batch size \u7684\u6578\u91cf\u3002\u5982\u679c\u6a21\u578b\u7684\u4e0a\u4e0b\u6587\u9577\u5ea6\u662f 1024 \u7684\u8a71\uff0c\u90a3\u9ebc\u5c0d\u61c9\u7684 Batch size \u5927\u7d04\u662f 1000 \u5230 2000\uff0c\u5c31\u80fd\u9054\u5230\u6700\u4f73\u6548\u679c\u3002"})}),"\n",(0,a.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u7bc7\u8ad6\u6587\u4e2d\u505a\u4e86\u5927\u91cf\u7684\u5be6\u9a57\uff0c\u4e26\u5c0d\u8a9e\u8a00\u6a21\u578b\u7684\u8a13\u7df4\u65b9\u5f0f\u63d0\u51fa\u4e86\u7e3d\u7d50\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u9019\u4e9b\u7d50\u8ad6\u5728\u6211\u5011\u773c\u88e1\u770b\u5230\u7684\u90fd\u662f\u767d\u82b1\u82b1\u7684\u9214\u7968\uff0c\u6211\u5011\u5fc3\u61f7\u611f\u6fc0\u5730\u63a5\u53d7\u9019\u4e9b\u5be6\u9a57\u7d50\u679c\u3002"})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(m,{...s})}):m(s)}},80326:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img1-b5423c96cce73969bc9fe431fd8565a7.jpg"},38097:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img2-62b3001dd1209df06fd9a28bdd9c3c27.jpg"},59572:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/img3-4b5347886e8f82ed827e5e8a79a0126e.jpg"},28453:(s,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var a=n(96540);const l={},i=a.createContext(l);function c(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:c(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);