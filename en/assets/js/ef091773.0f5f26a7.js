"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[54321],{93241:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=s(74848),t=s(28453);const o={},r="albumentations",d={id:"gmailsummary/news/2024-04/2024-04-30/albumentations",title:"albumentations",description:"2024-04-30 \u5f59\u6574\u5831\u544a",source:"@site/docs/gmailsummary/news/2024-04/2024-04-30/albumentations.md",sourceDirName:"gmailsummary/news/2024-04/2024-04-30",slug:"/gmailsummary/news/2024-04/2024-04-30/albumentations",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-30/albumentations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BentoML",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-30/BentoML"},next:{title:"docusaurus",permalink:"/en/docs/gmailsummary/news/2024-04/2024-04-30/docusaurus"}},l={},a=[{value:"2024-04-30 \u5f59\u6574\u5831\u544a",id:"2024-04-30-\u5f59\u6574\u5831\u544a",level:2},{value:"1. \u8b70\u984c #1694 - GridDistortion \u53c3\u8003",id:"1-\u8b70\u984c-1694---griddistortion-\u53c3\u8003",level:3},{value:"2. \u8b70\u984c #1672 - Compose \u51fd\u6578\u554f\u984c",id:"2-\u8b70\u984c-1672---compose-\u51fd\u6578\u554f\u984c",level:3},{value:"3. \u8b70\u984c #1693 - PadIfNeeded \u5e8f\u5217\u5316\u554f\u984c",id:"3-\u8b70\u984c-1693---padifneeded-\u5e8f\u5217\u5316\u554f\u984c",level:3}];function c(n){const e={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"albumentations",children:"albumentations"}),"\n",(0,i.jsx)(e.h2,{id:"2024-04-30-\u5f59\u6574\u5831\u544a",children:"2024-04-30 \u5f59\u6574\u5831\u544a"}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u64da\u6536\u5230\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0cAlbumentations \u5718\u968a\u5728 GitHub \u4e0a\u8a0e\u8ad6\u4e86\u5e7e\u500b\u91cd\u8981\u8b70\u984c\uff0c\u5176\u4e2d\u5305\u62ec\u6709\u95dc GridDistortion\u3001Compose \u51fd\u6578\u548c PadIfNeeded \u51fd\u6578\u7684\u8a0e\u8ad6\u548c\u554f\u984c\u89e3\u6c7a\u3002\u4ee5\u4e0b\u662f\u5c0d\u9019\u4e9b\u8b70\u984c\u7684\u68b3\u7406\u548c\u7e3d\u7d50\uff1a"}),"\n",(0,i.jsx)(e.h3,{id:"1-\u8b70\u984c-1694---griddistortion-\u53c3\u8003",children:"1. \u8b70\u984c #1694 - GridDistortion \u53c3\u8003"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),'\uff1a\u6709\u7528\u6236\u5c0d\u65bc "grid" distortion \u7684\u6982\u5ff5\u63d0\u51fa\u7591\u554f\uff0c\u5e0c\u671b\u80fd\u5920\u63d0\u4f9b\u76f8\u95dc\u8ad6\u6587\u4f5c\u70ba\u53c3\u8003\u3002\u53e6\u5916\uff0c\u6709\u4eba\u6307\u51fa\u4e00\u500b\u535a\u5ba2\u6587\u7ae0\u7684\u9023\u7d50\u5df2\u88ab\u79fb\u9664\uff0c\u8a62\u554f\u662f\u5426\u6709\u5176\u4ed6\u53c3\u8003\u8cc7\u6599\u3002']}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8a0e\u8ad6\u7d50\u679c"}),"\uff1a\u5718\u968a\u6210\u54e1\u8868\u793a\u5c07\u79fb\u9664\u5c0d\u539f\u59cb\u6982\u5ff5\u7684\u5f15\u7528\uff0c\u56e0\u70ba grid distortion \u662f\u4e00\u500b\u76f4\u89c0\u7684\u6982\u5ff5\uff0c\u53ef\u80fd\u4e0d\u9700\u8981\u5f15\u7528\u3002\u540c\u6642\uff0c\u4ed6\u5011\u4e5f\u8868\u793a\u5982\u679c\u6709\u4eba\u80fd\u6307\u51fa\u9019\u500b\u6982\u5ff5\u7684\u539f\u59cb\u4f86\u6e90\uff0c\u4ed6\u5011\u6703\u6a02\u610f\u6dfb\u52a0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-\u8b70\u984c-1672---compose-\u51fd\u6578\u554f\u984c",children:"2. \u8b70\u984c #1672 - Compose \u51fd\u6578\u554f\u984c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),"\uff1a\u8a0e\u8ad6\u4e86 Compose \u51fd\u6578\u5728\u8655\u7406 keypoints \u6642\u51fa\u73fe\u7684\u554f\u984c\uff0c\u4e26\u63d0\u5230\u53ef\u4ee5\u5728\u7f3a\u5c11 keypoints \u6642\u5c07\u5176\u8a2d\u7f6e\u70ba None\uff0c\u4ee5\u78ba\u4fdd\u8f49\u63db\u80fd\u5920\u6b63\u5e38\u5de5\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-\u8b70\u984c-1693---padifneeded-\u5e8f\u5217\u5316\u554f\u984c",children:"3. \u8b70\u984c #1693 - PadIfNeeded \u5e8f\u5217\u5316\u554f\u984c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u554f\u984c\u63cf\u8ff0"}),"\uff1a\u5831\u544a\u6307\u51fa\u5728\u5e8f\u5217\u5316 PadIfNeeded \u51fd\u6578\u6642\uff0c\u53c3\u6578 position \u6c92\u6709\u88ab\u4fdd\u5b58\uff0c\u5c0e\u81f4\u53cd\u5e8f\u5217\u5316\u6642 position \u53c3\u6578\u8b8a\u70ba\u9ed8\u8a8d\u503c\u7684\u554f\u984c\u3002\u9019\u500b\u554f\u984c\u5728 Albumentations \u7248\u672c 1.4.2 \u4e2d\u5df2\u7d93\u4fee\u5fa9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u9019\u4e9b\u8b70\u984c\u4e2d\uff0c\u6700\u503c\u5f97\u95dc\u6ce8\u7684\u662f PadIfNeeded \u51fd\u6578\u7684\u5e8f\u5217\u5316\u554f\u984c\u3002\u9019\u500b\u554f\u984c\u7684\u89e3\u6c7a\u4e0d\u50c5\u9ad4\u73fe\u4e86\u5718\u968a\u5c0d\u65bc\u7528\u6236\u53cd\u994b\u7684\u91cd\u8996\uff0c\u4e5f\u5c55\u793a\u4e86\u4ed6\u5011\u5728\u7dad\u8b77\u548c\u6539\u9032\u5eab\u7684\u904e\u7a0b\u4e2d\u7684\u9ad8\u6548\u7387\u548c\u5c08\u696d\u6027\u3002\u4fee\u5fa9\u9019\u500b\u554f\u984c\u4e0d\u50c5\u63d0\u9ad8\u4e86\u5eab\u7684\u7a69\u5b9a\u6027\uff0c\u4e5f\u70ba\u7528\u6236\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u4f7f\u7528\u9ad4\u9a57\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u5c0d\u65bc GridDistortion \u7684\u8a0e\u8ad6\u4e5f\u5f15\u8d77\u4e86\u4e00\u4e9b\u95dc\u6ce8\u3002\u96d6\u7136\u9019\u662f\u4e00\u500b\u76f4\u89c0\u7684\u6982\u5ff5\uff0c\u4f46\u5c0d\u65bc\u7528\u6236\u4f86\u8aaa\uff0c\u63d0\u4f9b\u76f8\u95dc\u53c3\u8003\u8cc7\u6599\u4ecd\u7136\u662f\u6709\u50f9\u503c\u7684\u3002\u5718\u968a\u6210\u54e1\u8868\u793a\u9858\u610f\u63a5\u53d7\u4e26\u6dfb\u52a0\u539f\u59cb\u6982\u5ff5\u7684\u4f86\u6e90\uff0c\u9019\u7a2e\u7a4d\u6975\u7684\u614b\u5ea6\u6709\u52a9\u65bc\u63d0\u9ad8\u5eab\u7684\u900f\u660e\u5ea6\u548c\u53ef\u4fe1\u5ea6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u5f8c\uff0c\u5728 Compose \u51fd\u6578\u554f\u984c\u4e2d\u63d0\u5230\u7684\u8655\u7406 keypoints \u7684\u65b9\u5f0f\u4e5f\u503c\u5f97\u6ce8\u610f\u3002\u9019\u7a2e\u7d30\u7dfb\u7684\u8a0e\u8ad6\u548c\u89e3\u6c7a\u554f\u984c\u7684\u65b9\u6cd5\u8868\u660e\u4e86\u5718\u968a\u5c0d\u65bc\u5eab\u7684\u529f\u80fd\u6027\u548c\u6548\u80fd\u6027\u6709\u8457\u6df1\u5165\u7684\u7406\u89e3\u548c\u95dc\u6ce8\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7e3d\u7684\u4f86\u8aaa\uff0cAlbumentations \u5718\u968a\u5728\u8655\u7406\u7528\u6236\u53cd\u994b\u548c\u554f\u984c\u6642\u5c55\u73fe\u4e86\u9ad8\u6548\u7387\u548c\u5c08\u696d\u6027\uff0c\u4e0d\u65b7\u6539\u9032\u548c\u512a\u5316\u5eab\u7684\u529f\u80fd\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u670d\u52d9\u548c\u9ad4\u9a57\u3002\u4ed6\u5011\u7684\u52aa\u529b\u548c\u6210\u5c31\u5c07\u70ba\u7528\u6236\u5e36\u4f86\u66f4\u597d\u7684\u5f71\u50cf\u589e\u5f37\u5de5\u5177\u548c\u89e3\u6c7a\u65b9\u6848\u3002"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u65e5\u5171\u5f59\u6574\u90f5\u4ef6\uff1a 8 \u5c01"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>d});var i=s(96540);const t={},o=i.createContext(t);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);