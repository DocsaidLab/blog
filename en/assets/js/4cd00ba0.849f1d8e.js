"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7641],{88212:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(74848),t=s(28453);const i={sidebar_position:4},a="Gmail API \u547c\u53eb",l={id:"gmailsummary/gmailapi_using",title:"Gmail API \u547c\u53eb",description:"\u5b8c\u6210\u8a2d\u5b9a\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u958b\u59cb\u4f7f\u7528 GmailAPI \u4e86\u3002",source:"@site/docs/gmailsummary/gmailapi_using.md",sourceDirName:"gmailsummary",slug:"/gmailsummary/gmailapi_using",permalink:"/en/gmailsummary/gmailapi_using",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713882784e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Gmail API \u6191\u8b49",permalink:"/en/gmailsummary/gmailapi_credentials"},next:{title:"OpenAI API \u555f\u7528",permalink:"/en/gmailsummary/openaiapi_login"}},o={},d=[{value:"\u5b89\u88dd\u5957\u4ef6",id:"\u5b89\u88dd\u5957\u4ef6",level:2},{value:"\u914d\u7f6e\u7bc4\u4f8b",id:"\u914d\u7f6e\u7bc4\u4f8b",level:2},{value:"\u57f7\u884c\u7bc4\u4f8b",id:"\u57f7\u884c\u7bc4\u4f8b",level:2},{value:"\u958b\u59cb\u4f7f\u7528",id:"\u958b\u59cb\u4f7f\u7528",level:2},{value:"\u5275\u5efa\u5ba2\u6236\u7aef",id:"\u5275\u5efa\u5ba2\u6236\u7aef",level:3},{value:"\u53d6\u5f97\u90f5\u4ef6",id:"\u53d6\u5f97\u90f5\u4ef6",level:3},{value:"\u89e3\u6790\u90f5\u4ef6",id:"\u89e3\u6790\u90f5\u4ef6",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"gmail-api-\u547c\u53eb",children:"Gmail API \u547c\u53eb"}),"\n",(0,r.jsx)(n.p,{children:"\u5b8c\u6210\u8a2d\u5b9a\u5f8c\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u958b\u59cb\u4f7f\u7528 GmailAPI \u4e86\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5148\u627e\u5230\u4f60\u525b\u624d\u4e0b\u8f09\u7684 ",(0,r.jsx)(n.code,{children:"credentials.json"})," \u6a94\u6848\uff0c\u7136\u5f8c\u5c07\u5b83\u653e\u5728\u5c08\u6848\u7684\u6839\u76ee\u9304\u4e0b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u8457\uff0c\u6211\u5011\u6253\u958b Google \u63d0\u4f9b\u7684\u6559\u5b78\u6587\u4ef6\uff1a",(0,r.jsx)(n.a,{href:"https://developers.google.com/gmail/api/quickstart/python",children:(0,r.jsx)(n.strong,{children:"Python quickstart"})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b89\u88dd\u5957\u4ef6",children:"\u5b89\u88dd\u5957\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u5fc5\u9808\u8981\u5b89\u88dd\u9069\u7528\u65bc Python \u7684 Google \u7528\u6236\u7aef\u7a0b\u5f0f\u5eab\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install -U google-api-python-client google-auth-httplib2 google-auth-oauthlib\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u7bc4\u4f8b",children:"\u914d\u7f6e\u7bc4\u4f8b"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728\u4f60\u7684\u5de5\u4f5c\u76ee\u9304\u4e2d\uff0c\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,r.jsx)(n.code,{children:"quickstart.py"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53ef\u4ee5\u76f4\u63a5\u53c3\u8003 Google \u63d0\u4f9b\u7684\u539f\u59cb\u78bc\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/googleworkspace/python-samples/blob/main/gmail/quickstart/quickstart.py",children:(0,r.jsx)(n.strong,{children:"source code"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5c07\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u5305\u542b\u5728 ",(0,r.jsx)(n.code,{children:"quickstart.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="quickstart.py"',children:'import os.path\n\nfrom google.auth.transport.requests import Request\nfrom google.oauth2.credentials import Credentials\nfrom google_auth_oauthlib.flow import InstalledAppFlow\nfrom googleapiclient.discovery import build\nfrom googleapiclient.errors import HttpError\n\n# If modifying these scopes, delete the file token.json.\nSCOPES = ["https://www.googleapis.com/auth/gmail.readonly"]\n\n\ndef main():\n"""Shows basic usage of the Gmail API. Lists the user\'s Gmail labels."""\ncreds = None\n# The file token.json stores the user\'s access and refresh tokens, and is\n# created automatically when the authorization flow completes for the first\n# time.\nif os.path.exists("token.json"):\n    creds = Credentials.from_authorized_user_file("token.json", SCOPES)\n# If there are no (valid) credentials available, let the user log in.\nif not creds or not creds.valid:\n    if creds and creds.expired and creds.refresh_token:\n        creds.refresh(Request())\n    else:\n        flow = InstalledAppFlow.from_client_secrets_file(\n            "credentials.json", SCOPES\n        )\n        creds = flow.run_local_server(port=0)\n    # Save the credentials for the next run\n    with open("token.json", "w") as token:\n        token.write(creds.to_json())\n\ntry:\n    # Call the Gmail API\n    service = build("gmail", "v1", credentials=creds)\n    results = service.users().labels().list(userId="me").execute()\n    labels = results.get("labels", [])\n\n    if not labels:\n        print("No labels found.")\n        return\n    print("Labels:")\n    for label in labels:\n        print(label["name"])\n\nexcept HttpError as error:\n    # TODO(developer) - Handle errors from gmail API.\n    print(f"An error occurred: {error}")\n\nif __name__ == "__main__":\n    main()\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57f7\u884c\u7bc4\u4f8b",children:"\u57f7\u884c\u7bc4\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u57f7\u884c ",(0,r.jsx)(n.code,{children:"quickstart.py"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python quickstart.py\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7576\u4f60\u7b2c\u4e00\u6b21\u57f7\u884c ",(0,r.jsx)(n.code,{children:"quickstart.py"})," \u6642\uff0c\u5b83\u6703\u8981\u6c42\u4f60\u9032\u884c\u6388\u6b0a\u3002\u8acb\u9ede\u64ca\u300cAllow\u300d\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"gmail_19",src:s(63701).A+"",width:"2814",height:"4294"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u5c07\u770b\u5230\u4e00\u500b\u985e\u4f3c\u65bc\u4ee5\u4e0b\u7684\u8f38\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Labels:\nCHAT\nSENT\nINBOX\nIMPORTANT\nTRASH\nDRAFT\nSPAM\nCATEGORY_FORUMS\nCATEGORY_UPDATES\nCATEGORY_PERSONAL\nCATEGORY_PROMOTIONS\nCATEGORY_SOCIAL\nSTARRED\nUNREAD\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u6642\uff0c\u6703\u53d6\u56de\u4e00\u500b ",(0,r.jsx)(n.code,{children:"token.json"})," \u6a94\u6848\uff0c\u9019\u500b\u6a94\u6848\u5c07\u7528\u65bc\u4e0b\u6b21\u57f7\u884c ",(0,r.jsx)(n.code,{children:"quickstart.py"})," \u6642\uff0c\u4e0d\u518d\u9700\u8981\u9032\u884c\u6388\u6b0a\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u958b\u59cb\u4f7f\u7528",children:"\u958b\u59cb\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u4e0b\u4f86\uff0c\u6211\u5011\u5c07\u958b\u59cb\u4f7f\u7528 GmailAPI \u4f86\u89e3\u6790\u90f5\u4ef6\u5167\u5bb9\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5011\u5be6\u4f5c\u4e86\u4e09\u500b\u90e8\u5206\uff0c\u5206\u5225\u662f\uff1a\u5275\u5efa\u5ba2\u6236\u7aef\u3001\u53d6\u5f97\u90f5\u4ef6\u548c\u90f5\u4ef6\u89e3\u6790\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5148\u5f15\u5165\u9700\u8981\u7684\u5957\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from base64 import urlsafe_b64decode\nfrom datetime import datetime, timedelta\nfrom typing import Dict, List\n\nimport pytz\nfrom google.oauth2.credentials import Credentials\nfrom googleapiclient.discovery import build\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5275\u5efa\u5ba2\u6236\u7aef",children:"\u5275\u5efa\u5ba2\u6236\u7aef"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5efa\u7acb GmailAPI \u7684\u5ba2\u6236\u7aef\u6642\uff0c\u6703\u8f09\u5165 ",(0,r.jsx)(n.code,{children:"token.json"})," \u5b58\u5132\u4e86\u7528\u6236\u7684\u8a2a\u554f\u4ee4\u724c\u548c\u5237\u65b0\u4ee4\u724c\uff0c\u4e26\u5728\u8a2a\u554f\u4ee4\u724c\u5230\u671f\u6642\u81ea\u52d5\u5237\u65b0\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def build_service():\n    creds = None\n    token_file = 'token.json'\n    creds = Credentials.from_authorized_user_file(\n        token_file, scopes=['https://www.googleapis.com/auth/gmail.readonly'])\n    service = build('gmail', 'v1', credentials=creds)\n    return service\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u53d6\u5f97\u90f5\u4ef6",children:"\u53d6\u5f97\u90f5\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u4e0b\u4f86\uff0c\u6211\u5011\u5148\u5b9a\u7fa9\u4e00\u500b\u51fd\u6578\uff0c\u7528\u4f86\u5f9e\u5ba2\u6236\u7aef\u53d6\u5f97\u90f5\u4ef6\u5167\u5bb9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def get_messages(\n    service,\n    user_id='me',\n    after_date=None,\n    subject_filter: str = None,\n    max_results: int = 500\n) -> List[Dict[str, str]]:\n\n    tz = pytz.timezone('Asia/Taipei')\n    if not after_date:\n        now = datetime.now(tz)\n        after_date = (now - timedelta(days=1)).strftime('%Y/%m/%d')\n\n    messages = []\n    try:\n        query = ''\n        if after_date:\n            query += f' after:{after_date}'\n        if subject_filter:\n            query += f' subject:(\"{subject_filter}\")'\n\n        response = service.users().messages().list(\n            userId=user_id, q=query, maxResults=max_results).execute()\n\n        messages.extend(response.get('messages', []))\n\n        # Handle pagination with nextPageToken\n        while 'nextPageToken' in response:\n            page_token = response['nextPageToken']\n            response = service.users().messages().list(\n                userId=user_id, q=query, maxResults=max_results, pageToken=page_token).execute()\n            messages.extend(response.get('messages', []))\n\n    except Exception as error:\n        print(f'An error occurred: {error}')\n\n    if not messages:\n        print(\"No messages found.\")\n\n    return messages\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u6790\u90f5\u4ef6",children:"\u89e3\u6790\u90f5\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u53d6\u56de\u8cc7\u6599\u5f8c\uff0c\u5167\u5bb9\u5b58\u5728\u5927\u91cf\u7684 metadata\uff0c\u6211\u5011\u9700\u8981\u5c07\u5b83\u89e3\u6790\u6210\u6613\u8b80\u7684\u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def parse_message(service, msg_id, user_id='me'):\n\n    try:\n        message = service.users().messages().get(\n            userId=user_id, id=msg_id, format='full').execute()\n        headers = message['payload']['headers']\n        parts = message['payload'].get('parts', [])\n        email_data = {\n            'Date': None,\n            'Subject': None,\n            'Text': None\n        }\n\n        # \u89e3\u6790\u982d\u4fe1\u606f\u4ee5\u7372\u53d6\u5bc4\u4ef6\u6642\u9593\u3001\u4e3b\u65e8\u3001\u5bc4\u4ef6\u8005\u548c\u6536\u4ef6\u8005\n        for header in headers:\n            if header['name'] == 'Date':\n                email_data['Date'] = header['value']\n            elif header['name'] == 'Subject':\n                email_data['Subject'] = header['value']\n\n        # \u89e3\u6790\u90f5\u4ef6\u6b63\u6587\n        for part in parts:\n            if part['mimeType'] == 'text/plain' or part['mimeType'] == 'text/html':\n                data = part['body']['data']\n                text = urlsafe_b64decode(data.encode('ASCII')).decode('UTF-8')\n                email_data['Text'] = text\n                break  # \u53ea\u53d6\u7b2c\u4e00\u500b\u7b26\u5408\u689d\u4ef6\u7684\u90e8\u5206\n\n        return email_data\n\n    except Exception as error:\n        print(f'An error occurred: {error}')\n        return None\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5c0f\u7d50",children:"\u5c0f\u7d50"}),"\n",(0,r.jsx)(n.p,{children:"\u5230\u9019\u908a\uff0c\u6211\u5011\u5df2\u7d93\u628a GmailAPI \u7684\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5\u4ecb\u7d39\u5b8c\u7562\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5148\u4e0d\u8981\u57f7\u884c\u5b83\uff0c\u56e0\u70ba\u9084\u9700\u8981\u4e00\u4e9b\u6e96\u5099\u5de5\u4f5c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5011\u5f97\u53bb\u4e32\u63a5 OpenAI \u7684 API\uff0c\u9019\u6a23\u624d\u80fd\u5c07\u90f5\u4ef6\u5167\u5bb9\u50b3\u9001\u7d66 ChatGPT \u9032\u884c\u5206\u6790\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},63701:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/gmail19-90fd8dd43b0e5ab75169c1dbb4b94b2d.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);