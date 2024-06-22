"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9578],{65220:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=i(74848),o=i(28453);const s={sidebar_position:1},r="ONNXEngine",c={id:"docsaidkit/funcs/onnxengine/onnxengine",title:"ONNXEngine",description:"ONNXEngine(modelpath int = 0, backend Dict[str, Any] = {}, provideroption: Dict[str, Any] = {})",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/onnxengine/onnxengine.md",sourceDirName:"docsaidkit/funcs/onnxengine",slug:"/docsaidkit/funcs/onnxengine/",permalink:"/en/docs/docsaidkit/funcs/onnxengine/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ONNXEngine",permalink:"/en/docs/category/onnxengine"},next:{title:"get_onnx_metadata",permalink:"/en/docs/docsaidkit/funcs/onnxengine/get_onnx_metadata"}},d={},a=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"onnxengine",children:"ONNXEngine"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/main/docsaidkit/onnxengine/engine.py",children:["ONNXEngine(model_path: Union[str, Path], gpu_id: int = 0, backend: Union[str, int, Backend] = Backend.cpu, session_option: Dict[str, Any] = ",", provider_option: Dict[str, Any] = ",")"]})}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Description"})}),"\n",(0,t.jsx)(e.p,{children:"Initialize the ONNX model inference engine."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"model_path"})," (",(0,t.jsx)(e.code,{children:"Union[str, Path]"}),"): The file name or byte string of the serialized ONNX or ORT format model."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"gpu_id"})," (",(0,t.jsx)(e.code,{children:"int"}),"): GPU ID. Default is 0."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"backend"})," (",(0,t.jsx)(e.code,{children:"Union[str, int, Backend]"}),"): Inference backend, can be ",(0,t.jsx)(e.code,{children:"Backend.cpu"})," or ",(0,t.jsx)(e.code,{children:"Backend.cuda"}),". Default is ",(0,t.jsx)(e.code,{children:"Backend.cpu"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"session_option"})," (",(0,t.jsx)(e.code,{children:"Dict[str, Any]"}),"): Parameters for onnxruntime.SessionOptions to set session options. Default is ",(0,t.jsx)(e.code,{children:"{}"}),". For detailed configuration, please refer to: ",(0,t.jsx)(e.a,{href:"https://onnxruntime.ai/docs/api/python/api_summary.html#onnxruntime.SessionOptions",children:"SessionOptions"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"provider_option"})," (",(0,t.jsx)(e.code,{children:"Dict[str, Any]"}),"): Parameters for onnxruntime.provider_options. Default is ",(0,t.jsx)(e.code,{children:"{}"}),". For detailed configuration, please refer to: ",(0,t.jsx)(e.a,{href:"https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html#configuration-options",children:"CUDAExecutionProvider"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Inference"})}),"\n",(0,t.jsx)(e.p,{children:"When loading the model, this function loads information from the ONNX file and gives a dictionary for input and output values, which includes shapes and data types for input and output."}),"\n",(0,t.jsxs)(e.p,{children:["Therefore, when you call an ",(0,t.jsx)(e.code,{children:"ONNXEngine"})," instance, you can directly use this dictionary to obtain the output results."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nmodel_path = 'model.onnx'\nengine = D.ONNXEngine(model_path)\nprint(engine)\n\n# Inferencing\n# Assuming the model has two inputs and two outputs and named:\n#   'input1', 'input2', 'output1', 'output2'.\ninput_data = {\n    'input1': np.random.randn(1, 3, 224, 224).astype(np.float32),\n    'input2': np.random.randn(1, 3, 224, 224).astype(np.float32),\n}\n\noutputs = engine(**input_data)\n\noutput_data1 = outputs['output1']\noutput_data2 = outputs['output2']\n"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var t=i(96540);const o={},s=t.createContext(o);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);