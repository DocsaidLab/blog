"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1764],{26053:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=s(74848),r=s(28453);const i={slug:"gosu-usage",title:"\u5bb9\u5668\u4e0b\u7684\u4f7f\u7528\u8005\u5207\u63db\u5de5\u5177\uff1agosu",authors:"Zephyr",tags:["docker","gosu","sudo","container"],image:"/img/2024/0203.webp",description:"\u9019\u9ebc\u597d\u7528\u7684\u5de5\u5177\uff0c\u80af\u5b9a\u8981\u5b78\u7fd2\u4e00\u4e0b\u3002"},t=void 0,l={permalink:"/blog/gosu-usage",source:"@site/blog/2024/02-03-usage-gosu/index.md",title:"\u5bb9\u5668\u4e0b\u7684\u4f7f\u7528\u8005\u5207\u63db\u5de5\u5177\uff1agosu",description:"\u9019\u9ebc\u597d\u7528\u7684\u5de5\u5177\uff0c\u80af\u5b9a\u8981\u5b78\u7fd2\u4e00\u4e0b\u3002",date:"2024-02-03T00:00:00.000Z",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"gosu",permalink:"/blog/tags/gosu"},{label:"sudo",permalink:"/blog/tags/sudo"},{label:"container",permalink:"/blog/tags/container"}],readingTime:6.61,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"gosu-usage",title:"\u5bb9\u5668\u4e0b\u7684\u4f7f\u7528\u8005\u5207\u63db\u5de5\u5177\uff1agosu",authors:"Zephyr",tags:["docker","gosu","sudo","container"],image:"/img/2024/0203.webp",description:"\u9019\u9ebc\u597d\u7528\u7684\u5de5\u5177\uff0c\u80af\u5b9a\u8981\u5b78\u7fd2\u4e00\u4e0b\u3002"},unlisted:!1,prevItem:{title:"\u65e5\u5e38\u932f\u8aa4\u6392\u9664\u7d00\u9304",permalink:"/blog/error-record"},nextItem:{title:"\u4f7f\u7528 pyenv \u7ba1\u7406 Python \u7248\u672c",permalink:"/blog/pyenv-installation"}},c={authorsImageUrls:[void 0]},d=[{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:2},{value:"TTY \u8f49\u63db",id:"tty-\u8f49\u63db",level:3},{value:"\u4fe1\u865f\u8f49\u767c",id:"\u4fe1\u865f\u8f49\u767c",level:3},{value:"\u4ec0\u9ebc\u662f gosu\uff1f",id:"\u4ec0\u9ebc\u662f-gosu",level:2},{value:"\u5be6\u969b\u61c9\u7528\u5834\u666f",id:"\u5be6\u969b\u61c9\u7528\u5834\u666f",level:3},{value:"\u5b89\u5168\u6027\u8003\u91cf",id:"\u5b89\u5168\u6027\u8003\u91cf",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("figure",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"title",src:s(31304).A+"",width:"1024",height:"1024"}),"\n",(0,o.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Docker \u6280\u8853\u5df2\u7d93\u5927\u91cf\u7684\u61c9\u7528\u5728\u90e8\u7f72\u548c\u7ba1\u7406\u4e0a\uff0c\u9019\u7a2e\u6280\u8853\u5141\u8a31\u958b\u767c\u8005\u5c07\u61c9\u7528\u53ca\u5176\u4f9d\u8cf4\u6253\u5305\u5728\u4e00\u8d77\uff0c\u78ba\u4fdd\u5728\u4e0d\u540c\u7684\u74b0\u5883\u4e2d\u4e00\u81f4\u5730\u904b\u884c\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u5e38\u898b\u554f\u984c",children:"\u5e38\u898b\u554f\u984c"}),"\n",(0,o.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5982\u679c\u4f60\u5f88\u5e38\u7528\uff0c\u4f60\u4e00\u5b9a\u8eb2\u4e0d\u958b\u5e7e\u500b\u5e38\u898b\u7684\u554f\u984c\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"tty-\u8f49\u63db",children:"TTY \u8f49\u63db"}),"\n",(0,o.jsx)(n.p,{children:"\u4e00\u500b\u6bd4\u8f03\u5e38\u898b\u7684\u60c5\u6cc1\u662f\uff0c\u7576\u4f60\u5728\u5bb9\u5668\u4e2d\u8f38\u51fa\u4e86\u67d0\u500b\u6a94\u6848\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u63a5\u8457\u96e2\u958b\u5bb9\u5668\uff0c\u7136\u5f8c\u767c\u73fe\u6a94\u6848\u7684\u6b0a\u9650\u90fd\u662f root\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:["\u9019\u6642\u5019\u4f60\u53c8\u5fc5\u9808\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"chown"})," \u4f86\u66f4\u6539\u6a94\u6848\u7684\u6b0a\u9650\uff0c\u4e00\u6b21\u53c8\u4e00\u6b21\uff0c\u6709\u5920\u7169\u3002"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"\u53c8\u6216\u662f\u5728 Docker \u5bb9\u5668\u4e2d\u4f7f\u7528 sudo \u555f\u52d5\u4e00\u500b\u9700\u8981\u8207\u7d42\u7aef\u4ea4\u4e92\u7684\u61c9\u7528\u7a0b\u5e8f\uff0c\u9019\u4e9b\u61c9\u7528\u53ef\u80fd\u7121\u6cd5\u6b63\u78ba\u5730\u6aa2\u6e2c\u5230\u7d42\u7aef\uff08TTY\uff09\uff0c\u56e0\u70ba sudo \u5728\u5275\u5efa\u65b0\u6703\u8a71\u6642\u53ef\u80fd\u4e0d\u6703\u9069\u7576\u5730\u8655\u7406\u7d42\u7aef\u7684\u6240\u6709\u6b0a\u548c\u63a7\u5236\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u7d50\u679c\uff0c\u9019\u4e9b\u9700\u8981\u8207\u7d42\u7aef\u4ea4\u4e92\u7684\u61c9\u7528\u53ef\u80fd\u7121\u6cd5\u6b63\u5e38\u904b\u884c\uff0c\u6216\u8005\u5728\u8a66\u5716\u4f7f\u7528\u5b83\u5011\u6642\u9047\u5230\u8f38\u5165/\u8f38\u51fa\u932f\u8aa4\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u4fe1\u865f\u8f49\u767c",children:"\u4fe1\u865f\u8f49\u767c"}),"\n",(0,o.jsx)(n.p,{children:"\u5047\u8a2d\u4f60\u6709\u4e00\u500b\u5bb9\u5668\uff0c\u5176\u4e2d\u904b\u884c\u8457 Web \u4f3a\u670d\u5668\uff0c\u4f8b\u5982 Apache \u6216 Nginx\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u4f60\u53ef\u80fd\u6703\u4f7f\u7528\u547d\u4ee4\u5217\u5de5\u5177\u4f86\u7ba1\u7406\u9019\u500b\u5bb9\u5668\uff0c\u5305\u62ec\u555f\u52d5\u548c\u505c\u6b62\u5bb9\u5668\u3002\u5728\u5bb9\u5668\u5167\u90e8\uff0c\u5982\u679c\u4f60\u4f7f\u7528 sudo \u4f86\u555f\u52d5 Web \u4f3a\u670d\u5668\uff0c\u90a3\u9ebc sudo \u5c31\u6703\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u9032\u7a0b\u4f86\u904b\u884c Web \u4f3a\u670d\u5668\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u554f\u984c\u51fa\u73fe\u5728\u7576\u4f60\u60f3\u8981\u505c\u6b62\u6216\u91cd\u65b0\u555f\u52d5\u5bb9\u5668\u6642\u3002\u5bb9\u5668\u7ba1\u7406\u7cfb\u7d71\u6703\u5411\u5bb9\u5668\u767c\u9001\u8a0a\u865f\uff08\u5982 SIGTERM\uff09\uff0c\u4ee5\u901a\u77e5\u5bb9\u5668\u5167\u7684\u7a0b\u5e8f\u6e96\u5099\u505c\u6b62\u3002\u7136\u800c\uff0c\u5982\u679c Web \u4f3a\u670d\u5668\u662f\u900f\u904e sudo \u555f\u52d5\u7684\uff0c\u90a3\u9ebc\u9019\u500b\u8a0a\u865f\u53ef\u80fd\u53ea\u6703\u88ab\u50b3\u9001\u5230 sudo \u9032\u7a0b\uff0c\u800c\u4e0d\u662f\u5be6\u969b\u904b\u884c Web \u4f3a\u670d\u5668\u7684\u9032\u7a0b\u3002\u9019\u610f\u5473\u8457 Web \u4f3a\u670d\u5668\u53ef\u80fd\u4e0d\u6703\u6536\u5230\u505c\u6b62\u8a0a\u865f\uff0c\u56e0\u6b64\u7121\u6cd5\u9032\u884c\u9069\u7576\u7684\u6e05\u7406\u548c\u5b89\u5168\u95dc\u9589\u3002"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"sudo \u7684\u8a2d\u8a08\u521d\u8877\u662f\u63d0\u9ad8\u5b89\u5168\u6027\uff0c\u5141\u8a31\u4e00\u822c\u4f7f\u7528\u8005\u4ee5\u5176\u4ed6\u4f7f\u7528\u8005\uff08\u901a\u5e38\u662f root \u4f7f\u7528\u8005\uff09\u7684\u8eab\u5206\u57f7\u884c\u6307\u4ee4\u3002\u5728\u9019\u500b\u904e\u7a0b\u4e2d\uff0csudo \u6703\u555f\u52d5\u4e00\u500b\u65b0\u7684\u6703\u8a71\u4f86\u57f7\u884c\u6307\u4ee4\u3002\u9019\u500b\u884c\u70ba\u5728\u50b3\u7d71\u7684\u4f5c\u696d\u7cfb\u7d71\u74b0\u5883\u4e2d\u901a\u5e38\u6c92\u6709\u554f\u984c\uff0c\u4f46\u5728\u5bb9\u5668\u9019\u6a23\u7684\u8f15\u91cf\u7d1a\u865b\u64ec\u5316\u74b0\u5883\u4e2d\uff0c\u5b83\u53ef\u80fd\u5c0e\u81f4\u8a0a\u865f\u50b3\u905e\u554f\u984c\uff0c\u56e0\u70ba sudo \u5275\u5efa\u7684\u65b0\u6703\u8a71\u8207\u5bb9\u5668\u7ba1\u7406\u7cfb\u7d71\u767c\u9001\u8a0a\u865f\u7684\u65b9\u5f0f\u53ef\u80fd\u4e0d\u76f8\u5bb9 \u3002"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4ec0\u9ebc\u662f-gosu",children:"\u4ec0\u9ebc\u662f gosu\uff1f"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/tianon/gosu",children:(0,o.jsx)(n.strong,{children:"gosu GitHub repository"})})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["gosu \u662f\u4e00\u500b\u5c08\u9580\u70ba\u4e86\u5bb9\u5668\u8a2d\u8a08\u7684\u5de5\u5177\uff0c\u5b83\u7684\u76ee\u7684\u662f\u8b93\u5728\u5bb9\u5668\u5167\u90e8\u57f7\u884c\u547d\u4ee4\u8b8a\u5f97\u66f4\u7c21\u55ae\u548c\u5b89\u5168\u3002\u7576\u4f60\u9700\u8981\u4ee5\u4e0d\u540c\u7684\u7528\u6236\u8eab\u4efd\uff08\u6bd4\u5982\u5f9e\u7ba1\u7406\u54e1\u8b8a\u6210\u666e\u901a\u7528\u6236\uff09\u4f86\u904b\u884c\u67d0\u500b\u7a0b\u5e8f\u6642\uff0cgosu \u5c31\u80fd\u6d3e\u4e0a\u7528\u5834\u3002\u5b83\u6838\u5fc3\u5de5\u4f5c\u539f\u7406\u76f4\u63a5\u501f\u9452\u4e86 ",(0,o.jsx)(n.code,{children:"Docker/libcontainer"})," \u555f\u52d5\u5bb9\u5668\u5167\u61c9\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\uff08\u5be6\u969b\u4e0a\uff0c\u5b83\u76f4\u63a5\u4f7f\u7528\u4e86 ",(0,o.jsx)(n.code,{children:"libcontainer"})," \u4ee3\u78bc\u5eab\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"/etc/passwd"})," \u8655\u7406\u4ee3\u78bc\uff09\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5c0d\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u4e0d\u611f\u8208\u8da3\uff0c\u90a3\u7c21\u55ae\u4f86\u8aaa\uff0cgosu \u5c31\u50cf\u662f\u4e00\u500b\u5e6b\u624b\uff0c\u7576\u4f60\u544a\u8a34\u5b83\u300c\u8acb\u4ee5\u9019\u500b\u7528\u6236\u7684\u8eab\u4efd\u57f7\u884c\u9019\u500b\u547d\u4ee4\u300d\u6642\uff0c\u5b83\u5c31\u6703\u5e6b\u4f60\u505a\u5230\uff0c\u800c\u4e14\u505a\u5b8c\u4e4b\u5f8c\u5c31\u6703\u9000\u51fa\uff0c\u4e0d\u6703\u7559\u4e0b\u4efb\u4f55\u75d5\u8ff9\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u5be6\u969b\u61c9\u7528\u5834\u666f",children:"\u5be6\u969b\u61c9\u7528\u5834\u666f"}),"\n",(0,o.jsx)(n.p,{children:"\u5728 Docker \u5bb9\u5668\u7684 ENTRYPOINT \u8173\u672c\u4e2d\u4f7f\u7528 gosu \u662f\u4e00\u500b\u975e\u5e38\u5178\u578b\u7684\u61c9\u7528\u5834\u666f\uff0c\u5c24\u5176\u7576\u6211\u5011\u9700\u8981\u5f9e root \u7528\u6236\u964d\u7d1a\u5230\u975e\u7279\u6b0a\u7528\u6236\u4f86\u57f7\u884c\u67d0\u4e9b\u64cd\u4f5c\u6642\u3002\u9019\u7a2e\u505a\u6cd5\u5c0d\u65bc\u4fdd\u8b77\u5bb9\u5668\u904b\u884c\u74b0\u5883\u7684\u5b89\u5168\u81f3\u95dc\u91cd\u8981\uff0c\u56e0\u70ba\u5b83\u80fd\u6709\u6548\u6e1b\u5c11\u6f5b\u5728\u7684\u5b89\u5168\u98a8\u96aa\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5b89\u88dd gosu \u975e\u5e38\u7c21\u55ae\uff0c\u901a\u5e38\u53ea\u9700\u8981\u5728 Dockerfile \u4e2d\u6dfb\u52a0\u5e7e\u884c\u6307\u4ee4\u5373\u53ef\u5b8c\u6210\u5b89\u88dd\u548c\u914d\u7f6e\u3002\u4e0b\u9762\u7684\u7bc4\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728 Dockerfile \u4e2d\u5b89\u88dd gosu\uff0c\u4e26\u901a\u904e\u4e00\u500b\u5165\u53e3\u9ede\u8173\u672c\u4f86\u52d5\u614b\u5275\u5efa\u7528\u6236\u548c\u7528\u6236\u7d44\uff0c\u7136\u5f8c\u4f7f\u7528 gosu \u4ee5\u6307\u5b9a\u7684\u7528\u6236\u8eab\u4efd\u57f7\u884c\u547d\u4ee4\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Dockerfile",metastring:'title="Dockerfile"',children:'# \u57fa\u65bc\u4e00\u500b\u5df2\u6709\u7684\u57fa\u790e\u93e1\u50cf\nFROM some_base_image:latest\n\nWORKDIR /app\n\n# \u5b89\u88ddgosu\nRUN apt-get update && apt-get install -y gosu && rm -rf /var/lib/apt/lists/*\n\n# \u6e96\u5099\u5165\u53e3\u9ede\u8173\u672c\nCOPY entrypoint.sh /entrypoint.sh\nRUN chmod +x /entrypoint.sh\n\nENTRYPOINT ["/entrypoint.sh"]\nCMD ["default_command"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"entrypoint.sh"})," \u8173\u672c\u7684\u7bc4\u4f8b\u5167\u5bb9\u5982\u4e0b\uff0c\u5b83\u6839\u64da\u74b0\u5883\u8b8a\u91cf USER_ID \u548c GROUP_ID \u52d5\u614b\u5275\u5efa\u7528\u6236\uff0c\u7136\u5f8c\u7528 gosu \u57f7\u884c\u547d\u4ee4\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="entrypoint.sh"',children:'#!/bin/bash\n# \u6aa2\u67e5\u662f\u5426\u8a2d\u7f6e\u4e86USER_ID\u548cGROUP_ID\u74b0\u5883\u8b8a\u91cf\nif [ ! -z "$USER_ID" ] && [ ! -z "$GROUP_ID" ]; then\n    # \u5275\u5efa\u7528\u6236\u7d44\u548c\u7528\u6236\n    groupadd -g "$GROUP_ID" usergroup\n    useradd -u "$USER_ID" -g usergroup -m user\n    # \u4f7f\u7528gosu\u57f7\u884c\u547d\u4ee4\n    exec gosu user "$@"\nelse\n    exec "$@"\nfi\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u5be6\u969b\u7684\u7bc4\u4f8b\uff0c\u53ef\u4ee5\u53c3\u8003\uff1a",(0,o.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocClassifier/blob/main/docker/Dockerfile",children:(0,o.jsx)(n.strong,{children:"DocClassifier training docker"})})]}),"\n",(0,o.jsx)(n.h3,{id:"\u5b89\u5168\u6027\u8003\u91cf",children:"\u5b89\u5168\u6027\u8003\u91cf"}),"\n",(0,o.jsxs)(n.p,{children:["\u5118\u7ba1 gosu \u7684\u4e3b\u8981\u7528\u9014\u662f\u5728\u5bb9\u5668\u555f\u52d5\u6642\u5f9e ",(0,o.jsx)(n.code,{children:"root"})," \u7528\u6236\u5207\u63db\u5230\u975e\u7279\u6b0a\u7528\u6236\uff0c\u4f46\u5176\u958b\u767c\u8005\u4e5f\u5f37\u8abf\u4e86\u5728\u7279\u5b9a\u60c5\u5883\u4e0b\u4f7f\u7528 gosu \u53ef\u80fd\u5b58\u5728\u7684\u5b89\u5168\u98a8\u96aa\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u9019\u662f\u56e0\u70ba\u4efb\u4f55\u5141\u8a31\u7528\u6236\u5207\u63db\u7684\u5de5\u5177\uff0c\u82e5\u88ab\u4e0d\u7576\u4f7f\u7528\uff0c\u90fd\u53ef\u80fd\u6253\u958b\u5b89\u5168\u6f0f\u6d1e\u7684\u5927\u9580\u3002\u56e0\u6b64\uff0c\u958b\u767c\u548c\u904b\u7dad\u5718\u968a\u9700\u8981\u5c0d gosu \u7684\u4f7f\u7528\u5834\u666f\u6709\u5145\u5206\u7684\u4e86\u89e3\uff0c\u4e26\u78ba\u4fdd\u5176\u50c5\u5728\u5b89\u5168\u7684\u74b0\u5883\u4e2d\u4f7f\u7528\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},31304:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/0203-ee58f02227c5bb39005c313c2fa21c5e.webp"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var o=s(96540);const r={},i=o.createContext(r);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);