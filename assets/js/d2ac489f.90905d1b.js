"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[96],{28472:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=r(74848),s=r(28453);const a={sidebar_position:5},o="\u4e0b\u55ae\u7cfb\u7d71",c={id:"autotraderx/masterlink/trader",title:"\u4e0b\u55ae\u7cfb\u7d71",description:"\u5206\u6790\u5b8c\u5143\u5bcc\u8b49\u5238\u7684 Python API \u4e4b\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u57fa\u65bc\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u958b\u767c\u4e00\u500b\u4e0b\u55ae\u7cfb\u7d71\u3002",source:"@site/docs/autotraderx/masterlink/trader.md",sourceDirName:"autotraderx/masterlink",slug:"/autotraderx/masterlink/trader",permalink:"/docs/autotraderx/masterlink/trader",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u4e0b\u55ae\u7cfb\u7d71\u5206\u6790",permalink:"/docs/autotraderx/masterlink/trader_analysis"},next:{title:"DocsaidKit",permalink:"/docs/category/docsaidkit"}},i={},d=[{value:"\u767b\u5165\u5e33\u865f",id:"\u767b\u5165\u5e33\u865f",level:2},{value:"\u67e5\u8a62\u5eab\u5b58",id:"\u67e5\u8a62\u5eab\u5b58",level:2},{value:"\u67e5\u8a62\u59d4\u8a17\u8cc7\u8a0a",id:"\u67e5\u8a62\u59d4\u8a17\u8cc7\u8a0a",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u4e0b\u55ae\u7cfb\u7d71",children:"\u4e0b\u55ae\u7cfb\u7d71"}),"\n",(0,t.jsx)(e.p,{children:"\u5206\u6790\u5b8c\u5143\u5bcc\u8b49\u5238\u7684 Python API \u4e4b\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u57fa\u65bc\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u958b\u767c\u4e00\u500b\u4e0b\u55ae\u7cfb\u7d71\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5927\u591a\u6578\u7684\u60c5\u5883\u4e0b\uff0c\u6211\u5011\u53ea\u6703\u55ae\u7368\u64cd\u4f5c\u4e00\u500b\u8b49\u5238\u5e33\u6236\uff0c\u6240\u4ee5\u6211\u5011\u76ee\u524d\u7684\u5be6\u4f5c\u662f\u57fa\u65bc\u55ae\u4e00\u5e33\u865f\u7684\u60c5\u5883\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u767b\u5165\u5e33\u865f",children:"\u767b\u5165\u5e33\u865f"}),"\n",(0,t.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u628a\u5e33\u865f\u5bc6\u78bc\u5beb\u5728\u985e\u5225\u7684\u8f38\u5165\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u53c3\u8003\u6211\u5011\u7684\u5beb\u6cd5\uff1a\u4f7f\u7528\u4e00\u500b yaml \u6a94\u6848\u4f86\u5132\u5b58\u5e33\u865f\u8cc7\u8a0a\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u53c3\u6578\u6a94\u6848\u4e2d\uff0c\u5fc5\u9808\u6709\u5e33\u865f\u5bc6\u78bc\u548c\u5e33\u865f\u865f\u78bc\uff0c\u9019\u6a23\u624d\u80fd\u9806\u5229\u767b\u5165\u5143\u5bcc\u8b49\u5238\u7684\u5e33\u865f\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'from autotraderx import Trader, load_yaml\n\n# Load account infos\ncfg = load_yaml(DIR / "account.yaml")\n\n# Login account\naccount = Trader(\n    user=cfg["user"],\n    password=cfg["password"],\n    account_number=str(cfg["account_number"]),\n    is_sim=False,\n    is_force=True,\n    is_event=False,\n)\n\naccount.login()\n# Do something\naccount.stop()\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u67e5\u8a62\u5eab\u5b58",children:"\u67e5\u8a62\u5eab\u5b58"}),"\n",(0,t.jsxs)(e.p,{children:["\u767b\u5165\u5e33\u865f\uff0c\u547c\u53eb ",(0,t.jsx)(e.code,{children:"get_inventory"})," \u51fd\u6578\uff0c\u5c31\u53ef\u4ee5\u67e5\u8a62\u76ee\u524d\u7684\u5eab\u5b58\u72c0\u6cc1\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u67e5\u8a62\u7d50\u679c\u6703\u76f4\u63a5\u986f\u793a\u5728\u547d\u4ee4\u5217\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230\u76ee\u524d\u7684\u5eab\u5b58\u72c0\u6cc1\uff0c\u5982\u679c\u8981\u53d6\u5f97\u8cc7\u8a0a\u505a\u9032\u4e00\u6b65\u5730\u4f7f\u7528\uff0c\u7528\u4e00\u500b\u8b8a\u6578\u627f\u63a5\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"data = account.get_inventory()\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"\u67e5\u8a62\u5eab\u5b58",src:r(17168).A+"",width:"3171",height:"627"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c",(0,t.jsx)(e.code,{children:"data"})," \u7684\u8f38\u51fa\u683c\u5f0f\u70ba\u4e00\u500b\u5b57\u5178\uff0c\u5167\u5bb9\u50cf\u662f\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"{\n    '2002': {\n        '\u80a1\u7968': '\u4e2d\u92fc',\n        '\u878d\u5238\u5eab\u5b58\uff08\u5f35\uff09': '0',\n        '\u878d\u8cc7\u5eab\u5b58\uff08\u5f35\uff09': '0',\n        '\u96c6\u4fdd\u5eab\u5b58\uff08\u5f35\uff09': '200',\n        '\u96f6\u80a1\u5eab\u5b58\uff08\u80a1\uff09': '0'\n    },\n    '2330': {\n        '\u80a1\u7968': '\u53f0\u7a4d\u96fb',\n        '\u878d\u5238\u5eab\u5b58\uff08\u5f35\uff09': '0',\n        '\u878d\u8cc7\u5eab\u5b58\uff08\u5f35\uff09': '0',\n        '\u96c6\u4fdd\u5eab\u5b58\uff08\u5f35\uff09': '200',\n        '\u96f6\u80a1\u5eab\u5b58\uff08\u80a1\uff09': '0'\n    },\n    # ...\u4ee5\u4e0b\u7701\u7565\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u4e0d\u9700\u8981\u986f\u793a\u5728\u547d\u4ee4\u5217\uff0c\u53ef\u4ee5\u5728\u521d\u59cb\u5316 ",(0,t.jsx)(e.code,{children:"Trader"})," \u6642\uff0c\u8a2d\u5b9a ",(0,t.jsx)(e.code,{children:"verbose"})," \u53c3\u6578\u70ba ",(0,t.jsx)(e.code,{children:"False"}),"\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"account = Trader(\n    ...,\n    verbose=False\n)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u67e5\u8a62\u59d4\u8a17\u8cc7\u8a0a",children:"\u67e5\u8a62\u59d4\u8a17\u8cc7\u8a0a"})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},17168:(n,e,r)=>{r.d(e,{A:()=>t});const t=r.p+"assets/images/get_inventory-eb33667bb33a3ac17715589d8779865d.jpg"},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>c});var t=r(96540);const s={},a=t.createContext(s);function o(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);