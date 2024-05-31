"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[91096],{12630:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var l=s(74848),i=s(28453);const r={slug:"pyenv-installation",title:"\u4f7f\u7528 pyenv \u7ba1\u7406 Python \u7248\u672c",authors:"Zephyr",tags:["python","pyenv","virtualenv","usage"],image:"/img/2023/1010.webp",description:"\u8a18\u9304\u5b89\u88dd pyenv \u7684\u5b89\u88dd\u8207\u4f7f\u7528\u65b9\u5f0f\u3002"},c=void 0,d={permalink:"/blog/pyenv-installation",source:"@site/blog/2023/10-10-pyenv-installation/index.md",title:"\u4f7f\u7528 pyenv \u7ba1\u7406 Python \u7248\u672c",description:"\u8a18\u9304\u5b89\u88dd pyenv \u7684\u5b89\u88dd\u8207\u4f7f\u7528\u65b9\u5f0f\u3002",date:"2023-10-10T00:00:00.000Z",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"pyenv",permalink:"/blog/tags/pyenv"},{label:"virtualenv",permalink:"/blog/tags/virtualenv"},{label:"usage",permalink:"/blog/tags/usage"}],readingTime:3.6,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"pyenv-installation",title:"\u4f7f\u7528 pyenv \u7ba1\u7406 Python \u7248\u672c",authors:"Zephyr",tags:["python","pyenv","virtualenv","usage"],image:"/img/2023/1010.webp",description:"\u8a18\u9304\u5b89\u88dd pyenv \u7684\u5b89\u88dd\u8207\u4f7f\u7528\u65b9\u5f0f\u3002"},unlisted:!1,prevItem:{title:"\u5bb9\u5668\u4e0b\u7684\u4f7f\u7528\u8005\u5207\u63db\u5de5\u5177\uff1agosu",permalink:"/blog/gosu-usage"},nextItem:{title:"\u8a18\u9304\u8207\u6392\u67e5\u6a21\u578b\u8a13\u7df4\u74b0\u5883\u554f\u984c",permalink:"/blog/python-env-info-collector"}},h={authorsImageUrls:[void 0]},t=[{value:"\u524d\u7f6e\u689d\u4ef6",id:"\u524d\u7f6e\u689d\u4ef6",level:2},{value:"\u5b89\u88dd <code>pyenv</code>",id:"\u5b89\u88dd-pyenv",level:2},{value:"\u4f7f\u7528 <code>pyenv</code>",id:"\u4f7f\u7528-pyenv",level:2},{value:"\u865b\u64ec\u74b0\u5883",id:"\u865b\u64ec\u74b0\u5883",level:2},{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u79fb\u9664",id:"\u79fb\u9664",level:3},{value:"\u66f4\u65b0 <code>pyenv</code>",id:"\u66f4\u65b0-pyenv",level:2},{value:"\u5378\u8f09 <code>pyenv</code>",id:"\u5378\u8f09-pyenv",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("figure",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"title",src:s(29536).A+"",width:"1024",height:"1024"}),"\n",(0,l.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"\u65e9\u4e9b\u5e74\u4f7f\u7528 Python \u7684\u6642\u5019\u5927\u591a\u4f7f\u7528 Conda \u4f86\u7ba1\u7406\u3002\u73fe\u5728\u5247\u662f\u5e38\u7528 pyenv \u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u5011\u5c31\u5728\u9019\u7bc7\u6587\u7ae0\u4e2d\u4f86\u8a18\u9304\u5b89\u88dd pyenv \u7684\u5b89\u88dd\u8207\u4f7f\u7528\u65b9\u5f0f\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u524d\u7f6e\u689d\u4ef6",children:"\u524d\u7f6e\u689d\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u5b89\u88dd ",(0,l.jsx)(n.code,{children:"pyenv"})," \u4e4b\u524d\uff0c\u4f60\u9700\u8981\u6709 ",(0,l.jsx)(n.code,{children:"Git"})," \u5b89\u88dd\u5728\u4f60\u7684\u7cfb\u7d71\u4e0a\u3002"]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsxs)(n.p,{children:["\u5728 pyenv \u5957\u4ef6\u4e2d\u6709\u63d0\u4f9b ",(0,l.jsx)(n.a,{href:"https://github.com/pyenv/pyenv/wiki/Common-build-problems",children:(0,l.jsx)(n.strong,{children:"\u5b89\u88dd\u554f\u984c\u6307\u5357"})})," \u3002"]}),(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5728\u5b89\u88dd\u904e\u7a0b\u4e2d\u9047\u5230\u554f\u984c\uff0c\u53ef\u4ee5\u53c3\u8003\u9019\u500b\u9801\u9762\u3002"})]}),"\n",(0,l.jsxs)(n.h2,{id:"\u5b89\u88dd-pyenv",children:["\u5b89\u88dd ",(0,l.jsx)(n.code,{children:"pyenv"})]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u57f7\u884c\u5b89\u88dd\u6307\u4ee4"}),"\uff1a"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u904e\u4ee5\u4e0b\u6307\u4ee4\u5feb\u901f\u5b89\u88dd ",(0,l.jsx)(n.code,{children:"pyenv"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl https://pyenv.run | bash\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u689d\u6307\u4ee4\u5be6\u969b\u4e0a\u662f\u5f9e GitHub \u4e0a\u7684 ",(0,l.jsx)(n.code,{children:"pyenv-installer"})," \u5b58\u5132\u5eab\u7372\u53d6\u5b89\u88dd\u8173\u672c\u4e26\u57f7\u884c\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8a2d\u5b9a\u4f60\u7684 Shell \u74b0\u5883"}),"\uff1a"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5b89\u88dd\u5b8c\u7562\u5f8c\uff0c\u6839\u64da ",(0,l.jsx)(n.a,{href:"https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv",children:(0,l.jsx)(n.strong,{children:"\u8a2d\u5b9a\u6307\u5357"})})," \u914d\u7f6e\u4f60\u7684 shell \u74b0\u5883\uff0c\u4ee5\u78ba\u4fdd ",(0,l.jsx)(n.code,{children:"pyenv"})," \u80fd\u5920\u6b63\u78ba\u5de5\u4f5c\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u662f\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"bash"}),"\uff0c\u5247\u9700\u8981\u5c07\u4ee5\u4e0b\u4ee3\u78bc\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,l.jsx)(n.code,{children:".bashrc"})," \u6587\u4ef6\u4e2d\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'export PATH="$HOME/.pyenv/bin:$PATH"\neval "$(pyenv init --path)"\neval "$(pyenv virtualenv-init -)"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f ",(0,l.jsx)(n.code,{children:"zsh"}),"\uff0c\u5247\u9700\u8981\u5c07\u4e0a\u8ff0\u4ee3\u78bc\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,l.jsx)(n.code,{children:".zshrc"})," \u6587\u4ef6\u4e2d\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u91cd\u555f\u4f60\u7684 Shell"}),"\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:"\u7576\u4f60\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9a5f\u5f8c\uff0c\u8acb\u91cd\u65b0\u8f09\u5165\u65b0\u7684\u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"exec $SHELL\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"\u4f7f\u7528-pyenv",children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"pyenv"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5b89\u88dd\u548c\u8a2d\u5b9a\u5b8c\u6210\u5f8c\uff0c\u4f60\u53ef\u4ee5\u958b\u59cb\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"pyenv"})," \u7ba1\u7406\u591a\u500b Python \u7248\u672c\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5b89\u88dd\u65b0\u7684 Python \u7248\u672c"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pyenv install 3.10.14\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5207\u63db\u5168\u5c40 Python \u7248\u672c"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pyenv global 3.10.14\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5728\u7279\u5b9a\u76ee\u9304\u4f7f\u7528\u7279\u5b9a\u7248\u672c"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pyenv local 3.8.5\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u865b\u64ec\u74b0\u5883",children:"\u865b\u64ec\u74b0\u5883"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 Python \u958b\u767c\u4e2d\uff0c\u865b\u64ec\u74b0\u5883\u662f\u4e00\u500b\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5b83\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u5728\u4e0d\u540c\u7684\u5c08\u6848\u4e2d\u4f7f\u7528\u4e0d\u540c\u7684 Python \u7248\u672c\u548c\u4f9d\u8cf4\u5eab\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u81f3\u5c11\u7576\u4f60\u4e0d\u5c0f\u5fc3\u5f04\u58de\u4e86 Python \u74b0\u5883\u6642\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u522a\u9664\u865b\u64ec\u74b0\u5883\uff0c\u91cd\u65b0\u4f86\u904e\u3002"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"\u6211\u5011\u4e00\u5f8b\u5efa\u8b70\u5728\u958b\u767c Python \u5c08\u6848\u6642\u4f7f\u7528\u865b\u64ec\u74b0\u5883\u3002"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5b89\u88dd",children:"\u5b89\u88dd"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"pyenv"})," \u9084\u63d0\u4f9b\u4e86\u4e00\u500b ",(0,l.jsx)(n.code,{children:"pyenv-virtualenv"})," \u63d2\u4ef6\uff0c\u53ef\u4ee5\u8b93\u4f60\u66f4\u65b9\u4fbf\u5730\u7ba1\u7406 Python \u865b\u64ec\u74b0\u5883\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u65e9\u671f\u9019\u500b\u529f\u80fd\u9700\u8981\u55ae\u7368\u5b89\u88dd\uff0c\u73fe\u5728\u5df2\u7d93\u6574\u5408\u5230 ",(0,l.jsx)(n.code,{children:"pyenv"})," \u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u7528\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pyenv virtualenv 3.10.14 your-env-name\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,l.jsx)(n.code,{children:"3.10.14"})," \u662f\u4f60\u60f3\u8981\u4f7f\u7528\u7684 Python \u7248\u672c\uff0c\u4f60\u5728\u4e0a\u4e00\u500b\u6b65\u9a5f\u5df2\u7d93\u5b8c\u6210\u5b89\u88dd\uff0c",(0,l.jsx)(n.code,{children:"your-env-name"})," \u662f\u865b\u64ec\u74b0\u5883\u7684\u540d\u7a31\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,l.jsx)(n.p,{children:"\u6fc0\u6d3b\u865b\u64ec\u74b0\u5883\uff0c\u8acb\u904b\u884c\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pyenv activate your-env-name\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u79fb\u9664",children:"\u79fb\u9664"}),"\n",(0,l.jsx)(n.p,{children:"\u6700\u5f8c\uff0c\u7576\u4f60\u4e0d\u9700\u8981\u865b\u64ec\u74b0\u5883\uff0c\u53ef\u4ee5\u904b\u884c\u4ee5\u4e0b\u547d\u4ee4\u522a\u9664\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pyenv virtualenv-delete your-env-name\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u66f4\u65b0-pyenv",children:["\u66f4\u65b0 ",(0,l.jsx)(n.code,{children:"pyenv"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u66f4\u65b0 ",(0,l.jsx)(n.code,{children:"pyenv"})," \u5230\u6700\u65b0\u7248\u672c\uff0c\u53ea\u9700\u904b\u884c\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pyenv update\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u5378\u8f09-pyenv",children:["\u5378\u8f09 ",(0,l.jsx)(n.code,{children:"pyenv"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6c7a\u5b9a\u4e0d\u518d\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"pyenv"}),"\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9a5f\u5378\u8f09\uff1a"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsxs)(n.strong,{children:["\u79fb\u9664 ",(0,l.jsx)(n.code,{children:"pyenv"})," \u5b89\u88dd\u76ee\u9304"]}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"rm -fr ~/.pyenv\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsxs)(n.strong,{children:["\u6e05\u7406\u4f60\u7684 ",(0,l.jsx)(n.code,{children:".bashrc"})]}),"\uff1a\n\u79fb\u9664\u6216\u8a3b\u91cb\u6389\u76f8\u95dc\u7684 ",(0,l.jsx)(n.code,{children:"pyenv"})," \u914d\u7f6e\u884c\uff0c\u7136\u5f8c\u91cd\u555f\u4f60\u7684 shell\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"exec $SHELL\n"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},29536:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/1010-4cadfd563eec7e0fe6dd328308d252bf.webp"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var l=s(96540);const i={},r=l.createContext(i);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);