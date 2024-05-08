"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6603],{66752:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=s(74848),t=s(28453);const l={sidebar_position:2},a="Installation",o={id:"docclassifier/installation",title:"Installation",description:"Currently, there is no installation package available on PyPI, and there are no plans for one in the near future.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docclassifier/installation.md",sourceDirName:"docclassifier",slug:"/docclassifier/installation",permalink:"/en/docs/docclassifier/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/en/docs/docclassifier/intro"},next:{title:"QuickStart",permalink:"/en/docs/docclassifier/quickstart"}},r={},c=[{value:"Installation Steps",id:"installation-steps",level:2},{value:"Testing the Installation",id:"testing-the-installation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Currently, there is no installation package available on PyPI, and there are no plans for one in the near future."}),"\n",(0,i.jsx)(n.p,{children:"To use this project, you must clone the repository directly from GitHub and then install the required dependencies."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Before installing, please ensure that you have installed ",(0,i.jsx)(n.code,{children:"DocsaidKit"}),"."]}),(0,i.jsxs)(n.p,{children:["If you haven't installed ",(0,i.jsx)(n.code,{children:"DocsaidKit"})," yet, please refer to the ",(0,i.jsx)(n.a,{href:"../docsaidkit/installation",children:(0,i.jsx)(n.strong,{children:"DocsaidKit Installation Guide"})}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Clone the repository:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/DocsaidLab/DocClassifier.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Navigate to the project directory:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd DocClassifier\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install the required dependencies:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install setuptools wheel\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create the distribution package:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python setup.py bdist_wheel\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install the distribution package:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install dist/docclassifier-*-py3-none-any.whl\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["By following these steps, you should be able to successfully install ",(0,i.jsx)(n.code,{children:"DocClassifier"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"testing-the-installation",children:"Testing the Installation"}),"\n",(0,i.jsx)(n.p,{children:"You can test if the installation was successful by using the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'python -c "import docclassifier; print(docclassifier.__version__)"\n# >>> 0.8.0\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you see a version number similar to ",(0,i.jsx)(n.code,{children:"0.8.0"}),", it means the installation was successful."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},l=i.createContext(t);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);