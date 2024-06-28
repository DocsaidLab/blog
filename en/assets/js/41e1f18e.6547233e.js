"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5326],{10287:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(74848),r=t(28453);const i={sidebar_position:5},d="draw_text",o={id:"docsaidkit/funcs/drawings/draw_text",title:"draw_text",description:"drawtext(img str, location tuple = (0, 0, 0), textsize str = None, kwargs) -> np.ndarray",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/drawings/draw_text.md",sourceDirName:"docsaidkit/funcs/drawings",slug:"/docsaidkit/funcs/drawings/draw_text",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_text",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:1719577383e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"draw_polygons",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_polygons"},next:{title:"draw_mask",permalink:"/en/docs/docsaidkit/funcs/drawings/draw_mask"}},a={},c=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"draw_text",children:"draw_text"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/71170598902b6f8e89a969f1ce27ed4fd05b2ff2/docsaidkit/vision/visualization/draw.py#L211",children:"draw_text(img: np.ndarray, text: str, location: np.ndarray, color: tuple = (0, 0, 0), text_size: int = 12, font_path: str = None, **kwargs) -> np.ndarray"})}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Description"})}),"\n",(0,s.jsx)(e.p,{children:"Draw text at a specified position on an image."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"img"})," (",(0,s.jsx)(e.code,{children:"np.ndarray"}),"): The image to draw on."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"text"})," (",(0,s.jsx)(e.code,{children:"str"}),"): The text to draw."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"location"})," (",(0,s.jsx)(e.code,{children:"np.ndarray"}),"): The x, y coordinates where the text should be drawn."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"color"})," (",(0,s.jsx)(e.code,{children:"tuple"}),"): The RGB value of the text color. Defaults to black (0, 0, 0)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"text_size"})," (",(0,s.jsx)(e.code,{children:"int"}),"): The size of the text to draw. Defaults to 12."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"font_path"})," (",(0,s.jsx)(e.code,{children:"str"}),'): The path to the font file to use. If not provided, the default font "NotoSansMonoCJKtc-VF.ttf" is used.']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"kwargs"}),": Additional parameters for drawing, depending on the underlying library or method used."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"np.ndarray"}),": The image with the drawn text."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import docsaidkit as D\n\nimg = D.imread('lena.png')\ntext_img = D.draw_text(img, 'Hello, Docsaid!', location=(20, 20), color=(0, 255, 0), text_size=12)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"draw_text",src:t(81566).A+"",width:"256",height:"256"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},81566:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/test_draw_text-a42eda99453b65667e857035a9ffefda.jpg"},28453:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function d(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);