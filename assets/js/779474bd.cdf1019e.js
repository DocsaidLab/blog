"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[193],{8673:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var u=e(4848),r=e(8453);const s={slug:"ubuntu-github-runner-systemd",title:"\u5229\u7528 systemd \u5728 Ubuntu \u4e0a\u80cc\u666f\u57f7\u884c\u4e26\u81ea\u52d5\u555f\u52d5 GitHub Runner",authors:"Zephyr",tags:["ubuntu","github-action","runner","systemd"]},i=void 0,o={permalink:"/blog/ubuntu-github-runner-systemd",source:"@site/blog/2023-09-10-ubuntu-github-action-runner-systemd.md",title:"\u5229\u7528 systemd \u5728 Ubuntu \u4e0a\u80cc\u666f\u57f7\u884c\u4e26\u81ea\u52d5\u555f\u52d5 GitHub Runner",description:"\u6211\u5011\u5728\u4f7f\u7528 Github \u5354\u4f5c\u7684\u904e\u7a0b\u4e2d\uff0c\u5e38\u6703\u4f7f\u7528\u5230\u79c1\u6709\u4e3b\u6a5f\u4f86\u9032\u884c CI/CD \u7684\u5de5\u4f5c\u3002\u9019\u500b\u90e8\u5206\u5728 Github \u4e2d\u6709\u63d0\u4f9b\u8aaa\u660e\u6587\u4ef6\uff0c\u544a\u8a34\u4f7f\u7528\u8005\u8a72\u5982\u4f55\u9032\u884c\u521d\u6b65\u7684\u5b89\u88dd\uff0c\u4f9d\u7167\u6b65\u9a5f\u505a\u5b8c\u5c31\u53ef\u4ee5\u914d\u7f6e\u6210\u529f\u3002",date:"2023-09-10T00:00:00.000Z",tags:[{label:"ubuntu",permalink:"/blog/tags/ubuntu"},{label:"github-action",permalink:"/blog/tags/github-action"},{label:"runner",permalink:"/blog/tags/runner"},{label:"systemd",permalink:"/blog/tags/systemd"}],readingTime:3.6,hasTruncateMarker:!0,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"ubuntu-github-runner-systemd",title:"\u5229\u7528 systemd \u5728 Ubuntu \u4e0a\u80cc\u666f\u57f7\u884c\u4e26\u81ea\u52d5\u555f\u52d5 GitHub Runner",authors:"Zephyr",tags:["ubuntu","github-action","runner","systemd"]},unlisted:!1,prevItem:{title:"Ubuntu \u4e0a SSH \u4f3a\u670d\u5668\u7684\u5feb\u901f\u8a2d\u5b9a\u8207\u7121\u5bc6\u78bc\u767b\u5165\u6559\u5b78",permalink:"/blog/ubuntu-install-ssh"},nextItem:{title:"\u767b\u5165 RTF8207W \u8def\u7531\u5668",permalink:"/blog/login-rtf8207w"}},a={authorsImageUrls:[void 0]},l=[];function b(t){const n={p:"p",...(0,r.R)(),...t.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.p,{children:"\u6211\u5011\u5728\u4f7f\u7528 Github \u5354\u4f5c\u7684\u904e\u7a0b\u4e2d\uff0c\u5e38\u6703\u4f7f\u7528\u5230\u79c1\u6709\u4e3b\u6a5f\u4f86\u9032\u884c CI/CD \u7684\u5de5\u4f5c\u3002\u9019\u500b\u90e8\u5206\u5728 Github \u4e2d\u6709\u63d0\u4f9b\u8aaa\u660e\u6587\u4ef6\uff0c\u544a\u8a34\u4f7f\u7528\u8005\u8a72\u5982\u4f55\u9032\u884c\u521d\u6b65\u7684\u5b89\u88dd\uff0c\u4f9d\u7167\u6b65\u9a5f\u505a\u5b8c\u5c31\u53ef\u4ee5\u914d\u7f6e\u6210\u529f\u3002"}),"\n",(0,u.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5728\u4e0d\u4e45\u4e4b\u5f8c\uff0c\u56e0\u70ba\u67d0\u4e9b\u539f\u56e0\uff0c\u4e3b\u6a5f\u88ab\u91cd\u65b0\u555f\u52d5\uff0c\u800c\u539f\u672c\u7684 Runner \u537b\u6c92\u6709\u8ddf\u4e0a\u3002\u9019\u4ef6\u4e8b\u60c5\u5c31\u9019\u6a23\u88ab\u5fd8\u8a18\uff0c\u76f4\u5230\u6709\u4eba\u767c\u73fe CI/CD \u6c92\u6709\u53cd\u61c9\uff0c\u624d\u6703\u88ab\u63d0\u9192\u61c9\u8a72\u628a\u670d\u52d9\u555f\u52d5\uff0c\u76f4\u5230\u4e0b\u500b\u91cd\u65b0\u958b\u6a5f\u7684\u8ff4\u5708\u70ba\u6b62\u3002"}),"\n",(0,u.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u6211\u5011\u9700\u8981\u81ea\u52d5\u57f7\u884c\uff01"})]})}function c(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,u.jsx)(n,{...t,children:(0,u.jsx)(b,{...t})}):b(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>i,x:()=>o});var u=e(6540);const r={},s=u.createContext(r);function i(t){const n=u.useContext(s);return u.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),u.createElement(s.Provider,{value:n},t.children)}}}]);