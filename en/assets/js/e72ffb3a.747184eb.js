"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1779],{59330:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=i(74848),r=i(28453);const o={sidebar_position:1},t="imread",c={id:"docsaidkit/funcs/vision/improc/imread",title:"imread",description:"imread(path str = 'BGR', verbose: bool = False) -> Union[np.ndarray, None]",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/improc/imread.md",sourceDirName:"docsaidkit/funcs/vision/improc",slug:"/docsaidkit/funcs/vision/improc/imread",permalink:"/en/docsaidkit/funcs/vision/improc/imread",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"imporc",permalink:"/en/category/imporc"},next:{title:"imwrite",permalink:"/en/docsaidkit/funcs/vision/improc/imwrite"}},d={},a=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"imread",children:"imread"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L197C1-L242C15",children:"imread(path: Union[str, Path], color_base: str = 'BGR', verbose: bool = False) -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Read an image based on different image formats using different methods. Supported formats and methods are as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".heic"}),": Read using ",(0,s.jsx)(n.code,{children:"read_heic_to_numpy"})," and convert to ",(0,s.jsx)(n.code,{children:"BGR"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".jpg"}),": Read using ",(0,s.jsx)(n.code,{children:"jpgread"})," and convert to ",(0,s.jsx)(n.code,{children:"BGR"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:["Other formats: Read using ",(0,s.jsx)(n.code,{children:"cv2.imread"})," and convert to ",(0,s.jsx)(n.code,{children:"BGR"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"jpgread"})," returns ",(0,s.jsx)(n.code,{children:"None"}),", fall back to using ",(0,s.jsx)(n.code,{children:"cv2.imread"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"path"})," (",(0,s.jsx)(n.code,{children:"Union[str, Path]"}),"): The path of the image to be read."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"color_base"})," (",(0,s.jsx)(n.code,{children:"str"}),"): The color space of the image. If not ",(0,s.jsx)(n.code,{children:"BGR"}),", conversion will be done using the ",(0,s.jsx)(n.code,{children:"imcvtcolor"})," function. Default is ",(0,s.jsx)(n.code,{children:"BGR"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"verbose"})," (",(0,s.jsx)(n.code,{children:"bool"}),"): If set to True, a warning will be issued when the read image is None. Default is False."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"np.ndarray"}),": Returns the numpy ndarray of the image if successful, otherwise returns None."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(96540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);