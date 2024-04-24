"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8550],{58524:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=n(74848),s=n(28453);const a={sidebar_position:1},r="Introduction",o={id:"docclassifier/intro",title:"Introduction",description:'The core functionality of this project is called "Document Classification".',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docclassifier/intro.md",sourceDirName:"docclassifier",slug:"/docclassifier/intro",permalink:"/en/docs/docclassifier/intro",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713961801e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DocClassifier",permalink:"/en/docs/category/docclassifier"},next:{title:"Installation",permalink:"/en/docs/docclassifier/installation"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Class Definition",id:"class-definition",level:3},{value:"Data Imbalance",id:"data-imbalance",level:3},{value:"Data Augmentation",id:"data-augmentation",level:3},{value:"Class Sub-labels",id:"class-sub-labels",level:3},{value:"Metric Learning",id:"metric-learning",level:2},{value:"Application Scenarios",id:"application-scenarios",level:3},{value:"Problem Solving",id:"problem-solving",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(i.p,{children:['The core functionality of this project is called "',(0,t.jsx)(i.strong,{children:"Document Classification"}),'".']}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocClassifier",children:(0,t.jsx)(i.strong,{children:"DocClassifier Github"})})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"title",src:n(95530).A+"",width:"1792",height:"1024"})}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["This project has a unique origin. It was conceived by an expert in facial recognition systems, who happens to be my friend: ",(0,t.jsx)(i.a,{href:"https://github.com/Jack-Lin-NTU",children:(0,t.jsx)(i.strong,{children:"Jack, L."})}),". He knew about my website, so he completed the initial programming and feasibility verification. Then, he entrusted me with this idea to further develop and publish it here. Special thanks to him for his contribution."]})}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsx)(i.p,{children:'Upon seeing this title, you might smirk and think, "Isn\'t it just a classification model?"'}),(0,t.jsx)(i.p,{children:"Yes, and no."}),(0,t.jsx)(i.p,{children:"This time, we aim to create an atypical classification model. While its application scope may be limited, its intrinsic interest is quite high."}),(0,t.jsx)(i.p,{children:"It might not be what you imagine. Please continue reading."})]}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:"In past project experiences, the classification model can be considered one of the most common machine learning tasks."}),"\n",(0,t.jsx)(i.p,{children:"There's nothing particularly difficult about classification models. First, we build a backbone, then map the final output to multiple specific categories, and finally evaluate the model's performance using several metrics such as accuracy, recall, F1-Score, and so on."}),"\n",(0,t.jsx)(i.p,{children:"Although this sounds straightforward, in practical applications, we encounter some challenges. Let's take the topic of this project as an example:"}),"\n",(0,t.jsx)(i.h3,{id:"class-definition",children:"Class Definition"}),"\n",(0,t.jsx)(i.p,{children:"In any classification task, clearly and precisely defining categories is crucial. However, if the categories we define are highly similar, the model may struggle to differentiate between them."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"For example: Documents from Company A vs. Documents from Company B."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"These two categories are both documents from different companies, and their differences may not be significant, making it challenging for the model to distinguish between them."}),"\n",(0,t.jsx)(i.h3,{id:"data-imbalance",children:"Data Imbalance"}),"\n",(0,t.jsx)(i.p,{children:"In most scenarios, data collection is a challenging issue, especially when it involves sensitive data. In such cases, we may encounter data imbalance problems, which can lead to the model's insufficient predictive power for minority categories."}),"\n",(0,t.jsx)(i.h3,{id:"data-augmentation",children:"Data Augmentation"}),"\n",(0,t.jsx)(i.p,{children:"In the industry, there is a plethora of documents, and we constantly want to add more document categories. However, each time we add a new category, the entire model needs to be retrained or fine-tuned. This incurs a high cost, including but not limited to: data collection, labeling, retraining, reevaluation, deployment, etc. All processes need to be repeated."}),"\n",(0,t.jsx)(i.h3,{id:"class-sub-labels",children:"Class Sub-labels"}),"\n",(0,t.jsx)(i.p,{children:"Customer demands can be wild."}),"\n",(0,t.jsx)(i.p,{children:"Let's assume there's a client who initially defines a document type, let's call it Document A."}),"\n",(0,t.jsx)(i.p,{children:"Then, the client wishes to provide more sub-labels for Document A, such as:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Damaged Document A"}),"\n",(0,t.jsx)(i.li,{children:"Glare Document A"}),"\n",(0,t.jsx)(i.li,{children:"First-generation format of Document A"}),"\n",(0,t.jsx)(i.li,{children:"Second-generation format of Document A"}),"\n",(0,t.jsx)(i.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Ignoring the fact that every time a sub-label is added, the model needs to be rerun."}),"\n",(0,t.jsx)(i.p,{children:'From the perspective of model engineering, if we treat these labels as independent categories, it\'s "unreasonable" because they are all based on Document A. If we treat these labels as a multi-class problem, it\'s also "unreasonable" because different sub-labels correspond to different main document formats.'}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsx)(i.p,{children:"You might think next: If we can't solve the problem, let's solve the person who raised the problem."}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"No!"}),"\n"]}),(0,t.jsx)(i.p,{children:"This is a machine learning problem."})]}),"\n",(0,t.jsx)(i.h2,{id:"metric-learning",children:"Metric Learning"}),"\n",(0,t.jsxs)(i.p,{children:["Stepping out of the document classification topic, you'll realize that this problem is actually about ",(0,t.jsx)(i.strong,{children:"metric learning"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"The main goal of metric learning is to measure the similarity between samples by learning the optimal distance metric. In the traditional machine learning field, metric learning typically involves mapping data from the original feature space to a new feature space, where similar objects are closer, and dissimilar objects are farther away. This process is usually achieved by learning a distance function that better reflects the true similarity between samples."}),"\n",(0,t.jsxs)(i.p,{children:["If you've read the previous paragraph and still don't understand, to summarize in one sentence: ",(0,t.jsx)(i.strong,{children:"Metric learning is a method for learning similarity"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"application-scenarios",children:"Application Scenarios"}),"\n",(0,t.jsx)(i.p,{children:"Metric learning is crucial in two well-known application scenarios:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Face Recognition"}),": As we mentioned earlier, the number of faces is constantly increasing, and we can't keep retraining the model. Therefore, using the framework of metric learning can help us learn a better distance function, thereby improving the accuracy of face recognition."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Recommendation Systems"}),": The goal of recommendation systems is to recommend products that users might be interested in based on their historical behavior. In this process, we need to measure the similarity between users to find similar user behaviors and recommend products accordingly."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"In these applications, accurately measuring the similarity between two objects is crucial for improving system performance."}),"\n",(0,t.jsx)(i.h2,{id:"problem-solving",children:"Problem Solving"}),"\n",(0,t.jsx)(i.p,{children:"Although not every classification problem is suitable for elevating to the level of metric learning, in this project, metric learning serves as a weapon that can indeed help us overcome the obstacles mentioned above."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Obstacle 1: Class Definition"})}),"\n",(0,t.jsx)(i.p,{children:"Our goal is to learn a better distance function that can help us distinguish similar categories more effectively. So, we no longer need to define categories. The objects we want to classify will ultimately become a registration data."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Obstacle 2: Class Data Imbalance"})}),"\n",(0,t.jsx)(i.p,{children:"We no longer need to collect a large amount of data because our model no longer relies on a large number of samples. We only need one sample, which is our registration data. The rest can be trained using other training data."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Obstacle 3: Class Expansion"})}),"\n",(0,t.jsx)(i.p,{children:"Expanding classes only requires registering new data, without the need to retrain the model. This design can significantly reduce the training cost."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Obstacle 4: Class Sub-labels"})}),"\n",(0,t.jsx)(i.p,{children:"This problem can be well addressed within the framework of metric learning. We can treat sub-labels as new registration data, which will not affect the original model. The distance between sub-labels and main labels in the feature space may be very close, but not exactly the same, thus effectively distinguishing between these two categories."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsxs)(i.p,{children:["We first introduced the framework of metric learning: ",(0,t.jsx)(i.a,{href:"https://arxiv.org/abs/2203.15565",children:(0,t.jsx)(i.strong,{children:"PartialFC"})}),", which combines techniques such as ",(0,t.jsx)(i.a,{href:"https://arxiv.org/abs/1801.09414",children:(0,t.jsx)(i.strong,{children:"CosFace"})})," and ",(0,t.jsx)(i.a,{href:"https://arxiv.org/abs/1801.07698",children:(0,t.jsx)(i.strong,{children:"ArcFace"})}),", enabling precise classification without predefining a large number of categories."]}),"\n",(0,t.jsxs)(i.p,{children:["Subsequently, in further experiments, we introduced the ",(0,t.jsx)(i.a,{href:"https://www.image-net.org/",children:(0,t.jsx)(i.strong,{children:"ImageNet-1K dataset"})})," and the ",(0,t.jsx)(i.a,{href:"https://arxiv.org/abs/2103.00020",children:(0,t.jsx)(i.strong,{children:"CLIP model"})}),". We used the ImageNet-1K dataset as the base, treating each image as a category. Through this operation, the number of classification categories could be expanded to approximately 1.3 million, providing the model with richer visual variations and increasing data diversity."]}),"\n",(0,t.jsx)(i.p,{children:"In the benchmark comparison at TPR@FPR=1e-4, compared to the original baseline model, the effect was improved by approximately 4.1% (77.2%->81.3%). If we further introduce the CLIP model on top of the ImageNet-1K, performing knowledge distillation during training, the effect can be further improved by approximately 4.6% (81.3%->85.9%)."}),"\n",(0,t.jsx)(i.p,{children:"In the latest experiments, we attempted to combine BatchNorm and LayerNorm and achieved gratifying results. Based on the original CLIP distilled model, the effect at TPR@FPR=1e-4 was improved by approximately 4.4% (85.9%->90.3%)."}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"In testing, our model demonstrated over 90% accuracy under the condition of one in ten thousand (TPR@FPR=1e-4) error rate. Moreover, there's no need to retrain when adding new classification types."}),"\n",(0,t.jsx)(i.p,{children:"In summary, we've essentially brought over the operational workflow of a facial recognition system!"}),"\n",(0,t.jsx)(i.p,{children:"During our development process, we often exclaimed, \"Can we really do this?\" As mentioned earlier, this project's first-generation architecture (first author) had achieved some results but was still unstable. By the time this project was published, it was already the third-generation model (second author), with overall improvements. It's considered a good result."}),"\n",(0,t.jsx)(i.p,{children:'Compared to our previously released "conventional" projects, this project is full of fun.'}),"\n",(0,t.jsx)(i.p,{children:'Therefore, we decided to make the architecture and experimental results of this project public. This will also be our "only" project where we publicly release trained models. We hope this project can bring you some inspiration. If you can find new application scenarios from the design principles of this project, you\'re welcome to share them with us.'})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},95530:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/title-fb7436a1fbcacc4a77ae879c80e97a22.jpg"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var t=n(96540);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);