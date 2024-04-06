"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6869],{9132:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var l=i(74848),s=i(28453);const d={sidebar_position:2},r="Installation",t={id:"docsaidkit/Installation",title:"Installation",description:"\u5728\u958b\u59cb\u5b89\u88dd DocsaidKit \u4e4b\u524d\uff0c\u8acb\u78ba\u4fdd\u4f60\u7684\u7cfb\u7d71\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff1a",source:"@site/docs/docsaidkit/Installation.md",sourceDirName:"docsaidkit",slug:"/docsaidkit/Installation",permalink:"/docsaidkit/Installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docsaidkit/Intro"},next:{title:"Enums",permalink:"/docsaidkit/enums"}},c={},a=[{value:"\u524d\u7f6e\u689d\u4ef6",id:"\u524d\u7f6e\u689d\u4ef6",level:2},{value:"Python \u7248\u672c",id:"python-\u7248\u672c",level:3},{value:"\u4f9d\u8cf4\u5957\u4ef6",id:"\u4f9d\u8cf4\u5957\u4ef6",level:3},{value:"pdf2image \u4f9d\u8cf4\u5957\u4ef6",id:"pdf2image-\u4f9d\u8cf4\u5957\u4ef6",level:3},{value:"\u5b89\u88dd\u5957\u4ef6",id:"\u5b89\u88dd\u5957\u4ef6",level:2},{value:"\u900f\u904e git clone \u5b89\u88dd",id:"\u900f\u904e-git-clone-\u5b89\u88dd",level:3},{value:"\u900f\u904e docker \u5b89\u88dd\uff08\u5efa\u8b70\uff09",id:"\u900f\u904e-docker-\u5b89\u88dd\u5efa\u8b70",level:3},{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:2}];function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u958b\u59cb\u5b89\u88dd DocsaidKit \u4e4b\u524d\uff0c\u8acb\u78ba\u4fdd\u4f60\u7684\u7cfb\u7d71\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff1a"}),"\n",(0,l.jsx)(e.h2,{id:"\u524d\u7f6e\u689d\u4ef6",children:"\u524d\u7f6e\u689d\u4ef6"}),"\n",(0,l.jsx)(e.h3,{id:"python-\u7248\u672c",children:"Python \u7248\u672c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u78ba\u4fdd\u7cfb\u7d71\u5df2\u5b89\u88dd Python 3.8 \u6216\u4ee5\u4e0a\u7248\u672c\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f9d\u8cf4\u5957\u4ef6",children:"\u4f9d\u8cf4\u5957\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u64da\u4f60\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u5b89\u88dd\u6240\u9700\u7684\u4f9d\u8cf4\u5957\u4ef6\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Ubuntu"})}),"\n",(0,l.jsx)(e.p,{children:"\u958b\u555f\u7d42\u7aef\uff0c\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd\u4f9d\u8cf4\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt install libturbojpeg exiftool ffmpeg libheif-dev\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"MacOS"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 brew \u5b89\u88dd\u76f8\u4f9d\u6027\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"brew install jpeg-turbo exiftool ffmpeg libheif\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"pdf2image-\u4f9d\u8cf4\u5957\u4ef6",children:"pdf2image \u4f9d\u8cf4\u5957\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"pdf2image \u662f\u4e00\u500b Python \u6a21\u7d44\uff0c\u7528\u65bc\u5c07 PDF \u6587\u4ef6\u8f49\u63db\u70ba\u5716\u7247\u3002\u6839\u64da\u4f60\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u8acb\u9075\u5faa\u4ee5\u4e0b\u6307\u793a\u9032\u884c\u5b89\u88dd\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u6216\u53c3\u8003\u958b\u6e90\u5c08\u6848 ",(0,l.jsx)(e.a,{href:"https://github.com/Belval/pdf2image",children:(0,l.jsx)(e.strong,{children:"pdf2image"})})," \u76f8\u95dc\u9801\u9762\u4ee5\u53d6\u5f97\u5b89\u88dd\u6307\u5357\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"MacOS\uff1aMac \u4f7f\u7528\u8005\u9700\u8981\u5b89\u88dd poppler\u3002\u900f\u904e Brew \u9032\u884c\u5b89\u88dd\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"brew install poppler\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Linux\uff1a\u5927\u591a\u6578 Linux \u767c\u884c\u7248\u5df2\u9810\u88dd ",(0,l.jsx)(e.code,{children:"pdftoppm"})," \u548c ",(0,l.jsx)(e.code,{children:"pdftocairo"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u672a\u5b89\u88dd\uff0c\u8acb\u900f\u904e\u4f60\u7684\u5957\u4ef6\u7ba1\u7406\u5668\u5b89\u88dd poppler-utils\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt install poppler-utils\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5b89\u88dd\u5957\u4ef6",children:"\u5b89\u88dd\u5957\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u6eff\u8db3\u524d\u63d0\u689d\u4ef6\u5f8c\uff0c\u4f60\u53ef\u4ee5\u9078\u64c7\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\u9032\u884c\u5b89\u88dd\uff1a"}),"\n",(0,l.jsx)(e.h3,{id:"\u900f\u904e-git-clone-\u5b89\u88dd",children:"\u900f\u904e git clone \u5b89\u88dd"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4e0b\u8f09\u672c\u5957\u4ef6\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/DocsaidLab/DocsaidKit.git\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5b89\u88dd wheel \u5957\u4ef6\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pip install wheel\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5efa\u69cb wheel \u6a94\u6848\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cd DocsaidKit\npython setup.py bdist_wheel\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5b89\u88dd\u5efa\u7f6e\u7684 wheel \u5957\u4ef6\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pip install dist/docsaidKit-${version}-none-any.whl\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\u5b89\u88dd\u652f\u63f4 PyTorch \u7684\u7248\u672c\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'pip install "dist/docsaidKit-${version}-none-any.whl[torch]"\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u900f\u904e-docker-\u5b89\u88dd\u5efa\u8b70",children:"\u900f\u904e docker \u5b89\u88dd\uff08\u5efa\u8b70\uff09"}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u81ea\u5df1\u662f\u4e00\u5f8b\u900f\u904e docker \u9032\u884c\u5b89\u88dd\uff0c\u4ee5\u78ba\u4fdd\u74b0\u5883\u7684\u4e00\u81f4\u6027\uff0c\u6c92\u6709\u4f8b\u5916\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u4ee5\u6211\u4e5f\u540c\u6a23\u5efa\u8b70\u4f60\u4f7f\u7528 docker \u9032\u884c\u5b89\u88dd\uff0c\u76f8\u95dc\u74b0\u5883\u6211\u90fd\u6e2c\u8a66\u597d\u4e86\uff0c\u4f60\u53ea\u8981\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cd DocsaidKit\nbash docker/build.bash\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5b8c\u6210\u5f8c\uff0c\u6bcf\u6b21\u4f7f\u7528\u7684\u6642\u5019\u5c31\u628a\u6307\u4ee4\u5305\u5728 docker \u88e1\u9762\u57f7\u884c\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"docker run -v ${PWD}:/code -it docsaid_training_base_image your_scripts.py\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f Build Script \u5177\u9ad4\u5167\u5bb9\uff0c\u6bcf\u500b\u7248\u672c\u90fd\u6703\u8abf\u6574\u90e8\u5206\u7d30\u7bc0\uff0c\u4ee5\u4e0b\u5167\u5bb9\u662f\u57fa\u65bc DocsaidKit V0.18.0\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-dockerfile",metastring:'title="DocsaidKit/docker/Dockerfile"',children:'# syntax=docker/dockerfile:experimental\nFROM nvcr.io/nvidia/pytorch:24.02-py3\n\n# \u9019\u78ba\u4fdd\u5728\u904b\u884c apt \u547d\u4ee4\u6642\u4e0d\u6703\u6709\u4efb\u4f55\u7528\u6236\u4ea4\u4e92\u3002\n# \u9019\u662f\u70ba\u4e86\u78ba\u4fdd Docker \u6620\u50cf\u5efa\u69cb\u904e\u7a0b\u81ea\u52d5\u9032\u884c\uff0c\u7121\u9700\u4eba\u5de5\u4ecb\u5165\u3002\nENV DEBIAN_FRONTEND=noninteractive\n\n# \u9632\u6b62 Python \u5275\u5efa .pyc \u5b57\u7bc0\u78bc\u6587\u4ef6\u3002\nENV PYTHONDONTWRITEBYTECODE=1\n\n# \u70baMatplotlib\u548cTransformers\u5efa\u7acb\u914d\u7f6e\u548c\u7de9\u5b58\u76ee\u9304\nRUN mkdir -p /app/matplotlib_config /app/transformers_cache\n\n# \u8a2d\u7f6e\u74b0\u5883\u8b8a\u91cf\nENV MPLCONFIGDIR /app/matplotlib_config\nENV TRANSFORMERS_CACHE /app/transformers_cache\n\n# \u78ba\u4fdd\u76ee\u9304\u5177\u6709\u6b63\u78ba\u7684\u6b0a\u9650\nRUN chmod -R 777 /app/matplotlib_config /app/transformers_cache\n\n# \u5b89\u88dd tzdata \u5957\u4ef6\u4e26\u8a2d\u5b9a\u6642\u5340\u70ba Asia/Taipei\nRUN apt update -y && apt install -y tzdata && \\\n    ln -fs /usr/share/zoneinfo/Asia/Taipei /etc/localtime && \\\n    dpkg-reconfigure -f noninteractive tzdata\nENV TZ=Asia/Taipei\n\n# \u5b89\u88dd\u57fa\u672c\u5957\u4ef6\n# libturbojpeg -> \u7528\u65bc JPEG \u5716\u50cf\u7684\u5eab\n# exiftool -> \u7528\u65bc\u8b80\u53d6\u5716\u50cf EXIF \u8cc7\u8a0a\n# ffmpeg -> \u8655\u7406\u97f3\u983b\u548c\u8996\u983b\u7684\u5de5\u5177\n# poppler-utils -> \u7528\u65bc PDF \u8f49\u63db\u6210\u5f71\u50cf\n# libpng-dev -> \u7528\u65bc\u8655\u7406 PNG \u5716\u50cf\u7684\u5eab\n# libtiff5-dev -> \u7528\u65bc\u8655\u7406 TIFF \u5716\u50cf\u7684\u5eab\n# libjpeg8-dev -> \u7528\u65bc\u8655\u7406 JPEG \u5716\u50cf\u7684\u5eab\n# libopenjp2-7-dev -> \u7528\u65bc\u8655\u7406 JPEG 2000 \u5716\u50cf\u7684\u5eab\n# zlib1g-dev -> \u7528\u65bc\u58d3\u7e2e\u548c\u89e3\u58d3\u7e2e\u7684\u5eab\n# libfreetype6-dev -> \u7528\u65bc\u8655\u7406 TrueType \u548c OpenType \u5b57\u9ad4\u7684\u5eab\n# liblcms2-dev -> \u7528\u65bc\u8655\u7406\u8272\u5f69\u7ba1\u7406\u7cfb\u7d71\u7684\u5eab\n# libwebp-dev -> \u7528\u65bc\u8655\u7406 WebP \u5716\u50cf\u7684\u5eab\n# tcl8.6-dev -> GUI \u5de5\u5177\u5305\n# tk8.6-dev -> GUI \u5de5\u5177\u5305\n# python3-tk -> GUI \u5de5\u5177\u5305\n# libharfbuzz-dev -> \u7528\u65bc\u8655\u7406 Unicode \u6587\u672c\u7684\u5eab\n# libfribidi-dev -> \u7528\u65bc\u8655\u7406 Unicode \u6587\u672c\u7684\u5eab\n# libxcb1-dev -> X \u5354\u8b70 C-language Binding\u5eab\n# libfftw3-dev -> \u7528\u65bc\u8655\u7406\u5feb\u901f\u5085\u7acb\u8449\u8f49\u63db\u7684\u5eab\nRUN apt update -y && apt upgrade -y && apt install -y git \\\n    libturbojpeg exiftool ffmpeg poppler-utils libpng-dev \\\n    libtiff5-dev libjpeg8-dev libopenjp2-7-dev zlib1g-dev \\\n    libfreetype6-dev liblcms2-dev libwebp-dev tcl8.6-dev tk8.6-dev python3-tk \\\n    libharfbuzz-dev libfribidi-dev libxcb1-dev libfftw3-dev && rm -rf /var/lib/apt/lists/*\n\nRUN python -m pip install -U setuptools pip wheel\n\n# For training\nRUN python -m pip install -U tqdm colored ipython tabulate \\\n    tensorboard scikit-learn fire albumentations Pillow>=10.0.0 fitsne\n\n# \u5b89\u88dd docsaidkit\nCOPY . /usr/local/DocsaidKit\nRUN cd /usr/local/DocsaidKit && python setup.py bdist_wheel && \\\n    python -m pip install $(ls dist/*.whl | sed \'s/$/[torch]/\') && \\\n    rm -rf /usr/local/DocsaidKit\n\n# Fixed 4.8.0.76 import error\nRUN python -m pip install opencv-python==4.8.0.74\n\n# Preload data\nRUN python -c "import docsaidkit"\n\nWORKDIR /code\n\nCMD ["bash"]\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u5e38\u898b\u554f\u984c",children:"\u5e38\u898b\u554f\u984c"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u70ba\u4ec0\u9ebc\u6c92\u6709 Windows\uff1f"})}),"\n",(0,l.jsx)(e.p,{children:"\u62b1\u6b49\uff0c\u6211\u5c0d Windows \u74b0\u5883\u5efa\u7f6e\u6709 PTSD\uff08\u5275\u50b7\u5f8c\u58d3\u529b\u75c7\u5019\u7fa4\uff09\uff0c\u6240\u4ee5\u6c92\u6709\u652f\u63f4\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u73cd\u611b\u751f\u547d\uff0c\u9060\u96e2 Windows\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6211\u5c31\u60f3\u7528 Windows\uff0c\u6211\u52f8\u4f60\u5225\u591a\u7ba1\u9592\u4e8b\uff01"})}),"\n",(0,l.jsx)(e.p,{children:"\u597d\u5427\uff0c\u6211\u5efa\u8b70\u4f60\u5b89\u88dd Docker\uff0c\u7136\u5f8c\u4f7f\u7528 Docker Image \u4f86\u57f7\u884c\u4f60\u7684\u7a0b\u5f0f\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Docker \u600e\u9ebc\u88dd\uff1f"})}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u96e3\uff0c\u4f46\u6b65\u9a5f\u6709\u9ede\u591a\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u8acb\u53c3\u8003 ",(0,l.jsx)(e.a,{href:"https://docs.docker.com/get-docker/",children:(0,l.jsx)(e.strong,{children:"Docker \u5b98\u65b9\u6587\u4ef6"})})," \u9032\u884c\u5b89\u88dd\u3002"]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>t});var l=i(96540);const s={},d=l.createContext(s);function r(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);