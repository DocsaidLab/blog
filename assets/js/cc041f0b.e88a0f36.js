"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4966],{69275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(74848),l=t(28453);const r={},s="pytorch-lightning",c={id:"gmailsummary/news/2024-05-28/pytorch-lightning",title:"pytorch-lightning",description:"2024-05-28 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-05-28/pytorch-lightning.md",sourceDirName:"gmailsummary/news/2024-05-28",slug:"/gmailsummary/news/2024-05-28/pytorch-lightning",permalink:"/docs/gmailsummary/news/2024-05-28/pytorch-lightning",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"onnxruntime",permalink:"/docs/gmailsummary/news/2024-05-28/onnxruntime"},next:{title:"BentoML",permalink:"/docs/gmailsummary/news/2024-05-29/BentoML"}},o={},a=[{value:"2024-05-28 \u5f59\u6574\u5831\u544a",id:"2024-05-28-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u529f\u80fd\u589e\u52a0 - EMA\u6a21\u578b",id:"1-\u529f\u80fd\u589e\u52a0---ema\u6a21\u578b",level:3},{value:"2. \u932f\u8aa4\u4fee\u5fa9 - LR_FIND()\u5728DDP\u4e2d\u7684\u554f\u984c",id:"2-\u932f\u8aa4\u4fee\u5fa9---lr_find\u5728ddp\u4e2d\u7684\u554f\u984c",level:3},{value:"3. \u529f\u80fd\u589e\u52a0 - VertexAI\u96c6\u7fa4\u74b0\u5883",id:"3-\u529f\u80fd\u589e\u52a0---vertexai\u96c6\u7fa4\u74b0\u5883",level:3},{value:"4. \u554f\u984c - \u6e2c\u8a66\u6b65\u9a5f\u4e2d\u7684\u932f\u8aa4",id:"4-\u554f\u984c---\u6e2c\u8a66\u6b65\u9a5f\u4e2d\u7684\u932f\u8aa4",level:3},{value:"5. \u932f\u8aa4\u4fee\u5fa9 - &quot;save_last&quot;\u7121\u6cd5\u4fdd\u5b58\u5b8c\u6574\u6aa2\u67e5\u9ede",id:"5-\u932f\u8aa4\u4fee\u5fa9---save_last\u7121\u6cd5\u4fdd\u5b58\u5b8c\u6574\u6aa2\u67e5\u9ede",level:3}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pytorch-lightning",children:"pytorch-lightning"}),"\n",(0,i.jsx)(n.h2,{id:"2024-05-28-\u5f59\u6574\u5831\u544a",children:"2024-05-28 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u64da\u6536\u5230\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u91cd\u8981\u8a0a\u606f\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"1-\u529f\u80fd\u589e\u52a0---ema\u6a21\u578b",children:"1. \u529f\u80fd\u589e\u52a0 - EMA\u6a21\u578b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728Lightning-AI/pytorch-lightning\u9805\u76ee\u4e2d\u65b0\u589e\u4e86\u6307\u6578\u79fb\u52d5\u5e73\u5747\uff08EMA\uff09\u6a21\u578b\u529f\u80fd\u3002\u9019\u500b\u529f\u80fd\u7684\u52a0\u5165\u4f7f\u5f97\u4f7f\u7528\u8005\u53ef\u4ee5\u5728\u4fdd\u5b58\u9802\u90e8k\u500b\u6a21\u578b\u6642\uff0c\u53ef\u4ee5\u9078\u64c7\u4f7f\u7528\u539f\u59cb\u6a21\u578b\u6216\u8005EMA\u6a21\u578b\u4f86\u8a55\u4f30\u6307\u6a19\u3002\u6307\u6578\u79fb\u52d5\u5e73\u5747\u6a21\u578b\u662f\u4e00\u7a2e\u5e73\u6ed1\u6a21\u578b\u53c3\u6578\u7684\u65b9\u6cd5\uff0c\u901a\u5e38\u7528\u65bc\u63d0\u9ad8\u6a21\u578b\u7684\u6cdb\u5316\u80fd\u529b\u548c\u7a69\u5b9a\u6027\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-\u932f\u8aa4\u4fee\u5fa9---lr_find\u5728ddp\u4e2d\u7684\u554f\u984c",children:"2. \u932f\u8aa4\u4fee\u5fa9 - LR_FIND()\u5728DDP\u4e2d\u7684\u554f\u984c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'\u4f7f\u7528\u8005\u5831\u544a\u4e86\u5728DDP\u8a2d\u7f6e\u4e2d\u8abf\u7528lr_find()\u65b9\u6cd5\u6642\u51fa\u73fe\u7684\u932f\u8aa4\uff0c\u932f\u8aa4\u8a0a\u606f\u70ba"No backend type associated with device type cpu"\u3002\u9019\u53ef\u80fd\u662f\u4e00\u500bbug\uff0c\u9700\u8981\u9032\u4e00\u6b65\u8abf\u67e5\u548c\u4fee\u5fa9\u3002LR_FIND()\u901a\u5e38\u662f\u7528\u65bc\u627e\u5230\u5408\u9069\u7684\u5b78\u7fd2\u7387\u7bc4\u570d\uff0c\u4ee5\u4fbf\u5728\u8a13\u7df4\u6a21\u578b\u6642\u6709\u6548\u5730\u8abf\u6574\u5b78\u7fd2\u7387\u3002'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-\u529f\u80fd\u589e\u52a0---vertexai\u96c6\u7fa4\u74b0\u5883",children:"3. \u529f\u80fd\u589e\u52a0 - VertexAI\u96c6\u7fa4\u74b0\u5883"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u63d0\u4ea4\u4e86\u4e00\u500b\u5305\u542bVertexAI\u96c6\u7fa4\u74b0\u5883\u7684\u529f\u80fd\u589e\u52a0\uff0c\u9019\u500b\u529f\u80fd\u5305\u62ec\u4e00\u500b\u5b50\u985e\uff0c\u53ef\u4ee5\u5f9eVertexAI\u81ea\u5b9a\u7fa9\u8a13\u7df4\u4f5c\u696d\u4e2d\u9078\u64c7\u6b63\u78ba\u7684CLUSTER_SPEC\u4e26\u586b\u5145DDP\u6240\u9700\u7684\u76f8\u61c9\u74b0\u5883\u8b8a\u6578\u3002VertexAI\u662f\u4e00\u500bGoogle Cloud\u5e73\u53f0\u4e0a\u7684\u6a5f\u5668\u5b78\u7fd2\u670d\u52d9\uff0c\u63d0\u4f9b\u4e86\u8a13\u7df4\u3001\u90e8\u7f72\u548c\u76e3\u63a7\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u7684\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-\u554f\u984c---\u6e2c\u8a66\u6b65\u9a5f\u4e2d\u7684\u932f\u8aa4",children:"4. \u554f\u984c - \u6e2c\u8a66\u6b65\u9a5f\u4e2d\u7684\u932f\u8aa4"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u8005\u5728\u6e2c\u8a66\u6b65\u9a5f\u4e2d\u9047\u5230\u4e86\u4e00\u500b\u932f\u8aa4\uff0c\u6307\u51fa\u5f35\u91cf\u7684\u7b2c0\u500b\u5143\u7d20\u4e0d\u9700\u8981\u68af\u5ea6\u4e26\u4e14\u6c92\u6709\u68af\u5ea6\u51fd\u6578\u3002\u9019\u53ef\u80fd\u8207\u63a8\u65b7\u6a21\u5f0f\uff08INFERENCE MODE\uff09\u6709\u95dc\uff0c\u9700\u8981\u9032\u4e00\u6b65\u6aa2\u67e5\u548c\u89e3\u6c7a\u3002\u5728\u63a8\u65b7\u6a21\u5f0f\u4e0b\uff0c\u6a21\u578b\u901a\u5e38\u4e0d\u9700\u8981\u8a08\u7b97\u68af\u5ea6\uff0c\u56e0\u6b64\u53ef\u80fd\u9700\u8981\u8abf\u6574\u76f8\u61c9\u7684\u7a0b\u5f0f\u78bc\u4ee5\u9069\u61c9\u63a8\u65b7\u6a21\u5f0f\u7684\u8981\u6c42\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"5-\u932f\u8aa4\u4fee\u5fa9---save_last\u7121\u6cd5\u4fdd\u5b58\u5b8c\u6574\u6aa2\u67e5\u9ede",children:'5. \u932f\u8aa4\u4fee\u5fa9 - "save_last"\u7121\u6cd5\u4fdd\u5b58\u5b8c\u6574\u6aa2\u67e5\u9ede'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u8005\u5831\u544a\u4e86\u4e00\u500bbug\uff0c\u6307\u51fa\u5728\u4f7f\u7528save_last=True\u548cevery_n_epoch=1\u6642\uff0c\u6700\u5f8c\u4e00\u500b\u6aa2\u67e5\u9ede\uff08last.ckpt\uff09\u662f\u4e0d\u5b8c\u6574\u7684\u3002\u6aa2\u67e5\u9ede\u7684\u5927\u5c0f\u6bd4\u9810\u671f\u5c0f\uff0c\u53ef\u80fd\u9700\u8981\u9032\u884c\u4fee\u5fa9\u3002\u6aa2\u67e5\u9ede\u901a\u5e38\u7528\u65bc\u4fdd\u5b58\u6a21\u578b\u7684\u53c3\u6578\u548c\u72c0\u614b\uff0c\u4ee5\u4fbf\u5728\u9700\u8981\u6642\u53ef\u4ee5\u8f09\u5165\u6a21\u578b\u9032\u884c\u9810\u6e2c\u6216\u7e7c\u7e8c\u8a13\u7df4\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7d9c\u5408\u4ee5\u4e0a\u5167\u5bb9\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u5718\u968a\u5728\u6301\u7e8c\u6539\u9032\u548c\u512a\u5316\u6a21\u578b\u8a13\u7df4\u904e\u7a0b\u4e2d\u9047\u5230\u4e86\u4e00\u4e9b\u529f\u80fd\u589e\u52a0\u3001\u932f\u8aa4\u4fee\u5fa9\u548c\u6311\u6230\u3002\u9019\u4e9b\u6539\u9032\u548c\u4fee\u5fa9\u5c0d\u65bc\u63d0\u9ad8\u6a21\u578b\u7684\u6027\u80fd\u548c\u7a69\u5b9a\u6027\u81f3\u95dc\u91cd\u8981\u3002\u540c\u6642\uff0c\u6574\u5408VertexAI\u96c6\u7fa4\u74b0\u5883\u7684\u529f\u80fd\u589e\u52a0\u4e5f\u70ba\u6a21\u578b\u8a13\u7df4\u63d0\u4f9b\u4e86\u66f4\u591a\u9078\u64c7\u548c\u5f48\u6027\u3002\u5728\u89e3\u6c7a\u932f\u8aa4\u548c\u6311\u6230\u7684\u904e\u7a0b\u4e2d\uff0c\u5718\u968a\u9700\u8981\u5bc6\u5207\u5408\u4f5c\uff0c\u9032\u884c\u6df1\u5165\u7684\u8abf\u67e5\u548c\u4fee\u5fa9\uff0c\u4ee5\u78ba\u4fdd\u6a21\u578b\u8a13\u7df4\u7684\u9806\u5229\u9032\u884c\u3002\u5e0c\u671b\u9019\u4e9b\u6539\u9032\u548c\u4fee\u5fa9\u80fd\u5920\u6709\u6548\u63d0\u5347\u6a21\u578b\u8a13\u7df4\u7684\u6548\u7387\u548c\u6e96\u78ba\u6027\uff0c\u70ba\u672a\u4f86\u7684\u61c9\u7528\u548c\u7814\u7a76\u5960\u5b9a\u7a69\u56fa\u7684\u57fa\u790e\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 11 \u5c01"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);