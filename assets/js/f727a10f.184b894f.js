"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5939],{75989:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(74848),e=t(28453);const s={sidebar_position:6},r="imtophat",c={id:"docsaidkit/funcs/vision/morphology/imtophat",title:"imtophat",description:'imtophat(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/docs/docsaidkit/funcs/vision/morphology/imtophat.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imtophat",permalink:"/docs/docsaidkit/funcs/vision/morphology/imtophat",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"imgradient",permalink:"/docs/docsaidkit/funcs/vision/morphology/imgradient"},next:{title:"imblackhat",permalink:"/docs/docsaidkit/funcs/vision/morphology/imblackhat"}},a={},d=[];function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"imtophat",children:"imtophat"}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L163",children:'imtophat(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u9802\u5e3d\u904b\u7b97\uff1a\u539f\u5716\u50cf\u6e1b\u53bb\u958b\u904b\u7b97\u7684\u7d50\u679c\u3002\u5c0d\u65bc\u591a\u901a\u9053\u5716\u50cf\uff0c\u6bcf\u500b\u901a\u9053\u90fd\u5c07\u7368\u7acb\u8655\u7406\u3002\u610f\u7fa9\u662f\u53ef\u4ee5\u7528\u4f86\u63d0\u53d6\u6bd4\u539f\u5716\u50cf\u4eae\u7684\u5340\u57df\uff0c\u4f8b\u5982\u4eae\u9ede\u6216\u7d30\u5c0f\u7d50\u69cb\uff0c\u540c\u6642\u53bb\u9664\u6216\u6e1b\u5f31\u5927\u9762\u7a4d\u7684\u4eae\u5340\u57df\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"img"})," (",(0,o.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8f38\u5165\u5716\u50cf\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"ksize"})," (",(0,o.jsx)(i.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7d50\u69cb\u5143\u7d20\u7684\u5927\u5c0f\u3002\u9810\u8a2d\u70ba (3, 3)\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"kstruct"})," (",(0,o.jsx)(i.code,{children:"MORPH"}),')\uff1a\u5143\u7d20\u5f62\u72c0\uff0c\u53ef\u4ee5\u662f "MORPH.CROSS", "MORPH.RECT", "MORPH.ELLIPSE" \u4e4b\u4e00\u3002\u9810\u8a2d\u70ba "MORPH.RECT"\u3002']}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [0, 0, 1, 1, 0],\n                [0, 0, 0, 1, 1],\n                [0, 0, 0, 1, 1]], dtype=np.uint8)\n\ntophat_img = D.imtophat(img, ksize=3, kstruct='RECT')\n\n# Kernel will be like this:\n# >>> np.array([[1, 1, 1],\n#               [1, 1, 1],\n#               [1, 1, 1]], dtype=np.uint8)\n\n# After tophat, the image will be like this:\n# >>> np.array([[0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 1, 1, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:i}={...(0,e.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var o=t(96540);const e={},s=o.createContext(e);function r(n){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:r(n.components),o.createElement(s.Provider,{value:i},n.children)}}}]);