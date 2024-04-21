"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8646],{89193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(74848),s=t(28453);const r={sidebar_position:1},a="Introduction",o={id:"wordcanvas/intro",title:"Introduction",description:'The core functionality of this project is the "Text-to-Image Generation Tool", named WordCanvas.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/wordcanvas/intro.md",sourceDirName:"wordcanvas",slug:"/wordcanvas/intro",permalink:"/en/wordcanvas/intro",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171371528e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"WordCanvas",permalink:"/en/category/wordcanvas"},next:{title:"Installation",permalink:"/en/wordcanvas/installation"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Character Diversity and Quantity",id:"character-diversity-and-quantity",level:3},{value:"Complex Glyph Structures and Semantic Dependence",id:"complex-glyph-structures-and-semantic-dependence",level:3},{value:"Writing Styles",id:"writing-styles",level:3},{value:"Vertical and Mixed Layout Text",id:"vertical-and-mixed-layout-text",level:3},{value:"Limited Annotation Resources",id:"limited-annotation-resources",level:3},{value:"Goals",id:"goals",level:2},{value:"Design Philosophy",id:"design-philosophy",level:2},{value:"Finally",id:"finally",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:['The core functionality of this project is the "',(0,i.jsx)(n.strong,{children:"Text-to-Image Generation Tool"}),'", named ',(0,i.jsx)(n.strong,{children:"WordCanvas"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/WordCanvas",children:(0,i.jsx)(n.strong,{children:"WordCanvas Github"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"title",src:t(27273).A+"",width:"1226",height:"702"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"In the current field of Optical Character Recognition (OCR), the accuracy of models is contingent upon the quality and diversity of datasets."}),"\n",(0,i.jsx)(n.p,{children:"Here, we list several challenges faced by current research:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Insufficient Data"}),": Existing datasets are limited in scale and do not cover all possible scenarios and samples."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Class Imbalance"}),": Some categories are underrepresented, exhibiting a severe long-tail distribution."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lack of Diversity"}),": Samples in existing datasets are too homogeneous to represent real-world diversity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Synthetic vs. Real Data Disparity"}),": There is a discrepancy between synthetic datasets and the data found in real application scenarios."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Moreover, compared to just a few hundred Latin characters, the number of Chinese characters is a disaster. In the study of Chinese OCR, in addition to the above issues, there are many unique challenges to consider."}),"\n",(0,i.jsx)(n.h3,{id:"character-diversity-and-quantity",children:"Character Diversity and Quantity"}),"\n",(0,i.jsx)(n.p,{children:"Chinese includes thousands of common characters and nearly a hundred thousand obscure characters, with a highly uneven distribution from common to rare."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Nearly a hundred thousand? Are you pulling my leg?"}),(0,i.jsxs)(n.p,{children:["This number is based on the statistics from: ",(0,i.jsx)(n.a,{href:"https://zh.wikipedia.org/zh-tw/Wikipedia:Unicode%E6%89%A9%E5%B1%95%E6%B1%89%E5%AD%97",children:(0,i.jsx)(n.strong,{children:"Wikipedia Unicode Expanded Chinese Characters"})}),". Currently, there are over ninety thousand Chinese characters, and the number continues to grow."]})]}),"\n",(0,i.jsx)(n.h3,{id:"complex-glyph-structures-and-semantic-dependence",children:"Complex Glyph Structures and Semantic Dependence"}),"\n",(0,i.jsx)(n.p,{children:"Chinese characters are composed of multiple strokes, whose shapes and arrangements vary greatly. Many similar characters can only be distinguished through context."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"For example: (\u53e3, \u56d7), (\u65e5, \u66f0), (\u6728, \u6729), etc."})}),"\n",(0,i.jsx)(n.h3,{id:"writing-styles",children:"Writing Styles"}),"\n",(0,i.jsx)(n.p,{children:"The challenges caused by writing styles are not limited to a single script. Each script can generate a multitude of different typefaces. However, the vast number of Chinese characters, combined with different fonts and writing styles (such as regular, running, and cursive scripts), further complicates recognition."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"calligraphy",src:t(50051).A+"",title:"https://artemperor.tw/focus/3372?page=2",width:"1218",height:"744"})}),"\n",(0,i.jsx)(n.h3,{id:"vertical-and-mixed-layout-text",children:"Vertical and Mixed Layout Text"}),"\n",(0,i.jsx)(n.p,{children:"Chinese text often appears in vertical layouts, especially in scenarios related to traditional culture. Additionally, mixed Chinese and English text layouts are common, posing extra challenges for text localization and recognition."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vertical",src:t(90365).A+"",title:"By San Lie - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=58451813",width:"1920",height:"1278"})}),"\n",(0,i.jsx)(n.h3,{id:"limited-annotation-resources",children:"Limited Annotation Resources"}),"\n",(0,i.jsx)(n.p,{children:"High-quality datasets require extensive and accurate annotation, which is both time-consuming and costly."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Even if you find the material, annotators often cannot recognize those obscure characters."})}),"\n",(0,i.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,i.jsx)(n.p,{children:"This project aims to address the aforementioned issues."}),"\n",(0,i.jsx)(n.p,{children:"Well, the problems are massive, but at least we can start by solving a part of them."}),"\n",(0,i.jsx)(n.p,{children:"\uff0a"}),"\n",(0,i.jsx)(n.p,{children:"We generate a large variety of Chinese text images through synthetic data to address issues of insufficient data, class imbalance, and lack of diversity. For this, we've looked at some existing text synthesis tools for inspiration, allowing us to decide to build a new text image generator from scratch."}),"\n",(0,i.jsx)(n.p,{children:"Our generation module is not based on a predefined text encoding table but on fonts. Meaning, we can generate text images of any font, supporting various text directions, alignment modes, text lengths, text colors, background colors, etc."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"If you can find the font, we can use it to generate images."})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"design-philosophy",children:"Design Philosophy"}),"\n",(0,i.jsx)(n.p,{children:'In terms of design, we considered whether to use a "function-oriented design" or an "object-oriented design." We ultimately chose the latter, because no matter what you choose, you\'re likely to find it challenging to use.'}),"\n",(0,i.jsxs)(n.p,{children:["Indeed, ",(0,i.jsx)(n.strong,{children:"the vast array of options can overwhelm users"}),", and object-oriented design better organizes these parameters. We've designed a dashboard (as shown below) hoping you can understand and adjust the settings as easily as driving a car."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"dashboard",src:t(82687).A+"",width:"1620",height:"944"})}),"\n",(0,i.jsx)(n.p,{children:"\uff0a"}),"\n",(0,i.jsx)(n.p,{children:"Overall, in this project, we have accomplished several functions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dashboard"}),": Understand and adjust current settings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image Generation"}),": Generate diverse text images."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Output Alignment"}),": Support four types of alignment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Output Orientation"}),": Support both horizontal and vertical orientations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Flattened Text"}),": Support the flattened text feature."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Standardized Output Size"}),": Support a standardized output size for images."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Font Selection"}),": Support selecting fonts randomly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Text Selection"}),": Support selecting text randomly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Text Length"}),": Support selecting text length randomly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Text Color"}),": Support selecting text color randomly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Background Color"}),": Support selecting background color randomly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Text Orientation"}),": Support selecting text orientation randomly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Alignment"}),": Support selecting alignment modes randomly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Minimum Text Length"}),": Support specifying a minimum text length."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Random Maximum Text Length"}),": Support specifying a maximum text length."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"finally",children:"Finally"}),"\n",(0,i.jsx)(n.p,{children:"If you have other requirements, feel free to leave a comment below."}),"\n",(0,i.jsx)(n.p,{children:"If time allows, we will add new features according to your needs."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50051:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/calligraphy-dd35e084ef107593613e50c5953c9717.jpg"},82687:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/dashboard-b7d6dae0c9724ff7b7f6ef147d0c9bef.jpg"},27273:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/title-e8bde3a5bccc9557aa4d3d532089a363.jpg"},90365:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vertical-280141d8ba29ad97db1ed4926d81a39c.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);