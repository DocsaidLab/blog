"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4562],{27900:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453);const i={sidebar_position:6},r="OpenAI API \u547c\u53eb",a={id:"gmailsummary/openaiapi_using",title:"OpenAI API \u547c\u53eb",description:"OpenAI \u7684 API \u63d0\u4f9b\u4e86\u8a31\u591a\u529f\u80fd\uff0c\u6211\u5011\u9019\u6b21\u4f7f\u7528\u7684\u529f\u80fd\u662f\u300cText generation models\u300d\uff0c\u9019\u500b\u529f\u80fd\u53ef\u4ee5\u8b93\u6211\u5011\u8f38\u5165\u4e00\u6bb5\u6587\u5b57\uff0c\u7136\u5f8c\u6a21\u578b\u6703\u6839\u64da\u9019\u6bb5\u6587\u5b57\u7e7c\u7e8c\u5beb\u4e0b\u53bb\u3002",source:"@site/docs/gmailsummary/openaiapi_using.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/openaiapi_using",permalink:"/docs/gmailsummary/openaiapi_using",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714687486e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"OpenAI API \u555f\u7528",permalink:"/docs/gmailsummary/openaiapi_login"},next:{title:"\u6574\u5408 API \u529f\u80fd",permalink:"/docs/gmailsummary/integration"}},p={},l=[{value:"\u5b89\u88dd\u5957\u4ef6",id:"\u5b89\u88dd\u5957\u4ef6",level:2},{value:"\u4f7f\u7528 API",id:"\u4f7f\u7528-api",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"openai-api-\u547c\u53eb",children:"OpenAI API \u547c\u53eb"}),"\n",(0,s.jsx)(e.p,{children:"OpenAI \u7684 API \u63d0\u4f9b\u4e86\u8a31\u591a\u529f\u80fd\uff0c\u6211\u5011\u9019\u6b21\u4f7f\u7528\u7684\u529f\u80fd\u662f\u300cText generation models\u300d\uff0c\u9019\u500b\u529f\u80fd\u53ef\u4ee5\u8b93\u6211\u5011\u8f38\u5165\u4e00\u6bb5\u6587\u5b57\uff0c\u7136\u5f8c\u6a21\u578b\u6703\u6839\u64da\u9019\u6bb5\u6587\u5b57\u7e7c\u7e8c\u5beb\u4e0b\u53bb\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u6211\u5011\u7c21\u55ae\u4ecb\u7d39\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 OpenAI API\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5b89\u88dd\u5957\u4ef6",children:"\u5b89\u88dd\u5957\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u9996\u5148\uff0c\u6211\u5011\u9700\u8981\u5b89\u88dd ",(0,s.jsx)(e.code,{children:"openai"})," \u5957\u4ef6\uff0c\u5426\u5247\u4e0d\u80fd\u7528\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pip install openai\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528-api",children:"\u4f7f\u7528 API"}),"\n",(0,s.jsx)(e.p,{children:"\u63a5\u8457\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u958b\u59cb\u4f7f\u7528 API \u4e86\uff0c\u5148\u770b\u4e00\u4e0b OpenAI API \u7684\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'# An example from OpenAI\nfrom openai import OpenAI\nclient = OpenAI(api_key="YOUR_API_KEY")\n\ncompletion = client.chat.completions.create(\nmodel="gpt-3.5-turbo",\nmessages=[\n    {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},\n    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}\n]\n)\n\nprint(completion.choices[0].message)\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u5011\u53c3\u8003 OpenAI \u63d0\u4f9b\u7684\u7bc4\u4f8b\uff0c\u628a\u5b83\u4fee\u6539\u6210\u4e86\u4e00\u500b\u66f4\u9069\u5408\u6211\u5011\u9700\u6c42\u7684\u7248\u672c\uff1a",(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/GmailSummary/blob/main/openai_api.py",children:(0,s.jsx)(e.strong,{children:"openai_api.py"})})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'import json\nimport os\nfrom typing import Dict, List\n\nimport tiktoken\nfrom openai import OpenAI\n\n\ndef chatgpt_summary(results: List[Dict[str, str]], model: str = \'gpt-3.5-turbo\') -> str:\n\n    # Setting `OPENAI_API_KEY` environment variable is required\n    client = OpenAI(api_key=os.environ[\'OPENAI_API_KEY\'])\n\n    prompt = \'\'\'\n        \u6839\u64da\u6536\u5230\u7684\u96fb\u5b50\u90f5\u4ef6\u5167\u5bb9\uff0c\u9019\u4e9b\u662f\u4f86\u81eagmail api\u7684\u89e3\u6790\u5167\u5bb9\uff0c\u8acb\u4f60\u9032\u884c\u95dc\u9375\u8a0a\u606f\u63d0\u53d6\uff0c\n        \u5305\u62ec\u4f46\u4e0d\u9650\u65bc\u932f\u8aa4\u4fee\u5fa9\u3001\u529f\u80fd\u589e\u52a0\u3001\u8a0e\u8ad6\u7684\u8b70\u984c\u4ee5\u53ca\u4efb\u4f55\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230\uff0c\u8acb\u8a73\u7d30\u63cf\u8ff0\u4f60\u8a8d\u70ba\u91cd\u8981\u7684\u5167\u5bb9\u3002\n    \'\'\'\n\n    prompt_final = \'\'\'\n        \u91dd\u5c0d\u524d\u9762\u6240\u6709\u5167\u5bb9\u9032\u884c\u68b3\u7406\u548c\u7e3d\u7d50\uff0c\u627e\u5230\u95dc\u9375\u7684\u6587\u5b57\u6558\u8ff0\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u65bc\u932f\u8aa4\u4fee\u5fa9\u3001\u529f\u80fd\u589e\u52a0\u3001\n        \u8a0e\u8ad6\u7684\u8b70\u984c\u4ee5\u53ca\u4efb\u4f55\u7279\u5225\u63d0\u5230\u7684\u6210\u5c31\u6216\u6311\u6230\uff0c\u8acb\u8a73\u7d30\u63cf\u8ff0\u4f60\u8a8d\u70ba\u91cd\u8981\u7684\u5167\u5bb9\u3002\n        \u6700\u5f8c\uff0c\u8003\u616e\u5230\u5167\u5bb9\u53ef\u80fd\u6709\u4e00\u4e9b\u5c08\u6709\u540d\u8a5e\uff0c\u8acb\u4f60\u984d\u5916\u7684\u88dc\u5145\u76f8\u5c0d\u61c9\u7684\u89e3\u91cb\u548c\u5ef6\u4f38\u8aaa\u660e\u3002\n        \u8acb\u7528\u7e41\u9ad4\u4e2d\u6587\u64b0\u5beb\u6587\u7ae0\u4e14\u5118\u53ef\u80fd\u95e1\u8ff0\u8a73\u7d30\u7684\u5167\u5bb9\uff0c\u8b80\u8005\u662f\u8a72\u9818\u57df\u7684\u5c08\u5bb6\uff0c\n        \u56e0\u6b64\u5beb\u6587\u7ae0\u6642\u8acb\u4f60\u53ef\u4ee5\u591a\u63cf\u8ff0\u4e00\u4e9b\u76f8\u95dc\u7684\u5de5\u7a0b\u7d30\u7bc0\uff0c\u8acb\u4f7f\u7528\u5206\u6bb5\u8aaa\u660e\u548c\u4fdd\u6301\u6558\u8ff0\u7684\u5b8c\u6574\u6027\u3002\n    \'\'\'\n\n    # \u5206\u6bb5\uff0c\u6bcf 20 \u500b\u5167\u5bb9\u5206\u4e00\u6bb5\n    results_seg = [results[i:i + 20] for i in range(0, len(results), 20)]\n\n    responses = []\n    enc = tiktoken.encoding_for_model("gpt-3.5-turbo")\n    for i, seg in enumerate(results_seg):\n        content = json.dumps(seg)\n\n        # \u4f30\u8a08 token\n        tokens = enc.encode(content)\n        print(f\'Segment {i}: Length of tokens: {len(tokens)}\')\n\n        if len(tokens) > 16000:\n            continue\n\n        response = client.chat.completions.create(\n            model=model,\n            messages=[\n                {"role": "system", "content": "You are a helpful assistant."},\n                {"role": "user", "content": f"{content}\\n\\n{prompt}"},\n            ],\n            temperature=0.2,\n        ).choices[0].message.content\n\n        responses.append(response)\n\n    # \u5f59\u6574\u5206\u6bb5\u7d50\u679c\n    all_content = \'\\n\\n\'.join(responses)\n    tokens = enc.encode(all_content)\n    print(\n        f\'Summary all segments, length of tokens: {len(tokens)}...\', end=\' \', flush=True)\n\n    summary = client.chat.completions.create(\n        model=model,\n        messages=[\n            {"role": "system", "content": "You are a helpful assistant."},\n            {"role": "user", "content": f"{all_content}\\n\\n{prompt_final}"},\n        ],\n        temperature=0.2,\n    ).choices[0].message.content\n    print(\'Done.\')\n\n    return summary\n'})})]})}function m(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);