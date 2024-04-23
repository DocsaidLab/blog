"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[499],{60065:(n,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>e,metadata:()=>l,toc:()=>t});var r=o(74848),i=o(28453);const e={sidebar_position:3},d="draw_polygon",l={id:"docsaidkit/funcs/drawings/draw_polygon",title:"draw_polygon",description:"drawpolygon(img Union[Polygon, np.ndarray], color _Thickness = 2, fillup=False, kwargs) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/drawings/draw_polygon.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_polygon",permalink:"/docsaidkit/funcs/drawings/draw_polygon",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713882784e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"draw_boxes",permalink:"/docsaidkit/funcs/drawings/draw_boxes"},next:{title:"draw_polygons",permalink:"/docsaidkit/funcs/drawings/draw_polygons"}},c={},t=[];function a(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"draw_polygon",children:"draw_polygon"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L106",children:"draw_polygon(img: np.ndarray, polygon: Union[Polygon, np.ndarray], color: _Color = (0, 255, 0), thickness: _Thickness = 2, fillup=False, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5728\u5f71\u50cf\u4e0a\u7e6a\u88fd\u591a\u908a\u5f62\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"img"})," (",(0,r.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u5f71\u50cf\uff0c\u70ba NumPy \u9663\u5217\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"polygon"})," (",(0,r.jsx)(s.code,{children:"Union[Polygon, np.ndarray]"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u591a\u908a\u5f62\uff0c\u53ef\u4ee5\u662f\u591a\u908a\u5f62\u7269\u4ef6\u6216 NumPy \u9663\u5217\u5f62\u5f0f\u7684 [[x1, y1], [x2, y2], ...]\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"color"})," (",(0,r.jsx)(s.code,{children:"_Color"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u591a\u908a\u5f62\u7684\u984f\u8272\u3002\u9810\u8a2d\u70ba (0, 255, 0)\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"thickness"})," (",(0,r.jsx)(s.code,{children:"_Thickness"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u591a\u908a\u5f62\u908a\u7dda\u7684\u7c97\u7d30\u3002\u9810\u8a2d\u70ba 2\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"fillup"})," (",(0,r.jsx)(s.code,{children:"bool"}),")\uff1a\u662f\u5426\u586b\u6eff\u591a\u908a\u5f62\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"kwargs"}),"\uff1a\u5176\u4ed6\u53c3\u6578\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u7e6a\u88fd\u4e86\u591a\u908a\u5f62\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\npolygon = D.Polygon([(20, 20), (100, 20), (80, 80), (20, 40)])\npolygon_img = D.draw_polygon(img, polygon, color=(0, 255, 0), thickness=2)\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"draw_polygon",src:o(47453).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:s}={...(0,i.R)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},47453:(n,s,o)=>{o.d(s,{A:()=>r});const r=o.p+"assets/images/test_draw_polygon-39bd167f197ac7171ea6384737c8c9e4.jpg"},28453:(n,s,o)=>{o.d(s,{R:()=>d,x:()=>l});var r=o(96540);const i={},e=r.createContext(i);function d(n){const s=r.useContext(e);return r.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(e.Provider,{value:s},n.children)}}}]);