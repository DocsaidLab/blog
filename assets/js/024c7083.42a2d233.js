"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3080],{46012:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=e(74848),r=e(28453);const t={sidebar_position:5},c="SystemInfo",o={id:"docsaidkit/funcs/system_info",title:"SystemInfo",description:"\u9019\u662f\u4e00\u500b\u7528\u4f86\u7372\u53d6\u7cfb\u7d71\u8cc7\u8a0a\u7684\u5de5\u5177\u3002\u5b83\u53ef\u4ee5\u5e6b\u52a9\u4f60\u7372\u53d6 CPU\u3001\u8a18\u61b6\u9ad4\u3001\u78c1\u76e4\u3001\u7db2\u8def\u7b49\u7cfb\u7d71\u8cc7\u8a0a\u3002",source:"@site/docs/docsaidkit/funcs/system_info.md",sourceDirName:"docsaidkit/funcs",slug:"/docsaidkit/funcs/system_info",permalink:"/docsaidkit/funcs/system_info",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712934505e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"PowerDict",permalink:"/docsaidkit/funcs/powerdict"},next:{title:"Structures",permalink:"/category/structures"}},d={},l=[{value:"get_package_versions",id:"get_package_versions",level:2},{value:"get_gpu_cuda_versions",id:"get_gpu_cuda_versions",level:2},{value:"get_cpu_info",id:"get_cpu_info",level:2},{value:"get_system_info",id:"get_system_info",level:2}];function a(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"systeminfo",children:"SystemInfo"}),"\n",(0,i.jsx)(s.p,{children:"\u9019\u662f\u4e00\u500b\u7528\u4f86\u7372\u53d6\u7cfb\u7d71\u8cc7\u8a0a\u7684\u5de5\u5177\u3002\u5b83\u53ef\u4ee5\u5e6b\u52a9\u4f60\u7372\u53d6 CPU\u3001\u8a18\u61b6\u9ad4\u3001\u78c1\u76e4\u3001\u7db2\u8def\u7b49\u7cfb\u7d71\u8cc7\u8a0a\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"get_package_versions",children:"get_package_versions"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/system_info.py#L14",children:"get_package_versions() -> dict"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u7372\u53d6\u5e38\u7528\u6df1\u5ea6\u5b78\u7fd2\u548c\u6578\u64da\u5206\u6790\u76f8\u95dc\u5957\u4ef6\u7684\u7248\u672c\u3002\u5305\u542b PyTorch\u3001PyTorch Lightning\u3001TensorFlow\u3001Keras\u3001NumPy\u3001Pandas\u3001Scikit-learn\u3001OpenCV \u7b49\u5957\u4ef6\u7684\u7248\u672c\u8cc7\u8a0a\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"dict"}),"\uff1a\u5305\u542b\u5df2\u5b89\u88dd\u5957\u4ef6\u7248\u672c\u8cc7\u8a0a\u7684\u5b57\u5178\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nversions_info = D.get_package_versions()\nprint(versions_info)\n# versions_info = {\n#     'PyTorch Version': '1.9.0',\n#     'PyTorch Lightning Version': '1.3.8',\n#     'TensorFlow Version': '2.5.0',\n#     'Keras Version': '2.4.3',\n#     'NumPy Version': '1.19.5',\n#     'Pandas Version': '1.1.5',\n#     'Scikit-learn Version': '0.24.2',\n#     'OpenCV Version': '4.5.2'\n# }\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"get_gpu_cuda_versions",children:"get_gpu_cuda_versions"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/system_info.py#L84",children:"get_gpu_cuda_versions() -> dict"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u7372\u53d6 GPU \u548c CUDA \u7248\u672c\u8cc7\u8a0a\u3002\u5617\u8a66\u4f7f\u7528 PyTorch\u3001TensorFlow \u548c CuPy \u7b49\u5957\u4ef6\u4f86\u7372\u53d6 CUDA \u7248\u672c\uff0c\u4e26\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"nvidia-smi"})," \u547d\u4ee4\u4f86\u7372\u53d6 Nvidia \u9a45\u52d5\u7a0b\u5f0f\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"dict"}),"\uff1a\u5305\u542b CUDA \u548c GPU \u9a45\u52d5\u7a0b\u5f0f\u7248\u672c\u8cc7\u8a0a\u7684\u5b57\u5178\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\ngpu_cuda_info = D.get_gpu_cuda_versions()\nprint(gpu_cuda_info)\n# gpu_cuda_info = {\n#     'CUDA Version': '11.1',\n#     'NVIDIA Driver Version': '460.32.03'\n# }\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"get_cpu_info",children:"get_cpu_info"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/system_info.py#L134",children:"get_cpu_info() -> str"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u6839\u64da\u4e0d\u540c\u5e73\u53f0\u7372\u53d6 CPU \u578b\u865f\u540d\u7a31\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"str"}),'\uff1aCPU \u578b\u865f\u540d\u7a31\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5247\u8fd4\u56de "N/A"\u3002']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\ncpu_info = D.get_cpu_info()\nprint(cpu_info)\n# cpu_info = 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz'\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"get_system_info",children:"get_system_info"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/system_info.py#L163",children:"get_system_info() -> dict"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u7372\u53d6\u7cfb\u7d71\u8cc7\u8a0a\uff0c\u5305\u62ec\u4f5c\u696d\u7cfb\u7d71\u7248\u672c\u3001CPU \u8cc7\u8a0a\u3001\u8a18\u61b6\u9ad4\u3001\u78c1\u76e4\u4f7f\u7528\u91cf\u7b49\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"dict"}),"\uff1a\u5305\u542b\u7cfb\u7d71\u8cc7\u8a0a\u7684\u5b57\u5178\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nsystem_info = D.get_system_info()\nprint(system_info)\n# system_info = {\n#     'OS Version': 'Linux-5.4.0-80-generic-x86_64-with-glibc2.29',\n#     'CPU Model': 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',\n#     'Physical CPU Cores': 6,\n#     'Logical CPU Cores (incl. hyper-threading)': 12,\n#     'Total RAM (GB)': 15.52,\n#     'Available RAM (GB)': 7.52,\n#     'Disk Total (GB)': 476.94,\n#     'Disk Used (GB)': 18.94,\n#     'Disk Free (GB)': 458.0,\n#     'GPU Info': 'NVIDIA GeForce GTX 1660 Ti',\n#     'IPV4 Address': ['xxx.xxx.xxx.xxx'],\n#     'IPV4 Address (External)': 'xxx.xxx.xxx.xxx',\n#     'MAC Address': [\n#         'xx:xx:xx:xx:xx:xx'\n#     ]\n# }\n"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>o});var i=e(96540);const r={},t=i.createContext(r);function c(n){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(t.Provider,{value:s},n.children)}}}]);