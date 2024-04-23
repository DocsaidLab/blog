"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6861],{89146:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(74848),i=r(28453);const s={sidebar_position:8},o="\u4e32\u63a5\u6240\u6709\u529f\u80fd",a={id:"gmailsummary/update_infos",title:"\u4e32\u63a5\u6240\u6709\u529f\u80fd",description:"\u7d93\u904e\u524d\u9762\u7684\u8aaa\u660e\uff0c\u6211\u5011\u5df2\u7d93\u5b8c\u6210\u4e86\u6240\u6709\u529f\u80fd\u7684\u958b\u767c\uff0c\u73fe\u5728\u9700\u8981\u628a\u9019\u4e9b\u529f\u80fd\u4e32\u63a5\u8d77\u4f86\uff0c\u8b93\u6574\u500b\u7cfb\u7d71\u5728\u5f8c\u7e8c\u7684\u904b\u4f5c\u4e2d\u80fd\u5920\u81ea\u52d5\u5316\u57f7\u884c\u3002",source:"@site/docs/gmailsummary/update_infos.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/update_infos",permalink:"/gmailsummary/update_infos",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713882784e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6574\u5408 API \u529f\u80fd",permalink:"/gmailsummary/integration"},next:{title:"\u6392\u7a0b\u4efb\u52d9",permalink:"/gmailsummary/automation"}},l={},c=[{value:"\u5b8c\u6574\u6d41\u7a0b",id:"\u5b8c\u6574\u6d41\u7a0b",level:2},{value:"\u5be6\u4f5c\u5efa\u8b70",id:"\u5be6\u4f5c\u5efa\u8b70",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u4e32\u63a5\u6240\u6709\u529f\u80fd",children:"\u4e32\u63a5\u6240\u6709\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u7d93\u904e\u524d\u9762\u7684\u8aaa\u660e\uff0c\u6211\u5011\u5df2\u7d93\u5b8c\u6210\u4e86\u6240\u6709\u529f\u80fd\u7684\u958b\u767c\uff0c\u73fe\u5728\u9700\u8981\u628a\u9019\u4e9b\u529f\u80fd\u4e32\u63a5\u8d77\u4f86\uff0c\u8b93\u6574\u500b\u7cfb\u7d71\u5728\u5f8c\u7e8c\u7684\u904b\u4f5c\u4e2d\u80fd\u5920\u81ea\u52d5\u5316\u57f7\u884c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u5b8c\u6574\u6d41\u7a0b",children:"\u5b8c\u6574\u6d41\u7a0b"}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u5011\u64b0\u5beb\u4e00\u652f bash \u7a0b\u5f0f ",(0,t.jsx)(e.a,{href:"https://github.com/DocsaidLab/GmailSummary/blob/main/update_targets_infos.sh",children:(0,t.jsx)(e.strong,{children:"update_targets_infos.sh"})}),"\uff0c\u5c07\u6240\u6709\u7684\u6b65\u9a5f\u4e32\u63a5\u5728\u4e00\u8d77\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u4e2d\u5305\u62ec\u4e86\u51fd\u6578\u8abf\u7528\u9084\u6709\u81ea\u52d5\u63a8\u9001\u5230 GitHub \u7684\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u73fe\u968e\u6bb5\uff0c\u6211\u5011\u8ffd\u8e64\u4e86\u5e7e\u500b\u5c08\u6848\uff0c\u5305\u542b\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"albumentations"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"onnxruntime"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"pytorch-lightning"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"BentoML"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"docusaurus"})}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u904e\u7a0b\u4e2d\u4e5f\u52a0\u5165\u4e86\u4e00\u4e9b Log \u6a5f\u5236\uff0c\u4ee5\u4fbf\u65bc\u5f8c\u7e8c\u7684\u8ffd\u8e64\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n\n# \u5b9a\u7fa9\u76ee\u9304\u548c\u74b0\u5883\u8b8a\u91cf\norigin_dir="$HOME/workspace/GmailSummary"\ntarg_dir="$HOME/workspace/website"\npyenv_path="$HOME/.pyenv/versions/3.10.14/envs/main/bin/python"\nlog_dir="$origin_dir/logs"\ncurrent_date=$(date \'+%Y-%m-%d\')\nnews_dir="$targ_dir/docs/gmailsummary/news/$current_date"\n\n# \u5275\u5efa\u6240\u9700\u7684\u76ee\u9304\nmkdir -p "$log_dir" "$news_dir"\n\n# \u6307\u5b9a\u9805\u76ee\u540d\u7a31\u5217\u8868\nproject_names=("albumentations" "onnxruntime" "pytorch-lightning" "BentoML" "docusaurus")\n\nfor project_name in "${project_names[@]}"; do\n    log_file="$log_dir/$project_name-log-$current_date.txt"\n    project_path="$news_dir/$project_name"\n    file_name="$project_name.md"\n    mkdir -p "$project_path"\n\n    # \u57f7\u884c Python \u7a0b\u5f0f\u4e26\u8655\u7406\u8f38\u51fa\n    {\n        echo "Starting the script for $project_name at $(date)"\n        $pyenv_path main.py --project_name $project_name --time_length 1\n        mv "$origin_dir/$file_name" "$project_path"\n        git -C "$targ_dir" add "$project_path/$file_name"\n        echo "Script finished for $project_name at $(date)"\n    } >> "$log_file" 2>&1\n\n    # \u6aa2\u67e5\u57f7\u884c\u72c0\u614b\n    if [ $? -ne 0 ]; then\n        echo "An error occurred for $project_name, please check the log file $log_file." >> "$log_file"\n    fi\ndone\n\n# \u63a8\u9001 Git \u8b8a\u66f4\n{\n    git -C "$targ_dir" commit -m "[C] Update project report for $current_date"\n    git -C "$targ_dir" push\n} >> "$log_file" 2>&1\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u5be6\u4f5c\u5efa\u8b70",children:"\u5be6\u4f5c\u5efa\u8b70"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u9019\u500b\u5c08\u6848\u4e2d\uff0c\u70ba\u4e86\u4e32\u63a5 API \u800c\u4f7f\u6574\u500b\u5c08\u6848\u5145\u65a5\u8457\u6191\u8b49\u548c\u5bc6\u9470\uff0c\u56e0\u6b64\u6211\u5011\u6709\u4e9b\u5efa\u8b70\uff1a"}),"\n",(0,t.jsxs)(e.p,{children:["\u9996\u5148\uff0c\u4e0d\u7ba1\u600e\u6a23\uff0c\u62dc\u8a17\u4e0d\u8981\uff1a",(0,t.jsx)(e.strong,{children:"\u786c\u7de8\u78bc\u4f60\u7684\u6191\u8b49\u548c\u5bc6\u9470"}),"\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u9019\u6a23\u505a\u6703\u5c0e\u81f4\u4f60\u7684\u6191\u8b49\u548c\u5bc6\u9470\u6cc4\u9732\uff0c\u9032\u800c\u5c0e\u81f4\u4f60\u7684\u90f5\u4ef6\u548c\u6578\u64da\u4e0d\u518d\u5b89\u5168\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8acb\u5c07\u9019\u4e9b\u654f\u611f\u4fe1\u606f\u5b58\u5132\u5728\u5b89\u5168\u7684\u5730\u65b9\uff0c\u4e26\u4e14\u4e0d\u8981\u5c07\u5b83\u5011\u76f4\u63a5\u516c\u958b\u5728\u4efb\u4f55\u5834\u5408\u3002"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u78ba\u4fdd\u5b89\u5168\u6027"}),"\uff1a\u8655\u7406 Gmail API \u548c OpenAI API \u6642\uff0c\u8acb\u59a5\u5584\u4fdd\u7ba1\u4f60\u7684 ",(0,t.jsx)(e.code,{children:"credentials.json"})," \u548c API \u5bc6\u9470\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u4ed6\u5c31\u4e0d\u662f\u5f88\u91cd\u8981\u4e86\uff0c\u5c31\u662f\u4e00\u4e9b\u5c0f\u5efa\u8b70\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u8003\u616e\u90f5\u4ef6\u591a\u6a23\u6027"}),"\uff1a\u5728\u904e\u6ffe\u548c\u89e3\u6790\u90f5\u4ef6\u6642\uff0c\u8003\u616e\u5230\u4e0d\u540c\u985e\u578b\u7684\u90f5\u4ef6\u683c\u5f0f\u548c\u5167\u5bb9\uff0c\u4f7f\u7a0b\u5f0f\u80fd\u5920\u9748\u6d3b\u61c9\u5c0d\u5404\u7a2e\u60c5\u6cc1\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u5b9a\u671f\u6aa2\u67e5\u8207\u7dad\u8b77"}),"\uff1a\u96d6\u7136\u9019\u662f\u4e00\u500b\u81ea\u52d5\u5316\u65b9\u6848\uff0c\u4f46\u5b9a\u671f\u6aa2\u67e5\u57f7\u884c\u72c0\u6cc1\u548c\u66f4\u65b0\u7a0b\u5f0f\u4ee5\u9069\u61c9\u53ef\u80fd\u7684 API \u8b8a\u66f4\u4ecd\u7136\u662f\u5fc5\u8981\u7684\u3002"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);