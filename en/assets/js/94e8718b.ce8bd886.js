"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[829],{80962:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(74848),t=n(28453);const r={sidebar_position:1},o="imresize",c={id:"docsaidkit/funcs/vision/geometric/imresize",title:"imresize",description:"imresize(img Tuple[int, int], interpolation bool = False) -> Union[np.ndarray, Tuple[np.ndarray, float, float]]",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/geometric/imresize.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imresize",permalink:"/en/docs/docsaidkit/funcs/vision/geometric/imresize",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"geometric",permalink:"/en/docs/category/geometric"},next:{title:"imrotate90",permalink:"/en/docs/docsaidkit/funcs/vision/geometric/imrotate90"}},a={},l=[];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"imresize",children:"imresize"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L15",children:"imresize(img: np.ndarray, size: Tuple[int, int], interpolation: Union[str, int, INTER] = INTER.BILINEAR, return_scale: bool = False) -> Union[np.ndarray, Tuple[np.ndarray, float, float]]"})}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Description"}),": Resize the input image."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Parameters"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"img"})," (",(0,s.jsx)(i.code,{children:"np.ndarray"}),"): Input image to be resized."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"size"})," (",(0,s.jsx)(i.code,{children:"Tuple[int, int]"}),"): Size of the resized image. If only one dimension is given, the other dimension is calculated while maintaining the aspect ratio of the original image."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"interpolation"})," (",(0,s.jsx)(i.code,{children:"Union[str, int, INTER]"}),"): Interpolation method. Available options are: INTER.NEAREST, INTER.LINEAR, INTER.CUBIC, INTER.LANCZOS4. Default is INTER.LINEAR."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"return_scale"})," (",(0,s.jsx)(i.code,{children:"bool"}),"): Whether to return the scaling factor. Default is False."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"np.ndarray"}),": Resized image."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Tuple[np.ndarray, float, float]"}),": Resized image and scaling factors for width and height."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\n\n# Resize the image to H=256, W=256\nresized_img = D.imresize(img, [256, 256])\n\n# Resize the image to H=256, keep the aspect ratio\nresized_img = D.imresize(img, [256, None])\n\n# Resize the image to W=256, keep the aspect ratio\nresized_img = D.imresize(img, [None, 256])\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>c});var s=n(96540);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);