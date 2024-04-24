"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1426],{3626:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>t,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=e(74848),i=e(28453);const o={sidebar_position:2},d="draw_boxes",c={id:"docsaidkit/funcs/drawings/draw_boxes",title:"draw_boxes",description:"drawboxes(img Union[Boxes, np.ndarray], color _Thicknesses = 2) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/drawings/draw_boxes.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_boxes",permalink:"/docs/docsaidkit/funcs/drawings/draw_boxes",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713961801e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"draw_box",permalink:"/docs/docsaidkit/funcs/drawings/draw_box"},next:{title:"draw_polygon",permalink:"/docs/docsaidkit/funcs/drawings/draw_polygon"}},t={},a=[];function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"draw_boxes",children:"draw_boxes"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L67",children:"draw_boxes(img: np.ndarray, boxes: Union[Boxes, np.ndarray], color: _Colors = (0, 255, 0), thickness: _Thicknesses = 2) -> np.ndarray"})}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5728\u5f71\u50cf\u4e0a\u7e6a\u88fd\u591a\u500b Bounding Box\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"img"})," (",(0,r.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u5f71\u50cf\uff0c\u70ba NumPy \u9663\u5217\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"boxes"})," (",(0,r.jsx)(s.code,{children:"Union[Boxes, np.ndarray]"}),")\uff1a\u8981\u7e6a\u88fd\u7684 Bounding Box\uff0c\u53ef\u4ee5\u662f Box \u7269\u4ef6\u7684\u5217\u8868\u6216 NumPy \u9663\u5217\u5f62\u5f0f\u7684 [[x1, y1, x2, y2], ...]\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"color"})," (",(0,r.jsx)(s.code,{children:"_Colors"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u6846\u7684\u984f\u8272\u3002\u53ef\u4ee5\u662f\u55ae\u4e00\u984f\u8272\u6216\u984f\u8272\u5217\u8868\u3002\u9810\u8a2d\u70ba (0, 255, 0)\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"thickness"})," (",(0,r.jsx)(s.code,{children:"_Thicknesses"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u6846\u7dda\u7684\u7c97\u7d30\u3002\u53ef\u4ee5\u662f\u55ae\u4e00\u7c97\u7d30\u6216\u7c97\u7d30\u5217\u8868\u3002\u9810\u8a2d\u70ba 2\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u7e6a\u88fd\u4e86\u6846\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nboxes = [D.Box([20, 20, 100, 100]), D.Box([150, 150, 200, 200])]\nboxes_img = D.draw_boxes(img, boxes, color=[(0, 255, 0), (255, 0, 0)], thickness=2)\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"draw_boxes",src:e(42628).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:s}={...(0,i.R)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},42628:(n,s,e)=>{e.d(s,{A:()=>r});const r=e.p+"assets/images/test_draw_boxes-c4c3c75cff0def428a1be1b59cf74e87.jpg"},28453:(n,s,e)=>{e.d(s,{R:()=>d,x:()=>c});var r=e(96540);const i={},o=r.createContext(i);function d(n){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(o.Provider,{value:s},n.children)}}}]);