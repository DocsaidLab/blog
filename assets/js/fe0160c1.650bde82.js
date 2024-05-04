"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6791],{34709:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(74848),s=r(28453);const o={slug:"python-env-info-collector",title:"\u8a18\u9304\u8207\u6392\u67e5\u6a21\u578b\u8a13\u7df4\u74b0\u5883\u554f\u984c",authors:"Zephyr",tags:["python","training","env","info","log"],image:"/img/2023/0922.webp",description:"\u81ea\u5df1\u624b\u523b\u7684\u7d00\u9304\u5de5\u5177\uff0c\u5206\u4eab\u7d66\u5927\u5bb6\u4f7f\u7528\u3002"},t=void 0,l={permalink:"/blog/python-env-info-collector",source:"@site/blog/2023/09-22-python-env-info-collector/index.md",title:"\u8a18\u9304\u8207\u6392\u67e5\u6a21\u578b\u8a13\u7df4\u74b0\u5883\u554f\u984c",description:"\u81ea\u5df1\u624b\u523b\u7684\u7d00\u9304\u5de5\u5177\uff0c\u5206\u4eab\u7d66\u5927\u5bb6\u4f7f\u7528\u3002",date:"2023-09-22T00:00:00.000Z",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"training",permalink:"/blog/tags/training"},{label:"env",permalink:"/blog/tags/env"},{label:"info",permalink:"/blog/tags/info"},{label:"log",permalink:"/blog/tags/log"}],readingTime:7.335,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"python-env-info-collector",title:"\u8a18\u9304\u8207\u6392\u67e5\u6a21\u578b\u8a13\u7df4\u74b0\u5883\u554f\u984c",authors:"Zephyr",tags:["python","training","env","info","log"],image:"/img/2023/0922.webp",description:"\u81ea\u5df1\u624b\u523b\u7684\u7d00\u9304\u5de5\u5177\uff0c\u5206\u4eab\u7d66\u5927\u5bb6\u4f7f\u7528\u3002"},unlisted:!1,prevItem:{title:"\u4f7f\u7528 pyenv \u7ba1\u7406 Python \u7248\u672c",permalink:"/blog/pyenv-installation"},nextItem:{title:"\u642d\u5efa PyPiServer \u8a18\u9304",permalink:"/blog/ubuntu-docker-pypiserver"}},a={authorsImageUrls:[void 0]},c=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u4f7f\u7528 <code>get_package_versions</code>",id:"\u4f7f\u7528-get_package_versions",level:2},{value:"\u4f7f\u7528 <code>get_gpu_cuda_versions</code>",id:"\u4f7f\u7528-get_gpu_cuda_versions",level:2},{value:"\u4f7f\u7528 <code>get_system_info</code>",id:"\u4f7f\u7528-get_system_info",level:2},{value:"\u6ce8\u610f\u4e8b\u9805\u8207\u66ff\u4ee3\u65b9\u6848",id:"\u6ce8\u610f\u4e8b\u9805\u8207\u66ff\u4ee3\u65b9\u6848",level:2},{value:"\u7a0b\u5f0f\u78bc",id:"\u7a0b\u5f0f\u78bc",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("figure",{children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"title",src:r(41027).A+"",width:"1024",height:"1024"}),"\n",(0,i.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.p,{children:"\u7576\u6a21\u578b train \u58de\u4e86\uff0c\u6211\u5011\u7e3d\u662f\u6703\u60f3\u77e5\u9053\u662f\u4ec0\u9ebc\u539f\u56e0\u5c0e\u81f4\u7684\uff0c\u9019\u6642\u5019\u6211\u5011\u9700\u8981\u6aa2\u67e5\u8a13\u7df4\u4e3b\u6a5f\u7684\u74b0\u5883\u8cc7\u8a0a\uff0c\u4f8b\u5982\uff1aPython \u7248\u672c\u3001PyTorch \u7248\u672c\u3001CUDA \u7248\u672c\u3001GPU \u8cc7\u8a0a\u3001CPU \u8cc7\u8a0a\u3001RAM \u8cc7\u8a0a\u3001\u78c1\u789f\u8cc7\u8a0a\u3001IP \u5730\u5740\u7b49\u7b49\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u5728\u672c\u6587\u4e2d\u5206\u4eab\u4e00\u500b\u81ea\u5df1\u624b\u523b\u7684 Python \u5c0f\u5de5\u5177\uff0c\u53ef\u4ee5\u5feb\u901f\u67e5\u770b\u9019\u4e9b\u8cc7\u8a0a\uff0c\u96d6\u7136\u8aaa\u4e0d\u662f\u5305\u5c71\u5305\u6d77\uff0c\u4f46\u57fa\u672c\u7684\u554f\u984c\u6392\u67e5\u61c9\u8a72\u8db3\u5920\u7528\u4e86\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u822c\u4f86\u8aaa\uff0c\u6211\u5011\u6703\u5728\u8a13\u7df4\u555f\u52d5\u7684\u74b0\u7bc0\uff0c\u5c07\u74b0\u5883\u8cc7\u8a0a\u7d00\u9304\u5230\u8a13\u7df4\u4e3b\u6a5f\u7684\u65e5\u8a8c\u88e1\u9762\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b89\u88dd",children:"\u5b89\u88dd"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u5148\u5b89\u88dd\u5fc5\u8981\u5957\u4ef6\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pip install psutil requests\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u8457\u4f60\u53ef\u4ee5\u5728\u672c\u6587\u7684\u6700\u5f8c\u53d6\u5f97\u5b8c\u6574\u7684\u7a0b\u5f0f\u78bc\uff0c\u4e26\u4e14\u5c07\u5b83\u653e\u5728\u4f60\u7684\u5c08\u6848\u88e1\u9762\u3002"}),"\n",(0,i.jsxs)(e.h2,{id:"\u4f7f\u7528-get_package_versions",children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"get_package_versions"})]}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u5047\u8a2d\u4f60\u6709\u5b89\u88dd docsaidkit\uff0c\u4e26\u4e14\u5df2\u7d93\u5728\u5c08\u6848\u88e1\u9762\uff0c\u5247\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u6307\u4ee4\u6e2c\u8a66\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from docsaidkit import get_package_versions\n\nget_package_versions()\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u57f7\u884c\u5f8c\u5f97\u5230\u7d50\u679c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "PyTorch Version": "2.1.1+cu121",\n  "PyTorch Lightning Version": "2.1.2",\n  "TensorFlow Error": "No module named \'tensorflow\'",\n  "Keras Error": "No module named \'keras\'",\n  "NumPy Version": "1.24.4",\n  "Pandas Version": "2.0.3",\n  "Scikit-learn Version": "1.3.2",\n  "OpenCV Version": "4.8.1"\n}\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"PyTorch Version: PyTorch \u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"PyTorch Lightning Version: PyTorch Lightning \u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"TensorFlow Error: TensorFlow \u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"Keras Error: Keras \u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"NumPy Version: NumPy \u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"Pandas Version: Pandas \u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"Scikit-learn Version: Scikit-learn \u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"OpenCV Version: OpenCV \u7248\u672c"}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"\u4f7f\u7528-get_gpu_cuda_versions",children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"get_gpu_cuda_versions"})]}),"\n",(0,i.jsx)(e.p,{children:"\u6e2c\u8a66\u7a0b\u5f0f\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from docsaidkit import get_gpu_cuda_versions\n\nget_gpu_cuda_versions()\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u57f7\u884c\u5f8c\u5f97\u5230\u7d50\u679c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "CUDA Version": "12.1",\n  "NVIDIA Driver Version": "535.129.03"\n}\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"CUDA Version: CUDA \u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"NVIDIA Driver Version: NVIDIA \u9a45\u52d5\u7248\u672c"}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"\u4f7f\u7528-get_system_info",children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"get_system_info"})]}),"\n",(0,i.jsx)(e.p,{children:"\u6e2c\u8a66\u7a0b\u5f0f\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from docsaidkit import get_system_info\n\nget_system_info()\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u57f7\u884c\u5f8c\u5f97\u5230\u7d50\u679c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "OS Version": "Linux-6.2.0-37-generic-x86_64-with-glibc2.34",\n  "CPU Model": "13th Gen Intel(R) Core(TM) i9-13900K",\n  "Physical CPU Cores": 24,\n  "Logical CPU Cores (incl. hyper-threading)": 32,\n  "Total RAM (GB)": 125.56,\n  "Available RAM (GB)": 110.9,\n  "Disk Total (GB)": 1832.21,\n  "Disk Used (GB)": 188.94,\n  "Disk Free (GB)": 1550.12,\n  "GPU Info": "NVIDIA GeForce RTX 4090",\n  "IPV4 Address": ["192.168.---.---"],\n  "IPV4 Address (External)": "---.---.---.---",\n  "MAC Address": ["--.--.--.--.--.--"]\n}\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"OS Version: \u64cd\u4f5c\u7cfb\u7d71\u7248\u672c"}),"\n",(0,i.jsx)(e.li,{children:"CPU Model: CPU \u578b\u865f"}),"\n",(0,i.jsx)(e.li,{children:"Physical CPU Cores: \u7269\u7406 CPU \u6838\u5fc3\u6578"}),"\n",(0,i.jsx)(e.li,{children:"Logical CPU Cores (incl. hyper-threading): \u908f\u8f2f CPU \u6838\u5fc3\u6578 (\u5305\u62ec\u8d85\u57f7\u884c\u7dd2)"}),"\n",(0,i.jsx)(e.li,{children:"Total RAM (GB): \u7e3d RAM \u5bb9\u91cf (GB)"}),"\n",(0,i.jsx)(e.li,{children:"Available RAM (GB): \u53ef\u7528 RAM \u5bb9\u91cf (GB)"}),"\n",(0,i.jsx)(e.li,{children:"Disk Total (GB): \u78c1\u789f\u7e3d\u5bb9\u91cf (GB)"}),"\n",(0,i.jsx)(e.li,{children:"Disk Used (GB): \u5df2\u4f7f\u7528\u7684\u78c1\u789f\u5bb9\u91cf (GB)"}),"\n",(0,i.jsx)(e.li,{children:"Disk Free (GB): \u7a7a\u9592\u78c1\u789f\u5bb9\u91cf (GB)"}),"\n",(0,i.jsx)(e.li,{children:"GPU Info: GPU \u8cc7\u8a0a"}),"\n",(0,i.jsx)(e.li,{children:"IPV4 Address: \u5167\u90e8 IPV4 \u5730\u5740"}),"\n",(0,i.jsx)(e.li,{children:"IPV4 Address (External): \u5916\u90e8 IPV4 \u5730\u5740"}),"\n",(0,i.jsx)(e.li,{children:"MAC Address: MAC \u5730\u5740"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9805\u8207\u66ff\u4ee3\u65b9\u6848",children:"\u6ce8\u610f\u4e8b\u9805\u8207\u66ff\u4ee3\u65b9\u6848"}),"\n",(0,i.jsx)(e.p,{children:"\u7531\u65bc\u6211\u5011\u662f\u5728 Ubuntu \u4e0a\u64b0\u5beb\u672c\u51fd\u6578\uff0c\u56e0\u6b64\u5728\u5176\u4ed6\u4f5c\u696d\u7cfb\u7d71\u4e0a\u53ef\u80fd\u6703\u6709\u5287\u60c5\u4e4b\u5916\u7684\u767c\u5c55\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u5e7e\u500b\u53ef\u80fd\u9700\u8981\u6ce8\u610f\u7684\u8981\u9ede\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u56e0\u64cd\u4f5c\u7cfb\u7d71\u7684\u9650\u5236\uff0c\u67d0\u4e9b\u51fd\u6578\u53ef\u80fd\u7121\u6cd5\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u904b\u884c\u3002\u4f8b\u5982\uff1a",(0,i.jsx)(e.code,{children:"get_cpu_info"})," \u5728 Windows \u4e0a\u4e0d\u6703\u986f\u793a\u5b8c\u6574\u7684 CPU \u578b\u865f\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u4f60\u53ef\u4ee5\u8003\u616e\u4f7f\u7528\u5176\u4ed6\u5de5\u5177\u6216\u624b\u52d5\u7372\u53d6\u6b64\u8cc7\u8a0a\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u4f60\u5728 Windows \u74b0\u5883\u4e2d\uff0c\u7121\u6cd5\u76f4\u63a5\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"nvidia-smi"})," \u4f86\u7372\u53d6 GPU \u8cc7\u8a0a\uff0c\u8acb\u78ba\u4fdd\u5df2\u5b89\u88dd NVIDIA \u9a45\u52d5\u548c\u76f8\u95dc\u7684\u5de5\u5177\uff0c\u4e26\u5728\u547d\u4ee4\u63d0\u793a\u7b26\u7a97\u53e3\u4e2d\u57f7\u884c\u5b83\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5916\u90e8 IP \u5730\u5740\u662f\u5f9e ",(0,i.jsx)(e.code,{children:"https://httpbin.org/ip"})," \u7372\u53d6\u7684\uff0c\u6240\u4ee5\u5fc5\u9808\u78ba\u4fdd\u7db2\u8def\u9023\u7dda\u662f\u6d3b\u8e8d\u7684\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7a0b\u5f0f\u78bc",children:"\u7a0b\u5f0f\u78bc"}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u5011\u671f\u5f85\u9019\u4efd\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u5e6b\u52a9\u4f60\u5feb\u901f\u6aa2\u8996\u8a13\u7df4\u74b0\u5883\uff0c\u4f60\u53ef\u4ee5\u5c07\u6b64\u8cc7\u8a0a\u8f38\u51fa\u5f8c\u8207\u6a21\u578b\u7684\u8a13\u7df4\u65e5\u8a8c\u4e00\u8d77\u4fdd\u5b58\uff0c\u4ee5\u78ba\u4fdd\u8a13\u7df4\u7684\u53ef\u8ffd\u6eaf\u6027\u548c\u53ef\u91cd\u73fe\u6027\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/main/docsaidkit/utils/system_info.py",children:"system_info.py"})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:'import platform\nimport socket\nimport subprocess\n\nimport psutil\nimport requests\n\n\ndef get_package_versions():\n    """\n    Get versions of commonly used packages in deep learning and data science.\n\n    Returns:\n        dict: Dictionary containing versions of installed packages.\n    """\n    versions_info = {}\n\n    # PyTorch\n    try:\n        import torch\n        versions_info["PyTorch Version"] = torch.__version__\n    except Exception as e:\n        versions_info["PyTorch Error"] = str(e)\n\n    # PyTorch Lightning\n    try:\n        import pytorch_lightning as pl\n        versions_info["PyTorch Lightning Version"] = pl.__version__\n    except Exception as e:\n        versions_info["PyTorch Lightning Error"] = str(e)\n\n    # TensorFlow\n    try:\n        import tensorflow as tf\n        versions_info["TensorFlow Version"] = tf.__version__\n    except Exception as e:\n        versions_info["TensorFlow Error"] = str(e)\n\n    # Keras\n    try:\n        import keras\n        versions_info["Keras Version"] = keras.__version__\n    except Exception as e:\n        versions_info["Keras Error"] = str(e)\n\n    # NumPy\n    try:\n        import numpy as np\n        versions_info["NumPy Version"] = np.__version__\n    except Exception as e:\n        versions_info["NumPy Error"] = str(e)\n\n    # Pandas\n    try:\n        import pandas as pd\n        versions_info["Pandas Version"] = pd.__version__\n    except Exception as e:\n        versions_info["Pandas Error"] = str(e)\n\n    # Scikit-learn\n    try:\n        import sklearn\n        versions_info["Scikit-learn Version"] = sklearn.__version__\n    except Exception as e:\n        versions_info["Scikit-learn Error"] = str(e)\n\n    # OpenCV\n    try:\n        import cv2\n        versions_info["OpenCV Version"] = cv2.__version__\n    except Exception as e:\n        versions_info["OpenCV Error"] = str(e)\n\n    # ... and so on for any other packages you"re interested in\n\n    return versions_info\n\n\ndef get_gpu_cuda_versions():\n    """\n    Get GPU and CUDA versions using popular Python libraries.\n\n    Returns:\n        dict: Dictionary containing CUDA and GPU driver versions.\n    """\n\n    cuda_version = None\n\n    # Attempt to retrieve CUDA version using PyTorch\n    try:\n        import torch\n        cuda_version = torch.version.cuda\n    except ImportError:\n        pass\n\n    # If not retrieved via PyTorch, try using TensorFlow\n    if not cuda_version:\n        try:\n            import tensorflow as tf\n            cuda_version = tf.version.COMPILER_VERSION\n        except ImportError:\n            pass\n\n    # If still not retrieved, try using CuPy\n    if not cuda_version:\n        try:\n            import cupy\n            cuda_version = cupy.cuda.runtime.runtimeGetVersion()\n        except ImportError:\n            cuda_version = "Error: None of PyTorch, TensorFlow, or CuPy are installed."\n\n    # Try to get Nvidia driver version using nvidia-smi command\n    try:\n        smi_output = subprocess.check_output([\n            "nvidia-smi",\n            "--query-gpu=driver_version",\n            "--format=csv,noheader,nounits"\n        ]).decode("utf-8").strip()\n        nvidia_driver_version = smi_output.split("\\n")[0]\n    except Exception as e:\n        nvidia_driver_version = f"Error getting NVIDIA driver version: {e}"\n\n    return {\n        "CUDA Version": cuda_version,\n        "NVIDIA Driver Version": nvidia_driver_version\n    }\n\n\ndef get_cpu_info():\n    """\n    Retrieve the CPU model name based on the platform.\n\n    Returns:\n        str: CPU model name or "N/A" if not found.\n    """\n    if platform.system() == "Windows":\n        return platform.processor()\n    elif platform.system() == "Darwin":\n        # For macOS\n        command = "sysctl -n machdep.cpu.brand_string"\n        return subprocess.check_output(command, shell=True).strip().decode()\n    elif platform.system() == "Linux":\n        # For Linux\n        command = "cat /proc/cpuinfo | grep "model name" | uniq"\n        return subprocess.check_output(command, shell=True).strip().decode().split(":")[1].strip()\n    else:\n        return "N/A"\n\n\ndef get_external_ip():\n    try:\n        response = requests.get("https://httpbin.org/ip")\n        return response.json()["origin"]\n    except Exception as e:\n        return f"Error obtaining IP: {e}"\n\n\ndef get_system_info():\n    """\n    Fetch system information like OS version, CPU info, RAM, Disk usage, etc.\n\n    Returns:\n        dict: Dictionary containing system information.\n    """\n    info = {\n        "OS Version": platform.platform(),\n        "CPU Model": get_cpu_info(),\n        "Physical CPU Cores": psutil.cpu_count(logical=False),\n        "Logical CPU Cores (incl. hyper-threading)": psutil.cpu_count(logical=True),\n        "Total RAM (GB)": round(psutil.virtual_memory().total / (1024 ** 3), 2),\n        "Available RAM (GB)": round(psutil.virtual_memory().available / (1024 ** 3), 2),\n        "Disk Total (GB)": round(psutil.disk_usage("/").total / (1024 ** 3), 2),\n        "Disk Used (GB)": round(psutil.disk_usage("/").used / (1024 ** 3), 2),\n        "Disk Free (GB)": round(psutil.disk_usage("/").free / (1024 ** 3), 2)\n    }\n\n    # Try to fetch GPU information using nvidia-smi command\n    try:\n        gpu_info = subprocess.check_output(\n            ["nvidia-smi", "--query-gpu=name", "--format=csv,noheader,nounits"]\n        ).decode("utf-8").strip()\n        info["GPU Info"] = gpu_info\n    except Exception:\n        info["GPU Info"] = "N/A or Error"\n\n    # Get network information\n    addrs = psutil.net_if_addrs()\n    info["IPV4 Address"] = [\n        addr.address for addr in addrs.get("enp5s0", []) if addr.family == socket.AF_INET\n    ]\n\n    info["IPV4 Address (External)"] = get_external_ip()\n\n    # Determine platform and choose correct address family for MAC\n    if hasattr(socket, "AF_LINK"):\n        AF_LINK = socket.AF_LINK\n    elif hasattr(psutil, "AF_LINK"):\n        AF_LINK = psutil.AF_LINK\n    else:\n        raise Exception(\n            "Cannot determine the correct AF_LINK value for this platform.")\n\n    info["MAC Address"] = [\n        addr.address for addr in addrs.get("enp5s0", []) if addr.family == AF_LINK\n    ]\n\n    return info\n'})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},41027:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/0922-2a12ae1ddf60abe64721c0fc76eac05e.webp"},28453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>l});var i=r(96540);const s={},o=i.createContext(s);function t(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);