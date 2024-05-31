"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[82301],{23858:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var s=i(74848),r=i(28453);const c={sidebar_position:3},l="\u8a13\u7df4\u74b0\u5883\u5efa\u7f6e",d={id:"docsaidkit/trainingdocker",title:"\u8a13\u7df4\u74b0\u5883\u5efa\u7f6e",description:"\u6982\u8ff0",source:"@site/docs/docsaidkit/trainingdocker.md",sourceDirName:"docsaidkit",slug:"/docsaidkit/trainingdocker",permalink:"/docs/docsaidkit/trainingdocker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88dd",permalink:"/docs/docsaidkit/installation"},next:{title:"PIP \u53c3\u6578\u914d\u7f6e",permalink:"/docs/docsaidkit/pipconfig"}},t={},o=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5efa\u7f6e Docker \u6620\u50cf",id:"\u5efa\u7f6e-docker-\u6620\u50cf",level:2},{value:"\u524d\u7f6e\u8981\u6c42",id:"\u524d\u7f6e\u8981\u6c42",level:3},{value:"\u57fa\u790e\u6620\u50cf",id:"\u57fa\u790e\u6620\u50cf",level:3},{value:"\u7a0b\u5f0f\u8aaa\u660e",id:"\u7a0b\u5f0f\u8aaa\u660e",level:3},{value:"\u5efa\u7f6e\u6307\u4ee4",id:"\u5efa\u7f6e\u6307\u4ee4",level:3},{value:"\u904b\u884c Docker \u6620\u50cf",id:"\u904b\u884c-docker-\u6620\u50cf",level:2},{value:"\u57fa\u672c\u904b\u884c\u6307\u4ee4",id:"\u57fa\u672c\u904b\u884c\u6307\u4ee4",level:3},{value:"\u7a0b\u5f0f\u8aaa\u660e",id:"\u7a0b\u5f0f\u8aaa\u660e-1",level:3},{value:"\u6ce8\u610f\u4e8b\u9805",id:"\u6ce8\u610f\u4e8b\u9805",level:3}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u8a13\u7df4\u74b0\u5883\u5efa\u7f6e",children:"\u8a13\u7df4\u74b0\u5883\u5efa\u7f6e"}),"\n",(0,s.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5011\u57fa\u65bc NVIDIA PyTorch \u6620\u50cf\u8a2d\u8a08\u4e86\u4e00\u500b\u5c08\u9580\u7528\u65bc\u6a5f\u5668\u5b78\u7fd2\u548c\u6df1\u5ea6\u5b78\u7fd2\u6a21\u578b\u8a13\u7df4\u7684 Docker \u6620\u50cf\uff0c\u4e26\u7d50\u5408\u6211\u5011\u81ea\u884c\u958b\u767c\u7684\u5de5\u5177\u7bb1\uff0c\u63d0\u4f9b\u4e86\u4e00\u500b\u57fa\u790e\u7684\u8a13\u7df4\u74b0\u5883\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u76f8\u95dc\u53c3\u8003\u8cc7\u6599"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u6bcf\u500b\u7248\u672c\u7684\u7d30\u7bc0\uff0c\u8acb\u67e5\u95b1\uff1a",(0,s.jsx)(e.a,{href:"https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/index.html",children:(0,s.jsx)(e.strong,{children:"PyTorch Release Notes"})})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["NVIDIA runtime \u524d\u6e96\u5099\uff0c\u8acb\u53c3\u8003\uff1a",(0,s.jsx)(e.a,{href:"https://github.com/NVIDIA/nvidia-docker/wiki/Installation-(Native-GPU-Support)#usage",children:(0,s.jsx)(e.strong,{children:"Installation (Native GPU Support)"})})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["NVIDIA Toolkit \u5b89\u88dd\u65b9\u5f0f\uff0c\u8acb\u53c3\u8003\uff1a",(0,s.jsx)(e.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:(0,s.jsx)(e.strong,{children:"Installing the NVIDIA Container Toolkit"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u9078\u64c7 pytorch \u6620\u50cf\u6642\uff0c\u5fc5\u9808\u540c\u6642\u53c3\u8003 onnxruntime \u7684\u7248\u672c\uff0c\u4ee5\u78ba\u4fdd\u5169\u8005\u76f8\u5bb9\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8209\u4f8b\u4f86\u8aaa\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u7576\u6211\u5011\u9078\u64c7\u4f7f\u7528 pytorch:23.11 \u7248\u672c\u6642\uff0c\u5176\u5c0d\u61c9\u7684 cuda \u7248\u672c\u70ba 12.3.0\u3002\u56e0\u6b64\u6211\u5011\u5c07\u7121\u6cd5\u5728\u6b64\u6620\u50cf\u4e2d\u4f7f\u7528 onnxruntime-gpu \u7248\u672c\uff0c\u56e0\u70ba\u5373\u4f7f\u662f\u76ee\u524d\u6700\u65b0\u7684 v1.16 \u7248\uff0c\u5b83\u9700\u8981\u7684 cuda \u7248\u672c\u70ba 11.8\u3002\u82e5\u5e0c\u671b\u80fd\u4f7f\u7528 onnxruntime-gpu\uff0c\u5247\u5fc5\u9808\u9078\u64c7 pytorch:22.12 \u7248\u672c\uff0c\u5176\u5c0d\u61c9\u7684 cuda \u7248\u672c\u70ba 11.8.0\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["ONNXRuntime \u76f8\u95dc\u5167\u5bb9\u53ef\u53c3\u8003\uff1a",(0,s.jsx)(e.a,{href:"https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html#requirements",children:"ONNX Runtime Release Notes"})]})}),"\n",(0,s.jsx)(e.h2,{id:"\u5efa\u7f6e-docker-\u6620\u50cf",children:"\u5efa\u7f6e Docker \u6620\u50cf"}),"\n",(0,s.jsx)(e.h3,{id:"\u524d\u7f6e\u8981\u6c42",children:"\u524d\u7f6e\u8981\u6c42"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u78ba\u4fdd\u4f60\u7684\u7cfb\u7d71\u5df2\u5b89\u88dd ",(0,s.jsx)(e.a,{href:"https://docs.docker.com/engine/install/",children:(0,s.jsx)(e.strong,{children:"Docker"})}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u78ba\u4fdd\u4f60\u7684\u7cfb\u7d71\u652f\u6301 NVIDIA Docker\uff0c\u4e26\u5df2\u5b89\u88dd ",(0,s.jsx)(e.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:(0,s.jsx)(e.strong,{children:"NVIDIA Container Toolkit"})}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u57fa\u790e\u6620\u50cf",children:"\u57fa\u790e\u6620\u50cf"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u5011\u4f7f\u7528 NVIDIA \u5b98\u65b9\u63d0\u4f9b\u7684 ",(0,s.jsx)(e.code,{children:"nvcr.io/nvidia/pytorch:24.03-py3"})," \u4f5c\u70ba\u57fa\u790e\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7a0b\u5f0f\u8aaa\u660e",children:"\u7a0b\u5f0f\u8aaa\u660e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53c3\u8003\u5efa\u7f6e\u6a94\u6848"}),"\uff1a",(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/main/docker/Dockerfile",children:(0,s.jsx)(e.strong,{children:"Dockerfile"})})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u74b0\u5883\u8b8a\u6578\u8a2d\u7f6e"}),"\uff1a\u8a2d\u7f6e\u4e86\u591a\u500b\u74b0\u5883\u8b8a\u6578\u4ee5\u512a\u5316\u6620\u50cf\u7684\u904b\u884c\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5b89\u88dd\u5957\u4ef6"}),"\uff1a\u5305\u62ec\u97f3\u8a0a\u3001\u8996\u8a0a\u548c\u5716\u50cf\u8655\u7406\u76f8\u95dc\u7684\u5eab\u548c\u5de5\u5177\uff0c\u4ee5\u53ca\u5fc5\u8981\u7684 Python \u5957\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Python \u5957\u4ef6"}),"\uff1a\u5305\u62ec\u7528\u65bc\u8a13\u7df4\u7684\u5de5\u5177\u548c\u5eab\uff0c\u5982 ",(0,s.jsx)(e.code,{children:"tqdm"}),", ",(0,s.jsx)(e.code,{children:"Pillow"}),", ",(0,s.jsx)(e.code,{children:"tensorboard"})," \u7b49\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5de5\u4f5c\u76ee\u9304"}),"\uff1a\u8a2d\u7f6e ",(0,s.jsx)(e.code,{children:"/code"})," \u70ba\u9810\u8a2d\u5de5\u4f5c\u76ee\u9304\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5efa\u7f6e\u6307\u4ee4",children:"\u5efa\u7f6e\u6307\u4ee4"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 DocsaidKit \u76ee\u9304\u4e2d\uff0c\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\u4f86\u5efa\u7f6e Docker \u6620\u50cf\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cd DocsaidKit\nbash docker/build.bash\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u904b\u884c-docker-\u6620\u50cf",children:"\u904b\u884c Docker \u6620\u50cf"}),"\n",(0,s.jsx)(e.p,{children:"\u5efa\u7f6e\u6210\u529f\u5f8c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u4f86\u904b\u884c\u6620\u50cf\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"\u57fa\u672c\u904b\u884c\u6307\u4ee4",children:"\u57fa\u672c\u904b\u884c\u6307\u4ee4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\ndocker run \\\n    --gpus all \\\n    --shm-size=64g \\\n    --ipc=host --net=host \\\n    --cpuset-cpus="0-31" \\\n    -it --rm docsaid_training_base_image bash\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u7a0b\u5f0f\u8aaa\u660e-1",children:"\u7a0b\u5f0f\u8aaa\u660e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"--gpus all"}),"\uff1a\u5206\u914d\u6240\u6709\u53ef\u7528 GPU \u7d66 Docker \u5bb9\u5668\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"--shm-size=64g"}),"\uff1a\u8a2d\u5b9a\u5171\u4eab\u5167\u5b58\u5927\u5c0f\uff0c\u9069\u7528\u65bc\u5927\u578b\u6df1\u5ea6\u5b78\u7fd2\u4efb\u52d9\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"--ipc=host --net=host"}),"\uff1a\u5bb9\u5668\u5c07\u4f7f\u7528\u4e3b\u6a5f\u7684 IPC \u548c\u7db2\u7d61\u8a2d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:'--cpuset-cpus="0-31"'}),"\uff1a\u9650\u5236 CPU \u4f7f\u7528\uff0c\u53ef\u6839\u64da\u9700\u6c42\u8abf\u6574\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6ce8\u610f\u4e8b\u9805",children:"\u6ce8\u610f\u4e8b\u9805"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8acb\u78ba\u4fdd Docker \u6620\u50cf\u904b\u884c\u6642\uff0c\u4e3b\u6a5f\u5177\u6709\u8db3\u5920\u7684\u8cc7\u6e90\uff08\u5982\u5167\u5b58\u548c\u5132\u5b58\u7a7a\u9593\uff09\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u82e5\u6709\u7248\u672c\u885d\u7a81\u6216\u7279\u5b9a\u9700\u6c42\uff0c\u53ef\u81ea\u884c\u8abf\u6574 Dockerfile \u4e2d\u7684\u5b89\u88dd\u5957\u4ef6\u548c\u7248\u672c\u3002"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>d});var s=i(96540);const r={},c=s.createContext(r);function l(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);