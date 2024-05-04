"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2695],{83724:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(74848),l=i(28453);const t={slug:"pyenv-installation",title:"Managing Python Versions with pyenv",authors:"Zephyr",tags:["python","pyenv","virtualenv","usage"],image:"/en/img/2023/1010.webp",description:"Documenting the installation and usage of pyenv."},r=void 0,o={permalink:"/en/blog/pyenv-installation",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023/10-10-pyenv-installation/index.md",title:"Managing Python Versions with pyenv",description:"Documenting the installation and usage of pyenv.",date:"2023-10-10T00:00:00.000Z",tags:[{label:"python",permalink:"/en/blog/tags/python"},{label:"pyenv",permalink:"/en/blog/tags/pyenv"},{label:"virtualenv",permalink:"/en/blog/tags/virtualenv"},{label:"usage",permalink:"/en/blog/tags/usage"}],readingTime:2.35,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"pyenv-installation",title:"Managing Python Versions with pyenv",authors:"Zephyr",tags:["python","pyenv","virtualenv","usage"],image:"/en/img/2023/1010.webp",description:"Documenting the installation and usage of pyenv."},unlisted:!1,prevItem:{title:"User Switching Tool in Containers: gosu",permalink:"/en/blog/gosu-usage"},nextItem:{title:"Recording Model Training Environment Issues",permalink:"/en/blog/python-env-info-collector"}},a={authorsImageUrls:[void 0]},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing <code>pyenv</code>",id:"installing-pyenv",level:2},{value:"Using <code>pyenv</code>",id:"using-pyenv",level:2},{value:"Virtual Environments",id:"virtual-environments",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Removal",id:"removal",level:3},{value:"Updating <code>pyenv</code>",id:"updating-pyenv",level:2},{value:"Uninstalling <code>pyenv</code>",id:"uninstalling-pyenv",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("figure",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"title",src:i(29536).A+"",width:"1024",height:"1024"}),"\n",(0,s.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading this article."})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"In earlier years, Conda was predominantly used for managing Python environments. Nowadays, pyenv is commonly employed."}),"\n",(0,s.jsx)(n.p,{children:"This article aims to document the installation and usage of pyenv."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["Before installing ",(0,s.jsx)(n.code,{children:"pyenv"}),", ensure that ",(0,s.jsx)(n.code,{children:"Git"})," is installed on your system."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The pyenv package provides a ",(0,s.jsx)(n.a,{href:"https://github.com/pyenv/pyenv/wiki/Common-build-problems",children:(0,s.jsx)(n.strong,{children:"Common build problems guide"})})," to address installation issues."]}),(0,s.jsx)(n.p,{children:"If you encounter any problems during installation, refer to this page."})]}),"\n",(0,s.jsxs)(n.h2,{id:"installing-pyenv",children:["Installing ",(0,s.jsx)(n.code,{children:"pyenv"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Execute Installation Command"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["You can quickly install ",(0,s.jsx)(n.code,{children:"pyenv"})," by running the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl https://pyenv.run | bash\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command fetches and executes the installation script from the ",(0,s.jsx)(n.code,{children:"pyenv-installer"})," repository on GitHub."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Configure Your Shell Environment"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["After installation, follow the ",(0,s.jsx)(n.a,{href:"https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv",children:(0,s.jsx)(n.strong,{children:"setup guide"})})," to configure your shell environment to ensure that ",(0,s.jsx)(n.code,{children:"pyenv"})," works correctly."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are using ",(0,s.jsx)(n.code,{children:"bash"}),", add the following code to your ",(0,s.jsx)(n.code,{children:".bashrc"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export PATH="$HOME/.pyenv/bin:$PATH"\neval "$(pyenv init --path)"\neval "$(pyenv virtualenv-init -)"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"zsh"})," users, add the above code to your ",(0,s.jsx)(n.code,{children:".zshrc"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Restart Your Shell"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"After completing the above steps, reload the new configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"exec $SHELL\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"using-pyenv",children:["Using ",(0,s.jsx)(n.code,{children:"pyenv"})]}),"\n",(0,s.jsxs)(n.p,{children:["Once installed and configured, you can start using ",(0,s.jsx)(n.code,{children:"pyenv"})," to manage multiple Python versions:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install a New Python Version"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv install 3.10.14\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Switch the Global Python Version"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv global 3.10.14\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Use a Specific Version in a Directory"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv local 3.8.5\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"virtual-environments",children:"Virtual Environments"}),"\n",(0,s.jsx)(n.p,{children:"Virtual environments are crucial in Python development."}),"\n",(0,s.jsx)(n.p,{children:"They allow us to use different Python versions and dependencies in different projects."}),"\n",(0,s.jsx)(n.p,{children:"At the very least, when you accidentally mess up your Python environment, you can simply delete the virtual environment and start over."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It's highly recommended to use virtual environments when developing Python projects."})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pyenv"})," also provides a ",(0,s.jsx)(n.code,{children:"pyenv-virtualenv"})," plugin, making it easier to manage Python virtual environments."]}),"\n",(0,s.jsxs)(n.p,{children:["Previously, this feature required separate installation, but it's now integrated into ",(0,s.jsx)(n.code,{children:"pyenv"}),", and we can directly use:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv virtualenv 3.10.14 your-env-name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here, ",(0,s.jsx)(n.code,{children:"3.10.14"})," is the Python version you want to use, which you've already installed in the previous step, and ",(0,s.jsx)(n.code,{children:"your-env-name"})," is the name of the virtual environment."]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"To activate the virtual environment, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv activate your-env-name\n"})}),"\n",(0,s.jsx)(n.h3,{id:"removal",children:"Removal"}),"\n",(0,s.jsx)(n.p,{children:"Finally, when you no longer need the virtual environment, you can run the following command to delete it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv virtualenv-delete your-env-name\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"updating-pyenv",children:["Updating ",(0,s.jsx)(n.code,{children:"pyenv"})]}),"\n",(0,s.jsxs)(n.p,{children:["To update ",(0,s.jsx)(n.code,{children:"pyenv"})," to the latest version, simply run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pyenv update\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"uninstalling-pyenv",children:["Uninstalling ",(0,s.jsx)(n.code,{children:"pyenv"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you decide to no longer use ",(0,s.jsx)(n.code,{children:"pyenv"}),", follow these steps to uninstall:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Remove the ",(0,s.jsx)(n.code,{children:"pyenv"})," Installation Directory"]}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rm -fr ~/.pyenv\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Clean Your ",(0,s.jsx)(n.code,{children:".bashrc"})]}),":\nRemove or comment out the relevant ",(0,s.jsx)(n.code,{children:"pyenv"})," configuration lines, then restart your shell:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"exec $SHELL\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},29536:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/1010-4cadfd563eec7e0fe6dd328308d252bf.webp"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(96540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);