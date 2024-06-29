"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3411],{82680:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(74848),i=t(28453);const a={sidebar_position:19},c="make_batch",r={id:"docsaidkit/funcs/utils/make_batch",title:"make_batch",description:"makebatch(data int) -> Generator[List, None, None]",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/utils/make_batch.md",sourceDirName:"docsaidkit/funcs/utils",slug:"/docsaidkit/funcs/utils/make_batch",permalink:"/en/docs/docsaidkit/funcs/utils/make_batch",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"img_to_md5",permalink:"/en/docs/docsaidkit/funcs/utils/img_to_md5"},next:{title:"colorstr",permalink:"/en/docs/docsaidkit/funcs/utils/colorstr"}},o={},d=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"make_batch",children:"make_batch"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/utils.py#L13",children:"make_batch(data: Union[Iterable, Generator], batch_size: int) -> Generator[List, None, None]"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Description"}),": This function is used to convert data into batched data."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"data"})," (",(0,s.jsx)(e.code,{children:"Union[Iterable, Generator]"}),"): The data generator."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"batch_size"})," (",(0,s.jsx)(e.code,{children:"int"}),"): The size of batches."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Generator[List, None, None]"}),": A generator for batched data."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\ndata = range(10)\nbatch_size = 3\nbatched_data = D.make_batch(data, batch_size)\nfor batch in batched_data:\n    print(batch)\n# >>> [0, 1, 2]\n# >>> [3, 4, 5]\n# >>> [6, 7, 8]\n# >>> [9]\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function c(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);