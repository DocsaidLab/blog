"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7055],{52512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(74848),i=n(28453);const r={sidebar_position:6},d="Quotation System",o={id:"autotraderx/masterlink/quotation",title:"Quotation System",description:"After analyzing MasterLink's Python API for their quotation system, we can develop our own quotation system based on our specific needs.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/autotraderx/masterlink/quotation.md",sourceDirName:"autotraderx/masterlink",slug:"/autotraderx/masterlink/quotation",permalink:"/en/docs/autotraderx/masterlink/quotation",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Backtesting System Analysis",permalink:"/en/docs/autotraderx/masterlink/backtesting_analysis"},next:{title:"Order System",permalink:"/en/docs/autotraderx/masterlink/trader"}},l={},c=[{value:"Logging In",id:"logging-in",level:2},{value:"Starting the Quotation System",id:"starting-the-quotation-system",level:2},{value:"Content Examples",id:"content-examples",level:2},{value:"Basic Stock Information",id:"basic-stock-information",level:3},{value:"Daily Transaction Data",id:"daily-transaction-data",level:3},{value:"Additional Features",id:"additional-features",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"quotation-system",children:"Quotation System"}),"\n",(0,s.jsx)(t.p,{children:"After analyzing MasterLink's Python API for their quotation system, we can develop our own quotation system based on our specific needs."}),"\n",(0,s.jsx)(t.p,{children:"Although the usage examples provided by MasterLink do not explicitly demonstrate how to subscribe to multiple stock symbols, we found this functionality in the source code. Since we are not developing a mobile app and cannot integrate a UI interface, we will output each subscribed stock to an external file instead of displaying it in the command line to avoid clutter."}),"\n",(0,s.jsx)(t.h2,{id:"logging-in",children:"Logging In"}),"\n",(0,s.jsx)(t.p,{children:"You can directly input your username and password into the class, or you can follow our approach by storing account information in a YAML file."}),"\n",(0,s.jsx)(t.p,{children:"The parameter file must include the username, password, and account number to log into MasterLink."}),"\n",(0,s.jsxs)(t.p,{children:["First, import the ",(0,s.jsx)(t.code,{children:"QuotationSystem"})," class from ",(0,s.jsx)(t.code,{children:"autotraderx"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from autotraderx import load_yaml\nfrom autotraderx.masterlink import QuotationSystem\n\n# Load account infos\ncfg = load_yaml(DIR / "account.yaml")\n\n# Login account\nhandler = QuotationSystem(\n    user=cfg["user"],\n    password=cfg["password"],\n    subscribe_list=["2330", "2454"]\n)\n'})}),"\n",(0,s.jsx)(t.p,{children:"When logging in, you need to include the stock symbols you want to subscribe to. This can also be written into the YAML file, so you don't have to change the code each time."}),"\n",(0,s.jsx)(t.h2,{id:"starting-the-quotation-system",children:"Starting the Quotation System"}),"\n",(0,s.jsx)(t.p,{children:"After logging in, you can start the quotation system:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"handler.run()\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"run_quotation",src:n(88737).A+"",width:"1224",height:"428"})}),"\n",(0,s.jsx)(t.p,{children:"Once started, the quotation system will create files in the execution directory, including:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"log[date][stock_symbol]_info.md"}),": Records the previous day's closing price, the latest transaction price, the latest transaction volume, and other information."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"log[date][stock_symbol]_match.md"}),": Records each tick's transaction information for the stock."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Then, you can simply wait as the quotation system will automatically update the stock information."}),"\n",(0,s.jsxs)(t.p,{children:["To stop the quotation system, press ",(0,s.jsx)(t.code,{children:"Ctrl + C"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"content-examples",children:"Content Examples"}),"\n",(0,s.jsx)(t.p,{children:"Below are examples of the updated file contents:"}),"\n",(0,s.jsx)(t.h3,{id:"basic-stock-information",children:"Basic Stock Information"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Item"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Chinese Name"}),(0,s.jsx)(t.td,{children:"TSMC"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Exchange Code"}),(0,s.jsx)(t.td,{children:"TWS"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Reference Price"}),(0,s.jsx)(t.td,{children:"921.0000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Upper Limit Price"}),(0,s.jsx)(t.td,{children:"1010.0000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Lower Limit Price"}),(0,s.jsx)(t.td,{children:"829.0000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Previous Day's Volume"}),(0,s.jsx)(t.td,{children:"26262"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Previous Day's Ref Price"}),(0,s.jsx)(t.td,{children:"922.0000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Previous Day's Close Price"}),(0,s.jsx)(t.td,{children:"921.0000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Industry Category"}),(0,s.jsx)(t.td,{children:"24"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stock Anomaly Code"}),(0,s.jsx)(t.td,{children:"0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Non-10 Par Value Remark"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Abnormal Recommendation Indicator"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Day Trading Indicator"}),(0,s.jsx)(t.td,{children:"A"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Trading Unit"}),(0,s.jsx)(t.td,{children:"1000"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"daily-transaction-data",children:"Daily Transaction Data"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Transaction Time"}),(0,s.jsx)(t.th,{children:"Transaction Price"}),(0,s.jsx)(t.th,{children:"Price Change"}),(0,s.jsx)(t.th,{children:"Transaction Volume"}),(0,s.jsx)(t.th,{children:"Total Volume"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:14:28.097382"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"23491"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:14:33.153135"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"23492"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:14:37.089803"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"23494"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:14:38.663758"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"23498"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:14:59.809925"}),(0,s.jsx)(t.td,{children:"945.0000"}),(0,s.jsx)(t.td,{children:"+24.000"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"23499"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:15:00.081727"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"23501"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:15:00.196828"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"23502"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:15:00.567548"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"23503"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:15:04.071329"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"23504"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:15:04.598060"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsx)(t.td,{children:"23505"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:15:07.634295"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"23508"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:15:10.137589"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"23510"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"11:15:12.460697"}),(0,s.jsx)(t.td,{children:"944.0000"}),(0,s.jsx)(t.td,{children:"+23.000"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsx)(t.td,{children:"23513"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"additional-features",children:"Additional Features"}),"\n",(0,s.jsx)(t.p,{children:"We have some additional features pending completion, such as:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Specify Output Format"}),": Currently, we only output to markdown files, but we can consider other formats like CSV or JSON in the future."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Import Trading Events"}),": Integrate the quotation system with the trading system so that when the quotation system detects a certain price, it can automatically place an order."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'For now, the output format is not a pressing issue, so it can be left as is. Importing trading events is more complex, usually referred to as a "trading strategy," and varies with different targets. Designing this feature will be our next development focus.'}),"\n",(0,s.jsx)(t.p,{children:"Of course, other features can be added. You can give us suggestions, and we will consider incorporating them into the quotation system."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},88737:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/run_quotation-d87b7fdcd165a51674c18779c7305da7.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);