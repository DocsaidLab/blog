"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2191],{96935:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=i(74848),t=i(28453);const r={sidebar_position:1},s="imerode",d={id:"docsaidkit/vision/morphology/imerode",title:"imerode",description:'imerode(img Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray',source:"@site/docs/docsaidkit/vision/morphology/imerode.md",sourceDirName:"docsaidkit/vision/morphology",slug:"/docsaidkit/vision/morphology/imerode",permalink:"/docsaidkit/vision/morphology/imerode",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712407759e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"morphology",permalink:"/category/morphology"},next:{title:"imdilate",permalink:"/docsaidkit/vision/morphology/imdilate"}},l={},c=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"imerode",children:"imerode"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/morphology.py#L14C1-L42C69",children:'imerode(img: np.ndarray, ksize: Union[int, Tuple[int, int]] = (3, 3), kstruct: Union[str, int, "MORPH"] = "MORPH.RECT") -> np.ndarray'})}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u4fb5\u8755\u64cd\u4f5c\uff1a\u4f7f\u7528\u6307\u5b9a\u7684\u7d50\u69cb\u5143\u7d20\u4fb5\u8755\u6e90\u5716\u50cf\uff0c\u8a72\u7d50\u69cb\u5143\u7d20\u78ba\u5b9a\u4e86\u53d6\u6700\u5c0f\u503c\u7684\u50cf\u7d20\u9130\u57df\u7684\u5f62\u72c0\u3002\u5c0d\u65bc\u591a\u901a\u9053\u5716\u50cf\uff0c\u6bcf\u500b\u901a\u9053\u90fd\u5c07\u7368\u7acb\u8655\u7406\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"img"})," (",(0,o.jsx)(e.code,{children:"np.ndarray"}),")\uff1a\u8f38\u5165\u5716\u50cf\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"ksize"})," (",(0,o.jsx)(e.code,{children:"Union[int, Tuple[int, int]]"}),")\uff1a\u7d50\u69cb\u5143\u7d20\u7684\u5927\u5c0f\u3002\u9810\u8a2d\u70ba (3, 3)\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"kstruct"})," (",(0,o.jsx)(e.code,{children:"MORPH"}),')\uff1a\u5143\u7d20\u5f62\u72c0\uff0c\u53ef\u4ee5\u662f "MORPH.CROSS", "MORPH.RECT", "MORPH.ELLIPSE" \u4e4b\u4e00\u3002\u9810\u8a2d\u70ba "MORPH.RECT"\u3002']}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg = np.array([[0, 0, 0, 0, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 1, 1, 1, 0],\n                [0, 0, 0, 0, 0]], dtype=np.uint8)\n\neroded_img = D.imerode(img, ksize=3, kstruct='RECT')\n\n# Kernel will be like this:\n# >>> np.array([[1, 1, 1],\n#               [1, 1, 1],\n#               [1, 1, 1]], dtype=np.uint8)\n\n# After erosion, the image will be like this:\n# >>> np.array([[0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 1, 0, 0],\n#               [0, 0, 0, 0, 0],\n#               [0, 0, 0, 0, 0]], dtype=np.uint8)\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>d});var o=i(96540);const t={},r=o.createContext(t);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);