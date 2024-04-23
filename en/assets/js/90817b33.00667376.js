"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7756],{1542:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(74848),i=t(28453);const r={sidebar_position:1},o="get_files",l={id:"docsaidkit/funcs/files/get_files",title:"get_files",description:"getfiles(folder Union[str, List[str], Tuple[str]] = None, recursive bool = True, sortpath bool = True) -> List[Path]",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/files/get_files.md",sourceDirName:"docsaidkit/funcs/files",slug:"/docsaidkit/funcs/files/get_files",permalink:"/en/docsaidkit/funcs/files/get_files",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Files",permalink:"/en/category/files"},next:{title:"get_curdir",permalink:"/en/docsaidkit/funcs/files/get_curdir"}},c={},d=[];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"get_files",children:"get_files"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/files_utils.py#L88",children:"get_files(folder: Union[str, Path], suffix: Union[str, List[str], Tuple[str]] = None, recursive: bool = True, return_pathlib: bool = True, sort_path: bool = True, ignore_letter_case: bool = True) -> List[Path]"})}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Description"})}),"\n",(0,n.jsxs)(s.p,{children:["Get all files in the specified folder. Note that the ",(0,n.jsx)(s.code,{children:"suffix"})," here is case-insensitive, but you must remember to include the ",(0,n.jsx)(s.code,{children:"."}),". Many times, not finding files is due to this issue."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"folder"})," (",(0,n.jsx)(s.code,{children:"folder: Union[str, Path]"}),"): The specified folder."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"suffix"})," (",(0,n.jsx)(s.code,{children:"suffix: Union[str, List[str], Tuple[str]]"}),"): The suffix(es) of the files to retrieve. For example: ['.jpg', '.png']. Defaults to None, indicating retrieving all files in the folder."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"recursive"})," (",(0,n.jsx)(s.code,{children:"bool"}),"): Whether to include files in subfolders. Defaults to True."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"return_pathlib"})," (",(0,n.jsx)(s.code,{children:"bool"}),"): Whether to return Path objects. Defaults to True."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"sort_path"})," (",(0,n.jsx)(s.code,{children:"bool"}),"): Whether to return a list of paths sorted in natural order. Defaults to True."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"ignore_letter_case"})," (",(0,n.jsx)(s.code,{children:"bool"}),"): Whether to include suffixes with different cases. Defaults to True."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"List[Path]"}),": A list of file paths."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nfolder = '/path/to/your/folder'\nfiles = D.get_files(folder, suffix=['.jpg', '.png'])\nprint(files)\n# >>> ['/path/to/your/folder/1.jpg', '/path/to/your/folder/2.png']\n"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var n=t(96540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);