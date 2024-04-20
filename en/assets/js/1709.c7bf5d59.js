"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1709],{3408:(e,t,a)=>{a.d(t,{A:()=>m});var s=a(96540),n=a(34164),l=a(21312),r=a(17559),i=a(23104),o=a(75062);const c={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=a(74848);function m(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,n]=(0,s.useState)(!1),l=(0,s.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,i.gk)();return(0,i.Mq)(((e,a)=>{let{scrollY:s}=e;const r=a?.scrollY;r&&(l.current?l.current=!1:s>=r?(c(),n(!1)):s<t?n(!1):s+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,o.$)((e=>{e.location.hash&&(l.current=!0,n(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return(0,d.jsx)("button",{"aria-label":(0,l.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,n.A)("clean-btn",r.G.common.backToTopButton,c.backToTopButton,e&&c.backToTopButtonShow),type:"button",onClick:t})}},32819:(e,t,a)=>{a.d(t,{A:()=>n});a(96540);var s=a(74848);function n(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})}},23125:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(34164),n=a(70440),l=a(7131),r=a(15533),i=a(74848);function o(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,l.e)();return(0,i.jsx)("div",{id:o?n.blogPostContainerID:void 0,className:(0,s.A)("markdown",a),children:(0,i.jsx)(r.A,{children:t})})}},78746:(e,t,a)=>{a.d(t,{A:()=>h});a(96540);var s=a(34164),n=a(7131),l=a(17559),r=a(4336),i=a(62053),o=a(21312),c=a(28774),d=a(74848);function m(){return(0,d.jsx)("b",{children:(0,d.jsx)(o.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function u(e){const{blogPostTitle:t,...a}=e;return(0,d.jsx)(c.A,{"aria-label":(0,o.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,d.jsx)(m,{})})}function h(){const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{tags:a,title:o,editUrl:c,hasTruncateMarker:m,lastUpdatedBy:h,lastUpdatedAt:g}=e,p=!t&&m,b=a.length>0;if(!(b||p||c))return null;if(t){const e=!!(c||g||h);return(0,d.jsxs)("footer",{className:"docusaurus-mt-lg",children:[b&&(0,d.jsx)("div",{className:(0,s.A)("row","margin-top--sm",l.G.blog.blogFooterEditMetaRow),children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)(i.A,{tags:a})})}),e&&(0,d.jsx)(r.A,{className:(0,s.A)("margin-top--sm",l.G.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:g,lastUpdatedBy:h})]})}return(0,d.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[b&&(0,d.jsx)("div",{className:(0,s.A)("col",{"col--9":p}),children:(0,d.jsx)(i.A,{tags:a})}),p&&(0,d.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":b}),children:(0,d.jsx)(u,{blogPostTitle:o,to:e.permalink})})]})}},85215:(e,t,a)=>{a.d(t,{A:()=>A});a(96540);var s=a(34164),n=a(28774),l=a(7131);const r={title:"title_f1Hy"};var i=a(74848);function o(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,l.e)(),{permalink:c,title:d}=a,m=o?"h1":"h2";return(0,i.jsx)(m,{className:(0,s.A)(r.title,t),children:o?d:(0,i.jsx)(n.A,{to:c,children:d})})}var c=a(21312),d=a(53465),m=a(36266);const u={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.W)();return t=>{const a=Math.ceil(t);return e(a,(0,c.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function g(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,children:a})}function p(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:a}=(0,l.e)(),{date:n,readingTime:r}=a,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,s.A)(u.container,"margin-vert--md",t),children:[(0,i.jsx)(g,{date:n,formattedDate:(c=n,o.format(new Date(c)))}),void 0!==r&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{}),(0,i.jsx)(h,{readingTime:r})]})]});var c}function x(e){return e.href?(0,i.jsx)(n.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function j(e){let{author:t,className:a}=e;const{name:n,title:l,url:r,imageURL:o,email:c}=t,d=r||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",a),children:[o&&(0,i.jsx)(x,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,i.jsxs)("div",{className:"avatar__intro",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(x,{href:d,children:(0,i.jsx)("span",{children:n})})}),l&&(0,i.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:a},assets:n}=(0,l.e)();if(0===a.length)return null;const r=a.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",r?f.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,s.A)(!r&&"col col--6",r?f.imageOnlyAuthorCol:f.authorCol),children:(0,i.jsx)(j,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(o,{}),(0,i.jsx)(b,{}),(0,i.jsx)(v,{})]})}},18256:(e,t,a)=>{a.d(t,{A:()=>x});var s=a(96540),n=a(24581),l=a(34164),r=a(28774),i=a(21312),o=a(56347),c=a(99169);function d(e){const{pathname:t}=(0,o.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,c.ys)(e.permalink,t))}(e,t)))),[e,t])}const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var u=a(74848);function h(e){let{sidebar:t}=e;const a=d(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,l.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,l.A)(m.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,l.A)(m.sidebarItemList,"clean-list"),children:a.map((e=>(0,u.jsx)("li",{className:m.sidebarItem,children:(0,u.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var g=a(75600);function p(e){let{sidebar:t}=e;const a=d(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function b(e){return(0,u.jsx)(g.GX,{component:p,props:e})}function x(e){let{sidebar:t}=e;const a=(0,n.l)();return t?.items.length?"mobile"===a?(0,u.jsx)(b,{sidebar:t}):(0,u.jsx)(h,{sidebar:t}):null}},4336:(e,t,a)=>{a.d(t,{A:()=>b});a(96540);var s=a(34164),n=a(21312),l=a(17559),r=a(28774);const i={iconEdit:"iconEdit_Z9Sw"};var o=a(74848);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(r.A,{to:t,className:l.G.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var m=a(36266);function u(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,m.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(n.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(n.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:l.G.common.lastUpdated,children:[(0,o.jsx)(n.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(u,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function b(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:l}=e;return(0,o.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(d,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.A)("col",p.lastUpdated),children:(n||l)&&(0,o.jsx)(g,{lastUpdatedAt:n,lastUpdatedBy:l})})]})}},39022:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var s=a(34164),n=a(28774),l=a(74848);function r(e){const{permalink:t,title:a,subLabel:r,isNext:i}=e;return(0,l.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(34164),n=a(28774);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(74848);function i(e){let{permalink:t,label:a,count:i}=e;return(0,r.jsxs)(n.A,{href:t,className:(0,s.A)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,r.jsx)("span",{children:i})]})}},62053:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(34164),n=a(21312),l=a(56133);const r={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(74848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,i.jsx)("li",{className:r.tag,children:(0,i.jsx)(l.A,{label:t,permalink:a})},a)}))})]})}},7131:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>i});var s=a(96540),n=a(89532),l=a(74848);const r=s.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,l.jsx)(r.Provider,{value:i,children:t})}function o(){const e=(0,s.useContext)(r);if(null===e)throw new n.dV("BlogPostProvider");return e}},36266:(e,t,a)=>{a.d(t,{i:()=>n});var s=a(44586);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}},53465:(e,t,a)=>{a.d(t,{W:()=>c});var s=a(96540),n=a(44586);const l=["zero","one","two","few","many","other"];function r(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return s[Math.min(l,s.length-1)]}(a,t,e)}}}}]);