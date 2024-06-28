"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4198],{71691:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=s(74848),i=s(28453);const t={sidebar_position:3},r="Boxes",d={id:"docsaidkit/funcs/structures/boxes",title:"Boxes",description:"Boxes(array _BoxMode = BoxMode.XYXY, normalized: bool = False)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/boxes.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/boxes",permalink:"/en/docs/docsaidkit/funcs/structures/boxes",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Box",permalink:"/en/docs/docsaidkit/funcs/structures/box"},next:{title:"Polygon",permalink:"/en/docs/docsaidkit/funcs/structures/polygon"}},l={},c=[];function x(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"boxes",children:"Boxes"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/boxes.py#L361",children:"Boxes(array: _Boxes, box_mode: _BoxMode = BoxMode.XYXY, normalized: bool = False)"})}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Description"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Boxes"})," is a class designed to represent multiple bounding boxes. It offers numerous methods for manipulating the coordinates of multiple bounding boxes, such as converting coordinate systems, normalizing coordinates, denormalizing coordinates, cropping bounding boxes, moving bounding boxes, and scaling bounding boxes."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"array"})," (",(0,o.jsx)(e.code,{children:"_Boxes"}),"): A collection of bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"box_mode"})," (",(0,o.jsx)(e.code,{children:"_BoxMode"}),"): An enumeration class that represents the different ways of defining bounding boxes, with the default format being ",(0,o.jsx)(e.code,{children:"XYXY"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"normalized"})," (",(0,o.jsx)(e.code,{children:"bool"}),"): Indicates whether the bounding box coordinates are normalized. Default is ",(0,o.jsx)(e.code,{children:"False"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Attributes"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"box_mode"}),": Retrieves the representation mode of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"normalized"}),": Retrieves the normalization status of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"width"}),": Retrieves the width of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"height"}),": Retrieves the height of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"left_top"}),": Retrieves the top-left corner of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"right_bottom"}),": Retrieves the bottom-right corner of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"area"}),": Retrieves the area of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"aspect_ratio"}),": Calculates the aspect ratio of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"center"}),": Calculates the center point of the bounding boxes."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Methods"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"convert"}),"(",(0,o.jsx)(e.code,{children:"to_mode: _BoxMode"}),"): Converts the format of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"copy"}),"(): Copies the bounding boxes object."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"numpy"}),"(): Converts the bounding boxes object to a numpy array."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"square"}),"(): Transforms the bounding boxes into square bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"normalize"}),"(",(0,o.jsx)(e.code,{children:"w: int, h: int"}),"): Normalizes the coordinates of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"denormalize"}),"(",(0,o.jsx)(e.code,{children:"w: int, h: int"}),"): Denormalizes the coordinates of the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"clip"}),"(",(0,o.jsx)(e.code,{children:"xmin: int, ymin: int, xmax: int, ymax: int"}),"): Crops the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"shift"}),"(",(0,o.jsx)(e.code,{children:"shift_x: float, shift_y: float"}),"): Moves the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"scale"}),"(",(0,o.jsx)(e.code,{children:"dsize: Tuple[int, int] = None, fx: float = None, fy: float = None"}),"): Scales the bounding boxes."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"to_list"}),"(): Converts the bounding boxes to a list."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"to_polygons"}),"(): Converts the bounding boxes to polygons (docsaidkit.Polygons)."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Example"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"convert"}),"(",(0,o.jsx)(e.code,{children:"to_mode: _BoxMode"}),")\uff1a\u8f49\u63db\u908a\u754c\u6846\u7684\u683c\u5f0f\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"copy"}),"()\uff1a\u8907\u88fd\u908a\u754c\u6846\u7269\u4ef6\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"numpy"}),"()\uff1a\u5c07\u908a\u754c\u6846\u7269\u4ef6\u8f49\u63db\u70ba numpy \u9663\u5217\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"square"}),"()\uff1a\u5c07\u908a\u754c\u6846\u8f49\u63db\u70ba\u6b63\u65b9\u5f62\u908a\u754c\u6846\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"normalize"}),"(",(0,o.jsx)(e.code,{children:"w: int, h: int"}),")\uff1a\u6b63\u898f\u5316\u908a\u754c\u6846\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"denormalize"}),"(",(0,o.jsx)(e.code,{children:"w: int, h: int"}),")\uff1a\u53cd\u6b63\u898f\u5316\u908a\u754c\u6846\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"clip"}),"(",(0,o.jsx)(e.code,{children:"xmin: int, ymin: int, xmax: int, ymax: int"}),")\uff1a\u88c1\u526a\u908a\u754c\u6846\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"shift"}),"(",(0,o.jsx)(e.code,{children:"shift_x: float, shift_y: float"}),")\uff1a\u79fb\u52d5\u908a\u754c\u6846\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"scale"}),"(",(0,o.jsx)(e.code,{children:"dsize: Tuple[int, int] = None, fx: float = None, fy: float = None"}),")\uff1a\u7e2e\u653e\u908a\u754c\u6846\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"to_list"}),"()\uff1a\u5c07\u908a\u754c\u6846\u8f49\u63db\u70ba\u5217\u8868\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"to_polygons"}),"()\uff1a\u5c07\u908a\u754c\u6846\u8f49\u63db\u70ba\u591a\u908a\u5f62(docsaidkit.Polygons)\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nboxes = D.Boxes([[10, 20, 50, 80], [20, 30, 60, 90]])\nprint(boxes)\n# >>> Boxes([[10. 20. 50. 80.], [20. 30. 60. 90.]]), BoxMode.XYXY\n\nboxes1 = boxes.convert(D.BoxMode.XYWH)\nprint(boxes1)\n# >>> Boxes([[10. 20. 40. 60.], [20. 30. 40. 60.]]), BoxMode.XYWH\n\nboxes2 = boxes.normalize(100, 100)\nprint(boxes2)\n# >>> Boxes([[0.1 0.2 0.5 0.8], [0.2 0.3 0.6 0.9]]), BoxMode.XYXY\n\nboxes3 = boxes.denormalize(100, 100)\nprint(boxes3)\n# >>> Boxes([[1000. 2000. 5000. 8000.], [2000. 3000. 6000. 9000.]]), BoxMode.XYXY\n\nboxes4 = boxes.clip(0, 0, 50, 50)\nprint(boxes4)\n# >>> Boxes([[10. 20. 50. 50.], [20. 30. 50. 50.]]), BoxMode.XYXY\n\nboxes5 = boxes.shift(10, 10)\nprint(boxes5)\n# >>> Boxes([[20. 30. 60. 90.], [30. 40. 70. 100.]]), BoxMode.XYXY\n\nboxes6 = boxes.scale(dsize=(10, 10))\nprint(boxes6)\n# >>> Boxes([[5. 15. 55. 85.], [15. 25. 65. 95.]]), BoxMode.XYXY\n\nboxes7 = boxes.square()\nprint(boxes7)\n# >>> Boxes([[0. 20. 60. 80.], [10. 30. 70. 90.]]), BoxMode.XYXY\n\nboxes8 = boxes.to_list()\nprint(boxes8)\n# >>> [[10.0, 20.0, 50.0, 80.0], [20.0, 30.0, 60.0, 90.0]]\n\npolys = boxes.to_polygons() # Notice: It's different from Box.to_polygon()\nprint(polys)\n# >>> Polygons([\n#       Polygon([\n#           [10. 20.]\n#           [50. 20.]\n#           [50. 80.]\n#           [10. 80.]\n#       ]),\n#       Polygon([\n#           [20. 30.]\n#           [60. 30.]\n#           [60. 90.]\n#           [20. 90.]\n#       ])\n#    ])\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(x,{...n})}):x(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>d});var o=s(96540);const i={},t=o.createContext(i);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);