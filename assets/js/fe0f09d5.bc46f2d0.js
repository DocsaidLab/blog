"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[78178],{6276:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=i(74848),a=i(28453);const t={sidebar_position:5},o="OpenAI API \u555f\u7528",r={id:"gmailsummary/openaiapi_login",title:"OpenAI API \u555f\u7528",description:"\u9019\u4e00\u7ae0\u6211\u5011\u8981\u5230 OpenAI API \u5b98\u7db2\u8a3b\u518a\u5e33\u865f\uff0c\u4e26\u4e14\u53d6\u5f97 API \u91d1\u9470\u3002",source:"@site/docs/gmailsummary/openaiapi_login.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/openaiapi_login",permalink:"/docs/gmailsummary/openaiapi_login",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Gmail API \u547c\u53eb",permalink:"/docs/gmailsummary/gmailapi_using"},next:{title:"OpenAI API \u547c\u53eb",permalink:"/docs/gmailsummary/openaiapi_using"}},p={},c=[{value:"\u8a3b\u518a\u5e33\u865f",id:"\u8a3b\u518a\u5e33\u865f",level:2},{value:"\u53d6\u5f97 API \u91d1\u9470",id:"\u53d6\u5f97-api-\u91d1\u9470",level:2},{value:"\u958b\u59cb\u4f7f\u7528\uff1f",id:"\u958b\u59cb\u4f7f\u7528",level:2}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"openai-api-\u555f\u7528",children:"OpenAI API \u555f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u4e00\u7ae0\u6211\u5011\u8981\u5230 ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/overview",children:"OpenAI API"})," \u5b98\u7db2\u8a3b\u518a\u5e33\u865f\uff0c\u4e26\u4e14\u53d6\u5f97 API \u91d1\u9470\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"OpenAI \u63d0\u4f9b\u7684\u8b93\u4f7f\u7528\u8005\u8f38\u5165\u6587\u5b57\u7684 ChatGPT \u548c\u900f\u904e API \u8abf\u7528\u7684 GPT \u7b49\u670d\u52d9\uff0c\u662f\u4e0d\u4e00\u6a23\u7684\u7cfb\u7d71\uff01\u5c31\u7b97\u4f60\u6709\u5728\u4f7f\u7528\u4ed8\u8cbb\u7248\u7684 ChatGPT\uff0c\u4f86\u5230 API \u547c\u53eb\u7684\u9019\u4e00\u500b\u7cfb\u7d71\u4e2d\u9084\u662f\u8981\u91cd\u65b0\u4ed8\u8cbb\u5537\uff01"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8a3b\u518a\u5e33\u865f",children:"\u8a3b\u518a\u5e33\u865f"}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u88e1\u5c31\u6c92\u6709\u50cf GmailAPI \u90a3\u908a\u9019\u9ebc\u591a\u6b65\u9a5f\u4e86\uff0c\u5c31\u5f9e\u5b98\u7db2\u4e0a\u6309\u5230\u6307\u793a\u9032\u884c\u8a3b\u518a\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"openai_1",src:i(44818).A+"",width:"4005",height:"1668"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53d6\u5f97-api-\u91d1\u9470",children:"\u53d6\u5f97 API \u91d1\u9470"}),"\n",(0,s.jsx)(n.p,{children:"\u8a3b\u518a\u5b8c\u6210\u5f8c\uff0c\u9ede\u9078\u5074\u908a\u6b04\u7684\u300cAPI Keys\u300d\uff0c\u63a5\u8457\u9ede\u9078\u300cCreate new secret key\u300d\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"openai_2",src:i(82621).A+"",width:"4936",height:"1760"})}),"\n",(0,s.jsx)(n.p,{children:"\u53d6\u4e00\u500b\u4f60\u559c\u6b61\u7684\u540d\u5b57\uff0c\u7136\u5f8c\u9ede\u9078\u300cCreate\u300d\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"openai_3",src:i(30880).A+"",width:"5082",height:"1737"})}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u8457\u4f60\u5c31\u53ef\u4ee5\u770b\u5230\u4f60\u7684 API \u91d1\u9470\u4e86\uff0c\u8907\u88fd\u4e0b\u4f86\uff0c\u9019\u500b\u91d1\u9470\u6703\u5728\u4f60\u7684\u5c08\u6848\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u958b\u59cb\u4f7f\u7528",children:"\u958b\u59cb\u4f7f\u7528\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u884c\uff01\u8981\u5148\u4ed8\u9322\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9ede\u9078\u300cBilling\u300d\uff0c\u7136\u5f8c\u4f60\u53ef\u4ee5\u81ea\u884c\u9078\u64c7\u300c\u5132\u503c\u300d\u591a\u5c11\u9322\uff08\u7f8e\u91d1\uff09\uff0c\u9019\u500b\u9322\u6703\u7528\u5728\u4f60\u7684 API \u547c\u53eb\u4e0a\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"openai_4",src:i(21043).A+"",width:"4106",height:"1929"})}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u6a23\u5c31\u5b8c\u6210\u4e86 OpenAI API \u7684\u8a3b\u518a\u8207\u555f\u7528\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u5c31\u53ef\u4ee5\u958b\u59cb\u4f7f\u7528 OpenAI API \u4e86\uff01"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},44818:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/openai1-9051c5dc8747f808ca9888004737a0eb.jpg"},82621:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/openai2-4ba2893ff31e22754538f74763f32915.jpg"},30880:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/openai3-062c3633d5cc8c8408b5a5e20c527871.jpg"},21043:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/openai4-3f1b83752cac43923746ad83de5993e7.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const a={},t=s.createContext(a);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);