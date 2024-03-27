"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6541],{6777:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var s=l(4848),c=l(8453);const r={slug:"setup-nextcloud",title:"\u6253\u9020\u500b\u4eba\u79c1\u6709\u96f2\uff1a\u5f9e\u96f6\u958b\u59cb\u7684 Nextcloud \u642d\u5efa\u6559\u7a0b",authors:"Zephyr",tags:["Nextcloud","Docker","Ubuntu"]},i=void 0,o={permalink:"/setup-nextcloud",source:"@site/blog/2024-03-04-setup-nextcloud.md",title:"\u6253\u9020\u500b\u4eba\u79c1\u6709\u96f2\uff1a\u5f9e\u96f6\u958b\u59cb\u7684 Nextcloud \u642d\u5efa\u6559\u7a0b",description:"\u4e4b\u524d\u6211\u90fd\u628a\u6a94\u6848\u653e\u5728 Google Drive \u4e0a\uff0c\u4e0b\u8f09\u6a94\u6848\u7684\u6642\u5019\u6703\u900f\u904e wget \u6307\u4ee4\u4f86\u4e0b\u8f09\u3002",date:"2024-03-04T00:00:00.000Z",formattedDate:"2024\u5e743\u67084\u65e5",tags:[{label:"Nextcloud",permalink:"/tags/nextcloud"},{label:"Docker",permalink:"/tags/docker"},{label:"Ubuntu",permalink:"/tags/ubuntu"}],readingTime:8.475,hasTruncateMarker:!0,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"setup-nextcloud",title:"\u6253\u9020\u500b\u4eba\u79c1\u6709\u96f2\uff1a\u5f9e\u96f6\u958b\u59cb\u7684 Nextcloud \u642d\u5efa\u6559\u7a0b",authors:"Zephyr",tags:["Nextcloud","Docker","Ubuntu"]},unlisted:!1,nextItem:{title:"PyTorch OOM\uff1aList \u7684\u9677\u9631\u8207\u907f\u514d\u7b56\u7565",permalink:"/pytorch-training-out-of-memory"}},d={authorsImageUrls:[void 0]},t=[{value:"\u5b89\u88dd Nextcloud",id:"\u5b89\u88dd-nextcloud",level:2},{value:"\u8a2d\u5b9a Nextcloud All-in-One",id:"\u8a2d\u5b9a-nextcloud-all-in-one",level:2},{value:"\u8a2d\u5b9a\u7cfb\u7d71\u670d\u52d9",id:"\u8a2d\u5b9a\u7cfb\u7d71\u670d\u52d9",level:2},{value:"\u555f\u52d5 Nextcloud",id:"\u555f\u52d5-nextcloud",level:2},{value:"\u8a2d\u5b9a Nextcloud",id:"\u8a2d\u5b9a-nextcloud",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4e4b\u524d\u6211\u90fd\u628a\u6a94\u6848\u653e\u5728 Google Drive \u4e0a\uff0c\u4e0b\u8f09\u6a94\u6848\u7684\u6642\u5019\u6703\u900f\u904e wget \u6307\u4ee4\u4f86\u4e0b\u8f09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u76f4\u5230\u67d0\u4e00\u5929\uff0c\u539f\u672c\u7684\u4e0b\u8f09\u6307\u4ee4\u7a81\u7136\u5c31\u4e0d\u80fd\u7528\u4e86..."}),"\n",(0,s.jsx)(n.p,{children:"\u65e2\u7136\u5982\u6b64\uff0c\u90a3\u6211\u5011\u4f86\u8a66\u8a66\u770b Nextcloud\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u6211\u5011\u57fa\u65bc Ubuntu 22.04 \u4f86\u9032\u884c\u76f8\u95dc\u914d\u7f6e\u3002\u5728\u958b\u59cb\u4e4b\u524d\uff0c\u8acb\u4f60\u6e96\u5099\u597d\u4e00\u500b\u57df\u540d\uff0c\u4e26\u4e14\u628a\u9019\u500b\u57df\u540d\u6307\u5411\u4f60\u7684\u4f3a\u670d\u5668\u3002\u5982\u679c\u4e0d\u77e5\u9053\u8a72\u600e\u9ebc\u505a\uff0c\u8acb\u76f4\u63a5 Google \u641c\u5c0b\u300enamecheap \u600e\u9ebc\u7528\u300f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88dd-nextcloud",children:"\u5b89\u88dd Nextcloud"}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e00\u554f\uff1a\u70ba\u4ec0\u9ebc\u8981\u7528 Nextcloud\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6211\u60f3\u8981\u4e00\u500b\u79c1\u6709\u96f2\uff0c\u4e0d\u60f3\u8981\u628a\u6a94\u6848\u653e\u5728\u5225\u4eba\u7684\u4f3a\u670d\u5668\u4e0a\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e8c\u554f\uff1aNextcloud \u8ddf Owncloud \u6709\u4ec0\u9ebc\u4e0d\u4e00\u6a23\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Nextcloud \u662f\u7531 Owncloud \u7684\u958b\u767c\u8005\u5206\u5bb6\u51fa\u4f86\u7684\uff0c\u5169\u8005\u7684\u529f\u80fd\u5dee\u4e0d\u591a\uff0c\u4f46 Nextcloud \u7684\u958b\u767c\u901f\u5ea6\u6bd4\u8f03\u5feb\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e09\u554f\uff1aNextcloud \u8981\u600e\u9ebc\u5b89\u88dd\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9019\u500b\u554f\u984c\u6bd4\u8f03\u8907\u96dc\uff0c\u56e0\u70ba Nextcloud \u7684\u5b89\u88dd\u65b9\u5f0f\u6709\u5f88\u591a\u7a2e\uff0c\u800c\u4e14\u6bcf\u4e00\u7a2e\u90fd\u6709\u4e0d\u540c\u7684\u512a\u7f3a\u9ede\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u672c\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u552f\u4e00\u63a8\u85a6\u7684\u5b89\u88dd\u65b9\u5f0f\u662f\u4f7f\u7528 Docker\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8a2d\u5b9a-nextcloud-all-in-one",children:"\u8a2d\u5b9a Nextcloud All-in-One"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u53c3\u8003\u5b98\u65b9\u6587\u4ef6\uff1a",(0,s.jsx)(n.a,{href:"https://github.com/nextcloud/all-in-one",children:(0,s.jsx)(n.strong,{children:"Nextcloud All-in-One"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u78ba\u4fdd\u4f60\u5df2\u7d93\u5b89\u88dd\u4e86 Docker \u548c Docker Compose\u3002\u5982\u679c\u9084\u6c92\u6709\u5b8c\u6210\uff0c\u8acb Google \u641c\u5c0b \u300eDocker & Docker Compose \u5b89\u88dd\u65b9\u6cd5\u300f\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u8457\uff0c\u5efa\u7acb\u4e00\u500b NextCloud \u8cc7\u6599\u593e\uff0c\u7136\u5f8c\u5beb\u4e00\u500b Docker Compose \u7684\u8a2d\u5b9a\u6a94 ",(0,s.jsx)(n.code,{children:"docker-compose.yml"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir nextcloud\nvim nextcloud/docker-compose.yml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u628a\u4ee5\u4e0b\u7684\u5167\u5bb9\u8cbc\u5230 ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," \u88e1\u9762\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"services:\n  nextcloud-aio-mastercontainer:\n    image: nextcloud/all-in-one:latest\n    init: true\n    restart: always\n    container_name: nextcloud-aio-mastercontainer\n    volumes:\n      - nextcloud_aio_mastercontainer:/mnt/docker-aio-config\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    ports:\n      - 80:80\n      - 8080:8080\n      - 8443:8443\nvolumes:\n  nextcloud_aio_mastercontainer:\n    name: nextcloud_aio_mastercontainer\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7c21\u8981\u8aaa\u660e\u4e00\u4e0b\u4e0a\u9762\u7684\u6307\u4ee4\u5167\u5bb9\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--init"}),"\uff1a\u9078\u9805\u78ba\u4fdd\u6c38\u9060\u4e0d\u6703\u5efa\u7acb\u6bad\u5c4d\u884c\u7a0b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--name nextcloud-aio-mastercontainer"}),"\uff1a\u8a2d\u5b9a\u5bb9\u5668\u7684\u540d\u7a31\uff0c\u9019\u500b\u540d\u7a31\u4e0d\u5141\u8a31\u66f4\u6539\uff0c\u56e0\u70ba\u66f4\u6539\u5f8c\u53ef\u80fd\u6703\u5c0e\u81f4 mastercontainer \u66f4\u65b0\u5931\u6557\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--restart always"}),"\uff1a\u8a2d\u5b9a\u5bb9\u5668\u7684\u91cd\u555f\u7b56\u7565\u70ba\u59cb\u7d42\u96a8 Docker \u5b88\u8b77\u7a0b\u5e8f\u4e00\u8d77\u555f\u52d5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--publish 80:80"}),"\uff1a\u5c07\u5bb9\u5668\u768480\u7aef\u53e3\u767c\u4f48\u5230\u5bbf\u4e3b\u6a5f\u768480\u7aef\u53e3\uff0c\u7528\u65bc\u7372\u53d6 AIO \u63a5\u53e3\u7684\u6709\u6548\u8b49\u66f8\uff0c\u5982\u679c\u4e0d\u9700\u8981\u53ef\u4ee5\u79fb\u9664\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--publish 8080:8080"}),"\uff1a\u5c07\u5bb9\u5668\u7684 8080 \u7aef\u53e3\u767c\u4f48\u5230\u5bbf\u4e3b\u6a5f\u7684 8080 \u7aef\u53e3\uff0c\u6b64\u7aef\u53e3\u7528\u65bc AIO \u63a5\u53e3\uff0c\u9810\u8a2d\u4f7f\u7528\u81ea\u7c3d\u540d\u8b49\u66f8\u3002 \u5982\u679c8080\u7aef\u53e3\u5df2\u88ab\u4f54\u7528\uff0c\u53ef\u4ee5\u66f4\u6539\u5bbf\u4e3b\u6a5f\u7684\u7aef\u53e3\uff0c\u5982\uff1a",(0,s.jsx)(n.code,{children:"--publish 8081:8080"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--publish 8443:8443"}),"\uff1a\u5c07\u5bb9\u5668\u7684 8443 \u7aef\u53e3\u767c\u4f48\u5230\u5bbf\u4e3b\u6a5f\u76848443\u7aef\u53e3\uff0c\u5982\u679c\u516c\u958b\u5230\u7db2\u8def\uff0c\u53ef\u4ee5\u901a\u904e\u6b64\u7aef\u53e3\u8a2a\u554f AIO \u63a5\u53e3\u4e26\u7372\u53d6\u6709\u6548\u8b49\u66f8\uff0c\u5982\u679c\u4e0d\u9700\u8981\u53ef\u4ee5\u79fb\u9664\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config"}),"\uff1a\u8a2d\u5b9a mastercontainer \u5efa\u7acb\u7684\u6a94\u6848\u5c07\u5132\u5b58\u5728\u540d\u70ba nextcloud_aio_mastercontainer \u7684 docker \u78c1\u789f\u5340\u4e2d\uff0c\u6b64\u8a2d\u5b9a\u4e0d\u5141\u8a31\u8b8a\u66f4\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--volume /var/run/docker.sock:/var/run/docker.sock:ro"}),"\uff1a\u5c07 docker \u5957\u63a5\u5b57\u639b\u8f09\u5230\u5bb9\u5668\u5167\uff0c\u7528\u65bc\u555f\u52d5\u6240\u6709\u5176\u4ed6\u5bb9\u5668\u548c\u5176\u4ed6\u529f\u80fd\u3002 \u5728 Windows/macOS \u548c docker \u7121\u6839\u6a21\u5f0f\u4e0b\u9700\u8981\u8abf\u6574\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nextcloud/all-in-one:latest"}),"\uff1a\u6307\u5b9a\u4f7f\u7528\u7684 Docker \u5bb9\u5668\u6620\u50cf\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9084\u6709\u66f4\u591a\u8a73\u7d30\u7684\u8a2d\u5b9a\uff0c\u8acb\u53c3\u8003\u5b98\u65b9\u6587\u4ef6\uff1a",(0,s.jsx)(n.a,{href:"https://github.com/nextcloud/all-in-one/blob/main/compose.yaml",children:"compose.yaml"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8a2d\u5b9a\u7cfb\u7d71\u670d\u52d9",children:"\u8a2d\u5b9a\u7cfb\u7d71\u670d\u52d9"}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u6210\u4e86\u4e0a\u8ff0\u7684\u8a2d\u5b9a\u4e4b\u5f8c\uff0c\u518d\u4f86\u662f\u8a2d\u5b9a\u7cfb\u7d71\u670d\u52d9\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/systemd/system/nexcloud.service\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8cbc\u4e0a\u4ee5\u4e0b\u7684\u5167\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[Unit]\nDescription=NextCloud Docker Compose\nRequires=docker.service\nAfter=docker.service\n\n[Service]\nWorkingDirectory=/home/[YourName]/nextcloud\nExecStart=/usr/bin/docker compose up --remove-orphans\nExecStop=/usr/bin/docker compose down\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u555f\u52d5-nextcloud",children:"\u555f\u52d5 Nextcloud"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable nextcloud\nsudo systemctl start nextcloud\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8a2d\u5b9a-nextcloud",children:"\u8a2d\u5b9a Nextcloud"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8a2a\u554f Nextcloud AIO \u4ecb\u9762"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728\u521d\u59cb\u555f\u52d5\u5f8c\uff0c\u4f60\u53ef\u4ee5\u901a\u904e\u8a2a\u554f ",(0,s.jsx)(n.code,{children:"https://ip.address.of.this.server:8080"})," \u4f86\u958b\u555f Nextcloud AIO \u4ecb\u9762\uff0c\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"ip.address.of.this.server"})," \u61c9\u8a72\u88ab\u66ff\u63db\u70ba\u90e8\u7f72 Nextcloud \u670d\u52d9\u7684\u4f3a\u670d\u5668\u7684 IP \u5730\u5740\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u91cd\u8981\u7684\u662f\u4f7f\u7528 IP \u5730\u5740\u800c\u975e\u57df\u540d\u4f86\u8a2a\u554f\u9019\u500b\u9023\u63a5\u57e0\uff088080\uff09\uff0c\u56e0\u70ba HTTP Strict Transport Security\uff08HSTS\uff09\u53ef\u80fd\u6703\u963b\u6b62\u4f7f\u7528\u57df\u540d\u8a2a\u554f\u3002HSTS \u662f\u4e00\u7a2e Web \u5b89\u5168\u653f\u7b56\u6a5f\u5236\uff0c\u5b83\u8981\u6c42\u7db2\u7d61\u700f\u89bd\u5668\u50c5\u901a\u904e\u5b89\u5168\u7684 HTTPS \u9023\u63a5\u8207\u7db2\u7ad9\u5efa\u7acb\u9023\u63a5\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u81ea\u7c3d\u540d\u8b49\u66f8\u7684\u4f7f\u7528"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8a2a\u554f 8080 \u7aef\u53e3\u6642\uff0c\u53ef\u80fd\u6703\u4f7f\u7528\u81ea\u7c3d\u540d\u8b49\u66f8\u4f86\u78ba\u4fdd\u901a\u4fe1\u7684\u5b89\u5168\u6027\u3002\u81ea\u7c3d\u540d\u8b49\u66f8\u4e0d\u662f\u7531\u53d7\u4fe1\u4efb\u7684\u8b49\u66f8\u6a5f\u69cb\uff08CA\uff09\u767c\u884c\u7684\uff0c\u56e0\u6b64\u700f\u89bd\u5668\u53ef\u80fd\u6703\u8b66\u544a\u9019\u500b\u8b49\u66f8\u4e0d\u53ef\u4fe1\u3002\u4f60\u9700\u8981\u5728\u700f\u89bd\u5668\u4e2d\u624b\u52d5\u63a5\u53d7\u9019\u500b\u8b49\u66f8\uff0c\u4ee5\u4fbf\u7e7c\u7e8c\u8a2a\u554f\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7372\u53d6\u6709\u6548\u8b49\u66f8\u7684\u81ea\u52d5\u5316\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u7684\u9632\u706b\u7246\u6216\u8def\u7531\u5668\u5df2\u958b\u653e\u6216\u8f49\u767c\u4e86 80\u548c 8443 \u7aef\u53e3\uff0c\u4e26\u4e14\u4f60\u5df2\u7d93\u5c07\u4e00\u500b\u57df\u540d\u6307\u5411\u4f60\u7684\u4f3a\u670d\u5668\uff0c\u90a3\u9ebc\u4f60\u53ef\u4ee5\u901a\u904e\u8a2a\u554f",(0,s.jsx)(n.code,{children:"https://your-domain-that-points-to-this-server.tld:8443"}),"\u4f86\u81ea\u52d5\u7372\u53d6\u4e00\u500b\u7531\u53d7\u4fe1\u4efbCA\u767c\u884c\u7684\u6709\u6548\u8b49\u66f8\uff0c\u4ee5\u589e\u52a0\u5b89\u5168\u6027\u548c\u4fbf\u5229\u6027\u3002\u9019\u88e1\u7684",(0,s.jsx)(n.code,{children:"your-domain-that-points-to-this-server.tld"}),"\u61c9\u8a72\u66ff\u63db\u70ba\u4f60\u6307\u5411\u4f3a\u670d\u5668\u7684\u5be6\u969b\u57df\u540d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nextcloud Talk \u7684\u9023\u63a5\u57e0\u958b\u653e"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u70ba\u4e86\u78ba\u4fdd Nextcloud Talk \u529f\u80fd\uff08\u5982\u8996\u8a0a\u901a\u8a71\u548c\u8a0a\u606f\uff09\u80fd\u5920\u6b63\u5e38\u904b\u4f5c\uff0c\u7279\u5225\u63d0\u5230\u4e86\u9700\u8981\u5728\u9632\u706b\u7246\u6216\u8def\u7531\u5668\u4e2d\u70baTalk \u5bb9\u5668\u958b\u653e 3478/TCP \u548c 3478/UDP \u9023\u63a5\u57e0\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u9019\u4e9b\u9023\u63a5\u57e0\u5c0d\u65bc\u8655\u7406NAT\u7a7f\u8d8a\u81f3\u95dc\u91cd\u8981\uff0cNAT\u7a7f\u8d8a\u662f\u4e00\u7a2e\u6280\u8853\uff0c\u5141\u8a31\u7db2\u7d61\u5167\u5916\u7684\u88dd\u7f6e\u76f4\u63a5\u9023\u63a5\uff0c\u9019\u5c0d\u65bc\u5be6\u6642\u901a\u4fe1\u61c9\u7528\uff08\u5982\u8996\u8a0a\u901a\u8a71\uff09\u662f\u5fc5\u9700\u7684\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5e38\u898b\u554f\u984c\uff1a"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5bb6\u7528\u7db2\u8def\u662f\u52d5\u614b IP\uff0c\u600e\u9ebc\u6307\u5411\u57df\u540d\uff1f"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6211\u6709\u8a66\u904e\u4e00\u4e9b No-IP \u7684\u65b9\u6cd5\uff0c\u5f8c\u4f86\u89ba\u5f97\u76f4\u63a5\u53bb\u4e2d\u83ef\u96fb\u4fe1\u7533\u8acb\u56fa\u5b9a IP \u6700\u5feb\u6700\u65b9\u4fbf\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6211\u4e0d\u60f3\u7528 Docker\uff0c\u6709\u6c92\u6709\u5176\u4ed6\u65b9\u6cd5\uff1f"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6709\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5b89\u88dd Nextcloud\uff0c\u4f60\u9700\u8981\u81ea\u5df1\u4f86\u8655\u7406\u6240\u6709\u7684\u4f9d\u8cf4\u554f\u984c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u76f8\u4fe1\u6211\uff0c\u5f88\u591a\u5751\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u70ba\u4ec0\u9ebc\u67b6\u597d\u4e86\u537b\u9023\u4e0d\u4e0a\uff1f"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f60\u7684\u9632\u706b\u7246\u64cb\u4f4f\u4e86\uff0c\u5982\u679c\u9632\u706b\u7246\u6c92\u958b\uff0c\u90a3\u5c31\u662f\u4f60\u7684\u8def\u7531\u5668\u64cb\u4f4f\u4e86\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"\u8f38\u5165\u8a2d\u5b9a\u7db2\u5740\uff0c\u4f60\u53ef\u4ee5\u9032\u5165\u4e00\u500b\u6bd4\u5f8c\u53f0\u9084\u8981\u5f8c\u53f0\u7684\u5730\u65b9\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"login_1",src:l(2339).A+"",width:"1224",height:"824"})}),"\n",(0,s.jsx)(n.p,{children:"\u5230\u9019\u4e00\u6b65\uff0c\u4f60\u53ef\u80fd\u6703\u9a5a\u6050\u5730\u767c\u73fe\uff1a\u300e\u6211\u6c92\u6709\u5bc6\u78bc\u554a\uff01\u300f"}),"\n",(0,s.jsx)(n.p,{children:"\u5bc6\u78bc\u6703\u5728\u4f60\u7b2c\u4e00\u6b21\u767b\u5165\u7684\u6642\u5019\u7d66\u4f60\uff0c\u4f46\u901a\u5e38\u4f60\u6703\u932f\u904e\u4ed6\u3002\u9019\u6642\u5019\u4f60\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u7684\u6307\u4ee4\u4f86\u627e\u5230\u5bc6\u78bc\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo grep password /var/lib/docker/volumes/nextcloud_aio_mastercontainer/_data/data/configuration.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u767b\u5165\u4e4b\u5f8c\uff0c\u4f60\u6703\u770b\u5230\u4e00\u500b\u8a2d\u5b9a\u756b\u9762\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"login_2",src:l(2628).A+"",width:"1224",height:"696"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u770b\u5230\u7684\u9019\u500b\u756b\u9762\u5df2\u7d93\u662f\u6211\u8a2d\u5b9a\u5b8c\u6210\u7684\u7d50\u679c\uff0c\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u767b\u5165\uff0c\u5728\u9019\u88e1\uff0c\u9996\u5148\u4f60\u8981\u5148\u8f38\u5165\u4f60\u4e4b\u524d\u6e96\u5099\u597d\u7684\u7db2\u57df\uff0c\u63a5\u8457\u7cfb\u7d71\u6703\u8981\u4f60\u518d\u6b21\u4e0b\u8f09\u4e00\u4e9b docker image\uff0c\u4e0b\u8f09\u5b8c\u6210\u5f8c\uff0c\u5b83\u6703\u5e6b\u4f60\u555f\u52d5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u555f\u52d5\u4e4b\u5f8c\uff0c\u4f60\u5c31\u53ef\u4ee5\u958b\u59cb\u4f7f\u7528 Nextcloud \u4e86\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,s.jsx)(n.p,{children:"\u5b8c\u6210\u4e0a\u9762\u7684\u6b65\u9a5f\u4e4b\u5f8c\uff0c\u5728\u7db2\u5740\u5217\u4e2d\u8f38\u5165\u4f60\u7684\u7db2\u57df\u5f8c\uff0c\u4f60\u6703\u770b\u5230\u4e00\u500b\u5f88\u597d\u770b\u7684\u4ecb\u9762\uff0c\u9019\u500b\u4ecb\u9762\u5c31\u662f\u4f60\u7684\u79c1\u6709\u96f2\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"login_3",src:l(6961).A+"",width:"1224",height:"708"})}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u500b\u4ecb\u9762\u6709\u5f88\u591a\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u900f\u904e\u9019\u500b\u4ecb\u9762\u4f86\u7ba1\u7406\u4f60\u7684\u6a94\u6848\uff0c\u4e5f\u53ef\u4ee5\u900f\u904e\u9019\u500b\u4ecb\u9762\u4f86\u5206\u4eab\u6a94\u6848\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u53ef\u4ee5\u5728\u624b\u6a5f\u4e0a\u4e0b\u8f09 Nextcloud \u7684 App\uff0c\u7136\u5f8c\u4f60\u53ef\u4ee5\u76f4\u63a5\u900f\u904e\u624b\u6a5f\u4f86\u7ba1\u7406\u4f60\u7684\u6a94\u6848\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4e86 Nextcloud\uff0c\u4f60\u5c31\u4e0d\u9700\u8981\u518d\u64d4\u5fc3 Google Drive \u7684\u5bb9\u91cf\u9650\u5236\u4e86\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},2339:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/login_1-edb2b961d180558b75e337c1083a7202.jpg"},2628:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/login_2-6e2d377746b11b87dcd476a7db06ecb2.jpg"},6961:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/login_3-b50e0659125bbb3af48172e41836548d.jpg"},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>o});var s=l(6540);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);