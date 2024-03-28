"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5350],{7450:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=e(4848),r=e(8453);const i={slug:"python-env-info-collector",title:"\u6253\u9020 Python \u74b0\u5883\u5075\u6e2c\u5de5\u5177\uff1a\u5feb\u901f\u8a18\u9304\u8207\u6392\u67e5\u6a21\u578b\u8a13\u7df4\u74b0\u5883\u554f\u984c",authors:"Zephyr",tags:["python","training","environment","info","log"]},l=void 0,a={permalink:"/blog/python-env-info-collector",source:"@site/blog/2023-09-22-python-env-info-collector.md",title:"\u6253\u9020 Python \u74b0\u5883\u5075\u6e2c\u5de5\u5177\uff1a\u5feb\u901f\u8a18\u9304\u8207\u6392\u67e5\u6a21\u578b\u8a13\u7df4\u74b0\u5883\u554f\u984c",description:"\u7576\u6a21\u578b train \u58de\u4e86\uff0c\u6211\u5011\u7e3d\u662f\u6703\u60f3\u77e5\u9053\u662f\u4ec0\u9ebc\u539f\u56e0\u5c0e\u81f4\u7684\uff0c\u9019\u6642\u5019\u6211\u5011\u9700\u8981\u6aa2\u67e5\u8a13\u7df4\u4e3b\u6a5f\u7684\u74b0\u5883\u8cc7\u8a0a\uff0c\u4f8b\u5982\uff1aPython \u7248\u672c\u3001PyTorch \u7248\u672c\u3001CUDA \u7248\u672c\u3001GPU \u8cc7\u8a0a\u3001CPU \u8cc7\u8a0a\u3001RAM \u8cc7\u8a0a\u3001\u78c1\u789f\u8cc7\u8a0a\u3001IP \u5730\u5740\u7b49\u7b49\u3002",date:"2023-09-22T00:00:00.000Z",formattedDate:"2023\u5e749\u670822\u65e5",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"training",permalink:"/blog/tags/training"},{label:"environment",permalink:"/blog/tags/environment"},{label:"info",permalink:"/blog/tags/info"},{label:"log",permalink:"/blog/tags/log"}],readingTime:7.235,hasTruncateMarker:!0,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"python-env-info-collector",title:"\u6253\u9020 Python \u74b0\u5883\u5075\u6e2c\u5de5\u5177\uff1a\u5feb\u901f\u8a18\u9304\u8207\u6392\u67e5\u6a21\u578b\u8a13\u7df4\u74b0\u5883\u554f\u984c",authors:"Zephyr",tags:["python","training","environment","info","log"]},unlisted:!1,prevItem:{title:"gosu\uff1a\u5bb9\u5668\u74b0\u5883\u4e0b\u7684\u4f7f\u7528\u8005\u5207\u63db\u5de5\u5177",permalink:"/blog/gosu-usage"},nextItem:{title:"\u642d\u5efa\u79c1\u6709 PyPI\uff1a\u5728 Ubuntu \u4e0a\u7528 Docker \u904b\u884c PyPiServer \u7684\u5b8c\u6574\u6307\u5357",permalink:"/blog/ubuntu-docker-pypiserver"}},s={authorsImageUrls:[void 0]},c=[];function p(t){const n={p:"p",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u7576\u6a21\u578b train \u58de\u4e86\uff0c\u6211\u5011\u7e3d\u662f\u6703\u60f3\u77e5\u9053\u662f\u4ec0\u9ebc\u539f\u56e0\u5c0e\u81f4\u7684\uff0c\u9019\u6642\u5019\u6211\u5011\u9700\u8981\u6aa2\u67e5\u8a13\u7df4\u4e3b\u6a5f\u7684\u74b0\u5883\u8cc7\u8a0a\uff0c\u4f8b\u5982\uff1aPython \u7248\u672c\u3001PyTorch \u7248\u672c\u3001CUDA \u7248\u672c\u3001GPU \u8cc7\u8a0a\u3001CPU \u8cc7\u8a0a\u3001RAM \u8cc7\u8a0a\u3001\u78c1\u789f\u8cc7\u8a0a\u3001IP \u5730\u5740\u7b49\u7b49\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u5011\u5728\u672c\u6587\u4e2d\u5206\u4eab\u4e00\u500b\u81ea\u5df1\u624b\u523b\u7684 Python \u5c0f\u5de5\u5177\uff0c\u53ef\u4ee5\u5feb\u901f\u67e5\u770b\u9019\u4e9b\u8cc7\u8a0a\uff0c\u96d6\u7136\u8aaa\u4e0d\u662f\u5305\u5c71\u5305\u6d77\uff0c\u4f46\u57fa\u672c\u7684\u554f\u984c\u6392\u67e5\u61c9\u8a72\u8db3\u5920\u7528\u4e86\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4e00\u822c\u4f86\u8aaa\uff0c\u6211\u5011\u6703\u5728\u8a13\u7df4\u555f\u52d5\u7684\u74b0\u7bc0\uff0c\u5c07\u74b0\u5883\u8cc7\u8a0a\u7d00\u9304\u5230\u8a13\u7df4\u4e3b\u6a5f\u7684\u65e5\u8a8c\u88e1\u9762\u3002"})]})}function h(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>l,x:()=>a});var o=e(6540);const r={},i=o.createContext(r);function l(t){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:l(t.components),o.createElement(i.Provider,{value:n},t.children)}}}]);