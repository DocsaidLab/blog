"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3499],{96148:(n,i,o)=>{o.r(i),o.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var s=o(74848),e=o(28453);const r={sidebar_position:7},c="imcropbox",t={id:"docsaidkit/funcs/vision/functionals/imcropbox",title:"imcropbox",description:"imcropbox(img Union[Box, np.ndarray], use_pad: bool = False) -> np.ndarray",source:"@site/docs/docsaidkit/funcs/vision/functionals/imcropbox.md",sourceDirName:"docsaidkit/funcs/vision/functionals",slug:"/docsaidkit/funcs/vision/functionals/imcropbox",permalink:"/docs/docsaidkit/funcs/vision/functionals/imcropbox",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"imbinarize",permalink:"/docs/docsaidkit/funcs/vision/functionals/imbinarize"},next:{title:"imcropboxes",permalink:"/docs/docsaidkit/funcs/vision/functionals/imcropboxes"}},d={},a=[];function l(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"imcropbox",children:"imcropbox"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/functionals.py#L257",children:"imcropbox(img: np.ndarray, box: Union[Box, np.ndarray], use_pad: bool = False) -> np.ndarray"})}),"\n"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8aaa\u660e"}),"\uff1a\u4f7f\u7528\u63d0\u4f9b\u7684\u6846\u88c1\u526a\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"img"})," (",(0,s.jsx)(i.code,{children:"np.ndarray"}),")\uff1a\u8981\u88c1\u526a\u7684\u8f38\u5165\u5f71\u50cf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"box"})," (",(0,s.jsx)(i.code,{children:"Union[Box, np.ndarray]"}),")\uff1a\u88c1\u526a\u6846\u3002\u8f38\u5165\u53ef\u4ee5\u70ba DocsaidKit \u81ea\u5b9a\u7fa9\u7684 Box \u7269\u4ef6\uff0c\u7531 (x1, y1, x2, y2) \u5ea7\u6a19\u5b9a\u7fa9\uff0c\u4e5f\u53ef\u4ee5\u662f\u5177\u6709\u76f8\u540c\u683c\u5f0f\u7684 NumPy \u9663\u5217\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"use_pad"})," (",(0,s.jsx)(i.code,{children:"bool"}),")\uff1a\u662f\u5426\u4f7f\u7528\u586b\u5145\u4f86\u8655\u7406\u8d85\u51fa\u908a\u754c\u7684\u5340\u57df\u3002\u5982\u679c\u8a2d\u7f6e\u70ba True\uff0c\u5247\u5916\u90e8\u5340\u57df\u5c07\u4f7f\u7528\u96f6\u586b\u5145\u3002\u9810\u8a2d\u70ba False\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"np.ndarray"}),"\uff1a\u88c1\u526a\u5f8c\u7684\u5f71\u50cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"import docsaidkit as D\n\n# \u4f7f\u7528\u81ea\u5b9a\u7fa9 Box \u7269\u4ef6\nimg = D.imread('lena.png')\nbox = D.Box([50, 50, 200, 200], box_mode='xyxy')\ncropped_img = D.imcropbox(img, box, use_pad=True)\n\n# Resize the cropped image to the original size for visualization\ncropped_img = D.imresize(cropped_img, [img.shape[0], img.shape[1]])\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"imcropbox_box",src:o(35303).A+"",width:"426",height:"256"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:i}={...(0,e.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},35303:(n,i,o)=>{o.d(i,{A:()=>s});const s=o.p+"assets/images/test_imcropbox-eb25b2219e00eeacef49aa1eef493662.jpg"},28453:(n,i,o)=>{o.d(i,{R:()=>c,x:()=>t});var s=o(96540);const e={},r=s.createContext(e);function c(n){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function t(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:c(n.components),s.createElement(r.Provider,{value:i},n.children)}}}]);