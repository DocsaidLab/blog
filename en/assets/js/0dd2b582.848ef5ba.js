"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2336],{38835:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=e(74848),a=e(28453);const i={sidebar_position:3},s="write_metadata_into_onnx",r={id:"docsaidkit/funcs/onnxengine/write_metadata_into_onnx",title:"write_metadata_into_onnx",description:"writemetadataintoonnx(onnxpath Union[str, Path], dropold_meta: bool = False, kwargs)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/docsaidkit/funcs/onnxengine/write_metadata_into_onnx.md",sourceDirName:"docsaidkit/funcs/onnxengine",slug:"/docsaidkit/funcs/onnxengine/write_metadata_into_onnx",permalink:"/en/docs/docsaidkit/funcs/onnxengine/write_metadata_into_onnx",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"zephyr-sh",lastUpdatedAt:171962282e4,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"get_onnx_metadata",permalink:"/en/docs/docsaidkit/funcs/onnxengine/get_onnx_metadata"},next:{title:"Objects",permalink:"/en/docs/category/objects"}},d={},c=[];function l(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"write_metadata_into_onnx",children:"write_metadata_into_onnx"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/DocsaidLab/DocsaidKit/blob/012540eebaebb2718987dd3ec0f7dcf40f403caa/docsaidkit/onnxengine/metadata.py#L20",children:"write_metadata_into_onnx(onnx_path: Union[str, Path], out_path: Union[str, Path], drop_old_meta: bool = False, **kwargs)"})}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Description"})}),"\n",(0,o.jsx)(t.p,{children:"Write custom metadata into an ONNX model."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"onnx_path"})," (",(0,o.jsx)(t.code,{children:"Union[str, Path]"}),"): Path to the ONNX model."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"out_path"})," (",(0,o.jsx)(t.code,{children:"Union[str, Path]"}),"): Path to the output ONNX model."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"drop_old_meta"})," (",(0,o.jsx)(t.code,{children:"bool"}),"): Whether to drop old metadata. Default is ",(0,o.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"**kwargs"}),": Custom metadata."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"import docsaidkit as D\n\nonnx_path = 'model.onnx'\nout_path = 'model_with_metadata.onnx'\nD.write_metadata_into_onnx(\n    onnx_path,\n    out_path,\n    drop_old_meta=False,\n    key1='value1',\n    key2='value2',\n    key3='value3',\n)\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:t}={...(0,a.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>r});var o=e(96540);const a={},i=o.createContext(a);function s(n){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),o.createElement(i.Provider,{value:t},n.children)}}}]);