"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1067],{24078:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const s={slug:"pytorch-training-out-of-memory",title:"PyTorch \u7684 List \u9677\u9631",authors:"Zephyr",tags:["PyTorch","OOM"],image:"/img/2024/0220.webp",description:"\u767c\u73fe\u8207\u89e3\u6c7a PyTorch OOM \u554f\u984c\u3002"},o=void 0,a={permalink:"/blog/pytorch-training-out-of-memory",source:"@site/blog/2024/02-20-pytorch-training-oom/index.md",title:"PyTorch \u7684 List \u9677\u9631",description:"\u767c\u73fe\u8207\u89e3\u6c7a PyTorch OOM \u554f\u984c\u3002",date:"2024-02-20T00:00:00.000Z",tags:[{inline:!0,label:"PyTorch",permalink:"/blog/tags/py-torch"},{inline:!0,label:"OOM",permalink:"/blog/tags/oom"}],readingTime:2.645,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"pytorch-training-out-of-memory",title:"PyTorch \u7684 List \u9677\u9631",authors:"Zephyr",tags:["PyTorch","OOM"],image:"/img/2024/0220.webp",description:"\u767c\u73fe\u8207\u89e3\u6c7a PyTorch OOM \u554f\u984c\u3002"},unlisted:!1,prevItem:{title:"\u642d\u5efa Nextcloud \u8a18\u9304",permalink:"/blog/setup-nextcloud"},nextItem:{title:"\u4f7f\u7528 Python \u628a PDF \u8f49\u5716\u7247",permalink:"/blog/read-pdf-to-images"}},l={authorsImageUrls:[void 0]},c=[{value:"\u6211\u4e5f\u662f\u9019\u6a23\u5beb\uff0c\u70ba\u4ec0\u9ebc\u4ec0\u9ebc\u4e8b\u60c5\u90fd\u6c92\u6709\u767c\u751f\uff1f",id:"\u6211\u4e5f\u662f\u9019\u6a23\u5beb\u70ba\u4ec0\u9ebc\u4ec0\u9ebc\u4e8b\u60c5\u90fd\u6c92\u6709\u767c\u751f",level:2}];function h(n){const e={code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("figure",{children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{alt:"title",src:t(11987).A+"",width:"1024",height:"1024"}),"\n",(0,r.jsx)("figcaption",{children:"\u5c01\u9762\u5716\u7247\uff1a\u7531 GPT-4 \u95b1\u8b80\u672c\u6587\u4e4b\u5f8c\u81ea\u52d5\u751f\u6210"})]})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u8eab\u70ba\u4e00\u500b\u5c08\u696d\u7684 PyTorch \u4f7f\u7528\u8005\uff0c\u4f60\u61c9\u8a72\u65e9\u5df2\u7d93\u719f\u6089\u4e86\u5982\u4f55\u8a13\u7df4\u6a21\u578b\uff0c\u5982\u4f55\u8abf\u53c3\uff0c\u5982\u4f55\u512a\u5316\u7b49\u6280\u5de7\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u600e\u9ebc\u53ef\u80fd\u9084\u6703\u5beb\u51fa OOM\uff08Out of Memory\uff09\u7684\u7a0b\u5f0f\u5462\uff1f"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8acb\u6ce8\u610f\uff0c\u9019\u88e1\u6211\u5011\u8b1b\u7684\u662f\u7cfb\u7d71\u7684\u8a18\u61b6\u9ad4\uff0c\u4e0d\u662f GPU \u7684\u8a18\u61b6\u9ad4\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u7576\u7136\uff0cGPU \u7684\u8a18\u61b6\u9ad4\u4e5f\u662f\u4e00\u500b\u5e38\u898b\u7684\u554f\u984c\uff0c\u4f46\u9019\u88e1\u6211\u5011\u4e0d\u8ac7\u9019\u500b\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u7531\u65bc OOM \u7684\u6210\u56e0\u592a\u591a\uff0c\u9019\u6b21\u6211\u5011\u5c31\u53ea\u8b1b\u4e00\u500b\u5c08\u696d\u5de5\u4f5c\u8005\u4e5f\u5e38\u6703\u9047\u5230\u7684\u554f\u984c\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f60\u53ef\u80fd\u7528\u4e86 List \u7d50\u69cb\u5566\uff01"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7d93\u904e\u8abf\u67e5\uff0c\u6211\u5011\u627e\u5230\u4e86\u6d29\u6f0f\u767c\u751f\u6642\u7684\u78ba\u5207\u5834\u666f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8003\u616e\u4e0b\u9762\u7684\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from torch.utils.data import Dataset, DataLoader\nimport numpy as np\nimport torch\n\n\nclass DataIter(Dataset):\n\n    def __init__(self):\n        self.data_np = np.array([x for x in range(10000000)])\n        self.data = [x for x in range(10000000)]\n\n    def __len__(self):\n        return len(self.data)\n\n    def __getitem__(self, idx):\n        data = self.data[idx]\n        data = np.array([data], dtype=np.int64)\n        return torch.tensor(data)\n\n\ntrain_data = DataIter()\ntrain_loader = DataLoader(train_data, batch_size=300, num_workers=18)\n\nfor i, item in enumerate(train_loader):\n    if i % 1000 == 0:\n        print(i)\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u770b\u5b8c\u9019\u500b\u4f8b\u5b50\uff0c\u4e0d\u5ee2\u8a71\uff0c\u76f4\u63a5\u8b1b\u7d50\u8ad6\uff1a"}),"\n",(0,r.jsxs)(e.p,{children:["\u770b\u5230 ",(0,r.jsx)(e.code,{children:"self.data"})," \u9019\u500b List \u4e86\u55ce\uff1f\u9019\u500b List \u6703\u5c0e\u81f4 OOM \u554f\u984c\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u5011\u8a66\u8457\u7ffb\u627e\u4e86\u4e00\u4e0b\u76f8\u95dc\u8cc7\u6599\uff0c\u767c\u73fe\u9019\u4f3c\u4e4e\u4e0d\u662f Pytorch \u7684\u554f\u984c\uff0c\u800c\u662f Python \u7684\u554f\u984c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7e3d\u4e4b\uff0c\u4e0d\u8981\u7528 List\uff0c\u6539\u7528 Numpy \u6216\u8005 Tensor \u4f86\u5b58\u5132\u6578\u64da\uff0c\u9019\u6a23\u5c31\u4e0d\u6703\u51fa\u73fe OOM \u554f\u984c\u4e86\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u81f3\u5c11\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u9019\u6a23\u505a\u662f\u6709\u6548\u7684\u3002"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u6211\u4e5f\u662f\u9019\u6a23\u5beb\u70ba\u4ec0\u9ebc\u4ec0\u9ebc\u4e8b\u60c5\u90fd\u6c92\u6709\u767c\u751f",children:"\u6211\u4e5f\u662f\u9019\u6a23\u5beb\uff0c\u70ba\u4ec0\u9ebc\u4ec0\u9ebc\u4e8b\u60c5\u90fd\u6c92\u6709\u767c\u751f\uff1f"}),"\n",(0,r.jsx)(e.p,{children:"\u4e16\u754c\u5f88\u7f8e\u597d\uff0c\u76f4\u5230\u4f60\u9047\u5230\u4e86\u4e00\u500b\u5927\u6578\u64da\u96c6\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5c31\u6211\u81ea\u5df1\u7684\u6e2c\u8a66\u7684\u7d50\u679c\u4f86\u770b\uff0c\u7576\u6578\u64da\u91cf\u5c0f\u7684\u6642\u5019\uff0c\u7528 List \u4e0d\u6703\u51fa\u73fe\u8a18\u61b6\u9ad4\u6d29\u6f0f\u7684\u554f\u984c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u66f4\u5177\u9ad4\u4f86\u8aaa\uff0c\u6211\u4f7f\u7528\u4e00\u842c\u591a\u7b46\u6578\u64da\u7684\u6642\u5019\uff0c\u6c92\u554f\u984c\uff1b\u4f7f\u7528\u4e00\u767e\u591a\u842c\u7b46\u6578\u64da\u7684\u6642\u5019\u5c31\u7206\u4e86\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5\uff0c\u5982\u679c\u4f60\u7684\u6578\u64da\u91cf\u4e0d\u5927\uff0c\u4f60\u53ef\u80fd\u6c38\u9060\u4e0d\u6703\u9047\u5230\u9019\u500b\u554f\u984c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u81f3\u65bc\u6578\u64da\u591a\u5be1\u7684\u5206\u754c\u9ede\uff0c\u6211\u4e5f\u4e0d\u77e5\u9053\uff0c\u6211\u63a8\u4f30\u9019\u662f Python \u6216\u662f PyTorch \u5728\u4ea4\u4e92\u7684\u67d0\u500b\u6642\u523b\u624d\u6703\u51fa\u73fe\u7684\u7570\u5e38\u3002"})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},11987:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/0220-4d2f7cd9eb321330653be4207feb6758.webp"},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);