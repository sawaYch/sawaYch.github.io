(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(138),s=(n(136),n(144));t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(r.a,null))}},136:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),i=n.n(a),r=n(4),s=n.n(r),o=n(135),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(137),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var u=n(28);n.d(t,"parsePath",function(){return u.a});var m=i.a.createContext({}),h=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},137:function(e,t,n){var a;e.exports=(a=n(139))&&a.default||a},138:function(e,t,n){"use strict";var a=n(6),i=n.n(a),r=n(46),s=n.n(r),o=n(0),l=n.n(o),c=n(30),d=n.n(c),u=n(136),m=(n(140),n(141)),h=n(143),p={},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).openSideBar=function(){document.getElementById("leftSideNav").style.width="7vh",n.setState({visible:!0})},n.closeSideBar=function(){document.getElementById("leftSideNav").style.width="0px",n.setState({visible:!1})},n.updateSelection=function(){for(var e=["homeItem","articleItem","cubeItem","aboutItem"],t=["#27afe6","greenyellow","orange","MediumOrchid"],a=0;a<4;++a)d.a.findDOMNode(s()(s()(n))).getElementsByClassName(e[a])[0].style.color=t[a];d.a.findDOMNode(s()(s()(n))).getElementsByClassName(e[n.state.currentItemIndex])[0].style.color="white"},n.state={visible:!1,currentItemIndex:0},n.setWrapperRef=n.setWrapperRef.bind(s()(s()(n))),n.handleClickOutside=n.handleClickOutside.bind(s()(s()(n))),n.handleKeyPress=n.handleKeyPress.bind(s()(s()(n))),n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("mousedown",this.handleClickOutside),document.addEventListener("keypress",this.handleKeyPress)},n.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClickOutside),document.removeEventListener("keypress",this.handleKeyPress)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.closeSideBar()},n.handleKeyPress=function(e){if("Enter"==e.key)0==this.state.visible?this.openSideBar():this.closeSideBar();else if("w"==e.key&&1==this.state.visible)this.setState({currentItemIndex:(this.state.currentItemIndex+4-1)%4}),this.updateSelection();else if("s"==e.key&&1==this.state.visible)this.setState({currentItemIndex:(this.state.currentItemIndex+1)%4}),this.updateSelection();else if("d"==e.key&&1==this.state.visible){var t=["/","/blog/","/playground/","/about/"];this.closeSideBar(),setTimeout(function(){Object(u.navigate)(t[this.state.currentItemIndex])}.bind(this),300)}},n.render=function(){return l.a.createElement("div",{ref:this.setWrapperRef},l.a.createElement("div",{className:"tab",onClick:this.openSideBar},l.a.createElement("div",{className:"halfCircle"},l.a.createElement(m.f,{size:"5vh",style:p}))),l.a.createElement("div",{id:"leftSideNav",className:"sidenav"},l.a.createElement("a",{className:"closebtn",onClick:this.closeSideBar},l.a.createElement(m.b,{size:"5vh"})),l.a.createElement(u.Link,{to:"/playground/"},l.a.createElement("div",{"data-balloon":"Playground","data-balloon-pos":"right",className:"cubeItem"},l.a.createElement(m.e,{size:"5vh"}))),l.a.createElement(u.Link,{to:"/about/"},l.a.createElement("div",{"data-balloon":"About Sawa","data-balloon-pos":"right",className:"aboutItem"},l.a.createElement(h.a,{size:"5vh"}))),l.a.createElement(u.Link,{to:"/blog/"},l.a.createElement("div",{"data-balloon":"Blog","data-balloon-pos":"right",className:"articleItem"},l.a.createElement(m.d,{size:"5vh"}))),l.a.createElement(u.Link,{to:"/"},l.a.createElement("div",{"data-balloon":"Index","data-balloon-pos":"right",className:"homeItem"},l.a.createElement(m.c,{size:"5vh"})))))},t}(l.a.Component);t.a=function(){return l.a.createElement(f,null)}},139:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),i=n.n(a),r=n(4),s=n.n(r),o=n(47),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},140:function(e,t,n){},144:function(e,t,n){"use strict";var a=n(145),i=n(0),r=n.n(i),s=n(4),o=n.n(s),l=n(146),c=n.n(l),d=n(136),u=(n(147),function(e){var t=e.children;return r.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{style:{margin:"0",padding:"0px",paddingTop:0}},t))},data:a})});u.propTypes={children:o.a.node.isRequired},t.a=u},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Penguin and the man."}}}}},147:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-blog-js-ec78bb0f8d99ed210b4c.js.map