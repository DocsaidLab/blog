"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5001],{84577:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(74848),o=t(28453);const i={sidebar_position:4},s="Advanced",r={id:"wordcanvas/advance",title:"Advanced",description:"Beyond basic usage, WordCanvas offers several advanced settings that allow you to flexibly control the output of text images. Here we introduce randomness settings, which are primarily used for training models.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/wordcanvas/advance.md",sourceDirName:"wordcanvas",slug:"/wordcanvas/advance",permalink:"/en/docs/wordcanvas/advance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"QuickStart",permalink:"/en/docs/wordcanvas/quickstart"},next:{title:"Augmentation",permalink:"/en/docs/wordcanvas/imgaug"}},d={},l=[{value:"Random Fonts",id:"random-fonts",level:2},{value:"Random Text Content",id:"random-text-content",level:2},{value:"Specifying Text Length",id:"specifying-text-length",level:2},{value:"Random Background Color",id:"random-background-color",level:2},{value:"Random Text Color",id:"random-text-color",level:2},{value:"Random Text Alignment",id:"random-text-alignment",level:2},{value:"Random Text Direction",id:"random-text-direction",level:2},{value:"Full Randomization",id:"full-randomization",level:2},{value:"Dashboard Revisited",id:"dashboard-revisited",level:2},{value:"Font Weights",id:"font-weights",level:2},{value:"Blocklist",id:"blocklist",level:2},{value:"Summary",id:"summary",level:2}];function c(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"advanced",children:"Advanced"}),"\n",(0,a.jsxs)(e.p,{children:["Beyond basic usage, ",(0,a.jsx)(e.code,{children:"WordCanvas"})," offers several advanced settings that allow you to flexibly control the output of text images. Here we introduce randomness settings, which are primarily used for training models."]}),"\n",(0,a.jsx)(e.h2,{id:"random-fonts",children:"Random Fonts"}),"\n",(0,a.jsxs)(e.p,{children:["Enable the random font feature using the ",(0,a.jsx)(e.code,{children:"random_font"})," parameter. When ",(0,a.jsx)(e.code,{children:"random_font"})," is set to ",(0,a.jsx)(e.code,{children:"True"}),", the ",(0,a.jsx)(e.code,{children:"font_bank"})," parameter becomes active, while ",(0,a.jsx)(e.code,{children:"font_path"})," is ignored."]}),"\n",(0,a.jsxs)(e.p,{children:["You should specify the ",(0,a.jsx)(e.code,{children:"font_bank"})," parameter to your font library since the default is the package's ",(0,a.jsx)(e.code,{children:"fonts"})," directory. For demonstration, we've placed two fonts in the ",(0,a.jsx)(e.code,{children:"fonts"})," directory, so if you do not modify ",(0,a.jsx)(e.code,{children:"font_bank"}),", it will randomly select from these two fonts."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_font=True,\n    output_size=(64, 512),\n    font_bank=\"path/to/your/font/bank\"\n)\n\nimgs = []\nfor _ in range(8):\n    text = 'Hello, World!'\n    img, infos = gen(text)\n    imgs.append(img)\n\n# Combine all images for output\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"sample17",src:t(12109).A+"",width:"512",height:"512"})}),"\n",(0,a.jsx)(e.h2,{id:"random-text-content",children:"Random Text Content"}),"\n",(0,a.jsxs)(e.p,{children:["If you are unsure of what text to generate, you can use the ",(0,a.jsx)(e.code,{children:"random_text"})," parameter."]}),"\n",(0,a.jsxs)(e.p,{children:["When ",(0,a.jsx)(e.code,{children:"random_text"})," is set to ",(0,a.jsx)(e.code,{children:"True"}),", the originally input ",(0,a.jsx)(e.code,{children:"text"})," will be ignored."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_text=True,\n    output_size=(64, 512),\n)\n\nimgs = []\nfor _ in range(8):\n    text = 'Hello!World!' # This input will be ignored\n    img, infos = gen(text)\n    imgs.append(img)\n\n# Combine all images for output\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"sample18",src:t(97102).A+"",width:"512",height:"512"})}),"\n",(0,a.jsx)(e.h2,{id:"specifying-text-length",children:"Specifying Text Length"}),"\n",(0,a.jsxs)(e.p,{children:["When ",(0,a.jsx)(e.code,{children:"random_text"})," is enabled, you can use:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"min_random_text_length"}),": Minimum text length"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"max_random_text_length"}),": Maximum text length"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"These two parameters specify the range of text lengths."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\n# Always generate text with 5 characters\ngen = WordCanvas(\n    random_text=True,\n    min_random_text_length=5,\n    max_random_text_length=5,\n    output_size=(64, 512),\n)\n\nimgs = []\nfor _ in range(8):\n    img, infos = gen()\n    imgs.append(img)\n\n# Combine all images for output\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"sample19",src:t(75147).A+"",width:"512",height:"512"})}),"\n",(0,a.jsx)(e.h2,{id:"random-background-color",children:"Random Background Color"}),"\n",(0,a.jsxs)(e.p,{children:["Use the ",(0,a.jsx)(e.code,{children:"random_background_color"})," parameter to enable the random background color feature."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_background_color=True,\n    output_size=(64, 512),\n)\n\nimgs = []\nfor _ in range(8):\n    text = 'Hello, World!'\n    img, infos = gen(text)\n    imgs.append(img)\n\n# Combine all images for output\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"sample20",src:t(78699).A+"",width:"512",height:"512"})}),"\n",(0,a.jsx)(e.h2,{id:"random-text-color",children:"Random Text Color"}),"\n",(0,a.jsxs)(e.p,{children:["Use the ",(0,a.jsx)(e.code,{children:"random_text_color"})," parameter to enable the random text color feature."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_text_color=True,\n    output_size=(64, 512),\n)\n\nimgs = []\nfor _ in range(8):\n    text = 'Hello, World!'\n    img, infos = gen(text)\n    imgs.append(img)\n\n# Combine all images for output\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"sample21",src:t(654).A+"",width:"512",height:"512"})}),"\n",(0,a.jsx)(e.h2,{id:"random-text-alignment",children:"Random Text Alignment"}),"\n",(0,a.jsxs)(e.p,{children:["Use the ",(0,a.jsx)(e.code,{children:"random_align_mode"})," parameter to enable the random text alignment feature."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_align_mode=True,\n    output_size=(64, 512),\n)\n\nimgs = []\nfor _ in range(8):\n    text = 'Hello, World!'\n    img, infos = gen(text)\n    imgs.append(img)\n\n# Combine all images for output\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"sample22",src:t(7769).A+"",width:"512",height:"512"})}),"\n",(0,a.jsx)(e.h2,{id:"random-text-direction",children:"Random Text Direction"}),"\n",(0,a.jsxs)(e.p,{children:["Use the ",(0,a.jsx)(e.code,{children:"random_direction"})," parameter to enable the random text direction feature."]}),"\n",(0,a.jsxs)(e.p,{children:["It's recommended to use this parameter in conjunction with ",(0,a.jsx)(e.code,{children:"output_direction"})," for convenient image output."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas, OutputDirection\n\ngen = WordCanvas(\n    random_direction=True,\n    output_direction=OutputDirection.Horizontal,\n    output_size=(64, 512),\n)\n\nimgs = []\nfor _ in range(8):\n    text = '\u5348\u5b89\uff0c\u6216\u662f\u665a\u5b89\u3002'\n    img, infos = gen(text)\n    imgs.append(img)\n\n# Combine all images for output\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"sample23",src:t(86716).A+"",width:"512",height:"512"})}),"\n",(0,a.jsx)(e.h2,{id:"full-randomization",children:"Full Randomization"}),"\n",(0,a.jsxs)(e.p,{children:["If you want all settings to be random, you can use the ",(0,a.jsx)(e.code,{children:"enable_all_random"})," parameter."]}),"\n",(0,a.jsx)(e.p,{children:"This parameter activates a mode where everything is randomized."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    enable_all_random=True,\n    output_size=(64, 512),\n)\n\nimgs = []\nfor _ in range(20):\n    img, infos = gen()\n    imgs.append(img)\n\n# Combine all images for output\nimg = np.concatenate(imgs, axis=0)\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"sample24",src:t(92711).A+"",width:"512",height:"512"})}),"\n",(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsxs)(e.p,{children:["This parameter does not adjust parameters that require reinitialization, such as ",(0,a.jsx)(e.code,{children:"random_font"}),", ",(0,a.jsx)(e.code,{children:"random_text"}),", etc. These need to be set manually."]})}),"\n",(0,a.jsx)(e.h2,{id:"dashboard-revisited",children:"Dashboard Revisited"}),"\n",(0,a.jsx)(e.p,{children:"Let's return to the dashboard feature."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"dashboard",src:t(82687).A+"",width:"1620",height:"944"})}),"\n",(0,a.jsx)(e.p,{children:"When randomness-related parameters are enabled, parameters set to True will be marked in green, while those set to False will be marked in red."}),"\n",(0,a.jsx)(e.p,{children:"We hope this design allows you to quickly verify related settings."}),"\n",(0,a.jsx)(e.h2,{id:"font-weights",children:"Font Weights"}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.p,{children:"This feature was introduced in version 0.2.0."})}),"\n",(0,a.jsx)(e.p,{children:"Since different fonts support varying numbers of characters, we may encounter issues with uneven font weights during model training."}),"\n",(0,a.jsx)(e.p,{children:"To put it simply, the probability of randomly selecting each font is equal. However, some characters are only supported by a few fonts, meaning certain characters might rarely be trained on."}),"\n",(0,a.jsxs)(e.p,{children:["To mitigate this issue, we introduced the ",(0,a.jsx)(e.code,{children:"use_random_font_weight"})," parameter."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_font=True,\n    use_random_font_weight=True,\n    output_size=(64, 512),\n)\n"})}),"\n",(0,a.jsxs)(e.p,{children:["When you enable this parameter, ",(0,a.jsx)(e.code,{children:"WordCanvas"})," adjusts the font selection probability based on the number of characters each font supports. Fonts that support fewer characters will be less likely to be chosen, resulting in a more balanced distribution."]}),"\n",(0,a.jsx)(e.p,{children:"However, there's still room for improvement. We believe that by first calculating the frequency of all characters, and then assigning selection weights, we could achieve better results. We plan to release this feature in version 0.5.0."}),"\n",(0,a.jsx)(e.h2,{id:"blocklist",children:"Blocklist"}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.p,{children:"This feature was introduced in version 0.4.0."})}),"\n",(0,a.jsx)(e.p,{children:"We found that some fonts claim to support certain characters but fail to render them correctly."}),"\n",(0,a.jsx)(e.p,{children:"For instance, a font file might list a set of supported characters, but in practice, some of those characters do not display properly."}),"\n",(0,a.jsxs)(e.p,{children:["This was quite frustrating, so we developed a blocklist feature that allows you to exclude such fonts by using the ",(0,a.jsx)(e.code,{children:"block_font_list"})," parameter:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"import numpy as np\nfrom wordcanvas import WordCanvas\n\ngen = WordCanvas(\n    random_font=True,\n    use_random_font_weight=True,\n    block_font_list=['Blocked Font Name']\n)\n"})}),"\n",(0,a.jsxs)(e.p,{children:["We have also created a default blocklist, ",(0,a.jsx)(e.code,{children:"DEFAULT_FONT_BLOCK_LIST"}),". Whenever we find a font that falsely claims to support certain characters, we add it to this list:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:'DEFAULT_FONT_BLOCK_LIST = [\n    "AbyssinicaSIL",\n    "AdobeBlank",\n    "Akatab",\n    "Alkalami",\n    "Andika",\n    "AnnapurnaSIL",\n    "AoboshiOne",\n    "AppleGothic",\n    "BM-HANNA",\n    "CharisSIL",\n    "DaiBannaSIL",\n    "FlowCircular",\n    "GentiumBookPlus",\n    "Harmattan",\n    "GentiumPlus",\n    "IMFeFCsc28P",\n    "JejuGothic"\n    "JejuMyeongjo",\n    "KayPhoDu",\n    "KouzanMouhitu",\n    "KumarOne",\n    "LastResort",\n    "LakkiReddy",\n    "Lateef",\n    "LisuBosa",\n    "Lohit-Devanagari",\n    "Mingzat",\n    "Namdhinggo",\n    "Narnoor",\n    "NotoColorEmojiCompatTest",\n    "NotoColorEmoji",\n    "NotoSansDevanagariUI",\n    "NotoSansHK[wght]",\n    "NotoSansJP[wght]",\n    "NotoSansKR[wght]",\n    "NotoSansSC[wght]",\n    "NotoSansTC[wght]",\n    "NotoSerifHK[wght]",\n    "NotoSerifJP[wght]",\n    "NotoSerifKR[wght]",\n    "NotoSerifSC[wght]",\n    "NotoSerifTC[wght]",\n    "NotoSansOldHungarian",\n    "NuosuSIL",\n    "Padauk",\n    "PadyakkeExpandedOne",\n    "Ponnala",\n    "RedHatDisplay",\n    "RedHatMono",\n    "RedHatText",\n    "Ranga",\n    "RaviPrakash",\n    "RubikPixels",\n    "Ruwudu",\n    "ScheherazadeNew",\n    "SoukouMincho",\n    "Walkway",\n    "851tegaki_zatsu_normal_0883",\n]\n'})}),"\n",(0,a.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(e.p,{children:"Our goal in developing this tool is to create a flexible solution for generating various text images, particularly for training machine learning models."}),"\n",(0,a.jsx)(e.p,{children:"Introducing randomness is intended to simulate real-world scenarios, which greatly enhances the adaptability and generalization capabilities of models. We hope you find these features useful."})]})}function m(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},82687:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/dashboard-b7d6dae0c9724ff7b7f6ef147d0c9bef.jpg"},12109:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/sample17-b024cfb14649f488e69c550968989a59.jpg"},97102:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/sample18-3aeeb8bfad2a51af95e038daa328ff22.jpg"},75147:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/sample19-6e11268e192b214b16b457ea1da09dea.jpg"},78699:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/sample20-68cda478ec5dbb32db2b964b23d415a5.jpg"},654:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/sample21-f737cee41a55c9fbdf9bc3c71a0ca97c.jpg"},7769:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/sample22-2ec10adefc5b96eb0b511006e2efd24c.jpg"},86716:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/sample23-e921f677b62bedfd5d5765760c1d6179.jpg"},92711:(n,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/sample24-29769915818a12268969268605f12002.jpg"},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var a=t(96540);const o={},i=a.createContext(o);function s(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);