"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4452],{11159:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=e(74848),t=e(28453);const r={sidebar_position:5},c="PowerDict",o={id:"docsaidkit/funcs/powerdict",title:"PowerDict",description:"PowerDict(d=None, kwargs)",source:"@site/docs/docsaidkit/funcs/powerdict.md",sourceDirName:"docsaidkit/funcs",slug:"/docsaidkit/funcs/powerdict",permalink:"/docsaidkit/funcs/powerdict",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171298044e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Enums",permalink:"/docsaidkit/funcs/enums"},next:{title:"SystemInfo",permalink:"/docsaidkit/funcs/system_info"}},l={},d=[];function h(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"powerdict",children:"PowerDict"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/powerdict.py#L10",children:"PowerDict(d=None, **kwargs)"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u9019\u500b\u985e\u5225\u7528\u4f86\u5efa\u7acb\u4e00\u500b\u5177\u6709\u51cd\u7d50\u548c\u89e3\u51cd\u529f\u80fd\u7684\u5b57\u5178\uff0c\u4e26\u4e14\u53ef\u4ee5\u900f\u904e ",(0,i.jsx)(s.code,{children:"."})," \u7684\u65b9\u5f0f\u4f86\u53d6\u5f97\u5167\u90e8\u5c6c\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5c6c\u6027"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"is_frozen"})," (",(0,i.jsx)(s.code,{children:"bool"}),")\uff1a\u5224\u65b7\u5b57\u5178\u662f\u5426\u88ab\u51cd\u7d50\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"freeze()"}),"\uff1a\u51cd\u7d50\u5b57\u5178\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"melt()"}),"\uff1a\u89e3\u51cd\u5b57\u5178\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"to_dict()"}),"\uff1a\u5c07\u5b57\u5178\u8f49\u63db\u70ba\u6a19\u6e96\u5b57\u5178\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"to_json(path: Union[str, Path]) -> None"}),"\uff1a\u5c07\u5b57\u5178\u5beb\u5165 json \u6a94\u6848\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"to_yaml(path: Union[str, Path]) -> None"}),"\uff1a\u5c07\u5b57\u5178\u5beb\u5165 yaml \u6a94\u6848\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"to_txt(path: Union[str, Path]) -> None"}),"\uff1a\u5c07\u5b57\u5178\u5beb\u5165 txt \u6a94\u6848\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"to_pickle(path: Union[str, Path]) -> None"}),"\uff1a\u5c07\u5b57\u5178\u5beb\u5165 pickle \u6a94\u6848\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["\uff0d ",(0,i.jsx)(s.strong,{children:"\u985e\u5225\u65b9\u6cd5"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"load_json(path: Union[str, Path]) -> PowerDict"}),"\uff1a\u5f9e json \u6a94\u6848\u8b80\u53d6\u5b57\u5178\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"load_pickle(path: Union[str, Path]) -> PowerDict"}),"\uff1a\u5f9e pickle \u6a94\u6848\u8b80\u53d6\u5b57\u5178\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"load_yaml(path: Union[str, Path]) -> PowerDict"}),"\uff1a\u5f9e yaml \u6a94\u6848\u8b80\u53d6\u5b57\u5178\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"d"})," (",(0,i.jsx)(s.code,{children:"dict"}),")\uff1a\u8981\u8f49\u63db\u7684\u5b57\u5178\u3002\u9810\u8a2d\u70ba None\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"from docsaidkit import PowerDict\n\nd = {'key': 'value'}\ncfg = PowerDict(d)\nprint(cfg.key)\n# >>> 'value'\n"})}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>o});var i=e(96540);const t={},r=i.createContext(t);function c(n){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(r.Provider,{value:s},n.children)}}}]);