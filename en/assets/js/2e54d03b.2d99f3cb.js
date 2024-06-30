"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[536],{84217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),a=t(28453);const r={sidebar_position:6},s="Resources",o={id:"wordcanvas/tools",title:"Resources",description:"Text synthesis tools are primarily used for automatically generating image datasets, especially in scenarios where large amounts of annotated data are required to train deep learning models. These tools enhance model adaptability to different environments, fonts, colors, and backgrounds by embedding synthetic text in images to simulate real-world occurrences of text.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/wordcanvas/tools.md",sourceDirName:"wordcanvas",slug:"/wordcanvas/tools",permalink:"/en/docs/wordcanvas/tools",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719787737e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Augmentation",permalink:"/en/docs/wordcanvas/imgaug"},next:{title:"Worklog",permalink:"/en/docs/worklog"}},l={},d=[{value:"SynthText",id:"synthtext",level:2},{value:"SynthText3D",id:"synthtext3d",level:2},{value:"UnrealText",id:"unrealtext",level:2},{value:"SynthTIGER",id:"synthtiger",level:2},{value:"TextRenderer",id:"textrenderer",level:2},{value:"TextRecognitionDataGenerator",id:"textrecognitiondatagenerator",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(n.p,{children:"Text synthesis tools are primarily used for automatically generating image datasets, especially in scenarios where large amounts of annotated data are required to train deep learning models. These tools enhance model adaptability to different environments, fonts, colors, and backgrounds by embedding synthetic text in images to simulate real-world occurrences of text."}),"\n",(0,i.jsx)(n.p,{children:"Below are some well-known text synthesis tools:"}),"\n",(0,i.jsx)(n.h2,{id:"synthtext",children:"SynthText"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ankush-me/SynthText",children:(0,i.jsx)(n.strong,{children:"SynthText"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"SynthText is an open-source project initiated by Ankush Gupta, Andrea Vedaldi, and Andrew Zisserman, and presented at CVPR 2016 (Conference on Computer Vision and Pattern Recognition). The project aims to generate synthetic text images for studies on text localization in natural images. These synthetic images are primarily used for training machine learning models, especially in the fields of optical character recognition and text detection."}),"\n",(0,i.jsx)(n.p,{children:"SynthText utilizes natural scene images as backgrounds and synthesizes seemingly natural text within them. This process requires the depth and segmentation information of the background images. The project's main dependencies include pygame, opencv, PIL, numpy, matplotlib, h5py, and scipy."}),"\n",(0,i.jsx)(n.h2,{id:"synthtext3d",children:"SynthText3D"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/MhLiao/SynthText3D",children:(0,i.jsx)(n.strong,{children:"SynthText3D"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"SynthText3D, based on Unreal Engine 4.16 and the UnrealCV plugin, simulates the appearance of real-world text by embedding it within virtual environments. The project uses custom virtual cameras and text rendering techniques to capture the interaction between text and its surrounding environment."}),"\n",(0,i.jsx)(n.p,{children:"The project offers a dataset containing 10K images synthesized from 30 different scenes. The data synthesized using SynthText3D demonstrated good performance in benchmark tests on ICDAR 2015, ICDAR 2013, and MLT competitions."}),"\n",(0,i.jsx)(n.h2,{id:"unrealtext",children:"UnrealText"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Jyouhou/UnrealText/",children:(0,i.jsx)(n.strong,{children:"UnrealText"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["UnrealText is an innovative project that uses a 3D graphics engine to synthesize scene text images. This project closely integrates relevant academic papers, specifically detailed in the paper ",(0,i.jsxs)(n.a,{href:"https://arxiv.org/abs/2003.10608",children:['"',(0,i.jsx)(n.strong,{children:"UnrealText: Synthesizing Realistic Scene Text Images from the Unreal World"}),'"']}),"."]}),"\n",(0,i.jsx)(n.p,{children:"UnrealText utilizes Unreal Engine, a powerful game development tool, to create highly realistic text scenes. The project not only provides source code and instructions but also includes a demo UE project and 30 precompiled scene executables. Additionally, large-scale Latin/English and multilingual synthetic scene text datasets have been released."}),"\n",(0,i.jsx)(n.h2,{id:"synthtiger",children:"SynthTIGER"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/clovaai/synthtiger",children:(0,i.jsx)(n.strong,{children:"SynthTIGER"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"SynthTIGER (Synthetic Text Image Generator) is an open-source project developed by NAVER Corp., designed to generate synthetic text images to support the training of optical character recognition (OCR) models. The tool was specifically designed to enhance the performance of text recognition models and was presented at the International Conference on Document Analysis and Recognition (ICDAR) in 2021."}),"\n",(0,i.jsx)(n.p,{children:"SynthTIGER supports the generation of multilingual and diversified text styles, producing rich and varied training data. It includes customization options for fonts, color mappings, and templates, allowing users to adjust the generation process according to their specific needs. It also offers large datasets split into multiple small files for easy download and use."}),"\n",(0,i.jsx)(n.h2,{id:"textrenderer",children:"TextRenderer"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Sanster/text_renderer",children:(0,i.jsx)(n.strong,{children:"text_renderer"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Text Renderer is an open-source project developed by the oh-my-ocr organization for generating line images of text for training deep learning OCR models. The project focuses on modular design, allowing users to easily add different components such as corpora, effects, and layouts."}),"\n",(0,i.jsx)(n.p,{children:"Text Renderer integrates imgaug to support image augmentation, rendering multiple corpora with various effects, and layouts handle the arrangement of multiple corpora. Additionally, Text Renderer supports generating vertical text and can produce lmdb datasets compatible with PaddleOCR."}),"\n",(0,i.jsx)(n.h2,{id:"textrecognitiondatagenerator",children:"TextRecognitionDataGenerator"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Belval/TextRecognitionDataGenerator",children:(0,i.jsx)(n.strong,{children:"TextRecognitionDataGenerator"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"TextRecognitionDataGenerator (TRDG) is an open-source project developed by Belval, specifically for generating text image samples for training optical character recognition (OCR) software. This project supports multilingual text generation, including non-Latin scripts, and can generate images through different fonts, backgrounds, and text effects such as tilting, twisting, and blurring. TRDG is known for its modularity and ease of expansion, making it an essential tool for OCR model developers and researchers."}),"\n",(0,i.jsx)(n.p,{children:"TRDG can be used via a command-line interface (CLI) and also offers a Python module interface, allowing it to be directly integrated into training pipelines. Users can generate images with random text or specify specific text content through simple commands. Additionally, TRDG supports generating vertical text and character-level masks, increasing the flexibility and applicability of generated text images."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);