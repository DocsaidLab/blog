"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2900],{51405:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(74848),o=i(28453);const s={slug:"convert-pdf-to-images",title:"Convert PDF to Images using Python",authors:"Zephyr",tags:["Python","PDF","pdf2image","PIL"],image:"/en/img/2024/0214.webp",description:"Using open-source library pdf2image."},a=void 0,r={permalink:"/en/blog/convert-pdf-to-images",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024/02-14-pdf2imgs/index.md",title:"Convert PDF to Images using Python",description:"Using open-source library pdf2image.",date:"2024-02-14T00:00:00.000Z",tags:[{label:"Python",permalink:"/en/blog/tags/python"},{label:"PDF",permalink:"/en/blog/tags/pdf"},{label:"pdf2image",permalink:"/en/blog/tags/pdf-2-image"},{label:"PIL",permalink:"/en/blog/tags/pil"}],readingTime:1.64,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"convert-pdf-to-images",title:"Convert PDF to Images using Python",authors:"Zephyr",tags:["Python","PDF","pdf2image","PIL"],image:"/en/img/2024/0214.webp",description:"Using open-source library pdf2image."},unlisted:!1,prevItem:{title:"The Pitfall of Lists in PyTorch",permalink:"/en/blog/pytorch-training-out-of-memory"},nextItem:{title:"Reading HEIC Images in Python",permalink:"/en/blog/opencv-imread"}},l={authorsImageUrls:[void 0]},c=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Install <code>pdf2image</code>",id:"install-pdf2image",level:2},{value:"Convert PDF using <code>pdf2image</code>",id:"convert-pdf-using-pdf2image",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"title",src:i(30580).A+"",width:"1024",height:"1024"}),"\n",(0,t.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading this article."})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"In daily office tasks or academic endeavors, whether it's for conveniently sharing information or integrating document content into presentations, there's often a need to convert PDF files into image formats."}),"\n",(0,t.jsxs)(n.p,{children:["Here, we recommend a handy Python module: ",(0,t.jsx)(n.a,{href:"https://github.com/Belval/pdf2image/tree/master",children:"pdf2image"}),", which can convert PDF files into PIL images."]}),"\n",(0,t.jsx)(n.p,{children:"This tutorial will guide you on how to install and use this package."}),"\n",(0,t.jsx)(n.h2,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pdf2image"})," relies on ",(0,t.jsx)(n.code,{children:"pdftoppm"})," and ",(0,t.jsx)(n.code,{children:"pdftocairo"}),", and installation varies slightly across different operating systems:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mac"}),": Install Poppler via Homebrew: ",(0,t.jsx)(n.code,{children:"brew install poppler"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linux"}),": Most Linux distributions come pre-installed with ",(0,t.jsx)(n.code,{children:"pdftoppm"})," and ",(0,t.jsx)(n.code,{children:"pdftocairo"}),". If not, install ",(0,t.jsx)(n.code,{children:"poppler-utils"})," via your package manager."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Using ",(0,t.jsx)(n.code,{children:"conda"})]}),": Poppler can be installed via ",(0,t.jsx)(n.code,{children:"conda"})," on any platform: ",(0,t.jsx)(n.code,{children:"conda install -c conda-forge poppler"}),", then proceed to install ",(0,t.jsx)(n.code,{children:"pdf2image"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"install-pdf2image",children:["Install ",(0,t.jsx)(n.code,{children:"pdf2image"})]}),"\n",(0,t.jsxs)(n.p,{children:["First, you need to install ",(0,t.jsx)(n.code,{children:"pdf2image"}),". Enter the following command in your terminal to install:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pip install pdf2image\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"convert-pdf-using-pdf2image",children:["Convert PDF using ",(0,t.jsx)(n.code,{children:"pdf2image"})]}),"\n",(0,t.jsx)(n.p,{children:"Converting PDF to images is straightforward:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from pdf2image import convert_from_path\n\nimages = convert_from_path('/path/to/your/pdf/file.pdf')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will convert each page of the PDF into a PIL image object and store them in the ",(0,t.jsx)(n.code,{children:"images"})," list."]}),"\n",(0,t.jsx)(n.p,{children:"You can also convert PDF from binary data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"images = convert_from_bytes(open('/path/to/your/pdf/file.pdf', 'rb').read())\n"})}),"\n",(0,t.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pdf2image"})," provides extensive optional parameters, allowing you to customize DPI, output format, page ranges, etc. For example: use ",(0,t.jsx)(n.code,{children:"dpi=300"})," to enhance the clarity of the output images, or use ",(0,t.jsx)(n.code,{children:"first_page"})," and ",(0,t.jsx)(n.code,{children:"last_page"})," to specify the conversion range."]}),"\n",(0,t.jsxs)(n.p,{children:["You can refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/Belval/pdf2image/tree/master",children:"official documentation"})," of ",(0,t.jsx)(n.code,{children:"pdf2image"}),"; or check our own modified ",(0,t.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/eb8ac0a56779a75dcc951c683001e6129052cc5a/docsaidkit/vision/improc.py#L275",children:"pdf2imgs"})," function for more usage examples."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pdf2image"})," is a powerful and easy-to-use tool that meets your needs for converting PDF to images. Whether it's for document processing, data organization, or content presentation, it provides an efficient solution."]}),"\n",(0,t.jsxs)(n.p,{children:["We hope this tutorial helps you grasp the usage of ",(0,t.jsx)(n.code,{children:"pdf2image"})," effortlessly, enhancing your work and study efficiency."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},30580:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/0214-092b2fec73ca8d417478a30be2c25464.webp"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);