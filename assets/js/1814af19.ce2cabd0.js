"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[71608],{52300:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var s=i(74848),l=i(28453);const d={sidebar_position:2},c="\u5b89\u88dd",r={id:"docsaidkit/installation",title:"\u5b89\u88dd",description:"\u5728\u958b\u59cb\u5b89\u88dd DocsaidKit \u4e4b\u524d\uff0c\u8acb\u78ba\u4fdd\u4f60\u7684\u7cfb\u7d71\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff1a",source:"@site/docs/docsaidkit/installation.md",sourceDirName:"docsaidkit",slug:"/docsaidkit/installation",permalink:"/docs/docsaidkit/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7d39",permalink:"/docs/docsaidkit/intro"},next:{title:"\u8a13\u7df4\u74b0\u5883\u5efa\u7f6e",permalink:"/docs/docsaidkit/trainingdocker"}},o={},a=[{value:"\u524d\u7f6e\u689d\u4ef6",id:"\u524d\u7f6e\u689d\u4ef6",level:2},{value:"Python \u7248\u672c",id:"python-\u7248\u672c",level:3},{value:"\u4f9d\u8cf4\u5957\u4ef6",id:"\u4f9d\u8cf4\u5957\u4ef6",level:3},{value:"pdf2image \u4f9d\u8cf4\u5957\u4ef6",id:"pdf2image-\u4f9d\u8cf4\u5957\u4ef6",level:3},{value:"\u5b89\u88dd\u5957\u4ef6",id:"\u5b89\u88dd\u5957\u4ef6",level:2},{value:"\u900f\u904e git clone \u5b89\u88dd",id:"\u900f\u904e-git-clone-\u5b89\u88dd",level:3},{value:"\u900f\u904e docker \u5b89\u88dd\uff08\u5efa\u8b70\uff09",id:"\u900f\u904e-docker-\u5b89\u88dd\u5efa\u8b70",level:3},{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:2}];function t(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5b89\u88dd",children:"\u5b89\u88dd"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u958b\u59cb\u5b89\u88dd DocsaidKit \u4e4b\u524d\uff0c\u8acb\u78ba\u4fdd\u4f60\u7684\u7cfb\u7d71\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff1a"}),"\n",(0,s.jsx)(e.h2,{id:"\u524d\u7f6e\u689d\u4ef6",children:"\u524d\u7f6e\u689d\u4ef6"}),"\n",(0,s.jsx)(e.h3,{id:"python-\u7248\u672c",children:"Python \u7248\u672c"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u78ba\u4fdd\u7cfb\u7d71\u5df2\u5b89\u88dd Python 3.8 \u6216\u4ee5\u4e0a\u7248\u672c\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u4f9d\u8cf4\u5957\u4ef6",children:"\u4f9d\u8cf4\u5957\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u64da\u4f60\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u5b89\u88dd\u6240\u9700\u7684\u4f9d\u8cf4\u5957\u4ef6\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Ubuntu"})}),"\n",(0,s.jsx)(e.p,{children:"\u958b\u555f\u7d42\u7aef\uff0c\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd\u4f9d\u8cf4\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt install libturbojpeg exiftool ffmpeg libheif-dev\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"MacOS"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 brew \u5b89\u88dd\u76f8\u4f9d\u6027\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"brew install jpeg-turbo exiftool ffmpeg libheif\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"pdf2image-\u4f9d\u8cf4\u5957\u4ef6",children:"pdf2image \u4f9d\u8cf4\u5957\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:"pdf2image \u662f\u4e00\u500b Python \u6a21\u7d44\uff0c\u7528\u65bc\u5c07 PDF \u6587\u4ef6\u8f49\u63db\u70ba\u5716\u7247\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u64da\u4f60\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u8acb\u9075\u5faa\u4ee5\u4e0b\u6307\u793a\u9032\u884c\u5b89\u88dd\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u6216\u53c3\u8003\u958b\u6e90\u5c08\u6848 ",(0,s.jsx)(e.a,{href:"https://github.com/Belval/pdf2image",children:(0,s.jsx)(e.strong,{children:"pdf2image"})})," \u76f8\u95dc\u9801\u9762\u4ee5\u53d6\u5f97\u5b89\u88dd\u6307\u5357\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"MacOS\uff1aMac \u4f7f\u7528\u8005\u9700\u8981\u5b89\u88dd poppler\u3002\u900f\u904e Brew \u9032\u884c\u5b89\u88dd\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"brew install poppler\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Linux\uff1a\u5927\u591a\u6578 Linux \u767c\u884c\u7248\u5df2\u9810\u88dd ",(0,s.jsx)(e.code,{children:"pdftoppm"})," \u548c ",(0,s.jsx)(e.code,{children:"pdftocairo"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u672a\u5b89\u88dd\uff0c\u8acb\u900f\u904e\u4f60\u7684\u5957\u4ef6\u7ba1\u7406\u5668\u5b89\u88dd poppler-utils\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt install poppler-utils\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5b89\u88dd\u5957\u4ef6",children:"\u5b89\u88dd\u5957\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:"\u6eff\u8db3\u524d\u63d0\u689d\u4ef6\u5f8c\uff0c\u4f60\u53ef\u4ee5\u9078\u64c7\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u9032\u884c\u5b89\u88dd\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"\u900f\u904e-git-clone-\u5b89\u88dd",children:"\u900f\u904e git clone \u5b89\u88dd"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e0b\u8f09\u672c\u5957\u4ef6\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/DocsaidLab/DocsaidKit.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b89\u88dd wheel \u5957\u4ef6\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pip install wheel\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5efa\u69cb wheel \u6a94\u6848\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd DocsaidKit\npython setup.py bdist_wheel\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b89\u88dd\u5efa\u7f6e\u7684 wheel \u5957\u4ef6\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pip install dist/docsaidkit-*-py3-none-any.whl\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\u5b89\u88dd\u652f\u63f4 PyTorch \u7684\u7248\u672c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'pip install "dist/docsaidKit-${version}-none-any.whl[torch]"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u900f\u904e-docker-\u5b89\u88dd\u5efa\u8b70",children:"\u900f\u904e docker \u5b89\u88dd\uff08\u5efa\u8b70\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u81ea\u5df1\u662f\u4e00\u5f8b\u900f\u904e docker \u9032\u884c\u5b89\u88dd\uff0c\u4ee5\u78ba\u4fdd\u74b0\u5883\u7684\u4e00\u81f4\u6027\uff0c\u6c92\u6709\u4f8b\u5916\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u4ee5\u6211\u4e5f\u540c\u6a23\u5efa\u8b70\u4f60\u4f7f\u7528 docker \u9032\u884c\u5b89\u88dd\uff0c\u76f8\u95dc\u74b0\u5883\u6211\u90fd\u6e2c\u8a66\u597d\u4e86\uff0c\u4f60\u53ea\u8981\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd DocsaidKit\nbash docker/build.bash\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b8c\u6210\u5f8c\uff0c\u6bcf\u6b21\u4f7f\u7528\u7684\u6642\u5019\u5c31\u628a\u6307\u4ee4\u5305\u5728 docker \u88e1\u9762\u57f7\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"docker run -v ${PWD}:/code -it docsaid_training_base_image your_scripts.py\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5efa\u7f6e\u6a94\u6848\u7684\u5177\u9ad4\u5167\u5bb9\uff0c\u8acb\u53c3\u8003\uff1a",(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/main/docker/Dockerfile",children:(0,s.jsx)(e.strong,{children:"Dockerfile"})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u5e38\u898b\u554f\u984c",children:"\u5e38\u898b\u554f\u984c"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u70ba\u4ec0\u9ebc\u6c92\u6709 Windows\uff1f"})}),"\n",(0,s.jsx)(e.p,{children:"\u62b1\u6b49\uff0c\u6211\u5c0d Windows \u74b0\u5883\u5efa\u7f6e\u6709 PTSD\uff08\u5275\u50b7\u5f8c\u58d3\u529b\u75c7\u5019\u7fa4\uff09\uff0c\u6240\u4ee5\u6c92\u6709\u652f\u63f4\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u73cd\u611b\u751f\u547d\uff0c\u9060\u96e2 Windows\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6211\u5c31\u60f3\u7528 Windows\uff0c\u6211\u52f8\u4f60\u5225\u591a\u7ba1\u9592\u4e8b\uff01"})}),"\n",(0,s.jsx)(e.p,{children:"\u597d\u5427\uff0c\u6211\u5efa\u8b70\u4f60\u5b89\u88dd Docker\uff0c\u7136\u5f8c\u4f7f\u7528 Docker Image \u4f86\u57f7\u884c\u4f60\u7684\u7a0b\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Docker \u600e\u9ebc\u88dd\uff1f"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u96e3\uff0c\u4f46\u6b65\u9a5f\u6709\u9ede\u591a\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u8acb\u53c3\u8003 ",(0,s.jsx)(e.a,{href:"https://docs.docker.com/get-docker/",children:(0,s.jsx)(e.strong,{children:"Docker \u5b98\u65b9\u6587\u4ef6"})})," \u9032\u884c\u5b89\u88dd\u3002"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>r});var s=i(96540);const l={},d=s.createContext(l);function c(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);