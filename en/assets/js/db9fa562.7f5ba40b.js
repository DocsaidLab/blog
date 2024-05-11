"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8678],{87141:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(74848),o=i(28453);const s={sidebar_position:5},r="Model Design",a={id:"docaligner/model_arch",title:"Model Design",description:"Referencing past research, we first considered a point regression model.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docaligner/model_arch.md",sourceDirName:"docaligner",slug:"/docaligner/model_arch",permalink:"/en/docs/docaligner/model_arch",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/en/docs/docaligner/advance"},next:{title:"Evaluation",permalink:"/en/docs/docaligner/benchmark"}},l={},c=[{value:"Point Regression Model",id:"point-regression-model",level:2},{value:"1. Feature Extraction",id:"1-feature-extraction",level:3},{value:"2. Cross-Attention",id:"2-cross-attention",level:3},{value:"3. Point Regression",id:"3-point-regression",level:3},{value:"4. Smooth L1 Loss",id:"4-smooth-l1-loss",level:3},{value:"Catastrophic Failure",id:"catastrophic-failure",level:2},{value:"Approaches by Others",id:"approaches-by-others",level:2},{value:"Predicting on Large Images",id:"predicting-on-large-images",level:3},{value:"Introducing Anchors and Offsets",id:"introducing-anchors-and-offsets",level:3},{value:"Directly Fitting Evaluation Dataset",id:"directly-fitting-evaluation-dataset",level:3},{value:"Heatmap Regression Model",id:"heatmap-regression-model",level:2},{value:"1. Feature Extraction",id:"1-feature-extraction-1",level:3},{value:"2. BiFPN",id:"2-bifpn",level:3},{value:"3. Heatmap Regression",id:"3-heatmap-regression",level:3},{value:"4. Adaptive Wing Loss",id:"4-adaptive-wing-loss",level:3},{value:"Resolving Amplification Error",id:"resolving-amplification-error",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"model-design",children:"Model Design"}),"\n",(0,t.jsx)(n.p,{children:"Referencing past research, we first considered a point regression model."}),"\n",(0,t.jsxs)(n.p,{children:["If you're interested in the details of previous research, please refer to: ",(0,t.jsx)(n.a,{href:"/en/docs/docaligner/reference",children:(0,t.jsx)(n.strong,{children:"References"})})]}),"\n",(0,t.jsx)(n.h2,{id:"point-regression-model",children:"Point Regression Model"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"arch_1.jpg",src:i(99428).A+"",width:"4574",height:"3254"})}),"\n",(0,t.jsx)(n.p,{children:"The point regression model was our initial version, structured into four main components:"}),"\n",(0,t.jsx)(n.h3,{id:"1-feature-extraction",children:"1. Feature Extraction"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pp-lcnet.jpg",src:i(97452).A+"",width:"1224",height:"736"})}),"\n",(0,t.jsxs)(n.p,{children:["This part primarily transforms images into vectors. Here, we utilize ",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/2109.15099",children:(0,t.jsx)(n.strong,{children:"PP-LCNet"})})," as the feature extractor."]}),"\n",(0,t.jsx)(n.p,{children:"The input image is a 128 x 128 RGB image, and after feature extraction, it outputs a 256-dimensional vector."}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Why do you always prefer LCNet?"})}),(0,t.jsx)(n.p,{children:"We often need to deploy the model on mobile devices. LCNet is exceptionally lightweight, suitable for running on smartphones. Additionally, when we need to quantize the model, LCNet usually doesn't encounter issues with unsupported operations."})]}),"\n",(0,t.jsx)(n.h3,{id:"2-cross-attention",children:"2. Cross-Attention"}),"\n",(0,t.jsx)(n.p,{children:"In this model, the Neck part enhances the features from the Backbone."}),"\n",(0,t.jsx)(n.p,{children:"Here, we employ Cross-Attention, a mechanism commonly used in Transformers, which captures relationships between different features and applies them to enhance the features. We expect Cross-Attention to help the model understand spatial relationships between different points in images, thus improving prediction accuracy. Apart from Cross-Attention, we also use positional encodings, aiding the model in understanding the spatial positions of points in images, thereby enhancing prediction accuracy."}),"\n",(0,t.jsx)(n.p,{children:"Given the nature of point regression, which heavily relies on precise pixel localization, especially on low-level features, we sequentially query from deep features to shallow features (1/32 -> 1/16 -> 1/8 -> 1/4 -> 1/2). This design allows the model to locate documents' positions across different scales effectively. We believe this querying approach can significantly enhance the model's accuracy."}),"\n",(0,t.jsx)(n.h3,{id:"3-point-regression",children:"3. Point Regression"}),"\n",(0,t.jsx)(n.p,{children:"In the design of our prediction head, we utilize a simple linear layer, converting features into point coordinates. We aim for the model to rely more on the expressive power of Cross-Attention features rather than complex head structures."}),"\n",(0,t.jsx)(n.h3,{id:"4-smooth-l1-loss",children:"4. Smooth L1 Loss"}),"\n",(0,t.jsx)(n.p,{children:"In our model, we opt for Smooth L1 Loss as the loss function, commonly used in regression tasks, particularly suitable for handling outliers."}),"\n",(0,t.jsx)(n.p,{children:'Compared to L1 Loss, Smooth L1 Loss is more robust when the difference between predicted and true values is large, reducing the impact of outliers on model training. Additionally, to mitigate amplification errors in point regression, we "boost the weights of point predictions to 1000". Through our experiments, this design effectively enhances model accuracy.'}),"\n",(0,t.jsx)(n.p,{children:"Besides corner loss, we also employ other losses, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Classification Loss: Used for classifying whether a document exists in an image, employing BCE Loss."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Please note that this classification loss is not merely auxiliary but one of the main losses. Due to the constraints of corner point prediction, the model may still predict corners even when there's no target object. Therefore, in the deployment phase, we need a classification head to inform us whether an object exists."}),"\n",(0,t.jsx)(n.h2,{id:"catastrophic-failure",children:"Catastrophic Failure"}),"\n",(0,t.jsxs)(n.p,{children:['In the architecture of the "Point Regression Model," we encountered a severe issue of "',(0,t.jsx)(n.strong,{children:"amplification error"}),'".']}),"\n",(0,t.jsx)(n.p,{children:"The root of this problem lies in the process of training the model, where we need to downscale the original images to 128 x 128 or 256 x 256. This downsizing leads to the loss of detailed information in the original images, causing the model to inaccurately locate document corners during prediction."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To be precise, the model finds corners based on downscaled images."})}),"\n",(0,t.jsx)(n.p,{children:"Then, we must upscale these corners to the original image size to find the precise positions of document corners. This upscaling process introduces an offset of approximately 5 to 10 pixels, leading to inaccuracies in predicting document positions."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You can imagine: in the original image, a region of about 10 pixels around the target corner will be reduced to 1 pixel during prediction. Then, the model makes predictions, resulting in corner positions offset during upscaling."})}),"\n",(0,t.jsx)(n.h2,{id:"approaches-by-others",children:"Approaches by Others"}),"\n",(0,t.jsx)(n.p,{children:"Upon encountering this issue, we consciously sought how others resolved it."}),"\n",(0,t.jsx)(n.p,{children:"Later, we found in many papers within the field of Document Localization, the solution is:"}),"\n",(0,t.jsx)(n.h3,{id:"predicting-on-large-images",children:"Predicting on Large Images"}),"\n",(0,t.jsx)(n.p,{children:"This approach ensures that the model accurately finds document corners during prediction."}),"\n",(0,t.jsx)(n.p,{children:"However, it's slow, very slow."}),"\n",(0,t.jsx)(n.h3,{id:"introducing-anchors-and-offsets",children:"Introducing Anchors and Offsets"}),"\n",(0,t.jsx)(n.p,{children:"The Anchor-Based approach can be borrowed from the object detection domain. We would need some prior knowledge to define anchor sizes. However, since documents can appear in images with arbitrary angles and deformations, the design of anchors would limit the model's detection ability within a certain range."}),"\n",(0,t.jsx)(n.p,{children:"Basically, you can rewrite the pros and cons of the anchor architecture you know here."}),"\n",(0,t.jsx)(n.p,{children:"In the real world, the aspect ratios of documents are too arbitrary, making anchor design unsuitable."}),"\n",(0,t.jsx)(n.h3,{id:"directly-fitting-evaluation-dataset",children:"Directly Fitting Evaluation Dataset"}),"\n",(0,t.jsx)(n.p,{children:"In earlier papers, the logic seems more like designing an algorithm directly for SmartDoc 2015 rather than creating a universal model."}),"\n",(0,t.jsx)(n.p,{children:"In recent years' papers, SmartDoc 2015 is typically split into training and testing sets. Through this approach, improvements in scores for SmartDoc 2015 are achieved."}),"\n",(0,t.jsx)(n.p,{children:"So, you may see many architecture scores in benchmarks that seem decent, but in practical applications, they lack sufficient generalization."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"We found that researchers in this field don't have a unified view on how to solve this problem."}),"\n",(0,t.jsx)(n.h2,{id:"heatmap-regression-model",children:"Heatmap Regression Model"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"arch_2.jpg",src:i(11348).A+"",width:"3277",height:"1929"})}),"\n",(0,t.jsx)(n.p,{children:"This model architecture retains the original feature extractor but modifies the Neck and Head sections."}),"\n",(0,t.jsx)(n.h3,{id:"1-feature-extraction-1",children:"1. Feature Extraction"}),"\n",(0,t.jsx)(n.p,{children:"Apart from using LCNet for mobile-friendly models, we also employ a larger model to extract more features. Because we aim to develop a model that surpasses SoTA, LCNet alone isn't sufficient."}),"\n",(0,t.jsx)(n.p,{children:"In this model, we attempt using lightweight convolutional neural networks like FastViT, MobileNetV2, etc., especially suitable for efficient feature extraction in resource-constrained environments. We expect the Backbone to extract sufficient feature information from input data to prepare for subsequent heatmap regression."}),"\n",(0,t.jsx)(n.h3,{id:"2-bifpn",children:"2. BiFPN"}),"\n",(0,t.jsx)(n.p,{children:"To better integrate multi-scale features, we introduce BiFPN (Bidirectional Feature Pyramid Network), which enhances feature representation through bidirectional flow of contextual information. We anticipate BiFPN to produce a series of scale-rich and semantically strong feature maps, highly effective in capturing objects at different scales and positively impacting final prediction accuracy."}),"\n",(0,t.jsx)(n.h3,{id:"3-heatmap-regression",children:"3. Heatmap Regression"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"awing_loss.jpg",src:i(91401).A+"",width:"1224",height:"912"})}),"\n",(0,t.jsxs)(n.p,{children:['To address the aforementioned amplification error, we need a certain "fuzziness" in the predicted results. Meaning, we shouldn\'t let the model precisely pinpoint where the document corners are but rather make the model say, "',(0,t.jsx)(n.strong,{children:"The document corners are approximately in this area"}),'".']}),"\n",(0,t.jsxs)(n.p,{children:["For this, we adopted a method commonly used in face keypoint detection or human pose estimation: ",(0,t.jsx)(n.strong,{children:"heatmap regression"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Heatmap regression generates a heatmap representation of objects, reflecting the likelihood of objects appearing at different positions. By analyzing these heatmaps, the model can accurately predict the position and pose of objects. In our context, heatmaps are used to find document corners."}),"\n",(0,t.jsx)(n.h3,{id:"4-adaptive-wing-loss",children:"4. Adaptive Wing Loss"}),"\n",(0,t.jsx)(n.p,{children:"Loss is crucial in model training, responsible for calculating the difference between model predictions and ground truth labels."}),"\n",(0,t.jsx)(n.p,{children:"In this model, we use Adaptive Wing Loss, a loss function specifically for face keypoint detection. This method innovates upon loss functions in heatmap regression, particularly suitable for face alignment problems. Its core idea is to adjust the shape of the loss function based on different types of true heatmap pixels, applying more penalty to foreground pixels (pixels near facial keypoints) and less penalty to background pixels."}),"\n",(0,t.jsx)(n.p,{children:"Here, we treat the document corner prediction problem as a face keypoint detection problem and use a loss function specialized for face keypoint detection in heatmap regression. We believe this approach can effectively address issues in document corner detection and perform well in various scenarios."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reference:"})," ",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/1904.07399",children:(0,t.jsx)(n.strong,{children:"Adaptive Wing Loss for Robust Face Alignment via Heatmap Regression"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Apart from corner loss, we also use multiple auxiliary losses, including:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Edge Loss:"})," Here, we simultaneously supervise object boundary information, using AWing Loss."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Classification Loss:"})," Here, used for predicting whether a document exists in the image, employing BCE Loss."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"resolving-amplification-error",children:"Resolving Amplification Error"}),"\n",(0,t.jsxs)(n.p,{children:["The output of the heatmap regression model is a heatmap, indicating approximately where the document corners are. Then, we ",(0,t.jsx)(n.strong,{children:"cannot directly use this heatmap"})," because it's downscaled. The actual steps are as follows:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"We need to upscale this heatmap to the original image size."}),"\n",(0,t.jsx)(n.li,{children:"Using image post-processing methods, we find the Contour of each heatmap corner area."}),"\n",(0,t.jsx)(n.li,{children:"We calculate the centroid of the Contour, which represents the document corner."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This way, the model can accurately locate corners, resolving the previously mentioned amplification error issue."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"In the architecture of the heatmap model, you can find a significant drawback:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Not an end-to-end model"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This has been a question we've been constantly pondering while designing the model. We hope to design an end-to-end model, which would be simpler for users and allow the model to learn from each component. However, due to the challenges encountered in the point regression model, we had to resort to the design approach of the heatmap regression model."}),"\n",(0,t.jsx)(n.p,{children:"In conclusion, after resolving the amplification error issue, we can focus on discussing model scalability, speed, accuracy, etc."}),"\n",(0,t.jsx)(n.p,{children:"In our experiments, using a larger Backbone, a more complex Neck, all contribute to improving model accuracy."}),"\n",(0,t.jsx)(n.p,{children:"During deployment, you only need to consider the computational constraints of the usage scenario and choose the appropriate model."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},91401:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/awing_loss-f4531a7f843e26f0085e9962144a905d.jpg"},11348:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/hmap_model_arch-5a3b42fd4d54769ec6f331952327e323.jpg"},97452:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/lcnet_arch-89fd4d95f589dbbd8ca1edc5b4486391.jpg"},99428:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/point_model_arch-cb2afeedf5c66ea527d29726f64e2f03.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);