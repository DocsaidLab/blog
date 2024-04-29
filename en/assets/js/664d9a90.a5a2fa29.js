"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3098],{20706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(74848),s=n(28453);const a={sidebar_position:1},r="FPN",o={id:"feat-fusion/fpn",title:"FPN",description:"Pyramid Architecture",source:"@site/i18n/en/docusaurus-plugin-content-docs-papers/current/feat-fusion/fpn.md",sourceDirName:"feat-fusion",slug:"/feat-fusion/fpn",permalink:"/en/papers/feat-fusion/fpn",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714428235e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"papersSidebar",previous:{title:"FeatureFusion",permalink:"/en/papers/category/featurefusion"},next:{title:"PANet",permalink:"/en/papers/feat-fusion/panet"}},l={},h=[{value:"Pyramid Architecture",id:"pyramid-architecture",level:2},{value:"Problem Definition",id:"problem-definition",level:2},{value:"Solution",id:"solution",level:2},{value:"FPN Model Design",id:"fpn-model-design",level:3},{value:"Discussion",id:"discussion",level:2},{value:"Is this really better?",id:"is-this-really-better",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"fpn",children:"FPN"}),"\n",(0,i.jsx)(t.h2,{id:"pyramid-architecture",children:"Pyramid Architecture"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://arxiv.org/abs/1612.03144",children:"Feature Pyramid Networks for Object Detection (2016.12)"})})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"The following content is compiled by ChatGPT-4, with manual proofreading, editing, and additional explanations."})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Consider a scenario."}),"\n",(0,i.jsx)(t.p,{children:"Given the typical workflow of a convolutional neural network model: starting with inputting an original image, possibly with dimensions of 3 x 224 x 224, then passing through layers of downsampling, finally obtaining a high-dimensional semantic feature map, with dimensions possibly being 256 x 7 x 7. Typically, in a conventional model, the output is usually at a 1/32 scale, meaning, for example, with an original image of 224 x 224, the final feature map would be 7 x 7."}),"\n",(0,i.jsx)(t.p,{children:"There are several ways to describe this feature map, you might have heard:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Low-resolution feature map (because compared to the original image, the final feature map is only 1/32 in size)."}),"\n",(0,i.jsx)(t.li,{children:"High-dimensional semantic features (as it condenses the features of the entire image, carrying a larger receptive field)."}),"\n",(0,i.jsx)(t.li,{children:"Top-level features (bottom\uff5coriginal -> C1 -> C2 -> \u2026 -> C5 \uff5ctop)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This design works well for classification tasks because classification can reference the content of the entire input image and output one or several possible classification results."}),"\n",(0,i.jsx)(t.p,{children:"However, this approach doesn't work for object detection. As mentioned earlier, this feature map is at a 1/32 scale. So, if there's an object we want to detect, and its size in the image is smaller than 32 x 32 pixels, unfortunately, it will \"vanish\" during the downsampling process, as the model won't see it in the final feature map."}),"\n",(0,i.jsx)(t.p,{children:'Well, "vanish" might be a bit exaggerated. In reality, if the model uses convolutional operations for downsampling, the object might still be represented by nearby pixels.'}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"If you find this description a bit supernatural, that's okay. In any case, the model will struggle to see it, as it would require more capacity to capture this tiny feature, ultimately affecting the overall performance."})}),"\n",(0,i.jsx)(t.p,{children:"This means if we want to improve object detection performance, we need to do something to retain these features."}),"\n",(0,i.jsx)(t.p,{children:"Around the end of 2015, SSD was proposed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://arxiv.org/abs/1512.02325",children:"SSD: Single Shot MultiBox Detector (2015.12)"})})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"It aimed to improve upon YOLO v1."}),"\n",(0,i.jsx)(t.p,{children:"It is based on the architecture of YOLO v1, where different-scale feature maps are added to the prediction head, and high-dimensional features (P3~P5) are merged for prediction, marking the first attempt at a pyramid feature hierarchy. While it was an earlier design, it can be considered a precursor to feature pyramid networks. Its drawback lies in its computational complexity and the inability of low-dimensional features to reference high-dimensional semantic features."}),"\n",(0,i.jsx)(t.h2,{id:"problem-definition",children:"Problem Definition"}),"\n",(0,i.jsx)(t.p,{children:"In this paper, the authors clearly identify these main problems:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Limitations of Feature Pyramids"})}),"\n",(0,i.jsx)(t.p,{children:"Traditional feature pyramid strategies, prevalent in the era of handcrafted features, were the primary tools for recognizing multi-scale objects. However, in the era of deep learning, these methods no longer suffice for current needs. Their main issue is their relatively weak ability to process features of different scales. Especially when dealing with large amounts of image data, their processing speed is far from meeting real-time application requirements. Additionally, these methods only perform simple feature scaling without deeper feature fusion and optimization, limiting their recognition effectiveness."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Limitations of SSD"})}),"\n",(0,i.jsx)(t.p,{children:"In order to address the above problems, SSD, as an emerging strategy, attempts to utilize the pyramid feature hierarchy of deep convolutional networks. Its goal is to completely replace traditional feature pyramid strategies. However, SSD has some obvious flaws in its design. In order to avoid using lower-level features, it deliberately does not reuse high-resolution layers that have already been computed, instead opting to add new layers to build its pyramid. This approach not only increases computational complexity but also overlooks the importance of high-resolution mappings in the feature hierarchy. For detecting small objects, these high-resolution mappings are crucial, which SSD's strategy clearly ignores."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(t.h3,{id:"fpn-model-design",children:"FPN Model Design"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fpn_3",src:n(90122).A+"",width:"1024",height:"887"})}),"\n",(0,i.jsx)(t.p,{children:"The main purpose of FPN is to improve upon the design of SSD. The authors propose a structure, as shown in the above figure, to create a feature pyramid with strong semantics at all scales while maintaining the pyramid-shaped hierarchical structure of convolutional network features."}),"\n",(0,i.jsx)(t.p,{children:"To achieve this goal, the authors design a structure:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Combine low-resolution features with high-resolution features through top-down pathways and lateral connections."})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In fact, once this sentence is explained, the paper is essentially concluded, as what follows is just implementation and testing."}),"\n",(0,i.jsx)(t.p,{children:"However, we can still look at some implementation details provided by the authors."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Bottom-up pathway"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fpn_2",src:n(57863).A+"",width:"1024",height:"396"})}),"\n",(0,i.jsx)(t.p,{children:"The first part is called the data path from Bottom features to Top features. Since this paper does not provide image references, I hand-drew an architecture diagram and inserted actual numbers, simplifying the information as much as possible to illustrate the flow of data within the model:"}),"\n",(0,i.jsx)(t.p,{children:"Taking ResNet18 as an example, inputting a 224 x 224 x 3 image. Since we use PyTorch syntax, the number of channels comes first. After passing through ResNet18, we get five different resolution feature maps. Here, let's define these feature maps:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"P1: Feature map at 1/2 scale, size 64 x 112 x 112."}),"\n",(0,i.jsx)(t.li,{children:"P2: Feature map at 1/4 scale, size 64 x 56 x 56."}),"\n",(0,i.jsx)(t.li,{children:"P3: Feature map at 1/8 scale, size 128 x 28 x 28."}),"\n",(0,i.jsx)(t.li,{children:"P4: Feature map at 1/16 scale, size 256 x 14 x 14."}),"\n",(0,i.jsx)(t.li,{children:"P5: Feature map at 1/32 scale, size 512 x 7 x 7."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This image goes through the downsampling process of the model, referred to as the Bottom-up pathway in this paper."}),"\n",(0,i.jsx)(t.p,{children:"It's worth noting that in most model architecture designs, P1 and P2 feature maps are not used to construct the feature pyramid because these two feature maps still have very large dimensions and would consume a lot of computational resources."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Top-down pathway and lateral connections"})}),"\n",(0,i.jsx)(t.p,{children:"Reflecting on the previous steps, data flow starts from the left and moves to the right."}),"\n",(0,i.jsx)(t.p,{children:'In the second stage of feature pyramid design, the goal is to merge features "from right to left".'}),"\n",(0,i.jsx)(t.p,{children:"So let's zoom in on the P4 \u2013 P5 section we just discussed:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fpn_3",src:n(46574).A+"",width:"1140",height:"828"})}),"\n",(0,i.jsx)(t.p,{children:"In this fusion process, first, because high-dimensional feature maps have smaller dimensions, we need to address them first."}),"\n",(0,i.jsx)(t.p,{children:"Here, we perform an Upsample operation on the P5 feature map to ensure size consistency."}),"\n",(0,i.jsx)(t.p,{children:"Next, we want to add these two feature maps with different dimensions. However, this poses another challenge: the channel numbers do not match."}),"\n",(0,i.jsx)(t.p,{children:"As shown in the figure above, the feature map output from Block5 has 512 channels, while the feature map output from Block4 only has 256 channels. Due to the mismatch in channel numbers, direct addition operations cannot be performed. To solve this problem, we need to use 1\xd71 convolutional kernels to adjust the number of channels in the feature maps. Note that there is no fixed rule for adjusting the number of channels; you can define a suitable number of channels based on the actual situation, such as setting it to 64."}),"\n",(0,i.jsx)(t.p,{children:"Each P1\uff5eP5 feature map needs to pass through a 1\xd71 convolutional layer to ensure consistent channel numbers, thus avoiding alignment issues."}),"\n",(0,i.jsx)(t.p,{children:"After ensuring channel alignment and size consistency, we can directly add feature maps from different layers to complete a round of fusion operations."}),"\n",(0,i.jsx)(t.p,{children:"If this step is repeated, it might give you a better understanding. So let's look at the fusion from P4 to P3 again."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fpn_5",src:n(39964).A+"",width:"1024",height:"392"})}),"\n",(0,i.jsx)(t.p,{children:"Finally, here's a more straightforward architecture design that is easier to implement:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fpn_6",src:n(24619).A+"",width:"1024",height:"346"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Scaling each scale's feature maps first and then performing feature fusion is a common design approach in engineering implementation."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(t.h3,{id:"is-this-really-better",children:"Is this really better?"}),"\n",(0,i.jsx)(t.p,{children:"Directly speaking about the results: yes, it is."}),"\n",(0,i.jsx)(t.p,{children:"The paper's authors conducted numerous sets of experimental data to argue this point. At the end of the article, let's pick out a few key figures to take a look at. Let's first examine the ablation experiments provided in the paper, as shown in the table below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fpn_4",src:n(26841).A+"",width:"1024",height:"231"})}),"\n",(0,i.jsx)(t.p,{children:"This table first discusses removing different components, where (d) removes the top-down component; (e) removes lateral connections; and (f) changes the representation of the feature pyramid. It can be observed that removing any component leads to a significant decrease in performance, with marginal differences from the baseline comparison model."}),"\n",(0,i.jsx)(t.p,{children:"Next, let's look at the next table:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fpn_1",src:n(61528).A+"",width:"1024",height:"218"})}),"\n",(0,i.jsx)(t.p,{children:"The authors of this paper compared their method with the single-model results of the COCO competition winners, including the 2016 winner G-RMI and the 2015 winner Faster R-CNN+++. Without using various fancy techniques, FPN's single model already surpasses these powerful, carefully designed competitors. On the test development set, FPN outperforms the existing best results by 0.5 points AP."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"FPN proposes a concise framework that can be combined with various backbone networks to construct powerful feature pyramids. This method shows significant improvements over multiple strong baseline models and competition winners."}),"\n",(0,i.jsx)(t.p,{children:"This paper on FPN discusses two things:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Firstly, whenever the problem to be solved exhibits multiscale characteristics, different-scale feature fusion techniques must be considered."}),"\n",(0,i.jsx)(t.li,{children:'Secondly, feature fusion techniques boil down to three sentences: "bottom to top, top to bottom, then add them together."'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Following this paper, many directions for discussion have emerged, such as: how to design better feature fusion strategies? How to improve the efficiency of fusion? Or how to adjust fusion weights? Various scenarios like these have been explored in subsequent papers. We'll look at them together when we have time."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},61528:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fpn_1-806ea6b48d355fcaea10b6ebeea1065c.jpg"},57863:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fpn_2-c3d635c32d5e688c8cd4718addfd29a7.jpg"},90122:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fpn_3-8343b88168361c005df0ee97a372bbf8.jpg"},26841:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fpn_4-11a1be8958d93fbeb388f60f6f00c1a4.jpg"},39964:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fpn_5-9d164ae1834a36be83c64d1262a3b821.jpg"},24619:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fpn_6-29914d6ce938ac71055641c746b66e9a.jpg"},46574:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fpn_7-f85c22c3c6fe9e3c51d4d9fc8bc59b0c.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);