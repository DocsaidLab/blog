"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6306],{15146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(74848),o=t(28453);const s={sidebar_position:3},a="QuickStart",r={id:"docaligner/quickstart",title:"QuickStart",description:"We provide a simple model inference interface that includes pre-processing and post-processing logic.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docaligner/quickstart.md",sourceDirName:"docaligner",slug:"/docaligner/quickstart",permalink:"/en/docaligner/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/en/docaligner/installation"},next:{title:"Advanced",permalink:"/en/docaligner/advance"}},c={},d=[{value:"Model Inference",id:"model-inference",level:2},{value:"Output Results",id:"output-results",level:2},{value:"1. Drawing the Polygon",id:"1-drawing-the-polygon",level:3},{value:"2. Obtaining the NumPy Image",id:"2-obtaining-the-numpy-image",level:3},{value:"3. Extracting the Flattened Image",id:"3-extracting-the-flattened-image",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quickstart",children:"QuickStart"}),"\n",(0,i.jsx)(n.p,{children:"We provide a simple model inference interface that includes pre-processing and post-processing logic."}),"\n",(0,i.jsxs)(n.p,{children:["First, you need to import the necessary dependencies and create a ",(0,i.jsx)(n.code,{children:"DocAligner"})," class."]}),"\n",(0,i.jsx)(n.h2,{id:"model-inference",children:"Model Inference"}),"\n",(0,i.jsxs)(n.p,{children:["Here is a simple example demonstrating how to use ",(0,i.jsx)(n.code,{children:"DocAligner"})," for model inference:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from docaligner import DocAligner\n\nmodel = DocAligner()\n"})}),"\n",(0,i.jsx)(n.p,{children:"After initializing the model, you'll need to prepare an image for inference:"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can use a test image provided by ",(0,i.jsx)(n.code,{children:"DocAligner"}),":"]}),(0,i.jsxs)(n.p,{children:["Download link: ",(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocAligner/blob/main/docs/run_test_card.jpg",children:(0,i.jsx)(n.strong,{children:"run_test_card.jpg"})})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('path/to/run_test_card.jpg')\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or you can directly read it from a URL:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2\nfrom skimage import io\n\nimg = io.imread('https://github.com/DocsaidLab/DocAligner/blob/main/docs/run_test_card.jpg?raw=true')\nimg = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"test_card",src:t(53912).A+"",width:"512",height:"512"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, you can use the ",(0,i.jsx)(n.code,{children:"model"})," for inference:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"result = model(img)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The inference result you receive is packaged as a ",(0,i.jsx)(n.a,{href:"../docsaidkit/funcs/objects/document",children:(0,i.jsx)(n.strong,{children:"Document"})})," type, containing the document's polygon, OCR text information, etc. In this module, we won't use the OCR features, so we will only utilize the ",(0,i.jsx)(n.code,{children:"image"})," and ",(0,i.jsx)(n.code,{children:"doc_polygon"})," attributes. After obtaining the inference result, you can perform various post-processing operations."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DocAligner"})," has encapsulated the inference using the ",(0,i.jsx)(n.code,{children:"__call__"})," method, so you can directly call the instance for inference."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Model Download"}),": We have designed an automatic model download feature. When you use ",(0,i.jsx)(n.code,{children:"DocAligner"})," for the first time, the model will be downloaded automatically."]})}),"\n",(0,i.jsx)(n.h2,{id:"output-results",children:"Output Results"}),"\n",(0,i.jsx)(n.h3,{id:"1-drawing-the-polygon",children:"1. Drawing the Polygon"}),"\n",(0,i.jsx)(n.p,{children:"Draw and save an image with the document polygon."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# draw\nresult.draw_doc(\n    folder='path/to/save/folder',\n    name='output_image.jpg'\n)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or without specifying a path, directly output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# The default output path is the current directory\n# The default file name uses the current time, as "output_{D.now()}.jpg".\nresult.draw_doc()\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"output_image",src:t(36844).A+"",width:"512",height:"512"})}),"\n",(0,i.jsx)(n.h3,{id:"2-obtaining-the-numpy-image",children:"2. Obtaining the NumPy Image"}),"\n",(0,i.jsxs)(n.p,{children:["If you have other needs, you can use the ",(0,i.jsx)(n.code,{children:"gen_doc_info_image"})," method and then process it as needed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img = result.gen_doc_info_image()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-extracting-the-flattened-image",children:"3. Extracting the Flattened Image"}),"\n",(0,i.jsxs)(n.p,{children:["If you know the original size of the document, you can use the ",(0,i.jsx)(n.code,{children:"gen_doc_flat_img"})," method to transform the document image from its polygonal boundary into a rectangular image."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"H, W = 1080, 1920\nflat_img = result.gen_doc_flat_img(image_size=(H, W))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the image class is unknown, you can omit the ",(0,i.jsx)(n.code,{children:"image_size"})," parameter. In this case, the \"smallest rectangle\" will be automatically calculated based on the document polygon's boundary, setting the rectangle's dimensions as ",(0,i.jsx)(n.code,{children:"H"})," and ",(0,i.jsx)(n.code,{children:"W"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"flat_img = result.gen_doc_flat_img()\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["When your document is significantly skewed in the image, calculating a more flattened smallest rectangle may occur, resulting in some distortion upon flattening. Therefore, it's recommended to manually set the ",(0,i.jsx)(n.code,{children:"image_size"})," parameter in such cases."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},36844:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/flat_result-d8d626f2c82ccace8b1dbefe9efee53b.jpg"},53912:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/run_test_card-fb53e9375df9e395862eba27eea849e7.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);