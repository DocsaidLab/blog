"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9043],{4118:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(74848),t=i(28453);const o={sidebar_position:4},s="imwarp_quadrangle",a={id:"docsaidkit/funcs/vision/geometric/imwarp_quadrangle",title:"imwarp_quadrangle",description:"imwarp_quadrangle(img Union[Polygon, np.ndarray]) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/geometric/imwarp_quadrangle.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imwarp_quadrangle",permalink:"/en/docsaidkit/funcs/vision/geometric/imwarp_quadrangle",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713493386e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"imrotate",permalink:"/en/docsaidkit/funcs/vision/geometric/imrotate"},next:{title:"imwarp_quadrangles",permalink:"/en/docsaidkit/funcs/vision/geometric/imwarp_quadrangles"}},d={},c=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"imwarp_quadrangle",children:"imwarp_quadrangle"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L155C1-L203C71",children:"imwarp_quadrangle(img: np.ndarray, polygon: Union[Polygon, np.ndarray]) -> np.ndarray"})}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Description"}),": Apply perspective transformation to the input image using the 4 points defined by the given polygon. The function automatically sorts the four points in the order: the first point is the top-left corner, the second point is the top-right corner, the third point is the bottom-right corner, and the fourth point is the bottom-left corner. The target size of the image transformation is determined by the width and height of the minimum bounding rectangle of the polygon."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"img"})," (",(0,r.jsx)(e.code,{children:"np.ndarray"}),"): Input image to be transformed."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"polygon"})," (",(0,r.jsx)(e.code,{children:"Union[Polygon, np.ndarray]"}),"): Polygon object containing the four points defining the transformation."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"np.ndarray"}),": Transformed image."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('./resource/test_warp.jpg')\npolygon = D.Polygon([[602, 404], [1832, 530], [1588, 985], [356, 860]])\nwarp_img = D.imwarp_quadrangle(img, polygon)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"imwarp_quadrangle",src:i(76728).A+"",width:"725",height:"256"})}),"\n",(0,r.jsx)(e.p,{children:"The green box in the above figure represents the original polygon range."}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},76728:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/test_imwarp_quadrangle-9b1226d91ee3973d3dea725c11ac0b7a.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>a});var r=i(96540);const t={},o=r.createContext(t);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);