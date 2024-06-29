"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3061],{74388:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=t(74848),i=t(28453);const c={sidebar_position:19},r="make_batch",o={id:"docsaidkit/funcs/utils/make_batch",title:"make_batch",description:"makebatch(data int) -> Generator[List, None, None]",source:"@site/docs/docsaidkit/funcs/utils/make_batch.md",sourceDirName:"docsaidkit/funcs/utils",slug:"/docsaidkit/funcs/utils/make_batch",permalink:"/docs/docsaidkit/funcs/utils/make_batch",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"img_to_md5",permalink:"/docs/docsaidkit/funcs/utils/img_to_md5"},next:{title:"colorstr",permalink:"/docs/docsaidkit/funcs/utils/colorstr"}},a={},d=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"make_batch",children:"make_batch"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/utils.py#L13",children:"make_batch(data: Union[Iterable, Generator], batch_size: int) -> Generator[List, None, None]"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u9019\u500b\u51fd\u6578\u7528\u65bc\u5c07\u6578\u64da\u8f49\u63db\u70ba\u6279\u6b21\u6578\u64da\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"data"})," (",(0,s.jsx)(e.code,{children:"Union[Iterable, Generator]"}),")\uff1a\u6578\u64da\u751f\u6210\u5668\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"batch_size"})," (",(0,s.jsx)(e.code,{children:"int"}),")\uff1a\u6279\u6b21\u6578\u64da\u7684\u5927\u5c0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Generator[List, None, None]"}),"\uff1a\u6279\u6b21\u6578\u64da\u7684\u751f\u6210\u5668\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\ndata = range(10)\nbatch_size = 3\nbatched_data = D.make_batch(data, batch_size)\nfor batch in batched_data:\n    print(batch)\n# >>> [0, 1, 2]\n# >>> [3, 4, 5]\n# >>> [6, 7, 8]\n# >>> [9]\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var s=t(96540);const i={},c=s.createContext(i);function r(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);