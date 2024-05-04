"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9321],{90382:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var t=s(74848),i=s(28453);const d={sidebar_position:3},r="Time2Time",c={id:"docsaidkit/funcs/time/time2time",title:"Time2Time",description:"\u9019\u662f\u4e00\u500b\u7528\u4f86\u8f49\u63db\u6642\u9593\u683c\u5f0f\u7684\u5de5\u5177\u3002",source:"@site/docs/docsaidkit/funcs/time/time2time.md",sourceDirName:"docsaidkit/funcs/time",slug:"/docsaidkit/funcs/time/time2time",permalink:"/docs/docsaidkit/funcs/time/time2time",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714781301e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Timer",permalink:"/docs/docsaidkit/funcs/time/timer"},next:{title:"Vision",permalink:"/docs/category/vision"}},l={},h=[{value:"timestamp2datetime",id:"timestamp2datetime",level:2},{value:"timestamp2time",id:"timestamp2time",level:2},{value:"timestamp2str",id:"timestamp2str",level:2},{value:"time2datetime",id:"time2datetime",level:2},{value:"time2timestamp",id:"time2timestamp",level:2},{value:"time2str",id:"time2str",level:2},{value:"datetime2time",id:"datetime2time",level:2},{value:"datetime2timestamp",id:"datetime2timestamp",level:2},{value:"datetime2str",id:"datetime2str",level:2},{value:"str2time",id:"str2time",level:2},{value:"str2datetime",id:"str2datetime",level:2},{value:"str2timestamp",id:"str2timestamp",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"time2time",children:"Time2Time"}),"\n",(0,t.jsx)(n.p,{children:"\u9019\u662f\u4e00\u500b\u7528\u4f86\u8f49\u63db\u6642\u9593\u683c\u5f0f\u7684\u5de5\u5177\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Python \u4e2d\uff0c\u591a\u500b\u4e0d\u540c\u6642\u9593\u5957\u4ef6\u7684\u8f49\u63db\u4e00\u76f4\u90fd\u662f\u500b\u60f1\u4eba\u7684\u554f\u984c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u958b\u767c\u4e86\u5e7e\u500b\u8f49\u63db\u51fd\u6578\uff0c\u4f7f\u5f97\u5728 datetime\u3001struct_time\u3001timestamp \u548c \u6642\u9593\u5b57\u4e32 \u4e4b\u9593\u7684\u8f49\u63db\u8b8a\u5f97\u81ea\u7531\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u9019\u4e9b\u51fd\u6578\u4e4b\u9593\u95dc\u4fc2\u5716\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"time2time",src:s(80198).A+"",width:"1326",height:"683"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u597d\u5947\u4e0a\u9762\u90a3\u5f35\u5716\u662f\u600e\u9ebc\u756b\u51fa\u4f86\u7684\uff0c\u53ef\u4ee5\u53c3\u8003\u4e0b\u9762\u7684 Mermaid \u7a0b\u5f0f\u78bc\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mermaid",children:"graph TD\n    timestamp(timestamp)\n    struct_time(struct_time)\n    datetime(datetime)\n    str(\u6642\u9593\u5b57\u4e32)\n\n    timestamp --\x3e|timestamp2datetime| datetime\n    timestamp --\x3e|timestamp2time| struct_time\n    timestamp --\x3e|timestamp2str| str\n\n    struct_time --\x3e|time2datetime| datetime\n    struct_time --\x3e|time2timestamp| timestamp\n    struct_time --\x3e|time2str| str\n\n    datetime --\x3e|datetime2time| struct_time\n    datetime --\x3e|datetime2timestamp| timestamp\n    datetime --\x3e|datetime2str| str\n\n    str --\x3e|str2time| struct_time\n    str --\x3e|str2datetime| datetime\n    str --\x3e|str2timestamp| timestamp\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u770b\u5716\u8aaa\u6545\u4e8b\uff0c\u5148\u627e\u5230\u4f60\u9700\u8981\u7684\u8f49\u63db\u51fd\u6578\u4e4b\u5f8c\uff0c\u518d\u5f80\u4e0b\u627e\uff1a"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"timestamp2datetime",children:"timestamp2datetime"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L188",children:"timestamp2datetime(ts: Union[int, float]) -> datetime"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07\u6642\u9593\u6233\u8f49\u63db\u70ba ",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ts"})," (",(0,t.jsx)(n.code,{children:"Union[int, float]"}),")\uff1a\u6642\u9593\u6233\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"datetime"}),"\uff1a",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ndt = D.timestamp2datetime(ts)\nprint(dt)\n# >>> 2021-10-12 16:00:00\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"timestamp2time",children:"timestamp2time"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L192",children:"timestamp2time(ts: Union[int, float]) -> struct_time"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07\u6642\u9593\u6233\u8f49\u63db\u70ba ",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ts"})," (",(0,t.jsx)(n.code,{children:"Union[int, float]"}),")\uff1a\u6642\u9593\u6233\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"struct_time"}),"\uff1a",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\nt = D.timestamp2time(ts)\nprint(t)\n# >>> time.struct_time(tm_year=2021, tm_mon=10, tm_mday=12, tm_hour=16, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=285, tm_isdst=0)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"timestamp2str",children:"timestamp2str"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L196",children:"timestamp2str(ts: Union[int, float], fmt: str) -> str"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07\u6642\u9593\u6233\u8f49\u63db\u70ba\u6642\u9593\u5b57\u4e32\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ts"})," (",(0,t.jsx)(n.code,{children:"Union[int, float]"}),")\uff1a\u6642\u9593\u6233\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fmt"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"str"}),"\uff1a\u6642\u9593\u5b57\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ns = D.timestamp2str(ts, fmt='%Y-%m-%d %H:%M:%S')\nprint(s)\n# >>> '2021-10-12 16:00:00'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"time2datetime",children:"time2datetime"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L200",children:"time2datetime(t: struct_time) -> datetime"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 ",(0,t.jsx)(n.code,{children:"struct_time"})," \u8f49\u63db\u70ba ",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"t"})," (",(0,t.jsx)(n.code,{children:"struct_time"}),")\uff1a",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"datetime"}),"\uff1a",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\nt = D.timestamp2time(ts)\ndt = D.time2datetime(t)\nprint(dt)\n# >>> datetime.datetime(2021, 10, 12, 16, 0)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"time2timestamp",children:"time2timestamp"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L206",children:"time2timestamp(t: struct_time) -> float"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 ",(0,t.jsx)(n.code,{children:"struct_time"})," \u8f49\u63db\u70ba\u6642\u9593\u6233\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"t"})," (",(0,t.jsx)(n.code,{children:"struct_time"}),")\uff1a",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"float"}),"\uff1a\u6642\u9593\u6233\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\nt = D.timestamp2time(ts)\nts = D.time2timestamp(t)\nprint(ts)\n# >>> 1634025600.0\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"time2str",children:"time2str"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L212",children:"time2str(t: struct_time, fmt: str) -> str"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 ",(0,t.jsx)(n.code,{children:"struct_time"})," \u8f49\u63db\u70ba\u6642\u9593\u5b57\u4e32\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"t"})," (",(0,t.jsx)(n.code,{children:"struct_time"}),")\uff1a",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fmt"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"str"}),"\uff1a\u6642\u9593\u5b57\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\nt = D.timestamp2time(ts)\ns = D.time2str(t, fmt='%Y-%m-%d %H:%M:%S')\nprint(s)\n# >>> '2021-10-12 16:00:00'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"datetime2time",children:"datetime2time"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L218",children:"datetime2time(dt: datetime) -> struct_time"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 ",(0,t.jsx)(n.code,{children:"datetime"})," \u8f49\u63db\u70ba ",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"dt"})," (",(0,t.jsx)(n.code,{children:"datetime"}),")\uff1a",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"struct_time"}),"\uff1a",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ndt = D.timestamp2datetime(ts)\nt = D.datetime2time(dt)\nprint(t)\n# >>> time.struct_time(tm_year=2021, tm_mon=10, tm_mday=12, tm_hour=16, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=285, tm_isdst=-1)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"datetime2timestamp",children:"datetime2timestamp"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L224",children:"datetime2timestamp(dt: datetime) -> float"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 ",(0,t.jsx)(n.code,{children:"datetime"})," \u8f49\u63db\u70ba\u6642\u9593\u6233\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"dt"})," (",(0,t.jsx)(n.code,{children:"datetime"}),")\uff1a",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"float"}),"\uff1a\u6642\u9593\u6233\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ndt = D.timestamp2datetime(ts)\nts = D.datetime2timestamp(dt)\nprint(ts)\n# >>> 1634025600.0\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"datetime2str",children:"datetime2str"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L230",children:"datetime2str(dt: datetime, fmt: str) -> str"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 ",(0,t.jsx)(n.code,{children:"datetime"})," \u8f49\u63db\u70ba\u6642\u9593\u5b57\u4e32\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"dt"})," (",(0,t.jsx)(n.code,{children:"datetime"}),")\uff1a",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fmt"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"str"}),"\uff1a\u6642\u9593\u5b57\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ndt = D.timestamp2datetime(ts)\ns = D.datetime2str(dt, fmt='%Y-%m-%d %H:%M:%S')\nprint(s)\n# >>> '2021-10-12 16:00:00'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"str2time",children:"str2time"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L236",children:"str2time(s: str, fmt: str) -> struct_time"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07\u6642\u9593\u5b57\u4e32\u8f49\u63db\u70ba ",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"s"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u5b57\u4e32\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fmt"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"struct_time"}),"\uff1a",(0,t.jsx)(n.code,{children:"struct_time"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\ns = '2021-10-12 16:00:00'\nt = D.str2time(s, fmt='%Y-%m-%d %H:%M:%S')\nprint(t)\n# >>> time.struct_time(tm_year=2021, tm_mon=10, tm_mday=12, tm_hour=16, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=285, tm_isdst=-1)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"str2datetime",children:"str2datetime"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L242",children:"str2datetime(s: str, fmt: str) -> datetime"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07\u6642\u9593\u5b57\u4e32\u8f49\u63db\u70ba ",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"s"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u5b57\u4e32\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fmt"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"datetime"}),"\uff1a",(0,t.jsx)(n.code,{children:"datetime"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\ns = '2021-10-12 16:00:00'\ndt = D.str2datetime(s, fmt='%Y-%m-%d %H:%M:%S')\nprint(dt)\n# >>> datetime.datetime(2021, 10, 12, 16, 0)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"str2timestamp",children:"str2timestamp"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L248",children:"str2timestamp(s: str, fmt: str) -> float"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07\u6642\u9593\u5b57\u4e32\u8f49\u63db\u70ba\u6642\u9593\u6233\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"s"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u5b57\u4e32\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fmt"})," (",(0,t.jsx)(n.code,{children:"str"}),")\uff1a\u6642\u9593\u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"float"}),"\uff1a\u6642\u9593\u6233\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\ns = '2021-10-12 16:00:00'\nts = D.str2timestamp(s, fmt='%Y-%m-%d %H:%M:%S')\nprint(ts)\n# >>> 1634025600.0\n"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},80198:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/time2time-dcdfdce706509b2a7421e5b03659c93a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const i={},d=t.createContext(i);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);