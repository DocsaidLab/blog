"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2738],{65527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const o={slug:"get-taiwan-all-stocks-info",title:"Get All Stock Code Information from TWSE",authors:"Zephyr",image:"/en/img/2024/0610.webp",tags:["requests","beautifulsoup4","python","TWSE"],description:"Get information on all stocks listed on TWSE using Python."},a=void 0,r={permalink:"/en/blog/get-taiwan-all-stocks-info",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024/06-10-get-taiwan-all-stocks-info/index.md",title:"Get All Stock Code Information from TWSE",description:"Get information on all stocks listed on TWSE using Python.",date:"2024-06-10T00:00:00.000Z",tags:[{inline:!0,label:"requests",permalink:"/en/blog/tags/requests"},{inline:!0,label:"beautifulsoup4",permalink:"/en/blog/tags/beautifulsoup-4"},{inline:!0,label:"python",permalink:"/en/blog/tags/python"},{inline:!0,label:"TWSE",permalink:"/en/blog/tags/twse"}],readingTime:2.59,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"get-taiwan-all-stocks-info",title:"Get All Stock Code Information from TWSE",authors:"Zephyr",image:"/en/img/2024/0610.webp",tags:["requests","beautifulsoup4","python","TWSE"],description:"Get information on all stocks listed on TWSE using Python."},unlisted:!1,nextItem:{title:"Simple Configuration of Python Environment on Win11",permalink:"/en/blog/windows-python-settings"}},l={authorsImageUrls:[void 0]},c=[{value:"Setup Environment",id:"setup-environment",level:2},{value:"Target Webpages",id:"target-webpages",level:2},{value:"Parsing the Webpage",id:"parsing-the-webpage",level:2},{value:"Output Results",id:"output-results",level:2},{value:"FAQs",id:"faqs",level:2},{value:"I only want ordinary stocks.",id:"i-only-want-ordinary-stocks",level:3},{value:"I only want specific industries.",id:"i-only-want-specific-industries",level:3},{value:"The program is broken.",id:"the-program-is-broken",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"title",src:t(22964).A+"",width:"1024",height:"1024"}),"\n",(0,s.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading this article."})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"The stock codes in the Taiwanese market change periodically, making manual tracking impractical."}),"\n",(0,s.jsx)(n.p,{children:"It's time to automate!"}),"\n",(0,s.jsx)(n.h2,{id:"setup-environment",children:"Setup Environment"}),"\n",(0,s.jsx)(n.p,{children:"Let's tackle the challenge by writing a program. First, install the necessary packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install requests beautifulsoup4 json\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Assuming you have a functional Python environment."})}),"\n",(0,s.jsx)(n.h2,{id:"target-webpages",children:"Target Webpages"}),"\n",(0,s.jsx)(n.p,{children:"Stock-related data resides on the website of the Taiwan Stock Exchange (TWSE). Let's identify the target pages:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"TWSE",src:t(65576).A+"",width:"3322",height:"1851"})}),"\n",(0,s.jsx)(n.p,{children:"Note down these three URLs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'urls = [\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=2", # Listed securities\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=4", # OTC securities\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=5"  # Emerging stocks\n]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"parsing-the-webpage",children:"Parsing the Webpage"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"stock_table",src:t(76503).A+"",width:"3799",height:"1077"})}),"\n",(0,s.jsxs)(n.p,{children:["Upon inspecting the webpage, we identify that the main table corresponds to the HTML tag ",(0,s.jsx)(n.code,{children:"class=h4"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Now that we've located our target, let's start coding:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="update_stocks_code.py"',children:'import json\nimport requests\nfrom bs4 import BeautifulSoup\n\n# Retrieve content from Taiwan Stock Exchange announcements\nurls = [\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=2", # Listed securities\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=4", # OTC securities\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=5"  # Emerging stocks\n]\n\n# All data infos\ndata = {}\n\ntotal_urls = len(urls)\nfor index, url in enumerate(urls, start=1):\n    print(f"Processing URL {index}/{total_urls}: {url}")\n\n    response = requests.get(url)\n    response.encoding = \'big5\'  # Set the correct encoding\n\n    # Parse HTML using BeautifulSoup\n    soup = BeautifulSoup(response.text, \'html.parser\')\n    table = soup.find(\'table\', {\'class\': \'h4\'})\n\n    if not table:\n        print(f"Table not found for URL: {url}")\n        continue\n\n    for row in table.find_all(\'tr\')[1:]:  # Skip header row\n        cells = row.find_all(\'td\')\n        if len(cells) != 7:\n            continue\n\n        code, name = cells[0].text.split("\\u3000")\n        internationality = cells[1].text\n        list_date = cells[2].text\n        market_type = cells[3].text\n        industry_type = cells[4].text\n\n        data[code] = {\n            "Name": name,\n            "Code": code,\n            "Market Type": market_type,\n            "Industry Type": industry_type,\n            "Listing Date": list_date,\n            "International Code": internationality\n        }\n\nwith open("stock_infos.json", "w", encoding="utf-8") as f:\n    json.dump(data, f, ensure_ascii=False, indent=2)\n\nprint("All data has been processed and saved to stock_infos.json")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"output-results",children:"Output Results"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="stock_infos.json"',children:'{\n  "1101": {\n    "Name": "Taiwan Cement",\n    "Code": "1101",\n    "Market Type": "Listed",\n    "Industry Type": "Cement Industry",\n    "Listing Date": "1962/02/09",\n    "International Code": "TW0001101004"\n  },\n  "1102": {\n    "Name": "Asia Cement",\n    "Code": "1102",\n    "Market Type": "Listed",\n    "Industry Type": "Cement Industry",\n    "Listing Date": "1962/06/08",\n    "International Code": "TW0001102002"\n  },\n  ...omitting the rest...\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"We output the result as a JSON file for convenient integration with other programs."}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsx)(n.h3,{id:"i-only-want-ordinary-stocks",children:"I only want ordinary stocks."}),"\n",(0,s.jsx)(n.p,{children:'I assume you mean stocks with "four-digit" codes, excluding ETFs, warrants, etc. To achieve this, simply add a filtering condition in the program:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"if len(code) != 4:\n    continue\n"})}),"\n",(0,s.jsx)(n.h3,{id:"i-only-want-specific-industries",children:"I only want specific industries."}),"\n",(0,s.jsx)(n.p,{children:'This requirement can be extended to specific market types, industry types, listing dates, or even the previous "ordinary stocks" question. We just need to load the output JSON file into Pandas and filter with conditions:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import pandas as pd\n\ndf = pd.read_json("stock_infos.json", orient="index")\ntarget = df[df["Industry Type"] == "Cement Industry"]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"the-program-is-broken",children:"The program is broken."}),"\n",(0,s.jsx)(n.p,{children:"That could be due to changes in the TWSE website's layout, causing the HTML structure to alter. We'll need to adjust the code accordingly."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"By periodically running this program, we can obtain the latest stock information."}),"\n",(0,s.jsx)(n.p,{children:"If you have any questions or suggestions, feel free to leave a comment below!"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65576:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/img1-127414ab0646293a663eeab2cd7524ea.jpg"},76503:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/img2-4ffe9c13206f8f5db60e1155ad8a9a89.jpg"},22964:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/0610-9c4b65403b9528843b9f5e0a39a38fc4.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);