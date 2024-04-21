"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4662],{27601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(74848),r=n(28453);const s={sidebar_position:3},l="QuickStart",d={id:"docclassifier/quickstart",title:"QuickStart",description:"We provide a simple model inference interface that includes logic for preprocessing and postprocessing.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docclassifier/quickstart.md",sourceDirName:"docclassifier",slug:"/docclassifier/quickstart",permalink:"/en/docclassifier/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713690085e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/en/docclassifier/installation"},next:{title:"Advanced",permalink:"/en/docclassifier/advance"}},a={},o=[{value:"Data Registration",id:"data-registration",level:2},{value:"Duplicate Registration",id:"duplicate-registration",level:2},{value:"Model Inference",id:"model-inference",level:2},{value:"Threshold Setting",id:"threshold-setting",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"quickstart",children:"QuickStart"}),"\n",(0,i.jsx)(t.p,{children:"We provide a simple model inference interface that includes logic for preprocessing and postprocessing."}),"\n",(0,i.jsxs)(t.p,{children:["First, you need to import the relevant dependencies and create a ",(0,i.jsx)(t.code,{children:"DocClassifier"})," class."]}),"\n",(0,i.jsx)(t.h2,{id:"data-registration",children:"Data Registration"}),"\n",(0,i.jsx)(t.p,{children:"Before diving into the model, let's talk about data registration."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["In the inference folder directory, there is a ",(0,i.jsx)(t.code,{children:"register"})," folder containing all the registration data. You can place your registration data in this folder, and ",(0,i.jsx)(t.code,{children:"DocClassifier"})," will automatically read all the data in the folder during inference. If you want to use your own dataset, specify the ",(0,i.jsx)(t.code,{children:"register_root"})," parameter when creating the ",(0,i.jsx)(t.code,{children:"DocClassifier"})," and set it to the root directory of your dataset."]}),"\n",(0,i.jsx)(t.p,{children:"We have included several registered document images in the module for demonstration purposes, which you can refer to and expand upon. Additionally, we strongly recommend using your own dataset to ensure the model can adapt to your application scenarios."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"register",src:n(48279).A+"",width:"2387",height:"1562"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"We recommend using full-size images for data, minimizing background interference to improve model stability."})}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsxs)(t.p,{children:["Many of the pre-registered images in the folder are collected from the internet and have very low resolutions, suitable only for demonstration purposes and not for deployment. Please make good use of the ",(0,i.jsx)(t.code,{children:"register_root"})," parameter with your own dataset to ensure the model can adapt to your application scenarios."]})}),"\n",(0,i.jsx)(t.h2,{id:"duplicate-registration",children:"Duplicate Registration"}),"\n",(0,i.jsx)(t.p,{children:"This issue can occur in two scenarios:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Scenario 1: Duplicate File Names"})}),"\n",(0,i.jsx)(t.p,{children:"In our implementation logic, the file names in the registration folder serve as the query index for the data."}),"\n",(0,i.jsx)(t.p,{children:"Therefore, when file names are duplicated, the later files will overwrite the earlier ones."}),"\n",(0,i.jsx)(t.p,{children:"This scenario is not problematic as the overwritten files will simply not be used, which does not affect model inference."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Scenario 2: Duplicate File Contents"})}),"\n",(0,i.jsx)(t.p,{children:"Identical files are registered more than once."}),"\n",(0,i.jsx)(t.p,{children:"Suppose a user registers three identical images but with different labels. During inference, the scores in the similarity ranking process will be the same, but one will always be ranked first. In such cases, the model cannot guarantee returning the same label each time."}),"\n",(0,i.jsx)(t.p,{children:"This scenario introduces uncertainty into the model, making it difficult to determine the reasons behind the inconsistencies."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"In any case, please treat data registration seriously."})}),"\n",(0,i.jsx)(t.h2,{id:"model-inference",children:"Model Inference"}),"\n",(0,i.jsx)(t.p,{children:"Once the registration data is prepared, we can start performing model inference."}),"\n",(0,i.jsx)(t.p,{children:"Here's a simple example. First, initialize the model:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from docclassifier import DocClassifier\n\nmodel = DocClassifier()\n"})}),"\n",(0,i.jsx)(t.p,{children:"Next, load an image:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('path/to/test_driver.jpg')\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["You can use the test image provided by ",(0,i.jsx)(t.code,{children:"DocClassifier"}),":"]}),(0,i.jsxs)(t.p,{children:["Download link: ",(0,i.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocClassifier/blob/main/docs/test_driver.jpg",children:(0,i.jsx)(t.strong,{children:"test_driver.jpg"})})]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"test_card",src:n(1237).A+"",width:"600",height:"431"})})]}),"\n",(0,i.jsx)(t.p,{children:"Or directly load it from a URL:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import cv2\nfrom skimage import io\n\nimg = io.imread('https://github.com/DocsaidLab/DocClassifier/blob/main/docs/test_driver.jpg?raw=true')\nimg = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Finally, use the ",(0,i.jsx)(t.code,{children:"model"})," for inference:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"most_similar, max_score = model(img)\nprint(f'most_similar: {most_similar}, max_score: {max_score:.4f}')\n# >>> most_similar: None, max_score: 0.0000\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the default case, this example will return ",(0,i.jsx)(t.code,{children:"None"})," and ",(0,i.jsx)(t.code,{children:"0.0000"})," because the default registration data is very different from the input image. Therefore, the model determines a very low similarity between this image and the registration data."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"DocClassifier"})," is encapsulated with ",(0,i.jsx)(t.code,{children:"__call__"}),", so you can directly call the instance for inference."]})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["We have implemented automatic model downloading. The model will be automatically downloaded the first time you use ",(0,i.jsx)(t.code,{children:"DocClassifier"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"threshold-setting",children:"Threshold Setting"}),"\n",(0,i.jsx)(t.p,{children:"We evaluate the model's performance based on the TPR@FPR=1e-4 standard. However, this standard is relatively strict and may lead to poor user experience in deployment. Therefore, we suggest using thresholds based on TPR@FPR=1e-1 or TPR@FPR=1e-2 during deployment."}),"\n",(0,i.jsxs)(t.p,{children:["Currently, the default threshold is set using the ",(0,i.jsx)(t.code,{children:"TPR@FPR=1e-2"})," standard, which we have determined to be more suitable based on our testing and evaluation. The detailed threshold settings are as follows:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"lcnet050_cosface_f256_r128_squeeze_imagenet_clip_20240326 results"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Setting ",(0,i.jsx)(t.code,{children:"model_cfg"}),' to "20240326"']})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"TPR@FPR=1e-4: 0.912"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"FPR"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"1e-05"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"1e-04"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"1e-03"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"1e-02"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"1e-01"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"1"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TPR"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.856"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.912"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.953"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.980"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.996"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Threshold"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.705"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.682"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.657"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.626"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.581"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0.359"})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},48279:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/register_demo-1c3139c67a91705bc4305f20e5787b9a.jpg"},1237:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/test_driver-a09fac15b8077060fed16d5a4ce9c273.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);