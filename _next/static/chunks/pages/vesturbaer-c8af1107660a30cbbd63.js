_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"4Q/E":function(e,t,a){"use strict";a.r(t);var n=a("MX0m"),i=a.n(n),r=a("q1tI"),l=a.n(r),s=a("8Kt/"),c=a.n(s),o=a("mP7s"),f=l.a.createElement;t.default=function(){return f("div",{className:"jsx-2302938532 app"},f(c.a,null,f("title",{className:"jsx-2302938532"},"Vesturb\xe6r"),f("meta",{name:"Description",content:"H\xe9r er a\xf0 finna hverfabla\xf0i\xf0 Vesturb\xe6r",className:"jsx-2302938532"})),f("header",{className:"jsx-2302938532"},f("div",{className:"jsx-2302938532 header-ads"},f("div",{className:"jsx-2302938532 single-ad"},f("img",{src:"".concat("","/static/recaro.png"),alt:"Recaro Barnab\xedlst\xf3lar \xed \xfarvali. B\xedlasmi\xf0urinn",className:"jsx-2302938532"}))),f("div",{className:"jsx-2302938532 logo"},f("img",{src:"".concat("","/static/laugardalurHaaleitiOgBustadirLogo.png"),alt:"Laugardalur, H\xe1aleit og B\xfasta\xf0ir logo",className:"jsx-2302938532"})),f("hr",{className:"jsx-2302938532 header-ruler"})),f(o.a,{contentfulContentType:"vesturbaer"}),f(i.a,{id:"2302938532"},[".app{margin-top:2%;margin-left:2%;margin-right:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".ad{width:30%;}",".single-ad{width:100%;}","img{max-width:100%;}",".header-ads{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".hverfabladid{padding-top:3%;width:30%;}",".logo{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".header-ruler{color:rgb(194,54,51);background-color:rgb(194,54,51);height:5px;width:100%;border-style:none;border-width:0;}",'.year{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:2vh;font-style:normal;font-variant:normal;font-weight:800;line-height:20px;text-transform:uppercase;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}',".papers{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}"]))}},jDeL:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vesturbaer",function(){return a("4Q/E")}])},mP7s:function(e,t,a){"use strict";var n=a("wx14"),i=a("q1tI"),r=a.n(i),l=(a("nOHt"),a("jwk0")),s=(a("MX0m"),a("YFqc"),r.a.createElement,r.a.createElement),c=a("VjyN");t.a=function(e){var t=e.contentfulContentType,a=c.createClient({space:"3ar0fsplddpo",accessToken:"-2X0RW7MtFVdOBMf8N1X4aEMF0mMWEFo4sq4N-oxV7s"}),o=Object(i.useState)([]),f=o[0],d=o[1];Object(i.useEffect)((function(){a.getEntries({content_type:t}).then((function(e){return d(e.items)}))}),[]);var u=function(e){return e.map((function(e){return e.sort((function(e,t){return new Date(t.dateOfPublication)-new Date(e.dateOfPublication)}))}))}(function(e){var t=[];return e.forEach((function(e){var a=new Date(e.fields.dateOfPublication).getFullYear();Object.keys(t).includes(a.toString())||(t[a]=[]),t[a].push(e.fields)})),t}(f));return s(r.a.Fragment,null,u.map((function(e,t){return s(r.a.Fragment,{key:t},s("div",{className:"year"},t),s("div",{className:"papers"},e.map((function(e){return s(l.a,Object(n.a)({},e,{key:e.yearOfPublication}))}))),s("hr",{className:"header-ruler"}))})).reverse())}}},[["jDeL",0,2,1,3]]]);