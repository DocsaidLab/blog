"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6778],{71263:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=n(74848),r=n(28453);const i={slug:"ubuntu-install-ssh",title:"Setting Up SSH Server on Ubuntu",authors:"Zephyr",tags:["ubuntu","ssh"],image:"/en/img/2023/0912.webp",description:"Tutorial on configuring ssh server."},l=void 0,o={permalink:"/en/blog/ubuntu-install-ssh",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023/09-12-ubuntu-install-ssh/index.md",title:"Setting Up SSH Server on Ubuntu",description:"Tutorial on configuring ssh server.",date:"2023-09-12T00:00:00.000Z",tags:[{label:"ubuntu",permalink:"/en/blog/tags/ubuntu"},{label:"ssh",permalink:"/en/blog/tags/ssh"}],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"ubuntu-install-ssh",title:"Setting Up SSH Server on Ubuntu",authors:"Zephyr",tags:["ubuntu","ssh"],image:"/en/img/2023/0912.webp",description:"Tutorial on configuring ssh server."},unlisted:!1,prevItem:{title:"Setting Up PyPiServer on Ubuntu",permalink:"/en/blog/setting-up-pypiserver-on-ubuntu-with-docker"},nextItem:{title:"Automating GitHub Runner with Systemd",permalink:"/en/blog/ubuntu-github-runner-systemd"}},a={authorsImageUrls:[void 0]},h=[{value:"1. Install OpenSSH Server",id:"1-install-openssh-server",level:2},{value:"2. Check SSH Server Status",id:"2-check-ssh-server-status",level:2},{value:"3. Configure SSH Passwordless Login:",id:"3-configure-ssh-passwordless-login",level:2},{value:"3.1 Generate SSH Key Pair on the Client",id:"31-generate-ssh-key-pair-on-the-client",level:3},{value:"3.2 Copy the Public Key to the Server",id:"32-copy-the-public-key-to-the-server",level:3},{value:"3.3 Test Passwordless Login",id:"33-test-passwordless-login",level:3},{value:"Notes",id:"notes",level:2}];function c(e){const s={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("figure",{children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.img,{alt:"title",src:n(45300).A+"",width:"1024",height:"1024"}),"\n",(0,t.jsx)("figcaption",{children:"Cover image: Automatically generated by GPT-4 after reading this article."})]})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"SSH (Secure Shell) is a network protocol that allows users to securely access and manage remote servers."}),"\n",(0,t.jsx)(s.p,{children:"This guide will walk you through setting up passwordless login."}),"\n",(0,t.jsx)(s.h2,{id:"1-install-openssh-server",children:"1. Install OpenSSH Server"}),"\n",(0,t.jsx)(s.p,{children:"Open a terminal."}),"\n",(0,t.jsx)(s.p,{children:"Enter the following commands to install the OpenSSH server:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo apt update\nsudo apt install openssh-server\n"})}),"\n",(0,t.jsx)(s.h2,{id:"2-check-ssh-server-status",children:"2. Check SSH Server Status"}),"\n",(0,t.jsx)(s.p,{children:"Use the following command to check the status of the SSH server:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo systemctl status ssh\n"})}),"\n",(0,t.jsx)(s.p,{children:'If you see "Active: active (running)", then the SSH server has been successfully started.'}),"\n",(0,t.jsx)(s.h2,{id:"3-configure-ssh-passwordless-login",children:"3. Configure SSH Passwordless Login:"}),"\n",(0,t.jsx)(s.h3,{id:"31-generate-ssh-key-pair-on-the-client",children:"3.1 Generate SSH Key Pair on the Client"}),"\n",(0,t.jsx)(s.p,{children:"Open a terminal."}),"\n",(0,t.jsx)(s.p,{children:"Enter the following command to generate a key pair:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh-keygen\n"})}),"\n",(0,t.jsx)(s.p,{children:"Follow the prompts. The default settings are usually sufficient. You can press Enter when prompted for a passphrase to create a passphrase-less key pair."}),"\n",(0,t.jsx)(s.h3,{id:"32-copy-the-public-key-to-the-server",children:"3.2 Copy the Public Key to the Server"}),"\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.code,{children:"ssh-copy-id"})," command to copy the public key to the server. Replace ",(0,t.jsx)(s.code,{children:"[username]"})," and ",(0,t.jsx)(s.code,{children:"[server-ip]"})," with your server details."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh-copy-id [username]@[server-ip]\n"})}),"\n",(0,t.jsx)(s.p,{children:"For example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh-copy-id john@192.168.0.100\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If the server is using a non-default SSH port (e.g., 2222), use the ",(0,t.jsx)(s.code,{children:"-p"})," parameter:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh-copy-id -p 2222 john@192.168.0.100\n"})}),"\n",(0,t.jsx)(s.p,{children:"This command will prompt you for the server's password."}),"\n",(0,t.jsxs)(s.p,{children:["Once the authentication is successful, your public key will be added to the ",(0,t.jsx)(s.code,{children:"~/.ssh/authorized_keys"})," file on the server."]}),"\n",(0,t.jsx)(s.h3,{id:"33-test-passwordless-login",children:"3.3 Test Passwordless Login"}),"\n",(0,t.jsx)(s.p,{children:"Try SSHing into the server:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ssh [username]@[server-ip]\n"})}),"\n",(0,t.jsx)(s.p,{children:"If everything is configured correctly, you should be able to log in to the server without a password."}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(s.p,{children:"Using SSH key authentication indeed enhances security and convenience, but make sure not to lose your private key."}),"\n",(0,t.jsx)(s.p,{children:"It's recommended to regularly rotate or update your SSH keys. For added security, consider disabling password authentication."}),"\n",(0,t.jsxs)(s.p,{children:["This can be configured in ",(0,t.jsx)(s.code,{children:"/etc/ssh/sshd_config"})," on the server:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"PasswordAuthentication no"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Once you've completed the above steps, you'll be able to log in to the server from the client without a password using SSH key authentication."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},45300:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/0912-1f795861136865cb368c63ccab3340c5.webp"},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var t=n(96540);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);