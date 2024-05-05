"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[668],{47284:(n,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var e=o(74848),r=o(28453);const i={sidebar_position:4},l="draw_polygons",t={id:"docsaidkit/funcs/drawings/draw_polygons",title:"draw_polygons",description:"drawpolygons(img Polygons, color _Thicknesses = 2, fillup=False, kwargs) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/drawings/draw_polygons.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_polygons",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_polygons",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"draw_polygon",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_polygon"},next:{title:"draw_text",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_text"}},d={},a=[];function c(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h1,{id:"draw_polygons",children:"draw_polygons"}),"\n",(0,e.jsxs)(s.blockquote,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L156",children:"draw_polygons(img: np.ndarray, polygons: Polygons, color: _Colors = (0, 255, 0), thickness: _Thicknesses = 2, fillup=False, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"Description"})}),"\n",(0,e.jsx)(s.p,{children:"Draw multiple polygons on an image."}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"img"})," (",(0,e.jsx)(s.code,{children:"np.ndarray"}),"): The image to draw on, as a NumPy array."]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"polygons"})," (",(0,e.jsx)(s.code,{children:"List[Union[Polygon, np.ndarray]]"}),"): The polygons to draw, can be a list of Polygon objects or a NumPy array in the form [[x1, y1], [x2, y2], ...]."]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"color"})," (",(0,e.jsx)(s.code,{children:"_Colors"}),"): The color(s) of the polygons to draw. Can be a single color or a list of colors. Defaults to (0, 255, 0)."]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"thickness"})," (",(0,e.jsx)(s.code,{children:"_Thicknesses"}),"): The thickness(es) of the polygon outlines to draw. Can be a single thickness or a list of thicknesses. Defaults to 2."]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"fillup"})," (",(0,e.jsx)(s.code,{children:"bool"}),"): Whether to fill the polygons. Defaults to False."]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"kwargs"}),": Additional parameters."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"Returns"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"np.ndarray"}),": The image with the drawn polygons."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"Example"})}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\npolygons = [\n    D.Polygon([(20, 20), (100, 20), (80, 80), (20, 40)]),\n    D.Polygon([(100, 100), (20, 100), (40, 40), (100, 80)])\n]\npolygons_img = D.draw_polygons(img, polygons, color=[(0, 255, 0), (255, 0, 0)], thickness=2)\n"})}),"\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.img,{alt:"draw_polygons",src:o(21878).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function g(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(c,{...n})}):c(n)}},21878:(n,s,o)=>{o.d(s,{A:()=>e});const e=o.p+"assets/images/test_draw_polygons-284715897ed9b27cd534356250f2edbd.jpg"},28453:(n,s,o)=>{o.d(s,{R:()=>l,x:()=>t});var e=o(96540);const r={},i=e.createContext(r);function l(n){const s=e.useContext(i);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function t(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),e.createElement(i.Provider,{value:s},n.children)}}}]);