(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(176),l=(a(350),a(318),function(){return r.a.createElement("div",{className:"navbox"},r.a.createElement("div",{className:"avator"}),r.a.createElement("div",{className:"gh_name"},r.a.createElement("span",{className:"curlyb"},"{"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sawaYch"},"sawaYch"),r.a.createElement("span",{className:"curlyb"},"}")),r.a.createElement("div",{className:"name"},"Sawa.Y"),r.a.createElement("div",{className:"twcontainer"},r.a.createElement("div",{className:"typewriter"},r.a.createElement("h1",null,"Penguin and the man."))))}),s=(a(320),a(155),a(322),a(146)),c=a(7),o=a.n(c),u=(a(348),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement("div",null)},t}(r.a.Component)),d=a(174);t.default=function(){return r.a.createElement(d.a,null,r.a.createElement(i.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css"})),r.a.createElement(l,null),r.a.createElement(s.a,null),r.a.createElement(u,null))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(141),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(143),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},143:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e,t,a){"use strict";a(156);var n=a(7),r=a.n(n),i=a(48),l=a.n(i),s=a(0),c=a.n(s),o=a(34),u=a.n(o),d=a(142),m=(a(148),a(153)),h=a(157),f={},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).openSideBar=function(){document.getElementById("leftSideNav").style.width="7vh",a.setState({visible:!0})},a.closeSideBar=function(){document.getElementById("leftSideNav").style.width="0px",a.setState({visible:!1})},a.updateSelection=function(){for(var e=["homeItem","articleItem","cubeItem","aboutItem"],t=["#27afe6","greenyellow","orange","MediumOrchid"],n=0;n<4;++n)u.a.findDOMNode(l()(l()(a))).getElementsByClassName(e[n])[0].style.color=t[n];u.a.findDOMNode(l()(l()(a))).getElementsByClassName(e[a.state.currentItemIndex])[0].style.color="white"},a.state={visible:!1,currentItemIndex:0},a.setWrapperRef=a.setWrapperRef.bind(l()(l()(a))),a.handleClickOutside=a.handleClickOutside.bind(l()(l()(a))),a.handleKeyPress=a.handleKeyPress.bind(l()(l()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("mousedown",this.handleClickOutside),document.addEventListener("keypress",this.handleKeyPress)},a.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClickOutside),document.removeEventListener("keypress",this.handleKeyPress)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.closeSideBar()},a.handleKeyPress=function(e){if("Enter"==e.key)0==this.state.visible?this.openSideBar():this.closeSideBar();else if("w"==e.key&&1==this.state.visible)this.setState({currentItemIndex:(this.state.currentItemIndex+4-1)%4}),this.updateSelection();else if("s"==e.key&&1==this.state.visible)this.setState({currentItemIndex:(this.state.currentItemIndex+1)%4}),this.updateSelection();else if("a"==e.key&&1==this.state.visible){var t=["/","/blog/","/playground/","/about/"];this.closeSideBar(),setTimeout(function(){Object(d.navigate)(t[this.state.currentItemIndex])}.bind(this),300)}},a.render=function(){return c.a.createElement("div",{ref:this.setWrapperRef},c.a.createElement("div",{className:"tab",onClick:this.openSideBar},c.a.createElement("div",{className:"halfCircle"},c.a.createElement(m.f,{size:"5vh",style:f}))),c.a.createElement("div",{id:"leftSideNav",className:"sidenav"},c.a.createElement("a",{className:"closebtn",onClick:this.closeSideBar},c.a.createElement(m.b,{size:"5vh"})),c.a.createElement(d.Link,{to:"/playground/"},c.a.createElement("div",{"data-balloon":"Playground","data-balloon-pos":"left",className:"cubeItem"},c.a.createElement(m.e,{size:"5vh"}))),c.a.createElement(d.Link,{to:"/about/"},c.a.createElement("div",{"data-balloon":"About Sawa","data-balloon-pos":"left",className:"aboutItem"},c.a.createElement(h.a,{size:"5vh"}))),c.a.createElement(d.Link,{to:"/blog/"},c.a.createElement("div",{"data-balloon":"Blog","data-balloon-pos":"left",className:"articleItem"},c.a.createElement(m.d,{size:"5vh"}))),c.a.createElement(d.Link,{to:"/"},c.a.createElement("div",{"data-balloon":"Index","data-balloon-pos":"left",className:"homeItem"},c.a.createElement(m.c,{size:"5vh"})))))},t}(c.a.Component);t.a=function(){return c.a.createElement(p,null)}},147:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(49),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},148:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),l=a(4),s=a.n(l),c=a(176),o=a.n(c),u=a(142),d=(a(177),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{margin:"0",padding:"0px",paddingTop:0}},t))},data:n})});d.propTypes={children:s.a.node.isRequired},t.a=d},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Penguin and the man."}}}}},177:function(e,t,a){},318:function(e,t,a){},320:function(e,t,a){},348:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-536b65a816865f75b1b7.js.map