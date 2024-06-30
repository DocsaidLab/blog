"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[34],{74280:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var i=s(74848),d=s(28453);const l={},o="pytorch-lightning",r={id:"gmailsummary/news/2024-06-01/pytorch-lightning",title:"pytorch-lightning",description:"2024-06-01 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-06-01/pytorch-lightning.md",sourceDirName:"gmailsummary/news/2024-06-01",slug:"/gmailsummary/news/2024-06-01/pytorch-lightning",permalink:"/docs/gmailsummary/news/2024-06-01/pytorch-lightning",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719787737e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"onnxruntime",permalink:"/docs/gmailsummary/news/2024-06-01/onnxruntime"},next:{title:"BentoML",permalink:"/docs/gmailsummary/news/2024-06-02/BentoML"}},c={},t=[{value:"2024-06-01 \u5f59\u6574\u5831\u544a",id:"2024-06-01-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u8b70\u984c\u8a0e\u8ad6 - Callback for logging forward, backward and update time (Discussion #19928):",id:"1-\u8b70\u984c\u8a0e\u8ad6---callback-for-logging-forward-backward-and-update-time-discussion-19928",level:3},{value:"2. \u932f\u8aa4\u4fee\u5fa9 - ModelCheckpoint does not save any checkpoint (Issue #19587):",id:"2-\u932f\u8aa4\u4fee\u5fa9---modelcheckpoint-does-not-save-any-checkpoint-issue-19587",level:3},{value:"3. \u529f\u80fd\u589e\u52a0 - Add Hooks for Dataloader Beginning and End (Issue #18019):",id:"3-\u529f\u80fd\u589e\u52a0---add-hooks-for-dataloader-beginning-and-end-issue-18019",level:3},{value:"4. \u8b70\u984c\u8a0e\u8ad6 - DDP, MPIEnv and numdevices (Discussion #19927):",id:"4-\u8b70\u984c\u8a0e\u8ad6---ddp-mpienv-and-numdevices-discussion-19927",level:3},{value:"5. \u7248\u672c\u4e00\u81f4\u6027\u554f\u984c - Version mismatches between package, CITATION file, and Zenodo (Issue #14559):",id:"5-\u7248\u672c\u4e00\u81f4\u6027\u554f\u984c---version-mismatches-between-package-citation-file-and-zenodo-issue-14559",level:3}];function a(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,d.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"pytorch-lightning",children:"pytorch-lightning"}),"\n",(0,i.jsx)(e.h2,{id:"2024-06-01-\u5f59\u6574\u5831\u544a",children:"2024-06-01 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u64da\u6536\u5230\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u91cd\u8981\u8a0a\u606f\u548c\u8a0e\u8ad6\u5167\u5bb9\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u8b70\u984c\u8a0e\u8ad6---callback-for-logging-forward-backward-and-update-time-discussion-19928",children:"1. \u8b70\u984c\u8a0e\u8ad6 - Callback for logging forward, backward and update time (Discussion #19928):"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528Callback\u4f86\u8ffd\u8e64\u524d\u5411\u3001\u5f8c\u5411\u548c\u66f4\u65b0\u6642\u9593\u7684\u6027\u80fd\u662f\u4e00\u500b\u95dc\u9375\u8b70\u984c\u3002\u9019\u53ef\u4ee5\u5e6b\u52a9\u512a\u5316\u6a21\u578b\u8a13\u7df4\u904e\u7a0b\u4e2d\u7684\u6548\u7387\u548c\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63d0\u5230\u5728\u4f7f\u7528\u68af\u5ea6\u7d2f\u7a4d\u6642\u51fa\u73fe\u7684\u5947\u602a\u884c\u70ba\uff0c\u9019\u53ef\u80fd\u8207\u56de\u8abf\u9806\u5e8f\u6216\u8a18\u9304\u6307\u6a19\u7684\u65b9\u5f0f\u6709\u95dc\u3002\u68af\u5ea6\u7d2f\u7a4d\u662f\u4e00\u7a2e\u8a13\u7df4\u6280\u5de7\uff0c\u7528\u65bc\u8655\u7406\u5167\u5b58\u9650\u5236\u6216\u8a13\u7df4\u5927\u578b\u6a21\u578b\u6642\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8a0e\u8ad6\u5982\u4f55\u8655\u7406\u4e0d\u540c\u68af\u5ea6\u7d2f\u7a4d\u60c5\u6cc1\u4e0b\u7684\u56de\u8abf\u9806\u5e8f\uff0c\u4ee5\u53ca\u5982\u4f55\u6e96\u78ba\u8a18\u9304\u76f8\u95dc\u6307\u6a19\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u9019\u9700\u8981\u4ed4\u7d30\u8a2d\u8a08\u56de\u8abf\u51fd\u6578\u548c\u65e5\u8a8c\u8a18\u9304\u6a5f\u5236\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-\u932f\u8aa4\u4fee\u5fa9---modelcheckpoint-does-not-save-any-checkpoint-issue-19587",children:"2. \u932f\u8aa4\u4fee\u5fa9 - ModelCheckpoint does not save any checkpoint (Issue #19587):"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u89e3\u6c7a\u7121\u6cd5\u4fdd\u5b58\u6aa2\u67e5\u9ede\u7684\u554f\u984c\u662f\u4e00\u500b\u91cd\u8981\u7684\u932f\u8aa4\u4fee\u5fa9\u5de5\u4f5c\u3002\u6aa2\u67e5\u9ede\u662f\u6a21\u578b\u8a13\u7df4\u904e\u7a0b\u4e2d\u4fdd\u5b58\u7684\u6a21\u578b\u72c0\u614b\uff0c\u6709\u52a9\u65bc\u6062\u5fa9\u8a13\u7df4\u6216\u9032\u884c\u6a21\u578b\u90e8\u7f72\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u901a\u904e\u66f4\u6539",(0,i.jsx)(e.code,{children:"training_step"}),"\u4e2d\u7684\u4ee3\u78bc\u4f86\u89e3\u6c7a\u6b64\u554f\u984c\uff0c\u9019\u8868\u660e\u554f\u984c\u53ef\u80fd\u8207\u8a13\u7df4\u6b65\u9a5f\u7684\u5be6\u73fe\u65b9\u5f0f\u6709\u95dc\u3002\u6aa2\u67e5\u9ede\u4fdd\u5b58\u908f\u8f2f\u7684\u6b63\u78ba\u6027\u5c0d\u65bc\u8a13\u7df4\u904e\u7a0b\u7684\u7a69\u5b9a\u6027\u81f3\u95dc\u91cd\u8981\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-\u529f\u80fd\u589e\u52a0---add-hooks-for-dataloader-beginning-and-end-issue-18019",children:"3. \u529f\u80fd\u589e\u52a0 - Add Hooks for Dataloader Beginning and End (Issue #18019):"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8a0e\u8ad6\u5728\u8cc7\u6599\u52a0\u8f09\u958b\u59cb\u548c\u7d50\u675f\u6642\u6dfb\u52a0\u9264\u5b50\uff08Hooks\uff09\u7684\u529f\u80fd\u589e\u52a0\u662f\u4e00\u500b\u6709\u8da3\u7684\u8a71\u984c\u3002\u9264\u5b50\u662f\u4e00\u7a2e\u6a5f\u5236\uff0c\u5141\u8a31\u5728\u7279\u5b9a\u4e8b\u4ef6\u767c\u751f\u6642\u57f7\u884c\u81ea\u5b9a\u7fa9\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63d0\u51fa\u4e86\u5c0d\u65bc\u8a08\u7b97\u6307\u6a19\u5f8c\u662f\u5426\u91cd\u7f6e\u7684\u7591\u554f\uff0c\u9019\u53ef\u80fd\u6d89\u53ca\u5230\u8cc7\u6599\u52a0\u8f09\u904e\u7a0b\u4e2d\u72c0\u614b\u7684\u7ba1\u7406\u548c\u63a7\u5236\u3002\u78ba\u4fdd\u8cc7\u6599\u52a0\u8f09\u7684\u6b63\u78ba\u6027\u548c\u6548\u7387\u5c0d\u65bc\u6a21\u578b\u8a13\u7df4\u81f3\u95dc\u91cd\u8981\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"4-\u8b70\u984c\u8a0e\u8ad6---ddp-mpienv-and-numdevices-discussion-19927",children:"4. \u8b70\u984c\u8a0e\u8ad6 - DDP, MPIEnv and numdevices (Discussion #19927):"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8a0e\u8ad6\u5728\u4f7f\u7528MPI\u63d2\u4ef6\u6642\u5982\u4f55\u6307\u5b9a\u8a2d\u5099\u6578\u91cf\u7684\u554f\u984c\uff0c\u9019\u6d89\u53ca\u5230\u5206\u4f48\u5f0f\u8a13\u7df4\uff08DDP\uff09\u548c\u591a\u8a2d\u5099\u74b0\u5883\uff08MPIEnv\uff09\u7684\u914d\u7f6e\u548c\u7ba1\u7406\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6b63\u78ba\u6307\u5b9a\u8a2d\u5099\u6578\u91cf\u5c0d\u65bc\u5145\u5206\u5229\u7528\u786c\u9ad4\u8cc7\u6e90\u3001\u63d0\u9ad8\u8a13\u7df4\u901f\u5ea6\u548c\u6548\u7387\u81f3\u95dc\u91cd\u8981\u3002\u8a0e\u8ad6\u5982\u4f55\u6700\u4f73\u5730\u914d\u7f6e\u8a2d\u5099\u662f\u4e00\u500b\u5177\u6709\u6311\u6230\u6027\u7684\u5de5\u7a0b\u554f\u984c\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"5-\u7248\u672c\u4e00\u81f4\u6027\u554f\u984c---version-mismatches-between-package-citation-file-and-zenodo-issue-14559",children:"5. \u7248\u672c\u4e00\u81f4\u6027\u554f\u984c - Version mismatches between package, CITATION file, and Zenodo (Issue #14559):"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8a0e\u8ad6\u5305\u3001CITATION\u6587\u4ef6\u548cZenodo\u4e4b\u9593\u7248\u672c\u4e0d\u4e00\u81f4\u7684\u554f\u984c\uff0c\u9019\u95dc\u4fc2\u5230\u8edf\u9ad4\u7248\u672c\u7ba1\u7406\u548c\u5b78\u8853\u5f15\u7528\u7684\u4e00\u81f4\u6027\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5efa\u8b70\u66f4\u65b0CITATION\u6587\u4ef6\u4ee5\u89e3\u6c7a\u7248\u672c\u4e0d\u4e00\u81f4\u554f\u984c\uff0c\u9019\u6709\u52a9\u65bc\u78ba\u4fdd\u5b78\u8853\u5f15\u7528\u7684\u6b63\u78ba\u6027\u548c\u53ef\u8ffd\u6eaf\u6027\u3002\u7248\u672c\u4e00\u81f4\u6027\u5c0d\u65bc\u7814\u7a76\u6210\u679c\u7684\u6e96\u78ba\u6027\u548c\u53ef\u4fe1\u5ea6\u81f3\u95dc\u91cd\u8981\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u8a0e\u8ad6\u6d89\u53ca\u5230\u4e86\u6a21\u578b\u8a13\u7df4\u4e2d\u7684\u6027\u80fd\u512a\u5316\u3001\u932f\u8aa4\u4fee\u5fa9\u3001\u529f\u80fd\u589e\u52a0\u3001\u5206\u4f48\u5f0f\u8a13\u7df4\u914d\u7f6e\u548c\u7248\u672c\u7ba1\u7406\u7b49\u591a\u500b\u95dc\u9375\u4e3b\u984c\u3002\u9019\u4e9b\u8a0e\u8ad6\u53cd\u6620\u4e86\u5728\u6df1\u5ea6\u5b78\u7fd2\u9818\u57df\u4e2d\u5de5\u7a0b\u5be6\u8e10\u4e2d\u5e38\u898b\u7684\u6311\u6230\u548c\u89e3\u6c7a\u65b9\u6848\uff0c\u4e26\u5f37\u8abf\u4e86\u8a13\u7df4\u904e\u7a0b\u4e2d\u7d30\u7bc0\u7684\u91cd\u8981\u6027\u3002\u900f\u904e\u8a0e\u8ad6\u548c\u5408\u4f5c\uff0c\u53ef\u4ee5\u4e0d\u65b7\u6539\u9032\u6a21\u578b\u8a13\u7df4\u6d41\u7a0b\uff0c\u63d0\u9ad8\u6548\u7387\u548c\u6e96\u78ba\u6027\u3002"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 10 \u5c01"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>r});var i=s(96540);const d={},l=i.createContext(d);function o(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:o(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);