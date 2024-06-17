"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4122],{18709:(d,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>x});var t=r(74848),e=r(28453);const n={},i="\u5831\u50f9\u7cfb\u7d71",l={id:"autotraderx/system_analysis/masterlink/quotation",title:"\u5831\u50f9\u7cfb\u7d71",description:"SolPYAPI",source:"@site/docs/autotraderx/system_analysis/masterlink/quotation.md",sourceDirName:"autotraderx/system_analysis/masterlink",slug:"/autotraderx/system_analysis/masterlink/quotation",permalink:"/docs/autotraderx/system_analysis/masterlink/quotation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/autotraderx/system_analysis/masterlink/intro"},next:{title:"\u4e0b\u55ae\u7cfb\u7d71",permalink:"/docs/autotraderx/system_analysis/masterlink/trader"}},c={},x=[{value:"SolPYAPI",id:"solpyapi",level:2},{value:"\u5b98\u65b9\u6280\u8853\u6587\u4ef6",id:"\u5b98\u65b9\u6280\u8853\u6587\u4ef6",level:2},{value:"\u6838\u5fc3\u6a21\u7d44",id:"\u6838\u5fc3\u6a21\u7d44",level:2},{value:"ProductBasic",id:"productbasic",level:3},{value:"ProductTick",id:"producttick",level:3},{value:"RCode",id:"rcode",level:3},{value:"MarketDataMart",id:"marketdatamart",level:3},{value:"Sol_D",id:"sol_d",level:3}];function j(d){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,e.R)(),...d.components},{Details:r}=s;return r||function(d,s){throw new Error("Expected "+(s?"component":"object")+" `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"\u5831\u50f9\u7cfb\u7d71",children:"\u5831\u50f9\u7cfb\u7d71"}),"\n",(0,t.jsx)(s.h2,{id:"solpyapi",children:"SolPYAPI"}),"\n",(0,t.jsx)(s.p,{children:"\u7576\u4f60\u4e0b\u8f09\u5b8c\u5143\u5bcc\u8b49\u5238\u7684 Python \u6a21\u7d44\u5f8c\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u5b89\u88dd\u5831\u50f9\u7cfb\u7d71\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-powershell",children:"pip install .\\MasterLink_PythonAPI\\SolPYAPI\\PY_TradeD-0.1.15-py3-none-any.whl\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["\u5728\u6211\u5011\u4f7f\u7528\u6642\uff0c\u8a72\u5957\u4ef6\u7684\u7248\u672c\u70ba ",(0,t.jsx)(s.code,{children:"0.1.15"}),"\u3002"]})}),"\n",(0,t.jsx)(s.h2,{id:"\u5b98\u65b9\u6280\u8853\u6587\u4ef6",children:"\u5b98\u65b9\u6280\u8853\u6587\u4ef6"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://mlapi.masterlink.com.tw/web_api/service/document/python-quote",children:(0,t.jsx)(s.strong,{children:"\u5143\u5bcc\u8b49\u5238-\u5831\u50f9 API"})})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u6838\u5fc3\u6a21\u7d44",children:"\u6838\u5fc3\u6a21\u7d44"}),"\n",(0,t.jsx)(s.p,{children:"\u6211\u5011\u628a\u5143\u5bcc\u8b49\u5238\u7684 Python \u6a21\u7d44\u62c6\u89e3\u6210\u4ee5\u4e0b\u5e7e\u500b\u6838\u5fc3\u6a21\u7d44\uff1a"}),"\n",(0,t.jsx)(s.h3,{id:"productbasic",children:"ProductBasic"}),"\n",(0,t.jsx)(s.p,{children:"\u9019\u662f\u7528\u65bc\u8a18\u9304\u548c\u56de\u50b3\u80a1\u7968\u76f8\u95dc\u8cc7\u8a0a\u7684\u985e\u5225\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u9ede\u9078\u5c55\u958b\u7269\u4ef6\u5c6c\u6027"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"No."}),(0,t.jsx)(s.th,{children:"\u6b04\u4f4d\u540d\u7a31"}),(0,t.jsx)(s.th,{children:"\u8cc7\u6599\u985e\u578b"}),(0,t.jsx)(s.th,{children:"\u683c\u5f0f"}),(0,t.jsx)(s.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"Exchange"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4ea4\u6613\u6240(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"Symbol"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u4ee3\u865f(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"Category"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u5206\u985e(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"TodayRefPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u53c3\u8003\u50f9(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"RiseStopPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6f32\u505c\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"6"}),(0,t.jsx)(s.td,{children:"FallStopPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u8dcc\u505c\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"ChineseName"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"UTF-8"}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u4e2d\u6587\u540d\u7a31(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"8"}),(0,t.jsx)(s.td,{children:"PreTotalMatchQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e0a\u4e00\u4ea4\u6613\u65e5\u6210\u4ea4\u7e3d\u91cf(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"9"}),(0,t.jsx)(s.td,{children:"PreTodayRefPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e0a\u4e00\u4ea4\u6613\u65e5\u53c3\u8003\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10"}),(0,t.jsx)(s.td,{children:"PreClosePrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e0a\u4e00\u4ea4\u6613\u65e5\u6536\u76e4\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"IndustryCategory"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:'\u53c3\u8003"\u7522\u696d\u5225\u4ee3\u78bc\u8868" \u7522\u696d\u5225(TWSE)'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"12"}),(0,t.jsx)(s.td,{children:"StockCategory"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u53c3\u8003\u201c\u8b49\u5238\u5225\u4ee3\u78bc\u8868\u201d \u8b49\u5238\u5225(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"13"}),(0,t.jsx)(s.td,{children:"BoardRemark"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u677f\u5225\u8a3b\u8a18(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"14"}),(0,t.jsx)(s.td,{children:"ClassRemark"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u985e\u80a1\u8a3b\u8a18(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"15"}),(0,t.jsx)(s.td,{children:"StockAnomalyCode"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:'\u53c3\u8003"\u80a1\u7968\u7570\u5e38\u4ee3\u78bc\u8868" \u80a1\u7968\u7570\u5e38\u4ee3\u78bc(TWSE)'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"16"}),(0,t.jsx)(s.td,{children:"NonTenParValueRemark"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u975e 10 \u5143\u9762\u984d\u8a3b\u8a18(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"17"}),(0,t.jsx)(s.td,{children:"AbnormalRecommendationIndicator"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u7570\u5e38\u63a8\u4ecb\u500b\u80a1\u8a3b\u8a18(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"18"}),(0,t.jsx)(s.td,{children:"AbnormalSecuritiesIndicator"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u7570\u5e38\u63a8\u4ecb\u500b\u80a1\u8a3b\u8a18(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"19"}),(0,t.jsx)(s.td,{children:"DayTradingRemark"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:'"0"\uff1a\u9810\u8a2d\u503c "A"\uff1a\u53ef\u5148\u8cb7\u5f8c\u8ce3\u6216\u5148\u8ce3\u5f8c\u8cb7\u73fe\u80a1\u7576\u6c96\u8b49\u5238 "B"\uff1a\u6642\u8868\u793a\u70ba \u53ef\u5148\u8cb7\u5f8c\u8ce3\u73fe\u80a1\u7576\u6c96\u8b49\u5238 SPACE\uff1a\u8868\u793a\u70ba\u4e0d\u53ef\u73fe\u80a1\u7576\u6c96\u8b49\u5238 \u53ef\u73fe\u80a1\u7576\u6c96\u8a3b\u8a18(TWSE)'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"TradingUnit"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4ea4\u6613\u55ae\u4f4d(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"21"}),(0,t.jsx)(s.td,{children:"TickSize"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6700\u5c0f\u8df3\u52d5\u55ae\u4f4d(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"22"}),(0,t.jsx)(s.td,{children:"prodKind"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5951\u7d04\u7a2e\u985e(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"23"}),(0,t.jsx)(s.td,{children:"strikePriceDecimalLocator"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u9078\u64c7\u6b0a\u5546\u54c1\u4ee3\u865f\u4e4b\u5c65\u7d04\u50f9\u5c0f\u6578\u4f4d\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"24"}),(0,t.jsx)(s.td,{children:"PreTotalTradingAmount"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e0a\u4e00\u4ea4\u6613\u65e5\u6210\u4ea4\u7e3d\u984d(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"25"}),(0,t.jsx)(s.td,{children:"DecimalLocator"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u50f9\u683c\u5c0f\u6578\u4f4d\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"26"}),(0,t.jsx)(s.td,{children:"BeginDate"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"YYYYMMDD"}),(0,t.jsx)(s.td,{children:"\u4e0a\u5e02\u65e5\u671f(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"27"}),(0,t.jsx)(s.td,{children:"EndDate"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"YYYYMMDD"}),(0,t.jsx)(s.td,{children:"\u4e0b\u5e02\u65e5\u671f(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"28"}),(0,t.jsx)(s.td,{children:"FlowGroup"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6d41\u7a0b\u7fa4\u7d44(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"29"}),(0,t.jsx)(s.td,{children:"DeliveryDate"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"YYYYMMDD"}),(0,t.jsx)(s.td,{children:"\u6700\u5f8c\u7d50\u7b97\u65e5(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"30"}),(0,t.jsx)(s.td,{children:"DynamicBanding"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Y:\u9069\u7528, N:\u4e0d\u9069\u7528 \u9069\u7528\u52d5\u614b\u50f9\u683c\u7a69\u5b9a(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"31"}),(0,t.jsx)(s.td,{children:"ContractSymbol"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5951\u7d04\u4ee3\u865f(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"32"}),(0,t.jsx)(s.td,{children:"ContractName"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5951\u7d04\u4e2d\u6587\u540d\u7a31(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"33"}),(0,t.jsx)(s.td,{children:"StockID"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u73fe\u8ca8\u80a1\u7968\u4ee3\u78bc(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"34"}),(0,t.jsx)(s.td,{children:"StatusCode"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"N\uff1a\u6b63\u5e38 P\uff1a\u66ab\u505c\u4ea4\u6613 U\uff1a\u5373\u5c07\u4e0a\u5e02 \u72c0\u614b\u78bc(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"35"}),(0,t.jsx)(s.td,{children:"Currency"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5e63\u5225(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"36"}),(0,t.jsx)(s.td,{children:"AcceptQuoteFlag"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u662f\u5426\u53ef\u5831\u50f9(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"37"}),(0,t.jsx)(s.td,{children:"BlockTradeFlag"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Y:\u53ef N:\u4e0d\u53ef \u662f\u5426\u53ef\u9245\u984d\u4ea4\u6613(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"38"}),(0,t.jsx)(s.td,{children:"ExpiryType"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"S:\u6a19\u6e96 W:\u9031 \u5230\u671f\u5225(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"39"}),(0,t.jsx)(s.td,{children:"UnderlyingType"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"E S:\u500b\u80a1 \u73fe\u8ca8\u985e\u5225(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"40"}),(0,t.jsx)(s.td,{children:"MarketCloseGroup"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:'\u53c3\u8003"\u5546\u54c1\u6536\u76e4\u6642\u9593\u7fa4\u7d44\u8868" \u5546\u54c1\u6536\u76e4\u6642\u9593\u7fa4\u7d44(TAIFEX)'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"41"}),(0,t.jsx)(s.td,{children:"EndSession"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e00\u822c\u4ea4\u6613\u6642\u6bb5\uff1a0 \u76e4\u5f8c\u4ea4\u6613\u6642\u6bb5\uff1a1 \u4ea4\u6613\u6642\u6bb5(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"42"}),(0,t.jsx)(s.td,{children:"isAfterHours"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u65e9\u76e4 : 0 \u5348\u76e4: 1 \u65e9\u5348\u76e4\u8b58\u5225(TAIFEX)"})]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"producttick",children:"ProductTick"}),"\n",(0,t.jsx)(s.p,{children:"\u5373\u6642\u4ea4\u6613\u660e\u7d30\u8cc7\u8a0a\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u9ede\u9078\u5c55\u958b\u7269\u4ef6\u5c6c\u6027"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"No."}),(0,t.jsx)(s.th,{children:"\u6b04\u4f4d\u540d\u7a31"}),(0,t.jsx)(s.th,{children:"\u8cc7\u6599\u985e\u578b"}),(0,t.jsx)(s.th,{children:"\u683c\u5f0f"}),(0,t.jsx)(s.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"Exchange"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4ea4\u6613\u6240(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"Symbol"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u4ee3\u865f(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"MatchTime"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"%H:%M:%S.%f"}),(0,t.jsx)(s.td,{children:"\u6210\u4ea4\u8cc7\u6599\u6642\u9593(\u4ea4\u6613\u6240) (TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"OrderBookTime"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"%H:%M:%S.%f"}),(0,t.jsx)(s.td,{children:"\u4e94\u6a94\u8cc7\u6599\u6642\u9593(\u4ea4\u6613\u6240) (TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"TxSeq"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4ea4\u6613\u6240\u5e8f\u865f(\u6210\u4ea4\u8cc7\u8a0a) (TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"6"}),(0,t.jsx)(s.td,{children:"ObSeq"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4ea4\u6613\u6240\u5e8f\u865f(\u4e94\u6a94\u8cc7\u8a0a) (TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"IsTxTrail"}),(0,t.jsx)(s.td,{children:"bool"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0: \u975e\u8a66\u64ae\uff0c1: \u8a66\u64ae \u662f\u5426\u70ba\u6210\u4ea4\u8a66\u64ae\u8cc7\u6599(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"8"}),(0,t.jsx)(s.td,{children:"Is5QTrial"}),(0,t.jsx)(s.td,{children:"bool"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0: \u975e\u8a66\u64ae\uff0c1: \u8a66\u64ae \u662f\u5426\u70ba\u4e94\u6a94\u8a66\u64ae\u8cc7\u6599(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"9"}),(0,t.jsx)(s.td,{children:"IsTrail"}),(0,t.jsx)(s.td,{children:"bool"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"0: \u975e\u8a66\u64ae\uff0c1: \u8a66\u64ae \u662f\u5426\u70ba\u8a66\u64ae\u8cc7\u6599(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10"}),(0,t.jsx)(s.td,{children:"DecimalLocator"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u50f9\u683c\u6b04\u4f4d\u5c0f\u6578\u4f4d\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"MatchPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6210\u4ea4\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"12"}),(0,t.jsx)(s.td,{children:"MatchQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u6210\u4ea4\u91cf(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"13"}),(0,t.jsx)(s.td,{children:"MatchPriceList"}),(0,t.jsx)(s.td,{children:"list"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e00\u7b46\u884c\u60c5, \u591a\u7b46\u6210\u4ea4\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"14"}),(0,t.jsx)(s.td,{children:"MatchQtyList"}),(0,t.jsx)(s.td,{children:"list"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e00\u7b46\u884c\u60c5, \u591a\u7b46\u6210\u4ea4\u91cf(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"15"}),(0,t.jsx)(s.td,{children:"MatchBuyCount"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u7d2f\u8a08\u8cb7\u9032\u6210\u4ea4\u7b46\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"16"}),(0,t.jsx)(s.td,{children:"MatchSellCount"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u7d2f\u8a08\u8ce3\u51fa\u6210\u4ea4\u7b46\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"17"}),(0,t.jsx)(s.td,{children:"TotalMatchQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u6210\u4ea4\u7e3d\u91cf(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"18"}),(0,t.jsx)(s.td,{children:"TotalTradingAmount"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u6210\u4ea4\u7e3d\u984d(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"19"}),(0,t.jsx)(s.td,{children:"TradingUnit"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4ea4\u6613\u55ae\u4f4d(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"DayHigh"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u7576\u65e5\u6700\u9ad8\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"21"}),(0,t.jsx)(s.td,{children:"DayLow"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u7576\u65e5\u6700\u4f4e\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"22"}),(0,t.jsx)(s.td,{children:"RefPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u53c3\u8003\u50f9(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"23"}),(0,t.jsx)(s.td,{children:"BuyPrice"}),(0,t.jsx)(s.td,{children:"list"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e94\u6a94\u5831\u50f9(\u8cb7\u50f9) (TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"24"}),(0,t.jsx)(s.td,{children:"BuyQty"}),(0,t.jsx)(s.td,{children:"list"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e94\u6a94\u5831\u50f9(\u8cb7\u91cf) (TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"25"}),(0,t.jsx)(s.td,{children:"SellPrice"}),(0,t.jsx)(s.td,{children:"list"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e94\u6a94\u5831\u50f9(\u8ce3\u50f9) (TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"26"}),(0,t.jsx)(s.td,{children:"SellQty"}),(0,t.jsx)(s.td,{children:"list"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u4e94\u6a94\u5831\u50f9(\u8ce3\u91cf) (TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"27"}),(0,t.jsx)(s.td,{children:"AllMarketAmount"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6574\u9ad4\u5e02\u5834\u6210\u4ea4\u7e3d\u984d(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"28"}),(0,t.jsx)(s.td,{children:"AllMarketVolume"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6574\u9ad4\u5e02\u5834\u6210\u4ea4\u6578\u91cf(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"29"}),(0,t.jsx)(s.td,{children:"AllMarketCnt"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6574\u9ad4\u5e02\u5834\u6210\u4ea4\u7b46\u6578(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"30"}),(0,t.jsx)(s.td,{children:"AllMarketBuyCnt"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6574\u9ad4\u5e02\u5834\u59d4\u8a17\u8cb7\u9032\u7b46\u6578(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"31"}),(0,t.jsx)(s.td,{children:"AllMarketSellCnt"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6574\u9ad4\u5e02\u5834\u59d4\u8a17\u8ce3\u51fa\u7b46\u6578(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"32"}),(0,t.jsx)(s.td,{children:"AllMarketBuyQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6574\u9ad4\u5e02\u5834\u59d4\u8a17\u8cb7\u9032\u6578\u91cf(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"33"}),(0,t.jsx)(s.td,{children:"AllMarketSellQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6574\u9ad4\u5e02\u5834\u59d4\u8a17\u8ce3\u51fa\u6578\u91cf(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"34"}),(0,t.jsx)(s.td,{children:"IsFixedPriceTransaction"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u662f\u5426\u70ba\u5b9a\u76e4\u4ea4\u6613(TWSE)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"35"}),(0,t.jsx)(s.td,{children:"OpenPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u958b\u76e4\u50f9(TWSE\u3001TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"36"}),(0,t.jsx)(s.td,{children:"FirstDerivedBuyPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u884d\u751f\u59d4\u8a17\u55ae\u7b2c\u4e00\u6a94\u8cb7\u9032\u50f9\u683c(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"37"}),(0,t.jsx)(s.td,{children:"FirstDerivedBuyQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u884d\u751f\u59d4\u8a17\u55ae\u7b2c\u4e00\u6a94\u8cb7\u9032\u50f9\u683c\u6578\u91cf(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"38"}),(0,t.jsx)(s.td,{children:"FirstDerivedSellPrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u884d\u751f\u59d4\u8a17\u55ae\u7b2c\u4e00\u6a94\u8ce3\u51fa\u50f9\u683c\u6578\u91cf(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"39"}),(0,t.jsx)(s.td,{children:"FirstDerivedSellQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u884d\u751f\u59d4\u8a17\u55ae\u7b2c\u4e00\u6a94\u8ce3\u51fa\u50f9\u683c\u6578\u91cf(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"40"}),(0,t.jsx)(s.td,{children:"TotalBuyOrder"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u8cb7\u9032\u7d2f\u8a08\u59d4\u8a17\u7b46\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"41"}),(0,t.jsx)(s.td,{children:"TotalBuyQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u8cb7\u9032\u7d2f\u8a08\u59d4\u8a17\u5408\u7d04\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"42"}),(0,t.jsx)(s.td,{children:"TotalSellOrder"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u8ce3\u51fa\u7d2f\u8a08\u59d4\u8a17\u7b46\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"43"}),(0,t.jsx)(s.td,{children:"TotalSellQty"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u8ce3\u51fa\u7d2f\u8a08\u59d4\u8a17\u5408\u7d04\u6578(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"44"}),(0,t.jsx)(s.td,{children:"ClosePrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u6536\u76e4\u50f9(TAIFEX)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"45"}),(0,t.jsx)(s.td,{children:"SettlePrice"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"\u7d50\u7b97\u50f9(TAIFEX)"})]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"rcode",children:"RCode"}),"\n",(0,t.jsx)(s.p,{children:"\u9019\u662f\u4e00\u500b\u7528\u4f86\u8a18\u9304\u5831\u50f9\u7cfb\u7d71\u56de\u50b3\u7684\u932f\u8aa4\u4ee3\u78bc\u7684\u985e\u5225\u3002"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u9ede\u9078\u5c55\u958b\u7269\u4ef6\u5c6c\u6027"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u503c"}),(0,t.jsx)(s.th,{children:"\u540d\u7a31"}),(0,t.jsx)(s.th,{children:"\u8aaa\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"OK"}),(0,t.jsx)(s.td,{children:"\u6210\u529f"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_WOULD_BLOCK"}),(0,t.jsx)(s.td,{children:"API \u547c\u53eb\u6703\u963b\u585e\uff0c\u4f46\u8acb\u6c42\u975e\u963b\u585e\u6a21\u5f0f"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_IN_PROGRESS"}),(0,t.jsx)(s.td,{children:"API \u547c\u53eb\u6b63\u5728\u9032\u884c\u4e2d\uff08\u975e\u963b\u585e\u6a21\u5f0f\uff09"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_NOT_READY"}),(0,t.jsx)(s.td,{children:"API \u7121\u6cd5\u5b8c\u6210\uff0c\u56e0\u70ba\u5c0d\u8c61\u672a\u6e96\u5099\u597d\uff08\u4f8b\u5982\uff0c\u6703\u8a71\u672a\u9023\u63a5\uff09"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_EOS"}),(0,t.jsx)(s.td,{children:"\u7d50\u69cb\u5316\u5bb9\u5668\u4e0a\u7684\u4e0b\u4e00\u6b21\u64cd\u4f5c\u8fd4\u56de\u4e86\u6d41\u7d50\u675f"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_NOT_FOUND"}),(0,t.jsx)(s.td,{children:"\u5728 MAP \u4e2d\u67e5\u627e\u547d\u540d\u5b57\u6bb5\u672a\u627e\u5230"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"6"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_NOEVENT"}),(0,t.jsx)(s.td,{children:"\u4e0a\u4e0b\u6587\u7121\u4e8b\u4ef6\u53ef\u8655\u7406"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_INCOMPLETE"}),(0,t.jsx)(s.td,{children:"API \u547c\u53eb\u5b8c\u6210\u4e86\u90e8\u5206\u4f46\u4e0d\u662f\u6240\u6709\u8acb\u6c42\u7684\u529f\u80fd"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"8"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_ROLLBACK"}),(0,t.jsx)(s.td,{children:"\u7576\u4ea4\u6613\u5df2\u56de\u6efe\u6642\uff0cCommit() \u8fd4\u56de\u6b64\u503c"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"9"}),(0,t.jsx)(s.td,{children:"SOLCLIENT_EVENT"}),(0,t.jsx)(s.td,{children:"SolClient \u6703\u8a71\u4e8b\u4ef6"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"10"}),(0,t.jsx)(s.td,{children:"CLIENT_ALREADY_CONNECTED"}),(0,t.jsx)(s.td,{children:"\u9023\u7dda\u5df2\u5efa\u7acb"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"CLIENT_ALREADY_DISCONNECTED"}),(0,t.jsx)(s.td,{children:"\u9023\u7dda\u5df2\u65b7\u7dda"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"12"}),(0,t.jsx)(s.td,{children:"ANNOUNCEMENT"}),(0,t.jsx)(s.td,{children:"\u516c\u544a\u8a0a\u606f"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-1"}),(0,t.jsx)(s.td,{children:"FAIL"}),(0,t.jsx)(s.td,{children:"\u5931\u6557"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-2"}),(0,t.jsx)(s.td,{children:"CONNECTION_REFUSED"}),(0,t.jsx)(s.td,{children:"\u62d2\u7d55\u9023\u7dda"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-3"}),(0,t.jsx)(s.td,{children:"CONNECTION_FAIL"}),(0,t.jsx)(s.td,{children:"\u9023\u7dda\u5931\u6557"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-4"}),(0,t.jsx)(s.td,{children:"ALREADY_EXISTS"}),(0,t.jsx)(s.td,{children:"\u76ee\u6a19\u7269\u4ef6\u5df2\u5b58\u5728"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-5"}),(0,t.jsx)(s.td,{children:"NOT_FOUND"}),(0,t.jsx)(s.td,{children:"\u76ee\u6a19\u7269\u4ef6\u4e0d\u5b58\u5728"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-6"}),(0,t.jsx)(s.td,{children:"CLIENT_NOT_READY"}),(0,t.jsx)(s.td,{children:"\u9023\u7dda\u5c1a\u672a\u6e96\u5099\u597d"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-7"}),(0,t.jsx)(s.td,{children:"USER_SUBSCRIPTION_LIMIT_EXCEEDED"}),(0,t.jsx)(s.td,{children:"\u8d85\u904e\u8a02\u95b1\u6578\u4e0a\u9650"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-8"}),(0,t.jsx)(s.td,{children:"USER_NOT_APPLIED"}),(0,t.jsx)(s.td,{children:"\u5c1a\u672a\u7533\u8acb"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-9"}),(0,t.jsx)(s.td,{children:"USER_NOT_VERIFIED"}),(0,t.jsx)(s.td,{children:"\u5c1a\u672a\u9a57\u8b49"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-10"}),(0,t.jsx)(s.td,{children:"USER_VERIFICATION_FAIL"}),(0,t.jsx)(s.td,{children:"\u9a57\u8b49\u5931\u6557"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-11"}),(0,t.jsx)(s.td,{children:"SUBSCRIPTION_FAIL"}),(0,t.jsx)(s.td,{children:"\u8a02\u95b1\u5546\u54c1\u5931\u6557"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-12"}),(0,t.jsx)(s.td,{children:"RECOVERY_FAIL"}),(0,t.jsx)(s.td,{children:"\u56de\u88dc\u5931\u6557"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-13"}),(0,t.jsx)(s.td,{children:"DOWNLOAD_PRODUCT_FAIL"}),(0,t.jsx)(s.td,{children:"\u4e0b\u8f09\u57fa\u672c\u8cc7\u6599\u6a94\u5931\u6557"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-14"}),(0,t.jsx)(s.td,{children:"MESSAGE_HANDLER_FAIL"}),(0,t.jsx)(s.td,{children:"\u8a0a\u606f\u8655\u7406\u932f\u8aa4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-15"}),(0,t.jsx)(s.td,{children:"FUNCTION_SUBSCRIPTION_LIMIT_EXCEEDED"}),(0,t.jsx)(s.td,{children:"\u529f\u80fd\u8a02\u95b1\u6578\u8d85\u904e\u4e0a\u9650"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-16"}),(0,t.jsx)(s.td,{children:"USER_NOT_VERIFIED_TWSE"}),(0,t.jsx)(s.td,{children:"\u5c1a\u672a\u9a57\u8b49 TWSE"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-17"}),(0,t.jsx)(s.td,{children:"USER_NOT_VERIFIED_TAIFEX"}),(0,t.jsx)(s.td,{children:"\u5c1a\u672a\u9a57\u8b49 TAIFEX"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-18"}),(0,t.jsx)(s.td,{children:"USER_NOT_VERIFIED_TWSE_TAIFEX"}),(0,t.jsx)(s.td,{children:"\u5c1a\u672a\u9a57\u8b49 TWSE&TAIFEX"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"-9999"}),(0,t.jsx)(s.td,{children:"UNKNOWN_ERROR"}),(0,t.jsx)(s.td,{children:"\u672a\u77e5\u932f\u8aa4"})]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"marketdatamart",children:"MarketDataMart"}),"\n",(0,t.jsx)(s.p,{children:"\u9019\u662f\u5831\u50f9\u7cfb\u7d71\u4e2d\u7684\u4e00\u500b\u8d77\u59cb\u9ede\uff0c\u985e\u5225\u672c\u8eab\u53ea\u5b9a\u7fa9\u4e86\u5e7e\u500b\u65b9\u6cd5\uff0c\u9019\u4e9b\u65b9\u6cd5\u6703\u7528\u4f86\u89f8\u767c\u4e8b\u4ef6\uff0c\u4f8b\u5982\u6210\u4ea4\u8a0a\u606f\u3001\u59d4\u8a17\u8a0a\u606f\u7b49\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u5728\u5f8c\u7e8c\u7684\u4f7f\u7528\u4e2d\uff0c\u5fc5\u9808\u624b\u52d5\u639b\u8f09\u5c0d\u61c9\u7684\u4e8b\u4ef6\u8655\u7406\u5668\u3002"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Event"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnSystemEvent"})}),(0,t.jsx)(s.td,{children:"\u7cfb\u7d71\u8a0a\u606f\u901a\u77e5"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_MarketDataMart_ConnectState"})}),(0,t.jsx)(s.td,{children:"\u7cfb\u7d71\u9023\u7dda\u72c0\u614b"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnUpdateBasic"})}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u57fa\u672c\u8cc7\u6599\u66f4\u65b0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnUpdateProductBasicList"})}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u57fa\u672c\u8cc7\u6599\u5217\u8868\u66f4\u65b0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnUpdateLastSnapshot"})}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u6700\u65b0\u5feb\u7167\u66f4\u65b0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnMatch"})}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u6210\u4ea4\u8a0a\u606f"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnOrderBook"})}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u59d4\u8a17\u8a0a\u606f"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnUpdateTotalOrderQty"})}),(0,t.jsx)(s.td,{children:"\u5546\u54c1\u59d4\u8a17\u91cf\u7d2f\u8a08\u66f4\u65b0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnUpdateOptionGreeks"})}),(0,t.jsx)(s.td,{children:"\u9078\u64c7\u6b0a\u5546\u54c1 Greeks \u66f4\u65b0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnUpdateOvsBasic"})}),(0,t.jsx)(s.td,{children:"\u6d77\u5916\u5546\u54c1\u57fa\u672c\u8cc7\u6599\u66f4\u65b0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnUpdateOvsMatch"})}),(0,t.jsx)(s.td,{children:"\u6d77\u5916\u5546\u54c1\u6210\u4ea4\u8cc7\u6599\u66f4\u65b0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Fire_OnUpdateOvsOrderBook"})}),(0,t.jsx)(s.td,{children:"\u6d77\u5916\u5546\u54c1\u4e94\u6a94\u8cc7\u6599\u66f4\u65b0"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"sol_d",children:"Sol_D"}),"\n",(0,t.jsxs)(s.p,{children:["\u9019\u500b\u985e\u5225\u7684\u8f38\u5165\u53c3\u6578\u662f\u4e00\u500b ",(0,t.jsx)(s.code,{children:"MarketDataMart"})," \u985e\u5225\u7684\u5be6\u4f8b\uff0c\u4e26\u76f4\u63a5\u5c07 ",(0,t.jsx)(s.code,{children:"MarketDataMart"})," \u5be6\u4f8b\u9001\u9032 ",(0,t.jsx)(s.code,{children:"MasterQuoteDAPI"})," \u985e\u5225\u4e2d\uff0c\u7522\u751f\u53e6\u5916\u4e00\u500b\u5be6\u4f8b\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u6211\u5011\u67e5\u770b ",(0,t.jsx)(s.code,{children:"MasterQuoteDAPI"})," \u7684\u5be6\u4f5c\u4e2d\uff0c\u6703\u63a5\u6536\u5230 ",(0,t.jsx)(s.code,{children:"MarketDataMart"})," \u5be6\u4f8b\u5f8c\uff0c\u518d\u6b21\u628a\u5b83\u9001\u9032 ",(0,t.jsx)(s.code,{children:"SolAPI"})," \u985e\u5225\u4e2d\uff0c\u7522\u751f\u53e6\u5916\u4e00\u500b\u5be6\u4f8b\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u597d\u5427\uff0c\u9019\u4e9b\u90fd\u662f\u4ed6\u5011\u7684\u5be6\u4f5c\u65b9\u5f0f\uff0c\u5148\u4e0d\u7ba1\u4e86\u3002"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.p,{children:["\u5728 ",(0,t.jsx)(s.code,{children:"Sol_D"})," \u985e\u5225\u4e2d\uff0c\u88e1\u9762\u6709\u63d0\u4f9b\u5e7e\u500b\u4f7f\u7528\u8005\u5e38\u7528\u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Login"}),": \u767b\u5165"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.DisConnect"}),": \u767b\u51fa"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Subscribe"}),": \u8a02\u95b1\u5546\u54c1\u5831\u50f9"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.UnSubscribe"}),": \u53d6\u6d88\u8a02\u95b1\u5546\u54c1\u5831\u50f9"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u9084\u6709\u4e00\u4e9b\u4e8b\u4ef6\u8655\u7406\u5668\uff0c\u5fc5\u9808\u5148\u5b9a\u7fa9\u5916\u90e8\u51fd\u6578\u4e4b\u5f8c\uff0c\u7528\u4ed6\u5011\u6307\u5b9a\u7684\u65b9\u6cd5\u639b\u8f09\uff1a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Set_OnLogEvent"}),": \u8a2d\u5b9a\u767b\u5165\u4e8b\u4ef6\u8655\u7406\u5668"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Set_OnInterruptEvent"}),": \u8a2d\u5b9a\u7cfb\u7d71\u4e8b\u4ef6\u8655\u7406\u5668"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Set_OnLoginResultEvent_DAPI"}),": \u8a2d\u5b9a\u767b\u5165\u7d50\u679c\u4e8b\u4ef6\u8655\u7406\u5668"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Set_OnAnnouncementEvent_DAPI"}),": \u8a2d\u5b9a\u516c\u544a\u4e8b\u4ef6\u8655\u7406\u5668"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Set_OnVerifiedEvent_DAPI"}),": \u8a2d\u5b9a\u9a57\u8b49\u4e8b\u4ef6\u8655\u7406\u5668"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Set_OnSystemEvent_DAPI"}),": \u8a2d\u5b9a\u7cfb\u7d71\u4e8b\u4ef6\u8655\u7406\u5668"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Set_OnUpdateBasic_DAPI"}),": \u8a2d\u5b9a\u5546\u54c1\u57fa\u672c\u8cc7\u6599\u66f4\u65b0\u4e8b\u4ef6\u8655\u7406\u5668"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Sol_D.Set_OnMatch_DAPI"}),": \u8a2d\u5b9a\u5546\u54c1\u6210\u4ea4\u8a0a\u606f\u4e8b\u4ef6\u8655\u7406\u5668"]}),"\n"]})]})}function h(d={}){const{wrapper:s}={...(0,e.R)(),...d.components};return s?(0,t.jsx)(s,{...d,children:(0,t.jsx)(j,{...d})}):j(d)}},28453:(d,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var t=r(96540);const e={},n=t.createContext(e);function i(d){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof d?d(s):{...s,...d}}),[s,d])}function l(d){let s;return s=d.disableParentContext?"function"==typeof d.components?d.components(e):d.components||e:i(d.components),t.createElement(n.Provider,{value:s},d.children)}}}]);