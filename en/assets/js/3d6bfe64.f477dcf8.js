"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9155],{78800:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var s=l(74848),i=l(28453);const a={slug:"fail2ban-settings",title:"Fail2ban\uff1a\u4fdd\u8b77 SSH \u670d\u52d9",authors:"Zephyr",tags:["ubuntu","fail2ban"],image:"/img/2023/0903.webp",description:"\u628a\u90a3\u4e9b\u60e1\u610f\u90fd\u5c01\u9396\u5728\u5916\u9762\u3002"},r=void 0,t={permalink:"/en/blog/fail2ban-settings",source:"@site/blog/2023/09-03-fail2ban-settings/index.md",title:"Fail2ban\uff1a\u4fdd\u8b77 SSH \u670d\u52d9",description:"\u628a\u90a3\u4e9b\u60e1\u610f\u90fd\u5c01\u9396\u5728\u5916\u9762\u3002",date:"2023-09-03T00:00:00.000Z",tags:[{label:"ubuntu",permalink:"/en/blog/tags/ubuntu"},{label:"fail2ban",permalink:"/en/blog/tags/fail-2-ban"}],readingTime:2.795,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"fail2ban-settings",title:"Fail2ban\uff1a\u4fdd\u8b77 SSH \u670d\u52d9",authors:"Zephyr",tags:["ubuntu","fail2ban"],image:"/img/2023/0903.webp",description:"\u628a\u90a3\u4e9b\u60e1\u610f\u90fd\u5c01\u9396\u5728\u5916\u9762\u3002"},unlisted:!1,prevItem:{title:"\u767b\u5165 RTF8207W \u8def\u7531\u5668",permalink:"/en/blog/login-rtf8207w"},nextItem:{title:"Unicode \u7de8\u78bc\u5340\u6bb5\u8868",permalink:"/en/blog/unicode-table"}},c={authorsImageUrls:[void 0]},d=[{value:"1. Fail2ban \u5b89\u88dd",id:"1-fail2ban-\u5b89\u88dd",level:2},{value:"2. \u8a2d\u5b9a",id:"2-\u8a2d\u5b9a",level:2},{value:"3. \u555f\u52d5\u8207\u76e3\u63a7",id:"3-\u555f\u52d5\u8207\u76e3\u63a7",level:2},{value:"4. \u65b0\u589e\u81ea\u5b9a\u7fa9\u898f\u5247",id:"4-\u65b0\u589e\u81ea\u5b9a\u7fa9\u898f\u5247",level:2},{value:"5. \u6e2c\u8a66",id:"5-\u6e2c\u8a66",level:2},{value:"6. \u67e5\u770b",id:"6-\u67e5\u770b",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function h(n){const e={code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("figure",{children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{alt:"title",src:l(65738).A+"",width:"1024",height:"1024"}),"\n",(0,s.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u7576\u4f60\u6210\u529f\u6253\u958b\u7684\u5916\u90e8\u7684 SSH \u901a\u9053\u4e4b\u5f8c\uff0c\u4f60\u6703\u767c\u73fe\u7acb\u523b\u51fa\u73fe\u4e00\u5806\u60e1\u610f\u9023\u7dda\uff0c\u60f3\u5617\u8a66\u767b\u5165\u4f60\u7684\u4e3b\u6a5f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u500b\u57fa\u672c\u7684\u505a\u6cd5\u662f\u958b\u555f\u9632\u706b\u7246\u9032\u884c\u963b\u64cb\uff0c\u6211\u5011\u8d95\u7dca\u4f86\u8a2d\u5b9a\u4e00\u4e0b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u60e1\u610f\u653b\u64ca\u793a\u610f\u5716"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"attack from ssh",src:l(61384).A+"",width:"616",height:"764"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"1-fail2ban-\u5b89\u88dd",children:"1. Fail2ban \u5b89\u88dd"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Fail2ban"})," \u662f\u4e00\u500b\u9632\u6b62\u670d\u52d9\u5668\u53d7\u5230\u66b4\u529b\u653b\u64ca\u7684\u8edf\u9ad4\u3002\u7576\u6709\u53ef\u7591\u7684\u884c\u70ba\uff08\u4f8b\u5982\uff1a\u91cd\u8907\u7684\u767b\u9304\u5931\u6557\uff09\u51fa\u73fe\u6642\uff0cFail2ban \u6703\u81ea\u52d5\u4fee\u6539\u9632\u706b\u7246\u898f\u5247\u4f86\u5c01\u9396\u653b\u64ca\u8005\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5927\u90e8\u5206\u7684 Linux \u767c\u884c\u7248\u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5305\u7ba1\u7406\u5de5\u5177\u4f86\u5b89\u88dd Fail2ban\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Ubuntu \u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 apt \u4f86\u5b89\u88dd\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt install fail2ban\n"})}),"\n",(0,s.jsx)(e.h2,{id:"2-\u8a2d\u5b9a",children:"2. \u8a2d\u5b9a"}),"\n",(0,s.jsxs)(e.p,{children:["\u8a2d\u5b9a\u6a94\u4f4d\u65bc ",(0,s.jsx)(e.code,{children:"/etc/fail2ban/jail.conf"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5efa\u8b70\u4e0d\u76f4\u63a5\u4fee\u6539\u6b64\u6587\u4ef6\uff0c\u800c\u662f\u8907\u88fd\u4e00\u4efd\u5230 ",(0,s.jsx)(e.code,{children:"jail.local"})," \u4e26\u4fee\u6539\u5b83\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u7de8\u8f2f ",(0,s.jsx)(e.code,{children:"jail.local"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo nano /etc/fail2ban/jail.local\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u91cd\u8981\u7684\u8a2d\u5b9a\u53c3\u6578\uff1a"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ignoreip:"})," \u5ffd\u7565\u7684 IP \u5730\u5740\u6216\u7db2\u6bb5\uff0c\u4f8b\u5982\uff1a 127.0.0.1/8"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"bantime:"})," \u5c01\u9396\u6642\u9593\uff0c\u4ee5\u79d2\u70ba\u55ae\u4f4d (\u9810\u8a2d\u662f 600 \u79d2)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"findtime:"})," \u5728\u9019\u6bb5\u6642\u9593\u5167\u89c0\u5bdf\u5230\u591a\u5c11\u6b21\u5931\u6557\u5617\u8a66 (\u9810\u8a2d\u662f 600 \u79d2)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"maxretry:"})," \u5728 findtime \u6240\u8a2d\u5b9a\u7684\u6642\u9593\u5167\u5141\u8a31\u7684\u6700\u5927\u5931\u6557\u5617\u8a66\u6b21\u6578\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"3-\u555f\u52d5\u8207\u76e3\u63a7",children:"3. \u555f\u52d5\u8207\u76e3\u63a7"}),"\n",(0,s.jsx)(e.p,{children:"\u555f\u52d5 Fail2ban\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo service fail2ban start\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b Fail2ban \u7684\u72c0\u614b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo fail2ban-client status\n"})}),"\n",(0,s.jsx)(e.h2,{id:"4-\u65b0\u589e\u81ea\u5b9a\u7fa9\u898f\u5247",children:"4. \u65b0\u589e\u81ea\u5b9a\u7fa9\u898f\u5247"}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u60f3\u70ba\u7279\u5b9a\u7684\u670d\u52d9\uff08\u4f8b\u5982\uff1a SSH \u6216 Apache\uff09\u8a2d\u5b9a\u7279\u5225\u7684\u898f\u5247\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,s.jsx)(e.code,{children:"jail.local"})," \u88e1\u65b0\u589e\u6216\u4fee\u6539\u5c0d\u61c9\u7684\u6bb5\u843d\uff0c\u4f8b\u5982\u91dd\u5c0d SSH \u7684\u8a2d\u5b9a\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"[sshd]\nenabled = true\nport = ssh\nfilter = sshd\nlogpath = /var/log/auth.log\nmaxretry = 3\n"})}),"\n",(0,s.jsx)(e.h2,{id:"5-\u6e2c\u8a66",children:"5. \u6e2c\u8a66"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4fee\u6539\u5b8c\u8a2d\u5b9a\u5f8c\uff0c\u91cd\u65b0\u555f\u52d5 Fail2ban \u4ee5\u61c9\u7528\u66f4\u6539\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo service fail2ban restart\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7136\u5f8c\u5f9e\u53e6\u4e00\u90e8\u6a5f\u5668\u6216\u4f7f\u7528\u4e0d\u540c\u7684 IP \u9032\u884c\u6e2c\u8a66\uff0c\u5617\u8a66\u591a\u6b21\u5931\u6557\u767b\u9304\uff0c\u770b\u770b\u662f\u5426\u88ab\u5c01\u9396\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"6-\u67e5\u770b",children:"6. \u67e5\u770b"}),"\n",(0,s.jsx)(e.p,{children:"\u78ba\u4fdd\u5b9a\u671f\u6aa2\u67e5\u65e5\u8a8c\u6587\u4ef6\u548c\u66f4\u65b0\u898f\u5247\uff0c\u4ee5\u7372\u5f97\u6700\u4f73\u7684\u4fdd\u8b77\u6548\u679c\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo fail2ban-client status sshd\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,s.jsx)(e.p,{children:"\u6574\u500b\u904e\u7a0b\u53ea\u662f\u6b65\u9a5f\u7e41\u7463\uff0c\u4f46\u4e5f\u4e0d\u7b97\u8907\u96dc\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5e0c\u671b\u9019\u7bc7\u6307\u5357\u80fd\u5920\u5e6b\u52a9\u4f60\u9806\u5229\u5b8c\u6210\u76f8\u95dc\u8a2d\u5b9a\u3002"})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},61384:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/ban_1-aab89918ab460891239cb1e4effc9589.jpg"},65738:(n,e,l)=>{l.d(e,{A:()=>s});const s=l.p+"assets/images/0903-e5f8ba442b4f4ad7df17ee706b3e9ada.webp"},28453:(n,e,l)=>{l.d(e,{R:()=>r,x:()=>t});var s=l(96540);const i={},a=s.createContext(i);function r(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);