(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"IndexPage",function(){return k}),n.d(t,"IndexQuery",function(){return _});var r=n(7),a=n.n(r),o=n(36),i=n(248),l=n.n(i),c=n(169),s=n.n(c),m=n(0),p=n.n(m),u=n(163),d=n.n(u),g=n(159),f=n(168),h=n(161),b=n(160),y=g.c.main.withConfig({displayName:"pages__Homepage",componentId:"sc-1ab0nnr-0"})(["display:flex;height:100vh;flex-direction:row;@media ","{height:100%;flex-direction:column;}@media ","{height:100%;flex-direction:column;}"],b.a.tablet,b.a.phone),x=g.c.div.withConfig({displayName:"pages__GridRow",componentId:"sc-1ab0nnr-1"})(["flex:1;display:flex;justify-content:center;align-items:center;background:",";background-position:center 75%;background-size:cover;padding:3rem 3rem;color:",";h1{color:",";}@media ","{padding:3rem 3rem;background:",";background-position:center 65%;}@media ","{padding:2rem 1.5rem;background:",";background-position:center 65%;}"],function(e){return e.background?"linear-gradient(\n      90deg,\n      "+s()(l()(.3,"#FFFFFF"),0)+", \n      "+s()(l()(.3,"#FFFFFF"),1)+"), url(/assets/bg/5.jpg) no-repeat":null},function(e){return e.background?e.theme.colors.white:null},function(e){return e.background?e.theme.colors.white:null},b.a.tablet,function(e){return e.background?"linear-gradient(\n        180deg,\n        "+s()(l()(.3,"#FFFFFF"),0)+" 70%, \n        "+s()(l()(.3,"#FFFFFF"),1)+"), url(/assets/bg/5.jpg) no-repeat":null},b.a.phone,function(e){return e.background?"linear-gradient(\n        180deg,\n        "+s()(l()(.3,"#FFFFFF"),0)+" 70%, \n        "+s()(l()(.3,"#FFFFFF"),1)+"), url(/assets/bg/5.jpg) no-repeat":null}),v=g.c.img.withConfig({displayName:"pages__AppIcon",componentId:"sc-1ab0nnr-2"})(["margin:20px auto;width:100px;height:100px;border-radius:20%;display:flex;justify-content:center;align-items:flex-end;background-color:#ececec;position:relative;"]),w=g.c.div.withConfig({displayName:"pages__HomepageContent",componentId:"sc-1ab0nnr-3"})(["max-width:30rem;text-align:",";"],function(e){return e.center?"center":"left"}),E=g.c.div.withConfig({displayName:"pages__ProjectContainer",componentId:"sc-1ab0nnr-4"})(["flex-direction:row;flex-wrap:wrap;align-items:space-evenly;justify-content:space-evenly;display:flex;"]),k=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark,t=e.edges,n=e.totalCount,r=t.filter(function(e){return"Projects"===e.node.frontmatter.category}),a=t.filter(function(e){return"Projects"!==e.node.frontmatter.category});return p.a.createElement(f.e,null,p.a.createElement(f.l,{fullWidth:!0},p.a.createElement(d.a,{title:"Homepage | "+h.a.siteTitle}),p.a.createElement(y,null,p.a.createElement(x,{background:!0},p.a.createElement(w,{center:!0},p.a.createElement("img",{src:h.a.siteLogo}),p.a.createElement(o.Link,{to:"/categories/projects"},p.a.createElement(f.b,{big:!0},p.a.createElement("svg",{width:"1792",height:"1792",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},p.a.createElement("path",{d:"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"})),"Projects")))),p.a.createElement(x,null,p.a.createElement(w,null,p.a.createElement("h2",null,"Projects"),p.a.createElement("p",null,"Danger Technologies is a one-man freelance app development studio intended as a creative outlet for things I don't get the chance to work with in my day to day job."),p.a.createElement("p",null),p.a.createElement(E,null,r.map(function(e){var t=e.node;return p.a.createElement(o.Link,{to:"/posts/"+t.fields.slug},p.a.createElement(v,{src:t.frontmatter.icon}))})),p.a.createElement("hr",null),p.a.createElement("h2",null,"Posts"),a.map(function(e){return p.a.createElement(f.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})}),p.a.createElement("p",{className:"textRight"},p.a.createElement(o.Link,{to:"/posts"},"All articles (",n-r.length,")")))))))},t}(p.a.Component),_="2567097335";t.default=k},160:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},161:function(e,t,n){"use strict";t.a={author:"Victor Rudolfsson",defaultBg:"/assets/bg/5.jpg",favicon:"src/favicon.png",ogLanguage:"en_US",pathPrefix:"/",siteBanner:"/assets/banner.jpg",siteDescription:"A creative outlet and one-man development studio",siteLanguage:"en",siteLogo:"/assets/logo.png",siteLogoLight:"/assets/logo-light.png",siteTitle:"Danger Technologies",siteTitleAlt:"Danger Technologies",siteUrl:"http://dangertechnologies.com",themeColor:"rgb(220, 183, 55)",backgroundColor:"rgb(61, 57, 55)",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",siteFBAppID:"",Google_Tag_Manager_ID:"GTM-MVP42QK",POST_PER_PAGE:4}},166:function(e){e.exports={data:{site:{buildTime:"08.02.2019"}}}},167:function(e,t,n){},168:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(36),i=n(162),l=n.n(i),c=n(0),s=n.n(c),m=n(159),p=(n(170),n(169)),u=n.n(p),d=m.c.div.withConfig({displayName:"Subline",componentId:"sc-1fq61g8-0"})(["font-size:",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.light&&"color: "+u()(e.theme.colors.white,.7)},function(e){return e.sectionTitle&&"text-align: center"}),g=m.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1xf6n7b-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),f=m.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1xf6n7b-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),h=m.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1xf6n7b-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),b=m.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1xf6n7b-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,i=e.timeToRead,c=e.category,m=t.charAt(0);return s.a.createElement(g,null,s.a.createElement(f,null,s.a.createElement(h,null,m),s.a.createElement(o.Link,{to:"/posts/"+a},t)),s.a.createElement(d,null,n," — ",i," Min Read — In",s.a.createElement(o.Link,{to:"/categories/"+l()(c)}," ",c)),s.a.createElement(b,null,r))},t}(s.a.PureComponent),x=(n(164),n(165)),v=n.n(x),w=m.c.button.withConfig({displayName:"Button",componentId:"n5un7m-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return v()(.3,e.theme.colors.primary)}),E=n(161),k=n(160),_=m.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-16h21r1-0"})(["position:relative;background:url(",") no-repeat;background-size:cover;padding:8rem 2rem 10rem;text-align:center;background-position-y:70%;::after{background:transparent url(/assets/mask.svg) no-repeat bottom center;background-size:101%;bottom:-2px;content:'';display:block;height:100%;left:0;position:absolute;width:100%;}@media ","{padding:4rem 2rem 6rem;}@media ","{padding:1rem 0.5rem 2rem;}"],function(e){return e.banner},k.a.tablet,k.a.phone),F=m.c.div.withConfig({displayName:"Header__Content",componentId:"sc-16h21r1-1"})(["position:relative;z-index:999;align-items:center;justify-content:center;display:flex;flex-direction:column;a{color:white;&:hover{opacity:0.85;color:white;}}"]),C=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return s.a.createElement(_,{banner:this.props.banner||E.a.defaultBg},s.a.createElement(F,null,this.props.children))},t}(s.a.PureComponent),N=n(171),P=n.n(N),I=n(166),j=n(172),T=n.n(j),L={colors:{primary:"rgb(61, 57, 55)",bg:"#fff",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}};n(167);function z(){var e=P()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return z=function(){return e},e}var A=Object(m.b)(z(),L.colors.bg,L.colors.primary,L.colors.bg,L.colors.grey.default,k.a.phone,L.colors.grey.dark,L.transitions.normal,L.colors.primary,L.colors.grey.dark,L.colors.primary,L.colors.grey.dark),S=m.c.footer.withConfig({displayName:"Layout__Footer",componentId:"fj79u6-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),O=m.c.span.withConfig({displayName:"Layout__Copyleft",componentId:"fj79u6-1"})(["display:inline-block;transform:rotate(180deg);"]),B=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement(o.StaticQuery,{query:"1536950682",render:function(t){return s.a.createElement(m.a,{theme:L},s.a.createElement(s.a.Fragment,null,s.a.createElement(A,null),e,s.a.createElement(S,null,s.a.createElement(O,null,"©")," ",T()(t.site.buildTime,".")[2]," by Victor Rudolfsson. All rights reversed. ",s.a.createElement("br",null),s.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:I})},t}(s.a.PureComponent),q=m.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-1ap8vxn-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),R=m.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-1ap8vxn-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),D=m.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-1ap8vxn-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),W=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return s.a.createElement(q,null,t&&s.a.createElement(R,null,s.a.createElement("span",null,"Previous"),s.a.createElement(o.Link,{to:"/posts/"+l()(t.frontmatter.title)},t.frontmatter.title)),n&&s.a.createElement(D,null,s.a.createElement("span",null,"Next"),s.a.createElement(o.Link,{to:"/posts/"+l()(n.frontmatter.title)},n.frontmatter.title)))},t}(s.a.PureComponent),M=m.c.div.withConfig({displayName:"SectionTitle",componentId:"fijs9v-0"})(["font-size:",";text-transform:",";text-align:center;font-family:monospace;color:",";position:relative;padding:2rem 0 0;margin-bottom:2rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),U=n(163),H=n.n(U),G=function(e){var t,n,r,a,o=e.postNode,i=e.postPath,l=e.postSEO,c="/"===E.a.pathPrefix?"":E.a.pathPrefix;l?(t=o.frontmatter.title,n=o.excerpt,r=E.a.siteBanner,a=E.a.siteUrl+c+i):(t=E.a.siteTitle,n=E.a.siteDescription,r=E.a.siteBanner);r=E.a.siteUrl+c+r;var m=E.a.siteUrl+E.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":m,url:m,name:t,alternateName:E.a.siteTitleAlt?E.a.siteTitleAlt:""}];return l&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:E.a.siteTitleAlt?E.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:E.a.siteDescription,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:E.a.author},publisher:{"@type":"Organization",name:E.a.author,logo:{"@type":"ImageObject",url:E.a.siteUrl+c+E.a.siteLogo}},isPartOf:m,mainEntityOfPage:{"@type":"WebSite","@id":m}}]),s.a.createElement(H.a,null,s.a.createElement("html",{lang:E.a.siteLanguage}),s.a.createElement("title",null,E.a.siteTitle),s.a.createElement("meta",{name:"description",content:n}),s.a.createElement("meta",{name:"image",content:r}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),s.a.createElement("meta",{property:"og:locale",content:E.a.ogLanguage}),s.a.createElement("meta",{property:"og:site_name",content:E.a.ogSiteName?E.a.ogSiteName:""}),s.a.createElement("meta",{property:"og:url",content:l?a:m}),l?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:t}),s.a.createElement("meta",{property:"og:description",content:n}),s.a.createElement("meta",{property:"og:image",content:r}),s.a.createElement("meta",{property:"fb:app_id",content:E.a.siteFBAppID?E.a.siteFBAppID:""}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:E.a.userTwitter?E.a.userTwitter:""}),s.a.createElement("meta",{name:"twitter:title",content:t}),s.a.createElement("meta",{name:"twitter:url",content:E.a.siteUrl}),s.a.createElement("meta",{name:"twitter:description",content:n}),s.a.createElement("meta",{name:"twitter:image",content:r}))},J=m.c.div.withConfig({displayName:"Wrapper",componentId:"iqsuww-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:",";padding:",";@media ","{padding:",";}@media ","{padding:",";}"],function(e){return e.fullWidth?"100%":"100rem"},function(e){return e.fullWidth?"0":"0 6rem"},k.a.tablet,function(e){return e.fullWidth?"0":"0 3rem"},k.a.phone,function(e){return e.fullWidth?"0":"0 1rem"}),Q=m.c.div.withConfig({displayName:"Content",componentId:"sc-1po8e0q-0"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-4rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.theme.colors.bg},k.a.tablet,k.a.phone),V=m.c.h3.withConfig({displayName:"Title",componentId:"vc7jve-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),K=(n(76),n(173),n(174),m.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-1f561kb-0"})(["text-align:center;margin:2rem;}"])),Y=m.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"sc-1f561kb-1"})(["display:inline-block;padding:0 2.5rem;border-radius:3.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:1rem;&:hover,&.current{background-color:",";color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}"],k.a.phone,L.colors.grey.light,v()(.2,L.colors.primary),L.colors.white,v()(.2,L.colors.primary),k.a.tablet),X=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,i=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),c="/"+r+"/"+(t+1).toString();return n>1?s.a.createElement(K,null,s.a.createElement(Y,null,!a&&s.a.createElement(o.Link,{className:"prev page-numbers",to:l,rel:"prev"},"← Prev"),Array.from({length:n},function(e,n){return s.a.createElement(o.Link,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!i&&s.a.createElement(o.Link,{className:"next page-numbers",to:c,rel:"next"},"Next →"))):null},t}(s.a.PureComponent);n.d(t,"a",function(){return y}),n.d(t,"b",function(){return w}),n.d(t,"d",function(){return C}),n.d(t,"e",function(){return B}),n.d(t,"g",function(){return W}),n.d(t,"i",function(){return M}),n.d(t,"h",function(){return G}),n.d(t,"j",function(){return d}),n.d(t,"l",function(){return J}),n.d(t,"c",function(){return Q}),n.d(t,"k",function(){return V}),n.d(t,"f",function(){return X})},248:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=l(n(189)),a=l(n(190)),o=l(n(191)),i=l(n(192));function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=(0,o.default)(t);return(0,i.default)(c({},n,{lightness:(0,a.default)(0,1,n.lightness+parseFloat(e))}))}var m=(0,r.default)(s);t.default=m,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-tsx-eff551b811ec84e90ebb.js.map