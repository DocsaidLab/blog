"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2987],{94391:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(74848),i=r(28453);const s={sidebar_position:7},a="\u6574\u5408 API \u529f\u80fd",d={id:"gmailsummary/integration",title:"\u6574\u5408 API \u529f\u80fd",description:"\u5728\u9019\u500b\u7ae0\u7bc0\uff0c\u6211\u5011\u5c07\u4ecb\u7d39\u5982\u4f55\u6574\u5408 GmailAPI \u548c OpenAI API\uff0c\u8b93\u9019\u5169\u500b\u529f\u80fd\u53ef\u4ee5\u4e00\u8d77\u904b\u4f5c\u3002",source:"@site/docs/gmailsummary/integration.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/integration",permalink:"/docs/gmailsummary/integration",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171491039e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"OpenAI API \u547c\u53eb",permalink:"/docs/gmailsummary/openaiapi_using"},next:{title:"\u4e32\u63a5\u6240\u6709\u529f\u80fd",permalink:"/docs/gmailsummary/update_infos"}},l={},c=[{value:"\u4e3b\u7a0b\u5f0f",id:"\u4e3b\u7a0b\u5f0f",level:2},{value:"\u4e3b\u7a0b\u5f0f\u4ecb\u7d39",id:"\u4e3b\u7a0b\u5f0f\u4ecb\u7d39",level:2},{value:"1. \u5c0e\u5165\u6a21\u7d44",id:"1-\u5c0e\u5165\u6a21\u7d44",level:3},{value:"2. \u751f\u6210\u5831\u544a",id:"2-\u751f\u6210\u5831\u544a",level:3},{value:"3. \u4e3b\u7a0b\u5f0f",id:"3-\u4e3b\u7a0b\u5f0f",level:3},{value:"4. \u547d\u4ee4\u884c\u53c3\u6578\u8655\u7406",id:"4-\u547d\u4ee4\u884c\u53c3\u6578\u8655\u7406",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u6574\u5408-api-\u529f\u80fd",children:"\u6574\u5408 API \u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u9019\u500b\u7ae0\u7bc0\uff0c\u6211\u5011\u5c07\u4ecb\u7d39\u5982\u4f55\u6574\u5408 GmailAPI \u548c OpenAI API\uff0c\u8b93\u9019\u5169\u500b\u529f\u80fd\u53ef\u4ee5\u4e00\u8d77\u904b\u4f5c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3b\u7a0b\u5f0f",children:"\u4e3b\u7a0b\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u5011\u5148\u4f86\u770b\u4e00\u4e0b\u4e3b\u7a0b\u5f0f\u7684\u67b6\u69cb\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from argparse import ArgumentParser\nfrom datetime import datetime, timedelta\n\nfrom gmail_api import build_service, get_messages, parse_message\nfrom openai_api import chatgpt_summary\nfrom tqdm import tqdm\n\n\ndef generate_markdown_report(input_text, project_name, date):\n    title = f"{project_name} \u66f4\u65b0\u5831\u544a - {date}"\n    markdown_text = input_text.replace(\'\\n\', \'\\n\\n\')\n    markdown_content = f"# {title}\\n\\n{markdown_text}"\n    file_name = f"{project_name}-update-{date}.md"\n    with open(file_name, "w", encoding="utf-8") as file:\n        file.write(markdown_content)\n    return file_name\n\n\ndef main(project_name, time_length):\n\n    current_date = datetime.now()\n    after_date = current_date - timedelta(days=time_length)\n    after_date = after_date.strftime(\'%Y/%m/%d\')\n\n    service = build_service()\n    messages = get_messages(\n        service,\n        after_date=after_date,\n        subject_filter=project_name\n    )\n\n    results = [\n        parse_message(service, msg[\'id\'])\n        for msg in tqdm(messages)\n    ]\n\n    # \u8abf\u7528 OpenAI API\n    summary = chatgpt_summary(results)\n    summary = f\'{summary}\\n\\n---\\n\\n\u4ee5\u4e0a\u5831\u544a\u7531 OpenAI GPT-3.5 Turbo \u6a21\u578b\u81ea\u52d5\u751f\u6210\u3002\'\n\n    # \u751f\u6210 Markdown \u5831\u544a\n    markdown_file = generate_markdown_report(\n        summary, project_name, current_date.strftime(\'%Y-%m-%d\'))\n    print(f"Markdown \u6587\u4ef6\u5df2\u751f\u6210: {markdown_file}")\n\n\nif __name__ == "__main__":\n    parser = ArgumentParser(description="Generate a project update report.")\n    parser.add_argument(\n        "--project_name",\n        type=str,\n        help="The name of the project to track.",\n        default="Albumentations"\n    )\n    parser.add_argument(\n        "--time_length",\n        type=int,\n        help="The time length (in days) to track updates.",\n        default=1\n    )\n\n    args = parser.parse_args()\n\n    main(args.project_name, args.time_length)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3b\u7a0b\u5f0f\u4ecb\u7d39",children:"\u4e3b\u7a0b\u5f0f\u4ecb\u7d39"}),"\n",(0,t.jsx)(n.h3,{id:"1-\u5c0e\u5165\u6a21\u7d44",children:"1. \u5c0e\u5165\u6a21\u7d44"}),"\n",(0,t.jsx)(n.p,{children:"\u7a0b\u5f0f\u958b\u982d\u5c0e\u5165\u4e86\u9700\u8981\u7684 Python \u6a21\u584a\u548c\u81ea\u5b9a\u7fa9\u7684\u51fd\u6578\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ArgumentParser"})," \u7528\u65bc\u89e3\u6790\u547d\u4ee4\u884c\u53c3\u6578\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"datetime"})," \u548c ",(0,t.jsx)(n.code,{children:"timedelta"})," \u7528\u65bc\u8655\u7406\u65e5\u671f\u548c\u6642\u9593\u8a08\u7b97\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"build_service"}),", ",(0,t.jsx)(n.code,{children:"get_messages"}),", ",(0,t.jsx)(n.code,{children:"parse_message"})," \u662f\u7528\u65bc\u8655\u7406 Gmail API \u7684\u76f8\u95dc\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chatgpt_summary"})," \u662f\u7528\u4f86\u8abf\u7528 OpenAI API \u751f\u6210\u90f5\u4ef6\u5167\u5bb9\u7684\u7e3d\u7d50\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-\u751f\u6210\u5831\u544a",children:"2. \u751f\u6210\u5831\u544a"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"generate_markdown_report"})," \u9019\u500b\u51fd\u6578\u8ca0\u8cac\u751f\u6210 Markdown \u683c\u5f0f\u7684\u5831\u544a\u6587\u4ef6\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u63a5\u6536 ",(0,t.jsx)(n.code,{children:"input_text"}),"\uff08\u90f5\u4ef6\u5167\u5bb9\u7684\u7e3d\u7d50\uff09\u3001",(0,t.jsx)(n.code,{children:"project_name"}),"\uff08\u5c08\u6848\u540d\u7a31\uff09\u548c ",(0,t.jsx)(n.code,{children:"date"}),"\uff08\u65e5\u671f\uff09\u4f5c\u70ba\u53c3\u6578\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5c07 ",(0,t.jsx)(n.code,{children:"input_text"})," \u4e2d\u7684\u63db\u884c\u7b26\u66ff\u63db\u70ba Markdown \u7684\u63db\u884c\u683c\u5f0f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u751f\u6210 Markdown \u6587\u4ef6\u7684\u6a19\u984c\u548c\u5167\u5bb9\uff0c\u7136\u5f8c\u5beb\u5165\u4e00\u500b\u4ee5\u5c08\u6848\u540d\u7a31\u548c\u65e5\u671f\u547d\u540d\u7684 ",(0,t.jsx)(n.code,{children:".md"})," \u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-\u4e3b\u7a0b\u5f0f",children:"3. \u4e3b\u7a0b\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3b\u7a0b\u5f0f\u57f7\u884c\u4ee5\u4e0b\u6b65\u9a5f\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8a2d\u5b9a\u7576\u524d\u65e5\u671f\u548c\u904e\u53bb\u65e5\u671f\uff08\u57fa\u65bc ",(0,t.jsx)(n.code,{children:"time_length"})," \u53c3\u6578\u8a08\u7b97\uff09\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u901a\u904e ",(0,t.jsx)(n.code,{children:"build_service"})," \u51fd\u6578\u69cb\u5efa Gmail API \u670d\u52d9\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8abf\u7528 ",(0,t.jsx)(n.code,{children:"get_messages"})," \u7372\u53d6\u6307\u5b9a\u65e5\u671f\u5f8c\u548c\u5305\u542b\u6307\u5b9a\u5c08\u6848\u540d\u7a31\u7684\u90f5\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"tqdm"})," \u9032\u5ea6\u689d\u986f\u793a\u90f5\u4ef6\u89e3\u6790\u9032\u5ea6\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u89e3\u6790\u6bcf\u500b\u90f5\u4ef6\u7684\u5167\u5bb9\u4e26\u5c07\u5176\u50b3\u9001\u5230 OpenAI API \u9032\u884c\u7e3d\u7d50\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5c07\u7e3d\u7d50\u7684\u5167\u5bb9\u6dfb\u52a0\u5230 Markdown \u6587\u4ef6\u4e26\u751f\u6210\u8a72\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-\u547d\u4ee4\u884c\u53c3\u6578\u8655\u7406",children:"4. \u547d\u4ee4\u884c\u53c3\u6578\u8655\u7406"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8f38\u5165\u5340\u584a\u4e2d\uff0c\u7a0b\u5f0f\u89e3\u6790\u5169\u500b\u547d\u4ee4\u884c\u53c3\u6578\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--project_name"}),'\uff1a\u7528\u6236\u6307\u5b9a\u7684\u5c08\u6848\u540d\u7a31\uff0c\u9ed8\u8a8d\u70ba "Albumentations"\u3002']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--time_length"}),"\uff1a\u8ddf\u8e2a\u66f4\u65b0\u7684\u6642\u9593\u9577\u5ea6\uff08\u5929\uff09\uff0c\u9ed8\u8a8d\u70ba 1 \u5929\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u9019\u4e9b\u53c3\u6578\u5141\u8a31\u7528\u6236\u5b9a\u5236\u5316\u751f\u6210\u5831\u544a\u7684\u5c08\u6848\u540d\u548c\u671f\u9593\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);