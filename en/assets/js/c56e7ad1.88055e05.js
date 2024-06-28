"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[797],{29955:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(74848),o=s(28453);const i={sidebar_position:1},t="draw_box",d={id:"docsaidkit/funcs/drawings/draw_box",title:"draw_box",description:"drawbox(img Union[Box, np.ndarray], color _Thickness = 2) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/drawings/draw_box.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_box",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_box",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Drawings",permalink:"/en/docs/category/drawings"},next:{title:"draw_boxes",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_boxes"}},a={},c=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"draw_box",children:"draw_box"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L31",children:"draw_box(img: np.ndarray, box: Union[Box, np.ndarray], color: _Color = (0, 255, 0), thickness: _Thickness = 2) -> np.ndarray"})}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Description"})}),"\n",(0,r.jsx)(e.p,{children:"Draw Bounding Box on an image."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"img"})," (",(0,r.jsx)(e.code,{children:"np.ndarray"}),"): The image to draw on, as a NumPy array."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"box"})," (",(0,r.jsx)(e.code,{children:"Union[Box, np.ndarray]"}),"): The Bounding Box to draw, can be a Box object or a NumPy array in the form [x1, y1, x2, y2]."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"color"})," (",(0,r.jsx)(e.code,{children:"_Color"}),"): The color of the box to draw. Defaults to (0, 255, 0)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"thickness"})," (",(0,r.jsx)(e.code,{children:"_Thickness"}),"): The thickness of the box outline to draw. Defaults to 2."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"np.ndarray"}),": The image with the drawn box."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nbox = D.Box([20, 20, 100, 100])\nbox_img = D.draw_box(img, box, color=(0, 255, 0), thickness=2)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"draw_box",src:s(10544).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},10544:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/test_draw_box-5cc539011988d6257b2f75bee823728c.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>d});var r=s(96540);const o={},i=r.createContext(o);function t(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);