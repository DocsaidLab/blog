"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[442],{66919:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var t=e(74848),s=e(28453);const a={sidebar_position:5},d="pad",l={id:"docsaidkit/funcs/vision/functionals/pad",title:"pad",description:"pad(img Union[int, Tuple[int, int], Tuple[int, int, int, int]], fillvalue Union[str, int, BORDER] = BORDER.CONSTANT) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/functionals/pad.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/pad",permalink:"/en/docsaidkit/funcs/vision/functionals/pad",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713493386e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"imadjust",permalink:"/en/docsaidkit/funcs/vision/functionals/imadjust"},next:{title:"imbinarize",permalink:"/en/docsaidkit/funcs/vision/functionals/imbinarize"}},o={},r=[];function c(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"pad",children:"pad"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L194",children:"pad(img: np.ndarray, pad_size: Union[int, Tuple[int, int], Tuple[int, int, int, int]], fill_value: Optional[Union[int, Tuple[int, int, int]]] = 0, pad_mode: Union[str, int, BORDER] = BORDER.CONSTANT) -> np.ndarray"})}),"\n"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Description"}),": Perform padding on the input image."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Parameters"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"img"})," (",(0,t.jsx)(i.code,{children:"np.ndarray"}),"): Input image to be padded."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"pad_size"})," (",(0,t.jsx)(i.code,{children:"Union[int, Tuple[int, int], Tuple[int, int, int, int]]"}),"): Padding size. It can be an integer to specify the same padding amount for all sides, a tuple ",(0,t.jsx)(i.code,{children:"(pad_top, pad_bottom, pad_left, pad_right)"})," to specify different padding amounts for each side, or a tuple ",(0,t.jsx)(i.code,{children:"(pad_height, pad_width)"})," to specify the same padding amount for height and width."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"fill_value"})," (",(0,t.jsx)(i.code,{children:"Optional[Union[int, Tuple[int, int, int]]]"}),"): Value used for padding. If the input image is a color image (3 channels), fill_value can be an integer or a tuple ",(0,t.jsx)(i.code,{children:"(R, G, B)"})," to specify the filling color. If the input image is a grayscale image (1 channel), fill_value should be an integer. Default is 0."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"pad_mode"})," (",(0,t.jsx)(i.code,{children:"Union[str, int, BORDER]"}),"): Padding mode. Available options are:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"BORDER.CONSTANT: Pad with constant values (fill_value)."}),"\n",(0,t.jsx)(i.li,{children:"BORDER.REPLICATE: Pad by replicating edge pixels."}),"\n",(0,t.jsx)(i.li,{children:"BORDER.REFLECT: Pad by reflecting the image around the edges."}),"\n",(0,t.jsx)(i.li,{children:"BORDER.REFLECT101: Pad by reflecting the image around the edges, with a slight adjustment to avoid artificial seams. Default is BORDER.CONSTANT."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"np.ndarray"}),": Padded image."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\npad_img = D.pad(img, pad_size=20, fill_value=(255, 0, 0))\n\n# Resize the padded image to the original size for visualization\npad_img = D.imresize(pad_img, [img.shape[0], img.shape[1]])\n"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"pad",src:e(75223).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},75223:(n,i,e)=>{e.d(i,{A:()=>t});const t=e.p+"assets/images/test_pad-73035954aa862b84f070f6481de0c9d4.jpg"},28453:(n,i,e)=>{e.d(i,{R:()=>d,x:()=>l});var t=e(96540);const s={},a=t.createContext(s);function d(n){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(a.Provider,{value:i},n.children)}}}]);