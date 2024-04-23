"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[782],{81213:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(74848),s=i(28453);const r={sidebar_position:4},t="PIP configs",l={id:"docsaidkit/pipconfig",title:"PIP configs",description:"Usage",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/pipconfig.md",sourceDirName:"docsaidkit",slug:"/docsaidkit/pipconfig",permalink:"/en/docsaidkit/pipconfig",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713882784e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Environment",permalink:"/en/docsaidkit/trainingdocker"},next:{title:"\u51fd\u5f0f\u5eab",permalink:"/en/category/\u51fd\u5f0f\u5eab"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Priority",id:"priority",level:2},{value:"Example Configuration File",id:"example-configuration-file",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"pip-configs",children:"PIP configs"}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"On Linux/macOS systems, you can use the following commands to manage local and global configurations:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python -m pip config [<file-option>] list\npython -m pip config [<file-option>] [--editor <editor-path>] edit\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Where ",(0,o.jsx)(n.code,{children:"<file-option>"})," can be one of the following options:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--global"}),": Specifies to operate on the system-wide configuration file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--user"}),": Specifies to operate on the user-level configuration file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--site"}),": Specifies to operate on the configuration file within the current virtual environment."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"--editor"})," parameter allows you to specify the path to an external editor. If this parameter is not provided, the default text editor set in the ",(0,o.jsx)(n.code,{children:"VISUAL"})," or ",(0,o.jsx)(n.code,{children:"EDITOR"})," environment variables will be used."]}),"\n",(0,o.jsx)(n.p,{children:"For example, if you want to use Vim to edit the global configuration file, you can use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python -m pip config --global --editor vim edit\n"})}),"\n",(0,o.jsx)(n.h2,{id:"priority",children:"Priority"}),"\n",(0,o.jsx)(n.p,{children:"The order of precedence for configuration files is crucial. Below is a list of configuration files that may exist on your machine, ordered by priority:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Site-level file"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/home/user/.pyenv/versions/3.x.x/envs/env_name/pip.conf"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"User-level file"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/home/user/.config/pip/pip.conf"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/home/user/.pip/pip.conf"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Global-level file"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/etc/pip.conf"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/etc/xdg/pip/pip.conf"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In the Python environment, pip will search for and apply configuration files in the order listed above. Ensuring that you are modifying the correct configuration file can help avoid hard-to-trace errors."}),"\n",(0,o.jsx)(n.h2,{id:"example-configuration-file",children:"Example Configuration File"}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of a configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ini",children:"[global]\nindex-url = https://pypi.org/simple\ntrusted-host = pypi.org\n               pypi.python.org\n               files.pythonhosted.org\nextra-index-url = https://pypi.anaconda.org/simple\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this configuration file, the parameters mean the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"index-url"}),": Sets the default source that pip uses when installing packages."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"trusted-host"}),": Lists sources that do not require SSL verification, to prevent SSL errors."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"extra-index-url"}),": Provides additional source addresses for searching and installing dependencies. Unlike ",(0,o.jsx)(n.code,{children:"index-url"}),", when the needed package is not found in the source specified by ",(0,o.jsx)(n.code,{children:"index-url"}),", pip will look at ",(0,o.jsx)(n.code,{children:"extra-index-url"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Please be aware that when using multiple sources, all sources should be trusted, as the installation process will select the most suitable version from these sources. Untrusted sources could pose security risks."})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var o=i(96540);const s={},r=o.createContext(s);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);