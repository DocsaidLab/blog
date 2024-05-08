"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8037],{48879:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=s(74848),r=s(28453);const o={sidebar_position:5},c="PNG Process",d={id:"docsaidkit/funcs/vision/improc/png_process",title:"PNG Process",description:"pngencode",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/improc/png_process.md",sourceDirName:"docsaidkit/funcs/vision/improc",slug:"/docsaidkit/funcs/vision/improc/png_process",permalink:"/en/docs/docsaidkit/funcs/vision/improc/png_process",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"JPG Process",permalink:"/en/docs/docsaidkit/funcs/vision/improc/jpg_process"},next:{title:"Base64 Process",permalink:"/en/docs/docsaidkit/funcs/vision/improc/base64_process"}},t={},l=[{value:"pngencode",id:"pngencode",level:2},{value:"pngdecode",id:"pngdecode",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"png-process",children:"PNG Process"}),"\n",(0,i.jsx)(e.h2,{id:"pngencode",children:"pngencode"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L80",children:"pngencode(img: np.ndarray, compression: int = 1) -> Union[bytes, None]"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Description"}),": Encode a NumPy image array into a byte string in PNG format."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"img"})," (",(0,i.jsx)(e.code,{children:"np.ndarray"}),"): The image array to be encoded."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"compression"})," (",(0,i.jsx)(e.code,{children:"int"}),"): Compression level, ranging from 0 to 9. 0 means no compression, 9 means highest compression. Default is 1."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"bytes"}),": The encoded byte string in PNG format."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg_array = np.random.rand(100, 100, 3) * 255\nencoded_bytes = D.pngencode(img_array, compression=9)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"pngdecode",children:"pngdecode"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L91",children:"pngdecode(byte_: bytes) -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Description"}),": Decode a byte string in PNG format into a NumPy image array."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"byte_"})," (",(0,i.jsx)(e.code,{children:"bytes"}),"): The byte string in PNG format to be decoded."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"np.ndarray"}),": The decoded image array."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"decoded_img = D.pngdecode(encoded_bytes)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var i=s(96540);const r={},o=i.createContext(r);function c(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);