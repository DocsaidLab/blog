"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1123],{92681:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(74848),i=n(28453);const o={sidebar_position:6},r="Tqdm",c={id:"docsaidkit/funcs/utils/tqdm",title:"Tqdm",description:"Tqdm(iterable=None, desc=None, smoothing=0, kwargs)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/utils/tqdm.md",sourceDirName:"docsaidkit/funcs/utils",slug:"/docsaidkit/funcs/utils/tqdm",permalink:"/en/docs/docsaidkit/funcs/utils/tqdm",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"copy_path",permalink:"/en/docs/docsaidkit/funcs/utils/copy_path"},next:{title:"gen_md5",permalink:"/en/docs/docsaidkit/funcs/utils/gen_md5"}},d={},l=[];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"tqdm",children:"Tqdm"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/custom_tqdm.py#L8",children:"Tqdm(iterable=None, desc=None, smoothing=0, **kwargs)"})}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Description"}),": This is a custom progress bar inherited from ",(0,t.jsx)(s.code,{children:"tqdm"}),", used to display progress during iteration over an iterable. The modification we made to the original ",(0,t.jsx)(s.code,{children:"tqdm"})," is in the ",(0,t.jsx)(s.code,{children:"total"})," parameter. When the user does not specify ",(0,t.jsx)(s.code,{children:"total"}),", we automatically calculate the length of the ",(0,t.jsx)(s.code,{children:"iterable"})," and set it as ",(0,t.jsx)(s.code,{children:"total"}),". This design allows users to correctly display the progress bar without needing to specify ",(0,t.jsx)(s.code,{children:"total"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Parameters"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"iterable"})," (",(0,t.jsx)(s.code,{children:"Iterable"}),"): The object to iterate over."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"desc"})," (",(0,t.jsx)(s.code,{children:"str"}),"): Description of the progress bar."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"smoothing"})," (",(0,t.jsx)(s.code,{children:"int"}),"): Smoothing parameter."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"kwargs"})," (",(0,t.jsx)(s.code,{children:"Any"}),"): Other parameters."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nfor i in D.Tqdm(range(100), desc='Processing'):\n    pass\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(96540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);