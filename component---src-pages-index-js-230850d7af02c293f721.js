(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(141),l=t(136),c=(t(154),function(){return r.a.createElement("div",{className:"navbox"},r.a.createElement("div",{className:"avator"}),r.a.createElement("div",{className:"gh_name"},r.a.createElement("span",{className:"curlyb"},"{"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sawaYch"},"sawaYch"),r.a.createElement("span",{className:"curlyb"},"}")),r.a.createElement("div",{className:"name"},"Sawa.Y"),r.a.createElement("div",{className:"typewriter"},r.a.createElement("h1",null,"Penguin and the man.")))}),s=(t(155),t(140)),o=t(156),m=function(){return r.a.createElement("span",{className:"menubox"},r.a.createElement(o.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sawaYch"},r.a.createElement("div",{className:"child"},r.a.createElement(s.b,{size:32})))),r.a.createElement(o.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/Chak.Yeung.93"},r.a.createElement("div",{className:"child"},r.a.createElement(s.a,{size:32})))),r.a.createElement(o.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://my.playstation.com/profile/HKGSawa"},r.a.createElement("div",{className:"child"},r.a.createElement(s.d,{size:32})))),r.a.createElement(o.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("div",{className:"child"},r.a.createElement(s.c,{size:32}))),r.a.createElement(o.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("div",{className:"child"},r.a.createElement(s.e,{size:32}))))},u=t(6),d=t.n(u),f=t(46),h=t.n(f),p=(t(160),t(161)),E=t(162),b={};function v(){document.getElementById("leftSideNav").style.width="0"}function y(){document.getElementById("leftSideNav").style.width="50px"}var g=function(e){function a(a){var t;return(t=e.call(this,a)||this).visible=!1,t.setWrapperRef=t.setWrapperRef.bind(h()(h()(t))),t.handleClickOutside=t.handleClickOutside.bind(h()(h()(t))),t.handleKeyPress=t.handleKeyPress.bind(h()(h()(t))),t}d()(a,e);var t=a.prototype;return t.componentDidMount=function(){document.addEventListener("mousedown",this.handleClickOutside),document.addEventListener("keypress",this.handleKeyPress)},t.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClickOutside),document.removeEventListener("keypress",this.handleKeyPress)},t.setWrapperRef=function(e){this.wrapperRef=e},t.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&v()},t.handleKeyPress=function(e){"Enter"==e.key&&(0==this.visible?(y(),this.visible=!0):(v(),this.visible=!1))},t.render=function(){return r.a.createElement("div",{ref:this.setWrapperRef},r.a.createElement("div",{className:"tab",onClick:y},r.a.createElement("div",{className:"halfCircle"},r.a.createElement(p.d,{size:32,style:b}))),r.a.createElement("div",{id:"leftSideNav",className:"sidenav"},r.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:v},r.a.createElement(p.a,{size:32})),r.a.createElement("a",{"data-balloon":"Playground","data-balloon-pos":"right",className:"cubeItem",href:"#"},r.a.createElement(p.c,{size:32})),r.a.createElement("a",{"data-balloon":"About Sawa","data-balloon-pos":"right",className:"aboutItem",href:"#"},r.a.createElement(E.a,{size:32})),r.a.createElement("a",{"data-balloon":"Blog","data-balloon-pos":"right",className:"articleItem",href:"#"},r.a.createElement(p.b,{size:32}))))},a}(r.a.Component),w=function(){return r.a.createElement(g,null)};a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css"})),r.a.createElement(c,null),r.a.createElement(m,null),r.a.createElement(w,null))}},134:function(e,a,t){var n;e.exports=(n=t(138))&&n.default||n},135:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return f});var n=t(0),r=t.n(n),i=t(4),l=t.n(i),c=t(133),s=t.n(c);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var o=t(134),m=t.n(o);t.d(a,"PageRenderer",function(){return m.a});var u=t(28);t.d(a,"parsePath",function(){return u.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},136:function(e,a,t){"use strict";var n=t(137),r=t(0),i=t.n(r),l=t(4),c=t.n(l),s=t(141),o=t.n(s),m=t(135),u=(t(139),function(e){var a=e.children;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{margin:"0",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a))},data:n})});u.propTypes={children:c.a.node.isRequired},a.a=u},137:function(e){e.exports={data:{site:{siteMetadata:{title:"Penguin and the man."}}}}},138:function(e,a,t){"use strict";t.r(a);t(29);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),c=t(47),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},139:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){},160:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-230850d7af02c293f721.js.map