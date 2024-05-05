"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9852],{24935:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(74848),t=i(28453);const r={sidebar_position:7},o="Submission",a={id:"docaligner/summit_data",title:"Submission",description:"In the real world, you are bound to encounter situations where things don't work as expected.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docaligner/summit_data.md",sourceDirName:"docaligner",slug:"/docaligner/summit_data",permalink:"/en/docs/docaligner/summit_data",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714946536e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Dataset",permalink:"/en/docs/docaligner/dataset"},next:{title:"References",permalink:"/en/docs/docaligner/reference"}},l={},c=[{value:"Format Instructions",id:"format-instructions",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Contact Us",id:"contact-us",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"submission",children:"Submission"}),"\n",(0,s.jsx)(n.p,{children:"In the real world, you are bound to encounter situations where things don't work as expected."}),"\n",(0,s.jsx)(n.p,{children:"Our model is no different; it may not handle all situations effectively. If during your use of our model, you find scenarios where our model fails to perform adequately, we encourage you to provide us with some datasets. We will then adjust and optimize our model based on your data."}),"\n",(0,s.jsx)(n.p,{children:"We appreciate your willingness to contribute datasets and will test and integrate them as soon as possible."}),"\n",(0,s.jsx)(n.h2,{id:"format-instructions",children:"Format Instructions"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of the format for submitting data:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Dataset Example",src:i(70100).A+"",width:"2782",height:"2772"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, first there is a dataset containing your collected images, and in the same directory, there is a ",(0,s.jsx)(n.code,{children:"gt.json"})," file containing labels for each image."]}),"\n",(0,s.jsx)(n.p,{children:"The label format must include:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Image Relative Path"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"The 'four corner points polygon' boundaries of the document in the image"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A simple data structure might look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "file_path": "path/to/your/image.jpg",\n        "polygon": [\n            [\n                [0, 0],\n                [0, 1080],\n                [1920, 1080],\n                [1920, 0]\n            ]\n        ]\n    }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After you have labeled your data, we recommend uploading it to your Google Drive and providing the link to us via ",(0,s.jsx)(n.a,{href:"#contact-us",children:(0,s.jsx)(n.strong,{children:"email"})}),". We will test and integrate your data as soon as we receive it. If your data does not meet our requirements, we will notify you promptly."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reasons for non-compliance may include"}),":","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Insufficient Dataset Precision"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"For example, some images in your dataset might have inaccurate labels, or some image labels might be incorrect."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Unclear Labeling Objectives"}),":"]}),"\n",(0,s.jsx)(n.p,{children:'Our goal is to locate the four corners of documents in images, so if your data contains more than "one target" or more than "four corners," it cannot be used.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Target Too Small"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"If your target is too small, we recommend reconsidering your algorithm choice, as our model is not suitable for handling small targets and does not align well with our processing goals."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Overly Refined Dataset Scale"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Even if you provide just tens of images, we will gladly accept them, but such data might cause overfitting if used to fit models, so we would advise increasing the dataset size to avoid this issue."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The data format and naming standards mentioned above are not strict; essentially, including the image path and polygon boundaries is sufficient, but to facilitate our testing, please try to follow the format above."})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For labeling data, we recommend using ",(0,s.jsx)(n.a,{href:"https://github.com/labelmeai/labelme",children:(0,s.jsx)(n.strong,{children:"LabelMe"})}),", an open-source labeling tool that helps you quickly label images and export them as JSON files."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Is the order of the four corners important?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No. Our training process will automatically sort these points."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"What are the requirements for label formatting?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The format requirements are not strict; just include the image path and polygon boundaries. However, for ease of testing, it is recommended to stick to the standard format."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How important is the filename?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The filename is not a primary concern as long as it correctly links to the corresponding image."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"What image format do you recommend?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We recommend using jpg format to save space."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How does the accuracy of labeling affect model training?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Label accuracy is extremely important; inaccurate labels will directly impact the effectiveness of model training."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How important is the type of target in the labels?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Yes, it is crucial."}),"\n",(0,s.jsx)(n.li,{children:"The target must be a document, and each image should contain only one target."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How does the size of the target affect model training?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The size of the target is important. Our model is not suited for small targets as this impacts the efficiency of subsequent processing."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How do you define 'small targets'?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For an image with a resolution of 1920x1080, if the target is smaller than 32 x 32 pixels, it is considered a small target. The specific formula is ",(0,s.jsx)(n.code,{children:"min(img_w, img_h) / 32"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"contact-us",children:"Contact Us"}),"\n",(0,s.jsxs)(n.p,{children:["For further assistance, please contact us via email: ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"mailto:docsaidlab@gmail.com",children:"docsaidlab@gmail.com"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},70100:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/example_dataset-d22ca776fc5f398ec37b35c951d0795e.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);