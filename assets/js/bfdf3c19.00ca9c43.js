"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[28953],{50520:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var o=i(74848),e=i(28453);const r={sidebar_position:7},c="imcropboxes",t={id:"docsaidkit/funcs/vision/functionals/imcropboxes",title:"imcropboxes",description:"imcropboxes(img Union[Box, np.ndarray], use_pad: bool = False) -> List[np.ndarray]",source:"@site/docs/docsaidkit/funcs/vision/functionals/imcropboxes.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/imcropboxes",permalink:"/docs/docsaidkit/funcs/vision/functionals/imcropboxes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"imcropbox",permalink:"/docs/docsaidkit/funcs/vision/functionals/imcropbox"},next:{title:"centercrop",permalink:"/docs/docsaidkit/funcs/vision/functionals/centercrop"}},d={},a=[];function l(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"imcropboxes",children:"imcropboxes"}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L325",children:"imcropboxes(img: np.ndarray, boxes: Union[Box, np.ndarray], use_pad: bool = False) -> List[np.ndarray]"})}),"\n"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u4f7f\u7528\u63d0\u4f9b\u591a\u500b\u6846\u88c1\u526a\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"img"})," (",(0,o.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u88c1\u526a\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"boxes"})," (",(0,o.jsx)(s.code,{children:"Union[Boxes, np.ndarray]"}),")\uff1a\u88c1\u526a\u6846\u3002\u8f38\u5165\u53ef\u4ee5\u70ba DocsaidKit \u81ea\u5b9a\u7fa9\u7684 Boxes \u7269\u4ef6\uff0c\u5176\u5b9a\u7fa9\u70ba List[Box]\uff0c\u4e5f\u53ef\u4ee5\u662f\u5177\u6709\u76f8\u540c\u683c\u5f0f\u7684 NumPy \u9663\u5217\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"use_pad"})," (",(0,o.jsx)(s.code,{children:"bool"}),")\uff1a\u662f\u5426\u4f7f\u7528\u586b\u5145\u4f86\u8655\u7406\u8d85\u51fa\u908a\u754c\u7684\u5340\u57df\u3002\u5982\u679c\u8a2d\u7f6e\u70ba True\uff0c\u5247\u5916\u90e8\u5340\u57df\u5c07\u4f7f\u7528\u96f6\u586b\u5145\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"List[np.ndarray]"}),"\uff1a\u88c1\u526a\u5f8c\u7684\u5f71\u50cf\u5217\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\n# \u4f7f\u7528\u81ea\u5b9a\u7fa9 Box \u7269\u4ef6\nimg = D.imread('lena.png')\nbox1 = D.Box([50, 50, 200, 200], box_mode='xyxy')\nbox2 = D.Box([50, 50, 100, 100], box_mode='xyxy')\nboxes = D.Boxes([box1, box2])\ncropped_imgs = D.imcropboxes(img, boxes, use_pad=True)\n\n# Resize the cropped image to the original size for visualization\ncropped_img = D.imresize(cropped_img, [img.shape[0], img.shape[1]])\n"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"imcropbox_boxes",src:i(77299).A+"",width:"646",height:"256"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:s}={...(0,e.R)(),...n.components};return s?(0,o.jsx)(s,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},77299:(n,s,i)=>{i.d(s,{A:()=>o});const o=i.p+"assets/images/test_imcropboxes-6810ba156adebad553ffcff2959016da.jpg"},28453:(n,s,i)=>{i.d(s,{R:()=>c,x:()=>t});var o=i(96540);const e={},r=o.createContext(e);function c(n){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function t(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:c(n.components),o.createElement(r.Provider,{value:s},n.children)}}}]);