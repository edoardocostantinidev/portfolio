(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DHv3:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("AcpX");function a(){var n=Object(r.a)(["\n  height: 1px;\n  width: 100%;\n  margin-top: 3rem;\n  background-color: var(--body-color);\n"]);return a=function(){return n},n}var o=e("5D9J").a.div(a())},FZxV:function(n,t,e){"use strict";var r=e("AcpX"),a=e("5D9J"),o=e("Wbzz"),i=e("q1tI"),c=e.n(i),u=e("ckOl"),l=e("sH8X");function f(){var n=Object(r.a)(["\n  ",";\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap;\n  padding: 0.4rem 0.8rem;\n  color: var(--primary-color);\n\n  &:hover {\n    color: var(--secondary-color);\n    text-decoration: underline;\n  }\n\n  & > svg {\n    height: 0.8rem;\n    fill: currentColor;\n    margin-left: 0.25rem;\n    transition: margin-left var(--transition-fast) ease;\n  }\n\n  &:hover > svg {\n    margin-left: 0.5rem;\n  }\n"]);return f=function(){return n},n}var m=Object(a.a)(o.Link)(f(),l.b);t.a=function(n){var t=n.label,e=n.link;return c.a.createElement(c.a.Fragment,null,t&&e&&c.a.createElement(m,{to:e||"#"},t,c.a.createElement(u.a,{icon:"arrow-right"})))}},"I/mr":function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return u}));var r=e("AcpX"),a=e("5D9J");function o(){var n=Object(r.a)(["\n  color: var(--title-color);\n  margin: 20px 0;\n  position: relative;\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n  width: 100%;\n  position: relative;\n  font-weight: 800;\n  margin: 20px 0;\n\n  &:first-letter {\n    color: var(--primary-color);\n  }\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -30px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]);return i=function(){return n},n}var c=a.a.h1(i()),u=a.a.h2(o())},enK5:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",(function(){return x}));var r=e("AcpX"),a=e("5D9J"),o=e("Wbzz"),i=e("q1tI"),c=e.n(i),u=e("Bl7J"),l=e("FZxV"),f=e("vrFN"),m=e("Q+NF"),v=e("I/mr"),p=e("sH8X"),s=e("cDEv"),g=e("DHv3");function d(){var n=Object(r.a)(["\n  margin: 0.8rem;\n"]);return d=function(){return n},n}function b(){var n=Object(r.a)(["\n  ",";\n"]);return b=function(){return n},n}function h(){var n=Object(r.a)(["\n  margin-top: 3rem;\n"]);return h=function(){return n},n}var w=Object(a.a)(v.a)(h()),E=a.a.div(b(),p.d),k=Object(a.a)(o.Link)(d());t.default=function(n){var t=n.data.allMarkdownRemark.group,e=c.a.useState("abcdefghijklmnopqrstuvwxyz".split(""))[0],r=c.a.useState({}),a=r[0],o=r[1],i=Object.values(a).length;c.a.useEffect((function(){var n={};e.forEach((function(e){var r=new RegExp("^"+e,"i"),a=t.filter((function(n){return r.test(n.fieldValue)}));a.length>0&&(n[e]={},n[e].tags=a.map((function(n){return n.fieldValue})),n[e].count=a.map((function(n){return n.totalCount})))})),o(n)}),[]);var v=Object.entries(a).map((function(n){var t=n[0],e=n[1];return c.a.createElement("div",{key:t},c.a.createElement("h3",null,t.toUpperCase()),c.a.createElement(E,null,e.tags.map((function(n,t){return c.a.createElement(k,{key:n+t,to:"/tags/"+n+"/"},n," ","(",e.count[t],")")}))))}));return c.a.createElement(u.a,{menuLinks:m.a},c.a.createElement(f.a,{title:"Tags"}),c.a.createElement(s.a,null,c.a.createElement(w,null,"Tags (",i,")"),c.a.createElement(g.a,null),i&&v,c.a.createElement(g.a,null),c.a.createElement(l.a,{label:"Take me home",link:"/"})))};var x="3218773921"}}]);
//# sourceMappingURL=component---src-pages-tags-js-c67005df75601c0a4d7c.js.map