"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4242],{4755:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=e(4848),a=e(8453);const o={slug:"pytorch-training-out-of-memory",title:"\u554a\uff01PyTorch \u600e\u9ebc\u628a\u8a18\u61b6\u9ad4\u5f04\u7206\u4e86\uff1f",authors:"Zephyr",tags:["PyTorch","OOM"]},s=void 0,i={permalink:"/blog/pytorch-training-out-of-memory",source:"@site/blog/2024-02-20-pytorch-training-oom.md",title:"\u554a\uff01PyTorch \u600e\u9ebc\u628a\u8a18\u61b6\u9ad4\u5f04\u7206\u4e86\uff1f",description:"\u8eab\u70ba\u4e00\u500b\u5c08\u696d\u7684 PyTorch \u4f7f\u7528\u8005\uff0c\u4f60\u61c9\u8a72\u65e9\u5df2\u7d93\u719f\u6089\u4e86\u5982\u4f55\u8a13\u7df4\u6a21\u578b\uff0c\u5982\u4f55\u8abf\u53c3\uff0c\u5982\u4f55\u512a\u5316\u7b49\u6280\u5de7\u3002",date:"2024-02-20T00:00:00.000Z",formattedDate:"2024\u5e742\u670820\u65e5",tags:[{label:"PyTorch",permalink:"/blog/tags/py-torch"},{label:"OOM",permalink:"/blog/tags/oom"}],readingTime:1.75,hasTruncateMarker:!0,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"pytorch-training-out-of-memory",title:"\u554a\uff01PyTorch \u600e\u9ebc\u628a\u8a18\u61b6\u9ad4\u5f04\u7206\u4e86\uff1f",authors:"Zephyr",tags:["PyTorch","OOM"]},unlisted:!1,nextItem:{title:"\u628a PDF \u8f49\u63db\u6210\u5f71\u50cf\u6a94",permalink:"/blog/read-pdf-to-images"}},l={authorsImageUrls:[void 0]},c=[];function h(n){const t={code:"code",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u8eab\u70ba\u4e00\u500b\u5c08\u696d\u7684 PyTorch \u4f7f\u7528\u8005\uff0c\u4f60\u61c9\u8a72\u65e9\u5df2\u7d93\u719f\u6089\u4e86\u5982\u4f55\u8a13\u7df4\u6a21\u578b\uff0c\u5982\u4f55\u8abf\u53c3\uff0c\u5982\u4f55\u512a\u5316\u7b49\u6280\u5de7\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u600e\u9ebc\u53ef\u80fd\u9084\u6703\u5beb\u51fa OOM\uff08Out of Memory\uff09\u7684\u7a0b\u5f0f\u5462\uff1f\u4f46\u600e\u9ebc\u5c31\u662f\u7206\u4e86\uff1f"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u8acb\u6ce8\u610f\uff0c\u9019\u88e1\u6211\u5011\u8b1b\u7684\u662f\u7cfb\u7d71\u7684\u8a18\u61b6\u9ad4\uff0c\u4e0d\u662f GPU \u7684\u8a18\u61b6\u9ad4\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u7576\u7136\uff0cGPU \u7684\u8a18\u61b6\u9ad4\u4e5f\u662f\u4e00\u500b\u5e38\u898b\u7684\u554f\u984c\uff0c\u4f46\u9019\u88e1\u6211\u5011\u4e0d\u8ac7\u9019\u500b\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"\u7531\u65bc OOM \u7684\u6210\u56e0\u592a\u591a\uff0c\u9019\u6b21\u6211\u5011\u5c31\u53ea\u8b1b\u4e00\u500b\u5c08\u696d\u5de5\u4f5c\u8005\u4e5f\u5e38\u6703\u9047\u5230\u7684\u554f\u984c\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u4f60\u53ef\u80fd\u7528\u4e86 List \u7d50\u69cb\u5566\uff01"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u7d93\u904e\u8abf\u67e5\uff0c\u6211\u5011\u627e\u5230\u4e86\u6d29\u6f0f\u767c\u751f\u6642\u7684\u78ba\u5207\u5834\u666f\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u8003\u616e\u4e0b\u9762\u7684\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from torch.utils.data import Dataset, DataLoader\nimport numpy as np\nimport torch\n\n\nclass DataIter(Dataset):\n\n    def __init__(self):\n        self.data_np = np.array([x for x in range(10000000)])\n        self.data = [x for x in range(10000000)]\n\n    def __len__(self):\n        return len(self.data)\n\n    def __getitem__(self, idx):\n        data = self.data[idx]\n        data = np.array([data], dtype=np.int64)\n        return torch.tensor(data)\n\n\ntrain_data = DataIter()\ntrain_loader = DataLoader(train_data, batch_size=300, num_workers=18)\n\nfor i, item in enumerate(train_loader):\n    if i % 1000 == 0:\n        print(i)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"\u770b\u5b8c\u9019\u500b\u4f8b\u5b50\uff0c\u4e0d\u5ee2\u8a71\uff0c\u76f4\u63a5\u8b1b\u7d50\u8ad6\uff1a"}),"\n",(0,r.jsxs)(t.p,{children:["\u770b\u5230 ",(0,r.jsx)(t.code,{children:"self.data"})," \u9019\u500b List \u4e86\u55ce\uff1f\u9019\u500b List \u6703\u5c0e\u81f4 OOM \u554f\u984c\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u5011\u8a66\u8457\u7ffb\u627e\u4e86\u4e00\u4e0b\u76f8\u95dc\u8cc7\u6599\uff0c\u767c\u73fe\u9019\u4f3c\u4e4e\u4e0d\u662f Pytorch \u7684\u554f\u984c\uff0c\u800c\u662f Python \u7684\u554f\u984c\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u7e3d\u4e4b\uff0c\u4e0d\u8981\u7528 List\uff0c\u6539\u7528 Numpy \u6216\u8005 Tensor \u4f86\u5b58\u5132\u6578\u64da\uff0c\u9019\u6a23\u5c31\u4e0d\u6703\u51fa\u73fe OOM \u554f\u984c\u4e86\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u81f3\u5c11\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u9019\u6a23\u505a\u662f\u6709\u6548\u7684\u3002"})]})}function d(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>i});var r=e(6540);const a={},o=r.createContext(a);function s(n){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),r.createElement(o.Provider,{value:t},n.children)}}}]);