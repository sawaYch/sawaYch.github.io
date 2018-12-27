(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(145),l=(a(211),a(138)),o=(a(212),a(149)),s=a(215),c=a(205),d=a.n(c),u={labels:["Embedded System","FrontEnd","BackEnd","Language","Algorithm"],datasets:[{label:"Skill Points",backgroundColor:"rgb(56,130,232, 0.3)",borderColor:"rgb(56,130,232)",pointBackgroundColor:"rgb(56,130,232)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(56,130,232)",data:[6,8,5,7,5]}]};t.default=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"aboutTopBanner"}),r.a.createElement("h2",null,r.a.createElement("center",null,"Something About Me")),r.a.createElement("div",{className:"doc"},r.a.createElement("p",{className:"part1"},"Hi ! I'm Sawa, a Computer Science Engineering Student from Hong Kong. Love to combine technology with creative ideas."),r.a.createElement("p",{className:"part2"},"I'm currently doing my bachelor degree in The Hong Kong University of Science and Technology. I am slightly obsessed with algorithm & CTF. Also with background in Network and System Administration (and I love Linux 😎)"),r.a.createElement("p",{className:"part2"},"Furthermore, I know a little bit about Robotics and Embedded System. When I’m not coding, I enjoy reading manga, watching anime and playing console games 😀 Sometimes I go cycling and badminton with my buddies.")),r.a.createElement("h2",null,r.a.createElement("center",null,"Skills")),r.a.createElement(d.a,{height:"50vh"},r.a.createElement("div",{className:"chartBox"},r.a.createElement(s.a,{data:u,options:{maintainAspectRatio:!1,legend:{display:!1},scale:{ticks:{beginAtZero:!0,max:10,display:!1,maxTicksLimit:4}}}}))),r.a.createElement("ul",null,r.a.createElement("li",null,"Language: HTML5, CSS3, Javascript, ES5, PHP, SQL, LaTex, Lua, C, C++, C#, Java, Python, Visual Basic, Delphi(Pascal)"),r.a.createElement("li",null,"Framework: GatsbyJs, Jekyll, ReactJs, Flask, CodeIgniter"),r.a.createElement("li",null,"Others: Debian & Arch-branch Linux, Git, Bash, Docker, STM32 Standard Peripheral Library, Qt, Gtk, WPF, WordPress CMS")),r.a.createElement("h2",null,r.a.createElement("center",null,"Experiences")),r.a.createElement("div",{className:"list-type2"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",null,"2017-2018 HKUST Robotics Team Member - Robocon (War Dragon)")),r.a.createElement("li",null,r.a.createElement("a",null,"2017 Inter-Tertiary-Institute Capture the Flag (CTF) contest ASTRI x iChunQiu")),r.a.createElement("li",null,r.a.createElement("a",null,"2016 Microsoft Azure Training Program - Cloud Admin & Apps on Cloud Platform")))),r.a.createElement("div",{className:"aboutback"},r.a.createElement(l.Link,{to:"/"},r.a.createElement(o.a,{size:"7vh"}))),r.a.createElement("div",{className:"footer"},"sawaYch@2018 v1.0.1")),r.a.createElement(i.a,null))}},138:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(136),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(139),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},139:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(46),l=a.n(i),o=a(0),s=a.n(o),c=a(29),d=a.n(c),u=a(138),m=(a(147),a(149)),h=a(156),p={},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).openSideBar=function(){document.getElementById("leftSideNav").style.width="7vh",a.setState({visible:!0})},a.closeSideBar=function(){document.getElementById("leftSideNav").style.width="0px",a.setState({visible:!1})},a.updateSelection=function(){for(var e=["homeItem","articleItem","cubeItem","aboutItem"],t=["#27afe6","greenyellow","orange","MediumOrchid"],n=0;n<4;++n)d.a.findDOMNode(l()(l()(a))).getElementsByClassName(e[n])[0].style.color=t[n];d.a.findDOMNode(l()(l()(a))).getElementsByClassName(e[a.state.currentItemIndex])[0].style.color="white"},a.state={visible:!1,currentItemIndex:0},a.setWrapperRef=a.setWrapperRef.bind(l()(l()(a))),a.handleClickOutside=a.handleClickOutside.bind(l()(l()(a))),a.handleKeyPress=a.handleKeyPress.bind(l()(l()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.addEventListener("mousedown",this.handleClickOutside),document.addEventListener("keypress",this.handleKeyPress)},a.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClickOutside),document.removeEventListener("keypress",this.handleKeyPress)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.closeSideBar()},a.handleKeyPress=function(e){if("Enter"==e.key)0==this.state.visible?this.openSideBar():this.closeSideBar();else if("w"==e.key&&1==this.state.visible)this.setState({currentItemIndex:(this.state.currentItemIndex+4-1)%4}),this.updateSelection();else if("s"==e.key&&1==this.state.visible)this.setState({currentItemIndex:(this.state.currentItemIndex+1)%4}),this.updateSelection();else if("d"==e.key&&1==this.state.visible){var t=["/","/blog/","/playground/","/about/"];this.closeSideBar(),setTimeout(function(){Object(u.navigate)(t[this.state.currentItemIndex])}.bind(this),300)}},a.render=function(){return s.a.createElement("div",{ref:this.setWrapperRef},s.a.createElement("div",{className:"tab",onClick:this.openSideBar},s.a.createElement("div",{className:"halfCircle"},s.a.createElement(m.f,{size:"5vh",style:p}))),s.a.createElement("div",{id:"leftSideNav",className:"sidenav"},s.a.createElement("a",{className:"closebtn",onClick:this.closeSideBar},s.a.createElement(m.b,{size:"5vh"})),s.a.createElement(u.Link,{to:"/playground/"},s.a.createElement("div",{"data-balloon":"Playground","data-balloon-pos":"right",className:"cubeItem"},s.a.createElement(m.e,{size:"5vh"}))),s.a.createElement(u.Link,{to:"/about/"},s.a.createElement("div",{"data-balloon":"About Sawa","data-balloon-pos":"right",className:"aboutItem"},s.a.createElement(h.a,{size:"5vh"}))),s.a.createElement(u.Link,{to:"/blog/"},s.a.createElement("div",{"data-balloon":"Blog","data-balloon-pos":"right",className:"articleItem"},s.a.createElement(m.d,{size:"5vh"}))),s.a.createElement(u.Link,{to:"/"},s.a.createElement("div",{"data-balloon":"Index","data-balloon-pos":"right",className:"homeItem"},s.a.createElement(m.c,{size:"5vh"})))))},t}(s.a.Component);t.a=function(){return s.a.createElement(f,null)}},146:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(47),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},147:function(e,t,a){},211:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-about-js-e32eaff15accdf378b16.js.map