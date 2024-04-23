"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9619],{38741:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=e(74848),s=e(28453);const o={sidebar_position:2},r="imdilate",d={id:"docsaidkit/funcs/vision/morphology/imdilate",title:"imdilate",description:'imdilate(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/docs/docsaidkit/funcs/vision/morphology/imdilate.md",sourceDirName:"docsaidkit/funcs/vision/morphology",slug:"/docsaidkit/funcs/vision/morphology/imdilate",permalink:"/docsaidkit/funcs/vision/morphology/imdilate",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713878085e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"imerode",permalink:"/docsaidkit/funcs/vision/morphology/imerode"},next:{title:"imopen",permalink:"/docsaidkit/funcs/vision/morphology/imopen"}},l={},c=[];function a(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"imdilate",children:"imdilate"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L45",children:'imdilate(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u81a8\u8139\u64cd\u4f5c\uff1a\u4f7f\u7528\u6307\u5b9a\u7684\u7d50\u69cb\u5143\u7d20\u81a8\u8139\u6e90\u5716\u50cf\uff0c\u8a72\u7d50\u69cb\u5143\u7d20\u78ba\u5b9a\u4e86\u53d6\u6700\u5927\u503c\u7684\u50cf\u7d20\u9130\u57df\u7684\u5f62\u72c0\u3002\u5c0d\u65bc\u591a\u901a\u9053\u5716\u50cf\uff0c\u6bcf\u500b\u901a\u9053\u90fd\u5c07\u7368\u7acb\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"img"})," (",(0,t.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8f38\u5165\u5716\u50cf\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"ksize"})," (",(0,t.jsx)(i.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7d50\u69cb\u5143\u7d20\u7684\u5927\u5c0f\u3002\u9810\u8a2d\u70ba (3, 3)\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"kstruct"})," (",(0,t.jsx)(i.code,{children:"MORPH"}),')\uff1a\u5143\u7d20\u5f62\u72c0\uff0c\u53ef\u4ee5\u662f "MORPH.CROSS", "MORPH.RECT", "MORPH.ELLIPSE" \u4e4b\u4e00\u3002\u9810\u8a2d\u70ba "MORPH.RECT"\u3002']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[0, 0, 0, 0, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 0, 0, 0, 0]], dtype=np.uint8)\n\ndilated_img = D.imdilate(img, ksize=3, kstruct='RECT')\n\n# Kernel will be like this:\n# >>> np.array([[1, 1, 1],\n#               [1, 1, 1],\n#               [1, 1, 1]], dtype=np.uint8)\n\n# After dilation, the image will be like this:\n# >>> np.array([[1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1],\n#               [1, 1, 1, 1, 1]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>d});var t=e(96540);const s={},o=t.createContext(s);function r(n){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function d(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:i},n.children)}}}]);