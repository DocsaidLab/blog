"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3249],{67763:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var i=n(34164),a=n(65195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=n(74848);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(a.A,{...n,linkClassName:r,linkActiveClassName:l})})}},65195:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(96540),a=n(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>r(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:s}),c=l(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var m=n(28774),u=n(74848);function g(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const h=i.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const p=(0,a.p)(),f=c??p.tableOfContents.minHeadingLevel,x=m??p.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:x}}),[r,l,f,x])),(0,u.jsx)(h,{toc:v,className:n,linkClassName:r,...g})}},50996:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var i=n(34164),a=n(21312),o=n(5260),s=n(74848);function r(){return(0,s.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(o.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(17559),m=n(27293);function u(e){let{className:t}=e;return(0,s.jsx)(m.A,{type:"caution",title:(0,s.jsx)(r,{}),className:(0,i.A)(t,d.G.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function g(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(u,{...e})]})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>m});var i=n(86025),a=n(44586),o=n(36803);var s=n(7131);const r=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.A)(),{withBaseUrl:n}=(0,i.h)(),{metadata:{blogDescription:o,blogTitle:s,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:s,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:i,frontMatter:a,metadata:o}=e,{date:s,title:d,description:m,lastUpdatedAt:u}=o,g=i.image??a.image,h=a.keywords??[],p=`${t.url}${o.permalink}`,f=u?r(u):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:s,...f?{dateModified:f}:{},...l(o.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function m(){const e=function(){const e=(0,o.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,s.e)(),{siteConfig:d}=(0,a.A)(),{withBaseUrl:m}=(0,i.h)(),{date:u,title:g,description:h,frontMatter:p,lastUpdatedAt:f}=n,x=t.image??p.image,v=p.keywords??[],b=f?r(f):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:h,datePublished:u,...b?{dateModified:b}:{},...l(n.authors),...c(x,m,g),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},26699:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(95293),a=n(74848),o=n(96540);function s({id:e,host:t,repo:i,repoId:s,category:r,categoryId:l,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:g,inputPosition:h,theme:p,lang:f,loading:x}){const[v,b]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{v||(n.e(1135).then(n.bind(n,1135)),b(!0))}),[]),v?(0,a.jsx)("giscus-widget",{id:e,host:t,repo:i,repoid:s,category:r,categoryid:l,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:g,inputposition:h,theme:p,lang:f,loading:x}):null}function r(){const{colorMode:e}=(0,i.G)();return(0,a.jsxs)("div",{style:{marginTop:"3rem"},children:[" ",(0,a.jsx)(s,{repo:"DocsaidLab/blog",repoId:"R_kgDOK0_How",category:"Announcements",categoryId:"DIC_kwDOK0_Ho84CeZ07",mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:e,lang:"zh-TW",loading:"lazy",crossorigin:"anonymous",async:!0})]})}},74370:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(18256),a=n(10781),o=n(34164),s=(n(96540),n(74848));function r(e){const{sidebar:t,toc:n,children:r,...l}=e,c=t&&t.items.length>0;return(0,s.jsx)(a.A,{...l,children:(0,s.jsx)("div",{className:"container margin-vert--lg",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("main",{className:(0,o.A)("col",{"col--9":c,"col--9 col--offset-1":!c}),children:r}),(0,s.jsx)(i.A,{sidebar:t}),n&&(0,s.jsx)("div",{className:"col col--2",children:n})]})})})}},89147:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(7131),a=n(3408),o=n(32819),s=n(23125),r=n(78746),l=n(85215),c=n(34164),d=(n(96540),n(74848));function m(e){let{children:t,className:n}=e;const m=function(){const{isBlogPostPage:e}=(0,i.e)();return e?void 0:"margin-bottom--xl"}(),{metadata:u,frontMatter:g,isBlogPostPage:h}=(0,i.e)();return(0,d.jsxs)(o.A,{className:(0,c.A)(m,n),children:[h?(0,d.jsxs)("div",{children:[(0,d.jsx)(l.A,{}),(0,d.jsx)(s.A,{children:t}),(0,d.jsx)(r.A,{})]}):(0,d.jsxs)("div",{children:[(0,d.jsxs)("a",{href:u.permalink,children:[g.image&&(0,d.jsx)("img",{className:"margin-bottom--sm",loading:"lazy",src:g.image,alt:g.title}),(0,d.jsx)(l.A,{}),(0,d.jsx)("p",{children:g.description})]}),(0,d.jsx)(r.A,{})]}),(0,d.jsx)(a.A,{})]})}},76315:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var i=n(61213),a=n(17559),o=n(7131),s=n(74370),r=n(89147),l=(n(96540),n(74848));function c(){const{assets:e,metadata:t}=(0,o.e)(),{title:n,description:a,date:s,tags:r,authors:c,frontMatter:d}=t,{keywords:m}=d,u=e.image??d.image;return(0,l.jsxs)(i.be,{title:n,description:a,keywords:m,image:u,children:[(0,l.jsx)("meta",{property:"og:type",content:"article"}),(0,l.jsx)("meta",{property:"article:published_time",content:s}),c.some((e=>e.url))&&(0,l.jsx)("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,l.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var d=n(5260),m=n(6676);function u(){const e=(0,m.J)();return(0,l.jsx)(d.A,{children:(0,l.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var g=n(21312),h=n(39022);function p(e){const{nextItem:t,prevItem:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,g.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,l.jsx)(h.A,{...n,subLabel:(0,l.jsx)(g.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,l.jsx)(h.A,{...t,subLabel:(0,l.jsx)(g.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}var f=n(67763),x=n(50996),v=n(34164),b=n(26699);function j(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,o.e)(),{nextItem:c,prevItem:d,frontMatter:m,unlisted:u}=i,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:v,no_comments:j}=m;return(0,l.jsxs)(s.A,{sidebar:t,toc:!g&&a.length>0?(0,l.jsx)(f.A,{toc:a,minHeadingLevel:h,maxHeadingLevel:v}):void 0,children:[u&&(0,l.jsx)(x.A,{}),(0,l.jsx)(r.A,{children:n}),!j&&(0,l.jsx)(b.A,{}),(c||d)&&(0,l.jsx)(p,{nextItem:c,prevItem:d})]})}function A(e){const t=e.content;return(0,l.jsx)(o.i,{content:e.content,isBlogPostPage:!0,children:(0,l.jsxs)(i.e3,{className:(0,v.A)(a.G.wrapper.blogPages,a.G.page.blogPostPage),children:[(0,l.jsx)(c,{}),(0,l.jsx)(u,{}),(0,l.jsx)(j,{sidebar:e.sidebar,children:(0,l.jsx)(t,{})})]})})}}}]);