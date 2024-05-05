"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5912],{64790:(n,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var e=s(74848),l=s(28453);const t={sidebar_position:5},i="Polygons",r={id:"docsaidkit/funcs/structures/polygons",title:"Polygons",description:"Polygons(array bool = False)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/polygons.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/polygons",permalink:"/en/docs/docsaidkit/funcs/structures/polygons",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Polygon",permalink:"/en/docs/docsaidkit/funcs/structures/polygon"},next:{title:"pairwise_intersection",permalink:"/en/docs/docsaidkit/funcs/structures/pairwise_intersection"}},c={},d=[];function g(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.h1,{id:"polygons",children:"Polygons"}),"\n",(0,e.jsxs)(o.blockquote,{children:["\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/polygons.py#L328",children:"Polygons(array: _Polygons, normalized: bool = False)"})}),"\n"]}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:["\n",(0,e.jsxs)(o.p,{children:[(0,e.jsx)(o.strong,{children:"Description"}),":"]}),"\n",(0,e.jsxs)(o.p,{children:[(0,e.jsx)(o.code,{children:"Polygons"})," is a class used to represent multiple polygons. This class provides various methods for manipulating the coordinates of multiple polygons, including normalization, denormalization, clipping, shifting, scaling, converting to convex polygons, converting to minimum bounding rectangles, converting to bounding boxes, and more."]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:["\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.strong,{children:"Parameters"})}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"array"})," (",(0,e.jsx)(o.code,{children:"_Polygons"}),"): The coordinates of multiple polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"normalized"})," (",(0,e.jsx)(o.code,{children:"bool"}),"): Whether the coordinates of the polygons are normalized, a boolean attribute flag. Defaults to ",(0,e.jsx)(o.code,{children:"False"}),"."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:["\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.strong,{children:"Attributes"})}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"normalized"}),": Get the normalization status of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"moments"}),": Get the moments of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"area"}),": Get the total area of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"arclength"}),": Get the total perimeter of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"centroid"}),": Get the centroid of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"boundingbox"}),": Get the bounding box enclosing all polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"min_circle"}),": Get the minimum enclosing circle of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"min_box"}),": Get the minimum bounding rectangle enclosing all polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"orientation"}),": Get the orientation of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"min_box_wh"}),": Get the width and height of the minimum bounding rectangle enclosing all polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"extent"}),": Get the extent of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"solidity"}),": Get the solidity of the polygons."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:["\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.strong,{children:"Methods"})}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"copy"}),"(): Copy the polygons object."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"numpy"}),"(): Convert the polygons object to a numpy array."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"normalize"}),"(w: float, h: float): Normalize the coordinates of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"denormalize"}),"(w: float, h: float): Denormalize the coordinates of the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"clip"}),"(xmin: int, ymin: int, xmax: int, ymax: int): Clip the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"shift"}),"(shift_x: float, shift_y: float): Shift the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"scale"}),"(distance: int, join_style: JOIN_STYLE = JOIN_STYLE.mitre): Scale the polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"to_convexhull"}),"(): Convert the polygons to convex polygons."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"to_min_boxpoints"}),"(): Convert the polygons to the coordinates of the minimum bounding rectangles."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"to_box"}),"(box_mode: str = 'xyxy'): Convert the polygons to bounding boxes."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"to_list"}),"(flatten: bool = False): Convert the polygons to a list."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"is_empty"}),"(threshold: int = 3): Determine if the polygons are empty."]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:["\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.strong,{children:"Class Constructors"})}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"from_image"}),"(image: np.ndarray, mode: int = cv2.RETR_EXTERNAL, method: int = cv2.CHAIN_APPROX_SIMPLE): Get the coordinates of polygons from an image."]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"cat"}),'(polygons_list: List["Polygons"]): Concatenate multiple lists of polygons into one list of polygons.']}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:["\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.strong,{children:"Example"})}),"\n",(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{className:"language-python",children:"import docsaidkit as D\n\npolygons = D.Polygons([\n    [[10., 20.], [50, 20.], [50, 80.], [10., 80.]],\n    [[60., 20.], [100, 20.], [100, 80.], [60., 80.]]\n])\nprint(polygons)\n# >>> Polygons(\n#   [\n#       Polygon([\n#           [10. 20.]\n#           [50. 20.]\n#           [50. 80.]\n#           [10. 80.]\n#       ]),\n#       Polygon([\n#           [60. 20.]\n#           [100. 20.]\n#           [100. 80.]\n#           [60. 80.]\n#       ])\n#   ]\n# )\n\npolygon1 = polygons.normalize(100, 100)\nprint(polygon1)\n# >>> Polygons(\n#   [\n#       Polygon([\n#           [0.1 0.2]\n#           [0.5 0.2]\n#           [0.5 0.8]\n#           [0.1 0.8]\n#       ]),\n#       Polygon([\n#           [0.6 0.2]\n#           [1.  0.2]\n#           [1.  0.8]\n#           [0.6 0.8]\n#       ])\n#   ]\n# )\n\npolygon2 = polygons.denormalize(100, 100)\nprint(polygon2)\n# >>> Polygons(\n#   [\n#       Polygon([\n#           [1000. 2000.]\n#           [5000. 2000.]\n#           [5000. 8000.]\n#           [1000. 8000.]\n#       ]),\n#       Polygon([\n#           [6000. 2000.]\n#           [10000. 2000.]\n#           [10000. 8000.]\n#           [6000. 8000.]\n#       ])\n#   ]\n# )\n\npolygon3 = polygons.clip(20, 20, 60, 60)\nprint(polygon3)\n# >>> Polygons(\n#   [\n#       Polygon([\n#           [20. 20.]\n#           [50. 20.]\n#           [50. 60.]\n#           [20. 60.]\n#       ]),\n#       Polygon([\n#           [60. 20.]\n#           [60. 20.]\n#           [60. 60.]\n#           [60. 60.]\n#       ])\n#   ]\n# )\n\npolygon4 = polygons.shift(10, 10)\nprint(polygon4)\n# >>> Polygons(\n#   [\n#       Polygon([\n#           [20. 30.]\n#           [60. 30.]\n#           [60. 90.]\n#           [20. 90.]\n#       ]),\n#       Polygon([\n#           [ 70.  30.]\n#           [110.  30.]\n#           [110.  90.]\n#           [ 70.  90.]\n#       ])\n#   ]\n# )\n\n\npolygon5 = polygons.scale(10)\nprint(polygon5)\n# >>> Polygons(\n#   [\n#       Polygon([\n#           [ 0. 10.]\n#           [60. 10.]\n#           [60. 90.]\n#           [ 0. 90.]\n#       ]),\n#       Polygon([\n#           [ 50.  10.]\n#           [110.  10.]\n#           [110.  90.]\n#           [ 50.  90.]\n#       ])\n#   ]\n# )\n\npolygon6 = polygons.to_convexhull()\nprint(polygon6)\n# >>> Polygons(\n#   [\n#       Polygon([\n#           [50. 80.],\n#           [10. 80.],\n#           [10. 20.],\n#           [50. 20.]\n#       ]),\n#       Polygon([\n#           [100.  80.],\n#           [ 60.  80.],\n#           [ 60.  20.],\n#           [100.  20.]\n#       ])\n#   ]\n# )\n\npolygon7 = polygons.to_min_boxpoints()\nprint(polygon7)\n# >>> Polygons(\n#   [\n#       Polygon([\n#           [10. 20.]\n#           [50. 20.]\n#           [50. 80.]\n#           [10. 80.]\n#       ]),\n#       Polygon([\n#           [ 60.  20.]\n#           [100.  20.]\n#           [100.  80.]\n#           [ 60.  80.]\n#       ])\n#   ]\n# )\n\npolygon8 = polygons.to_boxes() # notice that the method name is different from Polygon\nprint(polygon8)\n# >>> Boxes([[ 10.  20.  50.  80.], [ 60.  20. 100.  80.]]), BoxMode.XYXY\n\npolygon9 = polygons.to_list()\nprint(polygon9)\n# >>> [\n#   [\n#       [10.0, 20.0],\n#       [50.0, 20.0],\n#       [50.0, 80.0],\n#       [10.0, 80.0]\n#   ],\n#   [\n#       [60.0, 20.0],\n#       [100.0, 20.0],\n#       [100.0, 80.0],\n#       [60.0, 80.0]\n#   ]\n# ]\n\npolygon10 = polygons.is_empty()\nprint(polygon10)\n# >>> [False, False]\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:o}={...(0,l.R)(),...n.components};return o?(0,e.jsx)(o,{...n,children:(0,e.jsx)(g,{...n})}):g(n)}},28453:(n,o,s)=>{s.d(o,{R:()=>i,x:()=>r});var e=s(96540);const l={},t=e.createContext(l);function i(n){const o=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function r(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),e.createElement(t.Provider,{value:o},n.children)}}}]);