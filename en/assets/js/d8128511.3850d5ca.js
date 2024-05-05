"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7645],{4777:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=s(74848),t=s(28453);const i={},l="pytorch-lightning",o={id:"gmailsummary/news/2024-04/2024-04-25/pytorch-lightning",title:"pytorch-lightning",description:"2024-04-25 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-04/2024-04-25/pytorch-lightning.md",sourceDirName:"gmailsummary/news/2024-04/2024-04-25",slug:"/gmailsummary/news/2024-04/2024-04-25/pytorch-lightning",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-25/pytorch-lightning",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"onnxruntime",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-25/onnxruntime"},next:{title:"BentoML",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-26/BentoML"}},c={},h=[{value:"2024-04-25 \u5f59\u6574\u5831\u544a",id:"2024-04-25-\u5f59\u6574\u5831\u544a",level:2}];function d(n){const e={h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"pytorch-lightning",children:"pytorch-lightning"}),"\n",(0,r.jsx)(e.h2,{id:"2024-04-25-\u5f59\u6574\u5831\u544a",children:"2024-04-25 \u5f59\u6574\u5831\u544a"}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u64da\u63d0\u4f9b\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u91cd\u8981\u8a0a\u606f\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u932f\u8aa4\u4fee\u5fa9\u8207\u529f\u80fd\u6539\u9032"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4fee\u5fa9\u4e86\u4e00\u500b\u932f\u8aa4\uff0c\u8b93ModelCheckpoint\u7684save_last\u53c3\u6578\u80fd\u5920\u88abjsonargparse\u6b63\u78ba\u89e3\u6790\uff0c\u9019\u500b\u4fee\u5fa9\u89e3\u6c7a\u4e86\u554f\u984c#19799\u3002\u9019\u5c0d\u65bc\u6a21\u578b\u8a13\u7df4\u904e\u7a0b\u4e2d\u7684\u6a21\u578b\u4fdd\u5b58\u529f\u80fd\u81f3\u95dc\u91cd\u8981\uff0c\u78ba\u4fdd\u4e86\u4fdd\u5b58\u6700\u5f8c\u4e00\u500b\u6a21\u578b\u7684\u6b63\u78ba\u6027\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u6709\u4e00\u500b\u95dc\u65bc\u6539\u9032WandbLogger\u7684checkpoint\u529f\u80fd\u7684PR #19297\uff0c\u6b63\u5728\u8a62\u554f\u662f\u5426\u6709\u4efb\u4f55\u53cd\u5c0d\u610f\u898b\u3002\u9019\u8868\u660e\u5718\u968a\u6b63\u5728\u4e0d\u65b7\u52aa\u529b\u6539\u9032\u65e5\u8a8c\u548c\u6a21\u578b\u4fdd\u5b58\u529f\u80fd\uff0c\u4ee5\u63d0\u9ad8\u8a13\u7df4\u904e\u7a0b\u7684\u6548\u7387\u548c\u53ef\u9760\u6027\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"SLURM\u74b0\u5883\u4e2d\u7684\u8a0e\u8ad6"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5728SLURM\u74b0\u5883\u4e2d\u95dc\u9589HPC\u6aa2\u67e5\u9ede\u4fdd\u5b58\u7684\u8a0e\u8ad6\u4e2d\uff0c\u63d0\u5230\u4e86\u5982\u4f55\u914d\u7f6eModelCheckpoint\u7684dirpath\u4ee5\u53caTrainer\u7684default_root_dir\uff0c\u4ee5\u907f\u514d\u6df7\u6dc6\u4e0d\u540c\u6a21\u578b\u7684\u554f\u984c\u3002\u9019\u986f\u793a\u4e86\u5728\u9ad8\u6027\u80fd\u8a08\u7b97\u74b0\u5883\u4e2d\u5982\u4f55\u6709\u6548\u7ba1\u7406\u6a21\u578b\u6aa2\u67e5\u9ede\u4fdd\u5b58\u7684\u91cd\u8981\u6027\uff0c\u4ee5\u78ba\u4fdd\u8a13\u7df4\u904e\u7a0b\u7684\u9806\u5229\u9032\u884c\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7528\u6236\u53cd\u994b\u8207\u8a0e\u8ad6"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6709\u7528\u6236\u63d0\u5230\u9047\u5230\u76f8\u540c\u554f\u984c\uff0c\u4e26\u8868\u793a\u4fee\u5fa9\u5c07\u6703\u5f88\u6709\u7528\u3002\u9019\u5f37\u8abf\u4e86\u4fee\u5fa9\u932f\u8aa4\u5c0d\u7528\u6236\u9ad4\u9a57\u548c\u8a13\u7df4\u904e\u7a0b\u7684\u91cd\u8981\u6027\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u6709\u95dc\u65bc\u5728\u914d\u7f6eyaml\u6587\u4ef6\u4e2d\u8a55\u4f30\u6216\u66f4\u6539\u53c3\u6578\u985e\u578b\u7684\u554f\u984c\uff0c\u4e26\u63d0\u5230\u5c0d\u65bc\u5982\u4f55\u958b\u59cb\u6c92\u6709\u4efb\u4f55\u7dda\u7d22\u3002\u9019\u8868\u660e\u4e86\u5728\u53c3\u6578\u914d\u7f6e\u65b9\u9762\u53ef\u80fd\u5b58\u5728\u7684\u56f0\u96e3\uff0c\u9700\u8981\u66f4\u597d\u7684\u6587\u6a94\u6216\u6307\u5c0e\u4f86\u5e6b\u52a9\u7528\u6236\u89e3\u6c7a\u554f\u984c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u6574\u500b\u8a0a\u606f\u4e2d\uff0c\u6211\u5011\u770b\u5230\u5718\u968a\u81f4\u529b\u65bc\u4fee\u5fa9\u932f\u8aa4\u3001\u6539\u9032\u529f\u80fd\u4ee5\u53ca\u8a0e\u8ad6\u5982\u4f55\u5728\u7279\u5b9a\u74b0\u5883\u4e2d\u66f4\u597d\u5730\u7ba1\u7406\u6a21\u578b\u8a13\u7df4\u904e\u7a0b\u3002\u7528\u6236\u7684\u53cd\u994b\u548c\u6311\u6230\u4e5f\u88ab\u63d0\u53ca\uff0c\u9019\u5c07\u6709\u52a9\u65bc\u5718\u968a\u66f4\u597d\u5730\u4e86\u89e3\u7528\u6236\u9700\u6c42\u4e26\u6539\u9032\u7522\u54c1\u3002\u9019\u4e9b\u52aa\u529b\u548c\u8a0e\u8ad6\u5c07\u6709\u52a9\u65bc\u63d0\u9ad8\u8a13\u7df4\u904e\u7a0b\u7684\u6548\u7387\u548c\u53ef\u9760\u6027\uff0c\u4e26\u4f7f\u7522\u54c1\u66f4\u7b26\u5408\u7528\u6236\u7684\u9700\u6c42\u3002"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 7 \u5c01"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);