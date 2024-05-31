"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22910],{42862:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var n=a(74848),s=a(28453);const l={sidebar_position:2},t="Gmail API Activation",r={id:"gmailsummary/gmailapi_enable",title:"Gmail API Activation",description:"This is a time-sensitive section as the usage of Gmail API might change with updates from Google.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/gmailsummary/gmailapi_enable.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/gmailapi_enable",permalink:"/en/docs/gmailsummary/gmailapi_enable",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"pytorch-lightning",permalink:"/en/docs/gmailsummary/news/2024-06-01/pytorch-lightning"},next:{title:"Gmail API Credentials",permalink:"/en/docs/gmailsummary/gmailapi_credentials"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"Signing In",id:"signing-in",level:2},{value:"Creating a Project",id:"creating-a-project",level:2},{value:"Enabling Gmail API",id:"enabling-gmail-api",level:2}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"gmail-api-activation",children:"Gmail API Activation"}),"\n",(0,n.jsx)(i.p,{children:"This is a time-sensitive section as the usage of Gmail API might change with updates from Google."}),"\n",(0,n.jsxs)(i.p,{children:["While reading, please make sure to refer to the latest official documentation: ",(0,n.jsx)(i.a,{href:"https://developers.google.com/gmail/api",children:(0,n.jsx)(i.strong,{children:"Gmail API"})}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"Gmail API is a RESTful application interface that allows developers to access Gmail mailboxes and send emails. For most web applications, Gmail API offers authorized access to user Gmail data, making it suitable for various application scenarios such as:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Read-only mode for email extraction, indexing, and backup"}),"\n",(0,n.jsx)(i.li,{children:"Automated or programmatic message sending"}),"\n",(0,n.jsx)(i.li,{children:"Mail account migration"}),"\n",(0,n.jsx)(i.li,{children:"Mail organization including filtering and sorting messages"}),"\n",(0,n.jsx)(i.li,{children:"Standardizing email signatures across an organization"}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Gmail API should not be used to replace IMAP for developing full-fledged email clients. Instead, for full-fledged email client development, refer to IMAP, POP, and SMTP standards."})}),"\n",(0,n.jsx)(i.p,{children:"Common terms used in Gmail API include:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Message"}),": An email message containing sender, recipients, subject, and body. Once created, a message cannot be altered. Each message is represented by a message resource."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Thread"}),": A collection of related messages forming a conversation. In email client applications, when one or more recipients reply to a message with their own messages, a thread is formed."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Label"}),': Mechanism used for organizing messages and threads. For example, you can create a label "Tax" and apply it to all messages and threads related to user taxes. Labels are divided into two categories:',"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"System labels"}),": Labels created internally, such as Inbox, Trash, or Spam. These labels cannot be deleted or modified. However, certain system labels, like Inbox, can be applied to or removed from messages and threads."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"User labels"}),": Labels created by users. These labels can be deleted or modified by users or applications. User labels are represented by label resources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Draft"}),": An unsent message. Messages in drafts can be replaced. Sending a draft will automatically delete it and create a message with the Sent system label. Drafts are represented by draft resources."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"signing-in",children:"Signing In"}),"\n",(0,n.jsxs)(i.p,{children:["Before getting started, make sure you have a ",(0,n.jsx)(i.a,{href:"https://cloud.google.com/",children:(0,n.jsx)(i.strong,{children:"Google Cloud"})})," account."]}),"\n",(0,n.jsx)(i.p,{children:'Next, you\'ll need to create a project in the Google Cloud Console. Click on "Console".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_1",src:a(58034).A+"",width:"3579",height:"1870"})}),"\n",(0,n.jsx)(i.h2,{id:"creating-a-project",children:"Creating a Project"}),"\n",(0,n.jsx)(i.p,{children:'Once in the Console, click on "Create Project".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_2",src:a(76989).A+"",width:"4088",height:"1549"})}),"\n",(0,n.jsx)(i.p,{children:'Then click on "Create a new project".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_3",src:a(51424).A+"",width:"1608",height:"1228"})}),"\n",(0,n.jsx)(i.p,{children:'Enter a project name and click on "Create".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_4",src:a(91731).A+"",width:"2438",height:"2090"})}),"\n",(0,n.jsx)(i.h2,{id:"enabling-gmail-api",children:"Enabling Gmail API"}),"\n",(0,n.jsx)(i.p,{children:"After the project is created, select it from the main menu."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_5",src:a(20118).A+"",width:"2048",height:"2740"})}),"\n",(0,n.jsx)(i.p,{children:'Then you\'ll enter a dashboard. Click on "APIs & Services".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_6",src:a(69729).A+"",width:"4189",height:"2177"})}),"\n",(0,n.jsx)(i.p,{children:'Next, click on "Enable APIs and Services".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_7",src:a(91684).A+"",width:"4033",height:"1228"})}),"\n",(0,n.jsx)(i.p,{children:'Type "Gmail" in the search box and click on "Gmail API".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_8",src:a(63543).A+"",width:"2814",height:"2232"})}),"\n",(0,n.jsx)(i.p,{children:'Click on "Enable".'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_9",src:a(92378).A+"",width:"2548",height:"1668"})}),"\n",(0,n.jsx)(i.p,{children:"With that, you've successfully enabled the Gmail API."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"gmailapi_example_10",src:a(69216).A+"",width:"4235",height:"2112"})})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},58034:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail1-c5961a71ffb1ec514bf9c1d89594b108.jpg"},69216:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail10-4ac5be608f8ff7e9d0c67b44eaa7fb3e.jpg"},76989:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail2-bcecfb875ea3ccc9aea9b0a2e8344f2f.jpg"},51424:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail3-f30838874f26f6219afcd4009d4e7ca1.jpg"},91731:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail4-a5d9ab0bb7fdceefd2716c930889de99.jpg"},20118:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail5-08093fd47a8def0d72de50044143b6dd.jpg"},69729:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail6-6b8cb2557c4267c3389d41dc6a3a1e30.jpg"},91684:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail7-9aba4d4147fce536753682a2c6cdd8bb.jpg"},63543:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail8-7a2fa69f4960665c8996fe8087a4c4c4.jpg"},92378:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/gmail9-b1cd82b2e4218fd8a8fbfb2b31596b5a.jpg"},28453:(e,i,a)=>{a.d(i,{R:()=>t,x:()=>r});var n=a(96540);const s={},l=n.createContext(s);function t(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);