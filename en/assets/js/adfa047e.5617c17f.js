"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6091],{16203:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var i=s(74848),l=s(28453);const t={slug:"windows-python-settings",title:"Simple Configuration of Python Environment on Win11",authors:"Zephyr",image:"/en/img/2024/0605.webp",tags:["win11","python","powershell"],description:"Setting up Python on Windows."},o=void 0,r={permalink:"/en/blog/windows-python-settings",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024/06-05-windows-python-settings/index.md",title:"Simple Configuration of Python Environment on Win11",description:"Setting up Python on Windows.",date:"2024-06-05T00:00:00.000Z",tags:[{inline:!0,label:"win11",permalink:"/en/blog/tags/win-11"},{inline:!0,label:"python",permalink:"/en/blog/tags/python"},{inline:!0,label:"powershell",permalink:"/en/blog/tags/powershell"}],readingTime:5.315,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"windows-python-settings",title:"Simple Configuration of Python Environment on Win11",authors:"Zephyr",image:"/en/img/2024/0605.webp",tags:["win11","python","powershell"],description:"Setting up Python on Windows."},unlisted:!1,prevItem:{title:"Get All Stock Code Information from TWSE",permalink:"/en/blog/get-taiwan-all-stocks-info"},nextItem:{title:"LaTeX Syntax Quick Reference",permalink:"/en/blog/latex-usage"}},c={authorsImageUrls:[void 0]},a=[{value:"Operating Environment",id:"operating-environment",level:2},{value:"Installing Chocolatey",id:"installing-chocolatey",level:2},{value:"Installing git",id:"installing-git",level:2},{value:"Installing Python",id:"installing-python",level:2},{value:"Step 1: Installing <code>pyenv-win</code>",id:"step-1-installing-pyenv-win",level:3},{value:"Step 2: Verify Installation",id:"step-2-verify-installation",level:3},{value:"Step 3: Use <code>pyenv</code> to install Python versions",id:"step-3-use-pyenv-to-install-python-versions",level:3},{value:"Installing VS Code",id:"installing-vs-code",level:2},{value:"Side Note",id:"side-note",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("figure",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"title",src:s(41642).A+"",width:"1024",height:"1024"}),"\n",(0,i.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading this article"})]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"It's been a while since I worked on a project that required development on a Windows system."}),"\n",(0,i.jsx)(n.p,{children:"It feels like ages! It's been several years since I last used Windows."}),"\n",(0,i.jsx)(n.p,{children:"\uff0a"}),"\n",(0,i.jsx)(n.p,{children:"We tried a few methods and finally settled on using PowerShell to set up the Python environment."}),"\n",(0,i.jsx)(n.p,{children:"We initially thought about using WSL for configuration, but that would turn the environment into a Linux environment... (?)"}),"\n",(0,i.jsx)(n.p,{children:"If we already have a Linux environment at hand, why bother configuring one on Windows?"}),"\n",(0,i.jsx)(n.h2,{id:"operating-environment",children:"Operating Environment"}),"\n",(0,i.jsxs)(n.p,{children:["We're using the virtual environment tool provided by Mac: ",(0,i.jsx)(n.a,{href:"https://www.parallels.com/products/desktop/",children:(0,i.jsx)(n.strong,{children:"Parallels Desktop"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"With Parallels Desktop, we can smoothly run a Windows system on Mac, and the currently installed one is Windows 11."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The Apple M1 chip is ARM-based, and it faced many compatibility issues when it was first launched, but it has improved a lot over the years."})}),"\n",(0,i.jsx)(n.h2,{id:"installing-chocolatey",children:"Installing Chocolatey"}),"\n",(0,i.jsx)(n.p,{children:"First, we need to launch PowerShell."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"PowerShell",src:s(78804).A+"",width:"2511",height:"2497"})}),"\n",(0,i.jsxs)(n.p,{children:["Chocolatey is a package manager for Windows. It automates the process of installing, upgrading, and managing software using NuGet and PowerShell technologies. It's similar to ",(0,i.jsx)(n.code,{children:"apt-get"})," or ",(0,i.jsx)(n.code,{children:"yum"})," on Linux, allowing Windows users to manage software in a simple and consistent way."]}),"\n",(0,i.jsx)(n.p,{children:"Installing Chocolatey is relatively simple. Just run the following command in PowerShell with administrative privileges:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n"})}),"\n",(0,i.jsx)(n.p,{children:"After installation, enter the following command to verify if Chocolatey was installed successfully:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco -v\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you see the version number of Chocolatey, it means the installation was successful."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Here's what the above command does:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Set-ExecutionPolicy Bypass -Scope Process -Force"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This command sets the PowerShell execution policy."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Set-ExecutionPolicy"})," is used to change the execution policy to allow or disallow the execution of PowerShell scripts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Bypass"})," means bypassing all execution policies without any restrictions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-Scope Process"})," means applying this change only to the current PowerShell session, not affecting the entire system."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-Force"})," is used to forcefully execute this operation without prompting for confirmation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This command sets the network security protocol."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[System.Net.ServicePointManager]::SecurityProtocol"})," is used to get or set the protocol type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-bor 3072"})," adds the TLS 1.2 (3072) protocol to the existing protocols. ",(0,i.jsx)(n.code,{children:"-bor"})," is a bitwise operator, indicating a bitwise OR operation, allowing multiple protocols to be enabled simultaneously."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["iex ((New-Object System.Net.WebClient).DownloadString('",(0,i.jsx)(n.a,{href:"https://community.chocolatey.org/install.ps1",children:"https://community.chocolatey.org/install.ps1"}),"'))"]}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This command downloads and executes the Chocolatey installation script."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iex"})," is shorthand for ",(0,i.jsx)(n.code,{children:"Invoke-Expression"}),", used to execute the content passed to it as a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"New-Object System.Net.WebClient"})," is used to create a new WebClient object, which is used for downloading data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".DownloadString('https://community.chocolatey.org/install.ps1')"})," is used to download the script content from the specified URL."]}),"\n",(0,i.jsxs)(n.li,{children:["Overall, the command ",(0,i.jsx)(n.code,{children:"iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"})," downloads and immediately executes the PowerShell script located at '",(0,i.jsx)(n.a,{href:"https://community.chocolatey.org/install.ps1",children:"https://community.chocolatey.org/install.ps1"}),"', which is responsible for installing Chocolatey."]}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"In simple terms, the purpose of this command is: temporarily set the PowerShell execution policy to allow script execution, configure the network security protocol to support TLS 1.2, and then download and execute the Chocolatey installation script."})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Common Chocolatey Commands:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco install <packageName>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Upgrade"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco upgrade <packageName>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"List installed packages"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco list --localonly\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Uninstall"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco uninstall <packageName>\n"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"installing-git",children:"Installing git"}),"\n",(0,i.jsx)(n.p,{children:"After installation, continue running PowerShell as an administrator, and execute the following command to install Git:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco install git -y\n"})}),"\n",(0,i.jsx)(n.p,{children:"After installation, enter the following command to verify if Git was installed successfully:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"git --version\n# >>> git version 2.45.2.windows.1\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-python",children:"Installing Python"}),"\n",(0,i.jsx)(n.p,{children:"We use pyenv to manage Python versions."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Although there are many choices on the market, such as Anaconda, Miniconda, WinPython, etc., we still chose pyenv."}),(0,i.jsx)(n.p,{children:"Because we often develop on Linux, seeing pyenv feels familiar."})]}),"\n",(0,i.jsxs)(n.p,{children:["Installing and using ",(0,i.jsx)(n.code,{children:"pyenv"})," on Windows is not usually straightforward because ",(0,i.jsx)(n.code,{children:"pyenv"})," is designed for Unix-like environments. However, you can use the ",(0,i.jsx)(n.code,{children:"pyenv-win"})," project, which is a Windows port of ",(0,i.jsx)(n.code,{children:"pyenv"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps:"}),"\n",(0,i.jsxs)(n.h3,{id:"step-1-installing-pyenv-win",children:["Step 1: Installing ",(0,i.jsx)(n.code,{children:"pyenv-win"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/pyenv-win/pyenv-win/blob/master/docs/installation.md",children:(0,i.jsx)(n.strong,{children:"Reference: pyenv-win/docs/installation.md"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Download the ",(0,i.jsx)(n.code,{children:"pyenv-win"})," project:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you encounter any ",(0,i.jsx)(n.code,{children:"UnauthorizedAccess"}),' errors as shown below, please launch Windows PowerShell with the "Run as Administrator" option and execute:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine\n"})}),"\n",(0,i.jsx)(n.p,{children:"After completion, rerun the installation command above."}),"\n",(0,i.jsx)(n.h3,{id:"step-2-verify-installation",children:"Step 2: Verify Installation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Restart PowerShell"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Close and reopen the PowerShell window to apply the environment variable changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Check ",(0,i.jsx)(n.code,{children:"pyenv"})," installation"]}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter the following command to check the ",(0,i.jsx)(n.code,{children:"pyenv"})," version:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"pyenv --version\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"step-3-use-pyenv-to-install-python-versions",children:["Step 3: Use ",(0,i.jsx)(n.code,{children:"pyenv"})," to install Python versions"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"View available Python versions"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"List all available Python versions with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"pyenv install --list\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Install a specific Python version"}),":"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For example, to install Python 3.10.11:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"pyenv install 3.10.11\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Set a global Python version"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"This step is not necessary, but if you want to use the same Python version across all shells, you can set the installed Python version as the global default:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"pyenv global 3.10.11\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Verify Python installation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enter the following command to verify if Python was installed successfully:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"python --version\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-vs-code",children:"Installing VS Code"}),"\n",(0,i.jsx)(n.p,{children:"Finally, we install Visual Studio Code as our development tool."}),"\n",(0,i.jsxs)(n.p,{children:["Here, we'll go to the ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/Download",children:(0,i.jsx)(n.strong,{children:"VS Code official website"})})," to download the installer and then proceed with the installation."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"VS Code",src:s(56931).A+"",width:"2809",height:"1668"})}),"\n",(0,i.jsxs)(n.p,{children:["After installation, we want to be able to use the ",(0,i.jsx)(n.code,{children:"code"})," command directly in PowerShell to open VS Code."]}),"\n",(0,i.jsx)(n.p,{children:"So, we need to add the installation path of VS Code to the environment variables. Copy the following path:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"C:\\Users\\your_user_name\\AppData\\Local\\Programs\\Microsoft VS Code\\bin\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Remember to replace ",(0,i.jsx)(n.code,{children:"your_user_name"})," with your username."]})}),"\n",(0,i.jsx)(n.h2,{id:"side-note",children:"Side Note"}),"\n",(0,i.jsx)(n.p,{children:"Actually, we find the PowerShell display screen really hard to look at."}),"\n",(0,i.jsxs)(n.p,{children:["For this part, we suggest using ",(0,i.jsx)(n.a,{href:"https://ohmyposh.dev/",children:(0,i.jsx)(n.strong,{children:"oh-my-posh"})})," to beautify the appearance of PowerShell."]}),"\n",(0,i.jsx)(n.p,{children:"But this part is not the focus of this article. Interested readers can check out:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/terminal/tutorials/custom-prompt-setup",children:(0,i.jsx)(n.strong,{children:"Tutorial - Customize Your Prompt with Oh My Posh for PowerShell or WSL"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Through PowerShell, we can quickly set up the Python environment and install development tools."}),"\n",(0,i.jsx)(n.p,{children:"Of course, the above only covers the most basic configurations, leaving this article as a reference."})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},78804:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img1-72c7bd3a6fc465711d8d71512ee740b1.jpg"},56931:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img2-1b80c57a3c2c9d972c83528d2cba968d.jpg"},41642:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/0605-3516b0c322035747ec94f6e619003b9f.webp"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(96540);const l={},t=i.createContext(l);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);