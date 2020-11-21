(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{29:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(0),i=n(20),s=n.n(i),a=n(2),r=(n(29),n(8)),g=n.n(r),w=n(4),u=n(5);function v(){var t=Object(w.a)(["\n    font-weight: 200 ;\n    font-size: clamp(1rem, 5vw, 2rem); \n    color: #e5e5e5 ;\n    cursor: pointer;\n"]);return v=function(){return t},t}function h(){var t=Object(w.a)(["\n    font-weight: 300 ;\n    font-size: clamp(1rem, 5vw, 3rem); \n    margin: 1rem 0 1rem 1rem  ; \n    color: #e5e5e5 ;\n"]);return h=function(){return t},t}function b(){var t=Object(w.a)(["\n    width: 250px ;\n    height: 250px ;\n"]);return b=function(){return t},t}function d(){var t=Object(w.a)(["\n    font-weight: lighter ;\n    font-size: clamp(1rem, 5vw, 3rem); \n    margin: 0rem 0 2rem 1rem  ; \n    color: #e5e5e5 ;\n"]);return d=function(){return t},t}function l(){var t=Object(w.a)(["\n    display: flex ; \n    flex-direction: column ;\n    justify-content: center ;\n    align-items: center ;\n    width: 100vw ;\n    height: 100vh ;\n    background: #34626c ;\n"]);return l=function(){return t},t}var f=u.b.div(l()),j=u.b.h1(d()),m=u.b.img(b()),p=u.b.h2(h()),O=u.b.h3(v()),x=function(t){var e=t.icon,n=t.condition,i=t.city,s=t.tempc,r=t.tempf,g=t.tempk,w=t.country,u=Object(c.useState)(1),v=Object(a.a)(u,2),h=v[0],b=v[1],d=Object(c.useState)(s),l=Object(a.a)(d,2),x=l[0],y=l[1];return Object(c.useEffect)((function(){1===h&&y(s+"\xb0C"),2===h&&y(r+"\xb0F"),3===h&&y(g+"\xb0K")})),Object(o.jsxs)(f,{children:[Object(o.jsxs)(j,{children:[i,",",w]}),""!==e?Object(o.jsx)(m,{src:e}):"",Object(o.jsx)(p,{children:n}),Object(o.jsx)(O,{onClick:function(){h<3&&b(h+1),3===h&&b(1)},children:x})]})};function y(){var t=Object(w.a)(["\n  * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    }\n"]);return y=function(){return t},t}var L=Object(u.a)(y());function C(){var t=Object(w.a)([" \n    font-weight:  bold ;\n    font-size: 2rem; \n    color: #e5e5e5 ;\n"]);return C=function(){return t},t}function S(){var t=Object(w.a)([" \n    width: 100vw ;\n    height: 100vh ;\n    background: #34626c ;\n    display: flex ;\n    justify-content: center ; \n    align-items: center ;\n"]);return S=function(){return t},t}var k=u.b.div(S()),B=u.b.h1(C()),z=function(){var t=Object(c.useState)(0),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(""),r=Object(a.a)(s,2),g=r[0],w=r[1];return Object(c.useEffect)((function(){for(var t=0;t<1e4;t++)i(n+1),10!==n&&25!==n&&50!==n||w(g+"."),3===g.length&&(w(""),i(0))})),Object(o.jsx)(k,{children:Object(o.jsxs)(B,{children:["Loading, Getting the information ",g]})})};var E=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(""),r=Object(a.a)(s,2),w=r[0],u=r[1],v=Object(c.useState)(""),h=Object(a.a)(v,2),b=h[0],d=h[1],l=Object(c.useState)(""),f=Object(a.a)(l,2),j=f[0],m=f[1],p=Object(c.useState)(""),O=Object(a.a)(p,2),y=O[0],C=O[1],S=(new Date).getHours(),k=Object(c.useState)(""),B=Object(a.a)(k,2),E=B[0],F=B[1],J=Object(c.useState)(""),T=Object(a.a)(J,2),_=T[0],G=T[1],H=Object(c.useState)(""),I=Object(a.a)(H,2),M=I[0],Q=I[1],U=Object(c.useState)(""),V=Object(a.a)(U,2),q=V[0],D=V[1],K=Object(c.useState)(""),N=Object(a.a)(K,2),P=N[0],R=N[1];return navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){m(t.coords.latitude),C(t.coords.longitude)})),j&&""!==y&&g.a.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(j,"&longitude=").concat(y,"&localityLanguage=en")).then((function(t){u(t.data.city)})),""!==w&&g.a.get("http://api.weatherapi.com/v1/current.json?key=1e70683f9d0b4f3daec155809202111&q=".concat(w)).then((function(t){""===n&&(i(t.data.current),d(t.data.location.country)),Q(n.temp_c),D(n.temp_f),R((5*(n.temp_c+459.67)/9).toFixed(2))})),Object(c.useEffect)((function(){""!==n&&""!==n.condition.text&&(S>=5&&S<=19&&F("day"),S<5&&S>19&&F("night"),"day"===E&&("clear"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/890/890347.svg"),"sunny"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/890/890347.svg"),"overcast"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/263/263099.svg"),"partly cloudy"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/2932/2932445.svg"),"light rain shower"===n.condition.text.toLowerCase()&&G("https://i.ibb.co/mbBQTgV/Light-rain-shower.png"),"light rain"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/1/1801.svg"),"cloudy"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/899/899718.svg"),"moderate or heavy rain shower"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/3209/3209896.svg"),"mist"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/3314/3314025.svg"),"patchy rain possible"===n.condition.text.toLowerCase()&&G("https://i.ibb.co/mbBQTgV/Light-rain-shower.png"),"thunderstormse"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/1146/1146860.svg")),"night"===E&&("clear"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/865/865813.svg"),"sunny"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/865/865813.svg"),"overcast"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/263/263099.svg"),"partly cloudy"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/3026/3026353.svg"),"light rain shower"===n.condition.text.toLowerCase()&&G("https://i.ibb.co/GcTBBMJ/Light-rain-shower.png"),"light rain"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/1/1801.svg"),"cloudy"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/899/899718.svg"),"moderate or heavy rain shower"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/3209/3209896.svg"),"mist"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/3314/3314025.svg"),"patchy rain possible"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/1/1801.svg"),"thunderstormse"===n.condition.text.toLowerCase()&&G("https://www.flaticon.com/svg/static/icons/svg/1146/1146860.svg")))})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(L,{}),""!==n?Object(o.jsx)(x,{icon:_,city:w,condition:n.condition.text,country:b,tempc:M,tempf:q,tempk:P}):Object(o.jsx)(z,{})]})};s.a.render(Object(o.jsx)(E,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.dd2ae717.chunk.js.map