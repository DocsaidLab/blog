"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[419],{55796:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>t});var s=n(74848),d=n(28453);const c={sidebar_position:3},r="Enums",o={id:"docsaidkit/funcs/enums",title:"Enums",description:"In OpenCV, the enumeration classes are numerous. To facilitate their use, we have organized some commonly used enumeration classes into DocsaidKit. These enumerations provide a clear and convenient way to reference common parameters and types, enhancing code readability and maintainability.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/enums.md",sourceDirName:"docsaidkit/funcs",slug:"/docsaidkit/funcs/enums",permalink:"/en/docsaidkit/funcs/enums",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1713493386e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u5f0f\u5eab",permalink:"/en/category/\u51fd\u5f0f\u5eab"},next:{title:"PowerDict",permalink:"/en/docsaidkit/funcs/powerdict"}},l={},t=[{value:"Overview of Enumeration Classes",id:"overview-of-enumeration-classes",level:2},{value:"docsaidkit.INTER",id:"docsaidkitinter",level:2},{value:"docsaidkit.ROTATE",id:"docsaidkitrotate",level:2},{value:"docsaidkit.BORDER",id:"docsaidkitborder",level:2},{value:"docsaidkit.MORPH",id:"docsaidkitmorph",level:2},{value:"docsaidkit.COLORSTR",id:"docsaidkitcolorstr",level:2},{value:"docsaidkit.FORMATSTR",id:"docsaidkitformatstr",level:2},{value:"docsaidkit.IMGTYP",id:"docsaidkitimgtyp",level:2}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"enums",children:"Enums"}),"\n",(0,s.jsx)(i.p,{children:"In OpenCV, the enumeration classes are numerous. To facilitate their use, we have organized some commonly used enumeration classes into DocsaidKit. These enumerations provide a clear and convenient way to reference common parameters and types, enhancing code readability and maintainability."}),"\n",(0,s.jsx)(i.p,{children:"Most enumeration values are directly referenced from OpenCV's enums to ensure consistency. If you need other enum values, you can directly refer to OpenCV's enums."}),"\n",(0,s.jsx)(i.h2,{id:"overview-of-enumeration-classes",children:"Overview of Enumeration Classes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/enums.py#L12",children:(0,s.jsx)(i.strong,{children:"INTER"})}),": Defines different types of image interpolation methods."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/enums.py#L20",children:(0,s.jsx)(i.strong,{children:"ROTATE"})}),": Defines image rotation angles."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/enums.py#L26",children:(0,s.jsx)(i.strong,{children:"BORDER"})}),": Defines the modes of border handling."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/enums.py#L35",children:(0,s.jsx)(i.strong,{children:"MORPH"})}),": Defines the shapes of the kernel for morphological operations."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/enums.py#L41",children:(0,s.jsx)(i.strong,{children:"COLORSTR"})}),": Defines color strings for terminal display."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/enums.py#L60",children:(0,s.jsx)(i.strong,{children:"FORMATSTR"})}),": Defines formatting strings."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/enums.py#L66",children:(0,s.jsx)(i.strong,{children:"IMGTYP"})}),": Defines supported image file types."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"docsaidkitinter",children:"docsaidkit.INTER"}),"\n",(0,s.jsx)(i.p,{children:"Used for image resizing or resampling to choose the interpolation method."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"NEAREST"}),": Nearest neighbor interpolation."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BILINEAR"}),": Bilinear interpolation."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"CUBIC"}),": Cubic interpolation."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"AREA"}),": Area interpolation."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"LANCZOS4"}),": Lanczos interpolation (using 4 Lanczos windows)."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"docsaidkitrotate",children:"docsaidkit.ROTATE"}),"\n",(0,s.jsx)(i.p,{children:"Specific angles for image rotation."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ROTATE_90"}),": Rotate the image 90 degrees clockwise."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ROTATE_180"}),": Rotate the image 180 degrees."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ROTATE_270"}),": Rotate the image 90 degrees counterclockwise."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"docsaidkitborder",children:"docsaidkit.BORDER"}),"\n",(0,s.jsx)(i.p,{children:"Ways to expand the image borders."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"DEFAULT"}),": Default border handling method."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"CONSTANT"}),": Constant border, filled with a specific color."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"REFLECT"}),": Reflective border."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"REFLECT_101"}),": Another type of reflective border."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"REPLICATE"}),": Replicate the edge pixels of the border."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"WRAP"}),": Wrap around border."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"docsaidkitmorph",children:"docsaidkit.MORPH"}),"\n",(0,s.jsx)(i.p,{children:"Shapes of the structural element used in morphological filtering."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"CROSS"}),": Cross-shaped."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"RECT"}),": Rectangular."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ELLIPSE"}),": Elliptical."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"docsaidkitcolorstr",children:"docsaidkit.COLORSTR"}),"\n",(0,s.jsx)(i.p,{children:"Color codes used for console output."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BLACK"}),": Black."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"RED"}),": Red."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GREEN"}),": Green."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"YELLOW"}),": Yellow."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BLUE"}),": Blue."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"MAGENTA"}),": Magenta."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"CYAN"}),": Cyan."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"WHITE"}),": White."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BRIGHT_BLACK"}),": Bright black."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BRIGHT_RED"}),": Bright red."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BRIGHT_GREEN"}),": Bright green."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BRIGHT_YELLOW"}),": Bright yellow."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BRIGHT_BLUE"}),": Bright blue."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BRIGHT_MAGENTA"}),": Bright magenta."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BRIGHT_CYAN"}),": Bright cyan."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BRIGHT_WHITE"}),": Bright white."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"docsaidkitformatstr",children:"docsaidkit.FORMATSTR"}),"\n",(0,s.jsx)(i.p,{children:"Options for text formatting."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"BOLD"}),": Bold."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ITALIC"}),": Italic."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"UNDERLINE"}),": Underlined."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"docsaidkitimgtyp",children:"docsaidkit.IMGTYP"}),"\n",(0,s.jsx)(i.p,{children:"Supported image file types."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"JPEG"}),": JPEG format image."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"PNG"}),": PNG format image."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var s=n(96540);const d={},c=s.createContext(d);function r(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);