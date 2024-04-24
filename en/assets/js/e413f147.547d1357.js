"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3468],{80245:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(74848),o=a(28453);const s={sidebar_position:5},t="Augmentation",r={id:"wordcanvas/imgaug",title:"Augmentation",description:"We have not incorporated image augmentation functionality within WordCanvas because we believe this is a highly personalized requirement, with different application scenarios possibly needing different augmentation methods. However, we provide some simple examples to demonstrate how to implement image augmentation processes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/wordcanvas/imgaug.md",sourceDirName:"wordcanvas",slug:"/wordcanvas/imgaug",permalink:"/en/docs/wordcanvas/imgaug",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713961801e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/en/docs/wordcanvas/advance"},next:{title:"Resources",permalink:"/en/docs/wordcanvas/tools"}},l={},c=[{value:"Example 1: <code>Shear</code>",id:"example-1-shear",level:2},{value:"Example 2: <code>SafeRotate</code>",id:"example-2-saferotate",level:2},{value:"Example 3: Modifying Behavior",id:"example-3-modifying-behavior",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"augmentation",children:"Augmentation"}),"\n",(0,i.jsxs)(n.p,{children:["We have not incorporated image augmentation functionality within ",(0,i.jsx)(n.code,{children:"WordCanvas"})," because we believe this is a highly personalized requirement, with different application scenarios possibly needing different augmentation methods. However, we provide some simple examples to demonstrate how to implement image augmentation processes."]}),"\n",(0,i.jsxs)(n.p,{children:["We typically use the ",(0,i.jsx)(n.a,{href:"https://github.com/albumentations-team/albumentations",children:(0,i.jsx)(n.strong,{children:"albumentations"})})," package for image augmentation, but you are free to use any library you prefer."]}),"\n",(0,i.jsxs)(n.h2,{id:"example-1-shear",children:["Example 1: ",(0,i.jsx)(n.code,{children:"Shear"})]}),"\n",(0,i.jsxs)(n.p,{children:["After generating text images, apply a custom operation, with ",(0,i.jsx)(n.code,{children:"Shear"})," as an example here."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Shear"})," class is responsible for applying shear transformations to images. Shearing changes the geometric shape of the image, creating a horizontal skew. This can help models learn to recognize objects in different directions and positions."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"max_shear_left: Maximum shear angle to the left. The default value is 20 degrees."}),"\n",(0,i.jsx)(n.li,{children:"max_shear_right: Maximum shear angle to the right. Also defaults to 20 degrees."}),"\n",(0,i.jsx)(n.li,{children:"p: Probability of the operation. By default, it's 0.5, meaning there's a 50% chance any given image will be sheared."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from wordcanvas import Shear, WordCanvas\n\ngen = WordCanvas()\nshear = Shear(max_shear_left=20, max_shear_right=20, p=0.5)\n\nimg, _ = gen('Hello, World!')\nimg = shear(img)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"shear_example",src:a(78247).A+"",width:"387",height:"65"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"example-2-saferotate",children:["Example 2: ",(0,i.jsx)(n.code,{children:"SafeRotate"})]}),"\n",(0,i.jsxs)(n.p,{children:["When using operations related to ",(0,i.jsx)(n.code,{children:"Shift"}),", ",(0,i.jsx)(n.code,{children:"Scale"}),", or ",(0,i.jsx)(n.code,{children:"Rotate"}),", you may encounter issues with filling the background color."]}),"\n",(0,i.jsxs)(n.p,{children:["In such cases, use the ",(0,i.jsx)(n.code,{children:"infos"})," to get the background color."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from wordcanvas import ExampleAug, WordCanvas\nimport albumentations as A\n\ngen = WordCanvas(\n    background_color=(255, 255, 0),\n    text_color=(0, 0, 0)\n)\n\naug =  A.SafeRotate(\n    limit=30,\n    border_mode=cv2.BORDER_CONSTANT,\n    value=infos['background_color'],\n    p=1\n)\n\nimg, infos = gen('Hello, World!')\nimg = aug(image=img)['image']\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"rotate_example",src:a(40337).A+"",width:"387",height:"65"})}),"\n",(0,i.jsx)(n.h2,{id:"example-3-modifying-behavior",children:"Example 3: Modifying Behavior"}),"\n",(0,i.jsx)(n.p,{children:"You might realize:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If every ",(0,i.jsx)(n.code,{children:"WordCanvas"})," generated image comes with a random background color, isn't it unscientific to reinitialize the ",(0,i.jsx)(n.code,{children:"albumentations"})," class every time?"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Correct! Therefore, we modify the behavior of ",(0,i.jsx)(n.code,{children:"albumentations"})," so that it only needs to be initialized once and can be used continuously."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import albumentations as A\nimport cv2\nimport numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_background_color=True\n)\n\naug = A.SafeRotate(\n    limit=30,\n    border_mode=cv2.BORDER_CONSTANT,\n    p=1\n)\n\nimgs = []\nfor _ in range(8):\n    img, infos = gen('Hello, World!')\n\n    # Modify albu class behavior\n    aug.value = infos['background_color']\n\n    img = aug(image=img)['image']\n\n    imgs.append(img)\n\n# Display results\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"bgcolor_example",src:a(18730).A+"",width:"387",height:"520"})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"In this project, we focus solely on enhancing images without needing to adjust complex elements like bounding boxes and masks. If you have any questions or suggestions, feel free to leave a comment below, and we will respond promptly."}),"\n",(0,i.jsx)(n.p,{children:"This concludes the introduction to this project. Enjoy using it!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},18730:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/bgcolor_example-df3af7c456944bddfdf4e0a56cfa18c8.jpg"},40337:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/rotate_example-678b340ca6f75b1c571319d20f521fd8.jpg"},78247:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/shear_example-d047ac5f323aee890d8945211b5992a0.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>r});var i=a(96540);const o={},s=i.createContext(o);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);