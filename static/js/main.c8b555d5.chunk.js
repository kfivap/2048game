(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],[,,,function(e,t,r){},,,,,,,function(e,t,r){},,function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),o=r(5),a=r.n(o),i=(r(10),r(11),r(12),r(2)),s=r(0),l=c.a.createContext();function u(){return Math.random()<.25?2:0}var d=0,f=function(e){var t=e.children;parseInt(localStorage.getItem("2048score"))&&(d=parseInt(localStorage.getItem("2048score")));var r=Object(n.useState)(d),c=Object(i.a)(r,2),o=c[0],a=c[1],f=Object(n.useState)(!1),j=Object(i.a)(f,2),b=j[0],v=j[1],m=[[u(),u(),u(),u()],[u(),u(),u(),u()],[u(),u(),u(),u()],[u(),u(),u(),u()]];Object(n.useEffect)((function(){if(b){var e=parseInt(localStorage.getItem("2048maxScore"));localStorage.setItem("grid",m),e||localStorage.setItem("2048maxScore",o),e<o&&localStorage.setItem("2048maxScore",o)}}),[b]),localStorage.getItem("grid")||localStorage.setItem("grid",m);var g=Object(n.useState)(S()),h=Object(i.a)(g,2),O=h[0],x=h[1];function S(){var e=localStorage.getItem("grid");return[(e=(e=e.split(",")).map((function(e){return parseInt(e)}))).slice(0,4),e.slice(4,8),e.slice(8,12),e.slice(12,16)]}var w=Object(n.useState)(S()),p=Object(i.a)(w,2),I=p[0],k=p[1];return Object(n.useEffect)((function(){setTimeout((function(){k([S()]),localStorage.setItem("grid",O)}),0)}),[O]),Object(s.jsx)(l.Provider,{value:{gameField:O,setGameField:x,score:o,setScore:a,gameOver:b,setGameOver:v,initialField:m,localField:I,setLocalField:k},children:t})},j=(r(3),function(){var e=Object(n.useContext)(l);function t(t){return e.gameField[t].map((function(e,r){return Object(s.jsx)("div",{className:"cell cellValue".concat(e),children:e},"row".concat(t,"_").concat(r))}))}return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"containerGame",children:Object(s.jsxs)("div",{className:"mt-5 gameGrid",children:[Object(s.jsx)("div",{children:t(0)}),Object(s.jsx)("div",{children:t(1)}),Object(s.jsx)("div",{children:t(2)}),Object(s.jsx)("div",{children:t(3)})]})})})}),b=function(){var e=Object(n.useContext)(l),t=localStorage.getItem("2048maxScore");return Object(n.useEffect)((function(){localStorage.getItem("2048score")||localStorage.setItem("2048score",0),localStorage.setItem("2048score",e.score);var t=parseInt(localStorage.getItem("2048maxScore"));t||localStorage.setItem("2048maxScore",e.score),t<e.score&&localStorage.setItem("2048maxScore",e.score)}),[e.score]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:["current ",Object(s.jsx)("span",{className:"badge bg-light text-dark",children:e.score})]}),Object(s.jsxs)("h2",{children:["max ",Object(s.jsx)("span",{className:"badge bg-light text-dark",children:t})]})]})};function v(){var e=localStorage.getItem("grid");return[(e=(e=e.split(",")).map((function(e){return parseInt(e)}))).slice(0,4),e.slice(4,8),e.slice(8,12),e.slice(12,16)]}var m=function(){var e=Object(n.useContext)(l),t=function(){e.setScore(0),e.setGameOver(!1),localStorage.setItem("grid",e.initialField),e.setLocalField(v()),e.setGameField(v())};return e.gameOver?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Game Over"}),Object(s.jsx)("button",{className:"btn btn-outline-warning btn-lg m-2",onClick:t,children:"reset!"})]}):Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"btn btn-outline-warning btn-sm m-5",onClick:t,children:"reset"})})},g=(r(14),function(){return Object(s.jsx)("div",{className:"github",children:Object(s.jsx)("a",{href:"https://github.com/kfivap/2048game",className:"btn btn-light m-2",children:"\u2605 Star me on GitHub! \u2605"})})});function h(e,t){return e===t&&0!==t}function O(e){for(var t=!1;!t;){var r=Math.floor(4*Math.random()),n=Math.floor(4*Math.random());if(0===e[r][n]){e[r][n]=2,t=!0;break}}return e}var x=[!0,!0,!0,!0],S=function(e){var t=Object(n.useContext)(l),r=null,c=null;function o(e){var t=function(e){return e.touches||e.originalEvent.touches}(e)[0];r=t.clientX,c=t.clientY}function a(e){if(r&&c){var t=e.touches[0].clientX,n=e.touches[0].clientY,o=r-t,a=c-n;Math.abs(o)>Math.abs(a)?o>0?window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowLeft"})):window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight"})):a>0?window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowUp"})):window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowDown"})),r=null,c=null}}var i=Object(n.useRef)();function u(e){var r=function(){var e=localStorage.getItem("grid");return[(e=(e=e.split(",")).map((function(e){return parseInt(e)}))).slice(0,4),e.slice(4,8),e.slice(8,12),e.slice(12,16)]}();if("ArrowUp"===e.key){for(var n=0,c=function(e){for(var c=0;c<2;c++)0===r[0][e]&&0!==r[1][e]&&(r[0][e]=r[1][e],r[1][e]=0,n+=1),0===r[1][e]&&0!==r[2][e]&&(r[1][e]=r[2][e],r[2][e]=0,n+=1),0===r[2][e]&&0!==r[3][e]&&(r[2][e]=r[3][e],r[3][e]=0,n+=1);h(r[0][e],r[1][e])&&(r[0][e]+=r[1][e],r[1][e]=0,n+=1,t.setScore((function(t){return t+r[0][e]}))),h(r[1][e],r[2][e])&&(r[1][e]+=r[2][e],r[2][e]=0,n+=1,t.setScore((function(t){return t+r[1][e]}))),h(r[2][e],r[3][e])&&(r[2][e]+=r[3][e],r[3][e]=0,n+=1,t.setScore((function(t){return t+r[2][e]})));for(var o=0;o<2;o++)0===r[0][e]&&0!==r[1][e]&&(r[0][e]=r[1][e],r[1][e]=0,n+=1),0===r[1][e]&&0!==r[2][e]&&(r[1][e]=r[2][e],r[2][e]=0,n+=1),0===r[2][e]&&0!==r[3][e]&&(r[2][e]=r[3][e],r[3][e]=0,n+=1)},o=0;o<4;o++)c(o);n>0&&(O(r),x.fill(!0)),0===n&&(x[0]=!1),n=0}if("ArrowDown"===e.key){for(var a=0,i=function(e){for(var n=0;n<2;n++)0===r[3][e]&&0!==r[2][e]&&(r[3][e]=r[2][e],r[2][e]=0,a+=1),0===r[2][e]&&0!==r[1][e]&&(r[2][e]=r[1][e],r[1][e]=0,a+=1),0===r[1][e]&&0!==r[0][e]&&(r[1][e]=r[0][e],r[0][e]=0,a+=1);h(r[3][e],r[2][e])&&(r[3][e]+=r[2][e],r[2][e]=0,a+=1,t.setScore((function(t){return t+r[3][e]}))),h(r[2][e],r[1][e])&&(r[2][e]+=r[1][e],r[1][e]=0,a+=1,t.setScore((function(t){return t+r[2][e]}))),h(r[1][e],r[0][e])&&(r[1][e]+=r[0][e],r[0][e]=0,a+=1,t.setScore((function(t){return t+r[1][e]})));for(var c=0;c<2;c++)0===r[3][e]&&0!==r[2][e]&&(r[3][e]=r[2][e],r[2][e]=0,a+=1),0===r[2][e]&&0!==r[1][e]&&(r[2][e]=r[1][e],r[1][e]=0,a+=1),0===r[1][e]&&0!==r[0][e]&&(r[1][e]=r[0][e],r[0][e]=0,a+=1)},s=0;s<4;s++)i(s);a>0&&(O(r),x.fill(!0)),0===a&&(x[1]=!1),a=0}if("ArrowLeft"===e.key){for(var l=0,u=function(e){for(var n=0;n<2;n++)0===r[e][0]&&0!==r[e][1]&&(r[e][0]=r[e][1],r[e][1]=0,l+=1),0===r[e][1]&&0!==r[e][2]&&(r[e][1]=r[e][2],r[e][2]=0,l+=1),0===r[e][2]&&0!==r[e][3]&&(r[e][2]=r[e][3],r[e][3]=0,l+=1);h(r[e][0],r[e][1])&&(r[e][0]+=r[e][1],r[e][1]=0,l+=1,t.setScore((function(t){return t+r[e][0]}))),h(r[e][1],r[e][2])&&(r[e][1]+=r[e][2],r[e][2]=0,l+=1,t.setScore((function(t){return t+r[e][1]}))),h(r[e][2],r[e][3])&&(r[e][2]+=r[e][3],r[e][3]=0,l+=1,t.setScore((function(t){return t+r[e][2]})));for(var c=0;c<2;c++)0===r[e][0]&&0!==r[e][1]&&(r[e][0]=r[e][1],r[e][1]=0,l+=1),0===r[e][1]&&0!==r[e][2]&&(r[e][1]=r[e][2],r[e][2]=0,l+=1),0===r[e][2]&&0!==r[e][3]&&(r[e][2]=r[e][3],r[e][3]=0,l+=1)},d=0;d<4;d++)u(d);l>0&&(O(r),x.fill(!0)),0===l&&(x[2]=!1),l=0}if("ArrowRight"===e.key){for(var f=0,j=function(e){for(var n=0;n<2;n++)0===r[e][3]&&0!==r[e][2]&&(r[e][3]=r[e][2],r[e][2]=0,f+=1),0===r[e][2]&&0!==r[e][1]&&(r[e][2]=r[e][1],r[e][1]=0,f+=1),0===r[e][1]&&0!==r[e][0]&&(r[e][1]=r[e][0],r[e][0]=0,f+=1);h(r[e][3],r[e][2])&&(r[e][3]+=r[e][2],r[e][2]=0,f+=1,t.setScore((function(t){return t+r[e][3]}))),h(r[e][2],r[e][1])&&(r[e][2]+=r[e][1],r[e][1]=0,f+=1,t.setScore((function(t){return t+r[e][2]}))),h(r[e][1],r[e][0])&&(r[e][1]+=r[e][0],r[e][0]=0,f+=1,t.setScore((function(t){return t+r[e][1]})));for(var c=0;c<2;c++)0===r[e][3]&&0!==r[e][2]&&(r[e][3]=r[e][2],r[e][2]=0,f+=1),0===r[e][2]&&0!==r[e][1]&&(r[e][2]=r[e][1],r[e][1]=0,f+=1),0===r[e][1]&&0!==r[e][0]&&(r[e][1]=r[e][0],r[e][0]=0,f+=1)},b=0;b<4;b++)j(b);f>0&&(O(r),x.fill(!0)),0===f&&(x[3]=!1),f=0}x.every((function(e){return!e}))&&t.setGameOver(!0),t.setGameField(r)}return Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){u(e)})),setTimeout((function(){i.current.addEventListener("touchstart",o,!1),i.current.addEventListener("touchmove",a,!1)}),0)}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"game"}),Object(s.jsx)(b,{}),Object(s.jsx)("div",{ref:i,children:Object(s.jsx)(j,{})}),Object(s.jsx)(m,{}),Object(s.jsx)(g,{})]})};var w=function(){return Object(s.jsx)(f,{children:Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(S,{})})})},p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),o(e),a(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),p()}],[[15,1,2]]]);
//# sourceMappingURL=main.c8b555d5.chunk.js.map