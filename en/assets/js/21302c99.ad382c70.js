"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4414],{27575:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(74848),s=i(28453);const o={sidebar_position:1},r="Introduction",a={id:"gmailsummary/intro",title:"Introduction",description:'The core functionality of this project is "Email Summary".',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/gmailsummary/intro.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/intro",permalink:"/en/docs/gmailsummary/intro",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714946536e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GmailSummary",permalink:"/en/docs/category/gmailsummary"},next:{title:"\u6bcf\u65e5\u65b0\u805e",permalink:"/en/docs/category/\u6bcf\u65e5\u65b0\u805e"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Problem Breakdown",id:"problem-breakdown",level:2},{value:"Automatic Downloading",id:"automatic-downloading",level:3},{value:"Automatic Analysis",id:"automatic-analysis",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:['The core functionality of this project is "',(0,t.jsx)(n.strong,{children:"Email Summary"}),'".']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/GmailSummary",children:(0,t.jsx)(n.strong,{children:"GmailSummary Github"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"title",src:i(36163).A+"",width:"1792",height:"1024"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This project isn't a ready-to-use Python tool; instead, it's an example of API integration. If you happen to have similar needs, you can refer to the instructions in this project for corresponding modifications and further development."})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:'In daily life, we often start receiving activity update emails from GitHub repositories because we\'ve clicked the "Watch" option on those repositories. These updates include but are not limited to discussions on new features, issue reports, pull requests (PR), and bug reports.'}),"\n",(0,t.jsx)(n.p,{children:'For example, if you follow some GitHub projects and opt for "All activity":'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/albumentations-team/albumentations",children:(0,t.jsx)(n.strong,{children:"albumentations"})}),": About 10 emails per day."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/microsoft/onnxruntime",children:(0,t.jsx)(n.strong,{children:"onnxruntime"})}),": About 200 emails per day."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/pytorch/pytorch",children:(0,t.jsx)(n.strong,{children:"PyTorch"})}),": About 1,500 emails per day."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"One can imagine that if you follow even more projects, you'll receive over 5,000 emails per day."}),"\n",(0,t.jsx)(n.p,{children:"\uff0a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:'Does anyone really read all these emails "without missing any"?'})}),"\n",(0,t.jsx)(n.p,{children:"\uff0a"}),"\n",(0,t.jsx)(n.p,{children:"Well, I don't. Usually, I just delete them without even looking."}),"\n",(0,t.jsx)(n.p,{children:"Therefore, as engineers seeking efficiency (or laziness), we must think about how to solve this problem."}),"\n",(0,t.jsx)(n.h2,{id:"problem-breakdown",children:"Problem Breakdown"}),"\n",(0,t.jsx)(n.p,{children:"To tackle the issue of a large number of emails, we can break it down into two parts: automatic downloading and automatic analysis."}),"\n",(0,t.jsx)(n.h3,{id:"automatic-downloading",children:"Automatic Downloading"}),"\n",(0,t.jsx)(n.p,{children:"To be able to automatically download these emails from Gmail and then extract key information."}),"\n",(0,t.jsx)(n.p,{children:"Let's briefly consider some feasible solutions:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Using Services like Zapier or IFTTT"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://zapier.com/",children:(0,t.jsx)(n.strong,{children:"Zapier"})}),": This is an automation platform focused on enhancing productivity, supporting connections to over 3,000 different web applications, including Gmail, Slack, Mailchimp, etc. This platform allows users to create automated workflows to achieve automatic interaction between various applications."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://ifttt.com/",children:(0,t.jsx)(n.strong,{children:"IFTTT"})}),': IFTTT is a free web service that allows users to create "if this, then that" automated tasks, known as "Applets." Each Applet consists of a trigger and an action. When the trigger condition is met, the Applet will automatically execute the action.']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Using Gmail API"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://developers.google.com/gmail/api",children:(0,t.jsx)(n.strong,{children:"Gmail API"})}),": This allows us to perform operations like reading emails, writing emails, searching emails, etc., programmatically."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Since we're already going to write code, let's not consider the first solution and go with Gmail API."})}),"\n",(0,t.jsx)(n.h3,{id:"automatic-analysis",children:"Automatic Analysis"}),"\n",(0,t.jsx)(n.p,{children:"After retrieving a large number of emails, we need to analyze these emails to extract key information."}),"\n",(0,t.jsx)(n.p,{children:"This part isn't much of a challenge in the era of ChatGPT. We can use ChatGPT for natural language processing to extract key information from the emails."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"We break down the entire process into several parts:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automatic Email Downloading"}),": Using Gmail API."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Email Content Parsing"}),": Implementing logic ourselves."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Email Content Summarization"}),": Using ChatGPT."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Output & Scheduling"}),": Outputting in Markdown format and scheduling using crontab."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The above is the core functionality of this project, and we showcase the results on the ",(0,t.jsx)(n.strong,{children:"Daily News"})," page."]}),"\n",(0,t.jsx)(n.p,{children:"Next, we'll introduce the implementation of these parts one by one."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},36163:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/title-d26983024c0e5231607cd345ef9ff11c.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);