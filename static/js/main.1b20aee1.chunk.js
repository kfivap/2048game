(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),i=n.n(o),a=(n(13),n(14),n(15),n(4)),s=n(0),u=c.a.createContext();function l(){return Math.random()<.25?2:0}var d=function(e){var t=e.children,n=Object(r.useState)(0),c=Object(a.a)(n,2),o=c[0],i=c[1],d=Object(r.useState)(!1),f=Object(a.a)(d,2),j=f[0],v=f[1],b=[[l(),l(),l(),l()],[l(),l(),l(),l()],[l(),l(),l(),l()],[l(),l(),l(),l()]],h=Object(r.useState)(b),O=Object(a.a)(h,2),m=O[0],x=O[1];return Object(r.useEffect)((function(){if(j){var e=parseInt(localStorage.getItem("2048maxScore"));e||localStorage.setItem("2048maxScore",o),e<o&&localStorage.setItem("2048maxScore",o),console.log(e)}}),[j]),Object(s.jsx)(u.Provider,{value:{gameField:m,setGameField:x,score:o,setScore:i,gameOver:j,setGameOver:v,initialField:b},children:t})},f=n(8),j=(n(6),function(){var e=Object(r.useContext)(u);function t(t){return e.gameField[t].map((function(e,n){return Object(s.jsx)("div",{className:"cell cellValue".concat(e),children:e},"row".concat(t,"_").concat(n))}))}return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"containerGame",children:Object(s.jsxs)("div",{className:"mt-5 gameGrid",children:[Object(s.jsx)("div",{children:t(0)}),Object(s.jsx)("div",{children:t(1)}),Object(s.jsx)("div",{children:t(2)}),Object(s.jsx)("div",{children:t(3)})]})})})}),v=function(){var e=Object(r.useContext)(u),t=localStorage.getItem("2048maxScore");return Object(r.useEffect)((function(){var t=parseInt(localStorage.getItem("2048maxScore"));t||localStorage.setItem("2048maxScore",e.score),t<e.score&&localStorage.setItem("2048maxScore",e.score)}),[e.score]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:["current ",Object(s.jsx)("span",{className:"badge bg-light text-dark",children:e.score})]}),Object(s.jsxs)("h2",{children:["max ",Object(s.jsx)("span",{className:"badge bg-light text-dark",children:t})]})]})},b=function(){var e=Object(r.useContext)(u);return e.gameOver?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Game Over"}),Object(s.jsx)("button",{className:"btn btn-outline-warning btn-lg m-2",onClick:function(){e.setGameField(e.initialField),e.setScore(0),e.setGameOver(!1)},children:"reset!"})]}):null};function h(e,t){return e===t&&0!==t}function O(e){for(var t=!1;!t;){var n=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());if(0===e[n][r]){e[n][r]=2,t=!0;break}}return e}var m=[!0,!0,!0,!0],x=function(e){var t=Object(r.useContext)(u),n=null,c=null;function o(e){var t=function(e){return e.touches||e.originalEvent.touches}(e)[0];n=t.clientX,c=t.clientY}function i(e){if(n&&c){var t=e.touches[0].clientX,r=e.touches[0].clientY,o=n-t,i=c-r;Math.abs(o)>Math.abs(i)?o>0?window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowLeft"})):window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight"})):i>0?window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowUp"})):window.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowDown"})),n=null,c=null}}var a=Object(r.useRef)();return Object(r.useEffect)((function(){window.addEventListener("keydown",(function(e){!function(e){var n=Object(f.a)(t.gameField);if("ArrowUp"===e.key){for(var r=0,c=function(e){for(var c=0;c<2;c++)0===n[0][e]&&0!==n[1][e]&&(n[0][e]=n[1][e],n[1][e]=0,r+=1),0===n[1][e]&&0!==n[2][e]&&(n[1][e]=n[2][e],n[2][e]=0,r+=1),0===n[2][e]&&0!==n[3][e]&&(n[2][e]=n[3][e],n[3][e]=0,r+=1);h(n[0][e],n[1][e])&&(n[0][e]+=n[1][e],n[1][e]=0,r+=1,t.setScore((function(t){return t+n[0][e]}))),h(n[1][e],n[2][e])&&(n[1][e]+=n[2][e],n[2][e]=0,r+=1,t.setScore((function(t){return t+n[1][e]}))),h(n[2][e],n[3][e])&&(n[2][e]+=n[3][e],n[3][e]=0,r+=1,t.setScore((function(t){return t+n[2][e]})));for(var o=0;o<2;o++)0===n[0][e]&&0!==n[1][e]&&(n[0][e]=n[1][e],n[1][e]=0,r+=1),0===n[1][e]&&0!==n[2][e]&&(n[1][e]=n[2][e],n[2][e]=0,r+=1),0===n[2][e]&&0!==n[3][e]&&(n[2][e]=n[3][e],n[3][e]=0,r+=1)},o=0;o<4;o++)c(o);r>0&&(O(n),m.fill(!0)),0===r&&(m[0]=!1),r=0}if("ArrowDown"===e.key){for(var i=0,a=function(e){for(var r=0;r<2;r++)0===n[3][e]&&0!==n[2][e]&&(n[3][e]=n[2][e],n[2][e]=0,i+=1),0===n[2][e]&&0!==n[1][e]&&(n[2][e]=n[1][e],n[1][e]=0,i+=1),0===n[1][e]&&0!==n[0][e]&&(n[1][e]=n[0][e],n[0][e]=0,i+=1);h(n[3][e],n[2][e])&&(n[3][e]+=n[2][e],n[2][e]=0,i+=1,t.setScore((function(t){return t+n[3][e]}))),h(n[2][e],n[1][e])&&(n[2][e]+=n[1][e],n[1][e]=0,i+=1,t.setScore((function(t){return t+n[2][e]}))),h(n[1][e],n[0][e])&&(n[1][e]+=n[0][e],n[0][e]=0,i+=1,t.setScore((function(t){return t+n[1][e]})));for(var c=0;c<2;c++)0===n[3][e]&&0!==n[2][e]&&(n[3][e]=n[2][e],n[2][e]=0,i+=1),0===n[2][e]&&0!==n[1][e]&&(n[2][e]=n[1][e],n[1][e]=0,i+=1),0===n[1][e]&&0!==n[0][e]&&(n[1][e]=n[0][e],n[0][e]=0,i+=1)},s=0;s<4;s++)a(s);i>0&&(O(n),m.fill(!0)),0===i&&(m[1]=!1),i=0}if("ArrowLeft"===e.key){for(var u=0,l=function(e){for(var r=0;r<2;r++)0===n[e][0]&&0!==n[e][1]&&(n[e][0]=n[e][1],n[e][1]=0,u+=1),0===n[e][1]&&0!==n[e][2]&&(n[e][1]=n[e][2],n[e][2]=0,u+=1),0===n[e][2]&&0!==n[e][3]&&(n[e][2]=n[e][3],n[e][3]=0,u+=1);h(n[e][0],n[e][1])&&(n[e][0]+=n[e][1],n[e][1]=0,u+=1,t.setScore((function(t){return t+n[e][0]}))),h(n[e][1],n[e][2])&&(n[e][1]+=n[e][2],n[e][2]=0,u+=1,t.setScore((function(t){return t+n[e][1]}))),h(n[e][2],n[e][3])&&(n[e][2]+=n[e][3],n[e][3]=0,u+=1,t.setScore((function(t){return t+n[e][2]})));for(var c=0;c<2;c++)0===n[e][0]&&0!==n[e][1]&&(n[e][0]=n[e][1],n[e][1]=0,u+=1),0===n[e][1]&&0!==n[e][2]&&(n[e][1]=n[e][2],n[e][2]=0,u+=1),0===n[e][2]&&0!==n[e][3]&&(n[e][2]=n[e][3],n[e][3]=0,u+=1)},d=0;d<4;d++)l(d);u>0&&(O(n),m.fill(!0)),0===u&&(m[2]=!1),u=0}if("ArrowRight"===e.key){for(var j=0,v=function(e){for(var r=0;r<2;r++)0===n[e][3]&&0!==n[e][2]&&(n[e][3]=n[e][2],n[e][2]=0,j+=1),0===n[e][2]&&0!==n[e][1]&&(n[e][2]=n[e][1],n[e][1]=0,j+=1),0===n[e][1]&&0!==n[e][0]&&(n[e][1]=n[e][0],n[e][0]=0,j+=1);h(n[e][3],n[e][2])&&(n[e][3]+=n[e][2],n[e][2]=0,j+=1,t.setScore((function(t){return t+n[e][3]}))),h(n[e][2],n[e][1])&&(n[e][2]+=n[e][1],n[e][1]=0,j+=1,t.setScore((function(t){return t+n[e][2]}))),h(n[e][1],n[e][0])&&(n[e][1]+=n[e][0],n[e][0]=0,j+=1,t.setScore((function(t){return t+n[e][1]})));for(var c=0;c<2;c++)0===n[e][3]&&0!==n[e][2]&&(n[e][3]=n[e][2],n[e][2]=0,j+=1),0===n[e][2]&&0!==n[e][1]&&(n[e][2]=n[e][1],n[e][1]=0,j+=1),0===n[e][1]&&0!==n[e][0]&&(n[e][1]=n[e][0],n[e][0]=0,j+=1)},b=0;b<4;b++)v(b);j>0&&(O(n),m.fill(!0)),0===j&&(m[3]=!1),j=0}m.every((function(e){return!e}))&&t.setGameOver(!0),t.setGameField(n)}(e)})),setTimeout((function(){a.current.addEventListener("touchstart",o,!1),a.current.addEventListener("touchmove",i,!1)}),0)}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"game"}),Object(s.jsx)(v,{}),Object(s.jsx)("div",{ref:a,children:Object(s.jsx)(j,{})}),Object(s.jsx)(b,{})]})};var g=function(){return Object(s.jsx)(d,{children:Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(x,{})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),w()},6:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.1b20aee1.chunk.js.map