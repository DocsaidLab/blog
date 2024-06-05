"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6076],{3663:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var s=l(74848),i=l(28453);const r={slug:"windows-python-settings",title:"\u7c21\u55ae\u914d\u7f6e Win11 \u7cfb\u7d71\u7684 Python \u74b0\u5883",authors:"Zephyr",image:"/img/2024/0605.webp",tags:["win11","python","powershell"],description:"Setting up Python on Windows."},c=void 0,o={permalink:"/blog/windows-python-settings",source:"@site/blog/2024/06-05-windows-python-settings/index.md",title:"\u7c21\u55ae\u914d\u7f6e Win11 \u7cfb\u7d71\u7684 Python \u74b0\u5883",description:"Setting up Python on Windows.",date:"2024-06-05T00:00:00.000Z",tags:[{inline:!0,label:"win11",permalink:"/blog/tags/win-11"},{inline:!0,label:"python",permalink:"/blog/tags/python"},{inline:!0,label:"powershell",permalink:"/blog/tags/powershell"}],readingTime:7.205,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"windows-python-settings",title:"\u7c21\u55ae\u914d\u7f6e Win11 \u7cfb\u7d71\u7684 Python \u74b0\u5883",authors:"Zephyr",image:"/img/2024/0605.webp",tags:["win11","python","powershell"],description:"Setting up Python on Windows."},unlisted:!1,nextItem:{title:"LaTeX \u8a9e\u6cd5\u5feb\u901f\u67e5\u8a62\u8868",permalink:"/blog/latex-usage"}},h={authorsImageUrls:[void 0]},t=[{value:"\u4f5c\u696d\u74b0\u5883",id:"\u4f5c\u696d\u74b0\u5883",level:2},{value:"\u5b89\u88dd Chocolatey",id:"\u5b89\u88dd-chocolatey",level:2},{value:"\u5b89\u88dd git",id:"\u5b89\u88dd-git",level:2},{value:"\u5b89\u88dd Python",id:"\u5b89\u88dd-python",level:2},{value:"\u6b65\u9a5f 1\uff1a\u5b89\u88dd <code>pyenv-win</code>",id:"\u6b65\u9a5f-1\u5b89\u88dd-pyenv-win",level:3},{value:"\u6b65\u9a5f 2\uff1a\u9a57\u8b49\u5b89\u88dd",id:"\u6b65\u9a5f-2\u9a57\u8b49\u5b89\u88dd",level:3},{value:"\u6b65\u9a5f 3\uff1a\u4f7f\u7528 <code>pyenv</code> \u5b89\u88dd Python \u7248\u672c",id:"\u6b65\u9a5f-3\u4f7f\u7528-pyenv-\u5b89\u88dd-python-\u7248\u672c",level:3},{value:"\u5b89\u88dd VS Code",id:"\u5b89\u88dd-vs-code",level:2},{value:"\u984c\u5916\u8a71",id:"\u984c\u5916\u8a71",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"title",src:l(41642).A+"",width:"1024",height:"1024"}),"\n",(0,s.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"\u524d\u9663\u5b50\u63a5\u4e86\u4e00\u500b\u5c08\u6848\uff0c\u5fc5\u9808\u57fa\u65bc Windows \u7684\u7cfb\u7d71\u9032\u884c\u958b\u767c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u771f\u662f\u4e45\u9055\u4e86\uff01\u8ddd\u96e2\u4e0a\u6b21\u4f7f\u7528 Windows \u5df2\u7d93\u6709\u597d\u5e7e\u5e74\u4e86\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\uff0a"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5011\u5148\u5617\u8a66\u4e86\u5e7e\u500b\u65b9\u6cd5\uff0c\u6700\u5f8c\u6c7a\u5b9a\u4f7f\u7528 PowerShell \u4f86\u914d\u7f6e Python \u74b0\u5883\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u4f86\u60f3\u8981\u4f7f\u7528 WSL \u4f86\u914d\u7f6e\uff0c\u4f46\u9019\u6703\u628a\u74b0\u5883\u8b8a\u6210 Linux \u74b0\u5883...\uff08\uff1f\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u90a3\u6211\u5011\u624b\u908a\u5c31\u6709 Linux \u74b0\u5883\u4e86\uff0c\u9084\u8981\u5728 Windows \u4e0a\u914d\u7f6e\u5e79\u561b\uff1f"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f5c\u696d\u74b0\u5883",children:"\u4f5c\u696d\u74b0\u5883"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u5011\u4f7f\u7528 Mac \u6240\u63d0\u4f9b\u7684\u865b\u64ec\u74b0\u5883\u5de5\u5177\uff1a",(0,s.jsx)(n.a,{href:"https://www.parallels.com/products/desktop/",children:(0,s.jsx)(n.strong,{children:"Parallels Desktop"})}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u900f\u904e Parallels Desktop\uff0c\u6211\u5011\u53ef\u4ee5\u5728 Mac \u4e0a\u9806\u5229\u5730\u904b\u884c Windows \u7cfb\u7d71\uff0c\u73fe\u5728\u9810\u8a2d\u5b89\u88dd\u7684\u662f Windows 11\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Apple M1 \u6676\u7247\u662f ARM \u67b6\u69cb\uff0c\u5728\u525b\u63a8\u51fa\u6642\u9047\u5230\u8a31\u591a\u76f8\u5bb9\u6027\u7684\u554f\u984c\uff0c\u4f46\u904e\u4e86\u5e7e\u5e74\u5df2\u7d93\u597d\u5f88\u591a\u4e86\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88dd-chocolatey",children:"\u5b89\u88dd Chocolatey"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u5011\u9700\u8981\u555f\u52d5 PowerShell\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"PowerShell",src:l(2322).A+"",width:"2511",height:"2497"})}),"\n",(0,s.jsxs)(n.p,{children:["Chocolatey \u662f\u4e00\u500b\u57fa\u65bc Windows \u7684\u5305\u7ba1\u7406\u7cfb\u7d71\uff0c\u5b83\u5229\u7528 NuGet \u548c PowerShell \u6280\u8853\u4f86\u81ea\u52d5\u5316\u8edf\u4ef6\u7684\u5b89\u88dd\u3001\u5347\u7d1a\u548c\u7ba1\u7406\u904e\u7a0b\u3002\u5b83\u985e\u4f3c\u65bc Linux \u4e0a\u7684 ",(0,s.jsx)(n.code,{children:"apt-get"})," \u6216 ",(0,s.jsx)(n.code,{children:"yum"}),"\uff0c\u8b93 Windows \u7528\u6236\u53ef\u4ee5\u4ee5\u4e00\u7a2e\u7c21\u55ae\u3001\u4e00\u81f4\u7684\u65b9\u5f0f\u4f86\u7ba1\u7406\u8edf\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88dd Chocolatey \u76f8\u5c0d\u7c21\u55ae\uff0c\u53ea\u9700\u8981\u5728\u4ee5\u7ba1\u7406\u54e1\u8eab\u4efd\u904b\u884c\u7684 PowerShell \u4e2d\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88dd\u5b8c\u6210\u5f8c\uff0c\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u9a57\u8b49 Chocolatey \u662f\u5426\u5b89\u88dd\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco -v\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u770b\u5230 Chocolatey \u7684\u7248\u672c\u865f\uff0c\u5247\u8868\u793a\u5b89\u88dd\u6210\u529f\u3002"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u4e0a\u9762\u9019\u6bb5\u6307\u4ee4\u7684\u5167\u5bb9\u662f\u9019\u6a23\uff1a"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Set-ExecutionPolicy Bypass -Scope Process -Force"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9019\u6bb5\u547d\u4ee4\u662f\u8a2d\u5b9a PowerShell \u57f7\u884c\u653f\u7b56\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Set-ExecutionPolicy"})," \u7528\u65bc\u66f4\u6539\u57f7\u884c\u653f\u7b56\uff0c\u4ee5\u5141\u8a31\u6216\u7981\u6b62\u57f7\u884c PowerShell \u8173\u672c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Bypass"})," \u8868\u793a\u7e5e\u904e\u6240\u6709\u57f7\u884c\u653f\u7b56\uff0c\u4e0d\u9032\u884c\u4efb\u4f55\u9650\u5236\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-Scope Process"})," \u8868\u793a\u50c5\u5728\u7576\u524d PowerShell \u6703\u8a71\u4e2d\u61c9\u7528\u6b64\u8b8a\u66f4\uff0c\u4e0d\u5f71\u97ff\u6574\u500b\u7cfb\u7d71\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-Force"})," \u7528\u65bc\u5f37\u5236\u57f7\u884c\u6b64\u64cd\u4f5c\u800c\u4e0d\u63d0\u793a\u78ba\u8a8d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9019\u6bb5\u547d\u4ee4\u662f\u8a2d\u5b9a\u7db2\u8def\u5b89\u5168\u5354\u8b70\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[System.Net.ServicePointManager]::SecurityProtocol"})," \u7528\u65bc\u7372\u53d6\u6216\u8a2d\u7f6e\u5354\u8b70\u985e\u578b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-bor 3072"})," \u8868\u793a\u5c07 TLS 1.2 (3072) \u5354\u8b70\u6dfb\u52a0\u5230\u73fe\u6709\u7684\u5354\u8b70\u4e2d\u3002",(0,s.jsx)(n.code,{children:"-bor"})," \u662f\u4f4d\u904b\u7b97\u7b26\uff0c\u8868\u793a\u6309\u4f4d\u6216\u64cd\u4f5c\uff0c\u5141\u8a31\u540c\u6642\u555f\u7528\u591a\u500b\u5354\u8b70\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["iex ((New-Object System.Net.WebClient).DownloadString('",(0,s.jsx)(n.a,{href:"https://community.chocolatey.org/install.ps1",children:"https://community.chocolatey.org/install.ps1"}),"'))"]}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9019\u6bb5\u547d\u4ee4\u662f\u4e0b\u8f09\u4e26\u57f7\u884c Chocolatey \u7684\u5b89\u88dd\u8173\u672c\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"iex"})," \u662f ",(0,s.jsx)(n.code,{children:"Invoke-Expression"})," \u7684\u7e2e\u5beb\uff0c\u7528\u65bc\u57f7\u884c\u50b3\u905e\u7d66\u5b83\u7684\u5b57\u4e32\u5167\u5bb9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"New-Object System.Net.WebClient"})," \u7528\u65bc\u5275\u5efa\u4e00\u500b\u65b0\u7684 WebClient \u5c0d\u8c61\uff0c\u9019\u500b\u5c0d\u8c61\u53ef\u4ee5\u7528\u4f86\u4e0b\u8f09\u8cc7\u6599\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".DownloadString('https://community.chocolatey.org/install.ps1')"})," \u7528\u65bc\u5f9e\u6307\u5b9a\u7684 URL \u4e0b\u8f09\u8173\u672c\u5167\u5bb9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6574\u9ad4\u4e0a\uff0c",(0,s.jsx)(n.code,{children:"iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"})," \u547d\u4ee4\u6703\u4e0b\u8f09\u4e26\u7acb\u5373\u57f7\u884c\u4f4d\u65bc '",(0,s.jsx)(n.a,{href:"https://community.chocolatey.org/install.ps1",children:"https://community.chocolatey.org/install.ps1"}),"' \u7684 PowerShell \u8173\u672c\uff0c\u8a72\u8173\u672c\u8ca0\u8cac\u5b89\u88dd Chocolatey\u3002"]}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:"\u7c21\u55ae\u4f86\u8aaa\uff0c\u9019\u6bb5\u6307\u4ee4\u7684\u4f5c\u7528\u662f\uff1a\u66ab\u6642\u8a2d\u7f6e PowerShell \u57f7\u884c\u653f\u7b56\u4ee5\u5141\u8a31\u8173\u672c\u57f7\u884c\uff0c\u914d\u7f6e\u7db2\u8def\u5b89\u5168\u5354\u8b70\u4ee5\u652f\u6301 TLS 1.2\uff0c\u7136\u5f8c\u4e0b\u8f09\u4e26\u57f7\u884c Chocolatey \u7684\u5b89\u88dd\u8173\u672c\u3002"})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Chocolatey \u5e38\u7528\u6307\u4ee4\uff1a"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5b89\u88dd"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco install <packageName>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5347\u7d1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco upgrade <packageName>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5217\u51fa\u5df2\u5b89\u88dd\u7684\u5957\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco list --localonly\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5378\u8f09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco uninstall <packageName>\n"})}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88dd-git",children:"\u5b89\u88dd git"}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88dd\u5b8c\u6210\u5f8c\uff0c\u7e7c\u7e8c\u4ee5\u7ba1\u7406\u54e1\u8eab\u4efd\u904b\u884c PowerShell\uff0c\u4e26\u57f7\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd Git\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"choco install git -y\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88dd\u5b8c\u6210\u5f8c\uff0c\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u9a57\u8b49 Git \u662f\u5426\u5b89\u88dd\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"git --version\n# >>> git version 2.45.2.windows.1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88dd-python",children:"\u5b89\u88dd Python"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5011\u4f7f\u7528 pyenv \u4f86\u7ba1\u7406 Python \u7248\u672c\u3002"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u96d6\u7136\u5e02\u9762\u4e0a\u6709\u5f88\u591a\u9078\u64c7\uff0c\u4f8b\u5982 Anaconda\u3001Miniconda\u3001WinPython \u7b49\uff0c\u4f46\u6211\u5011\u9084\u662f\u9078\u64c7\u4e86 pyenv\u3002"}),(0,s.jsx)(n.p,{children:"\u56e0\u70ba\u6211\u5011\u5e38\u5728 Linux \u4e0a\u958b\u767c\uff0c\u770b\u5230 pyenv \u5c31\u89ba\u5f97\u89aa\u5207\u3002"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Windows \u4e0a\u5b89\u88dd\u548c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"pyenv"})," \u901a\u5e38\u4e0d\u662f\u76f4\u63a5\u9032\u884c\u7684\uff0c\u56e0\u70ba ",(0,s.jsx)(n.code,{children:"pyenv"})," \u662f\u70ba Unix-like \u74b0\u5883\u8a2d\u8a08\u7684\u3002\u7136\u800c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"pyenv-win"})," \u9019\u500b\u9805\u76ee\uff0c\u5b83\u662f ",(0,s.jsx)(n.code,{children:"pyenv"})," \u7684\u4e00\u500b Windows \u7aef\u53e3\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8acb\u8ddf\u8457\u4ee5\u4e0b\u6b65\u9a5f\uff1a"}),"\n",(0,s.jsxs)(n.h3,{id:"\u6b65\u9a5f-1\u5b89\u88dd-pyenv-win",children:["\u6b65\u9a5f 1\uff1a\u5b89\u88dd ",(0,s.jsx)(n.code,{children:"pyenv-win"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u8f09 ",(0,s.jsx)(n.code,{children:"pyenv-win"})," \u5c08\u6848\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"git clone https://github.com/pyenv-win/pyenv-win.git $HOME\\.pyenv\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8a2d\u7f6e\u74b0\u5883\u8b8a\u91cf\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"$env:PYENV = \"$HOME\\.pyenv\"\n$env:PATH = \"$env:PYENV\\pyenv-win\\bin;$env:PYENV\\pyenv-win\\shims;$env:PATH\"\n\n[Environment]::SetEnvironmentVariable('PYENV', $env:PYENV, [EnvironmentVariableTarget]::User)\n[Environment]::SetEnvironmentVariable('PATH', $env:PATH, [EnvironmentVariableTarget]::User)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6b65\u9a5f-2\u9a57\u8b49\u5b89\u88dd",children:"\u6b65\u9a5f 2\uff1a\u9a57\u8b49\u5b89\u88dd"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u91cd\u555f PowerShell"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u95dc\u9589\u4e26\u91cd\u65b0\u6253\u958b PowerShell \u7a97\u53e3\uff0c\u4ee5\u61c9\u7528\u74b0\u5883\u8b8a\u91cf\u66f4\u6539\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["\u6aa2\u67e5 ",(0,s.jsx)(n.code,{children:"pyenv"})," \u5b89\u88dd"]}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u6aa2\u67e5 ",(0,s.jsx)(n.code,{children:"pyenv"})," \u7248\u672c\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"pyenv --version\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u6b65\u9a5f-3\u4f7f\u7528-pyenv-\u5b89\u88dd-python-\u7248\u672c",children:["\u6b65\u9a5f 3\uff1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"pyenv"})," \u5b89\u88dd Python \u7248\u672c"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u67e5\u770b\u53ef\u7528\u7684 Python \u7248\u672c"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u6240\u6709\u53ef\u7528\u7684 Python \u7248\u672c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"pyenv install --list\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5b89\u88dd\u6307\u5b9a\u7684 Python \u7248\u672c"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5b89\u88dd Python 3.10.11\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"pyenv install 3.10.11\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8a2d\u5b9a\u5168\u57df Python \u7248\u672c"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u9019\u500b\u6b65\u9a5f\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4f46\u662f\u5982\u679c\u4f60\u60f3\u8981\u5728\u6240\u6709\u7684 shell \u4e2d\u4f7f\u7528\u76f8\u540c\u7684 Python \u7248\u672c\uff0c\u53ef\u4ee5\u8a2d\u7f6e\u5b89\u88dd\u7684 Python \u7248\u672c\u70ba\u5168\u5c40\u9ed8\u8a8d\u7248\u672c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"pyenv global 3.10.11\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u9a57\u8b49 Python \u5b89\u88dd"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u9a57\u8b49 Python \u662f\u5426\u5b89\u88dd\u6210\u529f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"python --version\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88dd-vs-code",children:"\u5b89\u88dd VS Code"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u5f8c\uff0c\u6211\u5011\u5b89\u88dd Visual Studio Code \u4f5c\u70ba\u958b\u767c\u5de5\u5177\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u908a\u6211\u5011\u5c31\u5230 ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/Download",children:(0,s.jsx)(n.strong,{children:"VS Code \u5b98\u7db2"})})," \u4e0b\u8f09\u5b89\u88dd\u7a0b\u5f0f\uff0c\u7136\u5f8c\u5b89\u88dd\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"VS Code",src:l(12221).A+"",width:"2809",height:"1668"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5b89\u88dd\u5b8c\u6210\u4e4b\u5f8c\uff0c\u6211\u5011\u5e0c\u671b\u80fd\u5920\u5728 PowerShell \u4e2d\u76f4\u63a5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"code"})," \u547d\u4ee4\u4f86\u6253\u958b VS Code\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u4ee5\u73fe\u5728\u9700\u8981\u628a VS Code \u7684\u5b89\u88dd\u8def\u5f91\u52a0\u5165\u5230\u74b0\u5883\u8b8a\u91cf\u4e2d\uff0c\u8907\u88fd\u4ee5\u4e0b\u8def\u5f91\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"C:\\Users\\your_user_name\\AppData\\Local\\Programs\\Microsoft VS Code\\bin\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u8a18\u5f97\u5c07 ",(0,s.jsx)(n.code,{children:"your_user_name"})," \u66ff\u63db\u70ba\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u984c\u5916\u8a71",children:"\u984c\u5916\u8a71"}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u5be6\u6211\u5011\u89ba\u5f97 PowerShell \u7684\u5c55\u793a\u756b\u9762\u5be6\u5728\u96e3\u4ee5\u76f4\u8996\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u500b\u90e8\u5206\u6211\u5011\u5efa\u8b70\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://ohmyposh.dev/",children:(0,s.jsx)(n.strong,{children:"oh-my-posh"})})," \u4f86\u7f8e\u5316 PowerShell \u7684\u5916\u89c0\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u9019\u500b\u90e8\u5206\u4e0d\u662f\u672c\u6587\u7684\u91cd\u9ede\uff0c\u6709\u8208\u8da3\u7684\u8b80\u8005\u8acb\u67e5\u770b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/zh-tw/windows/terminal/tutorials/custom-prompt-setup",children:(0,s.jsx)(n.strong,{children:"\u6559\u5b78\u8ab2\u7a0b - \u4f7f\u7528 Oh My Posh \u8a2d\u5b9a PowerShell \u6216 WSL \u7684\u81ea\u8a02\u63d0\u793a"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,s.jsx)(n.p,{children:"\u900f\u904e PowerShell\uff0c\u6211\u5011\u53ef\u4ee5\u5feb\u901f\u5730\u914d\u7f6e Python \u74b0\u5883\uff0c\u4e26\u5b89\u88dd\u958b\u767c\u5de5\u5177\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7576\u7136\uff0c\u4ee5\u4e0a\u50c5\u6db5\u84cb\u4e86\u6700\u57fa\u672c\u7684\u914d\u7f6e\uff0c\u7559\u6b64\u6587\u7ae0\u4f5c\u70ba\u53c3\u8003\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2322:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/img1-72c7bd3a6fc465711d8d71512ee740b1.jpg"},12221:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/img2-252427a36a6921cb6173893c00a691e4.jpg"},41642:(e,n,l)=>{l.d(n,{A:()=>s});const s=l.p+"assets/images/0605-3516b0c322035747ec94f6e619003b9f.webp"},28453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>o});var s=l(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);