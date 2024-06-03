"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[52107],{88520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453);const r={slug:"ubuntu-github-runner-systemd",title:"Automating GitHub Runner with Systemd",authors:"Zephyr",tags:["ubuntu","github-action","runner","systemd"],image:"/en/img/2023/0910.webp",description:"Running automatically with Ubuntu Systemd."},o=void 0,c={permalink:"/en/blog/ubuntu-github-runner-systemd",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023/09-10-ubuntu-github-action-runner-systemd/index.md",title:"Automating GitHub Runner with Systemd",description:"Running automatically with Ubuntu Systemd.",date:"2023-09-10T00:00:00.000Z",tags:[{inline:!0,label:"ubuntu",permalink:"/en/blog/tags/ubuntu"},{inline:!0,label:"github-action",permalink:"/en/blog/tags/github-action"},{inline:!0,label:"runner",permalink:"/en/blog/tags/runner"},{inline:!0,label:"systemd",permalink:"/en/blog/tags/systemd"}],readingTime:2.22,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"ubuntu-github-runner-systemd",title:"Automating GitHub Runner with Systemd",authors:"Zephyr",tags:["ubuntu","github-action","runner","systemd"],image:"/en/img/2023/0910.webp",description:"Running automatically with Ubuntu Systemd."},unlisted:!1,prevItem:{title:"Setting Up SSH Server on Ubuntu",permalink:"/en/blog/ubuntu-install-ssh"},nextItem:{title:"Logging into RTF8207W Router",permalink:"/en/blog/login-rtf8207w"}},a={authorsImageUrls:[void 0]},l=[{value:"Configuration Process",id:"configuration-process",level:2},{value:"Checking Status",id:"checking-status",level:2},{value:"Reconfiguration",id:"reconfiguration",level:2}];function u(e){const n={code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"title",src:t(30934).A+"",width:"1024",height:"1024"}),"\n",(0,s.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading this article"})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"In our collaborative work using GitHub, we often utilize private hosts for CI/CD tasks. While GitHub provides documentation on how to install runners, following those steps might lead to instances where the host is rebooted, but the runner fails to start again."}),"\n",(0,s.jsx)(n.p,{children:"This issue often slips through the cracks until someone notices the CI/CD isn't responding, prompting the reminder to manually start the service."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"This cycle of forgetfulness is disruptive!"})}),"\n",(0,s.jsx)(n.p,{children:"Hence, automation is needed!"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Documentation Illustration"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"github_set_runner",src:t(90126).A+"",width:"2048",height:"1173"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-process",children:"Configuration Process"}),"\n",(0,s.jsx)(n.p,{children:"To automatically execute a task after the host boots up, systemd service can be employed."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create a new systemd service file:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/systemd/system/actions-runner.service\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Paste the following content into the file:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[Unit]\nDescription=GitHub Action Runner\nAfter=network.target\n\n[Service]\nType=simple\nUser=your_username\nWorkingDirectory=/home/your_username/actions-runner\nExecStart=/home/your_username/actions-runner/run.sh\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Note: Replace ",(0,s.jsx)(n.code,{children:"User"})," and ",(0,s.jsx)(n.code,{children:"WorkingDirectory"})," with your own username."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Inform systemd to reload the service configurations:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Enable this service to start automatically during boot-up:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable actions-runner.service\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Now you can manually start this service or test it by rebooting:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start actions-runner.service\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Using this method, the ",(0,s.jsx)(n.code,{children:"actions-runner"})," will execute in the background upon booting up your host."]}),"\n",(0,s.jsx)(n.p,{children:"If you wish to stop the service, you can use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop actions-runner.service\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Note: Ensure ",(0,s.jsx)(n.code,{children:"run.sh"})," has executable permissions."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"checking-status",children:"Checking Status"}),"\n",(0,s.jsxs)(n.p,{children:["When managing services with systemd, you can't directly \"attach\" to a service to view its output. However, you can check the service's logs to understand its operational status. To view the logs of the ",(0,s.jsx)(n.code,{children:"actions-runner"})," service, you can use the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u actions-runner.service -f\n"})}),"\n",(0,s.jsx)(n.p,{children:"Explanation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-u actions-runner.service"}),": Only view logs for the service named ",(0,s.jsx)(n.code,{children:"actions-runner"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-f"}),": This parameter allows ",(0,s.jsx)(n.code,{children:"journalctl"})," to continuously track the latest logs, enabling you to see real-time output."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Furthermore, if you want to check the current status of the service, you can use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status actions-runner.service\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will display the current status of the ",(0,s.jsx)(n.code,{children:"actions-runner"})," service, including whether it's running and recent log outputs:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"action-service",src:t(23903).A+"",width:"2048",height:"831"})}),"\n",(0,s.jsx)(n.h2,{id:"reconfiguration",children:"Reconfiguration"}),"\n",(0,s.jsx)(n.p,{children:"If the original runner is lost, it's typically due to switching between public and private repositories, or if the runner hasn't been invoked for a long time. In any case, the original runner is lost, necessitating reconfiguration."}),"\n",(0,s.jsxs)(n.p,{children:["In such cases, navigate to the ",(0,s.jsx)(n.code,{children:"actions-runner"})," directory, delete the ",(0,s.jsx)(n.code,{children:".runner"})," file, and then rerun:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./config.sh --url ... (replace with new token configuration)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The remaining process remains the same. After configuration, restart the service, and you're good to go."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},23903:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/action-service-6b4de0ff1dc1dc29f3edb7aeb4d16fc8.jpg"},90126:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/github_set_runner-6ca68dc499f780fcc4c6e7d7461a2ffe.jpg"},30934:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/0910-c2468dc9e08d9233e1d0fc90aa5dd798.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);