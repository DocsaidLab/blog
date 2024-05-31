"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[67801],{53791:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=i(74848),t=i(28453);const s={slug:"setting-up-nextcloud",title:"Setting Up Nextcloud Guide",authors:"Zephyr",tags:["Nextcloud","Docker","Ubuntu"],image:"/en/img/2024/0304.webp",description:"Setting up Nextcloud on Ubuntu 22.04."},r=void 0,l={permalink:"/en/blog/setting-up-nextcloud",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024/03-04-setup-nextcloud/index.md",title:"Setting Up Nextcloud Guide",description:"Setting up Nextcloud on Ubuntu 22.04.",date:"2024-03-04T00:00:00.000Z",tags:[{label:"Nextcloud",permalink:"/en/blog/tags/nextcloud"},{label:"Docker",permalink:"/en/blog/tags/docker"},{label:"Ubuntu",permalink:"/en/blog/tags/ubuntu"}],readingTime:3.955,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"setting-up-nextcloud",title:"Setting Up Nextcloud Guide",authors:"Zephyr",tags:["Nextcloud","Docker","Ubuntu"],image:"/en/img/2024/0304.webp",description:"Setting up Nextcloud on Ubuntu 22.04."},unlisted:!1,prevItem:{title:"Common VSCode Configuration Settings",permalink:"/en/blog/vscode-settings"},nextItem:{title:"The Pitfall of Lists in PyTorch",permalink:"/en/blog/pytorch-training-out-of-memory"}},c={authorsImageUrls:[void 0]},a=[{value:"Installing Nextcloud",id:"installing-nextcloud",level:2},{value:"Configuring Nextcloud All-in-One",id:"configuring-nextcloud-all-in-one",level:2},{value:"Configuring System Services",id:"configuring-system-services",level:2},{value:"Starting Nextcloud",id:"starting-nextcloud",level:2},{value:"Setting Up Nextcloud",id:"setting-up-nextcloud",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("figure",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"title",src:i(87454).A+"",width:"1024",height:"1024"}),"\n",(0,o.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading this article"})]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Previously, I used to store files on Google Drive and would download them using the wget command."}),"\n",(0,o.jsx)(n.p,{children:"However, one day, the download command suddenly stopped working."}),"\n",(0,o.jsx)(n.p,{children:"So, I decided to give Nextcloud a try."}),"\n",(0,o.jsx)(n.p,{children:"Below, we'll go through the setup process based on Ubuntu 22.04."}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"Before we begin, make sure you have a domain name ready and pointed to your server."}),(0,o.jsx)(n.p,{children:'If you\'re unsure how to do this, simply Google search "how to use namecheap".'})]}),"\n",(0,o.jsx)(n.h2,{id:"installing-nextcloud",children:"Installing Nextcloud"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"First Question: Why use Nextcloud?"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"I wanted a private cloud where I could store files without relying on someone else's servers."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Second Question: What's the difference between Nextcloud and Owncloud?"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Nextcloud forked from Owncloud, offering similar functionalities, but Nextcloud's development pace is faster."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Third Question: How do you install Nextcloud?"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This is a bit complex because Nextcloud offers various installation methods, each with its pros and cons."}),"\n",(0,o.jsx)(n.li,{children:"In this article, I only recommend using Docker for installation."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-nextcloud-all-in-one",children:"Configuring Nextcloud All-in-One"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Reference the official documentation: ",(0,o.jsx)(n.a,{href:"https://github.com/nextcloud/all-in-one",children:(0,o.jsx)(n.strong,{children:"Nextcloud All-in-One"})})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"First, ensure you've installed Docker and Docker Compose."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:'If not, Google search "Docker & Docker Compose installation".'})}),"\n",(0,o.jsxs)(n.p,{children:["Next, create a NextCloud folder and write a Docker Compose configuration file ",(0,o.jsx)(n.code,{children:"docker-compose.yml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir nextcloud\nvim nextcloud/docker-compose.yml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Paste the following content into ",(0,o.jsx)(n.code,{children:"docker-compose.yml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"services:\n  nextcloud-aio-mastercontainer:\n    image: nextcloud/all-in-one:latest\n    init: true\n    restart: always\n    container_name: nextcloud-aio-mastercontainer\n    volumes:\n      - nextcloud_aio_mastercontainer:/mnt/docker-aio-config\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    ports:\n      - 80:80\n      - 8080:8080\n      - 8443:8443\nvolumes:\n  nextcloud_aio_mastercontainer:\n    name: nextcloud_aio_mastercontainer\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here's a brief explanation of the commands:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--init"}),": Ensures no zombie processes are created."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--name nextcloud-aio-mastercontainer"}),": Sets the container name, which shouldn't be changed to avoid update failures."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--restart always"}),": Sets the container's restart policy to always accompany the Docker daemon."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--publish 80:80"}),", ",(0,o.jsx)(n.code,{children:"--publish 8080:8080"}),", ",(0,o.jsx)(n.code,{children:"--publish 8443:8443"}),": Publishes container ports to host ports."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config"}),": Sets where the mastercontainer files are stored."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--volume /var/run/docker.sock:/var/run/docker.sock:ro"}),": Mounts Docker socket into the container."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more detailed configurations, refer to the official documentation: ",(0,o.jsx)(n.a,{href:"https://github.com/nextcloud/all-in-one/blob/main/compose.yaml",children:"compose.yaml"})]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-system-services",children:"Configuring System Services"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/systemd/system/nexcloud.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"Paste the following content:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[Unit]\nDescription=NextCloud Docker Compose\nRequires=docker.service\nAfter=docker.service\n\n[Service]\nWorkingDirectory=/home/[YourName]/nextcloud\nExecStart=/usr/bin/docker compose up --remove-orphans\nExecStop=/usr/bin/docker compose down\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,o.jsx)(n.h2,{id:"starting-nextcloud",children:"Starting Nextcloud"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable nextcloud\nsudo systemctl start nextcloud\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-nextcloud",children:"Setting Up Nextcloud"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Accessing Nextcloud AIO Interface"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["After initial setup, access Nextcloud AIO interface via ",(0,o.jsx)(n.code,{children:"https://ip.address.of.this.server:8080"}),", replacing ",(0,o.jsx)(n.code,{children:"ip.address.of.this.server"})," with your server's IP address."]}),"\n",(0,o.jsx)(n.li,{children:"It's important to use the IP address instead of the domain name to avoid HTTP Strict Transport Security (HSTS) issues."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Using Self-Signed Certificates"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Accessing port 8080 might use a self-signed certificate, which browsers might flag as untrusted. You'll need to manually accept this certificate in your browser to proceed."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Automating Certificate Acquisition"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If your firewall or router has ports 80 and 8443 open or forwarded and you've pointed a domain to your server, accessing ",(0,o.jsx)(n.code,{children:"https://your-domain-that-points-to-this-server.tld:8443"})," will automatically fetch a trusted certificate from a CA, enhancing security and convenience."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Opening Ports for Nextcloud Talk"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"To ensure Nextcloud Talk features like video calls and messages work, it's crucial to open ports 3478/TCP and 3478/UDP for the Talk container in your firewall or router. These ports are essential for handling NAT traversal, a technique allowing devices inside and outside a network to connect directly, crucial for real-time communication applications."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Common Issues"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Dynamic IP for Home Network"}),": If you have a dynamic IP, services like No-IP or obtaining a static IP from your ISP might be solutions."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Alternative Installation Methods"}),": You can install Nextcloud directly, but be prepared to handle dependencies on your own."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Can't Connect After Setup"}),": If your firewall isn't the issue, it might be your router blocking connections."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Upon entering the setup URL, you'll find yourself in what can be called an admin panel's admin panel."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"login_1",src:i(63667).A+"",width:"1224",height:"824"})}),"\n",(0,o.jsx)(n.p,{children:"At this point, you might panic, realizing you don't have a password!"}),"\n",(0,o.jsx)(n.p,{children:"To retrieve the password, use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo grep password /var/lib/docker/volumes/nextcloud_aio_mastercontainer/_data/data/configuration.json\n"})}),"\n",(0,o.jsx)(n.p,{children:"After logging in, you'll encounter a setup screen:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"login_2",src:i(79972).A+"",width:"1224",height:"696"})}),"\n",(0,o.jsx)(n.p,{children:"This setup screen reflects my completed configuration. For your first login, enter your prepared domain. The system will prompt you to download additional docker images, which it will then automatically launch."}),"\n",(0,o.jsx)(n.p,{children:"Once launched, you can start using Nextcloud."}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"After completing the above steps, entering your domain in the address bar will lead you to a beautifully designed interface, your private cloud."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"login_3",src:i(58017).A+"",width:"2777",height:"1595"})}),"\n",(0,o.jsx)(n.p,{children:"This interface offers numerous functionalities for file management and sharing. Additionally, you can download the Nextcloud app on your mobile device for file management on-the-go."}),"\n",(0,o.jsx)(n.p,{children:"With Nextcloud, you no longer need to worry about Google Drive's storage limitations."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},63667:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/login_1-edb2b961d180558b75e337c1083a7202.jpg"},79972:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/login_2-6e2d377746b11b87dcd476a7db06ecb2.jpg"},58017:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/login_3-b4f2e8aa169715059997b910227d0773.jpg"},87454:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/0304-8ff2e735131721af1809a39fc20648cd.webp"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var o=i(96540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);