"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[37210],{8339:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=o(74848),s=o(28453);const t={sidebar_position:7},r="Discussion",c={id:"docaligner/discussion",title:"Discussion",description:"Based on our experiments, we have developed a model that performs quite well.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docaligner/discussion.md",sourceDirName:"docaligner",slug:"/docaligner/discussion",permalink:"/en/docs/docaligner/discussion",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Evaluation",permalink:"/en/docs/docaligner/benchmark"},next:{title:"Dataset",permalink:"/en/docs/docaligner/dataset"}},l={},a=[];function d(e){const n={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(n.p,{children:"Based on our experiments, we have developed a model that performs quite well."}),"\n",(0,i.jsx)(n.p,{children:"Here, we will discuss some insights and experiences we gained during the training process."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"While our model can achieve scores close to SoTA, real-world scenarios are much more complex than this dataset. Therefore, we shouldn't overly focus on these scores. Our goal is simply to demonstrate the effectiveness of our model."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In our experiments, we found that the current design of our model architecture does not perform well in zero-shot scenarios, meaning the model requires fine-tuning to achieve optimal results in new environments. In the future, we should explore more robust model architectures with better generalization capabilities."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'As mentioned in the Model Design section, we cannot directly address the challenge of amplification error. Therefore, the stability of the "Heatmap Regression Model" far exceeds that of the "Point Regression Model".'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We defaulted to using ",(0,i.jsx)(n.code,{children:"FastViT_SA24"})," as the backbone for the heatmap model due to its effectiveness and computational efficiency."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Through experimentation, we found that a 3-layer ",(0,i.jsx)(n.code,{children:"BiFPN"})," outperforms a 6-layer ",(0,i.jsx)(n.code,{children:"FPN"}),", so we recommend using ",(0,i.jsx)(n.code,{children:"BiFPN"})," as the configuration for the Neck section. However, our implementation of ",(0,i.jsx)(n.code,{children:"BiFPN"})," involves ",(0,i.jsx)(n.code,{children:"einsum"})," operations, which may pose challenges for other inference frameworks. Therefore, if you encounter conversion errors when using ",(0,i.jsx)(n.code,{children:"BiFPN"}),", consider switching to the ",(0,i.jsx)(n.code,{children:"FPN"})," model."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Although the "Heatmap Regression Model" demonstrates stability, it requires supervision on high-resolution feature maps, resulting in significantly higher computational costs compared to the "Point Regression Model".'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'However, we cannot overlook the advantages of the "Point Regression Model", including its ability to predict corners beyond the document boundary, lower computational requirements, and a faster and simpler post-processing pipeline. Therefore, we will continue to explore and optimize the "Point Regression Model" to improve its performance.'}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var i=o(96540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);