"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2406],{1099:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(74848),r=n(28453);const a={sidebar_position:5},s="Model Design",o={id:"docclassifier/model_arch",title:"Model Design",description:"A comprehensive model functionality is not achieved overnight; it requires multiple iterations of adjustments and designs.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docclassifier/model_arch.md",sourceDirName:"docclassifier",slug:"/docclassifier/model_arch",permalink:"/en/docs/docclassifier/model_arch",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/en/docs/docclassifier/advance"},next:{title:"Evaluation",permalink:"/en/docs/docclassifier/benchmark"}},d={},l=[{value:"First Generation Model",id:"first-generation-model",level:2},{value:"1. Feature Extractor",id:"1-feature-extractor",level:3},{value:"2. CosFace",id:"2-cosface",level:3},{value:"3. Dataset",id:"3-dataset",level:3},{value:"4. Training",id:"4-training",level:3},{value:"Second Generation Model",id:"second-generation-model",level:2},{value:"1. Increased Data",id:"1-increased-data",level:3},{value:"2. Switched from CosFace to PartialFC",id:"2-switched-from-cosface-to-partialfc",level:3},{value:"3. More Data",id:"3-more-data",level:3},{value:"4. More and More Data!",id:"4-more-and-more-data",level:3},{value:"Third Generation Model",id:"third-generation-model",level:2},{value:"1. CLIP",id:"1-clip",level:3},{value:"2. Normalization Layer Stacking",id:"2-normalization-layer-stacking",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"model-design",children:"Model Design"}),"\n",(0,t.jsx)(i.p,{children:"A comprehensive model functionality is not achieved overnight; it requires multiple iterations of adjustments and designs."}),"\n",(0,t.jsx)(i.h2,{id:"first-generation-model",children:"First Generation Model"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"arch_1.jpg",src:n(56433).A+"",width:"3176",height:"779"})}),"\n",(0,t.jsx)(i.p,{children:"The first-generation model, our earliest version, is divided into four main parts:"}),"\n",(0,t.jsx)(i.h3,{id:"1-feature-extractor",children:"1. Feature Extractor"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"pp-lcnet.jpg",src:n(20749).A+"",width:"1224",height:"736"})}),"\n",(0,t.jsxs)(i.p,{children:["This part is primarily responsible for converting images into vectors. Here, we utilize ",(0,t.jsx)(i.a,{href:"https://arxiv.org/abs/2109.15099",children:(0,t.jsx)(i.strong,{children:"PP-LCNet"})})," as the feature extractor. Given input images of size 128 x 128 RGB, the feature extractor outputs a 256-dimensional vector."]}),"\n",(0,t.jsx)(i.h3,{id:"2-cosface",children:"2. CosFace"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"cosface.jpg",src:n(41066).A+"",width:"1224",height:"348"})}),"\n",(0,t.jsxs)(i.p,{children:["Since we were keen to test the effectiveness of metric learning from the outset, we bypassed the implementation of traditional classifiers and directly adopted the method of ",(0,t.jsx)(i.a,{href:"https://arxiv.org/abs/1801.09414",children:(0,t.jsx)(i.strong,{children:"CosFace"})}),". However, we won't delve deeply into margin-based methods here. If needed, we can dedicate a separate topic in our paper readings section to specifically introduce relevant advancements."]}),"\n",(0,t.jsx)(i.h3,{id:"3-dataset",children:"3. Dataset"}),"\n",(0,t.jsxs)(i.p,{children:["To train the model, we developed a simple web crawler to fetch images of documents from the internet. We collected images from over 650 different types of documents, with the majority being credit cards from various banks. The dataset can be found ",(0,t.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocClassifier/tree/main/data/unique_pool",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"4-training",children:"4. Training"}),"\n",(0,t.jsx)(i.p,{children:"We used PyTorch for training the model, with each individual image treated as a separate class. This design choice stemmed from our desire for the model to accurately identify differences among various documents, even subtle ones."}),"\n",(0,t.jsx)(i.p,{children:"This approach raised a question regarding the large number of classes and limited original data (only one image per class). Thus, data augmentation techniques were employed to increase the dataset size."}),"\n",(0,t.jsxs)(i.p,{children:["We opted for ",(0,t.jsx)(i.a,{href:"https://github.com/albumentations-team/albumentations",children:(0,t.jsx)(i.strong,{children:"Albumentations"})}),", a highly effective data augmentation module, to rapidly expand the dataset, which we also recommend to others."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.p,{children:"While the first-generation model validated our initial concept, practical application revealed some issues:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Stability"})}),"\n",(0,t.jsx)(i.p,{children:"In real-world testing scenarios, we found the model lacked stability and was susceptible to environmental changes. Distortions during document corrections significantly affected the model's performance. Given that document distortions are inevitable, a stable model should not be unduly affected by slight deformations."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Performance"})}),"\n",(0,t.jsx)(i.p,{children:"Similar documents often confused the model during real-world testing, indicating insufficiently discriminative features learned by the model, hindering its ability to differentiate between different documents effectively."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Combining these observations, our conclusion was: ",(0,t.jsx)(i.strong,{children:"the model was overfitting!"})]}),"\n",(0,t.jsx)(i.h2,{id:"second-generation-model",children:"Second Generation Model"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"arch_2.jpg",src:n(28678).A+"",width:"3176",height:"779"})}),"\n",(0,t.jsx)(i.p,{children:"The second-generation model builds upon the first generation with several improvements:"}),"\n",(0,t.jsx)(i.h3,{id:"1-increased-data",children:"1. Increased Data"}),"\n",(0,t.jsxs)(i.p,{children:["Unable to acquire more document images, we pondered: ",(0,t.jsx)(i.strong,{children:"why not treat data from other open-source datasets as documents?"})," Hence, we included data from the ",(0,t.jsx)(i.a,{href:"https://web.mit.edu/torralba/www/indoor.html",children:(0,t.jsx)(i.strong,{children:"Indoor Scene Recognition"})}),' dataset by MIT, containing images of 67 different indoor scenes, totaling around 15,620 images. This greatly diversified our "document" types.']}),"\n",(0,t.jsx)(i.h3,{id:"2-switched-from-cosface-to-partialfc",children:"2. Switched from CosFace to PartialFC"}),"\n",(0,t.jsxs)(i.p,{children:["As the number of classes increased, issues with a large classification head became apparent. In the field of facial recognition, a method called ",(0,t.jsx)(i.a,{href:"https://arxiv.org/abs/2203.15565",children:(0,t.jsx)(i.strong,{children:"PartialFC"})})," is well-known. The research team found that in learning facial features, the importance of negative classes (i.e., non-target classes) within Softmax functions was not as high as previously thought. Even when training with only 10% of randomly sampled classes, compared to using all classes, accuracy did not significantly decrease."]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["This is a godsend for us retail traders with limited computing power! We extend our special thanks to ",(0,t.jsx)(i.a,{href:"https://github.com/deepinsight/insightface",children:(0,t.jsx)(i.strong,{children:"insightface"})})," for their implementation. If you have the time, consider giving them a star."]})}),"\n",(0,t.jsx)(i.h3,{id:"3-more-data",children:"3. More Data"}),"\n",(0,t.jsx)(i.p,{children:'Despite increasing the dataset size, overfitting persisted. Hence, we subjected each image to rotations, flips, and crops, generating "24" categories per image. For instance:'}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Original image"}),"\n",(0,t.jsx)(i.li,{children:"Rotated 90 degrees"}),"\n",(0,t.jsx)(i.li,{children:"Rotated 180 degrees"}),"\n",(0,t.jsx)(i.li,{children:"Rotated 270 degrees"}),"\n",(0,t.jsx)(i.li,{children:"Horizontal flip"}),"\n",(0,t.jsx)(i.li,{children:"Horizontal flip + rotated 90 degrees"}),"\n",(0,t.jsx)(i.li,{children:"Horizontal flip + rotated 180 degrees"}),"\n",(0,t.jsx)(i.li,{children:"Horizontal flip + rotated 270 degrees"}),"\n",(0,t.jsx)(i.li,{children:"Original image (upper half)"}),"\n",(0,t.jsx)(i.li,{children:"Original image (upper half) + rotated 90 degrees"}),"\n",(0,t.jsx)(i.li,{children:"Original image (upper half) + rotated 180 degrees"}),"\n",(0,t.jsx)(i.li,{children:"......"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Thus, we transformed each original image into (15,620 + 650) x 24 = 390,480 images (categories)."}),"\n",(0,t.jsx)(i.h3,{id:"4-more-and-more-data",children:"4. More and More Data!"}),"\n",(0,t.jsxs)(i.p,{children:["While overfitting reduced, it remained unresolved. Clearly, relying solely on data from ",(0,t.jsx)(i.strong,{children:"Indoor Scene Recognition"})," was insufficient. We needed greater diversity to support the model's learning. Thus, we replaced ",(0,t.jsx)(i.strong,{children:"Indoor Scene Recognition"})," with ",(0,t.jsx)(i.a,{href:"https://www.image-net.org/",children:(0,t.jsx)(i.strong,{children:"ImageNet-1K"})}),", a massive dataset containing images from 1,000 different categories, totaling approximately 1,281,167 images."]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"Besides the 1K version, there's also a 21K version with around fourteen million images."})}),"\n",(0,t.jsx)(i.p,{children:"Finally, with class expansion to over 1.28 million, the overfitting issue was resolved."}),"\n",(0,t.jsx)(i.h2,{id:"third-generation-model",children:"Third Generation Model"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"arch_3.jpg",src:n(71811).A+"",width:"3877",height:"1407"})}),"\n",(0,t.jsx)(i.p,{children:"Striving for a more stable model, we experimented with new methods:"}),"\n",(0,t.jsx)(i.h3,{id:"1-clip",children:"1. CLIP"}),"\n",(0,t.jsxs)(i.p,{children:["Despite being several years since OpenAI introduced ",(0,t.jsx)(i.a,{href:"https://arxiv.org/abs/2103.00020",children:(0,t.jsx)(i.strong,{children:"CLIP"})}),", its relevance continues across various domains. We believed integrating some CLIP features into our existing architecture could enhance model stability. Our hypothesis was that CLIP, having seen a broader range of images, could provide more robust feature vectors. Thus, aligning the features learned by our model with CLIP's seemed promising."]}),"\n",(0,t.jsx)(i.p,{children:"To test our hypothesis, we designed the following process:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Maintain the second-generation architecture."}),"\n",(0,t.jsx)(i.li,{children:"Obtain image feature vectors (Feature 1) by inputting original images into our CNN backbone."}),"\n",(0,t.jsx)(i.li,{children:"Simultaneously, input the original images into the CLIP-Image branch to obtain image feature vectors (Feature 2)."}),"\n",(0,t.jsx)(i.li,{children:"Calculate the KLD loss (a loss function considering vector similarity) between Feature 1 and Feature 2."}),"\n",(0,t.jsx)(i.li,{children:"Incorporate the KLD loss into the existing loss function, freezing the CLIP-Image branch parameters and training only the second-generation architecture branch."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This attempt yielded unprecedented success, significantly enhancing our model's stability and improving validation dataset performance by nearly 5 percentage points."}),"\n",(0,t.jsx)(i.h3,{id:"2-normalization-layer-stacking",children:"2. Normalization Layer Stacking"}),"\n",(0,t.jsx)(i.p,{children:"In the second-generation model, we experimented with various normalization layers, including BatchNorm, LayerNorm, and InstanceNorm. Unlike facial recognition models, where BatchNorm typically yields superior results, in our experiments, LayerNorm performed better."}),"\n",(0,t.jsx)(i.p,{children:"However, in a serendipitous experiment, we stumbled upon a better normalization approach:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"Simultaneous use of BatchNorm and LayerNorm!"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Forgetting to remove this during training unexpectedly improved scores by 5 percentage points."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"self.embed_feats = nn.Sequential(\n    nn.Linear(in_dim_flatten, embed_dim, bias=False),\n    nn.LayerNorm(embed_dim),\n    nn.BatchNorm1d(embed_dim),\n    nn.Linear(embed_dim, embed_dim, bias=False),\n    nn.LayerNorm(embed_dim),\n    nn.BatchNorm1d(embed_dim),\n)\n"})}),"\n",(0,t.jsx)(i.p,{children:"After thorough investigation, we confirmed that this behavior led to the improvement, prompting us to adopt this approach."}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"The third-generation model exhibits significant improvements in both stability and performance. We are pleased with its performance and have achieved satisfactory results in practical applications. We believe the milestone tasks for this mission are completed, and we present this series of results here, hoping they will be helpful to others."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},56433:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/arch1-89cc525b9ffe2ebb654bbe26abc3441e.jpg"},28678:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/arch2-1b2be66b452227ffb08ea0deeda493ce.jpg"},71811:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/arch3-eaaa66125e7eb5c097ce748be90f03f5.jpg"},41066:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/cosface-fa54d916c225516fc25248859d8d561e.jpg"},20749:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/lcnet_arch-89fd4d95f589dbbd8ca1edc5b4486391.jpg"},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var t=n(96540);const r={},a=t.createContext(r);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);