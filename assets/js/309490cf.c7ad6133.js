"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2637],{9648:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var s=i(74848),r=i(28453);const c={sidebar_position:4},d="\u9032\u968e\u8a2d\u5b9a",l={id:"docclassifier/advance",title:"\u9032\u968e\u8a2d\u5b9a",description:"\u8abf\u7528 DocClassifier \u6a21\u578b\u6642\uff0c\u4f60\u53ef\u4ee5\u900f\u904e\u50b3\u905e\u53c3\u6578\u4f86\u9032\u884c\u9032\u968e\u8a2d\u5b9a\u3002",source:"@site/docs/docclassifier/advance.md",sourceDirName:"docclassifier",slug:"/docclassifier/advance",permalink:"/docs/docclassifier/advance",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1714946536e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u958b\u59cb",permalink:"/docs/docclassifier/quickstart"},next:{title:"\u6a21\u578b\u8a2d\u8a08",permalink:"/docs/docclassifier/model_arch"}},o={},t=[{value:"Initialization",id:"initialization",level:2},{value:"1. Backend",id:"1-backend",level:3},{value:"2. ModelType",id:"2-modeltype",level:3},{value:"3. ModelCfg",id:"3-modelcfg",level:3},{value:"Inference",id:"inference",level:2},{value:"Feature Extraction",id:"feature-extraction",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u9032\u968e\u8a2d\u5b9a",children:"\u9032\u968e\u8a2d\u5b9a"}),"\n",(0,s.jsxs)(n.p,{children:["\u8abf\u7528 ",(0,s.jsx)(n.code,{children:"DocClassifier"})," \u6a21\u578b\u6642\uff0c\u4f60\u53ef\u4ee5\u900f\u904e\u50b3\u905e\u53c3\u6578\u4f86\u9032\u884c\u9032\u968e\u8a2d\u5b9a\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5728\u521d\u59cb\u5316\u968e\u6bb5\u7684\u9032\u968e\u8a2d\u5b9a\u9078\u9805\uff1a"}),"\n",(0,s.jsx)(n.h3,{id:"1-backend",children:"1. Backend"}),"\n",(0,s.jsxs)(n.p,{children:["Backend \u662f\u4e00\u500b\u5217\u8209\u985e\u578b\uff0c\u7528\u65bc\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"DocClassifier"})," \u7684\u904b\u7b97\u5f8c\u7aef\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b83\u5305\u542b\u4ee5\u4e0b\u9078\u9805\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cpu"}),"\uff1a\u4f7f\u7528 CPU \u9032\u884c\u904b\u7b97\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cuda"}),"\uff1a\u4f7f\u7528 GPU \u9032\u884c\u904b\u7b97\uff08\u9700\u8981\u9069\u7576\u7684\u786c\u9ad4\u652f\u63f4\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from docsaidkit import Backend\n\nmodel = DocClassifier(backend=Backend.cuda) # \u4f7f\u7528 CUDA \u5f8c\u7aef\n#\n# \u6216\u662f\n#\nmodel = DocClassifier(backend=Backend.cpu) # \u4f7f\u7528 CPU \u5f8c\u7aef\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5011\u662f\u4f7f\u7528 ONNXRuntime \u4f5c\u70ba\u6a21\u578b\u7684\u63a8\u8ad6\u5f15\u64ce\uff0c\u96d6\u7136 ONNXRuntime \u652f\u63f4\u4e86\u591a\u7a2e\u5f8c\u7aef\u5f15\u64ce\uff08\u5305\u62ec CPU\u3001CUDA\u3001OpenCL\u3001DirectX\u3001TensorRT \u7b49\u7b49\uff09\uff0c\u4f46\u9650\u65bc\u5e73\u5e38\u4f7f\u7528\u7684\u74b0\u5883\uff0c\u6211\u5011\u7a0d\u5fae\u505a\u4e86\u4e00\u9ede\u5c01\u88dd\uff0c\u76ee\u524d\u53ea\u63d0\u4f9b\u4e86 CPU \u548c CUDA \u5169\u7a2e\u5f8c\u7aef\u5f15\u64ce\u3002\u6b64\u5916\uff0c\u4f7f\u7528 cuda \u904b\u7b97\u9664\u4e86\u9700\u8981\u9069\u7576\u7684\u786c\u9ad4\u652f\u63f4\u5916\uff0c\u9084\u9700\u8981\u5b89\u88dd\u76f8\u61c9\u7684 CUDA \u9a45\u52d5\u7a0b\u5f0f\u548c CUDA \u5de5\u5177\u5305\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u7cfb\u7d71\u4e2d\u6c92\u6709\u5b89\u88dd CUDA\uff0c\u6216\u5b89\u88dd\u7684\u7248\u672c\u4e0d\u6b63\u78ba\uff0c\u5247\u7121\u6cd5\u4f7f\u7528 CUDA \u904b\u7b97\u5f8c\u7aef\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u6709\u5176\u4ed6\u9700\u6c42\uff0c\u8acb\u53c3\u8003 ",(0,s.jsx)(n.a,{href:"https://onnxruntime.ai/docs/execution-providers/index.html",children:(0,s.jsx)(n.strong,{children:"ONNXRuntime \u5b98\u65b9\u6587\u4ef6"})})," \u9032\u884c\u81ea\u5b9a\u7fa9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u95dc\u65bc\u5b89\u88dd\u4f9d\u8cf4\u76f8\u95dc\u7684\u554f\u984c\uff0c\u8acb\u53c3\u8003 ",(0,s.jsx)(n.a,{href:"https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html#requirements",children:(0,s.jsx)(n.strong,{children:"ONNXRuntime Release Notes"})})]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"2-modeltype",children:"2. ModelType"}),"\n",(0,s.jsxs)(n.p,{children:["ModelType \u662f\u4e00\u500b\u5217\u8209\u985e\u578b\uff0c\u7528\u65bc\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"DocClassifier"})," \u4f7f\u7528\u7684\u6a21\u578b\u985e\u578b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b83\u5305\u542b\u4ee5\u4e0b\u9078\u9805\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"margin_based"}),"\uff1a\u4f7f\u7528\u57fa\u65bc margin \u65b9\u6cd5\u7684\u6a21\u578b\u67b6\u69cb\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u900f\u904e ",(0,s.jsx)(n.code,{children:"model_type"})," \u53c3\u6578\u4f86\u6307\u5b9a\u4f7f\u7528\u7684\u6a21\u578b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from docclassifier import ModelType\n\nmodel = DocClassifier(model_type=ModelType.margin_based)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-modelcfg",children:"3. ModelCfg"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u900f\u904e ",(0,s.jsx)(n.code,{children:"list_models"})," \u4f86\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684\u6a21\u578b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from docclassifier import DocClassifier\n\nprint(DocClassifier().list_models())\n# >>> ['20240326']\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u900f\u904e ",(0,s.jsx)(n.code,{children:"model_cfg"})," \u53c3\u6578\u4f86\u6307\u5b9a\u6a21\u578b\u7684\u914d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"model = DocClassifier(model_cfg='20240326') # \u4f7f\u7528 '20240326' \u914d\u7f6e\n"})}),"\n",(0,s.jsx)(n.h2,{id:"inference",children:"Inference"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6a21\u7d44\u5728\u63a8\u8ad6\u968e\u6bb5\u6c92\u6709\u9032\u968e\u8a2d\u5b9a\u9078\u9805\uff0c\u672a\u4f86\u7248\u672c\u53ef\u80fd\u6703\u52a0\u5165\u66f4\u591a\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"feature-extraction",children:"Feature Extraction"}),"\n",(0,s.jsxs)(n.p,{children:["\u6bd4\u8d77\u6587\u4ef6\u7684\u5206\u985e\uff0c\u4f60\u53ef\u80fd\u5c0d\u6587\u4ef6\u7684\u7279\u5fb5\u66f4\u611f\u8208\u8da3\uff0c\u70ba\u6b64\u6211\u5011\u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.code,{children:"extract_feature"})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from docclassifier import DocClassifier\nimport docsaidkit as D\n\nmodel = DocClassifier()\nimg = D.imread('path/to/image.jpg')\n\n# \u63d0\u53d6\u7279\u5fb5\uff1a \u8fd4\u56de 256 \u7dad\u7279\u5fb5\u5411\u91cf\nfeatures = model.extract_feature(img)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(96540);const r={},c=s.createContext(r);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);