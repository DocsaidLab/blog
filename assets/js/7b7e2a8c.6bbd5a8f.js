"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6168],{29611:(n,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>e,metadata:()=>t,toc:()=>d});var l=s(74848),i=s(28453);const e={sidebar_position:4},r="Polygon",t={id:"docsaidkit/funcs/structures/polygon",title:"Polygon",description:"Polygon(array bool = False)",source:"@site/docs/docsaidkit/funcs/structures/polygon.md",sourceDirName:"docsaidkit/funcs/structures",slug:"/docsaidkit/funcs/structures/polygon",permalink:"/docsaidkit/funcs/structures/polygon",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713019707e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Boxes",permalink:"/docsaidkit/funcs/structures/boxes"},next:{title:"Polygons",permalink:"/docsaidkit/funcs/structures/polygons"}},c={},d=[];function x(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.h1,{id:"polygon",children:"Polygon"}),"\n",(0,l.jsxs)(o.blockquote,{children:["\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/polygons.py#L64",children:"Polygon(array: _Polygon, normalized: bool = False)"})}),"\n"]}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.strong,{children:"\u8aaa\u660e"}),"\uff1a"]}),"\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.code,{children:"Polygon"})," \u662f\u4e00\u500b\u7528\u4f86\u8868\u793a\u591a\u908a\u5f62\u7684\u985e\u5225\u3002\u9019\u500b\u985e\u5225\u63d0\u4f9b\u4e86\u8a31\u591a\u65b9\u6cd5\uff0c\u7528\u4f86\u64cd\u4f5c\u591a\u908a\u5f62\u7684\u5ea7\u6a19\uff0c\u4f8b\u5982\uff1a\u6b63\u898f\u5316\u5ea7\u6a19\u3001\u53cd\u6b63\u898f\u5316\u5ea7\u6a19\u3001\u88c1\u526a\u591a\u908a\u5f62\u3001\u79fb\u52d5\u591a\u908a\u5f62\u3001\u7e2e\u653e\u591a\u908a\u5f62\u3001\u8f49\u63db\u591a\u908a\u5f62\u70ba\u51f8\u591a\u908a\u5f62\u3001\u8f49\u63db\u591a\u908a\u5f62\u70ba\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u3001\u8f49\u63db\u591a\u908a\u5f62\u70ba\u908a\u754c\u6846\u7b49\u7b49\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"\u53c3\u6578"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"array"})," (",(0,l.jsx)(o.code,{children:"_Polygon"}),")\uff1a\u591a\u908a\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"normalized"})," (",(0,l.jsx)(o.code,{children:"bool"}),")\uff1a\u662f\u5426\u70ba\u6b63\u898f\u5316\u591a\u908a\u5f62\u7684\u5ea7\u6a19\uff0c\u662f\u4e00\u500b\u5c6c\u6027\u6a19\u8a18\u3002\u9810\u8a2d\u70ba ",(0,l.jsx)(o.code,{children:"False"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"\u5c6c\u6027"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"normalized"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u6b63\u898f\u5316\u72c0\u614b\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"moments"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u77e9\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"area"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u9762\u7a4d\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"arclength"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u5468\u9577\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"centroid"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u8cea\u5fc3\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"boundingbox"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u908a\u754c\u6846\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"min_circle"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u6700\u5c0f\u5916\u63a5\u5713\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"min_box"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"orientation"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u65b9\u5411\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"min_box_wh"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u7684\u5bec\u9ad8\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"extent"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u5360\u6bd4\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"solidity"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u5be6\u5fc3\u5ea6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"copy"}),"()\uff1a\u8907\u88fd\u591a\u908a\u5f62\u7269\u4ef6\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"numpy"}),"()\uff1a\u5c07\u591a\u908a\u5f62\u7269\u4ef6\u8f49\u63db\u70ba numpy \u9663\u5217\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"normalize"}),"(",(0,l.jsx)(o.code,{children:"w: float, h: float"}),")\uff1a\u6b63\u898f\u5316\u591a\u908a\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"denormalize"}),"(",(0,l.jsx)(o.code,{children:"w: float, h: float"}),")\uff1a\u53cd\u6b63\u898f\u5316\u591a\u908a\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"clip"}),"(",(0,l.jsx)(o.code,{children:"xmin: int, ymin: int, xmax: int, ymax: int"}),")\uff1a\u88c1\u526a\u591a\u908a\u5f62\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"shift"}),"(",(0,l.jsx)(o.code,{children:"shift_x: float, shift_y: float"}),")\uff1a\u79fb\u52d5\u591a\u908a\u5f62\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"scale"}),"(",(0,l.jsx)(o.code,{children:"distance: int, join_style: JOIN_STYLE = JOIN_STYLE.mitre"}),")\uff1a\u7e2e\u653e\u591a\u908a\u5f62\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"to_convexhull"}),"()\uff1a\u5c07\u591a\u908a\u5f62\u8f49\u63db\u70ba\u51f8\u591a\u908a\u5f62\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"to_min_boxpoints"}),"()\uff1a\u5c07\u591a\u908a\u5f62\u8f49\u63db\u70ba\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"to_box"}),"(",(0,l.jsx)(o.code,{children:"box_mode: str = 'xyxy'"}),")\uff1a\u5c07\u591a\u908a\u5f62\u8f49\u63db\u70ba\u908a\u754c\u6846\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"to_list"}),"(",(0,l.jsx)(o.code,{children:"flatten: bool = False"}),")\uff1a\u5c07\u591a\u908a\u5f62\u8f49\u63db\u70ba\u5217\u8868\u3002"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.strong,{children:"is_empty"}),"(",(0,l.jsx)(o.code,{children:"threshold: int = 3"}),")\uff1a\u5224\u65b7\u591a\u908a\u5f62\u662f\u5426\u70ba\u7a7a\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(o.li,{children:["\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-python",children:"import docsaidkit as D\n\npolygon = D.Polygon([[10., 20.], [50, 20.], [50, 80.], [10., 80.]])\nprint(polygon)\n# >>> Polygon([[10. 20.], [50. 20.], [50. 80.], [10. 80.]])\n\npolygon1 = polygon.normalize(100, 100)\nprint(polygon1)\n# >>> Polygon([[0.1 0.2], [0.5 0.2], [0.5 0.8], [0.1 0.8]])\n\npolygon2 = polygon.denormalize(100, 100)\nprint(polygon2)\n# >>> Polygon([[1000. 2000.], [5000. 2000.], [5000. 8000.], [1000. 8000.]])\n\npolygon3 = polygon.clip(20, 20, 60, 60)\nprint(polygon3)\n# >>> Polygon([[20. 20.], [50. 20.], [50. 60.], [20. 60.]])\n\npolygon4 = polygon.shift(10, 10)\nprint(polygon4)\n# >>> Polygon([[20. 30.], [60. 30.], [60. 90.], [20. 90.]])\n\npolygon5 = polygon.scale(10)\nprint(polygon5)\n# >>> Polygon([[0. 10.], [60. 10.], [60. 90.], [0. 90.]])\n\npolygon6 = polygon.to_convexhull()\nprint(polygon6)\n# >>> Polygon([[50. 80.], [10. 80.], [10. 20.], [50. 20.]])\n\npolygon7 = polygon.to_min_boxpoints()\nprint(polygon7)\n# >>> Polygon([[10. 20.], [50. 20.], [50. 80.], [10. 80.]])\n\npolygon8 = polygon.to_box('xywh')\nprint(polygon8)\n# >>> Box([10. 20. 40. 60.]), BoxMode.XYWH\n\npolygon9 = polygon.to_list()\nprint(polygon9)\n# >>> [[10.0, 20.0], [50.0, 20.0], [50.0, 80.0], [10.0, 80.0]]\n\npolygon10 = polygon.is_empty()\nprint(polygon10)\n# >>> False\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:o}={...(0,i.R)(),...n.components};return o?(0,l.jsx)(o,{...n,children:(0,l.jsx)(x,{...n})}):x(n)}},28453:(n,o,s)=>{s.d(o,{R:()=>r,x:()=>t});var l=s(96540);const i={},e=l.createContext(i);function r(n){const o=l.useContext(e);return l.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function t(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(e.Provider,{value:o},n.children)}}}]);