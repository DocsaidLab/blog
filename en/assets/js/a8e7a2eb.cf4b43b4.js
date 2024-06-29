"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6596],{52141:(d,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=t(74848),s=t(28453);const n={sidebar_position:3},i="Quotation System Analysis",l={id:"autotraderx/masterlink/quotation_analysis",title:"Quotation System Analysis",description:"SolPYAPI",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/autotraderx/masterlink/quotation_analysis.md",sourceDirName:"autotraderx/masterlink",slug:"/autotraderx/masterlink/quotation_analysis",permalink:"/en/docs/autotraderx/masterlink/quotation_analysis",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Applying for API Access",permalink:"/en/docs/autotraderx/masterlink/apply_api"},next:{title:"Order System Analysis",permalink:"/en/docs/autotraderx/masterlink/trader_analysis"}},c={},h=[{value:"SolPYAPI",id:"solpyapi",level:2},{value:"Official Technical Documentation",id:"official-technical-documentation",level:2},{value:"Core Modules",id:"core-modules",level:2},{value:"ProductBasic",id:"productbasic",level:3},{value:"ProductTick",id:"producttick",level:3},{value:"RCode",id:"rcode",level:3},{value:"MarketDataMart",id:"marketdatamart",level:3},{value:"Sol_D",id:"sol_d",level:3}];function x(d){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...d.components},{Details:t}=e;return t||function(d,e){throw new Error("Expected "+(e?"component":"object")+" `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"quotation-system-analysis",children:"Quotation System Analysis"}),"\n",(0,r.jsx)(e.h2,{id:"solpyapi",children:"SolPYAPI"}),"\n",(0,r.jsx)(e.p,{children:"After downloading the Python module from MasterLink, install the quotation system using the following command:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-powershell",children:"pip install .\\MasterLink_PythonAPI\\SolPYAPI\\PY_TradeD-0.1.15-py3-none-any.whl\n"})}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["At the time of use, the package version was ",(0,r.jsx)(e.code,{children:"0.1.15"}),"."]})}),"\n",(0,r.jsx)(e.h2,{id:"official-technical-documentation",children:"Official Technical Documentation"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://mlapi.masterlink.com.tw/web_api/service/document/python-quote",children:(0,r.jsx)(e.strong,{children:"MasterLink - Quotation API"})})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/DocsaidLab/AutoTraderX/blob/main/MasterLink_PythonAPI/SolPYAPI/Sample_D.py",children:(0,r.jsx)(e.strong,{children:"Official Code Sample: Sample_D.py"})})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"core-modules",children:"Core Modules"}),"\n",(0,r.jsx)(e.p,{children:"We have deconstructed the MasterLink Python module into the following core modules:"}),"\n",(0,r.jsx)(e.h3,{id:"productbasic",children:"ProductBasic"}),"\n",(0,r.jsx)(e.p,{children:"This class is used to record and return stock-related information."}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click to expand object properties"}),(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"No."}),(0,r.jsx)(e.th,{children:"Field Name"}),(0,r.jsx)(e.th,{children:"Data Type"}),(0,r.jsx)(e.th,{children:"Format"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Exchange"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Exchange (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"Symbol"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Product Code (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"Category"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Product Category (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"TodayRefPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Reference Price (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"5"}),(0,r.jsx)(e.td,{children:"RiseStopPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Upper Limit Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"6"}),(0,r.jsx)(e.td,{children:"FallStopPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Lower Limit Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"7"}),(0,r.jsx)(e.td,{children:"ChineseName"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{children:"UTF-8"}),(0,r.jsx)(e.td,{children:"Product Chinese Name (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"8"}),(0,r.jsx)(e.td,{children:"PreTotalMatchQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Previous Trading Day Total Volume (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"9"}),(0,r.jsx)(e.td,{children:"PreTodayRefPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Previous Trading Day Reference Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"10"}),(0,r.jsx)(e.td,{children:"PreClosePrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Previous Trading Day Closing Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"11"}),(0,r.jsx)(e.td,{children:"IndustryCategory"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Industry Category (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"12"}),(0,r.jsx)(e.td,{children:"StockCategory"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Stock Category (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"13"}),(0,r.jsx)(e.td,{children:"BoardRemark"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Board Remark (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"14"}),(0,r.jsx)(e.td,{children:"ClassRemark"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Class Remark (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"15"}),(0,r.jsx)(e.td,{children:"StockAnomalyCode"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Stock Anomaly Code (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"16"}),(0,r.jsx)(e.td,{children:"NonTenParValueRemark"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Non-10 Par Value Remark (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"17"}),(0,r.jsx)(e.td,{children:"AbnormalRecommendationIndicator"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Abnormal Recommendation Indicator (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"18"}),(0,r.jsx)(e.td,{children:"AbnormalSecuritiesIndicator"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Abnormal Securities Indicator (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"19"}),(0,r.jsx)(e.td,{children:"DayTradingRemark"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Day Trading Remark (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"20"}),(0,r.jsx)(e.td,{children:"TradingUnit"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Trading Unit (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"21"}),(0,r.jsx)(e.td,{children:"TickSize"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Minimum Tick Size (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"22"}),(0,r.jsx)(e.td,{children:"prodKind"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Contract Type (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"23"}),(0,r.jsx)(e.td,{children:"strikePriceDecimalLocator"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Strike Price Decimal Locator (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"24"}),(0,r.jsx)(e.td,{children:"PreTotalTradingAmount"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Previous Trading Day Total Amount (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"25"}),(0,r.jsx)(e.td,{children:"DecimalLocator"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Price Decimal Locator (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"26"}),(0,r.jsx)(e.td,{children:"BeginDate"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{children:"YYYYMMDD"}),(0,r.jsx)(e.td,{children:"Listing Date (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"27"}),(0,r.jsx)(e.td,{children:"EndDate"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{children:"YYYYMMDD"}),(0,r.jsx)(e.td,{children:"Delisting Date (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"28"}),(0,r.jsx)(e.td,{children:"FlowGroup"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Flow Group (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"29"}),(0,r.jsx)(e.td,{children:"DeliveryDate"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{children:"YYYYMMDD"}),(0,r.jsx)(e.td,{children:"Last Settlement Date (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"30"}),(0,r.jsx)(e.td,{children:"DynamicBanding"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Y: Applicable, N: Not Applicable, Dynamic Price Stabilization (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"31"}),(0,r.jsx)(e.td,{children:"ContractSymbol"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Contract Symbol (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"32"}),(0,r.jsx)(e.td,{children:"ContractName"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Contract Chinese Name (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"33"}),(0,r.jsx)(e.td,{children:"StockID"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Underlying Stock Code (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"34"}),(0,r.jsx)(e.td,{children:"StatusCode"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"N: Normal, P: Trading Halt, U: To be Listed, Status Code (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"35"}),(0,r.jsx)(e.td,{children:"Currency"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Currency (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"36"}),(0,r.jsx)(e.td,{children:"AcceptQuoteFlag"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Accept Quote Flag (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"37"}),(0,r.jsx)(e.td,{children:"BlockTradeFlag"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Y: Yes, N: No, Block Trade Flag (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"38"}),(0,r.jsx)(e.td,{children:"ExpiryType"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"S: Standard, W: Weekly, Expiry Type (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"39"}),(0,r.jsx)(e.td,{children:"UnderlyingType"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"E S: Underlying Type (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"40"}),(0,r.jsx)(e.td,{children:"MarketCloseGroup"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Market Close Group (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"41"}),(0,r.jsx)(e.td,{children:"EndSession"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"0: Regular Trading Session, 1: After-Hours Trading Session (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"42"}),(0,r.jsx)(e.td,{children:"isAfterHours"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"0: Morning Session, 1: Afternoon Session (TAIFEX)"})]})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"producttick",children:"ProductTick"}),"\n",(0,r.jsx)(e.p,{children:"Real-time transaction details."}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click to expand object properties"}),(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"No."}),(0,r.jsx)(e.th,{children:"Field Name"}),(0,r.jsx)(e.th,{children:"Data Type"}),(0,r.jsx)(e.th,{children:"Format"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Exchange"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Exchange (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"Symbol"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Product Code (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"MatchTime"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{children:"%H:%M:%S.%f"}),(0,r.jsx)(e.td,{children:"Transaction Data Time (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"OrderBookTime"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{children:"%H:%M:%S.%f"}),(0,r.jsx)(e.td,{children:"Order Book Data Time (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"5"}),(0,r.jsx)(e.td,{children:"TxSeq"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Exchange Sequence Number (Transaction Data) (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"6"}),(0,r.jsx)(e.td,{children:"ObSeq"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Exchange Sequence Number (Order Book Data) (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"7"}),(0,r.jsx)(e.td,{children:"IsTxTrail"}),(0,r.jsx)(e.td,{children:"bool"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"0: Non-Trail, 1: Trail, Is Transaction Trail Data (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"8"}),(0,r.jsx)(e.td,{children:"Is5QTrial"}),(0,r.jsx)(e.td,{children:"bool"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"0: Non-Trail, 1: Trail, Is Order Book Trail Data (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"9"}),(0,r.jsx)(e.td,{children:"IsTrail"}),(0,r.jsx)(e.td,{children:"bool"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"0: Non-Trail, 1: Trail, Is Trail Data (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"10"}),(0,r.jsx)(e.td,{children:"DecimalLocator"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Decimal Locator for Price Field (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"11"}),(0,r.jsx)(e.td,{children:"MatchPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Transaction Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"12"}),(0,r.jsx)(e.td,{children:"MatchQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Product Transaction Volume (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"13"}),(0,r.jsx)(e.td,{children:"MatchPriceList"}),(0,r.jsx)(e.td,{children:"list"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Multiple Transaction Prices for One Market Quote (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"14"}),(0,r.jsx)(e.td,{children:"MatchQtyList"}),(0,r.jsx)(e.td,{children:"list"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Multiple Transaction Volumes for One Market Quote (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"15"}),(0,r.jsx)(e.td,{children:"MatchBuyCount"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Accumulated Buy Transaction Count (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"16"}),(0,r.jsx)(e.td,{children:"MatchSellCount"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Accumulated Sell Transaction Count (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"17"}),(0,r.jsx)(e.td,{children:"TotalMatchQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Product Transaction Volume (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"18"}),(0,r.jsx)(e.td,{children:"TotalTradingAmount"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Product Transaction Amount (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"19"}),(0,r.jsx)(e.td,{children:"TradingUnit"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Trading Unit (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"20"}),(0,r.jsx)(e.td,{children:"DayHigh"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Day High Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"21"}),(0,r.jsx)(e.td,{children:"DayLow"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Day Low Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"22"}),(0,r.jsx)(e.td,{children:"RefPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Reference Price (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"23"}),(0,r.jsx)(e.td,{children:"BuyPrice"}),(0,r.jsx)(e.td,{children:"list"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Order Book Buy Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"24"}),(0,r.jsx)(e.td,{children:"BuyQty"}),(0,r.jsx)(e.td,{children:"list"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Order Book Buy Quantity (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"25"}),(0,r.jsx)(e.td,{children:"SellPrice"}),(0,r.jsx)(e.td,{children:"list"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Order Book Sell Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"26"}),(0,r.jsx)(e.td,{children:"SellQty"}),(0,r.jsx)(e.td,{children:"list"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Order Book Sell Quantity (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"27"}),(0,r.jsx)(e.td,{children:"AllMarketAmount"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Market Transaction Amount (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"28"}),(0,r.jsx)(e.td,{children:"AllMarketVolume"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Market Transaction Volume (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"29"}),(0,r.jsx)(e.td,{children:"AllMarketCnt"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Market Transaction Count (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"30"}),(0,r.jsx)(e.td,{children:"AllMarketBuyCnt"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Market Buy Order Count (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"31"}),(0,r.jsx)(e.td,{children:"AllMarketSellCnt"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Market Sell Order Count (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"32"}),(0,r.jsx)(e.td,{children:"AllMarketBuyQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Market Buy Order Quantity (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"33"}),(0,r.jsx)(e.td,{children:"AllMarketSellQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Total Market Sell Order Quantity (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"34"}),(0,r.jsx)(e.td,{children:"IsFixedPriceTransaction"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Fixed Price Transaction (TWSE)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"35"}),(0,r.jsx)(e.td,{children:"OpenPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Opening Price (TWSE, TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"36"}),(0,r.jsx)(e.td,{children:"FirstDerivedBuyPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"First Derived Buy Price (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"37"}),(0,r.jsx)(e.td,{children:"FirstDerivedBuyQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"First Derived Buy Quantity (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"38"}),(0,r.jsx)(e.td,{children:"FirstDerivedSellPrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"First Derived Sell Price (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"39"}),(0,r.jsx)(e.td,{children:"FirstDerivedSellQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"First Derived Sell Quantity (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"40"}),(0,r.jsx)(e.td,{children:"TotalBuyOrder"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Accumulated Buy Order Count (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"41"}),(0,r.jsx)(e.td,{children:"TotalBuyQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Accumulated Buy Order Quantity (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"42"}),(0,r.jsx)(e.td,{children:"TotalSellOrder"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Accumulated Sell Order Count (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"43"}),(0,r.jsx)(e.td,{children:"TotalSellQty"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Accumulated Sell Order Quantity (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"44"}),(0,r.jsx)(e.td,{children:"ClosePrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Closing Price (TAIFEX)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"45"}),(0,r.jsx)(e.td,{children:"SettlePrice"}),(0,r.jsx)(e.td,{children:"str"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Settlement Price (TAIFEX)"})]})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"rcode",children:"RCode"}),"\n",(0,r.jsx)(e.p,{children:"This class is used to record the error codes returned by the quotation system."}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click to expand object properties"}),(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Value"}),(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"OK"}),(0,r.jsx)(e.td,{children:"Success"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_WOULD_BLOCK"}),(0,r.jsx)(e.td,{children:"API call would block but request is non-blocking"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_IN_PROGRESS"}),(0,r.jsx)(e.td,{children:"API call is in progress (non-blocking mode)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"3"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_NOT_READY"}),(0,r.jsx)(e.td,{children:"API cannot complete as the object is not ready"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_EOS"}),(0,r.jsx)(e.td,{children:"Next operation on structured container returned EOS"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"5"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_NOT_FOUND"}),(0,r.jsx)(e.td,{children:"Named field not found in MAP lookup"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"6"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_NOEVENT"}),(0,r.jsx)(e.td,{children:"No events to process in the context"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"7"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_INCOMPLETE"}),(0,r.jsx)(e.td,{children:"API call completed some but not all requested functions"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"8"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_ROLLBACK"}),(0,r.jsx)(e.td,{children:"Commit() returns this value when a transaction is rolled back"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"9"}),(0,r.jsx)(e.td,{children:"SOLCLIENT_EVENT"}),(0,r.jsx)(e.td,{children:"SolClient session event"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"10"}),(0,r.jsx)(e.td,{children:"CLIENT_ALREADY_CONNECTED"}),(0,r.jsx)(e.td,{children:"Connection already established"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"11"}),(0,r.jsx)(e.td,{children:"CLIENT_ALREADY_DISCONNECTED"}),(0,r.jsx)(e.td,{children:"Connection already disconnected"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"12"}),(0,r.jsx)(e.td,{children:"ANNOUNCEMENT"}),(0,r.jsx)(e.td,{children:"Announcement message"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-1"}),(0,r.jsx)(e.td,{children:"FAIL"}),(0,r.jsx)(e.td,{children:"Failure"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-2"}),(0,r.jsx)(e.td,{children:"CONNECTION_REFUSED"}),(0,r.jsx)(e.td,{children:"Connection refused"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-3"}),(0,r.jsx)(e.td,{children:"CONNECTION_FAIL"}),(0,r.jsx)(e.td,{children:"Connection failed"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-4"}),(0,r.jsx)(e.td,{children:"ALREADY_EXISTS"}),(0,r.jsx)(e.td,{children:"Target object already exists"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-5"}),(0,r.jsx)(e.td,{children:"NOT_FOUND"}),(0,r.jsx)(e.td,{children:"Target object not found"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-6"}),(0,r.jsx)(e.td,{children:"CLIENT_NOT_READY"}),(0,r.jsx)(e.td,{children:"Connection not ready"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-7"}),(0,r.jsx)(e.td,{children:"USER_SUBSCRIPTION_LIMIT_EXCEEDED"}),(0,r.jsx)(e.td,{children:"Subscription limit exceeded"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-8"}),(0,r.jsx)(e.td,{children:"USER_NOT_APPLIED"}),(0,r.jsx)(e.td,{children:"Not applied"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-9"}),(0,r.jsx)(e.td,{children:"USER_NOT_VERIFIED"}),(0,r.jsx)(e.td,{children:"Not verified"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-10"}),(0,r.jsx)(e.td,{children:"USER_VERIFICATION_FAIL"}),(0,r.jsx)(e.td,{children:"Verification failed"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-11"}),(0,r.jsx)(e.td,{children:"SUBSCRIPTION_FAIL"}),(0,r.jsx)(e.td,{children:"Subscription failed"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-12"}),(0,r.jsx)(e.td,{children:"RECOVERY_FAIL"}),(0,r.jsx)(e.td,{children:"Recovery failed"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-13"}),(0,r.jsx)(e.td,{children:"DOWNLOAD_PRODUCT_FAIL"}),(0,r.jsx)(e.td,{children:"Failed to download basic data file"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-14"}),(0,r.jsx)(e.td,{children:"MESSAGE_HANDLER_FAIL"}),(0,r.jsx)(e.td,{children:"Message handling error"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-15"}),(0,r.jsx)(e.td,{children:"FUNCTION_SUBSCRIPTION_LIMIT_EXCEEDED"}),(0,r.jsx)(e.td,{children:"Function subscription limit exceeded"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-16"}),(0,r.jsx)(e.td,{children:"USER_NOT_VERIFIED_TWSE"}),(0,r.jsx)(e.td,{children:"Not verified TWSE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-17"}),(0,r.jsx)(e.td,{children:"USER_NOT_VERIFIED_TAIFEX"}),(0,r.jsx)(e.td,{children:"Not verified TAIFEX"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-18"}),(0,r.jsx)(e.td,{children:"USER_NOT_VERIFIED_TWSE_TAIFEX"}),(0,r.jsx)(e.td,{children:"Not verified TWSE & TAIFEX"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"-9999"}),(0,r.jsx)(e.td,{children:"UNKNOWN_ERROR"}),(0,r.jsx)(e.td,{children:"Unknown error"})]})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"marketdatamart",children:"MarketDataMart"}),"\n",(0,r.jsx)(e.p,{children:"This is an entry point in the quotation system, defining a few methods that trigger events such as transaction messages and order messages."}),"\n",(0,r.jsx)(e.p,{children:"To use these methods, you must manually attach the corresponding event handlers."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Event"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnSystemEvent"})}),(0,r.jsx)(e.td,{children:"System event notification"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_MarketDataMart_ConnectState"})}),(0,r.jsx)(e.td,{children:"System connection status"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnUpdateBasic"})}),(0,r.jsx)(e.td,{children:"Product basic data update"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnUpdateProductBasicList"})}),(0,r.jsx)(e.td,{children:"Product basic data list update"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnUpdateLastSnapshot"})}),(0,r.jsx)(e.td,{children:"Latest product snapshot update"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnMatch"})}),(0,r.jsx)(e.td,{children:"Product transaction message"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnOrderBook"})}),(0,r.jsx)(e.td,{children:"Product order message"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnUpdateTotalOrderQty"})}),(0,r.jsx)(e.td,{children:"Product order quantity update"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnUpdateOptionGreeks"})}),(0,r.jsx)(e.td,{children:"Option product Greeks update"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnUpdateOvsBasic"})}),(0,r.jsx)(e.td,{children:"Overseas product basic data update"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnUpdateOvsMatch"})}),(0,r.jsx)(e.td,{children:"Overseas product transaction data update"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Fire_OnUpdateOvsOrderBook"})}),(0,r.jsx)(e.td,{children:"Overseas product order book update"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"sol_d",children:"Sol_D"}),"\n",(0,r.jsxs)(e.p,{children:["This class takes an instance of the ",(0,r.jsx)(e.code,{children:"MarketDataMart"})," class as input and passes it to the ",(0,r.jsx)(e.code,{children:"MasterQuoteDAPI"})," class, creating another instance."]}),"\n",(0,r.jsxs)(e.p,{children:["In the ",(0,r.jsx)(e.code,{children:"MasterQuoteDAPI"})," implementation, the ",(0,r.jsx)(e.code,{children:"MarketDataMart"})," instance is passed to the ",(0,r.jsx)(e.code,{children:"SolAPI"})," class, creating yet another instance."]}),"\n",(0,r.jsx)(e.p,{children:"Well, these are their implementation methods, so we'll leave it at that."}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:["In the ",(0,r.jsx)(e.code,{children:"Sol_D"})," class, several commonly used methods are provided:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Login"}),": Log in"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.DisConnect"}),": Log out"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Subscribe"}),": Subscribe to product quotes"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.UnSubscribe"}),": Unsubscribe from product quotes"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Additionally, there are several event handlers that must be defined externally and attached using their specified methods:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Set_OnLogEvent"}),": Set log event handler"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Set_OnInterruptEvent"}),": Set system event handler"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Set_OnLoginResultEvent_DAPI"}),": Set login result event handler"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Set_OnAnnouncementEvent_DAPI"}),": Set announcement event handler"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Set_OnVerifiedEvent_DAPI"}),": Set verification event handler"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Set_OnSystemEvent_DAPI"}),": Set system event handler"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Set_OnUpdateBasic_DAPI"}),": Set product basic data update event handler"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Sol_D.Set_OnMatch_DAPI"}),": Set product transaction message event handler"]}),"\n"]})]})}function j(d={}){const{wrapper:e}={...(0,s.R)(),...d.components};return e?(0,r.jsx)(e,{...d,children:(0,r.jsx)(x,{...d})}):x(d)}},28453:(d,e,t)=>{t.d(e,{R:()=>i,x:()=>l});var r=t(96540);const s={},n=r.createContext(s);function i(d){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function l(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(s):d.components||s:i(d.components),r.createElement(n.Provider,{value:e},d.children)}}}]);