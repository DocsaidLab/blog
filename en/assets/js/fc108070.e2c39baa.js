"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6592],{79844:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(74848),s=i(28453);const r={sidebar_position:2},o="imrotate90",c={id:"docsaidkit/funcs/vision/geometric/imrotate90",title:"imrotate90",description:"imrotate90(img ROTATE) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/vision/geometric/imrotate90.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imrotate90",permalink:"/en/docs/docsaidkit/funcs/vision/geometric/imrotate90",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"imresize",permalink:"/en/docs/docsaidkit/funcs/vision/geometric/imresize"},next:{title:"imrotate",permalink:"/en/docs/docsaidkit/funcs/vision/geometric/imrotate"}},d={},a=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"imrotate90",children:"imrotate90"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L66C1-L77C47",children:"imrotate90(img: np.ndarray, rotate_code: ROTATE) -> np.ndarray"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Description"}),": Rotate the input image by 90 degrees."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Parameters"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"img"})," (",(0,t.jsx)(n.code,{children:"np.ndarray"}),"): Input image to be rotated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"rotate_code"})," (",(0,t.jsx)(n.code,{children:"RotateCode"}),"): Rotation code. Available options are:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ROTATE.ROTATE_90: 90 degrees."}),"\n",(0,t.jsx)(n.li,{children:"ROTATE.ROTATE_180: 180 degrees."}),"\n",(0,t.jsx)(n.li,{children:"ROTATE.ROTATE_270: 90 degrees counterclockwise."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"np.ndarray"}),": Rotated image."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nrotate_img = D.imrotate90(img, D.ROTATE.ROTATE_270)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"imrotate90",src:i(30925).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},30925:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/test_imrotate90-bd0b67096a0c7d3531e941437d68d4e9.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);