"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9319],{25134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(74848),l=n(28453);const i={sidebar_position:6},r="Evaluation",c={id:"docclassifier/benchmark",title:"Evaluation",description:"The test dataset was provided by the client who proposed this project.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docclassifier/benchmark.md",sourceDirName:"docclassifier",slug:"/docclassifier/benchmark",permalink:"/en/docs/docclassifier/benchmark",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Model Design",permalink:"/en/docs/docclassifier/model_arch"},next:{title:"Discussion",permalink:"/en/docs/docclassifier/discussion"}},d={},h=[{value:"Evaluation Protocols",id:"evaluation-protocols",level:2},{value:"AUROC",id:"auroc",level:3},{value:"TPR@FPR Threshold Table",id:"tprfpr-threshold-table",level:3},{value:"Zero-shot Testing",id:"zero-shot-testing",level:3},{value:"Ablation Experiments",id:"ablation-experiments",level:2},{value:"Evaluation Results",id:"evaluation-results",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"evaluation",children:"Evaluation"}),"\n",(0,s.jsx)(t.p,{children:"The test dataset was provided by the client who proposed this project."}),"\n",(0,s.jsx)(t.p,{children:'This dataset comprises approximately 25,000 "de-identified" images after "text localization cropping," containing seven different categories, with extremely uneven quantities. The data contains a large amount of cropping deformation caused by various lighting changes, blurriness, reflections, and corner positioning errors.'}),"\n",(0,s.jsx)(t.p,{children:'We only cleaned the "misclassified category labels" of this dataset and then used all the data to evaluate the model\'s performance.'}),"\n",(0,s.jsx)(t.p,{children:"Due to privacy concerns, we only provide evaluation results based on this dataset."}),"\n",(0,s.jsx)(t.h2,{id:"evaluation-protocols",children:"Evaluation Protocols"}),"\n",(0,s.jsx)(t.h3,{id:"auroc",children:"AUROC"}),"\n",(0,s.jsx)(t.p,{children:"AUROC (Area Under the Receiver Operating Characteristic Curve) is a statistical metric used to evaluate the performance of classification models, especially in binary classification problems. The AUROC value ranges from 0 to 1, where a higher AUROC value indicates a better ability of the model to discriminate between two classes."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"ROC Curve"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Definition"}),": The ROC curve is a graphical evaluation tool that shows the performance of a classification model at all possible classification thresholds. It achieves this by plotting the values of True Positive Rate (TPR) and False Positive Rate (FPR) at different thresholds."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"True Positive Rate (TPR)"}),": Also known as sensitivity, calculated as TPR = TP / (TP + FN), where TP is the number of true positives, and FN is the number of false negatives."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"False Positive Rate (FPR)"}),": Calculated as FPR = FP / (FP + TN), where FP is the number of false positives, and TN is the number of true negatives."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Calculation of AUROC"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"AUROC is the area under the ROC curve. It provides a metric to summarize the performance of the model across all classification thresholds."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Interpretation"}),":","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"AUROC = 1"}),": Perfect classifier, able to completely distinguish between the two classes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"0.5 < AUROC < 1"}),": The model has some ability to discriminate, with higher AUROC values indicating better performance."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"AUROC = 0.5"}),": No discrimination ability, equivalent to random guessing."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"AUROC < 0.5"}),": Worse than random guessing, but if the model predicts the reverse, it may have better performance."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"tprfpr-threshold-table",children:"TPR@FPR Threshold Table"}),"\n",(0,s.jsx)(t.p,{children:"The TPR@FPR threshold table is a key evaluation tool widely used in the field of face recognition, mainly used to measure the model's performance at different threshold settings. This table is derived from the ROC curve and provides an intuitive and accurate method for evaluating model performance."}),"\n",(0,s.jsx)(t.p,{children:"For example, if the goal is to achieve a performance of at least 0.9 TPR (True Positive Rate) at an FPR (False Positive Rate) of 0.01, we can determine the corresponding threshold through the TPR-FPR threshold table. This threshold then guides the inference process of the model."}),"\n",(0,s.jsx)(t.p,{children:"In the implementation of this project, we also adopted a similar evaluation method. We chose the performance of TPR at FPR of 0.0001 as the standard, which helps us better understand the performance of the model under specific conditions."}),"\n",(0,s.jsx)(t.h3,{id:"zero-shot-testing",children:"Zero-shot Testing"}),"\n",(0,s.jsx)(t.p,{children:"We adopt a zero-shot testing strategy to ensure that all categories or patterns in the test data have not appeared in the training data. This means that during the training phase of the model, it has not encountered or learned any samples or categories from the test set. This approach aims to evaluate and verify the model's generalization ability and recognition performance when facing completely unknown data."}),"\n",(0,s.jsx)(t.p,{children:"This testing method is particularly suitable for evaluating zero-shot learning models because the core challenge of zero-shot learning is to deal with categories that the model has never seen during training. In the context of zero-shot learning, the model typically needs to use other forms of auxiliary information (such as textual descriptions of categories, attribute labels, or semantic relations between categories) to build an understanding of new categories. Therefore, in zero-shot testing, the model must rely on the knowledge it has learned from the training categories and the potential relationships between categories to identify new samples in the test set."}),"\n",(0,s.jsx)(t.h2,{id:"ablation-experiments",children:"Ablation Experiments"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Global settings"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Num of classes: 394,080"}),"\n",(0,s.jsx)(t.li,{children:"Num of epochs: 20"}),"\n",(0,s.jsx)(t.li,{children:"Num of data per epoch: 2,560,000"}),"\n",(0,s.jsx)(t.li,{children:"Batch Size: 512"}),"\n",(0,s.jsx)(t.li,{children:"Optimizer: AdamW"}),"\n",(0,s.jsxs)(t.li,{children:["Settings:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"flatten: Flatten -> Linear (Default)"}),"\n",(0,s.jsx)(t.li,{children:"gap: GlobalAveragePooling2d -> Linear"}),"\n",(0,s.jsx)(t.li,{children:"squeeze: Conv2d -> Flatten -> Linear"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Comprehensive Comparison"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"FLOPs (G)"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Size (MB)"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.754"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9951"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-softmax"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.663"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9907"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.784"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.9968"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-from-scratch"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.141"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9273"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-squeeze"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.772"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9958"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.052"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"2.46"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-bn-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.721"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.992"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f128-r96-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9944"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.029"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2.33"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-gap"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.480"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9762"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2.67"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"efficientnet_b0-f256-r128-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.682"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9931"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.242"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"19.89"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Comparison of Target Class Numbers"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Num_Classes"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"16,256"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.615"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9867"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"130,048"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.666"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9919"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"390,144"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.754"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.9951"})})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The more the number of classes, the better the model performance."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Comparison of MarginLoss"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-softmax"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.663"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9907"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-arc"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.754"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9951"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.784"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.9968"})})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When using CosFace or ArcFace alone, ArcFace performs better."}),"\n",(0,s.jsx)(t.li,{children:"After combining with PartialFC, CosFace performs better."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"BatchNorm vs LayerNorm"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-bn-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.721"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9921"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.784"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.9968"})})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"LayerNorm performs better than BatchNorm."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Pretrain vs From-Scratch"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-from-scratch"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.141"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9273"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.784"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.9968"})})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Pretraining is necessary and can save a lot of time."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Methods to Reduce Model Size"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Size (MB)"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"FLOPs (G)"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.784"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.9968"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5.54"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-squeeze"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.772"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9958"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"2.46"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.053"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos-gap"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.480"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9762"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2.67"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.053"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f128-r96-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9944"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2.33"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.029"})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Methods:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"flatten: Flatten -> Linear (Default)"}),"\n",(0,s.jsx)(t.li,{children:"gap: GlobalAveragePooling2d -> Linear"}),"\n",(0,s.jsx)(t.li,{children:"squeeze: Conv2d -> Flatten -> Linear"}),"\n",(0,s.jsx)(t.li,{children:"Reducing resolution and feature dimensions"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Using the squeeze method sacrifices some performance but reduces the model size by half."}),"\n",(0,s.jsx)(t.li,{children:"Using the gap method significantly reduces accuracy."}),"\n",(0,s.jsx)(t.li,{children:"Reducing resolution and feature dimensions leads to a slight decrease in accuracy."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Increasing Backbone Size"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lcnet050-f256-r128-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.784"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.9968"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"efficientnet_b0-f256-r128-ln-cos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.682"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9931"})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Increasing the number of parameters decreases performance, which we attribute to the limited diversity of training data. Since our approach cannot provide too much diversity, increasing the number of parameters does not improve performance."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Introduction of ImageNet1K Dataset and Knowledge Distillation using CLIP Model"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Dataset"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"with CLIP"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Norm"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Num_Classes"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"TPR@FPR=1e-4"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ROC"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Indoor"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"LN"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"390,144"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.772"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9958"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ImageNet-1K"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"LN"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1,281,833"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.813"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9961"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ImageNet-1K"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"LN"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1,281,833"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.859"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.9982"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ImageNet-1K"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"V"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"LN + BN"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1,281,833"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.912"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"0.9984"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"As the dataset size expands, the original parameter settings can no longer allow the model to converge smoothly."}),"\n",(0,s.jsx)(t.p,{children:"Therefore, we made some adjustments to the model:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Settings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Num of classes: 1,281,833"}),"\n",(0,s.jsx)(t.li,{children:"Num of epochs: 40"}),"\n",(0,s.jsx)(t.li,{children:"Num of data per epoch: 25,600,000 (If the model cannot converge smoothly, it may be due to insufficient data.)"}),"\n",(0,s.jsx)(t.li,{children:"Batch Size: 1024"}),"\n",(0,s.jsx)(t.li,{children:"Optimizer: AdamW"}),"\n",(0,s.jsx)(t.li,{children:"Learning Rate: 0.001"}),"\n",(0,s.jsx)(t.li,{children:"Learning Rate Scheduler: PolynomialDecay"}),"\n",(0,s.jsxs)(t.li,{children:["Setting:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"squeeze: Conv2d -> Flatten -> Linear"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Using ImageNet-1K to expand the number of categories to about 1.3 million, providing the model with richer image variations and increasing data diversity, resulting in a 4.1% improvement in performance."}),"\n",(0,s.jsx)(t.li,{children:"Introducing the CLIP model on top of ImageNet-1K during training for knowledge distillation resulted in a further 4.6% improvement in performance over the TPR@FPR=1e-4 benchmark."}),"\n",(0,s.jsx)(t.li,{children:"When using both BatchNorm and LayerNorm together, the result can be improved to 91.2%."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"evaluation-results",children:"Evaluation Results"}),"\n",(0,s.jsx)(t.p,{children:"In evaluating the model's ability, we adopt the standard of TPR@FPR=1e-4. However, this standard is relatively strict, and using it in deployment may result in a less optimal user experience. Therefore, we recommend using TPR@FPR=1e-1 or TPR@FPR=1e-2 threshold settings during deployment."}),"\n",(0,s.jsxs)(t.p,{children:["Currently, our default threshold is set to ",(0,s.jsx)(t.code,{children:"TPR@FPR=1e-2"}),", which we have determined to be a more suitable threshold after our testing and evaluation. The detailed threshold setting table is as follows:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"lcnet050_cosface_f256_r128_squeeze_imagenet_clip_20240326 results"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["Setting ",(0,s.jsx)(t.code,{children:"model_cfg"}),' to "20240326"']})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"TPR@FPR=1e-4: 0.912"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"FPR"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"1e-05"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"1e-04"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"1e-03"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"1e-02"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"1e-01"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"1"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"TPR"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.856"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.912"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.953"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.980"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.996"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Threshold"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.682"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.657"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.626"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.581"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"0.359"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"TSNE & PCA & ROC Curve"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"result",src:n(77141).A+"",width:"2012",height:"4936"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},77141:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/cosface_result_squeeze_imagenet_clip_20240326-d874056ab91a84fc909f9796fb064fb5.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);