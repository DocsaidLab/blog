"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2945],{39463:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=i(74848),s=i(28453);const r={sidebar_position:5},o="PowerDict",c={id:"docsaidkit/funcs/powerdict",title:"PowerDict",description:"PowerDict(d=None, kwargs)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/powerdict.md",sourceDirName:"docsaidkit/funcs",slug:"/docsaidkit/funcs/powerdict",permalink:"/en/docs/docsaidkit/funcs/powerdict",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Enums",permalink:"/en/docs/docsaidkit/funcs/enums"},next:{title:"SystemInfo",permalink:"/en/docs/docsaidkit/funcs/system_info"}},d={},l=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"powerdict",children:"PowerDict"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/utils/powerdict.py#L10",children:"PowerDict(d=None, **kwargs)"})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": This class is designed to create a dictionary with freezing and unfreezing capabilities, and allows accessing its properties through dot notation."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Attributes"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"is_frozen"})," (",(0,t.jsx)(e.code,{children:"bool"}),"): Determines whether the dictionary is frozen."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Methods"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"freeze()"}),": Freezes the dictionary."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"melt()"}),": Unfreezes the dictionary."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"to_dict()"}),": Converts the dictionary to a standard dictionary."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"to_json(path: Union[str, Path]) -> None"}),": Writes the dictionary to a JSON file."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"to_yaml(path: Union[str, Path]) -> None"}),": Writes the dictionary to a YAML file."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"to_txt(path: Union[str, Path]) -> None"}),": Writes the dictionary to a text file."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"to_pickle(path: Union[str, Path]) -> None"}),": Writes the dictionary to a pickle file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Class Methods"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"load_json(path: Union[str, Path]) -> PowerDict"}),": Loads a dictionary from a JSON file."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"load_pickle(path: Union[str, Path]) -> PowerDict"}),": Loads a dictionary from a pickle file."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"load_yaml(path: Union[str, Path]) -> PowerDict"}),": Loads a dictionary from a YAML file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"d"})," (",(0,t.jsx)(e.code,{children:"dict"}),"): The dictionary to convert. Default is None."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from docsaidkit import PowerDict\n\nd = {'key': 'value'}\ncfg = PowerDict(d)\nprint(cfg.key)\n# >>> 'value'\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);