"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[23468],{80245:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(74848),t=a(28453);const o={sidebar_position:5},r="Augmentation",s={id:"wordcanvas/imgaug",title:"Augmentation",description:'We have not included image augmentation functionality directly within WordCanvas because we believe it is a highly "customizable" requirement. Different application scenarios may require different augmentation methods. However, we provide some simple examples to illustrate how to implement image augmentation.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/wordcanvas/imgaug.md",sourceDirName:"wordcanvas",slug:"/wordcanvas/imgaug",permalink:"/en/docs/wordcanvas/imgaug",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/en/docs/wordcanvas/advance"},next:{title:"Resources",permalink:"/en/docs/wordcanvas/tools"}},l={},c=[{value:"Example 1: Shear Transformation",id:"example-1-shear-transformation",level:2},{value:"Example 2: Rotation Transformation",id:"example-2-rotation-transformation",level:2},{value:"Example 3: Modifying Class Behavior",id:"example-3-modifying-class-behavior",level:2},{value:"Example 4: Adding Backgrounds",id:"example-4-adding-backgrounds",level:2},{value:"Example 5: Perspective Transformation",id:"example-5-perspective-transformation",level:2},{value:"Example 6: Strong Light Reflection",id:"example-6-strong-light-reflection",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"augmentation",children:"Augmentation"}),"\n",(0,i.jsxs)(n.p,{children:["We have not included image augmentation functionality directly within ",(0,i.jsx)(n.code,{children:"WordCanvas"}),' because we believe it is a highly "customizable" requirement. Different application scenarios may require different augmentation methods. However, we provide some simple examples to illustrate how to implement image augmentation.']}),"\n",(0,i.jsxs)(n.p,{children:["We prefer using the ",(0,i.jsx)(n.a,{href:"https://github.com/albumentations-team/albumentations",children:(0,i.jsx)(n.strong,{children:"albumentations"})})," package for image augmentation, but you can use any library you prefer."]}),"\n",(0,i.jsx)(n.h2,{id:"example-1-shear-transformation",children:"Example 1: Shear Transformation"}),"\n",(0,i.jsx)(n.p,{children:"After generating a text image, apply custom operations."}),"\n",(0,i.jsxs)(n.p,{children:["First, we demonstrate applying a shear transformation using ",(0,i.jsx)(n.code,{children:"Shear"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Shear"})," class is responsible for performing shear transformations on images. Shearing changes the geometric shape of an image, creating a horizontal slant, which can help models learn to recognize objects in different directions and positions."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"max_shear_left: Maximum shear angle to the left. Default is 20 degrees."}),"\n",(0,i.jsx)(n.li,{children:"max_shear_right: Maximum shear angle to the right. Default is also 20 degrees."}),"\n",(0,i.jsx)(n.li,{children:"p: Probability of applying the operation. Default is 0.5, meaning any given image has a 50% chance of being sheared."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from wordcanvas import Shear, WordCanvas\n\ngen = WordCanvas()\nshear = Shear(max_shear_left=20, max_shear_right=20, p=0.5)\n\nimg, _ = gen('Hello, World!')\nimg = shear(img)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"shear_example",src:a(78247).A+"",width:"387",height:"65"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-2-rotation-transformation",children:"Example 2: Rotation Transformation"}),"\n",(0,i.jsxs)(n.p,{children:["To implement rotation transformation, we use the ",(0,i.jsx)(n.code,{children:"SafeRotate"})," class from ",(0,i.jsx)(n.code,{children:"albumentations"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"When using operations like Shift, Scale, or Rotate, you might encounter background color filling issues."}),"\n",(0,i.jsxs)(n.p,{children:["In this case, you should call the ",(0,i.jsx)(n.code,{children:"infos"})," information to get the background color."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from wordcanvas import ExampleAug, WordCanvas\nimport albumentations as A\n\ngen = WordCanvas(\n    background_color=(255, 255, 0),\n    text_color=(0, 0, 0)\n)\n\naug =  A.SafeRotate(\n    limit=30,\n    border_mode=cv2.BORDER_CONSTANT,\n    value=infos['background_color'],\n    p=1\n)\n\nimg, infos = gen('Hello, World!')\nimg = aug(image=img)['image']\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"rotate_example",src:a(40337).A+"",width:"387",height:"65"})}),"\n",(0,i.jsx)(n.h2,{id:"example-3-modifying-class-behavior",children:"Example 3: Modifying Class Behavior"}),"\n",(0,i.jsx)(n.p,{children:"By now, you might notice:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If each time ",(0,i.jsx)(n.code,{children:"WordCanvas"})," generates an image with a random background color, it requires reinitializing the ",(0,i.jsx)(n.code,{children:"albumentations"})," class every time, which might seem inefficient."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Perhaps we can modify the behavior of ",(0,i.jsx)(n.code,{children:"albumentations"})," so that it can be used continuously after a single initialization?"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import albumentations as A\nimport cv2\nimport numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_background_color=True\n)\n\naug = A.SafeRotate(\n    limit=30,\n    border_mode=cv2.BORDER_CONSTANT,\n    p=1\n)\n\nimgs = []\nfor _ in range(8):\n    img, infos = gen('Hello, World!')\n\n    # Modify albu class behavior\n    aug.value = infos['background_color']\n\n    img = aug(image=img)['image']\n\n    imgs.append(img)\n\n# Display results\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"bgcolor_example",src:a(18730).A+"",width:"387",height:"520"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["We still recommend using the method from Example 2 (even though it might seem a bit cumbersome) because if you directly modify the behavior of ",(0,i.jsx)(n.code,{children:"albumentations"})," classes, it can cause issues in multi-threaded training environments. Please be careful!"]})}),"\n",(0,i.jsx)(n.h2,{id:"example-4-adding-backgrounds",children:"Example 4: Adding Backgrounds"}),"\n",(0,i.jsx)(n.p,{children:"You might want more than just plain text images and want to add backgrounds to improve the generalization ability of your model."}),"\n",(0,i.jsx)(n.p,{children:"In this case, you need to prepare a set of background images and then refer to the following example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import albumentations as A\nimport cv2\nimport numpy as np\nfrom wordcanvas import WordCanvas\nfrom albumentations import RandomCrop\n\ngen = WordCanvas(\n    random_text_color=True,\n    random_background_color=True\n)\n\n# Generate a random color text image\nimg, infos = gen('Hello, World!')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"sample25",src:a(36874).A+"",width:"387",height:"65"})}),"\n",(0,i.jsx)(n.p,{children:"Next, load a background image:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"bg = cv2.imread('path/to/your/background.jpg')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.lccnet.com.tw/lccnet/article/details/2274",children:(0,i.jsx)(n.img,{alt:"bg_example",src:a(36525).A+"",width:"819",height:"428"})})}),"\n",(0,i.jsx)(n.p,{children:"Finally, randomly crop a region from the background and place the text image on it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"bg = RandomCrop(img.shape[0], img.shape[1])(image=bg)['image']\n\nresult_img = np.where(img == infos['background_color'], bg, img)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"bg_result",src:a(63125).A+"",width:"387",height:"65"})}),"\n",(0,i.jsx)(n.h2,{id:"example-5-perspective-transformation",children:"Example 5: Perspective Transformation"}),"\n",(0,i.jsx)(n.p,{children:"Perspective transformation is a technique that projects an image onto a new viewpoint, simulating the appearance of objects from different angles and distances."}),"\n",(0,i.jsx)(n.p,{children:"Continuing from the previous example, apply a perspective transformation to the image before overlaying the background:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from albumentations import Perspective\n\naug = A.Perspective(\n    keep_size=True,\n    fit_output=True,\n    pad_val=infos['background_color'],\n)\n\nimg = aug(image=img)['image']\nresult_img = np.where(img == infos['background_color'], bg, img)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"sample27",src:a(55256).A+"",width:"387",height:"65"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"For spatial transformation image augmentations, we recommend applying perspective transformation to the original image first, then overlaying the background image. This way, the background image won't have strange black edges."})}),"\n",(0,i.jsx)(n.h2,{id:"example-6-strong-light-reflection",children:"Example 6: Strong Light Reflection"}),"\n",(0,i.jsxs)(n.p,{children:["Text images are also prone to issues with strong light reflections. In this case, we can use ",(0,i.jsx)(n.code,{children:"RandomSunFlare"})," to simulate this condition:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from albumentations import RandomSunFlare\n\naug = A.RandomSunFlare(\n    src_radius=128,\n    src_color=(255, 255, 255),\n)\n\nresult_img = aug(image=result_img)['image']\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"sample28",src:a(39715).A+"",width:"387",height:"65"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"For pixel-level image augmentations, we recommend overlaying the background image first, then applying image augmentation transformations. This way, you won't lose background information and avoid messy spots."})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"This concludes the introduction to this project. If you have any questions or suggestions, feel free to leave a comment below, and we will respond as soon as possible."}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, if you're unsure how to implement a specific operation, feel free to leave a comment as well, and we will do our best to assist you."}),"\n",(0,i.jsx)(n.p,{children:"Happy using!"})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},36525:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/bg_example-3ca7bf1c11f75559814606cbb01ac745.jpg"},18730:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/bgcolor_example-df3af7c456944bddfdf4e0a56cfa18c8.jpg"},40337:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/rotate_example-678b340ca6f75b1c571319d20f521fd8.jpg"},36874:(e,n,a)=>{a.d(n,{A:()=>i});const i="data:image/jpeg;base64,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"},63125:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/sample26-f81cc10367a4f918ba2b82f8df7365db.jpg"},55256:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/sample27-12ea96fa192f7893417c0496c821b738.jpg"},39715:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/sample28-1031d41811fafe3dcd79629f789b370c.jpg"},78247:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/shear_example-d047ac5f323aee890d8945211b5992a0.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var i=a(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);