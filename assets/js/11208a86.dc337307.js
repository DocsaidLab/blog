"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5296],{30475:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(74848),r=i(28453);const t={sidebar_position:1},o="imresize",c={id:"docsaidkit/funcs/vision/geometric/imresize",title:"imresize",description:"imresize(img Tuple[int, int], interpolation bool = False) -> Union[np.ndarray, Tuple[np.ndarray, float, float]]",source:"@site/docs/docsaidkit/funcs/vision/geometric/imresize.md",sourceDirName:"docsaidkit/funcs/vision/geometric",slug:"/docsaidkit/funcs/vision/geometric/imresize",permalink:"/docsaidkit/funcs/vision/geometric/imresize",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713019707e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"geometric",permalink:"/category/geometric"},next:{title:"imrotate90",permalink:"/docsaidkit/funcs/vision/geometric/imrotate90"}},l={},d=[];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"imresize",children:"imresize"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/geometric.py#L15",children:"imresize(img: np.ndarray, size: Tuple[int, int], interpolation: Union[str, int, INTER] = INTER.BILINEAR, return_scale: bool = False) -> Union[np.ndarray, Tuple[np.ndarray, float, float]]"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c0d\u8f38\u5165\u5f71\u50cf\u9032\u884c\u7e2e\u653e\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"img"})," (",(0,s.jsx)(n.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u7e2e\u653e\u8655\u7406\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"size"})," (",(0,s.jsx)(n.code,{children:"Tuple[int, int]"}),")\uff1a\u7e2e\u653e\u5f8c\u7684\u5f71\u50cf\u5927\u5c0f\u3002\u5982\u679c\u53ea\u7d66\u5b9a\u4e00\u500b\u7dad\u5ea6\uff0c\u5247\u4fdd\u6301\u539f\u59cb\u5f71\u50cf\u7684\u5bec\u9ad8\u6bd4\u8a08\u7b97\u53e6\u4e00\u500b\u7dad\u5ea6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"interpolation"})," (",(0,s.jsx)(n.code,{children:"Union[str, int, INTER]"}),")\uff1a\u63d2\u503c\u65b9\u6cd5\u3002\u53ef\u7528\u9078\u9805\u6709\uff1aINTER.NEAREST, INTER.LINEAR, INTER.CUBIC, INTER.LANCZOS4\u3002\u9810\u8a2d\u70ba INTER.LINEAR\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"return_scale"})," (",(0,s.jsx)(n.code,{children:"bool"}),")\uff1a\u662f\u5426\u8fd4\u56de\u7e2e\u653e\u6bd4\u4f8b\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"np.ndarray"}),"\uff1a\u7e2e\u653e\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tuple[np.ndarray, float, float]"}),"\uff1a\u7e2e\u653e\u5f8c\u7684\u5f71\u50cf\u548c\u5bec\u9ad8\u7e2e\u653e\u6bd4\u4f8b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\n\n# Resize the image to H=256, W=256\nresized_img = D.imresize(img, [256, 256])\n\n# Resize the image to H=256, keep the aspect ratio\nresized_img = D.imresize(img, [256, None])\n\n# Resize the image to W=256, keep the aspect ratio\nresized_img = D.imresize(img, [None, 256])\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);