"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4119],{24882:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var e=t(74848),o=t(28453);const s={sidebar_position:7},r="imblackhat",a={id:"docsaidkit/vision/morphology/imblackhat",title:"imblackhat",description:'imblackhat(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/docs/docsaidkit/vision/morphology/imblackhat.md",sourceDirName:"docsaidkit/vision/morphology",slug:"/docsaidkit/vision/morphology/imblackhat",permalink:"/docsaidkit/vision/morphology/imblackhat",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712407759e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"imtophat",permalink:"/docsaidkit/vision/morphology/imtophat"},next:{title:"videotools",permalink:"/category/videotools"}},c={},l=[];function d(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"imblackhat",children:"imblackhat"}),"\n",(0,e.jsxs)(i.blockquote,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L191",children:'imblackhat(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u9ed1\u5e3d\u904b\u7b97\uff1a\u9589\u904b\u7b97\u7684\u7d50\u679c\u6e1b\u53bb\u539f\u5716\u50cf\u3002\u5c0d\u65bc\u591a\u901a\u9053\u5716\u50cf\uff0c\u6bcf\u500b\u901a\u9053\u90fd\u5c07\u7368\u7acb\u8655\u7406\u3002\u610f\u7fa9\u662f\u53ef\u4ee5\u7528\u4f86\u63d0\u53d6\u6bd4\u539f\u5716\u50cf\u6697\u7684\u5340\u57df\uff0c\u4f8b\u5982\u6697\u9ede\u6216\u7d30\u5c0f\u7d50\u69cb\uff0c\u540c\u6642\u53bb\u9664\u6216\u6e1b\u5f31\u5927\u9762\u7a4d\u7684\u6697\u5340\u57df\u3002"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"img"})," (",(0,e.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8f38\u5165\u5716\u50cf\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"ksize"})," (",(0,e.jsx)(i.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7d50\u69cb\u5143\u7d20\u7684\u5927\u5c0f\u3002\u9810\u8a2d\u70ba (3, 3)\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"kstruct"})," (",(0,e.jsx)(i.code,{children:"MORPH"}),')\uff1a\u5143\u7d20\u5f62\u72c0\uff0c\u53ef\u4ee5\u662f "MORPH.CROSS", "MORPH.RECT", "MORPH.ELLIPSE" \u4e4b\u4e00\u3002\u9810\u8a2d\u70ba "MORPH.RECT"\u3002']}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [1, 1, 1, 0, 0],\n                [0, 0, 0, 0, 0], # <- Look at this row\n                [0, 0, 0, 1, 1],\n                [0, 0, 0, 1, 1]], dtype=np.uint8)\n\nblackhat_img = D.imblackhat(img, ksize=3, kstruct='CROSS')\n\n# Kernel will be like this:\n# >>> np.array([[0, 1, 0],\n#               [1, 1, 1],\n#               [0, 1, 0]], dtype=np.uint8)\n\n# After blackhat, the image will be like this:\n# >>> np.array([[0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 1, 1, 0], # <- 1's are extracted\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,o.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},28453:(n,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var e=t(96540);const o={},s=e.createContext(o);function r(n){const i=e.useContext(s);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function a(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),e.createElement(s.Provider,{value:i},n.children)}}}]);