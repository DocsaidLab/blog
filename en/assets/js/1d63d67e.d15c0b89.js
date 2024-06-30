"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4703],{47660:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(74848),t=s(28453);const r={sidebar_position:2},c="Timer",o={id:"docsaidkit/funcs/time/timer",title:"Timer",description:"Timer(precision str = None, verbose: bool = False)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/time/timer.md",sourceDirName:"docsaidkit/funcs/time",slug:"/docsaidkit/funcs/time/timer",permalink:"/en/docs/docsaidkit/funcs/time/timer",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"now",permalink:"/en/docs/docsaidkit/funcs/time/now"},next:{title:"Time2Time",permalink:"/en/docs/docsaidkit/funcs/time/time2time"}},d={},l=[];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"timer",children:"Timer"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/time.py#L76C1-L157C71",children:"Timer(precision: int = 5, desc: str = None, verbose: bool = False)"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": This is a timer that can be used to measure the execution time of a program. The timer has three usage modes:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["using the ",(0,i.jsx)(n.code,{children:"tic"})," and ",(0,i.jsx)(n.code,{children:"toc"})," methods;"]}),"\n",(0,i.jsx)(n.li,{children:"using decorators;"}),"\n",(0,i.jsxs)(n.li,{children:["using the ",(0,i.jsx)(n.code,{children:"with"})," statement."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"precision"})," (",(0,i.jsx)(n.code,{children:"int"}),"): The precision of decimal points. Default is 5."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"desc"})," (",(0,i.jsx)(n.code,{children:"str"}),"): Description text. Default is None."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"verbose"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether to display the timing results. Default is False."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Methods"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"tic()"}),": Start the timer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"toc(verbose=False)"}),": Stop the timer and return the elapsed time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"clear_record()"}),": Clear the records."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"mean"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Mean time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"max"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Maximum time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"min"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Minimum time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"std"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Standard deviation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\n# Using 'tic' and 'toc' method\nt = D.Timer()\nt.tic()\ntime.sleep(1)\nt.toc()\n\n# Using decorator\n@D.Timer()\ndef testing_function():\n    time.sleep(1)\n\n# Using 'with' statement\nwith D.Timer():\n    time.sleep(1)\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);