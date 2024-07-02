"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1795],{83674:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(74848),t=s(28453);const o={sidebar_position:2},r="WebDemo",c={id:"docsaidkit/funcs/vision/ipcam/webdemo",title:"WebDemo",description:"WebDemo(cameraip str = 'BGR', route list = []) -> None",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/ipcam/webdemo.md",sourceDirName:"docsaidkit/funcs/vision/ipcam",slug:"/docsaidkit/funcs/vision/ipcam/webdemo",permalink:"/en/docs/docsaidkit/funcs/vision/ipcam/webdemo",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719919838e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"IpcamCapture",permalink:"/en/docs/docsaidkit/funcs/vision/ipcam/ipcamcapture"},next:{title:"Drawings",permalink:"/en/docs/category/drawings"}},a={},d=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"webdemo",children:"WebDemo"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/ipcam/app.py#L23",children:"WebDemo(camera_ip: str, color_base: str = 'BGR', route: str = '/', pipelines: list = []) -> None"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": Display images from an IP camera on a web page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"camera_ip"})," (",(0,i.jsx)(n.code,{children:"str"}),"): URL of the IP camera."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"color_base"})," (",(0,i.jsx)(n.code,{children:"str"}),"): Color space of the output frames. It can be 'BGR' or 'RGB'. Note that the input frames in OpenCV are always in BGR format. If color_base is set to 'RGB', each frame will be converted from BGR to RGB before returning. Default is 'BGR'."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"route"})," (",(0,i.jsx)(n.code,{children:"str"}),"): Web page route. Default is '/'."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pipelines"})," (",(0,i.jsx)(n.code,{children:"list"}),"): Image processing pipelines. Default is an empty list."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nD.WebDemo(camera_ip='http://your_ip:your_port/video').run()\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);