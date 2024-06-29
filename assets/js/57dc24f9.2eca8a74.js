"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2081],{4474:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>r,toc:()=>t});var d=i(74848),s=i(28453);const c={sidebar_position:4},o="JPG Process",r={id:"docsaidkit/funcs/vision/improc/jpg_process",title:"JPG Process",description:"getorientationcode(stream: Union[str, Path, bytes]) -> Union[ROTATE, None]",source:"@site/docs/docsaidkit/funcs/vision/improc/jpg_process.md",sourceDirName:"docsaidkit/funcs/vision/improc",slug:"/docsaidkit/funcs/vision/improc/jpg_process",permalink:"/docs/docsaidkit/funcs/vision/improc/jpg_process",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"pdf2imgs",permalink:"/docs/docsaidkit/funcs/vision/improc/pdf2imgs"},next:{title:"PNG Process",permalink:"/docs/docsaidkit/funcs/vision/improc/png_process"}},l={},t=[{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u53c3\u6578",id:"\u53c3\u6578",level:2},{value:"jpgencode",id:"jpgencode",level:3},{value:"jpgdecode",id:"jpgdecode",level:3},{value:"jpgread",id:"jpgread",level:3},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"jpgencode",id:"jpgencode-1",level:3},{value:"jpgdecode",id:"jpgdecode-1",level:3},{value:"jpgread",id:"jpgread-1",level:3},{value:"\u9644\u52a0\u8aaa\u660e\uff1aTurboJPEG",id:"\u9644\u52a0\u8aaa\u660eturbojpeg",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"jpg-process",children:"JPG Process"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L34C5-L34C25",children:"get_orientation_code(stream: Union[str, Path, bytes]) -> Union[ROTATE, None]"})}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L50",children:"jpgencode(img: np.ndarray, quality: int = 90) -> Union[bytes, None]"})}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L60",children:"jpgdecode(byte_: bytes) -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/vision/improc.py#L72",children:"jpgread(img_file: Union[str, Path]) -> Union[np.ndarray, None]"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u9019\u4e00\u7cfb\u5217\u51fd\u6578\u63d0\u4f9b\u4e86\u5c0d JPG \u5716\u50cf\u7684\u7de8\u78bc\u3001\u89e3\u78bc\u548c\u8b80\u53d6\u652f\u6301\uff0c\u4ee5\u53ca\u5f9e EXIF \u6578\u64da\u81ea\u52d5\u8abf\u6574\u5716\u50cf\u65b9\u5411\u7684\u529f\u80fd\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u8aaa\u660e",children:"\u8aaa\u660e"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"get_orientation_code"}),"\uff1a\u5f9e\u5716\u50cf\u7684 EXIF \u6578\u64da\u4e2d\u63d0\u53d6\u65b9\u5411\u4fe1\u606f\uff0c\u4e26\u5c07\u5176\u8f49\u63db\u70ba\u9069\u5408\u65bc\u5716\u50cf\u65cb\u8f49\u7684\u4ee3\u78bc\u3002\u9019\u4e00\u6b65\u662f\u5728 ",(0,d.jsx)(n.code,{children:"jpgdecode"})," \u548c ",(0,d.jsx)(n.code,{children:"jpgread"})," \u51fd\u6578\u4e2d\u81ea\u52d5\u5b8c\u6210\u7684\uff0c\u4ee5\u78ba\u4fdd\u8b80\u53d6\u7684\u5716\u50cf\u986f\u793a\u65b9\u5411\u6b63\u78ba\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"jpgencode"}),"\uff1a\u5c07 NumPy \u5716\u50cf\u6578\u7d44\u7de8\u78bc\u70ba JPG \u683c\u5f0f\u7684\u5b57\u7bc0\u4e32\uff0c\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"jpgencode"})," \u51fd\u6578\u6642\uff0c\u53ef\u4ee5\u901a\u904e\u8abf\u6574 ",(0,d.jsx)(n.code,{children:"quality"})," \u53c3\u6578\u4f86\u5e73\u8861\u5716\u50cf\u8cea\u91cf\u8207\u6587\u4ef6\u5927\u5c0f\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"jpgdecode"}),"\uff1a\u5c07 JPG \u683c\u5f0f\u7684\u5b57\u7bc0\u4e32\u89e3\u78bc\u70ba NumPy \u5716\u50cf\u6578\u7d44\uff0c\u4e26\u6839\u64da EXIF \u6578\u64da\u8abf\u6574\u5716\u50cf\u65b9\u5411\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"jpgread"}),"\uff1a\u5f9e\u6587\u4ef6\u4e2d\u8b80\u53d6 JPG \u5716\u50cf\uff0c\u89e3\u78bc\u70ba NumPy \u5716\u50cf\u6578\u7d44\uff0c\u4e26\u6839\u64da EXIF \u6578\u64da\u8abf\u6574\u5716\u50cf\u65b9\u5411\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53c3\u6578",children:"\u53c3\u6578"}),"\n",(0,d.jsx)(n.h3,{id:"jpgencode",children:"jpgencode"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"img"})," (",(0,d.jsx)(n.code,{children:"np.ndarray"}),")\uff1a\u8981\u7de8\u78bc\u7684\u5716\u50cf\u6578\u7d44\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"quality"})," (",(0,d.jsx)(n.code,{children:"int"}),")\uff1a\u7de8\u78bc\u8cea\u91cf\uff0c\u7bc4\u570d\u70ba 1 \u81f3 100\u3002\u9810\u8a2d\u70ba 90\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"jpgdecode",children:"jpgdecode"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"byte_"})," (",(0,d.jsx)(n.code,{children:"bytes"}),")\uff1a\u8981\u89e3\u78bc\u7684 JPG \u683c\u5f0f\u7684\u5b57\u7bc0\u4e32\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"jpgread",children:"jpgread"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"img_file"})," (",(0,d.jsx)(n.code,{children:"Union[str, Path]"}),")\uff1a\u8981\u8b80\u53d6\u7684 JPG \u5716\u50cf\u6587\u4ef6\u8def\u5f91\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u7bc4\u4f8b",children:"\u7bc4\u4f8b"}),"\n",(0,d.jsx)(n.h3,{id:"jpgencode-1",children:"jpgencode"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport docsaidkit as D\n\nimg_array = np.random.rand(100, 100, 3) * 255\nencoded_bytes = D.jpgencode(img_array, quality=95)\n"})}),"\n",(0,d.jsx)(n.h3,{id:"jpgdecode-1",children:"jpgdecode"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"decoded_img = D.jpgdecode(encoded_bytes)\n"})}),"\n",(0,d.jsx)(n.h3,{id:"jpgread-1",children:"jpgread"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"img_array = D.jpgread('path/to/image.jpg')\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u9644\u52a0\u8aaa\u660eturbojpeg",children:"\u9644\u52a0\u8aaa\u660e\uff1aTurboJPEG"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"https://github.com/libjpeg-turbo/libjpeg-turbo",children:(0,d.jsx)(n.strong,{children:"TurboJPEG"})})," \u662f\u4e00\u7a2e\u9ad8\u6548\u7684 JPEG \u5716\u50cf\u8655\u7406\u5eab\uff0c\u63d0\u4f9b\u4e86\u5feb\u901f\u7684\u5716\u50cf\u7de8\u78bc\u3001\u89e3\u78bc\u3001\u58d3\u7e2e\u548c\u89e3\u58d3\u7e2e\u529f\u80fd\u3002\u5728 ",(0,d.jsx)(n.code,{children:"jpgencode"})," \u548c ",(0,d.jsx)(n.code,{children:"jpgdecode"})," \u51fd\u6578\u4e2d\uff0c\u6211\u5011\u4f7f\u7528\u4e86 ",(0,d.jsx)(n.code,{children:"TurboJPEG"})," \u9032\u884c JPG \u5716\u50cf\u7684\u7de8\u78bc\u548c\u89e3\u78bc\u3002",(0,d.jsx)(n.code,{children:"TurboJPEG"})," \u662f ",(0,d.jsx)(n.code,{children:"libjpeg-turbo"})," \u7684 Python \u5c01\u88dd\uff0c\u5b83\u63d0\u4f9b\u4e86\u66f4\u5feb\u7684\u5716\u50cf\u7de8\u78bc\u548c\u89e3\u78bc\u901f\u5ea6\uff0c\u4e26\u652f\u6301\u591a\u7a2e\u5716\u50cf\u683c\u5f0f\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u7279\u9ede"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u9ad8\u6548\u7387"}),"\uff1a\u5229\u7528\u4e86 libjpeg-turbo \u5eab\u7684\u9ad8\u6027\u80fd\u7279\u6027\uff0c\u76f8\u8f03\u65bc\u50b3\u7d71\u7684 JPEG \u8655\u7406\u65b9\u6cd5\uff0cTurboJPEG \u53ef\u4ee5\u5927\u5e45\u63d0\u9ad8\u5716\u50cf\u8655\u7406\u7684\u901f\u5ea6\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u6613\u7528\u6027"}),"\uff1a\u63d0\u4f9b\u4e86\u7c21\u6f54\u660e\u4e86\u7684 API\uff0c\u4f7f\u5f97\u958b\u767c\u8005\u53ef\u4ee5\u8f15\u9b06\u5730\u5728\u61c9\u7528\u7a0b\u5e8f\u4e2d\u5be6\u73fe\u9ad8\u6548\u7684 JPEG \u5716\u50cf\u8655\u7406\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u9748\u6d3b\u6027"}),"\uff1a\u652f\u6301\u591a\u7a2e\u5716\u50cf\u8cea\u91cf\u548c\u58d3\u7e2e\u7b49\u7d1a\u7684\u8a2d\u7f6e\uff0c\u6eff\u8db3\u4e0d\u540c\u5834\u666f\u4e0b\u5c0d\u5716\u50cf\u8cea\u91cf\u548c\u6587\u4ef6\u5927\u5c0f\u7684\u9700\u6c42\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u8de8\u5e73\u53f0"}),"\uff1a\u652f\u6301 Windows\u3001macOS \u548c Linux \u7b49\u591a\u500b\u64cd\u4f5c\u7cfb\u7d71\uff0c\u65b9\u4fbf\u5728\u4e0d\u540c\u958b\u767c\u74b0\u5883\u4e2d\u4f7f\u7528\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5b89\u88dd\u5b8c\u6210\u5f8c\uff0c\u53ef\u4ee5\u901a\u904e\u4ee5\u4e0b\u65b9\u5f0f\u5728 Python \u4e2d\u4f7f\u7528 TurboJPEG \u9032\u884c\u7de8\u89e3\u78bc\u7684\u529f\u80fd\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"from turbojpeg import TurboJPEG\n\n# \u521d\u59cb\u5316 TurboJPEG \u5be6\u4f8b\njpeg = TurboJPEG()\n\n# \u89e3\u78bc\nbgr_array = jpeg.decode(byte_)\n\n# \u7de8\u78bc\nbyte_ = jpeg.encode(img, quality=quality)\n"})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var d=i(96540);const s={},c=d.createContext(s);function o(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);