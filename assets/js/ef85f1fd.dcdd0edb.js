"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1850],{15901:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var e=i(74848),r=i(28453);const o={sidebar_position:7},t="draw_ocr_infos",c={id:"docsaidkit/funcs/drawings/draw_ocr_infos",title:"draw_ocr_infos",description:"drawocrinfos(img List[str], polygons tuple = None, concataxis int = 2, fontpath: str = None) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/drawings/draw_ocr_infos.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_ocr_infos",permalink:"/docsaidkit/funcs/drawings/draw_ocr_infos",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171371528e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"draw_mask",permalink:"/docsaidkit/funcs/drawings/draw_mask"},next:{title:"ONNXEngine",permalink:"/category/onnxengine"}},d={},a=[];function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h1,{id:"draw_ocr_infos",children:"draw_ocr_infos"}),"\n",(0,e.jsxs)(s.blockquote,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L308",children:"draw_ocr_infos(img: np.ndarray, texts: List[str], polygons: Polygons, colors: tuple = None, concat_axis: int = 1, thicknesses: int = 2, font_path: str = None) -> np.ndarray"})}),"\n"]}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:[(0,e.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5728\u5f71\u50cf\u4e0a\u7e6a\u88fd OCR \u7d50\u679c\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"img"})," (",(0,e.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u7e6a\u88fd\u7684\u5f71\u50cf\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"texts"})," (",(0,e.jsx)(s.code,{children:"List[str]"}),")\uff1a\u5075\u6e2c\u5230\u7684\u6587\u5b57\u5b57\u4e32\u5217\u8868\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"polygons"})," (",(0,e.jsx)(s.code,{children:"D.Polygons"}),")\uff1a\u8868\u793a\u5075\u6e2c\u5230\u7684\u6587\u5b57\u908a\u754c\u7684\u591a\u908a\u5f62\u5217\u8868\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"colors"})," (",(0,e.jsx)(s.code,{children:"tuple"}),")\uff1a\u7e6a\u88fd\u984f\u8272\u7684 RGB \u503c\u3002\u5982\u679c\u672a\u63d0\u4f9b\uff0c\u5247\u70ba\u6bcf\u500b\u6587\u5b57\u6839\u64da\u56fa\u5b9a\u7684\u908f\u8f2f\u751f\u6210\u552f\u4e00\u984f\u8272\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"concat_axis"})," (",(0,e.jsx)(s.code,{children:"int"}),")\uff1a\u7528\u65bc\u4e32\u63a5\u539f\u59cb\u5f71\u50cf\u548c\u6a19\u6ce8\u5f71\u50cf\u7684\u8ef8\u3002\u9810\u8a2d\u70ba 1 (\u6c34\u5e73)\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"thicknesses"})," (",(0,e.jsx)(s.code,{children:"int"}),")\uff1a\u7e6a\u88fd\u591a\u908a\u5f62\u7684\u7c97\u7d30\u3002\u9810\u8a2d\u70ba 2\u3002"]}),"\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"font_path"})," (",(0,e.jsx)(s.code,{children:"str"}),')\uff1a\u8981\u4f7f\u7528\u7684\u5b57\u578b\u6a94\u6848\u7684\u8def\u5f91\u3002\u5982\u679c\u672a\u63d0\u4f9b\uff0c\u5247\u4f7f\u7528\u9810\u8a2d\u5b57\u578b "NotoSansMonoCJKtc-VF.ttf"\u3002']}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:[(0,e.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u4e32\u63a5\u4e86\u539f\u59cb\u5f71\u50cf\u548c\u6a19\u6ce8\u5f71\u50cf\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\ntexts = ['Hello!', 'Test!']\npolygons = [\n    D.Polygon([(20, 20), (100, 20), (80, 80), (20, 40)]),\n    D.Polygon([(100, 200), (20, 200), (40, 140), (100, 180)])\n]\nocr_img = D.draw_ocr_infos(img, texts, polygons, concat_axis=1, thicknesses=2)\n"})}),"\n",(0,e.jsx)(s.p,{children:(0,e.jsx)(s.img,{alt:"draw_ocr_infos",src:i(21505).A+"",width:"512",height:"256"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},21505:(n,s,i)=>{i.d(s,{A:()=>e});const e=i.p+"assets/images/test_draw_ocr_infos-5efd9a24aaa469a4be5bfeb76d4b6b73.jpg"},28453:(n,s,i)=>{i.d(s,{R:()=>t,x:()=>c});var e=i(96540);const r={},o=e.createContext(r);function t(n){const s=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),e.createElement(o.Provider,{value:s},n.children)}}}]);