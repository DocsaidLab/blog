"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2710],{40464:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=o(74848),s=o(28453);const i={sidebar_position:1},c="Document",r={id:"docsaidkit/funcs/objects/document",title:"Document",description:"Document(image Optional[Polygon] = None, doctype Optional[List[str] = None, ocrpolygons Optional[dict] = None)]",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/objects/document.md",sourceDirName:"docsaidkit/funcs/objects",slug:"/docsaidkit/funcs/objects/document",permalink:"/en/docsaidkit/funcs/objects/document",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713493386e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Objects",permalink:"/en/category/objects"},next:{title:"Files",permalink:"/en/category/files"}},l={},d=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"document",children:"Document"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/document.py#L61",children:"Document(image: Optional[np.ndarray] = None, doc_polygon: Optional[Polygon] = None, doc_type: Optional[str] = None, ocr_texts: Optional[List[str] = None, ocr_polygons: Optional[Polygons] = None, ocr_kie: Optional[dict] = None)]"})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Description"})}),"\n",(0,t.jsx)(e.p,{children:"Document class, which includes document image, document polygon, document type, OCR texts, OCR polygons, and OCR key information extraction (KIE). This class is used to integrate the outputs of multiple models and consolidate various aspects of information."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"image"})," (",(0,t.jsx)(e.code,{children:"Optional[np.ndarray]"}),"): Document image."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"doc_polygon"})," (",(0,t.jsx)(e.code,{children:"Optional[Polygon]"}),"): Document polygon."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"doc_type"})," (",(0,t.jsx)(e.code,{children:"Optional[str]"}),"): Document type."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ocr_texts"})," (",(0,t.jsx)(e.code,{children:"Optional[List[str]]"}),"): OCR texts."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ocr_polygons"})," (",(0,t.jsx)(e.code,{children:"Optional[Polygons]"}),"): OCR polygons."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ocr_kie"})," (",(0,t.jsx)(e.code,{children:"Optional[dict]"}),"): OCR key information extraction."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Attributes"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"has_doc_polygon"}),": Indicates whether there is a document polygon."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"has_ocr_polygons"}),": Indicates whether there are OCR polygons."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"has_ocr_texts"}),": Indicates whether there are OCR texts."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"doc_flat_img"}),": Cropped image based on the document polygon."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"doc_polygon_angle"}),": Angle of the document polygon."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Methods"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"be_jsonable(exclude_image: bool = True) -> dict"}),": Converts the document class to a JSON serializable dictionary."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"gen_doc_flat_img(image_size: Optional[Tuple[int, int]] = None) -> np.ndarray"}),": Generates the cropped image based on the document polygon."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"gen_doc_info_image(thickness: Optional[int] = None) -> np.ndarray"}),": Generates an information image of the document polygon."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"gen_ocr_info_image() -> np.ndarray"}),": Generates an information image of the OCR."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"get_path(folder: str = None, name: str = None) -> Path"}),": Gets the path of the document."]}),"\n",(0,t.jsxs)(e.li,{children:["**draw_doc(folder: Optional[str] = None, name: Optional[str] = None, ",(0,t.jsx)(e.strong,{children:"kwargs) -> None"}),": Draws an information image of the document polygon."]}),"\n",(0,t.jsxs)(e.li,{children:["**draw_ocr(folder: Optional[str] = None, name: Optional[str] = None, ",(0,t.jsx)(e.strong,{children:"kwargs) -> None"}),": Draws an information image of the OCR."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\ndoc = D.Document()\ndoc.doc_polygon = D.Polygon([[100, 100], [200, 100], [200, 200], [100, 200]])\ndoc.doc_type = 'ID'\ndoc.ocr_texts = ['Name: Alice', 'ID: 123456']\ndoc.ocr_polygons = D.Polygons([[[100, 100], [200, 100], [200, 200], [100, 200]]])\ndoc.ocr_kie = {'Name': 'Alice', 'ID': '123456'}\nprint(doc)\n# >>> Document(\n#       image=None,\n#       doc_polygon=Polygon([[100, 100],\n#                            [200, 100],\n#                            [200, 200],\n#                            [100, 200]]),\n#       doc_type='ID',\n#       ocr_texts=['Name: Alice', 'ID: 123456'],\n#       ocr_polygons=Polygons([[[100, 100],\n#                               [200, 100],\n#                               [200, 200],\n#                               [100, 200]]]),\n#       ocr_kie={'Name': 'Alice', 'ID': '123456'})\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>r});var t=o(96540);const s={},i=t.createContext(s);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);