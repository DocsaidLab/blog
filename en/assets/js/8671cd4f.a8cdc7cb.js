"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[82],{4870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const r={sidebar_position:5},a="UNet++",o={id:"feat-fusion/unetpp",title:"UNet++",description:"The Delicate Weaver",source:"@site/i18n/en/docusaurus-plugin-content-docs-papers/current/feat-fusion/unetpp.md",sourceDirName:"feat-fusion",slug:"/feat-fusion/unetpp",permalink:"/en/papers/feat-fusion/unetpp",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713878085e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"papersSidebar",previous:{title:"NAS-FPN",permalink:"/en/papers/feat-fusion/nasfpn"},next:{title:"ObjectDetection",permalink:"/en/papers/category/objectdetection"}},l={},d=[{value:"The Delicate Weaver",id:"the-delicate-weaver",level:2},{value:"Defining the Problem",id:"defining-the-problem",level:2},{value:"Solving the Problem",id:"solving-the-problem",level:2},{value:"UNet++ Model Design",id:"unet-model-design",level:3},{value:"Discussion",id:"discussion",level:2},{value:"Is it just about having more parameters?",id:"is-it-just-about-having-more-parameters",level:3},{value:"Deep Supervision and Model Pruning",id:"deep-supervision-and-model-pruning",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"unet",children:"UNet++"}),"\n",(0,i.jsx)(n.h2,{id:"the-delicate-weaver",children:"The Delicate Weaver"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/1912.05074",children:"UNet++: Redesigning Skip Connections to Exploit Multiscale Features in Image Segmentation (2018.07)"})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The following content is compiled by ChatGPT-4, with manual proofreading, editing, and additional explanations."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"The authors of this paper start from U-Net and delve into the design issues of the original U-Net architecture."}),"\n",(0,i.jsx)(n.p,{children:"To quote the authors directly:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'"Has this three-year-old topological structure really got no problems?"'}),"\n",(0,i.jsxs)(n.p,{children:["Excerpted from ",(0,i.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/44958351",children:(0,i.jsx)(n.strong,{children:"Studying U-Net"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The authors not only suggest that U-Net has problems but also believe there are quite a few."}),"\n",(0,i.jsx)(n.h2,{id:"defining-the-problem",children:"Defining the Problem"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"UNetpp_1",src:t(14524).A+"",width:"1024",height:"204"})}),"\n",(0,i.jsx)(n.p,{children:"The common U-Net architecture has a depth of five downsampling layers, as depicted in the image above (d)."}),"\n",(0,i.jsx)(n.p,{children:"Why not three layers? Why not seven? How deep should a network be designed?"}),"\n",(0,i.jsx)(n.p,{children:"In many deep learning applications, the depth of the network is often a critical parameter that directly affects the performance and learning capability of the network."}),"\n",(0,i.jsx)(n.p,{children:"Let's further explore the various aspects of this issue:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Feature Representation Capacity"})}),"\n",(0,i.jsx)(n.p,{children:"The depth of the network determines its capacity for feature representation. Simply put, deeper networks usually can learn more complex, more abstract features. In tasks like image segmentation, object detection, or classification, this ability to capture abstract features might be crucial. Shallower networks may only capture simpler, more local features."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Computational Complexity"})}),"\n",(0,i.jsx)(n.p,{children:"As the network's depth increases, computational complexity and the number of parameters usually increase sharply. This not only increases the time and computational costs of training and inference but also might require more computational resources. Finding an appropriate network depth is a challenge, especially under limited resources."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Overfitting and Generalization"})}),"\n",(0,i.jsx)(n.p,{children:"Deeper networks often have higher model complexity and may be prone to overfitting, especially with limited data. Shallower networks may have better generalization capability but might sacrifice some representation power."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Optimization Difficulty"})}),"\n",(0,i.jsx)(n.p,{children:"You can certainly make a network 100 layers deep (if your images are large enough), but as the network gets deeper, optimizing its parameters becomes increasingly difficult. For example, problems like vanishing or exploding gradients may occur, requiring specific initialization methods or optimizers to address."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Theory vs. Practice"})}),"\n",(0,i.jsx)(n.p,{children:"In theory, deeper networks can represent the same function with fewer nodes and fewer computations, but in practice, finding an appropriate network depth is not easy. Networks that are too deep or too shallow may both struggle to perform well on specific tasks."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Dataset and Task Characteristics"})}),"\n",(0,i.jsx)(n.p,{children:"Different datasets and tasks may require different network depths. Some tasks might necessitate deeper networks to capture complex patterns, while others may not need as many abstraction layers."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Interpretability and Debugging Difficulty"})}),"\n",(0,i.jsx)(n.p,{children:"As networks become deeper, their interpretability may decrease, and understanding and debugging the model's behavior become more challenging."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'By delving into the question of "how deep?" we can better understand how network depth affects the performance and effectiveness of deep learning models, and how to make reasonable choices and designs in specific practical scenarios.'}),"\n",(0,i.jsx)(n.h2,{id:"solving-the-problem",children:"Solving the Problem"}),"\n",(0,i.jsx)(n.h3,{id:"unet-model-design",children:"UNet++ Model Design"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"UNetpp_2",src:t(82827).A+"",width:"1024",height:"244"})}),"\n",(0,i.jsx)(n.p,{children:"In addressing tasks like image segmentation, the ideal scenario is for the network to fully learn features at different depths to better understand and process image data."}),"\n",(0,i.jsx)(n.p,{children:"In their exploration of this problem, the authors proposed several innovative network architecture designs aimed at better integrating features of different depths and optimizing network performance."}),"\n",(0,i.jsx)(n.p,{children:"Here are some key design ideas and solutions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Unified Architecture (U-Nete)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Objective: Define a unified structure for nested UNet."}),"\n",(0,i.jsx)(n.li,{children:"This design integrates U-Net architectures of different depths into a unified structure. In this framework, all U-Nets share at least part of the encoder, but have their own decoders. This design allows decoders of different depths to operate independently within the same network structure, providing a specific perspective to observe and compare how different depths affect network performance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Upgraded U-Net (UNet+)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Objective: Validate whether long connections are effective with a control group."}),"\n",(0,i.jsx)(n.li,{children:"This design, evolved from U-Nete, abandons the original long skip connections in favor of short skip connections connecting every two adjacent nodes. This design allows deeper decoders to send supervisory signals to shallower decoders, achieving better information propagation and feature integration. The aim is to explore how collaboration between decoders of different depths affects overall network performance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Advanced U-Net (UNet++)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Objective: Validate whether long connections are effective with an experimental group."}),"\n",(0,i.jsx)(n.li,{children:"Building upon U-Nete, UNet++ achieves dense skip connections by connecting decoders, enabling dense feature propagation along skip connections for more flexible feature fusion. UNet++ aims to achieve more flexible and efficient feature extraction and fusion in a unified architecture to address challenges brought by different depths."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Through these architecture designs, the authors aim to retain the advantages of the original U-Net architecture while addressing the problem of network depth selection as much as possible. They hope to enhance network performance in tasks like image segmentation by integrating features of different depths."}),"\n",(0,i.jsx)(n.p,{children:"Of course, this architectural design didn't just grow to this form overnight. There were some thoughts and changes in between, and the authors have written about their journey in related articles."}),"\n",(0,i.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(n.p,{children:"Addressing the content above, let's discuss several aspects:"}),"\n",(0,i.jsx)(n.h3,{id:"is-it-just-about-having-more-parameters",children:"Is it just about having more parameters?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"UNetpp_3",src:t(4782).A+"",width:"1024",height:"283"})}),"\n",(0,i.jsx)(n.p,{children:"To address this question, the authors designed a set of experiments. They widened the original U-Net to match the parameter count of UNet++ and then compared the results. Although this operation was somewhat hasty (as the authors mentioned), the results from the table indicate:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"There was essentially no significant improvement."})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In deep learning, more parameters usually imply that the model has higher expressive power, but this doesn't always lead to better results. Too many parameters might lead to overfitting, especially with limited data. Additionally, as the number of parameters increases, the computational and storage requirements of the model also significantly increase, which might not be desirable. UNet++ demonstrates the importance of optimizing network structure rather than simply adding parameters."}),"\n",(0,i.jsx)(n.h3,{id:"deep-supervision-and-model-pruning",children:"Deep Supervision and Model Pruning"}),"\n",(0,i.jsx)(n.p,{children:"When discussing the network architecture of deep learning, especially the U-Net architecture for image segmentation tasks, the concepts of deep supervision and model pruning become particularly important. These techniques not only improve the learning efficiency of the network but also help significantly reduce the size of the model while maintaining a certain accuracy, especially in resource-constrained environments like mobile devices."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Deep Supervision"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"UNetpp_4",src:t(40405).A+"",width:"740",height:"526"})}),"\n",(0,i.jsx)(n.p,{children:"The core idea of deep supervision is to introduce additional loss functions at different stages of the network to ensure that even shallow network structures can receive effective gradient updates. By adding auxiliary losses at each level of the sub-network, each stage of U-Net can receive clear supervisory signals, thereby facilitating the learning of the entire network. In the UNet++ architecture, through further deep supervision, the output of each sub-network can be considered as the segmentation result of the image, providing a natural and direct solution to overcome the problem of vanishing gradients."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Model Pruning"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"UNetpp_5",src:t(36088).A+"",width:"1024",height:"181"})}),"\n",(0,i.jsx)(n.p,{children:"Model pruning is another effective technique to reduce the size of the model. By evaluating the performance of each sub-network on the validation set, it can be determined how much redundant network structure can be pruned without losing accuracy. During inference, choosing the appropriate network depth based on actual requirements can balance performance and computational costs."}),"\n",(0,i.jsx)(n.p,{children:"After discussing the UNet++ structure and the concept of model pruning, its feasibility and importance can be analyzed from the following perspectives."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Feasibility"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Deep Supervision and Multi-Output: The UNet++ structure has multiple outputs through deep supervision, allowing each sub-network to produce segmentation results. Due to this design, the performance of each sub-network can be independently evaluated, providing a basis for subsequent pruning."}),"\n",(0,i.jsx)(n.li,{children:"Model Pruning: During the testing phase, only forward propagation is needed. If certain sub-networks can already produce satisfactory results, pruning other sub-networks will not affect the output of the preceding sub-networks. However, during training, the pruned parts contribute to weight updates during backpropagation, indicating that these pruned parts are still essential for the training process. This design ensures the feasibility of pruning while maintaining network performance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Importance"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Computational Efficiency and Resource Usage: Through pruning, the size of the model is significantly reduced. For example, if the output of L2 is already satisfactory, many parameters can be pruned, thus reducing the computational and storage requirements. This is important for running models in resource-constrained environments such as mobile devices."}),"\n",(0,i.jsx)(n.li,{children:"Speedup: The pruned network structure can significantly improve inference speed. For example, replacing L4 with L2 can triple the processing speed. This is crucial for applications that require real-time or near-real-time responses."}),"\n",(0,i.jsx)(n.li,{children:"Flexible Network Structure: Through proper pruning, UNet++ provides a flexible network structure that can adjust the network depth according to different task requirements and dataset difficulties, achieving a balance between performance and efficiency."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Balance between Accuracy and Model Size"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The relationship between dataset difficulty and network depth suggests that pruning can be used to employ smaller models for simpler datasets while maintaining comparable performance. This design allows UNet++ to reduce model size and computational costs while preserving high accuracy."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In the implementation of the UNet++ architecture, through the use of deep supervision and model pruning, a significant reduction in model parameters was achieved while retaining good segmentation performance. This not only improves the efficiency of running models on mobile devices but also provides new dimensions of consideration for network design in terms of flexibility and adjustability."}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"By implementing deep supervision and model pruning on UNet++, the potential of this approach in optimizing image segmentation tasks has been observed."}),"\n",(0,i.jsx)(n.p,{children:"Deep supervision allows the model to obtain better feature representations at different network levels, while pruning provides an effective way to reduce computational and storage requirements while maintaining performance, especially in hardware resource-constrained scenarios."}),"\n",(0,i.jsx)(n.p,{children:"However, from an engineering perspective, these methods also present some challenges:"}),"\n",(0,i.jsx)(n.p,{children:"Most notably, the determination of pruning extent relies on the performance on the validation set, which may lead to unstable performance of the model in different datasets or real-world applications, risking the model's failure."}),"\n",(0,i.jsx)(n.p,{children:"One possible direction to address the above issues is to adopt adaptive pruning strategies, dynamically adjusting the pruning extent at different stages, and exploring multi-objective optimization methods to balance accuracy and efficiency. Alternatively, exploring techniques such as cross-dataset validation and transfer learning may improve the model's generalization ability and stability across different application scenarios."}),"\n",(0,i.jsx)(n.p,{children:"In practical implementation, implementing deep supervision and model pruning increases the complexity of model design and training. Engineers may need to invest additional time and resources to adjust and verify pruning strategies to ensure the model's generalization capability, potentially lengthening the development cycle."}),"\n",(0,i.jsx)(n.p,{children:"This paper offers new insights into optimizing feature fusion methods but still comes with some technical challenges that need to be overcome through further research and practice. Hopefully, this article will provide useful references and insights for researchers' work and studies."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},14524:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/unetpp_1-25be1ac5d2f0c8250257166a10c85fd7.jpg"},82827:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/unetpp_2-316f3fd4393960b0bc97b5a98765cbfe.jpg"},4782:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/unetpp_3-e7076be2db82c82591e4efb4ffe59a56.jpg"},40405:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/unetpp_4-89eabd8ec640fdfa657b8b214f6eaa5c.jpg"},36088:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/unetpp_5-47f073a8eec6816a9ad912c6303d6f17.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);