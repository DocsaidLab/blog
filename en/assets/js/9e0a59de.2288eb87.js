"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15095],{90342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(74848),i=t(28453);const a={sidebar_position:7},s="Integrating API",o={id:"gmailsummary/integration",title:"Integrating API",description:"In this section, we'll discuss how to integrate the Gmail API and the OpenAI API to make these two functionalities work together.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/gmailsummary/integration.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/integration",permalink:"/en/docs/gmailsummary/integration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"OpenAI API Calls",permalink:"/en/docs/gmailsummary/openaiapi_using"},next:{title:"Integrating All",permalink:"/en/docs/gmailsummary/update_infos"}},d={},l=[{value:"Main Program",id:"main-program",level:2},{value:"Introduction to the Main Program",id:"introduction-to-the-main-program",level:2},{value:"1. Importing Modules",id:"1-importing-modules",level:3},{value:"2. Generating Reports",id:"2-generating-reports",level:3},{value:"3. Main Program",id:"3-main-program",level:3},{value:"4. Command-Line Argument Handling",id:"4-command-line-argument-handling",level:3}];function m(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"integrating-api",children:"Integrating API"}),"\n",(0,r.jsx)(n.p,{children:"In this section, we'll discuss how to integrate the Gmail API and the OpenAI API to make these two functionalities work together."}),"\n",(0,r.jsx)(n.h2,{id:"main-program",children:"Main Program"}),"\n",(0,r.jsx)(n.p,{children:"Let's first take a look at the structure of the main program:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from argparse import ArgumentParser\nfrom datetime import datetime, timedelta\n\nfrom gmail_api import build_service, get_messages, parse_message\nfrom openai_api import chatgpt_summary\nfrom tqdm import tqdm\n\n\ndef generate_markdown_report(input_text, project_name, date):\n    title = f"{project_name} Update Report - {date}"\n    markdown_text = input_text.replace(\'\\n\', \'\\n\\n\')\n    markdown_content = f"# {title}\\n\\n{markdown_text}"\n    file_name = f"{project_name}-update-{date}.md"\n    with open(file_name, "w", encoding="utf-8") as file:\n        file.write(markdown_content)\n    return file_name\n\n\ndef main(project_name, time_length):\n\n    current_date = datetime.now()\n    after_date = current_date - timedelta(days=time_length)\n    after_date = after_date.strftime(\'%Y/%m/%d\')\n\n    service = build_service()\n    messages = get_messages(\n        service,\n        after_date=after_date,\n        subject_filter=project_name\n    )\n\n    results = [\n        parse_message(service, msg[\'id\'])\n        for msg in tqdm(messages)\n    ]\n\n    # Call OpenAI API\n    summary = chatgpt_summary(results)\n    summary = f\'{summary}\\n\\n---\\n\\nThe above report was automatically generated by OpenAI GPT-3.5 Turbo model.\'\n\n    # Generate Markdown report\n    markdown_file = generate_markdown_report(\n        summary, project_name, current_date.strftime(\'%Y-%m-%d\'))\n    print(f"Markdown file generated: {markdown_file}")\n\n\nif __name__ == "__main__":\n    parser = ArgumentParser(description="Generate a project update report.")\n    parser.add_argument(\n        "--project_name",\n        type=str,\n        help="The name of the project to track.",\n        default="Albumentations"\n    )\n    parser.add_argument(\n        "--time_length",\n        type=int,\n        help="The time length (in days) to track updates.",\n        default=1\n    )\n\n    args = parser.parse_args()\n\n    main(args.project_name, args.time_length)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"introduction-to-the-main-program",children:"Introduction to the Main Program"}),"\n",(0,r.jsx)(n.h3,{id:"1-importing-modules",children:"1. Importing Modules"}),"\n",(0,r.jsx)(n.p,{children:"At the beginning of the program, necessary Python modules and custom functions are imported:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ArgumentParser"})," for parsing command-line arguments."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"datetime"})," and ",(0,r.jsx)(n.code,{children:"timedelta"})," for handling date and time calculations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"build_service"}),", ",(0,r.jsx)(n.code,{children:"get_messages"}),", ",(0,r.jsx)(n.code,{children:"parse_message"})," for handling Gmail API operations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chatgpt_summary"})," for invoking the OpenAI API to generate summaries of email contents."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tqdm"})," for displaying progress bars."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-generating-reports",children:"2. Generating Reports"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"generate_markdown_report"})," function is responsible for generating Markdown-formatted report files:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["It takes ",(0,r.jsx)(n.code,{children:"input_text"})," (summary of email content), ",(0,r.jsx)(n.code,{children:"project_name"})," (name of the project), and ",(0,r.jsx)(n.code,{children:"date"})," as parameters."]}),"\n",(0,r.jsxs)(n.li,{children:["It replaces newline characters in ",(0,r.jsx)(n.code,{children:"input_text"})," with Markdown line breaks."]}),"\n",(0,r.jsxs)(n.li,{children:["It generates the title and content of the Markdown file, then writes it to a ",(0,r.jsx)(n.code,{children:".md"})," file named based on the project name and date."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-main-program",children:"3. Main Program"}),"\n",(0,r.jsx)(n.p,{children:"The main program executes the following steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sets the current date and past date (calculated based on the ",(0,r.jsx)(n.code,{children:"time_length"})," parameter)."]}),"\n",(0,r.jsxs)(n.li,{children:["Builds the Gmail API service using the ",(0,r.jsx)(n.code,{children:"build_service"})," function."]}),"\n",(0,r.jsxs)(n.li,{children:["Calls ",(0,r.jsx)(n.code,{children:"get_messages"})," to retrieve emails containing the specified project name since the specified date."]}),"\n",(0,r.jsxs)(n.li,{children:["Uses ",(0,r.jsx)(n.code,{children:"tqdm"})," to display a progress bar for email parsing."]}),"\n",(0,r.jsx)(n.li,{children:"Parses the content of each email and sends it to the OpenAI API for summarization."}),"\n",(0,r.jsx)(n.li,{children:"Adds the summary content to a Markdown file and generates that file."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-command-line-argument-handling",children:"4. Command-Line Argument Handling"}),"\n",(0,r.jsx)(n.p,{children:"In the input section, the program parses two command-line arguments:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--project_name"}),': The name of the project specified by the user, defaulting to "Albumentations".']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--time_length"}),": The length of time (in days) to track updates, defaulting to 1 day."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These parameters allow users to customize the project name and duration for generating reports."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);