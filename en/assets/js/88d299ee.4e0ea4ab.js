"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4789],{67206:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(74848),t=n(28453);const r={sidebar_position:2},o="imwrite",c={id:"docsaidkit/funcs/vision/improc/imwrite",title:"imwrite",description:"imwrite(img Union[str, Path] = None, color_base str = '.jpg') -> bool",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/improc/imwrite.md",sourceDirName:"docsaidkit/funcs/vision/improc",slug:"/docsaidkit/funcs/vision/improc/imwrite",permalink:"/en/docs/docsaidkit/funcs/vision/improc/imwrite",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"imread",permalink:"/en/docs/docsaidkit/funcs/vision/improc/imread"},next:{title:"pdf2imgs",permalink:"/en/docs/docsaidkit/funcs/vision/improc/pdf2imgs"}},d={},l=[];function a(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"imwrite",children:"imwrite"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L245C1-L272C67",children:"imwrite(img: np.ndarray, path: Union[str, Path] = None, color_base: str = 'BGR', suffix: str = '.jpg') -> bool"})}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Description"}),": Write an image to a file with an option to convert color space. If no path is given, write to a temporary file."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"img"})," (",(0,s.jsx)(i.code,{children:"np.ndarray"}),"): The image to be written, represented as a numpy ndarray."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"path"})," (",(0,s.jsx)(i.code,{children:"Union[str, Path]"}),"): The path to write the image file. If None, write to a temporary file. Default is None."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"color_base"})," (",(0,s.jsx)(i.code,{children:"str"}),"): The current color space of the image. If not ",(0,s.jsx)(i.code,{children:"BGR"}),", the function will attempt to convert it to ",(0,s.jsx)(i.code,{children:"BGR"}),". Default is ",(0,s.jsx)(i.code,{children:"BGR"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"suffix"})," (",(0,s.jsx)(i.code,{children:"str"}),"): The suffix for the temporary file if path is None. Default is ",(0,s.jsx)(i.code,{children:".jpg"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"bool"}),": Returns True if the write operation is successful, otherwise returns False."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Example"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nD.imwrite(img, 'lena.jpg')\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>c});var s=n(96540);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);