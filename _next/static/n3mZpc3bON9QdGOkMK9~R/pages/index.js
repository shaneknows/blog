(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{219:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(258),{page:e.exports.default}})},258:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(53),s=n(79),o=n(80);var c=n(2),p=n(52);t.default=function(e){return i.a.createElement("div",null,i.a.createElement(r.a,{siteTitle:"".concat(c.siteTitle," - Index"),heroTitle:c.siteTitle,description:c.description,stylesheets:c.stylesheets,topLinks:c.topLinks,backgroundClass:c.backgroundClass,body:function(e){var t,n=(t=e.summaryJson)&&t.fileMap&&Object.keys(t.fileMap).filter(function(e){if(0===e.indexOf("content/posts"))return!0}).map(function(e){return t.fileMap[e]}).sort(function(e,t){var n=Date.parse(e.date),a=Date.parse(t.date);return a>n?1:a<n?-1:0});return i.a.createElement("div",{className:"center mw6 pa3 pa4-ns"},n.map(function(e,t){var n=function(e){return"".concat(e.dir.split("content").join(""),"/").concat(e.base.split(".json").join(""))}(e),a=Object(o.a)(e.date);return i.a.createElement(s.a,{title:e.title,preview:e.preview,date:a,href:n,key:t})}))}({summaryJson:p}),copyright:c.copyright,siteId:c.siteId}))}}},[[219,1,0]]]);