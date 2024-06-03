"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[19813],{17317:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var a=s(74848),n=s(28453);const t={sidebar_position:3},l="Gmail API \u6191\u8b49",c={id:"gmailsummary/gmailapi_credentials",title:"Gmail API \u6191\u8b49",description:"\u5728\u555f\u52d5 GmailAPI \u4e4b\u5f8c\uff0c\u4f60\u6703\u7acb\u523b\u770b\u5230\u7cfb\u7d71\u8981\u6c42\u4f60\u7533\u8acb\u6191\u8b49\uff0c\u6211\u5011\u76f4\u63a5\u5f80\u4e0b\u770b\u3002",source:"@site/docs/gmailsummary/gmailapi_credentials.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/gmailapi_credentials",permalink:"/docs/gmailsummary/gmailapi_credentials",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Gmail API \u555f\u7528",permalink:"/docs/gmailsummary/gmailapi_enable"},next:{title:"Gmail API \u547c\u53eb",permalink:"/docs/gmailsummary/gmailapi_using"}},d={},r=[{value:"\u7533\u8acb\u6191\u8b49",id:"\u7533\u8acb\u6191\u8b49",level:2},{value:"\u8a2d\u5b9a OAuth 2.0",id:"\u8a2d\u5b9a-oauth-20",level:2}];function m(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"gmail-api-\u6191\u8b49",children:"Gmail API \u6191\u8b49"}),"\n",(0,a.jsx)(i.p,{children:"\u5728\u555f\u52d5 GmailAPI \u4e4b\u5f8c\uff0c\u4f60\u6703\u7acb\u523b\u770b\u5230\u7cfb\u7d71\u8981\u6c42\u4f60\u7533\u8acb\u6191\u8b49\uff0c\u6211\u5011\u76f4\u63a5\u5f80\u4e0b\u770b\u3002"}),"\n",(0,a.jsx)(i.h2,{id:"\u7533\u8acb\u6191\u8b49",children:"\u7533\u8acb\u6191\u8b49"}),"\n",(0,a.jsx)(i.p,{children:"\u9ede\u9078\u300cCreate credentials\u300d\u3002"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"gmail_11",src:s(67821).A+"",width:"4235",height:"2112"})}),"\n",(0,a.jsx)(i.p,{children:"\u7b2c\u4e00\u6b65\u662f\u8a2d\u5b9a\u6191\u8b49\u7684\u985e\u578b\uff0c\u6211\u5011\u9078\u64c7\u300cUser Data\u300d\uff0c\u7136\u5f8c\u9ede\u9078\u300cNext\u300d\u3002"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"gmail_12",src:s(35682).A+"",width:"2016",height:"2484"})}),"\n",(0,a.jsx)(i.p,{children:"\u63a5\u8457\u662f OAuth Consent Screen\uff0c\u9019\u88e1\u8f38\u5165\u4f60\u559c\u6b61\u7684\u61c9\u7528\u7a0b\u5f0f\u540d\u7a31\u9084\u6709\u4f60\u7684 email\uff0c\u7136\u5f8c\u9ede\u9078\u300cSave and Continue\u300d\u3002"}),"\n",(0,a.jsx)(i.admonition,{type:"warning",children:(0,a.jsx)(i.p,{children:"\u6700\u5f8c\u4e00\u500b\u958b\u767c\u8005\u806f\u7d61\u8cc7\u8a0a\u662f\u7576 Google \u6709\u554f\u984c\u6642\uff0c\u4ed6\u5011\u6703\u806f\u7d61\u4f60\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u4f60\u5beb\u932f\u4e86\uff0c\u90a3\u9ebc\u4f60\u53ef\u80fd\u6703\u6536\u4e0d\u5230\u901a\u77e5\u3002"})}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"gmail_13",src:s(55679).A+"",width:"1622",height:"2511"})}),"\n",(0,a.jsx)(i.p,{children:"\u63a5\u8457\u662f\u300cScopes\u300d\uff0c\u9019\u88e1\u9078\u64c7\u300cAdd or Remove Scopes\u300d\uff0c\u9078\u64c7\u300cReadOnly\u300d\u7684\u6b0a\u9650\uff0c\u7136\u5f8c\u9ede\u9078\u300cUpdate\u300d\u3002"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"gmail_14",src:s(53716).A+"",width:"3222",height:"2520"})}),"\n",(0,a.jsx)(i.p,{children:"\u63a5\u8457\u662f\u300cOAuth Client ID\u300d\uff0c\u9019\u88e1\u9078\u64c7\u300cDesktop App\u300d\uff0c\u7136\u5f8c\u9ede\u9078\u300cCreate\u300d\u3002"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"gmail_15",src:s(32241).A+"",width:"2314",height:"3465"})}),"\n",(0,a.jsx)(i.p,{children:"\u5b8c\u6210\u6191\u8b49\u7684\u7533\u8acb\uff0c\u9ede\u9078\u300cDownload\u300d\uff0c\u7136\u5f8c\u9ede\u9078\u300cDone\u300d\u3002"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"gmail_16",src:s(74470).A+"",width:"2035",height:"1384"})}),"\n",(0,a.jsxs)(i.p,{children:["\u4e0b\u8f09\u7684\u6191\u8b49\u662f\u4e00\u500b JSON \u6a94\u6848\uff0c\u6211\u5011\u5c07\u5b83\u547d\u540d\u70ba ",(0,a.jsx)(i.code,{children:"credentials.json"}),"\uff0c\u7136\u5f8c\u653e\u5728\u5c08\u6848\u7684\u6839\u76ee\u9304\u4e0b\u3002"]}),"\n",(0,a.jsx)(i.h2,{id:"\u8a2d\u5b9a-oauth-20",children:"\u8a2d\u5b9a OAuth 2.0"}),"\n",(0,a.jsx)(i.p,{children:"\u5b8c\u6210\u8a2d\u5b9a\u5f8c\uff0c\u56de\u5230 GmailAPI \u7684\u9801\u9762\uff0c\u9ede\u9078\u300cOAuth consent screen\u300d\u3002"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"gmail_17",src:s(55523).A+"",width:"1572",height:"1883"})}),"\n",(0,a.jsx)(i.p,{children:"\u7531\u65bc\u6211\u5011\u53ea\u662f\u8981\u67e5\u627e\u81ea\u5df1\u7684 Gmail\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u767c\u5e03\uff0c\u53ea\u9700\u8981\u52a0\u5165\u6e2c\u8a66\u4f7f\u7528\u8005\u5373\u53ef\u3002"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"gmail_18",src:s(72792).A+"",width:"3923",height:"2685"})}),"\n",(0,a.jsx)(i.p,{children:"\u5230\u9019\u908a\uff0c\u6211\u5011\u5df2\u7d93\u5b8c\u6210\u4e86 GmailAPI \u7684\u6191\u8b49\u8a2d\u5b9a\u3002"})]})}function o(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},67821:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/gmail11-9689a3551996c188f4a4555f91dcaeab.jpg"},35682:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/gmail12-90d7809390f62094129cbb8cf55b0d17.jpg"},55679:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/gmail13-143eca4eb0e15fcc999e1dae9ddc8074.jpg"},53716:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/gmail14-9fe23279ec19ec92dd4932a264e16460.jpg"},32241:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/gmail15-15de91e9b19c0d09f784d2cdfbbe4962.jpg"},74470:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/gmail16-ae948ffdb769f49b4bd27f15776d9c9a.jpg"},55523:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/gmail17-4b3b81681d00c166993c4a6eae546b19.jpg"},72792:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/gmail18-8028756f75173905aaac0975ff0b1804.jpg"},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>c});var a=s(96540);const n={},t=a.createContext(n);function l(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);