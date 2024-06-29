"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4732],{76749:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=s(74848),r=s(28453);const c={sidebar_position:1},t="IpcamCapture",o={id:"docsaidkit/funcs/vision/ipcam/ipcamcapture",title:"IpcamCapture",description:"IpcamCapture(url str) -> None",source:"@site/docs/docsaidkit/funcs/vision/ipcam/ipcamcapture.md",sourceDirName:"docsaidkit/funcs/vision/ipcam",slug:"/docsaidkit/funcs/vision/ipcam/ipcamcapture",permalink:"/docs/docsaidkit/funcs/vision/ipcam/ipcamcapture",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ipcam",permalink:"/docs/category/ipcam"},next:{title:"WebDemo",permalink:"/docs/docsaidkit/funcs/vision/ipcam/webdemo"}},a={},d=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"ipcamcapture",children:"IpcamCapture"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/ipcam/camera.py#L11",children:"IpcamCapture(url: int, str, color_base: str) -> None"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5f9e IP \u651d\u5f71\u6a5f\u4e2d\u6355\u7372\u5f71\u50cf\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"url"})," (",(0,i.jsx)(e.code,{children:"int"}),", ",(0,i.jsx)(e.code,{children:"str"}),")\uff1a\u8996\u8a0a\u6e90\u7684\u8b58\u5225\u7b26\u3002\u5b83\u53ef\u4ee5\u662f\u672c\u5730\u9023\u63a5\u651d\u5f71\u6a5f\u7684\u8a2d\u5099\u7d22\u5f15\uff0c\u4e5f\u53ef\u4ee5\u662f\u5305\u542b IP \u651d\u5f71\u6a5f\u7db2\u7d61\u5730\u5740\u7684\u5b57\u7b26\u4e32\u3002\u5c0d\u65bc\u672c\u5730\u651d\u5f71\u6a5f\uff0c0\u901a\u5e38\u662f\u9ed8\u8a8d\u651d\u5f71\u6a5f\u3002\u9ed8\u8a8d\u70ba 0\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"color_base"})," (",(0,i.jsx)(e.code,{children:"str"}),")\uff1a\u8f38\u51fa\u5e40\u7684\u984f\u8272\u7a7a\u9593\u3002\u5b83\u53ef\u4ee5\u662f 'BGR' \u6216 'RGB'\u3002\u8acb\u6ce8\u610f\uff0cOpenCV \u7684\u8f38\u5165\u5e40\u59cb\u7d42\u662f BGR \u683c\u5f0f\u3002\u5982\u679c color_base \u8a2d\u7f6e\u70ba 'RGB'\uff0c\u5247\u6bcf\u500b\u5e40\u5c07\u5728\u8fd4\u56de\u4e4b\u524d\u5f9e BGR \u8f49\u63db\u70ba RGB\u3002\u9ed8\u8a8d\u70ba 'BGR'\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5c6c\u6027"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"color_base"})," (",(0,i.jsx)(e.code,{children:"str"}),")\uff1a\u8f38\u51fa\u5e40\u7684\u984f\u8272\u7a7a\u9593\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"get_frame() -> np.ndarray"}),"\uff1a\u7372\u53d6\u7576\u524d\u6355\u7372\u7684\u5e40\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\ncam = D.IpcamCapture(url='http://your_ip:your_port/video')\nfor frame in cam:\n    D.imshow(frame)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>o});var i=s(96540);const r={},c=i.createContext(r);function t(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);