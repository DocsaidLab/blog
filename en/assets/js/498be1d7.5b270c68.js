"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4309],{45686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(74848),i=t(28453);const a={sidebar_position:4},r="NAS-FPN",o={id:"feat-fusion/nasfpn",title:"NAS-FPN",description:"Money Talks: NAS-FPN",source:"@site/i18n/en/docusaurus-plugin-content-docs-papers/current/feat-fusion/nasfpn.md",sourceDirName:"feat-fusion",slug:"/feat-fusion/nasfpn",permalink:"/en/papers/feat-fusion/nasfpn",draft:!1,unlisted:!1,editUrl:"https://docsaid.org/en/papers/intro",tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713501561e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"papersSidebar",previous:{title:"Hourglass",permalink:"/en/papers/feat-fusion/hourglass"},next:{title:"UNet++",permalink:"/en/papers/feat-fusion/unetpp"}},l={},c=[{value:"Money Talks: NAS-FPN",id:"money-talks-nas-fpn",level:2},{value:"What&#39;s NAS?",id:"whats-nas",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Actually, There Are More Cons",id:"actually-there-are-more-cons",level:2},{value:"Problem Solving",id:"problem-solving",level:2},{value:"NAS-FPN Model Design",id:"nas-fpn-model-design",level:3},{value:"Merging Cells",id:"merging-cells",level:3},{value:"Discussion",id:"discussion",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nas-fpn",children:"NAS-FPN"}),"\n",(0,s.jsx)(n.h2,{id:"money-talks-nas-fpn",children:"Money Talks: NAS-FPN"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1904.07392",children:"NAS-FPN: Learning Scalable Feature Pyramid Architecture for Object Detection (2019.04)"})})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The following content is compiled by ChatGPT-4, with manual proofreading, editing, and additional explanations."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Since the advent of FPN, feature fusion has been a hotly debated topic. Here's a chronological list:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["2017.01 -> ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1701.06659",children:"DSSD : Deconvolutional single shot detector"})]}),"\n",(0,s.jsxs)(n.li,{children:["2017.07 -> ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1707.01691",children:"RON: reverse connection with objectness prior networks for object detection"})]}),"\n",(0,s.jsxs)(n.li,{children:["2017.07 -> ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1707.06484",children:"Deep layer aggregation"})]}),"\n",(0,s.jsxs)(n.li,{children:["2017.09 -> ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1709.05788",children:"StairNet: top-down semantic aggregation for accurate one shot detection"})]}),"\n",(0,s.jsxs)(n.li,{children:["2017.11 -> ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1711.06897",children:"Single-shot refinement neural network for object detection"})]}),"\n",(0,s.jsxs)(n.li,{children:["2018.03 -> ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1803.01534",children:"Path Aggregation Network for Instance Segmentation"})," (PANet here)"]}),"\n",(0,s.jsxs)(n.li,{children:["2018.08 -> ",(0,s.jsx)(n.a,{href:"https://ieeexplore.ieee.org/document/8578160",children:"Scale-transferrable object detection"})]}),"\n",(0,s.jsxs)(n.li,{children:["2018.08 -> ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1808.07993",children:"Deep feature pyramid reconfiguration for object detection"})]}),"\n",(0,s.jsxs)(n.li,{children:["2018.10 -> ",(0,s.jsx)(n.a,{href:"https://link.springer.com/chapter/10.1007/978-3-030-01228-1_15#chapter-info",children:"Parallel feature pyramid network for object detection"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"PANet is the most commonly heard of among these. Besides PANet, the aforementioned papers have hundreds to thousands of citations. It's recommended to give them a read when you have time."}),"\n",(0,s.jsx)(n.p,{children:"So, which one should you choose?"}),"\n",(0,s.jsx)(n.p,{children:"Google wanted to know the answer too, which led to the publication of the paper NAS-FPN."}),"\n",(0,s.jsx)(n.p,{children:"Can you guess the core concept? \"I don't know which one's better, so let's use an algorithm\u2026\""}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Isn't that a bit off? But then again, it's so Google."}),(0,s.jsx)(n.p,{children:"Remember the NasNet series? They're about searching network architectures. Eventually, they even came up with another paper called EfficientNet, which you might have heard of."}),(0,s.jsx)(n.p,{children:"Besides network architecture, chip design can also use NAS. Now, using NAS for feature fusion is just another practical move."})]}),"\n",(0,s.jsx)(n.h2,{id:"whats-nas",children:"What's NAS?"}),"\n",(0,s.jsx)(n.p,{children:"NAS stands for Neural Architecture Search, a crucial research direction in deep learning. Its main goal is to automatically find the best neural network architecture to solve specific tasks. Neural network architectures typically consist of multiple layers, neurons, and connections, and the design of these architectures can have a significant impact on the performance of the model."}),"\n",(0,s.jsx)(n.p,{children:"Traditionally, neural network design has been mostly a manual process, requiring extensive experimentation and tuning by experts, which is time-consuming and requires domain expertise. NAS aims to simplify this process by automating it, allowing machines to explore and discover the best neural network architectures."}),"\n",(0,s.jsx)(n.p,{children:"In NAS, a search space is defined, containing variants of all possible neural network architectures. Then, using different search strategies such as genetic algorithms, reinforcement learning, evolutionary algorithms, etc., the system automatically generates, evaluates, and selects these architectures to find the best one for a specific task."}),"\n",(0,s.jsx)(n.p,{children:"Generally, the pros and cons of NAS are:"}),"\n",(0,s.jsx)(n.h3,{id:"pros",children:"Pros"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Automation"}),": Can automatically explore and find the best neural network architecture, reducing the need for manual tuning and design work, thus saving time and resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optimization"}),": Can find the best neural network structure for specific tasks and datasets, improving model performance and potentially surpassing manually designed models in some cases."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flexibility"}),": Not limited to specific tasks or architectures, can adapt to different application scenarios, and generate models suitable for specific requirements."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Innovation"}),": Can lead to the discovery of new neural network structures, potentially bringing innovative model architectures and further advancing deep learning."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cons",children:"Cons"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Computational Resource Consumption"}),": Search process may require significant computational resources, including GPUs or TPUs, and a considerable amount of time, which may limit its practical application."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Complexity"}),": Size of the search space and the number of possible combinations may make the search process very complex, requiring more advanced algorithms and techniques for effective search."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"High Dependency on Datasets"}),": Found best architectures may heavily depend on the specific dataset used for the search, and cannot guarantee superior performance on other datasets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stochasticity"}),": Search process may have some level of randomness, different search runs may yield different results, posing a challenge to the stability of the results."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"actually-there-are-more-cons",children:"Actually, There Are More Cons"}),"\n",(0,s.jsx)(n.p,{children:"After reading about the pros and cons of NAS, you might be particularly interested in its flexibility and innovation. But the reality is that over 90% or more of practitioners lack the resources to build their own search systems, often having to rely on the results brought by this technology. This immediately leads to another question:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Does my use case match the paper's scenario?"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here, the use case includes the feature distributions of inference data, training data, the search space for solving problems, etc. If there's a chance that the answer is no, then this optimized architecture might, perhaps, not be\u2026"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Suitable."})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So, why talk about this paper?"}),"\n",(0,s.jsx)(n.p,{children:"Firstly, we might be part of that 10% who are interested. This paper demonstrates how to design a search architecture and find the most suitable feature fusion method for one's own usage scenario. Secondly, it showcases some results obtained from automated searches, which can provide some inspiration for future designs."}),"\n",(0,s.jsx)(n.h2,{id:"problem-solving",children:"Problem Solving"}),"\n",(0,s.jsx)(n.h3,{id:"nas-fpn-model-design",children:"NAS-FPN Model Design"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"nasfpn_1",src:t(63864).A+"",width:"1024",height:"284"})}),"\n",(0,s.jsx)(n.p,{children:"The primary goal of this study was to find a better FPN architecture. In the academic discourse, a model typically begins with a basic structure called the Backbone, which can be freely swapped, such as ResNet, MobileNet, etc."}),"\n",(0,s.jsx)(n.p,{children:"Following the Backbone is the Neck, where FPN typically resides. Its main job is multiscale feature concatenation, which is the focus here."}),"\n",(0,s.jsx)(n.p,{children:"It's worth mentioning that in this study, the authors used a framework called \"RetinaNet\" as the foundation. RetinaNet's backbone employs ResNet, while its neck employs FPN."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"The main theme of the RetinaNet paper is actually FocalLoss. The RetinaNet architecture inside it is a simple combination for applying FocalLoss."})}),"\n",(0,s.jsx)(n.h3,{id:"merging-cells",children:"Merging Cells"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"nasfpn_2",src:t(42791).A+"",width:"1024",height:"335"})}),"\n",(0,s.jsx)(n.p,{children:'In NAS-FPN, a new concept called "Merging Cell" was proposed based on the original FPN design.'}),"\n",(0,s.jsx)(n.p,{children:'A Merging Cell is a small module responsible for "merging" two different input feature layers into a new output feature layer. This merging process consists of the following steps:'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Select the first feature layer: Choose one from multiple candidate feature layers (could be C3, C4, C5, etc.), denoted as hi."}),"\n",(0,s.jsx)(n.li,{children:"Select the second feature layer: Again, choose one from multiple candidate feature layers, denoted as hj."}),"\n",(0,s.jsx)(n.li,{children:"Determine the size of the output feature: Choose a resolution size, which will be the size of the new merged feature layer."}),"\n",(0,s.jsx)(n.li,{children:"Select the merge operation: Use a specific mathematical operation (such as addition or global pooling) to merge hi and hj."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In step 4, as shown in the diagram, two binary operations were designed: summation and global pooling. These operations were chosen because they are simple and efficient, requiring no additional trainable parameters."}),"\n",(0,s.jsx)(n.p,{children:"If hi and hj have different sizes, upsampling or downsampling is applied to make them the same size before merging. The merged new feature layer undergoes a ReLU activation function, a 3\xd73 convolutional layer, and a BatchNorm layer to enhance its expressive capability. Thus, FPN can continuously merge and improve feature layers through multiple such Merging Cells, ultimately generating a set of better multiscale feature layers (P3, P4, P5, etc.)."}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsx)(n.p,{children:"Experimental data shows that with the increase of training steps, the controller is able to generate better and better subnetwork architectures. This process reaches a stable state after about 8000 training steps, meaning the number of unique architectures added begins to converge."}),"\n",(0,s.jsx)(n.p,{children:"Finally, based on the optimization results of rewards, the authors selected the architecture with the highest AP for further training and evaluation."}),"\n",(0,s.jsx)(n.p,{children:"This architecture was sampled during the first 8000 steps of training and sampled multiple times in subsequent experiments."}),"\n",(0,s.jsx)(n.p,{children:"Subsequently, the authors demonstrated the FPN architecture obtained by the NAS algorithm as follows:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"nasfpn_5",src:t(19004).A+"",width:"800",height:"602"})}),"\n",(0,s.jsx)(n.p,{children:"This diagram might look complex at first glance, but with annotations:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"nasfpn_3",src:t(3786).A+"",width:"1024",height:"523"})}),"\n",(0,s.jsx)(n.p,{children:"With annotations, we can now take a closer look at the results of NAS-FPN."}),"\n",(0,s.jsx)(n.p,{children:"Firstly, in the initial FPN (a), it's not exactly FPN; it's a \"FPN-like\" structure because it outputs feature maps differently and has a different data flow sequence, though it's consistent with FPN in essence. However, the original FPN doesn\u2019t have this many layers of convolutional layers."}),"\n",(0,s.jsx)(n.p,{children:"Next, looking at the experimental results of NAS-FPN from (b) to (f), as AP scores keep improving, we can observe that the way of searching architectures ultimately verifies the design philosophy of the PANet paper, i.e., diagram (f):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Data must be fused from top to bottom."}),"\n",(0,s.jsx)(n.li,{children:"Data must then be fused from bottom to top."}),"\n",(0,s.jsx)(n.li,{children:"Although the details might be slightly different, the essence is captured."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"nasfpn_4",src:t(32729).A+"",width:"1024",height:"472"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"In previous research, feature fusion architectures have mostly been derived through manual design and experimentation. The reliability and scale of this approach have always been questioned. Indeed, experimental research, while providing insights, often has its value limited by the scale and design of the experiments."}),"\n",(0,s.jsx)(n.p,{children:'Perhaps we can accept that the "theoretical foundation" of certain conclusions might be insufficient and acknowledge that conclusions derived through "experimentation" suffice. But how do we convince others that the scale of these experiments is sufficient?'}),"\n",(0,s.jsx)(n.p,{children:"However, NAS-FPN offers a new perspective on this issue, with a precise search architecture and unprecedented computational scale (perhaps no other company has the resources or willingness to spend on such computations). This not only confirms the correctness of PANet's design philosophy but also reveals the potential inefficiencies in its connection method."}),"\n",(0,s.jsx)(n.p,{children:"I believe this is the value of this paper. This method of combining NAS search results not only enhances the credibility of previous research but also provides new directions for future research."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},63864:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nasfpn_1-01b0062e70541234d43589331cde5246.jpg"},42791:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nasfpn_2-02f26c48d4b0f0596bd9e17e923084a6.jpg"},3786:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nasfpn_3-55712a3bcdfaa8f0bcefb5c2ba165093.jpg"},32729:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nasfpn_4-4fc798fa415af362fcbb494ab6b4349b.jpg"},19004:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nasfpn_5-74aa9280cbf9836c059d825df38e640a.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);