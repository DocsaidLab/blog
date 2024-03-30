"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4055],{6394:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var e=i(4848),r=i(8453);const l={sidebar_position:5},o="Polygons",c={id:"docsaidkit/structures/polygons",title:"Polygons",description:"Polygons(array bool = False)",source:"@site/docs/docsaidkit/structures/polygons.md",sourceDirName:"docsaidkit/structures",slug:"/docsaidkit/structures/polygons",permalink:"/docsaidkit/structures/polygons",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Polygon",permalink:"/docsaidkit/structures/polygon"},next:{title:"mixins",permalink:"/category/mixins"}},t={},d=[];function x(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h1,{id:"polygons",children:"Polygons"}),"\n",(0,e.jsxs)(s.blockquote,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/structures/polygons.py#L328",children:"Polygons(array: _Polygons, normalized: bool = False)"})}),"\n"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a"]}),"\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.code,{children:"Polygons"})," \u662f\u4e00\u500b\u7528\u4f86\u8868\u793a\u591a\u500b\u591a\u908a\u5f62\u7684\u985e\u5225\u3002\u9019\u500b\u985e\u5225\u63d0\u4f9b\u4e86\u8a31\u591a\u65b9\u6cd5\uff0c\u7528\u4f86\u64cd\u4f5c\u591a\u500b\u591a\u908a\u5f62\u7684\u5ea7\u6a19\uff0c\u4f8b\u5982\uff1a\u6b63\u898f\u5316\u5ea7\u6a19\u3001\u53cd\u6b63\u898f\u5316\u5ea7\u6a19\u3001\u88c1\u526a\u591a\u908a\u5f62\u3001\u79fb\u52d5\u591a\u908a\u5f62\u3001\u7e2e\u653e\u591a\u908a\u5f62\u3001\u8f49\u63db\u591a\u908a\u5f62\u70ba\u51f8\u591a\u908a\u5f62\u3001\u8f49\u63db\u591a\u908a\u5f62\u70ba\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u3001\u8f49\u63db\u591a\u908a\u5f62\u70ba\u908a\u754c\u6846\u7b49\u7b49\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"array"})," (",(0,e.jsx)(s.code,{children:"_Polygons"}),")\uff1a\u591a\u500b\u591a\u908a\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"normalized"})," (",(0,e.jsx)(s.code,{children:"bool"}),")\uff1a\u662f\u5426\u70ba\u6b63\u898f\u5316\u591a\u908a\u5f62\u7684\u5ea7\u6a19\uff0c\u662f\u4e00\u500b\u5c6c\u6027\u6a19\u8a18\u3002\u9810\u8a2d\u70ba ",(0,e.jsx)(s.code,{children:"False"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u5c6c\u6027"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"normalized"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u6b63\u898f\u5316\u72c0\u614b\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"moments"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u77e9\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"area"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u9762\u7a4d\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"arclength"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u5468\u9577\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"centroid"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u8cea\u5fc3\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"boundingbox"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u908a\u754c\u6846\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"min_circle"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u6700\u5c0f\u5916\u63a5\u5713\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"min_box"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"orientation"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u65b9\u5411\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"min_box_wh"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u7684\u5bec\u9ad8\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"extent"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u5360\u6bd4\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"solidity"}),"\uff1a\u53d6\u5f97\u591a\u908a\u5f62\u7684\u5be6\u5fc3\u5ea6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u65b9\u6cd5"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"copy"}),"()\uff1a\u8907\u88fd\u591a\u908a\u5f62\u7269\u4ef6\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"numpy"}),"()\uff1a\u5c07\u591a\u908a\u5f62\u7269\u4ef6\u8f49\u63db\u70ba numpy \u9663\u5217\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"normalize"}),"(",(0,e.jsx)(s.code,{children:"w: float, h: float"}),")\uff1a\u6b63\u898f\u5316\u591a\u908a\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"denormalize"}),"(",(0,e.jsx)(s.code,{children:"w: float, h: float"}),")\uff1a\u53cd\u6b63\u898f\u5316\u591a\u908a\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"clip"}),"(",(0,e.jsx)(s.code,{children:"xmin: int, ymin: int, xmax: int, ymax: int"}),")\uff1a\u88c1\u526a\u591a\u908a\u5f62\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"shift"}),"(",(0,e.jsx)(s.code,{children:"shift_x: float, shift_y: float"}),")\uff1a\u79fb\u52d5\u591a\u908a\u5f62\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"scale"}),"(",(0,e.jsx)(s.code,{children:"distance: int, join_style: JOIN_STYLE = JOIN_STYLE.mitre"}),")\uff1a\u7e2e\u653e\u591a\u908a\u5f62\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"to_convexhull"}),"()\uff1a\u5c07\u591a\u908a\u5f62\u8f49\u63db\u70ba\u51f8\u591a\u908a\u5f62\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"to_min_boxpoints"}),"()\uff1a\u5c07\u591a\u908a\u5f62\u8f49\u63db\u70ba\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"to_box"}),"(",(0,e.jsx)(s.code,{children:"box_mode: str = 'xyxy'"}),")\uff1a\u5c07\u591a\u908a\u5f62\u8f49\u63db\u70ba\u908a\u754c\u6846\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"to_list"}),"(",(0,e.jsx)(s.code,{children:"flatten: bool = False"}),")\uff1a\u5c07\u591a\u908a\u5f62\u8f49\u63db\u70ba\u5217\u8868\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"is_empty"}),"(",(0,e.jsx)(s.code,{children:"threshold: int = 3"}),")\uff1a\u5224\u65b7\u591a\u908a\u5f62\u662f\u5426\u70ba\u7a7a\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u985e\u5225\u5efa\u69cb"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"from_image"}),"(",(0,e.jsx)(s.code,{children:"image: np.ndarray, mode: int = cv2.RETR_EXTERNAL, method: int = cv2.CHAIN_APPROX_SIMPLE"}),")\uff1a\u5f9e\u5f71\u50cf\u4e2d\u53d6\u5f97\u591a\u908a\u5f62\u7684\u5ea7\u6a19\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"cat"}),"(",(0,e.jsx)(s.code,{children:'polygons_list: List["Polygons"]'}),")\uff1a\u5c07\u591a\u500b\u591a\u908a\u5f62\u5217\u8868\u4e32\u63a5\u6210\u4e00\u500b\u591a\u908a\u5f62\u5217\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\npolygons = D.Polygons([[[10., 20.], [50, 20.], [50, 80.], [10., 80.]]])\nprint(polygons)\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(x,{...n})}):x(n)}},8453:(n,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var e=i(6540);const r={},l=e.createContext(r);function o(n){const s=e.useContext(l);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),e.createElement(l.Provider,{value:s},n.children)}}}]);