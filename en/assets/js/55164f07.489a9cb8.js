"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7305],{25213:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=i(74848),s=i(28453);const t={sidebar_position:5},o="imwarp_quadrangles",a={id:"docsaidkit/funcs/vision/geometric/imwarp_quadrangles",title:"imwarp_quadrangles",description:"imwarp_quadrangles(img Union[Polygons, np.ndarray]) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/geometric/imwarp_quadrangles.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imwarp_quadrangles",permalink:"/en/docs/docsaidkit/funcs/vision/geometric/imwarp_quadrangles",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"imwarp_quadrangle",permalink:"/en/docs/docsaidkit/funcs/vision/geometric/imwarp_quadrangle"},next:{title:"imporc",permalink:"/en/docs/category/imporc"}},c={},d=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"imwarp_quadrangles",children:"imwarp_quadrangles"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L206",children:"imwarp_quadrangles(img: np.ndarray, polygons: Union[Polygons, np.ndarray]) -> np.ndarray"})}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Description"}),': Apply perspective transformation to the input image using the 4 points defined by the given "multiple" polygons. The function automatically sorts the four points in the order: the first point is the top-left corner, the second point is the top-right corner, the third point is the bottom-right corner, and the fourth point is the bottom-left corner. The target size of the image transformation is determined by the width and height of the minimum bounding rectangle of the polygons.']}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"img"})," (",(0,r.jsx)(e.code,{children:"np.ndarray"}),"): Input image to be transformed."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"polygons"})," (",(0,r.jsx)(e.code,{children:"Union[Polygons, np.ndarray]"}),'): Polygon objects containing the four points defining the transformation for "multiple" polygons.']}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"List[np.ndarray]"}),": List of transformed images."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('./resource/test_warp.jpg')\npolygons = D.Polygons([[[602, 404], [1832, 530], [1588, 985], [356, 860]]])\nwarp_imgs = D.imwarp_quadrangles(img, polygons)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Please refer to the picture ",(0,r.jsx)(e.a,{href:"/en/docs/docsaidkit/funcs/vision/geometric/imwarp_quadrangle",children:(0,r.jsx)(e.strong,{children:"imwarp_quadrangle"})}),"\u3002"]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var r=i(96540);const s={},t=r.createContext(s);function o(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);