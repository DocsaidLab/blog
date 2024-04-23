"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1149],{23858:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var i=n(74848),o=n(28453);const s={sidebar_position:1},r="now",c={id:"docsaidkit/funcs/time/now",title:"now",description:"now(typ str = None) -> Union[float, datetime, time.struct_time]",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/time/now.md",sourceDirName:"docsaidkit/funcs/time",slug:"/docsaidkit/funcs/time/now",permalink:"/en/docsaidkit/funcs/time/now",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713878085e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Time",permalink:"/en/category/time"},next:{title:"Timer",permalink:"/en/docsaidkit/funcs/time/timer"}},d={},m=[];function a(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"now",children:"now"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L160",children:"now(typ: str = 'timestamp', fmt: str = None) -> Union[float, datetime, time.struct_time]"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Description"})}),"\n",(0,i.jsxs)(e.p,{children:["Get the current time. You can specify the output type of time or provide a formatting rule to get a time string, for example: ",(0,i.jsx)(e.code,{children:"now(fmt='%Y-%m-%d')"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"typ"})," (",(0,i.jsx)(e.code,{children:"str"}),"): Specify the output type of time. Supported types are: ",(0,i.jsx)(e.code,{children:"{'timestamp', 'datetime', 'time'}"}),". Default is ",(0,i.jsx)(e.code,{children:"'timestamp'"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"fmt"})," (",(0,i.jsx)(e.code,{children:"str"}),"): Specify the formatting rule of time. Default is ",(0,i.jsx)(e.code,{children:"None"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\n# Get now time with timestamp type\nnow_time = D.now()\nprint(now_time)\n# >>> 1632214400.0\n\n# Get now time with datetime type\nnow_time = D.now(typ='datetime')\nprint(now_time)\n# >>> 2021-09-22 00:00:00\n\n# Get now time with time type\nnow_time = D.now(typ='time')\nprint(now_time)\n# >>> time.struct_time(tm_year=2021, tm_mon=9, tm_mday=22, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=2, tm_yday=265, tm_isdst=0)\n\n# Get now time with formatted rule\nnow_time = D.now(fmt='%Y-%m-%d')\nprint(now_time)\n# >>> '2021-09-22'\n"})}),"\n"]}),"\n"]})]})}function l(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(a,{...t})}):a(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var i=n(96540);const o={},s=i.createContext(o);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);