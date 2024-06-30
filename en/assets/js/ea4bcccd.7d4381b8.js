"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5012],{20388:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var l=n(74848),i=n(28453);const a={},r="[21.09] PP-LCNet",c={id:"pp-lcnet/index",title:"[21.09] PP-LCNet",description:"\u63a2\u7d22\u901f\u5ea6\u7684\u908a\u754c",source:"@site/papers/2109-pp-lcnet/index.md",sourceDirName:"2109-pp-lcnet",slug:"/pp-lcnet/",permalink:"/en/papers/pp-lcnet/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719787737e3,frontMatter:{},sidebar:"papersSidebar",previous:{title:"[21.08] SimVLM",permalink:"/en/papers/simvlm/"},next:{title:"[21.11] METER",permalink:"/en/papers/meter/"}},t={},h=[{value:"\u63a2\u7d22\u901f\u5ea6\u7684\u908a\u754c",id:"\u63a2\u7d22\u901f\u5ea6\u7684\u908a\u754c",level:2},{value:"\u5b9a\u7fa9\u554f\u984c",id:"\u5b9a\u7fa9\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:2},{value:"\u6a21\u578b\u67b6\u69cb",id:"\u6a21\u578b\u67b6\u69cb",level:3},{value:"\u8a0e\u8ad6",id:"\u8a0e\u8ad6",level:2},{value:"\u5be6\u9a57\u7d50\u679c",id:"\u5be6\u9a57\u7d50\u679c",level:3},{value:"\u6d88\u878d\u5be6\u9a57",id:"\u6d88\u878d\u5be6\u9a57",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}];function x(s){const e={a:"a",admonition:"admonition",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mtext:"mtext",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"2109-pp-lcnet",children:"[21.09] PP-LCNet"}),"\n",(0,l.jsx)(e.h2,{id:"\u63a2\u7d22\u901f\u5ea6\u7684\u908a\u754c",children:"\u63a2\u7d22\u901f\u5ea6\u7684\u908a\u754c"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://arxiv.org/abs/2109.15099",children:(0,l.jsx)(e.strong,{children:"PP-LCNet: A Lightweight CPU Convolutional Neural Network"})})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u5167\u5bb9\u7531 ChatGPT-4 \u5f59\u6574\uff0c\u4e26\u7d93\u904e\u4eba\u5de5\u6821\u5c0d\u7de8\u8f2f\u8207\u88dc\u5145\u8aaa\u660e\u3002"})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u8f15\u91cf\u6a21\u578b\u7684\u7af6\u8cfd\u4e2d\uff0c\u6709\u5e7e\u500b\u4e3b\u8981\u7684\u65b9\u5411\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5176\u4e00\uff1a\u512a\u5316\u53c3\u6578\u91cf\uff0c\u4ee5\u6e1b\u5c11\u6a21\u578b\u5927\u5c0f\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5176\u4e8c\uff1a\u512a\u5316\u8a08\u7b97\u91cf\uff08FLOPs\uff09\uff0c\u964d\u4f4e\u8a08\u7b97\u91cf\u4ee5\u63d0\u9ad8\u6a21\u578b\u7684\u901f\u5ea6\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5176\u4e09\uff1a\u512a\u5316\u63a8\u7406\u6642\u9593\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6b38\uff0c\u7b49\u7b49\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u512a\u5316\u53c3\u6578\u91cf\u548c\u8a08\u7b97\u91cf\uff0c\u96e3\u9053\u548c\u512a\u5316\u63a8\u7406\u6642\u9593\u4e0d\u662f\u4e00\u56de\u4e8b\u55ce\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u591a\u6578\u4eba\u6703\u8a8d\u70ba\uff1a\u512a\u5316\u53c3\u6578\u91cf\u548c\u8a08\u7b97\u91cf\u6703\u81ea\u7136\u5730\u5c0e\u81f4\u66f4\u5feb\u7684\u63a8\u7406\u6642\u9593\uff1f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u7b54\u6848\u662f\uff1a\u4e0d\u5c0d\uff01"})}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:"\u8209\u500b\u7c21\u55ae\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5728 ResNet \u4e2d\u7684\u8df3\u8e8d\u9023\u63a5"}),"\n",(0,l.jsx)(e.li,{children:"\u5728 GoogleNet \u4e2d\u7684 Inception \u6a21\u584a"}),"\n",(0,l.jsx)(e.li,{children:"\u4e0d\u540c\u6a21\u7d44\u9593\u7684\u5171\u7528\u53c3\u6578"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0a\u64cd\u4f5c\uff0c\u90fd\u6703\u5728\u540c\u7b49\u53c3\u6578\u91cf\u6216\u904b\u7b97\u91cf\u7684\u524d\u63d0\u4e0b\uff0c\u589e\u52a0\u63a8\u7406\u6642\u9593\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5176\u4e2d\u539f\u56e0\u4f86\u81ea\u65bc\u8a18\u61b6\u9ad4\u8b80\u53d6\u548c\u591a\u5206\u652f\u67b6\u69cb\u9593\u7684\u4e92\u76f8\u7b49\u5f85\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u904e\u5728\u9019\u7bc7\u8ad6\u6587\u4e2d\u5176\u5be6\u6c92\u6709\u5f88\u6df1\u5165\u7684\u8a0e\u8ad6\u9019\u500b\u554f\u984c\uff0c\u4e4b\u5f8c\u6211\u5011\u770b\u5230\u5176\u4ed6\u8ad6\u6587\u7684\u6642\u5019\u518d\u7e7c\u7e8c\u6df1\u5165\u8a0e\u8ad6\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5b9a\u7fa9\u554f\u984c",children:"\u5b9a\u7fa9\u554f\u984c"}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u7bc7\u8ad6\u6587\u53ea\u662f\u60f3\u5148\u89e3\u6c7a\u5e7e\u500b\u554f\u984c\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u5982\u4f55\u5728\u4e0d\u589e\u52a0\u5ef6\u9072\u7684\u60c5\u6cc1\u4e0b\u4fc3\u9032\u7db2\u8def\u5b78\u7fd2\u66f4\u5f37\u7684\u7279\u5fb5\u8868\u793a\uff1f"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u63d0\u9ad8 CPU \u4e0a\u8f15\u91cf\u7d1a\u6a21\u578b\u7cbe\u78ba\u5ea6\u7684\u8981\u7d20\u6709\u54ea\u4e9b\uff1f"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"\u5982\u4f55\u6709\u6548\u7d50\u5408\u4e0d\u540c\u7b56\u7565\u5728 CPU \u4e0a\u8a2d\u8a08\u8f15\u91cf\u7d1a\u6a21\u578b\uff1f"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u89e3\u6c7a\u554f\u984c",children:"\u89e3\u6c7a\u554f\u984c"}),"\n",(0,l.jsx)(e.h3,{id:"\u6a21\u578b\u67b6\u69cb",children:"\u6a21\u578b\u67b6\u69cb"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"PP-LCNet arch",src:n(39993).A+"",width:"1224",height:"708"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f5c\u8005\u63d0\u51fa\u4e86\u5e7e\u500b\u7b56\u7565\uff0c\u4f86\u89e3\u6c7a\u4e0a\u8ff0\u554f\u984c\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"DepthSepConv"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4f5c\u8005\u4f7f\u7528\u5728 ",(0,l.jsx)(e.a,{href:"https://arxiv.org/abs/1704.04861",children:(0,l.jsx)(e.strong,{children:"MobileNetV1"})})," \u4e2d\u63d0\u51fa\u7684 DepthSepConv \u4f5c\u70ba\u57fa\u672c\u5340\u584a\uff0c\u9019\u88e1\u4e0d\u6703\u7528\u5230 shortcut \u548c concat \u7b49\u64cd\u4f5c\uff0c\u56e0\u6b64\u53ef\u4ee5\u63d0\u5347\u8a08\u7b97\u6548\u7387\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u7279\u5225\u662f\u5728\u904e\u53bb\u7814\u7a76\u4e2d\uff0c\u5df2\u7d93\u8b49\u660e\u5728\u5c0f\u6a21\u578b\u4e2d\u4f7f\u7528 shortcut \u5c0d\u65bc\u6027\u80fd\u63d0\u5347\u6c92\u6709\u592a\u5927\u5e6b\u52a9\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u53e6\u4e00\u65b9\u9762\uff0c\u5728 Intel CPU \u4e2d\uff0c\u91dd\u5c0d Inverted Block \u6216 ShuffleNet Block \u6709\u5c08\u9580\u7684\u512a\u5316\uff0c\u5728\u63a8\u8ad6\u6642\u53ef\u4ee5\u7372\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"HSwish"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 ReLU \u6fc0\u6d3b\u51fd\u6578\u80af\u5b9a\u662f\u6700\u5feb\u7684\uff01"}),"\n",(0,l.jsx)(e.p,{children:"\u4f46\u901a\u5e38\u4e0d\u662f\u6700\u597d\u7684\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u76ee\u524d\u5df2\u7d93\u6709\u5f88\u591a\u6539\u9032\u7684\u6fc0\u6d3b\u51fd\u6578\uff0c\u4f8b\u5982 Swish\u3001Mish\u3001GELU \u7b49\uff0c\u90fd\u53ef\u4ee5\u63d0\u5347\u6a21\u578b\u7684\u8868\u73fe\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u9019\u88e1\u4f5c\u8005\u53c3\u8003\u4e86 ",(0,l.jsx)(e.a,{href:"https://arxiv.org/abs/1905.02244",children:(0,l.jsx)(e.strong,{children:"MobileNetV3"})})," \u4e2d\u63d0\u51fa\u7684 HSwish\uff0c\u9019\u500b\u6fc0\u6d3b\u51fd\u6578\u5728\u4fdd\u6301\u901f\u5ea6\u7684\u540c\u6642\uff0c\u63d0\u5347\u4e86\u6a21\u578b\u7684\u6027\u80fd\u3002"]}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.p,{children:"Hswish \u51fd\u6578\u7684\u8868\u9054\u5f0f\u5982\u4e0b\uff1a"}),(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mtext,{children:"Hswish"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mtext,{children:"ReLU6"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.mn,{children:"6"})]}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mtext,{children:"ReLU6"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"min"}),(0,l.jsx)(e.mo,{children:"\u2061"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"max"}),(0,l.jsx)(e.mo,{children:"\u2061"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\text{Hswish}(x) = x \\frac{\\text{ReLU6}(x+3)}{6}, \\text{ReLU6}(x) = \\min(\\max(x, 0), 6)"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"Hswish"})}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.355em",verticalAlign:"-0.345em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.01em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"6"})})})]}),(0,l.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.485em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord text mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"ReLU6"})}),(0,l.jsx)(e.span,{className:"mopen mtight",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"}),(0,l.jsx)(e.span,{className:"mbin mtight",children:"+"}),(0,l.jsx)(e.span,{className:"mord mtight",children:"3"}),(0,l.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"ReLU6"})}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mop",children:"min"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mop",children:"max"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})]})]})}),(0,l.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mtext,{children:"ReLU6"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\text{ReLU6}(x)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"ReLU6"})}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \u662f ReLU \u51fd\u6578\u7684\u4e00\u500b\u8b8a\u9ad4\uff0c\u5b83\u5c0d\u8f38\u5165 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"x"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," \u503c\u9032\u884c\u9650\u5236\u5728 0 \u5230 6 \u4e4b\u9593\u3002"]}),(0,l.jsx)(e.p,{children:"\u51fd\u6578\u7684\u7279\u9ede\u5305\u62ec\uff1a"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u975e\u7dda\u6027"}),"\uff1a\u5b83\u63d0\u4f9b\u4e86\u975e\u7dda\u6027\u8655\u7406\u80fd\u529b\uff0c\u9019\u5c0d\u65bc\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u4f86\u8aaa\u662f\u5fc5\u9700\u7684\uff0c\u4ee5\u5e6b\u52a9\u6a21\u578b\u5b78\u7fd2\u8907\u96dc\u7684\u6578\u64da\u6a21\u5f0f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6709\u754c\u6027\u548c\u5e73\u6ed1\u6027"}),"\uff1a\u901a\u904e ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mtext,{children:"ReLU6"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\text{ReLU6}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"ReLU6"})})]})})]})," \u9650\u5236\uff0cHswish \u51fd\u6578\u5728 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"3"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"-3"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mord",children:"3"})]})})]})," \u5230\u7121\u7aae\u5927\u7684\u7bc4\u570d\u5167\u662f\u6709\u754c\u7684\uff0c\u4e26\u4e14\u76f8\u5c0d\u5e73\u6ed1\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u8a08\u7b97\u6548\u7387"}),"\uff1a\u7531\u65bc\u5176\u7d50\u69cb\u76f8\u5c0d\u7c21\u55ae\uff0c\u5b83\u5728\u8a08\u7b97\u4e0a\u66f4\u52a0\u9ad8\u6548\uff0c\u9019\u4f7f\u5f97\u5b83\u7279\u5225\u9069\u7528\u65bc\u8a08\u7b97\u8cc7\u6e90\u6709\u9650\u7684\u8a2d\u5099\u4e0a\u3002"]}),"\n"]})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"SEBlock"})}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u500b\u67b6\u69cb\u4f86\u81ea\u65bc\u9019\u7bc7\u8ad6\u6587\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://arxiv.org/abs/1709.01507",children:(0,l.jsx)(e.strong,{children:"Squeeze-and-excitation networks"})})}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u500b\u6a21\u584a\u4e5f\u5e6b\u52a9\u4e86 SENet \u8d0f\u4e0b\u4e86 2017 \u5e74\u7684 ImageNet \u6311\u6230\u8cfd\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f46\u662f\u5728 Intel CPU \u4e0a\uff0c\u9019\u500b\u6a21\u584a\u6703\u589e\u52a0\u63a8\u7406\u6642\u9593\uff0c\u56e0\u6b64\u4f5c\u8005\u5728\u9019\u88e1\u505a\u4e86\u4e00\u4e9b\u7c21\u5316\uff1a\u53ea\u653e\u5728\u7db2\u8def\u7684\u672b\u7aef\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u7d93\u904e\u5be6\u9a57\uff0c\u9019\u6a23\u7684\u8a2d\u8a08\u5728\u63d0\u5347\u7cbe\u5ea6\u7684\u540c\u6642\uff0c\u9084\u4fdd\u8b49\u4e86\u63a8\u7406\u901f\u5ea6\u4e0d\u6703\u4e0b\u964d\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5927\u6838\u5377\u7a4d"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.a,{href:"https://arxiv.org/abs/1907.09595",children:(0,l.jsx)(e.strong,{children:"MixNet"})})," \u4e2d\uff0c\u4f5c\u8005\u5206\u6790\u4e86\u4e0d\u540c\u5927\u5c0f\u7684\u6372\u7a4d\u6838\u5c0d\u7db2\u8def\u6548\u80fd\u7684\u5f71\u97ff\uff0c\u6700\u7d42\u5728\u7db2\u8def\u7684\u540c\u4e00\u5c64\u6df7\u5408\u4e0d\u540c\u5927\u5c0f\u7684\u6372\u7a4d\u6838\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u53ea\u662f\u9019\u7a2e\u6063\u610f\u7684\u6df7\u5408\u6703\u964d\u4f4e\u6a21\u578b\u7684\u63a8\u7406\u901f\u5ea6\uff0c\u56e0\u6b64\u4f5c\u8005\u5728\u9019\u88e1\u4e5f\u505a\u4e86\u4e00\u4e9b\u7c21\u5316\uff1a\u53ea\u653e\u5728\u7db2\u8def\u7684\u672b\u7aef\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u7db2\u8def\u7684\u672b\u7aef\uff0c\u5c07 3x3 \u7684\u5377\u7a4d\u63db\u6210 5x5 \u7684\u5377\u7a4d\uff0c\u53ef\u4ee5\u63d0\u5347\u6a21\u578b\u7684\u7cbe\u5ea6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6700\u5f8c\u591a\u4e00\u5c64\u5168\u9023\u63a5\u5c64"})}),"\n",(0,l.jsx)(e.p,{children:"\u7531\u65bc\u6a21\u578b\u592a\u5c0f\uff0c\u8cc7\u8a0a\u5bb9\u91cf\u4e0d\u8db3\uff0c\u56e0\u6b64\u4f5c\u8005\u5728\u7db2\u8def\u7684\u6700\u5f8c\u591a\u52a0\u4e86\u4e00\u5c64 1280 \u7dad\u7684\u5168\u9023\u63a5\u5c64\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8a0e\u8ad6",children:"\u8a0e\u8ad6"}),"\n",(0,l.jsx)(e.h3,{id:"\u5be6\u9a57\u7d50\u679c",children:"\u5be6\u9a57\u7d50\u679c"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"PP-LCNet results",src:n(83854).A+"",width:"944",height:"780"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"PP-LCNet results2",src:n(10315).A+"",width:"1224",height:"516"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f5c\u8005\u5728 ImageNet-1k \u6578\u64da\u96c6\u4e0a\u9032\u884c\u4e86\u5be6\u9a57\uff0c\u5305\u62ec 128 \u842c\u5f35\u8a13\u7df4\u5f71\u50cf\u548c 1000 \u500b\u985e\u5225\u7684 5 \u842c\u5f35\u9a57\u8b49\u5f71\u50cf\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u8a13\u7df4\u914d\u7f6e"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 SGD (\u96a8\u6a5f\u68af\u5ea6\u4e0b\u964d) \u4f5c\u70ba\u6700\u4f73\u5316\u5668\uff0c\u5177\u6709 0.9 \u7684\u52d5\u91cf\u548c 3e-5 \u7684\u6b0a\u91cd\u8870\u6e1b\uff08\u5c0d\u65bc\u5927\u578b\u6a21\u578b\u70ba 4e-5\uff09\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6279\u91cf\u5927\u5c0f\u70ba 2048\uff0c\u5b78\u7fd2\u7387\u5f9e 0.8 \u958b\u59cb\uff0c\u4e26\u901a\u904e\u9918\u5f26\u9000\u706b\u8a08\u5283\u9032\u884c\u8abf\u6574\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6574\u500b\u8a13\u7df4\u904e\u7a0b\u5305\u62ec 360 \u500b\u9031\u671f\uff0c\u5176\u4e2d\u5305\u542b 5 \u500b\u7dda\u6027\u9810\u71b1\u9031\u671f\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5f71\u50cf\u7684\u524d\u8655\u7406\u5305\u62ec\u96a8\u6a5f\u88c1\u5207\u70ba 224\xd7224 \u50cf\u7d20\u4e26\u9032\u884c\u96a8\u6a5f\u6c34\u5e73\u7ffb\u8f49\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u8a55\u4f30\u968e\u6bb5"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8a55\u4f30\u6642\uff0c\u9996\u5148\u5c07\u5f71\u50cf\u6cbf\u77ed\u908a\u8abf\u6574\u70ba 256 \u50cf\u7d20\uff0c\u7136\u5f8c\u9032\u884c 224\xd7224 \u50cf\u7d20\u7684\u4e2d\u5fc3\u88c1\u5207\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7cbe\u5ea6\u63d0\u5347\u6280\u8853"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 SSLD \u84b8\u993e\u65b9\u6cd5\u53ef\u4ee5\u986f\u8457\u63d0\u9ad8 PP-LCNet \u7684\u7cbe\u78ba\u5ea6\uff0c\u8868 3 \u5c55\u793a\u4e86 PP-LCNet \u8207\u5176\u4ed6\u6700\u5148\u9032\u6a21\u578b\u7684\u6bd4\u8f03\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5f9e\u4e0a\u9762\u5716\u8868\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230 PP-LCNet \u5728\u8a08\u7b97\u91cf\u8207\u53c3\u6578\u91cf\u76f8\u8fd1\uff0c\u4e14\u7cbe\u5ea6\u6301\u5e73\u7684\u60c5\u6cc1\u4e0b\uff0c\u63a8\u8ad6\u901f\u5ea6\u6bd4\u5176\u4ed6\u6a21\u578b\u5feb 1.5 \u500d\u4ee5\u4e0a\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u6d88\u878d\u5be6\u9a57",children:"\u6d88\u878d\u5be6\u9a57"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"ablation",src:n(87480).A+"",width:"2992",height:"1054"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"SE \u6a21\u7d44\uff08Squeeze-and-Excitation\uff09"}),":"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"SE \u6a21\u7d44\u589e\u5f37\u4e86\u6a21\u578b\u5c0d\u901a\u9053\u4e4b\u9593\u95dc\u4fc2\u7684\u6ce8\u610f\u529b\uff0c\u5f9e\u800c\u63d0\u5347\u6a21\u578b\u6e96\u78ba\u6027\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u7db2\u8def\u7684\u5c3e\u90e8\u6dfb\u52a0 SE \u6a21\u7d44\u6bd4\u5728\u5176\u4ed6\u4f4d\u7f6e\u6dfb\u52a0\u66f4\u70ba\u6709\u6548\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u5728 PP-LCNet \u4e2d\u512a\u5148\u5728\u6700\u5f8c\u5169\u500b\u5340\u584a\u4e2d\u52a0\u5165 SE \u6a21\u7d44\uff0c\u4ee5\u5e73\u8861\u63a8\u7406\u901f\u5ea6\u8207\u6e96\u78ba\u5ea6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5927\u6838\u5fc3\u7684\u4f7f\u7528"}),":"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5927\u6838\u5fc3\uff08\u5982 5\xd75\uff09\u96d6\u7136\u80fd\u63d0\u5347\u7cbe\u5ea6\uff0c\u4f46\u4e26\u975e\u9069\u5408\u65b0\u589e\u81f3\u7db2\u8def\u7684\u6240\u6709\u4f4d\u7f6e\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u548c SE \u6a21\u7d44\u76f8\u4f3c\uff0c\u5c07\u5927\u5167\u6838\u7f6e\u65bc\u7db2\u8def\u5c3e\u90e8\u66f4\u70ba\u6709\u6548\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u9078\u64c7\u5728\u7279\u5b9a\u7684\u5c64\u4f7f\u7528 5\xd75 \u7684\u6df1\u5ea6\u5206\u96e2\u5377\u7a4d\u6838\uff0c\u800c\u5728\u5176\u4ed6\u5c64\u7dad\u6301 3\xd73 \u6838\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u4e0d\u540c\u6280\u8853\u7684\u7d9c\u5408\u6548\u679c"}),":"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"H-Swish \u548c\u5927\u6838\u5fc3\u53ef\u4ee5\u5728\u5e7e\u4e4e\u4e0d\u589e\u52a0\u63a8\u7406\u6642\u9593\u7684\u60c5\u6cc1\u4e0b\u63d0\u5347\u6548\u80fd\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u9069\u91cf\u6dfb\u52a0 SE \u6a21\u7d44\u9032\u4e00\u6b65\u63d0\u5347\u6548\u80fd\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u5168\u57df\u5e73\u5747\u6c60\u5316\uff08GAP\uff09\u5f8c\u4f7f\u7528\u66f4\u5927\u7684\u5168\u9023\u63a5\u5c64\u986f\u8457\u63d0\u9ad8\u7cbe\u5ea6\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u61c9\u7528 dropout \u7b56\u7565\u4e5f\u6709\u52a9\u65bc\u63d0\u5347\u6a21\u578b\u7684\u6e96\u78ba\u5ea6\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u9019\u9805\u7814\u7a76\u4e2d\uff0c\u4f5c\u8005\u5c08\u6ce8\u65bc\u958b\u767c\u9069\u7528\u65bc\u8f15\u91cf\u7d1a Intel CPU \u7db2\u7d61\u7684\u65b9\u6cd5\uff0c\u65e8\u5728\u5728\u4e0d\u589e\u52a0\u63a8\u7406\u6642\u9593\u7684\u524d\u63d0\u4e0b\uff0c\u63d0\u9ad8\u6a21\u578b\u7684\u6e96\u78ba\u6027\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u900f\u904e\u5ee3\u6cdb\u7684\u5be6\u9a57\u548c\u65b9\u6cd5\u7684\u512a\u5316\uff0c\u63d0\u51fa\u4e86\u4e00\u7a2e\u5728\u5404\u7a2e\u8996\u89ba\u4efb\u52d9\u4e0a\u5177\u6709\u4e0d\u932f\u6027\u80fd\u7684\u7db2\u7d61\u67b6\u69cb\uff0c\u7279\u5225\u662f\u5728\u7cbe\u5ea6\u8207\u901f\u5ea6\u7684\u5e73\u8861\u4e0a\u8868\u73fe\u512a\u7570\u3002"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.p,{children:"\u9019\u500b\u6a21\u578b\u78ba\u5be6\u5f88\u5c0f\uff0c\u7cbe\u5ea6\u4e5f\u4e0d\u5dee\uff0c\u800c\u4e14\u63a8\u7406\u901f\u5ea6\u5f88\u5feb\u3002"}),(0,l.jsx)(e.p,{children:"\u5c0d\u65bc\u958b\u767c\u624b\u6a5f\u61c9\u7528\u6216\u6a21\u578b\u898f\u6a21\u53d7\u9650\u7684\u60c5\u6cc1\u4e0b\uff0c\u6211\u5011\u901a\u5e38\u6703\u4f5c\u70ba\u9996\u8981\u8003\u616e\u7684\u9078\u64c7\u3002"})]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(x,{...s})}):x(s)}},39993:(s,e,n)=>{n.d(e,{A:()=>l});const l=n.p+"assets/images/img1-6beb01162ab94395de4fc852e93a2ce9.jpg"},83854:(s,e,n)=>{n.d(e,{A:()=>l});const l=n.p+"assets/images/img2-a13572e872b1d1dd5cc3a64bf19db520.jpg"},10315:(s,e,n)=>{n.d(e,{A:()=>l});const l=n.p+"assets/images/img3-54e164913c1181d902302e4de36bd8fc.jpg"},87480:(s,e,n)=>{n.d(e,{A:()=>l});const l=n.p+"assets/images/img4-64d2d49e9bdb117c07b3328a6b5fe215.jpg"},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var l=n(96540);const i={},a=l.createContext(i);function r(s){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),l.createElement(a.Provider,{value:e},s.children)}}}]);