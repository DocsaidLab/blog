"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5540],{37388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const o={sidebar_position:3},s="imrotate",a={id:"docsaidkit/funcs/vision/geometric/imrotate",title:"imrotate",description:"imrotate(img float, scale Union[str, int, INTER] = INTER.BILINEAR, bordertype Union[int, Tuple[int, int, int]] = None, expand Tuple[int, int] = None) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/geometric/imrotate.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imrotate",permalink:"/en/docsaidkit/funcs/vision/geometric/imrotate",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"imrotate90",permalink:"/en/docsaidkit/funcs/vision/geometric/imrotate90"},next:{title:"imwarp_quadrangle",permalink:"/en/docsaidkit/funcs/vision/geometric/imwarp_quadrangle"}},d={},c=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"imrotate",children:"imrotate"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L80C1-L153C1",children:"imrotate(img: np.ndarray, angle: float, scale: float = 1, interpolation: Union[str, int, INTER] = INTER.BILINEAR, bordertype: Union[str, int, BORDER] = BORDER.CONSTANT, bordervalue: Union[int, Tuple[int, int, int]] = None, expand: bool = True, center: Tuple[int, int] = None) -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description"}),": Rotate the input image."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"img"})," (",(0,i.jsx)(n.code,{children:"np.ndarray"}),"): Input image to be rotated."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"angle"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Rotation angle in degrees, counterclockwise."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"scale"})," (",(0,i.jsx)(n.code,{children:"float"}),"): Scale factor. Default is 1."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"interpolation"})," (",(0,i.jsx)(n.code,{children:"Union[str, int, INTER]"}),"): Interpolation method. Available options are: INTER.NEAREST, INTER.LINEAR, INTER.CUBIC, INTER.LANCZOS4. Default is INTER.LINEAR."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"border_type"})," (",(0,i.jsx)(n.code,{children:"Union[str, int, BORDER]"}),"): Border type. Available options are: BORDER.CONSTANT, BORDER.REPLICATE, BORDER.REFLECT, BORDER.REFLECT_101. Default is BORDER.CONSTANT."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"border_value"})," (",(0,i.jsx)(n.code,{children:"Union[int, Tuple[int, int, int]]"}),"): Value used for padding borders. Only valid when border_type is BORDER.CONSTANT. Default is None."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"expand"})," (",(0,i.jsx)(n.code,{children:"bool"}),"): Whether to expand the output image to accommodate the entire rotated image. If True, the output image is expanded to be large enough to accommodate the entire rotated image. If False or omitted, the output image is the same size as the input image. Note that the expand flag assumes rotation around the center and no translation. Default is False."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"center"})," (",(0,i.jsx)(n.code,{children:"Tuple[int, int]"}),"): Rotation center. Default is the center of the image."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"np.ndarray"}),": Rotated image."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nrotate_img = D.imrotate(img, 45, bordertype=D.BORDER.CONSTANT, expand=True)\n\n# Resize the rotated image to the original size for visualization\nrotate_img = D.imresize(rotate_img, [img.shape[0], img.shape[1]])\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"imrotate",src:t(9798).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9798:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/test_imrotate-1938f829e04524ce3e3231727433ee25.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);