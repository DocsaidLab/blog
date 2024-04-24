"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5818],{30816:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(74848),t=i(28453);const o={sidebar_position:4},r="Advanced",a={id:"docclassifier/advance",title:"Advanced",description:"When invoking the DocClassifier model, you can perform advanced settings by passing parameters.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docclassifier/advance.md",sourceDirName:"docclassifier",slug:"/docclassifier/advance",permalink:"/en/docs/docclassifier/advance",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713961801e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"QuickStart",permalink:"/en/docs/docclassifier/quickstart"},next:{title:"Model Design",permalink:"/en/docs/docclassifier/model_arch"}},d={},c=[{value:"Initialization",id:"initialization",level:2},{value:"1. Backend",id:"1-backend",level:3},{value:"2. ModelType",id:"2-modeltype",level:3},{value:"3. ModelCfg",id:"3-modelcfg",level:3},{value:"Inference",id:"inference",level:2},{value:"Feature Extraction",id:"feature-extraction",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"advanced",children:"Advanced"}),"\n",(0,s.jsxs)(n.p,{children:["When invoking the ",(0,s.jsx)(n.code,{children:"DocClassifier"})," model, you can perform advanced settings by passing parameters."]}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsx)(n.p,{children:"Here are the advanced setting options during initialization:"}),"\n",(0,s.jsx)(n.h3,{id:"1-backend",children:"1. Backend"}),"\n",(0,s.jsxs)(n.p,{children:["Backend is an enumeration type used to specify the computation backend of ",(0,s.jsx)(n.code,{children:"DocClassifier"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"It includes the following options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cpu"}),": Perform computation using CPU."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cuda"}),": Perform computation using GPU (requires appropriate hardware support)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from docsaidkit import Backend\n\nmodel = DocClassifier(backend=Backend.cuda) # Use CUDA backend\n#\n# or\n#\nmodel = DocClassifier(backend=Backend.cpu) # Use CPU backend\n"})}),"\n",(0,s.jsx)(n.p,{children:"We use ONNXRuntime as the inference engine for the model. Although ONNXRuntime supports multiple backend engines (including CPU, CUDA, OpenCL, DirectX, TensorRT, etc.), due to typical usage environments, we have made a slight encapsulation. Currently, only CPU and CUDA backend engines are provided. In addition, using the CUDA backend for computation requires both appropriate hardware support and the installation of corresponding CUDA drivers and CUDA Toolkit."}),"\n",(0,s.jsx)(n.p,{children:"If CUDA is not installed on your system or if the version is incorrect, the CUDA backend cannot be used."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If you have other requirements, please refer to the ",(0,s.jsx)(n.a,{href:"https://onnxruntime.ai/docs/execution-providers/index.html",children:(0,s.jsx)(n.strong,{children:"ONNXRuntime official documentation"})})," for customization."]}),"\n",(0,s.jsxs)(n.li,{children:["For issues related to installing dependencies, please refer to the ",(0,s.jsx)(n.a,{href:"https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html#requirements",children:(0,s.jsx)(n.strong,{children:"ONNXRuntime Release Notes"})}),"."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"2-modeltype",children:"2. ModelType"}),"\n",(0,s.jsxs)(n.p,{children:["ModelType is an enumeration type used to specify the type of model used by ",(0,s.jsx)(n.code,{children:"DocClassifier"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"It includes the following options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"margin_based"}),": Use a model architecture based on the margin method."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can specify the model to use through the ",(0,s.jsx)(n.code,{children:"model_type"})," parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from docclassifier import ModelType\n\nmodel = DocClassifier(model_type=ModelType.margin_based)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-modelcfg",children:"3. ModelCfg"}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"list_models"})," to view all available models."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from docclassifier import DocClassifier\n\nprint(DocClassifier().list_models())\n# >>> ['20240326']\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can specify the model configuration using the ",(0,s.jsx)(n.code,{children:"model_cfg"})," parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"model = DocClassifier(model_cfg='20240326') # Use '20240326' configuration\n"})}),"\n",(0,s.jsx)(n.h2,{id:"inference",children:"Inference"}),"\n",(0,s.jsx)(n.p,{children:"There are no advanced setting options during the inference phase for this module. More features may be added in future versions."}),"\n",(0,s.jsx)(n.h2,{id:"feature-extraction",children:"Feature Extraction"}),"\n",(0,s.jsxs)(n.p,{children:["You may be more interested in the features of the document rather than its classification. For this purpose, we provide the ",(0,s.jsx)(n.code,{children:"extract_feature"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from docclassifier import DocClassifier\nimport docsaidkit as D\n\nmodel = DocClassifier()\nimg = D.imread('path/to/image.jpg')\n\n# Extract features: Returns a 256-dimensional feature vector\nfeatures = model.extract_feature(img)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);