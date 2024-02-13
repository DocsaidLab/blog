"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5636],{7132:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=i(7624),a=i(2172);const t={slug:"opencv-imread",title:"\u8b80\u53d6\u5f71\u50cf\uff0cOpenCV \u7684 imread \u4e0d\u662f\u842c\u80fd\u7684",authors:"TSE",tags:["OpenCV","Python","imread"]},o=void 0,s={permalink:"/blog/opencv-imread",source:"@site/blog/2024-02-13-imread.md",title:"\u8b80\u53d6\u5f71\u50cf\uff0cOpenCV \u7684 imread \u4e0d\u662f\u842c\u80fd\u7684",description:"\u7576\u4f60\u60f3\u8981\u8b80\u53d6\u4e00\u5f35\u5f71\u50cf\u6642\uff0c\u4f60\u53ef\u80fd\u6703\u4f7f\u7528 OpenCV \u7684 imread \u51fd\u6578\u3002\u9019\u500b\u51fd\u6578\u975e\u5e38\u65b9\u4fbf\uff0c\u5b83\u53ef\u4ee5\u8b80\u53d6\u591a\u7a2e\u683c\u5f0f\u7684\u5f71\u50cf\uff0c\u4e26\u4e14\u53ef\u4ee5\u76f4\u63a5\u5c07\u5f71\u50cf\u8b80\u53d6\u5230 numpy.ndarray \u985e\u578b\u7684\u8b8a\u6578\u4e2d\u3002\u7136\u800c\uff0c\u9019\u500b\u51fd\u6578\u4e26\u4e0d\u662f\u842c\u80fd\u7684\uff0c\u6709\u6642\u5019\u4f60\u53ef\u80fd\u6703\u9047\u5230\u4e00\u4e9b\u554f\u984c\u3002",date:"2024-02-13T00:00:00.000Z",formattedDate:"2024\u5e742\u670813\u65e5",tags:[{label:"OpenCV",permalink:"/blog/tags/open-cv"},{label:"Python",permalink:"/blog/tags/python"},{label:"imread",permalink:"/blog/tags/imread"}],readingTime:4.105,hasTruncateMarker:!0,authors:[{name:"TSE",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"TSE"}],frontMatter:{slug:"opencv-imread",title:"\u8b80\u53d6\u5f71\u50cf\uff0cOpenCV \u7684 imread \u4e0d\u662f\u842c\u80fd\u7684",authors:"TSE",tags:["OpenCV","Python","imread"]},unlisted:!1,nextItem:{title:"gosu\uff1a\u5bb9\u5668\u74b0\u5883\u4e0b\u7684\u4f7f\u7528\u8005\u5207\u63db\u5de5\u5177",permalink:"/blog/gosu-usage"}},d={authorsImageUrls:[void 0]},c=[{value:"\u57fa\u790e\u7528\u6cd5",id:"\u57fa\u790e\u7528\u6cd5",level:2},{value:"\u9650\u5236\u4e00\uff1aHEIC \u683c\u5f0f",id:"\u9650\u5236\u4e00heic-\u683c\u5f0f",level:2},{value:"\u9650\u5236\u4e8c\uff1aJPG \u8b80\u53d6\u901f\u5ea6\u6162",id:"\u9650\u5236\u4e8cjpg-\u8b80\u53d6\u901f\u5ea6\u6162",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u7576\u4f60\u60f3\u8981\u8b80\u53d6\u4e00\u5f35\u5f71\u50cf\u6642\uff0c\u4f60\u53ef\u80fd\u6703\u4f7f\u7528 OpenCV \u7684 ",(0,r.jsx)(n.code,{children:"imread"})," \u51fd\u6578\u3002\u9019\u500b\u51fd\u6578\u975e\u5e38\u65b9\u4fbf\uff0c\u5b83\u53ef\u4ee5\u8b80\u53d6\u591a\u7a2e\u683c\u5f0f\u7684\u5f71\u50cf\uff0c\u4e26\u4e14\u53ef\u4ee5\u76f4\u63a5\u5c07\u5f71\u50cf\u8b80\u53d6\u5230 ",(0,r.jsx)(n.code,{children:"numpy.ndarray"})," \u985e\u578b\u7684\u8b8a\u6578\u4e2d\u3002\u7136\u800c\uff0c\u9019\u500b\u51fd\u6578\u4e26\u4e0d\u662f\u842c\u80fd\u7684\uff0c\u6709\u6642\u5019\u4f60\u53ef\u80fd\u6703\u9047\u5230\u4e00\u4e9b\u554f\u984c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u790e\u7528\u6cd5",children:"\u57fa\u790e\u7528\u6cd5"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"imread"})," \u51fd\u6578\u7684\u57fa\u790e\u7528\u6cd5\u975e\u5e38\u7c21\u55ae\uff0c\u4f60\u53ea\u9700\u8981\u50b3\u5165\u5f71\u50cf\u7684\u8def\u5f91\u5373\u53ef\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import cv2\n\nimage = cv2.imread('path/to/image.jpg')\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7684\u5f71\u50cf\u683c\u5f0f\u5305\u62ec\uff1aBMP, JPG, PNG, TIF \u7b49\u5e38\u898b\u5f71\u50cf\u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u9650\u5236\u4e00heic-\u683c\u5f0f",children:"\u9650\u5236\u4e00\uff1aHEIC \u683c\u5f0f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 iOS \u88dd\u7f6e\u4e0a\u62cd\u651d\u7684\u7167\u7247\u901a\u5e38\u662f HEIC \u683c\u5f0f\uff0c\u9019\u7a2e\u683c\u5f0f\u5728 OpenCV \u4e2d\u662f\u4e0d\u652f\u63f4\u7684\u3002\u5982\u679c\u4f60\u5617\u8a66\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"imread"})," \u51fd\u6578\u8b80\u53d6 HEIC \u683c\u5f0f\u7684\u5f71\u50cf\uff0c\u4f60\u6703\u5f97\u5230\u4e00\u500b ",(0,r.jsx)(n.code,{children:"None"})," \u7684\u8fd4\u56de\u503c\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u5f97\u7528 pyheif \u9019\u500b\u5957\u4ef6\u4f86\u8b80\u53d6 HEIC \u683c\u5f0f\u7684\u5f71\u50cf\uff0c\u7136\u5f8c\u518d\u5c07\u5176\u8f49\u63db\u6210 ",(0,r.jsx)(n.code,{children:"numpy.ndarray"})," \u985e\u578b\u7684\u8b8a\u6578\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u5011\u5b89\u88dd\u5fc5\u8981\u5957\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install libheif-dev\npip install pyheif\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u8457\u5beb\u500b\u7c21\u55ae\u7684\u51fd\u6578\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import cv2\nimport pyheif\nimport numpy as np\n\ndef read_heic_to_numpy(file_path: str):\n    heif_file = pyheif.read(file_path)\n    data = heif_file.data\n    if heif_file.mode == "RGB":\n        numpy_array = np.frombuffer(data, dtype=np.uint8).reshape(\n            heif_file.size[1], heif_file.size[0], 3)\n    elif heif_file.mode == "RGBA":\n        numpy_array = np.frombuffer(data, dtype=np.uint8).reshape(\n            heif_file.size[1], heif_file.size[0], 4)\n    else:\n        raise ValueError("Unsupported HEIC color mode")\n    return numpy_array\n\n\nimg = read_heic_to_numpy(\'path/to/image.heic\')\nimg = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u9650\u5236\u4e8cjpg-\u8b80\u53d6\u901f\u5ea6\u6162",children:"\u9650\u5236\u4e8c\uff1aJPG \u8b80\u53d6\u901f\u5ea6\u6162"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c",(0,r.jsx)(n.code,{children:"imread"})," \u51fd\u6578\u8b80\u53d6 JPG \u683c\u5f0f\u7684\u5f71\u50cf\u901f\u5ea6\u6703\u975e\u5e38\u6162\u3002\u9019\u662f\u56e0\u70ba OpenCV \u5728\u8b80\u53d6 JPG \u683c\u5f0f\u7684\u5f71\u50cf\u6642\uff0c\u6703\u4f7f\u7528 libjpeg \u9019\u500b\u5eab\uff0c\u800c libjpeg \u672c\u8eab\u7684\u6548\u80fd\u5c31\u4e0d\u662f\u5f88\u597d\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9019\u908a\uff0c\u6211\u5011\u5f15\u5165 TurboJPEG \u9019\u500b\u5957\u4ef6\uff0c\u5b83\u662f libjpeg \u7684\u4e00\u500b\u66ff\u4ee3\u54c1\uff0c\u6548\u80fd\u66f4\u597d\u3002\u6211\u5011\u53ef\u4ee5\u4f7f\u7528 TurboJPEG \u4f86\u52a0\u901f\u8b80\u53d6 JPG \u683c\u5f0f\u7684\u5f71\u50cf\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8ddf\u4e4b\u524d\u4e00\u6a23\uff0c\u6211\u5011\u5148\u5b89\u88dd\u5fc5\u8981\u5957\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install libturbojpeg exiftool\npip install PyTurboJPEG\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u518d\u4f86\u6211\u5011\u5beb\u4e00\u9ede\u7a0b\u5f0f\uff0c\u5e6b\u4ed6\u52a0\u901f\u4e00\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u822c\u4f86\u8aaa\uff0c\u53ef\u4ee5\u52a0\u901f\u5927\u7d04 2-3 \u500d\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import cv2\nimport piexif\nfrom enum import IntEnum\nfrom pathlib import Path\nfrom turbojpeg import TurboJPEG\n\n\njpeg = TurboJPEG()\n\n\nclass ROTATE(IntEnum):\n    ROTATE_90 = cv2.ROTATE_90_CLOCKWISE\n    ROTATE_180 = cv2.ROTATE_180\n    ROTATE_270 = cv2.ROTATE_90_COUNTERCLOCKWISE\n\n\ndef imrotate90(img, rotate_code: ROTATE) -> np.ndarray:\n    return cv2.rotate(img.copy(), rotate_code)\n\n\ndef get_orientation_code(stream: Union[str, Path, bytes]):\n    code = None\n    try:\n        exif_dict = piexif.load(stream)\n        if piexif.ImageIFD.Orientation in exif_dict[\"0th\"]:\n            orientation = exif_dict[\"0th\"][piexif.ImageIFD.Orientation]\n            if orientation == 3:\n                code = ROTATE.ROTATE_180\n            elif orientation == 6:\n                code = ROTATE.ROTATE_90\n            elif orientation == 8:\n                code = ROTATE.ROTATE_270\n    finally:\n        return code\n\n\ndef jpgdecode(byte_: bytes) -> Union[np.ndarray, None]:\n    try:\n        bgr_array = jpeg.decode(byte_)\n        code = get_orientation_code(byte_)\n        bgr_array = imrotate90(\n            bgr_array, code) if code is not None else bgr_array\n    except:\n        bgr_array = None\n\n    return bgr_array\n\n\ndef jpgread(img_file: Union[str, Path]) -> Union[np.ndarray, None]:\n    with open(str(img_file), 'rb') as f:\n        binary_img = f.read()\n        bgr_array = jpgdecode(binary_img)\n\n    return bgr_array\n\nimg = jpgread('path/to/image.jpg')\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9019\u6a23\u5c31\u53ef\u4ee5\u52a0\u901f\u8b80\u53d6 JPG \u683c\u5f0f\u7684\u5f71\u50cf\u4e86\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,r.jsx)(n.p,{children:"\u90a3\u5982\u679c\u6211\u5011\u5e0c\u671b\u9019\u500b\u7a0b\u5f0f\u53ef\u4ee5\u667a\u80fd\u4e00\u9ede\uff0c\u81ea\u5df1\u9078\u4e00\u500b\u9069\u5408\u8f09\u5165\u7684\u65b9\u5f0f\u5462\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u5011\u53ef\u4ee5\u5beb\u4e00\u500b\u51fd\u6578\uff0c\u6839\u64da\u5f71\u50cf\u7684\u683c\u5f0f\u4f86\u9078\u64c7\u5408\u9069\u7684\u8f09\u5165\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def imread(\n    path: Union[str, Path],\n    color_base: str = 'BGR',\n    verbose: bool = False\n) -> Union[np.ndarray, None]:\n\n    if not Path(path).exists():\n        raise FileExistsError(f'{path} can not found.')\n\n    if Path(path).suffix.lower() == '.heic':\n        img = read_heic_to_numpy(str(path))\n        img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)\n    else:\n        img = jpgread(path)\n        img = cv2.imread(str(path)) if img is None else img\n\n    if img is None:\n        if verbose:\n            warnings.warn(\"Got a None type image.\")\n        return\n\n    if color_base != 'BGR':\n        img = imcvtcolor(img, cvt_mode=f'BGR2{color_base}')\n\n    return img\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u53c3\u8003\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/eb8ac0a56779a75dcc951c683001e6129052cc5a/docsaidkit/vision/improc.py#L197",children:"imread.py"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0a\u5c31\u662f\u95dc\u65bc OpenCV \u7684 ",(0,r.jsx)(n.code,{children:"imread"})," \u51fd\u6578\u7684\u4e00\u4e9b\u9650\u5236\u548c\u89e3\u6c7a\u65b9\u6cd5\uff0c\u5e0c\u671b\u5c0d\u4f60\u6709\u6240\u5e6b\u52a9\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>o});var r=i(1504);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);