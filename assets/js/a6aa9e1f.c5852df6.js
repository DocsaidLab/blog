"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7643],{3408:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(96540),s=a(34164),r=a(21312),i=a(17559),l=a(23104),o=a(75062);const c={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=a(74848);function m(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,s]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:i,cancelScroll:c}=(0,l.gk)();return(0,l.Mq)(((e,a)=>{let{scrollY:n}=e;const i=a?.scrollY;i&&(r.current?r.current=!1:n>=i?(c(),s(!1)):n<t?s(!1):n+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,o.$)((e=>{e.location.hash&&(r.current=!0,s(!1))})),{shown:a,scrollToTop:()=>i(0)}}({threshold:300});return(0,d.jsx)("button",{"aria-label":(0,r.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,s.A)("clean-btn",i.G.common.backToTopButton,c.backToTopButton,e&&c.backToTopButtonShow),type:"button",onClick:t})}},35124:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(96540);var n=a(34164),s=a(44586),r=a(61213),i=a(17559),l=a(82853),o=a(3345),c=a(41463),d=a(33892),m=a(5260),u=a(6676),g=a(74848);function h(e){const t=(0,u.k)(e);return(0,g.jsx)(m.A,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.A)(),{blogDescription:n,blogTitle:i,permalink:l}=t,o="/"===l?a:i;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:o,description:n}),(0,g.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:a,sidebar:n}=e;return(0,g.jsxs)(l.A,{sidebar:n,children:[(0,g.jsx)(d.A,{items:a}),(0,g.jsx)(o.A,{metadata:t})]})}function b(e){return(0,g.jsxs)(r.e3,{className:(0,n.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(x,{...e})]})}},33892:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(7131),s=a(28811),r=a(74848);function i(e){let{items:t,component:a=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.i,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},39022:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(34164),s=a(28774),r=a(74848);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(34164),s=a(28774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(74848);function l(e){let{permalink:t,label:a,count:l}=e;return(0,i.jsxs)(s.A,{href:t,className:(0,n.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},62053:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(34164),s=a(21312),r=a(56133);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(74848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.A,{label:t,permalink:a})},a)}))})]})}},7131:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>l});var n=a(96540),s=a(89532),r=a(74848);const i=n.createContext(null);function l(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,n.useContext)(i);if(null===e)throw new s.dV("BlogPostProvider");return e}},6676:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>m});var n=a(86025),s=a(44586),r=a(36803);var i=a(7131);const l=e=>new Date(e).toISOString();function o(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,s.A)(),{withBaseUrl:a}=(0,n.h)(),{metadata:{blogDescription:r,blogTitle:i,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:i,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:s,metadata:r}=e,{date:i,title:d,description:m,lastUpdatedAt:u}=r,g=n.image??s.image,h=s.keywords??[],p=`${t.url}${r.permalink}`,x=u?l(u):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:i,...x?{dateModified:x}:{},...o(r.authors),...c(g,a,d),...h?{keywords:h}:{}}}(e.content,t,a)))}}function m(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,i.e)(),{siteConfig:d}=(0,s.A)(),{withBaseUrl:m}=(0,n.h)(),{date:u,title:g,description:h,frontMatter:p,lastUpdatedAt:x}=a,b=t.image??p.image,j=p.keywords??[],f=x?l(x):void 0,v=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:g,name:g,description:h,datePublished:u,...f?{dateModified:f}:{},...o(a.authors),...c(b,m,g),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},53465:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(96540),s=a(44586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=a.select(t),r=a.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(a,t,e)}}},82853:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(96540),s=a(24581),r=a(34164),i=a(28774),l=a(21312),o=a(56347),c=a(99169);function d(e){const{pathname:t}=(0,o.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,c.ys)(e.permalink,t))}(e,t)))),[e,t])}const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var u=a(74848);function g(e){let{sidebar:t}=e;const a=d(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,r.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,r.A)(m.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,r.A)(m.sidebarItemList,"clean-list"),children:a.map((e=>(0,u.jsx)("li",{className:m.sidebarItem,children:(0,u.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=a(75600);function p(e){let{sidebar:t}=e;const a=d(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,u.jsx)(h.GX,{component:p,props:e})}function b(e){let{sidebar:t}=e;const a=(0,s.l)();return t?.items.length?"mobile"===a?(0,u.jsx)(x,{sidebar:t}):(0,u.jsx)(g,{sidebar:t}):null}var j=a(10781);function f(e){const{sidebar:t,toc:a,children:n,...s}=e,i=t&&t.items.length>0;return(0,u.jsx)(j.A,{...s,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("main",{className:(0,r.A)("col",{"col--9":i,"col--9 col--offset-1":!i}),children:n}),(0,u.jsx)(b,{sidebar:t}),a&&(0,u.jsx)("div",{className:"col col--2",children:a})]})})})}},3345:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(21312),s=a(39022),r=a(74848);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(s.A,{permalink:a,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,r.jsx)(s.A,{permalink:i,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},28811:(e,t,a)=>{a.d(t,{A:()=>U});var n=a(7131),s=a(3408),r=(a(96540),a(74848));function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(34164),o=a(70440),c=a(15533);function d(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,n.e)();return(0,r.jsx)("div",{id:s?o.blogPostContainerID:void 0,className:(0,l.A)("markdown",a),children:(0,r.jsx)(c.A,{children:t})})}var m=a(17559),u=a(4336),g=a(62053),h=a(21312),p=a(28774);function x(){return(0,r.jsx)("b",{children:(0,r.jsx)(h.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function b(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(p.A,{"aria-label":(0,h.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(x,{})})}function j(){const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{tags:a,title:s,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,h=!t&&o,p=a.length>0;if(!(p||h||i))return null;if(t){const e=!!(i||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[p&&(0,r.jsx)("div",{className:(0,l.A)("row","margin-top--sm",m.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(g.A,{tags:a})})}),e&&(0,r.jsx)(u.A,{className:(0,l.A)("margin-top--sm",m.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[p&&(0,r.jsx)("div",{className:(0,l.A)("col",{"col--9":h}),children:(0,r.jsx)(g.A,{tags:a})}),h&&(0,r.jsx)("div",{className:(0,l.A)("col text--right",{"col--3":p}),children:(0,r.jsx)(b,{blogPostTitle:s,to:e.permalink})})]})}const f={title:"title_xvU1"};function v(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,n.e)(),{permalink:i,title:o}=a,c=s?"h1":"h2";return(0,r.jsx)(c,{className:(0,l.A)(f.title,t),children:s?o:(0,r.jsx)(p.A,{to:i,children:o})})}var A=a(53465),k=a(36266);const N={container:"container_iJTo"};function T(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,A.W)();return t=>{const a=Math.ceil(t);return e(a,(0,h.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function _(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function w(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function P(e){let{className:t}=e;const{metadata:a}=(0,n.e)(),{date:s,readingTime:i}=a,o=(0,k.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,l.A)(N.container,"margin-vert--md",t),children:[(0,r.jsx)(_,{date:s,formattedDate:(c=s,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),(0,r.jsx)(T,{readingTime:i})]})]});var c}function y(e){return e.href?(0,r.jsx)(p.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function B(e){let{author:t,className:a}=e;const{name:n,title:s,url:i,imageURL:o,email:c}=t,d=i||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,l.A)("avatar margin-bottom--sm",a),children:[o&&(0,r.jsx)(y,{href:d,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(y,{href:d,children:(0,r.jsx)("span",{children:n})})}),s&&(0,r.jsx)("small",{className:"avatar__subtitle",children:s})]})]})}const I={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function L(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,n.e)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,l.A)("margin-top--md margin-bottom--sm",i?I.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,l.A)(!i&&"col col--6",i?I.imageOnlyAuthorCol:I.authorCol),children:(0,r.jsx)(B,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function M(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(v,{}),(0,r.jsx)(P,{}),(0,r.jsx)(L,{})]})}function U(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,n.e)();return e?void 0:"margin-bottom--xl"}(),{metadata:c,frontMatter:m,isBlogPostPage:u}=(0,n.e)();return(0,r.jsxs)(i,{className:(0,l.A)(o,a),children:[u?(0,r.jsxs)("div",{children:[(0,r.jsx)(M,{}),(0,r.jsx)(d,{children:t}),(0,r.jsx)(j,{})]}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("a",{href:c.permalink,children:[m.image&&(0,r.jsx)("img",{className:"margin-bottom--sm",loading:"lazy",src:m.image,alt:m.title}),(0,r.jsx)(M,{}),(0,r.jsx)("p",{children:m.description})]}),(0,r.jsx)(j,{})]}),(0,r.jsx)(s.A,{})]})}}}]);