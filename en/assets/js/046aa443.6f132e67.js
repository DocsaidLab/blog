"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[91652],{75831:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(74848),r=i(28453);const o={slug:"vscode-settings",title:"Common VSCode Configuration Settings",authors:"Zephyr",tags:["vscode","settings"],image:"/en/img/2024/0331.webp",description:"VSCode settings for future reference."},s=void 0,l={permalink:"/en/blog/vscode-settings",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024/03-31-vscode-settings/index.md",title:"Common VSCode Configuration Settings",description:"VSCode settings for future reference.",date:"2024-03-31T00:00:00.000Z",tags:[{label:"vscode",permalink:"/en/blog/tags/vscode"},{label:"settings",permalink:"/en/blog/tags/settings"}],readingTime:2.765,hasTruncateMarker:!1,authors:[{name:"Zephyr",title:"Engineer",url:"https://github.com/zephyr-sh",imageURL:"https://github.com/zephyr-sh.png",key:"Zephyr"}],frontMatter:{slug:"vscode-settings",title:"Common VSCode Configuration Settings",authors:"Zephyr",tags:["vscode","settings"],image:"/en/img/2024/0331.webp",description:"VSCode settings for future reference."},unlisted:!1,prevItem:{title:"Equivalent Basic Commands between Python and JS",permalink:"/en/blog/python-js-basic-command-equivalents-en"},nextItem:{title:"Setting Up Nextcloud Guide",permalink:"/en/blog/setting-up-nextcloud"}},d={authorsImageUrls:[void 0]},c=[{value:"Configuration Settings",id:"configuration-settings",level:2},{value:"Parameter Descriptions",id:"parameter-descriptions",level:2},{value:"Conclusion",id:"conclusion",level:2}];function a(e){const n={code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"title",src:i(78190).A+"",width:"1024",height:"1024"}),"\n",(0,t.jsx)("figcaption",{children:"Cover Image: Automatically generated by GPT-4 after reading this article."})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Not long ago, my VSCode settings disappeared for some unknown reason. It took me another hour to set them up again."}),"\n",(0,t.jsx)(n.p,{children:"However, it gave me the opportunity to review my settings and document some commonly used configurations."}),"\n",(0,t.jsx)(n.h2,{id:"configuration-settings",children:"Configuration Settings"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "editor.fontFamily": "Fira Code, MesloLGS NF",\n  "editor.fontLigatures": true,\n  "files.associations": {\n    "Dockerfile_base": "dockerfile"\n  },\n  "markdown.preview.fontSize": 15,\n  "debug.console.fontSize": 14,\n  "explorer.confirmDragAndDrop": true,\n  "editor.minimap.enabled": true,\n  "editor.minimap.maxColumn": 80,\n  "editor.smoothScrolling": true,\n  "editor.rulers": [80, 120],\n  "workbench.colorCustomizations": {\n    "editorRuler.foreground": "#ff4081",\n    "minimap.background": "#00000050",\n    "editor.background": "#1e1e1e",\n    "editor.foreground": "#d4d4d4"\n  },\n  "terminal.integrated.fontFamily": "Fira Code, MesloLGS NF",\n  "files.trimTrailingWhitespace": true,\n  "files.trimFinalNewlines": true,\n  "diffEditor.ignoreTrimWhitespace": true,\n  "python.terminal.activateEnvironment": true,\n  "git.ignoreLegacyWarning": true,\n  "git.autofetch": true,\n  "editor.largeFileOptimizations": false,\n  "editor.mouseWheelZoom": true,\n  "editor.codeActionsOnSave": {\n    "source.organizeImports": true,\n    "source.fixAll": true\n  },\n  "editor.formatOnSave": true,\n  "workbench.editorAssociations": {\n    "*.ipynb": "jupyter-notebook"\n  },\n  "debug.onTaskErrors": "abort",\n  "explorer.confirmDelete": true,\n  "terminal.integrated.copyOnSelection": true,\n  "terminal.integrated.cursorBlinking": true,\n  "terminal.integrated.cursorStyle": "line",\n  "remote.downloadExtensionsLocally": true,\n  "terminal.integrated.scrollback": 10000,\n  "editor.cursorStyle": "line",\n  "editor.insertSpaces": true,\n  "editor.lineNumbers": "on",\n  "editor.wordWrap": "on",\n  "workbench.editor.wrapTabs": false,\n  "files.watcherExclude": {\n    "**/.git/objects/**": true,\n    "**/.git/subtree-cache/**": true,\n    "**/node_modules/*/**": true\n  },\n  "notebook.cellToolbarLocation": {\n    "default": "right",\n    "jupyter-notebook": "left"\n  },\n  "github.copilot.editor.enableAutoCompletions": true,\n  "github.copilot.enable": {\n    "*": true,\n    "plaintext": false,\n    "markdown": true,\n    "scminput": false\n  },\n  "workbench.colorTheme": "Monokai Pro",\n  "editor.multiCursorModifier": "ctrlCmd",\n  "editor.wordWrapColumn": 120,\n  "files.autoSave": "onFocusChange"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"parameter-descriptions",children:"Parameter Descriptions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.fontFamily"}),": Sets the font family; here, Fira Code and MesloLGS NF fonts are used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.fontLigatures"}),": Sets whether ligatures in the font are enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"files.associations"}),": Sets file associations; here, Dockerfile_base is associated with dockerfile."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"markdown.preview.fontSize"}),": Sets the font size for markdown preview."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"debug.console.fontSize"}),": Sets the font size for the debug console."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"explorer.confirmDragAndDrop"}),": Sets whether drag and drop confirmation is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.minimap.enabled"}),": Sets whether the minimap is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.minimap.maxColumn"}),": Sets the maximum number of columns in the minimap."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.smoothScrolling"}),": Sets whether smooth scrolling is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.rulers"}),": Sets the column numbers for indentation guides."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"workbench.colorCustomizations"}),": Sets color customizations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"terminal.integrated.fontFamily"}),": Sets the terminal font family."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"files.trimTrailingWhitespace"}),": Sets whether trailing whitespace is trimmed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"files.trimFinalNewlines"}),": Sets whether final newlines are trimmed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"diffEditor.ignoreTrimWhitespace"}),": Sets whether whitespace in diffs is ignored."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"python.terminal.activateEnvironment"}),": Sets whether the Python environment is activated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"git.ignoreLegacyWarning"}),": Sets whether Git warnings are ignored."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"git.autofetch"}),": Sets whether autofetch is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.largeFileOptimizations"}),": Sets whether optimizations for large files are enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.mouseWheelZoom"}),": Sets whether mouse wheel zoom is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.codeActionsOnSave"}),": Sets code actions on save."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.formatOnSave"}),": Sets whether formatting is applied on save."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"workbench.editorAssociations"}),": Sets editor associations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"debug.onTaskErrors"}),": Sets action on task errors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"explorer.confirmDelete"}),": Sets whether delete confirmation is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"terminal.integrated.copyOnSelection"}),": Sets whether copying is done on selection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"terminal.integrated.cursorBlinking"}),": Sets terminal cursor blinking."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"terminal.integrated.cursorStyle"}),": Sets terminal cursor style."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"remote.downloadExtensionsLocally"}),": Sets whether extensions are downloaded locally."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"terminal.integrated.scrollback"}),": Sets terminal scrollback buffer size."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.cursorStyle"}),": Sets cursor style."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.insertSpaces"}),": Sets whether spaces are inserted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.lineNumbers"}),": Sets whether line numbers are displayed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.wordWrap"}),": Sets whether word wrap is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"workbench.editor.wrapTabs"}),": Sets whether tab wrapping is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"files.watcherExclude"}),": Sets file watcher exclusion patterns."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"notebook.cellToolbarLocation"}),": Sets notebook cell toolbar location."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"github.copilot.editor.enableAutoCompletions"}),": Sets whether auto completions are enabled in GitHub Copilot."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"github.copilot.enable"}),": Sets whether GitHub Copilot is enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"workbench.colorTheme"}),": Sets the color theme."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.multiCursorModifier"}),": Sets the multi-cursor modifier."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"editor.wordWrapColumn"}),": Sets the column for word wrapping."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"files.autoSave"}),": Sets auto-save behavior."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Above are my commonly used VSCode parameter settings."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},78190:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/0331-15273b8f0cbdc3049d3bef3d146e2838.webp"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);