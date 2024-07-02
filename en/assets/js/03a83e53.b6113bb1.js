"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2283],{33371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(74848),i=t(28453);const r={sidebar_position:8},a="Backtesting System",o={id:"autotraderx/masterlink/backtesting",title:"Backtesting System",description:"After analyzing the MasterLink's backtesting system Python API, we can now develop a customized backtesting system tailored to our needs.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/autotraderx/masterlink/backtesting.md",sourceDirName:"autotraderx/masterlink",slug:"/autotraderx/masterlink/backtesting",permalink:"/en/docs/autotraderx/masterlink/backtesting",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719919838e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Order System",permalink:"/en/docs/autotraderx/masterlink/trader"},next:{title:"DocsaidKit",permalink:"/en/docs/category/docsaidkit"}},c={},d=[{value:"Account Login",id:"account-login",level:2},{value:"Subscribing to Indicators",id:"subscribing-to-indicators",level:2},{value:"Historical Trades",id:"historical-trades",level:2},{value:"Next Steps",id:"next-steps",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"backtesting-system",children:"Backtesting System"}),"\n",(0,s.jsx)(n.p,{children:"After analyzing the MasterLink's backtesting system Python API, we can now develop a customized backtesting system tailored to our needs."}),"\n",(0,s.jsx)(n.h2,{id:"account-login",children:"Account Login"}),"\n",(0,s.jsx)(n.p,{children:"You can directly embed your account credentials within the class inputs, or alternatively, follow our approach: using a YAML file to store account information."}),"\n",(0,s.jsx)(n.p,{children:"In the parameter file, ensure to include both the username and password, essential for successful login to your MasterLink account."}),"\n",(0,s.jsxs)(n.p,{children:["Next, import the ",(0,s.jsx)(n.code,{children:"BackTesting"})," class from ",(0,s.jsx)(n.code,{children:"autotraderx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from autotraderx import load_yaml\nfrom autotraderx.masterlink import BackTesting\n\n# Load account info\ncfg = load_yaml(DIR / "account.yaml")\n\n# Login to account\nhandler = BackTesting(\n    user=cfg["user"],\n    password=cfg["password"],\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"subscribing-to-indicators",children:"Subscribing to Indicators"}),"\n",(0,s.jsx)(n.p,{children:"While testing the provided official example code, we encountered a prolonged period of non-responsiveness when subscribing to indicators."}),"\n",(0,s.jsx)(n.p,{children:"Here's the example code provided by the official documentation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'ta = TechAnalysis(...)\n\nopt = input("1: Indicator\\n2: Historical Trades\\n> ")\nif opt == "1":\n    k_config = option()\n    ta.SubTA(k_config)\n    input("running...\\n")\n    ta.UnSubTA(k_config)\n'})}),"\n",(0,s.jsx)(n.p,{children:'Upon execution, we faced a delay stuck at "running..." for approximately five minutes, leading us to terminate the program due to impatience.'}),"\n",(0,s.jsx)(n.p,{children:"Moreover, since most technical indicators are derived from price-volume data, we find it more efficient to retrieve price-volume data ourselves and compute the indicators."}),"\n",(0,s.jsx)(n.p,{children:"Therefore, we won't be implementing this part of the functionality."}),"\n",(0,s.jsx)(n.h2,{id:"historical-trades",children:"Historical Trades"}),"\n",(0,s.jsxs)(n.p,{children:["Once logged into the account, you can use our encapsulated ",(0,s.jsx)(n.code,{children:"get_data"})," function to retrieve data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'data = handler.get_data(\n    prod_id="2330",\n    date="20240102",\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here, ",(0,s.jsx)(n.code,{children:"prod_id"})," represents the stock code, and ",(0,s.jsx)(n.code,{children:"date"})," follows the format ",(0,s.jsx)(n.code,{children:"YYYYMMDD"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Upon executing the above code, it returns a structure in the form of List[Dict]:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    ...omitting above data...\n    {\n        "\u6210\u4ea4\u50f9\u683c": 590.0,\n        "\u6210\u4ea4\u6642\u9593": 132459.132661,\n        "\u6210\u4ea4\u91cf": 1,\n        "\u80a1\u7968\u4ee3\u865f": "2330",\n        "\u8a66\u6413": False,\n        "\u8cb7\u8ce3": 2\n    },\n    {\n        "\u6210\u4ea4\u50f9\u683c": 593.0,\n        "\u6210\u4ea4\u6642\u9593": 133000.0,\n        "\u6210\u4ea4\u91cf": 3704,\n        "\u80a1\u7968\u4ee3\u865f": "2330",\n        "\u8a66\u6413": False,\n        "\u8cb7\u8ce3": 2\n    }\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Based on our observation, we discovered several features in the MasterLink API:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"\u8a66\u6413"})," (Test Rounding)"]}),": Indicates whether the transaction is a test rounding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"\u8cb7\u8ce3"})," (Buy/Sell)"]}),": Represents whether the transaction occurred in the bid or ask, where ",(0,s.jsx)(n.code,{children:"0"})," signifies a neutral position, ",(0,s.jsx)(n.code,{children:"1"})," represents the bid, and ",(0,s.jsx)(n.code,{children:"2"})," indicates the ask."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"\u6210\u4ea4\u6642\u9593"})," (Transaction Time)"]}),": This field is read as ",(0,s.jsx)(n.code,{children:"HHMMSS.ffffff"}),", where ",(0,s.jsx)(n.code,{children:"HH"})," is hours, ",(0,s.jsx)(n.code,{children:"MM"})," is minutes, ",(0,s.jsx)(n.code,{children:"SS"})," is seconds, and ",(0,s.jsx)(n.code,{children:"ffffff"})," represents microseconds."]}),"\n",(0,s.jsx)(n.li,{children:"We attempted to query historical data and found records available only from mid-April 2022 onwards."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"However, for our modest-scale usage, having data spanning over two years should suffice."}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"Our plan is to first retrieve available stock transaction data and establish our own database system."}),"\n",(0,s.jsx)(n.p,{children:"For subsequent tasks such as calculating technical indicators or backtesting trading strategies, we can directly access data from our database, ensuring speed and convenience."}),"\n",(0,s.jsx)(n.p,{children:"As for acquiring data from earlier periods, we'll address those needs as they arise."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);