"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[68730],{23119:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(74848),t=r(28453);const i={sidebar_position:1},c="IpcamCapture",o={id:"docsaidkit/funcs/vision/ipcam/ipcamcapture",title:"IpcamCapture",description:"IpcamCapture(url str) -> None",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/ipcam/ipcamcapture.md",sourceDirName:"docsaidkit/funcs/vision/ipcam",slug:"/docsaidkit/funcs/vision/ipcam/ipcamcapture",permalink:"/en/docs/docsaidkit/funcs/vision/ipcam/ipcamcapture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ipcam",permalink:"/en/docs/category/ipcam"},next:{title:"WebDemo",permalink:"/en/docs/docsaidkit/funcs/vision/ipcam/webdemo"}},a={},l=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ipcamcapture",children:"IpcamCapture"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/ipcam/camera.py#L11",children:"IpcamCapture(url: int, str, color_base: str) -> None"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Capture images from an IP camera."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"url"})," (",(0,s.jsx)(n.code,{children:"int"}),", ",(0,s.jsx)(n.code,{children:"str"}),"): Identifier of the video source. It can be the device index of a locally connected camera or a string containing the network address of the IP camera. For local cameras, 0 is usually the default camera. Default is 0."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"color_base"})," (",(0,s.jsx)(n.code,{children:"str"}),"): Color space of the output frames. It can be 'BGR' or 'RGB'. Note that the input frames in OpenCV are always in BGR format. If color_base is set to 'RGB', each frame will be converted from BGR to RGB before returning. Default is 'BGR'."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"color_base"})," (",(0,s.jsx)(n.code,{children:"str"}),"): Color space of the output frames."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Methods"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"get_frame() -> np.ndarray"}),": Retrieve the currently captured frame."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\ncam = D.IpcamCapture(url='http://your_ip:your_port/video')\nfor frame in cam:\n    D.imshow(frame)\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(96540);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);