"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7192],{3334:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>t});var d=i(4848),r=i(8453);const s={slug:"read-pdf-to-images",title:"PDF \u8f49\u5716\u7247\uff1a\u4f7f\u7528 Python \u548c pdf2image \u8f15\u9b06\u8b8a\u63db\u6587\u4ef6\u683c\u5f0f",authors:"Zephyr",tags:["Python","PDF","pdf2image","PIL"]},l=void 0,c={permalink:"/blog/read-pdf-to-images",source:"@site/blog/2024-02-14-pdf2imgs.md",title:"PDF \u8f49\u5716\u7247\uff1a\u4f7f\u7528 Python \u548c pdf2image \u8f15\u9b06\u8b8a\u63db\u6587\u4ef6\u683c\u5f0f",description:"\u5728\u65e5\u5e38\u8fa6\u516c\u6216\u5b78\u7fd2\u4e2d\uff0c\u7121\u8ad6\u662f\u70ba\u4e86\u66f4\u4fbf\u6377\u5730\u5206\u4eab\u8cc7\u8a0a\uff0c\u9084\u662f\u5c07\u6587\u4ef6\u5167\u5bb9\u6574\u5408\u9032\u6f14\u793a\u6587\u7a3f\u4e2d\uff0c\u6211\u5011\u7d93\u5e38\u9700\u8981\u5c07 PDF \u6a94\u6848\u8f49\u63db\u6210\u5716\u7247\u683c\u5f0f\u3002",date:"2024-02-14T00:00:00.000Z",tags:[{label:"Python",permalink:"/blog/tags/python"},{label:"PDF",permalink:"/blog/tags/pdf"},{label:"pdf2image",permalink:"/blog/tags/pdf-2-image"},{label:"PIL",permalink:"/blog/tags/pil"}],readingTime:2.465,hasTruncateMarker:!0,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"read-pdf-to-images",title:"PDF \u8f49\u5716\u7247\uff1a\u4f7f\u7528 Python \u548c pdf2image \u8f15\u9b06\u8b8a\u63db\u6587\u4ef6\u683c\u5f0f",authors:"Zephyr",tags:["Python","PDF","pdf2image","PIL"]},unlisted:!1,prevItem:{title:"PyTorch OOM\uff1aList \u7684\u9677\u9631\u8207\u907f\u514d\u7b56\u7565",permalink:"/blog/pytorch-training-out-of-memory"},nextItem:{title:"\u8d85\u8d8a OpenCV imread\uff1a\u89e3\u9396 HEIC \u548c\u52a0\u901f JPG \u8b80\u53d6\u7684\u9ad8\u6548\u7b56\u7565",permalink:"/blog/opencv-imread"}},o={authorsImageUrls:[void 0]},t=[{value:"\u5b89\u88dd\u4f9d\u8cf4",id:"\u5b89\u88dd\u4f9d\u8cf4",level:2},{value:"\u5b89\u88dd <code>pdf2image</code>",id:"\u5b89\u88dd-pdf2image",level:2},{value:"\u4f7f\u7528 <code>pdf2image</code> \u8f49\u63db PDF",id:"\u4f7f\u7528-pdf2image-\u8f49\u63db-pdf",level:2},{value:"\u53ef\u9078\u53c3\u6578",id:"\u53ef\u9078\u53c3\u6578",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"\u5728\u65e5\u5e38\u8fa6\u516c\u6216\u5b78\u7fd2\u4e2d\uff0c\u7121\u8ad6\u662f\u70ba\u4e86\u66f4\u4fbf\u6377\u5730\u5206\u4eab\u8cc7\u8a0a\uff0c\u9084\u662f\u5c07\u6587\u4ef6\u5167\u5bb9\u6574\u5408\u9032\u6f14\u793a\u6587\u7a3f\u4e2d\uff0c\u6211\u5011\u7d93\u5e38\u9700\u8981\u5c07 PDF \u6a94\u6848\u8f49\u63db\u6210\u5716\u7247\u683c\u5f0f\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u9019\u88e1\u6211\u5011\u63a8\u85a6\u4e00\u500b\u597d\u7528\u7684 Python \u6a21\u7d44\uff1a ",(0,d.jsx)(n.a,{href:"https://github.com/Belval/pdf2image/tree/master",children:"pdf2image"})," \uff0c\u5b83\u80fd\u5920\u5c07 PDF \u6a94\u6848\u8f49\u63db\u6210 PIL \u5716\u7247\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u9019\u7bc7\u6559\u5b78\u5c07\u5f15\u5c0e\u4f60\u5982\u4f55\u5b89\u88dd\u4e26\u4f7f\u7528\u9019\u500b\u5957\u4ef6\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u5b89\u88dd\u4f9d\u8cf4",children:"\u5b89\u88dd\u4f9d\u8cf4"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"pdf2image"})," \u4f9d\u8cf4\u65bc ",(0,d.jsx)(n.code,{children:"pdftoppm"})," \u548c ",(0,d.jsx)(n.code,{children:"pdftocairo"}),"\uff0c\u4e0d\u540c\u4f5c\u696d\u7cfb\u7d71\u7684\u5b89\u88dd\u65b9\u5f0f\u7565\u6709\u4e0d\u540c\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Mac"}),"\uff1a\u901a\u904e Homebrew \u5b89\u88dd Poppler\uff1a",(0,d.jsx)(n.code,{children:"brew install poppler"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Linux"}),"\uff1a\u5927\u591a\u6578 Linux \u767c\u884c\u7248\u5df2\u9810\u88dd ",(0,d.jsx)(n.code,{children:"pdftoppm"})," \u548c ",(0,d.jsx)(n.code,{children:"pdftocairo"}),"\u3002\u82e5\u672a\u5b89\u88dd\uff0c\u8acb\u900f\u904e\u5305\u7ba1\u7406\u5668\u5b89\u88dd ",(0,d.jsx)(n.code,{children:"poppler-utils"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"conda"})]}),"\uff1a\u7121\u8ad6\u54ea\u500b\u5e73\u53f0\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"conda"})," \u5b89\u88dd Poppler\uff1a",(0,d.jsx)(n.code,{children:"conda install -c conda-forge poppler"}),"\uff0c\u7136\u5f8c\u518d\u5b89\u88dd ",(0,d.jsx)(n.code,{children:"pdf2image"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u5b89\u88dd-pdf2image",children:["\u5b89\u88dd ",(0,d.jsx)(n.code,{children:"pdf2image"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u4f60\u9700\u8981\u5b89\u88dd ",(0,d.jsx)(n.code,{children:"pdf2image"}),"\uff0c\u5728\u7d42\u7aef\u6a5f\u4e2d\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\u5373\u53ef\u5b89\u88dd\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"pip install pdf2image\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"\u4f7f\u7528-pdf2image-\u8f49\u63db-pdf",children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"pdf2image"})," \u8f49\u63db PDF"]}),"\n",(0,d.jsx)(n.p,{children:"\u8f49\u63db PDF \u81f3\u5716\u7247\u7684\u57fa\u672c\u7528\u6cd5\u975e\u5e38\u7c21\u55ae\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"from pdf2image import convert_from_path\n\nimages = convert_from_path('/path/to/your/pdf/file.pdf')\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u9019\u5c07\u628a PDF \u7684\u6bcf\u4e00\u9801\u8f49\u63db\u6210\u4e00\u500b PIL \u5716\u7247\u5c0d\u8c61\uff0c\u4e26\u5132\u5b58\u5728 ",(0,d.jsx)(n.code,{children:"images"})," \u5217\u8868\u4e2d\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u5f9e\u4e8c\u9032\u5236\u6578\u64da\u8f49\u63db PDF\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"images = convert_from_bytes(open('/path/to/your/pdf/file.pdf', 'rb').read())\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53ef\u9078\u53c3\u6578",children:"\u53ef\u9078\u53c3\u6578"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"pdf2image"})," \u63d0\u4f9b\u4e86\u8c50\u5bcc\u7684\u53ef\u9078\u53c3\u6578\uff0c\u5141\u8a31\u4f60\u81ea\u5b9a\u7fa9 DPI\u3001\u8f38\u51fa\u683c\u5f0f\u3001\u9801\u9762\u7bc4\u570d\u7b49\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"dpi=300"})," \u63d0\u9ad8\u8f38\u51fa\u5716\u7247\u7684\u6e05\u6670\u5ea6\uff0c\u6216\u8005\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"first_page"})," \u548c ",(0,d.jsx)(n.code,{children:"last_page"})," \u6307\u5b9a\u8f49\u63db\u7bc4\u570d\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u53c3\u8003 ",(0,d.jsx)(n.code,{children:"pdf2image"})," \u7684",(0,d.jsx)(n.a,{href:"https://github.com/Belval/pdf2image/tree/master",children:"\u5b98\u65b9\u6587\u4ef6"}),"\uff1b\u6216\u662f\u53c3\u8003\u6211\u5011\u81ea\u5df1\u6539\u5beb\u7684 ",(0,d.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/eb8ac0a56779a75dcc951c683001e6129052cc5a/docsaidkit/vision/improc.py#L275",children:"pdf2imgs"})," \u51fd\u6578\u4f86\u4e86\u89e3\u66f4\u591a\u7528\u6cd5\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"pdf2image"})," \u662f\u4e00\u500b\u529f\u80fd\u5f37\u5927\u4e14\u6613\u65bc\u4f7f\u7528\u7684\u5de5\u5177\uff0c\u80fd\u5920\u6eff\u8db3\u4f60\u5c07 PDF \u8f49\u63db\u70ba\u5716\u7247\u7684\u9700\u6c42\u3002\u7121\u8ad6\u662f\u7528\u65bc\u6587\u6a94\u8655\u7406\u3001\u8cc7\u6599\u6574\u7406\uff0c\u9084\u662f\u5167\u5bb9\u5c55\u793a\uff0c\u5b83\u90fd\u80fd\u63d0\u4f9b\u9ad8\u6548\u7684\u89e3\u6c7a\u65b9\u6848\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5e0c\u671b\u9019\u7bc7\u6559\u5b78\u80fd\u5920\u5e6b\u52a9\u4f60\u8f15\u9b06\u638c\u63e1 ",(0,d.jsx)(n.code,{children:"pdf2image"})," \u7684\u4f7f\u7528\uff0c\u63d0\u9ad8\u4f60\u7684\u5de5\u4f5c\u8207\u5b78\u7fd2\u6548\u7387\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var d=i(6540);const r={},s=d.createContext(r);function l(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);