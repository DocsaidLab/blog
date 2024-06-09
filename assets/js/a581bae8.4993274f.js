"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4608],{48976:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var i=e(74848),s=e(28453);const t={},c="pytorch-lightning",l={id:"gmailsummary/news/2024-06-09/pytorch-lightning",title:"pytorch-lightning",description:"2024-06-09 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-06-09/pytorch-lightning.md",sourceDirName:"gmailsummary/news/2024-06-09",slug:"/gmailsummary/news/2024-06-09/pytorch-lightning",permalink:"/docs/gmailsummary/news/2024-06-09/pytorch-lightning",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"onnxruntime",permalink:"/docs/gmailsummary/news/2024-06-09/onnxruntime"},next:{title:"BentoML",permalink:"/docs/gmailsummary/news/2024-06-10/BentoML"}},o={},h=[{value:"2024-06-09 \u5f59\u6574\u5831\u544a",id:"2024-06-09-\u5f59\u6574\u5831\u544a",level:2}];function d(n){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"pytorch-lightning",children:"pytorch-lightning"}),"\n",(0,i.jsx)(r.h2,{id:"2024-06-09-\u5f59\u6574\u5831\u544a",children:"2024-06-09 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(r.p,{children:"\u6839\u64da\u6536\u5230\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u95dc\u9375\u8a0a\u606f\uff1a"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:'\u4f7f\u7528Tensorboard\u4e2d\u7684"HPARAMS"\u6a19\u7c64\u8a18\u9304\u8d85\u53c3\u6578\u7684\u554f\u984c'}),"\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:['\u6709\u7528\u6236\u63d0\u5230\u4e86\u5728Tensorboard\u7684"HPARAMS"\u6a19\u7c64\u4e0b\u8a18\u9304\u8d85\u53c3\u6578\u6642\u9047\u5230\u4e86\u554f\u984c\uff0c\u4e26\u63d0\u4f9b\u4e86\u76f8\u95dc\u7a0b\u5f0f\u78bc\u7247\u6bb5\u548c\u622a\u5716\u3002\u9019\u8868\u660e\u7528\u6236\u5e0c\u671b\u80fd\u5920\u4f7f\u7528PyTorch Lightning\u4e2d\u7684',(0,i.jsx)(r.code,{children:"SummaryWriter.add_hparams"}),"\u65b9\u6cd5\u4f86\u5c07\u8d85\u53c3\u6578\u8a18\u9304\u5230Tensorboard\u4e2d\uff0c\u4f46\u53ef\u80fd\u9047\u5230\u4e86\u4e00\u4e9b\u56f0\u96e3\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:'\u89e3\u6c7a\u9019\u500b\u554f\u984c\u53ef\u80fd\u9700\u8981\u9032\u4e00\u6b65\u7814\u7a76\u548c\u4e86\u89e3PyTorch Lightning\u8207Tensorboard\u7684\u6574\u5408\u65b9\u5f0f\uff0c\u4ee5\u78ba\u4fdd\u8d85\u53c3\u6578\u80fd\u5920\u6b63\u78ba\u5730\u986f\u793a\u5728"HPARAMS"\u6a19\u7c64\u4e0b\u3002'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"PyTorch Lightning\u548cHuggingFace PEFT\u4fdd\u5b58\u6b0a\u91cd\u7684\u554f\u984c"}),"\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"\u53e6\u4e00\u4f4d\u7528\u6236\u63d0\u5230\u4e86\u5728\u4f7f\u7528PyTorch Lightning\u548cHuggingFace PEFT\u6642\u4fdd\u5b58\u50c5\u9650\u65bcLORA\u6b0a\u91cd\u6642\u9047\u5230\u4e86RuntimeError\u3002\u9019\u53ef\u80fd\u6d89\u53ca\u5230\u5728\u8655\u7406\u6b0a\u91cd\u6642\u51fa\u73fe\u7684\u932f\u8aa4\uff0c\u5c24\u5176\u662f\u5728\u8655\u7406OrderedDict\u6642\u53ef\u80fd\u51fa\u73fe\u7684\u554f\u984c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"\u89e3\u6c7a\u9019\u500b\u554f\u984c\u53ef\u80fd\u9700\u8981\u6aa2\u67e5\u7a0b\u5f0f\u78bc\uff0c\u78ba\u4fdd\u5728\u4fdd\u5b58\u6b0a\u91cd\u6642\u6c92\u6709\u5c0dOrderedDict\u9032\u884c\u610f\u5916\u7684\u4fee\u6539\uff0c\u5f9e\u800c\u5c0e\u81f4RuntimeError\u7684\u51fa\u73fe\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"\u5176\u4ed6\u7528\u6236\u63d0\u5230\u7684\u554f\u984c"}),"\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:'\u9084\u6709\u5176\u4ed6\u7528\u6236\u63d0\u5230\u4e86\u95dc\u65bc\u5728Tensorboard\u7684"HPARAMS"\u6a19\u7c64\u4e0b\u8a18\u9304\u8d85\u53c3\u6578\u548c\u5c07\u6307\u6a19\u50b3\u905e\u7d66tensorboard\u7684hparam\u4ecb\u9762\u7684\u554f\u984c\u3002\u9019\u4e9b\u554f\u984c\u53ef\u80fd\u9700\u8981\u66f4\u591a\u7684\u8a0e\u8ad6\u548c\u89e3\u6c7a\u65b9\u6848\uff0c\u4ee5\u78ba\u4fdd\u7528\u6236\u80fd\u5920\u6b63\u78ba\u5730\u8a18\u9304\u548c\u5448\u73fe\u6a21\u578b\u8a13\u7df4\u904e\u7a0b\u4e2d\u7684\u91cd\u8981\u4fe1\u606f\u3002'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u7e3d\u7684\u4f86\u8aaa\uff0c\u9019\u4e9b\u96fb\u5b50\u90f5\u4ef6\u6d89\u53ca\u5230\u4f7f\u7528PyTorch Lightning\u6642\u9047\u5230\u7684\u4e00\u4e9b\u529f\u80fd\u6027\u554f\u984c\u548c\u6311\u6230\u3002\u89e3\u6c7a\u9019\u4e9b\u554f\u984c\u53ef\u80fd\u9700\u8981\u6df1\u5165\u4e86\u89e3PyTorch Lightning\u7684\u529f\u80fd\u548c\u8207\u5176\u4ed6\u5eab\uff08\u5982Tensorboard\u548cHuggingFace PEFT\uff09\u7684\u6574\u5408\u65b9\u5f0f\uff0c\u4e26\u9032\u884c\u76f8\u61c9\u7684\u7a0b\u5f0f\u78bc\u6aa2\u67e5\u548c\u8abf\u8a66\u3002\u900f\u904e\u89e3\u6c7a\u9019\u4e9b\u554f\u984c\uff0c\u7528\u6236\u53ef\u4ee5\u66f4\u6709\u6548\u5730\u5229\u7528PyTorch Lightning\u9032\u884c\u6a21\u578b\u8a13\u7df4\u548c\u76e3\u63a7\uff0c\u5f9e\u800c\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u548c\u6a21\u578b\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5728\u8655\u7406\u9019\u4e9b\u554f\u984c\u6642\uff0c\u7528\u6236\u53ef\u80fd\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e00\u4e9b\u5de5\u7a0b\u7d30\u7bc0\u548c\u5c08\u6709\u540d\u8a5e\u7684\u89e3\u91cb\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"PyTorch Lightning"}),"\uff1a\u4e00\u500b\u70baPyTorch\u8a13\u7df4\u63d0\u4f9b\u9ad8\u7d1a\u62bd\u8c61\u7684\u8f15\u91cf\u7d1a\u7814\u7a76\u6846\u67b6\uff0c\u53ef\u4ee5\u5e6b\u52a9\u7528\u6236\u66f4\u5bb9\u6613\u5730\u7d44\u7e54\u548c\u7ba1\u7406\u8a13\u7df4\u904e\u7a0b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Tensorboard"}),"\uff1a\u4e00\u500b\u7531Google\u958b\u767c\u7684\u7528\u65bc\u8996\u89ba\u5316\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u8a13\u7df4\u904e\u7a0b\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e6b\u52a9\u7528\u6236\u76e3\u63a7\u6a21\u578b\u6027\u80fd\u548c\u8abf\u8a66\u554f\u984c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"HuggingFace PEFT"}),"\uff1aHuggingFace\u516c\u53f8\u958b\u767c\u7684\u4e00\u500b\u7528\u65bc\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u4efb\u52d9\u7684\u9810\u8a13\u7df4\u6a21\u578b\u5eab\uff0c\u63d0\u4f9b\u4e86\u8a31\u591a\u9810\u8a13\u7df4\u6a21\u578b\u548c\u5de5\u5177\uff0c\u53ef\u4ee5\u5e6b\u52a9\u7528\u6236\u5feb\u901f\u69cb\u5efa\u548c\u8a13\u7df4NLP\u6a21\u578b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"OrderedDict"}),"\uff1aPython\u4e2d\u7684\u4e00\u7a2e\u6578\u64da\u7d50\u69cb\uff0c\u7528\u65bc\u4fdd\u5b58\u9375\u503c\u5c0d\u7684\u9806\u5e8f\uff0c\u901a\u5e38\u5728\u8655\u7406\u5b57\u5178\u6642\u7528\u65bc\u78ba\u4fdd\u9806\u5e8f\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u901a\u904e\u4ed4\u7d30\u8655\u7406\u9019\u4e9b\u554f\u984c\uff0c\u7528\u6236\u53ef\u4ee5\u66f4\u597d\u5730\u5229\u7528\u9019\u4e9b\u5de5\u5177\u548c\u5eab\u4f86\u9032\u884c\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u7684\u8a13\u7df4\u548c\u512a\u5316\uff0c\u5f9e\u800c\u53d6\u5f97\u66f4\u597d\u7684\u7d50\u679c\u548c\u6548\u80fd\u3002"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 9 \u5c01"}),"\n",(0,i.jsx)(r.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function g(n={}){const{wrapper:r}={...(0,s.R)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,r,e)=>{e.d(r,{R:()=>c,x:()=>l});var i=e(96540);const s={},t=i.createContext(s);function c(n){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(t.Provider,{value:r},n.children)}}}]);