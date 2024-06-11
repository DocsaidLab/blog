"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9749],{77485:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=o(74848),r=o(28453);const a={sidebar_position:9},s="\u6392\u7a0b\u4efb\u52d9",i={id:"gmailsummary/automation",title:"\u6392\u7a0b\u4efb\u52d9",description:"\u6211\u5011\u671f\u5f85\u53ef\u4ee5\u5728\u6bcf\u5929\u65e9\u4e0a\u770b\u5230\u6700\u65b0\u7684\u90f5\u4ef6\u6458\u8981\uff0c\u56e0\u6b64\u6211\u5011\u9700\u8981\u4e00\u500b\u81ea\u52d5\u5316\u7684\u6392\u7a0b\u4efb\u52d9\u4f86\u5b8c\u6210\u9019\u500b\u76ee\u6a19\u3002",source:"@site/docs/gmailsummary/automation.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/automation",permalink:"/docs/gmailsummary/automation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u4e32\u63a5\u6240\u6709\u529f\u80fd",permalink:"/docs/gmailsummary/update_infos"},next:{title:"\u5e38\u898b\u554f\u984c",permalink:"/docs/gmailsummary/conclusion"}},c={},d=[{value:"\u4f7f\u7528 <code>crontab</code>",id:"\u4f7f\u7528-crontab",level:2},{value:"\u6e2c\u8a66 <code>crontab</code>",id:"\u6e2c\u8a66-crontab",level:2}];function l(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u6392\u7a0b\u4efb\u52d9",children:"\u6392\u7a0b\u4efb\u52d9"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u5011\u671f\u5f85\u53ef\u4ee5\u5728\u6bcf\u5929\u65e9\u4e0a\u770b\u5230\u6700\u65b0\u7684\u90f5\u4ef6\u6458\u8981\uff0c\u56e0\u6b64\u6211\u5011\u9700\u8981\u4e00\u500b\u81ea\u52d5\u5316\u7684\u6392\u7a0b\u4efb\u52d9\u4f86\u5b8c\u6210\u9019\u500b\u76ee\u6a19\u3002"}),"\n",(0,t.jsxs)(e.h2,{id:"\u4f7f\u7528-crontab",children:["\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"crontab"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u70ba\u4e86\u8b93\u9019\u500b\u904e\u7a0b\u5b8c\u5168\u81ea\u52d5\u5316\uff0c\u6211\u5011\u5229\u7528\u4e86 Linux \u7684 ",(0,t.jsx)(e.code,{children:"crontab"})," \u529f\u80fd\u4f86\u8a2d\u7f6e\u5b9a\u6642\u4efb\u52d9\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u9019\u6a23\u53ef\u4ee5\u78ba\u4fdd\u6bcf\u5929\u56fa\u5b9a\u6642\u9593\u81ea\u52d5\u57f7\u884c\u7a0b\u5f0f\uff0c\u6293\u53d6\u65b0\u90f5\u4ef6\uff0c\u751f\u6210\u6458\u8981\uff0c\u4e26\u66f4\u65b0 GitHub \u5b58\u5132\u5eab\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5177\u9ad4\u7684 ",(0,t.jsx)(e.code,{children:"crontab"})," \u8a2d\u5b9a\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"crontab -e\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u8457\u6dfb\u52a0\u4ee5\u4e0b\u5167\u5bb9\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Edit this file to introduce tasks to be run by cron.\n#\n# Each task to run has to be defined through a single line\n# indicating with different fields when the task will be run\n# and what command to run for the task\n#\n# To define the time you can provide concrete values for\n# minute (m), hour (h), day of month (dom), month (mon),\n# and day of week (dow) or use '*' in these fields (for 'any').\n#\n# Notice that tasks will be started based on the cron's system\n# daemon's notion of time and timezones.\n#\n# Output of the crontab jobs (including errors) is sent through\n# email to the user the crontab file belongs to (unless redirected).\n#\n# For example, you can run a backup of all your user accounts\n# at 5 a.m every week with:\n# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/\n#\n# For more information see the manual pages of crontab(5) and cron(8)\n#\n# m h  dom mon dow   command\n\n# Define your environment variables\nOPENAI_API_KEY=\"your_openai_api_key\"\n\n# \u6bcf\u5929\u65e9\u4e0a 6 \u9ede\u81ea\u52d5\u57f7\u884c\u66f4\u65b0\u7a0b\u5f0f\n0 6 * * * /path/to/your/script/update_targets_infos.sh\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u8a2d\u7f6e\u5b9a\u6642\u4efb\u52d9\u4e4b\u524d\uff0c\u4e0d\u8981\u5fd8\u8a18\u7d66\u7a0b\u5f0f\u6587\u4ef6\u8ce6\u4e88\u57f7\u884c\u6b0a\u9650\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"chmod +x /path/to/your/script/update_targets_infos.sh\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u7531\u65bc crontab \u7684\u74b0\u5883\u7279\u6b8a\u6027\uff0c\u4f60\u5fc5\u9808\u78ba\u4fdd\u57f7\u884c\u7684 python \u74b0\u5883\u548c\u76f8\u95dc\u5957\u4ef6\u90fd\u662f\u6b63\u78ba\u7684\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u56e0\u6b64\u5728\u7a0b\u5f0f\u4e2d\uff0c\u6211\u5011\u901a\u5e38\u6703\u4f7f\u7528\u7d55\u5c0d\u8def\u5f91\u4f86\u57f7\u884c python \u7a0b\u5f0f\uff0c\u8acb\u8a18\u5f97\u8981\u4fee\u6539\u7a0b\u5f0f\u4e2d\u7684\u8def\u5f91\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# `update_targets_infos.sh`\n\n# ...\u4ee5\u4e0a\u7701\u7565\n\n# \u57f7\u884c Python \u7a0b\u5f0f\uff0c\u8981\u628a\u9019\u908a\u6539\u6210\u4f60\u81ea\u5df1\u7684 python \u8def\u5f91\n$HOME/your/python main.py --project_name $project_name --time_length 1 2>&1\n\n# ...\u4ee5\u4e0b\u7701\u7565\n"})}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsxs)(e.p,{children:["crontab \u4e0d\u6703\u8b80\u53d6\u4f60\u7684 ",(0,t.jsx)(e.code,{children:".bashrc"})," \u6216 ",(0,t.jsx)(e.code,{children:".bash_profile"})," \u7b49\u6587\u4ef6\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u5728\u7a0b\u5f0f\u4e2d\u6307\u5b9a\u6240\u6709\u7684\u74b0\u5883\u8b8a\u6578\u3002"]}),(0,t.jsxs)(e.p,{children:["\u9019\u4e5f\u662f\u70ba\u4ec0\u9ebc\u6211\u5011\u6703\u5728 ",(0,t.jsx)(e.code,{children:"crontab"})," \u7684\u57f7\u884c\u7a0b\u5f0f\u4e2d\u8a2d\u7f6e ",(0,t.jsx)(e.code,{children:"OPENAI_API_KEY"})," \u74b0\u5883\u8b8a\u6578\u7684\u539f\u56e0\u3002"]})]}),"\n",(0,t.jsxs)(e.h2,{id:"\u6e2c\u8a66-crontab",children:["\u6e2c\u8a66 ",(0,t.jsx)(e.code,{children:"crontab"})]}),"\n",(0,t.jsx)(e.p,{children:"\u90a3\u9ebc\u5b8c\u6210\u8a2d\u5b9a\u5f8c\uff0c\u8a72\u5982\u4f55\u6e2c\u8a66\u57fa\u65bc crontab \u74b0\u5883\u7684\u81ea\u52d5\u5316\u4efb\u52d9\u5462\uff1f"}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u500b\u53ef\u884c\u7684\u65b9\u6cd5\u662f\uff1a\u555f\u52d5\u4e00\u500b\u65b0\u7684\u7d42\u7aef\uff0c\u5254\u9664\u6240\u6709\u7684\u74b0\u5883\u8b8a\u6578\uff0c\u7136\u5f8c\u57f7\u884c\u7a0b\u5f0f\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"env -i HOME=$HOME OPENAI_API_KEY=your_openai_api_key /bin/bash --noprofile --norc\n\n# \u63a5\u8457\u57f7\u884c\u7a0b\u5f0f\n/path/to/your/script/update_targets_infos.sh\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5f9e\u9019\u500b\u7d42\u7aef\u57f7\u884c\u7a0b\u5f0f\uff0c\u4f60\u5c31\u53ef\u4ee5\u770b\u5230\u7a0b\u5f0f\u5728 crontab \u74b0\u5883\u4e0b\u7684\u57f7\u884c\u72c0\u6cc1\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>i});var t=o(96540);const r={},a=t.createContext(r);function s(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);