"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5471],{34625:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=i(74848),s=i(28453);const o={sidebar_position:1},r="ONNXEngine",d={id:"docsaidkit/funcs/onnxengine/onnxengine",title:"ONNXEngine",description:"ONNXEngine(modelpath int = 0, backend Dict[str, Any] = {}, provideroption: Dict[str, Any] = {})",source:"@site/docs/docsaidkit/funcs/onnxengine/onnxengine.md",sourceDirName:"docsaidkit/funcs/onnxengine",slug:"/docsaidkit/funcs/onnxengine/",permalink:"/docsaidkit/funcs/onnxengine/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712934505e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ONNXEngine",permalink:"/category/onnxengine"},next:{title:"get_onnx_metadata",permalink:"/docsaidkit/funcs/onnxengine/get_onnx_metadata"}},c={},a=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"onnxengine",children:"ONNXEngine"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/main/docsaidkit/onnxengine/engine.py",children:["ONNXEngine(model_path: Union[str, Path], gpu_id: int = 0, backend: Union[str, int, Backend] = Backend.cpu, session_option: Dict[str, Any] = ",", provider_option: Dict[str, Any] = ",")"]})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u8aaa\u660e"}),"\uff1a\u521d\u59cb\u5316 ONNX \u6a21\u578b\u63a8\u8ad6\u5f15\u64ce\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"model_path"})," (",(0,t.jsx)(e.code,{children:"Union[str, Path]"}),")\uff1a\u6a94\u6848\u540d\u7a31\u6216\u5e8f\u5217\u5316\u7684 ONNX \u6216 ORT \u683c\u5f0f\u6a21\u578b\u7684\u4f4d\u5143\u7d44\u5b57\u4e32\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"gpu_id"})," (",(0,t.jsx)(e.code,{children:"int"}),")\uff1aGPU ID\u3002\u9810\u8a2d\u70ba 0\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"backend"})," (",(0,t.jsx)(e.code,{children:"Union[str, int, Backend]"}),")\uff1a\u63a8\u8ad6\u5f8c\u7aef\uff0c\u53ef\u4ee5\u9078 ",(0,t.jsx)(e.code,{children:"Backend.cpu"})," \u6216 ",(0,t.jsx)(e.code,{children:"Backend.cuda"}),"\u3002\u9810\u8a2d\u70ba ",(0,t.jsx)(e.code,{children:"Backend.cpu"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"session_option"})," (",(0,t.jsx)(e.code,{children:"Dict[str, Any]"}),")\uff1a\u9019\u662f onnxruntime.SessionOptions \u7684\u53c3\u6578\uff0c\u7528\u4f86\u8a2d\u5b9a\u6703\u8a71\u9078\u9805\u3002\u9810\u8a2d\u70ba ",(0,t.jsx)(e.code,{children:"{}"}),"\u3002\u8a73\u7d30\u8a2d\u5b9a\u65b9\u5f0f\u8acb\u53c3\u8003\uff1a",(0,t.jsx)(e.a,{href:"https://onnxruntime.ai/docs/api/python/api_summary.html#onnxruntime.SessionOptions",children:"SessionOptions"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"provider_option"})," (",(0,t.jsx)(e.code,{children:"Dict[str, Any]"}),")\uff1a\u9019\u662f onnxruntime.provider_options \u7684\u53c3\u6578\u3002\u9810\u8a2d\u70ba ",(0,t.jsx)(e.code,{children:"{}"}),"\u3002\u8a73\u7d30\u8a2d\u5b9a\u65b9\u5f0f\u8acb\u53c3\u8003\uff1a",(0,t.jsx)(e.a,{href:"https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html#configuration-options",children:"CUDAExecutionProvider"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u63a8\u8ad6"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u8f09\u5165\u6a21\u578b\u6642\uff0c\u8a72\u51fd\u6578\u6703\u8f09\u5165 ONNX \u6a94\u6848\u5167\u7684\u8cc7\u8a0a\uff0c\u4e26\u70ba\u8f38\u5165\u548c\u8f38\u51fa\u503c\u7d66\u5b9a\u4e00\u500b\u5b57\u5178\uff0c\u5176\u4e2d\u5305\u542b\u8f38\u5165\u548c\u8f38\u51fa\u7684\u5f62\u72c0\u548c\u6578\u64da\u985e\u578b\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u56e0\u6b64\uff0c\u7576\u4f60\u547c\u53eb ",(0,t.jsx)(e.code,{children:"ONNXEngine"})," \u5be6\u4f8b\u6642\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8a72\u5b57\u5178\u4f86\u5f97\u5230\u8f38\u51fa\u7d50\u679c\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nmodel_path = 'model.onnx'\nengine = D.ONNXEngine(model_path)\nprint(engine)\n\n# Inferencing\n# Assuming the model has two inputs and two outputs and named:\n#   'input1', 'input2', 'output1', 'output2'.\ninput_data = {\n    'input1': np.random.randn(1, 3, 224, 224).astype(np.float32),\n    'input2': np.random.randn(1, 3, 224, 224).astype(np.float32),\n}\n\noutputs = engine(**input_data)\n\noutput_data1 = outputs['output1']\noutput_data2 = outputs['output2']\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>d});var t=i(96540);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);