(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(176),l=(a(373),a(367),function(){return r.a.createElement("div",{className:"navbox"},r.a.createElement("div",{className:"avator"}),r.a.createElement("div",{className:"gh_name"},r.a.createElement("span",{className:"curlyb"},"{"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sawaYch"},"sawaYch"),r.a.createElement("span",{className:"curlyb"},"}")),r.a.createElement("div",{className:"name"},"Sawa.Y"),r.a.createElement("div",{className:"twcontainer"},r.a.createElement("div",{className:"typewriter"},r.a.createElement("h1",null,"Penguin and the man."))))}),s=(a(368),a(153)),c=a(369),o=function(){return r.a.createElement("span",{className:"menubox"},r.a.createElement(c.Animated,{className:"menuItemFirst",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sawaYch"},r.a.createElement("div",{className:"child"},r.a.createElement(s.b,{size:"5vh"})))),r.a.createElement(c.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/Chak.Yeung.93"},r.a.createElement("div",{className:"child"},r.a.createElement(s.a,{size:"5vh"})))),r.a.createElement(c.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://my.playstation.com/profile/HKGSawa"},r.a.createElement("div",{className:"child"},r.a.createElement(s.d,{size:"5vh"})))),r.a.createElement(c.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{href:"mailto:chyeungam@connect.ust.hk"},r.a.createElement("div",{className:"child"},r.a.createElement(s.c,{size:"5vh"})))),r.a.createElement(c.Animated,{className:"menuItem",animationIn:"bounceInUp",animationOut:"fadeOut",isVisible:!0},r.a.createElement("div",{className:"child"},r.a.createElement(s.e,{size:"5vh"}))))},m=a(143),u=a(6),d=a.n(u),h=(a(372),function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return r.a.createElement("div",null)},t}(r.a.Component)),f=a(174);t.default=function(){return r.a.createElement(f.a,null,r.a.createElement(i.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css"})),r.a.createElement(l,null),r.a.createElement(o,null),r.a.createElement(m.a,null),r.a.createElement(h,null))}},136:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(134),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(137),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},137:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},143:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(46),l=a.n(i),s=a(0),c=a.n(s),o=a(29),m=a.n(o),u=a(136),d=(a(145),a(147)),h=a(154),f={},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).openSideBar=function(){document.getElementById("leftSideNav").style.width="7vh",a.setState({visible:!0})},a.closeSideBar=function(){document.getElementById("leftSideNav").style.width="0px",a.setState({visible:!1})},a.updateSelection=function(){for(var e=["homeItem","articleItem","cubeItem","aboutItem"],t=["#27afe6","greenyellow","orange","MediumOrchid"],n=0;n<4;++n)m.a.findDOMNode(l()(l()(a))).getElementsByClassName(e[n])[0].style.color=t[n];m.a.findDOMNode(l()(l()(a))).getElementsByClassName(e[a.state.currentItemIndex])[0].style.color="white"},a.state={visible:!1,currentItemIndex:0},a.setWrapperRef=a.setWrapperRef.bind(l()(l()(a))),a.handleClickOutside=a.handleClickOutside.bind(l()(l()(a))),a.handleKeyPress=a.handleKeyPress.bind(l()(l()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("mousedown",this.handleClickOutside),document.addEventListener("keypress",this.handleKeyPress)},a.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClickOutside),document.removeEventListener("keypress",this.handleKeyPress)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.closeSideBar()},a.handleKeyPress=function(e){if("Enter"==e.key)0==this.state.visible?this.openSideBar():this.closeSideBar();else if("w"==e.key&&1==this.state.visible)this.setState({currentItemIndex:(this.state.currentItemIndex+4-1)%4}),this.updateSelection();else if("s"==e.key&&1==this.state.visible)this.setState({currentItemIndex:(this.state.currentItemIndex+1)%4}),this.updateSelection();else if("d"==e.key&&1==this.state.visible){var t=["/","/blog/","/playground/","/about/"];this.closeSideBar(),setTimeout(function(){Object(u.navigate)(t[this.state.currentItemIndex])}.bind(this),300)}},a.render=function(){return c.a.createElement("div",{ref:this.setWrapperRef},c.a.createElement("div",{className:"tab",onClick:this.openSideBar},c.a.createElement("div",{className:"halfCircle"},c.a.createElement(d.f,{size:"5vh",style:f}))),c.a.createElement("div",{id:"leftSideNav",className:"sidenav"},c.a.createElement("a",{className:"closebtn",onClick:this.closeSideBar},c.a.createElement(d.b,{size:"5vh"})),c.a.createElement(u.Link,{to:"/playground/"},c.a.createElement("div",{"data-balloon":"Playground","data-balloon-pos":"right",className:"cubeItem"},c.a.createElement(d.e,{size:"5vh"}))),c.a.createElement(u.Link,{to:"/about/"},c.a.createElement("div",{"data-balloon":"About Sawa","data-balloon-pos":"right",className:"aboutItem"},c.a.createElement(h.a,{size:"5vh"}))),c.a.createElement(u.Link,{to:"/blog/"},c.a.createElement("div",{"data-balloon":"Blog","data-balloon-pos":"right",className:"articleItem"},c.a.createElement(d.d,{size:"5vh"}))),c.a.createElement(u.Link,{to:"/"},c.a.createElement("div",{"data-balloon":"Index","data-balloon-pos":"right",className:"homeItem"},c.a.createElement(d.c,{size:"5vh"})))))},t}(c.a.Component);t.a=function(){return c.a.createElement(p,null)}},144:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(47),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},145:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),l=a(4),s=a.n(l),c=a(176),o=a.n(c),m=a(136),u=(a(177),function(e){var t=e.children;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{margin:"0",padding:"0px",paddingTop:0}},t))},data:n})});u.propTypes={children:s.a.node.isRequired},t.a=u},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Penguin and the man."}}}}},177:function(e,t,a){},367:function(e,t,a){},368:function(e,t,a){},372:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-32d6400123c871742b41.js.map