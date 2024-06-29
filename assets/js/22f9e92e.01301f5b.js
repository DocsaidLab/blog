"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1229],{16468:(i,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>r});var l=s(74848),n=s(28453);const a={sidebar_position:2},t="Gmail API \u555f\u7528",d={id:"gmailsummary/gmailapi_enable",title:"Gmail API \u555f\u7528",description:"\u9019\u662f\u4e00\u500b\u6709\u6642\u6548\u6027\u7684\u7ae0\u7bc0\uff0c\u56e0\u70ba GmailAPI \u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u80fd\u6703\u96a8\u8457 Google \u7684\u66f4\u65b0\u800c\u6709\u6240\u8b8a\u5316\u3002",source:"@site/docs/gmailsummary/gmailapi_enable.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/gmailapi_enable",permalink:"/docs/gmailsummary/gmailapi_enable",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7d39",permalink:"/docs/gmailsummary/intro"},next:{title:"Gmail API \u6191\u8b49",permalink:"/docs/gmailsummary/gmailapi_credentials"}},c={},r=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u767b\u5165\u5e33\u6236",id:"\u767b\u5165\u5e33\u6236",level:2},{value:"\u5efa\u7acb\u5c08\u6848",id:"\u5efa\u7acb\u5c08\u6848",level:2},{value:"\u555f\u7528 Gmail API",id:"\u555f\u7528-gmail-api",level:2}];function m(i){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...i.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"gmail-api-\u555f\u7528",children:"Gmail API \u555f\u7528"}),"\n",(0,l.jsx)(e.p,{children:"\u9019\u662f\u4e00\u500b\u6709\u6642\u6548\u6027\u7684\u7ae0\u7bc0\uff0c\u56e0\u70ba GmailAPI \u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u80fd\u6703\u96a8\u8457 Google \u7684\u66f4\u65b0\u800c\u6709\u6240\u8b8a\u5316\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u95b1\u8b80\u6642\uff0c\u8acb\u6ce8\u610f\u67e5\u770b\u6700\u65b0\u7684\u5b98\u65b9\u6587\u4ef6\uff1a",(0,l.jsx)(e.a,{href:"https://developers.google.com/gmail/api",children:(0,l.jsx)(e.strong,{children:"GmailAPI"})}),"\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,l.jsx)(e.p,{children:"Gmail API \u662f\u4e00\u500b\u57fa\u65bc REST \u67b6\u69cb\u7684\u61c9\u7528\u7a0b\u5f0f\u4ecb\u9762\uff0c\u5141\u8a31\u958b\u767c\u8005\u8a2a\u554f Gmail \u90f5\u7bb1\u4e26\u767c\u9001\u90f5\u4ef6\u3002\u5c0d\u65bc\u5927\u591a\u6578\u7db2\u7d61\u61c9\u7528\u4f86\u8aaa\uff0cGmail API \u63d0\u4f9b\u4e86\u5c0d\u7528\u6236 Gmail \u6578\u64da\u7684\u6388\u6b0a\u8a2a\u554f\uff0c\u975e\u5e38\u9069\u5408\u5404\u7a2e\u61c9\u7528\u5834\u666f\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u50c5\u8b80\u53d6\u6a21\u5f0f\u7684\u90f5\u4ef6\u63d0\u53d6\u3001\u7d22\u5f15\u548c\u5099\u4efd"}),"\n",(0,l.jsx)(e.li,{children:"\u81ea\u52d5\u5316\u6216\u7a0b\u5f0f\u5316\u5730\u767c\u9001\u6d88\u606f"}),"\n",(0,l.jsx)(e.li,{children:"\u90f5\u4ef6\u5e33\u6236\u7684\u9077\u79fb"}),"\n",(0,l.jsx)(e.li,{children:"\u5305\u62ec\u904e\u6ffe\u548c\u6392\u5e8f\u6d88\u606f\u5728\u5167\u7684\u90f5\u4ef6\u7d44\u7e54"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u6574\u500b\u7d44\u7e54\u4e2d\u6a19\u6e96\u5316\u96fb\u5b50\u90f5\u4ef6\u7c3d\u540d"}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"warning",children:(0,l.jsx)(e.p,{children:"Gmail API \u4e0d\u61c9\u88ab\u7528\u4f86\u66ff\u4ee3 IMAP \u958b\u767c\u5b8c\u6574\u7684\u96fb\u5b50\u90f5\u4ef6\u5ba2\u6236\u7aef\u3002\u76f8\u53cd\u5730\uff0c\u5c0d\u65bc\u5b8c\u6574\u7684\u96fb\u5b50\u90f5\u4ef6\u5ba2\u6236\u7aef\u958b\u767c\uff0c\u61c9\u53c3\u8003 IMAP\u3001POP \u548c SMTP \u6a19\u6e96\u3002"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728 Gmail API \u4e2d\u5e38\u7528\u7684\u8853\u8a9e\u5305\u62ec\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6d88\u606f\uff08Message\uff09"}),"\uff1a\u5305\u542b\u767c\u4ef6\u4eba\u3001\u6536\u4ef6\u4eba\u3001\u4e3b\u984c\u548c\u6b63\u6587\u7684\u96fb\u5b50\u90f5\u4ef6\u6d88\u606f\u3002\u6d88\u606f\u4e00\u65e6\u5275\u5efa\uff0c\u5c31\u4e0d\u80fd\u66f4\u6539\u3002\u6bcf\u689d\u6d88\u606f\u90fd\u7531\u4e00\u500b\u6d88\u606f\u8cc7\u6e90\u4f86\u8868\u793a\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u4e3b\u984c\u4e32\uff08Thread\uff09"}),"\uff1a\u76f8\u95dc\u6d88\u606f\u7684\u96c6\u5408\u5f62\u6210\u7684\u5c0d\u8a71\u3002\u5728\u96fb\u5b50\u90f5\u4ef6\u5ba2\u6236\u7aef\u61c9\u7528\u4e2d\uff0c\u7576\u4e00\u500b\u6216\u591a\u500b\u6536\u4ef6\u4eba\u5c0d\u4e00\u689d\u6d88\u606f\u56de\u8986\u81ea\u5df1\u7684\u6d88\u606f\u6642\uff0c\u5c31\u5f62\u6210\u4e86\u4e00\u500b\u4e3b\u984c\u4e32\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6a19\u7c64\uff08Label\uff09"}),"\uff1a\u7528\u65bc\u7d44\u7e54\u6d88\u606f\u548c\u4e3b\u984c\u4e32\u7684\u6a5f\u5236\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u5275\u5efa\u6a19\u7c64\u201c\u7a05\u52d9\u201d\uff0c\u4e26\u5c07\u5176\u61c9\u7528\u65bc\u6240\u6709\u8207\u7528\u6236\u7a05\u52d9\u76f8\u95dc\u7684\u6d88\u606f\u548c\u4e3b\u984c\u4e32\u3002\u6a19\u7c64\u5206\u70ba\u5169\u985e\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7cfb\u7d71\u6a19\u7c64"}),"\uff1a\u5167\u90e8\u5275\u5efa\u7684\u6a19\u7c64\uff0c\u5982\u6536\u4ef6\u7bb1\uff08INBOX\uff09\u3001\u5783\u573e\u90f5\u4ef6\uff08TRASH\uff09\u6216\u5783\u573e\u90f5\u4ef6\uff08SPAM\uff09\u3002\u9019\u4e9b\u6a19\u7c64\u4e0d\u80fd\u88ab\u522a\u9664\u6216\u4fee\u6539\u3002\u7136\u800c\uff0c\u67d0\u4e9b\u7cfb\u7d71\u6a19\u7c64\uff0c\u5982\u6536\u4ef6\u7bb1\uff0c\u53ef\u4ee5\u61c9\u7528\u65bc\u6d88\u606f\u548c\u4e3b\u984c\u4e32\uff0c\u6216\u5f9e\u4e2d\u79fb\u9664\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7528\u6236\u6a19\u7c64"}),"\uff1a\u7531\u7528\u6236\u5275\u5efa\u7684\u6a19\u7c64\u3002\u9019\u4e9b\u6a19\u7c64\u53ef\u4ee5\u7531\u7528\u6236\u6216\u61c9\u7528\u7a0b\u5e8f\u522a\u9664\u6216\u4fee\u6539\u3002\u7528\u6236\u6a19\u7c64\u7531\u6a19\u7c64\u8cc7\u6e90\u8868\u793a\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u8349\u7a3f\uff08Draft\uff09"}),"\uff1a\u672a\u767c\u9001\u7684\u6d88\u606f\u3002\u8349\u7a3f\u4e2d\u7684\u6d88\u606f\u53ef\u4ee5\u88ab\u66ff\u63db\u3002\u767c\u9001\u8349\u7a3f\u6703\u81ea\u52d5\u522a\u9664\u8349\u7a3f\u4e26\u5275\u5efa\u5e36\u6709\u5df2\u767c\u9001\uff08SENT\uff09\u7cfb\u7d71\u6a19\u7c64\u7684\u6d88\u606f\u3002\u8349\u7a3f\u7531\u8349\u7a3f\u8cc7\u6e90\u8868\u793a\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u767b\u5165\u5e33\u6236",children:"\u767b\u5165\u5e33\u6236"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u958b\u59cb\u4e4b\u524d\uff0c\u8acb\u78ba\u4fdd\u4f60\u5df2\u7d93\u6709\u4e00\u500b\u5e33\u6236\uff1a",(0,l.jsx)(e.a,{href:"https://cloud.google.com/",children:(0,l.jsx)(e.strong,{children:"Google Cloud"})}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u63a5\u8457\uff0c\u4f60\u9700\u8981\u5728 Google Cloud Console \u4e2d\u5275\u5efa\u4e00\u500b\u5c08\u6848\uff0c\u9ede\u9078\u300cConsole\u300d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_1",src:s(2018).A+"",width:"3579",height:"1870"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5efa\u7acb\u5c08\u6848",children:"\u5efa\u7acb\u5c08\u6848"}),"\n",(0,l.jsx)(e.p,{children:"\u9032\u5165 Console \u5f8c\uff0c\u9ede\u9078\u300c\u5efa\u7acb\u5c08\u6848\u300d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_2",src:s(71245).A+"",width:"4088",height:"1549"})}),"\n",(0,l.jsx)(e.p,{children:"\u63a5\u8457\u9ede\u9078\u300c\u5efa\u7acb\u65b0\u5c08\u6848\u300d"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_3",src:s(26352).A+"",width:"1608",height:"1228"})}),"\n",(0,l.jsx)(e.p,{children:"\u8f38\u5165\u5c08\u6848\u540d\u7a31\uff0c\u4e26\u9ede\u9078\u300c\u5efa\u7acb\u300d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_4",src:s(61507).A+"",width:"2438",height:"2090"})}),"\n",(0,l.jsx)(e.h2,{id:"\u555f\u7528-gmail-api",children:"\u555f\u7528 Gmail API"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u5c08\u6848\u5efa\u7acb\u5b8c\u6210\u5f8c\uff0c\u5f9e\u4e3b\u9078\u55ae\u9078\u64c7\u5c08\u6848\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_5",src:s(71398).A+"",width:"2048",height:"2740"})}),"\n",(0,l.jsx)(e.p,{children:"\u7136\u5f8c\u4f60\u5c31\u6703\u9032\u5230\u4e00\u500b\u5100\u8868\u677f\uff0c\u9ede\u9078\u300cAPI \u548c\u670d\u52d9\u300d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_6",src:s(87249).A+"",width:"4189",height:"2177"})}),"\n",(0,l.jsx)(e.p,{children:"\u63a5\u8457\u9ede\u9078\u300c\u555f\u7528 API \u548c\u670d\u52d9\u300d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_7",src:s(15444).A+"",width:"4033",height:"1228"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f9e\u641c\u5c0b\u6846\u4e2d\u8f38\u5165\u300cGmail\u300d\uff0c\u4e26\u9ede\u9078\u300cGmail API\u300d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_8",src:s(83879).A+"",width:"2814",height:"2232"})}),"\n",(0,l.jsx)(e.p,{children:"\u9ede\u9078\u300c\u555f\u7528\u300d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_9",src:s(16138).A+"",width:"2548",height:"1668"})}),"\n",(0,l.jsx)(e.p,{children:"\u5230\u9019\u908a\uff0c\u4f60\u5df2\u7d93\u6210\u529f\u555f\u7528 Gmail API\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"gmailapi_example_10",src:s(40720).A+"",width:"4235",height:"2112"})})]})}function h(i={}){const{wrapper:e}={...(0,n.R)(),...i.components};return e?(0,l.jsx)(e,{...i,children:(0,l.jsx)(m,{...i})}):m(i)}},2018:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail1-c5961a71ffb1ec514bf9c1d89594b108.jpg"},40720:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail10-4ac5be608f8ff7e9d0c67b44eaa7fb3e.jpg"},71245:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail2-bcecfb875ea3ccc9aea9b0a2e8344f2f.jpg"},26352:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail3-f30838874f26f6219afcd4009d4e7ca1.jpg"},61507:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail4-a5d9ab0bb7fdceefd2716c930889de99.jpg"},71398:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail5-08093fd47a8def0d72de50044143b6dd.jpg"},87249:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail6-6b8cb2557c4267c3389d41dc6a3a1e30.jpg"},15444:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail7-9aba4d4147fce536753682a2c6cdd8bb.jpg"},83879:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail8-7a2fa69f4960665c8996fe8087a4c4c4.jpg"},16138:(i,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/gmail9-b1cd82b2e4218fd8a8fbfb2b31596b5a.jpg"},28453:(i,e,s)=>{s.d(e,{R:()=>t,x:()=>d});var l=s(96540);const n={},a=l.createContext(n);function t(i){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function d(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(n):i.components||n:t(i.components),l.createElement(a.Provider,{value:e},i.children)}}}]);