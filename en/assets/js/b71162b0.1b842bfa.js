"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7042],{37532:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=s(74848),l=s(28453);const t={sidebar_position:2},o="Installation",r={id:"docsaidkit/installation",title:"Installation",description:"Before installing DocsaidKit, please ensure your system meets the following requirements:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/installation.md",sourceDirName:"docsaidkit",slug:"/docsaidkit/installation",permalink:"/en/docsaidkit/installation",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713505465e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/en/docsaidkit/intro"},next:{title:"Environment",permalink:"/en/docsaidkit/trainingdocker"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Python Version",id:"python-version",level:3},{value:"Dependency Packages",id:"dependency-packages",level:3},{value:"pdf2image Dependencies",id:"pdf2image-dependencies",level:3},{value:"Package Installation",id:"package-installation",level:2},{value:"Installation via git clone",id:"installation-via-git-clone",level:3},{value:"Installation via docker (recommended)",id:"installation-via-docker-recommended",level:3},{value:"FAQs",id:"faqs",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Before installing DocsaidKit, please ensure your system meets the following requirements:"}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.h3,{id:"python-version",children:"Python Version"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure that Python 3.8 or higher is installed on your system."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dependency-packages",children:"Dependency Packages"}),"\n",(0,i.jsx)(n.p,{children:"Install the necessary dependencies based on your operating system."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Ubuntu"})}),"\n",(0,i.jsx)(n.p,{children:"Open a terminal and execute the following commands to install dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install libturbojpeg exiftool ffmpeg libheif-dev\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"MacOS"})}),"\n",(0,i.jsx)(n.p,{children:"Use brew to install dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install jpeg-turbo exiftool ffmpeg libheif\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pdf2image-dependencies",children:"pdf2image Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"pdf2image is a Python module used to convert PDF documents into images."}),"\n",(0,i.jsx)(n.p,{children:"Follow the installation instructions based on your operating system:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Refer to the open-source project ",(0,i.jsx)(n.a,{href:"https://github.com/Belval/pdf2image",children:(0,i.jsx)(n.strong,{children:"pdf2image"})})," for installation guides."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MacOS"}),": Mac users need to install poppler via Brew:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install poppler\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Linux"}),": Most Linux distributions come pre-installed with ",(0,i.jsx)(n.code,{children:"pdftoppm"})," and ",(0,i.jsx)(n.code,{children:"pdftocairo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If not installed, install poppler-utils via your package manager:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install poppler-utils\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"package-installation",children:"Package Installation"}),"\n",(0,i.jsx)(n.p,{children:"Once the prerequisites are met, choose one of the following methods to install:"}),"\n",(0,i.jsx)(n.h3,{id:"installation-via-git-clone",children:"Installation via git clone"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Download the package:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/DocsaidLab/DocsaidKit.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the wheel package:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install wheel\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Build the wheel file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd DocsaidKit\npython setup.py bdist_wheel\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the built wheel package:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install dist/docsaidkit-*-py3-none-any.whl\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you need to install the version supporting PyTorch:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "dist/docsaidKit-${version}-none-any.whl[torch]"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"installation-via-docker-recommended",children:"Installation via docker (recommended)"}),"\n",(0,i.jsx)(n.p,{children:"I always install via docker to ensure consistency of the environment, no exceptions."}),"\n",(0,i.jsx)(n.p,{children:"I also recommend you install via docker. I have tested the environment, just use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd DocsaidKit\nbash docker/build.bash\n"})}),"\n",(0,i.jsx)(n.p,{children:"After completion, whenever you want to use it, wrap your commands in docker:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -v ${PWD}:/code -it docsaid_training_base_image your_scripts.py\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For specific contents of the build file, refer to: ",(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/main/docker/Dockerfile",children:(0,i.jsx)(n.strong,{children:"Dockerfile"})})]}),"\n",(0,i.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Why no Windows support?"})}),"\n",(0,i.jsx)(n.p,{children:"Sorry, I have PTSD (Post-Traumatic Stress Disorder) from building environments on Windows, so it's not supported."}),"\n",(0,i.jsx)(n.p,{children:"Value your life, stay away from Windows."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"I want to use Windows anyway."})}),"\n",(0,i.jsx)(n.p,{children:"Alright, I recommend installing Docker and then using the Docker Image to run your programs."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"How do I install Docker?"})}),"\n",(0,i.jsx)(n.p,{children:"It's not hard, but there are several steps."}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:(0,i.jsx)(n.strong,{children:"Docker's official documentation"})})," for installation instructions."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(96540);const l={},t=i.createContext(l);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);