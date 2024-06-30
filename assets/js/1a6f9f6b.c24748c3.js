"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[972],{40979:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=s(74848),r=s(28453);const i={},t="BentoML",c={id:"gmailsummary/news/2024-06-03/BentoML",title:"BentoML",description:"2024-06-03 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-06-03/BentoML.md",sourceDirName:"gmailsummary/news/2024-06-03",slug:"/gmailsummary/news/2024-06-03/BentoML",permalink:"/docs/gmailsummary/news/2024-06-03/BentoML",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719787737e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pytorch-lightning",permalink:"/docs/gmailsummary/news/2024-06-02/pytorch-lightning"},next:{title:"albumentations",permalink:"/docs/gmailsummary/news/2024-06-03/albumentations"}},o={},d=[{value:"2024-06-03 \u5f59\u6574\u5831\u544a",id:"2024-06-03-\u5f59\u6574\u5831\u544a",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"bentoml",children:"BentoML"}),"\n",(0,l.jsx)(e.h2,{id:"2024-06-03-\u5f59\u6574\u5831\u544a",children:"2024-06-03 \u5f59\u6574\u5831\u544a"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u64da\u6536\u5230\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u91cd\u8981\u8a0a\u606f\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u932f\u8aa4\u4fee\u5fa9"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u4e00\u5c01\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u8a18\u61b6\u9ad4\u6d29\u6f0f\u7684\u554f\u984c\uff0c\u5efa\u8b70\u901a\u904e\u5347\u7d1a\u4f9d\u8cf4\u95dc\u4fc2\u4f86\u4fee\u5fa9\u3002\u5177\u9ad4\u5efa\u8b70\u4f7f\u7528\u547d\u4ee4",(0,l.jsx)(e.code,{children:"pip install bentoml -U --upgrade-strategy eager"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'\u9019\u7a2e\u4fee\u5fa9\u65b9\u5f0f\u662f\u901a\u904e\u5347\u7d1a BentoML \u5957\u4ef6\u4f86\u89e3\u6c7a\u8a18\u61b6\u9ad4\u6d29\u6f0f\u554f\u984c\u3002\u5347\u7d1a\u7b56\u7565\u70ba "eager"\uff0c\u9019\u53ef\u80fd\u610f\u5473\u8457\u5728\u5347\u7d1a\u6642\u6703\u512a\u5148\u8655\u7406\u76f8\u4f9d\u6027\u554f\u984c\uff0c\u4ee5\u78ba\u4fdd\u4fee\u5fa9\u7684\u6709\u6548\u6027\u3002'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u529f\u80fd\u589e\u52a0"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'\u53e6\u4e00\u5c01\u90f5\u4ef6\u63d0\u5230\u4e86\u65b0\u589e\u4e86\u4e00\u500b\u540d\u70ba"feat: impl client async endpoints and results"\u7684\u529f\u80fd\u3002'}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u9019\u500b\u529f\u80fd\u7684\u5be6\u73fe\u662f\u95dc\u65bc\u5ba2\u6236\u7aef\u7684\u7570\u6b65\u7aef\u9ede\u548c\u7d50\u679c\u3002\u9019\u53ef\u80fd\u610f\u5473\u8457\u73fe\u5728\u5ba2\u6236\u7aef\u53ef\u4ee5\u767c\u9001\u7570\u6b65\u8acb\u6c42\u4e26\u7372\u53d6\u975e\u540c\u6b65\u8655\u7406\u5f8c\u7684\u7d50\u679c\uff0c\u9019\u5c0d\u65bc\u63d0\u9ad8\u7cfb\u7d71\u7684\u6548\u7387\u548c\u6027\u80fd\u53ef\u80fd\u5177\u6709\u91cd\u8981\u610f\u7fa9\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u8a0e\u8ad6\u7684\u8b70\u984c"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:'\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u4e00\u4e9b\u8a0e\u8ad6\u7684\u8b70\u984c\uff0c\u5305\u62ec\u8a18\u61b6\u9ad4\u6d29\u6f0f\u554f\u984c\u3001\u932f\u8aa4\u8abf\u7528"bentoml.bentos.build_bentofile()"\u7684\u554f\u984c\u4ee5\u53ca\u65b0\u589e\u79d8\u5bc6\u7ba1\u7406\u547d\u4ee4\u7b49\u3002'}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u9019\u4e9b\u8b70\u984c\u53ef\u80fd\u662f\u5718\u968a\u5728\u8a0e\u8ad6\u548c\u89e3\u6c7a\u554f\u984c\u6642\u9047\u5230\u7684\u5177\u9ad4\u6311\u6230\u548c\u91cd\u8981\u4e8b\u9805\u3002\u4f8b\u5982\uff0c\u8a18\u61b6\u9ad4\u6d29\u6f0f\u554f\u984c\u53ef\u80fd\u9700\u8981\u6df1\u5165\u7684\u5206\u6790\u548c\u4fee\u5fa9\uff0c\u800c\u932f\u8aa4\u8abf\u7528\u67d0\u4e9b\u51fd\u6578\u53ef\u80fd\u9700\u8981\u9032\u884c\u7a0b\u5f0f\u78bc\u5be9\u67e5\u548c\u4fee\u6b63\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5728\u4e00\u5c01\u90f5\u4ef6\u4e2d\u63d0\u5230\u4e86\u5c07\u67d0\u500b\u529f\u80fd\u5408\u4f75\u5230\u7279\u5b9a\u5206\u652f\u7684\u8a0e\u8ad6\uff0c\u4ee5\u53ca\u5728\u9032\u884c\u6e2c\u8a66\u6642\u9047\u5230\u7684\u6311\u6230\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u9019\u986f\u793a\u4e86\u5718\u968a\u5728\u958b\u767c\u904e\u7a0b\u4e2d\u53d6\u5f97\u7684\u9032\u5c55\u548c\u6210\u5c31\uff0c\u540c\u6642\u4e5f\u63d0\u5230\u4e86\u5728\u5408\u4f75\u529f\u80fd\u548c\u9032\u884c\u6e2c\u8a66\u6642\u53ef\u80fd\u9047\u5230\u7684\u56f0\u96e3\u548c\u6311\u6230\u3002\u9019\u4e9b\u6311\u6230\u53ef\u80fd\u5305\u62ec\u6e2c\u8a66\u7528\u4f8b\u7684\u8a2d\u8a08\u3001\u6e2c\u8a66\u74b0\u5883\u7684\u914d\u7f6e\u7b49\u5de5\u7a0b\u4e0a\u7684\u554f\u984c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u7d9c\u5408\u4ee5\u4e0a\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u5718\u968a\u5728\u89e3\u6c7a\u8a18\u61b6\u9ad4\u6d29\u6f0f\u554f\u984c\u3001\u65b0\u589e\u529f\u80fd\u3001\u8a0e\u8ad6\u8b70\u984c\u4ee5\u53ca\u514b\u670d\u6311\u6230\u65b9\u9762\u90fd\u53d6\u5f97\u4e86\u4e00\u4e9b\u9032\u5c55\u548c\u6210\u5c31\u3002\u9019\u4e9b\u8a0a\u606f\u53cd\u6620\u4e86\u5718\u968a\u5728\u6301\u7e8c\u6539\u9032\u548c\u767c\u5c55\u7522\u54c1\u6642\u6240\u9762\u81e8\u7684\u591a\u6a23\u6027\u6311\u6230\u548c\u89e3\u6c7a\u65b9\u6848\u3002\u9019\u4e5f\u7a81\u986f\u4e86\u5718\u968a\u7684\u5408\u4f5c\u548c\u5c08\u696d\u80fd\u529b\uff0c\u4ee5\u78ba\u4fdd\u7522\u54c1\u7684\u54c1\u8cea\u548c\u7a69\u5b9a\u6027\u3002"}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 11 \u5c01"}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var l=s(96540);const r={},i=l.createContext(r);function t(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);