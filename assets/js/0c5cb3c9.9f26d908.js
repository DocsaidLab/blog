"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5205],{48324:(n,s,o)=>{o.r(s),o.d(s,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var e=o(74848),r=o(28453);const i={sidebar_position:4},d="draw_polygons",l={id:"docsaidkit/funcs/drawings/draw_polygons",title:"draw_polygons",description:"drawpolygons(img Polygons, color _Thicknesses = 2, fillup=False, kwargs) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/drawings/draw_polygons.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_polygons",permalink:"/docs/docsaidkit/funcs/drawings/draw_polygons",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"draw_polygon",permalink:"/docs/docsaidkit/funcs/drawings/draw_polygon"},next:{title:"draw_text",permalink:"/docs/docsaidkit/funcs/drawings/draw_text"}},t={},c=[];function a(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h1,{id:"draw_polygons",children:"draw_polygons"}),"\n",(0,e.jsxs)(s.blockquote,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L156",children:"draw_polygons(img: np.ndarray, polygons: Polygons, color: _Colors = (0, 255, 0), thickness: _Thicknesses = 2, fillup=False, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5728\u5f71\u50cf\u4e0a\u7e6a\u88fd\u591a\u500b\u591a\u908a\u5f62\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"img"})," (",(0,e.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u5f71\u50cf\uff0c\u70ba NumPy \u9663\u5217\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"polygons"})," (",(0,e.jsx)(s.code,{children:"List[Union[Polygon, np.ndarray]]"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u591a\u908a\u5f62\uff0c\u53ef\u4ee5\u662f\u591a\u908a\u5f62\u7269\u4ef6\u7684\u5217\u8868\u6216 NumPy \u9663\u5217\u5f62\u5f0f\u7684 [[x1, y1], [x2, y2], ...]\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"color"})," (",(0,e.jsx)(s.code,{children:"_Colors"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u591a\u908a\u5f62\u7684\u984f\u8272\u3002\u53ef\u4ee5\u662f\u55ae\u4e00\u984f\u8272\u6216\u984f\u8272\u5217\u8868\u3002\u9810\u8a2d\u70ba (0, 255, 0)\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"thickness"})," (",(0,e.jsx)(s.code,{children:"_Thicknesses"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u591a\u908a\u5f62\u908a\u7dda\u7684\u7c97\u7d30\u3002\u53ef\u4ee5\u662f\u55ae\u4e00\u7c97\u7d30\u6216\u7c97\u7d30\u5217\u8868\u3002\u9810\u8a2d\u70ba 2\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"fillup"})," (",(0,e.jsx)(s.code,{children:"bool"}),")\uff1a\u662f\u5426\u586b\u6eff\u591a\u908a\u5f62\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"kwargs"}),"\uff1a\u5176\u4ed6\u53c3\u6578\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u7e6a\u88fd\u4e86\u591a\u908a\u5f62\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\npolygons = [\n    D.Polygon([(20, 20), (100, 20), (80, 80), (20, 40)]),\n    D.Polygon([(100, 100), (20, 100), (40, 40), (100, 80)])\n]\npolygons_img = D.draw_polygons(img, polygons, color=[(0, 255, 0), (255, 0, 0)], thickness=2)\n"})}),"\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.img,{alt:"draw_polygons",src:o(80294).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(a,{...n})}):a(n)}},80294:(n,s,o)=>{o.d(s,{A:()=>e});const e=o.p+"assets/images/test_draw_polygons-284715897ed9b27cd534356250f2edbd.jpg"},28453:(n,s,o)=>{o.d(s,{R:()=>d,x:()=>l});var e=o(96540);const r={},i=e.createContext(r);function d(n){const s=e.useContext(i);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),e.createElement(i.Provider,{value:s},n.children)}}}]);