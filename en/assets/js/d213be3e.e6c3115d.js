"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1498],{10928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=n(74848),s=n(28453);const r={sidebar_position:5},i="Evaluation",c={id:"docaligner/benchmark",title:"Evaluation",description:"We utilized the SmartDoc 2015 dataset for our testing.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docaligner/benchmark.md",sourceDirName:"docaligner",slug:"/docaligner/benchmark",permalink:"/en/docaligner/benchmark",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713493386e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/en/docaligner/advance"},next:{title:"Dataset",permalink:"/en/docaligner/dataset"}},d={},o=[{value:"Protocol",id:"protocol",level:2},{value:"Results",id:"results",level:2},{value:"Analysis of Results",id:"analysis-of-results",level:2},{value:"Parameter Settings",id:"parameter-settings",level:2},{value:"Comparative Overview",id:"comparative-overview",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"evaluation",children:"Evaluation"}),"\n",(0,l.jsxs)(t.p,{children:["We utilized the ",(0,l.jsx)(t.a,{href:"https://github.com/jchazalon/smartdoc15-ch1-dataset",children:(0,l.jsx)(t.strong,{children:"SmartDoc 2015"})})," dataset for our testing."]}),"\n",(0,l.jsx)(t.h2,{id:"protocol",children:"Protocol"}),"\n",(0,l.jsxs)(t.p,{children:["We employ the ",(0,l.jsx)(t.strong,{children:"Jaccard Index"})," as our measure, which summarizes how well different methods perform in correctly segmenting page contours and penalizes those that fail to detect document objects in certain frames."]}),"\n",(0,l.jsx)(t.p,{children:"The evaluation process starts by using the size and coordinates of the document in each frame to perform a perspective transform on the quadrilateral coordinates of the submitted method S and the ground truth G, obtaining the corrected quadrilaterals S0 and G0. This transformation ensures that all evaluation metrics are comparable within the document reference system. For each frame f, we calculate the Jaccard Index (JI), an indicator of the degree of overlap of the corrected quadrilaterals, defined as the intersection polygon of the detected quadrilateral and the ground truth quadrilateral divided by their union polygon. The overall score for each method is the average of the scores across all frames in the test dataset."}),"\n",(0,l.jsx)(t.h2,{id:"results",children:"Results"}),"\n",(0,l.jsxs)(t.p,{children:["The following are the evaluation results of our models on the ",(0,l.jsx)(t.a,{href:"https://github.com/jchazalon/smartdoc15-ch1-dataset",children:(0,l.jsx)(t.strong,{children:"SmartDoc 2015"})})," dataset:"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Models"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"bg01"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"bg02"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"bg03"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"bg04"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"bg05"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Overall"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FastViT_SA24"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9944"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9932"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9940"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9937"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9929"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9937"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"MBV2_140"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9917"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9901"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9921"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9899"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9891"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9909"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FastViT_T8"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9920"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9894"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9918"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9896"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9888"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9906"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LC100"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9908"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9877"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9905"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9894"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9854"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9892"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LC050"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9847"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9822"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9865"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9811"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9722"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9826"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"PReg-LC050-XAtt"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9663"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9606"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9664"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9630"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9199"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9596"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"analysis-of-results",children:"Analysis of Results"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Although our models achieve scores close to SoTA, real-world scenarios are much more complex than this dataset, so do not overemphasize these scores; we simply aim to prove our models are effective."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Due to our efforts to reduce the size and computational demands of our models, we found that the models have poor zero-shot capability, meaning they need fine-tuning for best results in new environments."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:'Experiments showed that "heatmap regression models" have far greater stability than "point regression models," so we continue to recommend using heatmap models.'}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["We default to using ",(0,l.jsx)(t.code,{children:"FastViT_SA24"})," as the backbone for the heatmap model because of its effective performance and computational efficiency. You can replace it with a larger, more accurate backbone network if you wish."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Through experimentation, ",(0,l.jsx)(t.code,{children:"BiFPN"})," (3 layers) proved superior to ",(0,l.jsx)(t.code,{children:"FPN"})," (6 layers), so we recommend using ",(0,l.jsx)(t.code,{children:"BiFPN"}),". However, ",(0,l.jsx)(t.code,{children:"BiFPN"})," involves ",(0,l.jsx)(t.code,{children:"einsum"})," operations, which may cause issues with other inference frameworks, so if you encounter errors while using ",(0,l.jsx)(t.code,{children:"BiFPN"}),", consider switching to an ",(0,l.jsx)(t.code,{children:"FPN"})," model."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:'Although "heatmap regression models" show stable performance, they require supervision on high-resolution feature maps, thus significantly increasing computational load compared to "point regression models."'}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:'However, we still see the advantages of "point regression models," including but not limited to: the ability to predict corner points outside of the image frame; lower computational demands; and simple, fast post-processing steps. Therefore, we continue to optimize "point regression models" to enhance their performance.'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"parameter-settings",children:"Parameter Settings"}),"\n",(0,l.jsx)(t.p,{children:"The table below details the parameter settings used for each model:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Model Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ModelType"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"ModelCfg"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FastViT_SA24"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"heatmap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"fastvit_sa24"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"MBV2-140"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"heatmap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"mobilenetv2_140"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FastViT_T8"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"heatmap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"fastvit_t8"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LC100"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"heatmap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"lcnet100"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LC050"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"heatmap"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"lcnet050"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"PReg-LC050-XAtt"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"point"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"lcnet050"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"For example, to use the LC050 model, call as follows:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"from docaligner import DocAligner\n\nmodel = DocAligner(model_type='heatmap', model_cfg='lcnet050')\n"})}),"\n",(0,l.jsx)(t.h2,{id:"comparative-overview",children:"Comparative Overview"}),"\n",(0,l.jsx)(t.p,{children:"The table below compares each model name based on parameters, FP32 size, FLOPs, and overall score:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Model Name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Parameters (M)"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"FP32 Size (MB)"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"FLOPs(G)"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Overall Score"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FastViT_SA24"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"20.8"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"83.1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"8.5"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9937"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"MBV2-140"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"3.7"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"14.7"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2.4"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9909"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FastViT_T8"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"3.3"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"13.1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1.7"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9906"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LC100"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1.2"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"4.9"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1.6"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9892"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"LC050"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.4"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1.7"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1.2"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9826"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"PReg-LC050-XAtt"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1.1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"4.5"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.22"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.9596"})]})]})]}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:["Choosing a model is a process of trade-offs; when you need a smaller model, ",(0,l.jsx)(t.code,{children:"LC050"})," is a great option, though the overall score is lower; alternatively, you can use the default ",(0,l.jsx)(t.code,{children:"FastViT_SA24"}),", but it will occupy more space."]})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var l=n(96540);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);