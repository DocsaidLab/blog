"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2631],{78585:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453);const l={slug:"get-taiwan-all-stocks-info",title:"\u53d6\u5f97 TWSE \u6240\u6709\u80a1\u7968\u4ee3\u865f\u8cc7\u6599",authors:"Zephyr",image:"/img/2024/0610.webp",tags:["requests","beautifulsoup4","python","TWSE"],description:"Get Taiwan all stocks info from TWSE by Python."},o=void 0,a={permalink:"/blog/get-taiwan-all-stocks-info",source:"@site/blog/2024/06-10-get-taiwan-all-stocks-info/index.md",title:"\u53d6\u5f97 TWSE \u6240\u6709\u80a1\u7968\u4ee3\u865f\u8cc7\u6599",description:"Get Taiwan all stocks info from TWSE by Python.",date:"2024-06-10T00:00:00.000Z",tags:[{inline:!0,label:"requests",permalink:"/blog/tags/requests"},{inline:!0,label:"beautifulsoup4",permalink:"/blog/tags/beautifulsoup-4"},{inline:!0,label:"python",permalink:"/blog/tags/python"},{inline:!0,label:"TWSE",permalink:"/blog/tags/twse"}],readingTime:3.97,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"get-taiwan-all-stocks-info",title:"\u53d6\u5f97 TWSE \u6240\u6709\u80a1\u7968\u4ee3\u865f\u8cc7\u6599",authors:"Zephyr",image:"/img/2024/0610.webp",tags:["requests","beautifulsoup4","python","TWSE"],description:"Get Taiwan all stocks info from TWSE by Python."},unlisted:!1,nextItem:{title:"\u7c21\u55ae\u914d\u7f6e Win11 \u7cfb\u7d71\u7684 Python \u74b0\u5883",permalink:"/blog/windows-python-settings"}},r={authorsImageUrls:[void 0]},c=[{value:"\u5b89\u88dd\u74b0\u5883",id:"\u5b89\u88dd\u74b0\u5883",level:2},{value:"\u76ee\u6a19\u7db2\u9801",id:"\u76ee\u6a19\u7db2\u9801",level:2},{value:"\u89e3\u6790\u7db2\u9801",id:"\u89e3\u6790\u7db2\u9801",level:2},{value:"\u8f38\u51fa\u7d50\u679c",id:"\u8f38\u51fa\u7d50\u679c",level:2},{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:2},{value:"\u6211\u53ea\u8981\u4e00\u822c\u80a1\u7968",id:"\u6211\u53ea\u8981\u4e00\u822c\u80a1\u7968",level:3},{value:"\u6211\u53ea\u8981\u7279\u5b9a\u7684\u7522\u696d",id:"\u6211\u53ea\u8981\u7279\u5b9a\u7684\u7522\u696d",level:3},{value:"\u7a0b\u5f0f\u58de\u6389\u4e86",id:"\u7a0b\u5f0f\u58de\u6389\u4e86",level:3},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"title",src:s(22964).A+"",width:"1024",height:"1024"}),"\n",(0,t.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u81fa\u7063\u80a1\u5e02\u6bcf\u9694\u4e00\u6bb5\u6642\u9593\u5c31\u6703\u66f4\u8fed\u4e00\u6b21\u80a1\u7968\u4ee3\u865f\uff0c\u6bcf\u6b21\u90fd\u7528\u4eba\u5de5\u67e5\u627e\uff0c\u7e3d\u4e0d\u662f\u8fa6\u6cd5\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6240\u4ee5\u6211\u5011\u9700\u8981\u81ea\u52d5\u5316\uff01"}),"\n",(0,t.jsx)(e.h2,{id:"\u5b89\u88dd\u74b0\u5883",children:"\u5b89\u88dd\u74b0\u5883"}),"\n",(0,t.jsx)(e.p,{children:"\u9047\u5230\u56f0\u96e3\u5c31\u81ea\u5df1\u5beb\u500b\u7a0b\u5f0f\u5427\uff0c\u9996\u5148\u5b89\u88dd\u5fc5\u8981\u7684\u5957\u4ef6\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install requests beautifulsoup4 json\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u9019\u908a\u6211\u5011\u5047\u8a2d\u4f60\u5df2\u7d93\u6709\u4e86\u53ef\u4ee5\u6b63\u5e38\u904b\u884c\u7684 Python \u74b0\u5883\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u76ee\u6a19\u7db2\u9801",children:"\u76ee\u6a19\u7db2\u9801"}),"\n",(0,t.jsx)(e.p,{children:"\u80a1\u7968\u76f8\u95dc\u7684\u8cc7\u6599\u90fd\u5728\u81fa\u7063\u8b49\u5238\u4ea4\u6613\u6240\uff08TWSE\uff09\u7684\u7db2\u7ad9\u4e0a\uff0c\u6211\u5011\u9700\u8981\u627e\u5230\u76ee\u6a19\u7db2\u9801\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://www.twse.com.tw/zh/products/code/announcement.html",children:(0,t.jsx)(e.strong,{children:"\u81fa\u7063\u8b49\u5238\u4ea4\u6613\u6240/\u8b49\u5238\u7de8\u78bc\u516c\u544a"})})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"TWSE",src:s(15074).A+"",width:"3322",height:"1851"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u5011\u5148\u628a\u9019\u4e09\u500b\u7db2\u9801\u8a18\u4e0b\u4f86\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'urls = [\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=2", # \u4e0a\u5e02\u8b49\u5238\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=4", # \u4e0a\u6ac3\u8b49\u5238\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=5"  # \u8208\u6ac3\u8b49\u5238\n]\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u89e3\u6790\u7db2\u9801",children:"\u89e3\u6790\u7db2\u9801"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"stock_table",src:s(77357).A+"",width:"3799",height:"1077"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7db2\u9801\u9ede\u9032\u53bb\u4e4b\u5f8c\uff0c\u67e5\u8a62\u4e00\u4e0b\u4e3b\u8981\u8868\u683c\u5c0d\u61c9\u7684 HTML \u6a19\u7c64\u662f\uff1a",(0,t.jsx)(e.code,{children:"class=h4"}),"\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u597d\uff0c\u627e\u5230\u76ee\u6a19\u4e4b\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u958b\u59cb\u5beb\u7a0b\u5f0f\u4e86\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="update_stocks_code.py"',children:'import json\nimport requests\nfrom bs4 import BeautifulSoup\n\n# \u53d6\u5f97\u81fa\u7063\u8b49\u5238\u4ea4\u6613\u6240\u516c\u544a\u5167\u5bb9\nurls = [\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=2", # \u4e0a\u5e02\u8b49\u5238\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=4", # \u4e0a\u6ac3\u8b49\u5238\n    "https://isin.twse.com.tw/isin/C_public.jsp?strMode=5"  # \u8208\u6ac3\u8b49\u5238\n]\n\n# All data infos\ndata = {}\n\ntotal_urls = len(urls)\nfor index, url in enumerate(urls, start=1):\n    print(f"Processing URL {index}/{total_urls}: {url}")\n\n    response = requests.get(url)\n    response.encoding = \'big5\'  # \u8a2d\u5b9a\u6b63\u78ba\u7684\u7de8\u78bc\u683c\u5f0f\n\n    # \u4f7f\u7528 BeautifulSoup \u89e3\u6790 HTML\n    soup = BeautifulSoup(response.text, \'html.parser\')\n    table = soup.find(\'table\', {\'class\': \'h4\'})\n\n    if not table:\n        print(f"Table not found for URL: {url}")\n        continue\n\n    for row in table.find_all(\'tr\')[1:]:  # \u8df3\u904e\u8868\u982d\n        cells = row.find_all(\'td\')\n        if len(cells) != 7:\n            continue\n\n        code, name = cells[0].text.split("\\u3000")\n        internationality = cells[1].text\n        list_date = cells[2].text\n        market_type = cells[3].text\n        industry_type = cells[4].text\n\n        data[code] = {\n            "\u540d\u7a31": name,\n            "\u4ee3\u865f": code,\n            "\u5e02\u5834\u5225": market_type,\n            "\u7522\u696d\u5225": industry_type,\n            "\u4e0a\u5e02\u65e5\u671f": list_date,\n            "\u570b\u969b\u4ee3\u78bc": internationality\n        }\n\nwith open("stock_infos.json", "w", encoding="utf-8") as f:\n    json.dump(data, f, ensure_ascii=False, indent=2)\n\nprint("All data has been processed and saved to stock_infos.json")\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u8f38\u51fa\u7d50\u679c",children:"\u8f38\u51fa\u7d50\u679c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="stock_infos.json"',children:'{\n  "1101": {\n    "\u540d\u7a31": "\u53f0\u6ce5",\n    "\u4ee3\u865f": "1101",\n    "\u5e02\u5834\u5225": "\u4e0a\u5e02",\n    "\u7522\u696d\u5225": "\u6c34\u6ce5\u5de5\u696d",\n    "\u4e0a\u5e02\u65e5\u671f": "1962/02/09",\n    "\u570b\u969b\u4ee3\u78bc": "TW0001101004"\n  },\n  "1102": {\n    "\u540d\u7a31": "\u4e9e\u6ce5",\n    "\u4ee3\u865f": "1102",\n    "\u5e02\u5834\u5225": "\u4e0a\u5e02",\n    "\u7522\u696d\u5225": "\u6c34\u6ce5\u5de5\u696d",\n    "\u4e0a\u5e02\u65e5\u671f": "1962/06/08",\n    "\u570b\u969b\u4ee3\u78bc": "TW0001102002"\n  },\n  ...\u4ee5\u4e0b\u7701\u7565...\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u5011\u7528 json \u4f86\u8f38\u51fa\u7d50\u679c\uff0c\u9019\u6a23\u4e4b\u5f8c\u4e32\u63a5\u5176\u4ed6\u7a0b\u5f0f\u6bd4\u8f03\u65b9\u4fbf\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u5e38\u898b\u554f\u984c",children:"\u5e38\u898b\u554f\u984c"}),"\n",(0,t.jsx)(e.h3,{id:"\u6211\u53ea\u8981\u4e00\u822c\u80a1\u7968",children:"\u6211\u53ea\u8981\u4e00\u822c\u80a1\u7968"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u731c\u4f60\u6307\u7684\u662f\u80a1\u7968\u4ee3\u865f\u70ba\u300c\u56db\u78bc\u300d\u7684\u80a1\u7968\uff0c\u4e0d\u8981 ETF\u3001\u6b0a\u8b49\u7b49\u7b49\uff0c\u60f3\u53d6\u5f97\u9019\u500b\u8cc7\u6599\u7684\u8a71\uff0c\u76f4\u63a5\u5728\u7a0b\u5f0f\u4e2d\u52a0\u5165\u904e\u6ffe\u689d\u4ef6\u5373\u53ef\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"if len(code) != 4:\n    continue\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u6211\u53ea\u8981\u7279\u5b9a\u7684\u7522\u696d",children:"\u6211\u53ea\u8981\u7279\u5b9a\u7684\u7522\u696d"}),"\n",(0,t.jsx)(e.p,{children:"\u9019\u500b\u9700\u6c42\u53ef\u4ee5\u62d3\u5c55\u5230\u7279\u5b9a\u7684\u5e02\u5834\u5225\u3001\u7522\u696d\u5225\u3001\u4e0a\u5e02\u65e5\u671f\u7b49\uff0c\u751a\u81f3\u662f\u4e0a\u4e00\u500b\u300c\u53d6\u5f97\u4e00\u822c\u80a1\u7968\u300d\u7684\u554f\u984c\uff0c\u90fd\u4e00\u6a23\uff01"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u5011\u53ea\u9700\u8981\u628a\u8f38\u51fa\u7684 json \u6a94\u6848\u7528 Pandas \u8b80\u9032\u4f86\uff0c\u7136\u5f8c\u7528\u689d\u4ef6\u7be9\u9078\u5373\u53ef\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'import pandas as pd\n\ndf = pd.read_json("stock_infos.json", orient="index")\ntarget = df[df["\u7522\u696d\u5225"] == "\u6c34\u6ce5\u5de5\u696d"]\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u7a0b\u5f0f\u58de\u6389\u4e86",children:"\u7a0b\u5f0f\u58de\u6389\u4e86"}),"\n",(0,t.jsx)(e.p,{children:"\u90a3\u53ef\u80fd\u662f\u81fa\u7063\u8b49\u5238\u4ea4\u6613\u6240\u7684\u7db2\u7ad9\u6539\u7248\uff0c\u5c0e\u81f4\u7db2\u9801\u7d50\u69cb\u8b8a\u4e86\uff0c\u9019\u500b\u90e8\u5206\u9047\u5230\u4e86\u518d\u4f86\u6539\u5427\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u5011\u4e4b\u5f8c\u53ea\u9700\u8981\u4e0d\u5b9a\u671f\u7684\u57f7\u884c\u9019\u500b\u7a0b\u5f0f\uff0c\u5c31\u53ef\u4ee5\u53d6\u5f97\u6700\u65b0\u7684\u80a1\u7968\u8cc7\u8a0a\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u554f\u984c\u6216\u5efa\u8b70\uff0c\u6b61\u8fce\u5728\u4e0b\u65b9\u7559\u8a00\uff01"})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},15074:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/img1-127414ab0646293a663eeab2cd7524ea.jpg"},77357:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/img2-4ffe9c13206f8f5db60e1155ad8a9a89.jpg"},22964:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/0610-9c4b65403b9528843b9f5e0a39a38fc4.webp"},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>a});var t=s(96540);const i={},l=t.createContext(i);function o(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);