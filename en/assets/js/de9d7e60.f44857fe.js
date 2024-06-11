"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9371],{41109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const s={sidebar_position:8},o="Integrating All",a={id:"gmailsummary/update_infos",title:"Integrating All",description:"After going through the previous explanations, we've completed the development of all features. Now, we need to integrate these features to automate the entire system for future operations.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/gmailsummary/update_infos.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/update_infos",permalink:"/en/docs/gmailsummary/update_infos",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Integrating API",permalink:"/en/docs/gmailsummary/integration"},next:{title:"Scheduled",permalink:"/en/docs/gmailsummary/automation"}},l={},c=[{value:"Complete Workflow",id:"complete-workflow",level:2},{value:"Implementation Suggestions",id:"implementation-suggestions",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"integrating-all",children:"Integrating All"}),"\n",(0,i.jsx)(n.p,{children:"After going through the previous explanations, we've completed the development of all features. Now, we need to integrate these features to automate the entire system for future operations."}),"\n",(0,i.jsx)(n.h2,{id:"complete-workflow",children:"Complete Workflow"}),"\n",(0,i.jsxs)(n.p,{children:["We've written a bash script ",(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/GmailSummary/blob/main/update_targets_infos.sh",children:(0,i.jsx)(n.strong,{children:"update_targets_infos.sh"})})," to string together all the steps."]}),"\n",(0,i.jsx)(n.p,{children:"This script includes function calls and automatic pushing to GitHub."}),"\n",(0,i.jsx)(n.p,{children:"At this stage, we're tracking several projects, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"albumentations"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"onnxruntime"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"pytorch-lightning"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"BentoML"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"docusaurus"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We've also added some logging mechanisms for better tracking in the future."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Define directories and environment variables\norigin_dir="$HOME/workspace/GmailSummary"\ntarg_dir="$HOME/workspace/website"\npyenv_path="$HOME/.pyenv/versions/3.10.14/envs/main/bin/python"\nlog_dir="$origin_dir/logs"\ncurrent_date=$(date \'+%Y-%m-%d\')\nproject_path="$targ_dir/docs/gmailsummary/news/$current_date"\n\n# Create necessary directories\nmkdir -p "$log_dir" "$project_path"\n\ncd $origin_dir\n\n# Specify project names list\nproject_names=("albumentations" "onnxruntime" "pytorch-lightning" "BentoML" "docusaurus")\n\nfor project_name in "${project_names[@]}"; do\n    log_file="$log_dir/$project_name-log-$current_date.txt"\n    file_name="$project_name.md"\n\n    # Execute Python script and handle output\n    {\n        echo "Starting the script for $project_name at $(date)"\n        $pyenv_path main.py --project_name $project_name --time_length 1\n        mv "$origin_dir/$file_name" "$project_path"\n        git -C "$targ_dir" add "$project_path/$file_name"\n        echo "Script finished for $project_name at $(date)"\n    } >> "$log_file" 2>&1\n\n    # Check execution status\n    if [ $? -ne 0 ]; then\n        echo "An error occurred for $project_name, please check the log file $log_file." >> "$log_file"\n    fi\ndone\n\n# Push Git changes\ngit -C "$targ_dir" commit -m "[C] Update project report for $current_date"\ngit -C "$targ_dir" push\n'})}),"\n",(0,i.jsx)(n.h2,{id:"implementation-suggestions",children:"Implementation Suggestions"}),"\n",(0,i.jsx)(n.p,{children:"In this project, due to integrating APIs, the entire project is filled with credentials and keys. Hence, we have some suggestions:"}),"\n",(0,i.jsxs)(n.p,{children:["First and foremost, please, ",(0,i.jsx)(n.strong,{children:"do not hardcode your credentials and keys"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Doing so will lead to the exposure of your credentials and keys, compromising the security of your emails and data."}),"\n",(0,i.jsx)(n.p,{children:"Store these sensitive pieces of information securely and refrain from directly exposing them in any scenario."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ensure Security"}),": Handle your ",(0,i.jsx)(n.code,{children:"credentials.json"})," and API keys with care when dealing with Gmail API and OpenAI API."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The rest are minor suggestions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consider Email Diversity"}),": When filtering and parsing emails, consider different types of email formats and content to make the program adaptable to various situations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Regular Checkups and Maintenance"}),": While this is an automated solution, periodic checks of execution status and updating the program to adapt to possible API changes are still necessary."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);