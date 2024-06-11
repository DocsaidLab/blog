"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7442],{69561:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=s(74848),i=s(28453);const r={sidebar_position:3},d="Time2Time",c={id:"docsaidkit/funcs/time/time2time",title:"Time2Time",description:"This is a utility tool for converting time formats.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/time/time2time.md",sourceDirName:"docsaidkit/funcs/time",slug:"/docsaidkit/funcs/time/time2time",permalink:"/en/docs/docsaidkit/funcs/time/time2time",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Timer",permalink:"/en/docs/docsaidkit/funcs/time/timer"},next:{title:"Vision",permalink:"/en/docs/category/vision"}},l={},m=[{value:"timestamp2datetime",id:"timestamp2datetime",level:2},{value:"timestamp2time",id:"timestamp2time",level:2},{value:"timestamp2str",id:"timestamp2str",level:2},{value:"time2datetime",id:"time2datetime",level:2},{value:"time2timestamp",id:"time2timestamp",level:2},{value:"time2str",id:"time2str",level:2},{value:"datetime2time",id:"datetime2time",level:2},{value:"datetime2timestamp",id:"datetime2timestamp",level:2},{value:"datetime2str",id:"datetime2str",level:2},{value:"str2time",id:"str2time",level:2},{value:"str2datetime",id:"str2datetime",level:2},{value:"str2timestamp",id:"str2timestamp",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"time2time",children:"Time2Time"}),"\n",(0,n.jsx)(t.p,{children:"This is a utility tool for converting time formats."}),"\n",(0,n.jsx)(t.p,{children:"In Python, conversion between different time formats has always been a nuisance."}),"\n",(0,n.jsx)(t.p,{children:"To tackle this issue, we've developed several conversion functions that allow seamless conversion between datetime, struct_time, timestamp, and time strings."}),"\n",(0,n.jsx)(t.p,{children:"Below is the relationship diagram of these functions:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"time2time",src:s(85590).A+"",width:"1224",height:"684"})}),"\n",(0,n.jsx)(t.p,{children:"If you're curious about how the above diagram was created, you can refer to the Mermaid code below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-mermaid",children:"graph TD\n    timestamp(timestamp)\n    struct_time(struct_time)\n    datetime(datetime)\n    str(Time String)\n\n    timestamp --\x3e|timestamp2datetime| datetime\n    timestamp --\x3e|timestamp2time| struct_time\n    timestamp --\x3e|timestamp2str| str\n\n    struct_time --\x3e|time2datetime| datetime\n    struct_time --\x3e|time2timestamp| timestamp\n    struct_time --\x3e|time2str| str\n\n    datetime --\x3e|datetime2time| struct_time\n    datetime --\x3e|datetime2timestamp| timestamp\n    datetime --\x3e|datetime2str| str\n\n    str --\x3e|str2time| struct_time\n    str --\x3e|str2datetime| datetime\n    str --\x3e|str2timestamp| timestamp\n"})}),"\n",(0,n.jsx)(t.p,{children:"Look at the pictures. First find the conversion function you need, and then search further:"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"timestamp2datetime",children:"timestamp2datetime"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L188",children:"timestamp2datetime(ts: Union[int, float]) -> datetime"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert a timestamp to a ",(0,n.jsx)(t.code,{children:"datetime"})," object."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ts"})," (",(0,n.jsx)(t.code,{children:"Union[int, float]"}),"): The timestamp."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"datetime"}),": The ",(0,n.jsx)(t.code,{children:"datetime"})," object."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ndt = D.timestamp2datetime(ts)\nprint(dt)\n# >>> 2021-10-12 16:00:00\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"timestamp2time",children:"timestamp2time"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L192",children:"timestamp2time(ts: Union[int, float]) -> struct_time"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert a timestamp to a ",(0,n.jsx)(t.code,{children:"struct_time"})," object."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ts"})," (",(0,n.jsx)(t.code,{children:"Union[int, float]"}),"): The timestamp."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"struct_time"}),": The ",(0,n.jsx)(t.code,{children:"struct_time"})," object."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\nt = D.timestamp2time(ts)\nprint(t)\n# >>> time.struct_time(tm_year=2021, tm_mon=10, tm_mday=12, tm_hour=16, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=285, tm_isdst=0)\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"timestamp2str",children:"timestamp2str"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L196",children:"timestamp2str(ts: Union[int, float], fmt: str) -> str"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert a timestamp to a string representation of time."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ts"})," (",(0,n.jsx)(t.code,{children:"Union[int, float]"}),"): The timestamp."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fmt"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The format of the time."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"str"}),": The string representation of time."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ns = D.timestamp2str(ts, fmt='%Y-%m-%d %H:%M:%S')\nprint(s)\n# >>> '2021-10-12 16:00:00'\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"time2datetime",children:"time2datetime"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L200",children:"time2datetime(t: struct_time) -> datetime"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert ",(0,n.jsx)(t.code,{children:"struct_time"})," to ",(0,n.jsx)(t.code,{children:"datetime"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"t"})," (",(0,n.jsx)(t.code,{children:"struct_time"}),"): The ",(0,n.jsx)(t.code,{children:"struct_time"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"datetime"}),": The ",(0,n.jsx)(t.code,{children:"datetime"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\nt = D.timestamp2time(ts)\ndt = D.time2datetime(t)\nprint(dt)\n# >>> datetime.datetime(2021, 10, 12, 16, 0)\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"time2timestamp",children:"time2timestamp"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L206",children:"time2timestamp(t: struct_time) -> float"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert ",(0,n.jsx)(t.code,{children:"struct_time"})," to a timestamp."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"t"})," (",(0,n.jsx)(t.code,{children:"struct_time"}),"): The ",(0,n.jsx)(t.code,{children:"struct_time"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"float"}),": The timestamp."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\nt = D.timestamp2time(ts)\nts = D.time2timestamp(t)\nprint(ts)\n# >>> 1634025600.0\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"time2str",children:"time2str"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L212",children:"time2str(t: struct_time, fmt: str) -> str"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert ",(0,n.jsx)(t.code,{children:"struct_time"})," to a time string."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"t"})," (",(0,n.jsx)(t.code,{children:"struct_time"}),"): The ",(0,n.jsx)(t.code,{children:"struct_time"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fmt"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The time format."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"str"}),": The time string."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\nt = D.timestamp2time(ts)\ns = D.time2str(t, fmt='%Y-%m-%d %H:%M:%S')\nprint(s)\n# >>> '2021-10-12 16:00:00'\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"datetime2time",children:"datetime2time"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L218",children:"datetime2time(dt: datetime) -> struct_time"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert ",(0,n.jsx)(t.code,{children:"datetime"})," to ",(0,n.jsx)(t.code,{children:"struct_time"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"dt"})," (",(0,n.jsx)(t.code,{children:"datetime"}),"): The ",(0,n.jsx)(t.code,{children:"datetime"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"struct_time"}),": The ",(0,n.jsx)(t.code,{children:"struct_time"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ndt = D.timestamp2datetime(ts)\nt = D.datetime2time(dt)\nprint(t)\n# >>> time.struct_time(tm_year=2021, tm_mon=10, tm_mday=12, tm_hour=16, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=285, tm_isdst=-1)\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"datetime2timestamp",children:"datetime2timestamp"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L224",children:"datetime2timestamp(dt: datetime) -> float"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert ",(0,n.jsx)(t.code,{children:"datetime"})," to a timestamp."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"dt"})," (",(0,n.jsx)(t.code,{children:"datetime"}),"): The ",(0,n.jsx)(t.code,{children:"datetime"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"float"}),": The timestamp."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ndt = D.timestamp2datetime(ts)\nts = D.datetime2timestamp(dt)\nprint(ts)\n# >>> 1634025600.0\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"datetime2str",children:"datetime2str"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L230",children:"datetime2str(dt: datetime, fmt: str) -> str"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert ",(0,n.jsx)(t.code,{children:"datetime"})," to a time string."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"dt"})," (",(0,n.jsx)(t.code,{children:"datetime"}),"): The ",(0,n.jsx)(t.code,{children:"datetime"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fmt"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The time format."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"str"}),": The time string."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nts = 1634025600\ndt = D.timestamp2datetime(ts)\ns = D.datetime2str(dt, fmt='%Y-%m-%d %H:%M:%S')\nprint(s)\n# >>> '2021-10-12 16:00:00'\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"str2time",children:"str2time"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L236",children:"str2time(s: str, fmt: str) -> struct_time"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert a time string to ",(0,n.jsx)(t.code,{children:"struct_time"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"s"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The time string."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fmt"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The time format."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"struct_time"}),": The ",(0,n.jsx)(t.code,{children:"struct_time"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\ns = '2021-10-12 16:00:00'\nt = D.str2time(s, fmt='%Y-%m-%d %H:%M:%S')\nprint(t)\n# >>> time.struct_time(tm_year=2021, tm_mon=10, tm_mday=12, tm_hour=16, tm_min=0, tm_sec=0, tm_wday=1, tm_yday=285, tm_isdst=-1)\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"str2datetime",children:"str2datetime"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L242",children:"str2datetime(s: str, fmt: str) -> datetime"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert a time string to ",(0,n.jsx)(t.code,{children:"datetime"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"s"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The time string."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fmt"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The time format."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"datetime"}),": ",(0,n.jsx)(t.code,{children:"datetime"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\ns = '2021-10-12 16:00:00'\ndt = D.str2datetime(s, fmt='%Y-%m-%d %H:%M:%S')\nprint(dt)\n# >>> datetime.datetime(2021, 10, 12, 16, 0)\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"str2timestamp",children:"str2timestamp"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L248",children:"str2timestamp(s: str, fmt: str) -> float"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Description"}),": Convert a time string to a timestamp."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Parameters"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"s"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The time string."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fmt"})," (",(0,n.jsx)(t.code,{children:"str"}),"): The time format."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"float"}),": Timestamp."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\ns = '2021-10-12 16:00:00'\nts = D.str2timestamp(s, fmt='%Y-%m-%d %H:%M:%S')\nprint(ts)\n# >>> 1634025600.0\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},85590:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/time2time-defcd0047fca51c83f8ca47176a06ab6.png"},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var n=s(96540);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);