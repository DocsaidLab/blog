"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3076],{77296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(74848),a=t(28453);const i={sidebar_position:1},l="\u6982\u8ff0",s={id:"autotraderx/masterlink/intro",title:"\u6982\u8ff0",description:"\u7531\u65bc\u5143\u5bcc\u8b49\u5238\u6240\u63d0\u4f9b\u7684 API \u4e26\u6c92\u6709\u8db3\u5920\u7684\u6280\u8853\u6587\u4ef6\uff0c\u56e0\u6b64\u6211\u5011\u5fc5\u9808\u81ea\u5df1\u62c6\u89e3\u539f\u59cb\u78bc\uff0c\u4e26\u9032\u884c\u5206\u6790\u3002",source:"@site/docs/autotraderx/masterlink/intro.md",sourceDirName:"autotraderx/masterlink",slug:"/autotraderx/masterlink/intro",permalink:"/docs/autotraderx/masterlink/intro",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5143\u5bcc\u8b49\u5238",permalink:"/docs/category/\u5143\u5bcc\u8b49\u5238"},next:{title:"\u7533\u8acb API",permalink:"/docs/autotraderx/masterlink/apply_api"}},o={},d=[{value:"\u6848\u4f8b\u7d00\u9304",id:"\u6848\u4f8b\u7d00\u9304",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Example 4",id:"example-4",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u65bc\u5143\u5bcc\u8b49\u5238\u6240\u63d0\u4f9b\u7684 API \u4e26\u6c92\u6709\u8db3\u5920\u7684\u6280\u8853\u6587\u4ef6\uff0c\u56e0\u6b64\u6211\u5011\u5fc5\u9808\u81ea\u5df1\u62c6\u89e3\u539f\u59cb\u78bc\uff0c\u4e26\u9032\u884c\u5206\u6790\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5206\u6790\u7684\u904e\u7a0b\u4e2d\u770b\u5230\u5f88\u591a\u5f88\u7279\u5225\u7684\u5beb\u6cd5\uff0c\u4e5f\u7b97\u662f\u4e00\u7a2e\u5b78\u7fd2\u7684\u904e\u7a0b\u3002"}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"\u5143\u5bcc\u8b49\u5238\u7684 API \u4e0d\u662f\u958b\u6e90\u5c08\u6848\uff0c\u56e0\u6b64\u6211\u5011\u7121\u6cd5\u76f4\u63a5\u63a8\u9001\u4fee\u6539\u5f8c\u7684\u7a0b\u5f0f\u78bc\u3002"}),(0,r.jsx)(n.p,{children:"\u5982\u679c\u6211\u5011\u76f4\u63a5\u62ff\u4ed6\u5011\u767c\u5e03\u7684 whl \u6a94\u6848\u9032\u884c\u4fee\u6539\u5f8c\uff0c\u53e6\u5916\u91cd\u65b0\u767c\u5e03\u7684\u8a71\uff0c\u53ef\u80fd\u6703\u9055\u53cd\u4ed6\u5011\u7684\u4f7f\u7528\u689d\u6b3e\u3002"}),(0,r.jsx)(n.p,{children:"\u56e0\u6b64\u6211\u5011\u4e0d\u6703\u76f4\u63a5\u4fee\u6539\u4ed6\u5011\u7684\u7a0b\u5f0f\u78bc\uff0c\u800c\u662f\u57fa\u65bc\u4ed6\u5011\u7684\u5be6\u4f5c\uff0c\u518d\u900f\u904e\u6211\u5011\u81ea\u5df1\u7684\u7a0b\u5f0f\u78bc\u9032\u884c\u5c01\u88dd\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6848\u4f8b\u7d00\u9304",children:"\u6848\u4f8b\u7d00\u9304"}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="SolPYAPI/PY_Trade_package/MarketDataMart.py"',children:"class MarketDataMart:\n\n    #region \u7cfb\u7d71\u8a0a\u606f\u901a\u77e5\n    OnSystemEvent:callable = None\n    def Fire_OnSystemEvent(self, data:SystemEvent):\n        if self.OnSystemEvent == None:\n            return\n        if self.OnSystemEvent != None:\n            self.OnSystemEvent(data)\n    #endregion\n\n    # ...\u4ee5\u4e0b\u7701\u7565\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9019\u6bb5\u7a0b\u5f0f\u78bc\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"OnSystemEvent"})," \u88ab\u5b9a\u7fa9\u4e86\u4e4b\u5f8c\u537b\u6c92\u6709\u88ab\u4f7f\u7528\uff0c\u800c\u4e14\u5e7e\u4e4e\u6bcf\u500b\u65b9\u6cd5\u90fd\u6709\u4e00\u500b\u5ba3\u544a\u5728\u5916\u9762\u537b\u6c92\u6709\u88ab\u4f7f\u7528\u7684\u8b8a\u6578\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5011\u8a8d\u70ba\u5982\u679c\u53ea\u6709\u4e00\u5169\u500b\uff0c\u90a3\u53ef\u80fd\u662f\u5beb\u932f\uff0c\u4f46\u5230\u8655\u90fd\u662f\u7684\u8a71\uff0c\u53ef\u80fd\u662f\u4ed6\u5011\u67d0\u7a2e\u5167\u90e8\u7684\u898f\u683c\uff0c\u53ea\u662f\u6211\u5011\u5c1a\u672a\u7406\u89e3\u9019\u500b\u7528\u6cd5\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="SolPYAPI/PY_Trade_package/SolPYAPI_Model.py"',children:'class TSolQuoteFutSet():\n\n    N1:int = 1\n    N2:int = 2\n    N3:int = 3\n    N4:int = 4\n    N5:int = 5\n\n    MarketPriceOrder_Buy:str = "999999999"\n    """\u5e02\u50f9\u8cb7\u9032\u59d4\u8a17,\u884c\u60c5\u4ee59\u500b9\u4f86\u8868\u9054"""\n    MarketPriceOrder_Sell:str = "-999999999"\n    "\u5e02\u50f9\u8ce3\u51fa\u59d4\u8a17,\u884c\u60c5\u4ee59\u500b9\u4f86\u8868\u9054"\n    TryMark_Yes:str = "1"\n    "\u76e4\u524d\u8a66\u64ae"\n    TryMark_No:str = "0"\n    "\u76e4\u4e2d\u4ea4\u6613"\n    def __setattr__(self, *_):\n        raise Exception("Tried to change the value of a constant")\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6a21\u7d44\u5167\u6709\u5927\u91cf\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u5b57\u4e32\u6703\u76f4\u63a5\u88ab\u7576\u6210\u8a3b\u89e3\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="SolPYAPI/PY_Trade_package/SolClientOB.py"',children:"import datetime #line:1\nfrom threading import Lock #line:2\nfrom PY_Trade_package.SolLog import *#line:3\nfrom PY_Trade_package.SolPYAPI_Model import *#line:4\nfrom PY_Trade_package.Helper import MQCSHelper #line:5\n\n# ...\u4ee5\u4e0b\u7701\u7565\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6a21\u7d44\u5167\u6709\u5927\u91cf\u7684\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u5b58\u5728\u5f88\u591a\u975e\u5e38\u7cbe\u6e96\u7684\u8a3b\u89e3\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="SolPYAPI/PY_Trade_package/SolClientOB.py"',children:"class SolClient :#line:93\n    host =''#line:95\n    vpn =''#line:96\n    username =''#line:97\n    password =''#line:98\n    cacheName ='dc01'#line:99\n    clientName =''#line:100\n    cacheRequestTimeoutInMsecs =50000 #line:101\n    requestTimeoutInMsecs =50000 #line:102\n    session =None #line:103\n    context =None #line:104\n    Jan1st1970 =datetime .datetime (1970 ,1 ,1 ,0 ,0 ,0 ,tzinfo =datetime .timezone .utc )#line:106\n    def __init__ (O00000O000O0O000O ,OO0000O0OOOOOOO0O :str ,OOOO0OO00O00OOO00 :str ,O00O0OO0OO00OOOOO :str ,OO000OO0O0O00O0OO :str ,O0OOO0O0000OO000O :SolaceLog ,clientName :str =\"\"):#line:107\n# ...\u4ee5\u4e0b\u7701\u7565\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u67d0\u500b\u7a0b\u5f0f\u6a94\u6848\u4e2d\uff0c\u731d\u4e0d\u53ca\u9632\u5730\u51fa\u73fe\u4e86\u7a0b\u5f0f\u78bc\u6df7\u6dc6\u7684\u52a0\u5bc6\u624b\u6cd5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u986f\u7136\u5143\u5bcc\u8b49\u5238\u8a8d\u70ba\u9019\u500b\u6a94\u6848\u7684\u5167\u5bb9\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u6b64\u5c0d\u9019\u500b\u6a94\u6848\u9032\u884c\u4e86\u6df7\u6dc6\u52a0\u5bc6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u4f60\u9700\u8981\u63d0\u9ad8\u7a0b\u5f0f\u7684\u53ef\u8b80\u6027\uff0c\u6211\u5011\u5efa\u8b70\u4f60\u53ef\u4ee5\u5728\u7de8\u8f2f\u5668\u5167\u76f4\u63a5\u9032\u884c\u5b57\u4e32\u53d6\u4ee3\uff0c\u627e\u56de\u539f\u672c\u7684\u5b57\u4e32\uff0c\u9019\u500b\u904e\u7a0b\u5927\u6982\u6703\u803d\u8aa4\u4f60\u5e7e\u5206\u9418\u7684\u6642\u9593\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);