"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[34560],{27187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(74848),r=t(28453);const s={slug:"mac-selective-vpn-routing",title:"Setting Up Selective Traffic Routing for VPN on Mac",authors:"Zephyr",tags:["routing","vpn","macos"],image:"/en/img/2023/0901.webp",description:"Configuring VPN routing on Mac."},o=void 0,a={permalink:"/en/blog/mac-selective-vpn-routing",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023/09-01-mac-selective-vpn-routing/index.md",title:"Setting Up Selective Traffic Routing for VPN on Mac",description:"Configuring VPN routing on Mac.",date:"2023-09-01T00:00:00.000Z",tags:[{label:"routing",permalink:"/en/blog/tags/routing"},{label:"vpn",permalink:"/en/blog/tags/vpn"},{label:"macos",permalink:"/en/blog/tags/macos"}],readingTime:2.39,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"mac-selective-vpn-routing",title:"Setting Up Selective Traffic Routing for VPN on Mac",authors:"Zephyr",tags:["routing","vpn","macos"],image:"/en/img/2023/0901.webp",description:"Configuring VPN routing on Mac."},unlisted:!1,prevItem:{title:"Unicode Table",permalink:"/en/blog/unicode-table"},nextItem:{title:"Terms of Service",permalink:"/en/blog/terms-of-service"}},c={authorsImageUrls:[void 0]},l=[{value:"Solving the Issue",id:"solving-the-issue",level:2},{value:"Still Not Working?",id:"still-not-working",level:2},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("figure",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"title",src:t(70248).A+"",width:"1024",height:"1024"}),"\n",(0,i.jsx)("figcaption",{children:"Cover Image: Automatically generated after reading this article by GPT-4"})]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"When working from home using a company-configured VPN, it's common to still need access to other local machines. For instance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Company VPN subnet: 192.168.25.XXX"}),"\n",(0,i.jsx)(n.li,{children:"Home subnet: 192.168.1.XXX"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When you open the VPN, all traffic typically routes through the company's subnet, preventing access to other devices on your home network."}),"\n",(0,i.jsx)(n.p,{children:"Moreover, innocently watching a funny video at home might unexpectedly draw the attention of your company's network administrators."}),"\n",(0,i.jsx)(n.p,{children:"That doesn't sound right, does it?"}),"\n",(0,i.jsxs)(n.p,{children:["So, what we want to do is: ",(0,i.jsx)(n.strong,{children:"route VPN traffic only to the company subnet, while letting other traffic go through the local network."})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"I assume you've already set up your VPN and it's working fine; we're just addressing the routing issue here."})}),"\n",(0,i.jsx)(n.h2,{id:"solving-the-issue",children:"Solving the Issue"}),"\n",(0,i.jsx)(n.p,{children:"First, identify the internal network of your company, for example:"}),"\n",(0,i.jsx)(n.p,{children:"192.168.25.XXX"}),"\n",(0,i.jsx)(n.p,{children:"Then, let's open a file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/ppp/ip-up\n"})}),"\n",(0,i.jsx)(n.p,{children:"Enter the following content, but remember to replace it with your subnet:"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Note that the examples here assume the VPN subnet is 192.168.25.XXX; adjust as necessary."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\n/sbin/route add -net 192.168.25.0/24 -interface ppp0\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here's a brief explanation of the above command:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"/sbin/route"})}),"\n",(0,i.jsx)(n.p,{children:"This is the path to the route command, used to set up and display the routing table in a network."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"-net 192.168.25.0/24"})}),"\n",(0,i.jsx)(n.p,{children:"This parameter specifies a network route rather than a host route. 192.168.25.0/24 is the network address and subnet mask, representing the range of IP addresses from 192.168.25.0 to 192.168.25.255."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"-interface ppp0"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies through which network interface the route should pass. In this example, it's ppp0 (Point-to-Point Protocol interface 0)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The entire command adds a route to the 192.168.25.0/24 network via the ppp0 interface. When your system tries to access any IP address in the 192.168.25.0/24 network, it will route the traffic through the ppp0 interface."}),"\n",(0,i.jsx)(n.p,{children:"Next, save and exit the file, and give it permissions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo chmod 755 /etc/ppp/ip-up\n"})}),"\n",(0,i.jsx)(n.h2,{id:"still-not-working",children:"Still Not Working?"}),"\n",(0,i.jsx)(n.p,{children:"If some machines still can't access the internet, let's proceed with the following steps:"}),"\n",(0,i.jsx)(n.p,{children:"Open System Preferences on macOS, navigate to Network, as shown below:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Step 1: Open System Preferences, click on "Network"'}),"\n",(0,i.jsx)(n.li,{children:"Step 2: Click on the cog icon"}),"\n",(0,i.jsx)(n.li,{children:'Step 3: Select "Set Service Order"'}),"\n",(0,i.jsx)(n.li,{children:"Step 4: Drag the VPN below Wi-Fi"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vpn-setting",src:t(74515).A+"",width:"2048",height:"1699"})}),"\n",(0,i.jsx)(n.p,{children:"The reason for this step is that after configuring the VPN, it may be set to the top of the service order, meaning all traffic is routed through the VPN. By moving the VPN down, the network settings above can take effect."}),"\n",(0,i.jsx)(n.p,{children:"That's it! If there are other types of traffic that need to go through the VPN, simply add the appropriate routes to the ip-up file."}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gist.github.com/shalyf/d50b0bbf30a4b5020d2b84f4ae8eb4e0",children:"shalyf/vpn_route.md"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://superuser.com/questions/4904/how-to-selectively-route-network-traffic-through-vpn-on-mac-os-x-leopard",children:"How to selectively route network traffic through VPN on Mac OS X Leopard?"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},74515:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vpn-setting-bd7c48703bedfb577a1954606aad8726.jpg"},70248:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/0901-cd1dcedc069a7e8c380af9af9c39c0f7.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);