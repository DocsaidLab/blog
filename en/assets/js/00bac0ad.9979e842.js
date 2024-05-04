"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5390],{48937:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>h,toc:()=>a});var i=s(74848),l=s(28453);const r={slug:"ubuntu-install-ssh",title:"\u5728 Ubuntu \u4e0a\u8a2d\u5b9a SSH \u4f3a\u670d\u5668",authors:"Zephyr",tags:["ubuntu","ssh"],image:"/img/2023/0912.webp",description:"\u4f3a\u670d\u5668\u7684\u8a2d\u5b9a\u8207\u7121\u5bc6\u78bc\u767b\u5165\u6559\u5b78\u3002"},t=void 0,h={permalink:"/en/blog/ubuntu-install-ssh",source:"@site/blog/2023/09-12-ubuntu-install-ssh/index.md",title:"\u5728 Ubuntu \u4e0a\u8a2d\u5b9a SSH \u4f3a\u670d\u5668",description:"\u4f3a\u670d\u5668\u7684\u8a2d\u5b9a\u8207\u7121\u5bc6\u78bc\u767b\u5165\u6559\u5b78\u3002",date:"2023-09-12T00:00:00.000Z",tags:[{label:"ubuntu",permalink:"/en/blog/tags/ubuntu"},{label:"ssh",permalink:"/en/blog/tags/ssh"}],readingTime:2.63,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"ubuntu-install-ssh",title:"\u5728 Ubuntu \u4e0a\u8a2d\u5b9a SSH \u4f3a\u670d\u5668",authors:"Zephyr",tags:["ubuntu","ssh"],image:"/img/2023/0912.webp",description:"\u4f3a\u670d\u5668\u7684\u8a2d\u5b9a\u8207\u7121\u5bc6\u78bc\u767b\u5165\u6559\u5b78\u3002"},unlisted:!1,prevItem:{title:"\u642d\u5efa PyPiServer \u8a18\u9304",permalink:"/en/blog/ubuntu-docker-pypiserver"},nextItem:{title:"\u81ea\u52d5\u904b\u884c GitHub Runner",permalink:"/en/blog/ubuntu-github-runner-systemd"}},c={authorsImageUrls:[void 0]},a=[{value:"1. \u5b89\u88dd OpenSSH \u4f3a\u670d\u5668",id:"1-\u5b89\u88dd-openssh-\u4f3a\u670d\u5668",level:2},{value:"2. \u6aa2\u67e5 SSH \u4f3a\u670d\u5668\u72c0\u614b",id:"2-\u6aa2\u67e5-ssh-\u4f3a\u670d\u5668\u72c0\u614b",level:2},{value:"3. SSH \u7121\u5bc6\u78bc\u767b\u5165\u8a2d\u5b9a\uff1a",id:"3-ssh-\u7121\u5bc6\u78bc\u767b\u5165\u8a2d\u5b9a",level:2},{value:"3.1 \u5728\u5ba2\u6236\u7aef\u751f\u6210 SSH \u91d1\u9470\u5c0d",id:"31-\u5728\u5ba2\u6236\u7aef\u751f\u6210-ssh-\u91d1\u9470\u5c0d",level:3},{value:"3.2 \u628a\u516c\u958b\u91d1\u9470\u8907\u88fd\u5230\u4f3a\u670d\u5668",id:"32-\u628a\u516c\u958b\u91d1\u9470\u8907\u88fd\u5230\u4f3a\u670d\u5668",level:3},{value:"3.3 \u6e2c\u8a66\u7121\u5bc6\u78bc\u767b\u5165",id:"33-\u6e2c\u8a66\u7121\u5bc6\u78bc\u767b\u5165",level:3},{value:"\u6ce8\u610f\u4e8b\u9805",id:"\u6ce8\u610f\u4e8b\u9805",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("figure",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"title",src:s(45300).A+"",width:"1024",height:"1024"}),"\n",(0,i.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"SSH\uff08\u5b89\u5168\u6bbc\u5c64\uff09\u662f\u4e00\u7a2e\u7db2\u7d61\u5354\u8b70\uff0c\u5141\u8a31\u7528\u6236\u5b89\u5168\u5730\u8a2a\u554f\u548c\u7ba1\u7406\u9060\u7a0b\u670d\u52d9\u5668\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6587\u5c07\u9010\u6b65\u5f15\u5c0e\u4f60\u5b8c\u6210\u5b89\u88dd OpenSSH \u4f3a\u670d\u5668\u7684\u904e\u7a0b\uff0c\u6aa2\u67e5\u5176\u904b\u884c\u72c0\u614b\uff0c\u4ee5\u53ca\u8a2d\u5b9a\u7121\u5bc6\u78bc\u767b\u5165\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"1-\u5b89\u88dd-openssh-\u4f3a\u670d\u5668",children:"1. \u5b89\u88dd OpenSSH \u4f3a\u670d\u5668"}),"\n",(0,i.jsx)(n.p,{children:"\u6253\u958b\u7d42\u7aef\u6a5f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u4f86\u5b89\u88dd OpenSSH \u4f3a\u670d\u5668\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install openssh-server\n"})}),"\n",(0,i.jsx)(n.h2,{id:"2-\u6aa2\u67e5-ssh-\u4f3a\u670d\u5668\u72c0\u614b",children:"2. \u6aa2\u67e5 SSH \u4f3a\u670d\u5668\u72c0\u614b"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6aa2\u67e5 SSH \u4f3a\u670d\u5668\u7684\u72c0\u614b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status ssh\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u770b\u5230 \u300cActive: active (running)\u300d\uff0c\u90a3\u9ebc SSH \u4f3a\u670d\u5668\u5df2\u7d93\u6210\u529f\u555f\u52d5\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"3-ssh-\u7121\u5bc6\u78bc\u767b\u5165\u8a2d\u5b9a",children:"3. SSH \u7121\u5bc6\u78bc\u767b\u5165\u8a2d\u5b9a\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"31-\u5728\u5ba2\u6236\u7aef\u751f\u6210-ssh-\u91d1\u9470\u5c0d",children:"3.1 \u5728\u5ba2\u6236\u7aef\u751f\u6210 SSH \u91d1\u9470\u5c0d"}),"\n",(0,i.jsx)(n.p,{children:"\u6253\u958b\u7d42\u7aef\u6a5f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u751f\u6210\u91d1\u9470\u5c0d\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh-keygen\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6309\u7167\u63d0\u793a\u64cd\u4f5c\u3002\u901a\u5e38\u9810\u8a2d\u7684\u8a2d\u5b9a\u5c31\u8db3\u5920\u4e86\u3002\u5728\u8a62\u554f\u5bc6\u78bc\u7684\u90e8\u5206\u53ef\u4ee5\u76f4\u63a5\u6309 Enter \u4ee5\u5efa\u7acb\u4e00\u500b\u7121\u5bc6\u78bc\u7684\u91d1\u9470\u5c0d\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"32-\u628a\u516c\u958b\u91d1\u9470\u8907\u88fd\u5230\u4f3a\u670d\u5668",children:"3.2 \u628a\u516c\u958b\u91d1\u9470\u8907\u88fd\u5230\u4f3a\u670d\u5668"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528 ssh-copy-id \u547d\u4ee4\u5c07\u516c\u958b\u91d1\u9470\u8907\u88fd\u5230\u4f3a\u670d\u5668\u3002\u66ff\u63db [username] \u8207 [server-ip] \u70ba\u4f60\u7684\u4f3a\u670d\u5668\u8cc7\u6599\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id [username]@[server-ip]\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id john@192.168.0.100\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f3a\u670d\u5668\u66f4\u6539\u4e86\u9810\u8a2d\u7684 SSH \u57e0\uff08\u5982\uff1a2222\uff09\uff0c\u5247\u4f7f\u7528 -p \u53c3\u6578\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id -p 2222 john@192.168.0.100\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c07\u6703\u63d0\u793a\u4f60\u8f38\u5165\u4f3a\u670d\u5668\u7684\u5bc6\u78bc\u3002\u4e00\u65e6\u9a57\u8b49\u6210\u529f\uff0c\u4f60\u7684\u516c\u958b\u91d1\u9470\u5c31\u6703\u88ab\u6dfb\u52a0\u5230\u4f3a\u670d\u5668\u4e0a\u7684 ",(0,i.jsx)(n.code,{children:"~/.ssh/authorized_keys"})," \u6a94\u6848\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"33-\u6e2c\u8a66\u7121\u5bc6\u78bc\u767b\u5165",children:"3.3 \u6e2c\u8a66\u7121\u5bc6\u78bc\u767b\u5165"}),"\n",(0,i.jsx)(n.p,{children:"\u5617\u8a66 SSH \u81f3\u4f3a\u670d\u5668\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ssh [username]@[server-ip]\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e00\u5207\u8a2d\u5b9a\u6b63\u78ba\uff0c\u4f60\u5c07\u53ef\u4ee5\u7121\u9700\u5bc6\u78bc\u767b\u5165\u4f3a\u670d\u5668\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9805",children:"\u6ce8\u610f\u4e8b\u9805"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528 SSH \u91d1\u9470\u8a8d\u8b49\u78ba\u5be6\u53ef\u4ee5\u63d0\u9ad8\u5b89\u5168\u6027\u548c\u65b9\u4fbf\u6027\uff0c\u4f46\u8acb\u78ba\u4fdd\u4e0d\u8981\u907a\u5931\u79c1\u9470\u3002\u5efa\u8b70\u5b9a\u671f\u66f4\u63db\u6216\u66f4\u65b0\u4f60\u7684 SSH \u91d1\u9470\u3002\u70ba\u4e86\u589e\u52a0\u5b89\u5168\u6027\uff0c\u53ef\u4ee5\u8003\u616e\u7981\u6b62\u5bc6\u78bc\u8a8d\u8b49\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9019\u53ef\u4ee5\u5728\u4f3a\u670d\u5668\u7684 /etc/ssh/sshd_config \u4e2d\u8a2d\u5b9a\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PasswordAuthentication no"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9a5f\u5f8c\uff0c\u4f60\u5c07\u80fd\u5920\u4f7f\u7528 SSH \u91d1\u9470\u8a8d\u8b49\u5f9e\u5ba2\u6236\u7aef\u7121\u5bc6\u78bc\u767b\u5165\u4f3a\u670d\u5668\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},45300:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/0912-1f795861136865cb368c63ccab3340c5.webp"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>h});var i=s(96540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);