"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5619],{7970:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=i(74848),r=i(28453);const t={sidebar_position:3},o="Environment",l={id:"docsaidkit/trainingdocker",title:"Environment",description:"Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/trainingdocker.md",sourceDirName:"docsaidkit",slug:"/docsaidkit/trainingdocker",permalink:"/en/docs/docsaidkit/trainingdocker",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714687486e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/en/docs/docsaidkit/installation"},next:{title:"PIP configs",permalink:"/en/docs/docsaidkit/pipconfig"}},d={},a=[{value:"Overview",id:"overview",level:2},{value:"Building the Docker Image",id:"building-the-docker-image",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Base Image",id:"base-image",level:3},{value:"Build Instructions",id:"build-instructions",level:3},{value:"Build Commands",id:"build-commands",level:3},{value:"Running the Docker Image",id:"running-the-docker-image",level:2},{value:"Basic Run Command",id:"basic-run-command",level:3},{value:"Command Explanation",id:"command-explanation",level:3},{value:"Considerations",id:"considerations",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"environment",children:"Environment"}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"We have designed a Docker image specifically for machine learning and deep learning model training based on the NVIDIA PyTorch image. Combined with our in-house developed toolkit, it provides a foundational training environment."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Related Resources"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For details on each version, please consult: ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/index.html",children:(0,s.jsx)(n.strong,{children:"PyTorch Release Notes"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For NVIDIA runtime preparation, refer to: ",(0,s.jsx)(n.a,{href:"https://github.com/NVIDIA/nvidia-docker/wiki/Installation-(Native-GPU-Support)#usage",children:(0,s.jsx)(n.strong,{children:"Installation (Native GPU Support)"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For NVIDIA Toolkit installation, refer to: ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:(0,s.jsx)(n.strong,{children:"Installing the NVIDIA Container Toolkit"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"When choosing a PyTorch image, it's crucial to consider the version of ONNXRuntime to ensure compatibility."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For example:"})}),"\n",(0,s.jsx)(n.p,{children:"When opting for pytorch:23.11, the corresponding CUDA version is 12.3.0. Therefore, it is impossible to use the onnxruntime-gpu version in this image, as even the latest v1.16 version requires CUDA version 11.8. If onnxruntime-gpu is desired, one must choose the pytorch:22.12 version, which corresponds to CUDA version 11.8.0."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For more on ONNXRuntime, refer to: ",(0,s.jsx)(n.a,{href:"https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html#requirements",children:"ONNX Runtime Release Notes"})]})}),"\n",(0,s.jsx)(n.h2,{id:"building-the-docker-image",children:"Building the Docker Image"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure your system has ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:(0,s.jsx)(n.strong,{children:"Docker"})})," installed."]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure your system supports NVIDIA Docker and has ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:(0,s.jsx)(n.strong,{children:"NVIDIA Container Toolkit"})})," installed."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"base-image",children:"Base Image"}),"\n",(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.code,{children:"nvcr.io/nvidia/pytorch:24.03-py3"})," provided by NVIDIA as the base."]}),"\n",(0,s.jsx)(n.h3,{id:"build-instructions",children:"Build Instructions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reference Build File"}),": ",(0,s.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/main/docker/Dockerfile",children:(0,s.jsx)(n.strong,{children:"Dockerfile"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Environment Variables"}),": Several environment variables are set to optimize the image operation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Installed Packages"}),": Includes libraries and tools related to audio, video, and image processing, along with necessary Python packages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Python Packages"}),": Includes tools and libraries for training, such as ",(0,s.jsx)(n.code,{children:"tqdm"}),", ",(0,s.jsx)(n.code,{children:"Pillow"}),", ",(0,s.jsx)(n.code,{children:"tensorboard"}),", etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Working Directory"}),": Sets ",(0,s.jsx)(n.code,{children:"/code"})," as the default working directory."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"build-commands",children:"Build Commands"}),"\n",(0,s.jsx)(n.p,{children:"In the DocsaidKit directory, execute the following command to build the Docker image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd DocsaidKit\nbash docker/build.bash\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-the-docker-image",children:"Running the Docker Image"}),"\n",(0,s.jsx)(n.p,{children:"After a successful build, you can use the following commands to run the image:"}),"\n",(0,s.jsx)(n.h3,{id:"basic-run-command",children:"Basic Run Command"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\ndocker run \\\n    --gpus all \\\n    --shm-size=64g \\\n    --ipc=host --net=host \\\n    --cpuset-cpus="0-31" \\\n    -it --rm docsaid_training_base_image bash\n'})}),"\n",(0,s.jsx)(n.h3,{id:"command-explanation",children:"Command Explanation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--gpus all"}),": Assigns all available GPUs to the Docker container."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--shm-size=64g"}),": Sets the shared memory size, suitable for large-scale deep learning tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--ipc=host --net=host"}),": The container will use the host's IPC and network settings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'--cpuset-cpus="0-31"'}),": Restricts CPU usage, can be adjusted based on requirements."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"considerations",children:"Considerations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure that the host has sufficient resources (such as memory and storage space) when running the Docker image."}),"\n",(0,s.jsx)(n.li,{children:"If there are version conflicts or specific requirements, adjust the installation packages and versions in the Dockerfile as needed."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);