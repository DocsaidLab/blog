"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3035],{86673:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var s=r(74848),i=r(28453);const t={sidebar_position:4},c="Order System Analysis",a={id:"autotraderx/masterlink/trader_analysis",title:"Order System Analysis",description:"MasterTradePy",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/autotraderx/masterlink/trader_analysis.md",sourceDirName:"autotraderx/masterlink",slug:"/autotraderx/masterlink/trader_analysis",permalink:"/en/docs/autotraderx/masterlink/trader_analysis",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719787737e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quotation System Analysis",permalink:"/en/docs/autotraderx/masterlink/quotation_analysis"},next:{title:"Backtesting System Analysis",permalink:"/en/docs/autotraderx/masterlink/backtesting_analysis"}},d={},l=[{value:"MasterTradePy",id:"mastertradepy",level:2},{value:"Official Technical Documentation",id:"official-technical-documentation",level:2},{value:"Core Modules",id:"core-modules",level:2},{value:"Solace",id:"solace",level:3},{value:"SolClient",id:"solclient",level:3},{value:"SorApi",id:"sorapi",level:3},{value:"MarketTrader",id:"markettrader",level:3},{value:"Order",id:"order",level:3},{value:"ReportOrder",id:"reportorder",level:3},{value:"MasterTradeAPI",id:"mastertradeapi",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"order-system-analysis",children:"Order System Analysis"}),"\n",(0,s.jsx)(n.h2,{id:"mastertradepy",children:"MasterTradePy"}),"\n",(0,s.jsx)(n.p,{children:"After downloading the Python module from MasterLink, install the order system using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"pip install .\\MasterLink_PythonAPI\\MasterTradePy\\MasterTradePy\\64bit\\MasterTradePy-0.0.23-py3-none-win_amd64.whl\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["At the time of use, the package version was ",(0,s.jsx)(n.code,{children:"0.0.23"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"official-technical-documentation",children:"Official Technical Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://mlapi.masterlink.com.tw/web_api/service/document/python-trade",children:(0,s.jsx)(n.strong,{children:"MasterLink - Order API"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/AutoTraderX/blob/main/MasterLink_PythonAPI/MasterTradePy/MasterTradePy/64bit/sample.py",children:(0,s.jsx)(n.strong,{children:"Official Code Sample: sample.py"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"core-modules",children:"Core Modules"}),"\n",(0,s.jsx)(n.p,{children:"We have broken down the MasterLink Python module into the following core modules:"}),"\n",(0,s.jsx)(n.h3,{id:"solace",children:"Solace"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Solace is a company providing high-performance messaging middleware and related services, particularly suitable for real-time data streams and event-driven architectures."})}),"\n",(0,s.jsxs)(n.p,{children:["You will see many ",(0,s.jsx)(n.code,{children:"Solace"})," classes in the code, which are used to communicate with the Solace message broker."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Messaging Service"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MessagingService"}),": The main interface for messaging services, used to configure and establish connections with the Solace message broker."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ReconnectionListener"}),": Interfaces for handling connection interruptions and reconnections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ReconnectionAttemptListener"}),": Interfaces for handling connection interruptions and reconnections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ServiceInterruptionListener"}),": Interfaces for handling connection interruptions and reconnections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RetryStrategy"}),": Interface for defining message retransmission strategies."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ServiceEvent"}),": Handles events related to service lifecycle."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Topic Subscription"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TopicSubscription"}),": Used to subscribe to messages for specific topics."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Message Receiver and Publisher"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MessageHandler"}),": Used to handle received messages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InboundMessage"}),": Used to handle received messages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DirectMessageReceiver"}),": Receivers that directly receive messages from the broker."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OutboundMessage"}),": Represents messages to be sent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RequestReplyMessagePublisher"}),": Message publishers used for publishing requests and receiving replies."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PublishFailureListener"}),": Handles events related to message publication failures."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FailedPublishEvent"}),": Handles events related to message publication failures."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Topic and Caching"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Topic"}),": Represents message topics, which can be dynamic or fixed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CachedMessageSubscriptionRequest"}),": Handles subscription requests for cached messages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CacheRequestOutcomeListener"}),": Interfaces and classes for handling cache request outcomes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CacheRequestOutcome"}),": Interfaces and classes for handling cache request outcomes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Life Cycle and Utility"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TerminationNotificationListener"}),": Handles notifications and events related to component termination."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TerminationEvent"}),": Handles notifications and events related to component termination."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"solclient",children:"SolClient"}),"\n",(0,s.jsx)(n.p,{children:"This class encapsulates a series of functionalities for using the Solace messaging system, mainly for creating connections, managing subscriptions, sending, and receiving messages."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"__init__"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Initialize ",(0,s.jsx)(n.code,{children:"SolClient"})," with necessary configuration parameters and user credentials."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),": ",(0,s.jsx)(n.code,{children:"clientname"}),", ",(0,s.jsx)(n.code,{children:"sol_config"}),", ",(0,s.jsx)(n.code,{children:"username"})," (optional)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operation"}),": Sets default values for connection state, messaging service object, and user credentials."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"create_connection"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Establish a connection with the Solace broker using the provided configuration and handlers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),": ",(0,s.jsx)(n.code,{children:"message_handler"})," and ",(0,s.jsx)(n.code,{children:"service_handler"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operation"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Constructs broker properties based on session parameters."}),"\n",(0,s.jsxs)(n.li,{children:["Initializes ",(0,s.jsx)(n.code,{children:"MessagingService"})," with reconnection strategy and other configurations."]}),"\n",(0,s.jsx)(n.li,{children:"Connects the service and configures message receivers and publishers."}),"\n",(0,s.jsx)(n.li,{children:"Starts message receivers and publishers."}),"\n",(0,s.jsx)(n.li,{children:"Checks connection status and returns appropriate response codes."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"disconnect"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Properly disconnect the messaging service and clean up resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operation"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Terminates message receivers."}),"\n",(0,s.jsx)(n.li,{children:"Disconnects the messaging service."}),"\n",(0,s.jsx)(n.li,{children:"Resets connection state flags."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"send_request"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Sends a request message to the specified topic and waits for a reply."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),": ",(0,s.jsx)(n.code,{children:"topic"}),", ",(0,s.jsx)(n.code,{children:"msg"})," (message content)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operation"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Constructs the message and sends it to the specified topic."}),"\n",(0,s.jsx)(n.li,{children:"Waits for and processes the reply within a specified timeout."}),"\n",(0,s.jsx)(n.li,{children:"Handles exceptions and errors during the message-sending process."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"add_subscription"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Subscribes to the specified topic to receive messages published on it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),": ",(0,s.jsx)(n.code,{children:"topic"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operation"}),": Adds topic subscription to the message receiver and handles errors."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"remove_subscription"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Removes an existing subscription from the topic."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),": ",(0,s.jsx)(n.code,{children:"topic"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operation"}),": Removes topic subscription from the message receiver and handles errors."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"request_cached_only"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Requests messages from the cache only."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),": ",(0,s.jsx)(n.code,{children:"cachename"}),", ",(0,s.jsx)(n.code,{children:"topic"}),", ",(0,s.jsx)(n.code,{children:"timeout"}),", ",(0,s.jsx)(n.code,{children:"cacheId"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operation"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creates a cache-only subscription request."}),"\n",(0,s.jsx)(n.li,{children:"Submits the cache request and listens for completion or failure with custom listeners."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"GetRequestID"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Generates a unique request ID for operations requiring unique identification."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operation"}),": Generates a timestamp-based ID, ensuring it is greater than the previously used ID."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sorapi",children:"SorApi"}),"\n",(0,s.jsx)(n.p,{children:"This class is an interface encapsulating communication with the Securities Order Routing System (SORS)."}),"\n",(0,s.jsx)(n.p,{children:"It provides a series of functions allowing users to connect, send requests, receive, and process responses. This is the core API for connecting to the broker's order system."}),"\n",(0,s.jsxs)(n.p,{children:["Most of its functionality is encapsulated in ",(0,s.jsx)(n.code,{children:".dll"})," files, which is why MasterLink restricts usage to Windows systems."]}),"\n",(0,s.jsxs)(n.p,{children:["We initially considered decompiling these ",(0,s.jsx)(n.code,{children:".dll"})," files, but it wouldn't provide much benefit, so we decided against it."]}),"\n",(0,s.jsxs)(n.p,{children:["In other programs, any reference to ",(0,s.jsx)(n.code,{children:"Sor"})," such as ",(0,s.jsx)(n.code,{children:"OnSorConnect"})," indicates the use of this module's functionality."]}),"\n",(0,s.jsx)(n.h3,{id:"markettrader",children:"MarketTrader"}),"\n",(0,s.jsx)(n.p,{children:"This is an abstract base class (ABC) defining the basic functions of trading but without any implementation, requiring us to complete it ourselves."}),"\n",(0,s.jsx)(n.p,{children:"The defined content is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="MasterTradePy\\64bit\\MasterTradePy\\model.py"',children:"class MarketTrader(metaclass=ABCMeta):\n    @ abstractmethod\n    def OnNewOrderReply(self, data) -> None:\n        pass\n\n    @ abstractmethod\n    def OnChangeReply(self, data) -> None:\n        pass\n\n    @ abstractmethod\n    def OnCancelReply(self, data) -> None:\n        pass\n\n    @ abstractmethod\n    def OnReport(self, data) -> None:\n        pass\n\n    @ abstractmethod\n    def OnAnnouncementEvent(self, data)->None:\n        pass\n\n    @ abstractmethod\n    def OnSystemEvent(self, event: SystemEvent) -> None:\n        pass\n\n    @ abstractmethod\n    def OnError(self, error: MTPYError):\n        pass\n\n    @ abstractmethod\n    def OnReqResult(self, workid: str, data):\n        pass\n"})}),"\n",(0,s.jsx)(n.h3,{id:"order",children:"Order"}),"\n",(0,s.jsxs)(n.p,{children:["This is a ",(0,s.jsx)(n.code,{children:"dataclass"})," defining all the data within an order."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="MasterTradePy\\64bit\\MasterTradePy\\model.py"',children:'@dataclass\nclass Order:\n    sorRID: str = field(init = False, default=\'\')\n    exchange: Exchange = field(init = False, default=Exchange.TWSE)\n    tradingSession: TradingSession = ""\n    side: Side = field(default="")\n    symbol: str = field(default="")\n    priceType: PriceType = field(default="")\n    price: str = field(default="")\n    tradingUnit: TradingUnit = field(default=0)\n    qty: str = field(default="")\n    orderType: OrderType = field(default="")\n    tradingType: TradingType = field(init = False, default="")\n    brokerNo: str = field(init = False, default="")\n    userDef: str = ""\n    tradingAccount: str = ""\n    ordNo: str = field(init = False, default="")\n    trxTime: str = field(init = False, default="")\n    lastdealTime: str = field(init = False, default="")\n    status: str = field(init = False, default="")\n    leavesQty: str = field(init = False, default="")\n    cumQty: str = field(init = False, default="")\n    dealPri: str = field(init = False, default="")\n    tableName : str = ""\n'})}),"\n",(0,s.jsx)(n.h3,{id:"reportorder",children:"ReportOrder"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"We do not recommend any stocks; all stock information in the securities account will be blurred."})}),"\n",(0,s.jsx)(n.p,{children:"This is the order report data that you receive when calling the API."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="MasterTradePy\\64bit\\MasterTradePy\\model.py"',children:'@dataclass\nclass ReportOrder:\n    orgOrder: Order\n    order: Order\n    lastMessage: str = field(init = False, default="")\n    scBalance: str =  field(init = False, default="")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["It contains ",(0,s.jsx)(n.code,{children:"orgOrder"})," and ",(0,s.jsx)(n.code,{children:"order"})," states, which we believe represent the original order and the order confirmed by the exchange."]}),"\n",(0,s.jsx)(n.p,{children:"Below are actual examples of order and trade reports retrieved from the system:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Order Report"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"ReportOrder(\n  orgOrder=Order(\n    sorRID='592zj00420005coSG200',\n    exchange=<Exchange.TWSE: 'TWSE'>,\n    tradingSession='N',\n    side='S',\n    symbol='2002',\n    priceType='L',\n    price='24',\n    tradingUnit=0,\n    qty='2000',\n    orderType='R',\n    tradingType='',\n    brokerNo='',\n    userDef='',\n    tradingAccount='blurred',\n    ordNo='',\n    trxTime='',\n    lastdealTime='',\n    status='',\n    leavesQty='',\n    cumQty='',\n    dealPri='',\n    tableName=''\n    ),\n  order=Order(\n    sorRID='',\n    exchange=<Exchange.TWSE: 'TWSE'>,\n    tradingSession='N',\n    side='S',\n    symbol='2002',\n    priceType='L',\n    price='24',\n    tradingUnit=0,\n    qty='2000',\n    orderType='R',\n    tradingType='',\n    brokerNo='',\n    userDef='',\n    tradingAccount='blurred',\n    ordNo='j0042',\n    trxTime='08:31:31.926000',\n    lastdealTime='',\n    status='101)Order Accepted (Exchange Accepted)',\n    leavesQty='2000',\n    cumQty='0',\n    dealPri='',\n    tableName='ORD:TwsOrd'),\n    lastMessage='',\n    scBalance=''\n    )\n  )\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Trade Report"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"ReportOrder(\n  orgOrder=Order(\n    sorRID='592zj00390005coPW400',\n    exchange=<Exchange.TWSE: 'TWSE'>,\n    tradingSession='N',\n    side='S',\n    symbol='3481',\n    priceType='L',\n    price='13.7',\n    tradingUnit=0,\n    qty='4000',\n    orderType='R',\n    tradingType='',\n    brokerNo='',\n    userDef='',\n    tradingAccount='blurred',\n    ordNo='',\n    trxTime='',\n    lastdealTime='',\n    status='',\n    leavesQty='',\n    cumQty='',\n    dealPri='',\n    tableName=''\n  ),\n  order=Order(\n    sorRID='',\n    exchange=<Exchange.TWSE: 'TWSE'>,\n    tradingSession='N',\n    side='S',\n    symbol='3481',\n    priceType='L',\n    price='13.7',\n    tradingUnit=0,\n    qty='4000',\n    orderType='R',\n    tradingType='',\n    brokerNo='',\n    userDef='',\n    tradingAccount='blurred',\n    ordNo='j0039',\n    trxTime='08:31:31.926000',\n    lastdealTime='09:00:11.609000',\n    status='111)Fully Filled',\n    leavesQty='0',\n    cumQty='4000',\n    dealPri='',\n    tableName='ORD:TwsOrd'),\n    lastMessage='',\n    scBalance=''\n  )\n)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["In our tests, the ",(0,s.jsx)(n.code,{children:"ReportOrder.order.dealPri"})," field remained empty even after the trade was executed, so we couldn't determine the execution price."]}),(0,s.jsx)(n.p,{children:"We suspect this is a bug but cannot confirm it."})]}),"\n",(0,s.jsx)(n.h3,{id:"mastertradeapi",children:"MasterTradeAPI"}),"\n",(0,s.jsx)(n.p,{children:"This is the top-level API used by users to operate the order system directly."}),"\n",(0,s.jsxs)(n.p,{children:["Following the example provided by MasterLink: ",(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/AutoTraderX/blob/main/MasterLink_PythonAPI/MasterTradePy/MasterTradePy/64bit/sample.py",children:(0,s.jsx)(n.strong,{children:"sample.py"})}),", let's take a preliminary look at how to use it:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Step 1: Create an instance of the ",(0,s.jsx)(n.code,{children:"MarketTrader"})," class and use it as an input parameter"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"api = MasterTradeAPI(MarketTrader())\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 2: Connect to the MasterLink order system"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# The target connection is fixed\napi.SetConnectionHost('solace140.masterlink.com.tw:55555')\n\n# Enter the account password and specify the login status\n# is_sim: Whether to connect to the simulation host, True for connecting to the simulation host, False for connecting to the official host\n# is_force: Whether to force login, True for forced login, False for normal login\n# is_event: Whether to enable event-specific login, True for enabling events, False for not enabling events\nrc = api.Login(username, password, is_sim, is_force, is_event)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["During the login process, the program uses ",(0,s.jsx)(n.code,{children:"SolClient"})," to establish a system message connection and ",(0,s.jsx)(n.code,{children:"SorApi"})," to establish an order system connection."]}),"\n",(0,s.jsx)(n.p,{children:"After logging in, two-factor authentication will take place:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"accounts = [x[4:] for x in api.accounts]\nrcc = api.CheckAccs(tradingAccounts=accounts)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The two-factor authentication using a list format indicates that this API supports multiple accounts."}),"\n",(0,s.jsxs)(n.p,{children:["This means you can repeatedly call ",(0,s.jsx)(n.code,{children:"api.Login"})," to log into different accounts and specify which account to use for trading."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 3: Placing an Order"})}),"\n",(0,s.jsxs)(n.p,{children:["To place an order, you must create an ",(0,s.jsx)(n.code,{children:"Order"})," object and call ",(0,s.jsx)(n.code,{children:"api.NewOrder"})," to place the order."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from MasterTradePy.model import *\n\nsymbol = input('Enter the stock symbol to buy:')\napi.ReqBasic(symbol)\naccount = input('Enter the trading account:')\nprice = input('Enter the stock price to buy (leave blank for market order):')\nqty = input('Enter the quantity of stock to buy (enter 1000 for 1 lot):')\norderTypeSymbol = input('Enter the order type (I: IOC, F: FOK, others: ROD):')\n\norderType = OrderType.ROD\nif orderTypeSymbol == 'I':\n    orderType = OrderType.IOC\nelif orderTypeSymbol == 'F':\n    orderType = OrderType.FOK\n\nif not price:\n    priceType = PriceType.MKT\nelse:\n    priceType = PriceType.LMT\n\norder = Order(\n            tradingSession=TradingSession.NORMAL,\n            side=Side.Buy,\n            symbol=symbol,\n            priceType=priceType,\n            price=price,\n            tradingUnit=TradingUnit.COMMON,\n            qty=qty,\n            orderType=orderType,\n            tradingAccount=account,\n            userDef='')\nrcode = api.NewOrder(order)\nif rcode == RCode.OK:\n    print('Order placed successfully')\nelse:\n    print('Order placement failed! Please run the program again and correct the input based on the feedback')\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 4: Changing the Order Price"})}),"\n",(0,s.jsxs)(n.p,{children:["First, use ",(0,s.jsx)(n.code,{children:"OrderPriceChange"})," to set the order number, then use ",(0,s.jsx)(n.code,{children:"api.ChangeOrderPrice"})," to change the price."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from MasterTradePy.model import *\n\nordNo = input('Enter the order number:')\naccount = input('Enter the trading account:')\nprice = input('Enter the stock price (leave blank for market order):')\nreplaceOrder = OrderPriceChange(ordNo=ordNo, price=price, tradingAccount=account)\n\nrcode = api.ChangeOrderPrice(replaceOrder)\nif rcode == RCode.OK:\n    print('Order price changed successfully')\nelse:\n    print('Order price change failed! Please run the program again and correct the input based on the feedback')\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 5: Changing the Order Quantity"})}),"\n",(0,s.jsxs)(n.p,{children:["First, use ",(0,s.jsx)(n.code,{children:"OrderQtyChange"})," to set the order number, then use ",(0,s.jsx)(n.code,{children:"api.ChangeOrderQty"})," to change the quantity."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from MasterTradePy.model import *\n\nordNo = input('Enter the order number:')\naccount = input('Enter the trading account:')\nqty = input('Enter the stock quantity (enter 1000 for 1 lot):')\nreplaceOrder = OrderQtyChange(ordNo=ordNo, qty=qty, tradingAccount=account)\n\nrcode = api.ChangeOrderQty(replaceOrder)\nif rcode == RCode.OK:\n    print('Order quantity changed successfully')\nelse:\n    print('Order quantity change failed! Please run the program again and correct the input based on the feedback')\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 6: Other Functions"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"api.QryRepAll"})}),": Query all orders"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"api.QryRepDeal"})}),": Query trade reports"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"api.ReqInventoryOpen"})}),": Query initial inventory"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"api.ReqInventoryRayinTotal"})}),": Query inventory"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"api.QrySecInvQty_Rayin"})}),": Query available stock sources"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"api.QryProdCrQty_Rayin"})}),": Query collateral allocations"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var s=r(96540);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);