"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1048],{51966:(n,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var i=r(74848),e=r(28453);const o={sidebar_position:1},d="draw_box",t={id:"docsaidkit/drawings/draw_box",title:"draw_box",description:"drawbox(img Union[Box, np.ndarray], color _Thickness = 2) -> np.ndarray",source:"@site/docs/docsaidkit/drawings/draw_box.md",sourceDirName:"docsaidkit/drawings",slug:"/docsaidkit/drawings/draw_box",permalink:"/docsaidkit/drawings/draw_box",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712407759e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Drawings",permalink:"/category/drawings"},next:{title:"draw_boxes",permalink:"/docsaidkit/drawings/draw_boxes"}},c={},a=[];function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"draw_box",children:"draw_box"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L31",children:"draw_box(img: np.ndarray, box: Union[Box, np.ndarray], color: _Color = (0, 255, 0), thickness: _Thickness = 2) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5728\u5f71\u50cf\u4e0a\u7e6a\u88fd Bounding Box\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"img"})," (",(0,i.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u5f71\u50cf\uff0c\u70ba NumPy \u9663\u5217\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"box"})," (",(0,i.jsx)(s.code,{children:"Union[Box, np.ndarray]"}),")\uff1a\u8981\u7e6a\u88fd\u7684 Bounding Box\uff0c\u53ef\u4ee5\u662f Box \u7269\u4ef6\u6216 NumPy \u9663\u5217\u5f62\u5f0f\u7684 [x1, y1, x2, y2]\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"color"})," (",(0,i.jsx)(s.code,{children:"_Color"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u6846\u7684\u984f\u8272\u3002\u9810\u8a2d\u70ba (0, 255, 0)\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"thickness"})," (",(0,i.jsx)(s.code,{children:"_Thickness"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u6846\u7dda\u7684\u7c97\u7d30\u3002\u9810\u8a2d\u70ba 2\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u7e6a\u88fd\u4e86\u6846\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nbox = D.Box([20, 20, 100, 100])\nbox_img = D.draw_box(img, box, color=(0, 255, 0), thickness=2)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"draw_box",src:r(35506).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:s}={...(0,e.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},35506:(n,s,r)=>{r.d(s,{A:()=>i});const i=r.p+"assets/images/test_draw_box-5cc539011988d6257b2f75bee823728c.jpg"},28453:(n,s,r)=>{r.d(s,{R:()=>d,x:()=>t});var i=r(96540);const e={},o=i.createContext(e);function d(n){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function t(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:d(n.components),i.createElement(o.Provider,{value:s},n.children)}}}]);