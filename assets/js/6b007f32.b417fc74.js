"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3951],{51714:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var i=e(74848),s=e(28453);const o={sidebar_position:1},r="now",c={id:"docsaidkit/funcs/time/now",title:"now",description:"now(typ str = None) -> Union[float, datetime, time.struct_time]",source:"@site/docs/docsaidkit/funcs/time/now.md",sourceDirName:"docsaidkit/funcs/time",slug:"/docsaidkit/funcs/time/now",permalink:"/docs/docsaidkit/funcs/time/now",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714946536e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Time",permalink:"/docs/category/time"},next:{title:"Timer",permalink:"/docs/docsaidkit/funcs/time/timer"}},d={},m=[];function a(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"now",children:"now"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L160",children:"now(typ: str = 'timestamp', fmt: str = None) -> Union[float, datetime, time.struct_time]"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u53d6\u5f97\u73fe\u5728\u6642\u9593\u3002\u53ef\u4ee5\u6307\u5b9a\u6642\u9593\u7684\u8f38\u51fa\u985e\u578b\uff0c\u6216\u662f\u7d66\u5b9a\u683c\u5f0f\u5316\u898f\u5247\u4f86\u53d6\u5f97\u6642\u9593\u5b57\u4e32\uff0c\u4f8b\u5982\uff1a",(0,i.jsx)(n.code,{children:"now(fmt='%Y-%m-%d')"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"typ"})," (",(0,i.jsx)(n.code,{children:"str"}),")\uff1a\u6307\u5b9a\u6642\u9593\u7684\u8f38\u51fa\u985e\u578b\u3002\u652f\u63f4\u7684\u985e\u578b\u6709\uff1a",(0,i.jsx)(n.code,{children:"{'timestamp', 'datetime', 'time'}"}),"\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(n.code,{children:"'timestamp'"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"fmt"})," (",(0,i.jsx)(n.code,{children:"str"}),")\uff1a\u6307\u5b9a\u6642\u9593\u7684\u683c\u5f0f\u5316\u898f\u5247\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(n.code,{children:"None"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\n# Get now time with timestamp type\nnow_time = D.now()\nprint(now_time)\n# >>> 1632214400.0\n\n# Get now time with datetime type\nnow_time = D.now(typ='datetime')\nprint(now_time)\n# >>> 2021-09-22 00:00:00\n\n# Get now time with time type\nnow_time = D.now(typ='time')\nprint(now_time)\n# >>> time.struct_time(tm_year=2021, tm_mon=9, tm_mday=22, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=2, tm_yday=265, tm_isdst=0)\n\n# Get now time with formatted rule\nnow_time = D.now(fmt='%Y-%m-%d')\nprint(now_time)\n# >>> '2021-09-22'\n"})}),"\n"]}),"\n"]})]})}function l(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(a,{...t})}):a(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>r,x:()=>c});var i=e(96540);const s={},o=i.createContext(s);function r(t){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),i.createElement(o.Provider,{value:n},t.children)}}}]);