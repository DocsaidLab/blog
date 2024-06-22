"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[577],{28541:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(74848),o=s(28453);const t={sidebar_position:5},r="SystemInfo",c={id:"docsaidkit/funcs/system_info",title:"SystemInfo",description:"This tool is designed to fetch system information. It can help you retrieve information about your CPU, memory, disk, network, and more.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/system_info.md",sourceDirName:"docsaidkit/funcs",slug:"/docsaidkit/funcs/system_info",permalink:"/en/docs/docsaidkit/funcs/system_info",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"PowerDict",permalink:"/en/docs/docsaidkit/funcs/powerdict"},next:{title:"Structures",permalink:"/en/docs/category/structures"}},d={},l=[{value:"get_package_versions",id:"get_package_versions",level:2},{value:"get_gpu_cuda_versions",id:"get_gpu_cuda_versions",level:2},{value:"get_cpu_info",id:"get_cpu_info",level:2},{value:"get_system_info",id:"get_system_info",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"systeminfo",children:"SystemInfo"}),"\n",(0,i.jsx)(e.p,{children:"This tool is designed to fetch system information. It can help you retrieve information about your CPU, memory, disk, network, and more."}),"\n",(0,i.jsx)(e.h2,{id:"get_package_versions",children:"get_package_versions"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/system_info.py#L14",children:"get_package_versions() -> dict"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Description"}),": Fetches the versions of commonly used deep learning and data analysis packages. This includes version information for packages like PyTorch, PyTorch Lightning, TensorFlow, Keras, NumPy, Pandas, Scikit-learn, OpenCV, etc."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"dict"}),": A dictionary containing the version information of installed packages."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nversions_info = D.get_package_versions()\nprint(versions_info)\n# versions_info = {\n#     'PyTorch Version': '1.9.0',\n#     'PyTorch Lightning Version': '1.3.8',\n#     'TensorFlow Version': '2.5.0',\n#     'Keras Version': '2.4.3',\n#     'NumPy Version': '1.19.5',\n#     'Pandas Version': '1.1.5',\n#     'Scikit-learn Version': '0.24.2',\n#     'OpenCV Version': '4.5.2'\n# }\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"get_gpu_cuda_versions",children:"get_gpu_cuda_versions"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/system_info.py#L84",children:"get_gpu_cuda_versions() -> dict"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Description"}),": Retrieves GPU and CUDA version information. Attempts to fetch CUDA versions using packages like PyTorch, TensorFlow, and CuPy, and uses the ",(0,i.jsx)(e.code,{children:"nvidia-smi"})," command to get Nvidia driver versions."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"dict"}),": A dictionary containing CUDA and GPU driver version information."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\ngpu_cuda_info = D.get_gpu_cuda_versions()\nprint(gpu_cuda_info)\n# gpu_cuda_info = {\n#     'CUDA Version': '11.1',\n#     'NVIDIA Driver Version': '460.32.03'\n# }\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"get_cpu_info",children:"get_cpu_info"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/system_info.py#L134",children:"get_cpu_info() -> str"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Description"}),": Retrieves the CPU model name based on the platform."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"str"}),': CPU model name, or "N/A" if not found.']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\ncpu_info = D.get_cpu_info()\nprint(cpu_info)\n# cpu_info = 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz'\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"get_system_info",children:"get_system_info"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/utils/system_info.py#L163",children:"get_system_info() -> dict"})}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Description"}),": Retrieves comprehensive system information, including OS version, CPU details, memory, disk usage, and more."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"dict"}),": A dictionary containing detailed system information."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nsystem_info = D.get_system_info()\nprint(system_info)\n# system_info = {\n#     'OS Version': 'Linux-5.4.0-80-generic-x86_64-with-glibc2.29',\n#     'CPU Model': 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',\n#     'Physical CPU Cores': 6,\n#     'Logical CPU Cores (incl. hyper-threading)': 12,\n#     'Total RAM (GB)': 15.52,\n#     'Available RAM (GB)': 7.52,\n#     'Disk Total (GB)': 476.94,\n#     'Disk Used (GB)': 18.94,\n#     'Disk Free (GB)': 458.0,\n#     'GPU Info': 'NVIDIA GeForce GTX 1660 Ti',\n#\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var i=s(96540);const o={},t=i.createContext(o);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);