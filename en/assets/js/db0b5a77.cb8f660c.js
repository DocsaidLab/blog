"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2015],{33051:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=e(74848),s=e(28453);const l={sidebar_position:4},i="Polygon",r={id:"docsaidkit/funcs/structures/polygon",title:"Polygon",description:"Polygon(array bool = False)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/polygon.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/polygon",permalink:"/en/docs/docsaidkit/funcs/structures/polygon",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Boxes",permalink:"/en/docs/docsaidkit/funcs/structures/boxes"},next:{title:"Polygons",permalink:"/en/docs/docsaidkit/funcs/structures/polygons"}},c={},d=[];function h(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"polygon",children:"Polygon"}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/polygons.py#L64",children:"Polygon(array: _Polygon, normalized: bool = False)"})}),"\n"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Description"}),":"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Polygon"})," is a class used to represent polygons. This class provides various methods for manipulating polygon coordinates, including normalization, denormalization, clipping, shifting, scaling, converting to convex polygons, converting to minimum bounding rectangles, converting to bounding boxes, and more."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"array"})," (",(0,t.jsx)(o.code,{children:"_Polygon"}),"): The coordinates of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"normalized"})," (",(0,t.jsx)(o.code,{children:"bool"}),"): Whether the coordinates of the polygon are normalized, a boolean attribute flag. Defaults to ",(0,t.jsx)(o.code,{children:"False"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Attributes"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"normalized"}),": Get the normalization status of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"moments"}),": Get the moments of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"area"}),": Get the area of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"arclength"}),": Get the perimeter of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"centroid"}),": Get the centroid of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"boundingbox"}),": Get the bounding box of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"min_circle"}),": Get the minimum enclosing circle of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"min_box"}),": Get the minimum bounding rectangle of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"orientation"}),": Get the orientation of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"min_box_wh"}),": Get the width and height of the minimum bounding rectangle of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"extent"}),": Get the extent of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"solidity"}),": Get the solidity of the polygon."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Methods"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"copy"}),"(): Copy the polygon object."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"numpy"}),"(): Convert the polygon object to a numpy array."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"normalize"}),"(w: float, h: float): Normalize the coordinates of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"denormalize"}),"(w: float, h: float): Denormalize the coordinates of the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"clip"}),"(xmin: int, ymin: int, xmax: int, ymax: int): Clip the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"shift"}),"(shift_x: float, shift_y: float): Shift the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"scale"}),"(distance: int, join_style: JOIN_STYLE = JOIN_STYLE.mitre): Scale the polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"to_convexhull"}),"(): Convert the polygon to a convex polygon."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"to_min_boxpoints"}),"(): Convert the polygon to the coordinates of the minimum bounding rectangle."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"to_box"}),"(box_mode: str = 'xyxy'): Convert the polygon to a bounding box."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"to_list"}),"(flatten: bool = False): Convert the polygon to a list."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"is_empty"}),"(threshold: int = 3): Determine if the polygon is empty."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Example"})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"import docsaidkit as D\n\npolygon = D.Polygon([[10., 20.], [50, 20.], [50, 80.], [10., 80.]])\nprint(polygon)\n# >>> Polygon([[10. 20.], [50. 20.], [50. 80.], [10. 80.]])\n\npolygon1 = polygon.normalize(100, 100)\nprint(polygon1)\n# >>> Polygon([[0.1 0.2], [0.5 0.2], [0.5 0.8], [0.1 0.8]])\n\npolygon2 = polygon.denormalize(100, 100)\nprint(polygon2)\n# >>> Polygon([[1000. 2000.], [5000. 2000.], [5000. 8000.], [1000. 8000.]])\n\npolygon3 = polygon.clip(20, 20, 60, 60)\nprint(polygon3)\n# >>> Polygon([[20. 20.], [50. 20.], [50. 60.], [20. 60.]])\n\npolygon4 = polygon.shift(10, 10)\nprint(polygon4)\n# >>> Polygon([[20. 30.], [60. 30.], [60. 90.], [20. 90.]])\n\npolygon5 = polygon.scale(10)\nprint(polygon5)\n# >>> Polygon([[0. 10.], [60. 10.], [60. 90.], [0. 90.]])\n\npolygon6 = polygon.to_convexhull()\nprint(polygon6)\n# >>> Polygon([[50. 80.], [10. 80.], [10. 20.], [50. 20.]])\n\npolygon7 = polygon.to_min_boxpoints()\nprint(polygon7)\n# >>> Polygon([[10. 20.], [50. 20.], [50. 80.], [10. 80.]])\n\npolygon8 = polygon.to_box('xywh')\nprint(polygon8)\n# >>> Box([10. 20. 40. 60.]), BoxMode.XYWH\n\npolygon9 = polygon.to_list()\nprint(polygon9)\n# >>> [[10.0, 20.0], [50.0, 20.0], [50.0, 80.0], [10.0, 80.0]]\n\npolygon10 = polygon.is_empty()\nprint(polygon10)\n# >>> False\n"})}),"\n"]}),"\n"]})]})}function g(n={}){const{wrapper:o}={...(0,s.R)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>i,x:()=>r});var t=e(96540);const s={},l=t.createContext(s);function i(n){const o=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function r(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(l.Provider,{value:o},n.children)}}}]);