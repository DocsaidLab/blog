"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2390],{51743:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var s=i(74848),o=i(28453);const d={sidebar_position:8},c="imdecode",t={id:"docsaidkit/funcs/vision/improc/imdecode",title:"imdecode",description:"imdecode(byte_: bytes) -> Union[np.ndarray, None]",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/improc/imdecode.md",sourceDirName:"docsaidkit/funcs/vision/improc",slug:"/docsaidkit/funcs/vision/improc/imdecode",permalink:"/en/docs/docsaidkit/funcs/vision/improc/imdecode",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"imencode",permalink:"/en/docs/docsaidkit/funcs/vision/improc/imencode"},next:{title:"npyread",permalink:"/en/docs/docsaidkit/funcs/vision/improc/npyread"}},r={},a=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"imdecode",children:"imdecode"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L107",children:"imdecode(byte_: bytes) -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Decode an image byte string to a NumPy image array."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"byte_"})," (",(0,s.jsx)(n.code,{children:"bytes"}),"): The image byte string to decode."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"np.ndarray"}),": The decoded image array."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nencoded_bytes = D.imencode(img, IMGTYP=D.IMGTYP.PNG)\ndecoded_img = D.imdecode(encoded_bytes)\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var s=i(96540);const o={},d=s.createContext(o);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);