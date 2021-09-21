"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46103,29514],{95122:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),r=n(37027),o=n(18607),l=n(91891),i=n(54416),c=n(51384);var s=function(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a.createElement("div",{className:"pagination-nav__item"},n&&a.createElement(c.Z,{className:"pagination-nav__link",to:n.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",n.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&a.createElement(c.Z,{className:"pagination-nav__link",to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=n(19257);var u=function(e){var t,n=e.content,i=e.sidebar,c=n.frontMatter,u=n.assets,d=n.metadata,f=d.title,p=d.description,v=d.nextItem,g=d.prevItem,b=d.date,h=d.tags,_=d.authors,E=c.hide_table_of_contents,w=c.keywords,k=null!=(t=u.image)?t:c.image;return a.createElement(o.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:i,toc:!E&&n.toc?n.toc:void 0},a.createElement(r.Z,{title:f,description:p,keywords:w,image:k},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),h.length>0&&a.createElement("meta",{property:"article:tag",content:h.map((function(e){return e.label})).join(",")})),a.createElement(l.Z,{frontMatter:c,assets:u,metadata:d,isBlogPostPage:!0},a.createElement(n,null)),(v||g)&&a.createElement(s,{nextItem:v,prevItem:g}))}},91891:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(67294),r=n(86010),o=n(3905),l=n(54416),i=n(51384),c=n(51402),s=n(19257),m=n(83949),u=n(30513),d="blogHeader_11Jz",f="blogPostTitle_nmLu",p="blogPostData_3WzT",v="blogPostDetailsFull_3bEF",g="blogPostDataContainer_1pWc",b="tagsList_1Cfm",h=n(21192),_=n(16509);var E=function(e){var t,n,E,w,k=(E=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),Z=(0,c.C)().withBaseUrl,N=e.children,y=e.frontMatter,C=e.assets,I=e.metadata,D=e.truncated,P=e.isBlogPostPage,x=void 0!==P&&P,B=I.date,T=I.formattedDate,A=I.permalink,L=I.tags,U=I.readingTime,M=I.title,R=I.editUrl,S=I.authors,V=null!=(t=C.image)?t:y.image;return a.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(w=x?"h1":"h2",a.createElement("header",{className:d},a.createElement(w,{className:f,itemProp:"headline"},x?M:a.createElement(i.Z,{itemProp:"url",to:A},M)),a.createElement("div",{className:"row row--no-gutters"},a.createElement("div",{className:"col"},a.createElement(_.Z,{authors:S,assets:C})),a.createElement("div",{className:(0,r.Z)(p,"margin-vert--md","col")},a.createElement("div",{className:g},a.createElement("time",{dateTime:B,itemProp:"datePublished"},T),void 0!==U&&a.createElement(a.Fragment,null," \xb7 ",k(U))))))),V&&a.createElement("meta",{itemProp:"image",content:Z(V,{absolute:!0})}),a.createElement("div",{className:"markdown",itemProp:"articleBody"},a.createElement(o.Zo,{components:m.Z},N)),(L.length>0||D)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(n={},n[v]=x,n))},L.length>0&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":!x})},a.createElement("div",{className:b},a.createElement(h.Z,{tags:L}))),x&&R&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:R})),!x&&D&&a.createElement("div",{className:"col col--3 text--right"},a.createElement(i.Z,{to:I.permalink,"aria-label":"Read more about "+M},a.createElement("b",null,a.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},30513:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(54416),o=n(23779),l=n(15987);function i(e){var t=e.editUrl,n=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return a.createElement(a.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a.createElement(o.Z,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):a.createElement(l.Z,{editUrl:t}))}},32577:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(51384),c=n(19257),s=n(51402),m=n(34455),u=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"var(--ifm-color-gray-900)"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#2C3850"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#4B576F"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#6A768E"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#7D89A1"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#8995AD"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#99A5BD"},{title:"Facebook",imageUrl:"/img/facebook.svg",url:"https://www.facebook.com/TheIOTAFoundation/",backgroundColor:"#BAC6DE"}];function d(e){var t=e.title,n=e.imageUrl,a=e.url,r=e.backgroundColor;return o.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:a},o.createElement("img",{alt:t,className:"social__image",src:(0,s.Z)(n)}),o.createElement("div",{className:"social__title"},t))}var f=function(){return o.createElement("div",{className:"social"},u.map((function(e,t){return o.createElement(d,(0,a.Z)({key:t},e))})))},p=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,n=e.href,l=e.label,c=e.prependBaseUrlToHref,m=(0,r.Z)(e,p),u=(0,s.Z)(t),d=(0,s.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{href:c?d:n}:{to:u},m),l)}var g=function(e){var t=e.sources,n=e.alt;return o.createElement(m.Z,{className:"footer__logo",alt:n,sources:t})};var b=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,m=t.logo,u=void 0===m?{}:m,d={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?o.createElement("footer",{className:(0,l.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},r&&r.length>0&&o.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(v,e))}))):null)}))),(u||n)&&o.createElement("div",{className:"footer__bottom padding-bottom--xl"},u&&(u.src||u.srcDark)&&o.createElement("div",null,u.href?o.createElement(i.Z,{href:u.href},o.createElement(g,{alt:u.alt,sources:d})):o.createElement(g,{alt:u.alt,sources:d})),n?o.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),o.createElement(f,null)):null}},78358:function(e,t,n){n.d(t,{O:function(){return v}});var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(51384),c=n(51402),s=n(78168),m=n(71699),u=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],p=["mobile","position"];function v(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,d=e.href,f=e.label,p=e.sublabel,v=e.icon,g=e.activeClassName,b=void 0===g?"navbar__link--active":g,h=e.prependBaseUrlToHref,_=(0,r.Z)(e,u),E=(0,c.Z)(l),w=(0,c.Z)(t),k=(0,c.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,m.Z)(d),N="dropdown__link--active"===b;return o.createElement(i.Z,(0,a.Z)({},d?{href:h?k:d}:Object.assign({isNavLink:!0,activeClassName:b,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(w)}}:null),_),o.createElement("div",{className:"link"},v&&o.createElement("div",{className:"link__icon"},v),o.createElement("div",{className:"link__body"},o.createElement("div",{className:"link__label"},Z?o.createElement("span",null,f,o.createElement(s.Z,N&&{width:12,height:12})):f),p&&o.createElement("div",{className:"link__sublabel"},p))))}function g(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,d),s=o.createElement(v,(0,a.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?o.createElement("li",null,s):s}function b(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return o.createElement("li",{className:"menu__list-item"},o.createElement(v,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.position,(0,r.Z)(e,p));if("category-header"===a.to){return o.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},a.label)}var l=n?b:g;return o.createElement(l,a)}},16679:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),o=n(67294),l=n(78358),i=n(57617),c=n(86010),s=n(19257),m=n(79861),u=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,p=e.docsPluginId,v=(0,r.Z)(e,u),g=(0,i.useActiveDocContext)(p),b=g.activeVersion,h=g.activeDoc,_=(0,s.J)(p).preferredVersion,E=(0,i.useLatestVersion)(p),w=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([b,_,E].filter(Boolean)),n);return o.createElement(l.Z,(0,a.Z)({exact:!0},v,{className:(0,c.Z)(v.className,(t={},t[d]=h&&h.sidebar===w.sidebar,t)),label:null!=f?f:w.id,to:w.path}))}},68510:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(22122),r=n(19756),o=n(67294),l=n(78358),i=n(61142),c=n(57617),s=n(19257),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,p=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,g=e.dropdownItemsAfter,b=(0,r.Z)(e,m),h=(0,c.useActiveDocContext)(f),_=(0,c.useVersions)(f),E=(0,c.useLatestVersion)(f),w=(0,s.J)(f),k=w.preferredVersion,Z=w.savePreferredVersionName;var N,y=(N=_.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){Z(e.name)}}})),[].concat(v,N,g)),C=null!=(t=null!=(n=h.activeVersion)?n:k)?t:E,I=d&&y?"Versions":C.label,D=d&&y?void 0:u(C).path;return y.length<=1?o.createElement(l.Z,(0,a.Z)({},b,{mobile:d,label:I,to:D,isActive:p?function(){return!1}:void 0})):o.createElement(i.Z,(0,a.Z)({},b,{mobile:d,label:I,to:D,items:y,isActive:p?function(){return!1}:void 0}))}},18384:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(22122),r=n(19756),o=n(67294),l=n(78358),i=n(57617),c=n(19257),s=["label","to","docsPluginId"];function m(e){var t,n=e.label,m=e.to,u=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,i.useActiveVersion)(u),p=(0,c.J)(u).preferredVersion,v=(0,i.useLatestVersion)(u),g=null!=(t=null!=f?f:p)?t:v,b=null!=n?n:g.label,h=null!=m?m:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,a.Z)({},d,{label:b,to:h}))}},61142:function(e,t,n){var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(19257),c=n(78358),s=n(64090),m=["items","position","className"],u=["items","className","position"],d=["mobile","isDropdownItem"];function f(e,t){return!!(0,i.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function p(e){var t,n=e.items,u=e.position,d=e.className,p=(0,r.Z)(e,m),v=(0,o.useRef)(null),g=(0,o.useRef)(null),b=(0,o.useState)(!1),h=b[0],_=b[1],E=function(e,t,n){var a=t.filter((function(e){return f(e,(0,i.be)())})),r=e;return a.length&&(r=Object.assign({},a[0],{label:e.label+" > "+a[0].label})),r}(p,n,(0,i.be)());return(0,o.useEffect)((function(){var e=function(e){v.current&&!v.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[v]),o.createElement("div",{ref:v,className:(0,l.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===u,"dropdown--show":h})},o.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__item navbar__link",d)},E,{onClick:p.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!h))}}),null!=(t=p.children)?t:p.label),o.createElement("ul",{ref:g,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=v.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function v(e){var t,n=e.items,m=e.className,d=(e.position,(0,r.Z)(e,u)),p=(0,i.be)(),v=function(e,t){return e.some((function(e){return f(e,t)}))}(n,p),g=(0,i.uR)({initialState:function(){return!v}}),b=g.collapsed,h=g.toggleCollapsed,_=g.setCollapsed;return(0,o.useEffect)((function(){v&&_(!v)}),[p,v]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=d.children)?t:d.label),o.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.isDropdownItem,(0,r.Z)(e,d)),l=n?v:p;return o.createElement(l,a)}},64090:function(e,t,n){n.d(t,{Z:function(){return P}});var a=n(19756),r=n(67294),o=n(78358),l=n(61142),i=n(22122),c=n(86010),s=n(19257),m=["items","label","className"],u=["className"],d=["items_","layout","position","className"],f=["items_","className","position","layout"],p=["mobile"];function v(e,t){return e.some((function(e){e.items?v(e.items,t):function(e,t){!!(0,s.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function g(e){var t,n=e.items,r=e.label,o=e.className,l=(0,a.Z)(e,m),i={items:[],index:0};n?(r&&i.items.push({label:r,className:o}),(t=i.items).push.apply(t,n)):i.items.push(Object.assign({label:r,className:o},l));return i}function b(e){var t=e.className,n=(0,a.Z)(e,u);if(n.to||n.href)return r.createElement(o.O,(0,i.Z)({className:(0,c.Z)("dropdown__link",t),activeClassName:"dropdown__link--active"},n));if(n.label)return r.createElement("div",{className:"dropdown__label"},n.label);throw"Mega dropdown item must be a link or a category header."}function h(e){var t,n=e.items_,l=e.layout,m=e.position,u=e.className,f=(0,a.Z)(e,d),p=v(n,(0,s.be)()),h=(0,r.useRef)(null),_=(0,r.useState)(!1),E=_[0],w=_[1],k=n.map(g),Z=l.length,N=Math.max.apply(Math,l.map((function(e){return e.split(/\s+/).length}))),y=[];l.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(y[t+n*Z]=e)}))}));for(var C=y.map((function(e){var t,n=k[e];if(n)return null!=(t=n.items[n.index++])?t:null})),I=[],D=null,P=0;P<Z;P++){for(var x=[],B=0;B<N;B++){var T=C[P+B*Z];x.push(T),T&&(D=T)}I.push(x)}return D.onKeyDown=function(e){"Tab"===e.key&&w(!1)},(0,r.useEffect)((function(){var e=function(e){h.current&&!h.current.contains(e.target)&&w(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[h]),r.createElement(r.Fragment,null,r.createElement("div",{ref:h,className:(0,c.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===m,"dropdown--show":E}),onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)}},r.createElement(o.O,(0,i.Z)({className:(0,c.Z)("navbar__item navbar__link",u,{"navbar__link--active":p})},f,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),w(!E))}}),null!=(t=f.children)?t:f.label)),r.createElement("div",{className:(0,c.Z)("dropdown__container",{"dropdown__container--show":E}),onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)}},r.createElement("div",{className:"dropdown__menu dropdown__menu--mega"},I.map((function(e,t){return r.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return r.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?r.createElement(b,e):null)})))})))))}function _(e){var t,n=e.items_,l=e.className,m=(e.position,e.layout,(0,a.Z)(e,f)),u=(0,s.be)(),d=v(n,u),p=(0,s.uR)({initialState:function(){return!d}}),g=p.collapsed,b=p.toggleCollapsed,h=p.setCollapsed;return(0,r.useEffect)((function(){d&&h(!d)}),[u,d]),r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement(o.O,(0,i.Z)({role:"button",className:(0,c.Z)("menu__link menu__link--sublist",l)},m,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=m.children)?t:m.label),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return r.createElement(P,(0,i.Z)({mobile:!0,isDropdownItem:!0,onClick:m.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}var E=function(e){var t=e.mobile,n=void 0!==t&&t,o=(0,a.Z)(e,p),l=n?_:h;return r.createElement(l,o)},w=n(4194),k=n(6832),Z=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function N(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,c=(0,a.Z)(e,Z),m=(0,k.Z)().i18n,u=m.currentLocale,d=m.locales,f=m.localeConfigs,p=(0,s.l5)();function v(e){return f[e].label}var g=d.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),b=[].concat(n,g,o),h=t?"Languages":v(u);return r.createElement(l.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(w.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:b}))}var y=n(42738);function C(e){return e.mobile?null:r.createElement(y.Z,null)}var I=["type"],D={default:function(){return o.Z},localeDropdown:function(){return N},search:function(){return C},dropdown:function(){return l.Z},megaDropdown:function(){return E},docsVersion:function(){return n(18384).Z},docsVersionDropdown:function(){return n(68510).Z},doc:function(){return n(16679).Z}};function P(e){var t=e.type,n=(0,a.Z)(e,I),o=function(e){var t=D[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items,void 0!==n.layout));return r.createElement(o,n)}},5086:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(22122),r=n(67294),o=n(19257),l=n(5730),i=n(86010),c=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,o=e.checked,l=e.disabled,c=e.onChange,s=(0,r.useState)(o),m=s[0],u=s[1],d=(0,r.useState)(!1),f=d[0],p=d[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,i.Z)("toggle",t,{"toggle--checked":m,"toggle--focused":f,"toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:v,checked:m,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!m)},onFocus:function(){return p(!0)},onBlur:function(){return p(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function s(e){var t=(0,o.LU)().colorMode.switchConfig,n=t.darkIcon,i=t.darkIconStyle,s=t.lightIcon,m=t.lightIconStyle,u=(0,l.Z)();return r.createElement(c,(0,a.Z)({disabled:!u,styles:{unchecked:m,checked:i},icons:{unchecked:s,checked:n}},e))}}}]);