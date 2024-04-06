"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7576],{83159:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=e(74848),o=e(28453);const r={sidebar_position:7},t="imcropboxes",c={id:"docsaidkit/vision/functionals/imcropboxes",title:"imcropboxes",description:"imcropboxes(img Union[Box, np.ndarray], use_pad: bool = False) -> List[np.ndarray]",source:"@site/docs/docsaidkit/vision/functionals/imcropboxes.md",sourceDirName:"docsaidkit/vision/functionals",slug:"/docsaidkit/vision/functionals/imcropboxes",permalink:"/docsaidkit/vision/functionals/imcropboxes",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712407759e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"imcropbox",permalink:"/docsaidkit/vision/functionals/imcropbox"},next:{title:"centercrop",permalink:"/docsaidkit/vision/functionals/centercrop"}},d={},a=[];function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"imcropboxes",children:"imcropboxes"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L325",children:"imcropboxes(img: np.ndarray, boxes: Union[Box, np.ndarray], use_pad: bool = False) -> List[np.ndarray]"})}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u4f7f\u7528\u63d0\u4f9b\u591a\u500b\u6846\u88c1\u526a\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"img"})," (",(0,s.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8981\u88c1\u526a\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"boxes"})," (",(0,s.jsx)(i.code,{children:"Union[Boxes, np.ndarray]"}),")\uff1a\u88c1\u526a\u6846\u3002\u8f38\u5165\u53ef\u4ee5\u70ba DocsaidKit \u81ea\u5b9a\u7fa9\u7684 Boxes \u7269\u4ef6\uff0c\u5176\u5b9a\u7fa9\u70ba List[Box]\uff0c\u4e5f\u53ef\u4ee5\u662f\u5177\u6709\u76f8\u540c\u683c\u5f0f\u7684 NumPy \u9663\u5217\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"use_pad"})," (",(0,s.jsx)(i.code,{children:"bool"}),")\uff1a\u662f\u5426\u4f7f\u7528\u586b\u5145\u4f86\u8655\u7406\u8d85\u51fa\u908a\u754c\u7684\u5340\u57df\u3002\u5982\u679c\u8a2d\u7f6e\u70ba True\uff0c\u5247\u5916\u90e8\u5340\u57df\u5c07\u4f7f\u7528\u96f6\u586b\u5145\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"List[np.ndarray]"}),"\uff1a\u88c1\u526a\u5f8c\u7684\u5f71\u50cf\u5217\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\n# \u4f7f\u7528\u81ea\u5b9a\u7fa9 Box \u7269\u4ef6\nimg = D.imread('lena.png')\nbox1 = D.Box([50, 50, 200, 200], box_mode='xyxy')\nbox2 = D.Box([50, 50, 100, 100], box_mode='xyxy')\nboxes = D.Boxes([box1, box2])\ncropped_imgs = D.imcropboxes(img, boxes, use_pad=True)\n\n# Resize the cropped image to the original size for visualization\ncropped_img = D.imresize(cropped_img, [img.shape[0], img.shape[1]])\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"imcropbox_boxes",src:e(12389).A+"",width:"646",height:"256"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:i}={...(0,o.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},12389:(n,i,e)=>{e.d(i,{A:()=>s});const s=e.p+"assets/images/test_imcropboxes-6810ba156adebad553ffcff2959016da.jpg"},28453:(n,i,e)=>{e.d(i,{R:()=>t,x:()=>c});var s=e(96540);const o={},r=s.createContext(o);function t(n){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),s.createElement(r.Provider,{value:i},n.children)}}}]);