(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(s.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},s=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,s=e.hasQuery;return n||r&&(void 0!==s&&s)}},"2LNF":function(e){e.exports=JSON.parse('{"fileMap":{"content/index.json":{"siteTitle":"shaneknows","description":"Let\'s talk code.","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"Blog","href":"https://shaneknows.github.io/blog"},{"text":"Naifu","href":"https://shaneknows.github.io/Naifu"},{"text":"React Demo","href":"https://shaneknows.github.io/ReactDemo"},{"text":"Github","href":"https://github.com/shaneknows/"}],"backgroundClass":"bg-dark-gray","copyright":"Shane Knowles","siteId":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"},"content/posts/2014-6-3-Hello-Jekyll.json":{"title":"Hello, Jekyll","date":"2014-06-03T00:00:00.000Z","preview":"Hey there! I\'m still working out learning all this Jekyll stuff, but I hope to get this blog up and running","dir":"content/posts","base":"2014-6-3-Hello-Jekyll.json","ext":".json","sourceBase":"2014-6-3-Hello-Jekyll.md","sourceExt":".md"},"content/posts/2015-4-25-MatchUpTackr.json":{"title":"MatchUpTrackr","date":"2015-04-25T00:00:00.000Z","preview":"It has been quite some time. I\'m starting a new mobile app to track match up statistics for any type of","dir":"content/posts","base":"2015-4-25-MatchUpTackr.json","ext":".json","sourceBase":"2015-4-25-MatchUpTackr.md","sourceExt":".md"},"content/posts/2018-11-28-StandingDesk.json":{"title":"Vivo Standing Desk - An Easy DIY Standing Desk","date":"2018-11-28T00:00:00.000Z","preview":"While I don\'t buy into the huge hype behind using a standing desk, I 100% love the standing desk I built using","dir":"content/posts","base":"2018-11-28-StandingDesk.json","ext":".json","sourceBase":"2018-11-28-StandingDesk.md","sourceExt":".md"},"content/posts/2018-11-18MoveToNextjs.json":{"title":"Migrating to Next.js","date":"2018-11-18T00:00:00.000Z","preview":"Hey! I\'m moving the blog to use Next.js. It builds out a static site and allows me to build a nice little","dir":"content/posts","base":"2018-11-18MoveToNextjs.json","ext":".json","sourceBase":"2018-11-18MoveToNextjs.md","sourceExt":".md"},"content/posts/2017-5-8-ReactUnityGithubPages.json":{"title":"React <3 Unity <3 Github Pages","date":"2017-05-08T00:00:00.000Z","preview":"Recently I have been tinkering with React and really digging how easy it is to get up and running using the","dir":"content/posts","base":"2017-5-8-ReactUnityGithubPages.json","ext":".json","sourceBase":"2017-5-8-ReactUnityGithubPages.md","sourceExt":".md"},"content/posts/2020-3-16-Self-Care.json":{"title":"Some Self Care Tips","date":"2020-3-16","preview":"I\'ve been meaning to write this post for a while, but hadn\'t gotten around to it. With the unfortunate state","dir":"content/posts","base":"2020-3-16-Self-Care.json","ext":".json","sourceBase":"2020-3-16-Self-Care.md","sourceExt":".md"}},"sourceFileArray":["content/index.md","content/posts/2014-6-3-Hello-Jekyll.md","content/posts/2015-4-25-MatchUpTackr.md","content/posts/2017-5-8-ReactUnityGithubPages.md","content/posts/2018-11-18MoveToNextjs.md","content/posts/2018-11-28-StandingDesk.md","content/posts/2020-3-16-Self-Care.md"]}')},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var o=c(n("q1tI")),r=c(n("Xuae")),s=n("lwAK"),a=n("FYa8"),i=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var s=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var a=r.key.slice(r.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(r.type){case"title":case"base":t.has(r.type)?s=!1:t.add(r.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var l=p[i];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{var u=r.props[l],f=o[l]||new Set;f.has(u)?s=!1:(f.add(u),o[l]=f)}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=(0,r.default)();function h(e){var t=e.children;return(o.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}h.rewind=d.rewind;var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),s=n("ZhPi"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||s(e)||a()}},"XLj/":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),s=n("YFqc"),a=n.n(s),i=r.a.createElement;function c(e){return i(a.a,{href:"post?fullUrl=".concat(e.href),as:"".concat("https://shaneknows.github.io/blog").concat(e.href)},i("a",{className:"b black o-80 glow no-underline lh-solid ".concat(e.className)},e.children))}t.a=function(e){return i("div",{className:"mb4 pb2 bb b--light-gray"},i(c,{href:e.href,className:"f3"},e.title),e.preview&&i("p",{className:"mv1 o-60"},e.preview,i(c,{href:e.href},i("span",null," \xbb"))),e.date&&i("small",{className:"db ttu o-40"},i("time",{key:new Date(e.date).toISOString()},e.date)))}},Xuae:function(e,t,n){"use strict";var o=n("lwsE"),r=n("PJYZ"),s=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){a(l,i);var c=u(l);function l(e){var s;return o(this,l),s=c.call(this,e),f&&(t.add(r(s)),n(r(s))),s}return s(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),s(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(p.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("lwsE"),r=n("W8MJ"),s=n("7W2i"),a=n("a1gu"),i=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=i(e);if(t){var r=i(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var p,f=u(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=l(n("nOHt")),v=n("elyg");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,b=window.IntersectionObserver,k={};function w(){return p||(b?p=new b((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){s(n,e);var t=c(n);function n(e){var r;return o(this,n),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,n=null,o=null;return function(r,s){if(o&&r===t&&s===n)return o;var a=e(r,s);return t=r,n=s,o=a,a}}((function(e,t){return{href:(0,v.addBasePath)(y(e)),as:t?(0,v.addBasePath)(y(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=r.formatUrls(r.props.href,r.props.as),a=s.href,i=s.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),i=i?(0,d.resolve)(c,i):a,e.preventDefault();var l=r.props.scroll;null==l&&(l=i.indexOf("#")<0),m.default[r.props.replace?"replace":"push"](a,i,{shallow:r.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,o=t.as,r=(0,d.resolve)(e,n);return[r,o?(0,d.resolve)(e,o):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),k[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),o=n.href,r=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var s=f.Children.only(t),a={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(a.href=r||o),f.default.cloneElement(s,a)}}]),n}(f.Component);t.default=x},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},uVCN:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),s=n("8Kt/"),a=n.n(s),i=r.a.createElement;var c=function(e){return i(a.a,null,i("title",null,e.siteTitle),i("meta",{name:"description",content:e.description}),i("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.stylesheets&&e.stylesheets.length>0&&e.stylesheets.map((function(e,t){return i("link",{key:t,rel:"stylesheet",href:e})})),i("style",null,"\n          body {\n            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n          }\n      "))},l=n("YFqc"),u=n.n(l),p=r.a.createElement;function f(e){return p("div",{className:"relative tc ".concat(e.backgroundClass)},p("div",{className:"mw7 center white pv4"},p("div",{className:"pv4"},p("h1",{className:"f1 normal lh-title ma0 pa0"},p(u.a,{prefetch:!0,href:"/"},p("a",{className:"white no-underline",href:"/"},e.heroTitle))),p("h4",{className:"normal o-70 ma0 pt2 pb3 ph1"},e.subtitle),p("div",null,e.topLinks&&e.topLinks.length>0&&e.topLinks.map((function(e,t){return p(u.a,{href:e.href,key:t},p("a",{className:"dib f6 white no-underline pa1 ma1",key:t},e.text))}))))))}f.defaultProps={backgroundClass:"bg-mid-gray",topLinks:[],heroTitle:"",subtitle:""};var d=f,h=r.a.createElement;var m=function(e){var t=new Date;return h("footer",{className:"center w5 f6 tc mt4"},h("p",null,h("span",null,"\xa9 "),h("span",null,t.getFullYear()," "),h("span",null,e.copyright)))},v=r.a.createElement;var y=function(e){return v("div",null,v("script",{dangerouslySetInnerHTML:{__html:(t=e.siteId,"\n  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n  e.src='https://www.google-analytics.com/analytics.js';\n  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n  ga('create','".concat(t,"','auto');ga('send','pageview');\n"))}}));var t},g=r.a.createElement;function b(e){return g("div",null,g(c,{siteTitle:e.siteTitle,description:e.description,stylesheets:e.stylesheets}),g("main",{className:"lh-copy"},g(d,{heroTitle:e.heroTitle,subtitle:e.description,topLinks:e.topLinks,backgroundClass:e.backgroundClass}),e.body,g(m,{copyright:e.copyright}),e.siteId&&g(y,{siteId:e.siteId})))}b.defaultProps={heroTitle:"",description:"",stylesheets:["https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"],backgroundClass:"bg-dark-gray"};t.a=b},vivp:function(e){e.exports=JSON.parse('{"siteTitle":"shaneknows","description":"Let\'s talk code.","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"Blog","href":"https://shaneknows.github.io/blog"},{"text":"Naifu","href":"https://shaneknows.github.io/Naifu"},{"text":"React Demo","href":"https://shaneknows.github.io/ReactDemo"},{"text":"Github","href":"https://github.com/shaneknows/"}],"backgroundClass":"bg-dark-gray","copyright":"Shane Knowles","siteId":"","bodyContent":"","bodyHtml":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"}')},xGbm:function(e,t,n){"use strict";function o(e){return new Date(e).toUTCString().split(" ").slice(1,4).join(" ")}n.d(t,"a",(function(){return o}))}}]);