"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6594],{14312:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=n(74848),c=n(28453);const i={slug:"ubuntu-docker-pypiserver",title:"\u642d\u5efa PyPiServer \u8a18\u9304",authors:"Zephyr",tags:["docker","pypiserver"],image:"/img/2023/0913.webp",description:"\u8a18\u9304 Ubuntu \u4e0a\u642d\u5efa PyPiServer \u7684\u904e\u7a0b\u3002"},l=void 0,d={permalink:"/blog/ubuntu-docker-pypiserver",source:"@site/blog/2023/09-13-ubuntu-docker-pypiserver/index.md",title:"\u642d\u5efa PyPiServer \u8a18\u9304",description:"\u8a18\u9304 Ubuntu \u4e0a\u642d\u5efa PyPiServer \u7684\u904e\u7a0b\u3002",date:"2023-09-13T00:00:00.000Z",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"pypiserver",permalink:"/blog/tags/pypiserver"}],readingTime:7.53,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"ubuntu-docker-pypiserver",title:"\u642d\u5efa PyPiServer \u8a18\u9304",authors:"Zephyr",tags:["docker","pypiserver"],image:"/img/2023/0913.webp",description:"\u8a18\u9304 Ubuntu \u4e0a\u642d\u5efa PyPiServer \u7684\u904e\u7a0b\u3002"},unlisted:!1,prevItem:{title:"\u8a18\u9304\u8207\u6392\u67e5\u6a21\u578b\u8a13\u7df4\u74b0\u5883\u554f\u984c",permalink:"/blog/python-env-info-collector"},nextItem:{title:"\u5728 Ubuntu \u4e0a\u8a2d\u5b9a SSH \u4f3a\u670d\u5668",permalink:"/blog/ubuntu-install-ssh"}},p={authorsImageUrls:[void 0]},o=[{value:"1. \u62c9\u53d6 pypiserver \u7684 Docker \u6620\u50cf",id:"1-\u62c9\u53d6-pypiserver-\u7684-docker-\u6620\u50cf",level:2},{value:"2. \u5275\u5efa\u4e00\u500b\u76ee\u9304\u4f86\u5b58\u5132 Python \u5305",id:"2-\u5275\u5efa\u4e00\u500b\u76ee\u9304\u4f86\u5b58\u5132-python-\u5305",level:2},{value:"3. \u8a2d\u5b9a htpasswd",id:"3-\u8a2d\u5b9a-htpasswd",level:2},{value:"4. \u5c07 pypiserver \u639b\u8f09\u70ba\u80cc\u666f\u670d\u52d9",id:"4-\u5c07-pypiserver-\u639b\u8f09\u70ba\u80cc\u666f\u670d\u52d9",level:2},{value:"4.1 \u5b89\u88dd Docker Compose",id:"41-\u5b89\u88dd-docker-compose",level:3},{value:"4.2 \u5275\u5efa\u6587\u4ef6",id:"42-\u5275\u5efa\u6587\u4ef6",level:3},{value:"4.3 \u5275\u5efa Systemd \u670d\u52d9",id:"43-\u5275\u5efa-systemd-\u670d\u52d9",level:3},{value:"4.4 \u555f\u52d5 pypiserver \u670d\u52d9",id:"44-\u555f\u52d5-pypiserver-\u670d\u52d9",level:3},{value:"5. \u67e5\u770b\u72c0\u614b",id:"5-\u67e5\u770b\u72c0\u614b",level:2},{value:"6. \u4f7f\u7528 pypiserver",id:"6-\u4f7f\u7528-pypiserver",level:2},{value:"6.1 \u4e0a\u50b3\u5957\u4ef6",id:"61-\u4e0a\u50b3\u5957\u4ef6",level:3},{value:"6.2 \u5b89\u88dd\u5957\u4ef6",id:"62-\u5b89\u88dd\u5957\u4ef6",level:3},{value:"6.3 \u4f7f\u7528\u57fa\u672c\u8a8d\u8b49",id:"63-\u4f7f\u7528\u57fa\u672c\u8a8d\u8b49",level:3},{value:"6.4 \u70ba\u9577\u671f\u4f7f\u7528\u8a2d\u5b9a pip.conf",id:"64-\u70ba\u9577\u671f\u4f7f\u7528\u8a2d\u5b9a-pipconf",level:3},{value:"7. \u7d50\u8a9e",id:"7-\u7d50\u8a9e",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("figure",{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.img,{alt:"title",src:n(68311).A+"",width:"1024",height:"1024"}),"\n",(0,r.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.p,{children:"\u96a8\u8457 Python \u793e\u7fa4\u7684\u6301\u7e8c\u767c\u5c55\uff0c\u8a31\u591a\u958b\u767c\u8005\u548c\u5718\u968a\u9078\u64c7\u5efa\u7acb\u81ea\u5df1\u7684\u79c1\u6709 Python \u5305\u7d22\u5f15\u4f3a\u670d\u5668\uff0c\u4f86\u5132\u5b58\u548c\u7ba1\u7406\u81ea\u5bb6\u7684 Python \u5957\u4ef6\u3002\u9019\u4e0d\u50c5\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u7248\u672c\u63a7\u5236\uff0c\u4e5f\u78ba\u4fdd\u4e86\u8edf\u9ad4\u5305\u7684\u5b89\u5168\u6027\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u5011\u7528 Docker \u4f86\u5efa\u7acb\u4e00\u500b PyPi Server\uff0c\u4e26\u4e14\u5728 Ubuntu \u4e0a\u904b\u884c\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u6211\u5011\u5047\u8a2d\u4f60\u5df2\u7d93\u5728 Ubuntu \u4e0a\u5b89\u88dd\u4e86 Docker\uff0c\u4e26\u4e14\u5df2\u7d93\u719f\u6089\u4e86 Docker \u7684\u57fa\u672c\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"1-\u62c9\u53d6-pypiserver-\u7684-docker-\u6620\u50cf",children:"1. \u62c9\u53d6 pypiserver \u7684 Docker \u6620\u50cf"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"docker pull pypiserver/pypiserver:latest\n"})}),"\n",(0,r.jsx)(s.h2,{id:"2-\u5275\u5efa\u4e00\u500b\u76ee\u9304\u4f86\u5b58\u5132-python-\u5305",children:"2. \u5275\u5efa\u4e00\u500b\u76ee\u9304\u4f86\u5b58\u5132 Python \u5305"}),"\n",(0,r.jsx)(s.p,{children:"\u4e0d\u56c9\u5506\uff0c\u6211\u5011\u76f4\u63a5\u5728\u5bb6\u76ee\u9304\u4e0b\u5275\u5efa\u4e00\u500b\u76ee\u9304\u4f86\u5b58\u5132 Python \u5305\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"mkdir ~/packages\n"})}),"\n",(0,r.jsx)(s.h2,{id:"3-\u8a2d\u5b9a-htpasswd",children:"3. \u8a2d\u5b9a htpasswd"}),"\n",(0,r.jsx)(s.p,{children:"htpasswd \u662f\u4e00\u7a2e\u7528\u65bc\u5b58\u5132\u7528\u6236\u540d\u548c\u5bc6\u78bc\uff08\u7d93\u5e38\u7528\u65bc\u57fa\u672c HTTP \u8eab\u4efd\u9a57\u8b49\uff09\u7684\u6587\u4ef6\u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(s.p,{children:"pypiserver \u6703\u4f7f\u7528\u6b64\u6587\u4ef6\u4f86\u9a57\u8b49\u8a66\u5716\u4e0a\u50b3\u6216\u4e0b\u8f09\u5957\u4ef6\u7684\u7528\u6236\u3002\u9019\u662f\u4e00\u7a2e\u7c21\u55ae\u4f46\u6709\u6548\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u589e\u5f37 pypiserver \u7684\u5b89\u5168\u6027\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u8981\u5275\u5efa\u4e00\u500b ",(0,r.jsx)(s.code,{children:".htpasswd"})," \u6587\u4ef6\uff0c\u4f60\u9700\u8981 ",(0,r.jsx)(s.code,{children:"apache2-utils"})," \u5957\u4ef6\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo apt install apache2-utils\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u7136\u5f8c\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5275\u5efa\u4e00\u500b\u65b0\u7684 .htpasswd \u6587\u4ef6\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"htpasswd -c ~/.htpasswd [username]\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5b83\u6703\u63d0\u793a\u4f60\u8f38\u5165 ",(0,r.jsx)(s.code,{children:"username"})," \u7684\u5bc6\u78bc\u3002\u8f38\u5165\u5bc6\u78bc\u5f8c\uff0c",(0,r.jsx)(s.code,{children:".htpasswd"})," \u6587\u4ef6\u6703\u5728\u4f60\u7684\u5bb6\u76ee\u9304\u4e0b\u5275\u5efa\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u9019\u6642\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u63d0\u5230\u7684 ",(0,r.jsx)(s.code,{children:"docker run"})," \u547d\u4ee4\u4f86\u904b\u884c ",(0,r.jsx)(s.code,{children:"pypiserver"}),"\uff0c\u4e26\u4e14\u4f7f\u7528\u4f60\u525b\u525b\u5efa\u7acb\u7684 ",(0,r.jsx)(s.code,{children:".htpasswd"})," \u6587\u4ef6\u9032\u884c\u8eab\u4efd\u9a57\u8b49\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"4-\u5c07-pypiserver-\u639b\u8f09\u70ba\u80cc\u666f\u670d\u52d9",children:"4. \u5c07 pypiserver \u639b\u8f09\u70ba\u80cc\u666f\u670d\u52d9"}),"\n",(0,r.jsx)(s.p,{children:"\u8981\u5c07 Docker \u5bb9\u5668\u4f5c\u70ba\u80cc\u666f\u670d\u52d9\u904b\u884c\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 Docker Compose \u548c Systemd\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"41-\u5b89\u88dd-docker-compose",children:"4.1 \u5b89\u88dd Docker Compose"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u4f60\u9084\u6c92\u6709\u5b89\u88dd Docker Compose\uff0c\u9996\u5148\u9032\u884c\u5b89\u88dd\uff0c\u8acb\u53c3\u8003\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.docker.com/compose/install/",children:(0,r.jsx)(s.strong,{children:"\u5b89\u88dd Docker Compose \u7684\u5b98\u65b9\u6587\u4ef6"})})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u8981\u6ce8\u610f\u7684\u662f Docker Compose \u6700\u8fd1\u6709\u8f03\u5927\u898f\u6a21\u7684\u66f4\u65b0\uff0c\u5f88\u591a\u4f7f\u7528\u65b9\u5f0f\u8ddf\u4e4b\u524d\u4e0d\u4e00\u6a23\uff0c\u6700\u660e\u986f\u7684\u5c31\u662f\u539f\u672c\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"docker-compose"})," \u7684\u6307\u4ee4\uff0c\u73fe\u5728\u90fd\u6539\u6210 ",(0,r.jsx)(s.code,{children:"docker compose"})," \u4e86\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u6211\u5011\u6839\u64da\u5b98\u65b9\u6587\u4ef6\uff0c\u628a\u5b89\u88dd\u5167\u5bb9\u5beb\u5728\u4e0b\u9762\uff1a"}),"\n",(0,r.jsx)(s.p,{children:"\u5b89\u88dd\u6700\u65b0\u7248\u672c\u7684 Docker Compose\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo apt update\nsudo apt install docker-compose-plugin\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u6aa2\u67e5 Docker Compose \u662f\u5426\u6b63\u78ba\u5b89\u88dd\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"docker compose version\n"})}),"\n",(0,r.jsx)(s.h3,{id:"42-\u5275\u5efa\u6587\u4ef6",children:"4.2 \u5275\u5efa\u6587\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["\u627e\u500b\u5730\u65b9\u5275\u5efa ",(0,r.jsx)(s.code,{children:"docker-compose.yml"}),"\uff0c\u4e26\u586b\u5165\u4ee5\u4e0b\u5167\u5bb9\uff1a"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u53c3\u8003 ",(0,r.jsx)(s.code,{children:"pypiserver"})," \u63d0\u4f9b\u7684\u7bc4\u672c\uff1a",(0,r.jsx)(s.a,{href:"https://github.com/pypiserver/pypiserver/blob/master/docker-compose.yml",children:(0,r.jsx)(s.strong,{children:"docker-compose.yml"})})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'version: "3.3"\nservices:\n  pypiserver:\n    image: pypiserver/pypiserver:latest\n    volumes:\n      - /home/[\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31]/auth:/data/auth\n      - /home/[\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31]/packages:/data/packages\n    command: run -P /data/auth/.htpasswd -a update,download,list /data/packages\n    ports:\n      - "8080:8080"\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u8acb\u5c07\u4e0a\u8ff0\u7684 [\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31] \u66ff\u63db\u70ba\u4f60\u7684\u5be6\u969b\u4f7f\u7528\u8005\u540d\u7a31\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u4f60\u53ef\u4ee5\u5728\u9019\u88e1\u4fee\u6539\u5916\u90e8 port \u6620\u5c04\u503c\uff0c\u4f8b\u5982\u6539\u6210\uff1a\u201d18080:8080\u2033\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"43-\u5275\u5efa-systemd-\u670d\u52d9",children:"4.3 \u5275\u5efa Systemd \u670d\u52d9"}),"\n",(0,r.jsx)(s.p,{children:"\u5efa\u7acb\u4e00\u500b\u8a2d\u5b9a\u6a94\u6848\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo vim /etc/systemd/system/pypiserver.service\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u6dfb\u52a0\u4ee5\u4e0b\u5167\u5bb9\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"[Unit]\nDescription=PypiServer Docker Compose\nRequires=docker.service\nAfter=docker.service\n\n[Service]\nWorkingDirectory=/path/to/your/docker-compose/directory\nExecStart=/usr/bin/docker compose up --remove-orphans\nExecStop=/usr/bin/docker compose down\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u8acb\u78ba\u4fdd\u5c07 ",(0,r.jsx)(s.code,{children:"/path/to/your/docker-compose/directory"})," \u66ff\u63db\u70ba ",(0,r.jsx)(s.code,{children:"docker-compose.yml"})," \u6587\u4ef6\u7684\u5be6\u969b\u8def\u5f91\uff0c\u5beb\u5230\u8def\u5f91\u5c31\u53ef\u4ee5\uff0c\u4e0d\u7528\u6a94\u6848\u540d\u7a31\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u8acb\u78ba\u4fdd\u4f60\u7684 Docker \u8def\u5f91\u6b63\u78ba\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"which docker"})," \u4f86\u78ba\u8a8d\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u6211\u5011\u57fa\u65bc\u65b0\u7248\u7684 ",(0,r.jsx)(s.code,{children:"docker compose"})," \u6307\u4ee4\uff0c\u800c\u4e0d\u662f\u7528 ",(0,r.jsx)(s.code,{children:"docker-compose"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"44-\u555f\u52d5-pypiserver-\u670d\u52d9",children:"4.4 \u555f\u52d5 pypiserver \u670d\u52d9"}),"\n",(0,r.jsx)(s.p,{children:"\u544a\u77e5 systemd \u91cd\u65b0\u8b80\u53d6\u65b0\u7684\u670d\u52d9\u8a2d\u5b9a\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u555f\u52d5\u670d\u52d9\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl start pypiserver.service\nsudo systemctl enable pypiserver.service\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u9019\u6a23\u4e00\u4f86\uff0c",(0,r.jsx)(s.code,{children:"pypiserver"})," \u5c31\u6703\u4f5c\u70ba\u4e00\u500b ",(0,r.jsx)(s.code,{children:"systemd"})," \u670d\u52d9\u904b\u884c\uff0c\u4e26\u4e14\u6bcf\u6b21\u4e3b\u6a5f\u555f\u52d5\u6642\u5b83\u90fd\u6703\u81ea\u52d5\u555f\u52d5\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"5-\u67e5\u770b\u72c0\u614b",children:"5. \u67e5\u770b\u72c0\u614b"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u4f60\u60f3\u67e5\u770b\u670d\u52d9\u7684\u7576\u524d\u72c0\u614b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl status pypiserver.service\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u9019\u5c07\u6703\u986f\u793a ",(0,r.jsx)(s.code,{children:"pypiserver"})," \u670d\u52d9\u7684\u7576\u524d\u72c0\u614b\uff0c\u5305\u62ec\u662f\u5426\u6b63\u5728\u904b\u884c\uff0c\u4ee5\u53ca\u6700\u8fd1\u7684\u65e5\u8a8c\u8f38\u51fa\u3002"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"pypiserver status",src:n(87608).A+"",width:"2048",height:"707"})}),"\n",(0,r.jsx)(s.h2,{id:"6-\u4f7f\u7528-pypiserver",children:"6. \u4f7f\u7528 pypiserver"}),"\n",(0,r.jsxs)(s.p,{children:["\u73fe\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"pip"})," \u4f86\u5b89\u88dd\u548c\u4e0a\u50b3\u5957\u4ef6\u4e86\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"61-\u4e0a\u50b3\u5957\u4ef6",children:"6.1 \u4e0a\u50b3\u5957\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["\u9996\u5148\uff0c\u4f60\u9700\u8981\u6709\u4e00\u500b\u5df2\u7d93\u6253\u5305\u7684 Python \u8edf\u9ad4\u5305\uff08\u901a\u5e38\u662f .whl \u6216 .tar.gz \u683c\u5f0f\uff09\u3002\u5047\u8a2d\u4f60\u5df2\u6709\u4e00\u500b\u540d\u70ba ",(0,r.jsx)(s.code,{children:"example_package-0.1-py3-none-any.whl"})," \u7684\u5305\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u8981\u4e0a\u50b3\u8edf\u9ad4\u5305\u5230\u4f60\u7684 ",(0,r.jsx)(s.code,{children:"pypiserver"}),"\uff0c\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"twine"}),"\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install twine\ntwine upload --repository-url http://localhost:8080/ example_package-0.1-py3-none-any.whl\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u4f60\u9700\u8981\u78ba\u4fdd localhost:8080 \u662f\u4f60\u7684 pypiserver \u670d\u52d9\u7684\u5730\u5740\u548c\u7aef\u53e3\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"62-\u5b89\u88dd\u5957\u4ef6",children:"6.2 \u5b89\u88dd\u5957\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["\u8981\u5b89\u88dd\u5957\u4ef6\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"pip"}),"\uff0c\u4e26\u4e14\u6307\u5b9a\u4f60\u7684 ",(0,r.jsx)(s.code,{children:"pypiserver"})," \u670d\u52d9\u7684\u5730\u5740\u548c\u7aef\u53e3\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install --index-url http://localhost:8080/ example_package\n"})}),"\n",(0,r.jsx)(s.h3,{id:"63-\u4f7f\u7528\u57fa\u672c\u8a8d\u8b49",children:"6.3 \u4f7f\u7528\u57fa\u672c\u8a8d\u8b49"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u4f60\u7684 pypiserver \u8a2d\u7f6e\u4e86\u57fa\u672c\u8a8d\u8b49\uff08\u53ef\u80fd\u6703\u70ba\u4e86\u5b89\u5168\u539f\u56e0\u9019\u9ebc\u505a\uff09\uff0c\u4f60\u5728\u4e0a\u50b3\u6216\u4e0b\u8f09\u6642\u9700\u8981\u63d0\u4f9b\u8a8d\u8b49\u8cc7\u8a0a\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u4e0a\u50b3\u5957\u4ef6\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"twine upload --repository-url http://localhost:8080/ --username [username] --password [password] example_package-0.1-py3-none-any.whl\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5b89\u88dd\u5957\u4ef6\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install --index-url http://[username]:[password]@localhost:8080/ example_package\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"64-\u70ba\u9577\u671f\u4f7f\u7528\u8a2d\u5b9a-pipconf",children:"6.4 \u70ba\u9577\u671f\u4f7f\u7528\u8a2d\u5b9a pip.conf"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u7d93\u5e38\u5f9e\u6b64\u4f3a\u670d\u5668\u5b89\u88dd\u5957\u4ef6\uff0c\u4f60\u53ef\u80fd\u4e0d\u60f3\u6bcf\u6b21\u90fd\u5728 ",(0,r.jsx)(s.code,{children:"pip install"})," \u6642\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"--index-url"}),"\u3002\u6b64\u6642\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,r.jsx)(s.code,{children:"pip.conf"})," \u4e2d\u8a2d\u5b9a\u9810\u8a2d\u7684\u5305\u7d22\u5f15\u6e90\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u9996\u5148\uff0c\u627e\u5230\u6216\u5275\u5efa ",(0,r.jsx)(s.code,{children:"pip.conf"})," \u6587\u4ef6\uff0c\u4ee5\u4e0b\u662f\u6309\u512a\u5148\u7d1a\u9806\u5e8f\u53ef\u80fd\u5b58\u5728\u65bc\u4f60\u6a5f\u5668\u4e0a\u7684\u6587\u4ef6\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u512a\u5148\u7d1a 1: \u7ad9\u9ede\u7d1a\u5225\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"/home/[\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31]/.pyenv/versions/3.8.18/envs/main/pip.conf"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u512a\u5148\u7d1a 2: \u4f7f\u7528\u8005\u7d1a\u5225\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"/home/[\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31]/.pip/pip.conf"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"/home/[\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31]/.config/pip/pip.conf"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u512a\u5148\u7d1a 3: \u5168\u5c40\u7d1a\u5225\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"/etc/pip.conf"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"/etc/xdg/pip/pip.conf"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u6240\u4ee5\u8a18\u5f97\u8981\u91d0\u6e05\u4e00\u4e0b\uff0c\u7576\u524d\u7684 python \u74b0\u5883\u6703\u4f7f\u7528\u54ea\u4e00\u4efd\u6a94\u6848\uff0c\u4e26\u627e\u5230\u8a72\u6a94\u6848\u5f8c\u52a0\u5165\u4ee5\u4e0b\u5167\u5bb9\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"[global]\nindex-url = http://[\u63d0\u4f9b\u670d\u52d9\u7684\u4e3b\u6a5fIP\u4f4d\u7f6e]:8080/\ntrusted-host = [\u63d0\u4f9b\u670d\u52d9\u7684\u4e3b\u6a5fIP\u4f4d\u7f6e]\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u518d\u6b21\uff0c\u8acb\u78ba\u4fdd\u66ff\u63db ",(0,r.jsx)(s.code,{children:"[\u63d0\u4f9b\u670d\u52d9\u7684\u4e3b\u6a5fIP\u4f4d\u7f6e]:8080"})," \u70ba\u4f60 ",(0,r.jsx)(s.code,{children:"pypiserver"})," \u7684\u6b63\u78ba\u5730\u5740\u548c\u7aef\u53e3\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u6b64\u5f8c\uff0c\u7576\u4f60\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"pip install [package_name]"}),"\uff0c",(0,r.jsx)(s.code,{children:"pip"})," \u6703\u81ea\u52d5\u4f7f\u7528\u8a2d\u5b9a\u5728 ",(0,r.jsx)(s.code,{children:"pip.conf"})," \u7684\u4f3a\u670d\u5668\u5730\u5740\u4f5c\u70ba\u5957\u4ef6\u6e90\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"7-\u7d50\u8a9e",children:"7. \u7d50\u8a9e"}),"\n",(0,r.jsx)(s.p,{children:"\u73fe\u5728\uff0c\u4f60\u5df2\u7d93\u6210\u529f\u5730\u8a2d\u7acb\u4e86\u81ea\u5df1\u7684\u79c1\u6709 PyPI \u4f3a\u670d\u5668\uff0c\u4e26\u5b78\u6703\u4e86\u5982\u4f55\u4e0a\u50b3\u548c\u4e0b\u8f09\u5957\u4ef6\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u900f\u904e ",(0,r.jsx)(s.code,{children:"pypiserver"}),"\uff0c\u4f60\u4e0d\u50c5\u80fd\u5920\u66f4\u6709\u6548\u5730\u7ba1\u7406\u81ea\u5df1\u7684 Python \u5957\u4ef6\uff0c\u540c\u6642\u4e5f\u80fd\u78ba\u4fdd\u4f60\u7684\u5957\u4ef6\u5728\u4e00\u500b\u53d7\u4fdd\u8b77\u7684\u74b0\u5883\u4e2d\u3002\u5e0c\u671b\u672c\u6587\u80fd\u5920\u5c0d\u4f60\u5e36\u4f86\u5be6\u969b\u7684\u5e6b\u52a9\u3002"]})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},87608:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/pypiserver-3a82a5ef370f8387611a4c2322e85a8a.jpg"},68311:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/0913-a1c6cbea3602d12e990e10be50d5145d.webp"},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var r=n(96540);const c={},i=r.createContext(c);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);