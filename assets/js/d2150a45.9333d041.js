"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2147],{89445:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=r(74848),i=r(28453);const l={sidebar_position:4},d="\u4e0b\u55ae\u7cfb\u7d71\u5206\u6790",c={id:"autotraderx/masterlink/trader_analysis",title:"\u4e0b\u55ae\u7cfb\u7d71\u5206\u6790",description:"MasterTradePy",source:"@site/docs/autotraderx/masterlink/trader_analysis.md",sourceDirName:"autotraderx/masterlink",slug:"/autotraderx/masterlink/trader_analysis",permalink:"/docs/autotraderx/masterlink/trader_analysis",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5831\u50f9\u7cfb\u7d71\u5206\u6790",permalink:"/docs/autotraderx/masterlink/quotation_analysis"},next:{title:"\u56de\u6e2c\u7cfb\u7d71\u5206\u6790",permalink:"/docs/autotraderx/masterlink/backtesting_analysis"}},t={},a=[{value:"MasterTradePy",id:"mastertradepy",level:2},{value:"\u5b98\u65b9\u6280\u8853\u6587\u4ef6",id:"\u5b98\u65b9\u6280\u8853\u6587\u4ef6",level:2},{value:"\u6838\u5fc3\u6a21\u7d44",id:"\u6838\u5fc3\u6a21\u7d44",level:2},{value:"Solace",id:"solace",level:3},{value:"SolClient",id:"solclient",level:3},{value:"SorApi",id:"sorapi",level:3},{value:"MarketTrader",id:"markettrader",level:3},{value:"Order",id:"order",level:3},{value:"ReportOrder",id:"reportorder",level:3},{value:"MasterTradeAPI",id:"mastertradeapi",level:3}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u4e0b\u55ae\u7cfb\u7d71\u5206\u6790",children:"\u4e0b\u55ae\u7cfb\u7d71\u5206\u6790"}),"\n",(0,s.jsx)(e.h2,{id:"mastertradepy",children:"MasterTradePy"}),"\n",(0,s.jsx)(e.p,{children:"\u7576\u4f60\u4e0b\u8f09\u5b8c\u5143\u5bcc\u8b49\u5238\u7684 Python \u6a21\u7d44\u5f8c\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u5b89\u88dd\u4e0b\u55ae\u7cfb\u7d71\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-powershell",children:"pip install .\\MasterLink_PythonAPI\\MasterTradePy\\MasterTradePy\\64bit\\MasterTradePy-0.0.23-py3-none-win_amd64.whl\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["\u5728\u6211\u5011\u4f7f\u7528\u6642\uff0c\u8a72\u5957\u4ef6\u7684\u7248\u672c\u70ba ",(0,s.jsx)(e.code,{children:"0.0.23"}),"\u3002"]})}),"\n",(0,s.jsx)(e.h2,{id:"\u5b98\u65b9\u6280\u8853\u6587\u4ef6",children:"\u5b98\u65b9\u6280\u8853\u6587\u4ef6"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://mlapi.masterlink.com.tw/web_api/service/document/python-trade",children:(0,s.jsx)(e.strong,{children:"\u5143\u5bcc\u8b49\u5238-\u4e0b\u55ae API"})})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/AutoTraderX/blob/main/MasterLink_PythonAPI/MasterTradePy/MasterTradePy/64bit/sample.py",children:(0,s.jsx)(e.strong,{children:"\u5b98\u65b9\u7a0b\u5f0f\u7bc4\u4f8b\uff1asample.py"})})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6838\u5fc3\u6a21\u7d44",children:"\u6838\u5fc3\u6a21\u7d44"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5011\u628a\u5143\u5bcc\u8b49\u5238\u7684 Python \u6a21\u7d44\u62c6\u89e3\u6210\u4ee5\u4e0b\u5e7e\u500b\u6838\u5fc3\u6a21\u7d44\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"solace",children:"Solace"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"Solace \u662f\u4e00\u5bb6\u63d0\u4f9b\u9ad8\u6548\u80fd\u6d88\u606f\u50b3\u905e\u4e2d\u4ecb\u8edf\u9ad4\u548c\u76f8\u95dc\u670d\u52d9\u7684\u516c\u53f8\uff0c\u5176\u6280\u8853\u7279\u5225\u9069\u7528\u65bc\u5be6\u6642\u8cc7\u6599\u6d41\u548c\u4e8b\u4ef6\u9a45\u52d5\u7684\u67b6\u69cb\u3002"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u5011\u6703\u5728\u7a0b\u5f0f\u4e2d\u770b\u5230\u5927\u91cf\u7684 ",(0,s.jsx)(e.code,{children:"Solace"})," \u985e\u5225\uff0c\u9019\u4e9b\u985e\u5225\u662f\u7528\u4f86\u8207 Solace \u6d88\u606f\u4ee3\u7406\u9032\u884c\u901a\u4fe1\u7684\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Messaging Service"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"MessagingService"}),": \u9019\u662f\u6d88\u606f\u670d\u52d9\u7684\u4e3b\u8981\u63a5\u53e3\uff0c\u7528\u65bc\u914d\u7f6e\u548c\u5efa\u7acb\u8207 Solace \u6d88\u606f\u4ee3\u7406\u7684\u9023\u63a5\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ReconnectionListener"}),": \u9019\u4e9b\u63a5\u53e3\u7528\u65bc\u8655\u7406\u9023\u63a5\u4e2d\u65b7\u548c\u91cd\u9023\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ReconnectionAttemptListener"}),": \u9019\u4e9b\u63a5\u53e3\u7528\u65bc\u8655\u7406\u9023\u63a5\u4e2d\u65b7\u548c\u91cd\u9023\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ServiceInterruptionListener"}),": \u9019\u4e9b\u63a5\u53e3\u7528\u65bc\u8655\u7406\u9023\u63a5\u4e2d\u65b7\u548c\u91cd\u9023\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"RetryStrategy"}),": \u9019\u500b\u63a5\u53e3\u7528\u65bc\u5b9a\u7fa9\u6d88\u606f\u91cd\u50b3\u7684\u7b56\u7565\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ServiceEvent"}),": \u8655\u7406\u6709\u95dc\u670d\u52d9\u751f\u547d\u9031\u671f\u7684\u4e8b\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Topic Subscription"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"TopicSubscription"}),": \u7528\u65bc\u8a02\u95b1\u7279\u5b9a\u4e3b\u984c\u7684\u6d88\u606f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Message Receiver and Publisher"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"MessageHandler"}),": \u9019\u4e9b\u7528\u65bc\u8655\u7406\u63a5\u6536\u5230\u7684\u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"InboundMessage"}),": \u9019\u4e9b\u7528\u65bc\u8655\u7406\u63a5\u6536\u5230\u7684\u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"DirectMessageReceiver"}),": \u76f4\u63a5\u5f9e\u6d88\u606f\u4ee3\u7406\u63a5\u6536\u6d88\u606f\u7684\u63a5\u6536\u5668\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"OutboundMessage"}),": \u8868\u793a\u8981\u767c\u9001\u7684\u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"RequestReplyMessagePublisher"}),": \u7528\u65bc\u767c\u5e03\u8acb\u6c42\u4e26\u63a5\u6536\u56de\u61c9\u7684\u6d88\u606f\u767c\u5e03\u8005\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"PublishFailureListener"}),": \u9019\u4e9b\u7528\u65bc\u8655\u7406\u6d88\u606f\u767c\u5e03\u5931\u6557\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"FailedPublishEvent"}),": \u9019\u4e9b\u7528\u65bc\u8655\u7406\u6d88\u606f\u767c\u5e03\u5931\u6557\u7684\u4e8b\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Topic and Caching"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Topic"}),": \u8868\u793a\u6d88\u606f\u4e3b\u984c\uff0c\u53ef\u4ee5\u662f\u52d5\u614b\u7684\u6216\u56fa\u5b9a\u7684\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"CachedMessageSubscriptionRequest"}),": \u8655\u7406\u5c0d\u7de9\u5b58\u6d88\u606f\u7684\u8a02\u95b1\u8acb\u6c42\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"CacheRequestOutcomeListener"}),": \u8655\u7406\u7de9\u5b58\u8acb\u6c42\u7d50\u679c\u7684\u63a5\u53e3\u548c\u985e\u5225\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"CacheRequestOutcome"}),": \u8655\u7406\u7de9\u5b58\u8acb\u6c42\u7d50\u679c\u7684\u63a5\u53e3\u548c\u985e\u5225\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Life Cycle and Utility"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"TerminationNotificationListener"}),": \u9019\u4e9b\u7528\u65bc\u8655\u7406\u7d44\u4ef6\u7d42\u6b62\u7684\u901a\u77e5\u548c\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"TerminationEvent"}),": \u9019\u4e9b\u7528\u65bc\u8655\u7406\u7d44\u4ef6\u7d42\u6b62\u7684\u901a\u77e5\u548c\u4e8b\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"solclient",children:"SolClient"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u500b\u985e\u5c01\u88dd\u4e86\u4f7f\u7528 Solace \u6d88\u606f\u50b3\u905e\u7cfb\u7d71\u7684\u4e00\u7cfb\u5217\u529f\u80fd\uff0c\u4e3b\u8981\u7528\u65bc\u5275\u5efa\u9023\u63a5\u3001\u7ba1\u7406\u8a02\u95b1\u3001\u767c\u9001\u548c\u63a5\u6536\u6d88\u606f\u7b49\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"__init__"})})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76ee\u7684"}),"\uff1a\u4f7f\u7528\u5fc5\u8981\u7684\u914d\u7f6e\u53c3\u6578\u548c\u7528\u6236\u6191\u8b49\u521d\u59cb\u5316 ",(0,s.jsx)(e.code,{children:"SolClient"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53c3\u6578"}),"\uff1a",(0,s.jsx)(e.code,{children:"clientname"}),"\u3001",(0,s.jsx)(e.code,{children:"sol_config"}),"\u3001",(0,s.jsx)(e.code,{children:"username"}),"\uff08\u53ef\u9078\uff09\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\uff1a\u8a2d\u7f6e\u9023\u63a5\u72c0\u614b\u7684\u9ed8\u8a8d\u503c\u3001\u6d88\u606f\u670d\u52d9\u5c0d\u8c61\u4ee5\u53ca\u7528\u6236\u6191\u8b49\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"create_connection"})})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76ee\u7684"}),"\uff1a\u4f7f\u7528\u63d0\u4f9b\u7684\u914d\u7f6e\u548c\u8655\u7406\u7a0b\u5e8f\u8207 Solace \u4ee3\u7406\u5efa\u7acb\u9023\u63a5\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53c3\u6578"}),"\uff1a",(0,s.jsx)(e.code,{children:"message_handler"})," \u548c ",(0,s.jsx)(e.code,{children:"service_handler"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u69cb\u5efa\u57fa\u65bc\u6703\u8a71\u53c3\u6578\u7684\u4ee3\u7406\u5c6c\u6027\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u521d\u59cb\u5316\u5e36\u6709\u91cd\u9023\u7b56\u7565\u548c\u5176\u4ed6\u914d\u7f6e\u7684 ",(0,s.jsx)(e.code,{children:"MessagingService"}),"\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u9023\u63a5\u670d\u52d9\u4e26\u914d\u7f6e\u6d88\u606f\u63a5\u6536\u5668\u548c\u767c\u5e03\u5668\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u555f\u52d5\u6d88\u606f\u63a5\u6536\u5668\u548c\u767c\u5e03\u5668\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6aa2\u67e5\u9023\u63a5\u72c0\u614b\u4e26\u8fd4\u56de\u9069\u7576\u7684\u97ff\u61c9\u4ee3\u78bc\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"disconnect"})})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76ee\u7684"}),"\uff1a\u6b63\u78ba\u65b7\u958b\u6d88\u606f\u670d\u52d9\u4e26\u6e05\u7406\u8cc7\u6e90\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7d42\u6b62\u6d88\u606f\u63a5\u6536\u5668\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u65b7\u958b\u6d88\u606f\u670d\u52d9\u7684\u9023\u63a5\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u91cd\u7f6e\u9023\u63a5\u72c0\u614b\u6a19\u8a8c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"send_request"})})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76ee\u7684"}),"\uff1a\u5411\u6307\u5b9a\u4e3b\u984c\u767c\u9001\u8acb\u6c42\u6d88\u606f\u4e26\u7b49\u5f85\u56de\u61c9\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53c3\u6578"}),"\uff1a",(0,s.jsx)(e.code,{children:"topic"}),"\u3001",(0,s.jsx)(e.code,{children:"msg"}),"\uff08\u6d88\u606f\u5167\u5bb9\uff09\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u69cb\u5efa\u6d88\u606f\u4e26\u5c07\u5176\u767c\u9001\u5230\u6307\u5b9a\u4e3b\u984c\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5728\u6307\u5b9a\u8d85\u6642\u5167\u7b49\u5f85\u4e26\u8655\u7406\u56de\u8986\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8655\u7406\u767c\u9001\u6d88\u606f\u904e\u7a0b\u4e2d\u7684\u7570\u5e38\u548c\u932f\u8aa4\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"add_subscription"})})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76ee\u7684"}),"\uff1a\u8a02\u95b1\u6307\u5b9a\u4e3b\u984c\u4ee5\u63a5\u6536\u5176\u4e0a\u767c\u5e03\u7684\u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53c3\u6578"}),"\uff1a",(0,s.jsx)(e.code,{children:"topic"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\uff1a\u5411\u6d88\u606f\u63a5\u6536\u5668\u6dfb\u52a0\u4e3b\u984c\u8a02\u95b1\u4e26\u9032\u884c\u932f\u8aa4\u8655\u7406\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"remove_subscription"})})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76ee\u7684"}),"\uff1a\u5f9e\u4e3b\u984c\u4e2d\u79fb\u9664\u73fe\u6709\u7684\u8a02\u95b1\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53c3\u6578"}),"\uff1a",(0,s.jsx)(e.code,{children:"topic"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\uff1a\u5f9e\u6d88\u606f\u63a5\u6536\u5668\u4e2d\u79fb\u9664\u4e3b\u984c\u8a02\u95b1\u4e26\u9032\u884c\u932f\u8aa4\u8655\u7406\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"request_cached_only"})})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76ee\u7684"}),"\uff1a\u50c5\u8acb\u6c42\u4f86\u81ea\u7de9\u5b58\u7684\u6d88\u606f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53c3\u6578"}),"\uff1a",(0,s.jsx)(e.code,{children:"cachename"}),"\u3001",(0,s.jsx)(e.code,{children:"topic"}),"\u3001",(0,s.jsx)(e.code,{children:"timeout"}),"\u3001",(0,s.jsx)(e.code,{children:"cacheId"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5275\u5efa\u50c5\u7de9\u5b58\u7684\u8a02\u95b1\u8acb\u6c42\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u63d0\u4ea4\u7de9\u5b58\u8acb\u6c42\u4e26\u4f7f\u7528\u81ea\u5b9a\u7fa9\u76e3\u807d\u5668\u76e3\u807d\u5b8c\u6210\u6216\u5931\u6557\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"GetRequestID"})})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u76ee\u7684"}),"\uff1a\u70ba\u9700\u8981\u552f\u4e00\u8b58\u5225\u7684\u64cd\u4f5c\u751f\u6210\u552f\u4e00\u7684\u8acb\u6c42 ID\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c"}),"\uff1a\u751f\u6210\u57fa\u65bc\u6642\u9593\u6233\u7684 ID\uff0c\u78ba\u4fdd\u5b83\u5927\u65bc\u4e0a\u6b21\u4f7f\u7528\u7684 ID\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"sorapi",children:"SorApi"}),"\n",(0,s.jsx)(e.p,{children:"\u8a72\u985e\u5225\u662f\u4e00\u500b\u5c01\u88dd\u4e86\u8207\u8b49\u5238\u8a02\u55ae\u8def\u7531\u7cfb\u7d71\uff08SORS\uff09\u6e9d\u901a\u7684\u63a5\u53e3\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u500b\u985e\u5225\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u529f\u80fd\uff0c\u5141\u8a31\u7528\u6236\u9023\u63a5\u3001\u767c\u9001\u8acb\u6c42\u3001\u63a5\u6536\u548c\u8655\u7406\u56de\u5831\u7b49\uff0c\u4e5f\u5c31\u662f\u8aaa\uff0c\u9019\u500b\u662f\u9023\u63a5\u5238\u5546\u4e0b\u55ae\u7cfb\u7d71\u7684\u672c\u9ad4 API\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u65bc\u9019\u500b API \u5167\u5927\u90e8\u5206\u7684\u529f\u80fd\u88ab\u5c01\u88dd\u5728 .dll \u6a94\u6848\u5167\uff0c\u6240\u4ee5\u4e5f\u662f\u5143\u5bcc\u8b49\u5238\u70ba\u4f55\u8981\u9650\u5b9a\u4f7f\u7528 Windows \u7cfb\u7d71\u7684\u539f\u56e0\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u4f86\u6211\u5011\u60f3\u628a\u9019\u4e9b .dll \u6a94\u6848\u4e5f\u4e00\u8d77\u62c6\u4e86\uff0c\u4f46\u662f\u62c6\u4e86\u4e5f\u4e0d\u80fd\u505a\u4ec0\u9ebc\uff0c\u6240\u4ee5\u5c31\u5148\u7b97\u4e86\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u7e3d\u4e4b\uff0c\u5728\u5176\u4ed6\u7a0b\u5f0f\u4e2d\uff0c\u82e5\u6709\u770b\u5230\u985e\u4f3c ",(0,s.jsx)(e.code,{children:"OnSorConnect"})," \u9019\u7a2e\uff0c\u6709 ",(0,s.jsx)(e.code,{children:"Sor"})," \u7684\u5b57\u773c\uff0c\u90a3\u5c31\u662f\u6703\u9001\u5230\u9019\u500b\u6a21\u7d44\u4f86\u4f7f\u7528\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"markettrader",children:"MarketTrader"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u662f\u4e00\u500b ABC \u985e\u5225\uff0c\u5b9a\u7fa9\u4e86\u4ea4\u6613\u7684\u57fa\u672c\u529f\u80fd\uff0c\u4f46\u6c92\u6709\u4efb\u4f55\u5be6\u4f5c\uff0c\u9700\u8981\u6211\u5011\u81ea\u5df1\u5b8c\u6210\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5b9a\u7fa9\u5167\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="MasterTradePy\\64bit\\MasterTradePy\\model.py"',children:"class MarketTrader(metaclass=ABCMeta):\n    @ abstractmethod\n    def OnNewOrderReply(self, data) -> None:\n        pass\n\n    @ abstractmethod\n    def OnChangeReply(self, data) -> None:\n        pass\n\n    @ abstractmethod\n    def OnCancelReply(self, data) -> None:\n        pass\n\n    @ abstractmethod\n    def OnReport(self, data) -> None:\n        pass\n\n    @ abstractmethod\n    def OnAnnouncementEvent(self, data)->None:\n        pass\n\n    @ abstractmethod\n    def OnSystemEvent(self, event: SystemEvent) -> None:\n        pass\n\n    @ abstractmethod\n    def OnError(self, error: MTPYError):\n        pass\n\n    @ abstractmethod\n    def OnReqResult(self, workid: str, data):\n        pass\n"})}),"\n",(0,s.jsx)(e.h3,{id:"order",children:"Order"}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u662f\u4e00\u500b\u8a02\u55ae\u7684 ",(0,s.jsx)(e.code,{children:"dataclass"})," \u985e\u5225\uff0c\u5b9a\u7fa9\u4e86\u8a02\u55ae\u5167\u6240\u6709\u8cc7\u6599\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="MasterTradePy\\64bit\\MasterTradePy\\model.py"',children:'@dataclass\nclass Order:\n    sorRID: str = field(init = False, default=\'\')\n    exchange: Exchange = field(init = False, default=Exchange.TWSE)\n    tradingSession: TradingSession = ""\n    side: Side = field(default="")\n    symbol: str = field(default="")\n    priceType: PriceType = field(default="")\n    price: str = field(default="")\n    tradingUnit: TradingUnit = field(default=0)\n    qty: str = field(default="")\n    orderType: OrderType = field(default="")\n    tradingType: TradingType = field(init = False, default="")\n    brokerNo: str = field(init = False, default="")\n    userDef: str = ""\n    tradingAccount: str = ""\n    ordNo: str = field(init = False, default="")\n    trxTime: str = field(init = False, default="")\n    lastdealTime: str = field(init = False, default="")\n    status: str = field(init = False, default="")\n    leavesQty: str = field(init = False, default="")\n    cumQty: str = field(init = False, default="")\n    dealPri: str = field(init = False, default="")\n    tableName : str = ""\n'})}),"\n",(0,s.jsx)(e.h3,{id:"reportorder",children:"ReportOrder"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"\u6211\u5011\u4e0d\u63a8\u85a6\u4efb\u4f55\u80a1\u7968\uff0c\u6240\u6709\u95dc\u65bc\u8b49\u5238\u6236\u5167\u7684\u80a1\u7968\u8cc7\u8a0a\u90fd\u6703\u4ee5\u99ac\u8cfd\u514b\u8655\u7406\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u662f\u547c\u53eb API \u7684\u6642\u5019\u5be6\u969b\u4e0a\u6703\u62ff\u5230\u7684\u8a02\u55ae\u56de\u5831\u8cc7\u6599\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:'title="MasterTradePy\\64bit\\MasterTradePy\\model.py"',children:'@dataclass\nclass ReportOrder:\n    orgOrder: Order\n    order: Order\n    lastMessage: str = field(init = False, default="")\n    scBalance: str =  field(init = False, default="")\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5b83\u5305\u542b\u4e86 ",(0,s.jsx)(e.code,{children:"orgOrder"})," \u548c ",(0,s.jsx)(e.code,{children:"order"})," \u5169\u7a2e\u72c0\u614b\uff0c\u6211\u5011\u8a8d\u70ba\u9019\u53ef\u80fd\u4ee3\u8868\u539f\u59cb\u7684\u8a02\u55ae\u548c\u7d93\u904e\u4ea4\u6613\u6240\u78ba\u8a8d\u5f8c\u7684\u8a02\u55ae\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u5be6\u969b\u5c55\u793a\u5f9e\u7cfb\u7d71\u4e2d\u53d6\u5f97\u4e4b\u59d4\u8a17\u56de\u5831\u8207\u6210\u4ea4\u56de\u5831\u5167\u5bb9\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"1. \u59d4\u8a17\u56de\u5831"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"ReportOrder(\n  orgOrder=Order(\n    sorRID='592zj00420005coSG200',\n    exchange=<Exchange.TWSE: 'TWSE'>,\n    tradingSession='N',\n    side='S',\n    symbol='2002',\n    priceType='L',\n    price='24',\n    tradingUnit=0,\n    qty='2000',\n    orderType='R',\n    tradingType='',\n    brokerNo='',\n    userDef='',\n    tradingAccount='\u6211\u662f\u99ac\u8cfd\u514b',\n    ordNo='',\n    trxTime='',\n    lastdealTime='',\n    status='',\n    leavesQty='',\n    cumQty='',\n    dealPri='',\n    tableName=''\n  ),\n  order=Order(\n    sorRID='',\n    exchange=<Exchange.TWSE: 'TWSE'>,\n    tradingSession='N',\n    side='S',\n    symbol='2002',\n    priceType='L',\n    price='24',\n    tradingUnit=0,\n    qty='2000',\n    orderType='R',\n    tradingType='',\n    brokerNo='',\n    userDef='',\n    tradingAccount='\u6211\u662f\u99ac\u8cfd\u514b',\n    ordNo='j0042',\n    trxTime='08:31:31.926000',\n    lastdealTime='',\n    status='101)\u59d4\u8a17\u5df2\u63a5\u53d7(\u4ea4\u6613\u6240\u5df2\u63a5\u53d7)',\n    leavesQty='2000',\n    cumQty='0',\n    dealPri='',\n    tableName='ORD:TwsOrd'),\n    lastMessage='',\n    scBalance=''\n  )\n)\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"2. \u6210\u4ea4\u56de\u5831"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"ReportOrder(\n  orgOrder=Order(\n    sorRID='592zj00390005coPW400',\n    exchange=<Exchange.TWSE: 'TWSE'>,\n    tradingSession='N',\n    side='S',\n    symbol='3481',\n    priceType='L',\n    price='13.7',\n    tradingUnit=0,\n    qty='4000',\n    orderType='R',\n    tradingType='',\n    brokerNo='',\n    userDef='',\n    tradingAccount='\u6211\u662f\u99ac\u8cfd\u514b',\n    ordNo='',\n    trxTime='',\n    lastdealTime='',\n    status='',\n    leavesQty='',\n    cumQty='',\n    dealPri='',\n    tableName=''\n  ),\n  order=Order(\n    sorRID='',\n    exchange=<Exchange.TWSE: 'TWSE'>,\n    tradingSession='N',\n    side='S',\n    symbol='3481',\n    priceType='L',\n    price='13.7',\n    tradingUnit=0,\n    qty='4000',\n    orderType='R',\n    tradingType='',\n    brokerNo='',\n    userDef='',\n    tradingAccount='\u6211\u662f\u99ac\u8cfd\u514b',\n    ordNo='j0039',\n    trxTime='08:31:31.926000',\n    lastdealTime='09:00:11.609000',\n    status='111)\u5168\u90e8\u6210\u4ea4',\n    leavesQty='0',\n    cumQty='4000',\n    dealPri='',\n    tableName='ORD:TwsOrd'),\n    lastMessage='',\n    scBalance=''\n  )\n)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.admonition,{type:"warning",children:[(0,s.jsxs)(e.p,{children:["\u5728\u6211\u5011\u7684\u6e2c\u8a66\u4e2d\uff0c\u8a02\u55ae\u8cc7\u6599\u7684 ",(0,s.jsx)(e.code,{children:"ReportOrder.order.dealPri"})," \u6b04\u4f4d\u5373\u4f7f\u5728\u6210\u4ea4\u4e4b\u5f8c\u662f\u4ecd\u662f\u7a7a\u7684\uff0c\u6240\u4ee5\u6211\u5011\u7121\u6cd5\u5f97\u77e5\u6210\u4ea4\u50f9\u683c\u3002"]}),(0,s.jsx)(e.p,{children:"\u59d1\u4e14\u61f7\u7591\u662f\u4e00\u500b bug\uff0c\u4f46\u6211\u5011\u7121\u6cd5\u78ba\u5b9a\u3002"})]}),"\n",(0,s.jsx)(e.h3,{id:"mastertradeapi",children:"MasterTradeAPI"}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u500b\u662f\u5728\u6700\u5916\u5c64\uff0c\u4e5f\u5c31\u662f\u8b93\u6211\u5011\u4f7f\u7528\u8005\u76f4\u63a5\u7528\u4f86\u64cd\u4f5c\u4e0b\u55ae\u7684 API\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u9019\u88e1\uff0c\u6211\u5011\u8ddf\u8457\u5143\u5bcc\u8b49\u5238\u63d0\u4f9b\u7684\u7bc4\u4f8b\u7a0b\u5f0f: ",(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/AutoTraderX/blob/main/MasterLink_PythonAPI/MasterTradePy/MasterTradePy/64bit/sample.py",children:(0,s.jsx)(e.strong,{children:"sample.py"})}),"\uff0c\u521d\u6b65\u770b\u4e00\u4e0b\u4f7f\u7528\u65b9\u5f0f\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["Step 1: \u5275\u5efa\u4e00\u500b ",(0,s.jsx)(e.code,{children:"MarketTrader"})," \u985e\u5225\u5be6\u4f8b\uff0c\u4e26\u4f5c\u70ba\u8f38\u5165\u53c3\u6578"]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"api = MasterTradeAPI(MarketTrader())\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Step 2: \u9023\u63a5\u5230\u5143\u5bcc\u8b49\u5238\u7684\u4e0b\u55ae\u7cfb\u7d71"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# \u9023\u63a5\u76ee\u6a19\u662f\u56fa\u5b9a\u7684\napi.SetConnectionHost('solace140.masterlink.com.tw:55555')\n\n# \u8f38\u5165\u5e33\u865f\u5bc6\u78bc\uff0c\u4e26\u6307\u5b9a\u767b\u5165\u72c0\u614b\n# is_sim: \u662f\u5426\u9023\u7dda\u6a21\u64ec\u4e3b\u6a5f\uff0cTrue \u70ba\u9023\u63a5\u6a21\u64ec\u4e3b\u6a5f\uff0cFalse \u70ba\u9023\u63a5\u6b63\u5f0f\u4e3b\u6a5f\n# is_force: \u662f\u5426\u5f37\u5236\u767b\u5165\uff0cTrue \u70ba\u5f37\u5236\u767b\u5165\uff0cFalse \u70ba\u6b63\u5e38\u767b\u5165\n# is_event: \u662f\u5426\u70ba\u7279\u5b9a\u4e8b\u4ef6\uff08\u5982\u7af6\u8cfd\uff09\u7684\u767b\u5165\uff0cTrue \u70ba\u555f\u7528\u4e8b\u4ef6\uff0cFalse \u70ba\u4e0d\u555f\u7528\u4e8b\u4ef6\nrc = api.Login(username, password, is_sim, is_force, is_event)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u767b\u5165\u7684\u904e\u7a0b\u4e2d\uff0c\u7a0b\u5f0f\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"SolClient"})," \u4f86\u5efa\u7acb\u7cfb\u7d71\u8a0a\u606f\u7684\u9023\u63a5\uff1b\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"SorApi"})," \u4f86\u5efa\u7acb\u4e0b\u55ae\u7cfb\u7d71\u7684\u9023\u63a5\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u767b\u5165\u5f8c\u6703\u9032\u884c\u96d9\u56e0\u5b50\u9a57\u8b49\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"accounts = [x[4:] for x in api.accounts]\nrcc = api.CheckAccs(tradingAccounts=accounts)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f9e\u9019\u500b\u96d9\u56e0\u5b50\u9a57\u8b49\u63a1\u7528 List \u7684\u65b9\u5f0f\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u51fa\u9019\u500b API \u662f\u652f\u63f4\u591a\u5e33\u865f\u7684\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e5f\u5c31\u662f\u8aaa\uff0c\u6211\u5011\u53ef\u4ee5\u91cd\u8907\u547c\u53eb ",(0,s.jsx)(e.code,{children:"api.Login"})," \u4f86\u767b\u5165\u4e0d\u540c\u7684\u5e33\u865f\uff0c\u7136\u5f8c\u5728\u4ea4\u6613\u6642\u6307\u5b9a\u4f7f\u7528\u54ea\u4e00\u500b\u5e33\u865f\u4f86\u4e0b\u55ae\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Step 3: \u4e0b\u55ae"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0b\u55ae\u6642\uff0c\u5fc5\u9808\u8981\u5b8c\u6210\u4e00\u500b ",(0,s.jsx)(e.code,{children:"Order"})," \u7684\u7269\u4ef6\u8a2d\u5b9a\uff0c\u7136\u5f8c\u547c\u53eb ",(0,s.jsx)(e.code,{children:"api.NewOrder"})," \u4f86\u4e0b\u55ae\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from MasterTradePy.model import *\n\nsymbol = input(u'\u8acb\u8f38\u5165\u6b32\u8cb7\u9032\u80a1\u7968\u4ee3\u865f:')\napi.ReqBasic(symbol)\naccount = input(u'\u8acb\u8f38\u5165\u4e0b\u55ae\u5e33\u865f:')\nprice = input(u'\u8acb\u8f38\u5165\u6b32\u8cb7\u9032\u80a1\u7968\u50f9\u683c(\u7a7a\u767d\u8868\u793a\u5e02\u50f9\u4e0b\u55ae):')\nqty = input(u'\u8acb\u8f38\u5165\u6b32\u8cb7\u9032\u80a1\u7968\u80a1\u6578(1\u5f35\u8acb\u8f38\u51651000):')\norderTypeSymbol = input(u'\u8acb\u8f38\u5165\u985e\u5225(I:IOC, F:FOK, \u5176\u4ed6:ROD):')\n\norderType = OrderType.ROD\nif orderTypeSymbol == 'I':\n    orderType = OrderType.IOC\nelif orderTypeSymbol == 'F':\n    orderType = OrderType.FOK\n\nif not price:\n    priceType = PriceType.MKT\nelse:\n    priceType = PriceType.LMT\n\norder = Order(tradingSession=TradingSession.NORMAL,\n            side=Side.Buy,\n            symbol=symbol,\n            priceType=priceType,\n            price=price,\n            tradingUnit=TradingUnit.COMMON,\n            qty=qty,\n            orderType=orderType,\n            tradingAccount=account,\n            userDef='')\nrcode = api.NewOrder(order)\nif rcode == RCode.OK:\n    print(u'\u5df2\u9001\u51fa\u59d4\u8a17')\nelse:\n    print(u'\u4e0b\u55ae\u5931\u6557! \u8acb\u518d\u6b21\u57f7\u884c\u7a0b\u5f0f\uff0c\u4f9d\u64da\u56de\u5831\u8cc7\u6599\u4fee\u6b63\u8f38\u5165')\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Step 4: \u6539\u50f9"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5148\u8abf\u7528 ",(0,s.jsx)(e.code,{children:"OrderPriceChange"})," \u4f86\u8a2d\u5b9a\u55ae\u865f\uff0c\u518d\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"api.ChangeOrderPrice"})," \u4f86\u6539\u50f9\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from MasterTradePy.model import *\n\nordNo = input(u'\u8acb\u8f38\u5165\u55ae\u865f:')\naccount = input(u'\u8acb\u8f38\u5165\u4e0b\u55ae\u5e33\u865f:')\nprice = input(u'\u8acb\u8f38\u5165\u80a1\u7968\u50f9\u683c(\u7a7a\u767d\u8868\u793a\u5e02\u50f9\u4e0b\u55ae):')\nreplaceOrder = OrderPriceChange(ordNo=ordNo, price=price,tradingAccount=account)\n\nrcode = api.ChangeOrderPrice(replaceOrder)\nif rcode == RCode.OK:\n    print(u'\u5df2\u9001\u51fa\u59d4\u8a17')\nelse:\n    print(u'\u6539\u50f9\u5931\u6557! \u8acb\u518d\u6b21\u57f7\u884c\u7a0b\u5f0f\uff0c\u4f9d\u64da\u56de\u5831\u8cc7\u6599\u4fee\u6b63\u8f38\u5165')\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Step 5: \u6539\u91cf"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5148\u8abf\u7528 ",(0,s.jsx)(e.code,{children:"OrderQtyChange"})," \u4f86\u8a2d\u5b9a\u55ae\u865f\uff0c\u518d\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"api.ChangeOrderQty"})," \u4f86\u6539\u50f9\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from MasterTradePy.model import *\n\nordNo = input(u'\u8acb\u8f38\u5165\u55ae\u865f:')\naccount = input(u'\u8acb\u8f38\u5165\u4e0b\u55ae\u5e33\u865f:')\nqty = input(u'\u8acb\u8f38\u5165\u80a1\u7968\u80a1\u6578(1\u5f35\u8acb\u8f38\u51651000):')\nreplaceOrder = OrderQtyChange(ordNo=ordNo, qty=qty, tradingAccount=account)\n\nrcode = api.ChangeOrderQty(replaceOrder)\nif rcode == RCode.OK:\n    print(u'\u5df2\u9001\u51fa\u59d4\u8a17')\nelse:\n    print(u'\u6539\u91cf\u5931\u6557! \u8acb\u518d\u6b21\u57f7\u884c\u7a0b\u5f0f\uff0c\u4f9d\u64da\u56de\u5831\u8cc7\u6599\u4fee\u6b63\u8f38\u5165')\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Step 6: \u5176\u4ed6\u529f\u80fd"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"api.QryRepAll"})}),": \u67e5\u8a62\u6240\u6709\u59d4\u8a17"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"api.QryRepDeal"})}),": \u67e5\u8a62\u6210\u4ea4\u56de\u5831"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"api.ReqInventoryOpen"})}),": \u67e5\u8a62\u671f\u521d\u5eab\u5b58"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"api.ReqInventoryRayinTotal"})}),": \u67e5\u8a62\u5eab\u5b58"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"api.QrySecInvQty_Rayin"})}),": \u67e5\u8a62\u6216\u6709\u5238\u6e90"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"api.QryProdCrQty_Rayin"})}),": \u67e5\u8a62\u8cc7\u5238\u914d\u984d"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>c});var s=r(96540);const i={},l=s.createContext(i);function d(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);