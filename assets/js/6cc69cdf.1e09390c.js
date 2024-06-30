"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2343],{76729:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var o=d(74848),s=d(28453);const i={sidebar_position:21},t="download",c={id:"docsaidkit/funcs/utils/download",title:"download",description:"gendownloadcmd",source:"@site/docs/docsaidkit/funcs/utils/download.md",sourceDirName:"docsaidkit/funcs/utils",slug:"/docsaidkit/funcs/utils/download",permalink:"/docs/docsaidkit/funcs/utils/download",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719787737e3,sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"colorstr",permalink:"/docs/docsaidkit/funcs/utils/colorstr"},next:{title:"DocAligner",permalink:"/docs/category/docaligner"}},l={},r=[{value:"gen_download_cmd",id:"gen_download_cmd",level:2},{value:"download_from_docsaid",id:"download_from_docsaid",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"download",children:"download"}),"\n",(0,o.jsx)(e.h2,{id:"gen_download_cmd",children:"gen_download_cmd"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/utils.py#L68",children:"gen_download_cmd(file_id: str, target: str) -> str"})}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u751f\u6210\u4e0b\u8f09 Google Drive \u6a94\u6848\u7684\u547d\u4ee4\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"file_id"})," (",(0,o.jsx)(e.code,{children:"str"}),")\uff1a\u6a94\u6848 ID\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"target"})," (",(0,o.jsx)(e.code,{children:"str"}),")\uff1a\u4e0b\u8f09\u6a94\u6848\u7684\u76ee\u6a19\u8def\u5f91\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nfile_id = '1c1b9b1b0cdcwfjowief'\ntarget = 'example.txt'\ncmd = D.gen_download_cmd(file_id, target)\nprint(cmd)\n# >>> wget --load-cookies /tmp/cookies.txt \"https://docs.google.com/uc?export=download&confirm=$(wget\n# >>> --quiet\n# >>> --save-cookies /tmp/cookies.txt\n# >>> --keep-session-cookies\n# >>> --no-check-certificate 'https://docs.google.com/uc?export=download&id=1c1b9b1b0cdcwfjowief'\n# >>> -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\\1\\n/p')&id=1c1b9b1b0cdcwfjowief\" -O example.txt && rm -rf /tmp/cookies.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"download_from_docsaid",children:"download_from_docsaid"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/utils.py#L79",children:"download_from_docsaid(file_id: str, file_name: str, target: str) -> None"})}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5230 Docsaid \u7684\u79c1\u6709\u96f2\u4e0b\u8f09\u8cc7\u6599\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"file_id"})," (",(0,o.jsx)(e.code,{children:"str"}),")\uff1a\u6a94\u6848 ID\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"file_name"})," (",(0,o.jsx)(e.code,{children:"str"}),")\uff1a\u6a94\u6848\u540d\u7a31\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"target"})," (",(0,o.jsx)(e.code,{children:"str"}),")\uff1a\u4e0b\u8f09\u6a94\u6848\u7684\u76ee\u6a19\u8def\u5f91\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nfile_id = 'c1b9b1b0cdcwfjowief'\nfile_name = 'example.txt'\ntarget = 'example.txt'\nD.download_from_docsaid(file_id, file_name, target)\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,d)=>{d.d(e,{R:()=>t,x:()=>c});var o=d(96540);const s={},i=o.createContext(s);function t(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);