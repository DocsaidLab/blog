"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7725],{86309:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=a(74848),r=a(28453);const i={sidebar_position:5},o="\u5716\u50cf\u589e\u5f37",d={id:"wordcanvas/imgaug",title:"\u5716\u50cf\u589e\u5f37",description:"\u6211\u5011\u6c92\u6709\u628a\u5716\u50cf\u589e\u5f37\u7684\u529f\u80fd\u505a\u5728 WordCanvas \u5167\uff0c\u56e0\u70ba\u6211\u5011\u8a8d\u70ba\u9019\u662f\u4e00\u500b\u975e\u5e38\u500b\u6027\u5316\u7684\u9700\u6c42\uff0c\u4e0d\u540c\u7684\u61c9\u7528\u5834\u666f\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u7684\u589e\u5f37\u65b9\u5f0f\u3002\u4f46\u6211\u5011\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7c21\u55ae\u7684\u7bc4\u4f8b\uff0c\u8aaa\u660e\u8a72\u5982\u4f55\u5be6\u73fe\u5716\u50cf\u589e\u5f37\u7684\u6d41\u7a0b\u3002",source:"@site/docs/wordcanvas/imgaug.md",sourceDirName:"wordcanvas",slug:"/wordcanvas/imgaug",permalink:"/wordcanvas/imgaug",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713878085e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u9032\u968e\u7528\u6cd5",permalink:"/wordcanvas/advance"},next:{title:"\u76f8\u95dc\u8cc7\u6e90",permalink:"/wordcanvas/tools"}},t={},l=[{value:"\u7bc4\u4f8b\u4e00\uff1a<code>Shear</code>",id:"\u7bc4\u4f8b\u4e00shear",level:2},{value:"\u7bc4\u4f8b\u4e8c\uff1a<code>SafeRotate</code>",id:"\u7bc4\u4f8b\u4e8csaferotate",level:2},{value:"\u7bc4\u4f8b\u4e09\uff1a\u4fee\u6539 albu \u985e\u5225\u884c\u70ba",id:"\u7bc4\u4f8b\u4e09\u4fee\u6539-albu-\u985e\u5225\u884c\u70ba",level:2},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5716\u50cf\u589e\u5f37",children:"\u5716\u50cf\u589e\u5f37"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u5011\u6c92\u6709\u628a\u5716\u50cf\u589e\u5f37\u7684\u529f\u80fd\u505a\u5728 ",(0,s.jsx)(e.code,{children:"WordCanvas"})," \u5167\uff0c\u56e0\u70ba\u6211\u5011\u8a8d\u70ba\u9019\u662f\u4e00\u500b\u975e\u5e38\u500b\u6027\u5316\u7684\u9700\u6c42\uff0c\u4e0d\u540c\u7684\u61c9\u7528\u5834\u666f\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u7684\u589e\u5f37\u65b9\u5f0f\u3002\u4f46\u6211\u5011\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7c21\u55ae\u7684\u7bc4\u4f8b\uff0c\u8aaa\u660e\u8a72\u5982\u4f55\u5be6\u73fe\u5716\u50cf\u589e\u5f37\u7684\u6d41\u7a0b\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u5011\u7fd2\u6163\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"https://github.com/albumentations-team/albumentations",children:(0,s.jsx)(e.strong,{children:"albumentations"})})," \u9019\u500b\u5957\u4ef6\u4f86\u5be6\u73fe\u5716\u50cf\u589e\u5f37\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u4f60\u559c\u6b61\u7684\u5eab\u3002"]}),"\n",(0,s.jsxs)(e.h2,{id:"\u7bc4\u4f8b\u4e00shear",children:["\u7bc4\u4f8b\u4e00\uff1a",(0,s.jsx)(e.code,{children:"Shear"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u751f\u6210\u6587\u5b57\u5716\u50cf\u5f8c\uff0c\u518d\u5957\u7528\u81ea\u5b9a\u7fa9\u7684\u64cd\u4f5c\uff0c\u4ee5\u4e0b\u4ee5 ",(0,s.jsx)(e.code,{children:"Shear"})," \u70ba\u4f8b\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Shear"})," \u985e\u8ca0\u8cac\u5c0d\u5716\u50cf\u9032\u884c\u526a\u5207\u8b8a\u63db\u3002\u526a\u5207\u6703\u6539\u8b8a\u5716\u50cf\u7684\u5e7e\u4f55\u5f62\u72c0\uff0c\u5275\u9020\u51fa\u6c34\u5e73\u7684\u50be\u659c\uff0c\u9019\u53ef\u4ee5\u5e6b\u52a9\u6a21\u578b\u5b78\u7fd2\u5728\u4e0d\u540c\u7684\u65b9\u5411\u548c\u4f4d\u7f6e\u8b58\u5225\u5c0d\u8c61\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u53c3\u6578"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"max_shear_left\uff1a\u5411\u5de6\u7684\u6700\u5927\u526a\u5207\u89d2\u5ea6\u3002\u9ed8\u8a8d\u503c\u70ba 20 \u5ea6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"max_shear_right\uff1a\u5411\u53f3\u7684\u6700\u5927\u526a\u5207\u89d2\u5ea6\u3002\u9ed8\u8a8d\u503c\u540c\u6a23\u70ba 20 \u5ea6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"p\uff1a\u64cd\u4f5c\u6982\u7387\u3002\u9ed8\u8a8d\u70ba 0.5\uff0c\u610f\u5473\u8457\u4efb\u4f55\u7d66\u5b9a\u7684\u5716\u50cf\u6709 50% \u7684\u6982\u7387\u6703\u88ab\u526a\u5207\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from wordcanvas import Shear, WordCanvas\n\ngen = WordCanvas()\nshear = Shear(max_shear_left=20, max_shear_right=20, p=0.5)\n\nimg, _ = gen('Hello, World!')\nimg = shear(img)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"shear_example",src:a(2775).A+"",width:"387",height:"65"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"\u7bc4\u4f8b\u4e8csaferotate",children:["\u7bc4\u4f8b\u4e8c\uff1a",(0,s.jsx)(e.code,{children:"SafeRotate"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"Shift"}),"\u3001",(0,s.jsx)(e.code,{children:"Scale"}),"\u6216 ",(0,s.jsx)(e.code,{children:"Rotate"})," \u76f8\u95dc\u7684\u64cd\u4f5c\u6642\uff0c\u6703\u9047\u5230\u80cc\u666f\u8272\u586b\u5145\u7684\u554f\u984c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u6642\u61c9\u8a72\u8abf\u7528 ",(0,s.jsx)(e.code,{children:"infos"})," \u8cc7\u8a0a\u4f86\u7372\u53d6\u80cc\u666f\u8272\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from wordcanvas import ExampleAug, WordCanvas\nimport albumentations as A\n\ngen = WordCanvas(\n    background_color=(255, 255, 0),\n    text_color=(0, 0, 0)\n)\n\naug =  A.SafeRotate(\n    limit=30,\n    border_mode=cv2.BORDER_CONSTANT,\n    value=infos['background_color'],\n    p=1\n)\n\nimg, infos = gen('Hello, World!')\nimg = aug(image=img)['image']\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"rotate_example",src:a(41537).A+"",width:"387",height:"65"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7bc4\u4f8b\u4e09\u4fee\u6539-albu-\u985e\u5225\u884c\u70ba",children:"\u7bc4\u4f8b\u4e09\uff1a\u4fee\u6539 albu \u985e\u5225\u884c\u70ba"}),"\n",(0,s.jsx)(e.p,{children:"\u7a0b\u5f0f\u5beb\u5230\u9019\u88e1\uff0c\u4f60\u53ef\u80fd\u6703\u6ce8\u610f\u5230\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5982\u679c\u6bcf\u6b21 ",(0,s.jsx)(e.code,{children:"WordCanvas"})," \u751f\u6210\u5716\u50cf\u90fd\u5e36\u6709\u96a8\u6a5f\u80cc\u666f\u8272\uff0c\u90a3\u9ebc\u6bcf\u6b21\u90fd\u9700\u8981\u91cd\u65b0\u521d\u59cb\u5316 ",(0,s.jsx)(e.code,{children:"albumentations"})," \u7684\u985e\u5225\uff0c\u662f\u4e0d\u662f\u4e0d\u79d1\u5b78\uff1f"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7b54\u5c0d\u4e86\uff01\u6240\u4ee5\u6211\u5011\u8981\u4fee\u6539 ",(0,s.jsx)(e.code,{children:"albumentations"})," \u7684\u884c\u70ba\uff0c\u8b93\u5b83\u53ea\u9700\u8981\u4e00\u6b21\u521d\u59cb\u5316\u5c31\u53ef\u4ee5\u4e00\u76f4\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import albumentations as A\nimport cv2\nimport numpy as np\nfrom wordcanvas import WordCanvas\n\n\ngen = WordCanvas(\n    random_background_color=True\n)\n\naug = A.SafeRotate(\n    limit=30,\n    border_mode=cv2.BORDER_CONSTANT,\n    p=1\n)\n\nimgs = []\nfor _ in range(8):\n    img, infos = gen('Hello, World!')\n\n    # \u4fee\u6539 albu \u985e\u5225\u884c\u70ba\n    aug.value = infos['background_color']\n\n    img = aug(image=img)['image']\n\n    imgs.append(img)\n\n# \u986f\u793a\u7d50\u679c\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"bgcolor_example",src:a(84858).A+"",width:"387",height:"520"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u672c\u5c08\u6848\u4e2d\uff0c\u6211\u5011\u53ea\u5c08\u6ce8\u65bc\u5c0d\u5f71\u50cf\u9032\u884c\u589e\u5f37\uff0c\u800c\u7121\u9700\u8abf\u6574\u5305\u542b\u908a\u754c\u6846\uff08bounding box\uff09\u548c\u906e\u7f69\uff08mask\uff09\u7684\u8907\u96dc\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u554f\u984c\u6216\u5efa\u8b70\uff0c\u6b61\u8fce\u5728\u5e95\u4e0b\u7559\u8a00\uff0c\u6211\u5011\u6703\u76e1\u5feb\u56de\u8986\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u5c08\u6848\u7684\u4ecb\u7d39\u5230\u6b64\u7d50\u675f\uff0c\u795d\u4f60\u4f7f\u7528\u6109\u5feb\uff01"})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},84858:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/bgcolor_example-df3af7c456944bddfdf4e0a56cfa18c8.jpg"},41537:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/rotate_example-678b340ca6f75b1c571319d20f521fd8.jpg"},2775:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/shear_example-d047ac5f323aee890d8945211b5992a0.jpg"},28453:(n,e,a)=>{a.d(e,{R:()=>o,x:()=>d});var s=a(96540);const r={},i=s.createContext(r);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);