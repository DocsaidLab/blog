"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6594],{85424:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=i(74848),s=i(28453);const r={sidebar_position:7},t="imcropbox",c={id:"docsaidkit/funcs/vision/functionals/imcropbox",title:"imcropbox",description:"imcropbox(img Union[Box, np.ndarray], use_pad: bool = False) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/functionals/imcropbox.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/imcropbox",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/imcropbox",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719623898e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"imbinarize",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/imbinarize"},next:{title:"imcropboxes",permalink:"/en/docs/docsaidkit/funcs/vision/functionals/imcropboxes"}},d={},a=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"imcropbox",children:"imcropbox"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L257",children:"imcropbox(img: np.ndarray, box: Union[Box, np.ndarray], use_pad: bool = False) -> np.ndarray"})}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Description"}),": Crop the input image using the provided bounding box."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Parameters"}),":"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"img"})," (",(0,o.jsx)(e.code,{children:"np.ndarray"}),"): Input image to be cropped."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"box"})," (",(0,o.jsx)(e.code,{children:"Union[Box, np.ndarray]"}),"): Cropping box. Input can be a Box object customized by DocsaidKit, defined by coordinates (x1, y1, x2, y2), or a NumPy array with the same format."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"use_pad"})," (",(0,o.jsx)(e.code,{children:"bool"}),"): Whether to use padding to handle areas outside the boundaries. If set to True, the outer regions will be padded with zeros. Default is False."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"np.ndarray"}),": Cropped image."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\n# \u4f7f\u7528\u81ea\u5b9a\u7fa9 Box \u7269\u4ef6\nimg = D.imread('lena.png')\nbox = D.Box([50, 50, 200, 200], box_mode='xyxy')\ncropped_img = D.imcropbox(img, box, use_pad=True)\n\n# Resize the cropped image to the original size for visualization\ncropped_img = D.imresize(cropped_img, [img.shape[0], img.shape[1]])\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"imcropbox_box",src:i(54807).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},54807:(n,e,i)=>{i.d(e,{A:()=>o});const o=i.p+"assets/images/test_imcropbox-eb25b2219e00eeacef49aa1eef493662.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>c});var o=i(96540);const s={},r=o.createContext(s);function t(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);