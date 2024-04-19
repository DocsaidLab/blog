"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8984],{15924:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=e(74848),i=e(28453);const t={sidebar_position:2},r="Box",d={id:"docsaidkit/funcs/structures/box",title:"Box",description:"Box(array _BoxMode = BoxMode.XYXY, normalized: bool = False) -> None",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/structures/box.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/box",permalink:"/en/docsaidkit/funcs/structures/box",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713493386e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"BoxMode",permalink:"/en/docsaidkit/funcs/structures/box_mode"},next:{title:"Boxes",permalink:"/en/docsaidkit/funcs/structures/boxes"}},l={},c=[];function x(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"box",children:"Box"}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/boxes.py#L106",children:"Box(array: _Box, box_mode: _BoxMode = BoxMode.XYXY, normalized: bool = False) -> None"})}),"\n"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Description"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"Box"})," is a class designed to represent bounding boxes. It offers numerous methods for manipulating bounding box coordinates such as converting coordinate systems, normalizing coordinates, denormalizing coordinates, cropping, moving, and scaling bounding boxes, among others."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"array"})," (",(0,s.jsx)(o.code,{children:"_Box"}),"): A bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"box_mode"})," (",(0,s.jsx)(o.code,{children:"_BoxMode"}),"): An enumeration class that represents the different ways of defining a bounding box, with the default format being ",(0,s.jsx)(o.code,{children:"XYXY"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"normalized"})," (",(0,s.jsx)(o.code,{children:"bool"}),"): Indicates whether the bounding box coordinates are normalized. Default is ",(0,s.jsx)(o.code,{children:"False"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Attributes"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"box_mode"}),": Retrieves the representation mode of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"normalized"}),": Retrieves the normalization status of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"width"}),": Retrieves the width of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"height"}),": Retrieves the height of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"left_top"}),": Retrieves the top-left corner of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"right_bottom"}),": Retrieves the bottom-right corner of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"left_bottom"}),": Retrieves the bottom-left corner of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"right_top"}),": Retrieves the top-right corner of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"area"}),": Retrieves the area of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"aspect_ratio"}),": Calculates the aspect ratio of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"center"}),": Calculates the center point of the bounding box."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Methods"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"convert"}),"(",(0,s.jsx)(o.code,{children:"to_mode: _BoxMode"}),"): Converts the format of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"copy"}),"(): Copies the bounding box object."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"numpy"}),"(): Converts the bounding box object to a numpy array."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"square"}),"(): Transforms the bounding box into a square bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"normalize"}),"(",(0,s.jsx)(o.code,{children:"w: int, h: int"}),"): Normalizes the coordinates of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"denormalize"}),"(",(0,s.jsx)(o.code,{children:"w: int, h: int"}),"): Denormalizes the coordinates of the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"clip"}),"(",(0,s.jsx)(o.code,{children:"xmin: int, ymin: int, xmax: int, ymax: int"}),"): Crops the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"shift"}),"(",(0,s.jsx)(o.code,{children:"shift_x: float, shift_y: float"}),"): Moves the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"scale"}),"(",(0,s.jsx)(o.code,{children:"dsize: Tuple[int, int] = None, fx: float = None, fy: float = None"}),"): Scales the bounding box."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"to_list"}),"(): Converts the bounding box to a list."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"to_polygon"}),"(): Converts the bounding box to a polygon (docsaidkit.Polygon)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Example"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"import docsaidkit as D\n\nbox = D.Box([10, 20, 50, 80])\nprint(box)\n# >>> Box([10. 20. 50. 80.]), BoxMode.XYXY\n\nbox1 = box.convert(D.BoxMode.XYWH)\nprint(box1)\n# >>> Box([10. 20. 40. 60.]), BoxMode.XYWH\n\nbox2 = box.normalize(100, 100)\nprint(box2)\n# >>> Box([0.1 0.2 0.5 0.8]), BoxMode.XYXY\n\nbox3 = box.denormalize(100, 100)\nprint(box3)\n# >>> Box([1000. 2000. 5000. 8000.]), BoxMode.XYXY\n\nbox4 = box.clip(0, 0, 50, 50)\nprint(box4)\n# >>> Box([10. 20. 50. 50.]), BoxMode.XYXY\n\nbox5 = box.shift(10, 10)\nprint(box5)\n# >>> Box([20. 30. 60. 90.]), BoxMode.XYXY\n\nbox6 = box.scale(dsize=(10, 10))\nprint(box6)\n# >>> Box([5. 15. 55. 85.]), BoxMode.XYXY\n\nbox7 = box.scale(fx=1.1, fy=1.1)\nprint(box7)\n# >>> Box([8. 17. 52. 83.]), BoxMode.XYXY\n\nbox8 = box.square()\nprint(box8)\n# >>> Box([10. 30. 50. 70.]), BoxMode.XYXY\n\nbox9 = box.to_list()\nprint(box9)\n# >>> [10.0, 20.0, 50.0, 80.0]\n\npoly = box.to_polygon()\nprint(poly)\n# >>> Polygon([[10. 20.], [50. 20.], [50. 80.], [10. 80.]])\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:o}={...(0,i.R)(),...n.components};return o?(0,s.jsx)(o,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>r,x:()=>d});var s=e(96540);const i={},t=s.createContext(i);function r(n){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function d(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(t.Provider,{value:o},n.children)}}}]);