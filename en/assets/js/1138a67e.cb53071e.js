"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[89297],{58981:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=o(74848),d=o(28453);const i={sidebar_position:21},t="download",c={id:"docsaidkit/funcs/utils/download",title:"download",description:"gendownloadcmd",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/utils/download.md",sourceDirName:"docsaidkit/funcs/utils",slug:"/docsaidkit/funcs/utils/download",permalink:"/en/docs/docsaidkit/funcs/utils/download",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"colorstr",permalink:"/en/docs/docsaidkit/funcs/utils/colorstr"},next:{title:"DocAligner",permalink:"/en/docs/category/docaligner"}},l={},r=[{value:"gen_download_cmd",id:"gen_download_cmd",level:2},{value:"download_from_docsaid",id:"download_from_docsaid",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"download",children:"download"}),"\n",(0,s.jsx)(n.h2,{id:"gen_download_cmd",children:"gen_download_cmd"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/utils.py#L68",children:"gen_download_cmd(file_id: str, target: str) -> str"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Generates a command to download a file from Google Drive."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"file_id"})," (",(0,s.jsx)(n.code,{children:"str"}),"): The ID of the file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"target"})," (",(0,s.jsx)(n.code,{children:"str"}),"): The target path to download the file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nfile_id = '1c1b9b1b0cdcwfjowief'\ntarget = 'example.txt'\ncmd = D.gen_download_cmd(file_id, target)\nprint(cmd)\n# >>> wget --load-cookies /tmp/cookies.txt \"https://docs.google.com/uc?export=download&confirm=$(wget\n# >>> --quiet\n# >>> --save-cookies /tmp/cookies.txt\n# >>> --keep-session-cookies\n# >>> --no-check-certificate 'https://docs.google.com/uc?export=download&id=1c1b9b1b0cdcwfjowief'\n# >>> -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\\1\\n/p')&id=1c1b9b1b0cdcwfjowief\" -O example.txt && rm -rf /tmp/cookies.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"download_from_docsaid",children:"download_from_docsaid"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/utils.py#L79",children:"download_from_docsaid(file_id: str, file_name: str, target: str) -> None"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Downloads data from Docsaid's private cloud."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"file_id"})," (",(0,s.jsx)(n.code,{children:"str"}),"): The file ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"file_name"})," (",(0,s.jsx)(n.code,{children:"str"}),"): The file name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"target"})," (",(0,s.jsx)(n.code,{children:"str"}),"): The target path for downloading the file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nfile_id = 'c1b9b1b0cdcwfjowief'\nfile_name = 'example.txt'\ntarget = 'example.txt'\nD.download_from_docsaid(file_id, file_name, target)\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var s=o(96540);const d={},i=s.createContext(d);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);