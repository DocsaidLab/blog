"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2050],{26554:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(74848),r=s(28453);const l={},d="[20.04] Longformer",c={id:"longformer/index",title:"[20.04] Longformer",description:"\u9577\u6ce8\u610f\u529b\u6a5f\u5236",source:"@site/papers/2004-longformer/index.md",sourceDirName:"2004-longformer",slug:"/longformer/",permalink:"/papers/longformer/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"papersSidebar",previous:{title:"[20.01] Scaling Laws",permalink:"/papers/scaling_laws/"},next:{title:"[20.04] Oscar",permalink:"/papers/oscar/"}},a={},o=[{value:"\u9577\u6ce8\u610f\u529b\u6a5f\u5236",id:"\u9577\u6ce8\u610f\u529b\u6a5f\u5236",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u6a21\u578b\u67b6\u69cb",id:"\u6a21\u578b\u67b6\u69cb",level:3},{value:"\u81ea\u56de\u6b78\u5efa\u6a21",id:"\u81ea\u56de\u6b78\u5efa\u6a21",level:3},{value:"\u81ea\u7de8\u78bc\u5efa\u6a21",id:"\u81ea\u7de8\u78bc\u5efa\u6a21",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u81ea\u56de\u6b78\u5be6\u9a57\u7d50\u679c",id:"\u81ea\u56de\u6b78\u5be6\u9a57\u7d50\u679c",level:3},{value:"\u81ea\u7de8\u78bc\u5be6\u9a57\u7d50\u679c",id:"\u81ea\u7de8\u78bc\u5be6\u9a57\u7d50\u679c",level:3},{value:"\u81ea\u56de\u6b78\u6d88\u878d\u5be6\u9a57",id:"\u81ea\u56de\u6b78\u6d88\u878d\u5be6\u9a57",level:3},{value:"\u81ea\u7de8\u78bc\u6d88\u878d\u5be6\u9a57",id:"\u81ea\u7de8\u78bc\u6d88\u878d\u5be6\u9a57",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function t(n){const e={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",del:"del",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"2004-longformer",children:"[20.04] Longformer"}),"\n",(0,i.jsx)(e.h2,{id:"\u9577\u6ce8\u610f\u529b\u6a5f\u5236",children:"\u9577\u6ce8\u610f\u529b\u6a5f\u5236"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://arxiv.org/pdf/2004.05150",children:(0,i.jsx)(e.strong,{children:"Longformer: The Long-Document Transformer"})})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:["Transformer \u7684\u81ea\u6ce8\u610f\u529b\u6a5f\u5236\u7684\u8a08\u7b97\u8907\u96dc\u5ea6\u70ba ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mn,{children:"2"})]}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u7576\u4efb\u4f55\u4e00\u500b\u6f14\u7b97\u6cd5\u7684\u8a08\u7b97\u8907\u96dc\u5ea6\u51fa\u73fe\u9019\u7a2e\u60c5\u6cc1\u6642\uff0c\u90fd\u610f\u5473\u8457\u5176\u4e2d\u6709\u975e\u5e38\u5927\u91cf\u7684\u512a\u5316\u7a7a\u9593\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6069\uff1f\u9019\u500b\u958b\u982d\u662f\u4e0d\u662f\u6709\u9ede\u719f\u6089\uff1f"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u904e\u53bb\u76f8\u95dc\u7814\u7a76",src:s(72891).A+"",width:"996",height:"572"})}),"\n",(0,i.jsx)(e.p,{children:"\u70ba\u4e86\u89e3\u6c7a\u539f\u59cb\u7684 Transformer \u8a08\u7b97\u8907\u96dc\u5ea6\u7684\u554f\u984c\uff0c\u7814\u7a76\u8005\u4e0d\u505c\u5730\u5c0b\u627e\u512a\u5316\u7684\u65b9\u6cd5\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u4e00\u90e8\u5206\u7684\u65b9\u6cd5\u662f\u63a1\u7528 ",(0,i.jsx)(e.a,{href:"/papers/transformer-xl/",children:(0,i.jsx)(e.strong,{children:"Transformer-XL"})})," \u7684\u8a2d\u8a08\u7406\u5ff5\uff0c\u7528\u6ed1\u52d5\u8996\u7a97\u642d\u914d\u984d\u5916\u8a18\u61b6\u5340\u584a\u7684\u65b9\u5f0f\u4f86\u8655\u7406\u9577\u6587\u6a94\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u6ed1\u52d5\u8996\u7a97\u7684\u9019\u7a2e\u8a2d\u8a08\uff0c\u5c0d\u65bc\u96d9\u5411\u7684\u6ce8\u610f\u529b\u6a5f\u5236\u4e0a\u6709\u8457\u5929\u751f\u7684\u8a2d\u8a08\u7f3a\u9677\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u53e6\u5916\u4e00\u7a2e\u6d41\u6d3e\u5247\u662f\u63a1\u7528\u7a00\u758f\u6ce8\u610f\u529b\u6a5f\u5236\uff0c\u4f8b\u5982\uff1a\u6bd4\u9019\u7bc7\u8ad6\u6587\u9084\u8981\u65e9\u4e00\u5e74\u63d0\u51fa\u7684 ",(0,i.jsx)(e.a,{href:"/papers/sparse-transformer/",children:(0,i.jsx)(e.strong,{children:"Sparse Transformer"})}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u800c\u904e\u53bb\u95dc\u65bc\u7a00\u758f\u6ce8\u610f\u529b\u6a5f\u5236\u7684\u7814\u7a76\uff0c\u537b\u6c92\u6709\u63d0\u5230\u57fa\u65bc\u9810\u8a13\u7df4\u6a21\u578b\u7684\u5fae\u8abf\u4ee5\u53ca\u5c0d\u65bc\u66f4\u591a\u4e0b\u6e38\u4efb\u52d9\u7684\u6cdb\u5316\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u7bc7\u8ad6\u6587\u7684\u4f5c\u8005\u7684\u52d5\u6a5f\u5230\u9019\u88e1\u5c31\u5f88\u660e\u78ba\u4e86\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u9577\u4e0a\u4e0b\u6587\u63a1\u7528\u300c\u7a00\u758f\u6ce8\u610f\u529b\u6a5f\u5236\u300d\u662f\u4e00\u500b\u4e0d\u932f\u7684\u89e3\u984c\u65b9\u5411\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4f46\u662f\u6ce8\u610f\u529b\u5716\u7684\u8a2d\u8a08\u5fc5\u9808\u9032\u884c\u512a\u5316\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4e26\u4e14\u61c9\u8a72\u5f15\u5165\u9810\u8a13\u7df4\u7684\u6846\u67b6\u548c\u6e2c\u8a66\u66f4\u591a\u4e0b\u6e38\u4efb\u52d9\u7684\u6cdb\u5316\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,i.jsx)(e.h3,{id:"\u6a21\u578b\u67b6\u69cb",children:"\u6a21\u578b\u67b6\u69cb"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Longformer \u67b6\u69cb",src:s(95916).A+"",width:"1584",height:"338"})}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u7bc7\u8ad6\u6587\u5176\u5be6\u975e\u5e38\u5bb9\u6613\u95b1\u8b80\uff0c\u56e0\u70ba\u770b\u5230\u9019\u5f35\u5716\u5c31\u5dee\u4e0d\u591a\u4e86\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u88e1\u7684\u63cf\u8ff0\u975e\u5e38\u660e\u78ba\uff0c\u4f5c\u8005\u63d0\u51fa\u4e86\u4e09\u7a2e\u7a00\u758f\u67b6\u69cb\uff0c\u7528\u65bc\u6e2c\u8a66\u9577\u6587\u6a94\u7684\u8655\u7406\u80fd\u529b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4e0a\u5716 (a) \u662f\u539f\u59cb\u7684\u6ce8\u610f\u529b\u6a5f\u5236\uff0c\u6bcf\u500b Token \u90fd\u9700\u8981\u95dc\u6ce8\u5230\u6240\u6709\u5176\u4ed6 Token\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4e0a\u5716 (b) \u662f Sliding Window Attention\uff0c\u6bcf\u500b Token \u53ea\u95dc\u6ce8\u5230\u524d\u5f8c\u56fa\u5b9a\u7bc4\u570d\u5167\u7684 Token\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4e0a\u5716 (c) \u662f Dilated Sliding Window Attention\uff0c\u6bcf\u500b Token \u95dc\u6ce8\u5230\u524d\u5f8c\u56fa\u5b9a\u300c\u9593\u9694\u300d\u7684 Token\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u4e0a\u5716 (d) \u662f Global+Sliding Window Attention\uff0c\u9664\u4e86\u6bcf\u500b Token \u53ea\u95dc\u6ce8\u5230\u524d\u5f8c\u56fa\u5b9a\u7bc4\u570d\u5167\u7684 Token \u4e4b\u5916\uff0c\u6709\u300c\u7279\u5b9a\u300d\u5e7e\u500b Token \u6703\u548c\u6240\u6709\u5176\u4ed6\u7684 Token \u300c\u4e92\u76f8\u300d\u95dc\u6ce8\u3002","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f8b\u5982\u5728\u4e0a\u5716\u4e2d\u7684\u300c\u7279\u5b9a\u300d\u5e7e\u500b Token \u5c31\u662f\u7b2c 1,2,6,16 \u500b Token\uff0c\u7576\u7136\u9019\u53ea\u662f\u793a\u610f\u5716\uff0c\u5be6\u969b\u4e0a\u7684\u8a2d\u8a08\u662f\u53ef\u4ee5\u8abf\u6574\u7684\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u56de\u6b78\u5efa\u6a21",children:"\u81ea\u56de\u6b78\u5efa\u6a21"}),"\n",(0,i.jsx)(e.p,{children:"\u9019\u88e1\u4f7f\u7528\u7684\u662f Dilated Sliding Window Attention \u7684\u6ce8\u610f\u529b\u6a5f\u5236\uff0c\u4e5f\u5c31\u662f\u4e0a\u5716 (c) \u7684\u8a2d\u8a08\uff0c\u540c\u6642\u4e5f\u8ddf\u96a8\u904e\u53bb\u7684\u7814\u7a76\uff0c\u5c0d\u65bc\u4e0d\u540c\u5c64\u61c9\u7528\u4e86\u4e0d\u4e00\u6a23\u7684\u9593\u9694\u5927\u5c0f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7279\u5225\u662f\u4f4e\u5c64\u4f7f\u7528\u8f03\u5c0f\u7684\u9593\u9694\uff0c\u9ad8\u5c64\u4f7f\u7528\u8f03\u5927\u7684\u9593\u9694\uff0c\u9019\u6a23\u7684\u8a2d\u8a08\u53ef\u4ee5\u8b93\u6a21\u578b\u5728\u4e0d\u540c\u5c64\u6b21\u4e0a\u6709\u4e0d\u540c\u7684\u611f\u53d7\u91ce\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8a13\u7df4\u7684\u65b9\u9762\u4e5f\u6709\u4e00\u4e9b\u6280\u5de7\uff0c\u9996\u5148\u4e26\u4e0d\u662f\u4e00\u958b\u59cb\u5c31\u76f4\u63a5\u4f7f\u7528\u8d85\u9577\u7684\u4e0a\u4e0b\u6587\uff0c\u800c\u662f\u9010\u6f38\u589e\u52a0\u4e0a\u4e0b\u6587\u7684\u9577\u5ea6\uff0c\u9019\u6a23\u53ef\u4ee5\u8b93\u6a21\u578b\u66f4\u5bb9\u6613\u6536\u6582\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u521d\u59cb\u968e\u6bb5\u5f9e\u8f03\u77ed\u7684\u5e8f\u5217\u9577\u5ea6\u548c\u8996\u7a97\u5927\u5c0f\u958b\u59cb\u3002\u9019\u6709\u52a9\u65bc\u6a21\u578b\u5feb\u901f\u5b78\u7fd2\u6355\u6349\u5c40\u90e8\u7d30\u7bc0\u7684\u80fd\u529b\u3002\u5728\u5f8c\u7e8c\u7684\u6bcf\u500b\u968e\u6bb5\uff0c\u7cfb\u7d71\u5c07\u8996\u7a97\u5927\u5c0f\u548c\u5e8f\u5217\u9577\u5ea6\u52a0\u500d\uff0c\u540c\u6642\u5c07\u5b78\u7fd2\u7387\u6e1b\u534a\u3002\u9019\u7a2e\u8a13\u7df4\u65b9\u6cd5\u4e0d\u50c5\u53ef\u4ee5\u52a0\u901f\u8a13\u7df4\u904e\u7a0b\uff0c\u9084\u53ef\u4ee5\u4f7f\u6a21\u578b\u5728\u9032\u884c\u66f4\u8907\u96dc\u8a08\u7b97\u524d\u6709\u5145\u8db3\u7684\u6e96\u5099\uff0c\u9032\u800c\u8655\u7406\u66f4\u9577\u7684\u5e8f\u5217\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6a21\u578b\u5728\u7e3d\u5171\u4e94\u500b\u968e\u6bb5\u4e2d\u9032\u884c\u8a13\u7df4\u3002\u5728\u9019\u4e94\u500b\u968e\u6bb5\u4e2d\uff0c\u6a21\u578b\u9010\u6f38\u9069\u61c9\u8655\u7406\u8d8a\u4f86\u8d8a\u9577\u7684\u5e8f\u5217\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u5f8c\u4e00\u968e\u6bb5\u5f9e\u5e8f\u5217\u9577\u5ea6 2,048 \u958b\u59cb\uff0c\u589e\u81f3 23,040\u3002\u9019\u6a23\u7684\u9010\u6b65\u589e\u9577\u4f7f\u6a21\u578b\u6709\u80fd\u529b\u5728\u4e0d\u8d85\u51fa\u8a18\u61b6\u9ad4\u9650\u5236\u7684\u524d\u63d0\u4e0b\uff0c\u8655\u7406\u5927\u898f\u6a21\u6578\u64da\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u7de8\u78bc\u5efa\u6a21",children:"\u81ea\u7de8\u78bc\u5efa\u6a21"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4e86\u5c0d\u6bd4\u81ea\u56de\u6b78\u6a21\u578b\u4e4b\u5916\uff0c\u4f5c\u8005\u4e5f\u60f3\u548c\u81ea\u7de8\u78bc\u7684\u6a21\u578b BERT \u9032\u884c\u6bd4\u8f03\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u662f\u8003\u616e\u5230\u8a13\u7df4 BERT \u7684\u6210\u672c\u9ad8\u6602\uff0c\u56e0\u6b64\u4f5c\u8005\u9078\u64c7\u5f9e\u9810\u8a13\u7df4\u597d\u7684 RoBERTa \u6a21\u578b\u958b\u59cb\u9032\u884c MLM \u5fae\u8abf\uff0c\u540c\u6642\u4fee\u6539\u539f\u672c\u6ce8\u610f\u529b\u6a5f\u5236\u6210\u70ba Longformer \u7684\u8a2d\u8a08\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u908a\u4f7f\u7528 Sliding Window Attention \u7684\u6ce8\u610f\u529b\u6a5f\u5236\uff0c\u4e5f\u5c31\u662f\u4e0a\u5716 (b) \u7684\u8a2d\u8a08\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7531\u65bc\u662f\u7a00\u758f\u6ce8\u610f\u529b\u6a5f\u5236\uff0c\u56e0\u6b64\u4e0a\u4e0b\u6587\u7684\u9577\u5ea6\u6bd4\u8d77\u539f\u672c\u7684 RoBERTa \u4f86\u8aaa\uff0c\u53ef\u4ee5\u5f9e 512 \u589e\u52a0\u5230 4,096\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u6709\u4e9b\u7279\u5b9a\u7684\u4efb\u52d9\u9700\u8981 Golbal \u7684\u6ce8\u610f\u529b\u6a5f\u5236\uff0c\u4f8b\u5982\u6587\u672c\u5206\u985e\u7684 [CLS] Token\uff0c\u9084\u6709 QA \u4efb\u52d9\u7684\u6240\u6709 Question Token\u3002\u9019\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u4f5c\u8005\u6703\u4f7f\u7528 Global+Sliding Window Attention \u7684\u8a2d\u8a08\uff0c\u4e5f\u5c31\u662f\u4e0a\u5716 (d) \u7684\u8a2d\u8a08\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u56de\u6b78\u5be6\u9a57\u7d50\u679c",children:"\u81ea\u56de\u6b78\u5be6\u9a57\u7d50\u679c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u81ea\u56de\u6b78\u5be6\u9a57\u7d50\u679c",src:s(67529).A+"",width:"3116",height:"2475"})}),"\n",(0,i.jsx)(e.p,{children:"\u53c3\u8003\u8ad6\u6587\u7684 Table 2\uff0c\u5be6\u9a57\u7d50\u679c\u986f\u793a\uff0c\u5728\u5c0f\u898f\u6a21\u7684\u6a21\u578b\u4e0a\uff0cLongformer \u7684\u8868\u73fe\u5f97\u5230\u4e86\u6700\u512a\u79c0\u7684\u7d50\u679c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53c3\u8003\u8ad6\u6587\u7684 Table 3\uff0c\u53e6\u5916\u5728\u540c\u7b49\u898f\u6a21\u7684\u5927\u6a21\u578b\u4e0a\uff0cLongformer \u7684\u6548\u679c\u548c\u5176\u4ed6 SoTA \u6a21\u578b\u6301\u5e73\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u7de8\u78bc\u5be6\u9a57\u7d50\u679c",children:"\u81ea\u7de8\u78bc\u5be6\u9a57\u7d50\u679c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u81ea\u7de8\u78bc\u5be6\u9a57\u7d50\u679c",src:s(2231).A+"",width:"1224",height:"212"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0a\u8868\u7e3d\u7d50\u4e86\u6240\u6709\u5fae\u8abf\u5be6\u9a57\u7684\u7d50\u679c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u89c0\u5bdf\u5230 Longformer \u59cb\u7d42\u512a\u65bc RoBERTa \u57fa\u6e96\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5c0d\u65bc\u9700\u8981\u9577\u4e0a\u4e0b\u6587\u7684\u4efb\u52d9\uff08\u4f8b\u5982 WikiHop \u548c Hyperpartisan\uff09\uff0c\u5176\u6548\u80fd\u63d0\u5347\u5c24\u5176\u660e\u986f\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5c0d\u65bc TriviaQA \u4f86\u8aaa\uff0c\u6539\u9032\u5e45\u5ea6\u8f03\u5c0f\uff0c\u56e0\u70ba\u672c\u5730\u4e0a\u4e0b\u6587\u901a\u5e38\u8db3\u4ee5\u56de\u7b54\u554f\u984c\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5c31 HotpotQA \u800c\u8a00\uff0c\u652f\u63f4\u4e8b\u5be6\u8f14\u52a9\u76e3\u7763\u4f7f\u6a21\u578b\u53ef\u4ee5\u8f15\u9b06\u627e\u5230\u76f8\u95dc\u4e0a\u4e0b\u6587\uff0c\u7136\u5f8c\u5c08\u6ce8\u65bc\u672c\u5730\u4e0a\u4e0b\u6587\uff0c\u5f9e\u800c\u7372\u5f97\u8f03\u5c0f\u7684\u6536\u76ca\u3002"}),"\n",(0,i.jsx)(e.li,{children:"WikiHop \u50c5\u5305\u62ec\u5c0d\u4e2d\u9593\u63a8\u7406\u93c8\u7684\u9060\u7aef\u76e3\u7763\uff0cLongformer \u7684\u65b9\u6cd5\u900f\u904e\u5c0d\u6574\u500b\u4e0a\u4e0b\u6587\u9032\u884c\u63a8\u7406\u800c\u8868\u73fe\u51fa\u8272\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728 IMDB \u548c OntoNotes \u8cc7\u6599\u96c6\u4e0a\uff0c\u6548\u80fd\u63d0\u5347\u8f03\u5c0f\u3002\u5c0d\u65bc IMDB\uff0c\u5927\u90e8\u5206\u8cc7\u6599\u96c6\u7531\u77ed\u6587\u6a94\u7d44\u6210\uff0c\u56e0\u6b64\u9810\u8a08\u4efb\u4f55\u5169\u500b\u63d0\u53ca\u4e4b\u9593\u7684\u8ddd\u96e2\u901a\u5e38\u975e\u5e38\u5c0f\uff0c\u56e0\u6b64\u55ae\u7368\u8655\u7406\u8f03\u5c0f\u5340\u584a\u7684\u57fa\u7dda\u80fd\u5920\u5c07\u63d0\u53ca\u7e2b\u5408\u5230\u5171\u6307\u93c8\u4e2d\uff0c\u800c\u7121\u9700\u8003\u616e\u4ea4\u53c9\u584a\u4ea4\u4e92\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u56de\u6b78\u6d88\u878d\u5be6\u9a57",children:"\u81ea\u56de\u6b78\u6d88\u878d\u5be6\u9a57"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u81ea\u56de\u6b78\u6d88\u878d\u5be6\u9a57",src:s(31066).A+"",width:"916",height:"348"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u91dd\u5c0d\u81ea\u56de\u6b78\u6a21\u578b\u505a\u4e86\u5169\u7d44\u6d88\u878d\u5be6\u9a57\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7b2c\u4e00\u7d44\u5be6\u9a57\u6e2c\u8a66\u6ed1\u52d5\u8996\u7a97\u7684\u8a2d\u8a08\u4e2d\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Decreasing w (from 512 to 32)\uff0c\u610f\u601d\u662f\u5f9e\u5e95\u5c64\u958b\u59cb\uff0c\u9010\u6b65\u7e2e\u5c0f\u6ed1\u52d5\u8996\u7a97\u7684\u5927\u5c0f\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Fixed w (=230)\uff0c\u610f\u601d\u662f\u5f9e\u982d\u5230\u5c3e\u90fd\u4f7f\u7528\u76f8\u540c\u5927\u5c0f\u7684\u6ed1\u52d5\u8996\u7a97\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Increasing w (from 32 to 512)\uff0c\u610f\u601d\u662f\u5f9e\u5e95\u5c64\u958b\u59cb\uff0c\u9010\u6b65\u589e\u52a0\u6ed1\u52d5\u8996\u7a97\u7684\u5927\u5c0f\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7d50\u679c\u986f\u793a\u63a1\u7528 Increasing w \u7684\u8a2d\u8a08\u6548\u679c\u6700\u597d\uff0c\u9019\u4e5f\u7b26\u5408\u76f4\u89ba\uff0c\u56e0\u70ba\u9019\u6a23\u7684\u8a2d\u8a08\u53ef\u4ee5\u8b93\u6a21\u578b\u5728\u4e0d\u540c\u5c64\u6b21\u4e0a\u6709\u4e0d\u540c\u7684\u611f\u53d7\u91ce\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53e6\u5916\u4e00\u7d44\u5be6\u9a57\u662f\u6e2c\u8a66\u662f\u5426\u4f7f\u7528\u81a8\u8139\u6ed1\u52d5\u8996\u7a97\u7684\u6a5f\u5236\uff0c\u7d50\u679c\u986f\u793a\u5728\u591a\u982d\u6ce8\u610f\u529b\u7684\u5176\u4e2d\u5169\u500b\u982d\u4e0a\u4f7f\u7528\u81a8\u8139\u6ed1\u52d5\u8996\u7a97\u7684\u8a2d\u8a08\u6548\u679c\u6700\u597d\u3002"}),"\n",(0,i.jsxs)(e.admonition,{type:"tip",children:[(0,i.jsx)(e.p,{children:"\u95dc\u65bc\u7b2c\u4e8c\u7d44\u7684\u6d88\u878d\u5be6\u9a57\uff0c\u4f5c\u8005\u7684\u539f\u6587\u662f\uff1a"}),(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Adding some dilation to two heads leads to some improvement compared with no dilation at all."}),"\n"]}),(0,i.jsx)(e.p,{children:'\u9019\u908a\u6211\u5011\u63a8\u6e2c\u9019\u500b "heads" \u6307\u7684\u61c9\u8a72\u662f\u591a\u982d\u6ce8\u610f\u529b\u6a5f\u5236\u4e2d\u7684\u5176\u4e2d\u5169\u500b\u982d\uff0c\u5982\u679c\u7406\u89e3\u7684\u4e0d\u5c0d\uff0c\u8acb\u544a\u8a34\u6211\u5011\u3002'})]}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u7de8\u78bc\u6d88\u878d\u5be6\u9a57",children:"\u81ea\u7de8\u78bc\u6d88\u878d\u5be6\u9a57"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u81ea\u7de8\u78bc\u6d88\u878d\u5be6\u9a57",src:s(91304).A+"",width:"1224",height:"636"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f5c\u8005\u91dd\u5c0d\u81ea\u7de8\u78bc\u6a21\u578b\u505a\u4e86\u4e00\u9023\u4e32\u7684\u6d88\u878d\u5be6\u9a57\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\u662f\u4f7f\u7528 Longformer-base \u6a21\u578b\u9032\u884c\u6240\u6709\u5be6\u9a57\u3002\u9664\u975e\u53e6\u6709\u8aaa\u660e\uff0c\u6240\u6709\u5be6\u9a57\u5747\u4f7f\u7528\u76f8\u540c\u7684\u8d85\u53c3\u6578\u4e26\u5c0d\u4e94\u500b\u6642\u671f\u9032\u884c\u5fae\u8abf\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9577\u5e8f\u5217\u7684\u6548\u76ca"}),"\uff1a Longformer \u80fd\u5920\u5f9e\u66f4\u9577\u7684\u5e8f\u5217\u4e2d\u53d7\u76ca\uff0c\u63d0\u5347\u6a21\u578b\u6027\u80fd\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5168\u5c40\u6ce8\u610f\u529b\u7684\u5f71\u97ff"}),"\uff1a \u5168\u5c40\u6ce8\u610f\u529b\u4ee5\u53ca\u5176\u55ae\u7368\u6295\u5f71\u77e9\u9663\u5c0d\u6a21\u578b\u6027\u80fd\u6709\u6b63\u9762\u5f71\u97ff\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9810\u8a13\u7df4\u7684\u5f71\u97ff"}),"\uff1a MLM \u9810\u8a13\u7df4\u6709\u52a9\u65bc\u63d0\u5347\u6a21\u578b\u6027\u80fd\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8a13\u7df4\u6642\u9593\u7684\u5f71\u97ff"}),"\uff1a \u66f4\u9577\u6642\u9593\u7684\u8a13\u7df4\u6709\u52a9\u65bc\u6027\u80fd\u63d0\u5347\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8207 RoBERTa-base \u7684\u6bd4\u8f03"}),"\uff1a \u7576 Longformer \u7684\u914d\u7f6e\u8207 RoBERTa-base \u76f8\u540c\uff08seqlen\uff1a512 \u548c n2 \u6ce8\u610f\u529b\uff09\u6642\uff0cLongformer \u7684\u6027\u80fd\u7565\u905c\u65bc RoBERTa-base\u3002\u9019\u78ba\u8a8d\u4e86\u6027\u80fd\u63d0\u5347\u4e0d\u662f\u7531\u65bc\u984d\u5916\u7684\u9810\u8a13\u7df4\u6240\u81f4\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u50c5\u89e3\u51cd\u4f4d\u7f6e\u5d4c\u5165\u7684\u5f71\u97ff"}),"\uff1a \u4f7f\u7528\u9810\u5148\u8a13\u7df4\u7684 RoBERTa \u6a21\u578b\u4e26\u50c5\u89e3\u51cd\u9644\u52a0\u4f4d\u7f6e\u5d4c\u5165\u6642\uff0c\u6027\u80fd\u7565\u6709\u4e0b\u964d\u3002\u9019\u8868\u660e Longformer \u53ef\u4ee5\u5728\u5927\u578b\u8a13\u7df4\u8cc7\u6599\u96c6\uff08\u5982 WikiHop\uff09\u7684\u4efb\u52d9\u7279\u5b9a\u5fae\u8abf\u4e2d\u6709\u6548\u5730\u5b78\u7fd2\u4e26\u5229\u7528\u9577\u7bc4\u570d\u4e0a\u4e0b\u6587\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u8a8d\u70ba\u672c\u7bc7\u8ad6\u6587\u7684\u7814\u7a76\u91cd\u9ede\u9084\u662f\u5728\u65bc\u7a00\u758f\u6ce8\u610f\u529b\u6a5f\u5236\u7684\u8a2d\u8a08\u3002"}),"\n",(0,i.jsx)(e.p,{children:"Longformer \u7684\u5168\u57df\u6027\u7684\u6ce8\u610f\u529b\u6a5f\u5236\uff0c\u662f\u900f\u904e\u4e0b\u6e38\u4efb\u52d9\u4f86\u6c7a\u5b9a\u61c9\u8a72\u8b93\u300c\u54ea\u500b\u300d Token \u5177\u6709\u5168\u5c40\u7684\u8996\u91ce\uff1b\u5c0d\u6bd4\u5148\u524d\u7684 Sparse Transformer \u800c\u662f\u4f7f\u7528\u56fa\u5b9a\u7684\u9593\u9694\u4f86\u5be6\u73fe\u300c\u985e\u300d\u5168\u57df\u6027\u7684\u6ce8\u610f\u529b\u6a5f\u5236\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u81f3\u65bc\u54ea\u7a2e\u8a2d\u8a08\u66f4\u597d\uff0c\u5c31\u5be6\u9a57\u7684\u8868\u683c\u4e0a\u4f86\u770b\uff0cLongformer \u78ba\u5be6\u512a\u65bc\u904e\u53bb\u7684\u5176\u4ed6\u7a00\u758f\u67b6\u69cb\uff0c\u4f46\u5dee\u7570\u5176\u5be6\u6c92\u6709\u5f88\u5927\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u6240\u4ee5\u5177\u9ad4\u8981\u600e\u9ebc\u9078\u64c7\uff0c\u9084\u662f\u770b\u4f7f\u7528\u8005\u7684\u9700\u6c42\u5427\u3002\uff08",(0,i.jsx)(e.del,{children:"\u6216\u662f\u6bcf\u500b\u67b6\u69cb\u90fd\u8a66\u8a66\u770b\uff0c\u4e5f\u662f\u500b\u53ef\u4ee5\u8003\u616e\u7684\u65b9\u5f0f\u3002"}),"\uff09"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}},72891:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img1-0d50bf22af8221227c8274d60a2f37ed.jpg"},95916:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img2-22a5c307ae918d7c8c9e00abca2dc37c.jpg"},67529:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img3-3fbcd90c5a1c514cd24a5d4c48a1913a.jpg"},31066:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img4-477f67acb3efef7b7b39b31afd2a0003.jpg"},2231:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img5-242c1a13b588349d0c7a52e8d17e1edf.jpg"},91304:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/img6-ae95b569f7644e0125fd74c239984209.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function d(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);