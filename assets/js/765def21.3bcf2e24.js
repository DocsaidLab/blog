"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9005],{2706:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(74848),t=s(28453);const i={slug:"ubuntu-github-runner-systemd",title:"\u81ea\u52d5\u904b\u884c GitHub Runner",authors:"Zephyr",tags:["ubuntu","github-action","runner","systemd"],image:"/img/2023/0910.webp",description:"\u7528 Ubuntu Systemd \u5728\u80cc\u666f\u57f7\u884c\u4e26\u81ea\u52d5\u904b\u884c\u3002"},c=void 0,l={permalink:"/blog/ubuntu-github-runner-systemd",source:"@site/blog/2023/09-10-ubuntu-github-action-runner-systemd/index.md",title:"\u81ea\u52d5\u904b\u884c GitHub Runner",description:"\u7528 Ubuntu Systemd \u5728\u80cc\u666f\u57f7\u884c\u4e26\u81ea\u52d5\u904b\u884c\u3002",date:"2023-09-10T00:00:00.000Z",tags:[{inline:!0,label:"ubuntu",permalink:"/blog/tags/ubuntu"},{inline:!0,label:"github-action",permalink:"/blog/tags/github-action"},{inline:!0,label:"runner",permalink:"/blog/tags/runner"},{inline:!0,label:"systemd",permalink:"/blog/tags/systemd"}],readingTime:3.73,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"ubuntu-github-runner-systemd",title:"\u81ea\u52d5\u904b\u884c GitHub Runner",authors:"Zephyr",tags:["ubuntu","github-action","runner","systemd"],image:"/img/2023/0910.webp",description:"\u7528 Ubuntu Systemd \u5728\u80cc\u666f\u57f7\u884c\u4e26\u81ea\u52d5\u904b\u884c\u3002"},unlisted:!1,prevItem:{title:"\u5728 Ubuntu \u4e0a\u8a2d\u5b9a SSH \u4f3a\u670d\u5668",permalink:"/blog/ubuntu-install-ssh"},nextItem:{title:"\u767b\u5165 RTF8207W \u8def\u7531\u5668",permalink:"/blog/login-rtf8207w"}},d={authorsImageUrls:[void 0]},a=[{value:"\u914d\u7f6e\u6d41\u7a0b",id:"\u914d\u7f6e\u6d41\u7a0b",level:2},{value:"\u67e5\u770b\u72c0\u614b",id:"\u67e5\u770b\u72c0\u614b",level:2},{value:"\u91cd\u65b0\u914d\u7f6e",id:"\u91cd\u65b0\u914d\u7f6e",level:2}];function u(n){const e={code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("figure",{children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{alt:"title",src:s(30934).A+"",width:"1024",height:"1024"}),"\n",(0,r.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u5011\u5728\u4f7f\u7528 Github \u5354\u4f5c\u7684\u904e\u7a0b\u4e2d\uff0c\u5e38\u6703\u4f7f\u7528\u5230\u79c1\u6709\u4e3b\u6a5f\u4f86\u9032\u884c CI/CD \u7684\u5de5\u4f5c\u3002\u9019\u500b\u90e8\u5206\u5728 Github \u4e2d\u6709\u63d0\u4f9b\u8aaa\u660e\u6587\u4ef6\uff0c\u544a\u8a34\u4f7f\u7528\u8005\u8a72\u5982\u4f55\u9032\u884c\u521d\u6b65\u7684\u5b89\u88dd\uff0c\u4f9d\u7167\u6b65\u9a5f\u505a\u5b8c\u5c31\u53ef\u4ee5\u914d\u7f6e\u6210\u529f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7136\u800c\uff0c\u5728\u4e0d\u4e45\u4e4b\u5f8c\uff0c\u56e0\u70ba\u67d0\u4e9b\u539f\u56e0\uff0c\u4e3b\u6a5f\u88ab\u91cd\u65b0\u555f\u52d5\uff0c\u800c\u539f\u672c\u7684 Runner \u537b\u6c92\u6709\u8ddf\u4e0a\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u9019\u4ef6\u4e8b\u60c5\u5c31\u9019\u6a23\u88ab\u5fd8\u8a18\uff0c\u76f4\u5230\u6709\u4eba\u767c\u73fe CI/CD \u6c92\u6709\u53cd\u61c9\uff0c\u624d\u6703\u88ab\u63d0\u9192\u61c9\u8a72\u628a\u670d\u52d9\u555f\u52d5\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u9019\u6a23\u7684\u4e8b\u60c5\u6703\u4e00\u800c\u518d\u518d\u800c\u4e09\u7684\u767c\u751f\uff0c\u4e0d\u582a\u5176\u64fe\uff01"})}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5\uff0c\u6211\u5011\u9700\u8981\u81ea\u52d5\u57f7\u884c\uff01"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8aaa\u660e\u6587\u4ef6\u793a\u610f\u5716"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"github_set_runner",src:s(74408).A+"",width:"2048",height:"1173"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u914d\u7f6e\u6d41\u7a0b",children:"\u914d\u7f6e\u6d41\u7a0b"}),"\n",(0,r.jsx)(e.p,{children:"\u8981\u5728\u4e3b\u6a5f\u958b\u6a5f\u5f8c\u81ea\u52d5\u57f7\u884c\u67d0\u500b\u4efb\u52d9\uff0c\u901a\u5e38\u53ef\u4ee5\u4f7f\u7528 systemd \u670d\u52d9 (service) \u4f86\u505a\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5efa\u7acb\u4e00\u500b\u65b0\u7684 systemd \u670d\u52d9\u6a94\u6848\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo vim /etc/systemd/system/actions-runner.service\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8cbc\u4e0a\u4ee5\u4e0b\u7684\u5167\u5bb9\u5230\u6a94\u6848\u4e2d\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"[Unit]\nDescription=GitHub Action Runner\nAfter=network.target\n\n[Service]\nType=simple\nUser=\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31\nWorkingDirectory=/home/\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31/actions-runner\nExecStart=/home/\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31/actions-runner/run.sh\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\uff0a\u6ce8\u610f\uff1a",(0,r.jsx)(e.code,{children:"User"})," \u8207 ",(0,r.jsx)(e.code,{children:"WorkingDirectory"})," \u8981\u6539\u6210\u4f60\u81ea\u5df1\u7684\u4f7f\u7528\u8005\u540d\u7a31\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u544a\u77e5 systemd \u91cd\u65b0\u8b80\u53d6\u65b0\u7684\u670d\u52d9\u8a2d\u5b9a\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u555f\u7528\u6b64\u670d\u52d9\uff0c\u4f7f\u5176\u5728\u958b\u6a5f\u6642\u81ea\u52d5\u555f\u52d5\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo systemctl enable actions-runner.service\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u73fe\u5728\u4f60\u53ef\u4ee5\u624b\u52d5\u958b\u59cb\u6b64\u670d\u52d9\uff0c\u6216\u662f\u91cd\u65b0\u958b\u6a5f\u4f86\u6e2c\u8a66\u5b83\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo systemctl start actions-runner.service\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u9019\u500b\u65b9\u6cd5\uff0c\u7576\u4f60\u7684\u4e3b\u6a5f\u958b\u6a5f\u6642\uff0cactions-runner \u6703\u81ea\u52d5\u80cc\u666f\u57f7\u884c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f60\u60f3\u505c\u6b62\u670d\u52d9\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo systemctl stop actions-runner.service\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\uff0a\u6ce8\u610f\uff1a\u78ba\u4fdd ",(0,r.jsx)(e.code,{children:"run.sh"})," \u5177\u6709\u53ef\u57f7\u884c\u7684\u6b0a\u9650\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u67e5\u770b\u72c0\u614b",children:"\u67e5\u770b\u72c0\u614b"}),"\n",(0,r.jsx)(e.p,{children:"\u7576\u4f60\u4f7f\u7528 systemd \u4f86\u7ba1\u7406\u670d\u52d9\u6642\uff0c\u4f60\u7121\u6cd5\u76f4\u63a5\u300cattach\u300d\u4e4b\u985e\u7684\u670d\u52d9\u4f86\u770b\u5b83\u7684\u8f38\u51fa\uff0c\u4f46\u4f60\u53ef\u4ee5\u67e5\u770b\u9019\u500b\u670d\u52d9\u7684\u65e5\u8a8c\u4f86\u4e86\u89e3\u5b83\u7684\u5de5\u4f5c\u72c0\u614b\uff0c\u8981\u67e5\u770b actions-runner \u670d\u52d9\u7684\u65e5\u8a8c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo journalctl -u actions-runner.service -f\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u89e3\u91cb\u4e00\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"-u actions-runner.service"}),"\uff1a\u53ea\u67e5\u770b\u540d\u70ba actions-runner \u7684\u670d\u52d9\u7684\u65e5\u8a8c\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"-f"}),"\uff1a\u9019\u500b\u53c3\u6578\u8b93 journalctl \u6301\u7e8c\u8ffd\u8e2a\u6700\u65b0\u7684\u65e5\u8a8c\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5be6\u6642\u770b\u5230\u65b0\u7684\u8f38\u51fa\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u5982\u679c\u4f60\u60f3\u67e5\u770b\u670d\u52d9\u7684\u7576\u524d\u72c0\u614b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"sudo systemctl status actions-runner.service\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u9019\u5c07\u6703\u986f\u793a ",(0,r.jsx)(e.code,{children:"actions-runner"})," \u670d\u52d9\u7684\u7576\u524d\u72c0\u614b\uff0c\u5305\u62ec\u662f\u5426\u6b63\u5728\u904b\u884c\uff0c\u4ee5\u53ca\u6700\u8fd1\u7684\u65e5\u8a8c\u8f38\u51fa\uff1a"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"action-service",src:s(96973).A+"",width:"2048",height:"831"})}),"\n",(0,r.jsx)(e.h2,{id:"\u91cd\u65b0\u914d\u7f6e",children:"\u91cd\u65b0\u914d\u7f6e"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u662f\u539f\u672c\u7684 Runner \u4e0d\u898b\u4e86\uff0c\u901a\u5e38\u6703\u662f\u5728\u5207\u63db\u5132\u5b58\u5eab\u7684 Public \u548c Private \u7684\u6642\u5019\uff0c\u6216\u662f\u539f\u672c Runner \u592a\u4e45\u6c92\u6709\u8abf\u7528\uff0c\u7e3d\u4e4b\u5c31\u662f\u539f\u672c\u7684 Runner \u5f04\u4e1f\u4e86\uff0c\u9019\u6642\u5019\u5c31\u9700\u8981\u91cd\u65b0\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u9019\u6642\u5019\uff0c\u5c31\u5230 actions-runner \u8cc7\u6599\u593e\u5e95\u4e0b\uff0c\u628a .runner \u6a94\u6848\u522a\u6389\uff0c\u518d\u91cd\u65b0\u8dd1\u4e00\u6b21\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"./config.sh --url ... (\u6539\u6210\u65b0\u7684 Token \u914d\u7f6e)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5176\u4ed6\u6d41\u7a0b\u90fd\u4e00\u6a23\uff0c\u914d\u7f6e\u5b8c\u4e4b\u5f8c\uff0c\u628a\u670d\u52d9\u91cd\u65b0\u555f\u52d5\u5c31\u597d\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},96973:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/action-service-6b4de0ff1dc1dc29f3edb7aeb4d16fc8.jpg"},74408:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/github_set_runner-6ca68dc499f780fcc4c6e7d7461a2ffe.jpg"},30934:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/0910-c2468dc9e08d9233e1d0fc90aa5dd798.webp"},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);