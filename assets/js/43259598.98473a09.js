"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4970],{25501:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=i(74848),e=i(28453);const r={sidebar_position:5},c="imadjust",o={id:"docsaidkit/funcs/vision/functionals/imadjust",title:"imadjust",description:"imadjust(img Tuple[int, int] = (0, 255), gamma str = 'BGR') -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/functionals/imadjust.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/imadjust",permalink:"/docsaidkit/funcs/vision/functionals/imadjust",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171281203e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"imcvtcolor",permalink:"/docsaidkit/funcs/vision/functionals/imcvtcolor"},next:{title:"pad",permalink:"/docsaidkit/funcs/vision/functionals/pad"}},d={},a=[];function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"imadjust",children:"imadjust"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L122",children:"imadjust(img: np.ndarray, rng_out: Tuple[int, int] = (0, 255), gamma: float = 1.0, color_base: str = 'BGR') -> np.ndarray"})}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u8abf\u6574\u5f71\u50cf\u7684\u5f37\u5ea6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"img"})," (",(0,t.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u9032\u884c\u5f37\u5ea6\u8abf\u6574\u7684\u8f38\u5165\u5f71\u50cf\u3002\u61c9\u70ba 2-D \u6216 3-D\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"rng_out"})," (",(0,t.jsx)(s.code,{children:"Tuple[int, int]"}),")\uff1a\u8f38\u51fa\u5f71\u50cf\u7684\u5f37\u5ea6\u76ee\u6a19\u7bc4\u570d\u3002\u9810\u8a2d\u70ba (0, 255)\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"gamma"})," (",(0,t.jsx)(s.code,{children:"float"}),")\uff1a\u7528\u65bc\u4f3d\u746a\u6821\u6b63\u7684\u503c\u3002\u5982\u679c gamma \u5c0f\u65bc 1\uff0c\u5247\u6620\u5c04\u5c07\u504f\u5411\u65bc\u8f03\u9ad8\uff08\u8f03\u4eae\uff09\u7684\u8f38\u51fa\u503c\u3002\u5982\u679c gamma \u5927\u65bc 1\uff0c\u5247\u6620\u5c04\u5c07\u504f\u5411\u65bc\u8f03\u4f4e\uff08\u8f03\u6697\uff09\u7684\u8f38\u51fa\u503c\u3002\u9810\u8a2d\u70ba 1.0\uff08\u7dda\u6027\u6620\u5c04\uff09\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"color_base"})," (",(0,t.jsx)(s.code,{children:"str"}),")\uff1a\u8f38\u5165\u5f71\u50cf\u7684\u984f\u8272\u57fa\u790e\u3002\u61c9\u70ba 'BGR' \u6216 'RGB'\u3002\u9810\u8a2d\u70ba 'BGR'\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u8abf\u6574\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nadj_img = D.imadjust(img, gamma=2)\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"imadjust",src:i(72709).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:s}={...(0,e.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},72709:(n,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/test_imadjust-d2e6bf3028c135b953e2f1a0bb952fe4.jpg"},28453:(n,s,i)=>{i.d(s,{R:()=>c,x:()=>o});var t=i(96540);const e={},r=t.createContext(e);function c(n){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:c(n.components),t.createElement(r.Provider,{value:s},n.children)}}}]);