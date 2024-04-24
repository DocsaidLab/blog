"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[30],{13626:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var e=t(74848),s=t(28453);const r={sidebar_position:5},o="imgradient",d={id:"docsaidkit/funcs/vision/morphology/imgradient",title:"imgradient",description:'imgradient(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/docs/docsaidkit/funcs/vision/morphology/imgradient.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imgradient",permalink:"/docs/docsaidkit/funcs/vision/morphology/imgradient",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713961801e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"imclose",permalink:"/docs/docsaidkit/funcs/vision/morphology/imclose"},next:{title:"imtophat",permalink:"/docs/docsaidkit/funcs/vision/morphology/imtophat"}},c={},a=[];function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"imgradient",children:"imgradient"}),"\n",(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L135",children:'imgradient(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u68af\u5ea6\u904b\u7b97\uff1a\u81a8\u8139\u5716\u50cf\u6e1b\u53bb\u4fb5\u8755\u5716\u50cf\u7684\u7d50\u679c\u3002\u5c0d\u65bc\u591a\u901a\u9053\u5716\u50cf\uff0c\u6bcf\u500b\u901a\u9053\u90fd\u5c07\u7368\u7acb\u8655\u7406\u3002\u610f\u7fa9\u662f\u53ef\u4ee5\u7528\u4f86\u63d0\u53d6\u7269\u9ad4\u7684\u908a\u7de3\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"img"})," (",(0,e.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8f38\u5165\u5716\u50cf\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"ksize"})," (",(0,e.jsx)(i.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7d50\u69cb\u5143\u7d20\u7684\u5927\u5c0f\u3002\u9810\u8a2d\u70ba (3, 3)\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"kstruct"})," (",(0,e.jsx)(i.code,{children:"MORPH"}),')\uff1a\u5143\u7d20\u5f62\u72c0\uff0c\u53ef\u4ee5\u662f "MORPH.CROSS", "MORPH.RECT", "MORPH.ELLIPSE" \u4e4b\u4e00\u3002\u9810\u8a2d\u70ba "MORPH.RECT"\u3002']}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[0, 0, 0, 0, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 0, 0, 0, 0]], dtype=np.uint8)\n\ngradient_img = D.imgradient(img, ksize=3, kstruct='RECT')\n\n# Kernel will be like this:\n# >>> np.array([[1, 1, 1],\n#               [1, 1, 1],\n#               [1, 1, 1]], dtype=np.uint8)\n\n# After gradient, the image will be like this:\n# >>> np.array([[1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 0, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},28453:(n,i,t)=>{t.d(i,{R:()=>o,x:()=>d});var e=t(96540);const s={},r=e.createContext(s);function o(n){const i=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function d(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),e.createElement(r.Provider,{value:i},n.children)}}}]);