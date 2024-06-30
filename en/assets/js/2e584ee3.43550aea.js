"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3942],{17773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=t(74848),s=t(28453);const o={sidebar_position:6},a="OpenAI API Calls",r={id:"gmailsummary/openaiapi_using",title:"OpenAI API Calls",description:'The OpenAI API offers a variety of functionalities, and for this project, we\'ll be using the "Text generation models" feature. This feature allows us to input a piece of text, and the model will continue writing based on that input.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/gmailsummary/openaiapi_using.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/openaiapi_using",permalink:"/en/docs/gmailsummary/openaiapi_using",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171972391e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"OpenAI API Activation",permalink:"/en/docs/gmailsummary/openaiapi_login"},next:{title:"Integrating API",permalink:"/en/docs/gmailsummary/integration"}},l={},p=[{value:"Installing the Package",id:"installing-the-package",level:2},{value:"Using the API",id:"using-the-api",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"openai-api-calls",children:"OpenAI API Calls"}),"\n",(0,i.jsx)(n.p,{children:'The OpenAI API offers a variety of functionalities, and for this project, we\'ll be using the "Text generation models" feature. This feature allows us to input a piece of text, and the model will continue writing based on that input.'}),"\n",(0,i.jsx)(n.p,{children:"Let's briefly go over how to use the OpenAI API."}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-package",children:"Installing the Package"}),"\n",(0,i.jsxs)(n.p,{children:["First, we need to install the ",(0,i.jsx)(n.code,{children:"openai"})," package to use the API."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install openai\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-the-api",children:"Using the API"}),"\n",(0,i.jsx)(n.p,{children:"Next, we can start using the API. Let's take a look at the usage example provided by OpenAI:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# An example from OpenAI\nfrom openai import OpenAI\nclient = OpenAI(api_key="YOUR_API_KEY")\n\ncompletion = client.chat.completions.create(\n    model="gpt-3.5-turbo",\n    messages=[\n        {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},\n        {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}\n    ]\n)\n\nprint(completion.choices[0].message)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We've adapted the provided example to a version that suits our needs better. You can find it in ",(0,i.jsx)(n.a,{href:"https://github.com/DocsaidLab/GmailSummary/blob/main/openai_api.py",children:(0,i.jsx)(n.strong,{children:"openai_api.py"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import json\nimport os\nfrom typing import Dict, List\n\nimport tiktoken\nfrom openai import OpenAI\n\n\ndef chatgpt_summary(results: List[Dict[str, str]], model: str = \'gpt-3.5-turbo\') -> str:\n\n    # Setting `OPENAI_API_KEY` environment variable is required\n    client = OpenAI(api_key=os.environ[\'OPENAI_API_KEY\'])\n\n    prompt = \'\'\'\n        Based on the parsed content from emails received,\n        please extract key information,\n        including but not limited to bug fixes, feature additions,\n        discussion topics, and any notable achievements or challenges mentioned.\n        Please provide detailed descriptions of what you consider important.\n    \'\'\'\n\n    prompt_final = \'\'\'\n        Summarize and consolidate all the content from earlier.\n        Identify key textual descriptions, including but not limited to bug fixes,\n        feature additions, discussion topics, and any notable achievements or\n        challenges mentioned. Please provide detailed descriptions\n        of what you consider important. Additionally,\n        considering there may be some proprietary terms in the content,\n        please provide corresponding explanations and elaborations.\n        Write the article in Traditional Chinese and elaborate on relevant\n        engineering details as much as possible.\n        Assume the readers are experts in the field, so feel free to describe\n        additional engineering details.\n        Please use paragraph descriptions and maintain narrative integrity.\n    \'\'\'\n\n    # Segmentation: every 20 contents form one segment\n    results_seg = [results[i:i + 20] for i in range(0, len(results), 20)]\n\n    responses = []\n    enc = tiktoken.encoding_for_model("gpt-3.5-turbo")\n    for i, seg in enumerate(results_seg):\n        content = json.dumps(seg)\n\n        # Estimate tokens\n        tokens = enc.encode(content)\n        print(f\'Segment {i}: Length of tokens: {len(tokens)}\')\n\n        if len(tokens) > 16000:\n            continue\n\n        response = client.chat.completions.create(\n            model=model,\n            messages=[\n                {"role": "system", "content": "You are a helpful assistant."},\n                {"role": "user", "content": f"{content}\\n\\n{prompt}"},\n            ],\n            temperature=0.2,\n        ).choices[0].message.content\n\n        responses.append(response)\n\n    # Aggregate segment results\n    all_content = \'\\n\\n\'.join(responses)\n    tokens = enc.encode(all_content)\n    print(\n        f\'Summary all segments, length of tokens: {len(tokens)}...\',\n        end=\' \', flush=True\n    )\n\n    summary = client.chat.completions.create(\n        model=model,\n        messages=[\n            {"role": "system", "content": "You are a helpful assistant."},\n            {"role": "user", "content": f"{all_content}\\n\\n{prompt_final}"},\n        ],\n        temperature=0.2,\n    ).choices[0].message.content\n    print(\'Done.\')\n\n    return summary\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);