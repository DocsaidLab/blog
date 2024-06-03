"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[34237],{98660:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=i(74848),t=i(28453);const r={slug:"opencv-imread",title:"Reading HEIC Images in Python",authors:"Zephyr",tags:["Python","imread","HEIC","TurboJPEG"],image:"/en/img/2024/0213.webp",description:"Optimizing imread for reading HEIC images!"},o=void 0,s={permalink:"/en/blog/opencv-imread",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024/02-13-imread/index.md",title:"Reading HEIC Images in Python",description:"Optimizing imread for reading HEIC images!",date:"2024-02-13T00:00:00.000Z",tags:[{inline:!0,label:"Python",permalink:"/en/blog/tags/python"},{inline:!0,label:"imread",permalink:"/en/blog/tags/imread"},{inline:!0,label:"HEIC",permalink:"/en/blog/tags/heic"},{inline:!0,label:"TurboJPEG",permalink:"/en/blog/tags/turbo-jpeg"}],readingTime:3.1,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"opencv-imread",title:"Reading HEIC Images in Python",authors:"Zephyr",tags:["Python","imread","HEIC","TurboJPEG"],image:"/en/img/2024/0213.webp",description:"Optimizing imread for reading HEIC images!"},unlisted:!1,prevItem:{title:"Convert PDF to Images using Python",permalink:"/en/blog/convert-pdf-to-images"},nextItem:{title:"Troubleshooting Log",permalink:"/en/blog/error-record"}},c={authorsImageUrls:[void 0]},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Limitation 1: HEIC Format",id:"limitation-1-heic-format",level:2},{value:"Limitation 2: Slow JPG Reading",id:"limitation-2-slow-jpg-reading",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("figure",{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"title",src:i(90789).A+"",width:"1024",height:"1024"}),"\n",(0,a.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading this article"})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["When you want to read an image, you might use the ",(0,a.jsx)(n.code,{children:"imread"})," function from OpenCV. This function is very convenient as it can read various image formats and directly load the image into a ",(0,a.jsx)(n.code,{children:"numpy.ndarray"})," variable. However, this function is not always universal, and you may encounter some issues."]}),"\n",(0,a.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsxs)(n.p,{children:["The basic usage of the ",(0,a.jsx)(n.code,{children:"imread"})," function is straightforward; you just need to pass the path to the image:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import cv2\n\nimage = cv2.imread('path/to/image.jpg')\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can use common image formats such as BMP, JPG, PNG, TIF, and others."}),"\n",(0,a.jsx)(n.h2,{id:"limitation-1-heic-format",children:"Limitation 1: HEIC Format"}),"\n",(0,a.jsxs)(n.p,{children:["Images captured on iOS devices are typically in HEIC format, which is not supported in OpenCV. If you try to use the ",(0,a.jsx)(n.code,{children:"imread"})," function to read HEIC format images, you will get a ",(0,a.jsx)(n.code,{children:"None"})," return value."]}),"\n",(0,a.jsxs)(n.p,{children:["To address this issue, we need to use the ",(0,a.jsx)(n.code,{children:"pyheif"})," package to read HEIC format images and then convert them into ",(0,a.jsx)(n.code,{children:"numpy.ndarray"})," variables."]}),"\n",(0,a.jsx)(n.p,{children:"First, install the necessary packages:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install libheif-dev\npip install pyheif\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, write a simple function:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import cv2\nimport pyheif\nimport numpy as np\n\ndef read_heic_to_numpy(file_path: str):\n    heif_file = pyheif.read(file_path)\n    data = heif_file.data\n    if heif_file.mode == "RGB":\n        numpy_array = np.frombuffer(data, dtype=np.uint8).reshape(\n            heif_file.size[1], heif_file.size[0], 3)\n    elif heif_file.mode == "RGBA":\n        numpy_array = np.frombuffer(data, dtype=np.uint8).reshape(\n            heif_file.size[1], heif_file.size[0], 4)\n    else:\n        raise ValueError("Unsupported HEIC color mode")\n    return numpy_array\n\n\nimg = read_heic_to_numpy(\'path/to/image.heic\')\nimg = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"limitation-2-slow-jpg-reading",children:"Limitation 2: Slow JPG Reading"}),"\n",(0,a.jsxs)(n.p,{children:["In some cases, the ",(0,a.jsx)(n.code,{children:"imread"})," function's performance in reading JPG format images can be slow. This is because OpenCV uses the ",(0,a.jsx)(n.code,{children:"libjpeg"})," library to read JPG format images, and ",(0,a.jsx)(n.code,{children:"libjpeg"})," itself is not very efficient."]}),"\n",(0,a.jsxs)(n.p,{children:["Here, we introduce the ",(0,a.jsx)(n.code,{children:"TurboJPEG"})," package, an alternative to ",(0,a.jsx)(n.code,{children:"libjpeg"})," with better performance. We can use ",(0,a.jsx)(n.code,{children:"TurboJPEG"})," to accelerate the reading of JPG format images."]}),"\n",(0,a.jsx)(n.p,{children:"Similarly, install the necessary packages:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install libturbojpeg exiftool\npip install PyTurboJPEG\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, let's optimize it a bit:"}),"\n",(0,a.jsx)(n.p,{children:"Generally, this can speed up the process by about 2-3 times."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import cv2\nimport piexif\nfrom enum import IntEnum\nfrom pathlib import Path\nfrom turbojpeg import TurboJPEG\n\n\njpeg = TurboJPEG()\n\n\nclass ROTATE(IntEnum):\n    ROTATE_90 = cv2.ROTATE_90_CLOCKWISE\n    ROTATE_180 = cv2.ROTATE_180\n    ROTATE_270 = cv2.ROTATE_90_COUNTERCLOCKWISE\n\n\ndef imrotate90(img, rotate_code: ROTATE) -> np.ndarray:\n    return cv2.rotate(img.copy(), rotate_code)\n\n\ndef get_orientation_code(stream: Union[str, Path, bytes]):\n    code = None\n    try:\n        exif_dict = piexif.load(stream)\n        if piexif.ImageIFD.Orientation in exif_dict[\"0th\"]:\n            orientation = exif_dict[\"0th\"][piexif.ImageIFD.Orientation]\n            if orientation == 3:\n                code = ROTATE.ROTATE_180\n            elif orientation == 6:\n                code = ROTATE.ROTATE_90\n            elif orientation == 8:\n                code = ROTATE.ROTATE_270\n    finally:\n        return code\n\n\ndef jpgdecode(byte_: bytes) -> Union[np.ndarray, None]:\n    try:\n        bgr_array = jpeg.decode(byte_)\n        code = get_orientation_code(byte_)\n        bgr_array = imrotate90(\n            bgr_array, code) if code is not None else bgr_array\n    except:\n        bgr_array = None\n\n    return bgr_array\n\n\ndef jpgread(img_file: Union[str, Path]) -> Union[np.ndarray, None]:\n    with open(str(img_file), 'rb') as f:\n        binary_img = f.read()\n        bgr_array = jpgdecode(binary_img)\n\n    return bgr_array\n\nimg = jpgread('path/to/image.jpg')\n"})}),"\n",(0,a.jsx)(n.p,{children:"This way, reading JPG format images can be accelerated."}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"What if we want this program to be more intelligent, choosing a suitable way to load images on its own?"}),"\n",(0,a.jsx)(n.p,{children:"We can write a function to select the appropriate loading method based on the image's format:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def imread(\n    path: Union[str, Path],\n    color_base: str = 'BGR',\n    verbose: bool = False\n) -> Union[np.ndarray, None]:\n\n    if not Path(path).exists():\n        raise FileExistsError(f'{path} can not be found.')\n\n    if Path(path).suffix.lower() == '.heic':\n        img = read_heic_to_numpy(str(path))\n        img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)\n    else:\n        img = jpgread(path)\n        img = cv2.imread(str(path)) if img is None else img\n\n    if img is None:\n        if verbose:\n            warnings.warn(\"Got a None type image.\")\n        return\n\n    if color_base != 'BGR':\n        img = imcvtcolor(img, cvt_mode=f'BGR2{color_base}')\n\n    return img\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For detailed code, you can refer to: ",(0,a.jsx)(n.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/eb8ac0a56779a75dcc951c683001e6129052cc5a/docsaidkit/vision/improc.py#L197",children:"imread.py"})]}),"\n",(0,a.jsxs)(n.p,{children:["Above are some limitations and solutions regarding OpenCV's ",(0,a.jsx)(n.code,{children:"imread"})," function."]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},90789:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/0213-ccba02633c06b5ebe379db358fc45ace.webp"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var a=i(96540);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);