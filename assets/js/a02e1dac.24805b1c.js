"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[93800],{14586:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var c=i(74848),s=i(28453);const r={sidebar_position:3},d="\u5feb\u901f\u958b\u59cb",o={id:"docaligner/quickstart",title:"\u5feb\u901f\u958b\u59cb",description:"\u6211\u5011\u63d0\u4f9b\u4e86\u4e00\u500b\u7c21\u55ae\u7684\u6a21\u578b\u63a8\u8ad6\u4ecb\u9762\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u524d\u5f8c\u8655\u7406\u7684\u908f\u8f2f\u3002",source:"@site/docs/docaligner/quickstart.md",sourceDirName:"docaligner",slug:"/docaligner/quickstart",permalink:"/docs/docaligner/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88dd",permalink:"/docs/docaligner/installation"},next:{title:"\u9032\u968e\u8a2d\u5b9a",permalink:"/docs/docaligner/advance"}},t={},l=[{value:"\u6a21\u578b\u63a8\u8ad6",id:"\u6a21\u578b\u63a8\u8ad6",level:2},{value:"\u8f38\u51fa\u7d50\u679c",id:"\u8f38\u51fa\u7d50\u679c",level:2},{value:"1. \u7e6a\u88fd\u591a\u908a\u5f62",id:"1-\u7e6a\u88fd\u591a\u908a\u5f62",level:3},{value:"2. \u53d6\u5f97 NumPy \u5716\u50cf",id:"2-\u53d6\u5f97-numpy-\u5716\u50cf",level:3},{value:"3. \u63d0\u53d6\u6524\u5e73\u5f8c\u7684\u5716\u50cf",id:"3-\u63d0\u53d6\u6524\u5e73\u5f8c\u7684\u5716\u50cf",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u5feb\u901f\u958b\u59cb",children:"\u5feb\u901f\u958b\u59cb"}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u5011\u63d0\u4f9b\u4e86\u4e00\u500b\u7c21\u55ae\u7684\u6a21\u578b\u63a8\u8ad6\u4ecb\u9762\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u524d\u5f8c\u8655\u7406\u7684\u908f\u8f2f\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u4f60\u9700\u8981\u5c0e\u5165\u6240\u9700\u7684\u76f8\u95dc\u4f9d\u8cf4\u4e26\u5275\u5efa ",(0,c.jsx)(n.code,{children:"DocAligner"})," \u985e\u5225\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6a21\u578b\u63a8\u8ad6",children:"\u6a21\u578b\u63a8\u8ad6"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\uff0c\u5c55\u793a\u5982\u4f55\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"DocAligner"})," \u9032\u884c\u6a21\u578b\u63a8\u8ad6\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from docaligner import DocAligner\n\nmodel = DocAligner()\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u555f\u52d5\u6a21\u578b\u4e4b\u5f8c\uff0c\u63a5\u8457\u8981\u6e96\u5099\u4e00\u5f35\u5716\u7247\u9032\u884c\u63a8\u8ad6\uff1a"}),"\n",(0,c.jsxs)(n.admonition,{type:"tip",children:[(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"DocAligner"})," \u63d0\u4f9b\u7684\u6e2c\u8a66\u5716\u7247\uff1a"]}),(0,c.jsxs)(n.p,{children:["\u4e0b\u8f09\u9023\u7d50\uff1a",(0,c.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocAligner/blob/main/docs/run_test_card.jpg",children:(0,c.jsx)(n.strong,{children:"run_test_card.jpg"})})]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('path/to/run_test_card.jpg')\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u662f\u4f60\u53ef\u4ee5\u76f4\u63a5\u900f\u904e URL \u9032\u884c\u8b80\u53d6\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"import cv2\nfrom skimage import io\n\nimg = io.imread('https://github.com/DocsaidLab/DocAligner/blob/main/docs/run_test_card.jpg?raw=true')\nimg = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"test_card",src:i(48008).A+"",width:"512",height:"512"})}),"\n",(0,c.jsxs)(n.p,{children:["\u63a5\u8457\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"model"})," \u9032\u884c\u63a8\u8ad6\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"result = model(img)\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u5f97\u5230\u7684\u63a8\u8ad6\u7d50\u679c\u662f\u7d93\u904e\u6211\u5011\u5305\u88dd\u7684 ",(0,c.jsx)(n.a,{href:"../docsaidkit/funcs/objects/document",children:(0,c.jsx)(n.strong,{children:"Document"})})," \u985e\u578b\uff0c\u5b83\u5305\u542b\u4e86\u6587\u4ef6\u7684\u591a\u908a\u5f62\u3001OCR \u6587\u5b57\u8cc7\u8a0a\u7b49\u7b49\u3002\u5728\u9019\u500b\u6a21\u7d44\u4e2d\uff0c\u6211\u5011\u4e0d\u6703\u7528\u5230 OCR \u76f8\u95dc\u7684\u529f\u80fd\uff0c\u56e0\u6b64\u6211\u5011\u53ea\u6703\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"image"})," \u548c ",(0,c.jsx)(n.code,{children:"doc_polygon"})," \u5c6c\u6027\u3002\u7372\u53d6\u5230\u63a8\u8ad6\u7d50\u679c\u5f8c\uff0c\u4f60\u53ef\u4ee5\u9032\u884c\u591a\u7a2e\u5f8c\u8655\u7406\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"DocAligner"})," \u5df2\u7d93\u7528 ",(0,c.jsx)(n.code,{children:"__call__"})," \u9032\u884c\u4e86\u5c01\u88dd\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u76f4\u63a5\u547c\u53eb\u5be6\u4f8b\u9032\u884c\u63a8\u8ad6\u3002"]})}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["\u6211\u5011\u6709\u8a2d\u8a08\u4e86\u81ea\u52d5\u4e0b\u8f09\u6a21\u578b\u7684\u529f\u80fd\uff0c\u7576\u4f60\u7b2c\u4e00\u6b21\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"DocAligner"})," \u6642\uff0c\u6703\u81ea\u52d5\u4e0b\u8f09\u6a21\u578b\u3002"]})}),"\n",(0,c.jsx)(n.h2,{id:"\u8f38\u51fa\u7d50\u679c",children:"\u8f38\u51fa\u7d50\u679c"}),"\n",(0,c.jsx)(n.h3,{id:"1-\u7e6a\u88fd\u591a\u908a\u5f62",children:"1. \u7e6a\u88fd\u591a\u908a\u5f62"}),"\n",(0,c.jsx)(n.p,{children:"\u7e6a\u88fd\u4e26\u4fdd\u5b58\u5e36\u6709\u6587\u4ef6\u591a\u908a\u5f62\u7684\u5716\u50cf\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"# draw\nresult.draw_doc(\n    folder='path/to/save/folder',\n    name='output_image.jpg'\n)\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u662f\u4e0d\u6307\u5b9a\u8def\u5f91\uff0c\u76f4\u63a5\u8f38\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'# \u9810\u8a2d\u7684\u8f38\u51fa\u8def\u5f91\u70ba\u7576\u524d\u76ee\u9304\n# \u9810\u8a2d\u7684\u8f38\u51fa\u6a94\u540d\u6703\u8abf\u7528\u7576\u524d\u6642\u523b\uff0c\u70ba f"output_{D.now()}.jpg"\u3002\nresult.draw_doc()\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"output_image",src:i(2236).A+"",width:"512",height:"512"})}),"\n",(0,c.jsx)(n.h3,{id:"2-\u53d6\u5f97-numpy-\u5716\u50cf",children:"2. \u53d6\u5f97 NumPy \u5716\u50cf"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6709\u5176\u4ed6\u9700\u6c42\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"gen_doc_info_image"})," \u65b9\u6cd5\uff0c\u4e4b\u5f8c\u518d\u81ea\u884c\u8655\u7406\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"img = result.gen_doc_info_image()\n"})}),"\n",(0,c.jsx)(n.h3,{id:"3-\u63d0\u53d6\u6524\u5e73\u5f8c\u7684\u5716\u50cf",children:"3. \u63d0\u53d6\u6524\u5e73\u5f8c\u7684\u5716\u50cf"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u77e5\u9053\u6587\u4ef6\u7684\u539f\u59cb\u5927\u5c0f\uff0c\u5373\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"gen_doc_flat_img"})," \u65b9\u6cd5\uff0c\u5c07\u6587\u4ef6\u5716\u50cf\u6839\u64da\u5176\u591a\u908a\u5f62\u908a\u754c\u8f49\u63db\u70ba\u77e9\u5f62\u5716\u50cf\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"H, W = 1080, 1920\nflat_img = result.gen_doc_flat_img(image_size=(H, W))\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u662f\u4e00\u500b\u672a\u77e5\u7684\u5f71\u50cf\u985e\u5225\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u7528\u7d66\u5b9a ",(0,c.jsx)(n.code,{children:"image_size"})," \u53c3\u6578\uff0c\u6b64\u6642\u5c07\u6703\u6839\u64da\u6587\u4ef6\u591a\u908a\u5f62\u7684\u908a\u754c\u81ea\u52d5\u8a08\u7b97\u51fa\u300e",(0,c.jsx)(n.strong,{children:"\u6700\u5c0f\u7684\u77e9\u5f62"}),"\u300f\u5716\u50cf\uff0c\u4e26\u5c07\u6700\u5c0f\u77e9\u5f62\u7684\u9577\u5bec\u8a2d\u70ba ",(0,c.jsx)(n.code,{children:"H"})," \u548c ",(0,c.jsx)(n.code,{children:"W"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"flat_img = result.gen_doc_flat_img()\n"})}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.p,{children:["\u7576\u4f60\u7684\u6587\u4ef6\u5728\u5716\u50cf\u4e2d\u5448\u73fe\u5927\u5e45\u5ea6\u50be\u659c\u6642\uff0c\u53ef\u80fd\u6703\u7b97\u51fa\u8f03\u6241\u5e73\u7684\u6700\u5c0f\u77e9\u5f62\uff0c\u6b64\u6642\u9032\u884c\u6524\u5e73\u6703\u6709\u4e00\u5b9a\u7684\u5f62\u8b8a\u3002\u56e0\u6b64\uff0c\u5efa\u8b70\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"image_size"})," \u53c3\u6578\u9032\u884c\u624b\u52d5\u8a2d\u5b9a\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},2236:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/flat_result-d8d626f2c82ccace8b1dbefe9efee53b.jpg"},48008:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/run_test_card-fb53e9375df9e395862eba27eea849e7.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var c=i(96540);const s={},r=c.createContext(s);function d(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);