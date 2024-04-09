"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3123],{56137:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var i=e(74848),r=e(28453);const d={sidebar_position:6},c="Base64 Process",l={id:"docsaidkit/funcs/vision/improc/base64_process",title:"Base64 Process",description:"pybase64 \u662f\u4e00\u500b Python \u51fd\u5f0f\u5eab\uff0c\u63d0\u4f9b\u4e86 Base64 \u7de8\u78bc\u548c\u89e3\u78bc\u7684\u529f\u80fd\u3002 \u5b83\u652f\u63f4\u591a\u7a2e\u7de8\u78bc\u683c\u5f0f\uff0c\u5305\u62ec\u6a19\u6e96 Base64\u3001Base64 URL \u548c Base64 URL \u6a94\u6848\u540d\u7a31\u5b89\u5168\u7de8\u78bc\u3002 pybase64 \u662f\u57fa\u65bc base64 \u6a21\u7d44\u7684\u589e\u5f37\u7248\u672c\uff0c\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\u548c\u9078\u9805\u3002",source:"@site/docs/docsaidkit/funcs/vision/improc/base64_process.md",sourceDirName:"docsaidkit/funcs/vision/improc",slug:"/docsaidkit/funcs/vision/improc/base64_process",permalink:"/docsaidkit/funcs/vision/improc/base64_process",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1712674901e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"PNG Process",permalink:"/docsaidkit/funcs/vision/improc/png_process"},next:{title:"imencode",permalink:"/docsaidkit/funcs/vision/improc/imencode"}},o={},t=[{value:"img_to_b64",id:"img_to_b64",level:2},{value:"npy_to_b64",id:"npy_to_b64",level:2},{value:"npy_to_b64str",id:"npy_to_b64str",level:2},{value:"img_to_b64str",id:"img_to_b64str",level:2},{value:"b64_to_img",id:"b64_to_img",level:2},{value:"b64str_to_img",id:"b64str_to_img",level:2},{value:"b64_to_npy",id:"b64_to_npy",level:2},{value:"b64str_to_npy",id:"b64str_to_npy",level:2}];function h(n){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"base64-process",children:"Base64 Process"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"pybase64"})," \u662f\u4e00\u500b Python \u51fd\u5f0f\u5eab\uff0c\u63d0\u4f9b\u4e86 Base64 \u7de8\u78bc\u548c\u89e3\u78bc\u7684\u529f\u80fd\u3002 \u5b83\u652f\u63f4\u591a\u7a2e\u7de8\u78bc\u683c\u5f0f\uff0c\u5305\u62ec\u6a19\u6e96 Base64\u3001Base64 URL \u548c Base64 URL \u6a94\u6848\u540d\u7a31\u5b89\u5168\u7de8\u78bc\u3002 ",(0,i.jsx)(s.code,{children:"pybase64"})," \u662f\u57fa\u65bc ",(0,i.jsx)(s.code,{children:"base64"})," \u6a21\u7d44\u7684\u589e\u5f37\u7248\u672c\uff0c\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\u548c\u9078\u9805\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5728\u5f71\u50cf\u8655\u7406\u4e2d\uff0c\u6211\u5011\u7d93\u5e38\u9700\u8981\u5c07\u5f71\u50cf\u8cc7\u6599\u8f49\u63db\u70ba Base64 \u7de8\u78bc\u7684\u5b57\u4e32\uff0c\u4ee5\u4fbf\u5728\u7db2\u8def\u50b3\u8f38\u4e2d\u4f7f\u7528\u3002 ",(0,i.jsx)(s.code,{children:"pybase64"})," \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684\u63a5\u53e3\uff0c\u53ef\u4ee5\u5feb\u901f\u5730\u9032\u884c Base64 \u7de8\u78bc\u548c\u89e3\u78bc\u64cd\u4f5c\uff0c\u540c\u6642\u652f\u63f4\u591a\u7a2e\u7de8\u78bc\u683c\u5f0f\uff0c\u6eff\u8db3\u4e0d\u540c\u7684\u9700\u6c42\u3002"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5e38\u898b\u554f\u984c\uff1a\u5b57\u4e32 vs \u4f4d\u5143\u7d44\u5b57\u4e32\uff1f"})}),"\n",(0,i.jsx)(s.p,{children:"\u5728 Python \u4e2d\uff0c\u5b57\u4e32\uff08string\uff09\u662f Unicode \u5b57\u5143\u5e8f\u5217\uff0c\u800c\u4f4d\u5143\u7d44\u5b57\u4e32\uff08bytes\uff09\u662f\u300c\u4f4d\u5143\u7d44\u300d\u5e8f\u5217\u3002 \u5728 Base64 \u7de8\u78bc\u4e2d\uff0c\u6211\u5011\u901a\u5e38\u4f7f\u7528\u300c\u4f4d\u5143\u7d44\u300d\u5b57\u4e32\u9032\u884c\u7de8\u78bc\u548c\u89e3\u78bc\u64cd\u4f5c\uff0c\u56e0\u70ba Base64 \u7de8\u78bc\u662f\u5c0d\u300c\u4f4d\u5143\u7d44\u300d\u8cc7\u6599\u9032\u884c\u7684\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"img_to_b64",children:"img_to_b64"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L116",children:"img_to_b64(img: np.ndarray, IMGTYP: Union[str, int, IMGTYP] = IMGTYP.JPEG) -> Union[bytes, None]"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 NumPy \u5716\u50cf\u6578\u7d44\u8f49\u63db\u70ba Base64 \u5b57\u7bc0\u4e32\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"img"})," (",(0,i.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u8f49\u63db\u7684\u5716\u50cf\u6578\u7d44\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"IMGTYP"})," (",(0,i.jsx)(s.code,{children:"Union[str, int, IMGTYP]"}),")\uff1a\u5716\u50cf\u985e\u578b\u3002\u652f\u6301\u7684\u985e\u578b\u6709 ",(0,i.jsx)(s.code,{children:"IMGTYP.JPEG"})," \u548c ",(0,i.jsx)(s.code,{children:"IMGTYP.PNG"}),"\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"IMGTYP.JPEG"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"bytes"}),"\uff1a\u8f49\u63db\u5f8c\u7684 Base64 \u5b57\u7bc0\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nb64 = D.img_to_b64(img, IMGTYP=D.IMGTYP.PNG)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"npy_to_b64",children:"npy_to_b64"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L126",children:"npy_to_b64(x: np.ndarray, dtype='float32') -> bytes"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 NumPy \u6578\u7d44\u8f49\u63db\u70ba Base64 \u5b57\u7bc0\u4e32\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"x"})," (",(0,i.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u8f49\u63db\u7684 NumPy \u6578\u7d44\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"dtype"})," (",(0,i.jsx)(s.code,{children:"str"}),")\uff1a\u6578\u64da\u985e\u578b\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"'float32'"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"bytes"}),"\uff1a\u8f49\u63db\u5f8c\u7684 Base64 \u5b57\u7bc0\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\nimport numpy as np\n\nx = np.random.rand(100, 100, 3)\nb64 = D.npy_to_b64(x)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"npy_to_b64str",children:"npy_to_b64str"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L130",children:"npy_to_b64str(x: np.ndarray, dtype='float32', string_encode: str = 'utf-8') -> str"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 NumPy \u6578\u7d44\u8f49\u63db\u70ba Base64 \u5b57\u4e32\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"x"})," (",(0,i.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u8f49\u63db\u7684 NumPy \u6578\u7d44\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"dtype"})," (",(0,i.jsx)(s.code,{children:"str"}),")\uff1a\u6578\u64da\u985e\u578b\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"'float32'"}),"\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"string_encode"})," (",(0,i.jsx)(s.code,{children:"str"}),")\uff1a\u5b57\u4e32\u7de8\u78bc\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"'utf-8'"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"str"}),"\uff1a\u8f49\u63db\u5f8c\u7684 Base64 \u5b57\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\nimport numpy as np\n\nx = np.random.rand(100, 100, 3)\n\nb64str = D.npy_to_b64str(x)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"img_to_b64str",children:"img_to_b64str"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L134",children:"img_to_b64str(img: np.ndarray, IMGTYP: Union[str, int, IMGTYP] = IMGTYP.JPEG, string_encode: str = 'utf-8') -> Union[str, None]"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 NumPy \u5716\u50cf\u6578\u7d44\u8f49\u63db\u70ba Base64 \u5b57\u4e32\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"img"})," (",(0,i.jsx)(s.code,{children:"np.ndarray"}),")\uff1a\u8981\u8f49\u63db\u7684\u5716\u50cf\u6578\u7d44\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"IMGTYP"})," (",(0,i.jsx)(s.code,{children:"Union[str, int, IMGTYP]"}),")\uff1a\u5716\u50cf\u985e\u578b\u3002\u652f\u6301\u7684\u985e\u578b\u6709 ",(0,i.jsx)(s.code,{children:"IMGTYP.JPEG"})," \u548c ",(0,i.jsx)(s.code,{children:"IMGTYP.PNG"}),"\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"IMGTYP.JPEG"}),"\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"string_encode"})," (",(0,i.jsx)(s.code,{children:"str"}),")\uff1a\u5b57\u4e32\u7de8\u78bc\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"'utf-8'"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"str"}),"\uff1a\u8f49\u63db\u5f8c\u7684 Base64 \u5b57\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\nb64str = D.img_to_b64str(img, IMGTYP=D.IMGTYP.PNG)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"b64_to_img",children:"b64_to_img"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L143",children:"b64_to_img(b64: bytes) -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 Base64 \u5b57\u7bc0\u4e32\u8f49\u63db\u70ba NumPy \u5716\u50cf\u6578\u7d44\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"b64"})," (",(0,i.jsx)(s.code,{children:"bytes"}),")\uff1a\u8981\u8f49\u63db\u7684 Base64 \u5b57\u7bc0\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u8f49\u63db\u5f8c\u7684 NumPy \u5716\u50cf\u6578\u7d44\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nb64 = D.img_to_b64(D.imread('lena.png'))\nimg = D.b64_to_img(b64)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"b64str_to_img",children:"b64str_to_img"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L151",children:"b64str_to_img(b64str: Union[str, None], string_encode: str = 'utf-8') -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 Base64 \u5b57\u4e32\u8f49\u63db\u70ba NumPy \u5716\u50cf\u6578\u7d44\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"b64str"})," (",(0,i.jsx)(s.code,{children:"Union[str, None]"}),")\uff1a\u8981\u8f49\u63db\u7684 Base64 \u5b57\u4e32\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"string_encode"})," (",(0,i.jsx)(s.code,{children:"str"}),")\uff1a\u5b57\u4e32\u7de8\u78bc\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"'utf-8'"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u8f49\u63db\u5f8c\u7684 NumPy \u5716\u50cf\u6578\u7d44\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nb64 = D.img_to_b64(D.imread('lena.png'))\nb64str = b64.decode('utf-8')\nimg = D.b64str_to_img(b64str)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"b64_to_npy",children:"b64_to_npy"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L166",children:"b64_to_npy(x: bytes, dtype='float32') -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 Base64 \u5b57\u7bc0\u4e32\u8f49\u63db\u70ba NumPy \u6578\u7d44\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"x"})," (",(0,i.jsx)(s.code,{children:"bytes"}),")\uff1a\u8981\u8f49\u63db\u7684 Base64 \u5b57\u7bc0\u4e32\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"dtype"})," (",(0,i.jsx)(s.code,{children:"str"}),")\uff1a\u6578\u64da\u985e\u578b\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"'float32'"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u8f49\u63db\u5f8c\u7684 NumPy \u6578\u7d44\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nb64 = D.npy_to_b64(np.random.rand(100, 100, 3))\nx = D.b64_to_npy(b64)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"b64str_to_npy",children:"b64str_to_npy"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/improc.py#L170",children:"b64str_to_npy(x: bytes, dtype='float32', string_encode: str = 'utf-8') -> np.ndarray"})}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8aaa\u660e"}),"\uff1a\u5c07 Base64 \u5b57\u4e32\u8f49\u63db\u70ba NumPy \u6578\u7d44\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53c3\u6578"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"x"})," (",(0,i.jsx)(s.code,{children:"bytes"}),")\uff1a\u8981\u8f49\u63db\u7684 Base64 \u5b57\u4e32\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"dtype"})," (",(0,i.jsx)(s.code,{children:"str"}),")\uff1a\u6578\u64da\u985e\u578b\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"'float32'"}),"\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"string_encode"})," (",(0,i.jsx)(s.code,{children:"str"}),")\uff1a\u5b57\u4e32\u7de8\u78bc\u3002\u9810\u8a2d\u70ba ",(0,i.jsx)(s.code,{children:"'utf-8'"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u50b3\u56de\u503c"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"np.ndarray"}),"\uff1a\u8f49\u63db\u5f8c\u7684 NumPy \u6578\u7d44\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"import docsaidkit as D\n\nb64 = D.npy_to_b64(np.random.rand(100, 100, 3))\nx = D.b64str_to_npy(b64.decode('utf-8'))\n"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>l});var i=e(96540);const r={},d=i.createContext(r);function c(n){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(d.Provider,{value:s},n.children)}}}]);