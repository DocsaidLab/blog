"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6867],{34067:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=s(74848),i=s(28453);const a={sidebar_position:6},d="Dataset",r={id:"docaligner/dataset",title:"Dataset",description:"In this chapter, we briefly introduce the datasets used for training and testing our models. These datasets include a variety of document images.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docaligner/dataset.md",sourceDirName:"docaligner",slug:"/docaligner/dataset",permalink:"/en/docs/docaligner/dataset",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713961801e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Evaluation",permalink:"/en/docs/docaligner/benchmark"},next:{title:"Submission",permalink:"/en/docs/docaligner/summit_data"}},o={},c=[{value:"SmartDoc 2015",id:"smartdoc-2015",level:2},{value:"MIDV-500/2019",id:"midv-5002019",level:2},{value:"MIDV-2020",id:"midv-2020",level:2},{value:"CORD v0",id:"cord-v0",level:2},{value:"Synthetic Dataset",id:"synthetic-dataset",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dataset",children:"Dataset"}),"\n",(0,n.jsx)(t.p,{children:"In this chapter, we briefly introduce the datasets used for training and testing our models. These datasets include a variety of document images."}),"\n",(0,n.jsx)(t.h2,{id:"smartdoc-2015",children:"SmartDoc 2015"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SmartDoc 2015",src:s(87457).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.p,{children:"The SmartDoc 2015 - Challenge 1 dataset was originally created for the SmartDoc 2015 competition, focusing on evaluating document image capture methods using smartphones. Challenge 1 is particularly about detecting and segmenting document regions from video frames captured from smartphone preview streams."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"URL"}),": ",(0,n.jsx)(t.a,{href:"https://github.com/jchazalon/smartdoc15-ch1-dataset",children:(0,n.jsx)(t.strong,{children:"SmartDoc 2015"})})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"midv-5002019",children:"MIDV-500/2019"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MIDV-500",src:s(84775).A+"",width:"1080",height:"1920"})}),"\n",(0,n.jsx)(t.p,{children:"MIDV-500 consists of 500 video clips of 50 different types of identity documents, including 17 IDs, 14 passports, 13 driver's licenses, and 6 other identity documents from different countries. It features real-world scenarios to extensively study various document analysis issues. MIDV-2019 includes images with distortions and low light."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"URL"}),": ",(0,n.jsx)(t.a,{href:"https://github.com/fcakyon/midv500",children:(0,n.jsx)(t.strong,{children:"MIDV"})})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"midv-2020",children:"MIDV-2020"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MIDV-2020",src:s(69452).A+"",width:"2268",height:"4032"})}),"\n",(0,n.jsx)(t.p,{children:"MIDV-2020 features 10 types of documents, including 1000 annotated video clips, 1000 scanned images, and 1000 photos of 1000 unique simulated identity documents, each with unique textual field values and uniquely generated artificial faces."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"URL"}),": ",(0,n.jsx)(t.a,{href:"http://l3i-share.univ-lr.fr/MIDV2020/midv2020.html",children:(0,n.jsx)(t.strong,{children:"MIDV2020"})})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cord-v0",children:"CORD v0"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"CORD",src:s(28478).A+"",width:"1108",height:"1478"})}),"\n",(0,n.jsx)(t.p,{children:"This dataset comprises thousands of Indonesian receipts, which include image text annotations for OCR and multi-layer semantic tags for parsing. The provided dataset can be used to address various OCR and parsing tasks."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"URL"}),": ",(0,n.jsx)(t.a,{href:"https://github.com/clovaai/cord",children:(0,n.jsx)(t.strong,{children:"CORD"})})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"synthetic-dataset",children:"Synthetic Dataset"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Docpool",src:s(75106).A+"",width:"600",height:"450"})}),"\n",(0,n.jsx)(t.p,{children:"Considering the limitations of available datasets, we use dynamic image synthesis techniques. In essence, we first collected a dataset of various texts, including images of various documents and certificates found online. We then used an Indoor dataset as a background, onto which we superimposed the text data. Moreover, for the MIDV-500/MIDV-2019/CORD datasets, which all have corresponding polygon data, we also synthesized various images onto these datasets in the spirit of maximizing resource use and increasing dataset diversity."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28478:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/cordv0_test_img-233412b61da6beeacddc3e575e8b5a1f.jpg"},69452:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/midv2020_test_img-872f61fa545b5ad01cce44b20f96bfe2.jpg"},84775:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/midv500_test_img-dad97d175266eda3cc97c9a829d37629.jpg"},87457:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/smartdoc_test_img-38d7532b72ef17563da286a89e0dc465.jpg"},75106:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/synth_test_img-84262120a4c8de6f0551845b93ca6cca.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>r});var n=s(96540);const i={},a=n.createContext(i);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);