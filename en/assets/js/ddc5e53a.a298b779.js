"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1818],{46705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(74848),o=n(28453);const r={sidebar_position:1},s="Introduction",a={id:"docaligner/intro",title:"Introduction",description:'The core functionality of this project is called "Document Localization."',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docaligner/intro.md",sourceDirName:"docaligner",slug:"/docaligner/intro",permalink:"/en/docaligner/intro",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171388163e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DocAligner",permalink:"/en/category/docaligner"},next:{title:"Installation",permalink:"/en/docaligner/installation"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Definition",id:"definition",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:['The core functionality of this project is called "',(0,i.jsx)(t.strong,{children:"Document Localization"}),'."']}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocAligner",children:(0,i.jsx)(t.strong,{children:"DocAligner Github"})})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"title",src:n(88937).A+"",width:"1692",height:"1078"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"This model is specifically designed to identify documents within images and flatten them for further text recognition or other processing."}),"\n",(0,i.jsx)(t.p,{children:'We provide two different models: the "Heatmap Model" and the "Point Regression Model," each with its characteristics and suitable applications, which will be detailed in subsequent chapters.'}),"\n",(0,i.jsx)(t.p,{children:"Technically, we chose PyTorch as the training framework and converted the model to ONNX format for inference, enabling deployment across various platforms. Moreover, we utilize ONNXRuntime for model inference, allowing our model to run efficiently on both CPU and GPU."}),"\n",(0,i.jsx)(t.p,{children:"Our model achieves performance close to state-of-the-art (SoTA) levels and demonstrates real-time inference speed in practical applications, meeting the needs of most usage scenarios."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:'Outside the field of deep learning, "Localization" typically refers to the localization of documents, such as translating them into different languages. In the context of deep learning, it refers to the process of locating a document within an image and flattening it.'})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Flattening"}),": Correcting the text or images within a document to display them on a flat surface."]})}),"\n",(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(t.p,{children:"Following the definitions set by pioneers in the field, we define the document's coordinates as:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Starting point at the top left corner"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Ending point at the bottom left corner"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'We use four coordinate points to represent the position of the document, in order: "Top Left > Top Right > Bottom Right > Bottom Left."'}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsx)(t.p,{children:"If in your understanding, these points are defined based on the document's orientation, that is incorrect."}),(0,i.jsx)(t.p,{children:'Although we use different colors for different coordinate points in visualization results, these colors do not represent the document\'s orientation itself. If the document is upside down, the color sequence of the coordinate points remains "Top Left > Top Right > Bottom Right > Bottom Left."'})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},88937:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/title-53c7f0e04191c69b2dea9f378ad2d0fe.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);