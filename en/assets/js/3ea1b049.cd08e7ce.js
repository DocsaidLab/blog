"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1986],{27764:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(74848),o=s(28453);const i={sidebar_position:7},r="draw_ocr_infos",c={id:"docsaidkit/funcs/drawings/draw_ocr_infos",title:"draw_ocr_infos",description:"drawocrinfos(img List[str], polygons tuple = None, concataxis int = 2, fontpath: str = None) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/drawings/draw_ocr_infos.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_ocr_infos",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_ocr_infos",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"draw_mask",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_mask"},next:{title:"ONNXEngine",permalink:"/en/docs/category/onnxengine"}},d={},a=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"draw_ocr_infos",children:"draw_ocr_infos"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L308",children:"draw_ocr_infos(img: np.ndarray, texts: List[str], polygons: Polygons, colors: tuple = None, concat_axis: int = 1, thicknesses: int = 2, font_path: str = None) -> np.ndarray"})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Description"})}),"\n",(0,t.jsx)(e.p,{children:"Draw OCR (Optical Character Recognition) results on an image."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"img"})," (",(0,t.jsx)(e.code,{children:"np.ndarray"}),"): The image to draw on."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"texts"})," (",(0,t.jsx)(e.code,{children:"List[str]"}),"): List of detected text strings."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"polygons"})," (",(0,t.jsx)(e.code,{children:"D.Polygons"}),"): List of polygons representing the detected text boundaries."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"colors"})," (",(0,t.jsx)(e.code,{children:"tuple"}),"): RGB values of the colors to draw. If not provided, a unique color is generated for each text based on a fixed logic."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"concat_axis"})," (",(0,t.jsx)(e.code,{children:"int"}),"): The axis used to concatenate the original image and the annotated image. Defaults to 1 (horizontal)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"thicknesses"})," (",(0,t.jsx)(e.code,{children:"int"}),"): The thickness of the polygons to draw. Defaults to 2."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"font_path"})," (",(0,t.jsx)(e.code,{children:"str"}),'): Path to the font file to use. If not provided, the default font "NotoSansMonoCJKtc-VF.ttf" is used.']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"np.ndarray"}),": The image concatenated with the annotated image."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\ntexts = ['Hello!', 'Test!']\npolygons = [\n    D.Polygon([(20, 20), (100, 20), (80, 80), (20, 40)]),\n    D.Polygon([(100, 200), (20, 200), (40, 140), (100, 180)])\n]\nocr_img = D.draw_ocr_infos(img, texts, polygons, concat_axis=1, thicknesses=2)\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"draw_ocr_infos",src:s(97361).A+"",width:"512",height:"256"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},97361:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/test_draw_ocr_infos-5efd9a24aaa469a4be5bfeb76d4b6b73.jpg"},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var t=s(96540);const o={},i=t.createContext(o);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);