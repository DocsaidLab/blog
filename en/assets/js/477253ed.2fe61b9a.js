"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5044],{58876:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var n=s(74848),i=s(28453);const r={sidebar_position:3},a="Hourglass",o={id:"feat-fusion/hourglass",title:"Hourglass",description:"The Forgotten Elder",source:"@site/i18n/en/docusaurus-plugin-content-docs-papers/current/feat-fusion/hourglass.md",sourceDirName:"feat-fusion",slug:"/feat-fusion/hourglass",permalink:"/en/papers/feat-fusion/hourglass",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"papersSidebar",previous:{title:"PANet",permalink:"/en/papers/feat-fusion/panet"},next:{title:"NAS-FPN",permalink:"/en/papers/feat-fusion/nasfpn"}},l={},h=[{value:"The Forgotten Elder",id:"the-forgotten-elder",level:2},{value:"Model Architecture",id:"model-architecture",level:2},{value:"Hourglass&#39;s Origins?",id:"hourglasss-origins",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hourglass",children:"Hourglass"}),"\n",(0,n.jsx)(t.h2,{id:"the-forgotten-elder",children:"The Forgotten Elder"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://arxiv.org/abs/1603.06937",children:"Stacked Hourglass Networks for Human Pose Estimation (2016.03)"})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The following content is compiled by ChatGPT-4, with manual proofreading, editing, and additional explanations."})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"If you're someone who often navigates between different papers, the Hourglass architecture might not be unfamiliar to you. Let's quickly introduce this architecture:"}),"\n",(0,n.jsx)(t.p,{children:'The Hourglass architecture is designed specifically for human pose estimation tasks. It aims to comprehensively process and integrate features of all scales, striving to best capture various spatial relationships related to the human body. The research team demonstrated that by applying bottom-up and top-down processing methods repeatedly and combining intermediate supervised training, the network\'s performance can be greatly improved. Therefore, they named this new architecture the "stacked hourglass" network. The network is based on consecutive pooling and upsampling steps to generate the final prediction results.'}),"\n",(0,n.jsx)(t.p,{children:"This paper was proposed more than half a year earlier than FPN, but why is there such a huge difference in their fame? The most intuitive feeling is the citation count of the papers: as of August 2023, FPN has 20,816 citations, while Hourglass has 5,365. Why such a fourfold difference in citation count for architectures that seem similar?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Wait a second, did you say they're similar?"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"model-architecture",children:"Model Architecture"}),"\n",(0,n.jsx)(t.p,{children:"We've discussed FPN before, and its architecture is probably familiar to you. Now, let's delve into the Hourglass architecture:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"hourglass_1",src:s(91102).A+"",width:"1024",height:"468"})}),"\n",(0,n.jsx)(t.p,{children:"At first glance, they seem like entirely different architectures. However, let's follow the narrative of the paper and go through this model:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Capturing Information at Different Scales"})}),"\n",(0,n.jsx)(t.p,{children:"Imagine you're looking at a picture of a person's full body. To accurately understand the pose of this person, we need to simultaneously focus on the entire body and the details, such as the face and hands. However, this information may exist at different scales. The purpose of the Hourglass design is to capture information at these different scales simultaneously."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Design of the Hourglass Structure"})}),"\n",(0,n.jsx)(t.p,{children:"The structure of this model is like an hourglass. It consists of a series of convolutional layers (for feature extraction) and max-pooling layers (to reduce the resolution of the image). This allows retaining spatial information at each resolution without losing details."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Upsampling and Feature Fusion"})}),"\n",(0,n.jsx)(t.p,{children:"After the network processes lower resolutions, it starts upsampling, akin to zooming in on the image. Simultaneously, it combines features at different scales to integrate information about the entire body and details."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Final Prediction"})}),"\n",(0,n.jsx)(t.p,{children:"Finally, the network generates the final prediction through some processing. This prediction is a set of heatmaps, where different colors at different positions represent different features. Here, the network tries to predict the presence of human joints in the image, such as elbows and knees."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The fourth part belongs to the specific application domain, which we'll ignore for now."}),"\n",(0,n.jsx)(t.p,{children:"Let's redraw the model architecture:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"hourglass_2",src:s(70697).A+"",width:"1024",height:"561"})}),"\n",(0,n.jsx)(t.p,{children:"The green-boxed area belongs to the Backbone category, performing N stages of downsampling. The paper mentions that downsampling here is achieved through a series of convolutional layers coupled with max-pooling operations. Then, it enters the upsampling process, gradually increasing the resolution of feature maps and summing them up. Channel alignment is achieved through 1\xd71 convolutions."}),"\n",(0,n.jsx)(t.p,{children:"Seeing this, isn't it obvious?"}),"\n",(0,n.jsx)(t.p,{children:"In terms of feature fusion, Hourglass is just FPN, and FPN is just Hourglass!"}),"\n",(0,n.jsx)(t.p,{children:"Of course, their application scenarios are different. Hourglass actually only takes the highest resolution layer of feature maps (P1) and repeats stacking multiple layers to extract keypoints effectively. FPN, on the other hand, doesn't specifically mention stacking many layers (although it's feasible in practice) but focuses on using feature maps of different resolutions (P3, P4, P5) to achieve multi-scale object detection."}),"\n",(0,n.jsx)(t.p,{children:"So why such a huge difference in citation count between these two papers?"}),"\n",(0,n.jsx)(t.p,{children:'Actually, we can only give a speculative answer. One reason could be the difference in application scenarios\u2014object detection is more popular, that\'s one. Another possible reason is the narrative structure of the papers: in the Hourglass paper, the emphasis is mainly on "stacking many layers" and "intermediate supervision."'}),"\n",(0,n.jsx)(t.h2,{id:"hourglasss-origins",children:"Hourglass's Origins?"}),"\n",(0,n.jsx)(t.p,{children:"Carefully going through the Hourglass paper, we can find an even earlier reference, which has a very similar structure:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://arxiv.org/abs/1507.05699",children:"Bottom-Up and Top-Down Reasoning with Hierarchical Rectified Gaussians (2015.07)"})})}),"\n",(0,n.jsx)(t.p,{children:'In this paper, the structure is not called "Hourglass"; it just mentions a "bottom-up" and "top-down" structure. Here\'s an excerpt from the paper:'}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:'The main purpose of this paper is to explore a "bidirectional" structure that considers both top-down feedback: neurons influenced by neurons from higher and lower layers. The paper operates on neurons as having rectified latent variables within a quadratic energy function, which can be seen as a hierarchical rectified Gaussian model (RGs). The authors demonstrate that RGs can be optimized through quadratic programming (QP), which can be optimized through a recurrent neural network with rectified linear units. This enables RGs to be trained using GPU-optimized gradient descent.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Wait, what is he saying?"}),"\n",(0,n.jsx)(t.p,{children:"In simpler terms:"}),"\n",(0,n.jsx)(t.p,{children:"This paper explores a new approach to handle neurons in a more refined way, as if they were tuned to better suit specific tasks. This approach is applied in a mathematical model capable of better handling data like images. The researchers demonstrate that this approach can optimize through solving a specific mathematical problem, which can be solved using a special recurrent neural network. Such a structure enables us to utilize hardware resources more efficiently during computations."}),"\n",(0,n.jsx)(t.p,{children:"If you still don't understand, that's okay. It's not the focus of this article. Remember, we're just trying to find the earliest literature that proposed this architecture. Below is the model architecture they used:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"hourglass_3",src:s(15436).A+"",width:"1024",height:"351"})}),"\n",(0,n.jsx)(t.p,{children:"Seeing this familiar structure, it's reasonable to assume that it might be the inspiration for Hourglass. But is this the earliest design?"}),"\n",(0,n.jsx)(t.p,{children:"Actually, it might not be."}),"\n",(0,n.jsx)(t.p,{children:"Because half a year earlier than this paper \u2014"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://arxiv.org/abs/1505.04597",children:"U-Net: Convolutional Networks for Biomedical Image Segmentation"})})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u2014 had already been proposed. U-Net's multiscale connectivity structure actually looks like this, with the only difference being the use of concatenation in U-Net. Unfortunately, this paper didn't cite U-Net, so we can't see the authors' summary and evaluation of this prior work."}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"Although Hourglass and FPN are two architectures applied in different fields, their essence in feature fusion networks is actually the same\u2014just different ways of using the same architecture."}),"\n",(0,n.jsx)(t.p,{children:"On the same foundation, different application workflows are developed to solve different problems. FPN handles information at different scales through feature pyramids, mainly used for tasks like object detection and segmentation. In comparison, the Hourglass network extracts features at different detail levels through a hierarchical structure, particularly suitable for dense prediction tasks such as pose estimation."}),"\n",(0,n.jsx)(t.p,{children:"If you've ever been confused about the essence of these two architectures, I hope this article provides some clarity."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},91102:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/hourglass_1-c6f54a344af454752ecbe012354325f9.jpg"},70697:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/hourglass_2-b45e523ba28e7057a62166bf88bc12d7.jpg"},15436:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/hourglass_3-d22ae7dda52b9c4d30f3bc10a101d827.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);