"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8821],{75801:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});var r=i(74848),c=i(28453);const d={sidebar_position:4},l="\u9032\u968e\u8a2d\u5b9a",s={id:"docaligner/advance",title:"\u9032\u968e\u8a2d\u5b9a",description:"\u8abf\u7528 DocAligner \u6a21\u578b\u6642\uff0c\u4f60\u53ef\u4ee5\u900f\u904e\u50b3\u905e\u53c3\u6578\u4f86\u9032\u884c\u9032\u968e\u8a2d\u5b9a\u3002",source:"@site/docs/docaligner/advance.md",sourceDirName:"docaligner",slug:"/docaligner/advance",permalink:"/docaligner/advance",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712934505e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u958b\u59cb",permalink:"/docaligner/quickstart"},next:{title:"\u8a55\u4f30\u6a21\u578b",permalink:"/docaligner/benchmark"}},t={},o=[{value:"Initialization",id:"initialization",level:2},{value:"1. Backend",id:"1-backend",level:3},{value:"2. ModelType",id:"2-modeltype",level:3},{value:"3. ModelCfg",id:"3-modelcfg",level:3},{value:"Inference",id:"inference",level:2},{value:"CenterCrop",id:"centercrop",level:3},{value:"Return <code>Document</code> Object",id:"return-document-object",level:3}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u9032\u968e\u8a2d\u5b9a",children:"\u9032\u968e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(e.p,{children:["\u8abf\u7528 ",(0,r.jsx)(e.code,{children:"DocAligner"})," \u6a21\u578b\u6642\uff0c\u4f60\u53ef\u4ee5\u900f\u904e\u50b3\u905e\u53c3\u6578\u4f86\u9032\u884c\u9032\u968e\u8a2d\u5b9a\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u5728\u521d\u59cb\u5316\u968e\u6bb5\u7684\u9032\u968e\u8a2d\u5b9a\u9078\u9805\uff1a"}),"\n",(0,r.jsx)(e.h3,{id:"1-backend",children:"1. Backend"}),"\n",(0,r.jsxs)(e.p,{children:["Backend \u662f\u4e00\u500b\u5217\u8209\u985e\u578b\uff0c\u7528\u65bc\u6307\u5b9a ",(0,r.jsx)(e.code,{children:"DocAligner"})," \u7684\u904b\u7b97\u5f8c\u7aef\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5b83\u5305\u542b\u4ee5\u4e0b\u9078\u9805\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"cpu"}),"\uff1a\u4f7f\u7528 CPU \u9032\u884c\u904b\u7b97\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"cuda"}),"\uff1a\u4f7f\u7528 GPU \u9032\u884c\u904b\u7b97\uff08\u9700\u8981\u9069\u7576\u7684\u786c\u9ad4\u652f\u63f4\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from docsaidkit import Backend\n\nmodel = DocAligner(backend=Backend.cuda) # \u4f7f\u7528 CUDA \u5f8c\u7aef\n#\n# \u6216\u662f\n#\nmodel = DocAligner(backend=Backend.cpu) # \u4f7f\u7528 CPU \u5f8c\u7aef\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u5011\u662f\u4f7f\u7528 ONNXRuntime \u4f5c\u70ba\u6a21\u578b\u7684\u63a8\u8ad6\u5f15\u64ce\uff0c\u96d6\u7136 ONNXRuntime \u652f\u63f4\u4e86\u591a\u7a2e\u5f8c\u7aef\u5f15\u64ce\uff08\u5305\u62ec CPU\u3001CUDA\u3001OpenCL\u3001DirectX\u3001TensorRT \u7b49\u7b49\uff09\uff0c\u4f46\u9650\u65bc\u5e73\u5e38\u4f7f\u7528\u7684\u74b0\u5883\uff0c\u6211\u5011\u7a0d\u5fae\u505a\u4e86\u4e00\u9ede\u5c01\u88dd\uff0c\u76ee\u524d\u53ea\u63d0\u4f9b\u4e86 CPU \u548c CUDA \u5169\u7a2e\u5f8c\u7aef\u5f15\u64ce\u3002\u6b64\u5916\uff0c\u4f7f\u7528 cuda \u904b\u7b97\u9664\u4e86\u9700\u8981\u9069\u7576\u7684\u786c\u9ad4\u652f\u63f4\u5916\uff0c\u9084\u9700\u8981\u5b89\u88dd\u76f8\u61c9\u7684 CUDA \u9a45\u52d5\u7a0b\u5f0f\u548c CUDA \u5de5\u5177\u5305\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f60\u7684\u7cfb\u7d71\u4e2d\u6c92\u6709\u5b89\u88dd CUDA\uff0c\u6216\u5b89\u88dd\u7684\u7248\u672c\u4e0d\u6b63\u78ba\uff0c\u5247\u7121\u6cd5\u4f7f\u7528 CUDA \u904b\u7b97\u5f8c\u7aef\u3002"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5982\u679c\u4f60\u6709\u5176\u4ed6\u9700\u6c42\uff0c\u8acb\u53c3\u8003 ",(0,r.jsx)(e.a,{href:"https://onnxruntime.ai/docs/execution-providers/index.html",children:(0,r.jsx)(e.strong,{children:"ONNXRuntime \u5b98\u65b9\u6587\u4ef6"})})," \u9032\u884c\u81ea\u5b9a\u7fa9\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u95dc\u65bc\u5b89\u88dd\u4f9d\u8cf4\u76f8\u95dc\u7684\u554f\u984c\uff0c\u8acb\u53c3\u8003 ",(0,r.jsx)(e.a,{href:"https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html#requirements",children:(0,r.jsx)(e.strong,{children:"ONNXRuntime Release Notes"})})]}),"\n"]})}),"\n",(0,r.jsx)(e.h3,{id:"2-modeltype",children:"2. ModelType"}),"\n",(0,r.jsxs)(e.p,{children:["ModelType \u662f\u4e00\u500b\u5217\u8209\u985e\u578b\uff0c\u7528\u65bc\u6307\u5b9a ",(0,r.jsx)(e.code,{children:"DocAligner"})," \u4f7f\u7528\u7684\u6a21\u578b\u985e\u578b\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5b83\u5305\u542b\u4ee5\u4e0b\u9078\u9805\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"heatmap"}),"\uff1a\u4f7f\u7528\u71b1\u5716\u6a21\u578b\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"point"}),"\uff1a\u4f7f\u7528\u9ede\u56de\u6b78\u6a21\u578b\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u5011\u63d0\u4f9b\u4e86\u5169\u7a2e\u4e0d\u540c\u7684\u6a21\u578b\uff1a\u300c\u71b1\u5716\u6a21\u578b\u300d\u548c\u300c\u9ede\u56de\u6b78\u6a21\u578b\u300d\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u900f\u904e ",(0,r.jsx)(e.code,{children:"model_type"})," \u53c3\u6578\u4f86\u6307\u5b9a\u4f7f\u7528\u7684\u6a21\u578b\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from docaligner import ModelType\n\nmodel = DocAligner(model_type=ModelType.heatmap) # \u4f7f\u7528\u71b1\u5716\u6a21\u578b\n#\n# \u6216\u662f\n#\nmodel = DocAligner(model_type=ModelType.point) # \u4f7f\u7528\u9ede\u56de\u6b78\u6a21\u578b\n"})}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"\u8a71\u662f\u9019\u6a23\u8b1b\uff0c\u4f46\u4e0d\u5efa\u8b70\u7528\u300e\u9ede\u56de\u6b78\u300f\u6a21\u578b\uff0c\u56e0\u70ba\u5b83\u7684\u6548\u679c\u4e0d\u592a\u597d\uff0c\u9019\u500b\u7d14\u7cb9\u70ba\u4e86\u7814\u7a76\u7528\u7684\u3002"})}),"\n",(0,r.jsx)(e.h3,{id:"3-modelcfg",children:"3. ModelCfg"}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u5011\u8a13\u7df4\u4e86\u5f88\u591a\u6a21\u578b\uff0c\u4e26\u4e14\u5e6b\u5b83\u5011\u53d6\u4e86\u540d\u5b57\uff0c"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u900f\u904e ",(0,r.jsx)(e.code,{children:"list_models"})," \u4f86\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684\u6a21\u578b\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from docaligner import DocAligner\n\nprint(DocAligner().list_models())\n# >>> [\n#     'lcnet050',\n#     'lcnet050_fpn',\n#     'lcnet100',\n#     'lcnet100_fpn',\n#     'mobilenetv2_140',\n#     'fastvit_t8',\n#     'fastvit_sa24',       <-- Default\n#     ...\n# ]\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u900f\u904e ",(0,r.jsx)(e.code,{children:"model_cfg"})," \u53c3\u6578\u4f86\u6307\u5b9a\u6a21\u578b\u7684\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"model = DocAligner(model_cfg='mobilenetv2_140') # \u4f7f\u7528 'mobilenetv2_140' \u914d\u7f6e\n"})}),"\n",(0,r.jsx)(e.h2,{id:"inference",children:"Inference"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u5728\u63a8\u8ad6\u968e\u6bb5\u7684\u9032\u968e\u8a2d\u5b9a\u9078\u9805\uff1a"}),"\n",(0,r.jsx)(e.h3,{id:"centercrop",children:"CenterCrop"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u9032\u884c\u63a8\u8ad6\u968e\u6bb5\uff0c\u8a2d\u5b9a\u9069\u7576\u7684\u9032\u968e\u9078\u9805\u80fd\u5920\u986f\u8457\u5f71\u97ff\u6a21\u578b\u7684\u8868\u73fe\u548c\u6548\u679c\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c",(0,r.jsx)(e.code,{children:"do_center_crop"}),"\u662f\u4e00\u500b\u95dc\u9375\u7684\u53c3\u6578\uff0c\u5b83\u6c7a\u5b9a\u662f\u5426\u5728\u63a8\u8ad6\u6642\u9032\u884c\u4e2d\u5fc3\u88c1\u526a\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u9019\u9805\u8a2d\u5b9a\u5c24\u5176\u91cd\u8981\uff0c\u56e0\u70ba\u5728\u5be6\u969b\u61c9\u7528\u4e2d\uff0c\u6211\u5011\u9047\u5230\u7684\u5716\u50cf\u5f80\u5f80\u4e26\u975e\u6a19\u6e96\u7684\u6b63\u65b9\u5f62\u5c3a\u5bf8\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5be6\u969b\u4e0a\uff0c\u5716\u50cf\u7684\u5c3a\u5bf8\u548c\u6bd4\u4f8b\u591a\u7a2e\u591a\u6a23\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u624b\u6a5f\u62cd\u651d\u7684\u7167\u7247\u666e\u904d\u63a1\u7528 9:16 \u7684\u5bec\u9ad8\u6bd4\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u6383\u63cf\u7684\u6587\u4ef6\u5e38\u898b\u65bc A4 \u7684\u7d19\u5f35\u6bd4\u4f8b\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u7db2\u9801\u622a\u5716\u5927\u591a\u662f 16:9 \u7684\u5bec\u9ad8\u6bd4\uff1b"}),"\n",(0,r.jsx)(e.li,{children:"\u900f\u904e webcam \u62cd\u651d\u7684\u5716\u7247\uff0c\u5247\u901a\u5e38\u662f 4:3 \u7684\u6bd4\u4f8b\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u9019\u4e9b\u975e\u6b63\u65b9\u5f62\u7684\u5716\u50cf\uff0c\u5728\u4e0d\u7d93\u904e\u9069\u7576\u8655\u7406\u76f4\u63a5\u9032\u884c\u63a8\u8ad6\u6642\uff0c\u5f80\u5f80\u6703\u5305\u542b\u5927\u91cf\u7684\u7121\u95dc\u5340\u57df\u6216\u7a7a\u767d\uff0c\u5f9e\u800c\u5c0d\u6a21\u578b\u7684\u63a8\u8ad6\u6548\u679c\u7522\u751f\u4e0d\u5229\u5f71\u97ff\u3002\u9032\u884c\u4e2d\u5fc3\u88c1\u526a\u80fd\u5920\u6709\u6548\u6e1b\u5c11\u9019\u4e9b\u7121\u95dc\u5340\u57df\uff0c\u5c08\u6ce8\u65bc\u5716\u50cf\u7684\u4e2d\u5fc3\u5340\u57df\uff0c\u5f9e\u800c\u63d0\u9ad8\u63a8\u8ad6\u7684\u6e96\u78ba\u6027\u548c\u6548\u7387\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\nfrom docaligner import DocAligner\n\nmodel = DocAligner()\n\nimg = D.imread('path/to/image.jpg')\nresult = model(img, do_center_crop=True) # \u4f7f\u7528\u4e2d\u5fc3\u88c1\u526a\n"})}),"\n",(0,r.jsxs)(e.admonition,{type:"tip",children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4f7f\u7528\u6642\u6a5f"}),"\uff1a\u300e\u4e0d\u6703\u5207\u5230\u5716\u7247\u300f\u4e14\u5716\u7247\u6bd4\u4f8b\u4e0d\u662f\u6b63\u65b9\u5f62\u6642\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e2d\u5fc3\u88c1\u5207\u3002"]}),(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"\u4e2d\u5fc3\u88c1\u6e1b\u53ea\u662f\u5728\u8a08\u7b97\u6d41\u7a0b\u4e2d\u7684\u4e00\u500b\u6b65\u9a5f\uff0c\u4e0d\u6703\u5c0d\u539f\u59cb\u5716\u50cf\u9032\u884c\u4fee\u6539\u3002\u6700\u5f8c\u5f97\u5230\u7684\u7d50\u679c\u6703\u6620\u5c04\u56de\u539f\u59cb\u5716\u50cf\u7684\u5c3a\u5bf8\uff0c\u4f7f\u7528\u8005\u4e0d\u9808\u64d4\u5fc3\u5716\u50cf\u7684\u8b8a\u5f62\u6216\u5931\u771f\u554f\u984c\u3002"})})]}),"\n",(0,r.jsx)(e.p,{children:":::"}),"\n",(0,r.jsxs)(e.h3,{id:"return-document-object",children:["Return ",(0,r.jsx)(e.code,{children:"Document"})," Object"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"return_document_obj"})," \u53c3\u6578\u53ef\u4ee5\u6307\u5b9a\u662f\u5426\u8fd4\u56de ",(0,r.jsx)(e.a,{href:"../docsaidkit/funcs/objects/document",children:(0,r.jsx)(e.strong,{children:"Document"})})," \u7269\u4ef6\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u5f88\u591a\u6642\u5019\uff0c\u4f60\u53ef\u80fd\u53ea\u9700\u8981\u6587\u4ef6\u7684\u591a\u908a\u5f62\u8cc7\u8a0a\uff0c\u800c\u4e0d\u9700\u8981\u5176\u4ed6\u7684\u5c6c\u6027\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u9019\u6642\uff0c\u4f60\u53ef\u4ee5\u8a2d\u5b9a ",(0,r.jsx)(e.code,{children:"return_document_obj=False"}),"\uff0c\u9019\u6a23\u5c31\u53ea\u6703\u8fd4\u56de\u591a\u908a\u5f62\u8cc7\u8a0a\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"result = model(img)\nprint(type(result))\n# >>> <class 'docsaidkit.funcs.objects.document.Document'>\n\n# \u6216\u662f\n\nresult = model(img, return_document_obj=False) # \u53ea\u8fd4\u56de\u591a\u908a\u5f62\u8cc7\u8a0a\nprint(type(result))\n# >>> <class 'numpy.ndarray'>\n\nprint(result)\n# >>> array([[ 48.151894, 223.47687 ],\n#            [387.1344  , 198.09961 ],\n#            [423.0362  , 345.51334 ],\n#            [ 40.148613, 361.38782 ]], dtype=float32)\n"})}),"\n",(0,r.jsxs)(e.admonition,{type:"tip",children:[(0,r.jsxs)(e.p,{children:["\u7576\u4f60\u53d6\u5f97 ",(0,r.jsx)(e.code,{children:"numpy.ndarray"})," \u6642\uff0c\u4f60\u53ef\u4ee5\u8abf\u7528 ",(0,r.jsx)(e.a,{href:"../docsaidkit/funcs/vision/geometric/imwarp_quadrangle",children:(0,r.jsx)(e.strong,{children:"Docsaidkit.imwarp_quadrangle"})})," \u51fd\u6578\u4f86\u9032\u884c\u9032\u4e00\u6b65\u7684\u5f8c\u8655\u7406\uff0c\u53c3\u8003\u7bc4\u4f8b\uff1a"]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nresult = model(img, return_document_obj=False)\nflat_doc_img = D.imwarp_quadrangle(img, result)\n"})}),(0,r.jsx)(e.p,{children:"\u8f38\u51fa\u7d50\u679c\u5982\u4e0b\uff1a"}),(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"flat_doc_img",src:i(75428).A+"",width:"383",height:"148"})}),(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6ce8\u610f"}),"\uff1a\u51fd\u6578 ",(0,r.jsx)(e.a,{href:"../docsaidkit/funcs/vision/geometric/imwarp_quadrangle",children:(0,r.jsx)(e.strong,{children:"Docsaidkit.imwarp_quadrangle"})})," \u6c92\u6709\u652f\u63f4\u6307\u5b9a\u6587\u4ef6\u5927\u5c0f\uff0c\u56e0\u6b64\u8f38\u51fa\u7684\u5716\u7247\u5c3a\u5bf8\u6703\u6839\u64da\u591a\u908a\u5f62\u7684\u300e\u6700\u5c0f\u65cb\u8f49\u5916\u63a5\u77e9\u5f62\u300f\u4f86\u6c7a\u5b9a\u3002"]})})]}),"\n",(0,r.jsx)(e.p,{children:":::"})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},75428:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/flat_result_1-718383b7dfb1628127a66957fd9192a0.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>s});var r=i(96540);const c={},d=r.createContext(c);function l(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);