"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6869],{9132:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var l=i(4848),s=i(8453);const d={sidebar_position:2},c="Installation",r={id:"docsaidkit/Installation",title:"Installation",description:"\u5728\u958b\u59cb\u5b89\u88dd DocsaidKit \u4e4b\u524d\uff0c\u8acb\u78ba\u4fdd\u60a8\u7684\u7cfb\u7d71\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff1a",source:"@site/docs/docsaidkit/Installation.md",sourceDirName:"docsaidkit",slug:"/docsaidkit/Installation",permalink:"/docs/docsaidkit/Installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/docsaidkit/Intro"},next:{title:"Vision",permalink:"/docs/category/vision"}},t={},o=[{value:"\u524d\u7f6e\u689d\u4ef6",id:"\u524d\u7f6e\u689d\u4ef6",level:2},{value:"Python \u7248\u672c",id:"python-\u7248\u672c",level:3},{value:"\u4f9d\u8cf4\u5957\u4ef6",id:"\u4f9d\u8cf4\u5957\u4ef6",level:3},{value:"pdf2image \u5b89\u88dd",id:"pdf2image-\u5b89\u88dd",level:3},{value:"\u5b89\u88dd\u5957\u4ef6",id:"\u5b89\u88dd\u5957\u4ef6",level:2},{value:"\u4e00\u822c\u65b9\u6cd5",id:"\u4e00\u822c\u65b9\u6cd5",level:3},{value:"\u900f\u904e git clone \u5b89\u88dd",id:"\u900f\u904e-git-clone-\u5b89\u88dd",level:3},{value:"\u900f\u904e docker \u5b89\u88dd\uff08\u5efa\u8b70\uff09",id:"\u900f\u904e-docker-\u5b89\u88dd\u5efa\u8b70",level:3},{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u958b\u59cb\u5b89\u88dd DocsaidKit \u4e4b\u524d\uff0c\u8acb\u78ba\u4fdd\u60a8\u7684\u7cfb\u7d71\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff1a"}),"\n",(0,l.jsx)(e.h2,{id:"\u524d\u7f6e\u689d\u4ef6",children:"\u524d\u7f6e\u689d\u4ef6"}),"\n",(0,l.jsx)(e.h3,{id:"python-\u7248\u672c",children:"Python \u7248\u672c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u78ba\u4fdd\u7cfb\u7d71\u5df2\u5b89\u88dd Python 3.8 \u6216\u4ee5\u4e0a\u7248\u672c\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f9d\u8cf4\u5957\u4ef6",children:"\u4f9d\u8cf4\u5957\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u64da\u60a8\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u5b89\u88dd\u6240\u9700\u7684\u4f9d\u8cf4\u5957\u4ef6\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Ubuntu"})}),"\n",(0,l.jsx)(e.p,{children:"\u958b\u555f\u7d42\u7aef\uff0c\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd\u4f9d\u8cf4\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt install libturbojpeg exiftool ffmpeg libheif-dev\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"MacOS"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 brew \u5b89\u88dd\u76f8\u4f9d\u6027\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"brew install jpeg-turbo exiftool ffmpeg libheif\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"pdf2image-\u5b89\u88dd",children:"pdf2image \u5b89\u88dd"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u8acb\u53c3\u8003\u958b\u6e90\u5c08\u6848 ",(0,l.jsx)(e.a,{href:"https://github.com/Belval/pdf2image",children:(0,l.jsx)(e.strong,{children:"pdf2image"})})," \u76f8\u95dc\u9801\u9762\u4ee5\u53d6\u5f97\u5b89\u88dd\u6307\u5357\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5b89\u88dd\u5957\u4ef6",children:"\u5b89\u88dd\u5957\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u6eff\u8db3\u524d\u63d0\u689d\u4ef6\u5f8c\uff0c\u60a8\u53ef\u4ee5\u9078\u64c7\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u9032\u884c\u5b89\u88dd\uff1a"}),"\n",(0,l.jsx)(e.h3,{id:"\u4e00\u822c\u65b9\u6cd5",children:"\u4e00\u822c\u65b9\u6cd5"}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u5305\u50c5\u900f\u904e\u6211\u5011\u7684\u5167\u90e8 Pypi \u670d\u52d9\u63d0\u4f9b\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5916\u90e8\u4f7f\u7528\u8005\u61c9\u900f\u904e git \u8907\u88fd\u4e26\u4f7f\u7528 setup.py \u5b89\u88dd\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u900f\u904e-git-clone-\u5b89\u88dd",children:"\u900f\u904e git clone \u5b89\u88dd"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5b89\u88dd wheel \u5957\u4ef6\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pip install wheel\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5efa\u69cb wheel \u6a94\u6848\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"python setup.py bdist_wheel\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5b89\u88dd\u5efa\u7f6e\u7684 wheel \u5957\u4ef6\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pip install dist/docsaidKit-${version}-none-any.whl\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\u5b89\u88dd\u652f\u63f4 PyTorch \u7684\u7248\u672c\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'pip install "dist/docsaidKit-${version}-none-any.whl[torch]"\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u900f\u904e-docker-\u5b89\u88dd\u5efa\u8b70",children:"\u900f\u904e docker \u5b89\u88dd\uff08\u5efa\u8b70\uff09"}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u5011\u4e00\u5f8b\u900f\u904e docker \u9032\u884c\u5b89\u88dd\uff0c\u4ee5\u78ba\u4fdd\u74b0\u5883\u7684\u4e00\u81f4\u6027\uff0c\u6c92\u6709\u4f8b\u5916\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u4ee5\u6211\u5011\u4e5f\u540c\u6a23\u5efa\u8b70\u60a8\u4f7f\u7528 docker \u9032\u884c\u5b89\u88dd\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"bash docker/build.bash\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5e38\u898b\u554f\u984c",children:"\u5e38\u898b\u554f\u984c"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u4f9d\u8cf4\u5b89\u88dd"})}),"\n",(0,l.jsxs)(e.p,{children:["\u7279\u5b9a\u7684\u4f9d\u8cf4\u5957\u4ef6\u5982 ",(0,l.jsx)(e.code,{children:"libturbojpeg"}),", ",(0,l.jsx)(e.code,{children:"exiftool"}),", ",(0,l.jsx)(e.code,{children:"ffmpeg"}),", ",(0,l.jsx)(e.code,{children:"libheif-dev"})," \u5728\u4e0d\u540c\u4f5c\u696d\u7cfb\u7d71\u4e0a\u7684\u5b89\u88dd\u65b9\u6cd5\u53ef\u80fd\u6703\u6709\u6240\u4e0d\u540c\u3002 \u4e0a\u8ff0\u6307\u5357\u63d0\u4f9b\u4e86\u5728 Ubuntu \u548c MacOS \u4e0a\u5b89\u88dd\u9019\u4e9b\u4f9d\u8cf4\u7684\u547d\u4ee4\u3002 \u9019\u4e9b\u4f9d\u8cf4\u5c0d\u65bc\u78ba\u4fdd DocsaidKit \u4e2d\u7684\u7279\u5b9a\u529f\u80fd\u6b63\u5e38\u904b\u4f5c\u662f\u5fc5\u8981\u7684\u3002"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>r});var l=i(6540);const s={},d=l.createContext(s);function c(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);